import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export const downloadCanvasAsPDF = async (canvasElement: HTMLElement) => {
  const canvas = await html2canvas(canvasElement, {
    scale: 2,
    useCORS: true,
    scrollX: 0,
    scrollY: -window.scrollY,
    windowWidth: document.documentElement.offsetWidth,
    backgroundColor: null,
  });
  const imgData = canvas.toDataURL('image/png');
  const canvasWidth = canvas.width;
  const canvasHeight = canvas.height;

 
  const pdfWidth = 210;
  const pxPerMm = canvasWidth / pdfWidth;

  
  const pdfHeight = canvasHeight / pxPerMm;

  const pdf = new jsPDF('p', 'mm', [pdfWidth, pdfHeight]);

  pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
  pdf.save('my-canvas.pdf');
};
