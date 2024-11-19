import React from "react";
import HeaderThree from "../common/header/HeaderThree";
import SEO from "../common/SEO";
import BannerThree from "../component/banner/BannerThree";
import ProjectTwo from "../component/project/ProjectTwo";
import SectionTitle from "../elements/section-title/SectionTitle";
import BrandOne from "../component/brand/BrandOne";
import ColorSwitcher from "../elements/switcher/ColorSwitcher";
import Skills from "../component/skills/Skills";
import TestimonialTwo from "../component/testimonial/TestimonialTwo";
import Footer from "../common/footer/Footer";
import FormThree from "../component/contact/FormThree";

const PersonalPortfolio = () => {
  return (
    <>
      <SEO title="Personal Portfolio" />
      <ColorSwitcher />
      <main className="main-wrapper">
        <HeaderThree />
        <BannerThree />
        <ProjectTwo />
        <TestimonialTwo />
        <BrandOne />
        <Skills />

        <div className="section-padding bg-color-dark">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="contact-address mb--30">
                  <SectionTitle
                    subtitle="Need a developer?"
                    title="Let’s work together"
                    description=""
                    textAlignment="heading-light-left"
                    textColor=""
                  />
                  <div className="address-list">
                    <div className="address">
                      <h6 className="title">E-mail</h6>
                      <p>
                        <a href="mailto:ghughes139@gmail.com">ghughes139@gmail.com</a>
                      </p>
                    </div>
                    <div className="address">
                      <h6 className="title">Address</h6>
                      <p>Dallas, TX</p>
                    </div>
                    <div className="address">
                      <h6 className="title">Phone</h6>
                      <p>
                        <a href="tel:13184588925">+1 (318) 458-8925</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="contact-form-box mb--30">
                  <h3 className="title">Describe your project</h3>
                  <FormThree />
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </main>
    </>
  );
};

export default PersonalPortfolio;
