import React from "react";
import SEO from "../common/SEO";
import ColorSwitcher from "../elements/switcher/ColorSwitcher";
import { Link } from "react-router-dom";

const ComingSoon = () => {
  return (
    <>
      <SEO title="Coming Soon" />
      <ColorSwitcher />
      <main className="main-wrapper">
        <div className="coming-soon-area onepage-screen-area">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-12">
                <div className="site-logo">
                  <Link to={process.env.PUBLIC_URL + "/"} className="logo-light">
                    <img src={process.env.PUBLIC_URL + "/images/SelfTaughtDev logo - Dark.svg"} alt="Logo" />
                  </Link>
                  <Link to={process.env.PUBLIC_URL + "/"} className="logo-dark">
                    <img src={process.env.PUBLIC_URL + "/images/SelfTaughtDev logo - light.svg"} alt="Logo" />
                  </Link>
                </div>
              </div>
              <div className="col-xl-6 col-lg-8">
                <div className="content">
                  <h2 className="title">This page is still being worked on and coming soon!</h2>
                </div>
              </div>
            </div>
          </div>
          <ul className="shape-group-8 list-unstyled">
            <li className="shape shape-2">
              <img src={process.env.PUBLIC_URL + "/images/others/bubble-28.png"} alt="Bubble" />
            </li>
            <li className="shape shape-3">
              <img src={process.env.PUBLIC_URL + "/images/others/line-4.png"} alt="Line" />
            </li>
          </ul>
        </div>
      </main>
    </>
  );
};

export default ComingSoon;
