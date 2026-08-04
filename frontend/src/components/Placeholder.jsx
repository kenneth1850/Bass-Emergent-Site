import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/**
 * Premium gray labeled image placeholder with a blueprint registration frame,
 * corner mono label, and optional parallax on scroll. Light theme.
 * Real photography will replace these later.
 */
export const Placeholder = ({
  label,
  className = "",
  parallax = false,
  index,
  testId,
}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], parallax ? [-30, 30] : [0, 0]);

  return (
    <div
      ref={ref}
      data-testid={testId}
      className={`group relative overflow-hidden bg-[#EEF1F6] border border-[#DDE2EC] ${className}`}
    >
      <div className="placeholder-frame absolute inset-0" />

      {/* Diagonal survey lines */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #1C3172 0, #1C3172 1px, transparent 1px, transparent 14px)",
        }}
      />

      <motion.div
        style={{ y }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <svg
          className="w-16 h-16 text-[#B9C0D0] transition-colors duration-500 group-hover:text-[#1C3172]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
        >
          <rect x="3" y="3" width="18" height="18" />
          <path d="M3 15l5-5 4 4 3-3 6 6" />
          <circle cx="8.5" cy="8.5" r="1.5" />
        </svg>
      </motion.div>

      {typeof index === "string" && (
        <span className="absolute top-4 right-4 font-mono-plex text-sm text-[#9AA3B8]">
          {index}
        </span>
      )}

      <span className="absolute bottom-0 left-0 bg-[#1C3172] px-4 py-2 font-mono-plex text-sm uppercase tracking-widest text-white border-t border-r border-[#1C3172]">
        {label}
      </span>
    </div>
  );
};
