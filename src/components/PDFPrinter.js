import {jsPDF} from 'jspdf'

export const PDFPrinter = (docs, dadosAluno, dadosEmpresa, dadosEstagio) => {
    if (docs.plano) {
        const doc = new jsPDF();
        var blobPDFPlano = new Blob([doc.output()], { type: 'application/pdf' });
        var blobUrlPlano = URL.createObjectURL(blobPDFPlano);
        window.open(blobUrlPlano);
    }    
    if (docs.tsem) {
        const doc = new jsPDF();
        var blobPDFtsem = new Blob([doc.output()], { type: 'application/pdf' });
        var blobUrltsem = URL.createObjectURL(blobPDFtsem);
        window.open(blobUrltsem);
    }    
    if (docs.tcomp) {
        const doc = new jsPDF();
        var blobPDFtcomp = new Blob([doc.output()], { type: 'application/pdf' });
        var blobUrltcomp = URL.createObjectURL(blobPDFtcomp);
        window.open(blobUrltcomp);
    }  
    if (docs.tadd) {
        const doc = new jsPDF();
        var blobPDFtadd = new Blob([doc.output()], { type: 'application/pdf' });
        var blobUrltadd = URL.createObjectURL(blobPDFtadd);
        window.open(blobUrltadd);
    }  
    if (docs.tquim) {
        const doc = new jsPDF();
        var blobPDFtquim = new Blob([doc.output()], { type: 'application/pdf' });
        var blobUrltquim = URL.createObjectURL(blobPDFtquim);
        window.open(blobUrltquim);
    }
}
  
export default PDFPrinter;