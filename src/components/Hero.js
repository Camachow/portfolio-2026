import React from "react";
import { content } from "../content";

function Hero({ language, onLanguageChange }) {
  const profileSrc = `${process.env.PUBLIC_URL}/images/foto-perfil.png`;
  const copy = content[language] || content.pt;
  const metrics = copy.hero.metrics;

  return (
    <header className="hero" id="home">
      <div className="hero__grid" aria-hidden="true" />
      <div className="hero__orb hero__orb--one" aria-hidden="true" />
      <div className="hero__orb hero__orb--two" aria-hidden="true" />
      <nav className="nav">
        <div className="nav__brand">
          <span className="nav__brand-icon" aria-hidden="true">
            {"</>"}
          </span>
          <span>&lt;Camacho /&gt;</span>
        </div>
        <div className="nav__actions">
          <ul className="nav__menu">
            <li>
              <a href="#about">{copy.nav.about}</a>
            </li>
            <li>
              <a href="#stack">{copy.nav.stack}</a>
            </li>
            <li>
              <a href="#projects">{copy.nav.projects}</a>
            </li>
            <li>
              <a href="#experience">{copy.nav.experience}</a>
            </li>
            <li>
              <a href="#contact">{copy.nav.contact}</a>
            </li>
          </ul>
          <div className="language-switch" aria-label={copy.nav.languageLabel}>
            <button
              type="button"
              className={`language-switch__button${language === "pt" ? " is-active" : ""}`}
              onClick={() => onLanguageChange("pt")}
              aria-pressed={language === "pt"}
            >
              PT
            </button>
            <button
              type="button"
              className={`language-switch__button${language === "en" ? " is-active" : ""}`}
              onClick={() => onLanguageChange("en")}
              aria-pressed={language === "en"}
            >
              EN
            </button>
          </div>
        </div>
      </nav>
      <div className="hero__content">
        <div className="hero__inner">
          <div className="hero__media">
            <div className="hero__photo-shell">
              <div className="hero__status">{copy.hero.status}</div>
              <img
                className="hero__photo"
                src={profileSrc}
                alt={copy.hero.profileAlt}
                loading="lazy"
              />
              <div className="hero__photo-ring" aria-hidden="true" />
            </div>
          </div>
          <div className="glass card hero__card glass--animate">
            <span className="eyebrow">{copy.hero.eyebrow}</span>
            <h1>{copy.hero.title}</h1>
            <p className="hero__lead">{copy.hero.lead}</p>
            <div className="hero__actions">
              <a href="#projects" className="btn">
                {copy.hero.ctaProjects}
              </a>
              <a href="#contact" className="btn btn--ghost">
                {copy.hero.ctaContact}
              </a>
            </div>
            <div className="hero__metrics">
              {metrics.map((metric) => (
                <div className="hero__metric" key={metric.label}>
                  <strong>{metric.value}</strong>
                  <span>{metric.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Hero;
