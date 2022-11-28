import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../Context/UserContext';

const Myproducts = () => {
    const [products, setProducts] = useState([])
    const { user } = useContext(AuthContext)
    useEffect(() => {
        fetch(`https://assignment-12-server-delta.vercel.app/myproducts?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setProducts(data)
            })
    }, [user?.email])
    const handleDelete = id => {
        const agree = window.confirm('Are you sure you want to delete this product?')
        if (agree) {
            fetch(`https://assignment-12-server-delta.vercel.app/products/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        toast.success('Account Delete Successful')
                    }
                })
        }
    }
    const handleAdvertise = product => {
        fetch(`https://assignment-12-server-delta.vercel.app/advertise/${product._id}`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    toast.success('Product Advertise Successful')
                }
            })
    }
    return (
        <div className='grid gap-8 w-12/10 mx-auto my-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {/* <h1>product found {products.length}</h1> */}
            {
                products.map(product => <div key={product._id} class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">

                    <div className='flex justify-center pt-5'>
                        <img class="rounded-t-lg" src={product.productURL} alt="" />
                    </div>

                    <div class="p-5">

                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{product.productName}</h5>

                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Price - {product.resalePrice}</p>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Sales Status - Available</p>
                        <div className='flex justify-between'>
                            <button onClick={() => handleAdvertise(product)} className="btn btn-sm btn-active btn-primary">Advertised</button>
                            <button onClick={() => handleDelete(product._id)} className="btn btn-sm btn-active">Delete</button>
                        </div>
                    </div>
                </div>
                )
            }
        </div>
    );
};

export default Myproducts;