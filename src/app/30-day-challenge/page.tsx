import type { Metadata } from "next";
import WaitlistForm from "@/components/WaitlistForm";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "The 30-Day Challenge · Trine",
  description:
    "One habit. Thirty days. $59 with a weekly coaching call. Proof that you can actually keep a promise to yourself.",
};

function ProgressStrip() {
  const ticks = Array.from({ length: 30 }, (_, i) => i + 1);
  return (
    <div className="progress-strip">
      {ticks.map((day) => (
        <div key={day} className={`tick${day % 7 === 0 ? " milestone" : ""}`} title={`Day ${day}`} />
      ))}
    </div>
  );
}

export default function ThirtyDayPage() {
  return (
    <>
      <SiteNav />

      <section className="numeral-hero">
        <div className="bignum">30</div>
        <div className="wrap">
          <div className="content">
            <div className="eyebrow">The 30-day challenge · $59</div>
            <h1>One habit. Thirty days. Proof that you can actually keep a promise to yourself.</h1>
            <p className="sub" style={{ maxWidth: "560px" }}>
              The smallest real step on the ladder: pick one habit and commit to it for thirty
              days, with a weekly coaching call to keep you honest and moving. Not a detox. Not a
              diet. A trial run for doing this differently.
            </p>
            <ProgressStrip />
            <div className="progress-caption">Day 1 looks like day 30. Small, consistent, unglamorous, and it works.</div>
            <div style={{ marginTop: "30px", maxWidth: "460px" }}>
              <WaitlistForm tag="30-Day Challenge" buttonLabel="Claim your spot" />
            </div>
          </div>
        </div>
      </section>

      <section className="pillars">
        <div className="wrap">
          <div className="pillars-head reveal">
            <div className="eyebrow">How it works</div>
            <h2>Three steps. No overthinking required.</h2>
          </div>
          <div className="flow-steps reveal">
            <div className="flow-step">
              <div className="num-badge">1</div>
              <h3>Pick</h3>
              <p>One habit. Not five. The one that actually matters right now.</p>
            </div>
            <div className="flow-step">
              <div className="num-badge">2</div>
              <h3>Commit</h3>
              <p>Thirty days, no restarting every Monday. Just this, on repeat.</p>
            </div>
            <div className="flow-step">
              <div className="num-badge">3</div>
              <h3>Show up</h3>
              <p>A weekly call to keep you honest, and prove to yourself you can finish what you start.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="story">
        <div className="wrap-narrow">
          <div className="callout">
            &quot;The small group made a huge difference, welcoming, supportive, never
            overwhelming. I walked away not only with valuable knowledge but feeling motivated and
            genuinely supported.&quot;
            <span className="who">Ally Real</span>
          </div>
        </div>
      </section>

      <section className="offer">
        <div className="wrap">
          <div className="offer-card dc">
            <div>
              <div className="eyebrow">The details</div>
              <h2>No lock-in. No fine print. Just thirty days.</h2>
              <p>One habit, chosen by you. A weekly group coaching call to keep you accountable. Thirty days to prove it&apos;s possible, then decide what&apos;s next.</p>
              <div className="offer-detail">$59 &nbsp;·&nbsp; ONE HABIT &nbsp;·&nbsp; WEEKLY COACHING CALL &nbsp;·&nbsp; NO LOCK-IN</div>
            </div>
            <div className="offer-side grad-mint"></div>
          </div>
        </div>
      </section>

      <section className="final" id="book">
        <div className="wrap">
          <div className="eyebrow center">Ready when you are</div>
          <h2>Day 1 starts when you say yes.</h2>
          <p className="sub2">Thirty days from now, you&apos;ll either still be talking about doing this, or you&apos;ll have already done it.</p>
          <div style={{ maxWidth: "460px", margin: "0 auto" }}>
            <WaitlistForm tag="30-Day Challenge" buttonLabel="Claim your spot" />
          </div>
          <div className="recipe-line">Life is a recipe. <b>What are you creating?</b></div>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
