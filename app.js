/**
 * 生命靈數 (Numerology) 核心邏輯、神祕學資料庫與互動引擎
 * 本程式碼與解讀內容皆為原創開發，宣告為 CC0 無版權，供大眾自由使用與修改。
 */

// 1. 擴充版生命靈數詳細資料庫 (1-9)
const lifePathData = {
  1: {
    name: "獨立開創的領袖",
    title: "開創數 / Pioneer & Leader",
    summary: "生命靈數 1 的人是天生的開拓者與開路先鋒，擁有強烈的自我主張與前進動力，能在荒野中劈出道路。",
    traits: {
      strength: [
        "卓越的獨立性，凡事靠自己，不輕易向環境妥協",
        "強大的開創力，敢於做第一個吃螃蟹的人，對新事物反應迅速",
        "當機立斷的決策力，能在混亂的局勢中迅速鎖定方向並出擊",
        "強烈的主動性與行動力，討厭光說不練，執行效率高",
        "天生的自信與個人領袖氣場，容易激勵團隊士氣"
      ],
      weakness: [
        "容易自我中心，甚至剛愎自用，忽視旁人感受",
        "脾氣急躁，對於效率低的人事物缺乏容忍心與耐心",
        "好勝心過於強烈，容易為了贏而流於意氣之爭",
        "不善於尋求協助，寧可自己死撐，導致精神壓力巨大",
        "容易給人主觀、強勢、難以親近的刻板印象"
      ],
      description: "你就像是一顆熊熊燃燒的恆星，自帶引力與光芒。在生命旅途中，你扮演著啟航者的角色，寧可在未知的險境中披荊斬棘，也不願在舒適的安全區裡隨波逐流。你擁有無法被掩蓋的野心，當眾人猶豫不決時，你總是那個敢於跨出關鍵第一步的人。然而，這股強大的開創性能量背後，隱藏著不願示弱的傲骨與孤獨。你總覺得凡事只有自己動手最放心，容易將周圍的人擋在心防之外。學習接受自己的軟弱，並理解『眾人拾柴火焰高』的道理，是你一生的靈魂課題。學會慢下來，聽聽微弱的反對聲音，會讓你的領袖之路走得更加寬廣、溫暖。"
    },
    career: {
      talents: "具備強大的遠見、決策力、獨立作戰能力與危機處理天賦，不適合受到繁雜規章限制或完全服從性的基層崗位。在具備主導權的環境中能發揮最大潛力。",
      jobs: [
        "企業創始人 / 自主創業者",
        "高階專案經理 / 開發部主管",
        "獨立自由職業者 / 個人工作室創辦人",
        "創新技術研發者 / 開路先鋒",
        "政治或社會變革運動領袖",
        "個人IP創作者 / 意見領袖"
      ]
    },
    love: {
      style: "你的戀愛風格坦率、熱烈且直接。你討厭猜忌與拖泥帶水，喜歡坦誠以對的關係。在感情中，你擁有極強的主導欲與保護欲，希望能成為伴侶心中的英雄或避風港。但同時，你也需要伴侶給予你高度的自由、獨立空間與絕對的個人隱私。",
      tips: "適合與性格成熟、包容力強，且擁有獨立生活目標的伴侶在一起。學習在親密關係中卸下強勢的防線，坦白說出內心的疲憊，會讓伴侶感到更被需要，從而增進彼此的親密度。"
    },
    lesson: "學習傾聽與同理心。了解『妥協』不是軟弱，而是更高級的智慧；接納他人的步調與不完美，是你走向成熟領袖的必經之路。"
  },
  2: {
    name: "溫柔和諧的協調者",
    title: "合作數 / Diplomat & Partner",
    summary: "生命靈數 2 的人是天生的和平使者與傾聽者，心思極其細膩，擁有極高的同理心與直覺力。",
    traits: {
      strength: [
        "極強的同理心，能精準體察並反饋周圍人的細微情緒",
        "出色的合作精神，擅長在團隊中扮演黏著劑與綠葉的角色",
        "愛好和平，在衝突發生時能以柔克剛，靈活調解糾紛",
        "心思無比細膩，注重細節，善於進行分析與文書規劃",
        "直覺敏銳，具備天生的藝術審美與靈性感應力"
      ],
      weakness: [
        "容易產生依賴心理，害怕孤獨與被排擠",
        "行事容易猶豫不決，面對抉擇時常陷入嚴重焦慮",
        "過於敏感，容易將他人的情緒反饋當作對自己的批評",
        "為了迎合他人而習慣壓抑自己，容易累積內在怨氣",
        "缺乏拒絕別人的勇氣，常使自己承擔過多不合理的負擔"
      ],
      description: "你就像是一面平靜的湖水，溫柔、澄澈，能清晰倒映出周圍世界的色彩。你天生具備雙重觀察力，能看清硬幣的兩面。這讓你在處理衝突與矛盾時，總能找到各方妥協的和諧平衡點。你討厭粗暴、對立的競爭，在人際關係中扮演著最貼心的港灣。然而，這種對和諧的強烈渴望，有時會變成對自己的「隱形牢籠」。你太害怕得罪人、太害怕失去陪伴，以至於在關鍵時刻常常選擇妥協，壓抑了自己的聲音。學會勇敢說出『不』，並理解『健康的人際關係不怕衝突』，是你靈魂的關鍵蛻變。只有當你學會站穩自我立場時，你的溫柔才不會變成廉價的迎合，而是真正大氣的慈悲。"
    },
    career: {
      talents: "優異的細節整合力、客戶關係維繫、心理分析與和諧協調天賦，不適合需要高強度競爭、隨意衝撞或快速單打獨鬥的工作。在雙人拍檔或協同合作的體制中表現最佳。",
      jobs: [
        "外交官 / 專業談判與和解人",
        "心理諮商師 / 心理諮詢顧問",
        "高階秘書 / 特助 / 行政統籌",
        "藝術策展人 / 編輯 / 細節校對",
        "客戶關係主管 / 售後服務經理",
        "社工人員 / 醫療後勤支援"
      ]
    },
    love: {
      style: "你將親密關係視為生命的重心之一。在愛情中，你極其溫柔、貼心且細緻，能把伴侶照顧得無微不至。你追求靈魂深處的相依，但也容易因為過度關注伴侶的一舉一動，而陷入患得患失的猜疑中，對伴侶的依賴性較強。",
      tips: "你需要一個能給你穩定承諾、細心呵護你敏感心思的成熟伴侶。在關係中，試著把注意力放回自己身上，建立自己的朋友圈與愛好，彼此保留空間，關係反而會更健康。"
    },
    lesson: "建立獨立的自我，並為自己設立健康的防線。學會在被傷害前說『不』，明白只有先圓滿自己，才能給予他人真正的支持。"
  },
  3: {
    name: "創意洋溢的表達者",
    title: "創意數 / Creator & Communicator",
    summary: "生命靈數 3 的人是天生的藝術家與歡樂散播者，擁有無窮的想像力、幽默感與卓越的表達力。",
    traits: {
      strength: [
        "想像力天馬行空，具備極高的創意天分與美感直覺",
        "樂觀風趣，富有感染力，是社交場合的目光焦點",
        "表達能力出色，無論是口才、文字或藝術，皆能生動傳遞情感",
        "保持一顆珍貴的童心，對世界永遠充滿好奇與熱情",
        "學習新事物快速，能迅速抓取核心概念與潮流趨勢"
      ],
      weakness: [
        "做事容易三分鐘熱度，缺乏持之以恆的定性與毅力",
        "精力過於分散，容易同時開啟多個計畫卻無法收尾",
        "情緒敏感且起伏極大，容易從狂喜瞬間跌入深沉的悲觀",
        "有時行事隨興，缺乏時間與財務規律，給人浮躁的印象",
        "容易為了迎合觀眾而說話誇大其詞，甚至好管閒事"
      ],
      description: "你就像是跳動的火花，明亮、溫暖且充滿令人驚喜的變化。你的內心深處住著一個充滿童心的小孩，對大千世界的一切新鮮事物都睜大了好奇的雙眼。你擁有一種化沉悶為神奇的天賦，透過你的口才、文字或是藝術創作，即便是平淡無奇的生活也能變得精彩萬分。然而，這份豐盛的創造力有時也會帶來混亂。你的思緒像野馬般奔驘，常常在不同目標之間跳躍，導致熱情消退後留下一堆未完成的草稿。你渴望被理解、被看見，也正因如此，旁人一句不經意的否定，就能輕易刺傷你的脆弱自尊。學會專注，將無邊無際的靈感轉化為腳踏實地的成果，是你這輩子最重要的修行。"
    },
    career: {
      talents: "出色的語言表達能力、寫作文字、藝術美感與社群互動天賦，不適合刻板、重複性高或缺乏表達空間的工作。在能展現自我才華與創意的領域能獲得巨大的成功。",
      jobs: [
        "廣告企劃 / 行銷創意總監",
        "社群經營者 / 網紅 KOL / 實況主",
        "作家 / 編劇 / 記者 / 專欄作者",
        "藝人 / 歌手 / 設計師 / 藝術工作者",
        "公關經理 / 產品宣傳發言人",
        "創意教育講師 / 幼兒教育專家"
      ]
    },
    love: {
      style: "你渴望一場浪漫、有趣且心靈相通的熱戀。在感情中，你熱情如火，喜歡與伴侶分享生活中的一切趣事與創意。你無法忍受索然無味的例行公事，渴望伴侶也是你能一邊嬉戲一邊深度對話的知己。",
      tips: "你需要一個在欣賞你的創意的同時，又能在現實層面拉你一把、給予你穩定秩序感的踏實伴侶。多修煉你的情感定性，避開因為一時新鮮感而分心的誘惑。"
    },
    lesson: "學會專注與堅持。把你的「天馬行空」放入有秩序的框架中，讓創意開花結果；在情緒起伏時，找到讓內心重回平靜的方法。"
  },
  4: {
    name: "穩健務實的建設者",
    title: "執行數 / Builder & Organizer",
    summary: "生命靈數 4 的人是秩序與安定的守護者，做事腳踏實地，追求長久的穩定與安全保障。",
    traits: {
      strength: [
        "極強的責任感與忠誠度，做事認真踏實，一旦承諾絕不放棄",
        "卓越的邏輯思維與組織力，擅長建立流程、制度與實體架構",
        "抗壓性極高，面對長期繁重的工作依然能有條不紊地完成",
        "非常注重實際與細節，不投機取巧，深信踏實付出的價值",
        "金錢觀念強，善於理財規劃與風險控制，是家庭的堅強後盾"
      ],
      weakness: [
        "容易墨守成規，思想較為固執守舊，抗拒未知的改變",
        "對未來的變動非常敏感且容易感到過度焦慮",
        "行事缺乏彈性，不擅長應付突發的臨時變更",
        "說話做事過於一針見血、嚴肅，容易給人呆板、冷酷的感覺",
        "因為追求安全感而容易限制自己的腳步，不敢輕易跨出舒適圈"
      ],
      description: "你就像是支撐高樓大廈的鋼筋水泥，穩固、沉靜、無比可靠。在這個喧囂浮躁的世界裡，你深信『欲速則不達』，願意花費時間去建立牢固的根基。無論在工作還是家庭中，你都是那個默默解決實際問題、讓人感到安心的支柱。你擅長把混亂無序的狀態整理成條理分明的流程。然而，你內心深處其實非常害怕失去掌控權，這常讓你在面對不可預測的改變時感到莫名的恐懼與抗拒。因為害怕受傷，你常常為自己套上厚厚的安全鎖，也容易因此錯失生命的奇遇。試著學會放鬆緊繃的神經，接納生命中的不完美與變動。你會發現，原來在規則之外，還有如此寬廣的天空。"
    },
    career: {
      talents: "強大的邏輯推理、系統化架構、流程控管、財務管理與專案長期執行力。不適合沒有明確規範、每天充滿隨興變動的工作。在有制度、需要嚴謹邏輯的領域中是王牌。",
      jobs: [
        "會計師 / 精算師 / 財務審計員",
        "軟體工程師 / 系統分析師",
        "專案執行經理 / 營運行政主管",
        "建築師 / 土木工程師 / 室內設計師",
        "公務人員 / 軍警人員 / 司法工作者",
        "品管工程師 / 生產線流程分析師"
      ]
    },
    love: {
      style: "你的愛是無比深厚且踏實的。你或許不擅長說肉麻的情話，但會透過默默承擔家庭開銷、動手修理家具、陪伴伴侶做每一件小事來表達深情。你追求以結婚或長期穩定為前提的關係，是極度忠誠的伴侶。",
      tips: "適合與懂得珍惜你踏實本質、且心智成熟的伴侶攜手。試著在生活中主動製造一些不理性的浪漫與小驚喜，不要把婚姻或戀愛也過成了死板的工作行程。"
    },
    lesson: "擁抱改變與不確定性。了解生命中最美好的事物往往無法被規劃；學習在混亂中保持放鬆，鍛鍊思維的彈性。"
  },
  5: {
    name: "自由奔放的開拓者",
    title: "冒險數 / Freedom Seeker & Explorer",
    summary: "生命靈數 5 的人是自由的代言人，擁有極強的適應力與求知慾，一生都在追求多采多姿的生命體驗。",
    traits: {
      strength: [
        "熱愛自由，不受世俗常規拘束，生活態度開明豪放",
        "適應能力超群，能迅速融入不同國家、文化與人際環境",
        "多才多藝，學習能力極快，擅長整合跨領域的知識",
        "卓越的口才與交際手腕，充滿幽默感，具備強烈的個人魅力",
        "勇於冒險與面對未知，是破舊立新、帶來觀念革命的推手"
      ],
      weakness: [
        "缺乏耐心，容易因為失去新鮮感而半途而廢、頻繁轉職",
        "行事衝動莽撞，有時為了追求當下的刺激而不顧後果",
        "抗拒承諾與責任，害怕被同一關係或環境束縛一生",
        "情緒敏感多變，容易陷入焦躁不安，自我要求不穩定",
        "在壓力下容易放縱自己，沉溺於物質、娛樂等感官享受"
      ],
      description: "你就像是一陣穿梭於高山與海洋之間的風，自由自在、無拘無束，沒有任何人可以輕易捕捉你。你生來就是為了解鎖世界的奧秘，對於旅行、新興學問、跨界冒險有著不可遏制的渴望。你擁有非常敏銳的嗅覺，總能搶先察覺潮流的風向。在人際場合，你的風趣口才與冒險故事讓你光芒四射。然而，這股對自由的強烈渴求，有時也反映出你內心深處對枯燥日常與責任的逃避。當熱情過後、回歸平淡時，你常會感到無法忍受的焦躁，進而選擇逃跑或破壞現狀。學習把『自由』建立在自律與內心強大之上，而不是靠外在的逃避來維持。唯有在某個領域深入深耕，你才能看見更深邃的風景。"
    },
    career: {
      talents: "靈活的市場嗅覺、優異的口才行銷、危機應變與跨國溝通能力，不適合朝九晚五、高度重複且缺乏變化的辦公室工作。在需要高彈性與持續接觸新刺激的領域能如魚得水。",
      jobs: [
        "旅遊作家 / 導遊 / 跨國領隊",
        "商務業務經理 / 開拓市場先鋒",
        "公關經理 / 媒體發言人 / 策劃人",
        "自由職業者 / 斜槓多元創作者",
        "新創公司商務開發 (BD)",
        "跨國貿易專員 / 駐外大使 / 國際記者"
      ]
    },
    love: {
      style: "你追求轟轟烈烈、有趣且極度自由的戀愛。你最無法忍受被管束、限制與黏膩的伴侶關係。你希望伴侶不僅是愛人，更是靈魂知己，可以陪你一起背包旅行、高談闊論，並在思想上棋逢敵手。",
      tips: "你需要一個同樣獨立、熱愛生活且自信的伴侶。在關係中，試著學習面對生活不可避免的柴米油鹽與平淡，這並非束縛，而是靈魂落地的根基。"
    },
    lesson: "學習『自律』與『定性』。了解唯有深耕才能創造真正深刻的價值；勇於承擔長期的責任，會在其中發現更深層的自由。"
  },
  6: {
    name: "充滿愛心的奉獻者",
    title: "關懷數 / Caregiver & Healer",
    summary: "生命靈數 6 的人是天生的療癒者與家庭守護神，擁有無私的愛心、強烈的責任感，追求世間的和諧與美感。",
    traits: {
      strength: [
        "極強的责任感與犧牲奉獻精神，為了親人朋友不辭辛勞",
        "天生富有同理心與療癒力，善於傾聽並給予溫暖的建議",
        "對於藝術、家居佈置、色彩與時尚有著極佳的審美觀",
        "追求和諧的人際關係，願意主動退讓以維護團體和平",
        "非常溫暖體貼，行事細心，是朋友眼中最可靠的避風港"
      ],
      weakness: [
        "容易過度干涉他人生活，以『愛』之名施加沉重壓力",
        "習慣把別人的責任攬在自己身上，長期壓抑自身需求",
        "過度追求完美，容易對自己與身邊人有著不切實際的期望",
        "當付出得不到預期的回報時，容易心生委屈與情緒勒索",
        "難以拒絕他人，常因為濫好人個性而使自己疲憊不堪"
      ],
      description: "你就像是一棵遮天蔽日的大樹，張開繁茂的枝葉，為身邊的每一個人提供溫馨的庇護。你的一生似乎都圍繞著『愛與付出』這個主題。你對家人、朋友及工作團隊有著無怨無悔的責任感，看不得任何人受傷。你對生活的美感要求極高，渴望溫馨的氛圍。然而，你內心深處常存在著一種完美主義的焦慮。你總是覺得自己付出的不夠，或者期望周圍的人能按照你設計的『完美藍圖』去生活，這常讓被愛的人感到沈重，也讓你自己深陷委屈的泥淖。學會『先照顧好自己，再關懷他人』，並給予身邊人跌倒與成長的自由，是你這輩子最優雅的靈修功課。愛不是掌控，而是全然的接納。"
    },
    career: {
      talents: "出色的療癒輔導能力、敏銳的藝術與設計直覺、客戶關係維繫與後勤關懷。不適合冷酷、純粹競爭導向或缺乏人際溫度的環境。在能為他人創造幸福感的領域最易成功。",
      jobs: [
        "中小學教師 / 幼兒教育家",
        "心理諮商師 / 婚姻輔導顧問",
        "醫護人員 / 社工 / 療癒工作者",
        "室內設計師 / 景觀園藝師 / 美容美體專家",
        "人力資源經理 (HR) / 客戶服務總監",
        "非營利慈善機構統籌者"
      ]
    },
    love: {
      style: "你是最深情、最願意為家庭付出的伴侶。在感情中，你無微不至地照顧伴侶的生活起居，渴望建立一個安全、美滿且具備美感的家庭港灣。但有時你會因為過度操心、愛碎碎念而讓伴侶感到窒息，甚至為了維持關係和諧而選擇隱忍委屈。",
      tips: "你需要一個懂得感激你的付出、且會主動分擔責任的溫暖伴侶。學會適度放手，讓伴侶用他們自己的方式來愛你，而不是事事都要你來打理。"
    },
    lesson: "學會愛自己並劃分人際界限。了解每個人都有自己的因果與課題，適度放手讓他人經歷考驗，才是最深邃的愛。"
  },
  7: {
    name: "尋求真理的哲學家",
    title: "探求數 / Scholar & Truth Seeker",
    summary: "生命靈數 7 的人是天生的思想家與真理追尋者，邏輯分析力驚人，直覺敏銳，喜好探索萬物運行的本質。",
    traits: {
      strength: [
        "卓越的分析與推理能力，具備極強的邏輯思考與思辨天賦",
        "思想獨立，不隨波逐流，對事物抱持理性且深度的客觀看法",
        "直覺極其敏銳，常有精準的第六感與精神感悟力",
        "耐得住寂寞，能在孤獨中進行高強度的思考與學術研究",
        "處事冷靜從容，看事情能一眼洞穿本質，不受表面假象迷惑"
      ],
      weakness: [
        "防備心極重，難以真正信任他人，容易顯得冷漠與孤傲",
        "過於挑剔、吹毛求疵，容易用高標準審視身邊人",
        "容易陷入過度思考與鑽牛角尖，產生嚴重的精神內耗",
        "個性孤僻，極度需要獨處，常在人際交往中顯得疏離",
        "在壓力下容易變得多疑、憤世嫉俗或不切實際"
      ],
      description: "你就像是一個穿梭在古老圖書館深處的學者，亦或是一位潛入千米深海的潛水員，永遠對『為什麼』充滿好奇。你不滿足於世俗給出的現成答案，總是希望透過自己的研究、推理與直覺來拼湊真理。你對科學、哲學、神祕學或精密技術有著天然的親和力。對你而言，孤獨並非寂寞，而是重整大腦與靈魂能量的甘露。因為你看得太透、分析得太理智，常對人性抱持懷疑，這讓你看起來有些防備重重。學習敞開心扉，允許他人靠近你，並明白『理智不能解答愛的所有疑問』，是你的靈魂必修課。當你願意把腦海中的智慧落實到現實中、溫暖身邊的人時，你將獲得真正的內在平靜。"
    },
    career: {
      talents: "卓越的深度研究、數據拆解、程式設計、系統除錯、精密邏輯與精神領域探索能力。不適合需要表面應酬社交、缺乏深度與專注的工作。在專業學術與技術領域是頂尖人才。",
      jobs: [
        "科學研究人員 / 實驗室分析師",
        "資深程式架構師 / 網路安全專家",
        "哲學家 / 作家 / 歷史學家",
        "企業數據分析師 / 市場研究顧問",
        "命理師 / 神祕學導師 / 冥想培訓師",
        "獨立調查員 / 偵探 / 審計專家"
      ]
    },
    love: {
      style: "你追求鷙伏於靈魂深處的默契。你對戀人的精神層次要求極高，不願將就於世俗的陪伴。在親密關係中，你依然需要保留一片純粹屬於你自己的『絕對精神孤島』，否則會感到窒息與疲憊。",
      tips: "你需要一個心智成熟、能理解你獨處需求，且能跟你進行深度談話的知性伴侶。學會主動表達你的愛與在乎，因為你的沉默常常會被伴侶誤解為冷漠或嫌棄。"
    },
    lesson: "放下懷疑與防備。學習信任生命與他人，明白世間有些美麗的事物（如愛與情感）是無法被邏輯完全拆解的。"
  },
  8: {
    name: "掌控豐盛的實踐家",
    title: "權力數 / Achiever & Ruler",
    summary: "生命靈數 8 的人是天生的商業奇才與資源整合者，意志堅定，擁有實現宏大成就與物質豐盛的天賦。",
    traits: {
      strength: [
        "強大的商业直覺與組織管理能力，善於運籌帷幄、掌控大局",
        "意志力無比堅韌，具備百折不撓、從谷底迅速反彈的魄力",
        "執行力一流，極富實幹精神，不畏懼龐大資源的調度與挑戰",
        "追求卓越，志向遠大，能清晰規劃出事業發展的長期藍圖",
        "看重效率與成果，具備天生的談判技巧與判斷人心的能力"
      ],
      weakness: [
        "掌控欲過強，凡事希望說了算，容易顯得獨裁霸道",
        "容易以金錢、名利或世俗成就來衡量人生的價值與關係",
        "工作狂，常因追求成就而忽視家庭陪伴、人際情感與自身健康",
        "不擅長處理脆弱、感性層面的問題，給人冷酷、現實的感覺",
        "容易為了維持表面成功而背負過重壓力，死要面子活受罪"
      ],
      description: "你就像是一位端坐在帝國王座上的君主，天生具備對資源、財富與權力的敏銳直覺。你的人生道路上往往充滿了戲劇性的高山與低谷，但你靈魂中那股不服輸的鋼鐵意志，總能讓你在跌倒後重新站起，甚至開創比之前更輝煌的局面。你深諳現實世界的運作規則，擅長組織各路人馬來實現同一個宏大目標。然而，這種對『掌控』與『成果』的過度追求，有時會蒙蔽你的雙眼，讓你把人際關係也變成了利益的博弈。學習平衡物質與靈性的世界，明白財富與地位只是工具，靈魂的豐盛與愛才是終點。當你學會以慈悲、慷慨的態度將成功分享給大眾時，你才會真正感到內心的充實與安詳。"
    },
    career: {
      talents: "極佳的商業決策力、金融投資嗅覺、大型組織重整與風險管理天賦。不適合屈居人下、沒有決策空間或一成不變的小職員職位。適合在商業戰場中衝鋒陷陣並掌舵。",
      jobs: [
        "企業創辦人 / CEO / 營運長",
        "金融投資經理 / 證券分析師",
        "律師 / 法官 / 法律顧問",
        "不動產開發商 / 大規模專案主管",
        "大型連鎖集團營運主管",
        "商務談判代表 / 資源整合經理"
      ]
    },
    love: {
      style: "你的愛是霸道、深沉且極具擔當的。你希望能在經濟上與生活上為伴侶提供最優渥、最安全的保障。你保護欲極強，希望伴侶能跟著你的生活軌跡前進，但有時會因為將工作模式帶回親密關係，而顯得缺乏溫柔與體貼。",
      tips: "你需要一個能理解你的事業野心、但同時在精神上擁有獨立人格的伴侶。試著在伴侶面前展現你的脆弱與疲憊，不要事事都裝作強人，感情才能真正交流。"
    },
    lesson: "平衡物質與心靈。學會感恩與施予，明白真正的力量源於內心的平和與對弱者的悲憫，而非外在的名利掌控。"
  },
  9: {
    name: "大愛無私的夢想家",
    title: "大愛數 / Humanitarian & Sage",
    summary: "生命靈數 9 的人是靈性極高的夢想家，充滿慈悲心、同理心與藝術靈感，一生追求精神世界的昇華。",
    traits: {
      strength: [
        "極廣闊的包容力與同理心，能毫無偏見地接納不同的人",
        "慈悲為懷，熱心公益與環保，天然關懷人類的整體命運",
        "藝術感知力與靈性直覺極高，對玄學、哲學有著極佳悟性",
        "大腦充滿智慧，看淡名利世俗，追求精神世界的圓滿豐盛",
        "極具感召力，說話能深入人心，散發著和藹的智慧光芒"
      ],
      weakness: [
        "容易流於空想，行事缺乏具體計畫與落實的毅力",
        "過度感性用事，同情心氾濫，容易被別有用心的人利用",
        "情緒多愁善感，容易受到社會負面新聞的影響而陷入悲觀",
        "缺乏明確的個人界限與目標，生活容易顯得隨波逐流",
        "容易在現實的柴米油鹽中感到挫敗，進而變得憤世嫉俗"
      ],
      description: "你就像是一輪照亮夜空的明月，柔和、包容，將溫柔的光輝無私地灑向人間。在靈數的旅程中，你代表著圓滿與總結，靈魂深處似乎帶著前 8 個數字的所有智慧與記憶。這讓你天然對物質名利看得很淡，更在乎靈魂的昇華與世界的美好。你無法忍受周遭人的痛苦，常投身於社會服務、環境保護或靈性療癒中。然而，這份過度慈悲的能量，也常讓你忽視了自己的個人界限。你常常因為盲目包容他人而受傷，或者因為大腦中的『大同世界』與骨感的現實差距太大，而感到深沉的無力與失望。學習將宏大的理想落實為每一天具體的小事，並在付出時學會劃清底線。唯有先保護好自己的光亮，你才能長久地照亮他人。"
    },
    career: {
      talents: "極高的美感藝術力、利他奉獻天賦、文字與哲學感召力。不適合唯利是圖、高壓競爭或缺乏人文關懷的工作環境。在能為人類福祉、心靈成長貢獻的領域最易發光。",
      jobs: [
        "非營利組織 (NGO) 統籌 / 志工領袖",
        "心靈療癒師 / 催眠師 / 瑜伽導師",
        "藝術家 / 小說家 / 詩人 / 哲學研究者",
        "環境保護與野生動物保護者",
        "宗教界工作者 / 靈性諮商師",
        "文化傳播總監 / 紀錄片導演"
      ]
    },
    love: {
      style: "你追求超凡脫俗的柏拉圖式精神戀情。在關係中，你包容力極強，近乎無條件地愛著伴侶，願意為了對方的快樂做出巨大犧牲。然而，你常在腦海中將伴侶『完美化』，一旦發現對方有著庸俗的缺點，便容易產生極大的失落感。",
      tips: "你需要一個有愛心、理解你的大愛，同時又能引導你落實日常生活的實踐型伴侶。在戀愛中保持理性，學會對伴侶的不合理行為說拒絕，避免無底線的委曲求全。"
    },
    lesson: "學會將理想落地。在現實的限制中，用具體的行動去溫暖身邊的人；建立健康的個人界限，保護好自己的能量。"
  }
};

