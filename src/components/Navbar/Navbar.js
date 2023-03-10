import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.png";
import Button from "../Button";
import NavLinks from "./NavLinks";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-white">
      <div className="flex items-center font-medium justify-around">
        <div className="z-50 p-5 md:w-auto w-full flex justify-between">
          <img src={Logo} alt="logo" className="md:cursor-pointer h-9" />
          <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
            <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
          </div>
        </div>
        <ul className="md:flex hidden uppercase items-center gap-8 font-[Poppins]">
          <li>
            <Link to="/" className="py-7 px-3 inline-block">
              Home
            </Link>
          </li>
          <NavLinks />
        </ul>
        <div className="md:block hidden">
          <Button />
        </div>
        {/* Mobile nav */}
        <ul>
        <div className='py-5 flex flex-col items-between space-y-9 bg-white px-8 mx-auto text-black'>
            <nav className='flex items-center justify-between'>
            
          
          <button
                    onClick={() => {
                        document.querySelector('.mobile-menu').classList.toggle('hidden');
                    }}
                    className='md:hidden flex items-center'
                >
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-6 w-6'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                        strokeWidth={2}
                    >
                    <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M4 6h16M4 12h16m-7 6h7'
                        />
                    </svg>
                </button>

            </nav>
            <div className='mobile-menu hidden md:hidden flex flex-col items-end space-y-2 px-9 pt-3 pb-3 text-sm'>
                  <NavLinks />
                </div>
            </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;