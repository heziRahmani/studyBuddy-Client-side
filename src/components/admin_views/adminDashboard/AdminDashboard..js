import React, { lazy, Suspense, useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router";

import { useCollection } from "../../../utilities/hooks/useCollection";
// fireBase imports
import { orderBy, query } from "firebase/firestore";
import { toDoRef } from "../../../utilities/fireBase_connection/FireBaseConnection";
import "./adminDashboard.css";
import StyleCard from "../adminDashboardCards/StyleCard";
import BackEndCard from "../adminDashboardCards/BackEndCard";
import AddToTheSite from "../adminDashboardCards/AddToTheSiteCard";
import BugsCard from "../adminDashboardCards/BugsCard";
import Loader from "react-loaders";

export default function AdminDashboard() {
  // const [id, setId] = useState(null);
  const _navigate = useNavigate();

  // auth
  useEffect(() => {
    let authToken = sessionStorage.getItem("Auth Token");

    if (!authToken) {
      _navigate("/admin/signin");
    }
  }, []);
  //get todo from database
  const q = query(toDoRef, orderBy("toDo"));
  let { data } = useCollection(q);
  // data sort
  let addCard = data.filter((addC) => {
    if (addC.tag === "New Features" && addC.isDoneStatus === false) {
      return addC;
    }
  });
  let backEndCard = data.filter((bec) => {
    if (bec.tag === "Back-End" && bec.isDoneStatus === false) {
      return bec;
    }
  });
  let styleCard = data.filter((sc) => {
    if (sc.tag === "Style" && sc.isDoneStatus === false) {
      return sc;
    }
  });
  let bugsCard = data.filter((bug) => {
    if (bug.tag === "Bugs" && bug.isDoneStatus === false) {
      return bug;
    }
  });
  useEffect(() => {
    console.log(data);
    console.log(styleCard);
  }, [data]);

  return (
    <Suspense fallback={<Loader type='pacman' />}>
      <section className='adminDashboard_container overflowHidden'>
        <header className='adminDashboard_header'>
          <h3>Admin Dashbord</h3>
        </header>
        <section className='adminDashboard_body_container'>
          <header>
            <h3>OverView</h3>
          </header>
          <div className='admin_cards_main_box'>
            <div className='admin_Card_box'>
              <StyleCard data={styleCard} />
            </div>
            <div className='admin_Card_box'>
              <BackEndCard data={backEndCard} />
            </div>
            <div className='admin_Card_box'>
              <AddToTheSite data={addCard} />
            </div>
            <div className='admin_Card_box'>
              <BugsCard data={bugsCard} />
            </div>
          </div>
        </section>
      </section>
    </Suspense>
  );
}
