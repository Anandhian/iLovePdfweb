import React, { useState } from 'react';
import Icon from './Icon';
import MenuHover from './MenuHover';

const HoverMenu = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Icon />

      {isHovered && (
        <div className="absolute top-full left-0 mt-2 z-50 w-[700px] max-w-screen-sm bg-white rounded-xl shadow-xl border border-gray-200 overflow-hidden">
          <MenuHover />
        </div>
      )}
    </div>
  );
};

export default HoverMenu;


