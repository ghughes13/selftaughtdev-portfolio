import React from "react";
import SectionTitle from "../../elements/section-title/SectionTitle";
import ProjectPropTwo from "./itemProp/ProjectPropTwo";
import ProjectData from "../../data/project/ProjectData.json";
import { Link } from "react-router-dom";

const portfolioData = ProjectData;

const ProjectTwo = () => {
  return (
    <div className="section section-padding-equal bg-color-dark">
      <div className="container">
        <SectionTitle
          subtitle="Work Portfolio"
          title="My Previous Projects"
          description="Sadly, my work at Chase & American Express are in their respective internal github accounts and can not be shared, so these are works from previous jobs."
          textAlignment="heading-light-left"
          textColor=""
        />
        <div className="row row-45">
          {portfolioData.slice(0, 4).map((data) => (
            <div className="col-md-6" key={data.id}>
              <ProjectPropTwo projectStyle="project-style-2" portfolio={data} />
            </div>
          ))}
        </div>
        <div className="more-project-btn">
          <Link to={process.env.PUBLIC_URL + "/project-grid-two"} className="axil-btn btn-fill-white">
            Discover More Projects
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectTwo;
