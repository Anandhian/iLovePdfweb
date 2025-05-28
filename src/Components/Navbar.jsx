import React from 'react';
import { Link } from 'react-router-dom';
import image from '../assets/ilovepdf.svg';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Icon from '../pages/Icon';
import { MdArrowDropDown } from "react-icons/md";
import { MdArrowDropUp } from "react-icons/md";
import SideNavbar from '../pages/SideNavbar';
import Hover from './Hover';
import AllToolsHover from '../pages/AllToolsHover';
import DropdownWrapper from './DropDownWrapper';
import MenuHover from '../pages/MenuHover';


const Navbar = () => {
  return (
    <div className=' sticky top-0 z-50 flex cursor-pointer justify-between px-4 py-3 border border-white shadow-[0_2px_4px_rgba(0,0,0,0.4)] bg-white'>

      <div className='flex gap-9'>
        <div className='flex gap-4 items-center'>
          <div className='block lg:hidden'>
            <SideNavbar />
          </div>
          <Link to={"/"}>
            <img src={image} alt="altimage" className='w-28' />
          </Link>
        </div>

        <ul className='hidden lg:flex font-semibold justify-center items-center gap-12'>
          <li><Link to="/mergepdf">Merge PDF</Link></li>
          <li><Link to="/splitpdf">Split PDF</Link></li>
          <li><Link to="/compresspdf">Compress PDF</Link></li>

          {/* Dropdown with custom arrow */}
          <DropdownWrapper></DropdownWrapper>





          <li className="relative group">
            <div className="flex items-center gap-1 cursor-pointer">
              <span>All PDF Tools</span>
              <MdArrowDropDown />
            </div>

            {/* Arrow */}
            <div
              className="absolute top-full left-1/2 transform -translate-x-1/2 -translate-y-1/2
    w-0 h-0 border-l-6 border-r-6 border-b-6 border-l-transparent border-r-transparent border-b-white
    hidden group-hover:block z-50"
            />

            {/* Dropdown Box */}
            <div className="absolute top-full mt-4 left-1/2 transform -translate-x-1/2 z-50 w-max hidden group-hover:block transition-all duration-300">
              <div className="relative bg-white shadow-xl rounded-2xl pt-6 px-6 pb-6 max-w-7xl">
                {/* Arrow inside box */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <MdArrowDropUp className="text-white text-4xl drop-shadow" />
                </div>
                <AllToolsHover />
              </div>
            </div>
          </li>

        </ul>
      </div>

      {/* Visible on large screens only */}
      <div className='hidden lg:flex gap-6 font-semibold justify-center items-center'>
        <Login />
        <Signup />
        <div className="relative group">
          <Icon />

          {/* Dropdown Menu */}
          <div className="absolute top-full mt-2 w-[800px] right-0 hidden group-hover:block z-50 bg-white p-4 rounded-xl shadow-xl">
            <MenuHover />
          </div>
        </div>

      </div>

      {/* Visible only on small screens */}
      <div className='flex lg:hidden  justify-center items-center'>
        <Icon />
        

      </div>
    </div>
  );
};

export default Navbar;

