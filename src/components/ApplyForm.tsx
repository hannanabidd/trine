"use client";

import { FormEvent, useState } from "react";

type Status = "idle" | "sending" | "sent" | "error";

export default function ApplyForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = (data.get("Name") as string) || "";
    const email = (data.get("Email") as string) || "";
    const rows: { label: string; value: string }[] = [];
    for (const [key, value] of data.entries()) {
      if (key === "Name" || key === "Email") continue;
      rows.push({ label: key, value: (value as string) || "(no answer)" });
    }

    setStatus("sending");
    setErrorMsg("");
    try {
      const res = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, rows }),
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
      <div className="wrap-narrow" style={{ padding: "40px 0 90px" }}>
        <div className="fsection-label">Application sent</div>
        <h2 style={{ fontSize: "clamp(26px, 3.4vw, 36px)", margin: "8px 0 14px" }}>Got it. Thank you.</h2>
        <p style={{ fontSize: "17px", color: "var(--text-soft)", lineHeight: 1.65, maxWidth: "520px" }}>
          Your application landed straight in my inbox, and I read every one myself. I&apos;ll be in
          touch soon to let you know what&apos;s next.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="wrap-narrow">
        <div className="fsection">
          <div className="fsection-label">01 · The basics</div>
          <div className="field">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="Name" required />
          </div>
          <div className="field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="Email" required />
          </div>
          <div className="field">
            <label htmlFor="location">Location / timezone</label>
            <input type="text" id="location" name="Location / timezone" />
          </div>
          <div className="field">
            <label htmlFor="heard">How did you hear about this?</label>
            <select id="heard" name="How did you hear about this" defaultValue="">
              <option value="" disabled>Select one</option>
              <option>Instagram</option>
              <option>Facebook</option>
              <option>Referral from a friend</option>
              <option>Website</option>
              <option>Medical centre referral</option>
              <option>Other</option>
            </select>
          </div>
        </div>

        <div className="fsection">
          <div className="fsection-label">02 · Where you&apos;re at</div>
          <div className="field">
            <label htmlFor="q1">What&apos;s going on in your life right now that made you stop and look at this?</label>
            <textarea id="q1" name="What's going on in your life right now that made you stop and look at this" />
          </div>
          <div className="field">
            <label htmlFor="q2">What have you already tried that hasn&apos;t worked?</label>
            <textarea id="q2" name="What have you already tried that hasn't worked" />
          </div>
          <div className="field">
            <label htmlFor="q3">If nothing changes, what does the next year actually look like?</label>
            <textarea id="q3" name="If nothing changes, what does the next year actually look like" />
          </div>
          <div className="field">
            <label htmlFor="q4">What are you hoping is different by the end of these eight weeks?</label>
            <textarea id="q4" name="What are you hoping is different by the end of these eight weeks" />
          </div>
          <div className="field">
            <label htmlFor="q4b">When life becomes difficult or uncertain, how do you typically respond?</label>
            <textarea id="q4b" name="How do you typically respond when life becomes difficult or uncertain" />
          </div>
          <div className="field">
            <label htmlFor="q4c">What kind of person do you believe you need to become to build the life you actually want?</label>
            <textarea id="q4c" name="What kind of person do you need to become" />
          </div>
        </div>

        <div className="fsection">
          <div className="fsection-label">03 · Is this actually the right fit</div>
          <div className="field">
            <label>
              This isn&apos;t a nutrition or habit program. It&apos;s eight weeks of honest questions
              about who you are underneath your roles. Does that sound like what you&apos;re looking for?
            </label>
            <div className="radiorow">
              <label><input type="radio" name="Right fit" value="Yes, that's exactly it" required /> Yes, that&apos;s exactly it</label>
              <label><input type="radio" name="Right fit" value="I'm not totally sure" /> I&apos;m not totally sure</label>
            </div>
          </div>
          <div className="field">
            <label htmlFor="q5">
              Small groups only work when everyone shows up fully. Is there anything going on right now
              that would make it hard to be fully present for the next 8 weeks?
              <span className="hint">Totally fine if the answer is no, just want to know.</span>
            </label>
            <textarea id="q5" name="Anything that would make it hard to be fully present" />
          </div>
          <div className="field">
            <label>Can you commit to a weekly group call for the full 8 weeks?</label>
            <div className="radiorow">
              <label><input type="radio" name="Weekly commitment" value="Yes" required /> Yes</label>
              <label><input type="radio" name="Weekly commitment" value="Mostly, with a couple of exceptions" /> Mostly, with a couple of exceptions</label>
              <label><input type="radio" name="Weekly commitment" value="Not sure yet" /> Not sure yet</label>
            </div>
          </div>
        </div>

        <div className="fsection">
          <div className="fsection-label">04 · Logistics</div>
          <div className="field">
            <label>$897 for the 8 weeks. Would a payment plan make this easier to say yes to?</label>
            <div className="radiorow">
              <label><input type="radio" name="Payment plan" value="No, I'm all good" required /> No, I&apos;m all good</label>
              <label><input type="radio" name="Payment plan" value="Yes, that would help" /> Yes, that would help</label>
            </div>
          </div>
          <div className="field">
            <label htmlFor="q6">Anything else you want me to know before we talk?</label>
            <textarea id="q6" name="Anything else you want me to know" />
          </div>
        </div>

        <div className="submit-row">
          <button type="submit" className="cta" disabled={status === "sending"}>
            {status === "sending" ? "Sending..." : "Send my application"} <span className="arrow">→</span>
          </button>
          <div className="submit-note" style={status === "error" ? { color: "var(--danger)" } : undefined}>
            {status === "error" ? errorMsg : "Sent straight to my inbox. I read every one myself."}
          </div>
        </div>
      </div>
    </form>
  );
}
