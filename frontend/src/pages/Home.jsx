import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Construction, Truck, Anchor, Container, PackageOpen, Warehouse,
  ArrowRight, ArrowUpRight, ShieldCheck,
} from "lucide-react";
import { COMPANY, SERVICES } from "@/data/site";
import { MaskedLines, Reveal, MaskedLinesInView } from "@/components/Reveal";
import { Placeholder } from "@/components/Placeholder";
import { Marquee } from "@/components/Marquee";
import { CTABand } from "@/components/CTABand";
import { usePageMeta } from "@/components/PageHero";

const ICONS = {
  "crane-rental": Construction,
  "boom-trucks": Truck,
  "rigging-hauling": Anchor,
  "truck-rental": Container,
  "delivery-offloading": PackageOpen,
  storage: Warehouse,
};

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen flex flex-col justify-end overflow-hidden bg-white" data-testid="home-hero">
      {/* PLACEHOLDER: hero — crane against Richmond skyline */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_25%,#F1F4FA,transparent_55%)]" />
        <motion.div style={{ y }} className="absolute right-6 md:right-12 top-1/4 hidden md:block">
          <span className="font-mono-plex text-[11px] uppercase tracking-widest text-[#AEB5C4] [writing-mode:vertical-rl]">
            PLACEHOLDER: HERO — CRANE AGAINST RICHMOND SKYLINE
          </span>
        </motion.div>
      </div>

      <motion.div style={{ opacity }} className="relative max-w-[1440px] mx-auto w-full px-6 md:px-12 pb-24 md:pb-28 pt-40">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="overline text-[#1C3172] mb-8 flex items-center gap-3"
        >
          <span className="w-10 h-px bg-[#1C3172]" /> Since {COMPANY.since} · Richmond, VA
        </motion.p>

        <h1 className="text-[15vw] sm:text-[13vw] md:text-[11vw] lg:text-[9.5vw] leading-[0.9] uppercase">
          <MaskedLines lines={["We Lift Richmond"]} start={0.2} lineClassName="text-[#1A1A1A]" />
          <MaskedLines lines={["To New Heights"]} start={0.35} lineClassName="text-[#1C3172]" />
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.7 }}
          className="mt-10 grid gap-8 md:grid-cols-[1fr_auto] md:items-end"
        >
          <p className="max-w-xl text-[#4A4F5A] text-base md:text-lg leading-relaxed">
            Crane and truck rental, rigging, and hauling — done right, every time, for over 100 years.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/contact" data-testid="hero-book-btn" className="group inline-flex items-center justify-center gap-3 bg-[#1C3172] text-white px-8 py-5 font-mono-plex uppercase tracking-widest text-sm transition-colors duration-300 hover:bg-[#142457]">
              Book a Crane or Truck
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link to="/services" data-testid="hero-services-btn" className="group inline-flex items-center justify-center gap-3 border border-[#1C3172]/40 text-[#1C3172] px-8 py-5 font-mono-plex uppercase tracking-widest text-sm transition-colors duration-300 hover:bg-[#1C3172] hover:text-white">
              See Our Services
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </motion.div>

      <div className="relative border-y border-[#E5E7EB] bg-[#F7F8FA]">
        <Marquee
          className="py-4 font-mono-plex uppercase tracking-[0.2em] text-sm text-[#1A1A1A]/70"
          items={["30-Ton to 160-Ton Cranes", "CCO Certified Operators", "Rigging & Hauling", "24/7 Dispatch", "Family-Owned Since 1913", "Commonwealth of Virginia"]}
        />
      </div>
    </section>
  );
};

