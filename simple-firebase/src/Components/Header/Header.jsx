import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='no-underline  flex gap-5 text-indigo-800 my-5'>
            <Link to="/">Home</Link>
            <Link to="/login" >Login</Link>
            <Link>Contact</Link>
        </div>
    );
};

export default Header;