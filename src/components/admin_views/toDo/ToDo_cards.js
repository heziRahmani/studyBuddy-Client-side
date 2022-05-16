import React, { useEffect, useState } from "react";
import { query } from "firebase/firestore";
import { toDoRef } from "../../../utilities/fireBase_connection/FireBaseConnection";
import { useCollection } from "../../../utilities/hooks/useCollection";
import Single_toDo from "./Single_toDo";
import Single_done_toDo from "./Single_done_toDo";
import { BiSearchAlt } from "react-icons/bi";
function ToDo_cards() {
  const [searchInput, setSearchInput] = useState("");
  const [searchInputDoneTasks, setSearchInputDoneTasks] = useState("");
  //geting data from fireStore

  const q = query(toDoRef);
  let { data } = useCollection(q);

  return (
    <div className='toDo_cards_container'>
      <div className='toDo_card_box'>
        <div className='single_toDo_header_box'>
          <h4>Need To Do</h4>
          <div className='search-box'>
            <button class='btn-search'>
              <BiSearchAlt />
            </button>
            <input
              onChange={(e) => setSearchInput(e.target.value)}
              type='text'
              class='input-search'
              placeholder='Type to Search...'
            />
          </div>
        </div>

        <ul>
          {data &&
            data
              .filter((fillterdDoc) => {
                if (fillterdDoc.isDoneStatus === false && searchInput == "") {
                  return fillterdDoc;
                } else if (
                  fillterdDoc.isDoneStatus === false &&
                  fillterdDoc.titel
                    .toLowerCase()
                    .includes(searchInput.toLowerCase())
                ) {
                  return fillterdDoc;
                }
              })
              .map((doc) => {
                return <Single_toDo data={doc} />;
              })}
        </ul>
      </div>
      <div className='toDo_card_box'>
        <div className='single_toDo_header_box'>
          <h4>Need To Do</h4>
          <div className='search-box'>
            <button class='btn-search'>
              <BiSearchAlt />
            </button>
            <input
              onChange={(e) => setSearchInputDoneTasks(e.target.value)}
              type='text'
              class='input-search'
              placeholder='Type to Search...'
            />
          </div>
        </div>

        <ul>
          {data &&
            data
              .filter((fillterdDoc) => {
                if (
                  fillterdDoc.isDoneStatus === false &&
                  searchInputDoneTasks == ""
                ) {
                  return fillterdDoc;
                } else if (
                  fillterdDoc.isDoneStatus === false &&
                  fillterdDoc.titel
                    .toLowerCase()
                    .includes(searchInputDoneTasks.toLowerCase())
                ) {
                  return fillterdDoc;
                }
              })
              .map((doc) => {
                return <Single_done_toDo data={doc} />;
              })}
        </ul>
      </div>
    </div>
  );
}

export default ToDo_cards;
