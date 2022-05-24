import React, { Suspense } from "react";
import Loader from "react-loaders";
import "./dividers.css";
function Css_dividers() {
  return (
    <Suspense fallback={<Loader type='pacman' />}>
      <div className='cssDividers_container'>
        <div className='cssDividers_header_box'>
          <h2>Dividers</h2>
        </div>
        <div className='dividers_wrapper'>
          {/* divider 1 */}
          <div className='css_divider div-transparent'></div>
          {/* divider 2 */}
          <div className='css_divider div-transparent div-arrow-down'></div>
          {/* divider 3 */}
          <div className='css_divider div-transparent div-tab-down'></div>
          {/* divider 4 */}
          <div className='css_divider div-transparent div-stopper'></div>
          {/* divider 5 */}
          <div className='css_divider div-transparent div-dot'></div>
          {/* divider 6 */}
          <hr className='css_divider progress'></hr>
          {/* divider 7 */}
          <div className='divider'>
            <span></span>
            <span>Divider</span>
            <span></span>
          </div>
        </div>
      </div>
    </Suspense>
  );
}

export default Css_dividers;
