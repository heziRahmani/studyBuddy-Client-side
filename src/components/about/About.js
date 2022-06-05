import React, { Suspense, lazy } from "react";

import { IoLogoCss3, IoLogoJavascript, IoLogoHtml5 } from "react-icons/io";
import { IoLogoFirebase } from "react-icons/io5";
import { DiGithubAlt, DiGithubFull } from "react-icons/di";

import { FaReact } from "react-icons/fa";
import "./about.scss";
import Loader from "react-loaders";

const SideBar = lazy(() => import("../../generalComponents/sideBar/SideBar"));
function About() {
  return (
    <Suspense fallback={<Loader type='pacman' />}>
      <div className='mainAbout_container '>
        <SideBar />

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
          <div className='links_container'>
            <a
              href='https://github.com/heziRahmani/studyBuddy-Client-side_2022'
              target={"blank"}>
              <div className='gitHub_link_titel_box linkBox'>
                <div className='gitHub_link_titel linkBox'>
                  <h4>Link To the Project in</h4>
                </div>
                <div className='gitHub_link_titel_icon_box'>
                  <DiGithubFull className='gitHub_icon' />
                </div>
              </div>
              <div className='gitHub_link_Box_cat linkBox'>
                <DiGithubAlt className='gitHub_icon_cat' />
              </div>
            </a>
          </div>
        </div>
      </div>
    </Suspense>
  );
}

export default About;
