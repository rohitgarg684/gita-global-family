/**
 * Q&A with Brahm Bodhi — structured content.
 *
 * Each answer is composed of an ordered list of content blocks so that we can
 * render rich, semantically meaningful content (paragraphs, Gita verse
 * blockquotes, ordered/unordered lists) instead of a single flat string.
 *
 * Items default to English. Provide a `hi` block to make an item bilingual; the
 * page-level language toggle will swap in the Hindi question, preview and
 * answer when selected. Items can also provide per-language images.
 */

export type QALang = "en" | "hi";

export type QABlock =
  | { type: "p"; text: string }
  | { type: "h"; text: string }
  | { type: "quote"; text: string; cite?: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "video"; videoId: string; title: string; caption?: string };

export interface QATranslation {
  question: string;
  preview: string;
  answer: QABlock[];
}

export interface QAItem extends QATranslation {
  id: string;
  hi?: QATranslation;
  coverImage?: string;
  tag?: string;
  image?: {
    en?: string;
    hi?: string;
    alt?: { en: string; hi?: string };
  };
}

export const qaItems: QAItem[] = [
  {
    id: "how-to-go-within-realize-the-self-part-1",
    question:
      "How does one go within, realize the true nature of the Self, and attain eternal bliss? (Part 1)",
    preview:
      "A seeker asks what it truly means to \u201Cgo within\u201D and experience the Self. Before turning to the practice, Brahm Bodhi first clears away a common assumption \u2014 that every scripture dismisses the world as unreal \u2014 and, through the analogy of a film cast upon a screen, shows how the world is real in our experience yet wholly dependent on Brahman.",
    image: {
      en: "qa-go-within-self-part1.png",
      hi: "qa-go-within-self-part1.png",
      alt: {
        en: "Go within: realize the Self and attain eternal bliss",
        hi: "भीतर प्रवेश कर — आत्मा के सत्य स्वरूप से जुड़ें और अक्षय आनंद को प्राप्त करें",
      },
    },
    answer: [
      {
        type: "p",
        text: "A seeker once approached Brahm Bodhi for guidance on a question that troubles many who walk the spiritual path.",
      },
      {
        type: "quote",
        text: "Most scriptures declare that Brahman alone is real and the world is mithyā, and that nothing here can give lasting happiness or peace, for everything is subject to change and eventually perishes. The moment one desire is fulfilled, another arises; however much wealth or pleasure one gathers, complete satisfaction is never reached. We are told that whoever seeks lasting peace must turn within, realize their true nature as the Self, and become a witness. Yet no one explains what it actually means to \u201Cgo within.\u201D How does one experience one\u2019s true Self? What does one actually have to do?",
      },
      {
        type: "p",
        text: "Brahm Bodhi observed that the seeker\u2019s question carried not only questions but also a few assumptions \u2014 and that it would help to examine these first.",
      },
      {
        type: "h",
        text: "\u201CBrahman alone is real, the world is mithyā\u201D \u2014 is this what all scriptures say?",
      },
      {
        type: "p",
        text: "The seeker had written that all scriptures hold Brahman alone to be real and the world to be mithyā. This statement, Brahm Bodhi explained, is not entirely correct. Advaita Vedānta is not the only philosophical tradition within Sanātana Dharma; there are also schools such as Dvaita and Vishishtādvaita.",
      },
      {
        type: "p",
        text: "Great teachers such as Bhagavatpāda Madhvāchārya, Bhagavatpāda Rāmānujāchārya, and Bhagavatpāda Nimbārkāchārya did not regard the world as a mere illusion or unreality. They considered it to be a real creation of Bhagavān.",
      },
      {
        type: "p",
        text: "Moreover, the word mithyā itself does not carry the same meaning in every tradition. In Advaita Vedānta it does not mean \u201Cabsolutely unreal.\u201D Rather, it refers to that which is experienced but has no independent or ultimate existence of its own.",
      },
      { type: "h", text: "What the Gita says about the world" },
      {
        type: "p",
        text: "The Bhagavad Gita, too, describes both Prakriti (material nature) and Purusha as beginningless:",
      },
      {
        type: "quote",
        text: "Prakṛtiṁ puruṣaṁ caiva viddhy anādī ubhāv api.",
        cite: "Bhagavad Gita 13.19",
      },
      {
        type: "p",
        text: "At the same time, the Gita explains that the manifested universe repeatedly comes into being and again dissolves back into Prakriti:",
      },
      {
        type: "quote",
        text: "Sarva-bhūtāni Kaunteya prakṛtiṁ yānti māmikām... punaḥ punaś ca...",
        cite: "Bhagavad Gita 9.7\u20138",
      },
      {
        type: "p",
        text: "The world, therefore, is neither eternal in its manifested form nor the ultimate Reality.",
      },
      { type: "h", text: "The analogy of the cinema" },
      {
        type: "p",
        text: "Brahm Bodhi illustrated this with a familiar example. When a person sits in a cinema hall watching a film, the world on the screen appears so real that the viewer laughs, weeps, feels fear, and rejoices along with the characters. While the film runs, the experience is entirely real. Yet the moment the film ends, one recognizes at once that everything seen on the screen had no independent existence of its own.",
      },
      {
        type: "p",
        text: "This world may be understood in a similar sense. If Brahman is the projector, then the universe is like the moving picture cast upon the screen. The experience is real, but the projected world has no existence of its own; it depends entirely upon Brahman.",
      },
      { type: "h", text: "The real question" },
      {
        type: "p",
        text: "This brings us to the question that truly matters: how does one rise above the fleeting, perishable pleasures offered by this moving picture of life and attain that inexhaustible bliss which, according to the Bhagavad Gita, already resides within us?",
      },
      {
        type: "p",
        text: "That subject deserves a discussion of its own, and so it will be taken up in the next part.",
      },
    ],
    hi: {
      question:
        "मनुष्य भीतर कैसे प्रवेश करे, आत्मा के सत्य स्वरूप को कैसे जाने और अक्षय आनंद को कैसे प्राप्त करे? (भाग 1)",
      preview:
        "एक जिज्ञासु पूछते हैं कि \u201Cभीतर जाने\u201D और आत्मा का अनुभव करने का वास्तविक अर्थ क्या है। साधना की बात से पूर्व ब्रह्मबोधि एक प्रचलित धारणा को स्पष्ट करते हैं \u2014 कि सभी शास्त्र संसार को असत्य मानते हैं \u2014 और चलचित्र (सिनेमा) के दृष्टान्त से समझाते हैं कि संसार अनुभव में सत्य है, परन्तु पूर्णतः ब्रह्म पर आश्रित है।",
      answer: [
        {
          type: "p",
          text: "एक जिज्ञासु ने आध्यात्मिक मार्ग से जुड़े एक प्रश्न पर मार्गदर्शन के लिए ब्रह्मबोधि से संपर्क किया \u2014 ऐसा प्रश्न जो इस पथ पर चलने वाले अनेक साधकों को व्यथित करता है।",
        },
        {
          type: "quote",
          text: "अधिकांश शास्त्र कहते हैं कि \u201Cब्रह्म ही सत्य है, जगत् मिथ्या है।\u201D यह भी कहा जाता है कि इस संसार की कोई भी वस्तु स्थायी सुख या शांति नहीं दे सकती, क्योंकि सब कुछ परिवर्तनशील है और अंततः नष्ट हो जाता है। एक इच्छा पूरी होते ही दूसरी उठ खड़ी होती है; कितना भी सांसारिक धन या भोग एकत्र कर लें, पूर्ण संतोष कभी प्राप्त नहीं होता। हमें बताया जाता है कि स्थायी शांति चाहने वाले को भीतर मुड़ना होगा, आत्मा के रूप में अपने सच्चे स्वरूप को जानना होगा और साक्षी बनना होगा। परन्तु यह कोई नहीं बताता कि \u201Cभीतर जाने\u201D का वास्तव में अर्थ क्या है। अपने सच्चे आत्मस्वरूप का अनुभव कैसे हो? वस्तुतः करना क्या है?",
        },
        {
          type: "p",
          text: "ब्रह्मबोधि ने ध्यान दिलाया कि जिज्ञासु के प्रश्न में केवल प्रश्न ही नहीं, कुछ पूर्वधारणाएँ भी छिपी हैं \u2014 और सबसे पहले उन्हीं पर विचार करना उचित होगा।",
        },
        {
          type: "h",
          text: "\u201Cब्रह्म ही सत्य, जगत् मिथ्या\u201D \u2014 क्या सभी शास्त्र यही कहते हैं?",
        },
        {
          type: "p",
          text: "जिज्ञासु ने लिखा था कि सभी शास्त्र ब्रह्म को ही सत्य और जगत् को मिथ्या मानते हैं। ब्रह्मबोधि ने समझाया कि यह कथन पूर्णतः ठीक नहीं है। सनातन धर्म में केवल अद्वैत वेदान्त ही एकमात्र दार्शनिक परम्परा नहीं है; द्वैत और विशिष्टाद्वैत जैसे मत भी हैं।",
        },
        {
          type: "p",
          text: "भगवत्पाद मध्वाचार्य, भगवत्पाद रामानुजाचार्य और भगवत्पाद निम्बार्काचार्य जैसे महान आचार्य जगत् को मात्र भ्रम या असत्य नहीं मानते। वे इसे भगवान की एक वास्तविक सृष्टि मानते हैं।",
        },
        {
          type: "p",
          text: "इसके अतिरिक्त, \u2018मिथ्या\u2019 शब्द का अर्थ भी प्रत्येक दार्शनिक परम्परा में एक-सा नहीं है। अद्वैत वेदान्त में इसका अर्थ \u201Cपूर्णतः असत्\u201D नहीं है। यह उसका द्योतक है जो अनुभव में तो आता है, किन्तु जिसका अपना कोई स्वतन्त्र या परम अस्तित्व नहीं होता।",
        },
        { type: "h", text: "जगत् के विषय में गीता क्या कहती है" },
        {
          type: "p",
          text: "भगवद्गीता भी प्रकृति और पुरुष \u2014 दोनों को अनादि बताती है :",
        },
        {
          type: "quote",
          text: "प्रकृतिं पुरुषं चैव विद्ध्यनादी उभावपि।",
          cite: "भगवद्गीता 13.19",
        },
        {
          type: "p",
          text: "साथ ही गीता यह भी बताती है कि व्यक्त जगत् बार-बार उत्पन्न होता है और पुनः प्रकृति में विलीन हो जाता है :",
        },
        {
          type: "quote",
          text: "सर्वभूतानि कौन्तेय प्रकृतिं यान्ति मामिकाम्... पुनः पुनः...",
          cite: "भगवद्गीता 9.7\u20138",
        },
        {
          type: "p",
          text: "अतः जगत् न तो अपने व्यक्त रूप में शाश्वत है और न ही परम सत्य।",
        },
        { type: "h", text: "सिनेमा का दृष्टान्त" },
        {
          type: "p",
          text: "ब्रह्मबोधि ने इसे एक परिचित उदाहरण से समझाया। जब कोई व्यक्ति सिनेमा हॉल में बैठकर फ़िल्म देखता है, तो परदे पर का संसार इतना वास्तविक प्रतीत होता है कि दर्शक पात्रों के साथ हँसता है, रोता है, भयभीत होता है और आनन्दित होता है। जब तक फ़िल्म चलती है, अनुभव पूर्णतः सत्य होता है। परन्तु फ़िल्म समाप्त होते ही तुरन्त यह ज्ञात हो जाता है कि परदे पर जो कुछ देखा, उसका अपना कोई स्वतन्त्र अस्तित्व नहीं था।",
        },
        {
          type: "p",
          text: "इस संसार को भी इसी अर्थ में समझा जा सकता है। यदि ब्रह्म प्रोजेक्टर है, तो यह जगत् परदे पर प्रक्षेपित चलचित्र के समान है। अनुभव सत्य है, किन्तु प्रक्षेपित जगत् का अपना कोई स्वतन्त्र अस्तित्व नहीं; वह पूर्णतः ब्रह्म पर आश्रित है।",
        },
        { type: "h", text: "असली प्रश्न" },
        {
          type: "p",
          text: "इससे वह प्रश्न सामने आता है जो वास्तव में महत्वपूर्ण है : जीवन के इस चलचित्र द्वारा प्रदान किए जाने वाले क्षणिक और नश्वर सुखों से ऊपर उठकर मनुष्य उस अक्षय आनन्द को कैसे प्राप्त करे, जो भगवद्गीता के अनुसार पहले से ही हमारे भीतर स्थित है?",
        },
        {
          type: "p",
          text: "यह विषय अपने आप में एक स्वतन्त्र चर्चा का अधिकारी है, अतः इसे अगले भाग में लिया जाएगा।",
        },
      ],
    },
  },
  {
    id: "how-to-go-within-realize-the-self-part-2",
    question:
      "How does one go within, realize the true nature of the Self, and attain eternal bliss? (Part 2)",
    preview:
      "Continuing the discussion, Brahm Bodhi shows that realizing the identity of the Self with Brahman is not the only road to everlasting bliss. Drawing on the Bhagavata Purana and the Gita, he explains the Path of Devotion (Bhakti Yoga): the devotee, longing for Bhagavan Narayana \u2014 the Saguna Brahman \u2014 reaches Vaikuntha and eternal bliss through love and surrender, the very same Supreme Goal attained through the path of knowledge.",
    image: {
      en: "qa-go-within-self-part1.png",
      hi: "qa-go-within-self-part1.png",
      alt: {
        en: "The path of devotion: attaining eternal bliss through love of the Saguna Brahman",
        hi: "भक्ति का मार्ग : सगुण ब्रह्म के प्रेम द्वारा अक्षय आनंद की प्राप्ति",
      },
    },
    answer: [
      {
        type: "h",
        text: "Is inner realization of the identity of the Self and God necessary for everlasting bliss?",
      },
      {
        type: "p",
        text: "Turning to the second dimension of the seeker\u2019s question, Brahm Bodhi explained that realizing the true nature of the Self is not the only road to everlasting bliss.",
      },
      {
        type: "p",
        text: "According to the Bhagavata Purana, one of the foremost scriptures of the Bhakti tradition, there is another path to eternal bliss. On this path, the rigorous disciplines prescribed in works such as Patanjali\u2019s Yoga Sutras are not indispensable, nor is the direct realization of the true nature of the Self a prerequisite for Liberation.",
      },
      {
        type: "p",
        text: "This is the Path of Devotion (Bhakti Yoga), rather than the Path of Knowledge (Jnana Yoga) or the Path of Meditation (Dhyana Yoga).",
      },
      { type: "h", text: "The devotee\u2019s aspiration" },
      {
        type: "p",
        text: "A devotee does not focus on realizing the true nature of the Self, nor does he seek, through inward contemplation, to experience the identity of the individual Self with the Supreme Brahman. His aspiration is directed towards Bhagavan Narayana, the Saguna Brahman \u2014 the personal manifestation of the Supreme Reality.",
      },
      {
        type: "p",
        text: "The centre of his spiritual life is not philosophical inquiry but loving devotion, worship, adoration, self-surrender, and an ever-deepening relationship with God.",
      },
      { type: "h", text: "The devotee is not devoid of knowledge" },
      {
        type: "p",
        text: "This does not mean that a devotee is devoid of knowledge. On the contrary, he possesses all the essential knowledge required for spiritual life. He knows that God is omnipotent, omniscient, omnipresent, infinitely compassionate, and perfectly just \u2014 the Creator, Sustainer, and Dissolver of the universe, and the loving protector of His devotees.",
      },
      { type: "p", text: "For the devotee, this knowledge is sufficient." },
      {
        type: "p",
        text: "He does not consider it necessary to pursue an elaborate philosophical understanding of the relationship between the individual Self and the Supreme Reality, because his goal is not to merge into the Nirguna Brahman. His longing is to attain Bhagavan Narayana, the Saguna Brahman \u2014 the personal and loving manifestation of that very Supreme Reality.",
      },
      { type: "h", text: "The culmination: Vaikuntha" },
      {
        type: "p",
        text: "Thus, through love and devotion, he steadily advances towards God. The culmination of his spiritual journey is the attainment of Vaikuntha, the Divine Abode of Bhagavan Vishnu, where the Lord eternally manifests Himself in His glorious Personal Form.",
      },
      {
        type: "p",
        text: "Having reached that Divine Abode, the devotee experiences eternal, unalloyed bliss. Maya has no access there; time has no dominion there. It is a realm pervaded entirely by pure Sattva, and sorrow cannot even cast its shadow upon those who dwell there.",
      },
      { type: "h", text: "Two paths, one Supreme Goal" },
      {
        type: "p",
        text: "Therefore, it is incorrect to conclude that without realizing the true nature of the Self one cannot attain God, Liberation, or eternal bliss. The very same Supreme Goal can also be attained through selfless love and unwavering devotion to the Saguna Brahman.",
      },
      {
        type: "p",
        text: "Bhagavan Krishna Himself affirms this profound truth in the Bhagavad Gita, declaring that seekers approach Him through different spiritual attitudes:",
      },
      {
        type: "quote",
        text: "jñāna-yajñena cāpy anye yajanto mām upāsate;\nekatvena pṛthaktvena bahudhā viśvato-mukham.",
        cite: "Bhagavad Gita 9.15",
      },
      {
        type: "p",
        text: "\u201COthers worship Me through the sacrifice of knowledge \u2014 some perceiving Me as One, others as distinct from themselves, while still others adore Me in My countless universal manifestations.\u201D",
      },
      {
        type: "p",
        text: "Thus, some seekers approach the Supreme through the vision of Oneness, while others approach Him through the attitude of loving distinctness. Although the disciplines of these two paths differ, both ultimately lead to the same Supreme Reality.",
      },
    ],
    hi: {
      question:
        "मनुष्य भीतर कैसे प्रवेश करे, आत्मा के सत्य स्वरूप को कैसे जाने और अक्षय आनंद को कैसे प्राप्त करे? (भाग 2)",
      preview:
        "चर्चा को आगे बढ़ाते हुए ब्रह्मबोधि बताते हैं कि आत्मा और ब्रह्म की एकता का साक्षात्कार ही अक्षय आनंद का एकमात्र मार्ग नहीं है। श्रीमद्भागवत पुराण और गीता के आधार पर वे भक्ति योग का मार्ग समझाते हैं : भक्त सगुण ब्रह्म भगवान नारायण की चाह में प्रेम और समर्पण के द्वारा वैकुण्ठ और शाश्वत आनंद को प्राप्त करता है \u2014 वही परम लक्ष्य जो ज्ञान के मार्ग से भी प्राप्त होता है।",
      answer: [
        {
          type: "h",
          text: "क्या अक्षय आनंद के लिए आत्मा और ईश्वर की एकता का आन्तरिक साक्षात्कार अनिवार्य है?",
        },
        {
          type: "p",
          text: "जिज्ञासु के प्रश्न के दूसरे पक्ष पर विचार करते हुए ब्रह्मबोधि ने बताया कि आत्मा के सत्य स्वरूप का साक्षात्कार ही अक्षय आनंद का एकमात्र मार्ग नहीं है।",
        },
        {
          type: "p",
          text: "श्रीमद्भागवत पुराण \u2014 भक्ति परम्परा के प्रमुख ग्रन्थों में से एक \u2014 के अनुसार अक्षय आनंद तक पहुँचने का एक और मार्ग है। इस मार्ग पर पतञ्जलि के योगसूत्र जैसे ग्रन्थों में वर्णित कठोर साधनाएँ अनिवार्य नहीं हैं, और न ही मोक्ष के लिए आत्मा के सत्य स्वरूप का साक्षात्कार पूर्वापेक्षा है।",
        },
        {
          type: "p",
          text: "यह ज्ञानयोग अथवा ध्यानयोग नहीं, अपितु भक्तियोग का मार्ग है।",
        },
        { type: "h", text: "भक्त की अभिलाषा" },
        {
          type: "p",
          text: "भक्त आत्मा के सत्य स्वरूप के साक्षात्कार पर ध्यान केन्द्रित नहीं करता, और न ही अन्तर्मुख चिन्तन द्वारा जीवात्मा की परब्रह्म से एकता का अनुभव करना चाहता है। उसकी अभिलाषा सगुण ब्रह्म भगवान नारायण की ओर लगी रहती है \u2014 परम सत्य का साकार, व्यक्तिस्वरूप।",
        },
        {
          type: "p",
          text: "उसके आध्यात्मिक जीवन का केन्द्र दार्शनिक विवेचना नहीं, अपितु प्रेममयी भक्ति, पूजा, आराधना, आत्मसमर्पण और ईश्वर के साथ निरन्तर गहराता सम्बन्ध है।",
        },
        { type: "h", text: "भक्त ज्ञानरहित नहीं होता" },
        {
          type: "p",
          text: "इसका अर्थ यह नहीं कि भक्त ज्ञानरहित होता है। इसके विपरीत, आध्यात्मिक जीवन के लिए आवश्यक समस्त ज्ञान उसके पास होता है। वह जानता है कि ईश्वर सर्वशक्तिमान, सर्वज्ञ, सर्वव्यापी, अनन्त करुणामय और पूर्णतः न्यायकारी हैं \u2014 सृष्टि के रचयिता, पालक और संहारक, तथा अपने भक्तों के प्रेममय रक्षक।",
        },
        { type: "p", text: "भक्त के लिए यही ज्ञान पर्याप्त है।" },
        {
          type: "p",
          text: "वह जीवात्मा और परम सत्य के सम्बन्ध की विस्तृत दार्शनिक विवेचना को आवश्यक नहीं मानता, क्योंकि उसका लक्ष्य निर्गुण ब्रह्म में विलीन होना नहीं है। उसकी चाह उसी परम सत्य के साकार, प्रेममय स्वरूप \u2014 सगुण ब्रह्म भगवान नारायण \u2014 को प्राप्त करना है।",
        },
        { type: "h", text: "परिणति : वैकुण्ठ" },
        {
          type: "p",
          text: "इस प्रकार प्रेम और भक्ति के द्वारा वह निरन्तर ईश्वर की ओर बढ़ता है। उसकी आध्यात्मिक यात्रा की परिणति भगवान विष्णु के दिव्य धाम वैकुण्ठ की प्राप्ति है, जहाँ भगवान अपने दिव्य व्यक्तिस्वरूप में नित्य प्रकट रहते हैं।",
        },
        {
          type: "p",
          text: "उस दिव्य धाम में पहुँचकर भक्त शाश्वत, निर्मल आनंद का अनुभव करता है। वहाँ माया का प्रवेश नहीं, वहाँ काल का शासन नहीं। वह धाम पूर्णतः शुद्ध सत्त्व से व्याप्त है, और वहाँ निवास करने वालों पर शोक अपनी छाया तक नहीं डाल सकता।",
        },
        { type: "h", text: "दो मार्ग, एक परम लक्ष्य" },
        {
          type: "p",
          text: "अतः यह निष्कर्ष निकालना ठीक नहीं कि आत्मा के सत्य स्वरूप का साक्षात्कार किए बिना ईश्वर, मोक्ष अथवा अक्षय आनंद प्राप्त नहीं हो सकता। वही परम लक्ष्य सगुण ब्रह्म के प्रति निष्काम प्रेम और अनन्य भक्ति के द्वारा भी प्राप्त किया जा सकता है।",
        },
        {
          type: "p",
          text: "भगवान कृष्ण स्वयं भगवद्गीता में इस गूढ़ सत्य की पुष्टि करते हुए कहते हैं कि साधक भिन्न-भिन्न भावों से उन्हें प्राप्त करते हैं :",
        },
        {
          type: "quote",
          text: "ज्ञानयज्ञेन चाप्यन्ये यजन्तो मामुपासते।\nएकत्वेन पृथक्त्वेन बहुधा विश्वतोमुखम्॥",
          cite: "भगवद्गीता 9.15",
        },
        {
          type: "p",
          text: "\u201Cकुछ अन्य ज्ञानयज्ञ के द्वारा मेरी उपासना करते हैं \u2014 कोई मुझे एक (अभिन्न) रूप में जानकर, कोई पृथक् रूप में, तो कोई मेरे अनन्त विश्वरूप में मेरी आराधना करते हैं।\u201D",
        },
        {
          type: "p",
          text: "इस प्रकार कुछ साधक एकत्व की दृष्टि से परम की ओर बढ़ते हैं, तो कुछ प्रेममय पृथक्त्व के भाव से। यद्यपि इन दोनों मार्गों की साधनाएँ भिन्न हैं, दोनों ही अन्ततः उसी परम सत्य तक पहुँचाते हैं।",
        },
      ],
    },
  },
  {
    id: "how-to-go-within-realize-the-self-part-3",
    question:
      "How does one go within, realize the true nature of the Self, and attain eternal bliss? (Part 3)",
    preview:
      "Can everlasting peace and bliss be attained without direct realization of the Self \u2014 and if so, how? Brahm Bodhi shows that the path of devotion offers such a way: resting on faith, love and complete surrender rather than philosophical inquiry, the devotee seeks the Saguna Brahman, Bhagavan Narayana, and through His grace attains Vaikuntha and unmixed, everlasting bliss.",
    image: {
      en: "qa-go-within-self-part1.png",
      hi: "qa-go-within-self-part1.png",
      alt: {
        en: "The devotional path to everlasting bliss in Vaikuntha",
        hi: "वैकुण्ठ में अक्षय आनंद का भक्तिमय मार्ग",
      },
    },
    answer: [
      {
        type: "h",
        text: "Can everlasting peace and bliss be attained without Self-realization? If so, how?",
      },
      {
        type: "p",
        text: "Brahm Bodhi then took up a question that follows naturally: can everlasting peace and bliss be reached at all without the direct realization of the Self \u2014 and if so, by what means?",
      },
      {
        type: "p",
        text: "Not only the Bhagavad Gita, he said, but foremost scriptures such as the Bhagavata Purana point to another path to everlasting bliss. Along this path it is not essential to study texts such as Patanjali\u2019s Yoga Sutras or to practise the disciplines they prescribe, nor is the final, direct realization of the true nature of the Self a requirement.",
      },
      {
        type: "p",
        text: "This, Brahm Bodhi explained, is the path of Bhakti (devotion), and not the path of Jnana (knowledge) or Dhyana (meditation).",
      },
      { type: "h", text: "What the devotee seeks" },
      {
        type: "p",
        text: "A seeker on the path of devotion, he said, does not set out to realize the nature of the Self, nor does he turn inward to experience the identity of the individual Self with Brahman. His goal, rather, is to attain the Supreme Lord in His Saguna Brahman aspect \u2014 Bhagavan Narayana.",
      },
      {
        type: "p",
        text: "The foundation of such a seeker\u2019s practice is not philosophical inquiry but faith, love, worship, adoration, and complete surrender.",
      },
      { type: "h", text: "Knowledge enough for the journey" },
      {
        type: "p",
        text: "This does not mean, Brahm Bodhi clarified, that a devotee requires no knowledge at all. He needs the essential spiritual knowledge: that God is omnipotent, omniscient, omnipresent, infinitely compassionate, and perfectly just \u2014 the Creator, Sustainer, and Dissolver of the entire universe, and the loving protector of His devotees. This understanding is sufficient for his spiritual journey.",
      },
      {
        type: "p",
        text: "Beyond this, he said, a detailed philosophical analysis of the relationship between the individual Self and Brahman is not necessary for such a seeker, for his goal is not to merge into the Nirguna Brahman but to attain Bhagavan Narayana, the Saguna Brahman. In other words, he seeks not the attributeless Absolute, but that very Absolute in its personal, loving, and manifest form.",
      },
      { type: "h", text: "The culmination: Vaikuntha" },
      {
        type: "p",
        text: "Accordingly, through love and devotion the seeker advances towards Bhagavan, and the culmination of his devotional practice, Brahm Bodhi said, is the attainment of Vaikuntha \u2014 the divine abode where Bhagavan Vishnu resides in His eternal Personal Form.",
      },
      {
        type: "p",
        text: "Having reached that divine realm, the devotee experiences everlasting, unmixed bliss, for there Maya has no access, time has no influence, and the realm is governed entirely by pure Sattva. Sorrow cannot even touch anyone there.",
      },
      { type: "h", text: "The same Supreme Goal" },
      {
        type: "p",
        text: "Therefore, Brahm Bodhi concluded, it is not correct to hold that God-realization, liberation, or everlasting bliss cannot be attained without the direct realization of the Self. A seeker who advances towards the Saguna Brahman through selfless love and devotion reaches the very same supreme goal.",
      },
      {
        type: "p",
        text: "Bhagavan Krishna explains this truth beautifully in the Bhagavad Gita, saying that people approach Him through different spiritual attitudes:",
      },
      {
        type: "quote",
        text: "jñāna-yajñena cāpy anye yajanto mām upāsate;\nekatvena pṛthaktvena bahudhā viśvato-mukham.",
        cite: "Bhagavad Gita 9.15",
      },
      {
        type: "p",
        text: "\u201CSome seekers worship Me in the spirit of oneness, while others worship Me as distinct from themselves \u2014 and both forms of worship ultimately lead to Me.\u201D",
      },
    ],
    hi: {
      question:
        "मनुष्य भीतर कैसे प्रवेश करे, आत्मा के सत्य स्वरूप को कैसे जाने और अक्षय आनंद को कैसे प्राप्त करे? (भाग 3)",
      preview:
        "क्या आत्मा के प्रत्यक्ष साक्षात्कार के बिना अक्षय शांति और आनंद प्राप्त हो सकते हैं \u2014 और यदि हाँ, तो कैसे? ब्रह्मबोधि बताते हैं कि भक्ति का मार्ग ऐसा उपाय देता है : दार्शनिक विवेचना नहीं, अपितु श्रद्धा, प्रेम और पूर्ण समर्पण के आधार पर भक्त सगुण ब्रह्म भगवान नारायण को चाहता है और उनकी कृपा से वैकुण्ठ तथा निर्मल, अक्षय आनंद को प्राप्त करता है।",
      answer: [
        {
          type: "h",
          text: "क्या आत्म-साक्षात्कार के बिना अक्षय शांति और आनंद प्राप्त हो सकते हैं? यदि हाँ, तो कैसे?",
        },
        {
          type: "p",
          text: "इसके पश्चात ब्रह्मबोधि ने एक स्वाभाविक प्रश्न पर विचार किया : क्या आत्मा के सत्य स्वरूप के प्रत्यक्ष साक्षात्कार के बिना अक्षय शांति और आनंद प्राप्त हो सकते हैं \u2014 और यदि हाँ, तो किस साधन से?",
        },
        {
          type: "p",
          text: "उन्होंने बताया कि केवल भगवद्गीता ही नहीं, अपितु श्रीमद्भागवत पुराण जैसे प्रमुख शास्त्र भी अक्षय आनंद के एक और मार्ग की ओर संकेत करते हैं। इस मार्ग पर पतञ्जलि के योगसूत्र जैसे ग्रन्थों का अध्ययन अथवा उनमें वर्णित साधनाओं का अभ्यास अनिवार्य नहीं है, और न ही आत्मा के सत्य स्वरूप का अन्तिम, प्रत्यक्ष साक्षात्कार आवश्यक है।",
        },
        {
          type: "p",
          text: "ब्रह्मबोधि ने कहा कि यह भक्ति का मार्ग है \u2014 ज्ञान अथवा ध्यान का नहीं।",
        },
        { type: "h", text: "भक्त की चाह" },
        {
          type: "p",
          text: "उन्होंने बताया कि भक्तिमार्ग का साधक आत्मा के स्वरूप का साक्षात्कार करने में नहीं लगता, और न ही अन्तर्मुख होकर जीवात्मा और ब्रह्म की एकता का अनुभव करना चाहता है। उसका लक्ष्य तो परमेश्वर को उनके सगुण ब्रह्म स्वरूप \u2014 भगवान नारायण \u2014 के रूप में प्राप्त करना है।",
        },
        {
          type: "p",
          text: "ऐसे साधक की साधना का आधार दार्शनिक विवेचना नहीं, अपितु श्रद्धा, प्रेम, पूजा, आराधना और पूर्ण समर्पण है।",
        },
        { type: "h", text: "यात्रा के लिए पर्याप्त ज्ञान" },
        {
          type: "p",
          text: "ब्रह्मबोधि ने स्पष्ट किया कि इसका अर्थ यह नहीं कि भक्त को किसी ज्ञान की आवश्यकता ही नहीं। उसे आवश्यक आध्यात्मिक ज्ञान अवश्य चाहिए : कि ईश्वर सर्वशक्तिमान, सर्वज्ञ, सर्वव्यापी, अनन्त करुणामय और पूर्णतः न्यायकारी हैं \u2014 सम्पूर्ण सृष्टि के रचयिता, पालक और संहारक, तथा अपने भक्तों के प्रेममय रक्षक। यही समझ उसकी आध्यात्मिक यात्रा के लिए पर्याप्त है।",
        },
        {
          type: "p",
          text: "उन्होंने कहा कि इसके अतिरिक्त, जीवात्मा और ब्रह्म के सम्बन्ध का विस्तृत दार्शनिक विश्लेषण ऐसे साधक के लिए आवश्यक नहीं, क्योंकि उसका लक्ष्य निर्गुण ब्रह्म में विलीन होना नहीं, अपितु सगुण ब्रह्म भगवान नारायण को प्राप्त करना है। दूसरे शब्दों में, वह निर्गुण निराकार को नहीं, अपितु उसी परम सत्य को उसके साकार, प्रेममय और व्यक्त स्वरूप में चाहता है।",
        },
        { type: "h", text: "परिणति : वैकुण्ठ" },
        {
          type: "p",
          text: "इस प्रकार प्रेम और भक्ति के द्वारा साधक भगवान की ओर बढ़ता है, और ब्रह्मबोधि के अनुसार उसकी भक्ति-साधना की परिणति वैकुण्ठ की प्राप्ति है \u2014 वह दिव्य धाम जहाँ भगवान विष्णु अपने नित्य व्यक्तिस्वरूप में विराजते हैं।",
        },
        {
          type: "p",
          text: "उस दिव्य धाम में पहुँचकर भक्त शाश्वत, निर्मल आनंद का अनुभव करता है, क्योंकि वहाँ माया का प्रवेश नहीं, काल का प्रभाव नहीं, और वह धाम पूर्णतः शुद्ध सत्त्व से शासित है। वहाँ किसी को शोक छू तक नहीं सकता।",
        },
        { type: "h", text: "वही एक परम लक्ष्य" },
        {
          type: "p",
          text: "अतः ब्रह्मबोधि ने निष्कर्ष दिया कि यह मानना ठीक नहीं कि आत्मा के प्रत्यक्ष साक्षात्कार के बिना ईश्वर-प्राप्ति, मोक्ष अथवा अक्षय आनंद सम्भव नहीं। जो साधक निष्काम प्रेम और भक्ति के द्वारा सगुण ब्रह्म की ओर बढ़ता है, वह भी उसी परम लक्ष्य को प्राप्त करता है।",
        },
        {
          type: "p",
          text: "भगवान कृष्ण भगवद्गीता में इस सत्य को सुन्दर रूप में समझाते हैं, यह कहते हुए कि लोग भिन्न-भिन्न भावों से उन्हें प्राप्त करते हैं :",
        },
        {
          type: "quote",
          text: "ज्ञानयज्ञेन चाप्यन्ये यजन्तो मामुपासते।\nएकत्वेन पृथक्त्वेन बहुधा विश्वतोमुखम्॥",
          cite: "भगवद्गीता 9.15",
        },
        {
          type: "p",
          text: "\u201Cकुछ साधक एकत्व के भाव से मेरी उपासना करते हैं, तो कुछ मुझे स्वयं से पृथक् मानकर \u2014 और उपासना के ये दोनों रूप अन्ततः मुझ तक ही पहुँचाते हैं।\u201D",
        },
      ],
    },
  },
  {
    id: "how-to-go-within-realize-the-self-part-4",
    question:
      "How does one go within, realize the true nature of the Self, and attain eternal bliss? (Part 4)",
    preview:
      "Can liberation and eternal, infinite bliss be attained even without Self-realization? Brahm Bodhi shows how the two paths finally meet: the knower is granted supreme devotion at liberation\u2019s gateway, and the devotee is granted illuminating knowledge \u2014 yet only on the path of knowledge is direct Self-realization indispensable, while the devotee attains saguna moksha in Vaikuntha without it.",
    image: {
      en: "qa-go-within-self-part1.png",
      hi: "qa-go-within-self-part1.png",
      alt: {
        en: "Knowledge and devotion converge upon the same Supreme Goal",
        hi: "ज्ञान और भक्ति एक ही परम लक्ष्य पर मिलते हैं",
      },
    },
    answer: [
      {
        type: "h",
        text: "Can liberation and eternal, infinite bliss be attained even without Self-realization?",
      },
      {
        type: "p",
        text: "There is, Brahm Bodhi noted, an interesting point worth observing about how the two paths finally meet.",
      },
      { type: "h", text: "The knower is granted devotion" },
      {
        type: "p",
        text: "When a seeker travelling on the path of knowledge reaches the gateway to liberation with the \u201Cpassport\u201D of Self-realization, he said, Bhagavan still grants him the \u201Cvisa on arrival\u201D of devotion before admitting him into His divine abode. This is why Bhagavan Krishna declares:",
      },
      {
        type: "quote",
        text: "brahma-bhūtaḥ prasannātmā na śocati na kāṅkṣati;\nsamaḥ sarveṣu bhūteṣu mad-bhaktiṁ labhate parām.",
        cite: "Bhagavad Gita 18.54",
      },
      {
        type: "quote",
        text: "bhaktyā mām abhijānāti yāvān yaś cāsmi tattvataḥ;\ntato māṁ tattvato jñātvā viśate tad-anantaram.",
        cite: "Bhagavad Gita 18.55",
      },
      {
        type: "p",
        text: "In other words, Brahm Bodhi explained, even after attaining the Brahman state the seeker is blessed with supreme devotion to Bhagavan; through that devotion he comes to know Bhagavan in His true essence and thereafter enters His divine abode.",
      },
      { type: "h", text: "The devotee is granted knowledge" },
      {
        type: "p",
        text: "Similarly, he said, when a seeker following the path of devotion reaches the gateway to liberation carrying the \u201Cpassport\u201D of bhakti, Bhagavan grants him the \u201Cvisa on arrival\u201D of knowledge. Bhagavan Himself declares:",
      },
      {
        type: "quote",
        text: "teṣām evānukampārtham aham ajñāna-jaṁ tamaḥ;\nnāśayāmy ātma-bhāva-stho jñāna-dīpena bhāsvatā.",
        cite: "Bhagavad Gita 10.11",
      },
      {
        type: "p",
        text: "That is, Bhagavan Himself, dwelling in the devotee\u2019s heart, destroys the darkness born of ignorance with the radiant lamp of knowledge.",
      },
      { type: "h", text: "Two paths, one Goal" },
      {
        type: "p",
        text: "Thus, Brahm Bodhi observed, the seeker on the path of knowledge ultimately attains devotion, while the seeker on the path of devotion ultimately receives the necessary knowledge through Bhagavan\u2019s grace. Though they begin from different directions, both paths finally converge upon the same Supreme Goal. Knowledge and devotion are not rivals; they complement and complete one another.",
      },
      { type: "h", text: "One important distinction" },
      {
        type: "p",
        text: "There is, however, one important distinction, he added. On the path of knowledge, direct realization and personal experience of the Self and its identity with Brahman, the formless Absolute, are indispensable \u2014 mere intellectual understanding, hearsay, or imagination is not sufficient.",
      },
      {
        type: "p",
        text: "On the path of devotion, however, such Self-realization is not essential. Through devotion alone the seeker can attain saguna moksha, reaching Vaikuntha, where the soul \u2014 without merging into God \u2014 becomes forever free from the cycle of birth and death and attains infinite, eternal bliss and peace.",
      },
    ],
    hi: {
      question:
        "मनुष्य भीतर कैसे प्रवेश करे, आत्मा के सत्य स्वरूप को कैसे जाने और अक्षय आनंद को कैसे प्राप्त करे? (भाग 4)",
      preview:
        "क्या आत्म-साक्षात्कार के बिना भी मोक्ष तथा अनन्त, अक्षय आनंद प्राप्त हो सकते हैं? ब्रह्मबोधि बताते हैं कि दोनों मार्ग अन्ततः एक ही स्थान पर मिलते हैं : ज्ञानी को मुक्ति के द्वार पर परा भक्ति प्राप्त होती है और भक्त को प्रकाशमय ज्ञान \u2014 किन्तु आत्मा का प्रत्यक्ष साक्षात्कार केवल ज्ञानमार्ग पर ही अनिवार्य है, जबकि भक्त उसके बिना ही वैकुण्ठ में सगुण मोक्ष प्राप्त कर लेता है।",
      answer: [
        {
          type: "h",
          text: "क्या आत्म-साक्षात्कार के बिना भी मोक्ष तथा अनन्त, अक्षय आनंद प्राप्त हो सकते हैं?",
        },
        {
          type: "p",
          text: "ब्रह्मबोधि ने कहा कि यहाँ एक रोचक बात ध्यान देने योग्य है \u2014 कि दोनों मार्ग अन्ततः किस प्रकार एक-दूसरे से मिल जाते हैं।",
        },
        { type: "h", text: "ज्ञानी को भक्ति की प्राप्ति" },
        {
          type: "p",
          text: "उन्होंने बताया कि जब ज्ञानमार्ग पर चलने वाला साधक आत्म-साक्षात्कार रूपी \u201Cपासपोर्ट\u201D लेकर मुक्ति के द्वार पर पहुँचता है, तब भी भगवान उसे अपने दिव्य धाम में प्रवेश देने से पूर्व भक्ति रूपी \u201Cवीज़ा ऑन अराइवल\u201D प्रदान करते हैं। इसीलिए भगवान कृष्ण कहते हैं :",
        },
        {
          type: "quote",
          text: "ब्रह्मभूतः प्रसन्नात्मा न शोचति न काङ्क्षति।\nसमः सर्वेषु भूतेषु मद्भक्तिं लभते पराम्॥",
          cite: "भगवद्गीता 18.54",
        },
        {
          type: "quote",
          text: "भक्त्या मामभिजानाति यावान्यश्चास्मि तत्त्वतः।\nततो मां तत्त्वतो ज्ञात्वा विशते तदनन्तरम्॥",
          cite: "भगवद्गीता 18.55",
        },
        {
          type: "p",
          text: "अर्थात, ब्रह्मबोधि ने समझाया कि ब्रह्म-अवस्था प्राप्त कर लेने के पश्चात भी साधक को भगवान की परा भक्ति का वरदान मिलता है; उसी भक्ति के द्वारा वह भगवान को उनके सत्य स्वरूप में जानता है और तदनन्तर उनके दिव्य धाम में प्रवेश करता है।",
        },
        { type: "h", text: "भक्त को ज्ञान की प्राप्ति" },
        {
          type: "p",
          text: "उन्होंने कहा कि इसी प्रकार, जब भक्तिमार्ग पर चलने वाला साधक भक्ति रूपी \u201Cपासपोर्ट\u201D लेकर मुक्ति के द्वार पर पहुँचता है, तब भगवान उसे ज्ञान रूपी \u201Cवीज़ा ऑन अराइवल\u201D प्रदान करते हैं। भगवान स्वयं कहते हैं :",
        },
        {
          type: "quote",
          text: "तेषामेवानुकम्पार्थमहमज्ञानजं तमः।\nनाशयाम्यात्मभावस्थो ज्ञानदीपेन भास्वता॥",
          cite: "भगवद्गीता 10.11",
        },
        {
          type: "p",
          text: "अर्थात, भगवान स्वयं भक्त के हृदय में स्थित होकर अज्ञान से उत्पन्न अन्धकार को ज्ञान के देदीप्यमान दीपक से नष्ट कर देते हैं।",
        },
        { type: "h", text: "दो मार्ग, एक ही लक्ष्य" },
        {
          type: "p",
          text: "इस प्रकार, ब्रह्मबोधि ने कहा, ज्ञानमार्ग का साधक अन्ततः भक्ति को प्राप्त करता है, और भक्तिमार्ग का साधक अन्ततः भगवान की कृपा से आवश्यक ज्ञान को प्राप्त करता है। यद्यपि दोनों भिन्न-भिन्न दिशाओं से आरम्भ करते हैं, तथापि दोनों मार्ग अन्ततः उसी एक परम लक्ष्य पर मिल जाते हैं। ज्ञान और भक्ति प्रतिद्वन्द्वी नहीं हैं; वे एक-दूसरे के पूरक हैं और एक-दूसरे को पूर्ण करते हैं।",
        },
        { type: "h", text: "एक महत्वपूर्ण भेद" },
        {
          type: "p",
          text: "किन्तु उन्होंने जोड़ा कि यहाँ एक महत्वपूर्ण भेद है। ज्ञानमार्ग पर आत्मा तथा निराकार ब्रह्म के साथ उसकी एकता का प्रत्यक्ष साक्षात्कार और स्वानुभव अनिवार्य है \u2014 केवल बौद्धिक समझ, सुनी-सुनाई बात अथवा कल्पना पर्याप्त नहीं।",
        },
        {
          type: "p",
          text: "किन्तु भक्तिमार्ग पर ऐसा आत्म-साक्षात्कार अनिवार्य नहीं। केवल भक्ति के द्वारा ही साधक सगुण मोक्ष प्राप्त कर सकता है, वैकुण्ठ पहुँच सकता है, जहाँ आत्मा \u2014 ईश्वर में विलीन हुए बिना \u2014 जन्म-मृत्यु के चक्र से सदा के लिए मुक्त होकर अनन्त, अक्षय आनंद और शांति को प्राप्त करती है।",
        },
      ],
    },
  },
  {
    id: "how-to-go-within-realize-the-self-part-5",
    question:
      "How does one go within, realize the true nature of the Self, and attain eternal bliss? (Part 5)",
    preview:
      "In his concluding words, Brahm Bodhi affirms that Self-realization is not the only road to God, liberation, or eternal bliss: the Gita honours both the Path of Knowledge and the Path of Devotion. Complementary rather than contradictory, they converge upon one Supreme Goal \u2014 the destination is one, the routes are different.",
    image: {
      en: "qa-go-within-self-part1.png",
      hi: "qa-go-within-self-part1.png",
      alt: {
        en: "One destination, different routes: knowledge and devotion",
        hi: "एक ही लक्ष्य, भिन्न मार्ग : ज्ञान और भक्ति",
      },
    },
    answer: [
      { type: "h", text: "Conclusion" },
      {
        type: "p",
        text: "Therefore, Brahm Bodhi concluded, one should not assume that realization of the true nature of the Self is the only means of attaining God, Liberation, or eternal bliss. The Bhagavad Gita recognizes both the Path of Knowledge and the Path of Devotion as authentic and complete spiritual paths.",
      },
      {
        type: "p",
        text: "Those who are drawn to the realization of the Nirguna Brahman, he said, may pursue the Path of Knowledge or the Path of Meditation; while those whose hearts are naturally inclined towards love, worship, and surrender may follow the Path of Devotion and attain Bhagavan Narayana, the Saguna Brahman.",
      },
      {
        type: "p",
        text: "Ultimately, Brahm Bodhi observed, both paths are complementary rather than contradictory. The seeker on the Path of Knowledge ultimately arrives at supreme Devotion, while the seeker on the Path of Devotion ultimately receives the illuminating Knowledge bestowed by Bhagavan Himself. Thus the two paths, though different in discipline, converge at the same Supreme Goal.",
      },
      {
        type: "p",
        text: "Bhagavan Krishna Himself declares:",
      },
      {
        type: "quote",
        text: "jñāna-yajñena cāpy anye yajanto mām upāsate;\nekatvena pṛthaktvena bahudhā viśvato-mukham.",
        cite: "Bhagavad Gita 9.15",
      },
      {
        type: "p",
        text: "\u201COthers worship Me through the sacrifice of Knowledge, perceiving Me as One; others worship Me as distinct from themselves; while still others worship Me in My countless universal manifestations.\u201D",
      },
      {
        type: "p",
        text: "Thus, Brahm Bodhi noted, Bhagavan explicitly accepts both approaches \u2014 the path of Oneness and the path of loving distinctness. Each is a valid means of reaching Him.",
      },
      {
        type: "p",
        text: "The choice of the path should therefore be guided by one\u2019s innate disposition, temperament, and spiritual aspiration. What matters is not whether one begins with Knowledge or with Devotion, but whether one proceeds with sincerity, perseverance, and complete dedication to God.",
      },
      {
        type: "p",
        text: "The destination is one. The routes are different.",
      },
    ],
    hi: {
      question:
        "मनुष्य भीतर कैसे प्रवेश करे, आत्मा के सत्य स्वरूप को कैसे जाने और अक्षय आनंद को कैसे प्राप्त करे? (भाग 5)",
      preview:
        "अपने समापन वचनों में ब्रह्मबोधि कहते हैं कि आत्म-साक्षात्कार ही ईश्वर, मोक्ष अथवा अक्षय आनंद का एकमात्र मार्ग नहीं है : गीता ज्ञानमार्ग और भक्तिमार्ग \u2014 दोनों को स्वीकार करती है। ये परस्पर विरोधी नहीं, अपितु पूरक हैं और एक ही परम लक्ष्य पर मिल जाते हैं \u2014 लक्ष्य एक है, मार्ग भिन्न हैं।",
      answer: [
        { type: "h", text: "निष्कर्ष" },
        {
          type: "p",
          text: "अतः ब्रह्मबोधि ने निष्कर्ष दिया कि यह मान लेना ठीक नहीं कि आत्मा के सत्य स्वरूप का साक्षात्कार ही ईश्वर-प्राप्ति, मोक्ष अथवा अक्षय आनंद का एकमात्र साधन है। भगवद्गीता ज्ञानमार्ग और भक्तिमार्ग \u2014 दोनों को प्रामाणिक और पूर्ण आध्यात्मिक मार्ग के रूप में स्वीकार करती है।",
        },
        {
          type: "p",
          text: "उन्होंने कहा कि जो निर्गुण ब्रह्म के साक्षात्कार की ओर आकृष्ट हैं, वे ज्ञानमार्ग अथवा ध्यानमार्ग का अनुसरण कर सकते हैं; और जिनके हृदय स्वभावतः प्रेम, पूजा और समर्पण की ओर झुके हैं, वे भक्तिमार्ग पर चलकर सगुण ब्रह्म भगवान नारायण को प्राप्त कर सकते हैं।",
        },
        {
          type: "p",
          text: "अन्ततः, ब्रह्मबोधि ने कहा, दोनों मार्ग परस्पर विरोधी नहीं, अपितु पूरक हैं। ज्ञानमार्ग का साधक अन्ततः परा भक्ति को प्राप्त करता है, और भक्तिमार्ग का साधक अन्ततः भगवान द्वारा प्रदत्त प्रकाशमय ज्ञान को पाता है। इस प्रकार दोनों मार्ग, साधना में भिन्न होते हुए भी, उसी एक परम लक्ष्य पर मिल जाते हैं।",
        },
        {
          type: "p",
          text: "भगवान कृष्ण स्वयं कहते हैं :",
        },
        {
          type: "quote",
          text: "ज्ञानयज्ञेन चाप्यन्ये यजन्तो मामुपासते।\nएकत्वेन पृथक्त्वेन बहुधा विश्वतोमुखम्॥",
          cite: "भगवद्गीता 9.15",
        },
        {
          type: "p",
          text: "\u201Cकुछ ज्ञानयज्ञ के द्वारा मुझे एक जानकर उपासना करते हैं; कुछ मुझे स्वयं से पृथक् मानकर; तो कुछ मेरे अनन्त विश्वरूपों में मेरी उपासना करते हैं।\u201D",
        },
        {
          type: "p",
          text: "इस प्रकार, ब्रह्मबोधि ने कहा, भगवान स्पष्ट रूप से दोनों भावों को स्वीकार करते हैं \u2014 एकत्व का मार्ग और प्रेममय पृथक्त्व का मार्ग। दोनों ही उन तक पहुँचने के प्रामाणिक साधन हैं।",
        },
        {
          type: "p",
          text: "अतः मार्ग का चुनाव व्यक्ति के अपने स्वभाव, प्रवृत्ति और आध्यात्मिक आकांक्षा के अनुसार होना चाहिए। महत्वपूर्ण यह नहीं कि कोई ज्ञान से आरम्भ करता है अथवा भक्ति से, अपितु यह कि वह श्रद्धा, दृढ़ता और ईश्वर के प्रति पूर्ण समर्पण के साथ आगे बढ़ता है या नहीं।",
        },
        {
          type: "p",
          text: "लक्ष्य एक है। मार्ग भिन्न हैं।",
        },
      ],
    },
  },
  {
    id: "human-disposition-divine-or-demonic",
    coverImage: "qa-human-disposition-divine-demonic.png",
    question:
      "What naturally is the human disposition — divine or demonic?",
    preview:
      "A seeker once asked: if desire, self-interest, and attachment seem natural to human beings, why should we struggle to cultivate qualities that appear contrary to our instincts? The Gita's answer is that both divine and demonic tendencies exist within every person — and a life of progress lies in gradually rising from tamas to rajas to sattva, and then beyond.",
    answer: [
      {
        type: "p",
        text: "A devotee once approached Sriyut BrahmBodhi with a question that had arisen during a conversation with a 22-year-old young man. While being introduced to the principles of Navadha Bhakti and the teachings of Chapter 12 of the Bhagavad Gita, the young man raised an honest objection:",
      },
      {
        type: "quote",
        text: "Many of the qualities described here seem to go against ordinary human nature. Desiring things, thinking about oneself, seeking one's own interests, and being attached to one's likes and dislikes appear to be natural human tendencies. If these are part of human nature, why should we try to act against them? Why should we attempt to cultivate qualities that seem contrary to our natural instincts?",
      },
      {
        type: "p",
        text: "The devotee, unable to give a satisfactory reply at that moment, sought BrahmBodhi's guidance on how such a question may be addressed. The following is the substance of BrahmBodhi's response.",
      },
      { type: "h", text: "Two tendencies live within every human being" },
      {
        type: "p",
        text: "Both divine and demonic qualities are part of human nature. Some people are born with a greater predominance of divine qualities, while others are born with stronger demonic tendencies. Those in whom demonic qualities predominate naturally regard such tendencies as normal and effortless. On the other hand, those in whom divine qualities are stronger find compassion, truthfulness, self-control, and concern for others to be equally natural and effortless. Therefore, the young man's observation is not surprising — it is simply a reflection of where his own present inclinations lie.",
      },
      {
        type: "p",
        text: "What he needs to understand is that both kinds of tendencies coexist within human beings. It is precisely for this reason that Lord Krishna devotes the entire sixteenth chapter of the Bhagavad Gita to the subject of the Divine and Demonic Natures (Daivāsura-sampad-vibhāga Yoga).",
      },
      { type: "h", text: "Divine qualities liberate; demonic qualities bind" },
      { type: "p", text: "The Lord says:" },
      {
        type: "quote",
        text: "Daivī sampad vimokṣāya nibandhāyāsurī matā;\nMā śucaḥ sampadaṁ daivīm abhijāto'si Pāṇḍava.",
        cite: "Bhagavad Gita 16.5",
      },
      {
        type: "p",
        text: "Meaning: \u201CThe divine qualities lead to liberation, whereas the demonic qualities lead to bondage. Do not grieve, O Pāṇḍava, for you are born with the divine endowment.\u201D",
      },
      { type: "h", text: "No one escapes the three gunas" },
      {
        type: "p",
        text: "The Lord also makes it clear that no living being — not even the gods — is completely free from the three qualities (gunas) of material nature: sattva (goodness), rajas (passion), and tamas (ignorance):",
      },
      {
        type: "quote",
        text: "Na tad asti pṛthivyāṁ vā divi deveṣu vā punaḥ;\nSattvaṁ prakṛtijair muktaṁ yad ebhiḥ syāt tribhir guṇaiḥ.",
        cite: "Bhagavad Gita 18.40",
      },
      {
        type: "p",
        text: "Meaning: \u201CThere is no being on earth, or even among the gods in heaven, who is free from these three gunas born of material nature.\u201D",
      },
      { type: "h", text: "The journey of transformation" },
      {
        type: "p",
        text: "A person's character and conduct are determined by which of these three gunas predominates at a given time. One in whom tamas is dominant should gradually give up tamasic habits and tendencies and move toward rajas, and from rajas toward sattva. Thereafter, one should continue refining oneself by cultivating ever greater purity, wisdom, and self-mastery, ultimately rising even beyond sattva.",
      },
      { type: "p", text: "The Lord describes the trajectory of these three gunas:" },
      {
        type: "quote",
        text: "Ūrdhvaṁ gacchanti sattvasthā madhye tiṣṭhanti rājasāḥ;\nJaghanyaguṇavṛttisthā adho gacchanti tāmasāḥ.",
        cite: "Bhagavad Gita 14.18",
      },
      {
        type: "p",
        text: "Meaning: \u201CThose established in sattva rise upward; those dominated by rajas remain in the middle; while those immersed in tamasic tendencies move downward.\u201D",
      },
      { type: "h", text: "Why cultivate the divine qualities?" },
      {
        type: "p",
        text: "It is therefore entirely natural and rational for a person who seeks progress and excellence in life to reduce demonic tendencies and consciously cultivate divine ones. This is the path that leads simultaneously to worldly well-being and to spiritual advancement. To follow one's lower instincts simply because they feel \u201Cnatural\u201D is to mistake the starting point of life for its destination.",
      },
      {
        type: "p",
        text: "Lord Krishna opens the sixteenth chapter by listing the very qualities a human being should cultivate:",
      },
      {
        type: "quote",
        text: "Abhayaṁ sattva-saṁśuddhir jñāna-yoga-vyavasthitiḥ...",
        cite: "Bhagavad Gita 16.1\u20133",
      },
      {
        type: "ul",
        items: [
          "Fearlessness",
          "Purity of mind (sattva-saṁśuddhi)",
          "Steadfastness in knowledge and yoga",
          "Self-control",
          "Sacrifice (yajña)",
          "Compassion",
          "Truthfulness",
        ],
      },
      {
        type: "p",
        text: "The cultivation of these divine qualities elevates a person toward a higher life, inner peace, and ultimately spiritual realization. Thus, far from being unnatural, embracing divine qualities is the most rational and dignified response to the fact that human nature contains both possibilities — and that we ourselves choose which one to nourish.",
      },
    ],
    hi: {
      question:
        "मनुष्य का स्वाभाविक स्वभाव क्या है — दैवी या आसुरी?",
      preview:
        "एक जिज्ञासु ने पूछा : यदि कामना, स्वार्थ और आसक्ति मनुष्य को स्वाभाविक ही लगते हैं, तो उनके विरुद्ध जाकर दैवी गुणों को अपनाने का प्रयास क्यों किया जाए? गीता का उत्तर है — दैवी और आसुरी, दोनों प्रवृत्तियाँ प्रत्येक मनुष्य के भीतर हैं; जीवन की प्रगति इसी में है कि वह क्रमशः तमस् से रजस्, रजस् से सत्त्व, और अंततः सत्त्व से भी ऊपर उठे।",
      answer: [
        {
          type: "p",
          text: "एक भक्त ने श्रीयुत् ब्रह्मबोधि से एक प्रश्न रखा। बीते दिन वे एक 22 वर्षीय युवक से भगवद्गीता के महत्व पर चर्चा कर रहे थे और उसे नवधा भक्ति तथा गीता के बारहवें अध्याय के मुख्य उपदेशों से अवगत करा रहे थे। उसी संवाद में युवक ने एक रोचक शंका रखी :",
        },
        {
          type: "quote",
          text: "यहाँ बताए गए अनेक गुण और अभ्यास तो साधारण मानवीय स्वभाव के विरुद्ध प्रतीत होते हैं। इच्छाएँ करना, अपने विषय में सोचना, अपने हित को देखना, अपनी रुचि-अरुचि से जुड़ना — ये सब तो मनुष्य के स्वाभाविक प्रवृत्तियाँ लगती हैं। यदि ये मानवीय स्वभाव का अंग हैं, तो इनके विरुद्ध जाने का प्रयास क्यों किया जाए? जो गुण हमारी स्वाभाविक प्रवृत्तियों के विपरीत प्रतीत होते हैं, उन्हें विकसित करने का यत्न क्यों करें?",
        },
        {
          type: "p",
          text: "उस समय भक्त इस प्रश्न का संतोषजनक उत्तर नहीं दे पाए और उन्होंने ब्रह्मबोधि से मार्गदर्शन माँगा। निम्नलिखित ब्रह्मबोधि का उत्तर है।",
        },
        { type: "h", text: "प्रत्येक मनुष्य के भीतर दो प्रवृत्तियाँ" },
        {
          type: "p",
          text: "दैवी और आसुरी — दोनों ही प्रकार के गुण मानव-स्वभाव के अंग हैं। कुछ लोग दैवी गुणों की प्रधानता के साथ जन्म लेते हैं, तो कुछ में आसुरी प्रवृत्तियाँ प्रबल होती हैं। जिनमें आसुरी गुण प्रबल होते हैं, उन्हें वैसी प्रवृत्तियाँ ही स्वाभाविक और सहज प्रतीत होती हैं। वहीं, जिनमें दैवी गुण अधिक होते हैं, उन्हें करुणा, सत्य, संयम और दूसरों के प्रति चिंता समान रूप से स्वाभाविक और सहज लगती है। अतः उस युवक का अवलोकन आश्चर्यजनक नहीं है — वह केवल यह बता रहा है कि उसकी अपनी वर्तमान प्रवृत्तियाँ कहाँ हैं।",
        },
        {
          type: "p",
          text: "उसे यह समझने की आवश्यकता है कि मनुष्य के भीतर दोनों प्रकार की प्रवृत्तियाँ एक साथ निवास करती हैं। इसी कारण भगवान श्रीकृष्ण ने भगवद्गीता का पूरा सोलहवाँ अध्याय (दैवासुर-सम्पद्-विभाग योग) इसी विषय को समर्पित किया है।",
        },
        { type: "h", text: "दैवी गुण मुक्ति देते हैं, आसुरी बंधन" },
        { type: "p", text: "भगवान कहते हैं :" },
        {
          type: "quote",
          text: "दैवी सम्पद्विमोक्षाय निबन्धायासुरी मता ।\nमा शुचः सम्पदं दैवीमभिजातोऽसि पाण्डव ॥",
          cite: "भगवद्गीता 16.5",
        },
        {
          type: "p",
          text: "अर्थात् : \u201Cदैवी सम्पत्ति मोक्ष की ओर ले जाती है, आसुरी सम्पत्ति बंधन की ओर। हे पाण्डव! शोक मत करो, क्योंकि तुम दैवी सम्पत्ति को प्राप्त करके ही जन्मे हो।\u201D",
        },
        { type: "h", text: "तीनों गुणों से कोई मुक्त नहीं" },
        {
          type: "p",
          text: "भगवान यह भी स्पष्ट करते हैं कि पृथ्वी पर अथवा देवलोक में, कोई भी प्राणी प्रकृति के तीन गुणों — सत्त्व (सत्त्वगुण), रजस् (रजोगुण) और तमस् (तमोगुण) — से पूर्णतः मुक्त नहीं है :",
        },
        {
          type: "quote",
          text: "न तदस्ति पृथिव्यां वा दिवि देवेषु वा पुनः ।\nसत्त्वं प्रकृतिजैर्मुक्तं यदेभिः स्यात्त्रिभिर्गुणैः ॥",
          cite: "भगवद्गीता 18.40",
        },
        {
          type: "p",
          text: "अर्थात् : \u201Cपृथ्वी पर अथवा स्वर्ग में देवताओं के बीच, कोई भी ऐसा प्राणी नहीं जो प्रकृति से उत्पन्न इन तीनों गुणों से मुक्त हो।\u201D",
        },
        { type: "h", text: "परिवर्तन की यात्रा" },
        {
          type: "p",
          text: "किसी समय मनुष्य का चरित्र और आचरण इस बात से निर्धारित होता है कि उसमें इन तीनों में से कौन-सा गुण प्रबल है। जिसमें तमस् प्रधान है, उसे क्रमशः तामसिक आदतों और प्रवृत्तियों को छोड़ते हुए रजस् की ओर, और रजस् से सत्त्व की ओर बढ़ना चाहिए। इसके पश्चात् उसे अधिकाधिक पवित्रता, ज्ञान और आत्म-संयम का विकास करते हुए सत्त्व से भी ऊपर उठने का प्रयत्न करते रहना चाहिए।",
        },
        { type: "p", text: "भगवान इन तीनों गुणों की गति का वर्णन करते हैं :" },
        {
          type: "quote",
          text: "ऊर्ध्वं गच्छन्ति सत्त्वस्था मध्ये तिष्ठन्ति राजसाः ।\nजघन्यगुणवृत्तिस्था अधो गच्छन्ति तामसाः ॥",
          cite: "भगवद्गीता 14.18",
        },
        {
          type: "p",
          text: "अर्थात् : \u201Cसत्त्व में स्थित मनुष्य ऊपर की ओर जाते हैं; रजस् में स्थित मध्य में रहते हैं; और तमस् की निकृष्ट प्रवृत्तियों में डूबे हुए नीचे की ओर गिरते हैं।\u201D",
        },
        { type: "h", text: "दैवी गुणों का विकास क्यों करें?" },
        {
          type: "p",
          text: "अतः जो मनुष्य जीवन में प्रगति और उत्कर्ष चाहता है, उसके लिए आसुरी प्रवृत्तियों को क्षीण करना और दैवी गुणों का सचेत रूप से विकास करना पूर्णतः स्वाभाविक एवं तर्कसंगत है। यही मार्ग एक साथ लौकिक कल्याण और आध्यात्मिक उन्नति, दोनों की ओर ले जाता है। केवल \u201Cस्वाभाविक\u201D लगने के कारण अपनी निम्न प्रवृत्तियों का अनुसरण करना, जीवन के आरंभ-बिंदु को ही उसका गन्तव्य मान लेना है।",
        },
        {
          type: "p",
          text: "भगवान सोलहवें अध्याय का प्रारम्भ ही उन गुणों की गणना से करते हैं, जिन्हें मनुष्य को विकसित करना चाहिए :",
        },
        {
          type: "quote",
          text: "अभयं सत्त्वसंशुद्धिर्ज्ञानयोगव्यवस्थितिः... ",
          cite: "भगवद्गीता 16.1\u20133",
        },
        {
          type: "ul",
          items: [
            "अभय (निर्भयता)",
            "सत्त्वसंशुद्धि (अंतःकरण की पवित्रता)",
            "ज्ञानयोग में स्थिरता",
            "आत्मसंयम",
            "यज्ञ (त्याग)",
            "करुणा",
            "सत्य",
          ],
        },
        {
          type: "p",
          text: "इन दैवी गुणों का विकास मनुष्य को उच्चतर जीवन, आंतरिक शांति और अंततः आध्यात्मिक साक्षात्कार की ओर ले जाता है। अतः दैवी गुणों को अपनाना अस्वाभाविक नहीं, बल्कि इस तथ्य के प्रति सर्वाधिक तर्कसंगत और गौरवपूर्ण उत्तर है कि मानव-स्वभाव में दोनों संभावनाएँ विद्यमान हैं — और यह चुनाव हमारा है कि हम किसे पोषित करते हैं।",
        },
      ],
    },
  },
  {
    id: "chanting-destroy-sorrow",
    coverImage: "qa-chanting-destroy-sorrow.jpg",
    question:
      "Can chanting (japa) destroy sorrow? Why do bad people appear happy while good people suffer?",
    preview:
      "It is not true that people who engage in immoral actions are necessarily happier. Upon closer observation, there is a vast difference between temporary success and genuine happiness — and the Gita points the way to lasting freedom from sorrow.",
    answer: [
      {
        type: "p",
        text: "It is not true that people who engage in immoral or base actions are necessarily happier. Upon closer observation, it may sometimes appear that such people attain success more quickly. However, there is a vast difference between temporary success and genuine happiness.",
      },
      {
        type: "p",
        text: "One must understand a fundamental principle of life: a person who lives within the bounds of law and basic morality generally faces fewer fears and fewer crises. Those who adopt the path of deceit, injustice, violence, corruption, or unrighteousness may gain temporary advantages, but eventually those very actions become the cause of fear, unrest, and punishment in their lives.",
      },
      {
        type: "p",
        text: "Those who progress through honest effort, without resorting to grave immorality or illegal conduct, often succeed more slowly, yet their success tends to be more stable, peaceful, and honorable.",
      },
      {
        type: "p",
        text: "In truth, happiness in life does not lie merely in external success. Those who seek happiness only in wealth, sensual enjoyment, position, praise, or outward achievements can never attain lasting contentment. Such is the nature of the world.",
      },
      {
        type: "p",
        text: "That is why Lord Krishna, in the Bhagavad Gita, teaches principles that help one rise above pleasure and pain. By understanding and practicing those principles, a person gradually begins to free himself from suffering. Two things are especially helpful in this process:",
      },
      {
        type: "ol",
        items: [
          "Detachment from external objects and circumstances.",
          "The cultivation of equanimity.",
        ],
      },
      { type: "p", text: "The Lord says:" },
      {
        type: "quote",
        text: "Established in yoga, perform your actions, O Dhananjaya, abandoning attachment and remaining even-minded in success and failure. Such equanimity is called Yoga.",
        cite: "Bhagavad Gita 2.48",
      },
      { type: "p", text: "Similarly:" },
      {
        type: "quote",
        text: "One whose mind is undisturbed amidst sorrows, who is free from craving amidst pleasures, and who is free from attachment, fear, and anger, is called a sage of steady wisdom.",
        cite: "Bhagavad Gita 2.56",
      },
      {
        type: "p",
        text: "Sufferings are generally of two kinds: mental and physical. Physical suffering comes comparatively less often, but mental suffering repeatedly surrounds human beings. Anxiety, fear, jealousy, failure, insult, attachment, anger, and expectations constantly disturb the mind.",
      },
      {
        type: "p",
        text: "The Gita presents a profound psychology for liberation from these mental sufferings.",
      },
      {
        type: "p",
        text: "To prevent physical suffering and imbalance as well, the Lord gives very clear principles:",
      },
      {
        type: "quote",
        text: "Yoga destroys sorrow for one who is moderate in food and recreation, balanced in actions, and regulated in sleep and wakefulness.",
        cite: "Bhagavad Gita 6.17",
      },
      {
        type: "p",
        text: "Four important principles are especially emphasized here:",
      },
      {
        type: "ul",
        items: [
          "Proper and disciplined eating",
          "Proper recreation and exercise",
          "Balanced sleep",
          "Avoidance of both excessive and insufficient work",
        ],
      },
      {
        type: "p",
        text: "Ultimately, a deep understanding of the law of karma also begins to free a person from suffering. When one realizes that every action bears fruit, and that whatever is happening in life is part of a larger karmic order, one's anger, complaints, and despair gradually begin to diminish. On one hand, such a person makes every effort to improve the present and the future; on the other hand, he patiently accepts present circumstances as the result of his own past actions.",
      },
      {
        type: "p",
        text: "When this vision begins to develop, a person ceases to be a slave to external circumstances and becomes inwardly more free, peaceful, and joyful.",
      },
      {
        type: "p",
        text: "As for chanting (japa), one should understand that mere chanting alone does not automatically bring happiness into life. True happiness comes from living according to the path taught in the Gita.",
      },
      {
        type: "p",
        text: "Therefore, read the Gita daily, and read it with understanding.",
      },
    ],
  },
  {
    id: "is-god-formless-or-with-form",
    coverImage: "qa-god-formless-or-form.png",
    question:
      "Is the Supreme God with form (sākāra), or formless (nirākāra), or both, or beyond both?",
    preview:
      "The Supreme Reality is originally formless, unmanifest, and beyond the three qualities of material nature. Yet when He creates the universe, He reveals Himself in a personal, manifest form — and at times even descends in human form to protect dharma. These are not two different Gods, but two aspects of the same Supreme Being.",
    answer: [
      {
        type: "p",
        text: "The Supreme Reality is originally formless, unmanifest, and beyond the three qualities of material nature. In its primordial state, He alone exists; there is no second entity beside Him. That aspect of the Supreme is called Brahman.",
      },
      {
        type: "quote",
        text: "Ekam eva advitīyam.",
        cite: "Chandogya Upanishad 6.2.1",
      },
      {
        type: "p",
        text: "Meaning: \u201CHe alone existed, without a second.\u201D",
      },
      {
        type: "p",
        text: "However, when the Supreme creates the manifested universe, He reveals Himself in a personal and manifest form as Narayana.",
      },
      {
        type: "p",
        text: "Not only this, at times He also descends in human form to protect dharma, destroy adharma, and delight His devotees.",
      },
      {
        type: "p",
        text: "In the Bhagavad Gita, Bhagawan Krishna says:",
      },
      {
        type: "quote",
        text: "Avyakta\u1E41 vyaktim \u0101panna\u1E41 manyante m\u0101m abuddhaya\u1E25\nPara\u1E41 bh\u0101vam aj\u0101nanto mam\u0101vyayam anuttamam.",
        cite: "Bhagavad Gita 7.24",
      },
      {
        type: "p",
        text: "Meaning: \u201CThe unintelligent think of Me, the unmanifest and supreme reality, as having merely assumed a manifest form. They do not know My highest, imperishable, and unsurpassed nature.\u201D",
      },
      {
        type: "p",
        text: "The Lord further says:",
      },
      {
        type: "quote",
        text: "Ajo\u2019pi sann avyay\u0101tm\u0101 bh\u016Bt\u0101n\u0101m \u012B\u015Bvaro\u2019pi san\nPrak\u1E5Bti\u1E41 sv\u0101m adhi\u1E63\u1E6Dh\u0101ya sambhav\u0101my \u0101tma-m\u0101yay\u0101.",
        cite: "Bhagavad Gita 4.6",
      },
      {
        type: "p",
        text: "Meaning: \u201CAlthough unborn and imperishable, and though I am the Lord of all beings, I manifest Myself through My divine power.\u201D",
      },
      {
        type: "p",
        text: "And when people mistake this divine embodied form of God for an ordinary human being, the Lord says:",
      },
      {
        type: "quote",
        text: "Avaj\u0101nanti m\u0101\u1E41 m\u016B\u1E0Dh\u0101 m\u0101nu\u1E63\u012B\u1E41 tanum \u0101\u015Brita\u1E41\nPara\u1E41 bh\u0101vam aj\u0101nanto mama bh\u016Bta-mahe\u015Bvaram.",
        cite: "Bhagavad Gita 9.11",
      },
      {
        type: "p",
        text: "Meaning: \u201CFoolish people disregard Me when I appear in human form. They do not understand My higher divine nature as the Supreme Lord of all beings.\u201D",
      },
      {
        type: "p",
        text: "Thus, in the Gita, the Lord Himself describes both aspects of His reality: the unmanifest and the manifest, the attributeless and the qualified, the formless and the personal.",
      },
      {
        type: "p",
        text: "These are not two different Gods, but two aspects of the same Supreme Being.",
      },
    ],
  },
  {
    id: "uniform-ritual-code-sanatan-dharma",
    coverImage: "qa-uniform-ritual-code.png",
    question:
      "Can a Uniform Ritual Code be developed for all Indic faiths, and how can Sanatan Dharma cultivate real civilizational unity?",
    preview:
      "Bringing all Indic faiths onto one platform is a noble idea, but a Uniform Ritual Code for all of them — including Sikhs, Buddhists, Jains, and the many streams of Sanatan Dharma — may not presently be practical. A more attainable beginning is to agree upon shared guiding scriptures, with the Bhagavad Gita and the Vedas as a natural civilizational centre of gravity.",
    answer: [
      {
        type: "p",
        text: "Context: Bharat Sant Mahaa Sabha conference on Uniform Ritual Code for all Indic religions, 18 May 2026.",
      },
      {
        type: "p",
        text: "It is a noble and constructive idea to bring together all faiths of Indic origin onto one platform. However, developing a Uniform Ritual Code (URC) for all of them alike, including the Sikhs, Buddhists, Jains, and the diverse streams of Sanatan Dharma, though an inspiring dream, may not presently be a practically realizable one. A more attainable beginning could be to persuade the various sects and denominations within the broad fold of Sanatan Dharma itself, including the Arya Samaj, to evolve a common URC.",
      },
      {
        type: "p",
        text: "For this, a concrete working proposal must first be drafted and made public, or at least circulated among the principal leaders and acharyas of the various Sanatani sects. After preliminary consultations and parleys, there should eventually be a full-scale Sanatan Council session to deliberate upon the proposal collectively.",
      },
      {
        type: "p",
        text: "Yet, even before attempting such an ambitious exercise, certain foundational commonalities must first be agreed upon in order to cultivate a genuine sense of unity and oneness among the numerous splintered streams of Sanatan Dharma. This is not about manufacturing an artificial appearance of unity, but about gradually building real civilizational cohesion among Hindus and Hindu sects.",
      },
      {
        type: "h",
        text: "Begin with shared scriptures",
      },
      {
        type: "p",
        text: "The first step toward such unity could be to persuade all major sects to agree upon one, or a small set of, common guiding scriptures for all Sanatanis. Only when temples, mathas, institutions, and ordinary followers across sectarian boundaries begin to keep, honour, study, and teach such shared scriptures can a deeper unity of thought and emotion begin to emerge.",
      },
      {
        type: "p",
        text: "If the sects agree in principle to adopt one \u201Cshared\u201D scripture, or a set of shared scriptures, then they should also agree beforehand to abide by the majority decision regarding their selection. Each denomination would, of course, remain fully free to continue according equal reverence to its own Guru-given or sect-specific scripture.",
      },
      {
        type: "p",
        text: "If such a consultative process and voting were ever undertaken, it is likely that the Bhagavad Gita would emerge as the foremost shared scripture, with the Vedas occupying the next position. To begin with, therefore, the Bhagavad Gita and the Vedas, along with the sect\u2019s own Guru-given scripture, may together constitute a kind of \u201CGranth-Trayi\u201D for each sect, collectively accepted as guiding lights of Sanatan Dharma.",
      },
      {
        type: "p",
        text: "Consider, for example, the spiritual stream of Anukul Chandra Thakur, with a following running into millions. Many among them primarily follow the sayings of Anukul Thakur alone. Similarly, the Vihangam Yoga tradition, with its vast following, centres itself around the \u201CSwaraveda\u201D, containing the teachings of its Guru. If such streams begin accepting the Gita, and perhaps the Vedas as well, as shared civilizational scriptures alongside their own, they would naturally begin integrating more consciously into the broader mainstream of Sanatan Dharma while still preserving their distinct identities.",
      },
      {
        type: "p",
        text: "It must be clearly understood that without a common scripture, or at least a shared set of primary scriptures, Sanatan Dharma cannot fully develop a common worldview and emotional solidarity, both of which are essential for enduring unity and collective strength.",
      },
      {
        type: "h",
        text: "An alternative path: scripture in every home",
      },
      {
        type: "p",
        text: "Moreover, many of these sectarian conglomerates are themselves only loosely knit bodies. Their followers are often not doctrinally trained or ideologically consolidated in the way followers of more centralized faith traditions frequently are. Therefore, even if certain sect leaders hesitate to formally accept the idea of shared scriptures, another path still remains open.",
      },
      {
        type: "p",
        text: "Let the Bhagavad Gita, along with a carefully curated pictorial Ramayana, be distributed free of cost to all 23 crore Hindu households. Children, youth, and ordinary families will gradually begin reading them. Over time, a shared civilizational worldview will begin taking root naturally in millions of minds, thereby preparing the ground for a later formal acceptance of shared scriptures and deeper unity.",
      },
      {
        type: "h",
        text: "A civilizational centre of gravity",
      },
      {
        type: "p",
        text: "The existence of a single shared scripture, or a clearly recognised set of scriptures, gives Christians, Muslims, and Sikhs a strong sense of collective identity, emotional bonding, and unity. Sanatan Dharma too requires some comparable civilizational centre of gravity.",
      },
      {
        type: "p",
        text: "For this purpose, a Universal Hindu Faith Council representing all major streams of Sanatan Dharma, including Arya Samaj, may eventually need to be constituted, perhaps with rotational leadership. The ancient Christian Councils provide an instructive historical example in this regard. At present, instead of one broadly representative civilizational council, Hindu society has numerous disconnected sabhas, councils, and organizations operating independently under different names and traditions. Such a fragmented institutional architecture ultimately weakens the possibility of collective deliberation and coordinated civilizational action.",
      },
    ],
  },
  {
    id: "how-to-install-and-worship-shaligram",
    coverImage: "qa-shaligram-worship.png",
    question: "How should one respectfully install and worship a Shaligram?",
    preview:
      "In many Vaishnava traditions, the Shaligram is regarded as self-manifested (svayambhu) and eternally worshipful — so a formal prana-pratishtha is not considered essential. What matters most are devotion, purity, and regular worship. Here is a simple, sattvic method.",
    answer: [
      {
        type: "p",
        text: "The tradition of \u201Cinstalling\u201D a Shaligram Shila is considered somewhat different from the installation of ordinary idols. In many Vaishnava traditions, the Shaligram is regarded as self-manifested (svayambhu) and eternally worshipful; therefore, a formal consecration ritual (prana-pratishtha) is not considered essential for it. The main things are devotion, purity, and regular worship.",
      },
      {
        type: "p",
        text: "In brief, a simple and sattvic method:",
      },
      {
        type: "h",
        text: "1. Choosing the Place",
      },
      {
        type: "p",
        text: "Prepare a clean and elevated place in the house by spreading a yellow or clean cloth. If possible, place the Shaligram near an image or deity form of Lord Vishnu, Shri Krishna, or Shri Rama.",
      },
      {
        type: "h",
        text: "2. Purification",
      },
      {
        type: "ul",
        items: [
          "Take a bath yourself and clean the place.",
          "Bathe the Shaligram with Ganga water or clean water. According to tradition, you may also perform a Panchamrit bath.",
        ],
      },
      {
        type: "h",
        text: "3. Importance of Tulsi",
      },
      {
        type: "p",
        text: "Tulsi is considered extremely important in the worship of Shaligram. Tulsi leaves should be offered.",
      },
      {
        type: "h",
        text: "4. The Spirit of Installation",
      },
      {
        type: "p",
        text: "With both hands, respectfully place the Shaligram on the seat and pray with simple devotion:",
      },
      {
        type: "quote",
        text: "O Shri Hari! Kindly reside in my home and bless me with righteousness, devotion, and noble wisdom.",
      },
      {
        type: "h",
        text: "5. Worship",
      },
      {
        type: "p",
        text: "Offer sandalwood paste, akshata (unbroken rice), flowers, Tulsi, incense, and lamp. Then chant Vishnu mantras, verses from the Gita, Vishnu Sahasranama, or simply repeat:",
      },
      {
        type: "quote",
        text: "Om Namo Bhagavate Vasudevaya.",
      },
      {
        type: "h",
        text: "6. Offering of Food",
      },
      {
        type: "p",
        text: "Offer sattvic food, fruits, sweets, etc., with devotion.",
      },
      {
        type: "h",
        text: "7. Daily Service",
      },
      {
        type: "p",
        text: "At the very least, offer water, Tulsi, and pranam daily. More important than grandeur is regular devotion and a pure way of life.",
      },
      {
        type: "h",
        text: "Traditional precautions",
      },
      {
        type: "ul",
        items: [
          "Do not place the Shaligram directly on the ground.",
          "Do not touch it in an impure state.",
          "Avoid an atmosphere of excessive quarrel, alcohol, or meat in the home.",
        ],
      },
      {
        type: "p",
        text: "Above all, however, devotion is paramount. God does not manifest in stone, but in faith. Sometimes a single Tulsi leaf and one pure tear are dearer to Him than elaborate Vedic rituals.",
      },
    ],
  },
  {
    id: "how-to-spend-earnings-wisely",
    coverImage: "qa-earnings-charity.png",
    question:
      "How should we use our earnings in a way that benefits both ourselves and society — and how much should we give in charity?",
    preview:
      "Earning is necessary for sustaining life, but donating a portion of that wealth is equally important. Charity is not only to help others — it purifies one's own mind and heart, and is essential for the inner purity the Gita describes. While Sanatan Dharma prescribes no fixed percentage, cultivating the habit of giving at least ten percent of one's income is highly desirable.",
    answer: [
      {
        type: "p",
        text: "Earning wealth is necessary for sustaining life. However, it is equally important to donate a portion of that wealth. In the Bhagavad Gita, Lord Krishna says:",
      },
      {
        type: "quote",
        text: "\u092F\u091C\u094D\u091E\u0926\u093E\u0928\u0924\u092A\u0903\u0915\u0930\u094D\u092E \u0928 \u0924\u094D\u092F\u093E\u091C\u094D\u092F\u0902 \u0915\u093E\u0930\u094D\u092F\u092E\u0947\u0935 \u0924\u0924\u094D \u0964\n\u092F\u091C\u094D\u091E\u094B \u0926\u093E\u0928\u0902 \u0924\u092A\u0936\u094D\u091A\u0948\u0935 \u092A\u093E\u0935\u0928\u093E\u0928\u093F \u092E\u0928\u0940\u0937\u093F\u0923\u093E\u092E\u094D \u0965",
        cite: "Bhagavad Gita 18.5",
      },
      {
        type: "p",
        text: "Meaning: Yajña (spiritual pursuits), charity (dāna), and austerity (tapa) should not be abandoned; they must indeed be performed, for sacrifice, charity, and austerity are purifying for the wise.",
      },
      {
        type: "p",
        text: "It must be understood that the purpose of charity is not merely to help others. One of its deeper purposes is to purify one\u2019s own mind and heart. Until the mind becomes pure, true realization of God and liberation (moksha) remain difficult to attain. In the Ramcharitmanas, Lord Rama says:",
      },
      {
        type: "quote",
        text: "Only the person of pure mind attains Me; deceit, hypocrisy, and crookedness do not please Me.",
        cite: "Ramcharitmanas",
      },
      {
        type: "p",
        text: "If we wish to move toward the \u201Cpurification of emotions\u201D (bh\u0101va-sa\u1E41\u015Buddhi) and \u201Cpurity of inner being\u201D (sattva-sa\u1E41\u015Buddhi) described in the Gita, then charity becomes an extremely important means. It prevents a person from remaining confined to selfishness and gradually leads him toward selflessness and higher welfare.",
      },
      {
        type: "h",
        text: "How much should one donate?",
      },
      {
        type: "p",
        text: "In Islam, the institution of zakat generally prescribes donating around two-and-a-half percent of one\u2019s movable and immovable wealth. In many Christian traditions, there is also the practice of giving approximately ten percent of one\u2019s income as a \u201Ctithe.\u201D In Sanatan Dharma, no single universal percentage for charity has been prescribed, yet charity has always been regarded as an extremely important religious and moral duty.",
      },
      {
        type: "p",
        text: "BrahmBodhi has seen many people who donate a very large portion of their income. One acquaintance of his receives a monthly pension of about one lakh rupees, out of which he distributes medicines worth nearly fifty thousand rupees among people living in slums. His reasoning is that two individuals (husband and wife) do not require more than the remaining amount for a simple life.",
      },
      {
        type: "p",
        text: "However, everyone\u2019s financial condition is not the same. Therefore, each person should donate according to his circumstances, while taking into account family responsibilities, children\u2019s education, health, and future needs. Still, if possible, it is highly desirable to cultivate the habit of donating at least ten percent of one\u2019s income. Such giving not only benefits society, but also helps make the human heart and conscience more pure and elevated.",
      },
    ],
  },
  {
    id: "how-to-overcome-acute-despondency",
    question:
      "How to overcome acute despondency — just as Arjuna did on the battlefield?",
    preview:
      "Just as Arjuna's despondency made him cast aside his bow, we too sometimes become overwhelmed by deep sorrow. The Gita's wisdom builds an armor of detachment, equanimity, and knowledge that protects the mind from despair.",
    image: {
      en: "qa-acute-despondency-en.jpeg",
      hi: "qa-acute-despondency-hi.jpeg",
      alt: { en: "How to overcome acute despondency", hi: "गहन विषाद से मुक्ति कैसे मिले?" },
    },
    answer: [
      {
        type: "p",
        text: "Your question has three parts. The first part is not really a question, but rather an observation or statement. You have said that in a state of despair Arjuna laid down his bow, declaring, \"I shall not fight,\" and sat down, while no reasoning seemed capable of bringing him out of that depression.",
      },
      {
        type: "p",
        text: "The second part is your actual question: Sometimes such deep sorrow and despondency fill the mind that no motivation, no reasoning, and no effort seem able to remove it. At such a time, what should we do so that the mind may emerge from that dreadful psychological condition?",
      },
      {
        type: "p",
        text: "The third question is this: how can the soul, bound by the deluding power of material nature, become free from bodily bondage and once again guide \"it\" toward the right direction?",
      },
      { type: "h", text: "Part One: Arjuna's Liberation from Despair" },
      {
        type: "p",
        text: "Arjuna certainly fell into despair, but he also emerged completely out of it. Through the teachings of Lord Krishna, he attained a knowledge that utterly destroyed his despondency. Toward the end of the Gita, this is clearly stated:",
      },
      {
        type: "quote",
        text: "Naṣṭo mohaḥ smṛtir labdhā tvat-prasādān mayācyuta;\nSthito'smi gata-sandehaḥ kariṣye vacanaṁ tava.",
        cite: "Bhagavad Gita 18.73",
      },
      {
        type: "p",
        text: "Meaning: \"O Achyuta! By Your grace my delusion has been destroyed, my memory has been restored, I now stand free from doubt, and I shall act according to Your word.\"",
      },
      {
        type: "p",
        text: "This itself contains the answer to your question. Just as Arjuna became free from despair through the wisdom of the Gita, so too can any human being free himself from despondency by listening to, understanding, and assimilating the teachings of the Bhagavad Gita. This freedom is not merely a temporary relief from one isolated sorrow. Gradually, it generates within a person such mental and spiritual strength that he begins to rise above all forms of despair in life.",
      },
      {
        type: "p",
        text: "That is why the wisdom of the Gita is not merely something to be read, but something to be deeply internalized. Read the Gita daily. Reflect upon its meaning. Slowly you will experience that your mind begins to move beyond sorrow and wander in inner spiritual bliss.",
      },
      { type: "h", text: "Part Two: The Soul, the Subtle Body, and the Source of Despair" },
      {
        type: "p",
        text: "It is important to understand that the soul itself does not actively \"lead\" the mind anywhere. The soul is fundamentally a witness. The active elements are the mind, intellect, and ego. These think, decide, desire, and experience pleasure and pain.",
      },
      {
        type: "p",
        text: "Together, the mind, intellect, and ego constitute the subtle body. All three belong to material nature. In modern language, they form what may be called our \"empirical self\" or psychological personality.",
      },
      { type: "p", text: "The soul itself neither thinks, nor acts, nor experiences pleasure and pain. In the Gita, Lord Krishna says:" },
      {
        type: "quote",
        text: "Prakṛiteḥ kriyamāṇāni guṇaiḥ karmāṇi sarvaśaḥ;\nAhaṅkāra-vimūḍhātmā kartāham iti manyate.",
        cite: "Bhagavad Gita 3.27",
      },
      {
        type: "p",
        text: "Meaning: \"All actions are performed by the qualities of material nature, but one whose mind is deluded by ego imagines himself to be the doer.\"",
      },
      {
        type: "p",
        text: "Hence, if despair is to be destroyed, its treatment must also occur at the level of mind, intellect, and ego. This is precisely what the Bhagavad Gita does. It reconstructs our consciousness. It reorganizes our mental structure.",
      },
      {
        type: "p",
        text: "Gradually, the wisdom of the Gita builds within a person an armor against despair. That armor consists of:",
      },
      {
        type: "ul",
        items: [
          "The armor of detachment",
          "The armor of equanimity",
          "The armor of wisdom",
        ],
      },
      {
        type: "p",
        text: "Then, when the arrows of sorrow, insult, loss, fear, and failure strike the mind, they collide with this armor of knowledge and slide away harmlessly. The Gita itself calls this equanimity Yoga:",
      },
      {
        type: "quote",
        text: "Samatvaṁ yoga ucyate.",
        cite: "Bhagavad Gita 2.48",
      },
      {
        type: "p",
        text: "Therefore, daily study of the Gita is like adding one more layer to this protective armor every day. Slowly, the armor becomes so strong that the individual becomes inwardly secure. Then he may continue to live amidst sorrows, yet he no longer remains sorrow-stricken.",
      },
      { type: "h", text: "Part Three: Moksha — Liberation" },
      {
        type: "p",
        text: "Perhaps unintentionally, you touched upon a very profound spiritual truth when you spoke of the soul becoming free from bodily bondage. This is what is called Moksha, liberation.",
      },
      {
        type: "p",
        text: "When the soul becomes free not only from the gross physical body but also from the subtle body, namely the mind, intellect, and ego, then it abides in its original nature and attains the divine abode of God, the very realm from which it once came before becoming entangled in the cycle of rebirth within this world.",
      },
      {
        type: "p",
        text: "The Bhagavad Gita also imparts the knowledge of this path of liberation and teaches by what means one may transcend the cycle of birth and death. However, that perhaps was not the principal subject of your question.",
      },
    ],
    hi: {
      question:
        "गहन विषाद से मुक्ति कैसे मिले — जैसे अर्जुन का विषाद योग ने उसे धनुष रखकर बैठा दिया?",
      preview:
        "जैसे अर्जुन का विषाद योग ने उसे धनुष रखकर बैठा दिया, वैसे ही हमें भी कभी ऐसा विषाद भर जाता है। गीता का ज्ञान मनुष्य के भीतर अनासक्ति, समत्व और ज्ञान का कवच निर्मित करता है।",
      answer: [
        {
          type: "p",
          text: "आपके प्रश्न के तीन खंड हैं। पहला खंड वास्तव में प्रश्न नहीं, बल्कि एक विचार या कथन है। आपने कहा है कि विषाद की अवस्था में अर्जुन ने यह कहकर कि \"मैं युद्ध नहीं करूँगा\", अपना धनुष भूमि पर रख दिया और बैठ गया, तथा कोई भी कारण उसे उस डिप्रेशन से बाहर नहीं निकाल सका।",
        },
        {
          type: "p",
          text: "दूसरा खंड आपका वास्तविक प्रश्न है : कभी-कभी मन में ऐसा विषाद भर जाता है कि कोई प्रेरणा, कोई तर्क, कोई प्रयास उसे दूर नहीं कर पाता। उस समय हमें क्या करना चाहिए जिससे मन उस भयानक मनःस्थिति से बाहर निकल आए?",
        },
        {
          type: "p",
          text: "तीसरा प्रश्न यह है कि प्रकृति की माया की शक्ति से बँधी हुई आत्मा शरीर के बंधन से मुक्त होकर स्वतंत्र बने और पुनः \"उसे\" सही दिशा में ले जाए।",
        },
        { type: "h", text: "भाग एक : अर्जुन का विषाद-मुक्ति" },
        {
          type: "p",
          text: "अर्जुन विषाद में अवश्य आ गया था, किंतु वह उस विषाद से पूर्णतः बाहर भी निकल गया। भगवान श्रीकृष्ण के उपदेशों से उसे ऐसा ज्ञान प्राप्त हुआ जिसने उसके विषाद का पूर्ण अंत कर दिया। गीता के अंत में यह बात स्पष्ट रूप से कही भी गई है :",
        },
        {
          type: "quote",
          text: "नष्टो मोहः स्मृतिर्लब्धा त्वत्प्रसादान्मयाच्युत ।\nस्थितोऽस्मि गतसन्देहः करिष्ये वचनं तव ॥",
          cite: "भगवद्गीता 18.73",
        },
        {
          type: "p",
          text: "अर्थात् : \"हे अच्युत! आपका अनुग्रह प्राप्त होने से मेरा मोह नष्ट हो गया है, मेरी स्मृति लौट आई है, मैं अब संशयरहित होकर स्थित हूँ और आपके वचनों का पालन करूँगा।\"",
        },
        {
          type: "p",
          text: "यही आपके प्रश्न का भी उत्तर है। जिस प्रकार अर्जुन गीता के ज्ञान से विषादमुक्त हुआ, उसी प्रकार कोई भी मनुष्य गीता के वचनों को सुनकर, समझकर और आत्मसात करके विषाद से मुक्त हो सकता है। और यह मुक्ति केवल किसी एक दुःख से क्षणिक राहत नहीं देती, बल्कि धीरे-धीरे मनुष्य के भीतर ऐसी मानसिक और आध्यात्मिक शक्ति उत्पन्न करती है कि वह जीवन के समस्त विषादों के ऊपर उठने लगता है।",
        },
        {
          type: "p",
          text: "इसीलिए गीता का ज्ञान केवल पढ़ने की वस्तु नहीं, बल्कि हृदयंगम करने की वस्तु है। गीता को प्रतिदिन पढ़िए, उसके अर्थ पर मनन कीजिए। धीरे-धीरे आप अनुभव करेंगे कि आपका मन विषादों से मुक्त होकर आत्मानंद में विचरण करने लगा है।",
        },
        { type: "h", text: "भाग दो : आत्मा, सूक्ष्म शरीर और विषाद का स्रोत" },
        {
          type: "p",
          text: "यह समझना आवश्यक है कि आत्मा स्वयं मन को कहीं \"ले\" नहीं जाती। आत्मा मूलतः साक्षीस्वरूप है। सक्रिय तत्व मन, बुद्धि और अहंकार हैं। यही सोचते हैं, निर्णय लेते हैं, इच्छाएँ करते हैं, दुख-सुख अनुभव करते हैं।",
        },
        {
          type: "p",
          text: "मन, बुद्धि और अहंकार मिलकर सूक्ष्म शरीर का निर्माण करते हैं। ये तीनों प्रकृति के तत्व हैं। आधुनिक भाषा में कहें तो यही हमारा \"empirical self\" या व्यवहारिक व्यक्तित्व बनाते हैं।",
        },
        { type: "p", text: "आत्मा स्वयं न सोचती है, न कर्म करती है, न दुख-सुख भोगती है। गीता में भगवान कहते हैं :" },
        {
          type: "quote",
          text: "प्रकृतेः क्रियमाणानि गुणैः कर्माणि सर्वशः ।\nअहङ्कारविमूढात्मा कर्ताहमिति मन्यते ॥",
          cite: "भगवद्गीता 3.27",
        },
        {
          type: "p",
          text: "अर्थात् : \"सारे कर्म प्रकृति के गुणों द्वारा संपन्न होते हैं, किंतु अहंकार से मोहित मनुष्य स्वयं को कर्ता मान बैठता है।\"",
        },
        {
          type: "p",
          text: "अतः यदि विषाद को नष्ट करना है, तो उसका उपचार भी मन, बुद्धि और अहंकार के स्तर पर ही करना होगा। यही कार्य भगवद्गीता करती है। वह हमारे चित्त का पुनर्निर्माण करती है। धीरे-धीरे गीता का ज्ञान मनुष्य के भीतर एक विषाद-रोधी कवच निर्मित करता है :",
        },
        {
          type: "ul",
          items: [
            "अनासक्ति का कवच",
            "समत्व का कवच",
            "ज्ञान का कवच",
          ],
        },
        {
          type: "p",
          text: "फिर जीवन के दुःख, अपमान, हानि, भय और असफलताओं के बाण जब उस मन पर आघात करते हैं, तो वे इस ज्ञान-कवच से टकराकर टूट जाते हैं। गीता स्वयं इसी समत्व को योग कहती है :",
        },
        {
          type: "quote",
          text: "समत्वं योग उच्यते",
          cite: "भगवद्गीता 2.48",
        },
        {
          type: "p",
          text: "अतः प्रतिदिन गीता का अध्ययन ऐसा है मानो प्रतिदिन इस कवच की एक नई परत अपने ऊपर चढ़ाना। धीरे-धीरे यह कवच इतना सुदृढ़ हो जाता है कि मनुष्य भीतर से सुरक्षित हो जाता है। तब वह विषादों के बीच रहते हुए भी विषादग्रस्त नहीं रहता।",
        },
        { type: "h", text: "भाग तीन : मोक्ष — मुक्ति" },
        {
          type: "p",
          text: "आपने अनायास ही एक अत्यंत गहरे आध्यात्मिक सत्य को छू लिया। आपने कहा कि आत्मा शरीर के बंधन से निकलकर स्वतंत्र हो जाए। वास्तव में इसी को मोक्ष कहते हैं।",
        },
        {
          type: "p",
          text: "जब आत्मा केवल स्थूल शरीर से ही नहीं, बल्कि सूक्ष्म शरीर अर्थात् मन, बुद्धि और अहंकार से भी मुक्त हो जाती है, तब वह अपने मूल स्वरूप में स्थित होकर परमात्मा के धाम को प्राप्त होती है।",
        },
        {
          type: "p",
          text: "भगवद्गीता इसी मोक्षमार्ग का भी ज्ञान देती है कि मनुष्य किन उपायों से जन्म-मृत्यु के चक्र से ऊपर उठ सकता है। किंतु संभवतः वह आपके प्रश्न का मुख्य विषय नहीं था।",
        },
      ],
    },
  },
  {
    id: "miracle-or-mind-power",
    question: "Miracle or mind power — what did BrahmBodhi personally witness?",
    preview:
      "Do miracles really happen, or are they stories we choose to believe? In this video, BrahmBodhi shares a real-life experience where thoughts were known even before they were spoken — an event that logic struggles to explain.",
    answer: [
      {
        type: "p",
        text: "Do miracles really happen \u2014 or are they just stories we choose to believe?",
      },
      {
        type: "p",
        text: "Many people dismiss such events simply because they have never experienced them. But what happens when something occurs that logic struggles to explain?",
      },
      {
        type: "p",
        text: "In this video, BrahmBodhi shares a real-life experience where thoughts were known even before they were spoken. Is it coincidence, mind power, or something deeper? What you are about to hear might challenge everything you believe about reality.",
      },
      {
        type: "video",
        videoId: "i1Y2ZyJlxk0",
        title: "Miracle or Mind Power? What I Personally Witnessed!",
        caption: "Watch BrahmBodhi share the experience in his own words",
      },
    ],
  },
  {
    id: "one-god-or-many-deities",
    coverImage: "qa-one-god-or-many.png",
    question:
      "Should one worship One God or many deities?",
    preview:
      "According to the Gita, God is One alone. Deities grant temporary results, but exclusive devotion to the Supreme Lord is the path to moksha. Respect all deities, but make the Supreme your final refuge.",
    answer: [
      {
        type: "p",
        text: "This is one of the greatest confusions among followers of Sanatan Dharma. For this reason, many scholars describe Hinduism as a \"polytheistic\" religion, where many gods and deities are worshipped.",
      },
      {
        type: "p",
        text: "Therefore, it is extremely important to resolve this question properly.",
      },
      {
        type: "p",
        text: "You know that Sanatan Dharma has many scriptures, and they often speak in different voices. However, if we must arrive at a final conclusion, then it is only proper to give primary importance to that scripture which is not merely the voice of a sage, saint, or philosopher, but the direct voice of God Himself. For while the knowledge of saints and sages may be profound, it can still be limited, whereas God is omniscient.",
      },
      {
        type: "p",
        text: "Such a scripture is the Bhagavad Gita. It should also be remembered that not every verse of the Gita is spoken directly by God. Only those verses spoken by Lord Krishna Himself may be regarded as the direct speech of the Divine.",
      },
      {
        type: "p",
        text: "According to the Gita, God is One alone. In His essential nature, He is the unmanifest, formless, attributeless Brahman. Yet, when creation manifests, that same Supreme Reality reveals Himself in personal form as Narayana or Vishnu. At times, He also incarnates in human form, such as Sri Rama and Sri Krishna.",
      },
      {
        type: "p",
        text: "Therefore, the unmanifest Brahman, Lord Vishnu, and the incarnations Sri Rama and Sri Krishna are not separate realities. They are different manifestations of the same Supreme Truth.",
      },
      { type: "h", text: "Should one not worship any other deity?" },
      {
        type: "p",
        text: "On this subject, the Gita is very clear. Lord Krishna says that those who seek fulfillment of worldly desires worship various deities, because such deities grant material results quickly:",
      },
      {
        type: "quote",
        text: "Kāmais tais tair hṛta-jñānāḥ prapadyante 'nya-devatāḥ,\ntaṁ taṁ niyamam āsthāya prakṛtyā niyatāḥ svayā.",
        cite: "Bhagavad Gita 7.20",
      },
      { type: "p", text: "And further He says:" },
      {
        type: "quote",
        text: "Antavat tu phalaṁ teṣāṁ tad bhavaty alpa-medhasām,\ndevān deva-yajo yānti mad-bhaktā yānti mām api.",
        cite: "Bhagavad Gita 7.23",
      },
      {
        type: "p",
        text: "That is, the fruits obtained through the worship of deities are temporary and perishable. The worshippers of deities attain the worlds of those deities, whereas My devotees attain Me.",
      },
      {
        type: "p",
        text: "The Lord clarifies the same point elsewhere:",
      },
      {
        type: "quote",
        text: "Kāṅkṣantaḥ karmaṇāṁ siddhiṁ yajanta iha devatāḥ,\nkṣipraṁ hi mānuṣe loke siddhir bhavati karma-jā.",
        cite: "Bhagavad Gita 4.12",
      },
      {
        type: "p",
        text: "Meaning: those who desire success in worldly actions worship the deities, because material success comes quickly in the human world through such worship.",
      },
      {
        type: "p",
        text: "The implication is also this: deities often grant the fulfillment of desires without necessarily judging whether those desires will ultimately benefit or harm the devotee. But God sees with a far wider vision. He grants only that which is ultimately beneficial for both the individual and the world.",
      },
      { type: "h", text: "Why worship God instead of deities?" },
      {
        type: "p",
        text: "The answer is that all worldly pleasures are temporary. Eternal and everlasting happiness comes only through moksha, liberation from the cycle of rebirth. Lord Krishna says:",
      },
      {
        type: "quote",
        text: "Mām upetya punar janma duḥkhālayam aśāśvatam,\nnāpnuvanti mahātmānaḥ saṁsiddhiṁ paramāṁ gatāḥ.",
        cite: "Bhagavad Gita 8.15",
      },
      {
        type: "p",
        text: "Meaning: having attained Me, the great souls do not return again to this temporary world, which is a dwelling place of suffering.",
      },
      {
        type: "p",
        text: "When the soul attains God, it becomes free from rebirth and reaches the Supreme Abode:",
      },
      {
        type: "quote",
        text: "Yad gatvā na nivartante tad dhāma paramaṁ mama.",
        cite: "Bhagavad Gita 15.6",
      },
      { type: "h", text: "The necessity of exclusive devotion" },
      {
        type: "p",
        text: "Now the most important point is this: realization of God comes only through exclusive surrender. If the mind remains divided among many deities, then it cannot be called complete self-surrender. The Lord says:",
      },
      {
        type: "quote",
        text: "Ananyāś cintayanto māṁ ye janāḥ paryupāsate,\nteṣāṁ nityābhiyuktānāṁ yoga-kṣemaṁ vahāmy aham.",
        cite: "Bhagavad Gita 9.22",
      },
      {
        type: "p",
        text: "Meaning: those who worship Me alone with undivided devotion, I Myself take care of their welfare and needs.",
      },
      { type: "h", text: "The difference between reverence and surrender" },
      {
        type: "p",
        text: "Now you may ask: if exclusive devotion is supreme, then why does the Gita speak about honoring gods, teachers, scholars, and the learned?",
      },
      {
        type: "quote",
        text: "Deva-dvija-guru-prājña-pūjanaṁ śaucam ārjavam,\nbrahmacaryam ahiṁsā ca śārīraṁ tapa ucyate.",
        cite: "Bhagavad Gita 17.14",
      },
      {
        type: "p",
        text: "Here it is necessary to understand the distinction between \"pūjan\" and \"upāsanā.\" \"Pūjan\" means respect, honor, and reverence. \"Upāsanā\" means devotional self-surrender. One should certainly respect deities, teachers, scholars, and the wise. But one's complete inner surrender should belong only to the Supreme God.",
      },
      {
        type: "p",
        text: "Therefore, if according to tradition or social custom you respectfully bow before your family deity, village deity, Goddess Saraswati, or Goddess Durga, and offer flowers and leaves, there is no fault in it. It is an expression of reverence and cultural propriety.",
      },
      {
        type: "p",
        text: "However, to seek ultimate refuge in them, to make worldly demands from them, or to treat them as the highest spiritual destination, is not presented in the Gita as the supreme path.",
      },
      { type: "h", text: "An analogy to understand" },
      {
        type: "p",
        text: "A married man has a unique and exclusive loyalty toward his wife. This does not mean he insults or disrespects other women. He will still treat them respectfully and courteously. But emotional and marital surrender belongs only to his wife.",
      },
      {
        type: "p",
        text: "Similarly, once you have accepted God as your chosen Deity, whether in the form of Sri Rama, Sri Krishna, Lord Narayana, or the formless Brahman, then your complete inner surrender should belong to Him alone.",
      },
      {
        type: "p",
        text: "Respect other deities. Bow before them. Offer flowers if needed. But do not build relationships of desire and dependence upon them.",
      },
      {
        type: "p",
        text: "If you must pray to them, then pray like this: \"May I receive unwavering devotion toward my Lord.\" That is enough. The rest of your genuine needs will be taken care of by God Himself. That is His promise.",
      },
      { type: "h", text: "The message of the Gita" },
      {
        type: "p",
        text: "Ultimately, the message of the Gita is this: There is only one Supreme God. Exclusive devotion to Him is the path to liberation. Respect all deities, but make the Supreme Lord alone your final refuge.",
      },
    ],
    hi: {
      question:
        "एक की पूजा करें या अनेक देवताओं की?",
      preview:
        "गीता के अनुसार परमात्मा एक ही है। देवताओं की पूजा से नश्वर फल प्राप्त होते हैं, किंतु ईश्वर की अनन्य भक्ति ही मोक्ष का मार्ग है। अन्य देवताओं का सम्मान करें, किंतु अंतिम आश्रय केवल परमात्मा को बनाएँ।",
      answer: [
        {
          type: "p",
          text: "सनातन धर्म के अनुयायियों की सबसे बड़ी उलझनों में से एक यही है। इसी कारण अनेक विद्वान हिंदू धर्म को \"पॉलीथीस्टिक\" अर्थात् बहुदेववादी धर्म कहते हैं, जहाँ अनेक देवताओं की पूजा की जाती है।",
        },
        {
          type: "p",
          text: "इस प्रश्न का समाधान अत्यंत आवश्यक है।",
        },
        {
          type: "p",
          text: "आप जानते हैं कि सनातन धर्म में अनेक शास्त्र हैं और वे अनेक प्रकार की बातें करते हैं। किंतु यदि हमें अंतिम निर्णय करना हो, तो उचित यही होगा कि हम उस ग्रंथ को प्राथमिकता दें जो किसी ऋषि, संत या दार्शनिक की वाणी नहीं, बल्कि स्वयं भगवान की वाणी है। क्योंकि ऋषियों और संतों का ज्ञान महान होते हुए भी सीमित हो सकता है, जबकि ईश्वर सर्वज्ञ हैं।",
        },
        {
          type: "p",
          text: "ऐसा ग्रंथ है भगवद्गीता। ध्यान रहे कि गीता के सभी श्लोक भगवान के वचन नहीं हैं। केवल वे श्लोक जो श्रीकृष्ण ने कहे हैं, वही प्रत्यक्ष ईश्वर-वाणी माने जा सकते हैं।",
        },
        {
          type: "p",
          text: "गीता के अनुसार परमात्मा एक ही है। वे मूलतः अव्यक्त, निराकार और निर्गुण ब्रह्म हैं। किंतु सृष्टि की रचना करते समय वही परमात्मा साकार ईश्वर रूप में प्रकट होते हैं, जिन्हें हम नारायण या विष्णु कहते हैं। वही समय-समय पर मनुष्य रूप में अवतार भी ग्रहण करते हैं, जैसे श्रीराम और श्रीकृष्ण।",
        },
        {
          type: "p",
          text: "अतः अव्यक्त ब्रह्म, साकार भगवान विष्णु, तथा अवतार रूप श्रीराम और श्रीकृष्ण, ये अलग-अलग सत्ता नहीं हैं। ये एक ही परम सत्य के विविध प्राकट्य हैं।",
        },
        { type: "h", text: "क्या अन्य देवताओं की पूजा नहीं करनी चाहिए?" },
        {
          type: "p",
          text: "इस विषय में गीता का दृष्टिकोण अत्यंत स्पष्ट है। भगवान कहते हैं कि जो लोग सांसारिक कामनाओं की पूर्ति चाहते हैं, वे देवताओं की उपासना करते हैं, क्योंकि देवता शीघ्र फल प्रदान करते हैं :",
        },
        {
          type: "quote",
          text: "कामैस्तैस्तैर्हृतज्ञानाः प्रपद्यन्तेऽन्यदेवताः।\nतं तं नियममास्थाय प्रकृत्या नियताः स्वया॥",
          cite: "भगवद्गीता 7.20",
        },
        { type: "p", text: "और आगे भगवान कहते हैं :" },
        {
          type: "quote",
          text: "अन्तवत्तु फलं तेषां तद्भवत्यल्पमेधसाम्।\nदेवान्देवयजो यान्ति मद्भक्ता यान्ति मामपि॥",
          cite: "भगवद्गीता 7.23",
        },
        {
          type: "p",
          text: "अर्थात् देवताओं की पूजा से प्राप्त होने वाले फल नश्वर होते हैं। देवताओं के उपासक देवलोक को प्राप्त होते हैं, जबकि मेरे भक्त मुझे प्राप्त होते हैं।",
        },
        {
          type: "p",
          text: "इसी भाव को भगवान एक अन्य स्थान पर और भी स्पष्ट करते हैं :",
        },
        {
          type: "quote",
          text: "काङ्क्षन्तः कर्मणां सिद्धिं यजन्त इह देवताः।\nक्षिप्रं हि मानुषे लोके सिद्धिर्भवति कर्मजा॥",
          cite: "भगवद्गीता 4.12",
        },
        {
          type: "p",
          text: "अर्थात् जो लोग कर्मों की सिद्धि चाहते हैं, वे देवताओं की पूजा करते हैं, क्योंकि उनसे मनुष्यलोक में कर्मजन्य सिद्धि शीघ्र प्राप्त होती है।",
        },
        {
          type: "p",
          text: "इसका निहितार्थ यह भी है कि देवता प्रायः केवल कामना की पूर्ति करते हैं। वे यह आवश्यक नहीं देखते कि वह कामना अंततः आपके हित में है या अहित में। किंतु ईश्वर व्यापक दृष्टि से देखते हैं। वे वही देते हैं जो अंततः आपके और संसार के कल्याण में हो।",
        },
        { type: "h", text: "देवताओं के बजाय ईश्वर की उपासना क्यों?" },
        {
          type: "p",
          text: "उत्तर यह है कि संसार के सारे सुख अस्थायी हैं। स्थायी और शाश्वत सुख केवल मोक्ष से मिलता है। और मोक्ष का अर्थ है पुनर्जन्म के चक्र से मुक्ति। भगवान कहते हैं :",
        },
        {
          type: "quote",
          text: "मामुपेत्य पुनर्जन्म दुःखालयमशाश्वतम्।\nनाप्नुवन्ति महात्मानः संसिद्धिं परमां गताः॥",
          cite: "भगवद्गीता 8.15",
        },
        {
          type: "p",
          text: "अर्थात् मुझे प्राप्त होकर महात्मा पुनः इस दुःखरूप और अनित्य संसार में जन्म नहीं लेते।",
        },
        {
          type: "p",
          text: "जब आत्मा ईश्वर को प्राप्त कर लेती है, तब वह पुनर्जन्म से मुक्त होकर परम धाम को प्राप्त होती है :",
        },
        {
          type: "quote",
          text: "यद्गत्वा न निवर्तन्ते तद्धाम परमं मम॥",
          cite: "भगवद्गीता 15.6",
        },
        { type: "h", text: "अनन्य भक्ति की आवश्यकता" },
        {
          type: "p",
          text: "अब महत्वपूर्ण बात यह है कि ईश्वर-प्राप्ति केवल अनन्य समर्पण से होती है। यदि मन अनेक देवताओं में बँटा रहेगा, तो वह पूर्ण आत्मसमर्पण नहीं कहलाएगा। भगवान कहते हैं :",
        },
        {
          type: "quote",
          text: "अनन्याश्चिन्तयन्तो मां ये जनाः पर्युपासते।\nतेषां नित्याभियुक्तानां योगक्षेमं वहाम्यहम्॥",
          cite: "भगवद्गीता 9.22",
        },
        {
          type: "p",
          text: "अर्थात् जो लोग केवल मेरा ही चिंतन और उपासना करते हैं, उनके योगक्षेम का भार मैं स्वयं उठाता हूँ।",
        },
        { type: "h", text: "पूजन और उपासना में अंतर" },
        {
          type: "p",
          text: "अब आप पूछ सकते हैं : यदि एकनिष्ठ भक्ति ही सर्वोच्च है, तो फिर गीता में \"देव, द्विज, गुरु और प्राज्ञ\" के पूजन की बात क्यों कही गई?",
        },
        {
          type: "quote",
          text: "देवद्विजगुरुप्राज्ञपूजनं शौचमार्जवम्।\nब्रह्मचर्यमहिंसा च शारीरं तप उच्यते॥",
          cite: "भगवद्गीता 17.14",
        },
        {
          type: "p",
          text: "यहाँ \"पूजन\" और \"उपासना\" में अंतर समझना आवश्यक है। \"पूजन\" का अर्थ है आदर, सम्मान, सत्कार। \"उपासना\" का अर्थ है भक्ति-पूर्ण आत्मसमर्पण। देवताओं, गुरुजनों, विद्वानों और द्विजों का सम्मान अवश्य करना चाहिए। किंतु अपने हृदय का पूर्ण आत्मसमर्पण केवल परमेश्वर को करना चाहिए।",
        },
        {
          type: "p",
          text: "अतः यदि आप परंपरा या लोकाचार के अनुसार समयानुसार कुलदेवी, ग्रामदेवता, भगवती सरस्वती या दुर्गा देवी को प्रणाम करते हैं, पत्र-पुष्प अर्पित करते हैं, तो इसमें कोई दोष नहीं है। यह सम्मान और सांस्कृतिक मर्यादा का पालन है।",
        },
        {
          type: "p",
          text: "किन्तु उनसे सांसारिक याचनाएँ करना, उनसे जीवन का अंतिम आश्रय माँगना, या उन्हें ही परम लक्ष्य मान लेना, गीता के अनुसार सर्वोच्च मार्ग नहीं है।",
        },
        { type: "h", text: "एक उदाहरण से समझिए" },
        {
          type: "p",
          text: "एक विवाहित पुरुष अपनी पत्नी के प्रति जिस प्रकार की अनन्य निष्ठा रखता है, वैसी निष्ठा वह संसार की अन्य स्त्रियों के प्रति नहीं रख सकता। इसका अर्थ यह नहीं कि वह अन्य स्त्रियों का अपमान करे। वह उनका सम्मान करेगा, शिष्टाचार निभाएगा, किंतु भावनात्मक और दांपत्य-प्रकार का समर्पण केवल अपनी पत्नी के प्रति रखेगा।",
        },
        {
          type: "p",
          text: "इसी प्रकार, यदि आपने ईश्वर को अपना इष्ट मान लिया, चाहे श्रीराम के रूप में, श्रीकृष्ण के रूप में, भगवान नारायण के रूप में अथवा निराकार ब्रह्म के रूप में, तो आपके हृदय का पूर्ण आत्मसमर्पण उन्हीं के प्रति होना चाहिए।",
        },
        {
          type: "p",
          text: "अन्य देवताओं का आदर करें, प्रणाम करें, पत्र-पुष्प अर्पित करें, किंतु उनसे याचनाओं का संबंध न बनाएँ।",
        },
        {
          type: "p",
          text: "यदि प्रार्थना करनी ही हो, तो यह करें : \"हे देवता/देवी मेरे भीतर मेरे प्रभु के प्रति अनन्य भक्ति उत्पन्न कीजिए।\" बस। शेष आवश्यकताओं का भार भगवान स्वयं उठाएँगे। यही उनकी प्रतिज्ञा है।",
        },
        { type: "h", text: "गीता का संदेश" },
        {
          type: "p",
          text: "अंततः गीता का संदेश यही है : एक ही परमेश्वर है। उसी की अनन्य भक्ति मोक्ष का मार्ग है। अन्य देवताओं का सम्मान करें, किंतु अंतिम आश्रय केवल परमात्मा को बनाएँ।",
        },
      ],
    },
  },
  {
    id: "destroy-subtle-body-for-moksha",
    coverImage: "qa-destroy-subtle-body.png",
    question:
      "For moksha or liberation, how can the subtle body — the mind, intellect, and ego — be destroyed?",
    preview:
      "The mind, intellect, and ego are themselves elements of Prakriti, and the means to dissolve them are also found within Prakriti. Just as fire produced by the friction of two pieces of wood ultimately consumes the very wood that gave it birth, the fire of knowledge and devotion arising within the mind and intellect eventually burns away the entire subtle body — and the soul abides in its own pure, eternal nature.",
    answer: [
      {
        type: "p",
        text: "🙏 Om Hari Sharanam.",
      },
      {
        type: "p",
        text: "The mind, intellect, and ego — these three are themselves elements of material nature (Prakriti). And yet, the means for liberation from them are also found within Prakriti itself. The soul does not act; it simply remains the witness.",
      },
      {
        type: "p",
        text: "Lord Krishna clearly states:",
      },
      {
        type: "quote",
        text: "The Supreme Lord creates neither the sense of doership nor actions for the people, nor does He create the connection between actions and their fruits. All this is carried out by the inherent nature of Prakriti.",
        cite: "Bhagavad Gita 5.14",
      },
      {
        type: "p",
        text: "Thus, God neither creates our actions nor imposes their consequences upon us. These arise from the workings of material nature itself. Therefore, in the ordinary course of life, each human being is responsible for his own progress or decline, his own happiness or suffering, his own bondage or liberation.",
      },
      {
        type: "p",
        text: "Certainly, divine grace does occasionally descend upon a few rare seekers. However, even they generally become worthy recipients of such grace only after long periods of sattvic living, selfless service, spiritual discipline, and inner purification. Divine grace is therefore an exception to the general rule, not a negation of it.",
      },
      {
        type: "h",
        text: "The method taught at the close of Chapter 3",
      },
      {
        type: "p",
        text: "One may turn to the concluding verses of the third chapter of the Bhagavad Gita. There, Lord Krishna identifies lust and anger as humanity's great enemies and explains the method of overcoming them:",
      },
      {
        type: "quote",
        text: "The senses are said to be superior to the gross body; the mind is superior to the senses; the intellect is superior to the mind; and beyond the intellect is the Self.",
        cite: "Bhagavad Gita 3.42",
      },
      { type: "p", text: "He then declares:" },
      {
        type: "quote",
        text: "Thus, knowing the Self to be superior even to the intellect, steady the mind by the purified intellect and conquer, O mighty-armed Arjuna, this formidable enemy in the form of desire.",
        cite: "Bhagavad Gita 3.43",
      },
      {
        type: "p",
        text: "In other words, by realizing the Self — which transcends even the intellect — and by employing the purified intellect to discipline and stabilize the mind, one can overcome the seemingly unconquerable enemy called desire.",
      },
      {
        type: "h",
        text: "Kapila's teaching: fire that consumes its own wood",
      },
      {
        type: "p",
        text: "The same principle is explained in the Bhagavata Purana by the sage Kapila to his mother Devahuti. He teaches that just as fire produced by the friction of wood ultimately consumes and reduces that very wood to ashes, so too the fire of knowledge and devotion arising within Prakriti ultimately destroys the very bonds of Prakriti.",
      },
      {
        type: "p",
        text: "However, for fire to emerge, the wood must first be dry. If it is soaked with water, no flame will appear.",
      },
      {
        type: "p",
        text: "Similarly, when the waters of illusion, attachment, and ignorance dry up within the human heart, the fire of knowledge and devotion is ignited. This fire burns away the bonds of the subtle body — composed of the mind, intellect, and ego — and gradually leads the soul toward liberation.",
      },
      {
        type: "h",
        text: "The intellect refined by knowledge becomes the instrument",
      },
      {
        type: "p",
        text: "In this process, the intellect refined by spiritual knowledge plays a crucial role. First, it disciplines the mind and ego. Eventually, it transcends even its own limited ego-centred identity. In this way, one element of Prakriti becomes the instrument for destroying the other binding elements of Prakriti.",
      },
      {
        type: "p",
        text: "It is much like wood generating fire through friction, and that very fire ultimately consuming the wood itself. In the same way, the fire of knowledge and devotion arising within the mind and intellect eventually burns away the mind, intellect, ego, and all the bonds created by them — enabling the soul to realize its own pure and eternal nature.",
      },
    ],
    hi: {
      question:
        "मोक्ष के लिए सूक्ष्म शरीर — मन, बुद्धि और अहंकार — को कैसे नष्ट किया जाए?",
      preview:
        "मन, बुद्धि और अहंकार स्वयं प्रकृति के तत्व हैं, और इनसे मुक्ति के साधन भी प्रकृति के भीतर ही प्राप्त होते हैं। जैसे दो काठों की रगड़ से उत्पन्न अग्नि अंततः उन्हीं काठों को भस्म कर देती है, वैसे ही मन और बुद्धि के भीतर उत्पन्न ज्ञान-भक्ति की अग्नि सूक्ष्म शरीर के समस्त बंधनों को जला देती है, और आत्मा अपने मूल शुद्ध स्वरूप में स्थित हो जाती है।",
      answer: [
        {
          type: "p",
          text: "🙏 ॐ हरि शरणम्।",
        },
        {
          type: "p",
          text: "मन, बुद्धि और अहंकार — ये तीनों स्वयं प्रकृति के ही तत्व हैं। और इनसे मुक्ति के साधन भी प्रकृति के भीतर ही उपलब्ध हैं। आत्मा कुछ नहीं करती; वह केवल साक्षी रूप से स्थित रहती है।",
        },
        {
          type: "p",
          text: "भगवान श्रीकृष्ण स्पष्ट कहते हैं :",
        },
        {
          type: "quote",
          text: "न कर्तृत्वं न कर्माणि लोकस्य सृजति प्रभुः ।\nन कर्मफलसंयोगं स्वभावस्तु प्रवर्तते ॥",
          cite: "भगवद्गीता 5.14",
        },
        {
          type: "p",
          text: "अर्थात् : परमेश्वर न तो जीवों के कर्तृत्व की रचना करते हैं, न उनके कर्मों की, और न ही कर्मफल-संयोग की। यह सब प्रकृति के स्वभाव से ही प्रवृत्त होता है।",
        },
        {
          type: "p",
          text: "इस प्रकार, ईश्वर न तो हमारे कर्म रचते हैं, न उनके परिणाम हम पर थोपते हैं। यह सब प्रकृति की अंतर्निहित प्रक्रियाओं से चलता है। अतः जीवन की सामान्य धारा में प्रत्येक मनुष्य अपनी उन्नति या अवनति, सुख या दुःख, बंधन या मोक्ष — सबके लिए स्वयं ही उत्तरदायी है।",
        },
        {
          type: "p",
          text: "निःसंदेह, कभी-कभी कुछ विरले साधकों पर ईश्वर की कृपा भी अवतरित होती है। किंतु वे भी प्रायः दीर्घकालिक सात्त्विक जीवन, निष्काम सेवा, साधना और अंतःशुद्धि के पश्चात् ही उस कृपा के पात्र बनते हैं। ईश्वर-कृपा सामान्य नियम की निषेधक नहीं, बल्कि उसका अपवाद है।",
        },
        { type: "h", text: "गीता के तीसरे अध्याय के अंतिम श्लोकों की विधि" },
        {
          type: "p",
          text: "आप गीता के तीसरे अध्याय के अंतिम श्लोकों का स्मरण कीजिए। वहाँ भगवान श्रीकृष्ण काम और क्रोध को मनुष्य के महान शत्रु बताते हैं और उन्हें जीतने की विधि भी समझाते हैं :",
        },
        {
          type: "quote",
          text: "इन्द्रियाणि पराण्याहुरिन्द्रियेभ्यः परं मनः ।\nमनसस्तु परा बुद्धिर्यो बुद्धेः परतस्तु सः ॥",
          cite: "भगवद्गीता 3.42",
        },
        {
          type: "p",
          text: "अर्थात् : स्थूल शरीर से इंद्रियाँ श्रेष्ठ हैं, इंद्रियों से मन, मन से बुद्धि, और बुद्धि से भी परे है आत्मा।",
        },
        { type: "p", text: "इसके पश्चात् वे कहते हैं :" },
        {
          type: "quote",
          text: "एवं बुद्धेः परं बुद्ध्वा संस्तभ्यात्मानमात्मना ।\nजहि शत्रुं महाबाहो कामरूपं दुरासदम् ॥",
          cite: "भगवद्गीता 3.43",
        },
        {
          type: "p",
          text: "अर्थात् : इस प्रकार बुद्धि से भी परे आत्मा को जानकर, शुद्ध बुद्धि से मन को स्थिर करके, हे महाबाहो! इस दुर्जेय शत्रु — कामरूपी शत्रु — को जीत लो।",
        },
        {
          type: "p",
          text: "अर्थात् बुद्धि से भी श्रेष्ठ आत्मा का बोध करके, और उसी शुद्ध बुद्धि के माध्यम से मन को साधते हुए, मनुष्य उस अजेय-से दिखने वाले काम-शत्रु को परास्त कर सकता है।",
        },
        { type: "h", text: "कपिल का उपदेश : काठ ही काठ को भस्म कर देता है" },
        {
          type: "p",
          text: "यही सिद्धांत श्रीमद्भागवत में कपिल मुनि अपनी माता देवहूति को समझाते हैं। वे कहते हैं — जैसे काठों की रगड़ से उत्पन्न अग्नि अंततः उन्हीं काठों को भस्म कर देती है, उसी प्रकार प्रकृति के भीतर उत्पन्न ज्ञान और भक्ति की अग्नि अंततः प्रकृति के बंधनों को ही नष्ट कर देती है।",
        },
        {
          type: "p",
          text: "किंतु अग्नि के प्रकट होने के लिए काठ का सूखा होना आवश्यक है। यदि वह जल से भीगा हो, तो लौ उत्पन्न नहीं होगी।",
        },
        {
          type: "p",
          text: "ठीक उसी प्रकार, जब मनुष्य के हृदय में मोह, आसक्ति और अज्ञान के जल सूख जाते हैं, तभी ज्ञान और भक्ति की अग्नि प्रज्वलित होती है। यह अग्नि मन, बुद्धि और अहंकार से बने सूक्ष्म शरीर के बंधनों को जलाती है, और धीरे-धीरे आत्मा को मोक्ष की ओर ले जाती है।",
        },
        { type: "h", text: "ज्ञान से परिष्कृत बुद्धि ही साधन बनती है" },
        {
          type: "p",
          text: "इस प्रक्रिया में आध्यात्मिक ज्ञान से परिष्कृत बुद्धि की अत्यंत महत्त्वपूर्ण भूमिका होती है। पहले वह मन और अहंकार को साधती है। और अंततः वह स्वयं अपनी सीमित अहं-केंद्रित पहचान का भी अतिक्रमण कर जाती है। इस प्रकार प्रकृति का एक तत्व ही प्रकृति के अन्य बंधनकारी तत्वों के विनाश का साधन बन जाता है।",
        },
        {
          type: "p",
          text: "जैसे काठ रगड़कर अग्नि उत्पन्न करता है, और वही अग्नि अंततः काठ को भस्म कर देती है — उसी प्रकार मन और बुद्धि के भीतर उत्पन्न ज्ञान-भक्ति की अग्नि अंततः मन, बुद्धि, अहंकार और इनसे रचित सभी बंधनों को जला देती है। तब आत्मा अपने शुद्ध, सनातन स्वरूप का साक्षात्कार कर लेती है।",
        },
      ],
    },
  },
  {
    id: "world-yoga-day-yoga-vs-yogasana",
    coverImage: "qa-world-yoga-day-yoga-vs-yogasana.png",
    question:
      "World Yoga Day: A day of Yoga, or merely a day of Yogāsanas?",
    preview:
      "On International Yoga Day, the world performs āsanas — but is that truly Yoga? BrahmBodhi explains that yogāsana is only the first step described by Patanjali; the real Yoga, as Lord Krishna teaches in the Bhagavad Gita, is the art of acting without producing binding karma, so that one is freed from rebirth and attains liberation.",
    answer: [
      {
        type: "p",
        text: "Today is observed as \u201CYoga Day.\u201D Through the efforts of the present Government of India, International Yoga Day has come into being, and yoga is now being demonstrated and practiced in countries across the world. BrahmBodhi welcomes this global awakening, yet draws attention to a subtle but important point: in the form in which it is presently observed, it is not truly a Yoga Day, but rather a Yogāsana Day.",
      },
      {
        type: "h",
        text: "Yogāsana is only the first step",
      },
      {
        type: "p",
        text: "In the Yoga Sutras of Patanjali, yogāsana is only the first step toward Yoga. It prepares the body, makes it healthy and strong, and renders it suitable for prolonged meditation and samādhi. It is extremely beneficial for the physical health of all, and to that extent the present-day celebrations of Yoga Day do real good in the world.",
      },
      {
        type: "p",
        text: "But the practitioner is then expected to gradually understand what the next step is, if one truly wishes to attain Yoga. What is this Yoga toward which the first step of yogāsana leads? It is here that the Bhagavad Gita takes over from where the Yoga Sutras begin.",
      },
      {
        type: "h",
        text: "What Lord Krishna means by Yoga",
      },
      {
        type: "p",
        text: "Lord Krishna explains the meaning of Yoga in many ways in the Bhagavad Gita. One of the most well-known definitions is:",
      },
      {
        type: "quote",
        text: "Yogaḥ karmasu kauśalam.",
        cite: "Bhagavad Gita 2.50",
      },
      {
        type: "p",
        text: "\u201CYoga is skill in action.\u201D BrahmBodhi raises an obvious question : does this mean that if a person cooks food, he should cook it skillfully so that it turns out well? If an engineer constructs a building with great expertise, does that engineering become Yoga? Is this what \u201Cskill in action\u201D really means?",
      },
      {
        type: "p",
        text: "It is not. Performing any work skillfully is certainly a key to worldly success. The Lord Himself acknowledges this elsewhere in the Gita:",
      },
      {
        type: "quote",
        text: "Sve sve karmaṇy abhirataḥ saṁsiddhiṁ labhate naraḥ.",
        cite: "Bhagavad Gita 18.45",
      },
      {
        type: "p",
        text: "\u201CBy remaining devoted and diligent in one\u2019s own work, a person attains great success.\u201D That principle is true, but it is not the meaning of \u201CYogaḥ karmasu kauśalam.\u201D",
      },
      {
        type: "h",
        text: "The real skill : acting without binding consequences",
      },
      {
        type: "p",
        text: "What the Lord really means, BrahmBodhi explains, is something far deeper : how should actions be performed so that they do not produce binding consequences? The fruits of every action — good or bad — must eventually be experienced; and to experience them, the soul must take birth again and again. As long as karmic fruits remain unexperienced, liberation cannot be attained.",
      },
      {
        type: "p",
        text: "The Gita itself warns the seeker beforehand that rebirth is not something to be casually embraced:",
      },
      {
        type: "quote",
        text: "Punarjanma duḥkhālayam.",
        cite: "Bhagavad Gita 8.15",
      },
      {
        type: "p",
        text: "\u201CRebirth is an abode of suffering.\u201D Once birth is taken, sorrow inevitably follows, and liberation remains unattained — for liberation means freedom from the very cycle of birth and death.",
      },
      {
        type: "h",
        text: "Both good and bad karma keep us bound",
      },
      {
        type: "p",
        text: "Consider an example. If a person performs many acts of charity and service, good karmic fruits — puṇya — are produced. Some of those fruits may be enjoyed in this life, while those that remain must be experienced in future births. To enjoy those remaining good results, the soul must be born again; and once birth is taken, suffering inevitably follows.",
      },
      {
        type: "p",
        text: "Likewise, if a person has caused suffering, harmed others, or committed wrongful acts, many negative consequences — pāpa — are created. Some may be experienced in this very life, while the remainder are carried forward into future births.",
      },
      {
        type: "p",
        text: "Thus, whether one performs virtuous actions or sinful actions, in both cases liberation is obstructed. Mere good behaviour, by itself, does not free the soul; it only ensures a better next life within the cycle of saṁsāra.",
      },
      {
        type: "h",
        text: "The path of Yoga as the Gita teaches it",
      },
      {
        type: "p",
        text: "True Yoga, in the Gita\u2019s sense, is the art of acting in such a way that no binding karma is generated at all. BrahmBodhi summarises this path in five inseparable steps :",
      },
      {
        type: "ul",
        items: [
          "Do your duty (karma) — never abandon prescribed action.",
          "Do it selflessly (niṣkāma bhāva) — without craving for personal reward.",
          "Without attachment (anāsakti) — neither to the work nor to its fruits.",
          "Offer it to the Lord (īśvara-arpaṇa) — every action surrendered to Him.",
          "No binding results (no karma-bandha) — and therefore freedom from rebirth.",
        ],
      },
      {
        type: "p",
        text: "This is what the Lord describes as the real skill of Yoga — the skill by which one acts fully and rightly in the world, and yet remains untouched by its karmic residue. When bhakti, jñāna, karma and dhyāna are all transformed into this offering to the Lord, they converge into Yoga and lead the soul to union with God and liberation.",
      },
      {
        type: "h",
        text: "Yogāsana is the first step; Yoga is the ultimate goal",
      },
      {
        type: "p",
        text: "BrahmBodhi\u2019s appeal on this World Yoga Day is therefore simple. By all means celebrate yogāsana — prepare the body, cultivate physical health and discipline. But do not stop there. Move from yogāsana to Yoga as the Bhagavad Gita teaches it : from physical posture to inner steadiness; from skillful work to surrendered work; from bondage through karma to freedom in the Lord.",
      },
      {
        type: "p",
        text: "Yogāsana prepares the body. Yoga, in the Gita\u2019s sense, frees the soul. Hari Śaraṇam.",
      },
    ],
    hi: {
      question:
        "विश्व योग दिवस : क्या यह सचमुच योग का दिन है, या केवल योगासन का?",
      preview:
        "अंतर्राष्ट्रीय योग दिवस पर सारा संसार आसन करता है — पर क्या यही योग है? ब्रह्मबोधि कहते हैं कि पतंजलि के अनुसार योगासन तो योग का केवल पहला सोपान है। वास्तविक योग वही है जो भगवद्गीता में श्रीकृष्ण ने बताया है — ऐसा कर्म जो कोई बंधन उत्पन्न न करे, और इसी से जीव जन्म-मृत्यु के चक्र से मुक्त होकर मोक्ष को प्राप्त होता है।",
      answer: [
        {
          type: "p",
          text: "आज \u201Cयोग दिवस\u201D के रूप में मनाया जा रहा है। वर्तमान भारत सरकार के प्रयासों से अंतर्राष्ट्रीय योग दिवस का स्वरूप उभरा है और आज विश्व के अनेक देशों में योग का प्रदर्शन और अभ्यास हो रहा है। ब्रह्मबोधि इस वैश्विक जागरण का स्वागत करते हैं, परंतु एक सूक्ष्म किंतु महत्वपूर्ण बात की ओर ध्यान आकर्षित करते हैं — जिस रूप में आज यह दिवस मनाया जा रहा है, वह वस्तुतः \u201Cयोग दिवस\u201D नहीं, अपितु \u201Cयोगासन दिवस\u201D है।",
        },
        { type: "h", text: "योगासन तो केवल पहला सोपान है" },
        {
          type: "p",
          text: "पतंजलि के योगसूत्र में योगासन योग का केवल पहला सोपान है। यह शरीर को तैयार करता है, उसे स्वस्थ और सशक्त बनाता है, तथा दीर्घकालीन ध्यान और समाधि के योग्य बनाता है। यह सबके शारीरिक स्वास्थ्य के लिए अत्यंत उपकारी है, और इस दृष्टि से वर्तमान योग दिवस के आयोजन संसार का वास्तविक हित कर रहे हैं।",
        },
        {
          type: "p",
          text: "किंतु साधक से यह अपेक्षा है कि वह क्रमशः समझे कि यदि सचमुच योग को प्राप्त करना है, तो अगला चरण क्या है। यह \u201Cयोग\u201D क्या है, जिसकी ओर योगासन का पहला कदम ले जाता है? यहीं भगवद्गीता उस यात्रा को आगे बढ़ाती है, जहाँ योगसूत्र का आरम्भ हुआ था।",
        },
        { type: "h", text: "श्रीकृष्ण किसे \u201Cयोग\u201D कहते हैं" },
        {
          type: "p",
          text: "भगवद्गीता में भगवान् श्रीकृष्ण योग की व्याख्या अनेक प्रकार से करते हैं। सबसे प्रसिद्ध परिभाषाओं में एक है :",
        },
        {
          type: "quote",
          text: "योगः कर्मसु कौशलम् ।",
          cite: "भगवद्गीता 2.50",
        },
        {
          type: "p",
          text: "\u201Cयोग कर्मों में कुशलता है।\u201D ब्रह्मबोधि एक सीधा प्रश्न उठाते हैं — क्या इसका अर्थ यह है कि यदि कोई व्यक्ति भोजन बनाता है तो उसे कुशलता से बनाए, ताकि भोजन स्वादिष्ट हो? यदि कोई अभियंता अत्यंत कुशलता से भवन निर्मित करता है, तो क्या वह अभियांत्रिकी ही योग बन गई? क्या \u201Cकर्मों में कुशलता\u201D का यही अर्थ है?",
        },
        {
          type: "p",
          text: "नहीं। किसी भी कार्य को कुशलता से करना निःसंदेह सांसारिक सफलता की कुंजी है। भगवान् ने स्वयं गीता में अन्यत्र भी यही कहा है :",
        },
        {
          type: "quote",
          text: "स्वे स्वे कर्मण्यभिरतः संसिद्धिं लभते नरः ।",
          cite: "भगवद्गीता 18.45",
        },
        {
          type: "p",
          text: "\u201Cअपने-अपने कर्म में निरत रहकर मनुष्य परम सिद्धि को प्राप्त करता है।\u201D यह सिद्धांत सत्य है, परंतु \u201Cयोगः कर्मसु कौशलम्\u201D का यह अर्थ नहीं है।",
        },
        { type: "h", text: "वास्तविक कौशल : ऐसा कर्म जो बंधन न रचे" },
        {
          type: "p",
          text: "ब्रह्मबोधि स्पष्ट करते हैं कि भगवान् का वास्तविक अभिप्राय इससे कहीं गहन है — कर्म को इस प्रकार कैसे किया जाए कि उससे कोई बंधनकारी फल उत्पन्न ही न हो? प्रत्येक कर्म का फल — शुभ अथवा अशुभ — अंततः भोगना ही पड़ता है; और उसे भोगने के लिए जीव को बार-बार जन्म लेना पड़ता है। जब तक कर्म-फल शेष रहते हैं, मुक्ति संभव नहीं।",
        },
        {
          type: "p",
          text: "गीता स्वयं साधक को पहले ही चेताती है कि पुनर्जन्म को सहज समझकर स्वीकार न करे :",
        },
        {
          type: "quote",
          text: "पुनर्जन्म दुःखालयम् ।",
          cite: "भगवद्गीता 8.15",
        },
        {
          type: "p",
          text: "\u201Cपुनर्जन्म दुःख का आलय है।\u201D एक बार जन्म लेने पर दुःख अनिवार्य है, और मोक्ष अप्राप्त रह जाता है — क्योंकि मोक्ष का अर्थ ही है जन्म-मृत्यु के चक्र से मुक्ति।",
        },
        { type: "h", text: "शुभ-अशुभ दोनों कर्म बाँधते हैं" },
        {
          type: "p",
          text: "एक उदाहरण लें। यदि कोई व्यक्ति अनेक दान-पुण्य और सेवा-कार्य करता है, तो पुण्यरूपी अच्छे कर्मफल उत्पन्न होते हैं। उनमें से कुछ इसी जन्म में भोग लिए जाते हैं, और शेष को भोगने के लिए पुनः जन्म लेना पड़ता है; और जन्म लेते ही दुःख अवश्यंभावी है।",
        },
        {
          type: "p",
          text: "इसी प्रकार, यदि किसी ने अन्य को कष्ट दिया, अनुचित आचरण किया या पाप किए हों, तो अनेक नकारात्मक फल उत्पन्न होते हैं। उनमें से कुछ इसी जीवन में भोगने पड़ते हैं, और शेष भावी जन्मों में।",
        },
        {
          type: "p",
          text: "अतः चाहे शुभ कर्म हों या अशुभ — दोनों ही स्थितियों में मोक्ष अवरुद्ध हो जाता है। केवल अच्छा आचरण अपने आप में जीव को मुक्त नहीं करता; वह तो संसार के चक्र के भीतर ही अगला जन्म अधिक श्रेष्ठ बनाता है।",
        },
        { type: "h", text: "गीता का योग-मार्ग" },
        {
          type: "p",
          text: "गीता की दृष्टि में सच्चा योग वह कला है, जिसमें कर्म तो पूर्णतः किया जाता है, परंतु कोई बंधनकारी कर्मफल उत्पन्न नहीं होता। ब्रह्मबोधि इस मार्ग को पाँच अविभाज्य सूत्रों में संकलित करते हैं :",
        },
        {
          type: "ul",
          items: [
            "कर्तव्य का पालन करो (कर्म) — विहित कर्म का त्याग कभी न करो।",
            "उसे निष्काम भाव से करो — किसी फल की कामना के बिना।",
            "अनासक्त रहकर करो — न कर्म में आसक्ति, न उसके फल में।",
            "उसे ईश्वर को अर्पित करो (ईश्वर-अर्पण) — प्रत्येक कर्म प्रभु को समर्पित।",
            "कोई बंधनकारी फल न रहे (न कर्मबंध) — और इस प्रकार पुनर्जन्म से मुक्ति।",
          ],
        },
        {
          type: "p",
          text: "यही वह \u201Cकर्मों की कुशलता\u201D है, जिसे भगवान् ने योग कहा है — वह कौशल जिससे मनुष्य संसार में पूर्ण रूप से और उचित प्रकार से कर्म तो करता है, किंतु उसके कर्म-संस्कार उसे बाँधते नहीं। जब भक्ति, ज्ञान, कर्म और ध्यान — चारों ईश्वर को समर्पित होकर योग में रूपांतरित होते हैं, तभी जीव ईश्वर से एकता और मोक्ष को प्राप्त होता है।",
        },
        { type: "h", text: "योगासन प्रथम सोपान है; योग परम लक्ष्य है" },
        {
          type: "p",
          text: "इस विश्व योग दिवस पर ब्रह्मबोधि का निवेदन सरल है। योगासन अवश्य करें — शरीर को तैयार करें, शारीरिक स्वास्थ्य और अनुशासन का विकास करें। परंतु वहीं रुक न जाएँ। योगासन से आगे बढ़कर उस \u201Cयोग\u201D की ओर बढ़ें, जिसका उपदेश भगवद्गीता में है — शारीरिक आसन से आंतरिक स्थिरता की ओर; कुशल कर्म से समर्पित कर्म की ओर; कर्म के बंधन से ईश्वर में मुक्ति की ओर।",
        },
        {
          type: "p",
          text: "योगासन शरीर को तैयार करता है। गीता की दृष्टि का \u201Cयोग\u201D आत्मा को मुक्त करता है। हरिः शरणम् ।",
        },
      ],
    },
  },
];
