export interface MeditationStep {
  title: string;
  paragraphs: string[];
}

export interface MeditationContent {
  heroEyebrow: string;
  heroTitle: string;
  heroSubtitle: string;
  heroDescription: string;
  duration: string;
  audioLabel: string;
  audioCaption: string;
  purposeTitle: string;
  purposeIntro: string;
  purposePoints: string[];
  sourceTitle: string;
  sourceParagraphs: string[];
  shlokaSanskrit: string[];
  shlokaTranslation: string;
  beginTitle: string;
  beginIntro: string;
  steps: MeditationStep[];
  closing: string;
  closingNote: string;
}

export const en: MeditationContent = {
  heroEyebrow: "Audio-Guided Meditation · 10–15 minutes",
  heroTitle: "Inner Heart Meditation",
  heroSubtitle: "Antar-Hriday Dhyan",
  heroDescription:
    "A guided meditation on the divine presence within the heart, anchored in the teachings of the Bhagavad Gita. Cultivate deep serenity, purify the mind, and rest in the bliss of the inner light.",
  duration: "10–15 minutes",
  audioLabel: "Listen — Guided Audio",
  audioCaption:
    "Find a quiet place, sit comfortably, and let the voice gently lead you within.",

  purposeTitle: "Purpose of this Meditation",
  purposeIntro: "This meditation aims to:",
  purposePoints: [
    "Cultivate deep serenity intertwined with divine bliss.",
    "Purify the mind from unwanted distractions and impurities.",
    "Connect deeply with the divine presence within one’s heart, nurturing its manifestation over time.",
  ],

  sourceTitle: "Source",
  sourceParagraphs: [
    "This meditation technique is anchored in the teachings of the Bhagavad Gita — particularly verses 61 and 62 of Chapter 18, and verse 9 of Chapter 8.",
    "Chapter 18, verse 61 reveals that God resides in the heart of every being. Chapter 8, verse 9 portrays Him as a luminous force that outshines darkness, akin to the brilliance of the sun. By embracing this presence, one attains profound peace and ultimately reaches the state of liberation, or Nirvana.",
  ],
  shlokaSanskrit: [
    "Ishvarah sarva-bhutanam hrid-deshe ’rjuna tishthati,",
    "Tat-prasaadat paraam shantim, sthaanam praapsyasi shashvatam.",
  ],
  shlokaTranslation:
    "“The Lord dwells in the heart of every being, O Arjuna. By His grace, you shall attain supreme peace and the eternal abode.”",

  beginTitle: "Let us now begin the meditation",
  beginIntro:
    "Find a quiet place, sit comfortably with the spine gently upright, and allow the breath to soften. When you are ready, follow each step at your own pace.",

  steps: [
    {
      title: "1. Turning inward",
      paragraphs: [
        "Begin by closing your eyes and entering a state of meditation. Direct your focus inward, to the very core of your heart.",
        "Here, envision the deity of your choice — Narayana, Brahma, Shiva, or the Divine Mother Shakti. For those who follow Hinduism but worship a Formless God, or for individuals of Abrahamic traditions, imagine a radiant flame within your heart.",
        "As you immerse in this meditation, gently recite in your mind a portion of verse 61 of the 18th chapter of the Bhagavad Gita. Those unfamiliar with the Sanskrit may simply reflect upon its essence in their native language: “God dwells in the heart of every being.”",
        "Ishvarah sarva-bhutanam hrid-deshe ’rjuna tishthati…",
        "Ishvarah sarva-bhutanam hrid-deshe ’rjuna tishthati…",
        "Ishvarah sarva-bhutanam hrid-deshe ’rjuna tishthati…",
      ],
    },
    {
      title: "2. Chanting the divine name",
      paragraphs: [
        "Begin by softly chanting your chosen mantra for a brief period — perhaps a minute or two. Once the visualization of your preferred divine figure or the luminous flame becomes steady within your heart, gently set the mantra aside.",
        "Now, with your focus anchored in the heart, begin to recite the name of the divine you hold dear. If you are drawn to the Formless, concentrate on the radiant flame within.",
        "Elongate the name in a way that feels natural — silently or aloud. For example: “Raa…m, Raa…m,” or “Go…d, Go…d.” For names with short vowels, like “Shiva,” take a longer pause between repetitions: “Shiva… Shiva…” or “Mother Durga… Mother Durga…”",
        "If you are drawn to the Formless, you may chant “Om” with a long, prolonged silence after it.",
        "The essence of this meditation lies not just in the chanting but in the silence between the chants. That interval amplifies your connection and focus on the divine presence within. The quiet moments between chants are crucial — they deepen your attunement to the divine essence in the heart.",
      ],
    },
    {
      title: "3. The light from the heart cleansing the mind",
      paragraphs: [
        "Begin by visualizing a radiant light emerging from the representation of the divine you cherish in your heart. Imagine this luminosity ascending from your heart, coursing through your neck, and illuminating your brain.",
        "Feel it cascade over your senses, filling your ears and eyes. Experience the calming and sacred aura of this light, bathing your mind in serene joy.",
        "Envision the pristine quality of this divine light purging your mind of any impurities and negative feelings — anger, jealousy, greed, lust, resentment. See them dissipate, melting away into the brilliance of the light.",
        "Any shadows within the mind are replaced by a warm, divine glow, eradicating all negativity. Take a moment to truly immerse yourself in this sensation of inner peace and joy.",
      ],
    },
    {
      title: "4. The light flowing into the arms",
      paragraphs: [
        "Now, imagine a radiant light emanating from your heart again, flowing seamlessly into both arms.",
        "Feel its gentle progression, moving steadily toward your palms. Be present and attuned to each moment of its journey.",
        "Gradually, this serene glow reaches your palms and begins to extend into your fingers. Allow yourself to sense this divine illumination throughout your arms and fingertips.",
      ],
    },
    {
      title: "5. The light filling the whole body",
      paragraphs: [
        "Imagine a luminous energy flowing from your heart, cascading into your chest, filling your lungs, and illuminating each of your abdominal organs — from the stomach, liver, and pancreas, to your intestines.",
        "This radiant light continues its journey down your thighs, enveloping your knees, and extending to your feet and toes. Be fully present as you feel this warm glow embracing every part of your body: chest, abdomen, legs, arms, neck, and head.",
        "As this divine light moves, it imparts a sensation of coolness and joy wherever it settles.",
        "If there is a specific area of your body in need of healing, focus your attention there. Envision that the ailment or discomfort is being soothed and healed by the touch of this divine light. For those seeking targeted healing, you may practise this meditation with an emphasis on directing the light towards the affected area for an extended period. As you do so, gently affirm to yourself: “healing… healing… restored… restored.”",
      ],
    },
    {
      title: "6. Bathed in divine bliss",
      paragraphs: [
        "Now, envision your entire being bathed in this radiant divine light, imbued with the essence of the divine. Feel a profound sense of bliss permeating every inch of your body, from head to toe.",
        "As you direct this luminosity to various parts of your body, periodically anchor your focus on your heart, always remaining conscious and connected to the ever-present divine presence within.",
      ],
    },
    {
      title: "7. The luminous self",
      paragraphs: [
        "Imagine a luminous silhouette of yourself, standing before you — as though your entire body radiates pure light.",
        "After a moment, shift your focus from this radiant projection back to your actual self, immersing in the profound bliss of the divine light permeating every part of you.",
        "Continuously return your attention to the divine presence in your heart — the source of this illuminating energy.",
      ],
    },
    {
      title: "8. Resting and gently returning",
      paragraphs: [
        "Remain in this deeply contented state for as long as you are comfortable.",
        "When you are ready, gently open your eyes and, if you feel inclined, lightly touch your eyes and forehead with your palms.",
      ],
    },
  ],

  closing: "In reverence, Hari Sharanam!",
  closingNote:
    "May the inner light you have touched today continue to illumine every moment of your life.",
};

