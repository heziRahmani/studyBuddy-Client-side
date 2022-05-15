import { query } from "firebase/firestore";
import React, { useState } from "react";
import { JsOneLinersRef } from "../../../utilities/fireBase_connection/FireBaseConnection";
import { useCollection } from "../../../utilities/hooks/useCollection";
import "./oneLiners.css";
import SingleOneLiner from "./SingleOneLiner";
export default function OneLiners() {
  const [searchInput, setSearchInput] = useState("");
  const q2 = query(JsOneLinersRef);
  let { data } = useCollection(q2);

  return (
    <div className='jsOneLiners_container'>
      <div className='jsOneLiners_Header_Box'>
        <h2>
          Js One Lin<span>ers</span>
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
      <div className='jsOneLiners_body_container'>
        <ul>
          {data
            .filter((val) => {
              if (searchInput == "") {
                return val;
              } else if (
                val.Name.toLowerCase().includes(searchInput.toLowerCase())
              ) {
                return val;
              }
            })
            .map((item, key) => {
              return <SingleOneLiner key={key} data={item} />;
            })}
        </ul>
      </div>
    </div>
  );
}
