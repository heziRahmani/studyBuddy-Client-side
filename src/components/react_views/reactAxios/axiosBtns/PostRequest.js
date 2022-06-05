import axios from "axios";
import React from "react";

export default function PostRequest({
  setstatus,
  setdata,
  setheaders,
  setConfig,
}) {
  const postRequestHendeler = () => {
    axios
      .post("https://jsonplaceholder.typicode.com/todos", {
        data: {
          title: "that is my todo",
          completed: false,
        },
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
        className='btn_RoyalPurple'
        id={"getBtn"}
        onClick={postRequestHendeler}>
        POST
      </button>
    </div>
  );
}
