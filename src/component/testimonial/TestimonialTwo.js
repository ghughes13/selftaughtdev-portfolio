import React from "react";
import SectionTitle from "../../elements/section-title/SectionTitle";
import TestimonialPropOne from "./TestimonialPropOne";
import { FaLinkedinIn, FaYoutube } from "react-icons/fa";

const TestimonialTwo = () => {
  return (
    <div className="section section-padding-equal">
      <div className="container">
        <SectionTitle
          subtitle="Testimonial"
          title="Recommendations From Coworkers"
          textAlignment="heading-left"
          textColor=""
        />
        <div className="row">
          <TestimonialPropOne colSize="col-lg-4" itemShow="3" />
        </div>
        <div className="axil-followers">
          <ul className="followers-list list-unstyled">
            <li className="youtube">
              <a href="https://www.youtube.com/channel/UC_CWq39fcBPCmgKYZ0yProg" target="_blank" rel="noreferrer">
                <span className="icon">
                  <FaYoutube />
                </span>
                <span>14,000+ Subscribers</span>
              </a>
            </li>
            <li className="linkedin">
              <a href="https://www.linkedin.com/in/garrett-hughes-5320626b/" target="_blank" rel="noreferrer">
                <span className="icon">
                  <FaLinkedinIn />
                </span>
                <span>2,000+ Followers</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <ul className="shape-group-4 list-unstyled">
        <li className="shape-1">
          <img src={process.env.PUBLIC_URL + "/images/others/bubble-1.png"} alt="Bubble" />
        </li>
      </ul>
    </div>
  );
};

export default TestimonialTwo;
