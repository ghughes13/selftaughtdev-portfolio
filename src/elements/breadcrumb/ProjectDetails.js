import React from "react";
import Tilty from "react-tilty";
import { AnimationOnScroll } from "react-animation-on-scroll";

const ProjectDetails = ({ title, paragraph, primaryImage, secondaryImage, githubLink, demoLink, techStack }) => {
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
              {githubLink || demoLink ? (
                <AnimationOnScroll animateIn="slideInUp" duration={1} animateOnce={true} delay={200}>
                  <div className="btn-group">
                    {githubLink ? (
                      <a href={githubLink} className="axil-btn btn-fill-primary btn-large" target="_blank" rel="noreferrer">
                        View The Code
                      </a>
                    ) : null}
                    {demoLink ? (
                      <a
                        href={demoLink}
                        className="axil-btn btn-fill-primary btn-large m-l-10"
                        target="_blank"
                        rel="noreferrer"
                      >
                        View The Project
                      </a>
                    ) : null}
                  </div>
                </AnimationOnScroll>
              ) : null}
            </div>
          </div>
          <div className="col-lg-6">
            <div className="banner-thumbnail">
              <Tilty perspective={2000} reset={false}>
                <img src={process.env.PUBLIC_URL + primaryImage} alt="Illustration" />
                {secondaryImage ? (
                  <img src={process.env.PUBLIC_URL + secondaryImage} style={{ marginTop: "25px" }} alt="Illustration" />
                ) : (
                  <> </>
                )}
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

export default ProjectDetails;
