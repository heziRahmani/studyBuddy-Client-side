import React, { lazy, Suspense } from "react";
import { Outlet } from "react-router";
import SideBar from "../../../generalComponents/sideBar/SideBar";
// import SideBar from "../../generalComponent/sideBar/SideBar";
// import HtmlNvBar from "../htmlNavBar/HtmlNavBar";
// import HtmlSideBar from "../htmlSideBar/HtmlSideBar";
// import HtmlTags from "../htmlTags/HtmlTags";
import "./htmlDashboard.css";
// const SideBar = lazy(() => import("../../sideBar/SideBar"));
const NavBar = lazy(() => import("../../../generalComponents/navBar/NavBar"));
export default function HtmlDashboard() {
  console.log(window.location.pathname);
  return (
    <Suspense fallback={<div>loading...</div>}>
      <div className='htmlDashboardMainContainer'>
        <SideBar />

        <div className='htmlMainBox'>
          <Outlet />
        </div>
      </div>
    </Suspense>
  );
}
