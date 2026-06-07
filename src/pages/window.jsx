import React, { useState } from 'react';
import './Window.scss';
import { Rnd } from 'react-rnd';

let highestZ = 100;

export default function Window({ children, onClose }) {
  const [zIndex, setZIndex] = useState(++highestZ);

  const bringToFront = () => {
    highestZ += 1;
    setZIndex(highestZ);
  };

  return (
    <Rnd
      default={{
        x: 500,
        y: 100,
        width: 787,
        height: 530,
      }}
      minWidth={250}
      minHeight={150}
      bounds="window"
      dragHandleClassName="nav-window"
      onDragStart={bringToFront}
      onResizeStart={bringToFront}
      className="react-rnd-window"
      style={{
        position: 'absolute',
        zIndex: zIndex,
      }}
    >
      <div
        className="windos"
        onMouseDown={bringToFront}
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <div className="nav-window" style={{ cursor: 'default', width: '100%' }}>
          <div className="icon-window">
            <div className="red" onClick={onClose}></div>
            <div className="yellow"></div>
            <div className="green"></div>
          </div>

          <div className="window-name">
            <p>Himanshu~pc</p>
          </div>
        </div>

        <div
          className="window-content"
          style={{
            flex: 1,
            width: '100%',
            overflowY: 'auto',
            cursor: 'default',
          }}
        >
          {children}
        </div>
      </div>
    </Rnd>
  );
}
