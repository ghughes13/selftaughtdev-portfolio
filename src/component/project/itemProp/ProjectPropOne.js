import React from "react";
import { Link } from "react-router-dom";
import { slugify } from "../../../utils";

const PropOne = ({ projectStyle, portfolio }) => {
  return (
    <>
      <div className={`project-grid ${projectStyle}`}>
        <Link to={process.env.PUBLIC_URL + `/project-details/${slugify(portfolio.title)}`}>
          <div className="thumbnail">
            <img src={process.env.PUBLIC_URL + portfolio.image} alt="icon" />
          </div>
          <div className="content">
            <h4 className="title">{portfolio.title}</h4>
            <span className="subtitle">
              {portfolio.category.map((cat, i) => (
                <span key={i}>{cat}</span>
              ))}
            </span>
          </div>
        </Link>
      </div>
    </>
  );
};

export default PropOne;
