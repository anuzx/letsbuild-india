"use client";

import React from "react";
import { ArrowUpRight, Calendar, MapPin } from "lucide-react";

interface CardProps {
  title?: string;
  image?: string;
  price?: string;
  mode?: string;
  deadline?: string;
  link?: string;
  isActive?: boolean;
}

const Card: React.FC<CardProps> = ({
  title = "Event Title",
  image = "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=400",
  price = "FREE",
  mode = "VIRTUAL",
  deadline = "Sun Apr 19 2026",
  link = "#",
  isActive = true,
}) => {
  return (
    <div className="group relative w-full flex flex-col transition-all duration-500 hover:-translate-y-1.5">
      {/* Card shell */}
      <div
        className="relative flex flex-col h-full rounded-[18px] overflow-hidden"
        style={{
          background:
            "linear-gradient(145deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)",
          border: "1px solid rgba(255,255,255,0.07)",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          boxShadow:
            "0 4px 24px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.07)",
        }}
      >
        {/* Top shine line */}
        <div
          className="absolute inset-x-0 top-0 h-px opacity-60"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(255,255,255,0.18), transparent)",
          }}
        />

        {/* Image */}
        <div className="relative overflow-hidden" style={{ height: "120px" }}>
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.06]"
            loading="lazy"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(5,5,5,0.05) 0%, rgba(5,5,5,0.65) 100%)",
            }}
          />

          {/* Price */}
          <span
            className="absolute bottom-3 left-3 text-[9px] font-black tracking-[0.18em] uppercase text-white/90 px-2 py-0.5 rounded-md"
            style={{
              background: "rgba(0,0,0,0.45)",
              border: "1px solid rgba(255,255,255,0.1)",
              backdropFilter: "blur(6px)",
            }}
          >
            {price}
          </span>

          {/* Status */}
          <div className="absolute top-3 right-3 flex items-center gap-1.5">
            <div className="relative flex h-1.5 w-1.5">
              {isActive && (
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-70" />
              )}
              <span
                className={`relative inline-flex rounded-full h-1.5 w-1.5 ${isActive ? "bg-emerald-400" : "bg-rose-500"
                  }`}
              />
            </div>
            <span
              className={`text-[9px] font-bold tracking-widest uppercase ${isActive ? "text-emerald-400" : "text-rose-400"
                }`}
            >
              {isActive ? "Live" : "Ended"}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col flex-grow px-4 py-3.5 gap-2.5">
          {/* Mode */}
          <div className="flex items-center gap-1.5">
            <MapPin
              size={9}
              className={
                isActive ? "text-emerald-400/70" : "text-rose-400/70"
              }
            />
            <span
              className="text-[8.5px] font-bold tracking-[0.14em] uppercase"
              style={{ color: "rgba(255,255,255,0.3)" }}
            >
              {mode}
            </span>
          </div>

          {/* Title */}
          <h3
            className="text-[13px] font-semibold leading-snug line-clamp-2 transition-colors duration-300 group-hover:text-white"
            style={{
              color: "rgba(255,255,255,0.78)",
              minHeight: "2.4rem",
              letterSpacing: "-0.01em",
            }}
          >
            {title}
          </h3>

          {/* Separator */}
          <div
            className="w-full h-px"
            style={{
              background:
                "linear-gradient(90deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.02) 100%)",
            }}
          />

          {/* Deadline */}
          <div className="flex items-center gap-2">
            <Calendar
              size={10}
              className={
                isActive ? "text-emerald-400/60" : "text-rose-400/60"
              }
            />
            <div>
              <p
                className="text-[8px] font-bold uppercase tracking-[0.14em] leading-none mb-0.5"
                style={{ color: "rgba(255,255,255,0.22)" }}
              >
                Deadline
              </p>
              <p
                className="text-[10px] font-medium leading-none"
                style={{ color: "rgba(255,255,255,0.48)" }}
              >
                {deadline}
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <a
            href={isActive ? link : undefined}
            target="_blank"
            rel="noopener noreferrer"
            className={`group/btn mt-1 w-full inline-flex items-center justify-center gap-1.5 rounded-[10px] py-2 text-[10px] font-bold tracking-[0.12em] uppercase transition-all duration-300 active:scale-95 ${isActive
                ? "cursor-pointer hover:brightness-110"
                : "cursor-not-allowed"
              }`}
            style={
              isActive
                ? {
                  background:
                    "linear-gradient(135deg, rgba(255,255,255,0.09) 0%, rgba(255,255,255,0.04) 100%)",
                  border: "1px solid rgba(255,255,255,0.11)",
                  color: "rgba(255,255,255,0.85)",
                  boxShadow: "0 1px 8px rgba(0,0,0,0.25)",
                }
                : {
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.04)",
                  color: "rgba(255,255,255,0.18)",
                }
            }
          >
            {isActive ? (
              <>
                Register
                <ArrowUpRight
                  size={10}
                  className="transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                />
              </>
            ) : (
              "Closed"
            )}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
