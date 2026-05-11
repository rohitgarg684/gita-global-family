export interface ActContent {
  heroSubtitle: string;
  heroTitle: string;
  heroDescription: string;
  heroNote: string;
  downloadTitle: string;
  downloadSubtitle: string;
  conceptPaperTitle: string;
  conceptPaperSubtitle: string;
  conceptPaperIntro: string[];
  fiveReasonsTitle: string;
  challenges: {
    title: string;
    paragraphs: string[];
  }[];
  solutionsTitle: string;
  solutionsIntro: string[];
  specialMeasureTitle: string;
  specialMeasureSubtitle: string;
  specialMeasureIntro: string[];
  measures: {
    title: string;
    paragraphs: string[];
  }[];
  miscTitle: string;
  miscParagraphs: string[];
  conclusionTitle: string;
  conclusionParagraphs: string[];
  objectionTitle: string;
  objectionParagraphs: string[];
  executiveSummaryTitle: string;
  executiveSummarySections: {
    title: string;
    paragraphs: string[];
    bullets?: string[];
  }[];
  essenceTitle: string;
  essenceParagraphs: string[];
  downloadEnglishLabel: string;
  downloadHindiLabel: string;
}

export const en: ActContent = {
  heroSubtitle: "A Historic Legislative Initiative",
  heroTitle: "The Sanatan Seva Nidhi Act",
  heroDescription:
    "For the Protection and Empowerment of Sanatan Dharma — Conceived and drafted by Bhagavad-Dharma Pīthādhiśa Sriyut Brahm Bodhi, President of Gita Global Family Trust.",
  heroNote:
    "The full draft of the Act was sent to the Prime Minister's Office and NITI Aayog on 17 October 2025.",
  downloadTitle: "Download the Act",
  downloadSubtitle:
    "The concept paper and gist of the Draft Sanatan Seva Nidhi Act is available in both English and Hindi.",
  conceptPaperTitle: "Concept Paper",
  conceptPaperSubtitle: "Challenges to Sanatan Dharma And Their Solutions",
  conceptPaperIntro: [
    "Sanatan Dharma stands today at a decisive crossroads and faces several serious challenges. One of the most significant challenges arises from competing religions that are actively converting Hindus and, owing to their substantially higher birth rates, are rapidly altering the demographic structure of India.",
  ],
  fiveReasonsTitle:
    "Five major reasons behind the lack of strength and expansion of Hinduism—",
  challenges: [
    {
      title: "(i) Absence of Well-Trained Religious Preceptors",
      paragraphs: [
        "These religions possess a large, organised, and well-equipped cadre of trained religious preceptors, such as maulanas and pastors. They have well-structured institutions that produce religious leaders on a large scale.",
        'For example, Islamic madrasas—estimated to number between 24,000 and 38,000 in India—produce more than 35,000 hafiz and alim every year. A hafiz is one who has memorised the entire Qur\'an, and an alim is one who can interpret its verses. Uttar Pradesh alone has approximately 16,000 recognised madrasas.',
        'If unregistered and part-time madrasas are also taken into account, the total number of madrasas in India is estimated at nearly 5,00,000, with around 50 million students, according to one estimate (Essay by Islamic scholar Dr Arjumand Ara, "Madrasas and the Making of Muslim Identity," Oxford University Press, New Delhi, 2006).',
        "The well-known Sachar Committee Report conceals this reality by citing only 4% Muslim student participation in madrasas. However, the report considers only children in the 7–9 age group and excludes other age groups such as 5–7 and 9+. It also excludes madrasas attached to mosques, which are believed to constitute a substantial portion of such institutions.",
        "According to UP State Board data, in 2025 in Uttar Pradesh, 21,302 students appeared for the Alim examination (Arabic and Farsi combined), with 17,544 successful candidates. West Bengal records around 12,500 Alim examinees every year.",
        "In contrast, it is rare to find a Hindu priest who has memorised an entire scripture. Most priests have not even read the primary scriptures. There is no systematic training system, nor is there official data on this issue. The few institutions that do exist largely focus on astrology and ritual performance for livelihood purposes rather than on philosophy or doctrine.",
        "As a result, this vital pillar of Sanatan Dharma—the doctrinal preacher—is almost absent, both in number and quality. The role of doctrinal preachers and priests in religion is comparable to that of soldiers in the army of a nation. If an army is small or its soldiers lack weapons, defeat is inevitable. In religion, scriptures are the weapons.",
        "Consequently, Hindus spread across more than 6,00,000 villages in India today lack knowledge and awareness of their own faith. According to one estimate, India has around 20,00,000 temples, most of which either have no priest or no properly trained priest.",
      ],
    },
    {
      title: "(ii) Absence of Scriptures in Hindu Homes",
      paragraphs: [
        "Every Muslim household possesses a Qur'an, and every Christian household has a Bible. It is rare to find followers of these religions without their scripture.",
        "Sadly, this is not the case among Hindus. The near-complete absence of scriptures in over 23 crore Hindu households is a major weakness. Without reading scripture, religious consciousness cannot develop.",
      ],
    },
    {
      title: "(iii) Neglected Temples",
      paragraphs: [
        "The third weakness of Hinduism lies in the neglected condition of most rural temples and many urban shrines. These temples are no longer vibrant centres of spiritual life because they lack doctrinal preachers and trained priests who can guide people in religion and spirituality. In many cases, they have no priests at all.",
        "In numerous villages of North India, temples have become centres of idleness or intoxication. Land donated to temples has often been encroached upon. As a result, these temples lie abandoned—without priests, without doctrinal preachers, and without meaningful activity.",
        "If learned and active priests or doctrinal preachers—hereafter referred to as Adhyatma-Acharyas—are appointed in these temples, they can become centres not only of religious life but also of cultural and economic development. The goal should be for every temple to become a living centre of spiritual, cultural, and even economic renewal.",
        "If this is achieved, Sanatan Dharma will grow stronger and will be able to engage competing religions through positive and constructive means. If temples also serve as centres for guidance in poverty alleviation, a spiritually enriched Sanatan Dharma can naturally surpass its competitors.",
      ],
    },
    {
      title: "(iv) Lack of Unity",
      paragraphs: [
        "The fourth weakness of Hinduism is its lack of unity. It is divided into countless sects and sub-traditions. A partial solution lies in ensuring that every Hindu family possesses one or two universally shared scriptures.",
        "Shared scriptures create a shared vision, and shared vision forms the foundation of religious unity. Hinduism does possess such universally accepted texts—the Bhagavad Gita and the Ramayana.",
      ],
    },
    {
      title: "(v) Absence of an Organised System of Giving (Daan)",
      paragraphs: [
        "Hinduism lacks an obligatory institutional system of giving comparable to zakat in Islam, where every Muslim is required to contribute and the funds are used exclusively for the welfare and expansion of the Islamic community, including conversion activities.",
        "Although Hindu scriptures prescribe giving as a continuous duty, in practice Hindu society lacks a structured and trusted mechanism for collecting donations dedicated solely to Hindu welfare. This discourages voluntary contributions to a transparent and accountable Hindu fund.",
      ],
    },
  ],
  solutionsTitle: "Solutions to the Five Weaknesses",
  solutionsIntro: [
    "If these five major weaknesses are addressed, Sanatan Dharma can be revitalised and empowered rapidly. This will require financial resources, which cannot come solely from the government, as India is a 'secular' nation. Nevertheless, a solution is possible.",
    "In recent years, religious awareness among Hindus has grown significantly, and there is increasing enthusiasm to contribute to the service of Dharma. This is the appropriate time to take concrete steps.",
  ],
  specialMeasureTitle: "Special Measure",
  specialMeasureSubtitle: "Creation of a Statutory National Sanatan Seva Nidhi",
  specialMeasureIntro: [
    "The Central Government should enact a law establishing a Hindu Service Fund (Sanatan Seva Nidhi), into which every Hindu may contribute monthly or voluntarily, with full confidence that their contribution will be used effectively.",
    "The authority to disburse funds should not rest with the government. Instead, the fund should be administered by a Sanatan Seva Nidhi Governing Council (Sant Parishad), with annual audits conducted by the Comptroller and Auditor General of India (CAG) to ensure full transparency.",
    "Ninety percent of the fund should be used for predetermined objectives—including the rehabilitation of displaced Hindus from Bangladesh, Pakistan, Afghanistan, and Kashmir—while ten percent should be reserved for emergency relief.",
  ],
  measures: [
    {
      title: "(a) Scriptures in Every Home",
      paragraphs: [
        "Every Hindu family (over 200 million) should be provided, free of cost, with a copy of the Bhagavad Gita and a Ramkatha text based on the regional tradition—Krittivasi, Kamba, Tulsidas, or Valmiki Ramayana.",
        "A concise edition of the Ramkatha should be prepared, ensuring that any content contrary to constitutional values is removed.",
      ],
    },
    {
      title: "(b) Large-Scale Training of Religious Teachers",
      paragraphs: [
        "Training should commence from the 6th grade and continue up to the Acharya level. The compulsory curriculum should include memorisation of the entire Gita, significant portions of the Vedas and Upanishads, the complete Ramkatha, major schools of Hindu philosophy (Vaishnava, Shaiva, Shakta), and foundational knowledge of other religions.",
        "These priests and doctrinal teachers should receive an initial fixed monthly stipend from the Sanatan Seva Nidhi. They will revitalise rural temples and contribute to economic upliftment by offering general guidance to youth regarding employment opportunities, relevant examinations, vocational training, and competitive preparation. Doctrinal preachers will be specifically trained in these competencies during their extended training period.",
      ],
    },
    {
      title: "(c) Assistance to Hindu Refugees",
      paragraphs: [
        "The fund should provide for the rehabilitation and support of Hindu families displaced from Bangladesh, Pakistan, Afghanistan, Kashmir, and other regions.",
      ],
    },
    {
      title: "(d) A Chain of Sanatan Schools",
      paragraphs: [
        "These schools shall integrate modern education with dharmic education. Dharmic instruction shall be imparted strictly with the informed consent of parents or legal guardians. Such schools are constitutionally permissible, provided they fully comply with the provisions of Article 28(3) of the Constitution of India.",
      ],
    },
  ],
  miscTitle: "Miscellaneous Provisions",
  miscParagraphs: [
    "The Governing Council shall include leading saints from all major traditions—Vaishnava, Shaiva, Shakta, Ganapatya, Arya Samaj, and others. It shall consist of 11 members serving on a rotational basis for a term of two years.",
    "The minimum curriculum for Acharyas shall be structured around the four Purusharthas—Dharma, Artha, Kama, and Moksha—and shall include scriptural studies, spiritual practice, comparative religion, Indian law, and livelihood-oriented skills.",
  ],
  conclusionTitle: "Conclusion",
  conclusionParagraphs: [
    "All measures proposed herein must cause no harm to any other religion or its followers and must not generate hatred toward any community. The objective is to strengthen Sanatan Dharma so that it may respond wisely and constructively to challenges, while ensuring the all-round development of Hindus and serving as an inspiration to others.",
    "This vision can be realised only through a credible statutory mechanism and a transparent religious fund—one that allows even a street vendor to contribute easily via UPI and enables wealthy individuals to contribute generously. The account number should be simple and memorable—for example, eleven nines (99999999999).",
    "Through this fund, scriptures such as the Gita and Ramayana will reach every Hindu household free of cost, and one million trained priests and Adhyatma-Acharyas can be prepared to guide India's six hundred thousand villages spiritually, socially, and economically.",
    "It is clarified that ritual priests (Purohits) and doctrinal preachers (Adhyatma-Acharyas) at all levels shall be trained strictly within constitutional values and laws enacted by Parliament, particularly those relating to Scheduled Castes and women. No training shall promote discrimination in theory or practice, and no edition of any scripture distributed under this programme shall contain content adverse to women or Scheduled Castes.",
    "For this purpose, intensive training through a special curriculum will be required. The detailed curriculum is provided in Schedule H of the proposed legislation.",
  ],
  objectionTitle: "A Possible Objection",
  objectionParagraphs: [
    "As the proposed Act does not harm any other faith, there should be no substantial opposition to its passage in Parliament. If the question arises as to why such an Act is being enacted for Sanatan Dharma alone, the appropriate response is that other faiths are free to submit draft legislation outlining similar funding mechanisms for their respective purposes.",
  ],
  executiveSummaryTitle: 'Executive Summary of "The Sanatan Seva Nidhi Act, 20XX"',
  executiveSummarySections: [
    {
      title: "1. Background",
      paragraphs: [
        "Bharat's ancient Sanatan civilisation—nourished by the Bhagavad Gita, the Vedas, the Upanishads, the Ramayana, and other heritage scriptures—has for millennia provided moral, cultural, and spiritual guidance to society.",
        "At present, other religious communities possess their own statutory frameworks (such as the Waqf Act, 1995 for Muslims and the Sikh Gurdwaras Act, 1925 for Sikhs), whereas Sanatan Dharma lacks a unified legal mechanism of similar nature.",
        "To fill this long-standing void, the Sanatan Seva Nidhi Act is hereby proposed.",
      ],
    },
    {
      title: "2. Objectives",
      paragraphs: [],
      bullets: [
        "Establishment of the Sanatan Seva Nidhi – A transparent system for voluntary contributions aimed at promoting religion, education, and culture.",
        "Scriptural Dissemination – Free distribution of the Bhagavad Gita, Ramayana traditions, and other heritage texts to over 200 million Sanatani households across Bharat.",
        "Training of Priests and Doctrinal Preachers – Creation of a national cadre of one million trained Purohits and Adhyātmāchāryas to guide Sanatani communities across more than six lakh villages, and to strengthen spiritual and community leadership from the village level to the global stage.",
        "Sanatani Schools Network – Integration of modern and Dharmic education through a system of Sanatan-based schools.",
        "Rehabilitation and Support – For abandoned women, the elderly, Hindu refugees, and disaster-affected communities.",
        "International Outreach – Establishment of branches abroad to spread Sanatan values in regions with a significant Indian diaspora.",
      ],
    },
    {
      title: "3. Key Features",
      paragraphs: [],
      bullets: [
        "Autonomous Fund: The government shall not interfere in the utilisation of the Fund.",
        "Central Governing Council: 11 eminent saints, scholars, and domain experts.",
        "State Councils: 11 eminent saints, scholars, and experts at the local level.",
        "Secretariat: Administrative and technical support body.",
        "Task Forces: Time-bound bodies for specific objectives.",
        "All accounts to be maintained in public sector banks.",
        "Annual audit by the Comptroller and Auditor General (CAG).",
        "Donors to receive 80G and CSR benefits.",
        "Administrative expenses capped at 10%.",
        "During the first seven years, 70% of the funds shall be utilised for free distribution of Bhagavad Gita and Ramkatha-based heritage texts, and training of doctrinal preachers and priests equipped also as employment and self-employment counsellors.",
      ],
    },
    {
      title: "4. Social and Spiritual Programmatic Areas",
      paragraphs: [],
      bullets: [
        "A set of Gita-Ramayana in every Hindu home, free.",
        "Training institutions for Purohits and Adhyātmāchāryas",
        "Residential and non-residential Sanatan schools",
        "Digital platforms for Dharma education",
        "Temple revitalisation and establishment of employment counselling centres",
        "Disaster relief and rehabilitation projects for Sanatanis",
        "Interfaith harmony and humanitarian assistance programmes",
      ],
    },
    {
      title: "5. Legal and Constitutional Safeguards",
      paragraphs: [],
      bullets: [
        "All contributions are purely voluntary.",
        "Full compliance with Article 28(3) of the Constitution regarding religious instruction (with prior parental consent) in Sanatani schools.",
        "The Act shall not interfere with the rights of other religious communities.",
      ],
    },
    {
      title: "6. Governance and Accountability",
      paragraphs: [],
      bullets: [
        "Annual reports to be presented before Parliament.",
        "All records to be publicly accessible.",
        "Council members to serve without salary; only honorarium or travel allowances permitted.",
        "System of complete transparency and audit oversight.",
      ],
    },
  ],
  essenceTitle: "7. Essence",
  essenceParagraphs: [
    "The Sanatan Seva Nidhi Act, 20XX is a historic initiative aimed at the preservation of Bharat's religious and cultural heritage, the moral-spiritual renaissance based on the Bhagavad Gita and Upanishads, and the national and global reorganisation of Sanatan Dharma as a unified, living, and universal tradition. The Indian Constitution does not bar the enactment of such legislation.",
  ],
  downloadEnglishLabel: "Download English PDF",
  downloadHindiLabel: "हिंदी PDF डाउनलोड करें",
};

