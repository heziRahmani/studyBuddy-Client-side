import React from "react";
import {
  DiAndroid,
  DiApple,
  DiCodeigniter,
  DiGithubAlt,
  DiProlog,
  DiVisualstudio,
  DiRedhat,
  DiNpm,
} from "react-icons/di";
import {
  AiOutlinePlayCircle,
  AiFillBackward,
  AiFillForward,
} from "react-icons/ai";
import "./button.css";
export default function ButtonsUi() {
  return (
    <div className='cssBtn_main_container'>
      <div className='header_box'>
        <h2 className='buttonsHeader'>Buttons</h2>
      </div>
      <div className='cssBtn_main_box'>
        {/* shop, wallet, animeted on hover,btn 1 */}
        <div className='css_btn_box btnBox1'>
          <button className='button'>
            <span className='button__text'>
              <span>b</span>
              <span>u</span>
              <span>y</span>
            </span>
            <span> </span>
            <span>s</span>
            <span>t</span>
            <span>u</span>
            <span>f</span>
            <span>f</span>

            <svg
              className='button__svg'
              role='presentational'
              viewBox='0 0 600 600'>
              <defs>
                <clipPath id='myClip'>
                  <rect x='0' y='0' width='100%' height='50%' />
                </clipPath>
              </defs>
              <g clipPath='url(#myClip)'>
                <g id='money'>
                  <path
                    d='M441.9,116.54h-162c-4.66,0-8.49,4.34-8.62,9.83l.85,278.17,178.37,2V126.37C450.38,120.89,446.56,116.52,441.9,116.54Z'
                    fill='#699e64'
                    stroke='#323c44'
                    strokeMiterlimit='10'
                    strokeWidth='14'
                  />
                  <path
                    d='M424.73,165.49c-10-2.53-17.38-12-17.68-24H316.44c-.09,11.58-7,21.53-16.62,23.94-3.24.92-5.54,4.29-5.62,8.21V376.54H430.1V173.71C430.15,169.83,427.93,166.43,424.73,165.49Z'
                    fill='#699e64'
                    stroke='#323c44'
                    strokeMiterlimit='10'
                    strokeWidth='14'
                  />
                </g>
                <g id='creditcard'>
                  <path
                    d='M372.12,181.59H210.9c-4.64,0-8.45,4.34-8.58,9.83l.85,278.17,177.49,2V191.42C380.55,185.94,376.75,181.57,372.12,181.59Z'
                    fill='#a76fe2'
                    stroke='#323c44'
                    strokeMiterlimit='10'
                    strokeWidth='14'
                  />
                  <path
                    d='M347.55,261.85H332.22c-3.73,0-6.76-3.58-6.76-8v-35.2c0-4.42,3-8,6.76-8h15.33c3.73,0,6.76,3.58,6.76,8v35.2C354.31,258.27,351.28,261.85,347.55,261.85Z'
                    fill='#ffdc67'
                  />
                  <path d='M249.73,183.76h28.85v274.8H249.73Z' fill='#323c44' />
                </g>
              </g>
              <g id='wallet'>
                <path
                  d='M478,288.23h-337A28.93,28.93,0,0,0,112,317.14V546.2a29,29,0,0,0,28.94,28.95H478a29,29,0,0,0,28.95-28.94h0v-229A29,29,0,0,0,478,288.23Z'
                  fill='#a4bdc1'
                  stroke='#323c44'
                  strokeMiterlimit='10'
                  strokeWidth='14'
                />
                <path
                  d='M512.83,382.71H416.71a28.93,28.93,0,0,0-28.95,28.94h0V467.8a29,29,0,0,0,28.95,28.95h96.12a19.31,19.31,0,0,0,19.3-19.3V402a19.3,19.3,0,0,0-19.3-19.3Z'
                  fill='#a4bdc1'
                  stroke='#323c44'
                  strokeMiterlimit='10'
                  strokeWidth='14'
                />
                <path
                  d='M451.46,435.79v7.88a14.48,14.48,0,1,1-29,0v-7.9a14.48,14.48,0,0,1,29,0Z'
                  fill='#a4bdc1'
                  stroke='#323c44'
                  strokeMiterlimit='10'
                  strokeWidth='14'
                />
                <path
                  d='M147.87,541.93V320.84c-.05-13.2,8.25-21.51,21.62-24.27a42.71,42.71,0,0,1,7.14-1.32l-29.36-.63a67.77,67.77,0,0,0-9.13.45c-13.37,2.75-20.32,12.57-20.27,25.77l.38,221.24c-1.57,15.44,8.15,27.08,25.34,26.1l33-.19c-15.9,0-28.78-10.58-28.76-25.93Z'
                  fill='#7b8f91'
                />
                <path
                  d='M148.16,343.22a6,6,0,0,0-6,6v92a6,6,0,0,0,12,0v-92A6,6,0,0,0,148.16,343.22Z'
                  fill='#323c44'
                />
              </g>
            </svg>
          </button>
        </div>
        {/*GLITCH BUTTON,btn2  */}
        <div className='css_btn_box btnBox2'>
          <button className='glich_btn'>AVAILABLE NOW</button>
        </div>
        {/*next expending,btn3  */}
        <div className='css_btn_box btnBox3'>
          <div className='wrapper'>
            <a className='cta' href='#'>
              <span>NEXT</span>
              <span>
                <svg
                  width='66px'
                  height='43px'
                  viewBox='0 0 66 43'
                  version='1.1'
                  xmlns='http://www.w3.org/2000/svg'>
                  <g
                    id='arrow'
                    stroke='none'
                    strokeWidth='1'
                    fill='none'
                    fillRule='evenodd'>
                    <path
                      className='one'
                      d='M40.1543933,3.89485454 L43.9763149,0.139296592 C44.1708311,-0.0518420739 44.4826329,-0.0518571125 44.6771675,0.139262789 L65.6916134,20.7848311 C66.0855801,21.1718824 66.0911863,21.8050225 65.704135,22.1989893 C65.7000188,22.2031791 65.6958657,22.2073326 65.6916762,22.2114492 L44.677098,42.8607841 C44.4825957,43.0519059 44.1708242,43.0519358 43.9762853,42.8608513 L40.1545186,39.1069479 C39.9575152,38.9134427 39.9546793,38.5968729 40.1481845,38.3998695 C40.1502893,38.3977268 40.1524132,38.395603 40.1545562,38.3934985 L56.9937789,21.8567812 C57.1908028,21.6632968 57.193672,21.3467273 57.0001876,21.1497035 C56.9980647,21.1475418 56.9959223,21.1453995 56.9937605,21.1432767 L40.1545208,4.60825197 C39.9574869,4.41477773 39.9546013,4.09820839 40.1480756,3.90117456 C40.1501626,3.89904911 40.1522686,3.89694235 40.1543933,3.89485454 Z'
                      fill='#FFFFFF'></path>
                    <path
                      className='two'
                      d='M20.1543933,3.89485454 L23.9763149,0.139296592 C24.1708311,-0.0518420739 24.4826329,-0.0518571125 24.6771675,0.139262789 L45.6916134,20.7848311 C46.0855801,21.1718824 46.0911863,21.8050225 45.704135,22.1989893 C45.7000188,22.2031791 45.6958657,22.2073326 45.6916762,22.2114492 L24.677098,42.8607841 C24.4825957,43.0519059 24.1708242,43.0519358 23.9762853,42.8608513 L20.1545186,39.1069479 C19.9575152,38.9134427 19.9546793,38.5968729 20.1481845,38.3998695 C20.1502893,38.3977268 20.1524132,38.395603 20.1545562,38.3934985 L36.9937789,21.8567812 C37.1908028,21.6632968 37.193672,21.3467273 37.0001876,21.1497035 C36.9980647,21.1475418 36.9959223,21.1453995 36.9937605,21.1432767 L20.1545208,4.60825197 C19.9574869,4.41477773 19.9546013,4.09820839 20.1480756,3.90117456 C20.1501626,3.89904911 20.1522686,3.89694235 20.1543933,3.89485454 Z'
                      fill='#FFFFFF'></path>
                    <path
                      className='three'
                      d='M0.154393339,3.89485454 L3.97631488,0.139296592 C4.17083111,-0.0518420739 4.48263286,-0.0518571125 4.67716753,0.139262789 L25.6916134,20.7848311 C26.0855801,21.1718824 26.0911863,21.8050225 25.704135,22.1989893 C25.7000188,22.2031791 25.6958657,22.2073326 25.6916762,22.2114492 L4.67709797,42.8607841 C4.48259567,43.0519059 4.17082418,43.0519358 3.97628526,42.8608513 L0.154518591,39.1069479 C-0.0424848215,38.9134427 -0.0453206733,38.5968729 0.148184538,38.3998695 C0.150289256,38.3977268 0.152413239,38.395603 0.154556228,38.3934985 L16.9937789,21.8567812 C17.1908028,21.6632968 17.193672,21.3467273 17.0001876,21.1497035 C16.9980647,21.1475418 16.9959223,21.1453995 16.9937605,21.1432767 L0.15452076,4.60825197 C-0.0425130651,4.41477773 -0.0453986756,4.09820839 0.148075568,3.90117456 C0.150162624,3.89904911 0.152268631,3.89694235 0.154393339,3.89485454 Z'
                      fill='#FFFFFF'></path>
                  </g>
                </svg>
              </span>
            </a>
          </div>
        </div>
        {/*back ligth circles, btn4 */}
        <div className='css_btn_box btnBox4'>
          <div>
            <div className='btnBox4_container'>
              <ul>
                <li>
                  <a href='#'>
                    <i className='fa fa-arrows' aria-hidden='true'>
                      <DiAndroid />
                    </i>
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <i className='fa fa-btc' aria-hidden='true'>
                      <DiApple />
                    </i>
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <i className='fa fa-globe' aria-hidden='true'>
                      <DiCodeigniter />
                    </i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* border animation,btn5 */}
        <div className='css_btn_box btnBox5'>
          <ul>
            <li>
              <a className='facebook' href='#'>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <DiGithubAlt />
              </a>
            </li>
            <li>
              <a className='twitter' href='#'>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <DiProlog />
              </a>
            </li>
            <li>
              <a className='instagram' href='#'>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <DiVisualstudio />
              </a>
            </li>
          </ul>
        </div>
        {/*plus minus expends btn6 */}
        <div className='css_btn_box btnBox6'>
          <div className='btnbox6_single_div1'>
            <button className='icon-btn add-btn'>
              <div className='add-icon'></div>
              <div className='btn-txt'>Add</div>
            </button>
          </div>
          <div className='btnbox6_single_div2'>
            <button className='icon-btn add-btn'>
              <div className='btn-txt'>Remove</div>
            </button>
          </div>
        </div>
        {/* btn7 */}
        <div className='css_btn_box btnBox7'>
          <div className='hexagon-wrapper'>
            <div className='hexagon'>
              <DiRedhat />
            </div>
          </div>
          <div className='hexagon-wrapper'>
            <div className='hexagon'>
              <DiNpm />
            </div>
          </div>
        </div>
        {/* btn8 delete animeted x*/}

        {/* btn9 glass*/}
        <div className='css_btn_box btnBox9'>
          <button className='noselect'>Glass</button>
        </div>
        {/* btn10 forword back play*/}
        <div className='css_btn_box btnBox10'>
          <div className='frame'>
            <span className='btn'>
              <AiFillBackward />
            </span>
            <span className='btn'>
              <AiOutlinePlayCircle />
            </span>
            <span className='btn'>
              <AiFillForward />
            </span>
          </div>
        </div>
        <div className='css_btn_box btnBox11'></div>
        <div className='css_btn_box btnBox11'></div>
      </div>
    </div>
  );
}
