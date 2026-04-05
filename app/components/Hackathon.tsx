"use client";

import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import Card from "./Card";

const hackathons = [
  {
    title: "MongoDB Essentials",
    image: "https://storage.googleapis.com/vision-hack2skill-production/innovator/USER00000008/1774606378436-H2SWebinarBanner.webp",
    price: "FREE",
    mode: "VIRTUAL",
    deadline: "Sun Apr 19 2026",
    link: "https://vision.hack2skill.com/event/mongodb-essentials/",
  },
  {
    title: "MongoDB Essentials",
    image: "https://storage.googleapis.com/vision-hack2skill-production/innovator/USER00000008/1774606378436-H2SWebinarBanner.webp",
    price: "FREE",
    mode: "VIRTUAL",
    deadline: "Sun Apr 19 2026",
    link: "https://vision.hack2skill.com/event/mongodb-essentials/",
  },
  {
    title: "MongoDB Essentials",
    image: "https://storage.googleapis.com/vision-hack2skill-production/innovator/USER00000008/1774606378436-H2SWebinarBanner.webp",
    price: "FREE",
    mode: "VIRTUAL",
    deadline: "Sun Apr 19 2026",
    link: "https://vision.hack2skill.com/event/mongodb-essentials/",
  },
  {
    title: "MongoDB Essentials",
    image: "https://storage.googleapis.com/vision-hack2skill-production/innovator/USER00000008/1774606378436-H2SWebinarBanner.webp",
    price: "FREE",
    mode: "VIRTUAL",
    deadline: "Sun Apr 19 2026",
    link: "https://vision.hack2skill.com/event/mongodb-essentials/",
  }, {
    title: "MongoDB Essentials",
    image: "https://storage.googleapis.com/vision-hack2skill-production/innovator/USER00000008/1774606378436-H2SWebinarBanner.webp",
    price: "FREE",
    mode: "VIRTUAL",
    deadline: "Sun Apr 19 2026",
    link: "https://vision.hack2skill.com/event/mongodb-essentials/",
  }, {
    title: "MongoDB Essentials",
    image: "https://storage.googleapis.com/vision-hack2skill-production/innovator/USER00000008/1774606378436-H2SWebinarBanner.webp",
    price: "FREE",
    mode: "VIRTUAL",
    deadline: "Sun Apr 19 2026",
    link: "https://vision.hack2skill.com/event/mongodb-essentials/",
  }, {
    title: "MongoDB Essentials",
    image: "https://storage.googleapis.com/vision-hack2skill-production/innovator/USER00000008/1774606378436-H2SWebinarBanner.webp",
    price: "FREE",
    mode: "VIRTUAL",
    deadline: "Sun Apr 19 2026",
    link: "https://vision.hack2skill.com/event/mongodb-essentials/",
  }, {
    title: "MongoDB Essentials",
    image: "https://storage.googleapis.com/vision-hack2skill-production/innovator/USER00000008/1774606378436-H2SWebinarBanner.webp",
    price: "FREE",
    mode: "VIRTUAL",
    deadline: "Sun Apr 19 2026",
    link: "https://vision.hack2skill.com/event/mongodb-essentials/",
  },
];

