import { motion } from "framer-motion";

// Fade + rise on scroll into view
export const Reveal = ({ children, delay = 0, y = 40, className = "", ...rest }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    {...rest}
  >
    {children}
  </motion.div>
);

// Fade + rise on page load. Pure CSS so it can never get stuck hidden.
// `delay` is in seconds.
export const FadeUp = ({ children, delay = 0, className = "", as: Tag = "div", ...rest }) => (
  <Tag className={`anim-fade-up ${className}`} style={{ animationDelay: `${delay}s` }} {...rest}>
    {children}
  </Tag>
);

// Masked line-by-line reveal for large display headings, played on page load.
// Pure CSS animation: the text is always visible once the animation finishes,
// even if JavaScript-driven animation is unavailable.
export const MaskedLines = ({ lines = [], className = "", lineClassName = "", start = 0.15 }) => (
  <span className={className}>
    {lines.map((line, i) => (
      <span key={i} className="reveal-mask">
        <span
          className={`block anim-rise ${lineClassName}`}
          style={{ animationDelay: `${start + i * 0.12}s` }}
        >
          {line}
        </span>
      </span>
    ))}
  </span>
);

// Masked reveal that triggers on scroll (for section headings)
export const MaskedLinesInView = ({ lines = [], className = "", lineClassName = "" }) => (
  <span className={className}>
    {lines.map((line, i) => (
      <span key={i} className="reveal-mask">
        <motion.span
          className={`block ${lineClassName}`}
          initial={{ y: "110%" }}
          whileInView={{ y: "0%" }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 1, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          {line}
        </motion.span>
      </span>
    ))}
  </span>
);
