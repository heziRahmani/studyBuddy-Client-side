import React from "react";

function SingleSqlGeneral({ item }) {
  return (
    <li>
      <div className='oneLine_header_box'>
        <h3 className='oneLine_header'>{item.titel}</h3>
      </div>
      {item.code.map((item) => {
        return (
          <div key={item._id}>
            <div className='oneLine_description'>
              <p>{item.codedescription}</p>
            </div>
            <div className='oneLine_code_box'>{item.code}</div>
          </div>
        );
      })}
    </li>
  );
}

export default SingleSqlGeneral;