export const hi: ActContent = {
  heroSubtitle: "एक ऐतिहासिक विधायी पहल",
  heroTitle: "सनातन सेवा निधि अधिनियम",
  heroDescription:
    "सनातन धर्म की रक्षा और सशक्तिकरण के लिए — भगवद्-धर्म पीठाधीश श्रीयुत ब्रह्म बोधि, अध्यक्ष, गीता ग्लोबल फ़ैमिली ट्रस्ट द्वारा विचारित एवं प्रारूपित।",
  heroNote:
    "प्रधानमंत्री, भारत और नीति-अयोग को प्रस्तावित कानून का पूरा प्रारूप प्रेषित—17 अक्टूबर, 2025 को।",
  downloadTitle: "अधिनियम डाउनलोड करें",
  downloadSubtitle:
    "सनातन सेवा निधि अधिनियम का विचार-पत्र एवं सार-संक्षेप अंग्रेज़ी और हिंदी दोनों में उपलब्ध है।",
  conceptPaperTitle: "विचार-पत्र",
  conceptPaperSubtitle: "सनातन धर्म के समक्ष चुनौतियाँ एवं उनके समाधान",
  conceptPaperIntro: [
    "आज सनातन धर्म एक विर्णामयक मोड़ पर खड़ा है और अनेक गंभीर चुनौतियों का सामना कर रहा है। इनमें एक प्रमुख चुनौती उन प्रतिस्पर्धी धर्मों से उत्पन्न होती है जो सक्रिय रूप से हिंदुओं का धर्मांतरण कर रहे हैं तथा अपनी कहीं अधिक जन्म-दर के कारण भारत की जनसांख्यिकीय संरचना को तीव्र गति से बदल रहे हैं।",
  ],
  fiveReasonsTitle:
    "सनातन धर्म की शक्ति और विस्तार के क्षय के पीछे पाँच प्रमुख कारण हैं —",
  challenges: [
    {
      title: "(i) प्रशिक्षित धार्मिक उपदेशकों की कमी",
      paragraphs: [
        "इन धर्मों के पास प्रशिक्षित धार्मिक उपदेशकों जैसे मौलवी और पादरी का एक विशाल, संगठित और संसाधन-संपन्न ढाँचा है। इनके पास सुव्यवस्थित संस्थान हैं जो बड़े पैमाने पर धार्मिक नेतृत्व तैयार करते हैं।",
        "उदाहरण के लिए, भारत में इस्लामी मदरसों की संख्या लगभग 24,000 से 38,000 के बीच आँकी जाती है, जहाँ से प्रतिवर्ष 35,000 से अधिक हाफ़िज़ और आलिम निकलते हैं। हाफ़िज़ वह होता है जिसने पूरा क़ुरआन कंठस्थ किया हो और आलिम वह होता है जो उसकी व्याख्या करने में सक्षम हो। केवल उत्तर प्रदेश में ही लगभग 16,000 मान्यता प्राप्त मदरसे हैं।",
        'यदि अंजीकृत और अंशकालिक मदरसों को भी सम्मिलित किया जाए, तो भारत में मदरसों की कुल संख्या लगभग 5,00,000 मानी जाती है, जिनमें लगभग 5 करोड़ विद्यार्थी अध्ययनरत हैं। यह अनुमान डॉ. अरजुमंद आरा के निबंध "Madrasas and the Making of Muslim Identity" (ऑक्सफोर्ड यूनिवर्सिटी प्रेस, नई दिल्ली, 2006) में प्रस्तुत किया गया है।',
        "प्रसिद्ध सच्चर समिति रिपोर्ट इस वास्तविकता को कम करके प्रस्तुत करती है, क्योंकि वह मदरसों में केवल 4 प्रतिशत मुस्लिम छात्रों की भागीदारी का उल्लेख करती है। किंतु यह रिपोर्ट केवल 7 से 9 वर्ष के आयु वर्ग को सम्मिलित करती है तथा 5 से 7 और 9 वर्ष से अधिक आयु वर्ग को बाहर रखती है। साथ ही, मस्जिदों द्वारा संचालित मदरसों को भी इसमें सम्मिलित नहीं किया गया है।",
        "राज्य बोर्ड के आँकड़ों के अनुसार वर्ष 2025 में उत्तर प्रदेश में 21,302 छात्र आलिम (अरबी और फ़ारसी संयुक्त) परीक्षा में सम्मिलित हुए, जिनमें से 17,544 सफल रहे। पश्चिम बंगाल में प्रतिवर्ष लगभग 12,500 छात्र आलिम परीक्षा में सम्मिलित होते हैं।",
        "इसके विपरीत, ऐसे हिंदू पुजारी विरले ही मिलते हैं जिन्होंने किसी संपूर्ण शास्त्र को कंठस्थ किया हो। अधिकांश पुजारियों ने प्राथमिक शास्त्र भी नहीं पढ़े होते। हिंदू धर्म में न तो कोई व्यवस्थित प्रशिक्षण प्रणाली है और न ही इस विषय पर कोई आधिकारिक आँकड़ा उपलब्ध है।",
        "इसका परिणाम यह है कि सनातन धर्म का एक अत्यंत महत्वपूर्ण स्तंभ, अर्थात् सैद्धांतिक उपदेशक, संख्या और गुणवत्ता दोनों दृष्टियों से लगभग अनुपस्थित है। धर्म में उपदेशकों और पुजारियों की भूमिका राष्ट्र की सेना में सैनिकों के समान होती है। यदि सेना छोटी हो या उसके पास शस्त्र न हों, तो पराजय निश्चित होती है। धर्म में शास्त्र ही शस्त्र होते हैं।",
        "इसका परिणाम यह है कि आज भारत के 6,00,000 से अधिक गाँवों में फैले हिंदू अपने ही धर्म के प्रति ज्ञान और चेतना से वंचित हैं। एक अनुमान के अनुसार भारत में लगभग 20,00,000 मंदिर हैं, जिनमें से अधिकांश में या तो पुजारी नहीं हैं या प्रशिक्षित पुजारी उपलब्ध नहीं हैं।",
      ],
    },
    {
      title: "(ii) प्रत्येक हिंदू घर में शास्त्रों की उपस्थिति का अभाव",
      paragraphs: [
        "प्रत्येक मुस्लिम परिवार के पास क़ुरआन होता है और प्रत्येक ईसाई परिवार के पास बाइबिल। इन धर्मों के अनुयायियों को बिना शास्त्र के देखना दुर्लभ है।",
        "दुर्भाग्यवश हिंदू समाज में स्थिति भिन्न है। लगभग 23 करोड़ हिंदू परिवारों में शास्त्रों की लगभग पूर्ण अनुपस्थिति एक गंभीर कमजोरी है। शास्त्र-पाठ के बिना धार्मिक चेतना का विकास संभव नहीं है।",
      ],
    },
    {
      title: "(iii) उपेक्षित मंदिर",
      paragraphs: [
        "हिंदू धर्म की तीसरी कमजोरी ग्रामीण मंदिरों तथा अनेक शहरी देवालयों की उपेक्षित स्थिति है। इन मंदिरों में प्रशिक्षित पुजारियों और सैद्धांतिक उपदेशकों का अभाव है, जिसके कारण ये आध्यात्मिक जीवन के जीवंत केंद्र नहीं रह गए हैं।",
        "उत्तर भारत के अनेक गाँवों में मंदिर आलस्य या नशे के केंद्र बन गए हैं। मंदिरों को दान में प्राप्त भूमि पर अतिक्रमण हो गया है। फलस्वरूप ये मंदिर पुजारीविहीन, उपदेशकविहीन और गतिविधिहीन अवस्था में पड़े हैं।",
        "यदि इन मंदिरों में विद्वान और सक्रिय पुजारी अथवा सैद्धांतिक उपदेशक, जिन्हें अध्यात्म-आचार्य कहा जा सकता है, नियुक्त किए जाएँ, तो ये मंदिर न केवल धार्मिक बल्कि सांस्कृतिक और आर्थिक विकास के केंद्र बन सकते हैं।",
        "यदि ऐसा संभव हो, तो सनातन धर्म शीघ्र ही सुदृढ़ होगा और प्रतिस्पर्धी धर्मों का सामना सकारात्मक और रचनात्मक साधनों से कर सकेगा।",
      ],
    },
    {
      title: "(iv) एकता का अभाव",
      paragraphs: [
        "हिंदू धर्म की चौथी कमजोरी उसकी एकता का अभाव है। यह असंख्य संप्रदायों और उप-परंपराओं में विभाजित है। इस समस्या का आंशिक समाधान यह है कि प्रत्येक हिंदू परिवार के पास एक या दो सर्वमान्य शास्त्र हों।",
        "साझा शास्त्र साझा दृष्टि उत्पन्न करते हैं और साझा दृष्टि धार्मिक एकता की नींव रखती है। हिंदू धर्म में भगवद्गीता और रामायण ऐसे ही सर्वमान्य ग्रंथ हैं।",
      ],
    },
    {
      title: "(v) संगठित दान व्यवस्था का अभाव",
      paragraphs: [
        "हिंदू धर्म में इस्लाम की ज़कात जैसी कोई अनिवार्य संस्थागत दान व्यवस्था नहीं है, जिसमें प्रत्येक अनुयायी को दान देना होता है और वह धन केवल उस समुदाय के कल्याण और विस्तार के लिए प्रयुक्त होता है।",
        "यद्यपि हिंदू शास्त्र दान को निरंतर कर्तव्य मानते हैं, व्यवहार में हिंदू समाज के पास कोई ऐसी संरचित, पारदर्शी और विश्वसनीय व्यवस्था नहीं है जो केवल हिंदुओं के कल्याण हेतु दान एकत्र कर सके।",
      ],
    },
  ],
  solutionsTitle: "पाँचों कमजोरियों के समाधान",
  solutionsIntro: [
    "यदि इन पाँच प्रमुख कमजोरियों को दूर कर दिया जाए, तो सनातन धर्म का पुनरुत्थान शीघ्र संभव है। इसके लिए वित्तीय संसाधनों की आवश्यकता होगी, जो केवल सरकार से नहीं आ सकते, क्योंकि भारत एक धर्मनिरपेक्ष राष्ट्र है। तथापि समाधान संभव है।",
    "हाल के वर्षों में हिंदुओं में धार्मिक जागरूकता उल्लेखनीय रूप से बढ़ी है, और धर्म की सेवा में योगदान देने का उत्साह बढ़ रहा है। यह ठोस कदम उठाने का उचित समय है।",
  ],
  specialMeasureTitle: "विशेष उपाय",
  specialMeasureSubtitle: "वैधानिक राष्ट्रीय सनातन सेवा निधि की स्थापना",
  specialMeasureIntro: [
    "केंद्र सरकार को एक ऐसा कानून बनाना चाहिए जिसके अंतर्गत हिंदू सेवा निधि (सनातन सेवा निधि) की स्थापना हो, जिसमें प्रत्येक हिंदू मासिक अथवा स्वैच्छिक रूप से योगदान कर सके और उसे पूर्ण विश्वास हो कि उसका योगदान प्रभावी ढंग से उपयोग किया जाएगा।",
    "निधि के वितरण का अधिकार सरकार के पास न होकर सनातन सेवा निधि शासी परिषद (संत परिषद) के पास होना चाहिए। पूर्ण पारदर्शिता सुनिश्चित करने के लिए हर वर्ष भारत के नियंत्रक एवं महालेखा परीक्षक (CAG) द्वारा लेखा-परीक्षा कराई जाए।",
    "निधि का 90 प्रतिशत पूर्व-निर्धारित उद्देश्यों पर व्यय किया जाए—जिसमें बांग्लादेश, पाकिस्तान, अफ़ग़ानिस्तान और कश्मीर से विस्थापित हिंदुओं का पुनर्वास भी सम्मिलित हो—और 10 प्रतिशत आपातकालीन सहायता के लिए सुरक्षित रखा जाए।",
  ],
  measures: [
    {
      title: "(क) हर घर में शास्त्र",
      paragraphs: [
        "प्रत्येक हिंदू परिवार को निःशुल्क भगवद्गीता की एक प्रति तथा क्षेत्रीय परंपरा के अनुसार रामकथा का ग्रंथ उपलब्ध कराया जाए—जैसे कृतिवासी, कंबर, तुलसीदास अथवा वाल्मीकि रामायण।",
        "रामकथा का एक संक्षिप्त संस्करण भी तैयार किया जाए, जिसमें संविधानिक मूल्यों के प्रतिकूल किसी भी सामग्री को हटा दिया जाए।",
      ],
    },
    {
      title: "(ख) धार्मिक शिक्षकों का बड़े पैमाने पर प्रशिक्षण",
      paragraphs: [
        "प्रशिक्षण कक्षा 6 से आरंभ होकर आचार्य स्तर तक चले। अनिवार्य पाठ्यक्रम में पूरी गीता का कंठस्थ अध्ययन, वेदों और उपनिषदों के महत्वपूर्ण अंश, संपूर्ण रामकथा, हिंदू दर्शन की प्रमुख धाराएँ (वैष्णव, शैव, शाक्त) तथा अन्य धर्मों का आधारभूत ज्ञान सम्मिलित हो।",
        "इन पुरोहितों और सिद्धांत-प्रचारकों को प्रारंभिक रूप से सनातन सेवा निधि से नियत मासिक मानदेय दिया जाए। वे ग्रामीण मंदिरों को पुनर्जीवित करेंगे और युवाओं को रोजगार अवसरों, उपयुक्त परीक्षाओं, व्यावसायिक प्रशिक्षण तथा प्रतियोगी तैयारी के संबंध में मार्गदर्शन देकर आर्थिक उन्नयन में योगदान देंगे।",
      ],
    },
    {
      title: "(ग) हिंदू शरणार्थियों को सहायता",
      paragraphs: [
        "निधि के अंतर्गत बांग्लादेश, पाकिस्तान, अफ़ग़ानिस्तान, कश्मीर तथा अन्य क्षेत्रों से विस्थापित हिंदू परिवारों के पुनर्वास और सहायता की व्यवस्था की जाए।",
      ],
    },
    {
      title: "(घ) सनातन विद्यालयों की शृंखला",
      paragraphs: [
        "इन विद्यालयों में आधुनिक शिक्षा के साथ-साथ धार्मिक शिक्षा का समन्वय किया जाएगा। धार्मिक शिक्षा केवल अभिभावकों की सहमति से प्रदान की जाएगी। ऐसे विद्यालय संविधान के अनुच्छेद 28(3) के प्रावधानों का पूर्णतः पालन करने की स्थिति में संविधान-सम्मत माने जाएँगे।",
      ],
    },
  ],
  miscTitle: "विविध प्रावधान",
  miscParagraphs: [
    "शासी परिषद में सभी प्रमुख परंपराओं—वैष्णव, शैव, शाक्त, गणपत्य, आर्य समाज आदि—के अग्रणी संत सम्मिलित हों। परिषद में 11 सदस्य हों, जिनका कार्यकाल दो वर्ष का हो और व्यवस्था घूर्णन आधार पर चले।",
    "आचार्यों के लिए न्यूनतम पाठ्यक्रम चार पुरुषार्थों—धर्म, अर्थ, काम और मोक्ष—पर आधारित हो तथा इसमें शास्त्रीय अध्ययन, साधना, तुलनात्मक धर्म, भारतीय विधि और आजीविका-उन्मुख कौशल सम्मिलित हों।",
  ],
  conclusionTitle: "निष्कर्ष",
  conclusionParagraphs: [
    "यहाँ प्रस्तावित सभी उपाय किसी अन्य धर्म या उसके अनुयायियों को कोई क्षति न पहुँचाएँ और न ही किसी समुदाय के प्रति घृणा उत्पन्न करें। उद्देश्य सनातन धर्म को सुदृढ़ करना है, ताकि वह चुनौतियों का विवेकपूर्ण और रचनात्मक उत्तर दे सके, साथ ही हिंदुओं के सर्वांगीण विकास को सुनिश्चित करे और दूसरों के लिए प्रेरणा बने।",
    "यह दृष्टि केवल विश्वसनीय वैधानिक तंत्र और पारदर्शी धार्मिक निधि के माध्यम से ही साकार हो सकती है—ऐसी निधि जिसमें एक ठेला-पटरी वाला भी UPI से सरल योगदान कर सके और संपन्न व्यक्ति उदारतापूर्वक दान दे सकें। खाता संख्या सरल और स्मरणीय हो—उदाहरणार्थ ग्यारह नौ (99999999999)।",
    "इस निधि के माध्यम से गीता और रामायण जैसे शास्त्र प्रत्येक हिंदू घर तक निःशुल्क पहुँचेंगे, और दस लाख प्रशिक्षित पुरोहित एवं अध्यात्म-आचार्य तैयार किए जा सकेंगे, जो भारत के छह लाख गाँवों का आध्यात्मिक, सामाजिक और आर्थिक मार्गदर्शन करेंगे।",
    "यह स्पष्ट किया जाता है कि सभी स्तरों पर कर्मकांडी पुरोहित और सिद्धांत-प्रचारक (अध्यात्म-आचार्य) का प्रशिक्षण कड़ाई से संविधानिक मूल्यों और संसद द्वारा बनाए गए कानूनों—विशेषकर अनुसूचित जातियों और महिलाओं से संबंधित कानूनों—के अनुरूप होगा। किसी भी स्तर पर भेदभाव को न तो सिद्धांत में और न ही व्यवहार में बढ़ावा दिया जाएगा।",
    "इस उद्देश्य की पूर्ति के लिए विशेष पाठ्यक्रम के अंतर्गत गहन प्रशिक्षण आवश्यक होगा। विस्तृत पाठ्यक्रम प्रस्तावित विधान के अनुसूची 'H' में दिया गया है।",
  ],
  objectionTitle: "एक संभावित आपत्ति",
  objectionParagraphs: [
    "चूँकि प्रस्तावित अधिनियम किसी अन्य आस्था को क्षति नहीं पहुँचाता, इसलिए संसद में इसके पारित होने का कोई ठोस विरोध नहीं होना चाहिए। यदि यह प्रश्न उठाया जाए कि ऐसा अधिनियम केवल सनातन धर्म के लिए क्यों, तो उपयुक्त उत्तर यह है कि अन्य आस्थाएँ भी अपने-अपने उद्देश्यों हेतु समान वित्तीय व्यवस्थाओं का मसौदा विधेयक प्रस्तुत करने के लिए स्वतंत्र हैं।",
  ],
  executiveSummaryTitle: "सनातन सेवा निधि अधिनियम, 20XX का कार्यकारी सारांश",
  executiveSummarySections: [
    {
      title: "1. पृष्ठभूमि",
      paragraphs: [
        "भारत की प्राचीन सनातन सभ्यता—जो भगवद्गीता, वेदों, उपनिषदों, रामायण तथा अन्य सांस्कृतिक धरोहर ग्रंथों से पोषित है—हजारों वर्षों से समाज को नैतिक, सांस्कृतिक और आध्यात्मिक मार्गदर्शन प्रदान करती आ रही है।",
        "वर्तमान में अन्य धार्मिक समुदायों के पास अपने-अपने वैधानिक ढाँचे उपलब्ध हैं, जैसे मुसलमानों के लिए वक्फ अधिनियम, 1995 तथा सिखों के लिए सिख गुरुद्वारा अधिनियम, 1925, जबकि सनातन धर्म के लिए इस प्रकार की कोई समेकित वैधानिक व्यवस्था उपलब्ध नहीं है।",
        "इस दीर्घकालिक रिक्तता को दूर करने के उद्देश्य से सनातन सेवा निधि अधिनियम प्रस्तावित किया जा रहा है।",
      ],
    },
    {
      title: "2. उद्देश्य",
      paragraphs: [],
      bullets: [
        "सनातन सेवा निधि की स्थापना – धर्म, शिक्षा और संस्कृति के संवर्धन हेतु स्वैच्छिक योगदान पर आधारित एक पारदर्शी व्यवस्था की स्थापना।",
        "शास्त्रों का प्रसार – भारत के 20 करोड़ से अधिक सनातनी परिवारों को भगवद्गीता, रामायण परंपराओं तथा अन्य सांस्कृतिक धरोहर ग्रंथों का निःशुल्क वितरण।",
        "पुजारियों एवं सैद्धांतिक उपदेशकों का प्रशिक्षण – दस लाख प्रशिक्षित पुरोहितों और अध्यात्माचार्यों का एक राष्ट्रीय समूह तैयार करना।",
        "सनातनी विद्यालय नेटवर्क – आधुनिक और धर्माधारित शिक्षा का समन्वय करते हुए सनातन-आधारित विद्यालयों की व्यवस्था।",
        "पुनर्वास एवं सहायता – परित्यक्त महिलाओं, वृद्धजनों, हिंदू शरणार्थियों तथा आपदा-प्रभावित समुदायों के लिए सहायता और पुनर्वास।",
        "अंतरराष्ट्रीय विस्तार – प्रवासी भारतीयों की पर्याप्त उपस्थिति वाले देशों में सनातन मूल्यों के प्रसार हेतु विदेशों में शाखाओं की स्थापना।",
      ],
    },
    {
      title: "3. प्रमुख विशेषताएँ",
      paragraphs: [],
      bullets: [
        "स्वायत्त निधि: सरकार निधि के उपयोग में हस्तक्षेप नहीं करेगी।",
        "केंद्रीय शासी परिषद: 11 प्रतिष्ठित संत, विद्वान और विषय-विशेषज्ञ।",
        "राज्य परिषदें: राज्य स्तर पर 11 प्रतिष्ठित संत, विद्वान और विशेषज्ञ।",
        "सचिवालय: प्रशासनिक और तकनीकी सहायता प्रदान करने वाली इकाई।",
        "कार्य बल: विशिष्ट उद्देश्यों के लिए समयबद्ध निकाय।",
        "सभी खाते सार्वजनिक क्षेत्र के बैंकों में रखे जाएँगे।",
        "भारत के नियंत्रक एवं महालेखा परीक्षक (CAG) द्वारा वार्षिक लेखा-परीक्षण।",
        "दानदाताओं को आयकर अधिनियम की धारा 80G तथा सीएसआर लाभ प्राप्त होंगे।",
        "प्रशासनिक व्यय अधिकतम 10 प्रतिशत तक सीमित रहेगा।",
        "प्रथम सात वर्षों के दौरान निधि का 70 प्रतिशत भगवद्गीता एवं रामकथा-आधारित धरोहर ग्रंथों का निःशुल्क वितरण तथा सैद्धांतिक उपदेशकों और पुजारियों का प्रशिक्षण के लिए व्यय किया जाएगा।",
      ],
    },
    {
      title: "4. सामाजिक एवं आध्यात्मिक कार्यक्रम क्षेत्र",
      paragraphs: [],
      bullets: [
        "प्रत्येक हिंदू घर में निःशुल्क गीता–रामायण का एक सेट।",
        "पुरोहितों एवं अध्यात्माचार्यों के लिए प्रशिक्षण संस्थान।",
        "आवासीय एवं अनावासीय सनातन विद्यालय।",
        "धर्म शिक्षा हेतु डिजिटल मंच।",
        "मंदिरों का पुनरुद्धार तथा रोजगार परामर्श केंद्रों की स्थापना।",
        "सनातनियों के लिए आपदा राहत एवं पुनर्वास परियोजनाएँ।",
        "अंतर्धार्मिक सद्भाव और मानवीय सहायता कार्यक्रम।",
      ],
    },
    {
      title: "5. कानूनी एवं संवैधानिक सुरक्षा उपाय",
      paragraphs: [],
      bullets: [
        "सनातन सेवा निधि में सभी योगदान पूर्णतः स्वैच्छिक होंगे।",
        "सनातनी विद्यालयों में धार्मिक शिक्षा के संबंध में संविधान के अनुच्छेद 28(3) का पूर्ण पालन (अभिभावकों की पूर्व सहमति के साथ)।",
        "यह अधिनियम किसी अन्य धार्मिक समुदाय के अधिकारों में हस्तक्षेप नहीं करेगा।",
      ],
    },
    {
      title: "6. शासन एवं जवाबदेही",
      paragraphs: [],
      bullets: [
        "वार्षिक प्रतिवेदन संसद के समक्ष प्रस्तुत किए जाएँगे।",
        "सभी अभिलेख सार्वजनिक रूप से उपलब्ध रहेंगे।",
        "परिषद के सदस्य वेतनरहित सेवा देंगे; केवल मानदेय या यात्रा भत्ता अनुमान्य होगा।",
        "पूर्ण पारदर्शिता और लेखा-परीक्षण की सुदृढ़ व्यवस्था।",
      ],
    },
  ],
  essenceTitle: "7. सार",
  essenceParagraphs: [
    "सनातन सेवा निधि अधिनियम, 20XX भारत की धार्मिक और सांस्कृतिक धरोहर के संरक्षण, भगवद्गीता और उपनिषदों पर आधारित नैतिक-आध्यात्मिक पुनर्जागरण, तथा सनातन धर्म को एक एकीकृत, जीवंत और सार्वभौमिक परंपरा के रूप में राष्ट्रीय और वैश्विक स्तर पर संगठित करने की दिशा में एक ऐतिहासिक पहल है। भारतीय संविधान ऐसे विधान के निर्माण में कोई बाधा उत्पन्न नहीं करता।",
  ],
  downloadEnglishLabel: "Download English PDF",
  downloadHindiLabel: "हिंदी PDF डाउनलोड करें",
};
