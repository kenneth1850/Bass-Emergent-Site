import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";
import { COMPANY } from "@/data/site";
import { MaskedLinesInView } from "@/components/Reveal";

// Solid navy full width CTA band used across pages.
export const CTABand = ({
  heading = "Need a Lift?",
  sub = "Call us anytime — 24/7 — to schedule a crane or truck.",
}) => (
  <section className="relative bg-[#1C3172] text-white overflow-hidden" data-testid="cta-band">
    <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-20 md:py-28">
      <div className="grid lg:grid-cols-[1fr_auto] gap-10 lg:gap-16 items-end">
        <div>
          <p className="font-mono-plex uppercase tracking-[0.25em] text-sm mb-6 text-white/60">
            [ 24/7 Dispatch ]
          </p>
          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl uppercase text-white">
            <MaskedLinesInView lines={[heading]} lineClassName="text-white" />
          </h2>
          <p className="mt-6 max-w-xl text-base md:text-lg font-medium text-white/80">
            {sub}
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <a
            href={COMPANY.phoneHref}
            data-testid="cta-band-call"
            className="group inline-flex items-center gap-3 bg-white text-[#1C3172] px-8 py-5 font-mono-plex uppercase tracking-widest text-sm transition-colors duration-300 hover:bg-[#142457] hover:text-white"
          >
            <Phone className="w-4 h-4" />
            {COMPANY.phone}
          </a>
          <Link
            to="/contact"
            data-testid="cta-band-contact"
            className="group inline-flex items-center justify-between gap-3 border border-white/50 px-8 py-5 font-mono-plex uppercase tracking-widest text-sm text-white transition-colors duration-300 hover:bg-white hover:text-[#1C3172]"
          >
            Contact Us
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  </section>
);
