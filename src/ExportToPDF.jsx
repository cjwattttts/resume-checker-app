// Add a button to export the current resume summary and keyword check to PDF
// Use browser print as a workaround for PDF generation

import React from 'react';

function ExportToPDF({ resumeText, role }) {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '2rem' }}>
      <button
        onClick={handlePrint}
        style={{
          padding: '0.6rem 1.2rem',
          backgroundColor: '#264653',
          color: '#fff',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer'
        }}
      >
        Export Report to PDF
      </button>
    </div>
  );
}

export default ExportToPDF;
