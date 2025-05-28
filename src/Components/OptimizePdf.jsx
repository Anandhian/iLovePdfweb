import React from 'react';
import { Link } from 'react-router-dom';

import comparepdf from '../assets/comparepdf.jpeg';
import Repair from '../assets/Repair.jpeg';
import ocrpdf from '../assets/ocrpdf.jpeg';

const tools = [
  { label: 'Compare PDF', path: '/compare-pdf', img: comparepdf },
  { label: 'Repair PDF', path: '/repair-pdf', img: Repair },
  { label: 'OCR PDF', path: '/ocr-pdf', img: ocrpdf },
];

const OptimizePdf = () => (
  <div className="p-2 max-w-sm mx-auto">
    <h1 className="text-gray-500 text-xl font-semibold mb-4">Optimize PDF</h1>
    <div className="flex flex-col gap-2">
      {tools.map((tool) => (
        <Link
          key={tool.label}
          to={tool.path}
          className="flex items-center gap-2 hover:text-blue-600 transition-colors p-2 rounded-md"
        >
          <img className="w-6 h-6 object-contain" src={tool.img} alt={tool.label} />
          <p className="text-sm font-semibold text-gray-700">{tool.label}</p>
        </Link>
      ))}
    </div>
  </div>
);

export default OptimizePdf;


