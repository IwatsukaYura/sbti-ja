import Link from "next/link";
import { TypeCard } from "@/components/TypeCard";
import { TYPES } from "@/data/types";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 bg-black text-zinc-100 font-sans">
      <section className="flex flex-col items-center justify-center min-h-[80vh] px-6 py-20 text-center">
        <p className="text-xs tracking-[0.3em] text-lime-400 mb-6">
          BETA · JAPANESE VERSION
        </p>
        <h1 className="text-6xl sm:text-8xl font-bold tracking-tight mb-6">
          SBTI
        </h1>
        <p className="text-lg sm:text-xl text-zinc-400 max-w-xl mb-3">
          Silly Behavioral Type Indicator
        </p>
        <p className="text-base text-zinc-500 max-w-md mb-12 leading-relaxed">
          きれいな自分じゃなくて、
          <br />
          午前3時に投稿する方の自分を診断する。
        </p>
        <Link
          href="/test"
          className="inline-flex items-center justify-center h-14 px-10 rounded-full bg-lime-400 text-black font-semibold text-lg hover:bg-lime-300 transition-colors"
        >
          診断をはじめる
        </Link>
        <p className="text-xs text-zinc-600 mt-6">10問 · 1〜2分</p>
      </section>

      <section className="px-6 py-20 border-t border-zinc-900">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-3">27タイプ</h2>
            <p className="text-zinc-500">
              25の標準タイプ + 2の隠しタイプ。あなたの回答はこのどれかに着地する。
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {TYPES.map((t) => (
              <TypeCard key={t.code} type={t} />
            ))}
          </div>
        </div>
      </section>

      <footer className="px-6 py-10 border-t border-zinc-900 text-center text-xs text-zinc-600">
        <p className="mb-2">
          SBTI Japanese Edition (beta) · 本家:{" "}
          <a
            href="https://sbti.dev/en"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-zinc-400"
          >
            sbti.dev
          </a>
        </p>
        <p>これはエンタメです。心理検査の代替にはなりません。</p>
      </footer>
    </div>
  );
}
