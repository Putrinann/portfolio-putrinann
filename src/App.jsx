import { useState } from "react";
import AuroraCanvas from "./components/AuroraCanvas.jsx";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [theme, setTheme] = useState(() => localStorage.getItem("portfolio-theme") || "dark");
  const toggleTheme = () => {
    setTheme((currentTheme) => {
      const nextTheme = currentTheme === "dark" ? "light" : "dark";
      localStorage.setItem("portfolio-theme", nextTheme);
      return nextTheme;
    });
  };
  const sections = {
    home: <Hero setActiveSection={setActiveSection} />,
    about: <About />,
    projects: <Projects />,
    contact: <Contact />
  };

  return (
    <div className={`portfolio-shell ${theme} relative min-h-screen overflow-hidden bg-darkArmy text-offWhite`}>
      <AuroraCanvas activeSection={activeSection} />
      <div className="noise" />
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} theme={theme} toggleTheme={toggleTheme} />
      <main className="relative z-10 min-h-screen pt-24">
        {sections[activeSection]}
      </main>
      <Footer />
    </div>
  );
}
