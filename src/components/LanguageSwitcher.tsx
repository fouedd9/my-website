import { useEffect, useState } from "react";
import { FR, GB } from "country-flag-icons/react/3x2";

import { useTranslation } from "@/i18n";
import type { Language } from "@/i18n";

interface LanguageOption {
  code: Language;
  label: string;
}

export default function LanguageSwitcher() {
  const { language, setLanguage, t } = useTranslation();

  const [isFlipping, setIsFlipping] = useState(false);

  const languages: LanguageOption[] = [
    {
      code: "fr",
      label: t.common.french,
    },
    {
      code: "en",
      label: t.common.english,
    },
  ];

  const activeIndex = language === "fr" ? 0 : 1;

  const activeBackground =
    language === "fr"
      ? "linear-gradient(135deg, rgba(59,130,246,0.18), rgba(255,255,255,0.06))"
      : "linear-gradient(135deg, rgba(139,92,246,0.18), rgba(255,255,255,0.06))";

  const activeGlow =
    language === "fr"
      ? "radial-gradient(circle, rgba(59,130,246,0.22), transparent 70%)"
      : "radial-gradient(circle, rgba(139,92,246,0.22), transparent 70%)";

  const handleLanguageChange = (nextLanguage: Language) => {
    if (nextLanguage === language || isFlipping) {
      return;
    }

    setIsFlipping(true);

    window.setTimeout(() => {
      setLanguage(nextLanguage);
    }, 120);
  };

  useEffect(() => {
    if (!isFlipping) {
      return;
    }

    const timeout = window.setTimeout(() => {
      setIsFlipping(false);
    }, 420);

    return () => {
      window.clearTimeout(timeout);
    };
  }, [isFlipping, language]);

  return (
    <div
      role="group"
      aria-label={t.common.language}
      className="
        relative
        inline-flex
        h-11
        items-center
        rounded-full
        border
        border-white/10
        bg-black/35
        p-1
        shadow-[0_10px_35px_rgba(0,0,0,0.30)]
        backdrop-blur-xl
      "
    >
      {/* Glow animé */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          rounded-full
          opacity-70
          blur-xl
          animate-pulse
          transition-all
          duration-700
        "
        style={{
          background: activeGlow,
          animationDuration: "3s",
        }}
      />

      {/* Reflet intérieur */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-[1px]
          rounded-full
          border
          border-white/[0.04]
          bg-[linear-gradient(180deg,rgba(255,255,255,0.035),transparent)]
        "
      />

      {/* Capsule animée */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-1
          top-1
          h-9
          w-14
          rounded-full
          border
          border-white/10
          shadow-[0_10px_30px_rgba(0,0,0,0.28),inset_0_1px_0_rgba(255,255,255,0.10)]
          transition-all
          duration-500
          ease-[cubic-bezier(0.22,1,0.36,1)]
        "
        style={{
          transform: `translateX(${activeIndex * 56}px)`,
          background: activeBackground,
        }}
      />

      {languages.map((item) => {
        const isActive = language === item.code;

        return (
          <button
            key={item.code}
            type="button"
            onClick={() => handleLanguageChange(item.code)}
            aria-label={`${t.common.language}: ${item.label}`}
            aria-pressed={isActive}
            title={item.label}
            disabled={isFlipping && !isActive}
            className="
              group
              relative
              z-10
              flex
              h-9
              w-14
              items-center
              justify-center
              rounded-full
              transition-all
              duration-300
              hover:-translate-y-[1px]
              hover:scale-110
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-indigo-400/60
              disabled:cursor-default
            "
          >
            <div
              aria-hidden="true"
              className={`
                relative
                transition-all
                duration-500
                ease-[cubic-bezier(0.22,1,0.36,1)]
                [transform-style:preserve-3d]
                ${
                  isActive
                    ? "scale-110 opacity-100 drop-shadow-[0_4px_8px_rgba(255,255,255,0.18)]"
                    : "scale-90 opacity-65 group-hover:scale-100 group-hover:opacity-100"
                }
                ${
                  isActive && isFlipping
                    ? "[transform:rotateY(180deg)_scale(1.1)]"
                    : "[transform:rotateY(0deg)]"
                }
              `}
            >
              {item.code === "fr" ? (
                <FR className="h-5 w-7 rounded-[3px] shadow-md" />
              ) : (
                <GB className="h-5 w-7 rounded-[3px] shadow-md" />
              )}
            </div>

            {/* Tooltip */}
            <span
              className="
                pointer-events-none
                absolute
                left-1/2
                top-[calc(100%+10px)]
                -translate-x-1/2
                whitespace-nowrap
                rounded-md
                border
                border-white/10
                bg-[#111114]
                px-2.5
                py-1
                text-[10px]
                font-medium
                text-zinc-300
                opacity-0
                shadow-xl
                transition-all
                duration-200
                group-hover:translate-y-0.5
                group-hover:opacity-100
              "
            >
              {item.label}
            </span>
          </button>
        );
      })}
    </div>
  );
}
