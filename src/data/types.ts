export type TypeCode =
  | "CTRL"
  | "ATM-er"
  | "Dior-s"
  | "BOSS"
  | "THAN-K"
  | "OH-NO"
  | "GOGO"
  | "SEXY"
  | "LOVE-R"
  | "MUM"
  | "FAKE"
  | "OJBK"
  | "MALO"
  | "JOKE-R"
  | "WOC!"
  | "THIN-K"
  | "SHIT"
  | "ZZZZ"
  | "POOR"
  | "MONK"
  | "IMSB"
  | "SOLO"
  | "FUCK"
  | "DEAD"
  | "IMFW"
  | "HHHH"
  | "DRUNK";

export type SbtiType = {
  code: TypeCode;
  nickname: string;
  catchCopy: string;
  englishSubtitle: string;
  isHidden: boolean;
};

export const TYPES: readonly SbtiType[] = [
  {
    code: "CTRL",
    nickname: "仕切り魔",
    catchCopy: "ほら、もう片付けといたよ。",
    englishSubtitle: "The Handler",
    isHidden: false,
  },
  {
    code: "ATM-er",
    nickname: "奢らされ係",
    catchCopy: "え、なんで今日も俺カード出す係?",
    englishSubtitle: "The Walking ATM",
    isHidden: false,
  },
  {
    code: "Dior-s",
    nickname: "斜に構え民",
    catchCopy: "まあ世の中そんなもんでしょ。今に見てろとは思うけど。",
    englishSubtitle: "The Cynic Sage",
    isHidden: false,
  },
  {
    code: "BOSS",
    nickname: "大将",
    catchCopy: "ハンドル貸せ。俺が運転する。",
    englishSubtitle: "The Boss",
    isHidden: false,
  },
  {
    code: "THAN-K",
    nickname: "感謝の鬼",
    catchCopy: "ありがとう天よ、ありがとう地よ、ありがとうコンビニ店員さん。",
    englishSubtitle: "The Thanker",
    isHidden: false,
  },
  {
    code: "OH-NO",
    nickname: "終わりだ構文",
    catchCopy: "あ、もう終わりだ。なんで私こっち引いた?",
    englishSubtitle: "The Alarmist",
    isHidden: false,
  },
  {
    code: "GOGO",
    nickname: "すぐ行こ",
    catchCopy: "とりあえず今から行こ。荷物? 後で考える。",
    englishSubtitle: "The Go-Goer",
    isHidden: false,
  },
  {
    code: "SEXY",
    nickname: "罪深い",
    catchCopy: "いや別に何もしてないんだけど、なんで?",
    englishSubtitle: "The Heartthrob",
    isHidden: false,
  },
  {
    code: "LOVE-R",
    nickname: "恋愛ジャンキー",
    catchCopy: "恋してないと死ぬ。恋してても死ぬ。詰み。",
    englishSubtitle: "The Lover",
    isHidden: false,
  },
  {
    code: "MUM",
    nickname: "オカン",
    catchCopy: "ご飯食べた? ちゃんと寝た? え、なに泣いてんの。",
    englishSubtitle: "The Mom Friend",
    isHidden: false,
  },
  {
    code: "FAKE",
    nickname: "仮面市場",
    catchCopy: "素? どれだっけ。今日の在庫から選ぼ。",
    englishSubtitle: "The Masker",
    isHidden: false,
  },
  {
    code: "OJBK",
    nickname: "どっちもいい民",
    catchCopy: "いやマジでどっちでもいい。決めて。",
    englishSubtitle: "The Whatever",
    isHidden: false,
  },
  {
    code: "MALO",
    nickname: "脳内おさる",
    catchCopy: "人生? 攻略してない。木の上から眺めてる。",
    englishSubtitle: "The Chaos Monkey",
    isHidden: false,
  },
  {
    code: "JOKE-R",
    nickname: "笑顔の毒",
    catchCopy: "ニコニコしながら一番痛いとこ言うね、私。",
    englishSubtitle: "The Jester",
    isHidden: false,
  },
  {
    code: "WOC!",
    nickname: "えええ係",
    catchCopy: "えええええ なんで?? は?? 嘘でしょ??",
    englishSubtitle: "The Whoa Person",
    isHidden: false,
  },
  {
    code: "THIN-K",
    nickname: "脳内会議",
    catchCopy: "今のひとこと4時間考察した結果、まだわかんない。",
    englishSubtitle: "The Thinker",
    isHidden: false,
  },
  {
    code: "SHIT",
    nickname: "口悪い善人",
    catchCopy: "世の中クソだろ。…まあ、片付けとくか。",
    englishSubtitle: "The Malcontent",
    isHidden: false,
  },
  {
    code: "ZZZZ",
    nickname: "墓",
    catchCopy: "死んでない。寝てるだけ。布団から出たくないだけ。",
    englishSubtitle: "The Snoozer",
    isHidden: false,
  },
  {
    code: "POOR",
    nickname: "魂の借金",
    catchCopy: "お金じゃなくて、心の残高がもうない。",
    englishSubtitle: "The Specialist",
    isHidden: false,
  },
  {
    code: "MONK",
    nickname: "悟り",
    catchCopy: "欲ない。怒りもない。…眠い。",
    englishSubtitle: "The Monk",
    isHidden: false,
  },
  {
    code: "IMSB",
    nickname: "自分裁判官",
    catchCopy: "待って、私こんなバカだったの? 本当に?",
    englishSubtitle: "The Self-Roaster",
    isHidden: false,
  },
  {
    code: "SOLO",
    nickname: "単騎",
    catchCopy: "泣いた。なんでぼっちタイプ引いてんの。",
    englishSubtitle: "The Loner",
    isHidden: false,
  },
  {
    code: "FUCK",
    nickname: "不死身雑草",
    catchCopy: "踏まれても抜かれても呪われても生えてくる。",
    englishSubtitle: "The Wild One",
    isHidden: false,
  },
  {
    code: "DEAD",
    nickname: "生ける屍",
    catchCopy: "体は動いてる。中身、もう退室済み。",
    englishSubtitle: "The Deadpan",
    isHidden: false,
  },
  {
    code: "IMFW",
    nickname: "自己無理民",
    catchCopy: "もうダメだ俺。最初からダメだったかも。",
    englishSubtitle: "The Fragile One",
    isHidden: false,
  },
  {
    code: "HHHH",
    nickname: "ｗ",
    catchCopy: "ｗｗｗｗｗ なんかよくわかんないけど ｗｗｗｗｗ",
    englishSubtitle: "The Goofball",
    isHidden: false,
  },
  {
    code: "DRUNK",
    nickname: "泥酔界隈",
    catchCopy: "素面? え、そんなオプションあった?",
    englishSubtitle: "The Drunkard",
    isHidden: true,
  },
];
