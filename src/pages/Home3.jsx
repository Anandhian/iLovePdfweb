

const Home3 = () => {
  return (
    <div className="px-4 py-12 sm:px-8 md:px-16 lg:px-28 bg-white">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-center mb-8">
        Looking for another solution?
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-6 mt-12 md:mt-16">
        {/* Desktop */}
        <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
          <p className="text-lg sm:text-xl font-bold mb-2">iLovePDF Desktop</p>
          <p className="text-gray-700 leading-7">
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
          <p className="text-lg sm:text-xl font-bold mb-2">iLovePDF Mobile</p>
          <p className="text-gray-700 leading-7">
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
          <p className="text-lg sm:text-xl font-bold mb-2">iLoveIMG</p>
          <p className="text-gray-700 leading-7">
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


