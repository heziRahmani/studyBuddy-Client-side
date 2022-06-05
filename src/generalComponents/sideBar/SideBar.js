import React, { useEffect, useState } from "react";
import "./sideBar.scss";
import { SideBarData } from "./SideBarData";
import { Link, NavLink } from "react-router-dom";

export default function SideBar() {
  const [svg, setSvg] = useState(null);
  const [svgViewBox, setSvgViewBox] = useState(null);

  useEffect(() => {
    //header routs

    SideBarData.map((item) => {
      if (window.location.pathname.includes(item.link)) {
        setSvg(item.svg);
        setSvgViewBox(item.viewBox);
      }
    });
  }, []);
  //end header routs

  // tuggle sideBar function
  function tuggleHendeler() {
    const icon = document.querySelector(".icon");
    const sideBar = document.querySelector("#sideBarContainer");

    icon.classList.toggle("open");

    sideBar.classList.toggle("sideBarContainerOpen");
  }

  return (
    <>
      <div className='tuggleSideBar_box'>
        {/* <button className='tuggle_btn'> */}
        <div className='icon navBar_tuggle_icon' onClick={tuggleHendeler}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        {/* </button> */}
      </div>
      <div id='sideBarContainer' className='sideBarContainer'>
        {/* sideBar header */}

        <div id='sideBarHeader' className='sideBarHeader'>
          <svg
            id='jsHeader'
            width='80%'
            height='80%'
            viewBox={svgViewBox}
            fill='none'>
            <defs>
              <linearGradient id='grad1' x1='0%' y1='0%' x2='100%' y2='0%'>
                <stop
                  offset='0%'
                  style={{ stopColor: "rgb(255,0,0)", stopOpacity: 0 }}
                />
                <stop
                  offset='100%'
                  style={{ stopColor: "rgb(255,0,0)", stopOpacity: 0 }}
                />
              </linearGradient>
            </defs>
            <ellipse cx='200' cy='70' rx='85' ry='55' fill='url(#grad1)' />
            <path d={svg ? svg : ""} stroke='#ffffff' />
          </svg>
        </div>

        {/* css sideBar Body */}
        <div id='sideBar_body' className='sideBar_body'>
          <ul className='main_ul'>
            {SideBarData.map((val, key) => {
              return (
                <li key={key} className='sideBar_li'>
                  <NavLink
                    id={window.location.pathname == val.link ? "active" : ""}
                    to={val.link}
                    className='sideBarLink'>
                    <div className='iconBox'>{val.icon}</div>
                    <div className='liSpan'>
                      <span>{val.titel}</span>
                    </div>
                  </NavLink>

                  <ul className='subLinks'>
                    {val.subLinks.map((item, key) => {
                      return (
                        <li key={key}>
                          <NavLink
                            to={item.link}
                            // className='subListSideBarLink'
                            className={({ isActive }) =>
                              isActive
                                ? "subListSideBarLink active"
                                : "subListSideBarLink"
                            }>
                            <div className='subLincIconBox'>{item.icon}</div>
                            <div className='subListLiSpan'>
                              <span>{item.titel}</span>
                            </div>
                          </NavLink>
                        </li>
                      );
                    })}
                  </ul>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}
