import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Components/Header/Header';

const Main = () => {
    return (
        <div className='absolute top-[50%] left-[45%]'>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;