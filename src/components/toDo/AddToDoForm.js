import React, { useState, useRef } from "react";
import { toDoRef } from "../../utilities/fireBase_connection/FireBaseConnection";
import useAddDoc from "../../utilities/hooks/useAddDoc";

function AddToDoForm() {
  const [newToDo, setNewToDo] = useState(null);

  //refs
  let _inputRef = useRef();
  let _prioretyRef = useRef();
  let _tagRef = useRef();

  //form hendeler
  const submitHendeler = (e) => {
    e.preventDefault();
    let startDate = new Date().toLocaleString();

    let todoObj = {
      toDo: _inputRef.current.value,
      praiorety: _prioretyRef.current.value,
      status: "To Do",
      isDoneStatus: false,
      StartTime: startDate,
      tag: _tagRef.current.value,
    };
    setNewToDo(todoObj);
    document.querySelector(".input_box").value = "";
  };

  //addToDataBase

  useAddDoc(toDoRef, newToDo);
  return (
    <>
      <form
        className='input_Form'
        id='input_Form'
        onSubmit={(e) => submitHendeler(e)}>
        <div>
          <input
            className='input_box'
            defaultValue={""}
            ref={_inputRef}
            required
          />
          <button className='form_submitBtn' type='submit'>
            GO
          </button>
        </div>
        <div className='toDo_select_box'>
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
          <div>
            <label>Subject:</label>
            <select
              name='toDOSelect_tag'
              ref={_tagRef}
              className='todo_filter toDOSelect_tag'
              title='Tag'>
              <option value='Style'>STYLE</option>
              <option value='Add To The Site'>ADD TO THE SITE</option>
              <option value='Study'>Study</option>
              <option value='Back-End'>Back-End</option>
            </select>
          </div>
          {/* <div>
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
          </div> */}
        </div>
      </form>
    </>
  );
}

export default AddToDoForm;
