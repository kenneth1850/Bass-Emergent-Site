import { PROJECTS, COMPANY } from "@/data/site";
import { Reveal } from "@/components/Reveal";
import { Placeholder } from "@/components/Placeholder";
import { CTABand } from "@/components/CTABand";
import { PageHero, usePageMeta } from "@/components/PageHero";

const Projects = () => {
  usePageMeta(
    "Projects | Our Work | Bass Crane Service, Richmond VA",
    "Decades of safe, successful crane lifts and hauls across Richmond, VA and the Commonwealth of Virginia. Explore selected Bass Crane project work."
  );

  return (
    <div data-testid="projects-page">
      <PageHero
        eyebrow="Projects"
        titleLines={["Our", "Work"]}
        intro="Decades of safe, successful lifts across Richmond and the Commonwealth of Virginia — from residential removals to downtown steel erection."
        testId="projects-hero"
      />

      {/* Project case studies and photos to be added */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-12 py-20 md:py-28 bg-white" data-testid="projects-gallery">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 [column-fill:_balance]">
          {PROJECTS.map((p, i) => (
            <Reveal key={i} delay={(i % 3) * 0.06} className="mb-10 break-inside-avoid">
              <figure>
                <Placeholder
                  label={p.label}
                  src={p.image}
                  alt={p.alt}
                  className={p.tall ? "aspect-[3/4]" : "aspect-[4/3]"}
                  parallax
                  index={`P-${String(i + 1).padStart(2, "0")}`}
                  testId={`project-tile-${i}`}
                />
                {p.title && (
                  <figcaption className="mt-3 flex items-baseline justify-between gap-4">
                    <span className="font-display text-lg uppercase text-[#1A1A1A] leading-tight">{p.title}</span>
                    <span className="font-mono-plex text-xs uppercase tracking-widest text-[#5B6270] text-right shrink-0">{p.meta}</span>
                  </figcaption>
                )}
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      <CTABand
        heading="Your Job Next?"
        sub={`Call us anytime — 24/7 — to put Bass Crane on your project. ${COMPANY.phone}`}
      />
    </div>
  );
};

export default Projects;