// 2. 擴充版卓越數/大師數資料庫 (11, 22, 33)
const masterNumberData = {
  11: {
    name: "精神光芒的靈覺導師",
    title: "大師卓越數 11 / Master Intuitive & Illuminator",
    summary: "大師數 11 擁有雙重 1 的獨立開創力，與加總為 2 的極致直覺力，是連結物質與精神世界的宇宙天線。",
    description: "作為大師數 11，你天生散發著高頻率的電磁能量。你擁有一種超越常理的超強直覺與靈感，就像擁有一台宇宙雷達，能輕易看穿人心與事物的隱秘脈絡。你的靈魂使命是作為一個『啟迪者』與『光芒傳遞者』，將靈性世界的智慧與靈感帶入日常現實中，啟發他人。然而，這股強大的能量也是一柄雙刃劍。你常常在『追求自我實現的開創（1）』與『追求合作與妥協的和諧（2）』之間感到強烈的自我拉扯。高頻能量常讓你的神經系統處於緊繃狀態，容易產生莫名的焦慮、失眠與神經敏感。學習信任你那如閃電般的直覺，放下腦海中無休止的懷疑，並學會讓自己的能量『接地氣』，你將能成為一位強大的引路人。"
  },
  22: {
    name: "夢想落地的架構大師",
    title: "大師卓越數 22 / Master Builder",
    summary: "大師數 22 結合了雙重 2 的外交直覺，與加總為 4 的超強務實執行力，擁有將巨大宏願化為現實實體的能力。",
    description: "大師數 22 被譽為宇宙中最具威力的數字之一，被稱為『大師建造者』。你既擁有超凡的遠見與精神格局（雙重2的直覺），又擁有無比堅毅、腳踏實地的實幹步伐（4的條理與穩健）。你的一生註定要與『大規模的建設』相關——不論是創立跨國企業、設計基礎建設，還是推動重大的社會改革與流程變革。你的天賦在於能將空泛的理想落實為可以觸摸的實體架構。然而，欲戴王冠，必承其重。你從小就容易感受到巨大的無形壓力和責任，這常讓你內心焦慮、胃部緊張。你必須學會平衡理想與現實，克服對失敗的恐懼，並學會將龐大的任務委派給團隊，而不是一個人死撐。只要你敢於追夢，你將能在這世界上留下不可磨滅的長遠遺產。"
  },
  33: {
    name: "宇宙大愛的療癒導師",
    title: "大師卓越數 33 / Master Teacher",
    summary: "大師數 33 融合了雙重 3 的表達靈活力，與加總為 6 的無私慈悲心，是最高振頻的療癒與靈魂引路人。",
    description: "大師數 33 是靈數中極為罕見且高振頻的能量，常被稱為『宇宙導師』。你的一生圍繞著『無條件的愛、靈魂療癒與真理傳授』展開。你擁有強大得不可思議的慈悲心，不僅能輕易感同身受身邊人的痛苦，更對人類整體的命運與疾苦抱持著深切的關懷。你擅長用充滿藝術感、創意且溫馨的方式（雙重3的表達與6的關懷）來撫平他人的創傷。然而，這份宇宙級的慈悲也常讓你承受著常人難以想像的情感負荷。你很容易將別人的磨難完全當作自己的責任，導致情緒過度消耗，甚至陷入自我犧牲的盲目迷惘中。你必須明白：你無法叫醒每一個裝睡的人，每個人也都有自己的靈魂功課需要自己面對。先好好療癒自己、照亮自己，你的光芒才能長久且健康地照亮整個人間。"
  }
};

