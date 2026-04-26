import React, { useState } from "react";
import { content } from "../content";

function Contact({ language }) {
  const [status, setStatus] = useState({
    type: "idle",
    message: "",
  });
  const copy = content[language] || content.pt;

  const handleSubmit = async (event) => {
    event.preventDefault();

    setStatus({
      type: "loading",
      message: copy.contact.form.sendingStatus,
    });

    const form = event.currentTarget;
    const formData = new FormData(form);

    formData.append("_subject", copy.contact.form.subject);
    formData.append("_template", "table");

    if (typeof window !== "undefined") {
      formData.append("_url", window.location.href);
    }

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/rafaelcamachofitti15@gmail.com",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
          },
          body: formData,
        },
      );

      const result = await response.json();

      if (!response.ok || result.success === false) {
        throw new Error(result.message || "Falha no envio.");
      }

      setStatus({
        type: "success",
        message: copy.contact.form.successStatus,
      });
      form.reset();
    } catch (error) {
      setStatus({
        type: "error",
        message: copy.contact.form.errorStatus,
      });
    }
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section__heading">
          <span className="eyebrow">{copy.contact.eyebrow}</span>
          <h2>{copy.contact.title}</h2>
          <p>{copy.contact.intro}</p>
        </div>
        <div className="contact__grid">
          <div className="glass card contact__panel">
            <div className="contact__info">
              <p>
                <strong>{copy.contact.labels.email}</strong>
                <a href="mailto:rafaelcamachofitti15@gmail.com">
                  rafaelcamachofitti15@gmail.com
                </a>
              </p>
              <p>
                <strong>{copy.contact.labels.phone}</strong>
                <a href="tel:+5531984440770">(31) 98444-0770</a>
              </p>
              <p>
                <strong>{copy.contact.labels.base}</strong>
                <span>{copy.contact.baseValue}</span>
              </p>
            </div>
          </div>
          <div className="glass card contact">
            <form onSubmit={handleSubmit} className="contact__form">
              <div className="form__group">
                <label htmlFor="nome">{copy.contact.form.name}</label>
                <input
                  type="text"
                  id="nome"
                  name="name"
                  placeholder={copy.contact.form.namePlaceholder}
                  required
                />
              </div>
              <div className="form__group">
                <label htmlFor="email">{copy.contact.form.email}</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder={copy.contact.form.emailPlaceholder}
                  required
                />
              </div>
              <div className="form__group">
                <label htmlFor="mensagem">{copy.contact.form.message}</label>
                <textarea
                  id="mensagem"
                  name="message"
                  rows="5"
                  placeholder={copy.contact.form.messagePlaceholder}
                  required
                ></textarea>
              </div>
              <input
                type="text"
                name="_honey"
                className="contact__honeypot"
                tabIndex="-1"
                autoComplete="off"
              />
              <button
                type="submit"
                className="btn"
                disabled={status.type === "loading"}
              >
                {status.type === "loading"
                  ? copy.contact.form.submitting
                  : copy.contact.form.submit}
              </button>
              {status.type !== "idle" && (
                <p
                  className={`contact__status contact__status--${status.type}`}
                >
                  {status.message}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
