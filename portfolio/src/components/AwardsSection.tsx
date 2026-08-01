import { awards } from "@/lib/data";
import MotionWrapper from "./MotionWrapper";
import SectionHeading from "./SectionHeading";

export default function AwardsSection() {
  return (
    <section id="awards" className="scroll-mt-16 bg-background py-20 text-foreground md:py-28">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <MotionWrapper>
          <SectionHeading>Awards & Achievements</SectionHeading>
        </MotionWrapper>

        <div className="divide-y divide-ink border-b-2 border-ink">
          {awards.map((award, index) => (
            <MotionWrapper key={award.name + award.date} delay={index * 0.04}>
              <div className="grid gap-3 py-6 md:grid-cols-[1fr_auto] md:items-center md:gap-8 md:py-7">
                <div className="min-w-0">
                  <h3 className="text-xl font-black md:text-2xl">{award.name}</h3>
                  <p className="mt-0.5 text-base text-muted-foreground">{award.issuer}</p>
                </div>
                <div className="flex flex-wrap items-center gap-2 text-base md:justify-end">
                  <span className="font-semibold text-muted-foreground">{award.type}</span>
                  <span className="font-semibold tabular-nums text-muted-foreground">{award.date}</span>
                  <span className="bg-foreground px-4 py-2 text-sm font-black text-background md:min-w-40 md:text-base md:text-center">
                    {award.position}
                  </span>
                </div>
              </div>
            </MotionWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
