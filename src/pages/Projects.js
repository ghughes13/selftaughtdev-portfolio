import React from "react";
import { useParams } from "react-router-dom";
import Footer from "../common/footer/Footer";
import HeaderThree from "../common/header/HeaderThree";
import ProjectDetails from "../elements/breadcrumb/ProjectDetails";
import { slugify } from "../utils";
import ProjectData from "../data/project/ProjectData.json";
import ColorSwitcher from "../elements/switcher/ColorSwitcher";
import SEO from "../common/SEO";

const allProjectData = ProjectData;

const Projects = () => {
  const params = useParams();
  const projectSlug = params.slug;

  const getProjectData = allProjectData.filter((data) => slugify(data.title) === projectSlug);
  const detailsProject = getProjectData[0];

  return (
    <>
      <SEO title="Project Details" />
      <ColorSwitcher />
      <main className="main-wrapper project-details-wrapper">
        <HeaderThree />
        <ProjectDetails
          title={detailsProject.title}
          paragraph={detailsProject.excerpt}
          primaryImage={detailsProject.image}
          secondaryImage={detailsProject.imageTwo}
          githubLink={detailsProject.github}
          demoLink={detailsProject.demo}
          techStack={detailsProject.techStack}
        />
        <Footer parentClass="" />
      </main>
    </>
  );
};

export default Projects;
