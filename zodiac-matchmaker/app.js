/**
 * 12星座速配密碼 (Zodiac Matchmaker) - 核心匹配邏輯與高情緒價值/衝突雙軌文案引擎
 * 導入用戶指定的 12x12 行星相位速配矩陣，支持性別速配模式
 * 本專案遵循 CC0 協議開放公有領域。
 */

// 1. 12星座性格與星象屬性資料庫
const zodiacData = {
  ari: {
    name: "白羊座",
    symbol: "♈",
    element: "fire",
    modality: "cardinal",
    label: "熱烈奔放的開拓者",
    desc: "擁有無窮勇氣與行動力的開路先鋒",
    strengths: ["無畏無懼", "熱情率真", "行事果斷"],
    weaknesses: ["急躁缺乏耐心", "衝動易怒", "三分鐘熱度"],
    loveStyle: "主動出擊，愛恨分明。一旦認定目標便會展開猛烈追求，渴望充滿新鮮感與激情的戀愛，討厭拖泥帶水。"
  },
  tau: {
    name: "金牛座",
    symbol: "♉",
    element: "earth",
    modality: "fixed",
    label: "溫實可靠的守護者",
    desc: "沈穩、務實且極具美學品味的守護者",
    strengths: ["溫實可靠", "極具耐心", "務實沉穩"],
    weaknesses: ["固執不知變通", "佔有慾極強", "慢熱且被動"],
    loveStyle: "追求穩定與感官享受。他們的愛是細水長流的溫柔與物質上的體貼，極度抗拒不確定性與頻繁的變動。"
  },
  gem: {
    name: "雙子座",
    symbol: "♊",
    element: "air",
    modality: "mutable",
    label: "靈動睿智的傳播者",
    desc: "思維敏捷、充滿好奇心與表達天賦的風之子",
    strengths: ["靈活機智", "溝通力強", "求知慾旺盛"],
    weaknesses: ["難以專注", "情緒多變", "流於表面"],
    loveStyle: "視心靈共鳴與趣味性為第一要務。渴望在戀愛中既是伴侶也是知己，討厭沉悶無趣，需要源源不斷的新話題。"
  },
  can: {
    name: "巨蟹座",
    symbol: "♋",
    element: "water",
    modality: "cardinal",
    label: "溫柔細緻的療癒者",
    desc: "情感細膩、極具同理心與家庭托底力",
    strengths: ["溫柔細緻", "極具同理心", "善於照顧人"],
    weaknesses: ["過度敏感", "缺乏安全感", "情緒化防備心強"],
    loveStyle: "以婚姻與家庭為終極目標的深情付出。他們習慣以溫柔築起堡壘，保護自己與愛人，需要對方同等的忠誠與細心呵護。"
  },
  leo: {
    name: "獅子座",
    symbol: "♌",
    element: "fire",
    modality: "fixed",
    label: "慷慨高傲的領導者",
    desc: "自帶引力與領袖氣場的耀眼恆星",
    strengths: ["慷慨霸氣", "自信開朗", "極具領袖氣場"],
    weaknesses: ["死要面子", "掌控欲強", "渴望被過度讚美"],
    loveStyle: "充滿戲劇張力與絕對忠誠的愛。他們願意把最好的東西雙手奉上，但同時也要求絕對的偏愛與對方崇拜的目光。"
  },
  vir: {
    name: "處女座",
    symbol: "♍",
    element: "earth",
    modality: "mutable",
    label: "細緻精準的分析家",
    desc: "追求完美、有條不紊且體貼入微的智者",
    strengths: ["細緻精確", "有條不紊", "追求完美"],
    weaknesses: ["愛碎念挑剔", "過度焦點", "容易緊繃"],
    loveStyle: "將關懷融入每個日常細節的實用主義。他們不善言語討好，但會主動為你打理好生活一切，期待伴侶一同提升與成長。"
  },
  lib: {
    name: "天秤座",
    symbol: "♎",
    element: "air",
    modality: "cardinal",
    label: "優雅和諧的協調者",
    desc: "追求公正、美感與人際平衡的藝術家",
    strengths: ["優雅和諧", "善於協調", "極具審美眼光"],
    weaknesses: ["優柔寡斷", "害怕衝突", "容易迎合他人"],
    loveStyle: "追求平等、和諧與美感的優雅戀愛。討厭粗俗與失衡的關係，在做決定時常左右搖擺，需要伴侶給予堅定的支持與肯定。"
  },
  sco: {
    name: "天蠍座",
    symbol: "♏",
    element: "water",
    modality: "fixed",
    label: "深沉執著的蛻變者",
    desc: "情感極度專一、直覺敏銳且具備深沉魅力",
    strengths: ["深沉執著", "直覺極強", "專一深情"],
    weaknesses: ["多疑嫉妒", "愛記仇報復", "極端掌控欲"],
    loveStyle: "靈魂深處的極致佔有與守護。他們的愛熱烈且帶著神秘色彩，不容許一丁點的欺騙，追求的是絕對坦誠的生死之交。"
  },
  sag: {
    name: "射手座",
    symbol: "♐",
    element: "fire",
    modality: "mutable",
    label: "自由樂觀的探險家",
    desc: "熱愛真理、追求自由且充滿幽默感的旅人",
    strengths: ["樂觀自由", "熱愛冒險", "心胸開闊"],
    weaknesses: ["粗心大意", "缺乏責任感", "過度追求自由"],
    loveStyle: "把戀愛當作一場精彩的宇宙探險。他們渴望伴侶是能一同奔跑的夥伴，而非束縛自由的繩索，在輕鬆有趣的相處中自然升溫。"
  },
  cap: {
    name: "摩羯座",
    symbol: "♑",
    element: "earth",
    modality: "cardinal",
    label: "堅毅沉穩的攀登者",
    desc: "腳踏實地、極具責任感與長期格局的基石",
    strengths: ["堅毅沉穩", "腳踏實地", "極具責任感"],
    weaknesses: ["不解風情", "悲觀嚴肅", "防備心極重"],
    loveStyle: "以責任與長期承諾為基石的深沉守護。雖然不懂浪漫情話，但他們的承諾無比沉重，會用實際的奮鬥為對方提供穩固的未來。"
  },
  aqu: {
    name: "水瓶座",
    symbol: "♒",
    element: "air",
    modality: "fixed",
    label: "前衛獨特的思辨者",
    desc: "思想獨立、富有博愛精神與獨特邏輯的極客",
    strengths: ["獨立自主", "思想前衛", "具博愛精神"],
    weaknesses: ["冷漠疏離", "我行我素", "過度理性"],
    loveStyle: "建立在獨立個體上的精神共鳴。他們需要充足的個人空間與尊重，反感黏人與情緒勒索，追求的是精神層面的超脫陪伴。"
  },
  pis: {
    name: "雙魚座",
    symbol: "♓",
    element: "water",
    modality: "mutable",
    label: "浪漫感性的夢想家",
    desc: "藝術靈感滿溢、無私包容且充滿溫柔幻想",
    strengths: ["溫柔感性", "想像力豐富", "充滿包容心"],
    weaknesses: ["愛幻想逃避", "界線模糊", "多愁善感"],
    loveStyle: "充滿詩意、無私付出的浪漫主義夢想家。他們極易受氛圍與情緒感染，甘願為愛犧牲，需要溫柔托底以防在感情中迷失。"
  }
};

