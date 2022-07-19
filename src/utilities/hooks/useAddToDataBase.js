import { addDoc } from "firebase/firestore";
import React from "react";
/**
     * this hook is uset to get data from a fireBase collection
     * gets:query => excemple for a query const q=query(collection Reference)
     * returns: an arrey of the documents in the collection
     
     **/

import { useEffect, useState } from "react";

export default function useAddToDataBase(collectionRef, data) {
  const [addToDataBaseData, setaddToDataBaseData] = useState([]);
  //  console.log("this is useAddToDataBase",data);

  function addToDataBase(_collectionRef, _data) {
    // console.log("this is from the inne func", _data);
    if (_collectionRef.type == "collection") {
      addDoc(_collectionRef, { ..._data })
        .then((data) => {
          // console.log(data);
          setaddToDataBaseData(data);
        })
        .catch((err) => {
          // console.log(err);
          setaddToDataBaseData(err);
        });
    } else {
      return;
    }
  }

  useEffect(() => {
    addToDataBase(collectionRef, data);
  }, []);

  if (data) {
    return addToDataBaseData;
  } else {
    return addToDataBaseData;
  }
}
