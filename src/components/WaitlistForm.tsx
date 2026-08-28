"use client";

import { FormEvent, useState } from "react";

type Status = "idle" | "sending" | "sent" | "error";

export default function WaitlistForm({ tag, buttonLabel }: { tag: string; buttonLabel: string }) {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const email = (data.get("email") as string) || "";

    setStatus("sending");
    setErrorMsg("");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ tag, email }),
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
    return <p className="progress-caption">You&apos;re on the list. I&apos;ll email you the moment it opens.</p>;
  }

  return (
    <form onSubmit={handleSubmit} className="inline-form">
      <input type="email" name="email" placeholder="Your email address" required />
      <button type="submit" className="cta" disabled={status === "sending"}>
        {status === "sending" ? "Sending..." : buttonLabel} <span className="arrow">→</span>
      </button>
      {status === "error" && (
        <p className="progress-caption" style={{ color: "var(--danger)", width: "100%" }}>{errorMsg}</p>
      )}
    </form>
  );
}
