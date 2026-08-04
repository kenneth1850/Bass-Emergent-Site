import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, Clock, Menu, X, ArrowUpRight } from "lucide-react";
import { COMPANY, NAV } from "@/data/site";

const UtilityBar = () => (
  <div className="hidden md:block bg-[#0f0f0f] border-b border-[#1c1c1c]" data-testid="utility-bar">
    <div className="max-w-[1440px] mx-auto px-6 md:px-12 h-10 flex items-center justify-between font-mono-plex text-[11px] text-[#8B8D98]">
      <div className="flex items-center gap-6">
        <a href={COMPANY.phoneHref} className="flex items-center gap-2 hover:text-white transition-colors duration-300" data-testid="utility-phone">
          <Phone className="w-3 h-3 text-[#E3000F]" /> {COMPANY.phone}
        </a>
        <a href={`mailto:${COMPANY.email}`} className="flex items-center gap-2 hover:text-white transition-colors duration-300" data-testid="utility-email">
          <Mail className="w-3 h-3 text-[#E3000F]" /> {COMPANY.email}
        </a>
      </div>
      <div className="flex items-center gap-2 uppercase tracking-widest">
        <Clock className="w-3 h-3 text-[#E3000F]" /> {COMPANY.hours}
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
        className={`transition-colors duration-500 border-b ${
          scrolled
            ? "bg-[#050505]/92 backdrop-blur-xl border-[#2A2A2A]"
            : "bg-transparent border-transparent"
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 h-20 flex items-center justify-between gap-6">
          <Link to="/" className="flex items-center shrink-0" data-testid="header-logo">
            <span className="bg-white rounded-md px-2 py-1.5 flex items-center">
              <img
                src={COMPANY.logo}
                alt={COMPANY.logoAlt}
                className="h-10 w-auto object-contain"
              />
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8" data-testid="desktop-nav">
            {NAV.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                data-testid={`nav-${item.to.replace("/", "")}`}
                className={({ isActive }) =>
                  `font-mono-plex text-xs uppercase tracking-widest transition-colors duration-300 ${
                    isActive ? "text-[#E3000F]" : "text-white/80 hover:text-white"
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
              className="hidden sm:inline-flex items-center gap-2 bg-[#E3000F] text-white px-5 py-3 font-mono-plex text-xs uppercase tracking-widest transition-colors duration-300 hover:bg-white hover:text-[#050505]"
            >
              <Phone className="w-3.5 h-3.5" />
              <span className="hidden xl:inline">Call 24/7:</span> {COMPANY.phone}
            </a>
            <button
              className="lg:hidden text-white p-2"
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
            className="fixed inset-0 z-50 bg-[#050505] lg:hidden flex flex-col"
            data-testid="mobile-menu"
          >
            <div className="flex items-center justify-between h-20 px-6 border-b border-[#2A2A2A]">
              <span className="bg-white rounded-md px-2 py-1.5">
                <img src={COMPANY.logo} alt={COMPANY.logoAlt} className="h-9 w-auto" />
              </span>
              <button onClick={() => setOpen(false)} aria-label="Close menu" data-testid="mobile-menu-close" className="text-white p-2">
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
                    className="group flex items-center justify-between py-5 border-b border-[#1c1c1c]"
                    data-testid={`mobile-nav-${item.to.replace("/", "")}`}
                  >
                    <span className="font-display text-4xl uppercase text-white">{item.label}</span>
                    <ArrowUpRight className="w-6 h-6 text-[#E3000F]" />
                  </NavLink>
                </motion.div>
              ))}
            </nav>
            <div className="p-6 border-t border-[#2A2A2A]">
              <a
                href={COMPANY.phoneHref}
                className="flex items-center justify-center gap-2 bg-[#E3000F] text-white py-4 font-mono-plex uppercase tracking-widest text-sm"
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
