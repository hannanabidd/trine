"use client";

import { FormEvent } from "react";

export default function ContactForm() {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = (data.get("Name") as string) || "";
    const email = (data.get("Email") as string) || "";
    const message = (data.get("Message") as string) || "";
    const subject = encodeURIComponent(`Message from ${name}`);
    const body = encodeURIComponent(`${message}\n\n${name}\n${email}`);
    window.location.href = `mailto:katrinagcoaching@gmail.com?subject=${subject}&body=${body}`;
  }

  return (
    <form onSubmit={handleSubmit} className="contact-form-card">
      <div className="field">
        <label htmlFor="c-name">Name</label>
        <input type="text" id="c-name" name="Name" required />
      </div>
      <div className="field">
        <label htmlFor="c-email">Email</label>
        <input type="email" id="c-email" name="Email" required />
      </div>
      <div className="field">
        <label htmlFor="c-message">What&apos;s on your mind?</label>
        <textarea id="c-message" name="Message" required style={{ minHeight: "140px" }} />
      </div>
      <button type="submit" className="cta">Send message <span className="arrow">→</span></button>
      <div className="submit-note">Opens your email with everything filled in. Just hit send. I read every one myself.</div>
    </form>
  );
}
