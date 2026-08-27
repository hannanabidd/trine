import Image from "next/image";
import Link from "next/link";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import { BodyIcon, MindIcon, SoulIcon } from "@/components/PillarIcons";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <SiteNav />
      <div className="credbar">
        Chef <b>·</b> Registered Nutritionist <b>·</b> Midlife Identity Coach
      </div>

      {/* ================= HERO ================= */}
      <section className="hero">
        <div className="wrap hero-grid">
          <div className="reveal">
            <div className="eyebrow">For the successful and quietly exhausted</div>
            <h1>
              You built the life.
              {/* <br /> */}
              So why does it feel like
              {/* <br /> */}
              <em> someone else&apos;s?</em>
            </h1>
            <p className="sub">
              You&apos;ve built a career or business you&apos;re proud of. You&apos;re still exhausted,
              still questioning things, still waiting to feel like yourself again. This is for people
              exactly like you.
            </p>
            <Link href="/#book" className="cta">
              Book a chat <span className="arrow">→</span>
            </Link>
            <div className="hero-note">Free, 15 minutes. No pitch, no pressure. Just a conversation.</div>
          </div>
          <div className="photo-block reveal">
            <Image
              src="/images/trine-picture.jpg"
              alt="Katrina Gall, founder of Trine, laughing outdoors"
              fill
              priority
              sizes="(max-width: 860px) 100vw, 40vw"
              style={{ objectFit: "cover", objectPosition: "center 25%" }}
            />
          </div>
        </div>
      </section>

      {/* ================= QUALIFY ================= */}
      <section className="qualify">
        <div className="wrap">
          <div className="qualify-box">
            <h3>This is for you if:</h3>
            <ul>
              <li>You&apos;ve built something real: a career, a business, a life that looks good on paper.</li>
              <li>You&apos;re still tired in a way that success didn&apos;t fix.</li>
              <li>You&apos;re starting to ask bigger questions about what&apos;s next, even if you can&apos;t fully name them yet.</li>
              <li>You&apos;re ready for an honest conversation, not a sales pitch.</li>
            </ul>
          </div>
        </div>
      </section>

      <div className="divider" style={{ margin: "72px 0" }}><span>Where you&apos;re at</span></div>

      {/* ================= MANIFESTO ================= */}
      <section className="manifesto">
        <div className="wrap">
          <h2>
            You don&apos;t need a <span className="strike">convertible</span> in midlife.
            <br />
            You need a kitchen table, a hard truth, and someone who&apos;s actually done it.
          </h2>
          <div className="cap">This isn&apos;t a crisis. It&apos;s a recipe.</div>
        </div>
      </section>

      {/* ================= WELCOME / QUOTE LINES ================= */}
      <section className="welcome">
        <div className="wrap">
          <div className="welcome-head reveal">
            <div className="eyebrow">You haven&apos;t lost yourself</div>
            <h2>You&apos;ve just been last on your own list for far too long.</h2>
          </div>
          <div className="lines reveal">
            <p>Maybe you&apos;re successful on paper but exhausted underneath it.</p>
            <p>Maybe your relationships have become more functional than connected.</p>
            <p>Maybe you&apos;re tired of surface-level conversations that no longer fit.</p>
            <p>Maybe you&apos;re questioning whether the life you built is the life you want to keep living.</p>
          </div>
          <p className="welcome-close">
            That isn&apos;t selfish, and it isn&apos;t a midlife crisis. It&apos;s just the first honest
            thing you&apos;ve felt in a long time. <b>You don&apos;t have to figure it out alone.</b>
          </p>
        </div>
      </section>

      <div className="divider"><span>The approach</span></div>

      {/* ================= PILLARS ================= */}
      <section className="pillars">
        <div className="wrap">
          <div className="pillars-head reveal">
            <div className="eyebrow">The approach</div>
            <h2>You are not one problem to solve.</h2>
          </div>
          <p className="pillars-intro reveal">
            We are what we think, and what we eat. Change one, and the other tends to follow. That&apos;s
            why we don&apos;t put you in a box and work on one piece of you at a time. Your body, your
            mind and what actually matters to you are too tangled up to separate.
          </p>
          <div className="pillar-grid reveal">
            <div className="pillar">
              <div className="icon"><BodyIcon /></div>
              <h3>Body</h3>
              <p>Health, movement, energy, and the habits that support who you&apos;re becoming. Nutrition lives here too, as one tool, not the whole toolkit.</p>
            </div>
            <div className="pillar">
              <div className="icon"><MindIcon /></div>
              <h3>Mind</h3>
              <p>Beliefs, identity, boundaries, confidence, and the stories you&apos;ve been living by without questioning them.</p>
            </div>
            <div className="pillar">
              <div className="icon"><SoulIcon /></div>
              <h3>Soul</h3>
              <p>Purpose, meaning, connection, and the deeper questions that start mattering once you&apos;re not too busy to hear them.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= JOURNEY ================= */}
      <section className="journey">
        <div className="wrap">
          <div className="journey-head reveal">
            <div className="eyebrow">There is no single starting point</div>
            <h2>Wherever you&apos;re at, there&apos;s a place to begin.</h2>
            <p>
              You might simply know something needs to change. You might want a practical reset, or
              accountability and community. Or you might be ready to completely rethink who you are and
              how you want to live.
            </p>
          </div>
          <div className="stepper reveal">
            <div className="step">
              <div className="dot-row"><div className="dot">1</div><div className="connector"></div></div>
              <h3>Awaken</h3>
              <p>&quot;Something has to change.&quot;</p>
            </div>
            <div className="step">
              <div className="dot-row"><div className="dot">2</div><div className="connector"></div></div>
              <h3>Reset</h3>
              <p>&quot;I&apos;m ready to make one promise to myself.&quot;</p>
            </div>
            <div className="step">
              <div className="dot-row"><div className="dot">3</div><div className="connector"></div></div>
              <h3>Rebuild</h3>
              <p>&quot;I&apos;m becoming someone different.&quot;</p>
            </div>
            <div className="step">
              <div className="dot-row"><div className="dot">4</div><div className="connector"></div></div>
              <h3>Reclaim</h3>
              <p>&quot;I know who I am now.&quot;</p>
            </div>
            <div className="step">
              <div className="dot-row"><div className="dot">5</div><div className="connector"></div></div>
              <h3>Live differently</h3>
              <p>&quot;This is how I choose to live.&quot;</p>
            </div>
          </div>
          <div className="journey-cta reveal">
            <Link href="/contact" className="cta ghost">Find your starting point <span className="arrow">→</span></Link>
          </div>
        </div>
      </section>

      {/* ================= IMAGINE ================= */}
      <section className="imagine">
        <div className="wrap">
          <div className="imagine-head reveal">
            <div className="eyebrow">What could change</div>
          </div>
          <ul className="reveal">
            <li>Waking up in a body that finally feels like <b>home</b> again.</li>
            <li>Knowing exactly who you are, underneath the job title.</li>
            <li>Trusting yourself again, without needing a plan for everything.</li>
            <li>Being done with relationships that stay on the surface.</li>
            <li>Feeling <b>unstoppable</b>, not just fine.</li>
          </ul>
        </div>
      </section>

      {/* ================= KITCHEN RESET ================= */}
      <section className="kitchen" id="kitchen-reset">
        <div className="wrap">
          <Link href="/kitchen-reset" className="kitchen-box reveal" style={{ textDecoration: "none", color: "inherit" }}>
            <div>
              <div className="eyebrow">Start small · Free</div>
              <h2>Sometimes change starts in the kitchen.</h2>
              <p>
                Before we change your whole life, let&apos;s look at what&apos;s feeding it. A practical
                first step for anyone who wants their home environment to support who they&apos;re
                becoming. Not another complicated diet. Just clarity.
              </p>
            </div>
            <div className="soon-tag">Coming soon</div>
          </Link>
        </div>
      </section>

      {/* ================= 30-DAY CHALLENGE ================= */}
      <section className="offer" id="30-day">
        <div className="wrap">
          <div className="offer-card dc reveal">
            <div>
              <div className="eyebrow">The 30-day challenge</div>
              <h2>One habit. Thirty days. Proof that you can actually keep a promise to yourself.</h2>
              <p>
                The smallest real step on the ladder: pick one habit and commit to it for thirty days,
                with a weekly coaching call to keep you honest and moving. Not a detox. Not a diet. A
                trial run for doing this differently.
              </p>
              <div className="offer-detail">$59 &nbsp;·&nbsp; ONE HABIT &nbsp;·&nbsp; WEEKLY COACHING CALL</div>
              <Link href="/30-day-challenge" className="cta">Start the challenge <span className="arrow">→</span></Link>
            </div>
            <div className="offer-side grad-mint"></div>
          </div>
        </div>
      </section>

      {/* ================= 8-WEEK PROGRAM ================= */}
      <section className="offer" id="8-week">
        <div className="wrap">
          <div className="offer-card ew reveal">
            <div>
              <div className="eyebrow">The 8-week group program</div>
              <h2>Eight weeks of the questions that actually change how you see yourself.</h2>
              <p>
                Not habit stacking. Not a nutrition plan. Not another challenge. This is small-group
                identity work, moving from where am I to what is my why, alongside a handful of people
                doing the same deep work at the same time.
              </p>
              <div className="offer-detail">$897 &nbsp;·&nbsp; SMALL GROUP &nbsp;·&nbsp; APPLICATIONS OPEN QUARTERLY</div>
              <Link href="/8-week-program" className="cta">Explore the 8-Week Program <span className="arrow">→</span></Link>
            </div>
            <div className="offer-side grad-gold"></div>
          </div>
        </div>
      </section>

      {/* ================= RECLAIM HER ================= */}
      <section className="offer" id="reclaim-her">
        <div className="wrap">
          <div className="offer-card rh reveal">
            <div>
              <div className="eyebrow">The 6-month identity &amp; transformation program</div>
              <h2>You&apos;ve built a successful life. Now it&apos;s time to build one that feels like yours.</h2>
              <p>
                Reclaim Her is for women who are done coasting through their own life on other
                people&apos;s terms. Identity. Health. Relationships. Purpose. Energy. Beliefs. And the
                question underneath all of it: who am I now, and who do I want to become?
              </p>
              <div className="offer-detail">$5,997 &nbsp;·&nbsp; 1:1 &nbsp;·&nbsp; 6 MONTHS &nbsp;·&nbsp; WOMEN ONLY</div>
              <p style={{ fontStyle: "italic", fontSize: "15px", opacity: 0.75 }}>
                Because a new life isn&apos;t something you buy off a lot. It&apos;s something you
                build, slowly, on purpose, the same way you&apos;d build a good meal.
              </p>
              <Link href="/reclaim-her" className="cta on-dark">Discover Reclaim Her <span className="arrow">→</span></Link>
            </div>
            <div className="offer-side grad-sage"></div>
          </div>
        </div>
      </section>

      {/* ================= PROMISE KEPT ================= */}
      <section className="offer" id="promise-kept">
        <div className="wrap">
          <div className="offer-card pk reveal">
            <div>
              <div className="eyebrow">Keep the promise</div>
              <h2>One habit a month. Twelve months. A completely different person by the end of it.</h2>
              <p>
                Promise Kept is a year-long commitment to yourself, built one habit at a time. Each
                month you choose the one habit you&apos;re ready to keep: thirty days to actually build
                it, not just start it. Then the next month, the next one.
              </p>
              <p>You&apos;re not doing it alone: a weekly online session, weekly guidance, and a community of people doing the same work alongside you.</p>
              <div className="offer-detail">$98 / MONTH &nbsp;·&nbsp; 12-MONTH COMMITMENT &nbsp;·&nbsp; OPENS DECEMBER &nbsp;·&nbsp; NEW MEMBERS WELCOME EVERY MONTH AFTER</div>
              <Link href="/promise-kept" className="cta">Join the waitlist <span className="arrow">→</span></Link>
            </div>
            <div className="offer-side grad-mint"></div>
          </div>
        </div>
      </section>

      {/* ================= ABOUT (trimmed) ================= */}
      <section className="about" id="about">
        <div className="wrap about-grid">
          <div className="about-photo reveal">
            <Image
              src="/images/tine-img.jpg"
              alt="Katrina Gall sitting outdoors on red rock, reflecting"
              fill
              sizes="(max-width: 960px) 100vw, 30vw"
              style={{ objectFit: "cover", objectPosition: "center 30%" }}
            />
          </div>
          <div className="reveal">
            <div className="eyebrow">Meet Katrina</div>
            <h2 style={{ margin: "16px 0 16px" }}>I&apos;m not coaching from the outside looking in.</h2>
            <p>
              I&apos;ve built businesses, burned out doing it, and had to rebuild my own health and sense
              of self while still running a life. I don&apos;t have a formula that fixes everyone. But
              I&apos;ve been through my own version of this, and I know what it actually takes to come
              out the other side.
            </p>
            <Link href="/about" className="cta ghost" style={{ marginTop: "10px" }}>Meet Katrina <span className="arrow">→</span></Link>
          </div>
        </div>
      </section>

      <Testimonials eyebrow="Stories of transformation" heading="People doing life differently." />

      {/* ================= FINAL CTA ================= */}
      <section className="final" id="book">
        <div className="wrap">
          <div className="eyebrow center">Take the first step</div>
          <h2>You don&apos;t have to have this figured out.</h2>
          <p className="sub2">
            You just have to be willing to talk about it honestly, with someone who isn&apos;t going to
            hand you a meal plan and call it done.
          </p>
          <a href="#" className="cta on-dark">Book a chat <span className="arrow">→</span></a>
          <div className="recipe-line">Life is a recipe. <b>What are you creating?</b></div>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
