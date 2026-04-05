"use client";

import React from "react";

interface CardProps {
  title?: string;
  image?: string;
  price?: string;
  mode?: string;
  deadline?: string;
  link?: string;
}

export default function Card({
  title = "Event Title",
  image = "",
  price = "FREE",
  mode = "VIRTUAL",
  deadline = "Sun Apr 19 2026",
  link = "#",
}: CardProps) {
  return (
    <div className="w-64 mx-auto flex flex-col items-start gap-2 h-full">

      {/* Image Section */}
      <div className="w-full flex justify-center relative mb-20">
        <div className="absolute top-8 z-10 w-40 aspect-square">
          <img
            className="object-cover w-full h-full rounded-lg shadow-md"
            src={image}
            alt={title}
          />
        </div>
      </div>

      {/* Card Content */}
      <div
        className="text-center w-full flex flex-col justify-between p-6 pt-32 rounded-xl h-full"
        style={{
          background: "rgba(255, 255, 255, 0.05)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          border: "1px solid rgba(255, 255, 255, 0.12)",
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
        }}
      >
        {/* Title */}
        <h5
          className="px-1 mt-0.5 text-base leading-7 line-clamp-2"
          style={{ color: "rgba(255,255,255,0.9)" }}
        >
          {title}
        </h5>

        <div className="text-center w-full">
          {/* Price + Mode */}
          <div
            className="py-1 text-xs"
            style={{ color: "rgba(255,255,255,0.45)" }}
          >
            <span>{price}</span>
            <span> <b>|</b> {mode}</span>
          </div>

          {/* Deadline */}
          <div className="pb-3 text-xs flex items-center justify-center w-full mt-2 flex-col gap-1">
            <p style={{ color: "rgba(255,255,255,0.5)" }}>
              Registration Ends on
            </p>
            <p style={{ color: "rgba(255,255,255,0.35)" }}>{deadline}</p>
          </div>

          {/* CTA Button */}
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2.5 px-5 text-xs rounded-lg flex items-center justify-center gap-2 cursor-pointer font-medium"
            style={{
              background: "rgba(255,255,255,0.12)",
              color: "rgba(255,255,255,0.9)",
              border: "1px solid rgba(255,255,255,0.2)",
              transition: "all 0.3s",
              textDecoration: "none",
            }}
            onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => {
              e.currentTarget.style.background = "rgba(255,255,255,0.22)";
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.4)";
            }}
            onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => {
              e.currentTarget.style.background = "rgba(255,255,255,0.12)";
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)";
            }}
          >
            Register Now
          </a>
        </div>
      </div>
    </div>
  );
}
