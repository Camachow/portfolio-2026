import React from 'react';

function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <h2>Contato</h2>
        <div className="glass card contact">
          <div className="contact__info">
            <p>
              <strong>Email:</strong>{' '}
              <a href="mailto:rafaelcamachofitti15@gmail.com">
                rafaelcamachofitti15@gmail.com
              </a>
            </p>
            <p>
              <strong>Telefone:</strong>{' '}
              <a href="tel:+5531984440770">(31) 98444‑0770</a>
            </p>
            <p>
              <strong>Localização:</strong> Belo Horizonte, MG, Brasil
            </p>
          </div>
          <form onSubmit={(e) => e.preventDefault()} className="contact__form">
            <div className="form__group">
              <label htmlFor="nome">Nome</label>
              <input
                type="text"
                id="nome"
                name="nome"
                placeholder="Seu nome"
                required
              />
            </div>
            <div className="form__group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="seu@email.com"
                required
              />
            </div>
            <div className="form__group">
              <label htmlFor="mensagem">Mensagem</label>
              <textarea
                id="mensagem"
                name="mensagem"
                rows="5"
                placeholder="Escreva sua mensagem"
                required
              ></textarea>
            </div>
            <button type="submit" className="btn">
              Enviar
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;