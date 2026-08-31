import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import FaqItem from "@/components/FaqItem";
import CalendlyButton from "@/components/CalendlyButton";

export const metadata: Metadata = {
  title: "About Trine · Katrina Gall",
  description:
    "Built from lived experience, not a textbook. How burnout, a cancer diagnosis, and walking away from a life she'd spent years building led Katrina Gall to start Trine.",
};

export default function AboutPage() {
  return (
    <>
      <SiteNav />

      <section className="page-hero">
        <Image src="/images/elements.png" alt="" aria-hidden="true" width={817} height={1218} className="leaf-accent" />
        <div className="wrap-narrow">
          <div className="eyebrow">About Trine</div>
          <h1>Built from lived experience. Not a textbook.</h1>
          <p>
            People often ask how I became a coach. Honestly, I don&apos;t think I chose it. I think it
            found me.
          </p>
          <p>
            For years I thought success meant pushing harder: working more, giving more, holding
            everything together for everyone else. Then life started making me stop, whether I wanted to
            or not. Burnout. A near-fatal spider bite. A cancer diagnosis and five weeks of radiation.
            Selling a business I&apos;d poured years into, and walking away from a life I&apos;d spent
            just as long building.
          </p>
          <p>
            Each one stripped away another layer of who I thought I had to be, until I finally had to
            ask: who am I when I&apos;m not performing, achieving, or taking care of everyone else?
          </p>
          <p>That question is the reason this work exists.</p>
        </div>
      </section>

      <div className="about-portrait-wrap">
        <div className="about-portrait">
          <Image
            src="/images/trine-picture.jpg"
            alt="Katrina Gall, founder of Trine"
            fill
            sizes="(max-width: 640px) 80vw, 340px"
            style={{ objectFit: "cover", objectPosition: "center 22%" }}
          />
        </div>
      </div>

      <div className="divider"><span>My story</span></div>

      <section className="story">
        <div className="wrap-narrow">
          <h2>I didn&apos;t become someone new. I finally listened to who was already there.</h2>
          <p>
            I spent years believing that if I worked hard enough, achieved enough, and kept everyone else
            happy, I&apos;d eventually land somewhere life felt easier. But there&apos;s always another
            goal when achievement is the measure: another business, another responsibility, another
            person who needs you.
          </p>
          <p>
            Then my body started talking. My energy changed. My relationships felt different, and the
            life that used to fit stopped fitting.
          </p>
          <p>
            That was the start of rebuilding: nutrition, health, habits, nervous system regulation,
            breathwork, identity work, more reading and unlearning than I can list here. But the real
            shift wasn&apos;t anything I learned. It was realising I didn&apos;t need fixing. I needed to
            stop abandoning myself, start trusting myself, and actually decide what mattered now.
          </p>
          <p>
            I got calmer. Steadier. More direct. I don&apos;t coach from a pedestal, because I&apos;ve
            stood exactly where you&apos;re standing, not knowing where the road goes, just knowing I
            couldn&apos;t keep walking the old one.
          </p>
        </div>
      </section>

      <section className="statband">
        <div className="wrap">
          <div className="statgrid">
            <div><div className="n">3</div><div className="l">Businesses built</div></div>
            <div><div className="n">1</div><div className="l">Full identity rebuild</div></div>
            <div><div className="n">350m</div><div className="l">Short of a Kilimanjaro summit</div></div>
          </div>
        </div>
      </section>

      <section className="story">
        <div className="wrap-narrow">
          <h2>What I actually believe</h2>
          <div className="lines">
            <p>Your body usually whispers a long time before it screams.</p>
            <p>Most of us spend years becoming who the people around us needed, until we forget who we actually are underneath it.</p>
            <p>Success without meaning eventually goes flat.</p>
            <p>
              Your health isn&apos;t separate from your purpose, your relationships aren&apos;t separate
              from your identity, and your habits aren&apos;t separate from where you end up. It&apos;s
              all connected, which is why I don&apos;t work on one piece of you at a time.
            </p>
            <p>Midlife doesn&apos;t have to be a crisis. It can be the first honest thing that&apos;s happened to you in years.</p>
          </div>
        </div>
      </section>

      <div className="divider"><span>Outside of coaching</span></div>

      <section className="story">
        <div className="wrap story-split">
          <div className="story-photo">
            <Image
              src="/images/tine-img.jpg"
              alt="Katrina Gall sitting on red rock in the outback at sunset"
              fill
              sizes="(max-width: 860px) 100vw, 45vw"
              style={{ objectFit: "cover", objectPosition: "center 30%" }}
            />
          </div>
          <div>
            <h2>I climbed Kilimanjaro and missed the summit by 350 metres.</h2>
            <p>I was gutted for a while. Then realised the summit was never really the point. It was who I became on the way up.</p>
            <p>
              I&apos;ve cycled Brisbane to Sydney for Tour de Cure. Trekked through Nepal. Built businesses,
              led teams, started again more than once. Every one of those taught me the same thing: the
              life you&apos;re waiting for gets built by what you actually choose along the way, not by
              arriving somewhere and having it handed to you.
            </p>
          </div>
        </div>
      </section>

      <section className="story">
        <div className="wrap-narrow">
          <h2>I&apos;m not who I used to be. I&apos;m not finished, either.</h2>
          <p>
            I&apos;m calmer than I was. More intentional, more present, less reactive. I trust myself more
            than I used to, and I protect my energy instead of handing it out to whoever asks first. I
            still do the work. Transformation isn&apos;t something you finish once, it&apos;s something
            you keep living.
          </p>
          <p>
            I don&apos;t promise to have every answer. I promise to meet you where you actually are, ask
            the questions you&apos;ve been avoiding, push when you need pushing, and remind you what
            you&apos;re capable of on the days you&apos;ve forgotten.
          </p>
          <CalendlyButton className="cta" style={{ marginTop: "10px" }}>Book a chat <span className="arrow">→</span></CalendlyButton>
        </div>
      </section>

      <section className="faq">
        <div className="wrap-narrow">
          <div className="eyebrow">Got a question</div>
          <h2 style={{ margin: "16px 0 30px", fontSize: "clamp(26px, 3.2vw, 36px)" }}>Frequently asked</h2>

          <FaqItem question="What does working with Trine actually look like?">
            Every engagement starts with a real conversation about where you&apos;re at, what
            you&apos;re carrying, and what you actually want. From there we figure out the right fit
            together. Nothing here is generic.
          </FaqItem>
          <FaqItem question="How is this different from other coaching?">
            I don&apos;t treat you like one problem to solve. Your body, your habits, your identity and
            your relationships are tangled together, so the work looks at all of it rather than picking
            one thing to fix in isolation. And I&apos;m not coaching from theory. I&apos;ve done my own
            version of this rebuild.
          </FaqItem>
          <FaqItem question="Who is this for?">
            People who&apos;ve achieved a lot and are quietly questioning what&apos;s next. People done
            with surface-level fixes, ready to look at the bigger picture. <Link href="/reclaim-her">Reclaim Her</Link> is
            specifically for women; everything else is open to anyone standing at that same crossroads.
            The easiest way to know if it&apos;s a fit is a conversation.
          </FaqItem>
          <FaqItem question="Where are sessions held?">
            Online, by video call. I&apos;m based in Brisbane, and work with people across Australia and internationally.
          </FaqItem>
          <FaqItem question="How do I get started?">
            Book a chat. No pressure, no pitch. Just an honest conversation about where you&apos;re at
            and whether I can actually help. If it&apos;s a fit, I&apos;ll tell you what&apos;s next. If
            it&apos;s not, I&apos;ll tell you that too.
          </FaqItem>
        </div>
      </section>

      <section className="final" id="book">
        <div className="wrap">
          <div className="eyebrow center">Ready when you are</div>
          <h2>You don&apos;t have to sort this out alone.</h2>
          <p className="sub2">I can&apos;t do the work for you. But I can sit across from you while you do it.</p>
          <CalendlyButton className="cta on-dark">Book a chat <span className="arrow">→</span></CalendlyButton>
          <div className="recipe-line">Life is a recipe. <b>What are you creating?</b></div>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
