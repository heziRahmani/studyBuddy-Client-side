import axios from "axios";
import React from "react";

export default function CustomHeader({
  setstatus,
  setdata,
  setheaders,
  setConfig,
}) {
  const customHeadersHendeler = () => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: " the token",
      },
    };
    axios
      .post(
        "https://jsonplaceholder.typicode.com/todos",
        {
          data: {
            title: "that is my todo",
            completed: false,
          },
        },
        config
      )
      .then((res) => {
        // console.log(res);
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
        className='btn_Teal'
        id={"getBtn"}
        onClick={customHeadersHendeler}>
        Custom Headers
      </button>
    </div>
  );
}
