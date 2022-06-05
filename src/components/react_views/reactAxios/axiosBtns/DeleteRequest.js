import axios from "axios";
import React from "react";

export default function DeleteRequest({
  setstatus,
  setdata,
  setheaders,
  setConfig,
}) {
  const deleteRequestHendeler = () => {
    axios
      .delete("https://jsonplaceholder.typicode.com/todos/1")
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
        className='btn_SpaceCherry'
        id={"getBtn"}
        onClick={deleteRequestHendeler}>
        DELETE
      </button>
    </div>
  );
}
