import React from "react";
import Footer from "../common/footer/Footer";
import HeaderThree from "../common/header/HeaderThree";
import ColorSwitcher from "../elements/switcher/ColorSwitcher";
import SEO from "../common/SEO";
import ProjectOne from "../component/project/ProjectOne";

const ProjectGridTwo = () => {
  return (
    <>
      <SEO title="Project Three Column" />
      <ColorSwitcher />
      <main className="main-wrapper">
        <HeaderThree />
        <ProjectOne colSize="col-xl-4 col-md-6" columnGap="row-15" />
        <Footer parentClass="" />
      </main>
    </>
  );
};

export default ProjectGridTwo;
