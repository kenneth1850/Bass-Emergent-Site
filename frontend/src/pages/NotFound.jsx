import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";
import { COMPANY } from "@/data/site";
import { MaskedLines, FadeUp } from "@/components/Reveal";
import { usePageMeta } from "@/components/PageHero";

const NotFound = () => {
  usePageMeta(
    "Page Not Found | Bass Crane Service, LLC",
    "The page you were looking for could not be found. Bass Crane Service — crane and truck rental in Richmond, VA."
  );

  return (
    <section
      className="relative min-h-screen flex flex-col justify-center bg-[#F7F8FA] border-b border-[#E5E7EB] overflow-hidden"
      data-testid="not-found-page"
    >
      <div className="absolute top-0 left-0 h-full w-px bg-[#1C3172]/40 ml-6 md:ml-12" />
      <div className="max-w-[1440px] mx-auto w-full px-6 md:px-12 pt-40 pb-24">
        <p className="overline text-[#1C3172] mb-8">[ Error 404 ]</p>
        <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl uppercase text-[#1A1A1A] leading-[0.9]">
          <MaskedLines lines={["Nothing to lift"]} start={0.1} />
          <MaskedLines lines={["here."]} start={0.25} lineClassName="text-[#1C3172]" />
        </h1>
        <FadeUp delay={0.6} className="mt-10 max-w-xl">
          <p className="text-[#4A4F5A] text-base md:text-lg leading-relaxed">
            The page you're looking for has moved or never existed. Head back to the home page,
            or give us a call — we're available 24/7.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link
              to="/"
              className="group inline-flex items-center justify-center gap-3 bg-[#1C3172] text-white px-8 py-5 font-mono-plex uppercase tracking-widest text-sm transition-colors duration-300 hover:bg-[#142457]"
            >
              Back to Home
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <a
              href={COMPANY.phoneHref}
              className="inline-flex items-center justify-center gap-3 border border-[#1C3172]/40 text-[#1C3172] px-8 py-5 font-mono-plex uppercase tracking-widest text-sm transition-colors duration-300 hover:bg-[#1C3172] hover:text-white"
            >
              <Phone className="w-4 h-4" /> {COMPANY.phone}
            </a>
          </div>
        </FadeUp>
      </div>
    </section>
  );
};

export default NotFound;
