import React, { lazy, Suspense, useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router";
import { useCheckAuth } from "../../../utilities/hooks/useCheckAuth";
import "./adminMainPage.css";
// component imports
const SideBar = lazy(() =>
  import("../../../generalComponents/sideBar/SideBar")
);
export default function AdminMainPage() {
  const [logdIn, setlogdIn] = useState(false);

  const _navigate = useNavigate();
  let currentUrl = window.location.href;
  // admin section auth
  useEffect(() => {
    let authToken = sessionStorage.getItem("Auth Token");
    if (authToken) {
      setlogdIn(true);
    } else {
      setlogdIn(false);
      _navigate("/admin/signin");
    }
  }, [currentUrl]);

  return (
    <Suspense fallback={<div>loading...</div>}>
      <div id='adminMain_container' className='adminMain_container'>
        <SideBar />
        <div id='adminMain_budy' className='adminMain_body'>
          <div id='adminMain_box' className='adminMain_box'>
            <Outlet />
          </div>
        </div>
      </div>
    </Suspense>
  );
}
