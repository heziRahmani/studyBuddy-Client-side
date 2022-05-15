import React, { useEffect, useState } from "react";
import { query } from "firebase/firestore";
import { toDoRef } from "../../../utilities/fireBase_connection/FireBaseConnection";
import { useCollection } from "../../../utilities/hooks/useCollection";
import Single_toDo from "./Single_toDo";
import Single_done_toDo from "./Single_done_toDo";
function ToDo_cards() {
  const [state, setstate] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [searchInputDoneTasks, setSearchInputDoneTasks] = useState("");
  //geting data from fireStore

  const q = query(toDoRef);
  let { data } = useCollection(q);
  useEffect(() => {
    setstate(data);
    console.log();
  }, [data]);
  return (
    <div className='toDo_cards_container'>
      <div className='toDo_card_box'>
        <div className='toDo_heade_box'>
          <h4>Need To Do</h4>
          <div className='searchBox'>
            <div className='searchShadowBox'></div>
            <input
              type={"text"}
              className='searchInput'
              onChange={(e) => setSearchInput(e.target.value)}
              placeholder='SEARCH'
            />
            <ion-icon
              className='ion-icon_search'
              name='search-outline'></ion-icon>
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
        <div className='toDo_heade_box'>
          <h4>Need To Do</h4>
          <div className='searchBox'>
            <div className='searchShadowBox'></div>
            <input
              type={"text"}
              className='searchInput'
              onChange={(e) => setSearchInputDoneTasks(e.target.value)}
              placeholder='SEARCH'
            />
            <ion-icon
              className='ion-icon_search'
              name='search-outline'></ion-icon>
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