// 2. 星象屬性契合度基礎配置 (fire, earth, air, water)
const elementRelations = {
  fire: { fire: "harmonious", air: "harmonious", earth: "neutral", water: "transformative" },
  earth: { earth: "harmonious", water: "harmonious", fire: "neutral", air: "transformative" },
  air: { air: "harmonious", fire: "harmonious", water: "neutral", earth: "transformative" },
  water: { water: "harmonious", earth: "harmonious", air: "neutral", fire: "transformative" }
};

// 3. 用戶指定的 12x12 行星相位速配矩陣 (Rows = 男, Cols = 女)
// 順序：白羊, 金牛, 雙子, 巨蟹, 獅子, 處女, 天秤, 天蠍, 射手, 摩羯, 水瓶, 雙魚
const compatibilityMatrix = [
  // 白羊男 (Row 0)
  [80, 70, 90, 50, 100, 40, 60, 40, 100, 50, 90, 70],
  // 金牛男 (Row 1)
  [70, 80, 70, 90, 50, 100, 40, 60, 40, 10, 50, 80],
  // 雙子男 (Row 2)
  [90, 70, 80, 70, 90, 50, 100, 40, 60, 40, 100, 50],
  // 巨蟹男 (Row 3)
  [50, 90, 70, 80, 70, 90, 50, 10, 40, 60, 40, 100],
  // 獅子男 (Row 4)
  [10, 50, 90, 70, 80, 70, 90, 50, 100, 40, 60, 40],
  // 處女男 (Row 5)
  [40, 100, 50, 90, 70, 80, 70, 90, 50, 100, 40, 60],
  // 天秤男 (Row 6)
  [60, 40, 100, 50, 90, 70, 80, 70, 90, 50, 100, 40],
  // 天蠍男 (Row 7)
  [40, 60, 40, 100, 50, 90, 70, 80, 70, 90, 50, 100],
  // 射手男 (Row 8)
  [10, 40, 60, 40, 100, 50, 90, 70, 80, 70, 90, 50],
  // 摩羯男 (Row 9)
  [50, 100, 40, 60, 40, 100, 50, 90, 70, 80, 70, 90],
  // 水瓶男 (Row 10)
  [90, 50, 100, 40, 60, 40, 100, 50, 90, 70, 80, 70],
  // 雙魚男 (Row 11)
  [70, 90, 50, 100, 40, 60, 40, 100, 50, 90, 70, 80]
];

// 4. 互動挑戰資料庫 (Lover Challenges)
const loverChallenges = [
  "用眼神凝視對方30秒，期間不准說話或大笑，最後給對方一個溫暖的擁抱。",
  "互相說出對方身上最吸引你的一個「小特徵」，並感謝對方這個獨特的存在。",
  "現在立刻給對方倒一杯溫水，並在遞過去時附上一句誇獎或情話。",
  "模仿對方的星座性格30秒，用對方的經典語氣和動作來逗笑彼此。",
  "手牽手閉上眼睛，一起深呼吸三次，感受彼此的呼吸頻率與心跳達到共鳴。",
  "輪流分享最近做過的一個關於對方的夢，或者一件讓你感到窩心的回憶。",
  "給對方捏捏肩膀或搥搥背2分鐘，並溫柔地說一句『辛苦啦，謝謝有你在身邊』。",
  "共同寫下一件今年內你們想一起去挑戰的「小旅行」，寫完貼在顯眼的地方。"
];

