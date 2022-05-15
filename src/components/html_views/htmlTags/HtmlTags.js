import { onSnapshot, query } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { collhtmlTagsRef } from "../../../utilities/fireBase_connection/FireBaseConnection";
import { useCollection } from "../../../utilities/hooks/useCollection";
import "./htmlTags.css";
import SingleHtmlTag from "./singleHtmlTag";

export default function HtmlTags() {
  const q2 = query(collhtmlTagsRef);

  let { data } = useCollection(q2);

  return (
    <>
      <div id='htmlTags_container' className='htmlTags_container'>
        <div id='htmlTags_header' className='htmlTags_header'>
          <h2>HTML TAGS</h2>
        </div>
        <div
          id='htmlTags_singleTag_container'
          className='htmlTags_singleTag_container'>
          {data.map((item, i) => (
            <SingleHtmlTag tagData={item} key={i} />
          ))}
        </div>
      </div>
    </>
  );
}
