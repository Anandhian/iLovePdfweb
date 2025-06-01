
import english from '../assets/english.jpeg';
import x from '../assets/x.jpeg';
import facebook from '../assets/facebook.jpeg';
import instagram from "../assets/instagram.jpeg";
import linkedin from '../assets/linkedin.jpeg';
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";

const Footer = () => {
  return (
    <div className="px-6 md:px-28 mt-16 mb-24">
      <hr className="border-gray-400" />

      <div className="mt-9 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">
        
        
        <div className="relative group w-fit flex items-center gap-2 cursor-pointer text-sm">
          <img src={english} alt="Language" className="w-6 h-6" />
          <p className="capitalize">english</p>
          <MdArrowDropDown className="text-lg group-hover:hidden" />
          <MdArrowDropUp className="text-lg hidden group-hover:block" />

          <div
            className="
              absolute top-8 left-0 bg-white border shadow-lg rounded-md p-2 w-32 z-10
              opacity-0 group-hover:opacity-100
              pointer-events-none group-hover:pointer-events-auto
              transition-opacity duration-200
            "
          >
            {["English", "Tamil", "Malayalam", "Kannada", "Hindi", "Telugu"].map((lang) => (
              <p
                key={lang}
                className="px-2 py-1 rounded hover:bg-gray-100 cursor-pointer"
              >
                {lang}
              </p>
            ))}
          </div>
        </div>

        
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
          <div className="flex gap-1 text-sm whitespace-nowrap justify-center md:justify-start">
            <p>@IloveimgPDF</p>
            <p>. Your PDF Editor</p>
          </div>

          <div className="flex gap-3">
            <img className="w-5 h-5 object-cover" src={x} alt="X" />
            <img className="w-5 h-5 object-cover" src={facebook} alt="Facebook" />
            <img className="w-5 h-5 object-cover" src={linkedin} alt="LinkedIn" />
            <img className="w-5 h-5 object-cover" src={instagram} alt="Instagram" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;




