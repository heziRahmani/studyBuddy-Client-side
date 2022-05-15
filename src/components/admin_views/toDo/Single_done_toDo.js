import { doc, updateDoc } from "firebase/firestore";
import React, { useState, useRef } from "react";
import { AiFillDelete, AiOutlineCheck } from "react-icons/ai";
import { db } from "../../../utilities/fireBase_connection/FireBaseConnection";
import useDeleteDoc from "../../../utilities/hooks/useDeleteDoc";

function Single_done_toDo({ data }) {
  const [id, setId] = useState(null);

  //delete hendeler
  function deleteHendeler(_id) {
    setId(_id);
  }
  useDeleteDoc("toDo", id);
  //status hendeler
  function isDoneHendeler(id) {
    const docRef = doc(db, "toDo", id);
    updateDoc(docRef, {
      isDoneStatus: !data.isDoneStatus,

      status: "To Do",
    });
  }
  return (
    <div className='single_toDo_container'>
      <li id='singleToDo_li' className='singleToDo_li'>
        {/* input section */}

        <div className='singleToDoDIv_toDo'>
          <s>{data.titel}</s>
        </div>
        {/*textarea section  */}
        <div className='singleToDoDIv_toDo'>
          <s>{data.toDo}</s>
        </div>
        <div className='buttomCard_container'>
          <div className='buttomCard_data'>
            {/* priority */}
            <div className='singleToDoDIv_praiorety_box'>
              <div
                id='singleToDoDIv_praiorety'
                className='singleToDoDIv_praiorety'
                style={{ backgroundColor: "lightblue" }}></div>
              {/* status */}

              <span>Done</span>
            </div>

            {/* subject */}

            <div className='singleToDoDIv_StartTime'>
              <label>
                Subject:
                <span>{data.tag}</span>
              </label>
            </div>
          </div>
          <div className='singleToDoBtn_container'>
            <div>
              <button onClick={() => deleteHendeler(data.id)}>
                <AiFillDelete />
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
  );
}

export default Single_done_toDo;
