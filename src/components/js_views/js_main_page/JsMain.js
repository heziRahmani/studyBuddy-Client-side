import React, { lazy, Suspense, useState } from "react";

import "./jsMain.css";
// import ArreyAndObjects from "../arreys/Arreys";
import { Outlet } from "react-router";
// import SideBar from "../../generalComponent/sideBar/SideBar";
// import { useEffect, useState } from "react/cjs/react.production.min";

// const JsNavBar=lazy(()=>import( "../jsNavBar/JsNavBar"))
const SideBar = lazy(() =>
  import("../../../generalComponents/sideBar/SideBar")
);
const NavBar = lazy(() => import("../../../generalComponents/navBar/NavBar"));

export default function JsMain() {
  const [state, setstate] = useState("");

  return (
    <Suspense fallback={<div>loading...</div>}>
      <div id='JsMain_container' className='jsDashboard_container'>
        <SideBar />

        <div id='jsMainBody_container' className='jsMainBody_container'>
          {/* <NavBar/> */}

          <div id='jsDashboard_box' className='jsMainBody_box'>
            <Outlet />
          </div>
        </div>
      </div>
    </Suspense>
  );
}

// <div className='ligthHeder_box'>
//             <h3>
//               Java<span> Script</span>
//             </h3>
//           </div>
//           <div className='ligthHeder_ligth'></div>
// let pos = document.documentElement;
// pos.addEventListener("mousemove", (e) => {
//   pos.style.setProperty("--x", e.clientX + "px");
//   pos.style.setProperty("--y", e.clientY + "px");
// });
/* .ligthHeder_box {
  position: absolute;
  width: 90%;
  top: 0;
  left: 10%;
  bottom: 0;
  height: 100vh;
  background-color: rgb(255, 255, 255);
  display: grid;
  place-items: center;
}
.hide_ligthHeder_box,
.hide_ligthHeder_ligth {
  display: none;
}
.ligthHeder_box h3 {
  font-size: 10em;
  color: rgb(0, 0, 0);
}
.ligthHeder_ligth {
  position: fixed;
  width: 90%;
  height: 100vh;
  top: 0;
  left: 10%;
  bottom: 0;
  background: radial-gradient(
    circle at var(--x) var(--y),
    transparent 10%,
    rgba(255, 255, 255, 0.95) 20%
  );
} */
