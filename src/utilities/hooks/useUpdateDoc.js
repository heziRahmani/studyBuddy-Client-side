import { doc, updateDoc } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import { db } from "../fireBase_connection/FireBaseConnection";

export default function useUpdateDoc(collName, id, data) {
  const [updateDataResponce, setUpdateDataResponce] = useState(null);

  // unfinisd
  function upDateDataBase(_collName, _id, data) {}
  useEffect(() => {
    upDateDataBase(collName, id, { ...data });
  }, [id]);
  return updateDataResponce;
}
