import React from "react";
import Footer from "../common/footer/Footer";
import HeaderThree from "../common/header/HeaderThree";
import SEO from "../common/SEO";
import BreadCrumbOne from "../elements/breadcrumb/BreadCrumbOne";
import ColorSwitcher from "../elements/switcher/ColorSwitcher";
import SectionTitle from "../elements/section-title/SectionTitle";
import TestimonialPropTwo from "../component/testimonial/TestimonialPropTwo";
import TestimonialData from "../data/testimonial/TestimonialData.json";
import { slugify } from "../utils";

const allData = TestimonialData;

const Testimonials = () => {
  const otherPlacesData = allData.filter(
    (data) => slugify(data.fromtext) !== "american-express" && slugify(data.fromtext) !== "doorcast"
  );
  const amexData = allData.filter((data) => slugify(data.fromtext) === "american-express");
  const doorcastData = allData.filter((data) => slugify(data.fromtext) === "doorcast");

  return (
    <>
      <SEO title="Testimonials" />
      <ColorSwitcher />
      <main className="main-wrapper">
        <HeaderThree />
        <BreadCrumbOne title="Recommendations From </br> People I've Worked With" page="Recommendations" />

        <div className="section section-padding customer-review-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <SectionTitle
                  subtitle=""
                  title="Recommendations from people I've worked with at Doorcast"
                  textAlignment="heading-left"
                  textColor=""
                />
              </div>
              <div className="col-lg-4 flex">
                <div className="review-site-logo">
                  <a href="https://doorcast.com/">
                    <img src={process.env.PUBLIC_URL + "/images/icon/doorcast-Logo.png"} alt="Doorcast" />
                  </a>
                </div>
              </div>
            </div>
            <div className="row">
              <TestimonialPropTwo colSize="col-lg-6" itemShow="3" testimonialData={doorcastData} />
            </div>
          </div>
        </div>

        {/* AMEX REVIEWS */}
        <div className="section section-padding customer-review-area bg-color-dark overflow-hidden">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <SectionTitle
                  subtitle=""
                  title="Recommendations from people I've worked with at American Express"
                  description=""
                  textAlignment="heading-light-left"
                  textColor=""
                />
              </div>
              <div className="col-lg-4">
                <div className="review-site-logo">
                  <a href="https://www.americanexpress.com/">
                    <img src={process.env.PUBLIC_URL + "/images/icon/amex-long.png"} alt="American Express" />
                  </a>
                </div>
              </div>
            </div>
            <div className="row">
              <TestimonialPropTwo
                colSize="col-lg-4"
                itemShow="5"
                layoutStyle="testimonial-light"
                testimonialData={amexData}
              />
            </div>
          </div>
          <ul className="shape-group-11 list-unstyled">
            <li className="shape shape-1">
              <img src={process.env.PUBLIC_URL + "/images/others/line-6.png"} alt="line" />
            </li>
            <li className="shape shape-2">
              <img src={process.env.PUBLIC_URL + "/images/others/circle-3.png"} alt="line" />
            </li>
          </ul>
        </div>

        {/* OTHER REVIEWS */}
        <div className="section section-padding customer-review-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <SectionTitle
                  subtitle=""
                  title="Recommendations From People I've Worked With Elsewhere"
                  description="These are recommendations from people I've worked with at other companies"
                  textAlignment="heading-left"
                  textColor=""
                />
              </div>
            </div>
            <div className="row">
              <TestimonialPropTwo colSize="col-lg-4" itemShow="3" testimonialData={otherPlacesData} />
            </div>
          </div>
        </div>

        <Footer parentClass="" />
      </main>
    </>
  );
};

export default Testimonials;
