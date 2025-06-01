import React, { useRef } from 'react';
import { PDFDocument } from 'pdf-lib';
import drop from '../assets/drop.jpeg';
import dropbox from '../assets/dropbox.jpeg';

const MergePdf = () => {
  const fileInputRef = useRef();

  const handleClick = () => {
    fileInputRef.current.click(); 
  };

  const handleFileChange = async (e) => {
    const files = Array.from(e.target.files);

    if (files.length < 2) {
      alert("Please select at least two PDF files to merge.");
      return;
    }

    const mergedPdf = await PDFDocument.create();

    for (const file of files) {
      const arrayBuffer = await file.arrayBuffer();
      const pdf = await PDFDocument.load(arrayBuffer);
      const copiedPages = await mergedPdf.copyPages(pdf, pdf.getPageIndices());
      copiedPages.forEach((page) => mergedPdf.addPage(page));
    }

    const mergedPdfBytes = await mergedPdf.save();

    const blob = new Blob([mergedPdfBytes], { type: 'application/pdf' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = 'merged.pdf';
    a.click();

    URL.revokeObjectURL(url);
  };

  return (
    <div className="mt-10 px-4 flex flex-col items-center text-center">
      <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl">Merge PDF files</h1>
      <p className="mt-4 text-lg sm:text-xl md:text-2xl text-gray-500 max-w-3xl">
        Combine PDFs in the order you want with the easiest PDF merger available.
      </p>

      <div className="mt-6 flex flex-col sm:flex-row items-center gap-4">
        <div
          className="bg-red-500 text-white px-12 py-5 text-lg font-semibold rounded-md shadow-md hover:bg-red-600 transition-all duration-200 cursor-pointer"
          onClick={handleClick}
        >
          Select PDF files
        </div>

        <input
          type="file"
          accept="application/pdf"
          multiple
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

export default MergePdf;




