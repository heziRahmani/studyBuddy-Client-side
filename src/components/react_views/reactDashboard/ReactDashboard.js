import React, { Suspense, lazy } from "react";
import Loader from "react-loaders";
import { Outlet } from "react-router-dom";
import "./reactDashboard.css";
const SideBar = lazy(() =>
  import("../../../generalComponents/sideBar/SideBar")
);

function ReactDashboard() {
  return (
    <Suspense fallback={<Loader type='pacman' />}>
      <div>
        {/* ReactGeneral */}
        <div className='reactDashboardMainContainer '>
          <SideBar />
          <div className='reactDashboardMainBox '>
            <Outlet />
          </div>
        </div>
      </div>
    </Suspense>
  );
}

export default ReactDashboard;
