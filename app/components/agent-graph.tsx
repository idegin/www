const NODES = [
  { id: "manager", label: "Human Manager", x: 200, y: 62, kind: "human" },
  { id: "ops", label: "Operations AI", x: 84, y: 184, kind: "agent" },
  { id: "finance", label: "Finance AI", x: 316, y: 184, kind: "agent" },
  { id: "sales", label: "Sales AI", x: 78, y: 322, kind: "agent" },
  { id: "support", label: "Support AI", x: 322, y: 322, kind: "agent" },
  { id: "knowledge", label: "Knowledge AI", x: 140, y: 452, kind: "agent" },
  { id: "analytics", label: "Analytics AI", x: 262, y: 452, kind: "agent" },
] as const;

const PRIMARY_EDGES = [
  ["manager", "ops"],
  ["manager", "finance"],
  ["manager", "sales"],
  ["manager", "support"],
] as const;

const MESH_EDGES = [
  ["ops", "finance"],
  ["ops", "knowledge"],
  ["finance", "analytics"],
  ["sales", "knowledge"],
  ["support", "analytics"],
  ["knowledge", "analytics"],
] as const;

const BY_ID = Object.fromEntries(NODES.map((n) => [n.id, n]));

function line([a, b]: readonly [string, string]) {
  const from = BY_ID[a];
  const to = BY_ID[b];
  return { x1: from.x, y1: from.y, x2: to.x, y2: to.y, key: `${a}-${b}` };
}

export function AgentGraph() {
  return (
    <div className="relative rounded-2xl border border-white/10 bg-midnight-900/50 p-5 shadow-2xl backdrop-blur-sm">
      <span className="reg-mark left-2.5 top-2.5" aria-hidden="true" />
      <span className="reg-mark right-2.5 top-2.5" aria-hidden="true" />
      <span className="reg-mark bottom-2.5 left-2.5" aria-hidden="true" />
      <span className="reg-mark bottom-2.5 right-2.5" aria-hidden="true" />

      <div className="flex items-center justify-between font-mono text-2xs uppercase tracking-wider text-ink-400">
        <span>sys.map / orchestration</span>
        <span className="inline-flex items-center gap-1.5 text-primary-300">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary-400 animate-pulse-ring" />
          live
        </span>
      </div>

      <div className="relative mt-3 aspect-4/5 w-full">
        <svg
          viewBox="0 0 400 500"
          fill="none"
          preserveAspectRatio="xMidYMid meet"
          className="absolute inset-0 h-full w-full"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="edge" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#5884ff" stopOpacity="0.7" />
              <stop offset="1" stopColor="#175cff" stopOpacity="0.15" />
            </linearGradient>
          </defs>
          {MESH_EDGES.map(line).map((l) => (
            <line
              key={l.key}
              x1={l.x1}
              y1={l.y1}
              x2={l.x2}
              y2={l.y2}
              stroke="#ffffff"
              strokeOpacity="0.08"
              strokeWidth="1"
            />
          ))}
          {PRIMARY_EDGES.map(line).map((l) => (
            <line
              key={l.key}
              x1={l.x1}
              y1={l.y1}
              x2={l.x2}
              y2={l.y2}
              stroke="url(#edge)"
              strokeWidth="1.5"
              strokeDasharray="5 5"
              className="animate-dash"
            />
          ))}
        </svg>

        <span
          className="absolute h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-gold-400/25 animate-orbit"
          style={{ left: "50%", top: "12.4%" }}
          aria-hidden="true"
        />

        {NODES.map((node) => {
          const isHuman = node.kind === "human";
          return (
            <div
              key={node.id}
              className="absolute -translate-x-1/2 -translate-y-1/2"
              style={{
                left: `${(node.x / 400) * 100}%`,
                top: `${(node.y / 500) * 100}%`,
              }}
            >
              <div
                className={`flex items-center gap-2 rounded-lg border px-2.5 py-1.5 shadow-lg backdrop-blur-md ${
                  isHuman
                    ? "border-gold-400/40 bg-midnight-800/90"
                    : "border-white/10 bg-midnight-800/80"
                }`}
              >
                <span className="relative flex h-2 w-2 shrink-0">
                  <span
                    className={`absolute inline-flex h-full w-full rounded-full animate-pulse-ring ${
                      isHuman ? "bg-gold-400" : "bg-primary-500"
                    }`}
                  />
                  <span
                    className={`relative inline-flex h-2 w-2 rounded-full ${
                      isHuman ? "bg-gold-400" : "bg-primary-400"
                    }`}
                  />
                </span>
                <span
                  className={`whitespace-nowrap font-mono text-2xs uppercase tracking-wider ${
                    isHuman ? "text-gold-200" : "text-ink-200"
                  }`}
                >
                  {node.label}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-3 flex items-center justify-between font-mono text-2xs uppercase tracking-wider text-ink-500">
        <span>07 nodes</span>
        <span>auto-orchestrated · realtime</span>
      </div>
    </div>
  );
}
