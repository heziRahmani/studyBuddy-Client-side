import React, { useState, lazy } from "react";

import { useSearch } from "../../../utilities/hooks/useSearch";

const HtmlTagsAttributes = lazy(() =>
  import("../htmlAttributes/HtmlTagsAttributes")
);
export default function SingleHtmlTag({ tagData }) {
  const [attributeName, setattributeName] = useState("");

  let { searchData } = useSearch("htmlAttributes", "name", "==", attributeName);

  return (
    <>
      <div className='tagMainBox'>
        <div className='tagBox'>
          <div className='header'>Tag Name</div>
          <p>{tagData.name}</p>
        </div>
        <div className='descriptiondiv tagBox'>
          <div className='header'>Tag discription</div>
          {tagData.description}
        </div>
        <div className='tagBox'>
          <div className='header'>Tag exampleRef</div>
          {tagData.exampleRef}
        </div>
        <div className='tagBox attribute_box'>
          <div className='header'>Tag Attributes</div>
          {tagData.attributes &&
            tagData.attributes.map((item, i) => (
              <p
                key={i}
                id='attributeP'
                onMouseOver={(e) => setattributeName(e.target.textContent)}>
                {item}
              </p>
            ))}
        </div>
        <div id='attributedivBox tagBox'>
          <div id='attributeBox' className='attributeBox'>
            <HtmlTagsAttributes data={searchData[0]} />
          </div>
        </div>
      </div>
      <div className='htmlSingleTagDivider'></div>
    </>
  );
}
