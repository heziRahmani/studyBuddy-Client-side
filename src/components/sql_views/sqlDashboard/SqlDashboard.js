import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../../../generalComponents/sideBar/SideBar";
import "../sqlDashboard/sqlDashboard.css";
function SqlDashboard() {
  return (
    <Suspense fallback={<div>loading...</div>}>
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
