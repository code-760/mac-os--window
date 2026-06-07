import React from 'react';
import Window from './window';
import './pdf.scss';

export default function Pdf({ onClose }) {
  return (
    <Window onClose={onClose}>
      <div className="pdf-window">
        <iframe
          src="/public/Himanshu_Kumawat_Resume.pdf"
          title="Resume PDF"
          width="100%"
          height="100%"
          style={{ border: 'none' }}
        />
      </div>
    </Window>
  );
}
