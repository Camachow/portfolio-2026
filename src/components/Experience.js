import React from "react";
import { content } from "../content";

function Experience({ language }) {
  const copy = content[language] || content.pt;
  const experiences = copy.experience.experiences;

  return (
    <section id="experience" className="section">
      <div className="container">
        <div className="section__heading">
          <span className="eyebrow">{copy.experience.eyebrow}</span>
          <h2>{copy.experience.title}</h2>
          <p>{copy.experience.intro}</p>
        </div>
        <div className="experience">
          {experiences.map((experience) => (
            <div className="glass card experience__item" key={experience.title}>
              <div className="experience__meta">
                <span className="timeline-dot" aria-hidden="true" />
                <p className="periodo">{experience.period}</p>
              </div>
              <h3>{experience.title}</h3>
              <p>{experience.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
