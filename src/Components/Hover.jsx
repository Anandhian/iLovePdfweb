import React from 'react';
import { Link } from 'react-router-dom';

import jpgtopdf from '../assets/jpgtopdf.jpeg';
import wordtopdf from '../assets/wordtopdf.jpeg';
import powerPoint from '../assets/powerpoint.jpeg';
import exceltopdf from '../assets/exceltopdf.jpeg';
import Htmltopdf from '../assets/HTMLtopdf.jpeg';

import Secondhover from './Secondhover';

const tools = [
  { name: 'JPG to PDF', path: '/jpg-to-pdf', image: jpgtopdf },
  { name: 'WORD to PDF', path: '/word-to-pdf', image: wordtopdf },
  { name: 'POWERPOINT to PDF', path: '/powerpoint-to-pdf', image: powerPoint },
  { name: 'EXCEL to PDF', path: '/excel-to-pdf', image: exceltopdf },
  { name: 'HTML to PDF', path: '/html-to-pdf', image: Htmltopdf },
];

const Hover = () => {
  return (
    <div className="flex text-sm mt-7 gap-8">
      {/* Left Column */}
      <div className="flex flex-col gap-6">
        <p className="text-gray-500 font-semibold">CONVERT TO PDF</p>

        {tools.map((tool) => (
          <Link
            to={tool.path}
            key={tool.name}
            className="flex items-center gap-2 hover:text-blue-600 transition-colors"
          >
            <img className="w-6 h-6 object-cover" src={tool.image} alt={tool.name} />
            <span>{tool.name}</span>
          </Link>
        ))}
      </div>

      {/* Right Column */}
      <div>
        <Secondhover />
      </div>
    </div>
  );
};

export default Hover;

