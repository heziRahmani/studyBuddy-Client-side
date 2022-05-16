import React, { useEffect, useRef, useState } from "react";
import { Outlet, useNavigate } from "react-router";

import { useSignIn } from "../../../utilities/hooks/useSignIn";

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
    <div className='signIn_form_container'>
      <div className='signIn_form_box'>
        <div className='signIn_form_titel'>
          <span>Sign In</span>
        </div>
        <form
          onSubmit={onSubmitHendeler}
          id='signInForm'
          className='signInForm'>
          <div className='signInForm_box'>
            <div className='signInForm_group'>
              <label>E-Mail:</label>
              <input
                className='signInForm_group'
                placeholder='Enter User Name'
                ref={_emailRef}
              />
            </div>
            <div className='signInForm_group'>
              <label>Password:</label>
              <input
                className='app-form-control'
                placeholder='Enter Password'
                ref={_passwordRef}
              />
            </div>

            <div className='signInForm_group buttons'>
              {/* <button className='signInForm-form-button button-30'>
                CANCEL
              </button> */}
              <button
                type='submit'
                className='signInForm-form-button button-30'>
                Log In
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
