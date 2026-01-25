import React from 'react';

function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2>Meus Projetos</h2>
        <div className="projects__grid">
          <div className="glass card project">
            <h3>Aplicativo Nandes Neuroscience &amp; Basketball</h3>
            <p>
              Aplicativo móvel desenvolvido em React Native que permite
              acompanhar treinamentos e métricas de desempenho de atletas.
              Colaborei com designers e stakeholders, garantindo uma
              experiência fluida e responsiva.
            </p>
            <a href="#" className="btn btn--small">
              Ver mais
            </a>
          </div>
          <div className="glass card project">
            <h3>Sistema de Gestão de Aprendizagem (LMS)</h3>
            <p>
              Sistema web completo para gerenciamento de cursos e alunos,
              desenvolvido com React, Nest.js e SQL. Projeto realizado na Pec
              Tec, com foco em escalabilidade e soluções baseadas em banco de
              dados.
            </p>
            <a href="#" className="btn btn--small">
              Ver mais
            </a>
          </div>
          <div className="glass card project">
            <h3>Contribuições OpenEdx</h3>
            <p>
              Participação em projeto open‑source, aprimorando funcionalidades
              da plataforma de educação à distância OpenEdx. Incluiu
              desenvolvimento de novos módulos e correções de bugs em
              colaboração com a comunidade.
            </p>
            <a href="#" className="btn btn--small">
              Ver mais
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;