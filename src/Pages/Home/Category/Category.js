import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../../img/banner.jpg';

const Category = () => {
    return (
        <div className='container px-6 py-16 mx-auto'>
            <h1 className='text-3xl font-bold text-center md:text-left'>Select Your Category</h1>
            <div className='grid gap-5 py-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                <div><Link><img src={img} alt="" />
                    <h3 className="text-lg font-semibold py-2">Historical Book</h3>
                </Link></div>
                <div><Link><img src={img} alt="" />
                    <h3 className="text-lg font-semibold py-2">Historical Book</h3>
                </Link></div>
                <div><Link><img src={img} alt="" />
                    <h3 className="text-lg font-semibold py-2">Historical Book</h3>
                </Link></div>
            </div>
        </div>
    );
};

export default Category;