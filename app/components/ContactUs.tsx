"use client"

import React, { useState } from 'react';
import { PrimaryInput, SecondaryInput } from './InputBox';

export const ContactUs = (props: {}) => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // handle send logic here
  };

  const titleClass =
    "font-mono text-[0.65rem] uppercase tracking-[0.1em] text-[#737373] mb-6";

  return (
    <div>
      <div className={titleClass}>contact</div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <PrimaryInput
          type="email"
          placeholder="EMAIL ADDRESS"
          autoComplete="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <SecondaryInput
          placeholder="YOUR MESSAGE"
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          type="submit"
          className="self-start font-mono text-[0.65rem] uppercase tracking-[0.1em] text-[#737373] hover:text-[#f0f0f0] transition-colors duration-300"
        >
          Send →
        </button>
      </form>
    </div>
  );
};
