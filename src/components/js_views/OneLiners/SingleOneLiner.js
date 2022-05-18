import React from "react";
import CodeBlock from "../../../generalComponents/codeBlock/CodeBlock";

export default function SingleOneLiner({ data }) {
  return (
    <li>
      <div className='oneLine_header_box'>
        <h3 className='oneLine_header'>{data.Name}</h3>
      </div>
      <div className='oneLine_description'>
        <p>{data.Explanation}</p>
      </div>
      <div className='oneLine_code_box'>
        <CodeBlock code={data.Code} leng={"javascript"} />
      </div>
    </li>
  );
}
