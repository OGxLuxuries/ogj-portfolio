import React from "react";
import '../CSS/PDFbutton.css'
const PDFDownload: React.FC = () => {
  const downloadPDF = () => {
    // Path to the PDF file in the public directory
    const pdfPath = "../../public/Oliver_Gomes_Resume.pdf";

    // Create an anchor element to trigger the download
    const link = document.createElement("a");
    link.href = pdfPath;
    link.download = "Oliver_Gomes_Resume.pdf"; // The name of the file once downloaded
    link.click(); // Programmatically click the link to trigger the download
  };

  return (
    <div className="resume">
      <h1>My Resume</h1>
      <button onClick={downloadPDF}>Download PDF</button>
    </div>
  );
};

export default PDFDownload;

