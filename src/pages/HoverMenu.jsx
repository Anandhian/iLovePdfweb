import React, { useState } from 'react';
import Icon from './Icon';
import MenuHover from './MenuHover';

const HoverMenu = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Icon />
      {isHovered && (
        <div className="absolute top-full mt-2 left-0 z-50 bg-white shadow-lg rounded-md">
          <MenuHover />
        </div>
      )}
    </div>
  );
};

export default HoverMenu;
