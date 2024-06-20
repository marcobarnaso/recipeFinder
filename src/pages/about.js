import React from "react";
import dog from "../images/dog.png"

const About = () => {
  return (
    <div>
      <div className="ui card">
        <div className="image">
          <img src={dog} alt="Me"/>
        </div>
        <div className="content">
          <a className="header">Marvin Rojas</a>
          <div className="meta">
            <span className="date">Software Developer</span>
          </div>
          <div className="description">
            Recipe finder with MERN Stack
          </div>
        </div>
        <div className="extra content">
          <a>
            <i className="react icon"></i>
            <i className="node js icon"></i>
            2024
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
