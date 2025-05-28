import React from 'react';

const Home3 = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold text-center mb-8">Looking for another solution?</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Desktop */}
        <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
          <p className="text-xl font-bold mb-2">iLovePDF Desktop</p>
          <p className="text-gray-700">
            Download the{' '}
            <a className="text-red-500 underline" href="#">
              iLovePDF Desktop App
            </a>{' '}
            to work with your favorite PDF tools on your Mac or Windows PC. Get a lightweight PDF app
            that helps you process heavy PDF tasks offline in seconds.
          </p>
        </div>

        {/* Mobile */}
        <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
          <p className="text-xl font-bold mb-2">iLovePDF Mobile</p>
          <p className="text-gray-700">
            Get the{' '}
            <a className="text-red-500 underline" href="#">
              iLovePDF Mobile
            </a>{' '}
            to manage documents remotely or on the move. Turn your Android or iPhone device into a PDF
            Editor & Scanner to annotate, sign, and share documents with ease.
          </p>
        </div>

        {/* iLoveIMG */}
        <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
          <p className="text-xl font-bold mb-2">iLoveIMG</p>
          <p className="text-gray-700">
            <a className="text-red-500 underline" href="#">
              iLoveIMG
            </a>{' '}
            is the web app that helps you modify images in bulk for free. Crop, resize, compress,
            convert, and more. All the tools you need to enhance your images in just a few clicks.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home3;
