import axios from "axios";
import React from "react";

export default function PutPatch({
  setstatus,
  setdata,
  setheaders,
  setConfig,
}) {
  const putPatchRequestHendeler = () => {
    //method one
    //put => replaces the todo
    axios
      .put("https://jsonplaceholder.typicode.com/todos/1", {
        titel: "this todo is from the put request",
        completed: false,
      })
      .then((res) => {
        console.log(res);
        setstatus(res.status);
        setheaders(JSON.stringify(res.headers, null, 2));
        setdata(JSON.stringify(res.data, null, 2));
        setConfig(JSON.stringify(res.config, null, 2));
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className='btn_box'>
      <button
        className='btn_Green'
        id={"getBtn"}
        onClick={putPatchRequestHendeler}>
        Put/Patch
      </button>
    </div>
  );
}
