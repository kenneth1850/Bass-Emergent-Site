import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { SERVICES, COMPANY } from "@/data/site";
import { Reveal } from "@/components/Reveal";
import { Placeholder } from "@/components/Placeholder";
import { CTABand } from "@/components/CTABand";
import { PageHero, usePageMeta } from "@/components/PageHero";

const Services = () => {
  usePageMeta(
    "Services | Crane Rental, Rigging & Hauling | Bass Crane Service",
    "Crane rental (30–160 ton), boom trucks, rigging & hauling, truck rental, delivery & off-loading, and storage across Richmond, VA and the Commonwealth of Virginia."
  );

  return (
    <div data-testid="services-page">
      <PageHero
        eyebrow="Services"
        titleLines={["Our", "Services"]}
        intro="Bass Crane Services has the right machine for your technical requirements — from boom trucks for lightweight lifting to cranes from 30-ton to 160-ton, plus lowboys, equipment trailers, and rollbacks. We believe in doing the job right — every time — in a safe and secure manner."
        testId="services-hero"
      />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        {SERVICES.map((s, i) => {
          const flip = i % 2 === 1;
          return (
            <section
              key={s.id}
              id={s.id}
              data-testid={`service-section-${s.id}`}
              className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center py-20 md:py-28 border-b border-[#1c1c1c]"
            >
              <Reveal className={flip ? "lg:order-2" : ""}>
                <Placeholder
                  label={s.placeholder}
                  className="aspect-[4/3] w-full"
                  parallax
                  index={`S-${s.num}`}
                />
              </Reveal>
              <Reveal delay={0.1} className={flip ? "lg:order-1" : ""}>
                <span className="font-mono-plex text-sm text-[#E3000F]">/ {s.num}</span>
                <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl uppercase text-white">
                  {s.title}
                </h2>
                <p className="mt-6 text-[#c9c9cf] text-lg leading-relaxed max-w-xl">
                  {s.long}
                </p>
                <Link
                  to="/contact"
                  data-testid={`service-book-${s.id}`}
                  className="group mt-8 inline-flex items-center gap-3 font-mono-plex uppercase tracking-widest text-sm text-white hover:text-[#E3000F] transition-colors duration-300"
                >
                  Book This Service
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Link>
              </Reveal>
            </section>
          );
        })}
      </div>

      <CTABand
        heading="Ready to Book?"
        sub={`Call us anytime — 24/7 — to schedule a crane or truck. ${COMPANY.phone}`}
      />
    </div>
  );
};

export default Services;
