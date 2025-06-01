import React from 'react';
import iso from '../assets/isobg.png';
import secure from '../assets/securebg.png';
import pdfAccociation from '../assets/pdfbg.png';

const Home4 = () => {
  return (
    <div className="bg-white text-center px-4 py-16 sm:px-8 md:px-16 lg:px-28 mt-24">
      {/* Heading Section */}
      <div className="flex flex-col items-center gap-6 max-w-3xl mx-auto">
        <h1 className="font-bold text-2xl sm:text-3xl lg:text-4xl">
          The PDF software trusted by millions of users
        </h1>
        <p className="text-gray-600 text-base sm:text-lg">
          iLovePDF is your number one web app for editing PDF with ease. Enjoy all the tools you need
          to work efficiently with your digital documents while keeping your data safe and secure.
        </p>
      </div>

      {/* Logos Section */}
   <div className="mt-12 grid grid-cols-2 sm:flex sm:flex-wrap justify-center items-center gap-5 bg-white">
  <img
    src={iso}
    alt="ISO Certified"
    className="h-20 w-28 sm:h-24 object-contain bg-transparent"
  />
  <img
    src={secure}
    alt="Secure"
    className="h-20 w-28 sm:h-24 object-contain bg-transparent"
  />
  <img
    src={pdfAccociation}
    alt="PDF Association"
    className="h-20 w-28 sm:h-24 object-contain bg-transparent col-span-2 sm:col-span-1 mx-auto sm:mx-0"
  />
</div>


    </div>
  );
};

export default Home4;