export default function HackathonSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const leftBtnRef = useRef<HTMLButtonElement>(null);
  const rightBtnRef = useRef<HTMLButtonElement>(null);

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Entrance animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.9, ease: "power3.out", delay: 0.1 }
      );

      gsap.fromTo(
        ".hackathon-card",
        { opacity: 0, y: 60, scale: 0.95 },
        {
          opacity: 1, y: 0, scale: 1,
          duration: 0.7, ease: "power3.out",
          stagger: 0.12, delay: 0.3,
        }
      );

      gsap.fromTo(
        [leftBtnRef.current, rightBtnRef.current],
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.5, ease: "back.out(1.7)", delay: 0.6 }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Track scroll position for arrow visibility
  const updateScrollState = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateScrollState);
    updateScrollState();
    return () => el.removeEventListener("scroll", updateScrollState);
  }, []);

  // GSAP-powered smooth scroll
  const scroll = (direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const target = { value: el.scrollLeft };
    const newScroll = direction === "left"
      ? el.scrollLeft - 320
      : el.scrollLeft + 320;

    gsap.to(target, {
      value: newScroll,
      duration: 0.65,
      ease: "power3.inOut",
      onUpdate: () => { el.scrollLeft = target.value; },
    });
  };

  // Button hover via GSAP
  const handleBtnHover = (btn: HTMLButtonElement | null, enter: boolean) => {
    if (!btn) return;
    gsap.to(btn, {
      scale: enter ? 1.12 : 1,
      duration: 0.25,
      ease: "power2.out",
    });
  };

  return (
    <section
      ref={sectionRef}
      id="hackathon"
      className="w-full py-24 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #0a0a0f 0%, #0f0f1a 100%)" }}
    >
      <div className="max-w-7xl mx-auto px-8">

        {/* Heading */}
        <div ref={headingRef} className="flex flex-col items-center mb-16" style={{ opacity: 0 }}>
          <p
            className="text-xs font-semibold tracking-[0.3em] uppercase mb-3"
            style={{ color: "rgba(255,255,255,0.35)" }}
          >
            Upcoming Events
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold text-center"
            style={{ color: "#ffffff", letterSpacing: "-0.03em" }}
          >
            Hackathons
          </h2>
          <div
            className="mt-4 h-[2px] w-16 rounded-full"
            style={{ background: "rgba(255,255,255,0.2)" }}
          />
        </div>

        {/* Scroll area */}
        <div className="relative">

          {/* Left fade edge */}
          <div
            className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none"
            style={{
              background: "linear-gradient(to right, #0a0a0f, transparent)",
              opacity: canScrollLeft ? 1 : 0,
              transition: "opacity 0.4s ease",
            }}
          />

          {/* Right fade edge */}
          <div
            className="absolute right-0 top-0 h-full w-20 z-10 pointer-events-none"
            style={{
              background: "linear-gradient(to left, #0f0f1a, transparent)",
              opacity: canScrollRight ? 1 : 0,
              transition: "opacity 0.4s ease",
            }}
          />

          {/* Left Arrow */}
          <button
            ref={leftBtnRef}
            onClick={() => scroll("left")}
            onMouseEnter={() => handleBtnHover(leftBtnRef.current, true)}
            onMouseLeave={() => handleBtnHover(leftBtnRef.current, false)}
            className="absolute -left-5 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-11 h-11 rounded-full"
            style={{
              background: "rgba(255,255,255,0.07)",
              border: "1px solid rgba(255,255,255,0.14)",
              color: "rgba(255,255,255,0.85)",
              cursor: "pointer",
              backdropFilter: "blur(10px)",
              fontSize: "1.4rem",
              lineHeight: 1,
              opacity: canScrollLeft ? 1 : 0.15,
              transition: "opacity 0.3s ease",
              pointerEvents: canScrollLeft ? "auto" : "none",
            }}
          >
            ‹
          </button>

          {/* Right Arrow */}
          <button
            ref={rightBtnRef}
            onClick={() => scroll("right")}
            onMouseEnter={() => handleBtnHover(rightBtnRef.current, true)}
            onMouseLeave={() => handleBtnHover(rightBtnRef.current, false)}
            className="absolute -right-5 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-11 h-11 rounded-full"
            style={{
              background: "rgba(255,255,255,0.07)",
              border: "1px solid rgba(255,255,255,0.14)",
              color: "rgba(255,255,255,0.85)",
              cursor: "pointer",
              backdropFilter: "blur(10px)",
              fontSize: "1.4rem",
              lineHeight: 1,
              opacity: canScrollRight ? 1 : 0.15,
              transition: "opacity 0.3s ease",
              pointerEvents: canScrollRight ? "auto" : "none",
            }}
          >
            ›
          </button>

          {/* Cards row */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto pt-4 pb-8 px-2"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            <style>{`#hackathon-scroll::-webkit-scrollbar { display: none; }`}</style>
            {hackathons.map((h, i) => (
              <div
                key={i}
                className="hackathon-card flex-shrink-0 w-64"
                style={{ opacity: 0 }}
              >
                <Card
                  title={h.title}
                  image={h.image}
                  price={h.price}
                  mode={h.mode}
                  deadline={h.deadline}
                  link={h.link}
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
