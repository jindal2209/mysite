import React from "react";
import './about.css';
import { profilesData } from "./profiles_data";

export default function About() {
  return (
    <div className='row flex justify-content-center align-items-center' id="about">
      <div className='col-md-6' data-aos='zoom-in'>
        <div className='row'>
          <div className='col-md-12'>
            <span className='h1 fw-bold'>
              Hello,<br /> My name is Shubham Jindal.
            </span>
            <br />
            <div className='h3 pb-5'>
              I am a Web Developer and a competitive programmer.
              I code in C++, Python and JavaScript. I also ❤️ hacking.
            </div>
          </div>
        </div>

        <div className='row'>
          <div className='col-md-12'>
            {profilesData.map((val, key) => (
              <a key={key} className="introLinks" href={val.url} target="_blank" rel="noreferrer">
                <i className={val.icon}></i>
              </a>
            ))}
          </div>
        </div>

      </div>
      <div className='col-md-6 py-5' data-aos="zoom-in">
        <img className='img img-fluid' src={process.env.PUBLIC_URL + "/develop.gif"} alt="" />
      </div>
    </div>
  )
}