import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";

interface NavigationItem {
  label: string;
  href: string;
}

const navigationItems: NavigationItem[] = [
  {
    label: "À propos",
    href: "#about",
  },
  {
    label: "Compétences",
    href: "#skills",
  },
  {
    label: "Expérience",
    href: "#experience",
  },
  {
    label: "Formation",
    href: "#education",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

function Navbar() {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>("hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);

      const sections = document.querySelectorAll<HTMLElement>("section[id]");

      let currentSection = "hero";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {
          currentSection = section.id;
        }
      });

      setActiveSection(currentSection);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        id="navbar"
        className={`portfolio-navbar fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? "scrolled" : ""
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#hero" className="text-lg font-semibold tracking-tight">
            <span className="text-indigo-400">F</span>
            <span className="text-zinc-300">.</span>
            Saidane
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navigationItems.map((item) => {
              const sectionId = item.href.replace("#", "");
              const isActive = activeSection === sectionId;

              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`nav-link text-sm font-light ${
                    isActive ? "active text-white" : "text-neutral-400"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}

            <a
              href="#contact"
              className="ml-2 px-5 py-2 bg-indigo-500 hover:bg-indigo-400 text-white text-sm font-medium rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/25"
            >
              Me contacter
            </a>
          </div>

          <button
            type="button"
            className="md:hidden text-white p-2"
            aria-label="Ouvrir le menu"
            aria-expanded={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Icon icon="lucide:menu" width={24} />
          </button>
        </div>
      </nav>

      <div
        className={`mobile-menu fixed inset-0 z-[60] bg-[#050505]/98 backdrop-blur-xl flex flex-col items-center justify-center gap-8 ${
          isMobileMenuOpen ? "open" : ""
        }`}
        aria-hidden={!isMobileMenuOpen}
      >
        <button
          type="button"
          className="absolute top-5 right-6 text-white p-2"
          aria-label="Fermer le menu"
          onClick={closeMobileMenu}
        >
          <Icon icon="lucide:x" width={28} />
        </button>

        {navigationItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            onClick={closeMobileMenu}
            className="text-2xl font-light text-neutral-300 hover:text-white transition-colors"
          >
            {item.label}
          </a>
        ))}

        <a
          href="#contact"
          onClick={closeMobileMenu}
          className="mt-4 px-8 py-3 bg-indigo-500 text-white font-medium rounded-full"
        >
          Me contacter
        </a>
      </div>
    </>
  );
}

export default Navbar;