// 3. 擴充版九宮格連線 (8條線) 資料庫
const lineData = {
  "123": {
    name: "藝術美感線 (1-2-3)",
    summary: "具備卓越的審美眼光、感性與藝術創造力。",
    detail: "你天生對於美麗的事物、色彩、聲音與文字有著極強的敏銳度。你富有想像力，擅長透過藝術、文學、設計或獨特的生活品味來表達自我。在人際交往中，你情感細膩，懂得體察生活中的小確幸。這條連線常出現在優秀的設計師、作家、音樂家與美學推廣者身上。"
  },
  "456": {
    name: "組織執行線 (4-5-6)",
    summary: "具備強大的組織力、條理思考與執行效率。",
    detail: "你是實幹型的代表。當面臨複雜的事務或混亂的局面時，你能夠迅速制定計畫、分配資源並一步步執行到位。你做事講求條理，邏輯清晰，能把空泛的構想具體落實為可行的專案，是團隊中的中流柱石。在職場上，你擁有極佳的管理天賦與執行效率。"
  },
  "789": {
    name: "權力貴人線 (7-8-9)",
    summary: "具備領袖風範、出色的社會適應力與貴人運勢。",
    detail: "你身上散發著令人信服的領袖氣質，在社會交往中容易獲得他人的信任與支持。你在關鍵時刻常能得到前輩或貴人的指點與相助。這條線也象徵著你在爭取社會地位、名望與權力方面擁有較強的運勢。你具備卓越的大局觀，適合在大型組織中擔任要職。"
  },
  "147": {
    name: "物質健康線 (1-4-7)",
    summary: "重實幹與現實層面，身體素質或動手能力佳。",
    detail: "你非常務實，注重物質基礎與現實的保障。你深信看得見、摸得著的成果，對身體保健、體育運動或手作工藝可能很有興趣。你懂得在現實世界中穩紮穩打，建立起屬於自己的安全堡壘，具備極強的生存能力與踏實的作風。"
  },
  "258": {
    name: "感情人際線 (2-5-8)",
    summary: "極具親和力與同理心，擅長人際交往與情感共鳴。",
    detail: "你是朋友圈中的社交能手。你擁有強大的同理心，能輕易讀懂別人的喜怒哀樂，並給予最適當的關懷。你極具親和力，善於在人與人之間建立深刻的情感連結，擁有極佳的人緣與情感支持網絡。適合從事人脈開發、客戶關懷、心理諮商等工作。"
  },
  "369": {
    name: "智慧創意線 (3-6-9)",
    summary: "思考敏捷、求知慾強，追求精神層次的智慧。",
    detail: "你是一個思想家與學習者。你擁有敏捷的頭腦與無窮的好奇心，喜歡閱讀、探討哲學或學習各領域的新知。你對生活常有深刻的感悟，追求精神生活的豐富與靈魂的成長，不甘於平庸的思想。在學術研究、教育、文學創作上，這條線能為你提供源源不絕的靈性智慧。"
  },
  "159": {
    name: "事業意志線 (1-5-9)",
    summary: "意志力堅定，目標導向，在事業上極具爆發力。",
    detail: "一旦你鎖定了目標，就會展現出驚人的意志力與不達目的誓不罷休的衝勁。你自主性強，抗壓耐操，在追求事業成功的道路上敢於面對任何挑戰。這條線是典型創業者與職場成功者的象徵。它賦予你越挫越勇的拼勁，但也要注意避免過度工作導致健康受損。"
  },
  "357": {
    name: "人緣桃花線 (3-5-7)",
    summary: "充滿幽默感與個人魅力，桃花運與公眾人緣佳。",
    detail: "你天生幽默、風趣且極具個人魅力。你的說話藝術常能逗得身邊人開懷大笑，讓人樂於與你相處。你在社交場合極具吸引力，有很強的觀眾緣與桃花運，非常適合從事公關、業務、演藝或公眾人物相關工作。你懂得展現自己最好的一面，能在社交中快速建立影響力。"
  }
};

