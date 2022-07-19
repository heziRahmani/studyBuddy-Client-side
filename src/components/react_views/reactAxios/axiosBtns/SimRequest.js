import axios from "axios";
import React from "react";

export default function SimRequest({
  setstatus,
  setdata,
  setheaders,
  setConfig,
}) {
  /**
   * makes more then one request
   */
  const simRequestHendeler = () => {
    axios
      .all([
        axios.get("https://jsonplaceholder.typicode.com/posts?_limit=10"),
        axios.get("https://jsonplaceholder.typicode.com/todos?_limit=10"),
      ])
      .then(
        axios.spread((todos, posts) => {
          // console.log(posts);
          setstatus(todos.status);
          setheaders(JSON.stringify(todos.headers, null, 2));
          setdata(JSON.stringify(todos.data, null, 2));
          setConfig(JSON.stringify(todos.config, null, 2));
        })
      )
      .catch((err) => console.log(err));
  };
  return (
    <div className='btn_box'>
      <button
        className='btn_RosePink'
        id={"getBtn"}
        onClick={simRequestHendeler}>
        Sim Request
      </button>
    </div>
  );
}
