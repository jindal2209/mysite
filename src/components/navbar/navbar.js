import React from "react";
import './navbar.css';
import { closeMenu, closeMenuKey } from "../../utils/utils";

export default function Navbar() {
  return (
    <nav>
      <input type="checkbox" id="check" />
      <label htmlFor="check" className="checkbtn" onKeyPress={() => closeMenuKey()}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </label>
      <label>
        <a className="logo" href="#home">
          SHUBHAM JINDAL
          {/* <img src={process.env.PUBLIC_URL + "/logo.png"} alt="logo" /> */}
        </a>
      </label>
      <ul style={{ 'listStyleType': 'none' }}>
        <li className="center">
          <div>
            <img src={process.env.PUBLIC_URL + "/myimg.png"} alt="Avatar" />
          </div>
          <div style={{ fontSize: 'x-large', fontWeight: 'bolder', padding: '5px 0' }}>
            Shubham Jindal
          </div>
          <div>
            <a href="https://github.com/jindal2209" target="_blank" rel="noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/jindal2209" target="_blank" rel="noreferrer">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </li>
        <li><a href="#home" onClick={() => closeMenu()}><i className="fas fa-home"></i> Home</a></li>
        <li><a href="#about" onClick={() => closeMenu()}><i className="fas fa-user"></i> About</a></li>
        <li><a href="#skills" onClick={() => closeMenu()}><i className="fas fa-lightbulb"></i> Skills</a></li>
        <li><a href="#experience" onClick={() => closeMenu()}><i className="fas fa-id-card"></i> Experience</a></li>
        <li><a href="#projects" onClick={() => closeMenu()}><i className="fas fa-file-alt"></i> Projects</a></li>
        <li><a href="#contact" onClick={() => closeMenu()}><i className="fas fa-id-card-alt"></i> Contact</a></li>
      </ul>
      <div className='scrollPos' id='scrollPos'></div>
    </nav>
  )
}