// 4. 九宮格單個數字（1-9）在不同圈數下的解讀資料庫
const digitCountDescriptions = {
  1: {
    symbol: "自我、獨立、行動力",
    desc: "代表個人的自我意識、獨立精神與主動出擊的魄力。",
    levels: {
      0: "【0圈 - 能量缺乏】：你容易缺乏自信，過度在意並依賴他人的意見。在面臨抉擇時容易隨波逐流，不擅於向他人宣告自己的主體性，容易在迎合大眾中迷失真實自我。",
      12: "【1-2圈 - 能量平衡】：你具備健康的自我認同。行事獨立自主，有良好的主動精神。你能為自己的權益發聲，同時不顯得過於固執，能客觀地包容並聽取他人意見。",
      3: "【3圈以上 - 能量過度】：你的自我意識極強，好勝心旺盛。做事容易陷入自我中心，剛愎自用，聽不進任何反對的聲音。容易顯得頑固霸道，在人際關係中給人沉重的壓迫感。"
    }
  },
  2: {
    symbol: "同理、合作、細節分析",
    desc: "代表情感的細膩度、同理心、人際協調能力與對細微處的敏銳察覺。",
    levels: {
      0: "【0圈 - 能量缺乏】：你行事較為神經大條，直來直往。在人際交往中較不擅長察言觀色，容易忽視周圍人細微的情緒波動，有時會因為說話不夠委婉而引來誤會。",
      12: "【1-2圈 - 能量平衡】：心思細膩，同理心極強。你是一個溫柔的傾聽者，擅長協調團隊衝突，在不破壞和諧的前提下把細節規劃得妥妥當當，是極佳的合作夥伴。",
      3: "【3圈以上 - 能量過度】：你對周圍人的一言一行極度敏感，容易多疑不安，經常陷入情緒化的內耗中。在親密關係中極度缺乏安全感，容易產生過剩的依賴性與掌控欲。"
    }
  },
  3: {
    symbol: "創意、溝通、熱情活力",
    desc: "代表藝術靈感、表達天賦、幽默感與社交活躍度。",
    levels: {
      0: "【0圈 - 能量缺乏】：你的表達方式較為保守與務實，不喜歡天馬行空的幻想。在社交場合中顯得安靜內斂，生活步調單純，較缺乏隨興的幽默感與生活情趣。",
      12: "【1-2圈 - 能量平衡】：思維活潑，充滿創意與好奇心。你口才流利，擅長傳遞快樂，能把枯燥的事物描繪得生動有趣，人際交往廣泛且充滿魅力。",
      3: "【3圈以上 - 能量過度】：你精力過於分散，行事常流於三分鐘熱度。說話可能快過腦袋，容易因為口無遮攔或說話誇大其詞而得罪人，生活作息容易缺乏財務與規律。"
    }
  },
  4: {
    symbol: "務實、穩定、組織執行",
    desc: "代表做事的秩序感、條理結構、追求物質保障與執行耐力。",
    levels: {
      0: "【0圈 - 能量缺乏】：你缺乏秩序與時間概念，不喜歡被繁文縟節與打卡規則束縛。行事天馬行空且隨興，對理財的規劃意識較弱，容易給人缺乏穩定度的感覺。",
      12: "('【1-2圈 - 能量平衡】：行事認真負責，腳踏實地。你重視流程與常軌，答應別人的承諾會切實履行。具備優良的儲蓄習慣與風險控制能力，追求長遠的安全感。",
      3: "【3圈以上 - 能量過度】：思想極其固執，抗拒生活中的任何意外變動。你過度追求安全感而限制了自己的步伐，行事缺乏彈性，容易陷入日復一日的單調規律中，焦慮感較重。"
    }
  },
  5: {
    symbol: "自由、冒險、隨機應變",
    desc: "代表生活體驗的寬度、對自由的熱愛、跨界適應與應變智慧。",
    levels: {
      0: "【0圈 - 能量缺乏】：你害怕生活常軌的變動與未知風險，偏好待在熟悉的環境中。適應新環境的步調較慢，面對突發狀況容易手忙腳亂，生活體驗範圍較窄。",
      12: "【1-2圈 - 能量平衡】：熱愛自由與探索。你適應力超凡，能在不同環境中游刃有餘。渴望旅遊與接觸新事物，反應敏銳，能在危機中展現絕佳的隨機應變能力。",
      3: "【3圈以上 - 能量過度】：你極度抗拒任何形式的束縛與承諾，行事任性衝動、不計後果。做事缺乏焦點，容易沉溺於感官的享樂，或在事業與感情中頻繁跳槽逃避。"
    }
  },
  6: {
    symbol: "責任、關懷、完美奉獻",
    desc: "代表對家庭與朋友的擔當、關懷他人、醫治療癒與美感追求。",
    levels: {
      0: "【0圈 - 能量缺乏】：你不喜歡被過多的人情債或家庭負擔束縛，重視個人獨立多於團體包容。行事較為理性，討厭被嘮叨或去囉嗦別人。",
      12: "【1-2圈 - 能量平衡】：你溫暖體貼，責任感極強，極具關懷他人的美德。重視家庭和睦，善於布置環境並擁有卓越的美感品味，是令人安心的傾訴對象。",
      3: "【3圈以上 - 能量過度】：你容易陷入濫好人的迷失，將不屬於你的責任攬在身上，進而感到委屈。你習慣以『愛』之名干涉、碎念他人，要求過高，容易給伴侶和家人沉重壓力。"
    }
  },
  7: {
    symbol: "探求、思考、直覺智慧",
    desc: "代表求知慾、分析拆解、獨立思考與心靈層面的智慧。",
    levels: {
      0: "【0圈 - 能量缺乏】：你不喜歡想得太深或追根究底，做事偏好直接簡約。思維務實，較容易盲從主流意見，對於宗教、哲學或玄學等精神領域較無感。",
      12: "【1-2圈 - 能量平衡】：你具備卓越的質疑精神與深度分析能力。喜好閱讀與學習，凡事追尋邏輯真相。直覺敏銳，思想獨立，不隨波逐流，是天生的思考者。",
      3: "【3圈以上 - 能量過度】：你疑心病很重，難以真正信任他人，容易陷入無休止的過度分析與大腦內耗中。性格顯得冷僻孤獨，說話有時過於犀利、挑剔，與現實脫節。"
    }
  },
  8: {
    symbol: "野心、豐盛、資源掌控",
    desc: "代表商業思維、資源調度能力、金錢概念與對社會成就的野心。",
    levels: {
      0: "【0圈 - 能量缺乏】：你對權力、財富與社會地位的追求慾望較低，生活隨遇而安。較缺乏商業思維、談判智慧，也不喜歡強求去掌控全局或支配他人。",
      12: "【1-2圈 - 能量平衡】：你具備良好的組織能力、商業判斷力與清晰的金錢概念。有著良性的成就野心，善於整合資源，渴望在物質界創造出傑出的成就。",
      3: "【3圈以上 - 能量過度】：你的掌控欲極強，容易將人際關係或事物皆用『利益、名望』衡量。行事作風霸道強勢，容易成為忽視生活與健康的工作狂，給人現實之感。"
    }
  },
  9: {
    symbol: "大愛、慈悲、靈性夢想",
    desc: "代表無私大愛、利他同理心、精神領悟與藝術想像力。",
    levels: {
      0: "【0圈 - 能量缺乏】：你非常務實，行事講求回報與邏輯利益。人情交往界線分明，較缺乏對玄學、大自然或公共慈善事業的興趣，看事情偏向世俗層面。",
      12: "【1-2圈 - 能量平衡】：心胸寬大，樂善好施，擁有跨越偏見的同理心。熱愛大自然，對心靈療癒與人文藝術有極高的領悟力，深受周圍人的喜愛與尊敬。",
      3: "【3圈以上 - 能量過度】：你是脫離現實的超級夢想家，缺乏將理想落地的執行力。同情心太氾濫而缺乏人際防禦底線，容易被利用，甚至因為對現實失望而憤世嫉俗。"
    }
  }
};

