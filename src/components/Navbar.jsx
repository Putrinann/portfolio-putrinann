import { Menu, Moon, Sun, X } from "lucide-react";
import { useState } from "react";
import { navItems } from "../data/portfolioData.js";

export default function Navbar({ activeSection, setActiveSection, theme, toggleTheme }) {
  const [open, setOpen] = useState(false);
  const handleClick = (id) => {
    setActiveSection(id);
    setOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-5 py-4 sm:px-8 lg:px-12">
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-offWhite/10 bg-darkArmy/92 px-4 py-3 shadow-soft backdrop-blur-xl">
        <button type="button" onClick={() => handleClick("home")} className="font-handwriting text-2xl font-semibold text-offWhite">
          Putrinann
        </button>
        <div className="hidden items-center gap-5 lg:flex">
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => handleClick(item.id)}
              className={`text-xs transition hover:text-electric ${activeSection === item.id ? "text-electric" : "text-offWhite/72"}`}
            >
              {item.label}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
            title={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
            onClick={toggleTheme}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-offWhite/10 bg-army/55 text-offWhite transition hover:border-electric hover:text-electric"
          >
            {theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
          </button>
          <button
            type="button"
            aria-label="Toggle navigation"
            onClick={() => setOpen((value) => !value)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-offWhite/10 text-offWhite md:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>
      {open && (
        <div className="mx-auto mt-3 max-w-7xl rounded-lg border border-offWhite/10 bg-army p-4 shadow-soft md:hidden">
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => handleClick(item.id)}
              className="block w-full rounded-md px-3 py-3 text-left text-sm text-offWhite/82 hover:bg-darkArmy/35 hover:text-electric"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
