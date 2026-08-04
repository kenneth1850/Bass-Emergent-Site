import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";
import { COMPANY } from "@/data/site";
import { MaskedLinesInView } from "@/components/Reveal";

// Bright signal-red full width CTA band used across pages.
export const CTABand = ({
  heading = "Need a Lift?",
  sub = "Call us anytime — 24/7 — to schedule a crane or truck.",
}) => (
  <section className="relative bg-[#E3000F] text-[#050505] overflow-hidden" data-testid="cta-band">
    <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-20 md:py-28">
      <div className="grid lg:grid-cols-[1fr_auto] gap-10 lg:gap-16 items-end">
        <div>
          <p className="font-mono-plex uppercase tracking-[0.25em] text-xs mb-6 text-[#050505]/70">
            [ 24/7 Dispatch ]
          </p>
          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl uppercase">
            <MaskedLinesInView lines={[heading]} />
          </h2>
          <p className="mt-6 max-w-xl text-base md:text-lg font-medium text-[#050505]/80">
            {sub}
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <a
            href={COMPANY.phoneHref}
            data-testid="cta-band-call"
            className="group inline-flex items-center gap-3 bg-[#050505] text-white px-8 py-5 font-mono-plex uppercase tracking-widest text-sm transition-colors duration-300 hover:bg-white hover:text-[#050505]"
          >
            <Phone className="w-4 h-4" />
            {COMPANY.phone}
          </a>
          <Link
            to="/contact"
            data-testid="cta-band-contact"
            className="group inline-flex items-center justify-between gap-3 border border-[#050505] px-8 py-5 font-mono-plex uppercase tracking-widest text-sm transition-colors duration-300 hover:bg-[#050505] hover:text-white"
          >
            Contact Us
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  </section>
);
