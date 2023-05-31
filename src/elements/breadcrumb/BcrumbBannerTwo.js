import React from "react";
import Tilty from "react-tilty";
import { AnimationOnScroll } from "react-animation-on-scroll";

const BcrumbBannerTwo = ({ title, paragraph, mainThumb, githubLink, demoLink, techStack }) => {
  return (
    <div className="breadcrum-area breadcrumb-banner single-breadcrumb">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="section-heading heading-left">
              <h1 className="title h2" dangerouslySetInnerHTML={{ __html: title }}></h1>
              <p dangerouslySetInnerHTML={{ __html: paragraph }}></p>
              <p>
                Built Using: <span dangerouslySetInnerHTML={{ __html: techStack.map((tech) => " " + tech) }}></span>
              </p>
              <AnimationOnScroll animateIn="slideInUp" duration={1} animateOnce={true} delay={200}>
                <div className="btn-group">
                  <a href={githubLink} className="axil-btn btn-fill-primary btn-large">
                    View The Code
                  </a>
                  <a href={demoLink} className="axil-btn btn-fill-primary btn-large m-l-10">
                    View The Project
                  </a>
                </div>
              </AnimationOnScroll>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="banner-thumbnail">
              <Tilty perspective={2000} reset={false}>
                <img src={process.env.PUBLIC_URL + mainThumb} alt="Illustration" />
              </Tilty>
            </div>
          </div>
        </div>
      </div>
      <ul className="shape-group-8 list-unstyled">
        <li className="shape shape-1">
          <img src={process.env.PUBLIC_URL + "/images/others/bubble-9.png"} alt="Bubble" />
        </li>
        <li className="shape shape-2">
          <img src={process.env.PUBLIC_URL + "/images/others/bubble-20.png"} alt="Bubble" />
        </li>
        <li className="shape shape-3">
          <img src={process.env.PUBLIC_URL + "/images/others/line-4.png"} alt="Line" />
        </li>
      </ul>
    </div>
  );
};

export default BcrumbBannerTwo;
