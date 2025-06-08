import React from 'react';
import { Link } from 'react-router-dom';

import pdftojpg from '../assets/PdfTOJpg.jpeg';
import word from '../assets/word.jpeg';
import powerPoint from '../assets/powerpoint.jpeg';
import exceltopdf from '../assets/exceltopdf.jpeg';
import PDFTOPDFA from '../assets/pdftopdfa.jpeg';

const tools = [
  { label: 'PDF to JPG', img: pdftojpg, path: 'pdf-to-jpg' },
  { label: 'PDF to Word', img: word, path: 'pdf-to-word' },
  { label: 'PDF to PowerPoint', img: powerPoint, path: 'pdf-to-powerpoint' },
  { label: 'PDF to Excel', img: exceltopdf, path: 'pdf-to-excel' },
  { label: 'PDF to PDF/A', img: PDFTOPDFA, path: 'pdf-to-pdfa' },
];

const ConvertFromPdf = () => (
  <div className="p-2 max-w-sm mx-auto">
    <h1 className="text-gray-500 text-xl font-semibold mb-3">Convert from PDF</h1>
    <div className="flex flex-col gap-2">
      {tools.map((tool, index) => (
        <Link
          key={index}
          to={`/${tool.path}`}
          className="flex items-center gap-2 hover:bg-gray-100 p-2 rounded-md transition-colors"
        >
          <img className="w-6 h-6 object-contain" src={tool.img} alt={tool.label} />
          <p className="text-sm font-semibold text-gray-700">{tool.label}</p>
        </Link>
      ))}
    </div>
  </div>
);

export default ConvertFromPdf;


