import { query } from "firebase/firestore";
import React, { lazy, Suspense } from "react";
import Loader from "react-loaders";

import { collhtmlTagsRef } from "../../../utilities/fireBase_connection/FireBaseConnection";
import { useCollection } from "../../../utilities/hooks/useCollection";
import "./htmlTags.scss";
const SingleHtmlTag = lazy(() => import("./singleHtmlTag"));

export default function HtmlTags() {
  /**
   * gets data from fireBase
   * q2 =>gets query(fireBase hook) with a firebase collection refernce
   * useCollection custom hook gets the q2(query) and return arrey with the data
   */
  const q2 = query(collhtmlTagsRef);
  let { data } = useCollection(q2);

  return (
    <Suspense fallback={<Loader type='pacman' />}>
      <div id='htmlTags_container' className='htmlTags_container'>
        <div id='htmlTags_header' className='htmlTags_header'>
          <h2>
            HTML <span>TAGS</span>
          </h2>
        </div>
        <div
          id='htmlTags_singleTag_container'
          className='htmlTags_singleTag_container show_card'>
          {data.map((item, i) => (
            <SingleHtmlTag tagData={item} key={i} />
          ))}
        </div>
      </div>
    </Suspense>
  );
}
