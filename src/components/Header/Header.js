import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav className='mt-3'>
                <Link className='text-xl font-semibold border m-1 p-1 hover:bg-gray-200' to='/'>Home</Link>
                <Link className='text-xl font-semibold border m-1 p-1 hover:bg-gray-200' to='/reviews'>Reviews</Link>
                <Link className='text-xl font-semibold border m-1 p-1 hover:bg-gray-200' to='/'>Dashboard</Link>
                <Link className='text-xl font-semibold border m-1 p-1 hover:bg-gray-200' to='/'>Blogs</Link>
            </nav>
        </div>
    );
};

export default Header;