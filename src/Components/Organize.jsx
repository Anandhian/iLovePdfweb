import React from 'react';
import { Link } from 'react-router-dom';

import mergepdf from '../assets/download.jpeg';
import split from '../assets/split.jpeg';
import removepages from '../assets/removepages.jpeg';
import extrapages from '../assets/extrapages.jpeg';
import organizepdf from '../assets/Organizepdf.jpeg';
import scantopdf from '../assets/scantopdf.jpeg';

const tools = [
  { img: mergepdf, label: 'Merge PDF', path: '/merge-pdf' },
  { img: split, label: 'Split PDF', path: '/split-pdf' },
  { img: removepages, label: 'Remove Pages', path: '/remove-pages' },
  { img: extrapages, label: 'Extract Pages', path: '/extract-pages' },
  { img: organizepdf, label: 'Organize PDF', path: '/organize-pdf' },
  { img: scantopdf, label: 'Scan PDF', path: '/scan-pdf' },
];

const Organize = () => {
  return (
    <div className="p-2 max-w-sm mx-auto">
      <h1 className="text-gray-500 text-xl font-semibold mb-3">Organize PDF</h1>
      <div className="flex flex-col gap-2">
        {tools.map((tool, index) => (
          <Link
            to={tool.path}
            key={index}
            className="flex items-center gap-1 hover:bg-gray-100 p-2 rounded-md transition-colors"
          >
            <img className="w-6 h-6 object-contain" src={tool.img} alt={tool.label} />
            <p className="text-sm font-semibold text-gray-700">{tool.label}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Organize;



