import React from "react";
import Footer from "../common/footer/Footer";
import HeaderThree from "../common/header/HeaderThree";
import SEO from "../common/SEO";
import BcrumbBannerOne from "../elements/breadcrumb/BcrumbBannerOne";
import ColorSwitcher from "../elements/switcher/ColorSwitcher";
import AboutThree from "../component/about/AboutThree";
import AboutFour from "../component/about/AboutFour";
import AboutFive from "../component/about/AboutFive";

const AboutMe = () => {
  return (
    <>
      <SEO title="About us" />
      <ColorSwitcher />
      <main className="main-wrapper">
        <HeaderThree />
        <BcrumbBannerOne
          title="One of the fastest growing agency"
          paragraph="We design and develop web and mobile applications for our clients worldwide."
          styleClass="thumbnail-4"
          mainThumb="/images/banner/banner-thumb-3.png"
        />
        <AboutFour />
        <AboutThree />
        <AboutFive />
        <Footer parentClass="" />
      </main>
    </>
  );
};

export default AboutMe;
