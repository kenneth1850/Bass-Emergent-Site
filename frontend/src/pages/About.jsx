import { COMPANY, VALUES } from "@/data/site";
import { Reveal, MaskedLinesInView } from "@/components/Reveal";
import { Placeholder } from "@/components/Placeholder";
import { Marquee } from "@/components/Marquee";
import { CTABand } from "@/components/CTABand";
import { PageHero, usePageMeta } from "@/components/PageHero";

const About = () => {
  usePageMeta(
    "About | A Family Business Since 1913 | Bass Crane Service",
    "Bass Crane Service has served Richmond for 3 generations, in and around construction since 1913. CCO certified crane operators. Safety first, done right every time."
  );

  return (
    <div data-testid="about-page">
      <PageHero
        eyebrow="About"
        titleLines={["A Family", "Business", "Since 1913"]}
        testId="about-hero"
      />

      {/* Editorial story */}
      <section className="relative overflow-hidden bg-white border-b border-[#E5E7EB]">
        <div className="absolute inset-0 flex items-center pointer-events-none opacity-[0.05]">
          <Marquee
            className="font-display text-[16vw] uppercase text-[#1C3172] leading-none"
            items={["A Family Business Since 1913", "We Lift Richmond to New Heights"]}
          />
        </div>
        <div className="relative max-w-[1440px] mx-auto px-6 md:px-12 py-24 md:py-32 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <p className="overline text-[#1C3172] mb-6">[ Our Story ]</p>
              <h2 className="text-4xl md:text-5xl uppercase text-[#1A1A1A]">
                <MaskedLinesInView lines={["Three", "Generations", "Strong"]} />
              </h2>
            </div>
          </div>
          <div className="lg:col-span-7 lg:col-start-6 space-y-8">
            <Reveal>
              <p className="text-[#2B2F38] text-lg md:text-xl leading-relaxed">
                Bass Crane Service has been providing crane and truck rental services to Richmond and
                the surrounding areas for 3 generations. Our family business has been in and around
                construction since 1913.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <Placeholder label="PLACEHOLDER: HISTORICAL / FAMILY PHOTO" className="aspect-[16/10] w-full" parallax index="H-01" />
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-[#5B6270] text-base md:text-lg leading-relaxed">
                Bass Crane has CCO Certified Crane Operators available — CCO is the most recognized
                certification by OSHA. We believe in doing the job right — every time — in a safe and
                secure manner.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <Placeholder label="PLACEHOLDER: TEAM PHOTO" className="aspect-[16/10] w-full" parallax index="H-02" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[#F7F8FA] border-b border-[#E5E7EB]" data-testid="about-values">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-20 md:py-24">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 lg:divide-x divide-[#E5E7EB]">
            {VALUES.map((v, i) => (
              <Reveal key={v} delay={i * 0.08} className="px-0 lg:px-8 py-8 lg:py-0 first:lg:pl-0">
                <span className="font-mono-plex text-xs text-[#1C3172]">0{i + 1}</span>
                <p className="mt-4 font-display text-2xl md:text-3xl uppercase text-[#1A1A1A] leading-tight">
                  {v}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABand
        heading="Work With Us"
        sub={`Family-owned, CCO certified, ready 24/7. ${COMPANY.phone}`}
      />
    </div>
  );
};

export default About;
