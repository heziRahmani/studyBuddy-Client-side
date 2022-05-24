import React, { lazy, Suspense } from "react";
import Loader from "react-loaders";
import { Outlet } from "react-router";

import "../cssDashboard/cssDashboard.css";

const SideBar = lazy(() =>
  import("../../../generalComponents/sideBar/SideBar")
);

export default function CssDashboard() {
  return (
    <Suspense fallback={<Loader type='pacman' />}>
      <div className='mainCssDashboard_container  '>
        <SideBar />

        <div
          id='mainCssDashboard_box'
          className='mainCssDashboard_box overflowHidden'>
          <div>
            <Outlet />
          </div>
        </div>
      </div>
    </Suspense>
  );
}
