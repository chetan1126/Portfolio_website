import { personalInfo } from "@/lib/data";
import { ArrowUpRight01Icon, Cancel01Icon, Download04Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { AnimatePresence, domAnimation, LazyMotion, m } from "framer-motion";
import { useEffect, useState } from "react";

/**
 * Any element anywhere in the app can open this modal by dispatching:
 *   window.dispatchEvent(new CustomEvent("open-resume-modal"))
 * This keeps the trigger buttons (Hero, header, mobile nav) decoupled from
 * the modal itself, since each is a separate Astro/React island.
 */
export default function ResumeModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const open = () => setIsOpen(true);
    window.addEventListener("open-resume-modal", open);
    return () => window.removeEventListener("open-resume-modal", open);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  return (
    <LazyMotion features={domAnimation}>
      <AnimatePresence>
        {isOpen && (
          <m.div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <button
              type="button"
              aria-label="Close resume preview"
              className="absolute inset-0 bg-ink/70 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            />

            <m.div
              role="dialog"
              aria-modal="true"
              aria-label={`${personalInfo.name} resume preview`}
              className="relative flex h-full max-h-[85vh] w-full max-w-4xl flex-col overflow-hidden border-2 border-ink bg-background shadow-[-10px_10px_0_0_var(--color-coral)]"
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.98 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex items-center justify-between gap-4 border-b-2 border-ink bg-coral px-5 py-4 text-ink">
                <div className="min-w-0">
                  <p className="truncate font-display text-lg leading-none md:text-xl">
                    {personalInfo.name} — Resume
                  </p>
                </div>
                <div className="flex shrink-0 items-center gap-2">
                  <a
                    href={personalInfo.resume}
                    download
                    className="inline-flex h-10 items-center gap-2 border border-ink/60 bg-background px-3 text-xs font-bold text-ink transition-colors hover:bg-ink hover:text-white"
                  >
                    <HugeiconsIcon
                      icon={Download04Icon}
                      className="h-4 w-4"
                      strokeWidth={2}
                      aria-hidden="true"
                    />
                    Download
                  </a>
                  <a
                    href={personalInfo.resume}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden h-10 items-center gap-2 border border-ink/60 bg-background px-3 text-xs font-bold text-ink transition-colors hover:bg-ink hover:text-white sm:inline-flex"
                  >
                    <HugeiconsIcon
                      icon={ArrowUpRight01Icon}
                      className="h-4 w-4"
                      strokeWidth={2}
                      aria-hidden="true"
                    />
                    Open in new tab
                  </a>
                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    aria-label="Close"
                    className="inline-flex h-10 w-10 items-center justify-center border border-ink/60 text-ink transition-colors hover:bg-ink hover:text-white"
                  >
                    <HugeiconsIcon
                      icon={Cancel01Icon}
                      className="h-4 w-4"
                      strokeWidth={2}
                      aria-hidden="true"
                    />
                  </button>
                </div>
              </div>

              <div className="min-h-0 flex-1 bg-mist">
                <iframe
                  src={`${personalInfo.resume}#toolbar=1`}
                  title={`${personalInfo.name} resume PDF`}
                  className="h-full w-full border-0"
                />
              </div>
            </m.div>
          </m.div>
        )}
      </AnimatePresence>
    </LazyMotion>
  );
}
