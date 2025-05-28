import Organize from '../Components/Organize';
import OptimizePdf from '../Components/OptimizePdf';
import ConvertToPdf from '../Components/ConvertToPdf';
import Convertfrompdf from '../Components/Convertfrompdf';
import PdfSecurity from '../Components/PdfSecurity';
import EditPdf from '../Components/EditPdf'

const AllToolsHover = () => {
  return (
    <div>
      <div className='flex'>
         <Organize />
            <OptimizePdf />
            <ConvertToPdf />
            <Convertfrompdf></Convertfrompdf>
            
            <EditPdf></EditPdf>
            <PdfSecurity></PdfSecurity>
      </div>
    </div>
  )
}

export default AllToolsHover

