import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import './Review.css'

import { Pagination, Navigation } from "swiper";

const Review = () => {
    return (
        <div className='container px-6 py-8 mx-auto gird grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            <h1 className='text-3xl pb-8 font-bold text-center md:text-left'>Customer Reviews</h1>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                slidesPerGroup={1}
                loop={true}
                loopFillGroupWithBlank={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >

                <SwiperSlide className='flex justify-center'>
                    <div className="w-full max-w-md px-8 py-4 mt-16 bg-white rounded-lg shadow-lg dark:bg-gray-800">
                        <div className="flex justify-center -mt-16 md:justify-end">
                            <img className="object-cover w-20 h-20 border-2 border-blue-500 rounded-full dark:border-blue-400" alt="Testimonial avatar" src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=76&q=80" />
                        </div>

                        <h2 className="mt-2 text-2xl font-semibold text-gray-800 dark:text-white md:mt-0 md:text-3xl">Student</h2>

                        <p className="mt-2 text-gray-600 dark:text-gray-200">I did not expect to get such a service in a pandemic situation. Very good initiative. If the situation gets better, more services will come. Thanks to you!</p>

                        <div className="flex justify-end mt-4">
                            <p className="text-xl font-medium text-blue-600 dark:text-blue-300">Saifuzzaman shuvo</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='flex justify-center'>
                    <div className="w-full max-w-md px-8 py-4 mt-16 bg-white rounded-lg shadow-lg dark:bg-gray-800">
                        <div className="flex justify-center -mt-16 md:justify-end">
                            <img className="object-cover w-20 h-20 border-2 border-blue-500 rounded-full dark:border-blue-400" alt="Testimonial avatar" src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=76&q=80" />
                        </div>

                        <h2 className="mt-2 text-2xl font-semibold text-gray-800 dark:text-white md:mt-0 md:text-3xl">Businessman</h2>

                        <p className="mt-2 text-gray-600 dark:text-gray-200">Product quality is good. Even though in a critical situation in COVID 19 pandemic book house delivers product very quickly.</p>

                        <div className="flex justify-end mt-4">
                            <p className="text-xl font-medium text-blue-600 dark:text-blue-300">Najib Hasan</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='flex justify-center'>
                    <div className="w-full max-w-md px-8 py-4 mt-16 bg-white rounded-lg shadow-lg dark:bg-gray-800">
                        <div className="flex justify-center -mt-16 md:justify-end">
                            <img className="object-cover w-20 h-20 border-2 border-blue-500 rounded-full dark:border-blue-400" alt="Testimonial avatar" src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=76&q=80" />
                        </div>

                        <h2 className="mt-2 text-2xl font-semibold text-gray-800 dark:text-white md:mt-0 md:text-3xl">Student</h2>

                        <p className="mt-2 text-gray-600 dark:text-gray-200">I Ordered Many Times from Here & Every time I Got Delivery on Time but If the Delivery Boy Delivers DOOR STEP. That Would Be Perfect.???</p>

                        <div className="flex justify-end mt-4">
                            <p className="text-xl font-medium text-blue-600 dark:text-blue-300">Md Abtahi Aslam Samin</p>
                        </div>
                    </div>
                </SwiperSlide>


            </Swiper>
        </div>
    );
};

export default Review;