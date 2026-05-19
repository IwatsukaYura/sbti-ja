import { DIMENSIONS } from "@/data/dimensions";
import type { ResultLevel, ResultProfile } from "@/lib/scoring";

interface RadarChartProps {
  profile: ResultProfile;
}

const SIZE = 500;
const CENTER = SIZE / 2;
const RADIUS = 170;
const LABEL_RADIUS = RADIUS + 28;
const LEVEL_RATIOS: Record<ResultLevel, number> = {
  low: 0.3,
  mid: 0.65,
  high: 1.0,
};
const RING_RATIOS = [0.3, 0.65, 1.0];

export function RadarChart({ profile }: RadarChartProps) {
  const count = DIMENSIONS.length;
  const angles = DIMENSIONS.map(
    (_, i) => (i * 2 * Math.PI) / count - Math.PI / 2,
  );

  const userPoints = DIMENSIONS.map((d, i) => {
    const ratio = LEVEL_RATIOS[profile[d.id]];
    const x = CENTER + RADIUS * ratio * Math.cos(angles[i]);
    const y = CENTER + RADIUS * ratio * Math.sin(angles[i]);
    return `${x.toFixed(1)},${y.toFixed(1)}`;
  }).join(" ");

  return (
    <svg
      viewBox={`0 0 ${SIZE} ${SIZE}`}
      className="w-full max-w-md mx-auto"
      role="img"
      aria-label="15次元プロファイルのレーダーチャート"
    >
      {RING_RATIOS.map((r) => (
        <circle
          key={r}
          cx={CENTER}
          cy={CENTER}
          r={RADIUS * r}
          fill="none"
          stroke="#27272a"
          strokeWidth={1}
        />
      ))}

      {DIMENSIONS.map((d, i) => {
        const x = CENTER + RADIUS * Math.cos(angles[i]);
        const y = CENTER + RADIUS * Math.sin(angles[i]);
        return (
          <line
            key={d.id}
            x1={CENTER}
            y1={CENTER}
            x2={x}
            y2={y}
            stroke="#27272a"
            strokeWidth={1}
          />
        );
      })}

      <polygon
        points={userPoints}
        fill="rgba(163, 230, 53, 0.25)"
        stroke="#a3e635"
        strokeWidth={2}
        strokeLinejoin="round"
      />

      {DIMENSIONS.map((d, i) => {
        const ratio = LEVEL_RATIOS[profile[d.id]];
        const x = CENTER + RADIUS * ratio * Math.cos(angles[i]);
        const y = CENTER + RADIUS * ratio * Math.sin(angles[i]);
        return <circle key={d.id} cx={x} cy={y} r={3.5} fill="#a3e635" />;
      })}

      {DIMENSIONS.map((d, i) => {
        const x = CENTER + LABEL_RADIUS * Math.cos(angles[i]);
        const y = CENTER + LABEL_RADIUS * Math.sin(angles[i]);
        return (
          <text
            key={d.id}
            x={x}
            y={y}
            fill="#71717a"
            fontSize={12}
            textAnchor="middle"
            dominantBaseline="middle"
            fontFamily="ui-monospace, monospace"
          >
            {d.id}
          </text>
        );
      })}
    </svg>
  );
}
