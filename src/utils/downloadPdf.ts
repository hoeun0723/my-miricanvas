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
  const pdf = new jsPDF({
    orientation: 'portrait',
    unit: 'px',
    format: [794, 1123],
  });

  pdf.addImage(imgData, 'PNG', 0, 0, 794, 1123);
  pdf.save('my-canvas.pdf');
};
