import React from 'react';

const Review = ({ review }) => {
    const { name, description, img, rating } = review;
    return (
        <div className='border p-5 m-5'>
            <div className='w-20 rounded-full mx-auto'><img className='w-fit rounded-full' src={img} alt="" /></div>
            <h3 className='text-3xl'>{name}</h3>
            <p className='font-light'>Ratings: {rating} out of 5</p>
            <p>{description}</p>
        </div>
    );
};

export default Review;