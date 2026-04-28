import React, { useState } from "react";
import { content } from "../content";

function Projects({ language }) {
  const [activeProject, setActiveProject] = useState(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [activeFilter, setActiveFilter] = useState("all");
  const copy = content[language] || content.pt;
  const baseProjects = content.pt.projects.projects;
  const projects = copy.projects.projects.map((project, index) => ({
    ...project,
    images: baseProjects[index]?.images || project.images,
  }));
  const getStatusTag = (status) => {
    const normalizedStatus = (status || "").toLowerCase();
    if (
      normalizedStatus.includes("no ar") ||
      normalizedStatus.includes("live")
    ) {
      return copy.projects.liveTag;
    }

    if (
      normalizedStatus.includes("contribuidor") ||
      normalizedStatus.includes("contributions") ||
      normalizedStatus.includes("open source") ||
      normalizedStatus.includes("opensource")
    ) {
      return copy.projects.openSourceTag;
    }

    return copy.projects.developmentTag;
  };
  const getStatusClass = (status) => {
    const normalizedStatus = (status || "").toLowerCase();
    if (
      normalizedStatus.includes("no ar") ||
      normalizedStatus.includes("live")
    ) {
      return "project__status-tag project__status-tag--live";
    }

    if (
      normalizedStatus.includes("contribuidor") ||
      normalizedStatus.includes("contributions") ||
      normalizedStatus.includes("open source") ||
      normalizedStatus.includes("opensource")
    ) {
      return "project__status-tag project__status-tag--opensource";
    }

    return "project__status-tag project__status-tag--development";
  };
  const categories = [...new Set(projects.map((project) => project.category))];
  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);
  const featuredProject =
    filteredProjects.find((p) => p.featured) ||
    filteredProjects[0] ||
    projects[0];
  const remainingProjects = filteredProjects.filter(
    (project) => project.title !== featuredProject?.title,
  );

  const handleOpen = (project) => {
    setActiveProject(project);
    setActiveImageIndex(0);
  };

  const handleClose = () => {
    setActiveProject(null);
    setActiveImageIndex(0);
  };

  const handlePrevImage = () => {
    if (!activeProject) return;
    const total = activeProject.images.length;
    setActiveImageIndex((prev) => (prev - 1 + total) % total);
  };

  const handleNextImage = () => {
    if (!activeProject) return;
    const total = activeProject.images.length;
    setActiveImageIndex((prev) => (prev + 1) % total);
  };

  const handleSelectImage = (index) => {
    setActiveImageIndex(index);
  };

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section__heading">
          <span className="eyebrow">{copy.projects.eyebrow}</span>
          <h2>{copy.projects.title}</h2>
          <p>{copy.projects.intro}</p>
        </div>

        <div className="projects__highlights">
          {copy.projects.highlights.map((item) => (
            <div className="projects__highlight" key={item.label}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </div>

        <div
          className="projects__filters"
          aria-label={copy.projects.filtersLabel}
        >
          <button
            type="button"
            className={`projects__filter${activeFilter === "all" ? " is-active" : ""}`}
            onClick={() => setActiveFilter("all")}
          >
            {copy.projects.allFilter}
          </button>
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              className={`projects__filter${
                activeFilter === category ? " is-active" : ""
              }`}
              onClick={() => setActiveFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {featuredProject && (
          <article className="glass card project project--featured">
            <div className="project__media-wrap">
              <div className="project__image" aria-hidden="true">
                <img src={featuredProject.images[0]} alt="" loading="lazy" />
              </div>
            </div>
            <div className="project__content-wrap">
              <div className="project__featured-header">
                <span className="project__kicker">
                  {copy.projects.featuredLabel}
                </span>
                <span className={getStatusClass(featuredProject.status)}>
                  {getStatusTag(featuredProject.status)}
                </span>
              </div>
              <span className="project__tag">{featuredProject.category}</span>
              <h3>{featuredProject.title}</h3>
              <p className="project__quote">"{featuredProject.quote}"</p>
              <p className="project__description">
                {featuredProject.description}
              </p>
              <div className="project__meta-grid">
                <div>
                  <span>{copy.projects.impactLabel}</span>
                  <strong>{featuredProject.impact}</strong>
                </div>
                <div>
                  <span>{copy.projects.statusLabel}</span>
                  <strong>{featuredProject.status}</strong>
                </div>
                <div>
                  <span>{copy.projects.periodLabel}</span>
                  <strong>{featuredProject.period}</strong>
                </div>
              </div>
              <div className="project__actions">
                <button
                  type="button"
                  className="btn btn--small"
                  onClick={() => handleOpen(featuredProject)}
                >
                  {copy.projects.viewMore}
                </button>
              </div>
            </div>
          </article>
        )}

        <div className="projects__grid">
          {remainingProjects.map((project) => (
            <div className="glass card project" key={project.title}>
              <span className={getStatusClass(project.status)}>
                {getStatusTag(project.status)}
              </span>
              <div className="project__image" aria-hidden="true">
                <img src={project.images[0]} alt="" loading="lazy" />
              </div>
              <div className="project__inline-meta">
                <span className="project__tag">{project.category}</span>
                <span className="project__period">{project.period}</span>
              </div>
              <h3>{project.title}</h3>
              <p className="project__quote">"{project.quote}"</p>
              <p className="project__description">{project.description}</p>
              <p className="project__impact">{project.impact}</p>
              <div className="project__actions">
                <button
                  type="button"
                  className="btn btn--small"
                  onClick={() => handleOpen(project)}
                >
                  {copy.projects.viewMore}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {activeProject && (
        <div className="modal" role="dialog" aria-modal="true">
          <div className="modal__backdrop" onClick={handleClose} />
          <div className="modal__content" role="document">
            <button
              type="button"
              className="modal__close"
              onClick={handleClose}
              aria-label={copy.projects.closeLabel}
            >
              ×
            </button>
            <div className="modal__media">
              <img
                src={activeProject.images[activeImageIndex]}
                alt={`${copy.projects.imageAltPrefix} ${activeProject.title}`}
              />
              {activeProject.images.length > 1 && (
                <>
                  <button
                    type="button"
                    className="carousel__control carousel__control--prev"
                    onClick={handlePrevImage}
                    aria-label={copy.projects.prevImage}
                  >
                    ‹
                  </button>
                  <button
                    type="button"
                    className="carousel__control carousel__control--next"
                    onClick={handleNextImage}
                    aria-label={copy.projects.nextImage}
                  >
                    ›
                  </button>
                  <div
                    className="carousel__dots"
                    aria-label={copy.projects.selectImage}
                  >
                    {activeProject.images.map((_, index) => (
                      <button
                        key={`${activeProject.title}-dot-${index}`}
                        type="button"
                        className={`carousel__dot${
                          index === activeImageIndex ? " is-active" : ""
                        }`}
                        onClick={() => handleSelectImage(index)}
                        aria-label={`${copy.projects.goToImage} ${index + 1}`}
                        aria-pressed={index === activeImageIndex}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
            <div className="modal__body">
              <span className="project__tag">{activeProject.category}</span>
              <h3>{activeProject.title}</h3>
              <p>{activeProject.modalText}</p>
              <div style={{ display: "flex", gap: "0.8rem", flexWrap: "wrap" }}>
                {activeProject.projectUrl &&
                  activeProject.projectUrl !== "#" && (
                    <a
                      href={activeProject.projectUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="btn"
                    >
                      {copy.projects.visitProject}
                    </a>
                  )}
                {activeProject.githubUrl && (
                  <a
                    href={activeProject.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn"
                  >
                    {copy.projects.viewRepository}
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;
