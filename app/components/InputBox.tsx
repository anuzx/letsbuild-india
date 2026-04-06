import React from 'react';

const baseClass =
  "w-full bg-transparent border-b border-[#262626] text-[#f0f0f0] font-sans text-[0.85rem] outline-none placeholder:text-[#737373] placeholder:tracking-widest transition-colors duration-300 focus:border-[#f0f0f0]";

// Primary — single-line input (e.g. email address)
export const PrimaryInput = (props: React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input
      {...props}
      className={`${baseClass} pb-2 ${props.className ?? ''}`}
    />
  );
};

// Secondary — multi-line textarea (e.g. message body)
export const SecondaryInput = (props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) => {
  return (
    <textarea
      {...props}
      rows={props.rows ?? 5}
      className={`${baseClass} resize-none py-2 ${props.className ?? ''}`}
    />
  );
};
