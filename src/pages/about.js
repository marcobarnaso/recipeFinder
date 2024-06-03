import React from "react";
import dog from "../images/dog.png"

const About = () => {
  return (
    <div>
      <div class="ui card">
        <div class="image">
          <img src={dog} alt="Me"/>
        </div>
        <div class="content">
          <a class="header">Marvin Rojas</a>
          <div class="meta">
            <span class="date">Estudiante de Desarrollo de Software</span>
          </div>
          <div class="description">
            Sitio de Buscador de Recetas con React
          </div>
        </div>
        <div class="extra content">
          <a>
            <i class="react icon"></i>
            2024
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
