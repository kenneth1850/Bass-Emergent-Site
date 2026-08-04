import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, Clock, Menu, X, ArrowUpRight } from "lucide-react";
import { COMPANY, NAV } from "@/data/site";

const UtilityBar = () => (
  <div className="hidden md:block bg-[#1C3172] text-white" data-testid="utility-bar">
    <div className="max-w-[1440px] mx-auto px-6 md:px-12 h-10 flex items-center justify-between font-mono-plex text-sm text-white/85">
      <div className="flex items-center gap-6">
        <a href={COMPANY.phoneHref} className="flex items-center gap-2 hover:text-white transition-colors duration-300" data-testid="utility-phone">
          <Phone className="w-3 h-3 text-white" /> {COMPANY.phone}
        </a>
        <a href={`mailto:${COMPANY.email}`} className="flex items-center gap-2 hover:text-white transition-colors duration-300" data-testid="utility-email">
          <Mail className="w-3 h-3 text-white" /> {COMPANY.email}
        </a>
      </div>
      <div className="flex items-center gap-2 uppercase tracking-widest">
        <Clock className="w-3 h-3 text-white" /> {COMPANY.hours}
      </div>
    </div>
  </div>
);

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  return (
    <header className="fixed top-0 inset-x-0 z-50" data-testid="site-header">
      <UtilityBar />
      <div
        className={`bg-white transition-shadow duration-500 border-b ${
          scrolled ? "shadow-[0_1px_20px_rgba(16,24,40,0.08)] border-[#E5E7EB]" : "border-[#EEF0F4]"
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 h-20 flex items-center justify-between gap-6">
          <Link to="/" className="flex items-center shrink-0" data-testid="header-logo">
            <img
              src={COMPANY.logo}
              alt={COMPANY.logoAlt}
              className="h-11 w-auto object-contain"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-8" data-testid="desktop-nav">
            {NAV.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                data-testid={`nav-${item.to.replace("/", "")}`}
                className={({ isActive }) =>
                  `font-mono-plex text-sm uppercase tracking-widest transition-colors duration-300 ${
                    isActive ? "text-[#1C3172]" : "text-[#1A1A1A]/70 hover:text-[#1C3172]"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={COMPANY.phoneHref}
              data-testid="header-call-btn"
              className="hidden sm:inline-flex items-center gap-2 bg-[#1C3172] text-white px-5 py-3 font-mono-plex text-sm uppercase tracking-widest transition-colors duration-300 hover:bg-[#142457]"
            >
              <Phone className="w-3.5 h-3.5" />
              <span className="hidden xl:inline">Call 24/7:</span> {COMPANY.phone}
            </a>
            <button
              className="lg:hidden text-[#1A1A1A] p-2"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              data-testid="mobile-menu-open"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-white lg:hidden flex flex-col"
            data-testid="mobile-menu"
          >
            <div className="flex items-center justify-between h-20 px-6 border-b border-[#E5E7EB]">
              <img src={COMPANY.logo} alt={COMPANY.logoAlt} className="h-10 w-auto" />
              <button onClick={() => setOpen(false)} aria-label="Close menu" data-testid="mobile-menu-close" className="text-[#1A1A1A] p-2">
                <X className="w-7 h-7" />
              </button>
            </div>
            <nav className="flex-1 flex flex-col justify-center px-6">
              {NAV.map((item, i) => (
                <motion.div
                  key={item.to}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i + 0.1 }}
                >
                  <NavLink
                    to={item.to}
                    className="group flex items-center justify-between py-5 border-b border-[#EEF0F4]"
                    data-testid={`mobile-nav-${item.to.replace("/", "")}`}
                  >
                    <span className="font-display text-4xl uppercase text-[#1A1A1A]">{item.label}</span>
                    <ArrowUpRight className="w-6 h-6 text-[#1C3172]" />
                  </NavLink>
                </motion.div>
              ))}
            </nav>
            <div className="p-6 border-t border-[#E5E7EB]">
              <a
                href={COMPANY.phoneHref}
                className="flex items-center justify-center gap-2 bg-[#1C3172] text-white py-4 font-mono-plex uppercase tracking-widest text-sm"
              >
                <Phone className="w-4 h-4" /> Call 24/7: {COMPANY.phone}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
