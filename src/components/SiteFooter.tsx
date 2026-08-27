import Image from "next/image";
import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer>
      <div className="wrap">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link href="/" className="brand-lockup">
              <Image src="/images/Logo-White.png" alt="Trine" width={44} height={44} className="nav-badge-img" />
              {/* <span className="brand">
                <span className="word">Trine</span>
                <span className="sub">Katrina Gall</span>
              </span> */}
            </Link>
            <p>
              Built from lived experience, not theory. Trine has walked the path from burnout to
              complete rebuild, and now guides other people through the same transformation.
            </p>
          </div>
          <div>
            <h4>Programs</h4>
            <ul>
              <li><Link href="/kitchen-reset">Kitchen Reset</Link></li>
              <li><Link href="/30-day-challenge">30-Day Challenge</Link></li>
              <li><Link href="/8-week-program">8-Week Program</Link></li>
              <li><Link href="/reclaim-her">Reclaim Her</Link></li>
              <li><Link href="/promise-kept">Promise Kept</Link></li>
            </ul>
          </div>
          <div>
            <h4>Quick links</h4>
            <ul>
              <li><Link href="/about">About Trine</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <div>© 2026 Trine · Do Life Differently</div>
          <div>
            <a href="https://www.facebook.com/katrina.gall/" target="_blank" rel="noopener">
              Facebook
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
