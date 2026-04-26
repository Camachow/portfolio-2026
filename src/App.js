import React, { useState } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Stack from "./components/Stack";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [language, setLanguage] = useState(() => {
    if (typeof navigator !== "undefined") {
      return navigator.language.toLowerCase().startsWith("pt") ? "pt" : "en";
    }
    return "pt";
  });

  return (
    <>
      <div className="app-background" aria-hidden="true">
        <div className="app-background__aurora app-background__aurora--one" />
        <div className="app-background__aurora app-background__aurora--two" />
        <div className="app-background__aurora app-background__aurora--three" />
        <div className="app-background__scanlines" />
      </div>
      <Hero language={language} onLanguageChange={setLanguage} />
      <main>
        <About language={language} />
        <Stack language={language} />
        <Projects language={language} />
        <Experience language={language} />
        <Contact language={language} />
      </main>
      <Footer language={language} />
    </>
  );
}

export default App;
