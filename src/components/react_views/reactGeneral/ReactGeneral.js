import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../../../generalComponents/sideBar/SideBar";

function ReactGeneral() {
  return (
    <div>
      {/* ReactGeneral */}
      <Suspense fallback={<div>loading...</div>}>
        <div className='reactGeneralMainContainer '>
          <SideBar />
          <div className='reactGeneralMainBox '>
            <Outlet />
          </div>
        </div>
      </Suspense>
    </div>
  );
}

export default ReactGeneral;
