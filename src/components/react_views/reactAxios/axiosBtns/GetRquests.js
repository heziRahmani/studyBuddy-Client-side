import axios from "axios";
import React from "react";

export default function GetRquests({
  setstatus,
  setdata,
  setheaders,
  setConfig,
  setRes,
}) {
  const getRequestHendeler = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos", {
        params: { _limit: 3 },
      })
      .then((res) => {
        // console.log(res);
        setstatus(res.status);
        setheaders(JSON.stringify(res.headers, null, 2));
        setdata(JSON.stringify(res.data, null, 2));
        setConfig(JSON.stringify(res.config, null, 2));
        setRes(res);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className='btn_box'>
      <button
        className='btn_RoyalBlue'
        id={"getBtn"}
        onClick={getRequestHendeler}>
        GET
      </button>
    </div>
  );
}
