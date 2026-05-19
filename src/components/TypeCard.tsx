import type { SbtiType } from "@/data/types";

interface TypeCardProps {
  type: SbtiType;
}

export function TypeCard({ type }: TypeCardProps) {
  return (
    <div
      className={`p-5 rounded-lg border border-zinc-800 bg-zinc-950 hover:border-lime-400 transition-colors ${
        type.isHidden ? "opacity-60" : ""
      }`}
    >
      <div className="flex items-center gap-2 mb-3">
        <span className="font-mono text-xs text-lime-400">{type.code}</span>
        {type.isHidden && <span className="text-xs">🔒</span>}
      </div>
      <h3 className="text-xl font-bold mb-2">{type.nickname}</h3>
      <p className="text-sm text-zinc-500 leading-relaxed">{type.catchCopy}</p>
    </div>
  );
}
