import React, { useRef, useState, useEffect } from "react";
import { toDoRef } from "../../../utilities/fireBase_connection/FireBaseConnection";
import useAddDoc from "../../../utilities/hooks/useAddDoc";
import ToDoForm from "./ToDoForm";
import ToDo_cards from "./ToDo_cards";
import { Outlet, useNavigate } from "react-router";
function ToDo() {
  const _navigate = useNavigate();
  useEffect(() => {
    let authToken = sessionStorage.getItem("Auth Token");

    if (!authToken) {
      _navigate("/admin/signin");
    }
  }, []);
  return (
    <div className='toDo_main_container'>
      <div className='toDo_header_box'>
        <h2>Tasks Manager</h2>
      </div>
      <ToDoForm />
      <div className='toTos_container'>
        <ToDo_cards />
      </div>
    </div>
  );
}

export default ToDo;
