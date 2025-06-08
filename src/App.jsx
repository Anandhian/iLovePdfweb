import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';

import SplitPdf from './Components/SplitPdf';
import CompressPdf from './Components/CompressPdf';
import ConvertPdf from './Components/ConvertPdf';
import AllPdfTools from './Components/AllPdfTools';
import Home from './pages/Home';
import MergePdf from './Components/MergePdf';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ToolsContent from './Tools/ToolsContent';

function App() {
  return (
    <BrowserRouter>
      <Navbar  />
      <Routes className="background">
        <Route path="/" element={<Home />} />
        <Route path="/mergepdf" element={<MergePdf />} />
        <Route path="/splitpdf" element={<SplitPdf />} />
        <Route path="/compresspdf" element={<CompressPdf />} />
        <Route path="/convertpdf" element={<ConvertPdf />} />
        <Route path="/alltools" element={<AllPdfTools />} />
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Signup></Signup>}></Route>
        
          <Route path="/:tool" element={<ToolsContent />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;

