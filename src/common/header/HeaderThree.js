import React, { useState } from "react";
import Logo from "../../elements/logo/Logo";
import OffcanvasMenu from "./OffcanvasMenu";
import StickyHeader from "./StickyHeader";
import { FaGithub, FaLinkedin, FaYoutube, FaFilePdf } from "react-icons/fa";
import SwitcherHeader from "../../elements/switcher/SwitcherHeader";

const HeaderThree = () => {
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const OffcanvasHandleClose = () => setShowOffcanvas(false);
  const OffcanvasHandleShow = () => setShowOffcanvas(true);

  const sticky = StickyHeader(100);

  return (
    <>
      <header className="header axil-header header-style-3">
        <div className={`axil-mainmenu ${sticky ? "axil-sticky" : ""}`}>
          <div className="container">
            <div className="header-navbar">
              <div className="header-logo">
                <Logo
                  dimage="/images/SelfTaughtDev logo - Light.svg"
                  limage="/images/SelfTaughtDev logo - Dark.svg"
                  simage="/images/SelfTaughtDev logo - Dark.svg"
                />
              </div>
              <div className="header-action">
                <ul className="list-unstyled">
                  <li className="header-social-link">
                    <ul className="social-icon-list list-unstyled">
                      <li>
                        <a href="https://www.youtube.com/channel/UC_CWq39fcBPCmgKYZ0yProg" target="_blank" rel="noreferrer">
                          <FaYoutube />
                        </a>
                      </li>
                      <li>
                        <a href="https://github.com/ghughes13" target="_blank" rel="noreferrer">
                          <FaGithub />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.linkedin.com/in/garrett-hughes-5320626b/" target="_blank" rel="noreferrer">
                          <FaLinkedin />
                        </a>
                      </li>
                      <li>
                        <a href="/Garrett_Hughes_Resume_Tech.pdf" target="_blank" rel="noreferrer">
                          <FaFilePdf />
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li className="sidemenu-btn">
                    <button className="btn-wrap" onClick={OffcanvasHandleShow}>
                      <span></span>
                      <span></span>
                      <span></span>
                    </button>
                  </li>
                  <li className="my_switcher d-block d-lg-none">
                    <SwitcherHeader />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
      <OffcanvasMenu offcanvasShow={showOffcanvas} offcanvasHide={OffcanvasHandleClose} />
    </>
  );
};

export default HeaderThree;
