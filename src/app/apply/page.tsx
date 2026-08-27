import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ApplyForm from "@/components/ApplyForm";

export const metadata: Metadata = {
  title: "Apply · The 8-Week Program | Trine",
  description:
    "Application for Trine's 8-Week Program. $897 · small group · 8 weeks · applications open quarterly.",
};

export default function ApplyPage() {
  return (
    <>
      <nav className="minimal-nav">
        <div className="wrap">
          <Link href="/" className="brand-lockup">
            <Image src="/images/Logo.svg" alt="Trine" width={34} height={34} className="nav-badge-img" unoptimized />
            {/* <span className="brand">
              <span className="word">Trine</span>
              <span className="sub">Katrina Gall</span>
            </span> */}
          </Link>
          <Link href="/" className="backlink">← Back to site</Link>
        </div>
      </nav>

      <section className="intro">
        <div className="wrap-narrow">
          <div className="eyebrow">Application · The 8-Week Program</div>
          <h1>Before we begin, I&apos;d like to actually know you.</h1>
          <p>
            This isn&apos;t a checkout page. It&apos;s a small group, and small groups only work when
            everyone in them is genuinely ready. So before you commit, I want to know a little about
            where you&apos;re at and what you&apos;re hoping changes.
          </p>
          <p>
            Take your time with this. Some of these questions are the ones we&apos;ll actually be asking
            for the next eight weeks. This is just the start of that.
          </p>
          <div className="detail">$897 · SMALL GROUP · 8 WEEKS · APPLICATIONS OPEN QUARTERLY</div>
        </div>
      </section>

      <ApplyForm />

      <footer>
        <div className="tagline-footer">Trine · Do Life Differently</div>
      </footer>
    </>
  );
}
