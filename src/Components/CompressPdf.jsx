import React, { useRef } from 'react';
import { PDFDocument } from 'pdf-lib';
import drop from '../assets/drop.jpeg';
import dropbox from '../assets/dropbox.jpeg';

const CompressPdf = () => {
  const fileInputRef = useRef();

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];

    if (!file) {
      alert("Please select a PDF file to split.");
      return;
    }

    const arrayBuffer = await file.arrayBuffer();
    const pdfDoc = await PDFDocument.load(arrayBuffer);

    const totalPages = pdfDoc.getPageCount();

    for (let i = 0; i < totalPages; i++) {
      const newPdf = await PDFDocument.create();
      const [copiedPage] = await newPdf.copyPages(pdfDoc, [i]);
      newPdf.addPage(copiedPage);

      const pdfBytes = await newPdf.save();
      const blob = new Blob([pdfBytes], { type: 'application/pdf' });
      const url = URL.createObjectURL(blob);

      const a = document.createElement('a');
      a.href = url;
      a.download = `page-${i + 1}.pdf`;
      a.click();

      URL.revokeObjectURL(url);
    }
  };

  return (
    <div className="mt-10 px-4 flex flex-col items-center text-center">
      <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl">Compress PDF files</h1>
      <p className="mt-4 text-lg sm:text-xl md:text-2xl text-gray-500 max-w-3xl">
        Reduce file size while optimizing for maximal PDF quality.
      </p>

      <div className="mt-6 flex flex-col sm:flex-row items-center gap-4">
        <div
          className="bg-red-500 text-white px-12 py-5 text-lg font-semibold rounded-md shadow-md hover:bg-red-600 transition-all duration-200 cursor-pointer"
          onClick={handleClick}
        >
          Select PDF file
        </div>

        <input
          type="file"
          accept="application/pdf"
          ref={fileInputRef}
          onChange={handleFileChange}
          className="hidden"
        />

        <div className="flex flex-row lg:flex-col gap-4">
          <img src={drop} alt="Drop" className="w-8 h-8 object-contain" />
          <img src={dropbox} alt="Dropbox" className="w-8 h-8 object-contain" />
        </div>
      </div>
    </div>
  );
};

export default CompressPdf;