// 5. 計算生命靈數的核心演算法
function calculateNumerology(dateStr) {
  if (!dateStr) return null;
  
  const digitsOnly = dateStr.replace(/[^0-9]/g, "");
  if (digitsOnly.length !== 8) return null;
  
  const year = parseInt(digitsOnly.substring(0, 4));
  const month = parseInt(digitsOnly.substring(4, 6));
  const day = parseInt(digitsOnly.substring(6, 8));
  
  const birthDigits = digitsOnly.split("").map(Number);
  const step1Sum = birthDigits.reduce((acc, curr) => acc + curr, 0);
  
  let step2Sum = 0;
  let finalNumber = step1Sum;
  let hasMaster = false;
  let masterNumber = 0;
  
  if (step1Sum === 11 || step1Sum === 22 || step1Sum === 33) {
    hasMaster = true;
    masterNumber = step1Sum;
  }
  
  if (step1Sum > 9) {
    const s1Digits = step1Sum.toString().split("").map(Number);
    step2Sum = s1Digits.reduce((acc, curr) => acc + curr, 0);
    
    if ((step2Sum === 11 || step2Sum === 22 || step2Sum === 33) && !hasMaster) {
      hasMaster = true;
      masterNumber = step2Sum;
    }
    
    finalNumber = step2Sum;
    if (step2Sum > 9) {
      const s2Digits = step2Sum.toString().split("").map(Number);
      finalNumber = s2Digits.reduce((acc, curr) => acc + curr, 0);
    }
  }
  
  let birthdayNum = day;
  if (day > 9) {
    const dayDigits = day.toString().split("").map(Number);
    birthdayNum = dayDigits.reduce((acc, curr) => acc + curr, 0);
    if (birthdayNum > 9) {
      birthdayNum = birthdayNum.toString().split("").map(Number).reduce((acc, curr) => acc + curr, 0);
    }
  }
  
  const gridCounts = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0 };
  birthDigits.forEach(num => {
    if (num > 0) gridCounts[num]++;
  });
  if (birthdayNum > 0) gridCounts[birthdayNum]++;
  if (finalNumber > 0) gridCounts[finalNumber]++;
  
  const activeLines = [];
  const linesToCheck = [
    { id: "123", nums: [1, 2, 3] },
    { id: "456", nums: [4, 5, 6] },
    { id: "789", nums: [7, 8, 9] },
    { id: "147", nums: [1, 4, 7] },
    { id: "258", nums: [2, 5, 8] },
    { id: "369", nums: [3, 6, 9] },
    { id: "159", nums: [1, 5, 9] },
    { id: "357", nums: [3, 5, 7] }
  ];
  
  linesToCheck.forEach(line => {
    const isConnect = line.nums.every(num => gridCounts[num] > 0);
    if (isConnect) {
      activeLines.push(line.id);
    }
  });
  
  const currentYear = new Date().getFullYear();
  const personalYearBase = currentYear.toString() + digitsOnly.substring(4, 8);
  const personalYearDigits = personalYearBase.split("").map(Number);
  let personalYearNum = personalYearDigits.reduce((acc, curr) => acc + curr, 0);
  while (personalYearNum > 9) {
    personalYearNum = personalYearNum.toString().split("").map(Number).reduce((acc, curr) => acc + curr, 0);
  }
  
  return {
    birthDate: `${year} 年 ${month} 月 ${day} 日`,
    year,
    month,
    day,
    lifePathNum: finalNumber,
    birthdayNum,
    hasMaster,
    masterNumber,
    stepSumProcess: formatProcess(birthDigits, step1Sum, step2Sum, finalNumber),
    gridCounts,
    activeLines,
    personalYearNum,
    personalYearExplanation: getPersonalYearExplanation(personalYearNum)
  };
}

