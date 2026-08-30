import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import WaitlistForm from "@/components/WaitlistForm";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Promise Kept · Year-Long Habit Membership · Trine",
  description:
    "A year-long commitment to yourself, built one habit at a time. $98/month · 12-month commitment · opens December.",
};

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export default function PromiseKeptPage() {
  return (
    <>
      <SiteNav />

      <section className="pk-hero">
        <Image
          src="/images/banner-img.jpeg"
          alt="Sunrise over a quiet beach, two people walking along the shoreline"
          fill
          priority
          sizes="100vw"
        />
        <div className="pk-hero-content">
          <div className="wrap">
            <div className="eyebrow">Keep the promise · $98 / month</div>
            <h1>One habit a month. Twelve months. A completely different person by the end of it.</h1>
            <p>
              Promise Kept is a year-long commitment to yourself, built one habit at a time. Each
              month you choose the one habit you&apos;re ready to keep: thirty days to actually
              build it, not just start it. Then the next month, the next one.
            </p>
            <div style={{ maxWidth: "460px" }}>
              <WaitlistForm tag="Promise Kept" buttonLabel="Join the waitlist" />
            </div>
          </div>
        </div>
      </section>

      <section className="calendar-section">
        <div className="wrap">
          <div style={{ maxWidth: "620px", marginBottom: "36px" }}>
            <div className="eyebrow">Twelve months, one habit at a time</div>
            <h2 style={{ fontSize: "clamp(28px, 3.4vw, 40px)", marginTop: "16px" }}>The same promise, twelve times.</h2>
            <p style={{ fontSize: "16.5px", color: "var(--text-soft)", marginTop: "14px", lineHeight: 1.6 }}>
              You&apos;re not doing it alone: a weekly online session, weekly guidance, and a
              community of people doing the same work alongside you, one month, one habit, one
              honest check-in at a time.
            </p>
          </div>
          <div className="calendar-grid">
            {MONTHS.map((m) => (
              <div key={m} className={`cal-tile${m === "Dec" ? " now" : ""}`}>
                <div className="mo">{m}</div>
                <div className="lb">{m === "Dec" ? "Opens" : "Habit"}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pillars">
        <div className="wrap">
          <div className="pillars-head reveal">
            <div className="eyebrow">What a month looks like</div>
            <h2>Choose. Commit. Check in.</h2>
          </div>
          <div className="flow-steps reveal">
            <div className="flow-step">
              <div className="num-badge">1</div>
              <h3>Choose</h3>
              <p>Pick the one habit you&apos;re ready to actually keep this month.</p>
            </div>
            <div className="flow-step">
              <div className="num-badge">2</div>
              <h3>Commit</h3>
              <p>Thirty days of showing up, with weekly guidance to keep you on track.</p>
            </div>
            <div className="flow-step">
              <div className="num-badge">3</div>
              <h3>Check in</h3>
              <p>A weekly call with the group, because willpower runs out, community doesn&apos;t.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="stat-photo">
        <Image
          src="/images/banner-img.jpeg"
          alt=""
          fill
          sizes="100vw"
        />
        <div className="wrap">
          <div className="glass-tiles">
            <div className="glass-tile"><div className="n">12</div><div className="l">Months</div></div>
            <div className="glass-tile"><div className="n">1</div><div className="l">Habit at a time</div></div>
            <div className="glass-tile"><div className="n">Weekly</div><div className="l">Group calls</div></div>
          </div>
        </div>
      </section>

      <section className="story">
        <div className="wrap-narrow">
          <div className="callout">
            The women who change the most aren&apos;t the ones who overhaul everything overnight.
            They&apos;re the ones who keep one promise, every single month, until keeping promises
            to themselves just becomes who they are.
            <span className="who">Katrina Gall, Trine</span>
          </div>
        </div>
      </section>

      <section className="final" id="book">
        <div className="wrap">
          <div className="eyebrow center">Opens December</div>
          <h2>Twelve months from now, this could just be who you are.</h2>
          <p className="sub2">New members welcome every month after launch. But the waitlist gets first access.</p>
          <div style={{ maxWidth: "460px", margin: "0 auto" }}>
            <WaitlistForm tag="Promise Kept" buttonLabel="Join the waitlist" />
          </div>
          <div className="hero-note" style={{ marginTop: "38px", color: "rgba(239,246,244,0.55)" }}>
            Want more structured group support? <Link href="/what-if-i-knew-i-couldnt-fail" style={{ color: "var(--gold)", textDecoration: "underline", textUnderlineOffset: "3px" }}>Explore What If I Knew I Couldn&apos;t Fail</Link>.
          </div>
          <div className="recipe-line">Life is a recipe. <b>What are you creating?</b></div>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
