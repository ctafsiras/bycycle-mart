import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div className='mt-5 p-4 px-10 border text-left'>
            <h2 className='font-semibold text-2xl'>1. What is Context API?</h2>
            <p className='text-xl'>Context API is a feature of React which helps to access data from anywhere of the app. It is an alternative way of props drilling. In few cases Context API is very useful instead of props drilling. </p>
            </div>
            <div className='mt-5 p-4 px-10 border text-left'>
            <h2 className='font-semibold text-2xl'>2. What is Semantic Tag?</h2>
            <p className='text-xl'>At the first glance of a Semantic tag, we can easily identify the type of an element. It is useful for developer and browser both. Before that it was very hard to identify an element, and the reason for which it is being used.</p>
            </div>
            <div className='mt-5 p-4 px-10 border text-left'>
            <h2 className='font-semibold text-2xl'>3. Inline vs Inline-Block vs Block.</h2>
            <p className='text-xl'><span className='font-semibold'>Inline:</span> Height and width properties of an inline element will not have any effect. <br /><span className='font-semibold'>Inline-Block:</span> It almost like an inline element, act like inline but here in, we can assign Height and width properties.<br /><span className='font-semibold'>Block:</span> It have the full power of block, it can take full width, occupy whole space and as well as takes height and width.</p>
            </div>

        </div>
    );
};

export default Blogs;