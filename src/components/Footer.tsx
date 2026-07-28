import { Icon } from "@iconify/react";

import { useTranslation } from "@/i18n";
import { trackWhatsappClick } from "@/analytics/events";
import { Locations } from "@/analytics/constants";

interface SocialLink {
  label: string;
  href: string;
  icon: string;
  external?: boolean;
}

export default function Footer() {
  const { language, t } = useTranslation();

  const currentYear = new Date().getFullYear();

  const whatsappMessage =
    language === "fr"
      ? "Bonjour Foued, je viens de visiter votre portfolio et j’aimerais échanger avec vous."
      : "Hello Foued, I have just visited your portfolio and would like to connect with you.";

  const whatsappUrl = `https://wa.me/33767653082?text=${encodeURIComponent(
    whatsappMessage,
  )}`;

  const socialLinks: SocialLink[] = [
    {
      label: "Email",
      href: "mailto:fouedsaidane2@gmail.com",
      icon: "lucide:mail",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/foued-saidane/?locale=fr",
      icon: "mdi:linkedin",
      external: true,
    },
    {
      label: "GitHub",
      href: "https://github.com/fouedd9",
      icon: "mdi:github",
      external: true,
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer
      id="contact"
      className="
        relative
        isolate
        overflow-hidden
        border-t
        border-white/[0.07]
        bg-[#050506]
        px-6
        pb-8
        pt-24
        sm:pt-28
      "
    >
      {/* Halo principal */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-1/2
          top-0
          -z-20
          h-[520px]
          w-[900px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-indigo-500/[0.09]
          blur-[140px]
        "
      />

      {/* Halo secondaire */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          bottom-[-220px]
          right-[-160px]
          -z-20
          h-[440px]
          w-[440px]
          rounded-full
          bg-violet-500/[0.07]
          blur-[130px]
        "
      />

      {/* Grille décorative */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          -z-10
          opacity-[0.022]
          [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)]
          [background-size:72px_72px]
        "
      />

      <div className="mx-auto max-w-6xl">
        {/* CTA principal */}
        <div
          id="contact-title"
          className="
            glass
            relative
            overflow-hidden
            rounded-[32px]
            border
            border-white/[0.08]
            px-6
            py-12
            text-center
            shadow-[0_30px_100px_rgba(0,0,0,0.35)]
            sm:px-10
            sm:py-16
            lg:px-16
          "
        >
          {/* Reflet supérieur */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              inset-x-16
              top-0
              h-px
              bg-gradient-to-r
              from-transparent
              via-indigo-300/50
              to-transparent
            "
          />

          {/* Glow interne */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              left-1/2
              top-0
              h-56
              w-96
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-indigo-500/10
              blur-[90px]
            "
          />

          <div className="relative z-10 mx-auto max-w-3xl">
            <span
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-emerald-400/15
                bg-emerald-400/[0.07]
                px-3
                py-1.5
                text-[10px]
                font-medium
                uppercase
                tracking-[0.18em]
                text-emerald-300
                sm:text-xs
              "
            >
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />

              {t.contact.availability}
            </span>

            <h2
              className="
                mt-6
                text-3xl
                font-medium
                tracking-[-0.045em]
                text-white
                sm:text-4xl
                lg:text-6xl
              "
            >
              {t.footer.title}
            </h2>

            <p
              className="
                mx-auto
                mt-5
                max-w-2xl
                text-sm
                font-light
                leading-7
                text-zinc-400
                sm:text-base
                sm:leading-8
              "
            >
              {t.footer.description}
            </p>

            <div
              className="
                mt-8
                flex
                flex-col
                items-stretch
                justify-center
                gap-3
                sm:flex-row
                sm:items-center
              "
            >
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "black" }}
                className="
                
                  group
                  inline-flex
                  min-h-12
                  items-center
                  justify-center
                  gap-2.5
                  rounded-full
                  bg-white
                  px-6
                  text-sm
                  font-medium
                  text-black
                  shadow-[0_16px_40px_rgba(255,255,255,0.08)]
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:shadow-[0_20px_50px_rgba(129,140,248,0.18)]
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-indigo-400
                  focus-visible:ring-offset-2
                  focus-visible:ring-offset-[#050506]
                "
              >
                <Icon
                  icon="ri:whatsapp-fill"
                  width={19}
                  className="
                    text-[#25D366]
                    transition-transform
                    duration-300
                    group-hover:-rotate-6
                    group-hover:scale-110
                  "
                  aria-hidden="true"
                />

                {t.footer.contactButton}

                <Icon
                  icon="lucide:arrow-up-right"
                  width={15}
                  className="
                    transition-transform
                    duration-300
                    group-hover:-translate-y-0.5
                    group-hover:translate-x-0.5
                  "
                  aria-hidden="true"
                />
              </a>

              <a
                href="mailto:fouedsaidane2@gmail.com"
                className="
                  group
                  inline-flex
                  min-h-12
                  items-center
                  justify-center
                  gap-2.5
                  rounded-full
                  border
                  border-white/10
                  bg-white/[0.04]
                  px-6
                  text-sm
                  font-medium
                  text-zinc-200
                  backdrop-blur-xl
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:border-indigo-400/25
                  hover:bg-indigo-400/[0.08]
                  hover:text-white
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-indigo-400
                  focus-visible:ring-offset-2
                  focus-visible:ring-offset-[#050506]
                "
              >
                <Icon
                  icon="lucide:mail"
                  width={17}
                  className="
                    text-indigo-300
                    transition-transform
                    duration-300
                    group-hover:scale-110
                  "
                  aria-hidden="true"
                />

                {t.contact.emailLabel}
              </a>
            </div>
          </div>
        </div>

        {/* Partie inférieure */}
        <div
          className="
            mt-12
            flex
            flex-col
            items-center
            justify-between
            gap-8
            border-t
            border-white/[0.07]
            pt-8
            md:flex-row
          "
        >
          {/* Identité */}
          <div className="text-center md:text-left">
            <button
              type="button"
              onClick={scrollToTop}
              aria-label={t.common.scrollToTop}
              className="
                group
                inline-flex
                items-center
                gap-2
                text-base
                font-semibold
                tracking-tight
                text-white
                transition-colors
                hover:text-indigo-300
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-indigo-400
                focus-visible:ring-offset-4
                focus-visible:ring-offset-[#050506]
              "
            >
              <span>
                <span className="text-indigo-400">F</span>
                <span className="text-zinc-400">.</span>
                Saidane
              </span>

              <Icon
                icon="lucide:arrow-up"
                width={15}
                className="
                  text-zinc-500
                  transition-all
                  duration-300
                  group-hover:-translate-y-1
                  group-hover:text-indigo-300
                "
                aria-hidden="true"
              />
            </button>

            <p className="mt-2 text-xs font-light text-zinc-500">
              React · TypeScript · Vite · Node
            </p>
          </div>

          {/* Réseaux sociaux */}
          <div className="flex items-center gap-2">
            {socialLinks.map((link) => (
              <a
                onClick={() =>
                  trackWhatsappClick({
                    language,
                    location: Locations.HERO,
                  })
                }
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                aria-label={link.label}
                title={link.label}
                className="
                  group
                  inline-flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/[0.08]
                  bg-white/[0.035]
                  text-zinc-500
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-indigo-400/25
                  hover:bg-indigo-400/[0.08]
                  hover:text-indigo-300
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-indigo-400
                "
              >
                <Icon
                  icon={link.icon}
                  width={18}
                  className="transition-transform duration-300 group-hover:scale-110"
                  aria-hidden="true"
                />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-xs font-light text-zinc-500">
              © {currentYear} Foued Saidane
            </p>

            <p className="mt-1 text-[10px] uppercase tracking-[0.14em] text-zinc-600">
              {t.footer.copyright}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
