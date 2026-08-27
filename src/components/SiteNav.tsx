"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const PROGRAMS = [
  { href: "/kitchen-reset", name: "Kitchen Reset" },
  { href: "/30-day-challenge", name: "30-Day Challenge" },
  { href: "/8-week-program", name: "8-Week Program" },
  { href: "/reclaim-her", name: "Reclaim Her" },
  { href: "/promise-kept", name: "Promise Kept" },
];

export default function SiteNav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <nav className="site-nav">
      <div className="wrap">
        <div className="nav-pill">
          <Link href="/" className="brand-lockup">
            <Image src="/images/Logo.svg" alt="Trine" width={38} height={38} className="nav-badge-img" unoptimized />
          </Link>

          <div className="navlinks">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            {PROGRAMS.map((p) => (
              <Link key={p.href} href={p.href}>{p.name}</Link>
            ))}
            <Link href="/contact">Contact</Link>
          </div>

          <div className="nav-right">
            <Link href="/#book" className="cta nav-cta-desktop">
              Book a chat <span className="arrow">→</span>
            </Link>
            <button
              type="button"
              className={`nav-burger${mobileOpen ? " open" : ""}`}
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((v) => !v)}
            >
              <span /><span /><span />
            </button>
          </div>
        </div>
      </div>

      <div className={`mobile-overlay${mobileOpen ? " open" : ""}`}>
        <button type="button" className="mobile-close" aria-label="Close menu" onClick={() => setMobileOpen(false)}>
          ✕
        </button>
        <Link href="/" className="m-link" onClick={() => setMobileOpen(false)}>Home</Link>
        <div className="m-sub-label">Programs</div>
        {PROGRAMS.map((p) => (
          <Link key={p.href} href={p.href} className="m-link m-link-sm" onClick={() => setMobileOpen(false)}>
            {p.name}
          </Link>
        ))}
        <div className="m-sub-label">Trine</div>
        <Link href="/about" className="m-link m-link-sm" onClick={() => setMobileOpen(false)}>About Trine</Link>
        <Link href="/contact" className="m-link m-link-sm" onClick={() => setMobileOpen(false)}>Contact</Link>
        <Link href="/#book" className="cta on-dark m-cta" onClick={() => setMobileOpen(false)}>
          Book a chat <span className="arrow">→</span>
        </Link>
      </div>
    </nav>
  );
}
