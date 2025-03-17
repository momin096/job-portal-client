import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../pages/shared/Navbar';
import Footer from '../pages/shared/Footer';

const MainLayout = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <header>
                <Navbar />
            </header>
            <main className='min-h-[calc(100vh-290px)]'>
                <Outlet />
            </main>

            <Footer />
        </div>
    );
};

export default MainLayout;