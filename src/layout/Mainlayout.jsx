import React from 'react';
import { Outlet } from 'react-router-dom';
import Navber from '../pages/Shared/Navber';
import Footer from '../pages/Shared/Footer';

const Mainlayout = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <Navber></Navber>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Mainlayout;