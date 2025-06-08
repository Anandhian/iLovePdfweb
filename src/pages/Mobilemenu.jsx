import React, { useState, useEffect } from 'react';
import Icon from './Icon';
import Menu2 from './Menu2';

const Mobilemenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Disable scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <>
      
      <div className="lg:hidden p-4 flex justify-center">
        <button onClick={() => setIsOpen(true)}>
          <Icon />
        </button>
      </div>

      {/* Sidebar + overlay */}
      <div
        className={`fixed inset-0 z-50 transition-all duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full pointer-events-none'
        }`}
      >
        {/* Overlay */}
        <div
          className={`absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-300 ${
            isOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setIsOpen(false)}
        ></div>

        {/* Sidebar container */}
        <div className="absolute top-0 right-0 w-full max-w-xs h-full bg-white shadow-lg overflow-y-auto">
          {/* Close button */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 text-4xl font-bold text-gray-700 z-10"
            aria-label="Close menu"
          >
            ×
          </button>

          {/* Sidebar content */}
          <div className="pt-14 px-4 pb-6">
            <Menu2 />
          </div>
        </div>
      </div>
    </>
  );
};

export default Mobilemenu;


