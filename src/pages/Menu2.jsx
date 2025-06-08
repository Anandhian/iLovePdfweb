import React, { useState } from 'react';
import { MdKeyboardArrowLeft, MdClose } from "react-icons/md";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

import blueheart from '../assets/blueheart.jpeg';
import darkblueheart from '../assets/darkblueheart.jpeg';
import greenHeart from '../assets/greenHeart.jpeg';
import circleimage from '../assets/circleimage.jpeg';
import business from '../assets/businessimages.jpeg';
import desktop from '../assets/desktop.jpeg';
import mobileapp from '../assets/mobileapp.jpeg';
import pricing from '../assets/pricing.jpeg';
import security from '../assets/security.jpeg';
import feauters from '../assets/feauters.jpeg';
import aboutus from '../assets/aboutus.jpeg';
import { Link } from 'react-router-dom';

const Menu2 = () => {
  const [showProducts, setShowProducts] = useState(true);
  const [showSolutions, setShowSolutions] = useState(true);
  const [showLinks, setShowLinks] = useState(true);
  const [isMobileMenu, setIsMobileMenu] = useState(true); // Simulating open state

  const productItems = [
    { img: blueheart, title: 'ILOVELMG', desc: 'Effortless image editing' },
    { img: darkblueheart, title: 'ILOVESIGN', desc: 'e-Signing made simple' },
    { img: greenHeart, title: 'ILOVEAPI', desc: 'Document automation for Developers' },
  ];

  const appItems = [
    { img: desktop, title: 'Desktop App', desc: 'Available for Mac and Windows' },
    { img: mobileapp, title: 'Mobile App', desc: 'Available for iOS and Android' },
  ];

  const menuLinks = [
    { img: pricing, title: 'Pricing' },
    { img: security, title: 'Security' },
    { img: feauters, title: 'Features' },
    { img: aboutus, title: 'About Us' },
  ];

  const footerLinks = ['Help', 'Languages'];

  return (
    <div className="w-full text-gray-800 px-4 py-6">
      
      <div className="flex flex-col gap-6 lg:hidden">
        {/* Products */}
        <div>
          <div
            onClick={() => setShowProducts(!showProducts)}
            className="flex justify-between items-center cursor-pointer"
          >
            <h1 className="text-base font-semibold">Other Products</h1>
            {showProducts ? <FaChevronUp /> : <FaChevronDown />}
          </div>
          {showProducts && (
            <div className="mt-2 flex flex-col gap-3">
              {productItems.map((item, index) => (
                <div key={index} className="flex gap-3 items-start">
                  <img src={item.img} alt={item.title} className="w-8 h-8 object-contain" />
                  <div>
                    <h2 className="text-sm font-bold">{item.title}</h2>
                    <p className="text-xs text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
              <div className="flex items-center border border-gray-400 p-2 rounded">
                <img src={circleimage} alt="Integration" className="w-6 h-6 object-contain mr-3" />
                <div>
                  <p className="text-sm font-semibold">Integration</p>
                  <p className="text-xs text-gray-600">Zapier, Make, WordPress</p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Solutions */}
        <div>
          <div
            onClick={() => setShowSolutions(!showSolutions)}
            className="flex justify-between items-center cursor-pointer"
          >
            <h1 className="text-base font-semibold">Solutions</h1>
            {showSolutions ? <FaChevronUp /> : <FaChevronDown />}
          </div>
          {showSolutions && (
            <div className="mt-2 flex flex-col gap-3">
              <div className="flex gap-3 items-start">
                <img src={business} alt="Business" className="w-16 h-16 object-contain" />
                <div>
                  <h2 className="text-md font-bold">Business</h2>
                  <p className="text-sm text-gray-500">
                    Streamline PDF editing and workflows for efficient document management.
                  </p>
                </div>
              </div>
              {appItems.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <img src={item.img} alt={item.title} className="w-6 h-6 object-contain" />
                  <div>
                    <h1 className="text-sm font-semibold">{item.title}</h1>
                    <p className="text-xs text-gray-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Menu Links */}
        <div>
          <div
            onClick={() => setShowLinks(!showLinks)}
            className="flex justify-between items-center cursor-pointer"
          >
            <h1 className="text-base font-semibold">Links</h1>
            {showLinks ? <FaChevronUp /> : <FaChevronDown />}
          </div>
          {showLinks && (
            <div className="mt-2 flex flex-col gap-3">
              {menuLinks.map((link, index) => (
                <div key={index} className="flex items-center gap-3">
                  <img src={link.img} alt={link.title} className="w-5 h-5 object-contain" />
                  <p className="text-sm">{link.title}</p>
                </div>
              ))}
              <hr className="border-gray-300 my-3" />
              {footerLinks.map((text, index) => (
                <div key={index} className="flex items-center gap-2">
                  <MdKeyboardArrowLeft />
                  <p className="text-sm">{text}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className=' flex flex-col mt-9 items-center justify-center gap-6'>
        <Link to="/login" className="border-3  border-red-500 py-2 px-24 font-bold text-red-500">
          Login
        </Link>
        <Link to='/register'>
          <button className="border-3  border-red-500 bg-red-600 text-white rounded py-2 px-24 font-bold text-red-500">Sign up</button>
        </Link>
      </div>


    
    </div>
  );
};

export default Menu2;


