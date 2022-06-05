import { useEffect, useState } from "react";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { db } from "../fireBase_connection/FireBaseConnection";

/**
 * AFTER AN UPDETE ITS STOP WORKING NEED TO CHECK!!!
 * use to search firebase database
 * @param {fire besh object} collRef
 * @param {string} fieldName
 * @param {string} operetor
 * @param {string} searchingFor
 * "isDoneStatus", "==", "false"
 * @returns [docs]
 */
export const useSearch = (collRef, fieldName, operetor, searchingFor) => {
  const [searchData, setSearchData] = useState([]);

  const field = fieldName ? fieldName : "";
  const operetorSign = operetor ? operetor : "==";
  const searchFor = searchingFor ? searchingFor : "";

  const currentCollRef = collection(db, collRef);
  let q = query(currentCollRef, where(field, operetorSign, searchFor));
  //  console.log(q);
  const getSearchData = async (q) => {
    //gets the data eng listn to
    await onSnapshot(q, (snapshot) => {
      let _arreyData = [];
      snapshot.forEach((doc) => {
        _arreyData.push({ ...doc.data(), id: doc.id });
      });
      // console.log(_arreyData);
      setSearchData(_arreyData);
    });
  };

  useEffect(() => {
    // console.log((collRef,fieldName,operetor,searchingFor));
    getSearchData(q);
  }, [searchFor]);

  return { searchData };
};
