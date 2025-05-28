import React from 'react';
import { Link } from 'react-router-dom';

import pdftojpg from '../assets/PdfTOJpg.jpeg';
import wordtopdf from '../assets/wordtopdf.jpeg';
import powerPoint from '../assets/powerpoint.jpeg';
import exceltopdf from '../assets/exceltopdf.jpeg';
import PDFTOPDFA from '../assets/pdftopdfa.jpeg';

const tools = [
  { name: 'PDF to JPG', path: '/pdf-to-jpg', image: pdftojpg },
  { name: 'PDF to WORD', path: '/pdf-to-word', image: wordtopdf },
  { name: 'PDF to POWERPOINT', path: '/pdf-to-powerpoint', image: powerPoint },
  { name: 'PDF to EXCEL', path: '/pdf-to-excel', image: exceltopdf },
  { name: 'PDF to PDF/A', path: '/pdf-to-pdfa', image: PDFTOPDFA },
];

const Secondhover = () => {
  return (
    <div className="flex flex-col gap-6">
      <p className="text-gray-500 font-semibold">CONVERT FROM PDF</p>

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
  );
};

export default Secondhover;

