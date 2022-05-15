import { lazy, Suspense, useState } from "react";
import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useNavigate,
} from "react-router-dom";
import Regex from "./components/js_views/regex/Regex";
import OneLiners from "./components/js_views/OneLiners/OneLiners";
import CssDashboard from "./components/css_views/cssDashboard/CssDashboard";
import HtmlDashboard from "./components/html_views/htmlDashboard/HtmlDashboard";
import AdminDashboard from "./components/admin_views/adminDashboard/AdminDashboard.";
import SignInForm from "./components/admin_views/auth/SignInForm";
import AdminMainPage from "./components/admin_views/adminMainPage/AdminMainPage";
// import ToDo from "./components/toDo/ToDo";
import UpdateToDoForm from "./components/toDo/UpdateToDoForm";
import { UpdateFormContext_provider } from "./utilities/context/updateFormContext";
import LandingPage from "./components/landingPage/LandingPage";
import ButtonsUi from "./components/css_views/buttons/Buttons";
import HtmlTags from "./components/html_views/htmlTags/HtmlTags";
import About from "./components/about/About";
import SqlDashboard from "./components/sql_views/sqlDashboard/SqlDashboard";
import SqlGeneral from "./components/sql_views/sqlGeneral/SqlGeneral";
import ToDo from "./components/admin_views/toDo/ToDo";

//js imports
const JsMain = lazy(() => import("./components/js_views/js_main_page/JsMain"));
const Arreys = lazy(() => import("./components/js_views/arreys/Arreys"));
//css imports
//html imports
function App() {
  const [state, setstate] = useState(null);

  return (
    <Suspense fallback={<div>loading...</div>}>
      <div className='App'>
        <UpdateFormContext_provider>
          <BrowserRouter>
            <Routes>
              {/* landing page */}
              <Route path={"/"} element={<LandingPage />} />
              {/* About view routs */}
              <Route path={"/about"} element={<About />} />
              {/* admin routs */}

              <Route path={"/admin"} element={<AdminMainPage />}>
                <Route path={"signin"} element={<SignInForm />} />
                <Route path={"adminDashboard"} element={<AdminDashboard />} />
                <Route path={"todo"} element={<ToDo />} />
                {/* <Route  path={"UpdateToDoForm"} element={<UpdateToDoForm />} /> */}
              </Route>

              {/* js view routs */}
              <Route path={"/js"} element={<JsMain />}>
                <Route path={"arreyMethod"} element={<Arreys />} />
                <Route path={"Regex"} element={<Regex />} />
                <Route path={"OneLiners"} element={<OneLiners />} />
                {/* <Route path={"dashboard"} element={<Dashboards/>} /> */}
              </Route>

              {/* css view routs */}
              <Route path={"/css"} element={<CssDashboard />}>
                <Route path='btn' element={<ButtonsUi />} />
              </Route>
              {/* sql view routs */}
              <Route path={"/sql"} element={<SqlDashboard />}>
                <Route path='general' element={<SqlGeneral />} />
              </Route>

              {/* html view routs */}
              <Route path={"/html"} element={<HtmlDashboard />}>
                <Route path='tags' element={<HtmlTags />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </UpdateFormContext_provider>
      </div>
    </Suspense>
  );
}

export default App;
