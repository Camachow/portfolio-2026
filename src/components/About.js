import React from "react";
import { content } from "../content";

function About({ language }) {
  const copy = content[language] || content.pt;
  const highlights = copy.about.highlights;

  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section__heading">
          <span className="eyebrow">{copy.about.eyebrow}</span>
          <h2>{copy.about.title}</h2>
          <p>{copy.about.intro}</p>
        </div>
        <div className="about__grid">
          <div className="glass card about__story">
            <p>{copy.about.storyOne}</p>
            <p>{copy.about.storyTwo}</p>
          </div>
          <div className="glass card about__panel">
            <span className="about__panel-title">{copy.about.panelTitle}</span>
            <ul className="signal-list">
              {highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
