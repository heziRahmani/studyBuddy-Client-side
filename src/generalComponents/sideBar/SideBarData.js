import React from "react";

import {
  IoLogoCss3,
  IoLogoJavascript,
  IoLogoHtml5,
  IoIosPulse,
  IoMdStarHalf,
} from "react-icons/io";

import { FaReact, FaJs, FaHome } from "react-icons/fa";
import { BsInfoLg } from "react-icons/bs";
import { AiOutlineConsoleSql } from "react-icons/ai";
export const SideBarData = [
  {
    titel: "Home",
    icon: <FaHome />,
    link: "/",
    subLinks: [],
    svg: "M46 108L30 98.5L30.5 98L31 97.5H31.5L32.5 97L34.5 96.5L35.5 96L36 95.5L37 95H37.5L39 95.5L40 96L43 98L44.5 99L48 101H48.5H49L49.5 100.5L88 78.5L88.5 78L89 77V76.5V76V32.5L88.5 32L88 31.5L87.5 31L86.5 30.5L78 25.5L49.5 9.5L48.5 9H48L47.5 9.5L47 10L44 12L9 31.5L8.5 32L8 32.5V33.5V34.5V35V77.5L8.5 78L10 79L20 85L21.5 85.5L22.5 86H24L25.5 85.5L26.5 85L27.5 84L28.5 83L29 82V79.5L28.5 37V36L29 35.5L29.5 35H30H35.5L36.5 35.5V36V36.5V82L36 83.5L35.5 85L33.5 89L31 91L27.5 92.5L24 93H21L18 92L13 89.5L4.5 84.5L2.5 83L1.5 81.5L1 80L0.5 78V33V30.5L1.5 28L4 25L7.5 23L45 2L47 1H49.5L51 1.5L54.5 3L57.5 5L92.5 25.5L94.5 27L95.5 28.5L96.5 30.5V33V77.9369L95.5 80.5L93 84L90 86L51.5 108L49.5 108.5H47H46M44.5 75L48.5 78L50.5 78.5H53.5H55.5H57.5H60.5H64L65.5 77.9369L66.5 77.5L73 75L77 72L78.5 70L79.5 67.5L80 65V63L79.5 60.5L78.5 58L77 56L74.5 54.5L70 53L64.5 52L57 51L51.5 50L50.5 49L49 47.5V46V44.5L50 43L51.5 42L54.5 41H58.5H61L64 41.5L66.5 42L68 43L69.5 44.5L70.5 46.5L71 48L72 49.5H74H75.5H79L79.5 48.5L80 47V46L79.5 45L78.5 43.5L77.5 42L76.5 40L75.5 39L74 37.5L71.5 36L68 34.5L64 33.5H58.5L51 34.5L47 36.5L44 38.5L42.5 40L41 43.5L40.5 46.5L41 50L42.5 53L45.5 55.5L50 57L56.5 58.5L63 59.5L69.5 61L72 62.5L72.5 65L71.5 66.5L69.5 68L64.5 69.5L60.5 70H57H53.5L50.5 69.5L49 67L48 65.5L47.5 63.5L47 62H40.5L39 63V64V65L39.5 66L40.5 68L41.5 70L42.5 72L44.5 75Z",
    viewBox: "0 0 97 109",
  },
  {
    titel: "ABOUT",
    icon: <BsInfoLg />,
    link: "/about",
    subLinks: [],
    // svg: "M46 108L30 98.5L30.5 98L31 97.5H31.5L32.5 97L34.5 96.5L35.5 96L36 95.5L37 95H37.5L39 95.5L40 96L43 98L44.5 99L48 101H48.5H49L49.5 100.5L88 78.5L88.5 78L89 77V76.5V76V32.5L88.5 32L88 31.5L87.5 31L86.5 30.5L78 25.5L49.5 9.5L48.5 9H48L47.5 9.5L47 10L44 12L9 31.5L8.5 32L8 32.5V33.5V34.5V35V77.5L8.5 78L10 79L20 85L21.5 85.5L22.5 86H24L25.5 85.5L26.5 85L27.5 84L28.5 83L29 82V79.5L28.5 37V36L29 35.5L29.5 35H30H35.5L36.5 35.5V36V36.5V82L36 83.5L35.5 85L33.5 89L31 91L27.5 92.5L24 93H21L18 92L13 89.5L4.5 84.5L2.5 83L1.5 81.5L1 80L0.5 78V33V30.5L1.5 28L4 25L7.5 23L45 2L47 1H49.5L51 1.5L54.5 3L57.5 5L92.5 25.5L94.5 27L95.5 28.5L96.5 30.5V33V77.9369L95.5 80.5L93 84L90 86L51.5 108L49.5 108.5H47H46M44.5 75L48.5 78L50.5 78.5H53.5H55.5H57.5H60.5H64L65.5 77.9369L66.5 77.5L73 75L77 72L78.5 70L79.5 67.5L80 65V63L79.5 60.5L78.5 58L77 56L74.5 54.5L70 53L64.5 52L57 51L51.5 50L50.5 49L49 47.5V46V44.5L50 43L51.5 42L54.5 41H58.5H61L64 41.5L66.5 42L68 43L69.5 44.5L70.5 46.5L71 48L72 49.5H74H75.5H79L79.5 48.5L80 47V46L79.5 45L78.5 43.5L77.5 42L76.5 40L75.5 39L74 37.5L71.5 36L68 34.5L64 33.5H58.5L51 34.5L47 36.5L44 38.5L42.5 40L41 43.5L40.5 46.5L41 50L42.5 53L45.5 55.5L50 57L56.5 58.5L63 59.5L69.5 61L72 62.5L72.5 65L71.5 66.5L69.5 68L64.5 69.5L60.5 70H57H53.5L50.5 69.5L49 67L48 65.5L47.5 63.5L47 62H40.5L39 63V64V65L39.5 66L40.5 68L41.5 70L42.5 72L44.5 75Z",
    viewBox: "0 0 97 109",
  },
  {
    titel: "HTML",
    icon: <IoLogoHtml5 />,
    link: "/html/tags",
    subLinks: [
      { titel: "Html Tags", icon: <IoMdStarHalf />, link: "/html/tags" },
    ],
    svg: "M35.5 1V24H8V1H1V52H8V30H35.5V52H42V1H44.5V6H60V52H66.5V6H82.5V1H85.5V52H92V13.5L108 52H114L129.5 13.5L131 52H136V1H140V52H170V46.5H146.5V1H129.5L111 43.5L93.5 1H35.5Z",
    viewBox: "0 0 171 53",
  },
  {
    titel: "CSS",
    icon: <IoLogoCss3 />,
    link: "/css",
    subLinks: [{ titel: "Buttons", icon: <IoMdStarHalf />, link: "/css/btn" }],
    // svg: "M100.538 43.0708L85.1996 18.2184L84.665 17.199M100.538 43.0708L105.883 42.7811C106.804 42.7312 107.686 43.1602 108.215 43.9158C108.354 44.1149 108.466 44.3321 108.547 44.5614L108.762 45.173C109.25 46.5607 110.141 47.7715 111.321 48.6504C111.861 49.0524 112.453 49.3791 113.081 49.6211L115.383 50.5083C118.655 51.7693 122.325 51.7031 125.561 50.3517C126.961 49.7671 128.266 48.9401 129.389 47.9198L129.563 47.7615C130.356 47.0404 131.046 46.2127 131.612 45.302L132.084 44.5424C132.545 43.8009 132.861 42.9789 133.015 42.1198L133.025 42.0652C133.179 41.2124 133.164 40.3377 132.981 39.4907C132.794 38.6276 132.437 37.8105 131.931 37.0873L131.869 36.9999C131.028 35.7978 129.837 34.8836 128.458 34.3809L124.318 32.8715L117.904 31.4243C115.943 30.9819 114.044 30.3017 112.249 29.3986L109.238 27.8846C106.83 26.6733 104.836 24.7733 103.511 22.426L103.311 22.0729C102.326 20.3287 101.793 18.3656 101.762 16.3626C101.713 13.2794 102.853 10.2957 104.945 8.03065L105.115 7.84662C105.547 7.37961 106.013 6.94585 106.51 6.54906L107.011 6.14856C109.884 3.85382 113.307 2.34941 116.94 1.78432L117.903 1.63443C120.441 1.23974 123.028 1.29271 125.548 1.79092L127.377 2.15259C129.147 2.50271 130.826 3.21554 132.308 4.2462L135.001 6.1198C135.872 6.72576 136.493 7.62802 136.747 8.65814L137.169 10.3649C137.608 12.1397 136.323 13.8755 134.498 13.9745C133.205 14.0445 132.021 13.2531 131.591 12.0317L131.579 11.9985C131.353 11.3568 130.914 10.8125 130.334 10.4569L128.089 9.08021C126.043 7.82572 123.664 7.22337 121.268 7.35322L118.889 7.48211C118.095 7.52516 117.307 7.64664 116.536 7.84477L115.158 8.19926C113.455 8.63723 111.947 9.62978 110.871 11.0203C110.289 11.7723 109.847 12.6231 109.567 13.5318L109.124 14.9684C108.726 16.2587 108.753 17.6426 109.201 18.9162C109.799 20.6133 111.093 21.9742 112.758 22.6558L115.901 23.9427C116.582 24.2215 117.284 24.4456 118.001 24.613L124.21 26.0633L129.857 27.8871C131.636 28.4615 133.291 29.3642 134.737 30.5484L135.106 30.8508C136.195 31.7421 137.121 32.8147 137.844 34.0213C138.531 35.1669 139.025 36.4175 139.307 37.7231L139.645 39.2872C139.881 40.3769 139.94 41.4973 139.821 42.6057C139.642 44.2772 139.063 45.8808 138.132 47.2805L137.017 48.9563L136.027 50.4436C135.01 51.9727 133.685 53.2727 132.136 54.2602C131.309 54.7877 130.426 55.2213 129.503 55.5529L128.658 55.8561C126.721 56.5522 124.692 56.9624 122.636 57.0738L120.556 57.1865L115.287 56.8069C113.283 56.6625 111.327 56.1234 109.531 55.2205C108.215 54.5586 107.002 53.7094 105.93 52.6995L104.33 51.1928C104.019 50.9 103.73 50.5846 103.465 50.2493C102.681 49.2566 102.123 48.105 101.83 46.8747L101.441 45.2446C101.258 44.4766 100.953 43.7427 100.538 43.0708ZM84.665 17.199L84.6484 16.1516C84.6325 15.1472 84.2108 14.192 83.4795 13.5033L82.3668 12.4556C81.7701 11.8937 81.0834 11.4357 80.3353 11.1008L79.7494 10.8385C78.1318 10.1143 76.3647 9.78653 74.595 9.88243L73.1436 9.96107L70.8197 10.3487C69.2812 10.6054 67.8079 11.161 66.4831 11.9842L65.7332 12.4501C64.5103 13.21 63.5 14.2677 62.7968 15.5241L62.7252 15.6521C62.4799 16.0904 62.2816 16.5533 62.1336 17.0333L61.947 17.6383C61.5743 18.8472 61.6387 20.1488 62.1292 21.315C62.3402 21.8168 62.6261 22.2838 62.9771 22.7L63.5806 23.4155C64.2315 24.1874 64.9811 24.8704 65.81 25.447L65.8633 25.4841C67.7516 26.7977 69.9772 27.542 72.2759 27.6286L73.0517 27.6578C73.9898 27.6931 74.9223 27.8184 75.8365 28.0319L79.8683 28.9737C81.1184 29.2657 82.3377 29.6768 83.5094 30.2014L84.6214 30.6992C86.8501 31.6969 88.8043 33.219 90.3174 35.1356L90.588 35.4783C90.9876 35.9845 91.3395 36.5267 91.6391 37.0978C92.3976 38.5439 92.8062 40.1478 92.8321 41.7805L92.8591 43.4869L92.8765 44.5797C92.9086 46.6081 92.4038 48.609 91.413 50.3793C90.3674 52.1631 88.9989 53.7486 87.3849 55.0409C86.6733 55.6107 85.9168 56.1221 85.1228 56.5701L83.2324 57.6366C80.8559 58.803 78.2686 59.478 75.6252 59.6213L73.9327 59.713L68.357 59.3114C66.5513 59.1813 64.7821 58.7363 63.1297 57.9965L62.7931 57.8458C59.2578 56.2631 56.4944 53.343 55.1089 49.7258L54.5577 47.6591L54.0064 45.5923M84.665 17.199C87.3703 20.1073 92.1315 17.2806 90.8736 13.5132L90.0754 11.1226C89.8535 10.458 89.4704 9.85875 88.9603 9.3784L87.4482 7.95457C85.8448 6.44471 83.8707 5.38562 81.726 4.88467L79.689 4.40884C78.376 4.10215 77.0357 3.92729 75.6879 3.88684L75.1279 3.87004C72.7206 3.79779 70.3189 4.1416 68.0285 4.88634L67.6933 4.99534C65.0957 5.83997 62.7072 7.22669 60.6858 9.0637L58.8606 10.8015C57.3782 12.213 56.2829 13.9814 55.6798 15.9375C55.3091 17.1395 55.1305 18.3924 55.1504 19.6501L55.1588 20.1775C55.1773 21.3439 55.4062 22.4973 55.8345 23.5823C56.4713 25.1957 57.5296 26.6086 58.8987 27.6736L59.9571 28.4969C63.0672 30.7458 66.6269 32.2957 70.3921 33.0403L70.9189 33.1444L76.1242 34.4348L79.6937 35.5471C81.1164 35.9905 82.4196 36.7517 83.5045 37.7733L84.1717 38.4016C85.0663 39.244 85.708 40.3193 86.0246 41.5065C86.4239 43.0035 86.284 44.5932 85.6293 45.9974L85.3066 46.6895C84.8638 47.6392 84.2533 48.501 83.5042 49.2337L82.973 49.7534C80.7546 51.9233 77.8228 53.2123 74.7242 53.3803L73.833 53.4286L72.5897 53.4959C70.3428 53.6177 68.0993 53.2015 66.0455 52.2821L65.6789 52.118C65.2225 51.9136 64.7835 51.6725 64.3662 51.397L62.5374 50.1893C61.7587 49.6751 61.2049 48.8838 60.9884 47.9761C60.5495 46.1359 58.7847 44.93 56.9107 45.1897L54.0064 45.5923M54.0064 45.5923L40.4065 24.4758C39.9058 23.6983 39.4737 22.8786 39.1152 22.0261M39.1152 22.0261L38.5764 20.7449L38.2627 20.147C37.4113 18.5236 36.2415 17.0883 34.8232 15.9269C33.4671 14.8164 31.9098 13.9775 30.2363 13.456L30.0633 13.4021C28.0699 12.781 25.9664 12.5952 23.895 12.8573L22.6115 13.0197C20.7479 13.2555 18.9404 13.8181 17.272 14.6814L16.8953 14.8764C15.0785 15.8165 13.4887 17.1417 12.2367 18.7594C11.8108 19.3098 11.4263 19.8911 11.0864 20.4984L10.0844 22.2889C8.42714 25.4866 7.48356 29.0058 7.31875 32.6037L7.18378 35.55L7.53491 39.593C7.72244 41.7523 8.26147 43.8665 9.13071 45.852L9.46877 46.6242C10.1565 48.195 11.1082 49.6364 12.2826 50.8859C13.8898 52.5959 15.8754 53.9053 18.0802 54.7092L19.7132 55.3046C20.5581 55.6126 21.4364 55.8197 22.3299 55.9216C23.5038 56.0554 24.6915 56.0061 25.8503 55.7754L27.7194 55.4033L30.2629 54.5268C30.9722 54.2824 31.6578 53.9739 32.3113 53.6053C33.6989 52.8223 34.9223 51.7788 35.9142 50.5318L36.8535 49.351C37.2581 48.8424 37.6012 48.2879 37.8758 47.6989L38.7003 45.9305C39.4816 44.2547 41.1227 43.1456 42.969 43.0455L43.3446 43.0252C43.5114 43.0161 43.6788 43.0279 43.8427 43.0604C44.8759 43.2647 45.5755 44.2327 45.4454 45.2778L45.2942 46.4924C45.2428 46.9051 45.1144 47.3045 44.9156 47.6698L43.4483 50.3663C42.2862 52.5019 40.7354 54.4017 38.8758 55.968L37.0817 57.479C35.724 58.6225 34.2389 59.6054 32.6558 60.4082L32.1309 60.6743C30.9866 61.2546 29.7824 61.7086 28.5398 62.0282C26.3636 62.588 24.1006 62.7275 21.8721 62.4395L21.3096 62.3668C20.1258 62.2138 18.9575 61.9584 17.8179 61.6033L16.6885 61.2513C14.7695 60.6534 12.9322 59.8195 11.2188 58.7687C9.80117 57.8994 8.47661 56.8868 7.26595 55.7468L6.98137 55.4788C5.58388 53.8217 4.49896 51.9246 3.77946 49.8799L3.30711 48.5375C2.90014 47.3809 2.57655 46.1967 2.33884 44.9938L1.56845 41.0958L1.15063 36.5706C1.01203 35.0695 0.987759 33.56 1.07802 32.0553C1.25993 29.0226 1.90542 26.0358 2.99203 23.1986L3.79462 21.1031C4.48731 19.2944 5.39799 17.577 6.50647 15.9888L6.82531 15.532C8.52299 13.0997 10.7123 11.0507 13.2516 9.51759C15.1236 8.38735 17.1592 7.55357 19.2863 7.04587L19.7997 6.92332C21.1028 6.61227 22.4313 6.41934 23.7691 6.34685C26.2109 6.21451 28.6578 6.48484 31.0118 7.147L33.0709 7.72618C34.5273 8.13587 35.9115 8.76886 37.1741 9.6026C38.343 10.3745 39.3951 11.3102 40.2982 12.381L42.6975 15.2259C43.0057 15.5913 43.2426 16.0114 43.3957 16.4642L44.0891 18.5146C45.1014 21.5078 41.5968 23.982 39.1152 22.0261Z",
    viewBox: "0 0 141 64",
  },
  {
    titel: "JS",
    icon: <FaJs />,
    link: "/js/arreyMethod",
    subLinks: [
      { titel: "arreyMethod", icon: <IoMdStarHalf />, link: "/js/arreyMethod" },
      { titel: "Regex", icon: <IoMdStarHalf />, link: "/js/Regex" },
      { titel: "One Liners", icon: <IoMdStarHalf />, link: "/js/OneLiners" },
    ],
    svg: "M46 108L30 98.5L30.5 98L31 97.5H31.5L32.5 97L34.5 96.5L35.5 96L36 95.5L37 95H37.5L39 95.5L40 96L43 98L44.5 99L48 101H48.5H49L49.5 100.5L88 78.5L88.5 78L89 77V76.5V76V32.5L88.5 32L88 31.5L87.5 31L86.5 30.5L78 25.5L49.5 9.5L48.5 9H48L47.5 9.5L47 10L44 12L9 31.5L8.5 32L8 32.5V33.5V34.5V35V77.5L8.5 78L10 79L20 85L21.5 85.5L22.5 86H24L25.5 85.5L26.5 85L27.5 84L28.5 83L29 82V79.5L28.5 37V36L29 35.5L29.5 35H30H35.5L36.5 35.5V36V36.5V82L36 83.5L35.5 85L33.5 89L31 91L27.5 92.5L24 93H21L18 92L13 89.5L4.5 84.5L2.5 83L1.5 81.5L1 80L0.5 78V33V30.5L1.5 28L4 25L7.5 23L45 2L47 1H49.5L51 1.5L54.5 3L57.5 5L92.5 25.5L94.5 27L95.5 28.5L96.5 30.5V33V77.9369L95.5 80.5L93 84L90 86L51.5 108L49.5 108.5H47H46M44.5 75L48.5 78L50.5 78.5H53.5H55.5H57.5H60.5H64L65.5 77.9369L66.5 77.5L73 75L77 72L78.5 70L79.5 67.5L80 65V63L79.5 60.5L78.5 58L77 56L74.5 54.5L70 53L64.5 52L57 51L51.5 50L50.5 49L49 47.5V46V44.5L50 43L51.5 42L54.5 41H58.5H61L64 41.5L66.5 42L68 43L69.5 44.5L70.5 46.5L71 48L72 49.5H74H75.5H79L79.5 48.5L80 47V46L79.5 45L78.5 43.5L77.5 42L76.5 40L75.5 39L74 37.5L71.5 36L68 34.5L64 33.5H58.5L51 34.5L47 36.5L44 38.5L42.5 40L41 43.5L40.5 46.5L41 50L42.5 53L45.5 55.5L50 57L56.5 58.5L63 59.5L69.5 61L72 62.5L72.5 65L71.5 66.5L69.5 68L64.5 69.5L60.5 70H57H53.5L50.5 69.5L49 67L48 65.5L47.5 63.5L47 62H40.5L39 63V64V65L39.5 66L40.5 68L41.5 70L42.5 72L44.5 75Z",
    viewBox: "0 0 97 109",
  },
  // {
  //   titel: "REACT",
  //   icon: <FaReact />,
  //   link: "/REACT",
  //   subLinks: [],
  //   svg: "M46 108L30 98.5L30.5 98L31 97.5H31.5L32.5 97L34.5 96.5L35.5 96L36 95.5L37 95H37.5L39 95.5L40 96L43 98L44.5 99L48 101H48.5H49L49.5 100.5L88 78.5L88.5 78L89 77V76.5V76V32.5L88.5 32L88 31.5L87.5 31L86.5 30.5L78 25.5L49.5 9.5L48.5 9H48L47.5 9.5L47 10L44 12L9 31.5L8.5 32L8 32.5V33.5V34.5V35V77.5L8.5 78L10 79L20 85L21.5 85.5L22.5 86H24L25.5 85.5L26.5 85L27.5 84L28.5 83L29 82V79.5L28.5 37V36L29 35.5L29.5 35H30H35.5L36.5 35.5V36V36.5V82L36 83.5L35.5 85L33.5 89L31 91L27.5 92.5L24 93H21L18 92L13 89.5L4.5 84.5L2.5 83L1.5 81.5L1 80L0.5 78V33V30.5L1.5 28L4 25L7.5 23L45 2L47 1H49.5L51 1.5L54.5 3L57.5 5L92.5 25.5L94.5 27L95.5 28.5L96.5 30.5V33V77.9369L95.5 80.5L93 84L90 86L51.5 108L49.5 108.5H47H46M44.5 75L48.5 78L50.5 78.5H53.5H55.5H57.5H60.5H64L65.5 77.9369L66.5 77.5L73 75L77 72L78.5 70L79.5 67.5L80 65V63L79.5 60.5L78.5 58L77 56L74.5 54.5L70 53L64.5 52L57 51L51.5 50L50.5 49L49 47.5V46V44.5L50 43L51.5 42L54.5 41H58.5H61L64 41.5L66.5 42L68 43L69.5 44.5L70.5 46.5L71 48L72 49.5H74H75.5H79L79.5 48.5L80 47V46L79.5 45L78.5 43.5L77.5 42L76.5 40L75.5 39L74 37.5L71.5 36L68 34.5L64 33.5H58.5L51 34.5L47 36.5L44 38.5L42.5 40L41 43.5L40.5 46.5L41 50L42.5 53L45.5 55.5L50 57L56.5 58.5L63 59.5L69.5 61L72 62.5L72.5 65L71.5 66.5L69.5 68L64.5 69.5L60.5 70H57H53.5L50.5 69.5L49 67L48 65.5L47.5 63.5L47 62H40.5L39 63V64V65L39.5 66L40.5 68L41.5 70L42.5 72L44.5 75Z",
  //   viewBox: "0 0 97 109",
  // },
  {
    titel: "SQL",
    icon: <AiOutlineConsoleSql />,
    link: "/sql/general",
    subLinks: [],
    svg: "M46 108L30 98.5L30.5 98L31 97.5H31.5L32.5 97L34.5 96.5L35.5 96L36 95.5L37 95H37.5L39 95.5L40 96L43 98L44.5 99L48 101H48.5H49L49.5 100.5L88 78.5L88.5 78L89 77V76.5V76V32.5L88.5 32L88 31.5L87.5 31L86.5 30.5L78 25.5L49.5 9.5L48.5 9H48L47.5 9.5L47 10L44 12L9 31.5L8.5 32L8 32.5V33.5V34.5V35V77.5L8.5 78L10 79L20 85L21.5 85.5L22.5 86H24L25.5 85.5L26.5 85L27.5 84L28.5 83L29 82V79.5L28.5 37V36L29 35.5L29.5 35H30H35.5L36.5 35.5V36V36.5V82L36 83.5L35.5 85L33.5 89L31 91L27.5 92.5L24 93H21L18 92L13 89.5L4.5 84.5L2.5 83L1.5 81.5L1 80L0.5 78V33V30.5L1.5 28L4 25L7.5 23L45 2L47 1H49.5L51 1.5L54.5 3L57.5 5L92.5 25.5L94.5 27L95.5 28.5L96.5 30.5V33V77.9369L95.5 80.5L93 84L90 86L51.5 108L49.5 108.5H47H46M44.5 75L48.5 78L50.5 78.5H53.5H55.5H57.5H60.5H64L65.5 77.9369L66.5 77.5L73 75L77 72L78.5 70L79.5 67.5L80 65V63L79.5 60.5L78.5 58L77 56L74.5 54.5L70 53L64.5 52L57 51L51.5 50L50.5 49L49 47.5V46V44.5L50 43L51.5 42L54.5 41H58.5H61L64 41.5L66.5 42L68 43L69.5 44.5L70.5 46.5L71 48L72 49.5H74H75.5H79L79.5 48.5L80 47V46L79.5 45L78.5 43.5L77.5 42L76.5 40L75.5 39L74 37.5L71.5 36L68 34.5L64 33.5H58.5L51 34.5L47 36.5L44 38.5L42.5 40L41 43.5L40.5 46.5L41 50L42.5 53L45.5 55.5L50 57L56.5 58.5L63 59.5L69.5 61L72 62.5L72.5 65L71.5 66.5L69.5 68L64.5 69.5L60.5 70H57H53.5L50.5 69.5L49 67L48 65.5L47.5 63.5L47 62H40.5L39 63V64V65L39.5 66L40.5 68L41.5 70L42.5 72L44.5 75Z",
    viewBox: "0 0 97 109",
  },
  {
    titel: "ADMIN",
    icon: <IoIosPulse />,
    link: "/admin/adminDashboard",
    subLinks: [
      // {
      //   titel: "admin dashboard",
      //   icon: <IoMdStarHalf />,
      //   link: "/admin/adminDashboard",
      // },
      { titel: "TO DO", icon: <IoMdStarHalf />, link: "/admin/todo" },
      // { titel: "Text", icon: <IoMdStarHalf />, link: "/css" },
    ],
    svg: "M46 108L30 98.5L30.5 98L31 97.5H31.5L32.5 97L34.5 96.5L35.5 96L36 95.5L37 95H37.5L39 95.5L40 96L43 98L44.5 99L48 101H48.5H49L49.5 100.5L88 78.5L88.5 78L89 77V76.5V76V32.5L88.5 32L88 31.5L87.5 31L86.5 30.5L78 25.5L49.5 9.5L48.5 9H48L47.5 9.5L47 10L44 12L9 31.5L8.5 32L8 32.5V33.5V34.5V35V77.5L8.5 78L10 79L20 85L21.5 85.5L22.5 86H24L25.5 85.5L26.5 85L27.5 84L28.5 83L29 82V79.5L28.5 37V36L29 35.5L29.5 35H30H35.5L36.5 35.5V36V36.5V82L36 83.5L35.5 85L33.5 89L31 91L27.5 92.5L24 93H21L18 92L13 89.5L4.5 84.5L2.5 83L1.5 81.5L1 80L0.5 78V33V30.5L1.5 28L4 25L7.5 23L45 2L47 1H49.5L51 1.5L54.5 3L57.5 5L92.5 25.5L94.5 27L95.5 28.5L96.5 30.5V33V77.9369L95.5 80.5L93 84L90 86L51.5 108L49.5 108.5H47H46M44.5 75L48.5 78L50.5 78.5H53.5H55.5H57.5H60.5H64L65.5 77.9369L66.5 77.5L73 75L77 72L78.5 70L79.5 67.5L80 65V63L79.5 60.5L78.5 58L77 56L74.5 54.5L70 53L64.5 52L57 51L51.5 50L50.5 49L49 47.5V46V44.5L50 43L51.5 42L54.5 41H58.5H61L64 41.5L66.5 42L68 43L69.5 44.5L70.5 46.5L71 48L72 49.5H74H75.5H79L79.5 48.5L80 47V46L79.5 45L78.5 43.5L77.5 42L76.5 40L75.5 39L74 37.5L71.5 36L68 34.5L64 33.5H58.5L51 34.5L47 36.5L44 38.5L42.5 40L41 43.5L40.5 46.5L41 50L42.5 53L45.5 55.5L50 57L56.5 58.5L63 59.5L69.5 61L72 62.5L72.5 65L71.5 66.5L69.5 68L64.5 69.5L60.5 70H57H53.5L50.5 69.5L49 67L48 65.5L47.5 63.5L47 62H40.5L39 63V64V65L39.5 66L40.5 68L41.5 70L42.5 72L44.5 75Z",
    viewBox: "0 0 97 109",
  },
];
