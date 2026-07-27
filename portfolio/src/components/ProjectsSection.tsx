import { selectedWork } from "@/lib/data";
import MotionWrapper from "./MotionWrapper";
import SectionHeading from "./SectionHeading";

function ProjectArtwork({ index }: { index: number }) {
  if (index === 1) {
    return (
      <div className="relative aspect-4/3 overflow-hidden bg-background">
        <img
          src="/2023_bots.jpg"
          alt="TechnoXian robotics bots"
          className="h-full w-full object-contain object-center"
        />
      </div>
    );
  }

  if (index === 2) {
    return (
      <div className="relative aspect-4/3 overflow-hidden bg-background">
        <img
          src="/Real_Time_Inventory_System.jpeg"
          alt="Real-time inventory management system"
          className="h-full w-full object-contain object-center"
        />
      </div>
    );
  }

  return (
    <div className="relative aspect-4/3 overflow-hidden bg-background">
      <img
        src="/Team_cybrotics_Bots_pic.webp"
        alt="Team Cybrotics robot"
        className="h-full w-full object-contain object-center"
      />
    </div>
  );
}

export default function ProjectsSection() {
  return (
    <section
      id="work"
      className="scroll-mt-16 bg-background pb-20 pt-12 text-foreground md:pb-28 md:pt-16"
    >
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <MotionWrapper>
          <SectionHeading>Work</SectionHeading>
        </MotionWrapper>

        <MotionWrapper>
          <p className="mb-12 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            Robotics competitions and embedded builds where I've led electronics execution,
            from PCB design to full-system integration.
          </p>
        </MotionWrapper>

        <div className="space-y-20 md:space-y-28">
          {selectedWork.map((project, index) => (
            <MotionWrapper key={project.title} delay={index * 0.08}>
              <article className="grid items-center gap-8 md:grid-cols-2 md:items-start md:gap-14">
                <div className={index % 2 ? "md:order-2" : ""}>
                  <ProjectArtwork index={index} />
                  {project.videoId ? (
                    <div className="mt-6 overflow-hidden rounded-3xl border border-border bg-background shadow-sm md:mt-8 md:max-w-2xl">
                      <div className="relative aspect-video bg-black mx-auto max-w-xl md:max-w-2xl">
                        <iframe
                          src={`https://www.youtube.com/embed/${project.videoId}`}
                          title={`${project.title} demo video`}
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowFullScreen
                          className="h-full w-full"
                        />
                      </div>
                      <div className="flex flex-col gap-2 border-t border-border px-4 py-3 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
                        <span>Watch the video on YouTube</span>
                        <a
                          href={`https://www.youtube.com/watch?v=${project.videoId}`}
                          target="_blank"
                          rel="noreferrer"
                          className="font-semibold text-ember hover:underline"
                        >
                          Open on YouTube
                        </a>
                      </div>
                    </div>
                  ) : null}
                </div>

                <div className={index % 2 ? "md:order-1" : ""}>
                  <p className="mb-3 text-sm font-black uppercase tracking-wide text-ember">
                    {project.context}
                  </p>
                  <h3 className="font-display text-[clamp(2.5rem,6vw,4.75rem)] leading-[0.92]">
                    {project.title}
                  </h3>
                  <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                    {project.summary}
                  </p>

                  <ul className="mt-7 space-y-3 text-sm text-muted-foreground">
                    {project.description.map((description) => (
                      <li key={description} className="flex gap-3 leading-relaxed">
                        <span className="mt-[7px] h-2 w-2 shrink-0 bg-coral" aria-hidden="true" />
                        {description}
                      </li>
                    ))}
                  </ul>

                  <ul className="mt-7 flex flex-wrap gap-2" aria-label="Technology stack">
                    {project.stack.map((technology) => (
                      <li
                        key={technology}
                        className="border border-border px-3 py-1.5 text-xs font-bold text-muted-foreground"
                      >
                        {technology}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </MotionWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
