import React, { useState, useEffect } from 'react';
import './manu.scss'; 


const ContextMenu = ({ x, y }) => {
  return (
    <div
      className="win11-context-menu"
      style={{ top: `${y}px`, left: `${x}px` }}
    >
      <ul className="menu-list">
        {/* View Option */}
        <li className="menu-item flex-between">
          <span className="item-content">
            <i className="ri-layout-grid-line icon"></i>New Folder
          </span>
          <i className="ri-arrow-right-s-line arrow"></i>
        </li>

        {/* Sort By Option */}
        <li className="menu-item flex-between">
          <span className="item-content">
            <i className="ri-arrow-up-down-line icon blue-icon"></i> Get Info
          </span>
          <i className="ri-arrow-right-s-line arrow"></i>
        </li>

        {/* Refresh Option */}
        <li className="menu-item" onClick={() => window.location.reload()}>
          <i className="ri-refresh-line icon"></i> Refresh
        </li>

        <hr className="divider" />

        {/* New Option */}
        <li className="menu-item flex-between">
          <span className="item-content">
            <i className="ri-add-circle-line icon blue-icon"></i> Change Wallpaper...
          </span>
          <i className="ri-arrow-right-s-line arrow"></i>
        </li>

        <hr className="divider" />

        {/* Display Settings */}
        <li className="menu-item">
          <i className="ri-computer-line icon blue-gear"></i>  Use Stacks
        </li>

        {/* Personalize */}
        <li className="menu-item">
          <i className="ri-paint-brush-line icon brush-icon"></i> Sort By / Clean Up
        </li>

        <hr className="divider" />

        {/* Open in Terminal */}
        <li className="menu-item show">
          <i className="ri-terminal-box-line icon terminal-icon"></i>Show View Options
        </li>

        

       
        
      </ul>
    </div>
  );
};


export default const Manu = () => {
  const [clicked, setClicked] = useState(false);
  const [points, setPoints] = useState({ x: 0, y: 0 });

  useEffect(() => {
    
    const handleContextMenu = (e) => {
      e.preventDefault(); 
      setClicked(true);
      setPoints({ x: e.clientX, y: e.clientY });
    };

  
    const handleClick = () => setClicked(false);


    window.addEventListener('contextmenu', handleContextMenu);
    window.addEventListener('click', handleClick);

   
    return () => {
      window.removeEventListener('contextmenu', handleContextMenu);
      window.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <div className="home-page-wrapper">
      {clicked && <ContextMenu x={points.x} y={points.y} />}
    </div>
  );
};

 