// 5.2.2 獲取星座速配專業依據解析
function getZodiacScoreExplanation(a, b, res) {
  const score = res.score;
  let explanation = "";
  
  explanation += `此配對是基於黃道十二宮（Zodiac Synastry）之星盤太陽相位角度與元素煉金術（Element Alchemy）所做的專業解析。`;
  explanation += `雙方分別為 <strong class="highlight-gold">${a.name}（${getElementName(a.element)}象）</strong> 與 <strong class="highlight-gold">${b.name}（${getElementName(b.element)}象）</strong>。`;
  
  if (score >= 90) {
    explanation += `雙方契合度高達 <strong class="highlight-gold">${score}%</strong>。在占星相位學中，你們的太陽多形成和諧的 <strong>120° (拱相位/三合)</strong> 或 <strong>0° (合相位)</strong>。這意味著雙方守護星能量自然流動，沒有阻礙，是宇宙中極具天作之合美譽的同頻共鳴關係，靈魂契合度極高。`;
  } else if (score >= 80) {
    explanation += `雙方契合度為 <strong class="highlight-gold">${score}%</strong>。你們多處於 <strong>60° (六合相位)</strong> 區間，象徵著「支持與機會」。你們的性格能互相欣賞、包容，在人生的道路上能互為貴人，是一對能夠良性溝通、和諧相伴的優秀伴侶。`;
  } else if (score >= 70) {
    explanation += `雙方契合度為 <strong class="highlight-gold">${score}%</strong>。雙方星盤能量大致平衡。雖然在某些生活細節上有著不同的處事邏輯，但這也為彼此生活增添了趣味，屬於許多伴侶只要用心經營便能穩定前行的互補組合。`;
  } else {
    explanation += `雙方契合度為 <strong class="highlight-gold">${score}%</strong>。在古典占星學中，此配置往往形成 <strong>90° (刑相位/四分)</strong> 或 <strong>180° (對分相/對沖)</strong> 的動態張力。請注意，<strong>刑沖相位在占星學中代表最強烈的吸引力與激情的火花</strong>，許多白頭偕老的伴侶都有此相位。這代表你們的靈魂不甘於平庸的陪伴，而是主動選擇了「強烈碰撞、煉製純金」的成長契約。每一次的摩擦，都是照亮彼此盲區的探照燈。`;
  }
  
  explanation += `<br><br>`;
  explanation += `📊 <strong>指標深度剖析：</strong><br>`;
  
  // 溝通契合度
  if (a.element === "air" || b.element === "air" || a.element === b.element) {
    explanation += `• 💬 <strong>溝通契合度 (${res.commRate}%)</strong>：受<strong>風象流動性（水星能量）</strong>或同象和諧影響，你們的對話頻率流暢，能自然理解對方的觀點與情感暗示，少有雞同鴨講的挫折感。<br>`;
  } else {
    explanation += `• 💬 <strong>溝通契合度 (${res.commRate}%)</strong>：你們的思維基調一個理性抽離，一個感性細膩。溝通時需要多給對方一些時間進行語意翻譯，避免急躁定性。<br>`;
  }
  
  // 情感熱烈度
  if (res.passionRate >= 80) {
    explanation += `• 🔥 <strong>情感熱烈度 (${res.passionRate}%)</strong>：受金星與火星（Venus-Mars Alchemy）的能量交織影響，你們之間存在極強的電磁引力，熱戀期火花四射，是化學反應極為強烈的性感應組合。<br>`;
  } else {
    explanation += `• 🔥 <strong>情感熱烈度 (${res.passionRate}%)</strong>：你們的愛更偏向於日常相伴、細水長流。雖然沒有狂熱的乾柴烈火，但溫潤的陪伴反而能讓情感更加安全與溫馨。<br>`;
  }
  
  // 關係穩定度
  if (a.element === "earth" || b.element === "earth" || a.modality === "fixed" && b.modality === "fixed") {
    explanation += `• 🛡️ <strong>關係穩定度 (${res.stableRate}%)</strong>：受<strong>土象重力（土星能量）</strong>或固定宮的堅持影響，你們的關係底蘊穩固，一旦確立承諾就不易動搖，是能一起經歷生活現實考驗的基石組合。`;
  } else {
    explanation += `• 🛡️ <strong>關係穩定度 (${res.stableRate}%)</strong>：你們的宮位配置偏向變動與開創，生活充滿變化。長期相處需要刻意去構築儀式感與共同目標，以提供必要的安全地基。`;
  }
  
  return explanation;
}

// 5. 計算匹配邏輯與雙軌文案生成引擎
function calculateMatch(signKeyA, signKeyB, genderA, genderB) {
  const a = zodiacData[signKeyA];
  const b = zodiacData[signKeyB];
  
  if (!a || !b) return null;

  const zodiacKeys = Object.keys(zodiacData);
  const idxA = zodiacKeys.indexOf(signKeyA);
  const idxB = zodiacKeys.indexOf(signKeyB);

  // 5.1 依據性別配置，從速配矩陣中尋找分數基準
  let score = 80;
  if (genderA === "male" && genderB === "female") {
    score = compatibilityMatrix[idxA][idxB];
  } else if (genderA === "female" && genderB === "male") {
    score = compatibilityMatrix[idxB][idxA];
  } else {
    // 同性別 (Male-Male or Female-Female)，取雙向平均值以示公平包容
    score = Math.round((compatibilityMatrix[idxA][idxB] + compatibilityMatrix[idxB][idxA]) / 2);
  }

  // 5.2 根據分數比例計算三項指標契合度
  const relation = elementRelations[a.element][b.element];
  let commRate = score;
  let passionRate = score;
  let stableRate = score;

  if (score > 40) {
    // 正常區間：依星盤屬性略微微調
    commRate = Math.min(99, Math.max(30, a.modality === b.modality ? score - 3 : score + 4));
    passionRate = Math.min(99, Math.max(30, relation === "transformative" ? score + 6 : score - 2));
    stableRate = Math.min(99, Math.max(30, a.element === "earth" || b.element === "earth" ? score + 5 : score - 4));
  } else {
    // 極低分區間（10-40分）：指標與分數同降，但保留些許指標火花（例如水火衝突中仍有高激情）
    commRate = Math.min(99, Math.max(15, Math.round(score * 0.9)));
    passionRate = Math.min(99, Math.max(15, relation === "transformative" ? Math.round(score * 1.5) : Math.round(score * 1.1)));
    stableRate = Math.min(99, Math.max(10, Math.round(score * 0.7)));
  }

  score = Math.min(99, Math.max(10, score));
  commRate = Math.min(99, Math.max(10, commRate));
  passionRate = Math.min(99, Math.max(10, passionRate));
  stableRate = Math.min(99, Math.max(10, stableRate));

  // 5.3 動態生成雙軌文案 (高情緒價值且如實剖析不合關鍵)
  const verdict = getEmotionalVerdict(a, b, relation, score);
  const interaction = getInteractionText(a, b, relation, score);
  const complementary = getComplementaryText(a, b, relation, score);
  const values = getValuesText(a, b, relation, score);

  return {
    score,
    commRate,
    passionRate,
    stableRate,
    verdict,
    interaction,
    complementary,
    values
  };
}

