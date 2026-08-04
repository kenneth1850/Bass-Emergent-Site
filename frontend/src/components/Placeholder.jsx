import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/**
 * Premium gray labeled image placeholder with a blueprint registration frame,
 * corner mono label, and optional parallax on scroll.
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
      className={`group relative overflow-hidden bg-[#141414] border border-[#2A2A2A] ${className}`}
    >
      <div className="placeholder-frame absolute inset-0" />

      {/* Diagonal survey lines */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #ffffff 0, #ffffff 1px, transparent 1px, transparent 14px)",
        }}
      />

      <motion.div
        style={{ y }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <svg
          className="w-16 h-16 text-[#3a3a3a] transition-colors duration-500 group-hover:text-[#E3000F]"
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
        <span className="absolute top-4 right-4 font-mono-plex text-xs text-[#4a4a4a]">
          {index}
        </span>
      )}

      <span className="absolute bottom-0 left-0 bg-black px-4 py-2 font-mono-plex text-[10px] sm:text-xs uppercase tracking-widest text-white/80 border-t border-r border-[#2A2A2A]">
        {label}
      </span>
    </div>
  );
};
