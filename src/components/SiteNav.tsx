"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const PROGRAMS = [
  { href: "/kitchen-reset", name: "Kitchen Reset", tag: "Free · Coming soon" },
  { href: "/30-day-challenge", name: "30-Day Challenge", tag: "$59 · One habit" },
  { href: "/8-week-program", name: "8-Week Program", tag: "$897 · Small group" },
  { href: "/reclaim-her", name: "Reclaim Her", tag: "$5,997 · Women only" },
  { href: "/promise-kept", name: "Promise Kept", tag: "$98 / mo · 12 months" },
];

export default function SiteNav() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

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
            <span className="brand">
              <span className="word">Trine</span>
              <span className="sub">Katrina Gall</span>
            </span>
          </Link>

          <div className="navlinks">
            <Link href="/">Home</Link>

            <div
              className={`nav-item-dropdown${dropdownOpen ? " open" : ""}`}
              ref={dropdownRef}
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button
                type="button"
                className="nav-dropdown-trigger"
                onClick={() => setDropdownOpen((v) => !v)}
                aria-expanded={dropdownOpen}
              >
                Programs
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" className="chev">
                  <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <div className="nav-dropdown-panel">
                {PROGRAMS.map((p) => (
                  <Link key={p.href} href={p.href} className="nav-dropdown-item" onClick={() => setDropdownOpen(false)}>
                    <span className="dot" />
                    <span className="name">{p.name}</span>
                    <span className="tag">{p.tag}</span>
                  </Link>
                ))}
              </div>
            </div>

            <Link href="/about">About Trine</Link>
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
