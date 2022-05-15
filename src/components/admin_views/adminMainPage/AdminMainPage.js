import React, { lazy, Suspense, useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router";
import SideBar from "../../../generalComponents/sideBar/SideBar";
import { useCheckAuth } from "../../../utilities/hooks/useCheckAuth";
import NavBar from "../../../generalComponents/navBar/NavBar";
import "./adminMainPage.css";
export default function AdminMainPage() {
  const [logdIn, setlogdIn] = useState(false);
  const { user } = useCheckAuth();

  const _navigate = useNavigate();
  let currentUrl = window.location.href;
  useEffect(() => {
    let authToken = sessionStorage.getItem("Auth Token");
    // setlogdIn(authToken);

    if (authToken) {
      setlogdIn(true);
      // _navigate("/admin/");
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
