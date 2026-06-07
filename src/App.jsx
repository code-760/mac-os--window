import React from "react";
import "./App.scss";
import Fotter from "./componnts/Fotter";
import Nav from "./componnts/Nav";
import Manu from "./componnts/Manu";
import Window from "./pages/window";
import Github from "./pages/github";
import Email from "./pages/Email";
import Linkdine from "./pages/linkdine";
import Pdf from "./pages/pdf";
import Terminle from "./pages/terminle";
import Notes from "./pages/Notes";
import Cal from "./pages/cal";


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
