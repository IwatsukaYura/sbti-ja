import { DIMENSIONS, type DimensionId } from "@/data/dimensions";
import { QUESTIONS } from "@/data/questions";
import { TYPES, type TypeCode } from "@/data/types";
import { TYPE_PROFILES } from "@/data/type_profiles";

const HIDDEN_TRIGGER_THRESHOLD = 50;
const LEVEL_HIGH_THRESHOLD = 2;
const LEVEL_LOW_THRESHOLD = -2;
const MATCH_WEIGHT = 2;
const MISMATCH_WEIGHT = 1;

export type ResultLevel = "high" | "mid" | "low";
export type DimensionRawScores = Record<DimensionId, number>;
export type ResultProfile = Record<DimensionId, ResultLevel>;

export type ScoringResult = {
  typeCode: TypeCode;
  dimensionRawScores: DimensionRawScores;
  resultProfile: ResultProfile;
  isHiddenTrigger: boolean;
};

export function calculateResult(answerIndices: number[]): ScoringResult {
  if (answerIndices.length !== QUESTIONS.length) {
    throw new Error(
      `Expected ${QUESTIONS.length} answers, got ${answerIndices.length}`,
    );
  }

  answerIndices.forEach((idx, i) => {
    const q = QUESTIONS[i];
    if (idx < 0 || idx >= q.choices.length) {
      throw new Error(`Invalid choice index ${idx} for question ${q.id}`);
    }
  });

  const chosenChoices = answerIndices.map(
    (idx, i) => QUESTIONS[i].choices[idx],
  );

  const typeBonus = sumTypeBonus(chosenChoices);
  const dimensionRawScores = sumDimensionScores(chosenChoices);
  const resultProfile = levelizeScores(dimensionRawScores);

  const hiddenTrigger = findHiddenTrigger(typeBonus);
  if (hiddenTrigger) {
    return {
      typeCode: hiddenTrigger,
      dimensionRawScores,
      resultProfile,
      isHiddenTrigger: true,
    };
  }

  return {
    typeCode: findBestMatchingType(resultProfile),
    dimensionRawScores,
    resultProfile,
    isHiddenTrigger: false,
  };
}

function sumTypeBonus(
  choices: { typeBonus?: Partial<Record<TypeCode, number>> }[],
): Partial<Record<TypeCode, number>> {
  const result: Partial<Record<TypeCode, number>> = {};
  for (const choice of choices) {
    if (!choice.typeBonus) continue;
    for (const [tc, val] of Object.entries(choice.typeBonus) as [
      TypeCode,
      number,
    ][]) {
      result[tc] = (result[tc] ?? 0) + val;
    }
  }
  return result;
}

function sumDimensionScores(
  choices: { scores: Partial<Record<DimensionId, number>> }[],
): DimensionRawScores {
  const result = createEmptyDimensionScores();
  for (const choice of choices) {
    for (const [dim, val] of Object.entries(choice.scores) as [
      DimensionId,
      number,
    ][]) {
      result[dim] += val;
    }
  }
  return result;
}

function createEmptyDimensionScores(): DimensionRawScores {
  const result = {} as DimensionRawScores;
  for (const dim of DIMENSIONS) {
    result[dim.id] = 0;
  }
  return result;
}

function levelizeScores(scores: DimensionRawScores): ResultProfile {
  const result = {} as ResultProfile;
  for (const dim of DIMENSIONS) {
    const score = scores[dim.id];
    if (score >= LEVEL_HIGH_THRESHOLD) result[dim.id] = "high";
    else if (score <= LEVEL_LOW_THRESHOLD) result[dim.id] = "low";
    else result[dim.id] = "mid";
  }
  return result;
}

function findHiddenTrigger(
  typeBonus: Partial<Record<TypeCode, number>>,
): TypeCode | null {
  let best: TypeCode | null = null;
  let bestVal = HIDDEN_TRIGGER_THRESHOLD - 1;
  for (const [tc, val] of Object.entries(typeBonus) as [TypeCode, number][]) {
    if (val > bestVal) {
      bestVal = val;
      best = tc;
    }
  }
  return best;
}

function findBestMatchingType(userProfile: ResultProfile): TypeCode {
  let bestType: TypeCode = TYPES[0].code;
  let bestScore = -Infinity;
  let bestDensity = -1;

  for (const type of TYPES) {
    if (type.isHidden) continue;
    const profile = TYPE_PROFILES[type.code];
    let matches = 0;
    let mismatches = 0;
    let density = 0;

    for (const [dim, expected] of Object.entries(profile) as [
      DimensionId,
      "high" | "low",
    ][]) {
      density++;
      const actual = userProfile[dim];
      if (actual === expected) {
        matches++;
      } else if (actual !== "mid") {
        mismatches++;
      }
    }

    const score = matches * MATCH_WEIGHT - mismatches * MISMATCH_WEIGHT;
    if (
      score > bestScore ||
      (score === bestScore && density > bestDensity)
    ) {
      bestScore = score;
      bestDensity = density;
      bestType = type.code;
    }
  }

  return bestType;
}