const Home = () => {
  usePageMeta(
    "Bass Crane Service, LLC | Crane & Truck Rental in Richmond, VA",
    "Family-owned crane and truck rental, rigging, and hauling in Richmond, VA since 1913. CCO certified operators, cranes 30–160 ton. Call 24/7: 804-233-0113."
  );

  return (
    <div data-testid="home-page">
      <Hero />

      {/* Intro */}
      <section className="bg-white border-b border-[#E5E7EB]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-24 md:py-36 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="overline text-[#1C3172] mb-6">[ Since {COMPANY.since} ]</p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl uppercase text-[#1A1A1A] leading-[0.95]">
                <MaskedLinesInView lines={["Three", "Generations of", "Lifting Richmond", "Higher"]} lineClassName="inline" />
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 flex flex-col justify-end">
            <Reveal delay={0.15}>
              <p className="text-[#2B2F38] text-lg md:text-xl leading-relaxed">
                Bass Crane Service has been providing crane and truck rental services to Richmond and
                the surrounding areas for 3 generations. Our family business has been in and around
                construction since 1913.
              </p>
              <p className="mt-6 text-[#5B6270] text-base leading-relaxed">
                Whatever your project requires, our experienced operators and knowledgeable staff will
                make sure your job is done correctly and safely.
              </p>
              <Link to="/about" data-testid="intro-learn-more" className="group mt-8 inline-flex items-center gap-3 font-mono-plex uppercase tracking-widest text-sm text-[#1C3172] hover:text-[#2A4FB0] transition-colors duration-300">
                Learn More
                <span className="w-8 h-px bg-current transition-all duration-300 group-hover:w-12" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="bg-white border-b border-[#E5E7EB]" data-testid="home-services">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 pt-24 md:pt-32">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <h2 className="text-4xl md:text-6xl uppercase text-[#1A1A1A]">
              <MaskedLinesInView lines={["What We Lift"]} />
            </h2>
            <p className="max-w-md text-[#5B6270]">
              The right machine for every technical requirement — residential to commercial, across
              the Commonwealth of Virginia.
            </p>
          </div>
        </div>
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 grid sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-[#E5E7EB]">
          {SERVICES.map((s, i) => {
            const Icon = ICONS[s.id];
            return (
              <Reveal key={s.id} delay={(i % 3) * 0.08}>
                <Link
                  to="/services"
                  data-testid={`service-card-${s.id}`}
                  className="group relative flex flex-col h-full p-8 md:p-10 border-r border-b border-[#E5E7EB] bg-white transition-colors duration-500 hover:bg-[#F7F8FA]"
                >
                  <div className="flex items-center justify-between mb-16">
                    <Icon className="w-8 h-8 text-[#1C3172]" strokeWidth={1.5} />
                    <span className="font-mono-plex text-xs text-[#AEB5C4]">{s.num}</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl uppercase text-[#1A1A1A] mb-4">{s.title}</h3>
                  <p className="text-[#5B6270] text-sm leading-relaxed flex-1">{s.short}</p>
                  <span className="mt-8 inline-flex items-center gap-2 font-mono-plex uppercase tracking-widest text-xs text-[#5B6270] group-hover:text-[#1C3172] transition-colors duration-300">
                    Explore
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </div>
        <div className="h-24 md:h-32" />
      </section>

      {/* Trust band */}
      <section className="bg-[#F7F8FA] border-b border-[#E5E7EB]" data-testid="home-trust">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-20">
          <Reveal className="flex flex-col lg:flex-row items-start lg:items-center gap-8 mb-12">
            <ShieldCheck className="w-12 h-12 text-[#1C3172] shrink-0" strokeWidth={1.25} />
            <div>
              <p className="overline text-[#1C3172] mb-3">Certified & Safe</p>
              <h3 className="text-2xl md:text-4xl uppercase text-[#1A1A1A] max-w-3xl">
                CCO Certified Crane Operators — the most recognized certification by OSHA.
              </h3>
            </div>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((n) => (
              <Reveal key={n} delay={n * 0.06}>
                <div className="h-24 bg-white border border-dashed border-[#CBD2DE] grid place-items-center">
                  <span className="font-mono-plex text-[10px] uppercase tracking-widest text-[#9AA3B8] text-center px-2">
                    PLACEHOLDER: ASSOCIATION / CERTIFICATION LOGO
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Projects teaser */}
      <section className="bg-white border-b border-[#E5E7EB]" data-testid="home-projects-teaser">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-24 md:py-32">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <h2 className="text-4xl md:text-6xl uppercase text-[#1A1A1A] max-w-3xl">
              <MaskedLinesInView lines={["Proven Performance on", "Richmond's Toughest Jobs"]} />
            </h2>
            <Link to="/projects" data-testid="teaser-view-projects" className="group inline-flex items-center gap-3 font-mono-plex uppercase tracking-widest text-sm text-[#1C3172] hover:text-[#2A4FB0] transition-colors duration-300 shrink-0">
              View Our Projects
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <Placeholder label="PLACEHOLDER: PROJECT PHOTO — DOWNTOWN STEEL SET" className="aspect-[4/3]" parallax index="A-01" testId="teaser-project-1" />
            <Placeholder label="PLACEHOLDER: PROJECT PHOTO — 160-TON COMMERCIAL LIFT" className="aspect-[4/3] md:mt-16" parallax index="A-02" testId="teaser-project-2" />
          </div>
        </div>
      </section>

      <CTABand
        heading="Need a Lift?"
        sub={`Call us anytime — 24/7 — to schedule a crane or truck. ${COMPANY.phone}`}
      />
    </div>
  );
};

export default Home;
