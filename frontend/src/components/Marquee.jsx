export const Marquee = ({ items = [], speed = "normal", className = "" }) => {
  const anim = speed === "fast" ? "animate-marquee-fast" : "animate-marquee";
  const doubled = [...items, ...items];
  return (
    <div className={`relative flex overflow-hidden select-none ${className}`}>
      <div className={`flex shrink-0 whitespace-nowrap ${anim}`}>
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center">
            <span>{item}</span>
            <span className="mx-8 text-[#1C3172]">/</span>
          </span>
        ))}
      </div>
    </div>
  );
};
