import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/UserContext';

const provider = new GoogleAuthProvider();

const Register = () => {
    const { googleSignIn, createUser, updateUserProfile } = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const url = `https://img.icons8.com/ios-glyphs/30/null/user--v1.png`
        const account = form.account.value;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const user = { account, name, email }
        // console.log(account, name, email, password, user)
        fetch('https://assignment-12-server-delta.vercel.app/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    toast.success('User Created Successfully')
                }
            })
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                handleUpdateUserProfile(name, url)
                navigate(from, { replace: true })
                form.reset();
            })
            .catch(err => console.error(err))
    }
    const handleUpdateUserProfile = (name, url) => {
        const profile = {
            displayName: name,
            photoURL: url
        }
        updateUserProfile(profile)
            .then(() => { })
            .catch(error => console.error(error))
    }
    const handleGoogle = () => {
        googleSignIn(provider)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(err => console.error(err))
    }
    return (
        <div className="w-full max-w-sm p-6 m-auto mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
            <h1 className="text-3xl font-semibold text-center text-gray-700 dark:text-white">Brand</h1>

            <form className="mt-6" onSubmit={handleRegister}>
                <div className="flex items-center pl-4 mb-4 rounded border border-gray-200 dark:border-gray-700">
                    <input defaultChecked id="bordered-radio-2" type="radio" value="buyer" name="account" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    <label htmlFor="bordered-radio-2" className="py-4 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">Buyer Account</label>
                </div>
                <div className="flex items-center pl-4 mb-4 rounded border border-gray-200 dark:border-gray-700">
                    <input id="bordered-radio-1" type="radio" value="seller" name="account" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    <label htmlFor="bordered-radio-1" className="py-4 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">Seller Account</label>
                </div>
                <div>
                    <label htmlFor="Name" className="block text-sm text-gray-800 dark:text-gray-200">Name</label>
                    <input type="name" name='name' className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                </div>
                <div className='mt-4'>
                    <label htmlFor="Email" className="block text-sm text-gray-800 dark:text-gray-200">Email</label>
                    <input type="email" name='email' className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                </div>

                <div className="mt-4">
                    <label htmlFor="password" className="block text-sm text-gray-800 dark:text-gray-200">Password</label>

                    <input type="password" name='password' className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                </div>

                <div className="mt-6">
                    <button type='submit' className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
                        Register
                    </button>
                </div>
            </form>

            <div className="flex items-center justify-between mt-4">
                <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/5"></span>

                <span className="text-xs text-center text-gray-500 uppercase dark:text-gray-400 hover:underline">
                    or Continue with Social Media
                </span>

                <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/5"></span>
            </div>

            <div className="flex items-center mt-6 -mx-2">
                <button onClick={handleGoogle} type="button" className="flex items-center justify-center w-full px-6 py-2 mx-2 text-sm font-medium text-white transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:bg-blue-400 focus:outline-none">
                    <svg className="w-4 h-4 mx-2 fill-current" viewBox="0 0 24 24">
                        <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z">
                        </path>
                    </svg>

                    <span className="hidden mx-2 sm:inline">Continue with Google</span>
                </button>

            </div>

            <p className="mt-8 text-xs font-light text-center text-gray-400"> Already have an account? <Link to='/login' className="font-medium text-gray-700 dark:text-gray-200 hover:underline">Login</Link></p>
        </div>
    );
};

export default Register;