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
  {
    image: "/images/icon/zulip-logo.png",
    github: "https://github.com/zulip/zulip",
  },
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
