import type { Metadata } from "next";
import Image from "next/image";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import ContactForm from "@/components/ContactForm";
import { MailIcon, PinIcon, ClockIcon } from "@/components/ContactIcons";

export const metadata: Metadata = {
  title: "Contact · Book a Free 15-Minute Chat · Trine",
  description:
    "Get in touch with Katrina Gall at Trine. No pitch, no pressure. Just an honest conversation about where you're at.",
};

export default function ContactPage() {
  return (
    <>
      <SiteNav />

      <section className="banner">
        <Image
          src="/images/banner-img.jpeg"
          alt="Sunrise over a quiet beach, two people walking along the shoreline"
          fill
          priority
          sizes="100vw"
        />
        <div className="banner-content">
          <div className="wrap">
            <div className="eyebrow">Get in touch</div>
            <h1>Let&apos;s have an honest conversation.</h1>
            <p>No pitch, no pressure. Just a real conversation about where you&apos;re at and whether this is a fit.</p>
          </div>
        </div>
      </section>

      <section className="contact-section">
        <div className="wrap">
          <div className="contact-grid">
            <ContactForm />

            <div className="contact-info">
              <div className="info-item">
                <div className="icon"><MailIcon /></div>
                <div>
                  <h4>Email</h4>
                  <a href="mailto:katrinagcoaching@gmail.com">katrinagcoaching@gmail.com</a>
                </div>
              </div>
              <div className="info-item">
                <div className="icon"><PinIcon /></div>
                <div>
                  <h4>Location</h4>
                  <p>Based in Brisbane · Sessions online, available worldwide</p>
                </div>
              </div>
              <div className="info-item">
                <div className="icon"><ClockIcon /></div>
                <div>
                  <h4>Hours</h4>
                  <p>Monday – Friday, 8:30am – 5:00pm AEST</p>
                </div>
              </div>
              <div className="info-card-cta">
                <h3>Prefer to talk first?</h3>
                <p>Book a free 15-minute chat, no pitch, no obligation.</p>
                <a href="#contact-form" className="cta on-dark">Book a chat <span className="arrow">→</span></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
