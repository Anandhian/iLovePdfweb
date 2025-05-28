import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';

import SplitPdf from './Components/SplitPdf';
import CompressPdf from './Components/CompressPdf';
import ConvertPdf from './Components/ConvertPdf';
import AllPdfTools from './Components/AllPdfTools';
import Home from './pages/Home';
import MergePdf from './Components/MergePdf';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mergepdf" element={<MergePdf />} />
        <Route path="/splitpdf" element={<SplitPdf />} />
        <Route path="/compresspdf" element={<CompressPdf />} />
        <Route path="/convertpdf" element={<ConvertPdf />} />
        <Route path="/alltools" element={<AllPdfTools />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

