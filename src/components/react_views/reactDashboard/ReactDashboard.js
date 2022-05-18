import React, { Suspense, lazy } from "react";
import { Outlet } from "react-router-dom";
import "./reactDashboard.css";
const SideBar = lazy(() =>
  import("../../../generalComponents/sideBar/SideBar")
);

function ReactDashboard() {
  return (
    <div>
      {/* ReactGeneral */}
      <Suspense fallback={<div>loading...</div>}>
        <div className='reactDashboardMainContainer '>
          <SideBar />
          <div className='reactDashboardMainBox '>
            <Outlet />
          </div>
        </div>
      </Suspense>
    </div>
  );
}

export default ReactDashboard;
