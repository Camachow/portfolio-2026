import React, { useState } from "react";

function Projects() {
  const [activeProject, setActiveProject] = useState(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const projects = [
    {
      title: "Aplicativo Nandes Neuroscience & Basketball",
      description:
        "Aplicativo móvel desenvolvido em React Native que permite acompanhar treinamentos e métricas de desempenho de atletas. Colaborei com designers e stakeholders, garantindo uma experiência fluida e responsiva.",
      modalText:
        "O app centraliza planos de treino, métricas e relatórios em um fluxo simples para atletas e treinadores. Meu foco foi entregar telas responsivas, integrações estáveis e uma navegação clara para o acompanhamento diário.",
      images: [
        "/images/projects/neurobasket/logo.png",
        "/images/projects/neurobasket/login.png",
        "/images/projects/neurobasket/court.png",
      ],
      projectUrl: "#",
    },
    {
      title: "Sistema de Gestão de Aprendizagem (LMS)",
      description:
        "Sistema web completo para gerenciamento de cursos e alunos, desenvolvido com React, Nest.js e SQL. Projeto realizado na Pec Tec, com foco em escalabilidade e soluções baseadas em banco de dados.",
      modalText:
        "Plataforma LMS com dashboards administrativos, matrículas e trilhas de conteúdo. Trabalhei no front-end e na integração com a API para garantir performance, segurança e escalabilidade.",
      images: ["/images/foto-perfil.png", "/images/foto-perfil.png"],
      projectUrl: "#",
    },
    {
      title: "Contribuições OpenEdx",
      description:
        "Participação em projeto open‑source, aprimorando funcionalidades da plataforma de educação à distância OpenEdx. Incluiu desenvolvimento de novos módulos e correções de bugs em colaboração com a comunidade.",
      modalText:
        "Contribuições em módulos e correções no core do OpenEdx, com foco em usabilidade e estabilidade. O trabalho envolveu revisão de PRs e alinhamento com a comunidade.",
      images: ["/images/foto-perfil.png"],
      projectUrl: "https://openedx.org",
    },
  ];

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
        <h2>Meus Projetos</h2>
        <div className="projects__grid">
          {projects.map((project) => (
            <div className="glass card project" key={project.title}>
              <div className="project__image" aria-hidden="true">
                <img src={project.images[0]} alt="" loading="lazy" />
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <button
                type="button"
                className="btn btn--small"
                onClick={() => handleOpen(project)}
              >
                Ver mais
              </button>
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
              aria-label="Fechar"
            >
              ×
            </button>
            <div className="modal__media">
              <img
                src={activeProject.images[activeImageIndex]}
                alt={`Imagem do projeto ${activeProject.title}`}
              />
              {activeProject.images.length > 1 && (
                <>
                  <button
                    type="button"
                    className="carousel__control carousel__control--prev"
                    onClick={handlePrevImage}
                    aria-label="Imagem anterior"
                  >
                    ‹
                  </button>
                  <button
                    type="button"
                    className="carousel__control carousel__control--next"
                    onClick={handleNextImage}
                    aria-label="Próxima imagem"
                  >
                    ›
                  </button>
                  <div
                    className="carousel__dots"
                    aria-label="Selecionar imagem"
                  >
                    {activeProject.images.map((_, index) => (
                      <button
                        key={`${activeProject.title}-dot-${index}`}
                        type="button"
                        className={`carousel__dot${
                          index === activeImageIndex ? " is-active" : ""
                        }`}
                        onClick={() => handleSelectImage(index)}
                        aria-label={`Ir para imagem ${index + 1}`}
                        aria-pressed={index === activeImageIndex}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
            <div className="modal__body">
              <h3>{activeProject.title}</h3>
              <p>{activeProject.modalText}</p>
              <a
                href={activeProject.projectUrl}
                target="_blank"
                rel="noreferrer"
                className="btn"
              >
                Acessar projeto
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;
