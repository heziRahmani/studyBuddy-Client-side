import React, { useState } from "react";

import CustomHeader from "./axiosBtns/CustomHeader";
import DeleteRequest from "./axiosBtns/DeleteRequest";

import GetRquests from "./axiosBtns/GetRquests";
import PostRequest from "./axiosBtns/PostRequest";
import PutPatch from "./axiosBtns/PutPatch";
import SimRequest from "./axiosBtns/SimRequest";
import "./axiosBtns/style.scss";
import Transform from "./axiosBtns/Transform";
const AxiosExemples = () => {
  const [status, setstatus] = useState("");
  const [data, setdata] = useState("");
  const [headers, setheaders] = useState("");
  const [config, setConfig] = useState("");
  const [res, setRes] = useState("");

  return (
    <div className='axiosExemples_container'>
      <section className='btn_section'>
        <GetRquests
          setstatus={setstatus}
          setdata={setdata}
          setheaders={setheaders}
          setConfig={setConfig}
          setRes={setRes}
        />
        <PostRequest
          setstatus={setstatus}
          setdata={setdata}
          setheaders={setheaders}
          setConfig={setConfig}
        />
        <DeleteRequest
          setstatus={setstatus}
          setdata={setdata}
          setheaders={setheaders}
          setConfig={setConfig}
        />
        <PutPatch
          setstatus={setstatus}
          setdata={setdata}
          setheaders={setheaders}
          setConfig={setConfig}
        />
        <SimRequest
          setstatus={setstatus}
          setdata={setdata}
          setheaders={setheaders}
          setConfig={setConfig}
        />
        <CustomHeader
          setstatus={setstatus}
          setdata={setdata}
          setheaders={setheaders}
          setConfig={setConfig}
        />
        <Transform
          setstatus={setstatus}
          setdata={setdata}
          setheaders={setheaders}
          setConfig={setConfig}
        />
      </section>
      <section className='res_output_section'>
        <div className='res_box_header'>
          <h3>URL: https://jsonplaceholder.typicode.com/todos</h3>
          <h3>STATUS:{status}</h3>
        </div>
        <div>
          <div className='res_box_header'>
            <h4>headers</h4>
          </div>
          <div className='res_box_code'>
            <pre>HEDERS:{headers}</pre>
          </div>
        </div>
        <div>
          <div className='res_box_header'>
            <h4>Config</h4>
          </div>
          <div className='res_box_code'>
            <pre>
              DATA:<code>{config}</code>
            </pre>
          </div>
        </div>
        <div>
          <div className='res_box_header'>
            <h4>DATA</h4>
          </div>
          <div className='res_box_code'>
            <pre>
              DATA:<code>{data}</code>
            </pre>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AxiosExemples;
