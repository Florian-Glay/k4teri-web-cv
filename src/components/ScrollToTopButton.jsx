import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react"; // npm i lucide-react

export default function ScrollToTopButton() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 240);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <button
      aria-label="Revenir en haut"
      onClick={scrollToTop}
      id="scrolltop"
      data-visible={show ? "true" : "false"}
      className={[
        "fixed z-[1000]",
        // safe area iOS
        "right-6 bottom-[calc(env(safe-area-inset-bottom,0px)+1.25rem)]",
        // visibilité + anim
        show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3 pointer-events-none",
        "transition-all duration-300",
        // taille & style
        "h-16 w-16 rounded-full",
        "bg-gradient-to-br from-accent to-fuchsia-600",
        "text-white shadow-[0_12px_30px_rgba(124,58,237,.6)]",
        "ring-2 ring-white/20 backdrop-blur-md",
        "flex items-center justify-center",
        "hover:scale-105 hover:shadow-[0_14px_36px_rgba(124,58,237,.75)]",
        "focus:outline-none focus:ring-4 focus:ring-fuchsia-400/30"
      ].join(" ")}
    >
      <ArrowUp size={30} className="drop-shadow-[0_2px_6px_rgba(0,0,0,.45)]" />
      {/* Tooltip */}
      <span className="absolute -top-8 px-2 py-0.5 rounded-md text-xs bg-black/70 text-white opacity-0 group-hover:opacity-100 pointer-events-none">
        Haut
      </span>
    </button>
  );
}
