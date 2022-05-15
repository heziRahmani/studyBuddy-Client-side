import React from "react";
import { NavLink } from "react-router-dom";
import "./navBar.css";
export default function NavBar() {
  return (
    <div id='jsNvBar_mainContainer' className='jsNavBar_mainContainer '>
      {/* <div id='jsNavBar_iconContainer' className='jsNavBar_iconContainer'> */}
      {/* <img src={require('../../imgs/foxWorld.png')} id='jsNavBar_icon' width={50} height={50} alt='a'/> */}
      {/* <div id='jsIconContainer' className='jsIconContainer'>
          <label className='checkBoxLbl'>
            <input
              defaultValue={false}
              type={"checkbox"}
              id='checkBox_input'
              onChange={sideBarHendeler}
            />
            <div className='checkBoxIcon'>
              <div className='shadow'></div>
              <div className='checkBoxiconBox'>
                <ion-icon name='menu-outline'></ion-icon>
              </div>
            </div>
          </label>
        </div>
      </div> */}
      <div id='jsNavBar_listContainer' className='jsNavBar_listContainer'>
        <ul>
          <NavLink id='navLink' to={"/"}>
            HOME
          </NavLink>
          <NavLink id='navLink' to={"/css"}>
            CSS
          </NavLink>
          <NavLink id='navLink' to={"/html"}>
            HTML
          </NavLink>
          <NavLink id='navLink' to={"/js"}>
            Java Script
          </NavLink>
          <NavLink id='navLink' to={"/admin"}>
            ADMIN
          </NavLink>
        </ul>
      </div>
    </div>
  );
}