// 5.3.1 獲取總評語
function getPersonalityClashReason(a, b) {
  let elementClash = "";
  let modalityClash = "";

  // 1. 星象屬性衝突分析
  if (a.element === b.element) {
    if (a.element === "fire") {
      elementClash = "你們同屬火象星座，性格皆極為強勢、主觀且脾氣急躁。在熱戀期能如乾柴烈火般熱烈，但一旦產生摩擦，便容易硬碰硬、口不擇言，缺乏妥協與包容的緩衝空間。";
    } else if (a.element === "earth") {
      elementClash = "你們同屬土象星座，性格皆沉穩、被動且極度固執。相處時缺乏感性火花與浪漫情調，一旦出現誤會或分歧，雙方都習慣縮入自己的保護殼或冷戰，導致心結越積越深。";
    } else if (a.element === "air") {
      elementClash = "你們同屬風象星座，性格皆追求獨立、抽離與精神自由。這使得你們的關係缺乏強烈的情感黏著度與歸屬感，相處時更像是有共同話題的朋友，一旦面臨現實壓力容易各自飛散。";
    } else if (a.element === "water") {
      elementClash = "你們同屬水象星座，性格皆極度敏感、情緒化且缺乏安全感。你們容易過度解讀對方的言行，互相吸食彼此的負面情緒，陷入猜忌、控制與情緒拉扯的虐心循環中。";
    }
  } else {
    const elements = [a.element, b.element];
    if (elements.includes("fire") && elements.includes("water")) {
      elementClash = "你們是典型的「水火相克」組合。火象的直率衝動與水象的敏感細膩天然對立。火象覺得水象陰晴不定、過度情緒化；水象則覺得火象粗魯無禮、說話不顧他人感受，容易在日常相處中互相灼傷與熄滅。";
    } else if (elements.includes("fire") && elements.includes("earth")) {
      elementClash = "你們是「火土碰撞」組合。火象追求速度、冒險與變化，而土象渴望穩定、秩序與保守。火象會嫌棄土象沉悶無趣、墨守成規；土象則認為火象虛浮衝動、做事缺乏長遠格局與責任感，難以建立信任。";
    } else if (elements.includes("air") && elements.includes("water")) {
      elementClash = "你們是「風水拉扯」組合。風象習慣以理性和邏輯分析問題，而水象則依賴直覺與情感體驗。在衝突時，風象的抽離與說理會讓水象覺得冷酷無情；水象的黏人與情緒化則會讓風象感到窒息與避之不及。";
    } else if (elements.includes("air") && elements.includes("earth")) {
      elementClash = "你們是「風土不容」組合。風象腦袋轉得快、熱愛變革與精神自由，而土象腳踏實地、注重實質結果與規律。風象會覺得土象古板、沒有想像力；土象則看不慣風象天馬行空、說多做少且缺乏穩定度。";
    } else if (elements.includes("water") && elements.includes("earth")) {
      elementClash = "雖然水土在星象上互補，但在你們的組合中，水象的情緒起伏容易給務實的土象帶來沉重的精神負擔，而土象的過度現實、不解風情與冷若冰霜，也難以滿足水象對浪漫、溫柔與安全感的精神需求。";
    } else if (elements.includes("fire") && elements.includes("air")) {
      elementClash = "火風雖能相生，但兩人都缺乏土象的落地感。彼此熱烈有餘但穩定度極低，容易因為一時的衝動吸引在一起，卻在面對現實的柴米油鹽或長遠規劃時迅速熄滅，關係缺乏長期維繫的穩固基石。";
    }
  }

  // 2. 特質/宮位衝突分析
  if (a.modality === b.modality) {
    if (a.modality === "fixed") {
      modalityClash = "此外，兩人都同屬「固定宮」，性格中都有著極強的執念與絕不妥協的自尊。一旦在重大觀念上產生分歧，極易陷入誰也不願先低頭認錯的冷戰僵局，甚至演變成主導權與尊嚴的無休止爭奪戰。";
    } else if (a.modality === "cardinal") {
      modalityClash = "此外，兩人都同屬「本位宮」，皆具備強大的主導欲與主動性。在關係中容易出現「一山不容二虎」的控制權衝突，兩人都想當發號施令的人，導致生活瑣事中摩擦不斷。";
    } else if (a.modality === "mutable") {
      modalityClash = "此外，兩人都同屬「變動宮」，性格皆有多變、隨興與缺乏耐性的特質。雖然平時相處彈性大，但關係缺乏堅固的主軸與安全感，容易流於浮萍，一遇到現實考驗就各自逃避。";
    }
  }

  return `${elementClash} ${modalityClash}`.trim();
}

