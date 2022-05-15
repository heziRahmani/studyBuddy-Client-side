import React, { useState, useContext, useEffect } from "react";
import { UpdateFormContext } from "../../utilities/context/updateFormContext";

import useDeleteDoc from "../../utilities/hooks/useDeleteDoc";
import { AiFillEdit, AiFillDelete, AiOutlineCheck } from "react-icons/ai";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../utilities/fireBase_connection/FireBaseConnection";

export default function SingleToDo({ data }) {
  const [id, setId] = useState(null);

  //hendelers
  //delete hendeler
  function deleteHendeler(_id) {
    setId(_id);
  }
  useDeleteDoc("toDo", id);

  const { updateFormData } = useContext(UpdateFormContext);
  //update hendeler
  function updateHendeler(_id) {
    let formContainer = document.querySelector("#updateToDoForm_container");
    formContainer.classList.remove("toDoFormDisplay");
    sessionStorage.setItem("updateFormId", _id);
    updateFormData(data);
  }
  //status hendeler
  function isDoneHendeler(id) {
    const docRef = doc(db, "toDo", id);
    updateDoc(docRef, {
      isDoneStatus: !data.isDoneStatus,

      status: data.isDoneStatus ? "Done" : "To Do",
      praiorety: data.isDoneStatus ? 0 : data.praiorety,
    });
  }

  return (
    <div>
      <ul>
        <li id='singleToDo_li' className='singleToDo_li'>
          {data.isDoneStatus ? (
            <div className='singleToDoDIv_toDo'>
              <s>{data.toDo}</s>
            </div>
          ) : (
            <div className='singleToDoDIv_toDo'>
              <span>{data.toDo}</span>
            </div>
          )}
          <div className='buttomCard_container'>
            <div>
              <div
                id='singleToDoDIv_praiorety'
                className='singleToDoDIv_praiorety'></div>
              <span>{data.status}</span>

              <div className='singleToDoDIv_StartTime'>
                <label>
                  Subject:
                  <span>{data.tag}</span>
                </label>
              </div>
              <div className='singleToDoDIv_StartTime'>
                <label>
                  Added:
                  <span>{data.StartTime}</span>
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
      </ul>
    </div>
  );
}