function formatProcess(digits, s1, s2, final) {
  const p1 = digits.join(" + ");
  if (s1 <= 9) return `${p1} = ${s1}`;
  const p2 = s1.toString().split("").join(" + ");
  if (s2 === final) return `${p1} = ${s1} ➔ ${p2} = ${final}`;
  const p3 = s2.toString().split("").join(" + ");
  return `${p1} = ${s1} ➔ ${p2} = ${s2} ➔ ${p3} = ${final}`;
}

function getPersonalYearExplanation(num) {
  const years = {
    1: { theme: "播種與全新起點", desc: "今年是全新的 9 年週期的第一年。是時候播下夢想的種子，啟動你規劃已久的新計畫、新事業或生活新方向。今年你的獨立性強、幹勁十足，適合勇敢開拓，不要害怕孤單。" },
    2: { theme: "等待、合作與耐心", desc: "經歷了去年的衝勁，今年步調會變慢。重點在於建立人際關係、尋找合作夥伴與耐心等待。這一年適合退居幕後，細心灌溉種子，多聽取他人意見，調和周遭衝突。" },
    3: { theme: "創意發光與社交表達", desc: "今年是充滿歡樂與表達欲望的一年！去年的努力開始萌芽，你的創意點子多，社交活動頻繁，人緣極佳。適合寫作、創作、行銷或展現自我，但也需注意花費過多與精力分散。" },
    4: { theme: "奠定基礎與務實深耕", desc: "今年是辛勤耕耘、建立秩序與穩固基礎的年份。生活步調較為嚴肅，你的責任加重。適合買房、結婚、深入學習專業技術或重整財務結構。腳踏實地地付出，會迎來穩固的收穫。" },
    5: { theme: "改變、自由與探索", desc: "今年是充滿變數與新鮮感的一年。你可能會面臨職涯變動、搬家、頻繁旅行或觀念的轉變。擁抱這些改變，勇於嘗試未知事物。這是一段打破常規、重獲自由的時期。" },
    6: { theme: "責任、家庭與愛心療癒", desc: "今年生活的重心會回到家庭、親密關係與對他人的關懷上。你可能需要承擔更多家庭責任，或者主動為周圍人提供情感支持。這是一個適合修復關係、美化家居、自我療癒的溫暖年份。" },
    7: { theme: "內省、學習與心靈重整", desc: "這是一段內在心靈的探索期。今年你不適合盲目擴張事業或過度社交，而適合靜下心來學習、研究、冥想或重整自己的內心。在獨處中提升智慧，今年也是直覺極強的時期。" },
    8: { theme: "收穫、豐盛與展現實力", desc: "這是收穫汗水與成果的黃金年。如果你前幾年踏實努力，今年將在金錢、權力與事業上獲得實質的回報。你的主導權變大，但也需要注意合理分配資源，防範過度擴張引起的壓力。" },
    9: { theme: "圓滿、斷捨離與重整期", desc: "這是 9 年週期的最後一年，主題是『清理與放下』。把生活中不再適合你的舊觀念、壞習慣、不健康的關係或工作清理乾淨。不適合今年啟動新計畫，而適合做總結與心靈大掃除，為明年的全新播種做準備。" }
  };
  return years[num] || { theme: "沈澱期", desc: "重整腳步，體驗生命的律動。" };
}

