import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import AuthContext from '../../context/AuthContext/AuthContext';
import jonIcon from '../../assets/jobs-logo.png'


const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);
    const links = <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/myApplications'}>MY Applications</NavLink></li>
        <li><NavLink to={'/addJob'}>Add Job</NavLink></li>
        <li><NavLink to={'/myPostedJobs'}>My Posted Jobs</NavLink></li>
    </>

    const signOut = () => {
        logOut()
            .then(() => {
                console.log('successful sign Out')
            })
            .catch(error => {
                console.log('failed to signOut', error)
            })
    }

    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <div className='w-12 cursor-pointer'>
                        <img src={jonIcon} alt="" />
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ? <button onClick={signOut} className='btn'>LogOut</button> : <>
                            <Link className='btn' to={'/register'}>Register</Link>
                            <Link className='btn' to={'login'}>login</Link>
                        </>

                    }

                </div>
            </div>
        </div>
    );
};

export default Navbar;