import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import JourneyPosition from "@/components/JourneyPosition";
import WaitlistForm from "@/components/WaitlistForm";

export const metadata: Metadata = {
  title: "Kitchen Reset · A Free First Step · Trine",
  description:
    "A free, practical first step for anyone who wants their home environment to support who they're becoming. Coming soon from Trine.",
};

export default function KitchenResetPage() {
  return (
    <>
      <SiteNav />

      <section className="atmos-hero">
        <Image src="/images/elements03.png" alt="" aria-hidden="true" fill className="vine-frame" />
        <div className="wrap">
          <div className="eyebrow">Free · Coming soon</div>
          <h1>Sometimes change starts in the kitchen.</h1>
          <p className="sub">
            Before we change your whole life, let&apos;s look at what&apos;s feeding it. A free,
            practical first step for anyone who wants their home environment to support who
            they&apos;re becoming, not another complicated diet, just clarity.
          </p>
          <WaitlistForm tag="Kitchen Reset" buttonLabel="Notify me" />
          <div className="hero-note" style={{ marginTop: "18px" }}>No spam. One email, the day it opens.</div>

          <div style={{ marginTop: "64px" }}>
            <JourneyPosition active={0} />
          </div>
        </div>
      </section>

      <section className="story with-leaf">
        {/* <Image src="/images/elements.png" alt="" aria-hidden="true" width={817} height={1218} className="leaf-accent leaf-left" /> */}
        <div className="wrap-narrow">
          <h2>This isn&apos;t a diet. It&apos;s a reset.</h2>
          <p>
            Most people don&apos;t need another meal plan. They need their kitchen, their pantry,
            and their daily rhythm to stop working against them. Kitchen Reset is the smallest
            possible starting point: a short, guided look at what&apos;s actually in your space and
            your routine, and what to shift first.
          </p>
          <p>
            No tracking. No 6am alarms. No throwing out everything you own. Just enough clarity to
            take one honest step, before you decide whether you want to take the next one.
          </p>
        </div>
      </section>

      <section className="qualify">
        <div className="wrap">
          <div className="qualify-box">
            <h3>What to expect</h3>
            <ul>
              <li>No overwhelm: this is designed to take an afternoon, not a month.</li>
              <li>No complicated grocery list or ingredients you&apos;ll never use again.</li>
              <li>A clear, honest place to start, and a next step if you want one.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="story">
        <div className="wrap-narrow">
          <div className="callout">
            Your kitchen is the one room in your house that touches everything else: your energy,
            your habits, your relationship with your own body. Fix what&apos;s feeding you, and
            everything downstream gets a little easier.
            <span className="who">Katrina Gall, Trine</span>
          </div>
        </div>
      </section>

      <section className="final" id="book">
        <div className="wrap">
          <div className="eyebrow center">Start small</div>
          <h2>Be the first to know when it opens.</h2>
          <p className="sub2">Free. No pressure. Just one email when Kitchen Reset is ready.</p>
          <div style={{ maxWidth: "460px", margin: "0 auto" }}>
            <WaitlistForm tag="Kitchen Reset" buttonLabel="Notify me" />
          </div>
          <div className="hero-note" style={{ marginTop: "38px", color: "rgba(239,246,244,0.55)" }}>
            Not ready to wait? <Link href="/stop-starting-monday" style={{ color: "var(--gold)", textDecoration: "underline", textUnderlineOffset: "3px" }}>Try Stop Starting Monday</Link> instead.
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
