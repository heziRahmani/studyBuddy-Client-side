import axios from "axios";
import React from "react";

export default function Transform({
  setstatus,
  setdata,
  setheaders,
  setConfig,
}) {
  const tranceformHendeler = () => {
    const options = {
      method: "post",
      url: "https://jsonplaceholder.typicode.com/todos",
      data: {
        title: "small letters become BIG with transform",
      },
      transformResponse: axios.defaults.transformResponse.concat((data) => {
        data.title = data.title.toUpperCase();
        return data;
      }),
    };

    axios(options)
      .then((res) => {
        console.log(options);
        setstatus(res.status);
        setheaders(JSON.stringify(res.headers, null, 2));
        setdata(JSON.stringify(res.data, null, 2));
        setConfig(JSON.stringify(res.config, null, 2));
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className='btn_box'>
      <button className='btn_Navy' id={"getBtn"} onClick={tranceformHendeler}>
        Transform
      </button>
    </div>
  );
}
