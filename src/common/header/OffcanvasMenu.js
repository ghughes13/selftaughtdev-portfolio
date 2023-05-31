import React from "react";
import { Link } from "react-router-dom";
import Offcanvas from "react-bootstrap/Offcanvas";
import { FaYoutube, FaGithub, FaLinkedin, FaFilePdf, FaPhone } from "react-icons/fa";

const OffcanvasMenu = ({ offcanvasShow, offcanvasHide }) => {
  return (
    <Offcanvas show={offcanvasShow} onHide={offcanvasHide} placement="end" className="header-offcanvasmenu">
      <Offcanvas.Header closeButton></Offcanvas.Header>
      <Offcanvas.Body>
        <div className="row ">
          <div className="col-lg-5 col-xl-6">
            <ul className="main-navigation list-unstyled">
              <li>
                <Link to={process.env.PUBLIC_URL + "/about-me"}>About Me</Link>
              </li>
              <li>
                <Link to={process.env.PUBLIC_URL + "/project-grid-two"}>Projects</Link>
              </li>
              <li>
                <Link to={process.env.PUBLIC_URL + "/contact"}>Contact Me</Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-7 col-xl-6">
            <div className="contact-info-wrap">
              <div className="contact-inner">
                <address className="address">
                  <span className="title">Location</span>
                  <p>Dallas, TX</p>
                </address>
                <address className="address">
                  <span className="title">Give Me A Call</span>
                  <a href="tel:3184588925" className="tel">
                    <FaPhone /> (318) 458-8925
                  </a>
                </address>
              </div>
              <div className="contact-inner">
                <h5 className="title">Socials & Resume</h5>
                <div className="contact-social-share">
                  <ul className="social-share list-unstyled">
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default OffcanvasMenu;
