import Organize from '../Components/Organize';
import OptimizePdf from '../Components/OptimizePdf';
import ConvertToPdf from '../Components/ConvertToPdf';
import ConvertFromPdf from '../Components/ConvertFromPdf'; 
import PdfSecurity from '../Components/PdfSecurity';
import EditPdf from '../Components/EditPdf';

const AllToolsHover = () => {
  return (
    <div>
      <div className='flex'>
        <Organize />
        <OptimizePdf />
        <ConvertToPdf />
        <ConvertFromPdf /> 
        <EditPdf />
        <PdfSecurity />
      </div>
    </div>
  );
};

export default AllToolsHover;


