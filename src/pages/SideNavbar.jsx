import React, { useState, useEffect } from 'react';
import { IoMdMenu } from 'react-icons/io';
import { Link } from 'react-router-dom';
import Organize from '../Components/Organize';
import OptimizePdf from '../Components/OptimizePdf';
import ConvertToPdf from '../Components/ConvertToPdf';
import ConvertFromPdf from '../Components/ConvertFromPdf'; 
import PdfSecurity from '../Components/PdfSecurity';
import EditPdf from '../Components/EditPdf';

const SideNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <>
      <div className="lg:hidden p-4">
        <IoMdMenu
          size={28}
          onClick={() => setIsOpen(true)}
          className="cursor-pointer"
        />
      </div>

      <div
        className={`fixed inset-0 z-50 transition-all duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full pointer-events-none'
        }`}
      >
        <div
          className={`absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-300 ${
            isOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setIsOpen(false)}
        ></div>

        <div className="relative w-full max-w-xs h-full bg-white shadow-lg overflow-y-auto">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 text-4xl font-bold text-gray-700 z-10"
          >
            ×
          </button>

          <div className="pt-14 px-4 pb-6">
            <Organize />
            <OptimizePdf />
            <ConvertToPdf />
            <ConvertFromPdf /> 
            <EditPdf />
            <PdfSecurity />
          </div>
        </div>
      </div>
    </>
  );
};

export default SideNavbar;




