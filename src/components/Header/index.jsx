import React from "react";
import "./style.css";

export default function Header() {

  return (
    <header>
      <div className="header-container">
        <div className="header-container__author">
          Marcel Stulczewski 118903
        </div>
        <div className="header-container__title">
          Podróże przez filmy małe i duże :D
        </div>
        <div className="header-container__logo">XD</div>
      </div>
    </header>
  );
}