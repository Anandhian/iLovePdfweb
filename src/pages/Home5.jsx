import React from 'react';
import home5 from '../assets/home5.jpeg';

const Home5 = () => {
  return (
    <div className="home5 w-full flex flex-col lg:flex-row background p-6 md:p-16 mt-12">
      {/* Text Section */}
      <div className="flex-1 flex flex-col justify-center gap-6">
        <h1 className="font-bold text-white text-2xl md:text-3xl lg:text-5xl leading-tight">
          Get more with Premium
        </h1>
        <p className="text-white text-lg md:text-xl">
          Complete projects faster with batch file processing, convert scanned documents
          with OCR, and e-sign your business agreements.
        </p>
        <button className="bg-amber-300 text-black font-semibold px-6 py-3 rounded-lg hover:bg-amber-400 transition duration-300 w-fit">
          Get Premium
        </button>
      </div>

      {/* Image Section */}
      <div className="flex-1 mt-8 lg:mt-0 lg:ml-12">
        <img src={home5} alt="Premium Illustration" className="w-full  object-cover rounded-xl" />
      </div>
    </div>
  );
};

export default Home5;


