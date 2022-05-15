import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../../generalComponents/sideBar/SideBar";
import {
  IoLogoCss3,
  IoLogoJavascript,
  IoLogoHtml5,
  IoIosPulse,
  IoMdStarHalf,
} from "react-icons/io";
import { IoLogoFirebase } from "react-icons/io5";

import { FaReact, FaJs, FaHome } from "react-icons/fa";
import "./about.css";
function About() {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <div className='mainAbout_container '>
        <SideBar />
        {/* <CssSideBar/> */}
        <div id='mainAbout_box' className='mainAbout_box '>
          <div className='aboutHeader container'>
            <div class='box'>
              <div class='title'>
                <span class='block'></span>
                <h1>
                  Hezi Rahmani<span></span>
                </h1>
              </div>

              <div class='role'>
                <div class='block'></div>
                <p>Full Stack Developer</p>
              </div>
            </div>
          </div>

          <div className='about_intro_box'>
            <p>
              This site is going to be an on going project, he was built to give
              me a place to practice and as a hub for information that I find
              useful.
            </p>
            <p>
              That means that this site is going to evolved as time will pass
              and I will grow as a developer.
            </p>
            <p> so stay tuned and have a great day</p>
          </div>
          <div className='stack_container'>
            <h2>Stack</h2>
            <div className='stack_box'>
              <div className='icon_box'>
                <IoLogoCss3 />
              </div>
              <div className='icon_box'>
                <IoLogoHtml5 />
              </div>
              <div className='icon_box'>
                <IoLogoJavascript />
              </div>
              <div className='icon_box'>
                <FaReact />
              </div>
              <div className='icon_box'>
                <IoLogoFirebase />
              </div>
            </div>
            <div className='stack_data'>
              <p></p>
            </div>
          </div>
        </div>
      </div>
    </Suspense>
  );
}

export default About;
