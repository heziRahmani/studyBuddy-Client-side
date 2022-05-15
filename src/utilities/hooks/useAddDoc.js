import { addDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { toDoRef } from "../fireBase_connection/FireBaseConnection";

export default function useAddDoc(toDoRef, data) {
  const [addDocData, setAddDocData] = useState({});
  const [oldToDoId, setOldToDo] = useState("");

  useEffect(() => {
    if (data) {
      addDoc(toDoRef, { ...data })
        .then((data) => {
          console.log(data);
          setAddDocData(data);
          setOldToDo(data.toDo);
        })
        .catch((err) => {
          console.log(err);
          setAddDocData(err);
        });
    }
  }, [data]);

  return addDocData;
}
