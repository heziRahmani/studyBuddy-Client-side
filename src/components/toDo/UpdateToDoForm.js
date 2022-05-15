import { doc, updateDoc } from "firebase/firestore";
import React, { useRef, useContext } from "react";
import { UpdateFormContext } from "../../utilities/context/updateFormContext";
import { db } from "../../utilities/fireBase_connection/FireBaseConnection";
import "./toDo.css";

export default function UpdateToDoForm() {
  let _toDoRef = useRef();
  let _prioretyRef = useRef();
  let _statusRef = useRef();
  let { contextItems } = useContext(UpdateFormContext);
  // add to data base function
  function updateToDO(e) {
    e.preventDefault();
    const upDateForm = document.querySelector("#updateToDoForm");
    // setDocId();

    const docRef = doc(db, "toDo", sessionStorage.getItem("updateFormId"));
    updateDoc(docRef, {
      toDo: _toDoRef.current.value,

      status: _statusRef.current.value,
      praiorety: contextItems.isDoneStatus ? 0 : _prioretyRef.current.value,
    }).then(() => {
      sessionStorage.removeItem("updateFormId");
      upDateForm.reset();
      console.log("update done");
      console.log(contextItems);
    });

    upDateForm.reset();

    let formContainer = document.querySelector("#updateToDoForm_container");
    formContainer.classList.add("toDoFormDisplay");
    upDateForm.reset();
  }

  document.querySelectorAll("option").forEach((item) => {
    if (
      item.value == contextItems.status ||
      item.value == contextItems.praiorety
    ) {
      item.setAttribute("selected", "true");
    }
  });
  return (
    <div>
      <form onSubmit={updateToDO} id='updateToDoForm' className='background'>
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
                  <span>UPDATE</span>
                  <span>TO-DO</span>
                </div>
              </div>
              <div className='screen-body-item'>
                <div className='app-form'>
                  <div className='app-form-group'>
                    <label>TO-DO</label>
                    <textarea
                      rows={4}
                      className='app-form-control'
                      placeholder={contextItems.toDo}
                      defaultValue={contextItems.toDo}
                      ref={_toDoRef}
                    />
                  </div>
                  <div className='app-form-group'>
                    <div>
                      <label>STATUS:</label>

                      <div>
                        <label>Status:</label>
                        <select
                          name='toDOSelect_tag'
                          ref={_statusRef}
                          className='todo_filter toDOSelect_tag'
                          title='Tag'>
                          <option value='Done'>Done</option>
                          <option value='Warking on it'>Warking on it</option>
                          <option value='To Do'>To Do</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className='app-form-group'>
                    <div>
                      <label>Subject:</label>

                      <select
                        name='toDOSelect_priorety'
                        ref={_prioretyRef}
                        placeholder={contextItems.praiorety}
                        className='todo_filter  toDOSelect_priorety app-form-control'
                        title='priorety'>
                        <option value='Style'>STYLE</option>
                        <option value='Add To The Site'>ADD TO THE SITE</option>
                        <option value='Study'>Study</option>
                        <option value='Back-End'>Back-End</option>
                      </select>
                    </div>
                    <div>
                      <label>Priorety:</label>
                      <select
                        name='toDOSelect_priorety'
                        ref={_prioretyRef}
                        className='todo_filter  toDOSelect_priorety'
                        title='priorety'>
                        <option value='1'>High</option>
                        <option value='2'>Medume</option>
                        <option value='3'>Low</option>
                      </select>
                    </div>
                    <div></div>
                  </div>

                  <div className='app-form-group buttons'>
                    <button className='app-form-button'>CANCEL</button>
                    <button type='submit' className='app-form-button'>
                      SEND
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
