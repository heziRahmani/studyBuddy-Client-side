import React, { lazy, Suspense } from "react";

import "./jsMain.css";

import { Outlet } from "react-router";

const SideBar = lazy(() =>
  import("../../../generalComponents/sideBar/SideBar")
);

export default function JsMain() {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <div
        id='JsMain_container'
        className='jsDashboard_container overflowHidden'>
        <SideBar />

        <div id='jsMainBody_container' className='jsMainBody_container'>
          <div id='jsDashboard_box' className='jsMainBody_box'>
            <Outlet />
          </div>
        </div>
      </div>
    </Suspense>
  );
}
