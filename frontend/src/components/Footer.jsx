import { Link } from "react-router-dom";
import { Phone, Mail, Printer, MapPin, Clock, Facebook, Instagram, Linkedin } from "lucide-react";
import { COMPANY, NAV } from "@/data/site";

export const Footer = () => (
  <footer className="bg-[#1C3172] text-white" data-testid="site-footer">
    <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-16 md:py-20">
      <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1.2fr]">
        {/* Brand */}
        <div>
          <Link to="/" className="inline-flex bg-white rounded-md px-3 py-2" data-testid="footer-logo">
            {/* PLACEHOLDER: white footer logo variant to be supplied */}
            <img src={COMPANY.logo} alt={COMPANY.logoAlt} className="h-12 w-auto object-contain" />
          </Link>
          <p className="mt-6 max-w-sm text-white/70 text-base leading-relaxed">
            Crane and truck rental, rigging, and hauling for Richmond and the Commonwealth of
            Virginia — family-owned and lifting since {COMPANY.since}.
          </p>
          <div className="mt-6 flex items-center gap-3" data-testid="footer-social">
            {/* PLACEHOLDER: social media links */}
            {[Facebook, Instagram, Linkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="social link"
                className="w-10 h-10 grid place-items-center border border-white/25 text-white/75 transition-colors duration-300 hover:bg-white hover:text-[#1C3172] hover:border-white"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Nav */}
        <div>
          <p className="overline text-white/60 mb-6">Sitemap</p>
          <ul className="space-y-3">
            <li>
              <Link to="/" className="text-white/85 hover:text-white transition-colors duration-300 text-sm">
                Home
              </Link>
            </li>
            {NAV.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="text-white/85 hover:text-white transition-colors duration-300 text-sm">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <p className="overline text-white/60 mb-6">Get In Touch</p>
          <ul className="space-y-4 text-sm text-white/85">
            <li>
              <a href={COMPANY.phoneHref} className="flex items-center gap-3 hover:text-white transition-colors duration-300" data-testid="footer-phone">
                <Phone className="w-4 h-4 text-white shrink-0" /> {COMPANY.phone} (24/7)
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Printer className="w-4 h-4 text-white shrink-0" /> Fax: {COMPANY.fax}
            </li>
            <li>
              <a href={`mailto:${COMPANY.email}`} className="flex items-center gap-3 hover:text-white transition-colors duration-300">
                <Mail className="w-4 h-4 text-white shrink-0" /> {COMPANY.email}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-white shrink-0 mt-0.5" /> {COMPANY.address}
            </li>
            <li className="flex items-start gap-3">
              <Clock className="w-4 h-4 text-white shrink-0 mt-0.5" />
              <span>{COMPANY.hoursShort}; Sat–Sun closed</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-16 pt-8 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-mono-plex text-[13px] text-white/60 uppercase tracking-widest">
          © {COMPANY.name}. All Rights Reserved.
        </p>
        <p className="font-mono-plex text-[13px] text-white/60 uppercase tracking-widest">
          We Lift Richmond to New Heights
        </p>
      </div>
    </div>
  </footer>
);