// 6. UI 與 事件處理
document.addEventListener("DOMContentLoaded", () => {
  initStarfield();

  const birthInput = document.getElementById("birth-date");
  const calcBtn = document.getElementById("btn-calculate");
  const dashboard = document.getElementById("dashboard");
  const initialView = document.getElementById("initial-view");
  
  const today = new Date();
  const maxDate = today.toISOString().split("T")[0];
  birthInput.max = maxDate;
  
  calcBtn.addEventListener("click", () => {
    const val = birthInput.value;
    if (!val) {
      alert("請先選擇您的出生日期！");
      return;
    }
    
    playCalculationAnimation(val, () => {
      const result = calculateNumerology(val);
      if (result) {
        renderResults(result);
        initialView.classList.add("hidden");
        dashboard.classList.remove("hidden");
        dashboard.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  const tabs = document.querySelectorAll(".tab-btn");
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      
      const targetId = tab.dataset.target;
      const sections = document.querySelectorAll(".tab-pane");
      sections.forEach(sec => sec.classList.remove("active"));
      document.getElementById(targetId).classList.add("active");
    });
  });

  document.getElementById("btn-copy").addEventListener("click", () => {
    const textToCopy = getResultText();
    navigator.clipboard.writeText(textToCopy)
      .then(() => alert("結果已成功複製到剪貼簿！可以去分享給朋友囉！"))
      .catch(() => alert("複製失敗，請手動複製網頁內容。"));
  });

  document.getElementById("btn-export").addEventListener("click", () => {
    exportCard();
  });
});

// canvas 星空效果
function initStarfield() {
  const canvas = document.getElementById("starfield");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  let stars = [];
  const starCount = 100;

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
      radius: Math.random() * 1.5,
      alpha: Math.random(),
      speed: 0.2 + Math.random() * 0.5,
      fade: Math.random() > 0.5 ? 0.005 : -0.005
    });
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const gradient = ctx.createRadialGradient(
      canvas.width / 2, canvas.height / 2, 0,
      canvas.width / 2, canvas.height / 2, Math.max(canvas.width, canvas.height)
    );
    gradient.addColorStop(0, "#0f082e");
    gradient.addColorStop(0.5, "#060317");
    gradient.addColorStop(1, "#020108");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "rgba(255, 255, 255, 1)";
    stars.forEach(star => {
      ctx.globalAlpha = star.alpha;
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
      ctx.fill();

      star.alpha += star.fade;
      if (star.alpha <= 0 || star.alpha >= 1) star.fade = -star.fade;
      star.y -= star.speed * 0.1;
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

function playCalculationAnimation(dateStr, callback) {
  const overlay = document.getElementById("anim-overlay");
  const textContainer = document.getElementById("anim-text");
  overlay.classList.remove("hidden");
  
  const steps = [
    "正在與宇宙星體建立連線...",
    `讀取出生年月日: ${dateStr}`,
    "解析數字中...",
    "正在計算生命靈數與生日數...",
    "正在排列命盤九宮格...",
    "正在繪製能量連線...",
    "命盤解密完成！"
  ];
  
  let i = 0;
  textContainer.innerText = steps[0];
  
  const interval = setInterval(() => {
    i++;
    if (i < steps.length) {
      textContainer.innerText = steps[i];
    } else {
      clearInterval(interval);
      overlay.classList.add("hidden");
      callback();
    }
  }, 400);
}

let currentResult = null;

// 7. 渲染資料與九宮格點擊引擎
function renderResults(result) {
  currentResult = result;
  
  document.getElementById("res-birth-date").innerText = result.birthDate;
  document.getElementById("res-process").innerText = `計算過程：${result.stepSumProcess}`;

  const numberCircle = document.getElementById("res-number");
  const archetypeText = document.getElementById("res-archetype");
  const titleText = document.getElementById("res-title");
  const summaryText = document.getElementById("res-summary");
  
  numberCircle.innerText = result.lifePathNum;
  
  const info = lifePathData[result.lifePathNum];
  archetypeText.innerText = info.name;
  titleText.innerText = info.title;
  summaryText.innerText = info.summary;

  const masterContainer = document.getElementById("res-master-container");
  if (result.hasMaster) {
    const masterInfo = masterNumberData[result.masterNumber];
    masterContainer.innerHTML = `
      <div class="master-card glow-gold">
        <div class="master-badge">🌟 大師卓越數雙重護持</div>
        <h4>${masterInfo.title} • ${masterInfo.name}</h4>
        <p class="master-summary">${masterInfo.summary}</p>
        <p class="master-desc">${masterInfo.description}</p>
      </div>
    `;
    masterContainer.classList.remove("hidden");
  } else {
    masterContainer.classList.add("hidden");
    masterContainer.innerHTML = "";
  }

  // 重置九宮格格狀態
  const cells = document.querySelectorAll(".grid-cell");
  cells.forEach(cell => {
    cell.classList.remove("active");
    const countSpan = cell.querySelector(".circle-count");
    if (countSpan) countSpan.remove();
  });
  
  // 填寫九宮格圈數與事件綁定
  for (let num = 1; num <= 9; num++) {
    const count = result.gridCounts[num];
    const cell = document.querySelector(`.grid-cell[data-num="${num}"]`);
    if (cell) {
      if (count > 0) {
        cell.classList.add("active");
        const circlesWrapper = document.createElement("span");
        circlesWrapper.className = "circle-count";
        circlesWrapper.innerText = "○".repeat(count);
        cell.appendChild(circlesWrapper);
      }
      
      // 滑鼠提示
      cell.title = `點擊查看數字 ${num} 的圈數分析（目前有 ${count} 圈）`;
      
      // 點擊事件：解鎖單個數字圈數解析
      cell.onclick = () => {
        showDigitDetail(num, count);
      };
    }
  }

  // 繪製連線
  const svgLines = {
    "123": document.getElementById("line-1-2-3"),
    "456": document.getElementById("line-4-5-6"),
    "789": document.getElementById("line-7-8-9"),
    "147": document.getElementById("line-1-4-7"),
    "258": document.getElementById("line-2-5-8"),
    "369": document.getElementById("line-3-6-9"),
    "159": document.getElementById("line-1-5-9"),
    "357": document.getElementById("line-3-5-7")
  };

  Object.values(svgLines).forEach(lineEl => {
    if (lineEl) lineEl.classList.remove("active");
  });

  result.activeLines.forEach(lineId => {
    const lineEl = svgLines[lineId];
    if (lineEl) lineEl.classList.add("active");
  });

  const connectionsList = document.getElementById("res-connections-list");
  if (result.activeLines.length > 0) {
    let listHTML = `<h4 class="connection-header-title">⚡ 您的能量連線分析 (共 ${result.activeLines.length} 條)：</h4><div class="line-cards-grid">`;
    result.activeLines.forEach(lineId => {
      const lInfo = lineData[lineId];
      listHTML += `
        <div class="line-desc-card glow-cyan">
          <h5>${lInfo.name}</h5>
          <p class="line-sum"><strong>特質：</strong>${lInfo.summary}</p>
          <p class="line-detail">${lInfo.detail}</p>
        </div>
      `;
    });
    listHTML += `</div>`;
    connectionsList.innerHTML = listHTML;
  } else {
    connectionsList.innerHTML = `
      <div class="no-line-card">
        <h5>目前沒有完整的九宮格連線</h5>
        <p>這代表您的能量分佈較為分散或獨立，不容易受到特定連線軌跡的制約，擁有高度的自主性與靈活的可塑性！</p>
      </div>
    `;
  }

  // 顯示九宮格解析面板
  const cellArea = document.getElementById("cell-interpretation-area");
  if (cellArea) {
    cellArea.classList.remove("hidden");
    // 預設載入使用者的生命靈數對應數字
    showDigitDetail(result.lifePathNum, result.gridCounts[result.lifePathNum]);
  }

  // 渲染分頁內容
  const pStrengths = info.traits.strength.map(s => `<li>✦ ${s}</li>`).join("");
  const pWeaknesses = info.traits.weakness.map(w => `<li>✦ ${w}</li>`).join("");
  document.getElementById("tab-personality").innerHTML = `
    <div class="info-card animate-fade-in">
      <h3>🎭 核心性格深度剖析</h3>
      <p class="para">${info.traits.description}</p>
      <p class="para"><strong>🌱 靈魂成長修行建議：</strong>${info.lesson}</p>
      
      <div class="traits-flex-grid">
        <div class="trait-box box-strength">
          <h5>🌟 光明特質 (優勢)</h5>
          <ul>${pStrengths}</ul>
        </div>
        <div class="trait-box box-weakness">
          <h5>⚠️ 陰暗陰影 (弱勢/課題)</h5>
          <ul>${pWeaknesses}</ul>
        </div>
      </div>
    </div>
  `;

  const pJobs = info.career.jobs.map(j => `<span class="badge-job">${j}</span>`).join(" ");
  document.getElementById("tab-career").innerHTML = `
    <div class="info-card animate-fade-in">
      <h3>💼 天賦潛能與職涯導航</h3>
      <p class="para"><strong>天賦特質：</strong>${info.career.talents}</p>
      <div class="job-recommendation">
        <h5>🎯 推薦發揮領域：</h5>
        <div class="jobs-flex-wrap">${pJobs}</div>
      </div>
    </div>
  `;

  document.getElementById("tab-love").innerHTML = `
    <div class="info-card animate-fade-in">
      <h3>💖 戀愛觀與人際關係</h3>
      <p class="para"><strong>戀愛風格：</strong>${info.love.style}</p>
      <div class="love-tips glow-gold">
        <h5>💡 親密關係指引：</h5>
        <p>${info.love.tips}</p>
      </div>
    </div>
  `;

  document.getElementById("tab-fortune").innerHTML = `
    <div class="info-card animate-fade-in">
      <h3>🔮 當前流年運勢分析</h3>
      <div class="fortune-header">
        <div class="fortune-badge">流年數字: ${result.personalYearNum}</div>
        <h4>今年主旋律：${result.personalYearExplanation.theme}</h4>
      </div>
      <p class="para">${result.personalYearExplanation.desc}</p>
      <p class="info-note">（備註：流年數是依據 ${new Date().getFullYear()} 年與您的出生月日所計算，影響力將持續至今年年底。）</p>
    </div>
  `;
}

// 渲染單個數字圈數解析
function showDigitDetail(num, userCount) {
  const detailContent = document.getElementById("cell-detail-content");
  if (!detailContent) return;
  
  const dInfo = digitCountDescriptions[num];
  if (!dInfo) return;

  // 判斷哪一個級別該高亮
  const is0 = userCount === 0;
  const is12 = userCount === 1 || userCount === 2;
  const is3Plus = userCount >= 3;

  let html = `
    <div class="cell-interpretation-content">
      <div class="cell-detail-header">
        <h5>數字 ${num} • ${dInfo.symbol}</h5>
        <span class="user-count-badge">您的圈數：${userCount} 圈</span>
      </div>
      <p class="cell-detail-desc"><strong>能量象徵：</strong>${dInfo.desc}</p>
      <div class="energy-levels-list">
        <div class="energy-level-row ${is0 ? 'highlight-level' : ''}">
          <div class="level-title">0 圈 (能量缺乏)</div>
          <div class="level-desc">${dInfo.levels[0]}</div>
        </div>
        <div class="energy-level-row ${is12 ? 'highlight-level' : ''}">
          <div class="level-title">1 - 2 圈 (能量平衡)</div>
          <div class="level-desc">${dInfo.levels[12]}</div>
        </div>
        <div class="energy-level-row ${is3Plus ? 'highlight-level' : ''}">
          <div class="level-title">3 圈以上 (能量過度)</div>
          <div class="level-desc">${dInfo.levels[3]}</div>
        </div>
      </div>
    </div>
  `;
  detailContent.innerHTML = html;
  
  // 為被點擊的單元格加上短暫的動態反饋效果
  const cells = document.querySelectorAll(".grid-cell");
  cells.forEach(c => c.style.border = "");
  const activeCell = document.querySelector(`.grid-cell[data-num="${num}"]`);
  if (activeCell) {
    activeCell.style.border = "2px solid var(--color-cyan)";
  }
}

// 組合複製文字內容
function getResultText() {
  if (!currentResult) return "";
  const info = lifePathData[currentResult.lifePathNum];
  let text = `【星啟心靈 • 我的生命靈數分析報告】\n`;
  text += `✦ 我的生日：${currentResult.birthDate}\n`;
  text += `✦ 生命靈數：${currentResult.lifePathNum} 號 - ${info.name}\n`;
  text += `✦ 核心特質：${info.summary}\n\n`;
  
  if (currentResult.hasMaster) {
    const mInfo = masterNumberData[currentResult.masterNumber];
    text += `🌟 大師卓越數加持：${mInfo.title} - ${mInfo.name}\n`;
    text += `（${mInfo.summary}）\n\n`;
  }
  
  text += `⚡ 九宮格連線數：${currentResult.activeLines.length} 條\n`;
  if (currentResult.activeLines.length > 0) {
    currentResult.activeLines.forEach(lineId => {
      const lInfo = lineData[lineId];
      text += `  - ${lInfo.name}：${lInfo.summary}\n`;
    });
  } else {
    text += `  （無特定連線，象徵擁有無限可塑性的獨立能量！）\n`;
  }
  
  text += `\n🔮 今年流年運勢（流年數 ${currentResult.personalYearNum}）：\n`;
  text += `👉 主題：${currentResult.personalYearExplanation.theme}\n`;
  text += `${currentResult.personalYearExplanation.desc}\n\n`;
  
  text += `※ 網頁支援 CC0 無版權，歡迎複製分享或二次改寫！\n`;
  text += `前往解密您的生命靈數：${window.location.href}`;
  return text;
}

// 一鍵複製與繪製圖卡匯出
function exportCard() {
  if (!currentResult) return;
  
  const canvas = document.createElement("canvas");
  canvas.width = 600;
  canvas.height = 750;
  const ctx = canvas.getContext("2d");
  
  const grad = ctx.createLinearGradient(0, 0, 0, canvas.height);
  grad.addColorStop(0, "#0f082e");
  grad.addColorStop(1, "#020108");
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "rgba(255, 255, 255, 0.4)";
  for (let i = 0; i < 40; i++) {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    const r = Math.random() * 2;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fill();
  }

  ctx.strokeStyle = "rgba(223, 183, 108, 0.5)";
  ctx.lineWidth = 4;
  ctx.strokeRect(20, 20, canvas.width - 40, canvas.height - 40);
  
  ctx.strokeStyle = "rgba(223, 183, 108, 0.2)";
  ctx.lineWidth = 1;
  ctx.strokeRect(26, 26, canvas.width - 52, canvas.height - 52);

  ctx.fillStyle = "#dfb76c";
  ctx.textAlign = "center";
  ctx.font = "bold 26px sans-serif";
  ctx.fillText("星啟心靈 • 生命靈數卡", canvas.width / 2, 70);

  ctx.fillStyle = "#b19ffb";
  ctx.font = "16px sans-serif";
  ctx.fillText(`出生年月日：${currentResult.birthDate}`, canvas.width / 2, 105);

  const cx = canvas.width / 2;
  const cy = 205;
  const radius = 65;
  
  const circleGrad = ctx.createRadialGradient(cx, cy, radius - 10, cx, cy, radius + 20);
  circleGrad.addColorStop(0, "rgba(138, 43, 226, 0.2)");
  circleGrad.addColorStop(1, "rgba(138, 43, 226, 0)");
  ctx.fillStyle = circleGrad;
  ctx.beginPath();
  ctx.arc(cx, cy, radius + 20, 0, Math.PI * 2);
  ctx.fill();

  ctx.strokeStyle = "#dfb76c";
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.arc(cx, cy, radius, 0, Math.PI * 2);
  ctx.stroke();

  ctx.fillStyle = "#ffffff";
  ctx.font = "bold 70px serif";
  ctx.fillText(currentResult.lifePathNum, cx, cy + 24);

  const info = lifePathData[currentResult.lifePathNum];
  ctx.fillStyle = "#ffd700";
  ctx.font = "bold 22px sans-serif";
  ctx.fillText(info.name, cx, 310);

  ctx.fillStyle = "#ffffff";
  ctx.font = "italic 16px sans-serif";
  ctx.fillText(info.title, cx, 335);

  ctx.fillStyle = "rgba(255, 255, 255, 0.85)";
  ctx.font = "15px sans-serif";
  const descText = info.summary;
  ctx.fillText(descText, cx, 375);

  let offset = 0;
  if (currentResult.hasMaster) {
    offset = 45;
    const mInfo = masterNumberData[currentResult.masterNumber];
    ctx.fillStyle = "#ffd700";
    ctx.fillRect(80, 400, canvas.width - 160, 32);
    ctx.fillStyle = "#0f082e";
    ctx.font = "bold 14px sans-serif";
    ctx.fillText(`🌟 大師卓越數加持: ${mInfo.title}`, cx, 421);
  }

  ctx.fillStyle = "rgba(255, 255, 255, 0.9)";
  ctx.font = "16px sans-serif";
  ctx.textAlign = "left";
  
  const startY = 425 + offset;
  ctx.fillText(`⚡ 能量連線：共 ${currentResult.activeLines.length} 條`, 60, startY);
  
  ctx.font = "14px sans-serif";
  ctx.fillStyle = "rgba(255, 255, 255, 0.7)";
  if (currentResult.activeLines.length > 0) {
    const lineNames = currentResult.activeLines.map(id => lineData[id].name.split(" ")[0]).join("、");
    ctx.fillText(`（已激活：${lineNames}）`, 60, startY + 25);
  } else {
    ctx.fillText("（未形成特定連線，具備高可塑性自主能量）", 60, startY + 25);
  }

  ctx.fillStyle = "rgba(255, 255, 255, 0.9)";
  ctx.font = "16px sans-serif";
  ctx.fillText(`🔮 今年流年運勢（流年數 ${currentResult.personalYearNum}）：`, 60, startY + 70);
  ctx.fillStyle = "#ffd700";
  ctx.font = "bold 15px sans-serif";
  ctx.fillText(`主題：${currentResult.personalYearExplanation.theme}`, 60, startY + 95);
  ctx.fillStyle = "rgba(255, 255, 255, 0.7)";
  ctx.font = "14px sans-serif";
  
  const desc = currentResult.personalYearExplanation.desc;
  wrapText(ctx, desc, 60, startY + 120, canvas.width - 120, 20);

  ctx.fillStyle = "rgba(255, 255, 255, 0.3)";
  ctx.font = "11px sans-serif";
  ctx.textAlign = "center";
  ctx.fillText("本工具遵循 CC0 協議宣告無版權 • 任何人皆可免費修改與複製使用", canvas.width / 2, 700);
  ctx.fillText(`計算網址：${window.location.origin}${window.location.pathname}`, canvas.width / 2, 718);

  const dataURL = canvas.toDataURL("image/png");
  const link = document.createElement("a");
  link.download = `生命靈數卡-${currentResult.lifePathNum}.png`;
  link.href = dataURL;
  link.click();
}

function wrapText(context, text, x, y, maxWidth, lineHeight) {
  const words = text.split("");
  let line = "";
  for (let n = 0; n < words.length; n++) {
    const testLine = line + words[n];
    const metrics = context.measureText(testLine);
    const testWidth = metrics.width;
    if (testWidth > maxWidth && n > 0) {
      context.fillText(line, x, y);
      line = words[n];
      y += lineHeight;
    } else {
      line = testLine;
    }
  }
  context.fillText(line, x, y);
}
