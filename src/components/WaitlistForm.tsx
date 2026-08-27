"use client";

import { FormEvent, useState } from "react";

export default function WaitlistForm({ tag, buttonLabel }: { tag: string; buttonLabel: string }) {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const email = (data.get("email") as string) || "";
    const subject = encodeURIComponent(`${tag} — notify me`);
    const body = encodeURIComponent(`Please add this email to the ${tag} list:\n${email}`);
    window.location.href = `mailto:katrinagcoaching@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
  }

  if (sent) {
    return <p className="progress-caption">Opening your email now — just hit send and you&apos;re on the list.</p>;
  }

  return (
    <form onSubmit={handleSubmit} className="inline-form">
      <input type="email" name="email" placeholder="Your email address" required />
      <button type="submit" className="cta">{buttonLabel} <span className="arrow">→</span></button>
    </form>
  );
}
