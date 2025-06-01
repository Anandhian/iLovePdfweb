import React from 'react';
import playstore from '../assets/playstore.jpeg';
import applestore from '../assets/applestore.jpeg';

const Home6 = () => {
  return (
    <div className="cursor-pointer px-6 sm:px-10 lg:px-32 py-10 mt-7">
      {/* Links Section */}
      <div className="flex flex-col sm:flex-row flex-wrap justify-between gap-10">
        {/* iLovePDF */}
        <div className="flex flex-col gap-3 min-w-[120px] text-gray-800 [&>p:hover]:text-blue-600 [&>p]:cursor-pointer">
          <h1 className="font-bold text-red-500 hover:text-blue-600">iLovePDF</h1>
          <p>Home</p>
          <p>Pricing</p>
          <p>Security</p>
          <p>Tools</p>
          <p>FAQ</p>
        </div>

        {/* PRODUCT */}
        <div className="flex flex-col gap-3 min-w-[120px] text-gray-800 [&>p:hover]:text-blue-600 [&>p]:cursor-pointer">
          <h1 className="font-bold text-red-500 hover:text-blue-600">PRODUCT</h1>
          <p>ILOVEPDF Desktop</p>
          <p>ILOVEPDF Mobile</p>
          <p>Developers</p>
          <p>Features</p>
          <p>Iloveimg</p>
        </div>

        {/* SOLUTIONS */}
        <div className="flex flex-col gap-3 min-w-[120px] text-gray-800 [&>p:hover]:text-blue-600 [&>p]:cursor-pointer">
          <h1 className="font-bold text-red-500 hover:text-blue-600">SOLUTIONS</h1>
          <p>Business</p>
          <p>Education</p>
        </div>

        {/* COMPANY */}
        <div className="flex flex-col gap-3 min-w-[120px] text-gray-800 [&>p:hover]:text-blue-600 [&>p]:cursor-pointer">
          <h1 className="font-bold text-red-500 hover:text-blue-600">COMPANY</h1>
          <p>Our Story</p>
          <p>Blog</p>
          <p>Press</p>
          <p>Legal & Privacy</p>
          <p>Contact</p>
        </div>
      </div>

      {/* Store Icons Section */}
      <div className="flex justify-center sm:justify-end gap-4 mt-10">
        <img src={playstore} alt="Play Store" className="w-32" />
        <img src={applestore} alt="Apple Store" className="w-32" />
      </div>
    </div>
  );
};

export default Home6;

