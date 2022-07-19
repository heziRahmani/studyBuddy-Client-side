import { query } from "firebase/firestore";
import React, { useState, Suspense } from "react";
import Loader from "react-loaders";
import { sqlGeneralRef } from "../../../utilities/fireBase_connection/FireBaseConnection";
import { useCollection } from "../../../utilities/hooks/useCollection";
// import "../sqlGeneral/sqlGeneral.css";
import SingleSqlGeneral from "./SingleSqlGeneral";
export default function SqlGeneral() {
  const [searchInput, setSearchInput] = useState("");

  const q2 = query(sqlGeneralRef);
  let { data } = useCollection(q2);

  return (
    <Suspense fallback={<Loader type='pacman' />}>
      <div className='sqlGeneral_container'>
        <div id='sqlHeader' className='sqlHeader'>
          <h2>
            Sql Gener<span>al</span>
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
                  if (searchInput === "") {
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
    </Suspense>
  );
}
