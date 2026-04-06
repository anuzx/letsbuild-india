"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import Card from "./Card";

const hackathons = [
  {
    title: "MongoDB Essentials",
    image:
      "https://storage.googleapis.com/vision-hack2skill-production/innovator/USER00000008/1774606378436-H2SWebinarBanner.webp",
    price: "FREE",
    mode: "VIRTUAL",
    deadline: "Sun Apr 19 2026",
    link: "https://vision.hack2skill.com/event/mongodb-essentials/",
  }, {
    title: "MongoDB Essentials",
    image:
      "https://storage.googleapis.com/vision-hack2skill-production/innovator/USER00000008/1774606378436-H2SWebinarBanner.webp",
    price: "FREE",
    mode: "VIRTUAL",
    deadline: "Sun Apr 19 2026",
    link: "https://vision.hack2skill.com/event/mongodb-essentials/",
  }, {
    title: "MongoDB Essentials",
    image:
      "https://storage.googleapis.com/vision-hack2skill-production/innovator/USER00000008/1774606378436-H2SWebinarBanner.webp",
    price: "FREE",
    mode: "VIRTUAL",
    deadline: "Sun Apr 19 2026",
    link: "https://vision.hack2skill.com/event/mongodb-essentials/",
  }, {
    title: "MongoDB Essentials",
    image:
      "https://storage.googleapis.com/vision-hack2skill-production/innovator/USER00000008/1774606378436-H2SWebinarBanner.webp",
    price: "FREE",
    mode: "VIRTUAL",
    deadline: "Sun Apr 19 2026",
    link: "https://vision.hack2skill.com/event/mongodb-essentials/",
  }, {
    title: "MongoDB Essentials",
    image:
      "https://storage.googleapis.com/vision-hack2skill-production/innovator/USER00000008/1774606378436-H2SWebinarBanner.webp",
    price: "FREE",
    mode: "VIRTUAL",
    deadline: "Sun Apr 19 2026",
    link: "https://vision.hack2skill.com/event/mongodb-essentials/",
  },
  // keep rest same...
];

export default function HackathonSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const leftBtnRef = useRef<HTMLButtonElement>(null);
  const rightBtnRef = useRef<HTMLButtonElement>(null);

  const vantaRef = useRef<HTMLDivElement>(null);
  const vantaEffect = useRef<any>(null);

  const autoTween = useRef<gsap.core.Tween | null>(null);

  // 🎬 GSAP entrance
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".hackathon-card",
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.12,
          duration: 0.7,
          ease: "power3.out",
          delay: 0.2,
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);
  console.log("Vanta mounted", vantaRef.current);
  // 🌫️ VANTA
  useEffect(() => {
    let effect: any;

    const init = async () => {
      try {
        const THREE = await import("three");
        (window as any).THREE = THREE;
        const TRUNK = (await import("vanta/dist/vanta.trunk.min")).default;

        if (vantaRef.current && typeof TRUNK === "function") {
          effect = TRUNK({
            el: vantaRef.current,
            THREE: THREE,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200,
            minWidth: 200,
            scale: 1,
            scaleMobile: 1,
            color: 0x6b7280,
            backgroundColor: 0x050505,
            spacing: 6,
          });
          vantaEffect.current = effect;
        }
      } catch (err) {
        console.error("Vanta initialization failed:", err);
      }
    };

    init();

    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
        vantaEffect.current = null;
      }
    };
  }, []);

  // 🔁 AUTO SCROLL
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const totalWidth = el.scrollWidth / 2;

    autoTween.current = gsap.to(el, {
      scrollLeft: totalWidth,
      duration: 25,
      ease: "none",
      repeat: -1,
    });

    return () => {
      autoTween.current?.kill();
    };
  }, []);

  // ⬅️➡️ Manual scroll
  const scroll = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;

    autoTween.current?.pause();

    const amount = dir === "left" ? -320 : 320;

    gsap.to(el, {
      scrollLeft: el.scrollLeft + amount,
      duration: 0.6,
      ease: "power3.inOut",
      onComplete: () => autoTween.current?.resume() as any,
    });
  };

  const handleHover = (btn: HTMLButtonElement | null, enter: boolean) => {
    if (!btn) return;
    gsap.to(btn, { scale: enter ? 1.1 : 1, duration: 0.2 });
  };

  return (
    <div
      ref={sectionRef}
      className="relative w-full pb-24 overflow-hidden"
    >
      {/* 🌫️ Vanta */}
      <div
        ref={vantaRef}
        className="absolute top-0 left-0 w-full h-full -z-10"
      />



      {/* 🚀 FULL WIDTH SCROLLER */}
      <div className="relative w-screen left-1/2 -translate-x-1/2">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 h-full w-32 z-10 pointer-events-none bg-gradient-to-r from-[#050505] to-transparent" />
        <div className="absolute right-0 top-0 h-full w-32 z-10 pointer-events-none bg-gradient-to-l from-[#050505] to-transparent" />

        {/* Arrows */}
        <button
          ref={leftBtnRef}
          onClick={() => scroll("left")}
          onMouseEnter={() => handleHover(leftBtnRef.current, true)}
          onMouseLeave={() => handleHover(leftBtnRef.current, false)}
          className="absolute left-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/10 border border-white/20 text-white backdrop-blur"
        >
          ‹
        </button>

        <button
          ref={rightBtnRef}
          onClick={() => scroll("right")}
          onMouseEnter={() => handleHover(rightBtnRef.current, true)}
          onMouseLeave={() => handleHover(rightBtnRef.current, false)}
          className="absolute right-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/10 border border-white/20 text-white backdrop-blur"
        >
          ›
        </button>

        {/* Cards */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-hidden py-10 px-8"
          onMouseEnter={() => autoTween.current?.pause()}
          onMouseLeave={() => autoTween.current?.resume()}
        >
          {[...hackathons, ...hackathons].map((h, i) => (
            <div
              key={i}
              className="hackathon-card flex-shrink-0 w-64"
            >
              <Card {...h} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
