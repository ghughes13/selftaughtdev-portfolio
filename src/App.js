import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop/ScrollToTop";
import "bootstrap/dist/css/bootstrap.min.css";

// Home Pages Import
import PersonalPortfolio from "./pages/PersonalPortfolio";

// Project
import ProjectGridTwo from "./pages/ProjectGridTwo";
import ProjectDetails from "./pages/ProjectDetails";

// Pages
// import AboutMe from "./pages/AboutMe";
import Typography from "./pages/Typography";
// import Contact from "./pages/Contact";
import ErrorPage from "./pages/404";
import ComingSoon from "./pages/ComingSoon";
import PrivacyPolicy from "./pages/PrivacyPolicy";

// Css Import
import "./assets/scss/app.scss";

const App = () => {
  return (
    <Router>
      <ScrollToTop>
        <Routes>
          <Route path={process.env.PUBLIC_URL + "/"} element={<PersonalPortfolio />} />
          <Route path={process.env.PUBLIC_URL + "/personal-portfolio"} element={<PersonalPortfolio />} />

          {/* Project  */}
          <Route path={process.env.PUBLIC_URL + "/project-grid-two"} element={<ProjectGridTwo />} />
          <Route path={process.env.PUBLIC_URL + "/project-details/:slug"} element={<ProjectDetails />} />

          {/* Pages  */}
          <Route path={process.env.PUBLIC_URL + "/about-me"} element={<ComingSoon />} />
          <Route path={process.env.PUBLIC_URL + "/typography"} element={<Typography />} />
          <Route path={process.env.PUBLIC_URL + "/contact"} element={<ComingSoon />} />
          <Route path={process.env.PUBLIC_URL + "/404"} element={<ErrorPage />} />
          <Route path={process.env.PUBLIC_URL + "/coming-soon"} element={<ComingSoon />} />
          <Route path={process.env.PUBLIC_URL + "/privacy-policy"} element={<PrivacyPolicy />} />
        </Routes>
      </ScrollToTop>
    </Router>
  );
};

export default App;
