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
  const facebookData = allData.filter((data) => slugify(data.fromtext) === "facebook");
  const amexData = allData.filter((data) => slugify(data.fromtext) === "american-express");
  const yelpData = allData.filter((data) => slugify(data.fromtext) === "yelp");

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
                  title="Co-Worker </br>Recommendations"
                  description="Recommendations from people I've worked with at American Express"
                  textAlignment="heading-left"
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
              <TestimonialPropTwo colSize="col-lg-4" itemShow="4" testimonialData={amexData} />
            </div>
          </div>
        </div>

        {/* <div className="section section-padding customer-review-area bg-color-dark overflow-hidden">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <SectionTitle
                  subtitle=""
                  title="Facebook Reviews"
                  description="Aenean hendrerit laoreet vehicula. Nullam convallis augue at enim gravida pellentesque."
                  textAlignment="heading-light-left"
                  textColor=""
                />
              </div>
              <div className="col-lg-4">
                <div className="review-site-logo">
                  <a href="https://www.facebook.com/">
                    <img src={process.env.PUBLIC_URL + "/images/icon/fb.png"} alt="Facebook" />
                  </a>
                </div>
              </div>
            </div>
            <div className="row">
              <TestimonialPropTwo
                colSize="col-lg-4"
                itemShow="3"
                layoutStyle="testimonial-light"
                testimonialData={facebookData}
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

        <div className="section section-padding customer-review-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <SectionTitle
                  subtitle=""
                  title="Yelp Reviews"
                  description="Aenean hendrerit laoreet vehicula. Nullam convallis augue at enim gravida pellentesque."
                  textAlignment="heading-left"
                  textColor=""
                />
              </div>
              <div className="col-lg-4">
                <div className="review-site-logo">
                  <a href="https://www.yelp.com/">
                    <img src={process.env.PUBLIC_URL + "/images/icon/yelp.png"} alt="Yelp" />
                  </a>
                </div>
              </div>
            </div>
            <div className="row">
              <TestimonialPropTwo colSize="col-lg-4" itemShow="3" testimonialData={yelpData} />
            </div>
          </div>
        </div> */}

        {/* <CtaLayoutOne /> */}
        <Footer parentClass="" />
      </main>
    </>
  );
};

export default Testimonials;
