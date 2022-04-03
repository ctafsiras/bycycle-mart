import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useReviews from '../../hooks/useReviews';
import Review from '../Review/Review';

const Home = () => {
    const reviews=useReviews()
    return (
        <div>
            <div className='grid grid-cols-2 mt-4 items-center'>
                <div >
                    <img src="https://m.media-amazon.com/images/I/81-TUcWtdiL._SL1500_.jpg" alt="" />
                </div>
                <div className='mt-4'>
                    <h2 className='text-blue-700 text-6xl'>ByCycle Mart</h2>
                    <p className='mt-4 text-lg'>This most precius thing of your body is your heart. And keep  your heart so pure by using ByCylces</p>
                    <button className='px-4 py-2 mt-3 rounded-lg bg-green-300'>Buy Now</button>
                </div>
            </div>

            <div className='mt-5'>
                <h2 className='text-blue-900 text-5xl'>Reviews</h2>
                <div className='grid grid-cols-3'>
                    {
                        reviews.map(review=>review.id<4&&<Review key={review.id} review={review}></Review>)
                    }

                </div>
                <div>
                    <Link to='/reviews'><button className='px-4 py-2 my-3 rounded-lg bg-green-300'>See all Reviews</button></Link>
                </div>

            </div>
        </div>
    );
};

export default Home;