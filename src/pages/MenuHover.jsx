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
import { MdKeyboardArrowLeft } from "react-icons/md";


const MenuHover = () => {
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
    <div className="grid grid-cols-3 gap-8 px-9 py-6 text-gray-800 w-full">
      
      {/* Other Products */}
      <div className="flex flex-col gap-5 px-4 border-r border-gray-300">
        <h1 className="text-base font-semibold">Other Products</h1>
        {productItems.map((item, index) => (
          <div key={index} className="flex gap-3 items-start">
            <img src={item.img} alt={item.title} className="w-10 h-10 object-contain" />
            <div>
              <h2 className="text-sm font-bold">{item.title}</h2>
              <p className="text-xs text-gray-600">{item.desc}</p>
            </div>
          </div>
        ))}
        <div className="flex items-center border border-gray-400 p-2 rounded">
          <img src={circleimage} alt="Integration" className="w-8 h-8 object-contain mr-3" />
          <div>
            <p className="text-sm font-semibold">Integration</p>
            <p className="text-xs text-gray-600">Zapier, Make, WordPress</p>
          </div>
        </div>
      </div>

      {/* Solutions */}
      <div className="flex flex-col gap-5 px-4 border-r border-gray-300">
        <h1 className="text-base font-semibold">Solutions</h1>
        <div className="flex gap-4 items-start">
          <img src={business} alt="Business Icon" className="w-24 h-24 object-contain" />
          <div>
            <h2 className="text-md font-bold">Business</h2>
            <p className="font-light text-sm max-w-xs">
              Streamline PDF editing and workflows for efficient document management.
            </p>
          </div>
        </div>
        <h1 className="text-base font-semibold">Applications</h1>
        <div className="flex flex-col gap-3">
          {appItems.map((item, index) => (
            <div key={index} className="flex items-center gap-3">
              <img src={item.img} alt={item.title} className="w-8 h-8 object-contain" />
              <div>
                <h1 className="text-sm font-semibold">{item.title}</h1>
                <p className="text-xs font-light text-gray-500">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Menu Links */}
      <div className="flex flex-col gap-6 px-4">
        <div className="flex flex-col gap-4">
          {menuLinks.map((link, index) => (
            <div key={index} className="flex items-center gap-3">
              <img src={link.img} alt={link.title} className="w-5 h-5 object-contain" />
              <p className="text-sm">{link.title}</p>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <hr className="border-gray-300" />
          <div className="flex flex-col gap-3 mt-4">
            {footerLinks.map((text, index) => (
              <div key={index} className="flex items-center gap-2 cursor-pointer">
                <MdKeyboardArrowLeft className="text-xl" />
                <p className="text-sm">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuHover;





