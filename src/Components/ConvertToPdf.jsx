import React from 'react';
import { Link } from 'react-router-dom';

import jpgtopdf from '../assets/jpgtopdf.jpeg';
import wordtopdf from '../assets/wordtopdf.jpeg';
import powerpoint from '../assets/powerpoint.jpeg';
import exceltopdf from '../assets/exceltopdf.jpeg';
import Htmltopdf from '../assets/HTMLtopdf.jpeg';

const tools = [
  { label: 'JPG to PDF', img: jpgtopdf, path: '/jpg-to-pdf' },
  { label: 'Word to PDF', img: wordtopdf, path: '/word-to-pdf' },
  { label: 'PowerPoint to PDF', img: powerpoint, path: '/ppt-to-pdf' },
  { label: 'Excel to PDF', img: exceltopdf, path: '/excel-to-pdf' },
  { label: 'HTML to PDF', img: Htmltopdf, path: '/html-to-pdf' },
];

const ConvertToPdf = () => (
  <div className="p-2 max-w-sm mx-auto">
    <h1 className="text-gray-500 text-xl font-semibold mb-3">Convert to PDF</h1>
    <div className="flex flex-col gap-2">
      {tools.map((tool, index) => (
        <Link
          key={index}
          to={tool.path}
          className="flex items-center gap-2 hover:bg-gray-100 p-2 rounded-md transition-colors"
        >
          <img className="w-6 h-6 object-contain" src={tool.img} alt={tool.label} />
          <p className="text-sm font-semibold text-gray-700">{tool.label}</p>
        </Link>
      ))}
    </div>
  </div>
);

export default ConvertToPdf;

