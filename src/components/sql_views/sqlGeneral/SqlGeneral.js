import axios from "axios";
import { query } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { sqlGeneralRef } from "../../../utilities/fireBase_connection/FireBaseConnection";
import { useCollection } from "../../../utilities/hooks/useCollection";
import "../sqlGeneral/sqlGeneral.css";
import SingleSqlGeneral from "./SingleSqlGeneral";
export default function SqlGeneral() {
  const [searchInput, setSearchInput] = useState("");

  const q2 = query(sqlGeneralRef);
  let { data } = useCollection(q2);

  return (
    <div>
      <div id='sqlHeader' className='sqlHeader'>
        <h2>
          Sql Gene<span>ral</span>
        </h2>

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
      <div className='sqlGeneral_body_container'>
        <ul>
          {data &&
            data
              .filter((val) => {
                if (searchInput == "") {
                  return val;
                } else if (
                  val.titel.toLowerCase().includes(searchInput.toLowerCase())
                ) {
                  return val;
                }
              })
              .map((item) => {
                return <SingleSqlGeneral key={item._id} item={item} />;
              })}
        </ul>
      </div>
    </div>
  );
}
