import React from "react";
import { Link } from "react-router-dom";
import SkillsData from "../../data/skills/SkillsData.json";
import { slugify } from "../../utils";

const allData = SkillsData;

const Skills = () => {
  return (
    <div className="section section-padding bg-color-dark pb--70 pb_lg--20 pb_md--0">
      <div className="container">
        <div className="section-heading heading-light">
          <span className="subtitle">Tech Stack</span>
          <h2 className="title mb--50">Skills</h2>
          <p>Tech I've used professionally and on side projects.</p>
        </div>
        <div className="row">
          {allData.map((data) => (
            <div className="col-xl-3 col-sm-6" key={data.id}>
              <div className="team-grid">
                <div className="thumbnail">
                  <img src={process.env.PUBLIC_URL + data.thumb} alt={data.title} />
                </div>
                <div className="content">
                  <h4 className="title">{data.title}</h4>
                  <span className="designation" dangerouslySetInnerHTML={{ __html: data.experience }}></span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ul className="list-unstyled shape-group-10">
        <li className="shape shape-1">
          <img src={process.env.PUBLIC_URL + "/images/others/circle-1.png"} alt="Circle" />
        </li>
        <li className="shape shape-2">
          <img src={process.env.PUBLIC_URL + "/images/others/line-3.png"} alt="Circle" />
        </li>
        <li className="shape shape-3">
          <img src={process.env.PUBLIC_URL + "/images/others/bubble-5.png"} alt="Circle" />
        </li>
      </ul>
    </div>
  );
};

export default Skills;
