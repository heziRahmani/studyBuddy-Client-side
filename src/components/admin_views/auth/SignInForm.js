import React, { useEffect, useRef, useState } from "react";
import { Outlet, useNavigate } from "react-router";
// import { creatUser, signInFunc, signOutFunc } from '../../fireBase_connection/FireBaseConnection';

import { useSignIn } from "../../../utilities/hooks/useSignIn";
import AdminNavBar from "../../../generalComponents/navBar/NavBar";
// import AdminSideBar from '../adminSideBar/AdminSideBar';
import "./signInForm.css";
export default function SignInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [trigerReload, setTrigerReload] = useState(false);
  let _navigate = useNavigate();
  let _emailRef = useRef();
  let _passwordRef = useRef();

  const onSubmitHendeler = (e) => {
    e.preventDefault();

    setEmail(_emailRef.current.value);
    setPassword(_passwordRef.current.value);
    alert("done");
  };

  let { data } = useSignIn(email, password);

  useEffect(() => {
    if (sessionStorage.getItem("Auth Token")) {
      _navigate("/admin/admindashboard");
    }
  }, [data]);

  return (
    <div>
      <Outlet />
      <div className='background'>
        <div className='container'>
          <div className='screen'>
            <div className='screen-header'>
              <div className='screen-header-left'>
                <div className='screen-header-button close'></div>
                <div className='screen-header-button maximize'></div>
                <div className='screen-header-button minimize'></div>
              </div>
              <div className='screen-header-right'>
                <div className='screen-header-ellipsis'></div>
                <div className='screen-header-ellipsis'></div>
                <div className='screen-header-ellipsis'></div>
              </div>
            </div>
            <div className='screen-body'>
              <div className='screen-body-item left'>
                <div className='app-title'>
                  <span>Sign In</span>
                  {/* <span>Arreys</span> */}
                </div>
              </div>
              <form
                onSubmit={onSubmitHendeler}
                id='signInForm'
                className='screen-body-item '>
                <div className='app-form'>
                  <div className='app-form-group'>
                    <label>E-Mail</label>
                    <input
                      className='app-form-control'
                      placeholder='Enter User Name'
                      ref={_emailRef}
                    />
                  </div>
                  <div className='app-form-group'>
                    <label>Password</label>
                    <input
                      className='app-form-control'
                      placeholder='Enter Password'
                      ref={_passwordRef}
                    />
                  </div>

                  <div className='app-form-group buttons'>
                    <button className='app-form-button'>CANCEL</button>
                    <button type='submit' className='app-form-button'>
                      Log In
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
