
import Footer from './Footer';
import Home2 from './Home2';
import Home3 from './Home3';
import Home4 from './Home4';
import Home5 from './Home5';
import Home6 from './Home6';

const Home = () => {
  return (
    <div className="w-full  h-full  px-6 background">
      <div>
         <h1 className="text-center font-semibold text-gray-700 text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
        Every tool you need to work with PDFs in one place
      </h1>
      <p className="text-center mt-4 text-xl max-w-5xl mx-auto text-gray-700 break-words">
        Every tool you need to use PDFs, at your fingertips. All are 100% FREE and easy to use! Merge, split, compress, convert, rotate,
        unlock and watermark PDFs with just a few clicks.
      </p>

      </div>
      <div>
        <Home2></Home2>
      </div>
      <div className=''>
        <Home3></Home3>
      </div>
      <div>
        <Home4></Home4>
      </div>
      <div>
        <Home5></Home5>
      </div>
      <div>
        <Home6></Home6>
      </div>
      <div>
        <Footer></Footer>
      </div>
     
    </div>
  );
};

export default Home;
