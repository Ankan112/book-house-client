import React, { useEffect, useState } from 'react';

const AdvertiseProduct = () => {
    const [advertiseProduct, setAdvertiseProduct] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/advertise`)
            .then(res => res.json())
            .then(data => setAdvertiseProduct(data))
    }, [])
    return (
        <div className='container px-6 py-8 mx-auto'>
            <h1 className='text-3xl font-bold text-center md:text-left'>Advertise Book {advertiseProduct.length}</h1>
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    advertiseProduct.map(product => <div key={product._id} className="card mt-6 pt-6 shadow-xl">
                        <figure><img src={product.productURL} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                {product.productName}
                                <div className="badge badge-secondary">Ads</div>
                            </h2>
                            <p>{product.description}</p>
                            {/* <div className="card-actions justify-end">
                        <div className="badge badge-outline">Fashion</div> 
                        <div className="badge badge-outline">Products</div>
                      </div> */}
                        </div>
                    </div>)
                }
            </div>

        </div>
    );
};

export default AdvertiseProduct;