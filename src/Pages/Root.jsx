import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer'
const Root = () => {
    return (
        <div>
            <NavBar className="container mx-auto"></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;