function getEmotionalVerdict(a, b, relation, score) {
  let title = "";
  let desc = "";
  let friction = "";

  if (score < 60) {
    // 低分組 - 真實深刻的性格衝突剖析
    title = `性格相斥 • 磨合考驗 (${score}分)`;
    const clashReason = getPersonalityClashReason(a, b);
    desc = `【${a.name}】與【${b.name}】在星盤配對中得分偏低 (${score}分)。這並非意味著你們完全無法相愛，而是因為雙方在性格內核上存在著深刻的本質差異。${clashReason} 要維持這段關係，雙方必須付出數倍於常人的心力去換位思考，尊重並接納彼此的「大相徑庭」，而非強行同化對方。`;
    friction = `核心衝突點在於【${a.name}】的「${a.label}」特質，在日常生活中極易與【${b.name}】的「${b.label}」特質產生摩擦。例如，【${a.name}】的做事步調或情緒表達方式常會觸碰到【${b.name}】的耐性底線，而【${b.name}】的冷淡或主導行為也會讓【${a.name}】感到被忽視。雙方容易在溝通中陷入「指責與防衛」的惡性循環。`;
  } else if (score < 80) {
    // 中分組 - 有契合也有摩擦的現實磨合
    title = `現實磨合 • 互補成長 (${score}分)`;
    desc = `【${a.name}】與【${b.name}】的契合度處於中等水平 (${score}分)。你們在不少方面擁有相似的價值觀或共同話題，能享受到相處的樂趣；但在面臨重大抉擇、情緒低潮或生活細節時，雙方的性格盲區仍會顯露出來。這是一段「需要經營且充滿成長可能」的關係。`;
    
    if (relation === "harmonious") {
      friction = `雖然星象屬性和諧，但雙方可能因為過於相似或缺乏拉扯力，在生活遇到現實瓶頸時容易一起逃避，或在爭執時各執己見。需要學習在相處中多一分冷靜與理性。`;
    } else if (relation === "neutral") {
      friction = `相處時氛圍舒適和諧，但也容易流於平淡。核心考驗在於雙方常因「相敬如賓」而隱忍不說真實想法，導致小摩擦累積成隱形隔閡。`;
    } else {
      friction = `這是一段極具吸引力但也容易產生火花的組合。你們被彼此身上沒有的特質所吸引，但性格的差異（如一方急躁直率，另一方敏感慢熱）也是日常相處的主要摩擦點。`;
    }
  } else {
    // 高分組 - 同頻共振
    if (a.element === b.element) {
      title = `靈魂雙生 • 同頻共振 (${score}分)`;
      desc = `【${a.name}】與【${b.name}】同屬${getElementName(a.element)}象星座。你們的相遇就像是找到了鏡子中的另一個自己，不需要過多的言語，眼神交會的瞬間就能讀懂彼此的靈魂。這份同頻共振的默契，讓你們在人海中一眼認出對方。你們是彼此最強大的避風港與理解者。`;
      friction = `由於屬性完全一致，兩人在優點放大的同時，也可能共同放大性格盲點。例如同為火象時，一旦吵架容易火星撞地球，彼此口不擇言傷了感情；同為水象時，則容易共同沉溺於負面情緒，互相吸食焦慮卻無法提供理性的解方；同為土象可能冷戰到底，而同為風象可能流於表面交流。你們需要學會引入外在的冷靜與彈性，防止關係停滯。`;
    } else {
      title = `天作之合 • 能量循環 (${score}分)`;
      desc = `【${a.name}】的${getElementName(a.element)}能量與【${b.name}】的${getElementName(b.element)}能量是宇宙中最完美的循環組合（如風吹旺火、水滋潤土）。你們在一起時，彼此都能得到滋養與啟發，性格長處完美拼合，是極具建設性、能攜手共創美好未來的黃金伴侶組合。`;
      friction = `即使屬性和諧，細微的元素差異仍會帶來考驗。例如，風象星座的靈動與追求個人空間，有時會讓火象星座感到被冷落與難以捉摸；而火象強烈的主導欲，也可能讓風象感到束縛。水象的敏感多愁有時也會被踏實的土象誤解為「無理取鬧」，需要多一份換位思考。`;
    }
  }

  return { title, desc, friction };
}

function getInteractionText(a, b, relation, score) {
  let text = "";
  let dating = "";
  let warning = "";

  if (score < 60) {
    // 低分組的互動模式
    text = `在日常互動中，你們很容易覺得「雞同鴨講」。【${a.name}】的「${a.label}」溝通習慣（如直言不諱或敏感防備）常會被【${b.name}】的「${b.label}」模式誤解。雙方在幽默感、對話節奏和表達情感的方式上存在天然壁壘，常因語氣、措辭等小事而感到被冷落或被冒犯。`;
    dating = `盡量避免單獨且長時間的嚴肅談話，也不適合去人多嘈雜、容易引發焦慮的場所。建議選擇有共同興趣背景的靜態活動（如一起看展、看電影），讓話題圍繞在客觀事物上，減少直接的性格摩擦。`;
    warning = `【溝通地雷】最忌諱在意見不合時使用「冷戰」或「諷刺挖苦」。【${a.name}】需要克制說理或逃避，而【${b.name}】也要克制情緒爆發或冷言冷語。請記住，當溝通陷入僵局時，及時給予彼此獨立空間，比當場爭個對錯更重要。`;
  } else if (score < 80) {
    // 中分組的互動模式
    text = `你們的互動大致流暢，平時能愉快地聊天並分享日常。然而，在處理敏感話題或面臨分歧時，兩人的防禦機制會被激活。有時一方想理清問題，另一方卻想冷靜，這會讓溝通的節奏出現不協調。`;
    dating = `適合進行一些有互動性但沒有競爭壓力的活動，如做手作、逛特色文創市集，或到溫馨幽靜的咖啡廳進行深度的交流。`;
    warning = `【溝通暗礁】小心因為害怕衝突而選擇「粉飾太平」。如果總是隱忍不說，或使用「預設你應該懂我」的心態去要求對方，累積的怨氣遲早會在新一次的爭執中爆發。溝通需要坦誠而非猜測。`;
  } else {
    // 高分組的互動模式
    if (relation === "harmonious") {
      text = `你們在互動中充滿了歡笑與共鳴。不論是分享今日的小確幸，還是討論宏大的夢想，你們的溝通頻率總是精準對接。兩人在一起時，能自在地展現最真實的笑顏，甚至連「幼稚」的一面也能被溫柔接納。`;
      dating = `一起去探索新開幕的主題餐廳、看一場輕鬆的喜劇電影，或者挑選一個陽光午後去公園散步野餐，最能讓感情甜蜜升溫。`;
      warning = `【溝通暗礁】你們太容易在對話中開啟「預設你懂我」的自動駕駛模式。一旦對方沒有即時抓到自己的暗示，心裡就會暗自失落，埋下抱怨的種子。當意見不合時，可能因為害怕破壞原有的默契而選擇「粉飾太平」，這會讓小誤會慢慢發酵成大矛盾。`;
    } else if (relation === "neutral") {
      text = `你們的互動模式更像是一曲優雅的雙人舞。彼此帶著溫和的試探與體貼，不會過度干涉對方，卻總能在最需要的時候遞上一杯熱茶。溝通時安靜而有深度，善於傾聽是你們最強大的溝通密碼。`;
      dating = `適合在安靜的貓咪咖啡廳閱讀、去美術館參觀展覽，或者留在家裡一起拼圖、烹飪一頓美味的晚餐。`;
      warning = `【溝通暗礁】你們的交流有時顯得過於「客客氣氣」與防備。因為太害怕衝突和傷害對方，溝通時常繞彎子，甚至在不知不覺中採用「被動攻擊」的語氣。長此以往，真實的激情與親密感容易被溫吞的日常生活消耗殆盡，變成缺乏靈魂對接的例行公事。`;
    } else {
      text = `你們的相處充滿了意想不到的驚喜與火花！因為特質完全不同，對方的思維模式對你而言就像是一本全新的探索小說。你們的溝通充滿著張力，每次的意見交鋒都能轉化為深入了解彼此的寶貴契機。`;
      dating = `去體驗密室逃脫、挑戰高空彈跳或攀岩等刺激活動，或者一起上一堂手作陶藝課，用新鮮的感官體驗打破常規。`;
      warning = `【溝通暗礁】這是最容易「對牛彈琴」或「擦槍走火」的組合。水/土象追求安全感與細緻的情緒鋪墊，而火/風象則追求效率、邏輯與直接的結論。當爭執發生時，火/風象容易顯得得理不饒人、說話帶刺，而水/土象則會縮入自己的殼中進行冷暴力，這種一追一逃的惡性循環是關係的頭號殺手。`;
    }
  }

  return { text, dating, warning };
}

