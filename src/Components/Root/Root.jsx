import React from 'react';
import { Outlet } from 'react-router-dom';
import Home from '../Home/Home';
import Navbar from '../Shared/Navbar/Navbar';
import Footer from '../Shared/Footer/Footer';
import Header from '../Home/Header/Header';

const Root = () => {
    return (
        <div>
            <Navbar/>
            
            <Outlet/>
            <Footer/>
            
        </div>
    );
};

export default Root;