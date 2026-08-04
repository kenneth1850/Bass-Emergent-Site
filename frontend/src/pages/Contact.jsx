import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { Phone, Printer, Mail, MapPin, Clock, ArrowRight, Loader2 } from "lucide-react";
import { COMPANY } from "@/data/site";
import { Reveal, MaskedLines } from "@/components/Reveal";
import { usePageMeta } from "@/components/PageHero";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const initial = { first_name: "", last_name: "", email: "", phone: "", comment: "" };

const Field = ({ label, name, value, onChange, type = "text", required, testId, textarea }) => (
  <label className="block">
    <span className="font-mono-plex text-[11px] uppercase tracking-widest text-[#5B6270]">
      {label} {required && <span className="text-[#1C3172]">*</span>}
    </span>
    {textarea ? (
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        rows={5}
        data-testid={testId}
        className="mt-2 w-full bg-white border border-[#D7DCE6] px-4 py-3 text-[#1A1A1A] placeholder-[#9AA3B8] outline-none transition-colors duration-300 focus:border-[#1C3172] resize-none"
      />
    ) : (
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        data-testid={testId}
        className="mt-2 w-full bg-white border border-[#D7DCE6] px-4 py-3 text-[#1A1A1A] placeholder-[#9AA3B8] outline-none transition-colors duration-300 focus:border-[#1C3172]"
      />
    )}
  </label>
);

const Contact = () => {
  usePageMeta(
    "Contact | Book a Crane or Truck | Bass Crane Service, Richmond VA",
    "Need a lift? Contact Bass Crane Service. Call 24/7 at 804-233-0113 to schedule a crane or truck. 1004 Holly Spring Ave., Richmond, VA 23224."
  );

  const [form, setForm] = useState(initial);
  const [loading, setLoading] = useState(false);

  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post(`${API}/contact`, form);
      toast.success("Message sent! We'll be in touch shortly. For urgent jobs, call 804-233-0113.");
      setForm(initial);
    } catch (err) {
      toast.error("Something went wrong. Please call us at 804-233-0113.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div data-testid="contact-page">
      {/* Split hero */}
      <section className="pt-36 md:pt-44 bg-[#F7F8FA] border-b border-[#E5E7EB]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 pb-16">
          <p className="overline text-[#1C3172] mb-6">[ Contact ]</p>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl uppercase">
            <MaskedLines lines={["Need a Lift?"]} lineClassName="text-[#1A1A1A]" />
            <MaskedLines lines={["Contact Us!"]} start={0.25} lineClassName="text-[#1C3172]" />
          </h1>
        </div>
      </section>

      <section className="bg-white border-b border-[#E5E7EB]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-16 md:py-24 grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left: info + booking */}
          <div>
            <Reveal>
              <p className="overline text-[#1C3172] mb-4">[ Book a Crane or Truck ]</p>
              <p className="text-[#2B2F38] text-lg leading-relaxed max-w-lg">
                Call us anytime, 24/7, to schedule a crane or truck for your project. We're always
                ready to serve our customers!
              </p>
              <a
                href={COMPANY.phoneHref}
                data-testid="contact-call-big"
                className="group mt-10 flex items-center gap-4 text-[#1A1A1A] hover:text-[#1C3172] transition-colors duration-300"
              >
                <span className="w-14 h-14 grid place-items-center border border-[#D7DCE6] group-hover:border-[#1C3172] transition-colors duration-300">
                  <Phone className="w-6 h-6" />
                </span>
                <span className="font-display text-4xl md:text-5xl uppercase">{COMPANY.phone}</span>
              </a>
            </Reveal>

            <Reveal delay={0.1}>
              <ul className="mt-12 space-y-5 text-[#2B2F38]">
                <li className="flex items-center gap-4">
                  <Printer className="w-5 h-5 text-[#1C3172] shrink-0" /> Fax: {COMPANY.fax}
                </li>
                <li className="flex items-center gap-4">
                  <Mail className="w-5 h-5 text-[#1C3172] shrink-0" />
                  <a href={`mailto:${COMPANY.email}`} className="hover:text-[#1C3172] transition-colors duration-300">{COMPANY.email}</a>
                </li>
                <li className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-[#1C3172] shrink-0 mt-1" />
                  <span>{COMPANY.addressLine1}<br />{COMPANY.addressLine2}</span>
                </li>
                <li className="flex items-start gap-4">
                  <Clock className="w-5 h-5 text-[#1C3172] shrink-0 mt-1" />
                  <span>{COMPANY.hours}<br /><span className="text-[#5B6270]">Phone answered 24/7 for scheduling</span></span>
                </li>
              </ul>
            </Reveal>
          </div>

          {/* Right: form */}
          <Reveal delay={0.15}>
            <div className="bg-[#F7F8FA] border border-[#E5E7EB] p-8 md:p-10">
              {/* Wire form submissions to company email once confirmed */}
              <h2 className="text-2xl md:text-3xl uppercase text-[#1A1A1A] mb-8">Send Us a Message</h2>
              <form onSubmit={onSubmit} className="space-y-6" data-testid="contact-form">
                <div className="grid sm:grid-cols-2 gap-6">
                  <Field label="First Name" name="first_name" value={form.first_name} onChange={onChange} required testId="contact-first-name" />
                  <Field label="Last Name" name="last_name" value={form.last_name} onChange={onChange} required testId="contact-last-name" />
                </div>
                <Field label="Email" name="email" type="email" value={form.email} onChange={onChange} required testId="contact-email" />
                <Field label="Phone" name="phone" type="tel" value={form.phone} onChange={onChange} testId="contact-phone" />
                <Field label="Comment / Question" name="comment" value={form.comment} onChange={onChange} textarea testId="contact-comment" />
                <button
                  type="submit"
                  disabled={loading}
                  data-testid="contact-submit"
                  className="group w-full inline-flex items-center justify-center gap-3 bg-[#1C3172] text-white px-8 py-5 font-mono-plex uppercase tracking-widest text-sm transition-colors duration-300 hover:bg-[#142457] disabled:opacity-60"
                >
                  {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <>Send <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" /></>}
                </button>
              </form>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Map */}
      <section data-testid="contact-map" className="bg-white border-b border-[#E5E7EB]">
        <div className="flex items-center gap-4 max-w-[1440px] mx-auto px-6 md:px-12 py-6">
          <MapPin className="w-4 h-4 text-[#1C3172]" />
          <span className="font-mono-plex text-xs uppercase tracking-widest text-[#5B6270]">{COMPANY.address}</span>
        </div>
        <iframe
          title="Bass Crane Service location map"
          src={COMPANY.mapEmbed}
          className="w-full h-[420px] border-t border-[#E5E7EB]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </div>
  );
};

export default Contact;
