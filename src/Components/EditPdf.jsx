import React from 'react';
import { Link } from 'react-router-dom';

import rotatepdf from '../assets/rotatePdf.jpeg';
import pageNumbers from '../assets/pageNumbers.jpeg';
import waterpdf from '../assets/waterPdf.jpeg';
import croppdf from '../assets/croppdf.jpeg';
import edit from '../assets/edit.jpeg';

const tools = [
  { label: 'Rotate PDF', img: rotatepdf, path: '/rotate-pdf' },
  { label: 'Add Page Numbers', img: pageNumbers, path: '/add-page-numbers' },
  { label: 'Watermark PDF', img: waterpdf, path: '/watermark-pdf' },
  { label: 'Crop PDF', img: croppdf, path: '/crop-pdf' },
  { label: 'Edit PDF', img: edit, path: '/edit-pdf' },
];

const EditPdf = () => (
  <div className="p-2 max-w-sm mx-auto">
      <h1 className="text-gray-500 text-xl font-semibold mb-4">EDIT TO PDF</h1>
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

export default EditPdf;

