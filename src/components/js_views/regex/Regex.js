import React, { useEffect } from "react";
import { query } from "firebase/firestore";
import { collRegexRef } from "../../../utilities/fireBase_connection/FireBaseConnection";
import { useCollection } from "../../../utilities/hooks/useCollection";
//style import
import "./regex.scss";
import RegexData from "./RegexData";
export default function Regex() {
  const q = query(collRegexRef);
  let { data } = useCollection(q);

  //sort data
  let characterClasses = data.filter(
    (item) => item.Category === "Character Classes"
  );
  let anchors = data.filter((item) => item.Category === "Anchors");
  let flags = data.filter((item) => item.Category === "Flags");
  let quantifiers = data.filter((item) => item.Category === "quantifiers");
  let groupAndRanges = data.filter(
    (item) => item.Category === "Group and Ranges"
  );
  useEffect(() => {
    console.log("effct");
  }, []);
  return (
    <div className='regex_main_container'>
      <div id='regexHeader_container' className='regexHeader_container'>
        <h2>
          Reg<span>ex</span>
        </h2>
      </div>
      <div id='regexBody_container' className='regexBody_container'>
        {/* 1 characterClasses*/}
        <div id='regex_box' className='regex_box'>
          <div className='regex_box_header'>
            <h3 title='Character Classes'>Character Classes</h3>{" "}
          </div>
          {characterClasses.map((item, key) => {
            return (
              <div className='regex_box_body' key={key}>
                <div>
                  <h4>{item.symbol}</h4>
                </div>

                <div>
                  <h4>{item.Explanation}</h4>
                </div>
              </div>
            );
          })}
        </div>
        {/* 2 anchors*/}
        <div id='regex_box' className='regex_box'>
          <div className='regex_box_header'>
            <h3 title='Character Classes'>anchors</h3>{" "}
          </div>
          {anchors.map((item, key) => {
            return (
              <div className='regex_box_body' key={key}>
                <div>
                  <h4>{item.symbol}</h4>
                </div>
                <div>
                  <h4>{item.Explanation}</h4>
                </div>
              </div>
            );
          })}
        </div>
        {/* 3 flags*/}
        <div id='regex_box' className='regex_box'>
          <div className='regex_box_header'>
            <h3 title='Character Classes'>flags</h3>{" "}
          </div>
          {flags.map((item, key) => {
            return (
              <div className='regex_box_body' key={key}>
                <div>
                  <h4>{item.symbol}</h4>
                </div>
                <div>
                  <h4>{item.Explanation}</h4>
                </div>
              </div>
            );
          })}
        </div>
        {/* 4 quantifiers*/}
        <div id='regex_box' className='regex_box'>
          <div className='regex_box_header'>
            <h3 title='Character Classes'>quantifiers</h3>{" "}
          </div>
          {quantifiers.map((item, key) => {
            return (
              <div className='regex_box_body' key={key}>
                <div>
                  <h4>{item.symbol}</h4>
                </div>
                <div>
                  <h4>{item.Explanation}</h4>
                </div>
              </div>
            );
          })}
        </div>
        {/* 5 groupAndRanges*/}
        <div id='regex_box' className='regex_box'>
          <div className='regex_box_header'>
            <h3 title='Character Classes'>groupAndRanges</h3>{" "}
          </div>
          {groupAndRanges.map((item, key) => {
            return (
              <div className='regex_box_body' key={key}>
                <div>
                  <h4>{item.symbol}</h4>
                </div>
                <div>
                  <h4>{item.Explanation}</h4>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <section className='regexData_section'>
        <RegexData />
      </section>
    </div>
  );
}
