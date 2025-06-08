import React from 'react';
import { Link } from 'react-router-dom';

import unLOCKPdf from '../assets/UNlockPdf.jpeg';
import ProtectPdfa from '../assets/ProtectPdf.jpeg';
import SignPdf from '../assets/SignPdf.jpeg';
import redactPdf from '../assets/redactpdf.jpeg';
import comparepdf from '../assets/comparepdf.jpeg';

const tools = [
  { label: 'Unlock PDF', img: unLOCKPdf, path: 'unlock-pdf' },
  { label: 'Protect PDF', img: ProtectPdfa, path: 'protect-pdf' },
  { label: 'Sign PDF', img: SignPdf, path: 'sign-pdf' },
  { label: 'Redact PDF', img: redactPdf, path: 'redact-pdf' },
  { label: 'Compare PDF', img: comparepdf, path: 'compare-pdf' },
];

const PdfSecurity = () => {
  return (
    <div className="p-2 max-w-sm mx-auto">
      <h1 className="text-gray-500 text-xl font-semibold mb-3">PDF Security</h1>
      <div className="flex flex-col gap-2">
        {tools.map((tool) => (
          <Link
            key={tool.label}
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
};

export default PdfSecurity;


