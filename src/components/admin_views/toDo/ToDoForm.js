import React, { useRef, useState } from "react";
import { toDoRef } from "../../../utilities/fireBase_connection/FireBaseConnection";
import useAddDoc from "../../../utilities/hooks/useAddDoc";

function ToDoForm() {
  const [newToDo, setNewToDo] = useState(null);

  // refs
  let _inputRef = useRef();
  let _tagRef = useRef();
  let _prioretyRef = useRef();
  let _toDoRef = useRef();

  //form hendeler
  const submitHendeler = (e) => {
    e.preventDefault();
    let startDate = new Date().toLocaleString();
    let sel = document.getElementById("toDo_Select_priorety");
    let text = sel.options[sel.selectedIndex].text;
    let todoObj = {
      titel: _inputRef.current.value,
      toDo: _toDoRef.current.value,
      priority: [_prioretyRef.current.value, text],
      status: "To Do",
      isDoneStatus: false,
      createdDateTime: startDate,
      tag: _tagRef.current.value,
    };
    setNewToDo(todoObj);
    document.querySelector(".input_box").value = "";
    document.querySelector(".toDo_Select_priorety").value = "";
    // console.log(todoObj);
  };

  //addToDataBase

  useAddDoc(toDoRef, newToDo);

  return (
    <div className='toDo_main_container'>
      {/* form */}

      <form
        className='input_Form'
        id='input_Form'
        onSubmit={(e) => submitHendeler(e)}>
        <div className='input_form_box'>
          <input
            className='input_box'
            defaultValue={""}
            ref={_inputRef}
            required
          />
        </div>
        <div className='input_form_box'>
          <textarea
            className='textarea_box'
            defaultValue={""}
            ref={_toDoRef}
            rows={5}
            cols={200}
            required></textarea>
        </div>
        <div className='todo_footer'>
          <div className='toDo_select_box'>
            <div className='toDo_select'>
              <label>Priorety:</label>
              <select
                id='toDo_Select_priorety'
                name='toDo_Select_priorety'
                ref={_prioretyRef}
                className='todo_filter  toDOSelect_priorety'
                title='priorety'>
                <option value='#fc766aff'>High</option>
                <option value='#22c1c3'>Medium</option>
                <option value='#e0e075 '>Low</option>
              </select>
            </div>

            <div className='toDo_select'>
              <label>Subject:</label>
              <select
                name='toDOSelect_tag'
                ref={_tagRef}
                className='todo_filter toDOSelect_tag'
                title='Tag'>
                <option value='Style'>STYLE</option>
                <option value='New Features'>New Features</option>

                <option value='Back-End'>Back-End</option>
                <option value='Bugs'>Bugs</option>
              </select>
            </div>
          </div>
          <div className='toDo_form_submit_btn'>
            <button className='form_submitBtn' type='submit'>
              GO
            </button>
          </div>
        </div>
      </form>
      {/* end form */}
    </div>
  );
}

export default ToDoForm;
