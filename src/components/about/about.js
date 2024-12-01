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
            <div className='h4 pb-5 pt-1'>
              I am a software engineer with primary focus on backend.
              I love solving real life problems and technical problems with experience in optimizing systems and enhacing product and user experience.
              During my free time I like to explore nature, solve sudoku and rubik's cube.
              {/* I code in multiple languaC++, Python and JavaScript. I also ❤️ hacking. */}
            </div>
          </div>
        </div>

        <div className='row'>
          <div className='col-md-12'>
            <a
              className={`introLinks introLinks-hr`}
              href="https://www.topmate.io/jindal_shubham"
              target="_blank"
              rel="noreferrer"
            >
              <img src={process.env.PUBLIC_URL + "/topmate.png"} width="50em" height="50em" />
            </a>
            {profilesData.map((val, key) => (
              <a
                key={key}
                className={`introLinks introLinks-${val.iconClass}`}
                href={val.url}
                target="_blank"
                rel="noreferrer"
              >
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