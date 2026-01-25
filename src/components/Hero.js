import React from "react";

function Hero() {
  const profileSrc = `${process.env.PUBLIC_URL}/images/foto-perfil.png`;

  return (
    <header className="hero" id="home">
      <nav className="nav">
        <div className="nav__brand">Meu Portfólio</div>
        <ul className="nav__menu">
          <li>
            <a href="#about">Sobre</a>
          </li>
          <li>
            <a href="#stack">Stack</a>
          </li>
          <li>
            <a href="#projects">Projetos</a>
          </li>
          <li>
            <a href="#experience">Experiência</a>
          </li>
          <li>
            <a href="#contact">Contato</a>
          </li>
        </ul>
      </nav>
      <div className="hero__content">
        <div className="hero__inner">
          <div className="hero__media">
            <img
              className="hero__photo"
              src={profileSrc}
              alt="Rafael Camacho"
              loading="lazy"
            />
          </div>
          <div className="glass card hero__card glass--animate">
            <h1>Olá, eu sou Rafael Camacho</h1>
            <p>
              Desenvolvedor Full‑Stack e engenheiro de sistemas em formação,
              apaixonado por criar soluções web e mobile escaláveis e
              eficientes.
            </p>
            <a href="#contact" className="btn">
              Entre em contato
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Hero;
