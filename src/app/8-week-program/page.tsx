import type { Metadata } from "next";
import Link from "next/link";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import FaqItem from "@/components/FaqItem";

export const metadata: Metadata = {
  title: "The 8-Week Program · Trine",
  description:
    "Eight weeks of small-group identity work, application-based, $897. Moving from where am I to what is my why, alongside a handful of people doing the same deep work.",
};

const WEEKS = [
  { wk: "01", q: "Where am I, really?", d: "Naming the gap between the life you built and how you actually feel living it." },
  { wk: "02", q: "What have I been performing?", d: "The roles and habits you've been wearing that aren't actually you." },
  { wk: "03", q: "What am I avoiding?", d: "The honest conversations and decisions you've been putting off." },
  { wk: "04", q: "What do I actually believe?", d: "Separating what you were taught from what you've decided for yourself." },
  { wk: "05", q: "Where is my energy going?", d: "Boundaries, relationships, and the cost of always showing up for everyone else." },
  { wk: "06", q: "Who do I become if I stop waiting?", d: "Trying on the version of you that isn't waiting for permission." },
  { wk: "07", q: "What won't I compromise on anymore?", d: "Naming your non-negotiables, out loud, for the first time." },
  { wk: "08", q: "What is my why?", d: "Taking everything from the last seven weeks and turning it into how you actually live." },
];

export default function EightWeekPage() {
  return (
    <>
      <SiteNav />

      <section className="cohort-hero">
        <div className="wrap cohort-hero-grid">
          <div className="reveal">
            <div className="eyebrow">The 8-week group program</div>
            <h1 style={{ fontSize: "clamp(34px, 4.6vw, 54px)", margin: "18px 0 22px" }}>
              Eight weeks of the questions that actually change how you see yourself.
            </h1>
            <p style={{ fontSize: "17.5px", color: "var(--text-soft)", lineHeight: 1.65, maxWidth: "540px", margin: "0 0 18px" }}>
              Not habit stacking. Not a nutrition plan. Not another challenge. This is small-group
              identity work, moving from where am I to what is my why, alongside a handful of
              people doing the same deep work at the same time.
            </p>
            <p style={{ fontSize: "17.5px", color: "var(--text-soft)", lineHeight: 1.65, maxWidth: "540px", margin: 0 }}>
              Eight weeks. Eight honest questions. No theory. Just the work.
            </p>
          </div>

          <div className="cohort-card reveal">
            <h3>This cohort</h3>
            <div className="cc-row"><span className="k">Format</span><span className="v">Small group</span></div>
            <div className="cc-row"><span className="k">Duration</span><span className="v">8 weeks</span></div>
            <div className="cc-row"><span className="k">Commitment</span><span className="v">Weekly group call</span></div>
            <div className="cc-row"><span className="k">Investment</span><span className="v">$897</span></div>
            <div className="cc-row"><span className="k">Next cohort</span><span className="v">Applications open quarterly</span></div>
            <Link href="/apply" className="cta">Apply for the next cohort <span className="arrow">→</span></Link>
          </div>
        </div>
      </section>

      <section className="qualify">
        <div className="wrap">
          <div className="qualify-box">
            <h3>This is for you if:</h3>
            <ul>
              <li>You&apos;ve achieved a lot and are quietly questioning what&apos;s next.</li>
              <li>You&apos;re done with surface-level fixes and ready to look at the bigger picture.</li>
              <li>You want a small group, not a course you&apos;ll watch alone and never finish.</li>
              <li>You&apos;re ready to actually apply. This isn&apos;t a checkout page.</li>
            </ul>
          </div>
        </div>
      </section>

      <div className="divider"><span>The eight weeks</span></div>

      <section className="syllabus">
        <div className="wrap-narrow">
          <div style={{ marginBottom: "30px" }}>
            <div className="eyebrow">Week by week</div>
            <h2 style={{ fontSize: "clamp(27px, 3.4vw, 38px)", marginTop: "16px" }}>Eight questions. Not eight lectures.</h2>
          </div>
          {WEEKS.map((w) => (
            <div className="syl-item" key={w.wk}>
              <div className="wk">{w.wk}</div>
              <div>
                <h3>{w.q}</h3>
                <p>{w.d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="story">
        <div className="wrap-narrow">
          <div className="callout">
            &quot;Your coaching has completely changed the way I lead my team and, more
            importantly, the way I live my life. You&apos;ve helped me build confidence, trust
            myself more, and approach challenges with a calmer, more positive perspective.&quot;
            <span className="who">Carmen Godger, James Cook University</span>
          </div>
        </div>
      </section>

      <section className="faq">
        <div className="wrap-narrow">
          <div className="eyebrow">Before you apply</div>
          <h2 style={{ margin: "16px 0 30px", fontSize: "clamp(26px, 3.2vw, 36px)" }}>A few honest answers</h2>

          <FaqItem question="What if I'm not sure this is the exact right fit?">
            That&apos;s exactly what the application is for. It&apos;s a short, honest conversation on paper before we ever get on a call. If it&apos;s not quite right, I&apos;ll tell you, and point you somewhere that is.
          </FaqItem>
          <FaqItem question="Is $897 payable over time?">
            Yes. If a payment plan makes this easier to say yes to, just say so in your application. It won&apos;t change your spot in the group.
          </FaqItem>
          <FaqItem question="What if I can't make every single weekly call?">
            Life happens. What matters is that you&apos;re mostly there and fully present when you are. Small groups only work when people actually show up.
          </FaqItem>
          <FaqItem question="When does the next cohort start?">
            Applications open quarterly. Apply any time and I&apos;ll let you know exactly when the next group begins.
          </FaqItem>
        </div>
      </section>

      <section className="final" id="book">
        <div className="wrap">
          <div className="eyebrow center">Ready when you are</div>
          <h2>Eight weeks from now, you&apos;ll know a lot more about who you actually are.</h2>
          <p className="sub2">Applications are read personally. No forms disappearing into a void.</p>
          <Link href="/apply" className="cta on-dark">Apply for the next cohort <span className="arrow">→</span></Link>
          <div className="recipe-line">Life is a recipe. <b>What are you creating?</b></div>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
