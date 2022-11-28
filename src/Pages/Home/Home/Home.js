import React, { useEffect, useState } from 'react';
import AdvertiseProduct from '../../AdvertiseProduct/AdvertiseProduct';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import Review from '../Review/Review';

const Home = () => {
    const [advertiseProduct, setAdvertiseProduct] = useState([])
    useEffect(() => {
        fetch(`https://assignment-12-server-delta.vercel.app/advertise`)
            .then(res => res.json())
            .then(data => setAdvertiseProduct(data))
    }, [])
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            {
                advertiseProduct.length > 0 &&
                <AdvertiseProduct></AdvertiseProduct>
            }
            <Review></Review>
        </div>
    );
};

export default Home;