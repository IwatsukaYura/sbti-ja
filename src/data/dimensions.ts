export type ModelKey = "self" | "emotion" | "attitude" | "action" | "social";

export type DimensionId =
  | "S1"
  | "S2"
  | "S3"
  | "E1"
  | "E2"
  | "E3"
  | "A1"
  | "A2"
  | "A3"
  | "Ac1"
  | "Ac2"
  | "Ac3"
  | "So1"
  | "So2"
  | "So3";

export type Dimension = {
  id: DimensionId;
  model: ModelKey;
  label: string;
  highSideLabel: string;
  lowSideLabel: string;
  description: string;
};

export const DIMENSIONS: readonly Dimension[] = [
  {
    id: "S1",
    model: "self",
    label: "自己評価の安定性",
    highSideLabel: "自分像が安定",
    lowSideLabel: "自分像が揺らぐ",
    description: "自分への評価がブレずに保てるかどうか。",
  },
  {
    id: "S2",
    model: "self",
    label: "自己理解の明瞭さ",
    highSideLabel: "自分が見えてる",
    lowSideLabel: "自分が見えない",
    description: "自分のことを自分でちゃんと把握できているか。",
  },
  {
    id: "S3",
    model: "self",
    label: "内なる芯の強さ",
    highSideLabel: "芯が太い",
    lowSideLabel: "芯が細い",
    description: "譲れない核を内側に持っているか。",
  },
  {
    id: "E1",
    model: "emotion",
    label: "関係性での安心感",
    highSideLabel: "安心型",
    lowSideLabel: "不安型",
    description: "人との関係に安心していられるか、それとも不安が先立つか。",
  },
  {
    id: "E2",
    model: "emotion",
    label: "感情の投入量",
    highSideLabel: "深く投入",
    lowSideLabel: "浅く保つ",
    description: "関係に対してどれだけ感情を注ぎ込むか。",
  },
  {
    id: "E3",
    model: "emotion",
    label: "必要な独立性",
    highSideLabel: "距離が必要",
    lowSideLabel: "近さが心地よい",
    description: "どれだけ自分の時間と距離を確保したいか。",
  },
  {
    id: "A1",
    model: "attitude",
    label: "秩序への志向",
    highSideLabel: "秩序型",
    lowSideLabel: "衝動型",
    description: "物事を整えてから動きたいか、来た流れに乗るか。",
  },
  {
    id: "A2",
    model: "attitude",
    label: "ルールへの順応",
    highSideLabel: "ルール順守",
    lowSideLabel: "ルール逸脱",
    description: "既存のルールをどれだけ尊重するか、壊して通るか。",
  },
  {
    id: "A3",
    model: "attitude",
    label: "意味への執着",
    highSideLabel: "意味を求める",
    lowSideLabel: "意味を求めない",
    description: "物事に「意味」をどれだけ求めるか。",
  },
  {
    id: "Ac1",
    model: "action",
    label: "成長への前進",
    highSideLabel: "攻めの姿勢",
    lowSideLabel: "守りの姿勢",
    description: "成長へ向かって踏み出すか、リスクから一歩引くか。",
  },
  {
    id: "Ac2",
    model: "action",
    label: "決断の早さ",
    highSideLabel: "即断",
    lowSideLabel: "熟考",
    description: "決めるべき瞬間にどれだけ早く決められるか。",
  },
  {
    id: "Ac3",
    model: "action",
    label: "計画の着地率",
    highSideLabel: "着地する",
    lowSideLabel: "流れる",
    description: "立てた計画をどれだけ実際の結果に落とせるか。",
  },
  {
    id: "So1",
    model: "social",
    label: "他者への能動性",
    highSideLabel: "自分から動く",
    lowSideLabel: "相手を待つ",
    description: "人に自分から働きかけるか、相手の動きを待つか。",
  },
  {
    id: "So2",
    model: "social",
    label: "境界線の強さ",
    highSideLabel: "線を引ける",
    lowSideLabel: "境界が薄い",
    description: "自分と他人の線をどれだけはっきり引けるか。",
  },
  {
    id: "So3",
    model: "social",
    label: "自己の一貫性",
    highSideLabel: "どこでも自分",
    lowSideLabel: "場で変わる",
    description: "相手や場面が変わっても同じ自分でいられるか。",
  },
];
