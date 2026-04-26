import React from "react";
import { content } from "../content";

function Stack({ language }) {
  const copy = content[language] || content.pt;
  const highlights = copy.stack.highlights;
  const categories = copy.stack.categories;

  return (
    <section id="stack" className="section">
      <div className="container">
        <div className="section__heading">
          <span className="eyebrow">{copy.stack.eyebrow}</span>
          <h2>{copy.stack.title}</h2>
          <p>{copy.stack.intro}</p>
        </div>
        <div className="stack__intro">
          <div className="glass card stack__summary">
            <span className="stack__summary-label">
              {copy.stack.specialtiesTitle}
            </span>
            <ul className="signal-list stack__highlights">
              {highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="glass card stack__snapshot">
            <span className="stack__summary-label">
              {copy.stack.snapshotTitle}
            </span>
            <div className="stack__snapshot-grid">
              {copy.stack.snapshot.map((item) => (
                <div className="stack__snapshot-item" key={item.label}>
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="stack__grid">
          {categories.map((category) => (
            <div
              className="glass card stack__item"
              key={category.title}
              style={{ "--stack-accent": category.accent }}
            >
              <div className="stack__item-glow" aria-hidden="true" />
              <div className="stack__item-header">
                <div className="stack__item-heading">
                  <span className="stack__item-tag">{category.tag}</span>
                  <h3>{category.title}</h3>
                </div>
                <div className="stack__item-meta">
                  <strong>{category.items.length}</strong>
                  <span>{copy.stack.technologiesLabel}</span>
                </div>
              </div>
              <span className="stack__item-focus">{category.focus}</span>
              <p className="stack__item-description">{category.description}</p>
              <ul className="stack__list">
                {category.items.map(([icon, label]) => (
                  <li key={label}>
                    <div className="stack__icon-wrap">
                      <img src={`/icons/${icon}.svg`} alt={label} />
                    </div>
                    <span className="stack__item-label">{label}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Stack;