export const hi: MeditationContent = {
  heroEyebrow: "ऑडियो निर्देशित ध्यान · 10–15 मिनट",
  heroTitle: "अंतर्हृदय ध्यान",
  heroSubtitle: "Inner Heart Meditation",
  heroDescription:
    "भगवद्गीता की शिक्षा पर आधारित, हृदय के भीतर विद्यमान ईश्वरीय उपस्थिति पर एक निर्देशित ध्यान। गहरी शांति का अनुभव करें, मन को शुद्ध करें, और अपने भीतर के दिव्य प्रकाश के आनंद में स्थिर हों।",
  duration: "10–15 मिनट",
  audioLabel: "सुनें — निर्देशित ऑडियो",
  audioCaption:
    "एक शांत स्थान पर सुखपूर्वक बैठें और इस वाणी को धीरे-धीरे आपको भीतर ले जाने दें।",

  purposeTitle: "ध्यान का उद्देश्य",
  purposeIntro: "इस ध्यान-क्रिया के उद्देश्य हैं —",
  purposePoints: [
    "दिव्य आनंद के साथ गहरी शांति का अनुभव करना।",
    "मन को अनुपयोगी भावनाओं और मलिनताओं से मुक्त करना।",
    "हृदय में स्थित ईश्वर को निरंतर अनुभव करना और उनकी अभिव्यक्ति को समय के साथ पुष्ट करना।",
  ],

  sourceTitle: "ध्यान का स्रोत",
  sourceParagraphs: [
    "यह ध्यान-तकनीक भगवद्गीता की शिक्षा पर आधारित है — विशेष रूप से अठारहवें अध्याय के 61वें और 62वें श्लोकों, तथा आठवें अध्याय के 9वें श्लोक पर।",
    "अध्याय 18, श्लोक 61 में भगवान कहते हैं कि वे प्रत्येक प्राणी के हृदय में निवास करते हैं। अध्याय 8, श्लोक 9 में उन्हें सूर्य के समान प्रकाशमय स्वरूप बताया गया है, जो अंधकार के पार है। उनकी शरण में जाने पर परम शांति प्राप्त होती है, और अंततः समस्त दुःखों से स्थायी मुक्ति — निर्वाण की प्राप्ति होती है।",
  ],
  shlokaSanskrit: [
    "ईश्वरः सर्वभूतानां हृद्देशेऽर्जुन तिष्ठति।",
    "तत्प्रसादात् परां शान्तिं स्थानं प्राप्स्यसि शाश्वतम्॥",
  ],
  shlokaTranslation:
    "“हे अर्जुन! ईश्वर समस्त प्राणियों के हृदय में स्थित हैं। उनकी कृपा से तुम परम शांति और शाश्वत स्थान को प्राप्त करोगे।”",

  beginTitle: "तो आइए, अब ध्यान आरंभ करते हैं",
  beginIntro:
    "किसी शांत स्थान पर सुखपूर्वक, मेरुदण्ड को सहज रूप से सीधा रखते हुए बैठ जाएँ। श्वास को स्वाभाविक होने दें। तत्पर हों, तो प्रत्येक चरण को अपनी गति से अनुभव करें।",

  steps: [
    {
      title: "1. भीतर की ओर मुड़ना",
      paragraphs: [
        "अपनी आँखें बंद कीजिए और ध्यान के लिए तत्पर हो जाइए। अपनी दृष्टि अपने हृदय की गहराई की ओर मोड़िए।",
        "जो सगुण-साकार ईश्वर की उपासना करते हैं, वे अपने हृदय में अपने प्रिय रूप — नारायण, ब्रह्मा, शिव अथवा माँ शक्ति — की छवि की कल्पना करें। जो निराकार ईश्वर के उपासक हैं, अथवा अब्राहमिक परंपराओं के अनुयायी हैं, वे अपने हृदय में दीपशिखा-सी एक उज्ज्वल ज्योति की कल्पना करें।",
        "इस ध्यान में लीन होते हुए मन-ही-मन भगवद्गीता के 18वें अध्याय के 61वें श्लोक का यह अंश दोहराइए। जिन्हें संस्कृत का अभ्यास नहीं है, वे आरंभ में इसका भाव अपनी मातृभाषा में चिंतन कर सकते हैं — “भगवान प्रत्येक प्राणी के हृदय में विराजमान हैं।”",
        "ईश्वरः सर्वभूतानां हृद्देशेऽर्जुन तिष्ठति…",
        "ईश्वरः सर्वभूतानां हृद्देशेऽर्जुन तिष्ठति…",
        "ईश्वरः सर्वभूतानां हृद्देशेऽर्जुन तिष्ठति…",
      ],
    },
    {
      title: "2. ईश्वर के नाम का जप",
      paragraphs: [
        "अपने चुने हुए मंत्र का धीरे-धीरे जप एक-दो मिनट तक करें। जब हृदय में आपके प्रिय ईश्वर-रूप अथवा ज्योति की छवि स्थिर हो जाए, तब मंत्र-जप को सहजता से विराम दें।",
        "अब हृदय में ध्यान को स्थिर रखते हुए अपने प्रिय ईश्वर के नाम का उच्चारण आरंभ करें — मन-ही-मन अथवा बोलकर। यदि आप निराकार के उपासक हैं, तो हृदय की उज्ज्वल ज्योति पर ध्यान केंद्रित रखें।",
        "नाम का उच्चारण इस प्रकार करें कि वह स्वाभाविक प्रतीत हो — जैसे “राआआआआम… राआआआआम…” अथवा “गॉ…ड, गॉ…ड।” जिन नामों में स्वर लघु हैं, जैसे “शिव”, उनके दो उच्चारणों के बीच लंबा अंतराल रखें — “शिव… शिव…” अथवा “माँ दुर्गा… माँ दुर्गा…”",
        "जो निराकार के अनुरागी हैं, वे “ॐ” का जप करें और उसके बाद का दीर्घ मौन-अंतराल अनुभव करें।",
        "इस ध्यान का सार केवल जप में नहीं, अपितु जप के बीच के मौन में निहित है। यही अंतराल हृदय में विद्यमान दिव्यता से आपके अनुसंधान को गहराता है। याद रखिए — जप के बीच के मौन क्षण ही हृदय में ईश्वर के स्पर्श को सघन करते हैं।",
      ],
    },
    {
      title: "3. हृदय से उठती ज्योति — मन का परिशोधन",
      paragraphs: [
        "अब कल्पना कीजिए कि आपके हृदय में स्थित ईश्वर की छवि अथवा ज्योति से एक दिव्य श्वेत प्रकाश निकल रहा है। यह प्रकाश आपके हृदय से ऊपर उठता हुआ कंठ से होकर मस्तिष्क तक पहुँच रहा है।",
        "अनुभव करें कि यह प्रकाश आपकी इन्द्रियों — कानों और आँखों — को आप्लावित कर रहा है, और आपका सम्पूर्ण मस्तिष्क इसकी शीतल, पवित्र आभा में स्नात हो रहा है।",
        "इस दिव्य प्रकाश की निर्मलता आपके मन की समस्त मलिनताओं और नकारात्मक भावनाओं — क्रोध, ईर्ष्या, लोभ, काम, द्वेष — को विलीन कर रही है। देखिए कि वे सब प्रकाश की उज्ज्वलता में घुलकर समाप्त हो रही हैं।",
        "मन के समस्त अंधकारमय कोनों में दिव्य आभा भर रही है, और सम्पूर्ण नकारात्मकता दूर हो रही है। इस आंतरिक शांति और आनंद की अनुभूति में कुछ क्षण ठहरिए।",
      ],
    },
    {
      title: "4. भुजाओं में बहता प्रकाश",
      paragraphs: [
        "अब अनुभव करें कि वही दिव्य प्रकाश आपके हृदय से पुनः निकल रहा है और आपकी दोनों भुजाओं में सहजता से प्रवाहित हो रहा है।",
        "इसकी कोमल गति को महसूस करें — यह धीरे-धीरे आपकी कोहनियों, हथेलियों की ओर बढ़ रहा है। प्रत्येक क्षण इसकी यात्रा के प्रति सजग रहें।",
        "धीरे-धीरे यह आभा हथेलियों तक पहुँचती है और आपकी अंगुलियों में फैल जाती है। दोनों भुजाओं और अंगुलियों के पोर-पोर में इस दिव्य प्रकाश का अनुभव कीजिए।",
      ],
    },
    {
      title: "5. सम्पूर्ण शरीर में दिव्य प्रकाश",
      paragraphs: [
        "अब कल्पना कीजिए कि हृदय से उठता हुआ दिव्य प्रकाश आपके वक्षःस्थल में, फेफड़ों में, और उदर के समस्त अंगों — आमाशय, यकृत, अग्न्याशय, आँतों — में फैल रहा है।",
        "यह प्रकाश जाँघों से होते हुए घुटनों, फिर पैरों और पाँव की अंगुलियों तक पहुँचता है। पूरी सजगता के साथ अनुभव करें कि यह कोमल आभा आपके शरीर के प्रत्येक अंग — वक्ष, उदर, पैर, हाथ, गर्दन और मस्तक — को आलिंगन में ले रही है।",
        "जहाँ-जहाँ यह दिव्य प्रकाश पहुँचता है, वहाँ शीतलता और आनंद की अनुभूति होती है।",
        "यदि आपके शरीर के किसी विशेष भाग को उपचार की आवश्यकता है, तो वहाँ अपना ध्यान केंद्रित करें। अनुभव करें कि उस रोग अथवा कष्ट को इस दिव्य प्रकाश का स्पर्श सहला रहा है, स्वस्थ कर रहा है। उपचार के लिए ध्यान करते समय उस अंग पर प्रकाश को कुछ अधिक समय तक केंद्रित कर मन-ही-मन कहें — “निरोग… निरोग… स्वस्थ… स्वस्थ…”",
      ],
    },
    {
      title: "6. दिव्य आनंद में स्नान",
      paragraphs: [
        "अब अनुभव कीजिए कि आपका सम्पूर्ण अस्तित्व इस दिव्य प्रकाश में स्नात है, ईश्वर की आभा से ओतप्रोत है। मस्तक से लेकर पाँव तक प्रत्येक अंग में परम आनंद की लहर बह रही है।",
        "जब-जब आप शरीर के विभिन्न भागों में इस ज्योति को निर्देशित करें, बीच-बीच में अपना ध्यान पुनः हृदय में स्थित ईश्वर पर ले आएँ — सदैव उस सर्व-व्यापी दिव्य उपस्थिति से जुड़े रहें।",
      ],
    },
    {
      title: "7. प्रकाश-स्वरूप आत्म-छवि",
      paragraphs: [
        "अब कल्पना कीजिए कि आपके सामने आपकी ही एक प्रकाशमय छवि खड़ी है — जैसे आपका सम्पूर्ण शरीर शुद्ध प्रकाश की किरणों से निर्मित हो।",
        "कुछ क्षण इस दीप्तिमय छवि को निहारिए, और फिर अपनी दृष्टि वापस अपने वास्तविक स्वरूप पर ले आइए — और अनुभव कीजिए कि यह दिव्य प्रकाश आपके सम्पूर्ण अस्तित्व में व्याप्त है।",
        "बार-बार अपना ध्यान हृदय में स्थित ईश्वर पर लौटाएँ — यही इस सम्पूर्ण प्रकाश का स्रोत है।",
      ],
    },
    {
      title: "8. विश्राम और सहज वापसी",
      paragraphs: [
        "जब तक सहज लगे, इस गहन आनंदमय अवस्था में बने रहें।",
        "जब आप तैयार हों, तब धीरे-धीरे अपनी आँखें खोलिए। यदि भाव हो, तो अपनी हथेलियों से आँखों और भाल (ललाट) को कोमलता से सहला दीजिए।",
      ],
    },
  ],

  closing: "श्रद्धा के साथ — हरि शरणं!",
  closingNote:
    "जो आंतरिक प्रकाश आज आपने अनुभव किया, वही आपके जीवन के प्रत्येक क्षण को आलोकित करता रहे।",
};
