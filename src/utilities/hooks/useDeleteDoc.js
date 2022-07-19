import { deleteDoc, doc } from "firebase/firestore";
import React, { useEffect } from "react";

import { db } from "../fireBase_connection/FireBaseConnection";

export default function useDeleteDoc(collName, id) {
  useEffect(() => {
    removeFromDataBase(collName, id);
  }, [id]);

  function removeFromDataBase(_collName, _id) {
    // console.log(_collName,_id);
    if (_id && _collName) {
      const docRef = doc(db, _collName, _id);
      deleteDoc(docRef).then((data) => {
        // console.log(data);
      });

      return "done";
    } else {
      return;
    }
  }
}
