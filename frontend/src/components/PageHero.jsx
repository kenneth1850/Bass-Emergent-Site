import { useEffect } from "react";
import { MaskedLines } from "@/components/Reveal";
import { Link } from "react-router-dom";

// Sets document title + meta description for SEO per page.
export const usePageMeta = (title, description) => {
  useEffect(() => {
    document.title = title;
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", description || "");
  }, [title, description]);
};

// Shared inner-page hero band.
export const PageHero = ({ eyebrow, titleLines = [], intro, testId }) => (
  <section
    className="relative pt-44 md:pt-52 pb-16 md:pb-24 blueprint-grid border-b border-[#1c1c1c] overflow-hidden"
    data-testid={testId}
  >
    <div className="absolute top-0 left-0 h-full w-px bg-[#E3000F]/40 ml-6 md:ml-12" />
    <div className="max-w-[1440px] mx-auto px-6 md:px-12">
      <nav className="font-mono-plex text-[11px] uppercase tracking-widest text-[#8B8D98] mb-8">
        <Link to="/" className="hover:text-white transition-colors duration-300">Home</Link>
        <span className="mx-2 text-[#E3000F]">/</span>
        <span className="text-white">{eyebrow}</span>
      </nav>
      <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl uppercase text-white max-w-5xl">
        <MaskedLines lines={titleLines} />
      </h1>
      {intro && (
        <p className="mt-8 max-w-2xl text-[#8B8D98] text-base md:text-lg leading-relaxed">
          {intro}
        </p>
      )}
    </div>
  </section>
);
