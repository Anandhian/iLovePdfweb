import { useParams } from 'react-router-dom';
import drop from '../assets/drop.jpeg';
import dropbox from '../assets/dropbox.jpeg';

const toolContent = {
  'mergepdf': {
    title: 'Merge PDF',
    description: 'Easily combine multiple PDF files into one document.',
  },
  'split-pdf': {
    title: 'Split PDF',
    description: 'Split one PDF into multiple smaller PDFs.',
  },
  'remove-pages': {
    title: 'Remove Pages',
    description: 'Select and remove unwanted pages from your PDF.',
  },
  'extract-pages': {
    title: 'Extract Pages',
    description: 'Extract selected pages and create a new PDF.',
  },
  'organize-pdf': {
    title: 'Organize PDF',
    description: 'Reorder, rotate, or delete PDF pages.',
  },
  'scan-pdf': {
    title: 'Scan PDF',
    description: 'Convert scanned documents to PDF format.',
  },
  'compare-pdf': {
    title: 'Compare PDF',
    description: 'Compare two PDF files side by side.',
  },
  'repair-pdf': {
    title: 'Repair PDF',
    description: 'Fix corrupted or unreadable PDF files.',
  },
  'ocr-pdf': {
    title: 'OCR PDF',
    description: 'Convert scanned PDFs to searchable text.',
  },
  'jpg-to-pdf': {
    title: 'JPG to PDF',
    description: 'Convert image files (JPG) into PDF format.',
  },
  'word-to-pdf': {
    title: 'Word to PDF',
    description: 'Convert Microsoft Word documents into PDFs.',
  },
  'ppt-to-pdf': {
    title: 'PowerPoint to PDF',
    description: 'Convert PowerPoint presentations to PDF files.',
  },
  'excel-to-pdf': {
    title: 'Excel to PDF',
    description: 'Convert Excel spreadsheets into PDF format.',
  },
  'html-to-pdf': {
    title: 'HTML to PDF',
    description: 'Convert web pages or HTML files into PDF.',
  },
  'pdf-to-jpg': {
    title: 'PDF to JPG',
    description: 'Convert PDF pages into image (JPG) format.',
  },
  'pdf-to-word': {
    title: 'PDF to Word',
    description: 'Convert PDF documents into editable Word files.',
  },
  'pdf-to-powerpoint': {
    title: 'PDF to PowerPoint',
    description: 'Convert PDFs into PowerPoint presentations.',
  },
  'pdf-to-excel': {
    title: 'PDF to Excel',
    description: 'Turn tables and data from PDF into Excel sheets.',
  },
  'pdf-to-pdfa': {
    title: 'PDF to PDF/A',
    description: 'Convert PDF to archivable PDF/A format.',
  },
  'rotate-pdf': {
    title: 'Rotate PDF',
    description: 'Rotate your PDF pages easily.',
  },
  'add-page-numbers': {
    title: 'Add Page Numbers',
    description: 'Add page numbers to your PDF documents.',
  },
  'watermark-pdf': {
    title: 'Watermark PDF',
    description: 'Add watermarks to your PDF files.',
  },
  'crop-pdf': {
    title: 'Crop PDF',
    description: 'Crop PDF pages to desired size.',
  },
  'edit-pdf': {
    title: 'Edit PDF',
    description: 'Edit content of your PDF documents.',
  },
  'unlock-pdf': {
    title: 'Unlock PDF',
    description: 'Remove restrictions and unlock PDF files safely.',
  },
  'protect-pdf': {
    title: 'Protect PDF',
    description: 'Add password protection to your PDF.',
  },
  'sign-pdf': {
    title: 'Sign PDF',
    description: 'Digitally sign your PDF files.',
  },
  'redact-pdf': {
    title: 'Redact PDF',
    description: 'Permanently remove sensitive content from PDF.',
  },
};

const ToolsContent = () => {
  const { tool } = useParams();
  const content = toolContent[tool];

  if (!content) {
    return <div className="p-4 text-red-500 text-center">Tool not found.</div>;
  }

  return (
    <div className="mt-10 px-4 flex flex-col items-center text-center">
      <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl">{content.title}</h1>

      <p className="mt-4 text-lg sm:text-xl md:text-2xl text-gray-500 max-w-3xl">
        {content.description}
      </p>

      <div className="mt-6 flex flex-col sm:flex-row items-center gap-4">
        <label htmlFor="file-upload" className="bg-red-500 text-white px-12 py-5 text-lg font-semibold rounded-md shadow-md hover:bg-red-600 transition-all duration-200 cursor-pointer">
          Select PDF files
        </label>

        <input id="file-upload" type="file" className="hidden" />

        <div className="flex flex-row lg:flex-col gap-4">
          <img src={drop} alt="Drop" className="w-8 h-8 object-contain" />
          <img src={dropbox} alt="Dropbox" className="w-8 h-8 object-contain" />
        </div>
      </div>
    </div>
  );
};

export default ToolsContent;

