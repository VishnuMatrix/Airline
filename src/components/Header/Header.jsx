// src/components/Header/Header.jsx
import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="main-header">
      <div className="header-container">
        <div className="logo">AURA</div>
        <nav className="main-nav">
          <ul>
            <li>
              <a href="#" className="active">
                BOOK
              </a>
            </li>
            <li>
              <a href="#">MANAGE</a>
            </li>
            <li>
              <a href="#">EXPERIENCE</a>
            </li>
            <li>
              <a href="#">WHERE WE FLY</a>
            </li>
            <li>
              <a href="#">LOYALTY</a>
            </li>
            <li>
              <a href="#">HELP</a>
            </li>
          </ul>
        </nav>
        <div className="header-actions">
          <a href="#">IN</a>
          <a href="#">🔍</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
