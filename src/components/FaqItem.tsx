"use client";

import { useState } from "react";
import type { ReactNode } from "react";

export default function FaqItem({ question, children }: { question: string; children: ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`faq-item${open ? " open" : ""}`}>
      <button type="button" className="faq-trigger" onClick={() => setOpen((v) => !v)} aria-expanded={open}>
        <h3>{question}</h3>
        <svg className="faq-chev" width="14" height="8" viewBox="0 0 14 8" fill="none">
          <path d="M1 1l6 6 6-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <div className="faq-answer-wrap">
        <div className="faq-answer">
          <p>{children}</p>
        </div>
      </div>
    </div>
  );
}
