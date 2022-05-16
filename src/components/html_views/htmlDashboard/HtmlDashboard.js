import React, { lazy, Suspense } from "react";
import { Outlet } from "react-router";
import "./htmlDashboard.css";
// component imports
const SideBar = lazy(() =>
  import("../../../generalComponents/sideBar/SideBar")
);
export default function HtmlDashboard() {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <div className='htmlDashboardMainContainer '>
        <SideBar />
        <div className='htmlMainBox '>
          <Outlet />
        </div>
      </div>
    </Suspense>
  );
}
