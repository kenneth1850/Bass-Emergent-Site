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

// Shared inner-page hero band (light theme).
export const PageHero = ({ eyebrow, titleLines = [], intro, testId }) => (
  <section
    className="relative pt-44 md:pt-52 pb-16 md:pb-24 bg-[#F7F8FA] border-b border-[#E5E7EB] overflow-hidden"
    data-testid={testId}
  >
    <div className="absolute top-0 left-0 h-full w-px bg-[#1C3172]/40 ml-6 md:ml-12" />
    <div className="max-w-[1440px] mx-auto px-6 md:px-12">
      <nav className="font-mono-plex text-sm uppercase tracking-widest text-[#5B6270] mb-8">
        <Link to="/" className="hover:text-[#1C3172] transition-colors duration-300">Home</Link>
        <span className="mx-2 text-[#1C3172]">/</span>
        <span className="text-[#1A1A1A]">{eyebrow}</span>
      </nav>
      <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl uppercase text-[#1A1A1A] max-w-5xl">
        <MaskedLines lines={titleLines} />
      </h1>
      {intro && (
        <p className="mt-8 max-w-2xl text-[#5B6270] text-base md:text-lg leading-relaxed">
          {intro}
        </p>
      )}
    </div>
  </section>
);
