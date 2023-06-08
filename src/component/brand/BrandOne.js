import React from "react";
import SectionTitle from "../../elements/section-title/SectionTitle";
import BrandItem from "./BrandItem";

const BrandOne = () => {
  return (
    <div className="section section-padding-2 bg-color-dark">
      <div className="container">
        <SectionTitle
          subtitle="Open Source"
          title="Projects I've Contributed To"
          description=""
          textAlignment="heading-light-left"
          textColor=""
        />
        <div className="row">
          <BrandItem />
        </div>
      </div>
      <ul className="list-unstyled shape-group-10">
        <li className="shape shape-1">
          <img src={process.env.PUBLIC_URL + "/images/others/line-9.png"} alt="Circle" />
        </li>
      </ul>
    </div>
  );
};

export default BrandOne;
