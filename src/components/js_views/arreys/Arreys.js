import React, { lazy, useState } from "react";

import "./arreyAndObjects.css";
import { query } from "firebase/firestore";
import { collArreyRef } from "../../../utilities/fireBase_connection/FireBaseConnection";
import { useCollection } from "../../../utilities/hooks/useCollection";
const SingleArreyData = lazy(() => import("./SingleArreyData"));

export default function Arreys() {
  const [searchInput, setSearchInput] = useState("");

  //TO-DO: configure state mannegment

  // gets all data.  gets a (collection name , field name , operator, user search input)  output:single data entry
  const q2 = query(collArreyRef);
  let { data } = useCollection(q2);
  return (
    <div className='arreyContainer'>
      <div id='arreyHeader' className='arreyHeader'>
        <h2>
          Arrey meth<span>ods</span>
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
      <div>
        {data
          .filter((val) => {
            if (searchInput == "") {
              return val;
            } else if (
              val.name.toLowerCase().includes(searchInput.toLowerCase())
            ) {
              return val;
            }
          })
          .map((item, i) => (
            <SingleArreyData item={item} key={i} />
          ))}
      </div>
    </div>
  );
}
