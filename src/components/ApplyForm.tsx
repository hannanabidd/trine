"use client";

import { FormEvent } from "react";

export default function ApplyForm() {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = (data.get("Name") as string) || "";
    let body = "";
    for (const [key, value] of data.entries()) {
      if (key === "Name" || key === "Email") continue;
      body += `${key}:\n${value || "(no answer)"}\n\n`;
    }
    const subject = encodeURIComponent(`8-Week Program Application — ${name}`);
    const mailBody = encodeURIComponent(body);
    window.location.href = `mailto:katrinagcoaching@gmail.com?subject=${subject}&body=${mailBody}`;
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
              This isn&apos;t a nutrition or habit program — it&apos;s eight weeks of honest questions
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
              <span className="hint">Totally fine if the answer is no — just want to know.</span>
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
          <button type="submit" className="cta">Send my application <span className="arrow">→</span></button>
          <div className="submit-note">Opens your email with everything filled in — just hit send. I read every one myself.</div>
        </div>
      </div>
    </form>
  );
}
