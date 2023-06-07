import React from "react";
import "./style.css";

export default function Fotter() {

  return (
    <footer className="footer-container">
      <div className="footer-container__author">
        Marcel Daniel Stulczewski
      </div>
      <div className="footer-container__info">
        Więcej filmowych 'Perełek' w przyszłości
      </div>
      <div><a href="https://www.facebook.com/" className="footer-container__socials">Obserwujcie mnie na FB</a></div>
    </footer>
  );
}