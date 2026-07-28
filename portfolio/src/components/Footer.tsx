import { personalInfo } from "@/lib/data";
import { Call02Icon, Linkedin01Icon, Mail01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
      <path d="M12 .296C5.37.296 0 5.667 0 12.3c0 5.28 3.438 9.748 8.205 11.326.6.11.82-.26.82-.577 0-.285-.01-1.04-.016-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.386-1.333-1.755-1.333-1.755-1.09-.747.083-.732.083-.732 1.205.086 1.838 1.238 1.838 1.238 1.07 1.835 2.809 1.305 3.495.998.108-.776.418-1.305.76-1.605-2.665-.305-5.466-1.333-5.466-5.931 0-1.31.465-2.382 1.235-3.222-.123-.304-.535-1.532.117-3.192 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.29-1.552 3.296-1.23 3.296-1.23.653 1.66.241 2.888.118 3.192.77.84 1.233 1.912 1.233 3.222 0 4.61-2.805 5.624-5.476 5.92.43.372.815 1.106.815 2.228 0 1.608-.014 2.903-.014 3.297 0 .32.216.694.825.576C20.565 22.044 24 17.578 24 12.3 24 5.667 18.627.296 12 .296z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-coral py-12 text-ink md:py-16">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <div className="flex flex-col gap-8 border-t-2 border-ink pt-7 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-display text-4xl md:text-6xl">{personalInfo.name}</p>
            <p className="mt-2 text-sm font-semibold text-ink/70">
              Engineering circuits, robots, and automated systems.
            </p>
            <p className="mt-5 text-xs text-ink/60">&copy; {new Date().getFullYear()}</p>
          </div>
          <div className="flex items-center gap-2">
            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-flex h-11 w-11 items-center justify-center border border-ink/50 text-ink transition-colors hover:bg-ink hover:text-white"
              aria-label="Email"
            >
              <HugeiconsIcon
                icon={Mail01Icon}
                className="h-4 w-4"
                strokeWidth={2}
                aria-hidden="true"
              />
            </a>
            <a
              href={`tel:${personalInfo.phone.replace(/\s+/g, "")}`}
              className="inline-flex h-11 w-11 items-center justify-center border border-ink/50 text-ink transition-colors hover:bg-ink hover:text-white"
              aria-label="Call"
            >
              <HugeiconsIcon
                icon={Call02Icon}
                className="h-4 w-4"
                strokeWidth={2}
                aria-hidden="true"
              />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 w-11 items-center justify-center border border-ink/50 text-ink transition-colors hover:bg-ink hover:text-white"
              aria-label="LinkedIn"
            >
              <HugeiconsIcon
                icon={Linkedin01Icon}
                className="h-4 w-4"
                strokeWidth={2}
                aria-hidden="true"
              />
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 w-11 items-center justify-center border border-ink/50 text-ink transition-colors hover:bg-ink hover:text-white"
              aria-label="GitHub"
            >
              <GitHubIcon />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
