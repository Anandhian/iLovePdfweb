import React from 'react';
import blueheart from '../assets/blueheart.jpeg';
import darkblueheart from '../assets/darkblueheart.jpeg';
import greenHeart from '../assets/greenHeart.jpeg';
import circleimage from '../assets/circleimage.jpeg';

const MenuHover = () => {
  return (
    <div className="grid grid-cols-3 gap-8 px-6 py-4 text-gray-800">
      {/* Other Products */}
      <div className="flex flex-col gap-4 border-r border-gray-300 pr-6">
        <h1 className="text-base font-semibold">Other Products</h1>
        {[
          { img: blueheart, title: 'ILOVELMG', desc: 'Effortless image editing' },
          { img: darkblueheart, title: 'ILOVESIGN', desc: 'e-Signing made simple' },
          { img: greenHeart, title: 'ILOVEAPI', desc: 'Document automation for Developers' },
        ].map((item, index) => (
          <div key={index} className="flex gap-2 items-start">
            <img src={item.img} alt={item.title} className="w-10 h-10 object-contain" />
            <div className="flex flex-col">
              <h2 className="text-sm font-bold">{item.title}</h2>
              <p className="text-xs text-gray-600">{item.desc}</p>
            </div>
          </div>
        ))}
        <div className="flex items-center border border-gray-400 p-2 rounded">
          <img src={circleimage} alt="Integration" className="w-8 h-8 object-contain mr-2" />
          <div>
            <p className="text-sm font-semibold">Integration</p>
            <p className="text-xs text-gray-600">Zapier, Make, WordPress</p>
          </div>
        </div>
      </div>

      {/* Solutions */}
      <div className="flex flex-col gap-4 border-r border-gray-300 px-6">
        <h1 className="text-base font-semibold">Solutions</h1>
        {['For Business', 'For Education', 'For Developers'].map((solution, index) => (
          <p key={index} className="text-sm text-gray-600">{solution}</p>
        ))}
      </div>

      {/* Pricing */}
      <div className="flex flex-col gap-4 pl-6">
        <h1 className="text-base font-semibold">Pricing</h1>
        {['Plans & Subscriptions', 'Enterprise'].map((pricing, index) => (
          <p key={index} className="text-sm text-gray-600">{pricing}</p>
        ))}
      </div>
    </div>
  );
};

export default MenuHover;



