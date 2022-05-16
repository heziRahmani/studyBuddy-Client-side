import React, { useState, useRef } from "react";
import { AiFillEdit, AiFillDelete, AiOutlineCheck } from "react-icons/ai";

import {
  isDoneHendeler,
  removeFromDataBaseHendeler,
  updateDataBasHendeler,
} from "../../../utilities/functions/admin_view_functions/hendelers";
function BackEndCard({ data }) {
  const [editeble, setediteble] = useState(false);
  // refs
  let _toDoRef = useRef();
  let _titelRef = useRef();
  let _statusRef = useRef();

  return (
    <div className='single_admin_Card_box'>
      <header>
        <h4>Style Tasks</h4>
      </header>
      <ul>
        {data &&
          data.map((item) => {
            return (
              <div className='single_toDo_container'>
                <li id='singleToDo_li' className='singleToDo_li'>
                  {/* input section */}

                  <div className='singleToDoDIv_toDo'>
                    {editeble ? (
                      <input ref={_titelRef} defaultValue={item.titel} />
                    ) : (
                      <span>{item.titel}</span>
                    )}
                  </div>
                  {/*textarea section  */}
                  <div className='singleToDoDIv_toDo'>
                    {editeble ? (
                      <textarea ref={_toDoRef} defaultValue={item.toDo} />
                    ) : (
                      <span>{item.toDo}</span>
                    )}
                  </div>
                  <div className='buttomCard_container'>
                    <div className='buttomCard_data'>
                      {/* priority */}
                      <div className='singleToDoDIv_praiorety_box'>
                        <div
                          id='singleToDoDIv_praiorety'
                          className='singleToDoDIv_praiorety'
                          style={{ backgroundColor: item.priority[0] }}></div>
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
                              <option value='Warking on it'>
                                Warking on it
                              </option>
                              <option value='To Do'>To Do</option>
                            </select>
                          </div>
                        ) : (
                          <span>{item.status}</span>
                        )}
                      </div>

                      {/* add   */}
                      <div className='singleToDoDIv_StartTime'>
                        <label>
                          Added:
                          <span>{item.createdDateTime}</span>
                        </label>
                      </div>
                    </div>
                    <div className='singleToDoBtn_container'>
                      <div>
                        <button
                          onClick={() =>
                            removeFromDataBaseHendeler("toDo", item.id)
                          }>
                          <AiFillDelete />
                        </button>
                      </div>
                      <div>
                        <button
                          onClick={() => {
                            setediteble(!editeble);
                            updateDataBasHendeler(
                              item.id,
                              _statusRef.current.value,
                              _titelRef.current.value,
                              _toDoRef.current.value
                            );
                          }}>
                          <AiFillEdit />
                        </button>
                      </div>
                      <div>
                        <button onClick={() => isDoneHendeler(item.id)}>
                          <AiOutlineCheck />
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              </div>
            );
          })}
      </ul>
    </div>
  );
}

export default BackEndCard;
