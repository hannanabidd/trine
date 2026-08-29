"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const PROGRAMS = [
  { href: "/kitchen-reset", name: "Kitchen Reset" },
  { href: "/stop-starting-monday", name: "Stop Starting Monday" },
  { href: "/what-if-i-knew-i-couldnt-fail", name: "What If I Knew I Couldn't Fail" },
  { href: "/reclaim-her", name: "Reclaim Her" },
  { href: "/promise-kept", name: "Promise Kept" },
];

export default function SiteNav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

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
            <Link href="/" className={pathname === "/" ? "active" : undefined}>Home</Link>
            <Link href="/about" className={pathname === "/about" ? "active" : undefined}>About</Link>
            {PROGRAMS.map((p) => (
              <Link key={p.href} href={p.href} className={pathname === p.href ? "active" : undefined}>{p.name}</Link>
            ))}
            <Link href="/blogs" className={pathname.startsWith("/blogs") ? "active" : undefined}>Blogs</Link>
            <Link href="/contact" className={pathname === "/contact" ? "active" : undefined}>Contact</Link>
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
        <Link href="/" className={`m-link${pathname === "/" ? " active" : ""}`} onClick={() => setMobileOpen(false)}>Home</Link>
        <div className="m-sub-label">Programs</div>
        {PROGRAMS.map((p) => (
          <Link key={p.href} href={p.href} className={`m-link m-link-sm${pathname === p.href ? " active" : ""}`} onClick={() => setMobileOpen(false)}>
            {p.name}
          </Link>
        ))}
        <div className="m-sub-label">Trine</div>
        <Link href="/about" className={`m-link m-link-sm${pathname === "/about" ? " active" : ""}`} onClick={() => setMobileOpen(false)}>About</Link>
        <Link href="/blogs" className={`m-link${pathname.startsWith("/blogs") ? " active" : ""}`} onClick={() => setMobileOpen(false)}>Blogs</Link>
        <Link href="/contact" className={`m-link m-link-sm${pathname === "/contact" ? " active" : ""}`} onClick={() => setMobileOpen(false)}>Contact</Link>
        <Link href="/#book" className="cta on-dark m-cta" onClick={() => setMobileOpen(false)}>
          Book a chat <span className="arrow">→</span>
        </Link>
      </div>
    </nav>
  );
}
