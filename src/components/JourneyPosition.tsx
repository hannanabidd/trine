const STAGES = ["Awaken", "Reset", "Rebuild", "Reclaim", "Live differently"];

export default function JourneyPosition({ active }: { active: number }) {
  return (
    <div className="journey-position">
      <div className="jp-track">
        {STAGES.map((_, i) => (
          <div key={i} className={`jp-seg${i <= active ? " active" : ""}`} />
        ))}
      </div>
      <div className="jp-labels">
        {STAGES.map((stage, i) => (
          <span key={stage} className={i === active ? "jp-current" : undefined}>
            {stage}
          </span>
        ))}
      </div>
    </div>
  );
}
