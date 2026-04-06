"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Card from "./Card";

const CARD_WIDTH = 220;
const CARD_GAP = 20;

const hackathons = [
  {
    title: "MongoDB Essentials",
    image:
      "https://storage.googleapis.com/vision-hack2skill-production/innovator/USER00000008/1774606378436-H2SWebinarBanner.webp",
    price: "FREE",
    mode: "VIRTUAL",
    deadline: "Sun Apr 19 2026",
    link: "https://vision.hack2skill.com/event/mongodb-essentials/",
    isActive: true,
  },
  {
    title: "AI Frontier Challenge",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=400",
    price: "$10",
    mode: "HYBRID",
    deadline: "Mon Mar 10 2026",
    link: "#",
    isActive: false,
  },
  {
    title: "Open Source Sprint 2026",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=400",
    price: "FREE",
    mode: "VIRTUAL",
    deadline: "Fri May 2 2026",
    link: "#",
    isActive: true,
  },
  {
    title: "MongoDB Essentials",
    image:
      "https://storage.googleapis.com/vision-hack2skill-production/innovator/USER00000008/1774606378436-H2SWebinarBanner.webp",
    price: "FREE",
    mode: "VIRTUAL",
    deadline: "Sun Apr 19 2026",
    link: "https://vision.hack2skill.com/event/mongodb-essentials/",
    isActive: true,
  },
  {
    title: "Cloud Build Hackathon",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=400",
    price: "FREE",
    mode: "ONLINE",
    deadline: "Tue Jun 10 2026",
    link: "#",
    isActive: true,
  },
];

export default function HackathonSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const leftBtnRef = useRef<HTMLButtonElement>(null);
  const rightBtnRef = useRef<HTMLButtonElement>(null);
  const vantaRef = useRef<HTMLDivElement>(null);
  const vantaEffect = useRef<any>(null);
  const autoTween = useRef<gsap.core.Tween | null>(null);
  const isScrolling = useRef(false);

  // 🎬 Entrance animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".hackathon-card",
        { opacity: 0, y: 40, scale: 0.96 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          stagger: 0.1,
          duration: 0.65,
          ease: "power3.out",
          delay: 0.15,
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  // 🌐 Vanta Topology background
  useEffect(() => {
    const init = async () => {
      try {
        const THREE = await import("three");
        (window as any).THREE = THREE;
        const TOPOLOGY = (await import("vanta/dist/vanta.topology.min")).default;
        if (vantaRef.current && typeof TOPOLOGY === "function") {
          vantaEffect.current = TOPOLOGY({
            el: vantaRef.current,
            THREE,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200,
            minWidth: 200,
            scale: 1,
            scaleMobile: 1,
            color: 9671571,       // matches your URL: color:9671571
            backgroundColor: 0,   // transparent / black base
          });
        }
      } catch (err) {
        console.error("Vanta topology init failed:", err);
      }
    };
    init();
    return () => {
      vantaEffect.current?.destroy();
      vantaEffect.current = null;
    };
  }, []);

  // 🔁 Auto-scroll (infinite loop)
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    const timer = setTimeout(() => {
      const half = el.scrollWidth / 2;
      autoTween.current = gsap.to(el, {
        scrollLeft: half,
        duration: 30,
        ease: "none",
        repeat: -1,
        onRepeat: () => {
          gsap.set(el, { scrollLeft: 0 });
        },
      });
    }, 100);

    return () => {
      clearTimeout(timer);
      autoTween.current?.kill();
    };
  }, []);

  // ⬅️➡️ Manual GSAP scroll
  const scroll = (dir: "left" | "right") => {
    const el = trackRef.current;
    if (!el || isScrolling.current) return;

    isScrolling.current = true;
    autoTween.current?.pause();

    const delta = (CARD_WIDTH + CARD_GAP) * 2 * (dir === "left" ? -1 : 1);

    gsap.to(el, {
      scrollLeft: el.scrollLeft + delta,
      duration: 0.72,
      ease: "power3.inOut",
      onComplete: () => {
        isScrolling.current = false;
        autoTween.current?.resume();
      },
    });
  };

  // Button hover micro-animation
  const onHover = (
    btn: HTMLButtonElement | null,
    enter: boolean,
    dir: "left" | "right"
  ) => {
    if (!btn) return;
    gsap.to(btn, {
      scale: enter ? 1.1 : 1,
      x: enter ? (dir === "left" ? -2 : 2) : 0,
      duration: 0.2,
      ease: "power2.out",
    });
    const icon = btn.querySelector("svg");
    if (icon) {
      gsap.to(icon, {
        x: enter ? (dir === "left" ? -2 : 2) : 0,
        duration: 0.2,
        ease: "power2.out",
      });
    }
  };

  const btnStyle: React.CSSProperties = {
    width: "44px",
    height: "44px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    cursor: "pointer",
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.12)",
    backdropFilter: "blur(16px)",
    WebkitBackdropFilter: "blur(16px)",
    color: "rgba(255,255,255,0.75)",
    boxShadow:
      "0 2px 16px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.07)",
  };

  return (
    <div ref={sectionRef} className="relative w-full pb-6">

      {/* 🌐 Vanta Topology — reduced opacity so it doesn't overpower cards */}
      <div
        ref={vantaRef}
        className="absolute inset-0 -z-10"
        style={{ opacity: 0.45 }}
      />

      {/* Outer layout: [button] [scroller] [button] */}
      <div className="flex items-center gap-4 w-full px-4">

        {/* ← Left Button */}
        <button
          ref={leftBtnRef}
          onClick={() => scroll("left")}
          onMouseEnter={() => onHover(leftBtnRef.current, true, "left")}
          onMouseLeave={() => onHover(leftBtnRef.current, false, "left")}
          style={btnStyle}
          aria-label="Scroll left"
        >
          <ChevronLeft size={18} strokeWidth={2} />
        </button>

        {/* Scrolling track */}
        <div className="relative flex-1 overflow-hidden">
          {/* Left fade */}
          <div
            className="absolute left-0 top-0 h-full w-10 z-10 pointer-events-none"
            style={{ background: "linear-gradient(to right, #050505, transparent)" }}
          />
          {/* Right fade */}
          <div
            className="absolute right-0 top-0 h-full w-10 z-10 pointer-events-none"
            style={{ background: "linear-gradient(to left, #050505, transparent)" }}
          />

          {/* Cards */}
          <div
            ref={trackRef}
            className="flex overflow-hidden py-8"
            style={{ gap: `${CARD_GAP}px` }}
            onMouseEnter={() => autoTween.current?.pause()}
            onMouseLeave={() => autoTween.current?.resume()}
          >
            {[...hackathons, ...hackathons].map((h, i) => (
              <div
                key={i}
                className="hackathon-card flex-shrink-0"
                style={{ width: `${CARD_WIDTH}px` }}
              >
                <Card {...h} />
              </div>
            ))}
          </div>
        </div>

        {/* → Right Button */}
        <button
          ref={rightBtnRef}
          onClick={() => scroll("right")}
          onMouseEnter={() => onHover(rightBtnRef.current, true, "right")}
          onMouseLeave={() => onHover(rightBtnRef.current, false, "right")}
          style={btnStyle}
          aria-label="Scroll right"
        >
          <ChevronRight size={18} strokeWidth={2} />
        </button>

      </div>
    </div>
  );
}
