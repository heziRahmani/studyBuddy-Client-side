import { onSnapshot, orderBy, query } from "firebase/firestore";
import React, { useRef, useState } from "react";

import { toDoRef } from "../../utilities/fireBase_connection/FireBaseConnection";

import useAddDoc from "../../utilities/hooks/useAddDoc";

import { useCollection } from "../../utilities/hooks/useCollection";
import AddToDoForm from "./AddToDoForm";
import SingleDoneToDo from "./SingleDoneToDo";

import SingleToDo from "./SingleToDo";
import "./toDo.css";
import UpdateToDoForm from "./UpdateToDoForm";
export default function ToDoOld() {
  //get todo from database
  const q = query(toDoRef, orderBy("StartTime"));

  let { data } = useCollection(q);

  return (
    <div className='toDo_main_container'>
      <div className='toDo_h2_box'>
        <h2>Need To DO!</h2>
      </div>
      <AddToDoForm />
      <div className='toTos_container'>
        <div className='singleToDo_container'>
          {data &&
            data
              .filter((toDo) => toDo.isDoneStatus === false)
              .map((toDoData, key) => {
                return <SingleToDo key={key} data={toDoData} />;
              })}
        </div>
        <div className='singleDoneToDo_container'>
          {data &&
            data
              .filter((toDo) => toDo.isDoneStatus === true)
              .map((toDoData, key) => {
                return <SingleDoneToDo key={key} data={toDoData} />;
              })}
        </div>
      </div>
      <div id='updateToDoForm_container' className='toDoFormDisplay'>
        <UpdateToDoForm />
      </div>
    </div>
  );
}
