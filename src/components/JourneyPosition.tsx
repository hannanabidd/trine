import Link from "next/link";

const STAGES = [
  { label: "Awaken", href: "/kitchen-reset" },
  { label: "Reset", href: "/stop-starting-monday" },
  { label: "Rebuild", href: "/what-if-i-knew-i-couldnt-fail" },
  { label: "Reclaim", href: "/reclaim-her" },
  { label: "Live differently", href: "/promise-kept" },
];

export default function JourneyPosition({ active }: { active: number }) {
  return (
    <div className="journey-position">
      <div className="jp-track">
        {STAGES.map((_, i) => (
          <div key={i} className={`jp-seg${i <= active ? " active" : ""}`} />
        ))}
      </div>
      <div className="jp-labels">
        {STAGES.map((stage, i) =>
          i === active ? (
            <span key={stage.label} className="jp-current">
              {stage.label}
            </span>
          ) : (
            <Link key={stage.label} href={stage.href}>
              {stage.label}
            </Link>
          )
        )}
      </div>
    </div>
  );
}
