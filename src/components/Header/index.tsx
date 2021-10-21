import React, { useState, useEffect } from "react";
import './style.css';

export default function Header() {


  const [header, setHeader] = useState("header");

  const listenScrollEvent = (event : any) => {
    if (window.scrollY < 73) {
      return setHeader("header");
    } else if (window.scrollY > 70) {
      return setHeader("header2");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);

    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, []);


  return (
    <header className={header} >
        <div className="titulo-header">
          <h1>Food Pets</h1>
        </div>
        <div className="conteudo-header">
          <h2>Quem Somos</h2>
          <h2>mais</h2>
          <h2>mais</h2>
          <button className="button-header" >
            <p>register</p>
          </button>
        </div>
    </header>
  );
}