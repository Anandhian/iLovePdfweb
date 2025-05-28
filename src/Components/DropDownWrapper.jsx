import React, { useState } from 'react';
import { MdArrowDropDown, MdArrowDropUp } from 'react-icons/md';
import Hover from './Hover';

const DropdownWrapper = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div className="flex items-center gap-1 cursor-pointer">
        <span>Convert PDF</span>
        <MdArrowDropDown />
      </div>

      {/* Dropdown Box */}
      {isOpen && (
        <div className="absolute top-full mt-4 left-1/2 transform -translate-x-1/2 z-50 w-max">
          <div className="relative bg-white shadow-xl rounded-2xl pt-6 px-4 pb-4">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <MdArrowDropUp className="text-white text-4xl drop-shadow" />
            </div>
            <Hover />
          </div>
        </div>
      )}
    </li>
  );
};

export default DropdownWrapper;
