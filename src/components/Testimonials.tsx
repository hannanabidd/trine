type TestimonialsProps = {
  eyebrow: string;
  heading?: string;
};

export default function Testimonials({ eyebrow, heading }: TestimonialsProps) {
  return (
    <section className="testi">
      <div className="wrap">
        <div className={heading ? "testi-head reveal" : "reveal"} style={heading ? undefined : { marginBottom: "28px" }}>
          <div className="eyebrow center">{eyebrow}</div>
          {heading ? <h2>{heading}</h2> : null}
        </div>
        <div className="testi-grid reveal">
          <div className="tcard">
            <div className="stars">★★★★★</div>
            <p>
              &quot;Your coaching has completely changed the way I lead my team and, more importantly,
              the way I live my life. You&apos;ve helped me build confidence, trust myself more, and
              approach challenges with a calmer, more positive perspective.&quot;
            </p>
            <div className="who">Carmen Godger, James Cook University</div>
          </div>
          <div className="tcard">
            <div className="stars">★★★★★</div>
            <p>
              &quot;The small group made a huge difference, welcoming, supportive, never overwhelming.
              I walked away not only with valuable knowledge but feeling motivated and genuinely
              supported.&quot;
            </p>
            <div className="who">Ally Real</div>
          </div>
        </div>
      </div>
    </section>
  );
}
