"use client";

import { FormEvent, useState } from "react";

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = (data.get("Name") as string) || "";
    const email = (data.get("Email") as string) || "";
    const message = (data.get("Message") as string) || "";

    setStatus("sending");
    setErrorMsg("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      const result = await res.json();
      if (!res.ok) throw new Error(result.error || "Something went wrong.");
      setStatus("sent");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  }

  if (status === "sent") {
    return (
      <div className="contact-form-card" id="contact-form">
        <h3 style={{ marginBottom: "10px" }}>Got it. Thank you.</h3>
        <p style={{ fontSize: "15px", color: "var(--text-soft)", lineHeight: 1.6, margin: 0 }}>
          Your message landed straight in my inbox, and I read every one myself. I&apos;ll get back to
          you soon.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="contact-form-card" id="contact-form">
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
      <button type="submit" className="cta" disabled={status === "sending"}>
        {status === "sending" ? "Sending..." : "Send message"} <span className="arrow">→</span>
      </button>
      <div className="submit-note" style={status === "error" ? { color: "var(--danger)" } : undefined}>
        {status === "error" ? errorMsg : "Sent straight to my inbox. I read every one myself."}
      </div>
    </form>
  );
}
