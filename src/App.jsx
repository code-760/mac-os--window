import React from "react";
import "./App.scss";
import Fotter from "./componnts/Fotter";
import Nav from "./componnts/Nav";
import Manu from "./componnts/Manu";



export default function App() {
  return (
    <div className="mac-window">
      <Manu />
      <Nav />

      <Fotter />

     
      {/* <Github/> 
      <Email/>
      <Linkdine/>
      <Pdf/>
      <Terminle/>
      <Notes/>
      <Cal/>
      <Browes/> */}

      
    </div>
  );
}
