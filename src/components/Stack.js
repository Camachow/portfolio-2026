import React from 'react';

function Stack() {
  return (
    <section id="stack" className="section">
      <div className="container">
        <h2>Minha Stack</h2>
        <div className="stack__grid">
          {/* Linguagens */}
          <div className="glass card stack__item">
            <h3>Linguagens</h3>
            <ul className="stack__list">
              <li>
                <img src="/icons/javascript.svg" alt="JavaScript" />
                <span>JavaScript</span>
              </li>
              <li>
                <img src="/icons/typescript.svg" alt="TypeScript" />
                <span>TypeScript</span>
              </li>
              <li>
                <img src="/icons/python.svg" alt="Python" />
                <span>Python</span>
              </li>
              <li>
                <img src="/icons/c.svg" alt="C" />
                <span>C</span>
              </li>
              <li>
                <img src="/icons/cplusplus.svg" alt="C++" />
                <span>C++</span>
              </li>
            </ul>
          </div>
          {/* Frameworks */}
          <div className="glass card stack__item">
            <h3>Frameworks &amp; Bibliotecas</h3>
            <ul className="stack__list">
              <li>
                <img src="/icons/react.svg" alt="ReactJS" />
                <span>ReactJS</span>
              </li>
              <li>
                <img src="/icons/react.svg" alt="React Native" />
                <span>React Native</span>
              </li>
              <li>
                <img src="/icons/nestjs.svg" alt="NestJS" />
                <span>NestJS</span>
              </li>
              <li>
                <img src="/icons/express.svg" alt="Express.js" />
                <span>Express.js</span>
              </li>
              <li>
                <img src="/icons/nodejs.svg" alt="Node.js" />
                <span>Node.js</span>
              </li>
            </ul>
          </div>
          {/* Bancos de Dados */}
          <div className="glass card stack__item">
            <h3>Bancos de Dados</h3>
            <ul className="stack__list">
              <li>
                <img src="/icons/postgresql.svg" alt="PostgreSQL" />
                <span>PostgreSQL</span>
              </li>
              <li>
                <img src="/icons/mysql.svg" alt="MySQL" />
                <span>MySQL</span>
              </li>
              <li>
                <img src="/icons/mongodb.svg" alt="MongoDB" />
                <span>MongoDB</span>
              </li>
            </ul>
          </div>
          {/* Ferramentas */}
          <div className="glass card stack__item">
            <h3>Ferramentas &amp; Outros</h3>
            <ul className="stack__list">
              <li>
                <img src="/icons/git.svg" alt="Git" />
                <span>Git</span>
              </li>
              <li>
                <img src="/icons/github.svg" alt="GitHub" />
                <span>GitHub</span>
              </li>
              <li>
                <img src="/icons/npm.svg" alt="npm" />
                <span>npm</span>
              </li>
              <li>
                <img src="/icons/figma.svg" alt="Figma" />
                <span>Figma</span>
              </li>
              <li>
                <img src="/icons/docker.svg" alt="Docker" />
                <span>Docker</span>
              </li>
              <li>
                <img src="/icons/dbeaver.svg" alt="DBeaver" />
                <span>DBeaver</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Stack;