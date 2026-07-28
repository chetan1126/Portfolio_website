import { personalInfo } from "@/lib/data";
import {
  Call02Icon,
  DocumentAttachmentIcon,
  Linkedin01Icon,
  Mail01Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { domAnimation, LazyMotion, m, useReducedMotion } from "framer-motion";
import type { MouseEvent as ReactMouseEvent, PointerEvent as ReactPointerEvent } from "react";
import HeroCanvas from "./HeroCanvas";
import CircuitBackground from "./CircuitBackground";

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
      <path d="M12 .296C5.37.296 0 5.667 0 12.3c0 5.28 3.438 9.748 8.205 11.326.6.11.82-.26.82-.577 0-.285-.01-1.04-.016-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.386-1.333-1.755-1.333-1.755-1.09-.747.083-.732.083-.732 1.205.086 1.838 1.238 1.838 1.238 1.07 1.835 2.809 1.305 3.495.998.108-.776.418-1.305.76-1.605-2.665-.305-5.466-1.333-5.466-5.931 0-1.31.465-2.382 1.235-3.222-.123-.304-.535-1.532.117-3.192 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.29-1.552 3.296-1.23 3.296-1.23.653 1.66.241 2.888.118 3.192.77.84 1.233 1.912 1.233 3.222 0 4.61-2.805 5.624-5.476 5.92.43.372.815 1.106.815 2.228 0 1.608-.014 2.903-.014 3.297 0 .32.216.694.825.576C20.565 22.044 24 17.578 24 12.3 24 5.667 18.627.296 12 .296z" />
    </svg>
  );
}

const EASE_OUT_QUINT = [0.22, 1, 0.36, 1] as const;

const contactLinks = [
  {
    label: "Resume",
    href: personalInfo.resume,
    icon: DocumentAttachmentIcon,
    isResume: true,
    primary: true,
  },
  { label: "Email", href: `mailto:${personalInfo.email}`, icon: Mail01Icon },
  { label: "Call", href: `tel:${personalInfo.phone.replace(/\s+/g, "")}`, icon: Call02Icon },
  {
    label: "LinkedIn",
    href: personalInfo.linkedin,
    icon: Linkedin01Icon,
    external: true,
  },
  {
    label: "GitHub",
    href: personalInfo.github,
    icon: GitHubIcon,
    external: true,
  },
];

const openResumeModal = (event: ReactMouseEvent<HTMLAnchorElement>) => {
  if (event.metaKey || event.ctrlKey || event.shiftKey || event.button !== 0) {
    return;
  }
  event.preventDefault();
  window.dispatchEvent(new CustomEvent("open-resume-modal"));
};

const movePortraitReveal = (event: ReactPointerEvent<HTMLDivElement>) => {
  const rect = event.currentTarget.getBoundingClientRect();
  event.currentTarget.style.setProperty("--reveal-opacity", "1");
  event.currentTarget.style.setProperty("--reveal-x", `${event.clientX - rect.left}px`);
  event.currentTarget.style.setProperty("--reveal-y", `${event.clientY - rect.top}px`);
};

const hidePortraitReveal = (event: ReactPointerEvent<HTMLDivElement>) => {
  event.currentTarget.style.setProperty("--reveal-opacity", "0");
};

export default function HeroSection() {
  const reduceMotion = useReducedMotion();
  const reveal = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduceMotion ? 0.15 : 0.75,
        ease: EASE_OUT_QUINT,
      },
    },
  };

  return (
    <LazyMotion features={domAnimation}>
      <section className="relative isolate min-h-[calc(100svh-3.5rem)] overflow-hidden text-hero-foreground">
        <CircuitBackground />
        <HeroCanvas />
        <div className="hero-scrim absolute inset-0" aria-hidden="true" />

        <m.div
          className="relative mx-auto grid min-h-[calc(100svh-3.5rem)] max-w-6xl items-center gap-9 px-6 py-10 md:grid-cols-[1.3fr_0.7fr] md:gap-14 md:px-8 md:py-16"
          initial="hidden"
          animate="visible"
          transition={{
            staggerChildren: reduceMotion ? 0 : 0.09,
            delayChildren: reduceMotion ? 0 : 0.08,
          }}
        >
          <div className="min-w-0">
            <m.div
              className="mb-5 flex items-center gap-3 text-sm font-semibold text-hero-foreground/80"
              variants={reveal}
            >
              <span className="h-3 w-3 bg-coral" aria-hidden="true" />
              {personalInfo.role}
            </m.div>

            <m.h1
              className="font-display whitespace-nowrap text-[clamp(2.5rem,11vw,5.5rem)] leading-[0.88] tracking-[0.01em] md:text-[clamp(3.8rem,6.5vw,5.5rem)]"
              variants={reveal}
            >
              {personalInfo.firstName} <span className="text-hero-foreground">{personalInfo.lastName}</span>
            </m.h1>

            <m.p
              className="mt-6 max-w-[55ch] text-base leading-relaxed text-hero-foreground/82 md:text-lg"
              variants={reveal}
            >
              {personalInfo.heroDescription}
            </m.p>

            <m.div className="mt-7 flex flex-wrap gap-2.5" variants={reveal}>
              {contactLinks.map(({ label, href, icon: Icon, external, isResume, primary }) => (
                <a
                  key={label}
                  href={href}
                  {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  {...(isResume ? { onClick: openResumeModal } : {})}
                  className={`group inline-flex min-h-11 items-center gap-2 px-4 py-2.5 text-sm font-bold transition-transform duration-300 ease-out hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-hero-foreground ${
                    primary
                      ? "bg-coral text-ink"
                      : "border border-hero-foreground/45 bg-hero-background/30 text-hero-foreground hover:border-hero-foreground hover:bg-hero-foreground hover:text-hero-background"
                  }`}
                >
                  {Icon === GitHubIcon ? (
                    <GitHubIcon />
                  ) : (
                    <HugeiconsIcon
                      icon={Icon}
                      className="h-4 w-4"
                      strokeWidth={2}
                      aria-hidden="true"
                    />
                  )}
                  {label}
                </a>
              ))}
            </m.div>
          </div>

          <m.div className="relative mx-auto w-44 md:w-full md:max-w-[330px]" variants={reveal}>
            <div
              className="absolute -inset-3 translate-x-5 translate-y-5 bg-coral/85"
              aria-hidden="true"
            />
            <div
              className="absolute -inset-3 -translate-x-5 -translate-y-5 border border-hero-foreground/45"
              aria-hidden="true"
            />
            <div
              className="portrait-reveal relative aspect-square overflow-hidden"
              onPointerMove={movePortraitReveal}
              onPointerLeave={hidePortraitReveal}
            >
              <img
                src={personalInfo.profilePicture}
                alt={`Portrait of ${personalInfo.name}`}
                width="460"
                height="460"
                decoding="async"
                fetchPriority="high"
                draggable={false}
                className="pointer-events-none h-full w-full select-none object-cover grayscale contrast-110"
              />
              <img
                src={personalInfo.profilePicture}
                alt=""
                width="460"
                height="460"
                decoding="async"
                aria-hidden="true"
                draggable={false}
                className="portrait-reveal-color pointer-events-none absolute inset-0 h-full w-full select-none object-cover"
              />
            </div>
          </m.div>
        </m.div>
      </section>
    </LazyMotion>
  );
}
