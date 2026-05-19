import Link from "next/link";
import { DIMENSIONS, type ModelKey } from "@/data/dimensions";
import { QUESTIONS } from "@/data/questions";
import { TYPES } from "@/data/types";
import { calculateResult, type ResultLevel } from "@/lib/scoring";

interface ResultPageProps {
  searchParams: Promise<{ a?: string }>;
}

const MODEL_ORDER: readonly ModelKey[] = [
  "self",
  "emotion",
  "attitude",
  "action",
  "social",
];

const MODEL_LABELS: Record<ModelKey, string> = {
  self: "自己モデル",
  emotion: "感情モデル",
  attitude: "態度モデル",
  action: "行動モデル",
  social: "社会モデル",
};

export default async function ResultPage({ searchParams }: ResultPageProps) {
  const { a } = await searchParams;

  if (!a) {
    return <ErrorView message="回答データがありません。" />;
  }

  const answers = a.split(",").map((s) => Number.parseInt(s, 10));
  if (
    answers.length !== QUESTIONS.length ||
    answers.some((n) => !Number.isInteger(n) || n < 0)
  ) {
    return <ErrorView message="回答データが不正です。" />;
  }

  let result;
  try {
    result = calculateResult(answers);
  } catch (e) {
    const message = e instanceof Error ? e.message : "判定エラー";
    return <ErrorView message={message} />;
  }

  const type = TYPES.find((t) => t.code === result.typeCode);
  if (!type) {
    return <ErrorView message="タイプが見つかりません。" />;
  }

  return (
    <div className="flex flex-col flex-1 bg-black text-zinc-100 font-sans">
      <section className="flex flex-col items-center justify-center min-h-[70vh] px-6 py-20 text-center">
        <p className="text-xs tracking-[0.3em] text-lime-400 mb-6">
          YOUR TYPE
        </p>
        <p className="font-mono text-2xl text-zinc-400 mb-4">{type.code}</p>
        <h1 className="text-5xl sm:text-7xl font-bold tracking-tight mb-6">
          {type.nickname}
        </h1>
        <p className="text-lg sm:text-xl text-zinc-300 max-w-xl mb-3 leading-relaxed">
          {type.catchCopy}
        </p>
        <p className="text-sm text-zinc-500 mb-10">{type.englishSubtitle}</p>
        {result.isHiddenTrigger && (
          <p className="text-xs tracking-widest text-lime-400 border border-lime-400 rounded-full px-4 py-2">
            🔒 HIDDEN TYPE UNLOCKED
          </p>
        )}
      </section>

      <section className="px-6 py-16 border-t border-zinc-900">
        <div className="max-w-3xl mx-auto">
          <div className="mb-10 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3">
              15次元プロファイル
            </h2>
            <p className="text-zinc-500 text-sm">
              あなたの回答から見えた、5モデル × 3次元のレベル。
            </p>
          </div>
          <div className="flex flex-col gap-8">
            {MODEL_ORDER.map((m) => (
              <div key={m}>
                <h3 className="text-sm tracking-widest text-lime-400 mb-3">
                  {MODEL_LABELS[m]}
                </h3>
                <div className="flex flex-col gap-3">
                  {DIMENSIONS.filter((d) => d.model === m).map((d) => (
                    <DimensionRow
                      key={d.id}
                      id={d.id}
                      label={d.label}
                      low={d.lowSideLabel}
                      high={d.highSideLabel}
                      level={result.resultProfile[d.id]}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 border-t border-zinc-900">
        <div className="max-w-md mx-auto flex flex-col gap-3">
          <Link
            href="/test"
            className="text-center px-6 py-4 rounded-full bg-lime-400 text-black font-semibold hover:bg-lime-300 transition-colors"
          >
            もう一度診断する
          </Link>
          <Link
            href="/"
            className="text-center px-6 py-4 rounded-full border border-zinc-800 text-zinc-300 hover:border-lime-400 transition-colors"
          >
            27タイプを見る
          </Link>
        </div>
      </section>

      <footer className="px-6 py-10 border-t border-zinc-900 text-center text-xs text-zinc-600">
        <p>これはエンタメです。心理検査の代替にはなりません。</p>
      </footer>
    </div>
  );
}

interface DimensionRowProps {
  id: string;
  label: string;
  low: string;
  high: string;
  level: ResultLevel;
}

function DimensionRow({ id, label, low, high, level }: DimensionRowProps) {
  return (
    <div>
      <div className="flex items-center gap-3 mb-2">
        <span className="font-mono text-xs text-zinc-500 w-10">{id}</span>
        <span className="text-sm text-zinc-300">{label}</span>
      </div>
      <div className="flex items-center gap-3 pl-12">
        <span className="text-xs text-zinc-500 w-24 text-right shrink-0">
          {low}
        </span>
        <div className="grid grid-cols-3 gap-1 flex-1 max-w-xs">
          <div
            className={`h-2 rounded-l-full ${level === "low" ? "bg-lime-400" : "bg-zinc-800"}`}
          />
          <div
            className={`h-2 ${level === "mid" ? "bg-lime-400" : "bg-zinc-800"}`}
          />
          <div
            className={`h-2 rounded-r-full ${level === "high" ? "bg-lime-400" : "bg-zinc-800"}`}
          />
        </div>
        <span className="text-xs text-zinc-500 w-24 shrink-0">{high}</span>
      </div>
    </div>
  );
}

function ErrorView({ message }: { message: string }) {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-black text-zinc-100 font-sans px-6 py-20 text-center">
      <h1 className="text-3xl font-bold mb-4">エラー</h1>
      <p className="text-zinc-400 mb-10">{message}</p>
      <Link
        href="/"
        className="px-6 py-3 rounded-full border border-zinc-800 hover:border-lime-400 transition-colors"
      >
        ホームへ戻る
      </Link>
    </div>
  );
}
