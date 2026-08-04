import { MARKETS, COMPANY } from "@/data/site";
import { Reveal } from "@/components/Reveal";
import { CTABand } from "@/components/CTABand";
import { PageHero, usePageMeta } from "@/components/PageHero";
import { ArrowUpRight } from "lucide-react";

const Markets = () => {
  usePageMeta(
    "Markets We Serve | Bass Crane Service, Richmond VA",
    "Bass Crane supports residential and commercial contractors, steel erectors, carpentry, HVAC, and roofing contractors across Richmond, VA and Virginia."
  );

  return (
    <div data-testid="markets-page">
      <PageHero
        eyebrow="Markets We Serve"
        titleLines={["Who We", "Serve"]}
        intro="From residential builds to structural steel, Bass Crane brings certified operators and the right equipment to the trades that keep Virginia building."
        testId="markets-hero"
      />

      <section className="max-w-[1440px] mx-auto px-6 md:px-12 py-20 md:py-28" data-testid="markets-grid">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-[#2A2A2A]">
          {MARKETS.map((m, i) => (
            <Reveal key={m.num} delay={(i % 3) * 0.08}>
              <div className="group relative flex flex-col h-full min-h-[280px] p-8 md:p-10 border-r border-b border-[#2A2A2A] bg-[#050505] transition-colors duration-500 hover:bg-[#0e0e0e]">
                <div className="flex items-center justify-between mb-12">
                  <span className="font-mono-plex text-xs text-[#E3000F]">{m.num}</span>
                  <ArrowUpRight className="w-5 h-5 text-[#3a3a3a] transition-all duration-300 group-hover:text-[#E3000F] group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
                <h3 className="text-2xl md:text-3xl uppercase text-white mb-4">{m.title}</h3>
                <p className="text-[#8B8D98] text-sm leading-relaxed">{m.desc}</p>
                <span className="mt-auto pt-8 h-px w-full bg-[#1c1c1c] group-hover:bg-[#E3000F] transition-colors duration-500" />
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CTABand
        heading="On Your Crew?"
        sub={`Call us anytime — 24/7 — to schedule a lift for your trade. ${COMPANY.phone}`}
      />
    </div>
  );
};

export default Markets;
