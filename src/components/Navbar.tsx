import { useEffect, useMemo, useState, type MouseEvent } from "react";
import { Icon } from "@iconify/react";

import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useTranslation } from "@/i18n";

interface NavigationItem {
  label: string;
  href: string;
  targetId: string;
}

function Navbar() {
  const { language, t } = useTranslation();

  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>("hero");

  const navigationItems = useMemo<NavigationItem[]>(
    () => [
      {
        label: t.navigation.about,
        href: "#about",
        targetId: "about-title",
      },
      {
        label: t.navigation.skills,
        href: "#skills",
        targetId: "skills-title",
      },
      {
        label: t.navigation.experience,
        href: "#experience",
        targetId: "experience-title",
      },
      {
        label: t.education.eyebrow,
        href: "#education",
        targetId: "education-title",
      },
      {
        label: t.navigation.projects,
        href: "#projects",
        targetId: "projects-title",
      },
      {
        label: t.navigation.contact,
        href: "#contact",
        targetId: "contact-title",
      },
    ],
    [t],
  );

  const whatsappMessage =
    language === "fr"
      ? "Bonjour Foued, je viens de visiter votre portfolio et j’aimerais échanger avec vous."
      : "Hello Foued, I have just visited your portfolio and would like to connect with you.";

  const whatsappUrl = `https://wa.me/33767653082?text=${encodeURIComponent(
    whatsappMessage,
  )}`;

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

  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscapeKey);

    return () => {
      window.removeEventListener("keydown", handleEscapeKey);
    };
  }, []);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const scrollToSection = (
    event: MouseEvent<HTMLAnchorElement>,
    targetId: string,
  ) => {
    event.preventDefault();

    const target = document.getElementById(targetId);

    if (!target) {
      return;
    }

    const navbarHeight = 80;
    const visualOffset = 70;

    const targetPosition =
      target.getBoundingClientRect().top +
      window.scrollY -
      navbarHeight -
      visualOffset;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });

    closeMobileMenu();
  };

  const scrollToHero = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    closeMobileMenu();
  };

  return (
    <>
      <nav
        id="navbar"
        className={`
          portfolio-navbar
          fixed
          inset-x-0
          top-0
          z-50
          transition-all
          duration-500
          ${isScrolled ? "scrolled" : ""}
        `}
      >
        <div
          className="
            mx-auto
            flex
            max-w-6xl
            items-center
            justify-between
            px-6
            py-4
          "
        >
          {/* Logo */}
          <a
            href="#hero"
            onClick={scrollToHero}
            aria-label="Foued Saidane — Accueil"
            className="
              text-lg
              font-semibold
              tracking-tight
            "
          >
            <span className="text-indigo-400">F</span>

            <span className="text-zinc-300">.</span>

            <span className="text-zinc-100">Saidane</span>
          </a>

          {/* Navigation desktop */}
          <div
            className="
              hidden
              items-center
              gap-7
              md:flex
            "
          >
            {navigationItems.map((item) => {
              const sectionId = item.href.replace("#", "");
              const isActive = activeSection === sectionId;

              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(event) => scrollToSection(event, item.targetId)}
                  aria-current={isActive ? "page" : undefined}
                  className={`
                    nav-link
                    cursor-pointer
                    whitespace-nowrap
                    text-sm
                    font-light
                    transition-colors
                    duration-300
                    ${
                      isActive
                        ? "active text-white"
                        : "text-neutral-400 hover:text-white"
                    }
                  `}
                >
                  {item.label}
                </a>
              );
            })}

            <LanguageSwitcher />

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="
                ml-1
                whitespace-nowrap
                rounded-full
                bg-indigo-500
                px-5
                py-2
                text-sm
                font-medium
                text-white
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:bg-indigo-400
                hover:shadow-lg
                hover:shadow-indigo-500/25
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-indigo-400
                focus-visible:ring-offset-2
                focus-visible:ring-offset-[#050505]
              "
            >
              {t.hero.contactButton}
            </a>
          </div>

          {/* Actions mobile */}
          <div className="flex items-center gap-2 md:hidden">
            <LanguageSwitcher />

            <button
              type="button"
              className="
                rounded-full
                p-2
                text-white
                transition-colors
                duration-300
                hover:bg-white/[0.08]
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-indigo-400
              "
              aria-label={t.common.openMenu}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-navigation"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Icon icon="lucide:menu" width={24} aria-hidden="true" />
            </button>
          </div>
        </div>
      </nav>

      {/* Menu mobile */}
      <div
        id="mobile-navigation"
        className={`
          mobile-menu
          fixed
          inset-0
          z-[60]
          flex
          flex-col
          items-center
          justify-center
          gap-7
          bg-[#050505]/98
          px-6
          backdrop-blur-xl
          transition-all
          duration-500
          ${
            isMobileMenuOpen
              ? "open visible opacity-100"
              : "pointer-events-none invisible opacity-0"
          }
        `}
        aria-hidden={!isMobileMenuOpen}
      >
        <button
          type="button"
          className="
            absolute
            right-6
            top-5
            rounded-full
            p-2
            text-white
            transition-colors
            duration-300
            hover:bg-white/[0.08]
            focus-visible:outline-none
            focus-visible:ring-2
            focus-visible:ring-indigo-400
          "
          aria-label={t.common.closeMenu}
          onClick={closeMobileMenu}
        >
          <Icon icon="lucide:x" width={28} aria-hidden="true" />
        </button>

        <div className="absolute left-6 top-5">
          <LanguageSwitcher />
        </div>

        {navigationItems.map((item) => {
          const sectionId = item.href.replace("#", "");
          const isActive = activeSection === sectionId;

          return (
            <a
              key={item.href}
              href={item.href}
              onClick={(event) => scrollToSection(event, item.targetId)}
              aria-current={isActive ? "page" : undefined}
              className={`
                text-2xl
                font-light
                transition-all
                duration-300
                ${
                  isActive
                    ? "text-indigo-300"
                    : "text-neutral-300 hover:text-white"
                }
              `}
            >
              {item.label}
            </a>
          );
        })}

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={closeMobileMenu}
          className="
            mt-4
            inline-flex
            items-center
            gap-2
            rounded-full
            bg-indigo-500
            px-8
            py-3
            font-medium
            text-white
            transition-all
            duration-300
            hover:bg-indigo-400
            hover:shadow-lg
            hover:shadow-indigo-500/25
          "
        >
          <Icon icon="ri:whatsapp-fill" width={19} aria-hidden="true" />

          {t.hero.contactButton}
        </a>
      </div>
    </>
  );
}

export default Navbar;
