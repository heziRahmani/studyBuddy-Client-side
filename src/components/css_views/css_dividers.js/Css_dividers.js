import React from "react";
import "./dividers.css";
function Css_dividers() {
  return (
    <div className='cssDividers_container'>
      <div className='cssDividers_header_box'>
        <h2>Dividers</h2>
      </div>
      <div class='dividers_wrapper'>
        {/* divider 1 */}
        <div class='css_divider div-transparent'></div>
        {/* divider 2 */}
        <div class='css_divider div-transparent div-arrow-down'></div>
        {/* divider 3 */}
        <div class='css_divider div-transparent div-tab-down'></div>
        {/* divider 4 */}
        <div class='css_divider div-transparent div-stopper'></div>
        {/* divider 5 */}
        <div class='css_divider div-transparent div-dot'></div>
        {/* divider 6 */}
        <hr class='css_divider progress'></hr>
        {/* divider 7 */}
        <div class='divider'>
          <span></span>
          <span>Divider</span>
          <span></span>
        </div>
      </div>
    </div>
  );
}

export default Css_dividers;