function getComplementaryText(a, b, relation, score) {
  let text = "";
  let lesson = "";
  let warning = "";

  if (score < 60) {
    // 低分組的互補模式
    text = `在能量特質上，你們呈現「極端拉扯」的張力。【${a.name}】的「${a.label}」特質（如過度專注現實或情緒主導）與【${b.name}】的「${b.label}」特質相去甚遠。你們各自習慣的生命節奏完全相反，極易在性格差異中感到壓抑、挫折或受傷。`;
    lesson = `克制「試圖改造對方」的執念。將對方的差異視為「補足自己靈魂盲點」的鏡子，而非絆腳石。學會承認『我們真的很不一樣』，並在相處中給予對方充足的退路與理解。`;
    warning = `【性格不合關鍵】在低分狀態下，性格差異會成為沉重的磨損。你們缺乏天然的共情紐帶，容易把【${a.name}】的長處解讀為缺點（如把細心看作小氣，把活潑看作輕浮），也把【${b.name}】的特質妖魔化。這會讓親密關係變成兩個人不斷互相消耗、指責的戰場。`;
  } else if (score < 80) {
    // 中分組的互補模式
    text = `你們具備一定程度的互補能量，但需要在日常相處中自覺調和。【${a.name}】的行動力或包容心能在關鍵時刻給予【${b.name}】支持，然而當兩人都疲憊時，這種互補往往會失效，反而會指責對方的做事方式不合心意。`;
    lesson = `學習在關係中主動承擔自己不擅長的角色。當對方感到無力時，體貼地為對方分擔，而不是站在高處指責對方的軟弱。`;
    warning = `【性格不合關鍵】在遇到外界現實壓力時，你們容易為「誰的方法更好」而爭執。一方傾向於迅速解決，另一方傾向於謹慎觀察。如果不能放下自我，這些原本可以互補的差異就會演變成控制權的爭奪。`;
  } else {
    // 高分組的互補模式
    if (relation === "harmonious") {
      text = `因為你們有著相似或極度親和的星象特質，你們的互補更像是一種「默契的加乘」。當一個人疲倦時，另一個人能無縫接替，不需要重新解釋。你們是彼此的防波堤，用相同的語言守護著對方的脆弱。`;
      lesson = `學習在兩人都陷入盲目衝動或集體焦慮時，充當那個踩煞車的人。相似性讓你們溫暖，但主動引入對立面的視角才能讓你們強大。`;
      warning = `【性格不合關鍵】相似的性格導致你們缺乏關係的「拉扯力」。當面對重大的外部現實壓力時，你們容易做出相同的錯誤判斷（例如同為感性水象在面對現實債務時集體逃避，或同為火象在面臨抉擇時集體暴躁衝動）。你們的關係中缺乏一個能冷酷拉回現實的「清醒者」。`;
    } else {
      text = `這是一段教科書級別的「靈魂拼圖」。【${a.name}】所缺乏的沉穩耐力或主動熱情，在【${b.name}】身上展現得淋漓盡致；而【${b.name}】的緊繃或猶豫，也被【${a.name}】的豁達灑脫或溫柔療癒完美化解。你們就是一剛一柔、一動一靜的終極展現。`;
      lesson = `接納「不同」是唯一的鑰匙。當意見不一時，試著站在對方的視角——那是你靈魂所沒有的風景。多說一句『謝謝你帶我看到不一樣的世界』，能讓你們的守護能量堅不可摧。`;
      warning = `【性格不合關鍵】性格上的強烈差異在熱戀期過後會變成沈重的負擔。開創型星座會看不慣固定型星座的固執、變通性差；而固定型則會認為開創型過於多變、缺乏長性。雙方都容易帶著「我是為你好」的傲慢試圖去同化、改造對方，最終讓愛意在無休止的控制權爭奪中消磨乾淨。`;
    }
  }

  return { text, lesson, warning };
}

