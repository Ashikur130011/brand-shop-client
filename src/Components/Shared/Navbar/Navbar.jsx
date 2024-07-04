import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';

const Navbar = () => {

    const {user, logOut} = useContext(AuthContext)
        console.log(user)

    //log out 
    const handleLogout = () => {
        logOut()
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Log-Out Successfully",
            showConfirmButton: false,
            timer: 1500
          });
        
    }

    const navLinks = <>
        <li><NavLink to="/" className="mx-2 text-base">Home</NavLink></li>
        <li><NavLink to="/products" className="mx-2 text-base">Fetaured Products</NavLink></li>
        <li><NavLink to="/about" className="mx-2 text-base">About</NavLink></li>
        <li><NavLink to="/contact" className="mx-2 text-base">Contact</NavLink></li>
    </>
    return (
        <div className="navbar bg-primary text-primary-content">
            <div className="navbar-start">
                <div className="dropdown ">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content text-white bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {navLinks}
                    </ul>
                </div>
                <a href='/' className="btn btn-ghost text-xl font-serif"><span className='text-bold font-serif text-red-700'>Brand</span> Shop</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <>
                    <p className='hidden md:block'>{user.email}</p>
                    <button onClick={handleLogout} className="btn btn-error mx-2">Log Out</button>
                    </>:
                    <NavLink className='mx-2 btn btn-success' to='/login'>Login</NavLink>
                }
            </div>
        </div>
    );
};

export default Navbar;