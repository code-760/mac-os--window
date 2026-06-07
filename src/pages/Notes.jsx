import React, { useEffect, useState } from 'react';
import Window from './window';
import Markdown from 'react-markdown';
// import notes from '../assets/notes.txt';
import './Notes.scss'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { a11yDark, darcula, dark } from 'react-syntax-highlighter/dist/esm/styles/hljs';



export default function Notes({ onClose }) {
  const [txtfile, settxtfile] = useState(null);

  const fetchtxt = async () => {
    const res = await fetch('/public/notes.txt');
    const lest = await res.text();
    settxtfile(lest);
  };

  useEffect(() => {
    fetchtxt();
  }, []);

  return (
    <Window onClose={onClose}>
      <div className="notes-window">
        <SyntaxHighlighter language="typescript" style={a11yDark}>
          {txtfile}
        </SyntaxHighlighter>
      </div>
    </Window>
  );
}
