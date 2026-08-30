import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import { BodyIcon, MindIcon, SoulIcon } from "@/components/PillarIcons";
import Testimonials from "@/components/Testimonials";

export const metadata: Metadata = {
  title: "Reclaim Her · 6-Month Coaching for Women · Trine",
  description:
    "A six-month, 1:1 identity and transformation program for women ready to stop coasting and start living with intention. $5,997 · 1:1 · 6 months · women only.",
};

export default function ReclaimHerPage() {
  return (
    <>
      <SiteNav />

      <section className="page-hero">
        <Image src="/images/elements04.png" alt="" aria-hidden="true" width={1024} height={1536} className="leaf-accent" />
        <div className="wrap-narrow">
          <div className="eyebrow">The 6-month identity &amp; transformation program</div>
          <h1>You&apos;ve built a successful life. Now it&apos;s time to build one that feels like yours.</h1>
          <p>
            From the outside, your life probably looks pretty good. You&apos;ve achieved, worked hard,
            become the person everyone else relies on. But somewhere along the way something shifted.
            You&apos;re tired of putting yourself last, and you&apos;re starting to question what success
            actually means to you now.
          </p>
          <p className="pull">Who are you, underneath everything you&apos;ve built?</p>
          <p>
            That&apos;s where Reclaim Her begins. I built this program because I know what it&apos;s like
            to lose yourself while everyone around you assumes you&apos;re fine,{" "}
            <Link href="/about" className="storylink">the full story&apos;s here</Link> if you want it.
          </p>
          <p>
            Reclaim Her is a six-month identity and transformation journey for women ready to stop
            coasting and start living with intention.
          </p>
          <div className="offer-detail" style={{ maxWidth: "480px", marginTop: "20px" }}>
            $5,997 &nbsp;·&nbsp; 1:1 &nbsp;·&nbsp; 6 MONTHS &nbsp;·&nbsp; WOMEN ONLY
          </div>
          <Link href="#book" className="cta" style={{ marginTop: "10px" }}>Book a discovery call <span className="arrow">→</span></Link>
        </div>
      </section>

      <section className="discover">
        <div className="wrap">
          <div className="discover-box">
            <div>
              <h3>Book a discovery call</h3>
              <p>30 minutes with Katrina. No pressure, no pitch. Just an honest conversation.</p>
            </div>
            <Link href="#book" className="cta">Book now <span className="arrow">→</span></Link>
          </div>
        </div>
      </section>

      <section className="statband">
        <div className="wrap">
          <div className="statgrid">
            <div><div className="n">6 Months</div><div className="l">One full identity rebuild</div></div>
            <div><div className="n">3 Pillars</div><div className="l">Body. Mind. Soul.</div></div>
            <div><div className="n">1 Person</div><div className="l">The one you actually are underneath it</div></div>
          </div>
        </div>
      </section>

      <section className="pullquote">
        <div className="wrap-narrow">
          <h2>&quot;You don&apos;t need another program. You need to stop performing and start living.&quot;</h2>
          <p>
            You&apos;ve probably already tried things: read the books, downloaded the programs, started
            the Monday routines. You might already know exactly what you&apos;re supposed to do. Knowing
            was never really the problem. Living it is.
          </p>
          <p>
            Underneath the habits and the health goals is a bigger question: who are you now? Reclaim Her
            exists for women ready to actually sit with that, properly, for six months, working across
            your physical health, your habits, your mindset, your identity, your relationships and your
            sense of purpose, not as separate projects but as one connected person.
          </p>
          <p>
            You won&apos;t finish this with a longer to-do list. You&apos;ll finish it with a clearer
            sense of who you are and how you actually want to live, and you&apos;ll know how to keep
            choosing that, on the days it&apos;s hard too.
          </p>
        </div>
      </section>

      <div className="divider"><span>How we reclaim her</span></div>

      <section className="pillars">
        <div className="wrap">
          <div className="pillars-head reveal" style={{ textAlign: "center", marginLeft: "auto", marginRight: "auto" }}>
            <div className="eyebrow" style={{ justifyContent: "center" }}>Three pillars</div>
            <h2>One whole woman.</h2>
          </div>
          <div className="pillar-grid reveal">
            <div className="pillar">
              <div className="icon"><BodyIcon /></div>
              <h3>Body</h3>
              <p>Your health is the foundation. Nutrition, movement, energy, recovery, and your actual relationship with your body, not punishment, not perfection. Strength and vitality you can rely on.</p>
            </div>
            <div className="pillar">
              <div className="icon"><MindIcon /></div>
              <h3>Mind</h3>
              <p>Your identity shapes how you live. Beliefs, patterns, boundaries and confidence, including the stories that got you this far but might not be the ones you need for what&apos;s next.</p>
            </div>
            <div className="pillar">
              <div className="icon"><SoulIcon /></div>
              <h3>Soul</h3>
              <p>Eventually the questions get bigger: what actually matters to you, what you&apos;re here to contribute, what kind of relationships you actually want. Meaning, not just logistics.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="story center">
        <div className="wrap-narrow">
          <h2>She doesn&apos;t arrive overnight.</h2>
          <p>
            She&apos;s built in the boundary you finally set. The promise you actually keep. The
            conversation you stop avoiding. The food you choose because you care about your body. The
            rest you finally let yourself take. The relationship you stop settling for. This is identity
            change in real life, not a before-and-after photo. A genuinely different way of living.
          </p>
        </div>
      </section>

      <Testimonials eyebrow="What changes when you do this work" />

      <section className="closing">
        <div className="wrap">
          <div className="eyebrow center" style={{ color: "var(--sage-200)" }}>Six months, one honest chapter</div>
          <h2>Not for someone looking for a quick fix.</h2>
          <p>
            It&apos;s for the woman who already knows something has to change, not because she&apos;s
            broken, because she&apos;s ready to stop putting herself last.
          </p>
          <a href="#book" className="cta on-dark">I&apos;m ready, book a call <span className="arrow">→</span></a>
          <div className="alt">Want to start smaller first? Look at <Link href="/promise-kept">Promise Kept</Link>.</div>
        </div>
      </section>

      <section className="final on-light" id="book">
        <div className="eyebrow center">Maybe this is it</div>
        <div className="wrap-narrow">
          <h2 style={{ marginTop: "16px" }}>You don&apos;t need to know exactly who you&apos;re becoming yet.</h2>
          <p className="sub2">
            You just have to be willing to meet her. I can&apos;t do this work for you. But I can make
            sure you&apos;re not doing it by yourself.
          </p>
          <Link href="/contact" className="cta">Book a discovery call <span className="arrow">→</span></Link>
          <div className="recipe-line">Life is a recipe. <b>What are you creating?</b></div>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
