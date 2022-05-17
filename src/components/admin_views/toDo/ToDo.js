import React, { lazy, useEffect } from "react";

import { useNavigate } from "react-router";
import { FcTodoList } from "react-icons/fc";
import "./toDo.css";

const ToDoForm = lazy(() => import("./ToDoForm"));
const ToDo_cards = lazy(() => import("./ToDo_cards"));
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
        <FcTodoList />
      </div>
      <ToDoForm />
      <div className='toTos_container'>
        <ToDo_cards />
      </div>
    </div>
  );
}

export default ToDo;
