import { doc, updateDoc } from "firebase/firestore";
import React, { useState, useRef, Suspense } from "react";
import { AiFillEdit, AiFillDelete, AiOutlineCheck } from "react-icons/ai";
import Loader from "react-loaders";
import { db } from "../../../utilities/fireBase_connection/FireBaseConnection";
import {
  isDoneHendeler,
  removeFromDataBaseHendeler,
} from "../../../utilities/functions/admin_view_functions/hendelers";

function Single_toDo({ data }) {
  const [editeble, setediteble] = useState(false);

  // refs
  let _toDoRef = useRef();
  let _titelRef = useRef();
  let _tagRef = useRef();
  let _statusRef = useRef();
  let _prioretyRef = useRef();

  //update hendeler

  function updateHendeler(_id) {
    if (!editeble) {
      setediteble(true);
    }

    const docRef = doc(db, "toDo", data.id);

    let prioretyArrey = _prioretyRef.current.value
      ? _prioretyRef.current.value.split(" ")
      : "";
    updateDoc(docRef, {
      status: _statusRef.current.value ? _statusRef.current.value : "",
      titel: _titelRef.current.value ? _titelRef.current.value : "",
      toDo: _toDoRef.current.value ? _toDoRef.current.value : "",
      priority: [
        prioretyArrey[0] ? prioretyArrey[0] : "",
        prioretyArrey[1] ? prioretyArrey[1] : "",
      ],

      isDoneStatus: _statusRef.current.value === "DONE" ? false : true,
      createdDateTime: data.createdDateTime ? data.createdDateTime : "",
      tag: _tagRef.current.value ? _tagRef.current.value : "",
    }).then(() => {
      // console.log(_prioretyRef.current.value);

      // console.log("update done");
      setediteble(false);
    });
  }

  return (
    <Suspense fallback={<Loader type='pacman' />}>
      <div className='single_toDo_container'>
        <li id='singleToDo_li' className='singleToDo_li'>
          {/* input section */}

          <div className='singleToDoDIv_toDo'>
            {editeble ? (
              <input ref={_titelRef} defaultValue={data.titel} />
            ) : (
              <span>{data.titel}</span>
            )}
          </div>
          {/*textarea section  */}
          <div className='singleToDoDIv_toDo'>
            {editeble ? (
              <textarea ref={_toDoRef} defaultValue={data.toDo} />
            ) : (
              <span>{data.toDo}</span>
            )}
          </div>
          <div className='buttomCard_container'>
            <div className='buttomCard_data'>
              {/* priority */}
              <div className='singleToDoDIv_praiorety_box'>
                {editeble ? (
                  <div className='toDo_select'>
                    <label>Priorety:</label>
                    <select
                      id='toDo_Select_priorety'
                      name='toDo_Select_priorety'
                      ref={_prioretyRef}
                      className='todo_filter  toDOSelect_priorety'
                      title='priorety'>
                      <option value='#fc766aff High'>High</option>
                      <option value='#22c1c3 Medium'>Medium</option>
                      <option value='#e0e075 Low'>Low</option>
                    </select>
                  </div>
                ) : (
                  <p>{data.priority[1]}</p>
                )}
                <div
                  id='singleToDoDIv_praiorety'
                  className='singleToDoDIv_praiorety'
                  style={{ backgroundColor: data.priority[0] }}></div>
                {/* status */}
                {editeble ? (
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
                ) : (
                  <span>{data.status}</span>
                )}
              </div>

              {/* subject */}
              {editeble ? (
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
              ) : (
                <div className='singleToDoDIv_StartTime'>
                  <label>
                    Subject:
                    <span>{data.tag}</span>
                  </label>
                </div>
              )}
              {/* add   */}
              <div className='singleToDoDIv_StartTime'>
                <label>
                  Added:
                  <span>{data.createdDateTime}</span>
                </label>
              </div>
            </div>
            <div className='singleToDoBtn_container'>
              <div>
                <button
                  onClick={() => removeFromDataBaseHendeler("toDo", data.id)}>
                  <AiFillDelete />
                </button>
              </div>
              <div>
                <button onClick={() => updateHendeler(data.id)}>
                  <AiFillEdit />
                </button>
              </div>
              <div>
                <button onClick={() => isDoneHendeler(data.id)}>
                  <AiOutlineCheck />
                </button>
              </div>
            </div>
          </div>
        </li>
      </div>
    </Suspense>
  );
}

export default Single_toDo;