function getValuesText(a, b, relation, score) {
  let text = "";
  let guideline = "";
  let warning = "";

  if (score < 60) {
    // 低分組的價值觀模式
    text = `在長遠的人生規劃、價值排序以及生活重心的選擇上，你們之間存在著一條難以忽視的深谷。【${a.name}】與【${b.name}】對金錢安全感、人際邊界、事業野心以及家庭責任的定義有著根本性的分歧，很難自然達成妥協。`;
    guideline = `必須建立「求同存異」的生活契約與財務邊界。不強求在所有事情上達成共識，各自保留合理的獨立空間與決策權，避免因對未來的分歧而徹底崩潰。`;
    warning = `【價值觀分歧】雙方的衝突極易表現在金錢觀與生活步調上。一方可能追求當下真實的體驗或情緒價值，另一方則堅守實用、長遠物質積累或自我空間。如果強行將兩人的未來綁定在同一個生活模板中，會帶來嚴重的精神內耗。`;
  } else if (score < 80) {
    // 中分組的價值觀模式
    text = `在價值觀上，你們有著部分交集，例如在建立家庭或追求個人成就上有共同的期許。但在生活細節與優先順序上（如：家庭與事業的配比、日常開銷的度量）仍存在明顯分歧，需要定期溝通協調。`;
    guideline = `建議定期進行一次「財務與未來對齊會議」，將對未來的期望具體化為可執行的目標，並在分歧點上做出合理的讓步。`;
    warning = `【價值觀分歧】平時相安無事，但當面臨人生重大轉折（如買房、轉職、育兒）時，潛在的分歧就會凸顯。雙方可能因為各執己見而讓談判陷入僵局，如果一方心存委屈勉強妥協，會為未來留下隱患。`;
  } else {
    // 高分組的價值觀模式
    if (a.element === "earth" || b.element === "earth") {
      text = `在核心人生觀上，你們非常重視「安全感」與「穩定成長」。不論是未來的事業規劃，還是理財態度，你們都傾向於建立可見的基礎。這份踏實，讓你們的感情在柴米油鹽的日常中越發堅固。`;
      guideline = `一起設定一個「夢想築巢基金」或房屋佈置計畫，將對未來的期待轉化為每個月具體的積累，能讓你們的安全感得到完美滿足。`;
      warning = `【價值觀分歧】因為過度追求物質的安全感與人生架構的穩定，你們的未來藍圖容易顯得保守且沉悶。當面臨人生需要放手一搏或轉換跑道的轉折點時，兩人都可能因為抗拒風險而選擇扼殺改變的機會。在金錢的使用上，也可能因為過於計較性價比而忽略了生活當下的浪漫與享受，讓婚姻徹底變成冰冷的財務報表。`;
    } else if (a.element === "water" || b.element === "water") {
      text = `你們對人生的解讀充滿了感性與關懷。對你們而言，物質的豐盛固然重要，但「靈魂的歸屬感」與「情緒的共鳴」才是關係長久的根本。你們追求思想與精神高度同步的未來。`;
      guideline = `建立一個「週五心靈夜」的習慣，在睡前點上香氛，放下手機，完全敞開地聊聊心事與情緒，能讓你們的情感紐帶萬古長青。`;
      warning = `【價值觀分歧】你們容易把感情寄託在「高度理想化」的精神對接上，這會讓關係在面對現實問題（如買房、柴米油鹽、家庭開銷分擔）時顯得極其脆弱。一旦現實生活中的雜事打破了你們腦海中的完美愛情氣泡，彼此都容易產生深切的失望感，甚至以消極冷漠的態度來逃避現實責任。`;
    } else {
      text = `你們的未來藍圖裡寫滿了「探索與自由」。你們不甘於平庸、按部就班的生活，而是渴望在人生的旅途中不斷學習、體驗與變革。你們是彼此的最佳夢想合夥人。`;
      guideline = `共同經營一個旅行部落格、記錄你們生活創意的筆記本，或者每年一起學習一門全新的技能，這能讓你們的感情永遠保持初戀般的新鮮。`;
      warning = `【價值觀分歧】你們雙方都熱愛自由、變革與個人的空間，這使得這段關係的「長期安定度」和「承諾契約感」面臨考驗。當面臨需要為家庭妥協、犧牲個人自由（如搬遷、照顧幼兒）時，彼此都可能表現出極強的抗拒與逃避心理。缺乏「落地感」的未來規劃，會讓關係在風雨來臨時容易分崩離析。`;
    }
  }

  return { text, guideline, warning };
}
function getModalityName(mod) {
  const mapping = { cardinal: "本位", fixed: "固定", mutable: "變動" };
  return mapping[mod] || "";
}

function renderTraitTags(containerId, list) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = "";
  list.forEach(item => {
    const span = document.createElement("span");
    span.className = "trait-tag";
    span.innerText = item;
    container.appendChild(span);
  });
}

function getElementName(el) {
  const mapping = { fire: "火", earth: "土", air: "風", water: "水" };
  return mapping[el] || "";
}

// 6. UI 控制與事件處理
document.addEventListener("DOMContentLoaded", () => {
  initStarfield();

  const gridA = document.getElementById("grid-person-a");
  const gridB = document.getElementById("grid-person-b");
  const btnMatch = document.getElementById("btn-match");
  
  let selectedA = null;
  let selectedB = null;
  let selectedGenderA = "male"; // 預設男
  let selectedGenderB = "female"; // 預設女

  // 6.1 綁定性別選擇按鈕事件
  const genderBtnsA = document.querySelectorAll("#gender-person-a .gender-btn");
  genderBtnsA.forEach(btn => {
    btn.addEventListener("click", () => {
      genderBtnsA.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      selectedGenderA = btn.dataset.gender;
    });
  });

  const genderBtnsB = document.querySelectorAll("#gender-person-b .gender-btn");
  genderBtnsB.forEach(btn => {
    btn.addEventListener("click", () => {
      genderBtnsB.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      selectedGenderB = btn.dataset.gender;
    });
  });

  // 6.2 動態生成星座選擇卡片
  function renderGrid(container, suffix, onClick) {
    container.innerHTML = "";
    Object.keys(zodiacData).forEach(key => {
      const z = zodiacData[key];
      const card = document.createElement("div");
      card.className = "zodiac-card";
      card.dataset.key = key;
      card.innerHTML = `
        <span class="zodiac-symbol">${z.symbol}</span>
        <span class="zodiac-name">${z.name}</span>
      `;
      card.addEventListener("click", () => {
        const siblings = container.querySelectorAll(".zodiac-card");
        siblings.forEach(s => s.classList.remove("active"));
        card.classList.add("active");
        onClick(key);
      });
      container.appendChild(card);
    });
  }

  renderGrid(gridA, "a", (key) => { selectedA = key; });
  renderGrid(gridB, "b", (key) => { selectedB = key; });

  // 6.3 速配按鈕點擊事件
  btnMatch.addEventListener("click", () => {
    if (!selectedA || !selectedB) {
      alert("🔮 請先在左側選擇【你的星座】，在右側選擇【另一半的星座】！");
      return;
    }

    const overlay = document.getElementById("loader-overlay");
    const loaderText = document.getElementById("loader-text");
    overlay.classList.remove("hidden");

    const steps = [
      "量子星座微粒加載中...",
      "比對守護星盤元素屬性...",
      "讀取指定星座匹配相位矩陣...",
      "計算情人互動溝通密碼...",
      "提煉靈魂雙軌能量與潛在考驗...",
      "速配星圖繪製完成！"
    ];

    let i = 0;
    loaderText.innerText = steps[0];
    const interval = setInterval(() => {
      i++;
      if (i < steps.length) {
        loaderText.innerText = steps[i];
      } else {
        clearInterval(interval);
        overlay.classList.add("hidden");

        const results = calculateMatch(selectedA, selectedB, selectedGenderA, selectedGenderB);
        if (results) {
          showResults(selectedA, selectedB, selectedGenderA, selectedGenderB, results);
        }
      }
    }, 400);
  });

  // 6.4 Tab 切換控制
  const tabs = document.querySelectorAll(".tab-link");
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");

      const targetId = tab.dataset.target;
      const panels = document.querySelectorAll(".tab-panel");
      panels.forEach(p => p.classList.remove("active"));
      document.getElementById(targetId).classList.add("active");
    });
  });

  // 6.5 隨機挑戰更新按鈕
  document.getElementById("btn-next-challenge").addEventListener("click", () => {
    const idx = Math.floor(Math.random() * loverChallenges.length);
    document.getElementById("challenge-content").innerText = `「${loverChallenges[idx]}」`;
  });
});

