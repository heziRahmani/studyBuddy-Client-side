import React, { Suspense } from "react";
import Loader from "react-loaders";
import { Outlet } from "react-router-dom";
import SideBar from "../../../generalComponents/sideBar/SideBar";

function ReactGeneral() {
  return (
    <div>
      {/* ReactGeneral */}
      <Suspense fallback={<Loader type='pacman' />}>
        <div className='reactGeneralMainContainer '>
          <SideBar />
          <div className='reactGeneralMainBox '>{/* <Outlet /> */}</div>
        </div>
      </Suspense>
    </div>
  );
}

export default ReactGeneral;
