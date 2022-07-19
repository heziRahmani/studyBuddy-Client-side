import React, { Suspense } from "react";
import Loader from "react-loaders";
import { Outlet } from "react-router-dom";
import SideBar from "../../../generalComponents/sideBar/SideBar";

function SqlDashboard() {
  return (
    <Suspense fallback={<Loader type='pacman' />}>
      <div className='mainSqlDashboard_container '>
        <SideBar />

        <div id='mainSqlDashboard_box' className='mainSqlDashboard_box'>
          <div className='sqlMainBody_box '>
            <Outlet />
          </div>
        </div>
      </div>
    </Suspense>
  );
}

export default SqlDashboard;
