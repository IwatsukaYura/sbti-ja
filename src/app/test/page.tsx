"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { QUESTIONS } from "@/data/questions";

export default function TestPage() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);

  const total = QUESTIONS.length;
  const current = QUESTIONS[step];
  const progress = (step / total) * 100;

  const handleChoice = (choiceIndex: number) => {
    const next = [...answers, choiceIndex];
    setAnswers(next);

    if (step + 1 >= total) {
      router.push(`/result?a=${next.join("")}`);
    } else {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    if (step === 0) return;
    setAnswers(answers.slice(0, -1));
    setStep(step - 1);
  };

  return (
    <div className="flex flex-col flex-1 bg-black text-zinc-100 font-sans">
      <div className="h-1 bg-zinc-900">
        <div
          className="h-full bg-lime-400 transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="px-6 py-6 flex items-center justify-between">
        <button
          onClick={handleBack}
          disabled={step === 0}
          className="text-sm text-zinc-500 disabled:opacity-30 disabled:cursor-not-allowed hover:text-zinc-300 transition-colors"
        >
          ← 戻る
        </button>
        <span className="font-mono text-xs text-zinc-500">
          {step + 1} / {total}
        </span>
      </div>

      <main className="flex flex-col flex-1 items-center justify-center px-6 py-12">
        <div className="max-w-2xl w-full">
          <p className="text-xs tracking-[0.3em] text-lime-400 mb-6 text-center">
            Q{current.id}
          </p>
          <h1 className="text-2xl sm:text-3xl font-bold text-center mb-12 leading-relaxed">
            {current.text}
          </h1>
          <div className="flex flex-col gap-3">
            {current.choices.map((choice, idx) => (
              <button
                key={idx}
                onClick={() => handleChoice(idx)}
                className="text-left px-6 py-5 rounded-lg border border-zinc-800 bg-zinc-950 hover:border-lime-400 hover:bg-zinc-900 transition-colors"
              >
                <span className="text-base sm:text-lg">{choice.label}</span>
              </button>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