// 6.6 顯示匹配結果
function showResults(keyA, keyB, genderA, genderB, res) {
  const a = zodiacData[keyA];
  const b = zodiacData[keyB];

  // 顯示專業依據卡片
  const explanationText = getZodiacScoreExplanation(a, b, res);
  const explanationCard = document.getElementById("zodiac-score-explanation-card");
  const explanationPara = document.getElementById("zodiac-score-explanation-text");
  if (explanationCard && explanationPara) {
    explanationPara.innerHTML = explanationText;
    explanationCard.classList.remove("hidden");
  }

  // 頂部頭資訊更新，標註性別
  document.getElementById("symbol-a").innerText = a.symbol;
  document.getElementById("name-a").innerText = `${a.name} (${genderA === "male" ? "男" : "女"})`;
  document.getElementById("symbol-b").innerText = b.symbol;
  document.getElementById("name-b").innerText = `${b.name} (${genderB === "male" ? "男" : "女"})`;

  // 星座性格解析資料載入
  document.getElementById("personality-symbol-a").innerText = a.symbol;
  document.getElementById("personality-name-a").innerText = a.name;
  document.getElementById("personality-tag-a").innerText = `${getElementName(a.element)}象星座 • ${getModalityName(a.modality)}`;
  document.getElementById("personality-label-a").innerText = a.label;
  document.getElementById("personality-desc-a").innerText = a.desc;
  renderTraitTags("personality-strengths-a", a.strengths);
  renderTraitTags("personality-weaknesses-a", a.weaknesses);
  document.getElementById("personality-love-a").innerText = a.loveStyle;

  document.getElementById("personality-symbol-b").innerText = b.symbol;
  document.getElementById("personality-name-b").innerText = b.name;
  document.getElementById("personality-tag-b").innerText = `${getElementName(b.element)}象星座 • ${getModalityName(b.modality)}`;
  document.getElementById("personality-label-b").innerText = b.label;
  document.getElementById("personality-desc-b").innerText = b.desc;
  renderTraitTags("personality-strengths-b", b.strengths);
  renderTraitTags("personality-weaknesses-b", b.weaknesses);
  document.getElementById("personality-love-b").innerText = b.loveStyle;

  // 分數與進度條
  document.getElementById("compatibility-score").innerText = res.score;
  
  document.getElementById("rate-comm-val").innerText = `${res.commRate}%`;
  document.getElementById("rate-comm-bar").style.width = `${res.commRate}%`;

  document.getElementById("rate-passion-val").innerText = `${res.passionRate}%`;
  document.getElementById("rate-passion-bar").style.width = `${res.passionRate}%`;

  document.getElementById("rate-stable-val").innerText = `${res.stableRate}%`;
  document.getElementById("rate-stable-bar").style.width = `${res.stableRate}%`;

  // 評語卡與潛在衝突
  document.getElementById("verdict-title").innerText = res.verdict.title;
  document.getElementById("verdict-desc").innerText = res.verdict.desc;
  document.getElementById("verdict-friction-desc").innerText = res.verdict.friction;

  // 情人互動模式
  document.getElementById("interaction-text").innerText = res.interaction.text;
  document.getElementById("interaction-dating").innerText = res.interaction.dating;
  document.getElementById("interaction-warning").innerText = res.interaction.warning;

  // 能量互補模式
  document.getElementById("complementary-text").innerText = res.complementary.text;
  document.getElementById("complementary-lesson").innerText = res.complementary.lesson;
  document.getElementById("complementary-warning").innerText = res.complementary.warning;

  // 價值觀共鳴模式
  document.getElementById("values-text").innerText = res.values.text;
  document.getElementById("values-guideline").innerText = res.values.guideline;
  document.getElementById("values-warning").innerText = res.values.warning;

  // 隨機挑戰初始化
  const idx = Math.floor(Math.random() * loverChallenges.length);
  document.getElementById("challenge-content").innerText = `「${loverChallenges[idx]}」`;

  // 顯示結果，並平滑滾動
  const dashboard = document.getElementById("results-dashboard");
  dashboard.classList.remove("hidden");
  dashboard.scrollIntoView({ behavior: "smooth" });
}

// 6.7 Canvas 背景小星星效果
function initStarfield() {
  const canvas = document.getElementById("starfield-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  let stars = [];
  const starCount = 80;

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  window.addEventListener("resize", resize);
  resize();

  for (let i = 0; i < starCount; i++) {
    stars.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 1.3,
      alpha: Math.random(),
      speed: 0.1 + Math.random() * 0.3,
      fade: Math.random() > 0.5 ? 0.004 : -0.004
    });
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "rgba(255, 255, 255, 1)";
    stars.forEach(star => {
      ctx.globalAlpha = star.alpha;
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
      ctx.fill();

      star.alpha += star.fade;
      if (star.alpha <= 0 || star.alpha >= 1) star.fade = -star.fade;
      star.y -= star.speed * 0.15;
      if (star.y < 0) {
        star.y = canvas.height;
        star.x = Math.random() * canvas.width;
      }
    });
    ctx.globalAlpha = 1.0;
    requestAnimationFrame(draw);
  }
  draw();
}
