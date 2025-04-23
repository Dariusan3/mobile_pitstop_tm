import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Locations from "./components/Locations";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [lang, setLang] = useState("en");
  return (
    <>
      <Navbar lang={lang} setLang={setLang} />
      <main>
        <Hero lang={lang} setLang={setLang} />
        <About lang={lang} setLang={setLang} />
        <Services lang={lang} setLang={setLang} />
        <Locations lang={lang} setLang={setLang} />
        <Contact lang={lang} setLang={setLang} />
      </main>
      <Footer lang={lang} setLang={setLang} />
    </>
  );
}

export default App;
