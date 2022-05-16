import React from "react";

export default function HtmlTagsAttributes({ data }) {
  if (data) {
    var { name, description } = data;
  }

  return (
    <div className='single_attribute_box'>
      {name ? <h3>{name}</h3> : <h3>no data</h3>}
      {description ? <p>{description}</p> : <p>no data</p>}
      {/* <p>attribute excemple</p> */}
    </div>
  );
}
