import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../../../img/category1.jpg';
import img2 from '../../../img/category2.jpg';
import img3 from '../../../img/category3.jpg';

const Category = () => {
    return (
        <div className='container px-6 py-16 mx-auto'>
            <h1 className='text-3xl font-bold text-center md:text-left'>Select Your Category</h1>
            <div className='grid gap-5 py-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                <div><Link to='/category/Historical'><img src={img1} alt="" />
                    <h3 className="text-lg font-semibold py-2">Historical Books</h3>
                </Link></div>
                <div><Link to='/category/Novel'><img src={img2} alt="" />
                    <h3 className="text-lg font-semibold py-2">Novel Books</h3>
                </Link></div>
                <div><Link to='/category/Sciencefiction'><img src={img3} alt="" />
                    <h3 className="text-lg font-semibold py-2">Science Fiction Books</h3>
                </Link></div>
            </div>
        </div>
    );
};

export default Category;