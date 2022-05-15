import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./LandingPage.css";
export default function LandingPage() {
  return (
    <div className='landingPage_sectionOne_container'>
      <div className='landingPage_btn_box'>
        <button>
          <Link className='btn_link' to='/about'>
            ENTER
          </Link>
        </button>
      </div>
      <div className='lendingPage_header_box'>
        <h3>
          <span className='header_span_s'>S</span>
          <span className='header_span_t'>T</span>
          <span className='header_span_u'>U</span>
          <span className='header_span_d'>D</span>
          <span>
            {/* <span className='header_span_y'>Y</span> */}
            <span className='header_span_y'>Y</span>
            <span className='header_span_d'>D</span>
            <span className='header_span_d'>D</span>
            <span className='header_span_u'>U</span>
            <span className='header_span_b'>B</span>
          </span>
        </h3>
      </div>
    </div>
  );
}
