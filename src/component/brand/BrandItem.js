import React from "react";

const Data = [
  {
    image: "/images/icon/eddithub-logo.png",
    github: "https://github.com/EddieHubCommunity",
  },
  {
    image: "/images/icon/decap-logo.svg",
    github: "https://github.com/decaporg",
  },
  // {
  //     image: "/images/brand/brand-3.png"
  // },
  // {
  //     image: "/images/brand/brand-4.png"
  // },
  // {
  //     image: "/images/brand/brand-5.png"
  // },
  // {
  //     image: "/images/brand/brand-6.png"
  // },
  // {
  //     image: "/images/brand/brand-7.png"
  // },
  // {
  //     image: "/images/brand/brand-8.png"
  // }
];

const BrandItem = () => {
  return (
    <>
      {Data.map((data, index) => (
        <div className="col-lg-4 col-6" key={index}>
          <a className="brand-grid" href={data.github} target="_blank" rel="noreferrer">
            <img src={process.env.PUBLIC_URL + data.image} alt="Brand" />
          </a>
        </div>
      ))}
    </>
  );
};

export default BrandItem;
