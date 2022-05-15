import React, { lazy, Suspense } from "react";
import { Outlet } from "react-router";
import SideBar from "../../../generalComponents/sideBar/SideBar";
// import SideBar from "../../sideBar/SideBar";
import "../cssDashboard/cssDashboard.css";
const CssNavBar = lazy(() =>
  import("../../../generalComponents/navBar/NavBar")
);
// const SideBar = lazy(() => import("../../sideBar/SideBar"));
// import CssSideBar from '../cssSideBar/CssSideBar'

export default function CssDashboard() {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <div className='mainCssDashboard_container '>
        <SideBar />
        {/* <CssSideBar/> */}
        <div id='mainCssDashboard_box' className='mainCssDashboard_box'>
          <CssNavBar />
          <div>
            <Outlet />
          </div>
        </div>
      </div>
    </Suspense>
  );
}
