import type { DimensionId } from "./dimensions";
import type { TypeCode } from "./types";

export type Choice = {
  label: string;
  scores: Partial<Record<DimensionId, number>>;
  typeBonus?: Partial<Record<TypeCode, number>>;
};

export type Question = {
  id: number;
  text: string;
  choices: Choice[];
};

export const QUESTIONS: readonly Question[] = [
  {
    id: 1,
    text: "朝起きてスマホで最初にやることは?",
    choices: [
      {
        label: "今日の予定とニュースをサクッと確認",
        scores: { A1: 2, Ac1: 1 },
      },
      {
        label: "SNSのタイムラインを開く",
        scores: { So1: 2, E2: 1 },
      },
      {
        label: "YouTubeかゲームで二度寝レース",
        scores: { A1: -2, Ac3: -1 },
      },
      {
        label: "起きてない。アラーム5回",
        scores: { Ac1: -2, S3: -1 },
      },
    ],
  },
  {
    id: 2,
    text: "友達がメンヘラ気味の長文LINEを送ってきた。どうする?",
    choices: [
      {
        label: "すぐ電話してとことん話聞く",
        scores: { E2: 2, So1: 1 },
      },
      {
        label: "落ち着いてから一緒に解決策考える",
        scores: { S3: 2, Ac3: 1 },
      },
      {
        label: "「わかるよ」とだけ返して既読",
        scores: { So2: 2, E2: -1 },
      },
      {
        label: "こっちも病んできて返信できなくなる",
        scores: { E1: -2, S1: -1 },
      },
    ],
  },
  {
    id: 3,
    text: "飲み会の途中で抜けたくなった。実際の行動は?",
    choices: [
      {
        label: "「次あって!」とサクッと帰る",
        scores: { So2: 2, S3: 1 },
      },
      {
        label: "空気読んでなんとなく残る",
        scores: { So3: -2, So2: -1 },
      },
      {
        label: "外で一人散歩して充電して戻る",
        scores: { E3: 2, S3: 1 },
      },
      {
        label: "なんやかんやで朝までいる",
        scores: { A1: -2, Ac2: -1 },
      },
    ],
  },
  {
    id: 4,
    text: "締切3日前。手をつけてないタスクへの向き合い方。",
    choices: [
      {
        label: "残り時間でスケジュール引き直して回す",
        scores: { A1: 2, Ac3: 2 },
      },
      {
        label: "計画より気合。1個ずつ潰す",
        scores: { Ac2: 2, A1: -1 },
      },
      {
        label: "もう間に合わない。半分諦める",
        scores: { Ac3: -2, S1: -2 },
      },
      {
        label: "「明日からやろ」",
        scores: { Ac1: -2, Ac3: -1 },
      },
    ],
  },
  {
    id: 5,
    text: "自撮りに対するスタンスは?",
    choices: [
      {
        label: "盛れる角度は全部把握済み",
        scores: { S2: 2, So1: 1 },
      },
      {
        label: "撮っても気に入らず全部消す",
        scores: { S1: -2, S2: -1 },
      },
      {
        label: "そもそも撮らない。SNSにも上げない",
        scores: { So1: -2, So2: 1 },
      },
      {
        label: "加工アプリで別人レベルに仕上げる",
        scores: { S2: -1, So3: -2 },
      },
    ],
  },
  {
    id: 6,
    text: "失恋した直後、まず何をする?",
    choices: [
      {
        label: "仕事か勉強に逃げて忙しくする",
        scores: { E2: -2, Ac1: 1 },
      },
      {
        label: "一週間引きこもって泣く",
        scores: { E2: 2, S1: -1 },
      },
      {
        label: "すぐ次の出会いを探す",
        scores: { Ac2: 2, E3: -1 },
      },
      {
        label: "友達呼び出して話し倒す",
        scores: { So1: 2, E2: 1 },
      },
    ],
  },
  {
    id: 7,
    text: "道で知らない人に道を聞かれた。",
    choices: [
      {
        label: "スマホ出して一緒に調べる",
        scores: { So1: 2, A3: 1 },
      },
      {
        label: "わかる範囲だけサクッと答える",
        scores: { So2: 1, Ac2: 1 },
      },
      {
        label: "わからないのに「あっち!」と適当に",
        scores: { A2: -2, S2: -1 },
      },
      {
        label: "急いでるフリして逃げる",
        scores: { So1: -2, S3: -1 },
      },
    ],
  },
  {
    id: 8,
    text: "SNSで胸糞悪いニュースを見た時の反応。",
    choices: [
      {
        label: "経緯を一次ソースまで遡って調べ尽くす",
        scores: { A3: 2, S3: 1 },
      },
      {
        label: "その場で怒って引用RTする",
        scores: { So1: 2, Ac2: 2 },
      },
      {
        label: "「世の中ほんとクソだな」と一言ぼやく",
        scores: { A1: -1, A3: 1 },
      },
      {
        label: "見なかったことにしてスクロール",
        scores: { E2: -2, A3: -2 },
      },
    ],
  },
  {
    id: 9,
    text: "5年後の自分、どこにいたい?",
    choices: [
      {
        label: "今の延長で着実に上に行きたい",
        scores: { Ac1: 2, Ac3: 2 },
      },
      {
        label: "今と全然違う場所(海外・独立・転職)",
        scores: { Ac1: 2, A1: -1 },
      },
      {
        label: "想像つかない。流れに任せる",
        scores: { A1: -2, Ac3: -1 },
      },
      {
        label: "5年後生きてたら奇跡",
        scores: { S3: -2, Ac1: -2 },
      },
    ],
  },
  {
    id: 10,
    text: "一番好きな時間の使い方は?",
    choices: [
      {
        label: "スポーツ・体を動かす",
        scores: { Ac1: 1, So1: 1 },
      },
      {
        label: "読書・映画・考え事",
        scores: { A3: 1, E3: 1 },
      },
      {
        label: "ゲーム・配信・SNS",
        scores: { A1: -1, E3: -1 },
      },
      {
        label: "お酒・飲み会",
        scores: {},
        typeBonus: { DRUNK: 100 },
      },
    ],
  },
];
