import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/UserContext';

const AddProduct = () => {
    const { user } = useContext(AuthContext)
    const navigate = useNavigate();
    const handleProduct = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const productName = form.productName.value;
        const phone = form.phone.value;
        const orginalPrice = form.orginalPrice.value;
        const resalePrice = form.resalePrice.value;
        const productURL = form.productURL.value;
        const time = form.time.value;
        const location = form.location.value;
        const yearOfUse = form.yearOfUse.value;
        const type = form.type.value;
        const category = form.category.value;
        const description = form.description.value;
        const product = { name, email, productName, phone, orginalPrice, resalePrice, productURL, time, location, yearOfUse, type, category, description }
        console.log(product)
        fetch('https://assignment-12-server-delta.vercel.app/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                form.reset();
                if (data.insertedId) {
                    toast.success('Product Added Successfully')
                    navigate('/dashboard/myproducts')
                }
            })
    }
    return (
        <>
            <section class="w-full max-w-2xl my-8 px-6 py-4 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
                <h2 class="text-3xl font-semibold text-center text-gray-800 dark:text-white">Add New Product</h2>
                <form class="mt-6 " onSubmit={handleProduct}>
                    <div class="items-center -mx-2 md:flex">
                        <div class="w-full mx-2">
                            <label class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">Name</label>

                            <input name='name' defaultValue={user?.displayName} class="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" type="text" />
                        </div>

                        <div class="w-full mx-2 mt-4 md:mt-0">
                            <label class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">E-mail</label>

                            <input name='email' defaultValue={user?.email} class="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" type="email" />
                        </div>
                    </div>
                    <div class="items-center -mx-2 md:flex">
                        <div class="w-full mx-2">
                            <label class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">Product Name</label>

                            <input name='productName' class="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" type="text" />
                        </div>

                        <div class="w-full mx-2 mt-4 md:mt-0">
                            <label class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">Phone</label>

                            <input name='phone' class="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" type="number" />
                        </div>
                    </div>
                    <div class="items-center -mx-2 md:flex">
                        <div class="w-full mx-2">
                            <label class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">Original Price</label>

                            <input name='orginalPrice' class="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" type="number" />
                        </div>

                        <div class="w-full mx-2 mt-4 md:mt-0">
                            <label class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">Resale Price</label>

                            <input name='resalePrice' class="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" type="number" />
                        </div>
                    </div>
                    <div class="items-center -mx-2 md:flex">
                        <div class="w-full mx-2">
                            <label class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">Product URL</label>

                            <input name='productURL' class="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" type="text" />
                        </div>

                        <div class="w-full mx-2 mt-4 md:mt-0">
                            <label class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">Time</label>

                            <input name='time' class="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" type="text" />
                        </div>
                    </div>
                    <div class="items-center -mx-2 md:flex">
                        <div class="w-full mx-2">
                            <label class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">Location</label>

                            <input name='location' class="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" type="text" />
                        </div>

                        <div class="w-full mx-2 mt-4 md:mt-0">
                            <label class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">Years of Use</label>

                            <input name='yearOfUse' class="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" type="text" />
                        </div>
                    </div>

                    <div class="items-center -mx-2 md:flex">
                        <div class="w-full mx-2">
                            <label class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">Condition Type</label>

                            <select name='type' class="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" type="text" >
                                <option value="Excellent">Excellent</option>
                                <option value="Good">Good</option>
                                <option value="Fair">Fair</option>
                            </select>
                        </div>

                        <div class="w-full mx-2 mt-4 md:mt-0">
                            <label class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">Category</label>

                            <select name='category' class="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" type="text" >
                                <option value="Historical">Historical</option>
                                <option value="Sciencefiction">Science Fiction</option>
                                <option value="Novel">Novel</option>
                            </select>
                        </div>
                    </div>

                    <div class="w-full mt-4">
                        <label class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">Description</label>

                        <textarea name='description' class="block w-full h-40 px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"></textarea>
                    </div>

                    <div class="flex justify-center mt-6">
                        <button type='submit' class="px-4 py-2 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Add Product
                        </button>
                    </div>
                </form>
            </section>
        </>
    );
};

export default AddProduct;