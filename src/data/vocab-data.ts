export interface VocabWord {
  id: number;
  word: string;
  pos: string;
  pronunciation: string;
  meaningHi: string;
  meaningEn: string;
  examples: { en: string; hi: string }[];
}

export const vocabWords: VocabWord[] = 
[
  {
    "id": 1,
    "word": "God",
    "pos": "n",
    "pronunciation": "गॉड",
    "meaningHi": "परमेश्वर",
    "meaningEn": "the supreme being; the creator",
    "examples": [
      {
        "en": "Is God-realisation the final goal of human life?",
        "hi": "क्ा परमेश्वर की अनुभूति मानव-जीवन का अंतिम लक्ष्य है?"
      }
    ]
  },
  {
    "id": 2,
    "word": "heart",
    "pos": "n",
    "pronunciation": "हेल्थ",
    "meaningHi": "हृदय; भावनाओं का केंद्र",
    "meaningEn": "the centre of emotions; the seat of the soul",
    "examples": []
  },
  {
    "id": 3,
    "word": "truth",
    "pos": "n",
    "pronunciation": "ट्रूथ",
    "meaningHi": "सत्य, सच्चाई",
    "meaningEn": "reality",
    "examples": [
      {
        "en": "Truth has to be spoken, but in an appropriate manner",
        "hi": "सत्य बोलना है, मगर उचित तरीके से।"
      }
    ]
  },
  {
    "id": 4,
    "word": "believe",
    "pos": "v",
    "pronunciation": "बिलीव",
    "meaningHi": "विश्वास करना",
    "meaningEn": "to accept as true; to have faith",
    "examples": [
      {
        "en": "Do you believe in ghosts?",
        "hi": "क्ा तुम भूूतप्रेत में विश्वास करते हो?"
      }
    ]
  },
  {
    "id": 5,
    "word": "faith",
    "pos": "n",
    "pronunciation": "फ़ेथ",
    "meaningHi": "विश्वास, आस्था, श्रद्धा",
    "meaningEn": "complete trust; belief in the divine",
    "examples": []
  },
  {
    "id": 6,
    "word": "peace",
    "pos": "n",
    "pronunciation": "पीस",
    "meaningHi": "शांति",
    "meaningEn": "freedom from disturbance; inner calm",
    "examples": [
      {
        "en": "There cannot be happiness without peace",
        "hi": "शांति के बिना सुख नहीं हो सकता।"
      }
    ]
  },
  {
    "id": 7,
    "word": "right",
    "pos": "n",
    "pronunciation": "राइट",
    "meaningHi": "सही; दाहिना; अधिकार",
    "meaningEn": "correct",
    "examples": [
      {
        "en": "(fight for your right",
        "hi": "अपने अधिकार के लिए लड़ो।"
      },
      {
        "en": "The right often sides with the capitalists",
        "hi": "राजनीतिक दक्षिणपंथ अकसर पूूँजीपतियों के पक्ष में खड़ा रहता है।"
      }
    ]
  },
  {
    "id": 8,
    "word": "be",
    "pos": "v",
    "pronunciation": "बी",
    "meaningHi": "होना",
    "meaningEn": "to exist; to happen",
    "examples": [
      {
        "en": "Be a good boy",
        "hi": "अच्े लड़के हो जाओ।"
      }
    ]
  },
  {
    "id": 9,
    "word": "do",
    "pos": "v",
    "pronunciation": "डू",
    "meaningHi": "करना",
    "meaningEn": "",
    "examples": [
      {
        "en": "I will do it",
        "hi": "मैं यह करूँगा।"
      }
    ]
  },
  {
    "id": 10,
    "word": "heaven",
    "pos": "n",
    "pronunciation": "हेवन",
    "meaningHi": "स्वर्ग",
    "meaningEn": "the abode of God; paradise",
    "examples": []
  },
  {
    "id": 11,
    "word": "in",
    "pos": "prep adv",
    "pronunciation": "इन",
    "meaningHi": "में, अंदर",
    "meaningEn": "inside; within; during",
    "examples": [
      {
        "en": "inadequate food",
        "hi": "अपर्याप्त भोजन"
      },
      {
        "en": "I will do this in two days",
        "hi": "मैं इसे दो दिनों की समायावधि में कर दूँगा।"
      }
    ]
  },
  {
    "id": 12,
    "word": "it",
    "pos": "pron det",
    "pronunciation": "इट",
    "meaningHi": "यह, वह (वस्तु)",
    "meaningEn": "used to refer to a thing",
    "examples": [
      {
        "en": "It is a mouse",
        "hi": "यह एक चूूहा है।"
      }
    ]
  },
  {
    "id": 13,
    "word": "not",
    "pos": "adv adj",
    "pronunciation": "नॉट",
    "meaningHi": "नहीं",
    "meaningEn": "used to negate",
    "examples": [
      {
        "en": "I am not coming to the dinner",
        "hi": "मैं डिनर में नहीं आ रहा हँ।"
      },
      {
        "en": "class",
        "hi": "notes कक्षा में लिखे गए नोट्स"
      }
    ]
  },
  {
    "id": 14,
    "word": "of",
    "pos": "prep",
    "pronunciation": "",
    "meaningHi": "का, की, के",
    "meaningEn": "belonging to; relating to",
    "examples": [
      {
        "en": "life of the Buddha",
        "hi": "बुद्ध का जीवन"
      }
    ]
  },
  {
    "id": 15,
    "word": "religion",
    "pos": "n",
    "pronunciation": "रिलिजन",
    "meaningHi": "धर्म",
    "meaningEn": "a system of faith and worship",
    "examples": [
      {
        "en": "Some religions spread love, while certain others spread hatred",
        "hi": "कुछ धर्म प्रेम प्रचा- रित करते हैं, जबकि कुछ अन्य धर्म नफरत फैलाते हैं।"
      },
      {
        "en": "Religious strife disturbs peace",
        "hi": "धार्मिक झगड़ा शांति नष्ट करता है।"
      }
    ]
  },
  {
    "id": 16,
    "word": "to",
    "pos": "prep",
    "pronunciation": "अकोडिंग  टु",
    "meaningHi": "को, की ओर",
    "meaningEn": "",
    "examples": [
      {
        "en": "According to the Bhagavad-Gita, forgetting our divine nature is the root cause of suffering",
        "hi": "भगवद्-गीता के अनुसार अपने ईश्वरीय स्वरूप को भूूल जाना हमारे दुखों का मूूल कारण है।"
      },
      {
        "en": "He went to Delhi",
        "hi": "वह दिल्ी गया।"
      }
    ]
  },
  {
    "id": 17,
    "word": "and",
    "pos": "conj",
    "pronunciation": "श्ाम",
    "meaningHi": "और, तथा",
    "meaningEn": "used to connect words or clauses",
    "examples": [
      {
        "en": "Ram and Shyam",
        "hi": "राम और"
      }
    ]
  },
  {
    "id": 18,
    "word": "family",
    "pos": "n",
    "pronunciation": "फ़ैैमलि",
    "meaningHi": "परिवार",
    "meaningEn": "parents and children; relatives",
    "examples": [
      {
        "en": "a large family",
        "hi": "एक बड़ा परिवार"
      }
    ]
  },
  {
    "id": 19,
    "word": "for",
    "pos": "prep",
    "pronunciation": "फ़ऱ",
    "meaningHi": "के लिए; क्योंकि",
    "meaningEn": "intended for; because",
    "examples": [
      {
        "en": "I came here for money",
        "hi": "मैं यहाँ पैसों के लिए आया।"
      },
      {
        "en": "I cannot go, for I am busy",
        "hi": "मैं नहीं जा सकता क्योंोंकि मैं व्यस्त हँ।"
      }
    ]
  },
  {
    "id": 20,
    "word": "forgive",
    "pos": "v",
    "pronunciation": "फ़गिव",
    "meaningHi": "क्षमा करना",
    "meaningEn": "to pardon; to let go of resentment",
    "examples": [
      {
        "en": "God forgives them who forgive others",
        "hi": "जो दूसरों को माफ करते हैं, ईश्वर उन्हेंें माफ़ कर देते हैं।"
      }
    ]
  },
  {
    "id": 21,
    "word": "on",
    "pos": "prep adv",
    "pronunciation": "अॉन",
    "meaningHi": "पर, ऊपर",
    "meaningEn": "touching the surface of; about",
    "examples": [
      {
        "en": "The book is on the table",
        "hi": "किताब टेबुल पर है।"
      },
      {
        "en": "The fan is on",
        "hi": "पंखा चालूू है।"
      }
    ]
  },
  {
    "id": 22,
    "word": "or",
    "pos": "conj",
    "pronunciation": "ओर",
    "meaningHi": "या, अथवा",
    "meaningEn": "used to link alternatives",
    "examples": [
      {
        "en": "Kartik or Sundaram, who will play in this match?",
        "hi": "कार्तिक या सुंदरम, इस मैच में कौन खेलेगा?"
      }
    ]
  },
  {
    "id": 23,
    "word": "but",
    "pos": "conj",
    "pronunciation": "बट",
    "meaningHi": "लेकिन, किंतु",
    "meaningEn": "however; except",
    "examples": [
      {
        "en": "He is tough-looking but kind-hearted",
        "hi": "वह सख्त दिखता है मगर उदारहृदय है।"
      },
      {
        "en": "I brought everything but my passport",
        "hi": "मैं अपने पासपोर्ट के अलावा सभी कुछ ले कर आया।"
      }
    ]
  },
  {
    "id": 24,
    "word": "her",
    "pos": "pron det",
    "pronunciation": "हर",
    "meaningHi": "उसका, उसकी (स्त्री)",
    "meaningEn": "belonging to a female",
    "examples": [
      {
        "en": "Her pen has been lost",
        "hi": "उसकी कलम खो गई है।"
      }
    ]
  },
  {
    "id": 25,
    "word": "his",
    "pos": "det pron",
    "pronunciation": "हिज़",
    "meaningHi": "उसका (पुरुष)",
    "meaningEn": "belonging to a male",
    "examples": [
      {
        "en": "his pen",
        "hi": "उसकी कलम"
      }
    ]
  },
  {
    "id": 26,
    "word": "me",
    "pos": "pron",
    "pronunciation": "मी",
    "meaningHi": "मुझे, मुझको",
    "meaningEn": "used to refer to oneself",
    "examples": [
      {
        "en": "Give me your pen please",
        "hi": "मुझे कृपया अपनी कलम दें।"
      },
      {
        "en": "a dance programme",
        "hi": "एक नृत्य का कार्यक्रम"
      }
    ]
  },
  {
    "id": 27,
    "word": "my",
    "pos": "det",
    "pronunciation": "माइ",
    "meaningHi": "मेरा, मेरी",
    "meaningEn": "belonging to me",
    "examples": [
      {
        "en": "my friend",
        "hi": "मेरा दोस्त"
      },
      {
        "en": "I myself bought the medicines",
        "hi": "मैंने खुद दवाइयाँ खरीदीं।"
      }
    ]
  },
  {
    "id": 28,
    "word": "she",
    "pos": "pron",
    "pronunciation": "शी",
    "meaningHi": "वह (स्त्री)",
    "meaningEn": "used to refer to a female",
    "examples": [
      {
        "en": "Does she like pink?",
        "hi": "क्ा वह पिंक रंग पसंद करती है?"
      }
    ]
  },
  {
    "id": 29,
    "word": "we",
    "pos": "pron",
    "pronunciation": "वी",
    "meaningHi": "हम",
    "meaningEn": "ourselves",
    "examples": []
  },
  {
    "id": 30,
    "word": "you",
    "pos": "pron",
    "pronunciation": "यू",
    "meaningHi": "तुम, आप",
    "meaningEn": "used to refer to the person spoken to",
    "examples": []
  },
  {
    "id": 31,
    "word": "father",
    "pos": "n",
    "pronunciation": "फ़ादर",
    "meaningHi": "पिता",
    "meaningEn": "a male parent",
    "examples": []
  },
  {
    "id": 32,
    "word": "friend",
    "pos": "n",
    "pronunciation": "फ्े़न्ड",
    "meaningHi": "मित्र, दोस्त",
    "meaningEn": "a person you know and like",
    "examples": [
      {
        "en": "We should value friendship",
        "hi": "हमें दोस्ी की कद्र करनी चाहिए।"
      },
      {
        "en": "Bangladesh is a friendly country",
        "hi": "बांग्ादेश एक मित्रतापूर्ण देश है।"
      }
    ]
  },
  {
    "id": 33,
    "word": "honest",
    "pos": "adj",
    "pronunciation": "अौनिस्ट",
    "meaningHi": "ईमानदार",
    "meaningEn": "truthful; not cheating",
    "examples": [
      {
        "en": "an honest officer",
        "hi": "एक ईमानदार अधिकारी"
      }
    ]
  },
  {
    "id": 34,
    "word": "its",
    "pos": "det",
    "pronunciation": "इट्स",
    "meaningHi": "उसका (वस्तु)",
    "meaningEn": "belonging to it",
    "examples": [
      {
        "en": "Its price is ten rupees",
        "hi": "इसकी कीमत दस रुपए है।"
      }
    ]
  },
  {
    "id": 35,
    "word": "mother",
    "pos": "n",
    "pronunciation": "मदर",
    "meaningHi": "माँ, माता",
    "meaningEn": "a female parent",
    "examples": []
  },
  {
    "id": 36,
    "word": "our",
    "pos": "det",
    "pronunciation": "आर",
    "meaningHi": "हमारा",
    "meaningEn": "belonging to us",
    "examples": [
      {
        "en": "He is our friend",
        "hi": "वह हमारा दोस्त है।"
      }
    ]
  },
  {
    "id": 37,
    "word": "still",
    "pos": "adv / adj",
    "pronunciation": "स्टिल",
    "meaningHi": "अभी भी; शांत",
    "meaningEn": "yet; motionless",
    "examples": [
      {
        "en": "still waters",
        "hi": "शांत जल"
      },
      {
        "en": "He sat there still for hours",
        "hi": "वह वहाँ घंटों तक निस्तब्ध (बिना हिले-डुले) बैठा रहा।"
      }
    ]
  },
  {
    "id": 38,
    "word": "teach",
    "pos": "v",
    "pronunciation": "टीच",
    "meaningHi": "सिखाना",
    "meaningEn": "to instruct",
    "examples": []
  },
  {
    "id": 39,
    "word": "us",
    "pos": "pron",
    "pronunciation": "अस",
    "meaningHi": "हमें, हमको",
    "meaningEn": "ourselves",
    "examples": [
      {
        "en": "He gave us ten rupees. - उसने हमें दस रुपए दिए। We took the dog with us",
        "hi": "हम हमारे साथ कुत्ते को ले गए।"
      },
      {
        "en": "We took the dog with us",
        "hi": "हम हमारे साथ कुत्ते को ले गए।"
      }
    ]
  },
  {
    "id": 40,
    "word": "world",
    "pos": "n",
    "pronunciation": "वर्ल्ड",
    "meaningHi": "संसार, दुनिया",
    "meaningEn": "earth",
    "examples": []
  },
  {
    "id": 41,
    "word": "yours",
    "pos": "pron",
    "pronunciation": "योज़",
    "meaningHi": "तुम्हारा, आपका",
    "meaningEn": "belonging to you",
    "examples": [
      {
        "en": "It is simple, you can yourself do it",
        "hi": "यह आसान है, तुम खुद ही इसे कर सकते हो"
      },
      {
        "en": "My memory is poor, yours is much better",
        "hi": "मेरी स्मरणशक्ति कमजोर है, तुम्ारी बेहतर है।"
      }
    ]
  },
  {
    "id": 42,
    "word": "change",
    "pos": "n / v",
    "pronunciation": "चेंज",
    "meaningHi": "बदलना; परिवर्तन",
    "meaningEn": "to make different; to alter",
    "examples": [
      {
        "en": "No one wants a change",
        "hi": "कोई भी बदलाव नहीं चाहता।"
      }
    ]
  },
  {
    "id": 43,
    "word": "how",
    "pos": "adv",
    "pronunciation": "हाउ",
    "meaningHi": "कैसे, किस प्रकार",
    "meaningEn": "in what way or manner",
    "examples": [
      {
        "en": "How did you go there?",
        "hi": "आप वहाँ कैसे गए?"
      },
      {
        "en": "However much you try, you will not succeed",
        "hi": "तुम कितनी भी कोशिश कर लो, सफल नहीं हो पाओगे।"
      }
    ]
  },
  {
    "id": 44,
    "word": "if",
    "pos": "conj",
    "pronunciation": "इफ़",
    "meaningHi": "यदि, अगर",
    "meaningEn": "on the condition that",
    "examples": [
      {
        "en": "If they come, I will come too",
        "hi": "अगर वे आते हैं तो मैं भी आऊँगा।"
      }
    ]
  },
  {
    "id": 45,
    "word": "prophet",
    "pos": "n",
    "pronunciation": "प्ॉफ़ेट",
    "meaningHi": "पैगंबर ईसाई, यहूदी और इसलाम धर्मों में कथित रूप से ईश्वर का संदेश लाने वाले धर्मशिक्षक",
    "meaningEn": "divine messenger",
    "examples": []
  },
  {
    "id": 46,
    "word": "so",
    "pos": "adv conj",
    "pronunciation": "सो",
    "meaningHi": "इसलिए; इतना",
    "meaningEn": "therefore; to such a degree",
    "examples": [
      {
        "en": "so much? - इतना अधिक?; Is it so difficult?",
        "hi": "क्ा यह इतना कठिन है?"
      },
      {
        "en": "There are no taxis, so you will have to walk",
        "hi": "यहाँ कोई टैक्सी नहीं है, इसलिए तुम्ें चल कर जाना पड़ेगा।"
      }
    ]
  },
  {
    "id": 47,
    "word": "there",
    "pos": "adv",
    "pronunciation": "देअर",
    "meaningHi": "वहाँ",
    "meaningEn": "in or at that place",
    "examples": [
      {
        "en": "We went there yesterday",
        "hi": "हम वहाँ कल गए थे।"
      }
    ]
  },
  {
    "id": 48,
    "word": "which",
    "pos": "pron",
    "pronunciation": "विच",
    "meaningHi": "कौन-सा, जो",
    "meaningEn": "what one",
    "examples": [
      {
        "en": "Which boy did it?",
        "hi": "किस बच्चे ने यह किया?"
      }
    ]
  },
  {
    "id": 49,
    "word": "who",
    "pos": "pron",
    "pronunciation": "हू",
    "meaningHi": "कौन, जो",
    "meaningEn": "which person",
    "examples": [
      {
        "en": "Who is there?",
        "hi": "कौन है वहाँ?"
      }
    ]
  },
  {
    "id": 50,
    "word": "why",
    "pos": "adv",
    "pronunciation": "वाइ",
    "meaningHi": "क्यों",
    "meaningEn": "reason",
    "examples": [
      {
        "en": "Why did you cry?",
        "hi": "तुम क्योंों रोए?"
      }
    ]
  },
  {
    "id": 51,
    "word": "about",
    "pos": "adj adv / n",
    "pronunciation": "अबाउट",
    "meaningHi": "के बारे में; लगभग",
    "meaningEn": "regarding; approximately",
    "examples": [
      {
        "en": "Let us talk about something else",
        "hi": "किसी और चीज के बारे में बातें करें।"
      },
      {
        "en": "The school is about three kilometres from here",
        "hi": "स्कूल यहाँ से लगभग तीन किलोमीटर है।"
      }
    ]
  },
  {
    "id": 52,
    "word": "all",
    "pos": "n adj adv",
    "pronunciation": "ओल",
    "meaningHi": "सभी, सब",
    "meaningEn": "every one; the whole of",
    "examples": [
      {
        "en": "All have left",
        "hi": "सभी चले गए हैं।"
      }
    ]
  },
  {
    "id": 53,
    "word": "any",
    "pos": "adj det",
    "pronunciation": "एनि",
    "meaningHi": "कोई, कुछ",
    "meaningEn": "some; no matter which",
    "examples": [
      {
        "en": "Give me any of the three",
        "hi": "मुझे तीनों में से कोई एक दे दो।"
      },
      {
        "en": "Can anybody do it?",
        "hi": "क्ा कोई व्यक्ति यह कर सकता है?"
      }
    ]
  },
  {
    "id": 54,
    "word": "brave",
    "pos": "adj",
    "pronunciation": "ब्ेव",
    "meaningHi": "बहादुर, साहसी",
    "meaningEn": "showing courage; fearless",
    "examples": [
      {
        "en": "a brave soldier",
        "hi": "एक बहादुर सिपाही"
      }
    ]
  },
  {
    "id": 55,
    "word": "character",
    "pos": "n",
    "pronunciation": "कैरक्टर",
    "meaningHi": "चरित्र; स्वभाव",
    "meaningEn": "qualities of a person; moral strength",
    "examples": []
  },
  {
    "id": 56,
    "word": "child",
    "pos": "n",
    "pronunciation": "चाइल्ड",
    "meaningHi": "बच्चा",
    "meaningEn": "a young person",
    "examples": []
  },
  {
    "id": 57,
    "word": "children",
    "pos": "n",
    "pronunciation": "चिल्ड्रन",
    "meaningHi": "बच्चे",
    "meaningEn": "plural of child; young people",
    "examples": [
      {
        "en": "Children are creative",
        "hi": "बच्चे सृजनशील होते हैं।"
      }
    ]
  },
  {
    "id": 58,
    "word": "get",
    "pos": "v",
    "pronunciation": "गेट",
    "meaningHi": "पाना, मिलना",
    "meaningEn": "to receive; to obtain",
    "examples": [
      {
        "en": "I got a prize today",
        "hi": "मुझे आज एक पुरस्ार मिला"
      }
    ]
  },
  {
    "id": 59,
    "word": "go",
    "pos": "v",
    "pronunciation": "गो",
    "meaningHi": "जाना",
    "meaningEn": "to move; to travel",
    "examples": []
  },
  {
    "id": 60,
    "word": "learn",
    "pos": "v",
    "pronunciation": "लर्न",
    "meaningHi": "सीखना",
    "meaningEn": "to gain knowledge or skill",
    "examples": [
      {
        "en": "Learn humility",
        "hi": "विनम्रता सीखो।"
      }
    ]
  },
  {
    "id": 61,
    "word": "now",
    "pos": "adv",
    "pronunciation": "नाउ",
    "meaningHi": "अब, इस समय",
    "meaningEn": "at the present time",
    "examples": []
  },
  {
    "id": 62,
    "word": "patience",
    "pos": "n",
    "pronunciation": "पेशन्स",
    "meaningHi": "धैर्य, सब्र",
    "meaningEn": "the ability to wait calmly; endurance",
    "examples": [
      {
        "en": "Don't lose patience!",
        "hi": "धीरज न खोएँ!"
      }
    ]
  },
  {
    "id": 63,
    "word": "say",
    "pos": "v",
    "pronunciation": "से",
    "meaningHi": "कहना, बोलना",
    "meaningEn": "to speak",
    "examples": [
      {
        "en": "she said nothing",
        "hi": "उसने कुछ नहीं कहा"
      }
    ]
  },
  {
    "id": 64,
    "word": "spiritual",
    "pos": "adj",
    "pronunciation": "स्पिरिचुअल",
    "meaningHi": "आध्यात्मिक",
    "meaningEn": "relating to the spirit or soul",
    "examples": [
      {
        "en": "a spiritual life",
        "hi": "एक आध्यात्मिक जीवन"
      }
    ]
  },
  {
    "id": 65,
    "word": "spirituality",
    "pos": "n",
    "pronunciation": "त्मा के ज्ान और भक्ति में लगे रहने",
    "meaningHi": "आध्यात्मिकता",
    "meaningEn": "concern with the spirit; inner life",
    "examples": []
  },
  {
    "id": 66,
    "word": "can",
    "pos": "v / n",
    "pronunciation": "कैन",
    "meaningHi": "सकना; डिब्बा",
    "meaningEn": "to be able to; a container",
    "examples": [
      {
        "en": "Can she swim?",
        "hi": "क्ा वह तैर सकती है?"
      }
    ]
  },
  {
    "id": 67,
    "word": "could",
    "pos": "v",
    "pronunciation": "कुड",
    "meaningHi": "सकता था; संभावना",
    "meaningEn": "past tense of can; expressing possibility",
    "examples": [
      {
        "en": "She could be famous one day",
        "hi": "वह एक दिन प्रसिद्ध हो सकती है।"
      }
    ]
  },
  {
    "id": 68,
    "word": "let",
    "pos": "v",
    "pronunciation": "लेट",
    "meaningHi": "आज्ञा देना, अनुमति देना",
    "meaningEn": "to allow; to permit",
    "examples": [
      {
        "en": "Let him go - उसे जाने दो! Let her eat",
        "hi": "उसे खाने दो!"
      },
      {
        "en": "Let him go",
        "hi": "उसे जाने दो!"
      }
    ]
  },
  {
    "id": 69,
    "word": "respect",
    "pos": "n / v",
    "pronunciation": "रिस्ेक्ट",
    "meaningHi": "सम्मान, आदर",
    "meaningEn": "high regard",
    "examples": [
      {
        "en": "Shouldn't we show respect to our elders?",
        "hi": "क्ा हमें अपने बड़ों के प्रति संमान नहीं प्रदर्शित करना चाहिए?"
      },
      {
        "en": "Let us respect our teachers",
        "hi": "हम अपने शिक्षकों का संमान करें।"
      }
    ]
  },
  {
    "id": 70,
    "word": "think",
    "pos": "v",
    "pronunciation": "थिंक",
    "meaningHi": "सोचना, विचार करना",
    "meaningEn": "to reason",
    "examples": []
  },
  {
    "id": 71,
    "word": "bliss",
    "pos": "n",
    "pronunciation": "ब्लिस",
    "meaningHi": "परमानंद",
    "meaningEn": "supreme happiness; divine joy",
    "examples": [
      {
        "en": "The beauty of nature is a source of great bliss",
        "hi": "प्रकृति का सौंदर्य महान आनंद का एक श्ोत है।"
      }
    ]
  },
  {
    "id": 72,
    "word": "deity",
    "pos": "n",
    "pronunciation": "डेअटि",
    "meaningHi": "देवता",
    "meaningEn": "a god or goddess",
    "examples": []
  },
  {
    "id": 73,
    "word": "follow",
    "pos": "v",
    "pronunciation": "फ़ॉलो",
    "meaningHi": "अनुसरण करना",
    "meaningEn": "to go after; to obey",
    "examples": [
      {
        "en": "When prince Sri Ram left for the jungle, thousands of people followed him",
        "hi": "जब राजकुमार श्ीराम जंगल जाने लगे तब हजारों लोग उनके पीछे-पीछे चले।"
      }
    ]
  },
  {
    "id": 74,
    "word": "human",
    "pos": "n / adj",
    "pronunciation": "ह्ूमन",
    "meaningHi": "मानव, मनुष्य",
    "meaningEn": "relating to people; a person",
    "examples": [
      {
        "en": "No human has yet reached Mars",
        "hi": "कोई मनुष्य अभी तक मंगलग्रह पर नहीं पहुँचा है।"
      },
      {
        "en": "Terrorism is a curse on humanity",
        "hi": "आतंकवाद मानवता के लिए अभिशाप है।"
      }
    ]
  },
  {
    "id": 75,
    "word": "peaceful",
    "pos": "adj",
    "pronunciation": "पीसफ़ल",
    "meaningHi": "शांतिपूर्ण",
    "meaningEn": "calm; without conflict",
    "examples": [
      {
        "en": "a peaceful country",
        "hi": "एक शांत देश"
      }
    ]
  },
  {
    "id": 76,
    "word": "sacred",
    "pos": "adj",
    "pronunciation": "सेक्रिड",
    "meaningHi": "पवित्र, पूज्य",
    "meaningEn": "holy",
    "examples": [
      {
        "en": "The Vedas are the sacred books of the Hindus",
        "hi": "वेद हिंदुओं के पवित्र ग्रंथ हैं।"
      }
    ]
  },
  {
    "id": 77,
    "word": "speak",
    "pos": "v",
    "pronunciation": "स्पीक",
    "meaningHi": "बोलना",
    "meaningEn": "to talk",
    "examples": []
  },
  {
    "id": 78,
    "word": "use",
    "pos": "n / v",
    "pronunciation": "यूस",
    "meaningHi": "उपयोग करना",
    "meaningEn": "to employ",
    "examples": [
      {
        "en": "This book is of no use to us",
        "hi": "यह किताब हमारे किसी उपयोग की नहीं है।"
      },
      {
        "en": "Which toothpaste do you use?",
        "hi": "तुम कौन सा दंतमं- जन प्रयोग करते हो?"
      }
    ]
  },
  {
    "id": 79,
    "word": "belief",
    "pos": "n",
    "pronunciation": "बिलीफ़",
    "meaningHi": "विश्ास, मान्यता",
    "meaningEn": "trust; acceptance as true",
    "examples": [
      {
        "en": "The Bhagavad-Gita teaches belief in the essential goodness of every man",
        "hi": "भगवद्-गीता प्रत्ेक मनुष्य की मूूलभूूत अच्ाई में विश्वास की शिक्षाक्षा देती है।"
      }
    ]
  },
  {
    "id": 80,
    "word": "big",
    "pos": "adj",
    "pronunciation": "बिग",
    "meaningHi": "बड़ा",
    "meaningEn": "large in size",
    "examples": [
      {
        "en": "a big house",
        "hi": "एक बड़ा घर"
      }
    ]
  },
  {
    "id": 81,
    "word": "contentment",
    "pos": "n",
    "pronunciation": "कंटेंट्मंट",
    "meaningHi": "संतोष",
    "meaningEn": "a state of satisfaction and inner peace",
    "examples": [
      {
        "en": "Contentment is a great virtue",
        "hi": "संतोष एक महान सद्ुण है।"
      }
    ]
  },
  {
    "id": 82,
    "word": "first",
    "pos": "det adj",
    "pronunciation": "फ़स्ट",
    "meaningHi": "पहला, प्रथम",
    "meaningEn": "before all others; earliest",
    "examples": []
  },
  {
    "id": 83,
    "word": "gratitude",
    "pos": "n",
    "pronunciation": "ग्ैटिट्यूड",
    "meaningHi": "कृतज्ञता",
    "meaningEn": "thankfulness; appreciation",
    "examples": [
      {
        "en": "Gratitude is among the greatest virtues",
        "hi": "कृतज्ञता महानतम गुणों में से एक है।"
      }
    ]
  },
  {
    "id": 84,
    "word": "honesty",
    "pos": "n",
    "pronunciation": "अौनेस्ी",
    "meaningHi": "ईमानदारी",
    "meaningEn": "the quality of being truthful",
    "examples": [
      {
        "en": "Honesty is a great virtue",
        "hi": "ईमानदारी एक महान सद्ुण है।"
      }
    ]
  },
  {
    "id": 85,
    "word": "kindness",
    "pos": "n",
    "pronunciation": "काइन्ड्नस",
    "meaningHi": "दयालुता, कृपा",
    "meaningEn": "being kind",
    "examples": [
      {
        "en": "If you have kindness for others, God will have kindness for you",
        "hi": "अगर तुम दूसरों के प्रति दयाभाव रखते हो तो ईश्वर भी तुम्ारे प्रति दयाभाव रखेंगे।"
      }
    ]
  },
  {
    "id": 86,
    "word": "new",
    "pos": "adj",
    "pronunciation": "न्यू",
    "meaningHi": "नया",
    "meaningEn": "not existing before; recent",
    "examples": [
      {
        "en": "a new idea",
        "hi": "एक नया विचार"
      }
    ]
  },
  {
    "id": 87,
    "word": "old",
    "pos": "adj",
    "pronunciation": "ओल्ड",
    "meaningHi": "पुराना; बूढ़ा",
    "meaningEn": "having lived long; not new",
    "examples": [
      {
        "en": "an old man",
        "hi": "एक बूूढ़ा आदमी"
      },
      {
        "en": "an old watch",
        "hi": "एक पुरानी घड़ी"
      }
    ]
  },
  {
    "id": 88,
    "word": "out",
    "pos": "prep adv",
    "pronunciation": "आउट",
    "meaningHi": "बाहर",
    "meaningEn": "away from the inside",
    "examples": [
      {
        "en": "He went out of the room",
        "hi": "वह कमरे के बाहर चला गया"
      },
      {
        "en": "He was out on zero",
        "hi": "वह शून्य रन पर आउट हो गया।"
      }
    ]
  },
  {
    "id": 89,
    "word": "patient",
    "pos": "adj / n",
    "pronunciation": "पेशंट",
    "meaningHi": "धैर्यशील, धीरज रखने वाला | रोगी, जिसका इलाज चल रहा हो",
    "meaningEn": "able to wait calmly; a sick person",
    "examples": [
      {
        "en": "a patient person",
        "hi": "एक धैर्यशील व्यक्ति"
      }
    ]
  },
  {
    "id": 90,
    "word": "small",
    "pos": "adj",
    "pronunciation": "स्मोल",
    "meaningHi": "छोटा",
    "meaningEn": "little",
    "examples": [
      {
        "en": "small mistake",
        "hi": "छोटी भूूल"
      }
    ]
  },
  {
    "id": 91,
    "word": "up",
    "pos": "adv prep",
    "pronunciation": "अप",
    "meaningHi": "ऊपर",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 92,
    "word": "action",
    "pos": "n",
    "pronunciation": "ऐक्शन",
    "meaningHi": "कर्म, कार्रवाई",
    "meaningEn": "the process of doing something",
    "examples": [
      {
        "en": "police action",
        "hi": "पुलिस की कार्रवाई"
      }
    ]
  },
  {
    "id": 93,
    "word": "after",
    "pos": "adv",
    "pronunciation": "आफ़्टर",
    "meaningHi": "के बाद",
    "meaningEn": "following in time; behind",
    "examples": [
      {
        "en": "Ram came after Shyam",
        "hi": "राम श्ाम के बाद आया।"
      },
      {
        "en": "The police are after him",
        "hi": "पुलिस उसके पीछे लगी है।"
      }
    ]
  },
  {
    "id": 94,
    "word": "before",
    "pos": "adv prep",
    "pronunciation": "बिफ़ोर",
    "meaningHi": "पहले, से पूर्व",
    "meaningEn": "earlier than; in front of",
    "examples": [
      {
        "en": "He wakes up before dawn",
        "hi": "वह सूर्योदय के पहले जग जाता है।"
      }
    ]
  },
  {
    "id": 95,
    "word": "between",
    "pos": "prep",
    "pronunciation": "बिट्ीन",
    "meaningHi": "बीच में",
    "meaningEn": "in the space separating two things",
    "examples": []
  },
  {
    "id": 96,
    "word": "brother",
    "pos": "n",
    "pronunciation": "ब्रदर",
    "meaningHi": "भाई",
    "meaningEn": "a male sibling",
    "examples": []
  },
  {
    "id": 97,
    "word": "control",
    "pos": "n / v",
    "pronunciation": "कन्ट्ोल",
    "meaningHi": "नियंत्रण",
    "meaningEn": "to direct; power over something",
    "examples": [
      {
        "en": "Self-control is especially important for students",
        "hi": "आत्म-नियंत्रण विद्ार्थियों के लिए विशेष महत्त्वपूर्ण होता है।"
      },
      {
        "en": "Controlling our desires is not easy",
        "hi": "अपनी इच्ाओं को नियंत्रित करना आसान नहीं है।"
      }
    ]
  },
  {
    "id": 98,
    "word": "day",
    "pos": "n / adv",
    "pronunciation": "डे",
    "meaningHi": "दिन",
    "meaningEn": "a 24-hour period; daytime",
    "examples": [
      {
        "en": "Yesterday was a holiday",
        "hi": "कल एक छुट्ी का दिन था।"
      }
    ]
  },
  {
    "id": 99,
    "word": "every",
    "pos": "det",
    "pronunciation": "एव्ी",
    "meaningHi": "प्रत्येक, हर",
    "meaningEn": "each one without exception",
    "examples": [
      {
        "en": "Every soul is divine according to the Bhagavad-Gita",
        "hi": "प्रत्ेक आत्मा भगवद्-गीता के अनुसार दिव्य होती है।"
      },
      {
        "en": "Everyone is not kind",
        "hi": "हर आदमी दयालु नहीं होता।"
      }
    ]
  },
  {
    "id": 100,
    "word": "freedom",
    "pos": "n",
    "pronunciation": "फ़्रीडम",
    "meaningHi": "स्वतंत्रता, आज़ादी",
    "meaningEn": "the state of being free",
    "examples": [
      {
        "en": "freedom from poverty",
        "hi": "गरीबी से मुक्ति"
      },
      {
        "en": "A free press is essential to democracy",
        "hi": "आजाद पत्रकारिता लोकतंत्र के लिए जरूरी है।"
      }
    ]
  },
  {
    "id": 101,
    "word": "joy",
    "pos": "n",
    "pronunciation": "जोइ",
    "meaningHi": "आनंद, खुशी",
    "meaningEn": "great happiness; delight",
    "examples": [
      {
        "en": "Boating gives great joy",
        "hi": "नौका-विहार बड़ा आनंद प्रदान करता है।"
      }
    ]
  },
  {
    "id": 102,
    "word": "little",
    "pos": "adj",
    "pronunciation": "लिटल",
    "meaningHi": "छोटा; थोड़ा",
    "meaningEn": "small in size; not much",
    "examples": [
      {
        "en": "Give me a little sugar - मुझे थोड़ी चीनी दो। There is little hope of his survival",
        "hi": "उसके जीने की आशा कम है।"
      },
      {
        "en": "Give me a little sugar",
        "hi": "मुझे थोड़ी चीनी दो।"
      }
    ]
  },
  {
    "id": 103,
    "word": "off",
    "pos": "adv prep",
    "pronunciation": "अौफ़",
    "meaningHi": "बंद; दूर",
    "meaningEn": "away from; not on",
    "examples": [
      {
        "en": "He turned the light off",
        "hi": "उसने बत्ती बंद कर दी।"
      },
      {
        "en": "This is an off day",
        "hi": "आज छुट्ी का दिन है।"
      }
    ]
  },
  {
    "id": 104,
    "word": "people",
    "pos": "n",
    "pronunciation": "पीप्ल",
    "meaningHi": "लोग, जनता",
    "meaningEn": "human beings; persons",
    "examples": [
      {
        "en": "The life of common people is very difficult in some countries",
        "hi": "कुछ देशों में साधारण लोगों का जीवन बहुत कठिन है।"
      }
    ]
  },
  {
    "id": 105,
    "word": "put",
    "pos": "v",
    "pronunciation": "पुट",
    "meaningHi": "रखना",
    "meaningEn": "to place",
    "examples": [
      {
        "en": "She put the clothes in the suitcase",
        "hi": "उसने कपड़ों को सूूटकेस में डाला।"
      }
    ]
  },
  {
    "id": 106,
    "word": "run",
    "pos": "n / v",
    "pronunciation": "रन",
    "meaningHi": "दौड़ना; चलाना",
    "meaningEn": "to move fast",
    "examples": []
  },
  {
    "id": 107,
    "word": "serve",
    "pos": "v",
    "pronunciation": "सर्व",
    "meaningHi": "सेवा करना 2 भोजन परोसना",
    "meaningEn": "to work for",
    "examples": [
      {
        "en": "Serving the poor is a form of worship",
        "hi": "गरीबों की सेवा ईश्वरपूूजा का एक रूप है।"
      },
      {
        "en": "Who will serve the meals?",
        "hi": "भोजन कौन परोसेगा?"
      }
    ]
  },
  {
    "id": 108,
    "word": "too",
    "pos": "adv",
    "pronunciation": "टू",
    "meaningHi": "भी; अत्यधिक",
    "meaningEn": "also",
    "examples": [
      {
        "en": "I will come too",
        "hi": "मैं भी आऊँगा।"
      },
      {
        "en": "This is too sour",
        "hi": "यह बहुत खट्ा है।"
      }
    ]
  },
  {
    "id": 109,
    "word": "under",
    "pos": "prep",
    "pronunciation": "अन्डर",
    "meaningHi": "नीचे, के नीचे",
    "meaningEn": "below",
    "examples": [
      {
        "en": "He pushed the bag under the bed",
        "hi": "उसने थैले को बिस्तर के नीचे ठेल दिया।"
      }
    ]
  },
  {
    "id": 110,
    "word": "way",
    "pos": "n",
    "pronunciation": "वे",
    "meaningHi": "रास्ता; तरीका",
    "meaningEn": "method",
    "examples": []
  },
  {
    "id": 111,
    "word": "above",
    "pos": "adv",
    "pronunciation": "अबव",
    "meaningHi": "ऊपर",
    "meaningEn": "in a higher position",
    "examples": []
  },
  {
    "id": 112,
    "word": "again",
    "pos": "adv",
    "pronunciation": "अगेन",
    "meaningHi": "फिर, दोबारा",
    "meaningEn": "once more; another time",
    "examples": [
      {
        "en": "He made the same mistake again",
        "hi": "उसने फिर वही गलती की।"
      }
    ]
  },
  {
    "id": 113,
    "word": "already",
    "pos": "adv",
    "pronunciation": "ओलरेडि",
    "meaningHi": "पहले से",
    "meaningEn": "before now; by this time",
    "examples": [
      {
        "en": "The chief guest has already arrived",
        "hi": "मुख्य आतिथि पहले ही आ गए हैं।"
      },
      {
        "en": "Although he is fifty, he looks quite young",
        "hi": "हालाँकि वह पचास वर्ष का है, फिरभी वह काफी जवान लगता है।"
      }
    ]
  },
  {
    "id": 114,
    "word": "always",
    "pos": "adv",
    "pronunciation": "ओलवेज़",
    "meaningHi": "हमेशा, सदैव",
    "meaningEn": "at all times; forever",
    "examples": [
      {
        "en": "He is always polite",
        "hi": "वह हमेशा विनम्र रहता है।"
      },
      {
        "en": "There are many thieves among them",
        "hi": "उनलोगों के बीच में अनेक चोर हैं।"
      }
    ]
  },
  {
    "id": 115,
    "word": "around",
    "pos": "adv",
    "pronunciation": "अराउंड",
    "meaningHi": "चारों ओर; लगभग",
    "meaningEn": "on every side; approximately",
    "examples": [
      {
        "en": "He went around the city",
        "hi": "वह शहर में इधर-उधर घूूमा।"
      },
      {
        "en": "It takes around two and a half hours from Delhi to Vrindavan",
        "hi": "दिल्ी से वृंदावन जाने में लगभग ढाई घंटे लगते हैं।"
      }
    ]
  },
  {
    "id": 116,
    "word": "become",
    "pos": "v",
    "pronunciation": "बिकम",
    "meaningHi": "हो जाना, बन जाना",
    "meaningEn": "to begin to be; to grow into",
    "examples": [
      {
        "en": "Become a better human being",
        "hi": "बेहतर इंसान हो जाओ।"
      }
    ]
  },
  {
    "id": 117,
    "word": "behind",
    "pos": "adv",
    "pronunciation": "बिहाइंड",
    "meaningHi": "पीछे",
    "meaningEn": "at the back of; after",
    "examples": [
      {
        "en": "My house is behind the movie theatre",
        "hi": "मेरा घर सिनेमा हॉल के पीछे है।"
      }
    ]
  },
  {
    "id": 118,
    "word": "below",
    "pos": "prep adv",
    "pronunciation": "बिलउ",
    "meaningHi": "नीचे",
    "meaningEn": "under; lower than",
    "examples": [
      {
        "en": "Her performance was below average",
        "hi": "उसका कार्य औसत से नीचे दर्जे का था।"
      }
    ]
  },
  {
    "id": 119,
    "word": "different",
    "pos": "adj",
    "pronunciation": "डिफ़्रन्ट",
    "meaningHi": "अलग, भिन्न",
    "meaningEn": "not the same; distinct",
    "examples": [
      {
        "en": "The two brothers are different from each other",
        "hi": "दोनों भाई एक दूसरे से भिन्न हैं।"
      }
    ]
  },
  {
    "id": 120,
    "word": "dignity",
    "pos": "n",
    "pronunciation": "डिग्निटी",
    "meaningHi": "गरिमा, मान-सम्मान",
    "meaningEn": "worthiness of respect",
    "examples": [
      {
        "en": "He conducts himself with great dignity",
        "hi": "वह बड़ी गरिमा के साथ चलता-फिरता-बोलता है।"
      }
    ]
  },
  {
    "id": 121,
    "word": "earth",
    "pos": "n",
    "pronunciation": "अर्थ",
    "meaningHi": "पृथ्वी; मिट्टी",
    "meaningEn": "the world; soil",
    "examples": []
  },
  {
    "id": 122,
    "word": "empathy",
    "pos": "n",
    "pronunciation": "एम्पथि",
    "meaningHi": "सहानुभूति",
    "meaningEn": "sharing feelings",
    "examples": []
  },
  {
    "id": 123,
    "word": "end",
    "pos": "n / v",
    "pronunciation": "एन्ड",
    "meaningHi": "अंत; समाप्त करना",
    "meaningEn": "the final part; to finish",
    "examples": [
      {
        "en": "end of poverty",
        "hi": "गरीबी का अंत"
      },
      {
        "en": "How can we end poverty?",
        "hi": "हम गरीबी का अंत कैसे कर सकते हैं?"
      }
    ]
  },
  {
    "id": 124,
    "word": "ethics",
    "pos": "n",
    "pronunciation": "एथिक्स",
    "meaningHi": "नैतिकता",
    "meaningEn": "moral principles governing behaviour",
    "examples": [
      {
        "en": "Ethics should never be neglected in life",
        "hi": "जीवन में नैतिकता की उपेक्षा कभी नहीं करनी चाहिए।"
      }
    ]
  },
  {
    "id": 125,
    "word": "grateful",
    "pos": "adj",
    "pronunciation": "ग्ेट्फ़ल",
    "meaningHi": "कृतज्ञ, आभारी",
    "meaningEn": "feeling thankful",
    "examples": [
      {
        "en": "Let's be grateful to our martyrs",
        "hi": "अपने शहीदों के प्रति हम कृतज्ञ हों।"
      }
    ]
  },
  {
    "id": 126,
    "word": "great",
    "pos": "adj",
    "pronunciation": "ग्रेट",
    "meaningHi": "महान; बहुत बड़ा",
    "meaningEn": "very large or important; excellent",
    "examples": []
  },
  {
    "id": 127,
    "word": "him",
    "pos": "pron",
    "pronunciation": "हिम",
    "meaningHi": "उसे, उसको (पुरुष)",
    "meaningEn": "used to refer to a male",
    "examples": [
      {
        "en": "Will you speak to him?",
        "hi": "क्ा तुम उससे बात करोगे?"
      },
      {
        "en": "He himself had said that",
        "hi": "उसने खुद ही वह कहा था।"
      }
    ]
  },
  {
    "id": 128,
    "word": "light",
    "pos": "n / v / adj",
    "pronunciation": "लाइट",
    "meaningHi": "प्रकाश; हलका",
    "meaningEn": "brightness; not heavy; to illuminate",
    "examples": [
      {
        "en": "light a cigarette - सिगरेट जलाना; light a candle",
        "hi": "मोमबत्ती जलाना"
      },
      {
        "en": "light baggage",
        "hi": "हलका सामान"
      }
    ]
  },
  {
    "id": 129,
    "word": "never",
    "pos": "adv",
    "pronunciation": "नेवर",
    "meaningHi": "कभी नहीं",
    "meaningEn": "not at any time; not ever",
    "examples": [
      {
        "en": "Never cheat others",
        "hi": "कभी दूसरों को धोखा न दो"
      }
    ]
  },
  {
    "id": 130,
    "word": "number",
    "pos": "n",
    "pronunciation": "नम्बर र",
    "meaningHi": "संख्या",
    "meaningEn": "a numeral",
    "examples": [
      {
        "en": "What is the likely number of people arriving today?",
        "hi": "आज यहाँ पहुँचने वाले लोगों की संभावित संख्या क्ा है?"
      }
    ]
  },
  {
    "id": 131,
    "word": "service",
    "pos": "n",
    "pronunciation": "सर्विस",
    "meaningHi": "नौकरी 2 सेवा",
    "meaningEn": "help",
    "examples": [
      {
        "en": "He has got into government service",
        "hi": "वह सरकारी नौकरी में चला गया है।"
      }
    ]
  },
  {
    "id": 132,
    "word": "since",
    "pos": "prep conj adv",
    "pronunciation": "सिन्स",
    "meaningHi": "से; क्योंकि",
    "meaningEn": "from then",
    "examples": [
      {
        "en": "Since he did not come, he did not get the mangoes",
        "hi": "चूूँकि वह नहीं आया, इसलिए उसे आम नहीं मिले।"
      }
    ]
  },
  {
    "id": 133,
    "word": "whole",
    "pos": "n adj",
    "pronunciation": "होल",
    "meaningHi": "पूरा, सारा होल्ेल र थोकविक्रेक्रेता",
    "meaningEn": "entire",
    "examples": [
      {
        "en": "The whole class laughed",
        "hi": "सारा क्ास हँसने लगा।"
      },
      {
        "en": "A retailer buys from a whole- saler and then sells to customers",
        "hi": "एक खुदराविक्रेेता एक थोकविक्रेेता से खरीदता है और तब ग्राहकों को बेचता है।"
      }
    ]
  },
  {
    "id": 134,
    "word": "wrong",
    "pos": "adj",
    "pronunciation": "रौंग",
    "meaningHi": "गलत, असत्य 224 225 अंंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ",
    "meaningEn": "incorrect",
    "examples": []
  },
  {
    "id": 135,
    "word": "effort",
    "pos": "n",
    "pronunciation": "एफ़ट",
    "meaningHi": "प्रयास, मेहनत",
    "meaningEn": "physical or mental exertion",
    "examples": [
      {
        "en": "Make your best efforts, and you will certainly succeed one day",
        "hi": "अपने सर्वश्ेष्ठ प्रयास करो, और एक दिन तुम जरूर सफल होगे।"
      }
    ]
  },
  {
    "id": 136,
    "word": "happy",
    "pos": "adj",
    "pronunciation": "हैपि",
    "meaningHi": "खुश, प्रसन्न",
    "meaningEn": "feeling pleasure; joyful",
    "examples": [
      {
        "en": "Isn't happiness the main aim of life?",
        "hi": "क्ा सुख जीवन का मुख्य उद्देश्य नहीं है?"
      }
    ]
  },
  {
    "id": 137,
    "word": "money",
    "pos": "n",
    "pronunciation": "मनि",
    "meaningHi": "धन, पैसा",
    "meaningEn": "currency; wealth",
    "examples": [
      {
        "en": "Money is important but not everything",
        "hi": "पैसा महत्त्वपूर्ण है मगर सब -कुछ नहीं।"
      }
    ]
  },
  {
    "id": 138,
    "word": "power",
    "pos": "n",
    "pronunciation": "पाउअर",
    "meaningHi": "शक्ति; अधिकार",
    "meaningEn": "strength",
    "examples": [
      {
        "en": "Moral power is greater than physical power",
        "hi": "नैतिक शक्ति शारीरिक शक्ति से बड़ी होती है।"
      },
      {
        "en": "power cuts",
        "hi": "बिजली में कटौतियाँ"
      }
    ]
  },
  {
    "id": 139,
    "word": "school",
    "pos": "n",
    "pronunciation": "स्ूल",
    "meaningHi": "विद्यालय",
    "meaningEn": "learning place",
    "examples": []
  },
  {
    "id": 140,
    "word": "sister",
    "pos": "n",
    "pronunciation": "सिस्टर",
    "meaningHi": "बहन",
    "meaningEn": "female sibling",
    "examples": []
  },
  {
    "id": 141,
    "word": "sorrow",
    "pos": "n",
    "pronunciation": "सॉरो",
    "meaningHi": "दुःख, शोक",
    "meaningEn": "grief",
    "examples": [
      {
        "en": "Enlightened detachment is the best medicine for sorrow",
        "hi": "अनासक्ति दुःख की सबसे अच्छी दवा है।"
      }
    ]
  },
  {
    "id": 142,
    "word": "voice",
    "pos": "n",
    "pronunciation": "वोइस",
    "meaningHi": "आवाज़",
    "meaningEn": "spoken sound",
    "examples": [
      {
        "en": "a sweet voice",
        "hi": "एक मधुर आवाज"
      }
    ]
  },
  {
    "id": 143,
    "word": "water",
    "pos": "n / v",
    "pronunciation": "वॉटर",
    "meaningHi": "पानी, जल",
    "meaningEn": "liquid",
    "examples": [
      {
        "en": "Let's save water",
        "hi": "आओ, पानी बचाएँ"
      },
      {
        "en": "She is watering the plants",
        "hi": "वह पौधों में पानी पटा रही है।"
      }
    ]
  },
  {
    "id": 144,
    "word": "ask",
    "pos": "v",
    "pronunciation": "आस्क",
    "meaningHi": "पूछना",
    "meaningEn": "to request; to inquire",
    "examples": [
      {
        "en": "Don't ask too many questions",
        "hi": "ढेर सारे सवाल न पूूछो।"
      }
    ]
  },
  {
    "id": 145,
    "word": "begin",
    "pos": "v",
    "pronunciation": "बिगिन",
    "meaningHi": "शुरू करना",
    "meaningEn": "to start; to commence",
    "examples": [
      {
        "en": "Begin working, and the problems will be solved",
        "hi": "काम करना शुरू करो, और समस्ाएं सुलझ जाएंगी।"
      }
    ]
  },
  {
    "id": 146,
    "word": "choose",
    "pos": "v",
    "pronunciation": "चूज़",
    "meaningHi": "चुनना",
    "meaningEn": "to select; to pick",
    "examples": [
      {
        "en": "Never choose a bad character as your friend",
        "hi": "एक बुरे चरित्र वाले व्यक्ति को अपने दोस्त के रूप में कभी मत चुनो।"
      }
    ]
  },
  {
    "id": 147,
    "word": "die",
    "pos": "v",
    "pronunciation": "डाइ",
    "meaningHi": "मरना",
    "meaningEn": "to cease living",
    "examples": [
      {
        "en": "Lacs of children die of hunger even today in this world",
        "hi": "लाखों बच्चे इस दुनिया में आज भी भूूख से मर जाते हैं।"
      }
    ]
  },
  {
    "id": 148,
    "word": "dignified",
    "pos": "adj",
    "pronunciation": "डिग्निफ़ाइड",
    "meaningHi": "मानमर्यादापूर्ण",
    "meaningEn": "having dignity",
    "examples": [
      {
        "en": "a dignified behaviour",
        "hi": "मानमर्यादापूर्ण व्यवहार"
      }
    ]
  },
  {
    "id": 149,
    "word": "honour",
    "pos": "n",
    "pronunciation": "फ़ैैमलि",
    "meaningHi": "अौनर परिवार की प्रतिष्ा, संमान",
    "meaningEn": "great respect; integrity",
    "examples": []
  },
  {
    "id": 150,
    "word": "innocent",
    "pos": "adj",
    "pronunciation": "इनसन्ट",
    "meaningHi": "बेकसूर 2 भोलाभाला",
    "meaningEn": "not guilty",
    "examples": [
      {
        "en": "The police sometimes harass innocent people",
        "hi": "पुलिस कभी-कभी बेकसूूर लोगों को परेशान करती है।"
      },
      {
        "en": "an innocent face",
        "hi": "एक भोलाभाला चेहरा"
      }
    ]
  },
  {
    "id": 151,
    "word": "joyful",
    "pos": "adj",
    "pronunciation": "जोयफ़ल",
    "meaningHi": "आनंदपूर्ण, मस्तीभरा",
    "meaningEn": "happy",
    "examples": [
      {
        "en": "a joyful journey",
        "hi": "एक मस्ी भरी यात्रा"
      }
    ]
  },
  {
    "id": 152,
    "word": "justice",
    "pos": "n",
    "pronunciation": "जस्टिस",
    "meaningHi": "न्याय",
    "meaningEn": "fairness; moral rightness",
    "examples": [
      {
        "en": "Justice delayed is justice denied",
        "hi": "न्ाय में देरी न्ाय को नकारना है।"
      },
      {
        "en": "A justice of the Supreme Court of India",
        "hi": "उच्चतम न्ायालय के एक न्ायाधीश।"
      }
    ]
  },
  {
    "id": 153,
    "word": "leave",
    "pos": "n / v",
    "pronunciation": "लीव",
    "meaningHi": "छोड़ना; जाना",
    "meaningEn": "to go away; to depart",
    "examples": [
      {
        "en": "I am on leave",
        "hi": "मैं छुट्ी पर हँ।"
      },
      {
        "en": "I will leave this place on Monday next",
        "hi": "मैं अगले सोमवार को यह जगह छोड़ दूँगा।"
      }
    ]
  },
  {
    "id": 154,
    "word": "loyal",
    "pos": "adj",
    "pronunciation": "लोयल",
    "meaningHi": "वफादार, निष्ावान",
    "meaningEn": "faithful",
    "examples": [
      {
        "en": "a loyal servant",
        "hi": "एक वफादार सेवक"
      }
    ]
  },
  {
    "id": 155,
    "word": "loyalty",
    "pos": "n",
    "pronunciation": "लोयल्टि",
    "meaningHi": "वफादारी, निष्ा",
    "meaningEn": "faithfulness",
    "examples": [
      {
        "en": "His loyalty is beyond doubt",
        "hi": "उसकी वफादारी संदेह से परे है।"
      }
    ]
  },
  {
    "id": 156,
    "word": "moral",
    "pos": "adj",
    "pronunciation": "मॉरल",
    "meaningHi": "नैतिक",
    "meaningEn": "relating to right and wrong; virtuous",
    "examples": [
      {
        "en": "He has a strong moral character",
        "hi": "वह एक मजबूूत नैतिक चरित्र वाला व्यक्ति है।"
      }
    ]
  },
  {
    "id": 157,
    "word": "start",
    "pos": "n / v",
    "pronunciation": "स्टाट",
    "meaningHi": "शुरू करना",
    "meaningEn": "to begin",
    "examples": [
      {
        "en": "a good start",
        "hi": "एक अच्छी शुरुआत"
      },
      {
        "en": "start a business",
        "hi": "एक व्ापार शुरू करना"
      }
    ]
  },
  {
    "id": 158,
    "word": "strong",
    "pos": "adj",
    "pronunciation": "स्ट्रौंौंग",
    "meaningHi": "मज़बूत, शक्तिशाली",
    "meaningEn": "powerful",
    "examples": []
  },
  {
    "id": 159,
    "word": "trust",
    "pos": "n / v",
    "pronunciation": "ट्रस्ट",
    "meaningHi": "विश्वास, भरोसा",
    "meaningEn": "belief",
    "examples": [
      {
        "en": "Mutual trust is important in team work",
        "hi": "मिल कर साथ काम करने में आपसी विश्वास महत्त्वपूर्ण होता है।"
      },
      {
        "en": "Do you trust me?",
        "hi": "क्ा तुम मुझ पर विश्वास करते हो?"
      }
    ]
  },
  {
    "id": 160,
    "word": "try",
    "pos": "v",
    "pronunciation": "ट्राइ",
    "meaningHi": "प्रयास करना",
    "meaningEn": "to attempt",
    "examples": [
      {
        "en": "Keep trying, and you will succeed",
        "hi": "कोशिश करते रहो, और तुम्ें सफलता मिलेगी।"
      }
    ]
  },
  {
    "id": 161,
    "word": "value",
    "pos": "n / v",
    "pronunciation": "वैल्ू",
    "meaningHi": "मूल्य, कीमत",
    "meaningEn": "worth",
    "examples": [
      {
        "en": "Value time as it never returns",
        "hi": "समय की कीमत समझो क्योंोंकि यह कभी लौट कर नहीं आता।"
      },
      {
        "en": "I value your friendship",
        "hi": "तुम्ारी दोस्ी को मैं मूूल्यवान मानता हँ।"
      }
    ]
  },
  {
    "id": 162,
    "word": "accept",
    "pos": "v",
    "pronunciation": "अक्सेप्ट",
    "meaningHi": "स्वीकार करना",
    "meaningEn": "to agree to receive; to believe",
    "examples": [
      {
        "en": "Please accept my gift",
        "hi": "मेरा उपहार स्ीकार करो।"
      },
      {
        "en": "His proposal is not acceptable",
        "hi": "उसका प्रस्ताव स्ीकार करने योग्य नहीं है।"
      }
    ]
  },
  {
    "id": 163,
    "word": "bring",
    "pos": "v",
    "pronunciation": "ब्रंग",
    "meaningHi": "लाना",
    "meaningEn": "to carry toward; to cause",
    "examples": [
      {
        "en": "He always brings chocolates with him",
        "hi": "वह अपने साथ हमेशा चाॅकलेट लाता है।"
      }
    ]
  },
  {
    "id": 164,
    "word": "eat",
    "pos": "v",
    "pronunciation": "ईट",
    "meaningHi": "खाना",
    "meaningEn": "to consume food",
    "examples": []
  },
  {
    "id": 165,
    "word": "happen",
    "pos": "v",
    "pronunciation": "हैपन",
    "meaningHi": "होना, घटित होना",
    "meaningEn": "to occur; to take place",
    "examples": [
      {
        "en": "What happened?",
        "hi": "क्ा हुआ?"
      }
    ]
  },
  {
    "id": 166,
    "word": "law",
    "pos": "n",
    "pronunciation": "लो",
    "meaningHi": "कानून",
    "meaningEn": "a rule; the legal system",
    "examples": [
      {
        "en": "law abiding citizens",
        "hi": "कानूून को मानने वाले नागरिक"
      }
    ]
  },
  {
    "id": 167,
    "word": "pay",
    "pos": "n / v",
    "pronunciation": "पे",
    "meaningHi": "भुगतान करना",
    "meaningEn": "to give money for; wages",
    "examples": [
      {
        "en": "I receive my pay on the 1st date of every month",
        "hi": "मैं हर महीने की पहली तारीख को अपना वेतन प्राप्त कर लेता हँ।"
      },
      {
        "en": "I paid the price for the book",
        "hi": "मैंने किताब का मूूल्य भुगतान कर दिया।"
      }
    ]
  },
  {
    "id": 168,
    "word": "sit",
    "pos": "v",
    "pronunciation": "सिट",
    "meaningHi": "बैठना",
    "meaningEn": "to be seated",
    "examples": []
  },
  {
    "id": 169,
    "word": "stand",
    "pos": "n / v",
    "pronunciation": "स्ैन्ड",
    "meaningHi": "खड़ा होना",
    "meaningEn": "upright",
    "examples": [
      {
        "en": "Do you understand?",
        "hi": "क्ा तुम समझ रहे हो?"
      }
    ]
  },
  {
    "id": 170,
    "word": "watch",
    "pos": "n / v",
    "pronunciation": "वॉच",
    "meaningHi": "देखना; घड़ी",
    "meaningEn": "to observe",
    "examples": [
      {
        "en": "watchman",
        "hi": "निगरानी करने वाला गार्ड"
      },
      {
        "en": "She is watching TV",
        "hi": "वह टीवी देख रही है।"
      }
    ]
  },
  {
    "id": 171,
    "word": "write",
    "pos": "v",
    "pronunciation": "राइट",
    "meaningHi": "लिखना",
    "meaningEn": "to compose",
    "examples": []
  },
  {
    "id": 172,
    "word": "caring",
    "pos": "adj",
    "pronunciation": "केयरिंग",
    "meaningHi": "देखभाल के स्वभाव वाला",
    "meaningEn": "showing kindness and concern",
    "examples": []
  },
  {
    "id": 173,
    "word": "close",
    "pos": "adj / n / v",
    "pronunciation": "क्ोज़",
    "meaningHi": "निकट, समीप 2 घनिष्ट | समाप्ति | क्ोज़ बंद करना दरवाज़ा बंद",
    "meaningEn": "to shut; near; intimate",
    "examples": [
      {
        "en": "close to my house",
        "hi": "मेरे घर के निकट"
      },
      {
        "en": "a close friend",
        "hi": "एक नजदीकी मित्र"
      }
    ]
  },
  {
    "id": 174,
    "word": "courteous",
    "pos": "adj",
    "pronunciation": "कटिअस",
    "meaningHi": "शिष्ट व्यवहार करने वाला",
    "meaningEn": "polite and respectful",
    "examples": [
      {
        "en": "a courteous boy",
        "hi": "एक शिष्ट बालक"
      }
    ]
  },
  {
    "id": 175,
    "word": "courtesy",
    "pos": "n",
    "pronunciation": "कटसी",
    "meaningHi": "शिष्ट या सभ्य व्यवहार",
    "meaningEn": "polite behaviour; kindness",
    "examples": [
      {
        "en": "It is a common courtesy to say 'thank you' to someone who provides some help",
        "hi": "जो मदद करे उसे 'धन्यवाद' कहना एक सामान्य शिष्टाचार है।"
      }
    ]
  },
  {
    "id": 176,
    "word": "create",
    "pos": "v",
    "pronunciation": "क्रिएट",
    "meaningHi": "रचना करना, बनाना",
    "meaningEn": "to bring into existence; to make",
    "examples": [
      {
        "en": "Did God create this universe?",
        "hi": "क्ा ईश्वर ने इस ब्रहांड का सृजन किया?"
      }
    ]
  },
  {
    "id": 177,
    "word": "diligent",
    "pos": "adj",
    "pronunciation": "डिलिजन्ट",
    "meaningHi": "परिश्रमी",
    "meaningEn": "hardworking",
    "examples": []
  },
  {
    "id": 178,
    "word": "eye",
    "pos": "n",
    "pronunciation": "आइ",
    "meaningHi": "आँख",
    "meaningEn": "the organ of sight",
    "examples": []
  },
  {
    "id": 179,
    "word": "fight",
    "pos": "v",
    "pronunciation": "फ़ाइट",
    "meaningHi": "लड़ाई; लड़ना",
    "meaningEn": "to struggle; a battle",
    "examples": [
      {
        "en": "Shouldn't we fight against injustice?",
        "hi": "क्ा हमें अन्ाय से लड़ना नहीं चाहिए?"
      }
    ]
  },
  {
    "id": 180,
    "word": "house",
    "pos": "n",
    "pronunciation": "हाउस",
    "meaningHi": "घर",
    "meaningEn": "a building for living in",
    "examples": []
  },
  {
    "id": 181,
    "word": "immoral",
    "pos": "n",
    "pronunciation": "इम्मौरल",
    "meaningHi": "अनैतिक, जो नैतिकता के खिलाफ हो",
    "meaningEn": "wrong",
    "examples": [
      {
        "en": "Cheating a friend is an immoral act",
        "hi": "एक मित्र को धोखा देना एक अनैतिक काम है"
      }
    ]
  },
  {
    "id": 182,
    "word": "nature",
    "pos": "n",
    "pronunciation": "नेचर",
    "meaningHi": "प्रकृति; स्वभाव",
    "meaningEn": "the natural world",
    "examples": [
      {
        "en": "the beauty of nature",
        "hi": "प्रकृति का सौंदर्य"
      },
      {
        "en": "He has a friendly nature",
        "hi": "उसका स्वभाव मित्रतापूर्ण है।"
      }
    ]
  },
  {
    "id": 183,
    "word": "night",
    "pos": "n",
    "pronunciation": "नाइट",
    "meaningHi": "रात",
    "meaningEn": "darkness",
    "examples": []
  },
  {
    "id": 184,
    "word": "point",
    "pos": "n / v",
    "pronunciation": "पोइन्ट",
    "meaningHi": "बिंदु 2 मुख्य बात 3 दशमलव 4 जगह 5 संख्ा | 1 उंगली दिखाना 2 बतलाना 146 147 अंंगरेज़ी शब्द उच्ारण हिंदी में अर्थ",
    "meaningEn": "a sharp end; a purpose; a score",
    "examples": [
      {
        "en": "What were the main points of discussion?",
        "hi": "चर्चा की मुख्य बातें क्ा थीं?"
      },
      {
        "en": "At what point do we meet?",
        "hi": "किस जगह हम मिलें?"
      }
    ]
  },
  {
    "id": 185,
    "word": "polite",
    "pos": "adj",
    "pronunciation": "पलाइट",
    "meaningHi": "नम्र, शिष्ट, भद्र",
    "meaningEn": "well-mannered",
    "examples": [
      {
        "en": "Being polite is a mark of civilization",
        "hi": "विनम्र होना सभ्यता का एक चिह्न है।"
      }
    ]
  },
  {
    "id": 186,
    "word": "protect",
    "pos": "v",
    "pronunciation": "प्रटेक्ट",
    "meaningHi": "रक्षा करना",
    "meaningEn": "to guard",
    "examples": [
      {
        "en": "Protect children from bad influences",
        "hi": "बुरे प्रभावों से बचों की रक्षा करें।"
      }
    ]
  },
  {
    "id": 187,
    "word": "purpose",
    "pos": "n",
    "pronunciation": "पपस",
    "meaningHi": "उद्ेश्य",
    "meaningEn": "aim",
    "examples": [
      {
        "en": "What is the purpose of human life?",
        "hi": "मानव-जीवन का उद्देश्य क्ा है?"
      }
    ]
  },
  {
    "id": 188,
    "word": "simple",
    "pos": "adj",
    "pronunciation": "सिम्पल",
    "meaningHi": "सरल, आसान",
    "meaningEn": "easy",
    "examples": [
      {
        "en": "simple math",
        "hi": "सरल गणित"
      },
      {
        "en": "a sim- ple man",
        "hi": "एक सरल व्यक्ति"
      }
    ]
  },
  {
    "id": 189,
    "word": "sympathy",
    "pos": "n",
    "pronunciation": "सिम्पथि",
    "meaningHi": "सहानुभूति",
    "meaningEn": "compassion",
    "examples": [
      {
        "en": "Let us have sympathy for the poor",
        "hi": "हम गरीबों से सहानुभूति रखें।"
      }
    ]
  },
  {
    "id": 190,
    "word": "thought",
    "pos": "n",
    "pronunciation": "थोट",
    "meaningHi": "विचार, चिंतन",
    "meaningEn": "idea",
    "examples": [
      {
        "en": "A good thought can change life",
        "hi": "एक अच्ा विचार जीवन को बदल सकता है।"
      }
    ]
  },
  {
    "id": 191,
    "word": "woman",
    "pos": "n",
    "pronunciation": "वुमन",
    "meaningHi": "महिला, स्त्री",
    "meaningEn": "female adult",
    "examples": []
  },
  {
    "id": 192,
    "word": "young",
    "pos": "adj",
    "pronunciation": "यंग",
    "meaningHi": "युवा, जवान",
    "meaningEn": "not old",
    "examples": [
      {
        "en": "Yog is for both the young and the old",
        "hi": "योग जवान और बूूढ़े सभी के लिए है।"
      }
    ]
  },
  {
    "id": 193,
    "word": "almost",
    "pos": "adv",
    "pronunciation": "ओलमउस्ट",
    "meaningHi": "लगभग",
    "meaningEn": "nearly; not quite",
    "examples": [
      {
        "en": "Almost everybody has come",
        "hi": "लगभग सभी आ गए हैं।"
      }
    ]
  },
  {
    "id": 194,
    "word": "anger",
    "pos": "n",
    "pronunciation": "ऐंंगर",
    "meaningHi": "क्रोध, गुस्सा",
    "meaningEn": "a strong feeling of displeasure",
    "examples": [
      {
        "en": "Anger is one of the three doorways to hell",
        "hi": "गुस्ा नरक के तीन दरवाजों में से एक है।"
      }
    ]
  },
  {
    "id": 195,
    "word": "angry",
    "pos": "adj",
    "pronunciation": "ऐंंग्ी",
    "meaningHi": "क्रोधित, गुस्सा",
    "meaningEn": "feeling anger; furious",
    "examples": [
      {
        "en": "When angry, have a glass of cold water",
        "hi": "जब क्रोधित हो तो एक ग्ास ठंढा पानी पिओ।"
      }
    ]
  },
  {
    "id": 196,
    "word": "attention",
    "pos": "n",
    "pronunciation": "अटेंशन",
    "meaningHi": "ध्ान",
    "meaningEn": "notice; concentration of mind",
    "examples": [
      {
        "en": "Pay attention to what your teacher says",
        "hi": "अपने शिक्षक की बात पर ध्यान दो।"
      }
    ]
  },
  {
    "id": 197,
    "word": "Brahm",
    "pos": "n",
    "pronunciation": "ब्रह्म",
    "meaningHi": "निराकार निर्विशेष परमेश्वर जिनका कोई एक निश्चित रूप या आकार नहीं होता। इन्ें 'निर्गुण ब्रह्म' भी कहते हैं।",
    "meaningEn": "the ultimate reality; the supreme spirit",
    "examples": []
  },
  {
    "id": 198,
    "word": "Brahma",
    "pos": "n",
    "pronunciation": "ब्रह्ा",
    "meaningHi": "परब्रह्म-परमेश्वर द्ारा बनाए गए एक महादेवता जिन्ें हिंदू-धर्म के अनुसार संसार को रचने का दायित्व दिया गया है।",
    "meaningEn": "the creator deity in Hinduism",
    "examples": []
  },
  {
    "id": 199,
    "word": "Dharm",
    "pos": "n",
    "pronunciation": "आधारग्ंथ के रूप में स्ीकार करता है।  भगवान",
    "meaningHi": "भगवद्-धर्म यह वह धर्म है जो भगवद्-गीता को एकमात्र श्ीकृष्ण द्ारा दिया गया यह धर्म जातपात पर आधारित वर्णाश्रम धर्म से भिन्न है। कुछ लोग इसे उच्चतर",
    "meaningEn": "righteousness; moral duty; the right path",
    "examples": []
  },
  {
    "id": 200,
    "word": "dhyan",
    "pos": "n",
    "pronunciation": "ध्ान",
    "meaningHi": "ध्यान — एकाग्र चिंतन",
    "meaningEn": "meditation; focused contemplation",
    "examples": [
      {
        "en": "When attention is constantly pointed on one object, it is called dhyan",
        "hi": "जब चेतना किसी एक चीज पर लगातार केंद्रित रहे तो इसे ध्यान कहते हैं।"
      }
    ]
  },
  {
    "id": 201,
    "word": "dhyanyog",
    "pos": "n",
    "pronunciation": "ध्ानयोग",
    "meaningHi": "ध्यानयोग — ध्यान का मार्ग",
    "meaningEn": "the yoga of meditation",
    "examples": []
  },
  {
    "id": 202,
    "word": "early",
    "pos": "adj adv",
    "pronunciation": "अर्लीी",
    "meaningHi": "शीघ्र, जल्द",
    "meaningEn": "before the expected time",
    "examples": [
      {
        "en": "Early to bed and early to rise makes a man healthy, wealthy and wise",
        "hi": "जल्ी सोना, जल्ी उठना इंसान को स्वस्थ, समृद्ध और विवेकशील बनाता है।"
      }
    ]
  },
  {
    "id": 203,
    "word": "enough",
    "pos": "pron",
    "pronunciation": "इनफ़",
    "meaningHi": "पर्याप्त, काफी",
    "meaningEn": "as much as needed; sufficient",
    "examples": [
      {
        "en": "There is enough for everybody's need, nut never enough for anybody's greed",
        "hi": "सभी की जरूरतें पूूरी करने के लिए काफी है, लेकिन किसी की लोभपूूर्ति के लिए कभी कुछ भी काफी नहीं होता।"
      }
    ]
  },
  {
    "id": 204,
    "word": "experience",
    "pos": "n / v",
    "pronunciation": "रिअन्स",
    "meaningHi": "अनुभव",
    "meaningEn": "knowledge gained by doing; an event",
    "examples": [
      {
        "en": "experience teaches us more than books",
        "hi": "अनुभव हमें किताबों से अधिक सिखाता है।"
      },
      {
        "en": "We are experiencing some difficulties",
        "hi": "हमलोग कुछ कठिनाइयों का अनुभव कर रहे हैं।"
      }
    ]
  },
  {
    "id": 205,
    "word": "force",
    "pos": "n / v",
    "pronunciation": "फ़ोर्स",
    "meaningHi": "बल, शक्ति 2 सेना, पुलिस | दबाब देना, बाध्य करना",
    "meaningEn": "strength; power; to compel",
    "examples": [
      {
        "en": "The force of his speech shook people",
        "hi": "उसके भाषण की शक्ति ने लोगों को हिला दिया।"
      },
      {
        "en": "I was forced to sign the letter",
        "hi": "मुझे चिट्ी पर दस्तखत करने के लिए बाध्य किया गया।"
      }
    ]
  },
  {
    "id": 206,
    "word": "further",
    "pos": "adj",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "more; additional; to a greater distance",
    "examples": []
  },
  {
    "id": 207,
    "word": "Gita",
    "pos": "n",
    "pronunciation": "गीता",
    "meaningHi": "भगवद्- महाभारत के युद्ध के ठीक पहले श्ीकृष्ण के मुख से बोली गई ईश्वर की वाणी जिसे महर्षि वेदव्यास ने कविता का रूप दिया। यह हिंदुओं की कई पवित्र",
    "meaningEn": "the Bhagavad Gita, sacred Hindu scripture",
    "examples": []
  },
  {
    "id": 208,
    "word": "Krishn",
    "pos": "n",
    "pronunciation": "कृष्ण",
    "meaningHi": "श्ीकृष्ण श्ीकृष्ण श्ीराम के साथ-साथ हिंदू-धर्म के सबसे आदर्श प्रतिनिधि हैं। ईश्वर के अवतार माने जाने वाले श्ीकृष्ण ने ही भगवद्-गीता का कथन किया था जो",
    "meaningEn": "an incarnation of Lord Vishnu",
    "examples": []
  },
  {
    "id": 209,
    "word": "moksha",
    "pos": "n",
    "pronunciation": "मोक्ष",
    "meaningHi": "मोक्ष — जन्म-मृत्यु के चक्र से मुक्ति",
    "meaningEn": "liberation from the cycle of rebirth",
    "examples": [
      {
        "en": "Moksha is said to be the final goal of all humans",
        "hi": "मोक्ष सभी मनुष्यों का अंतिम लक्ष्य कहा जाता है।"
      }
    ]
  },
  {
    "id": 210,
    "word": "nirvana",
    "pos": "n",
    "pronunciation": "निर्वान",
    "meaningHi": "निर्वाण — परम शांति की अवस्था",
    "meaningEn": "the state of ultimate peace and liberation",
    "examples": [
      {
        "en": "Nirvana is the final goal of life",
        "hi": "निर्वाण जीवन का अंतिम लक्ष्य है।"
      },
      {
        "en": "exclama",
        "hi": "tion"
      }
    ]
  },
  {
    "id": 211,
    "word": "often",
    "pos": "adv",
    "pronunciation": "अॉफ़न",
    "meaningHi": "अकसर, प्रायः",
    "meaningEn": "frequently",
    "examples": [
      {
        "en": "He often visits our place",
        "hi": "वह अकसर हमारे यहाँ आता है।"
      }
    ]
  },
  {
    "id": 212,
    "word": "perhaps",
    "pos": "adv",
    "pronunciation": "पहैप्स",
    "meaningHi": "शायद, कदाचित",
    "meaningEn": "maybe",
    "examples": [
      {
        "en": "Perhaps he is unwilling",
        "hi": "वह शायद इच्ुक नहीं है।"
      }
    ]
  },
  {
    "id": 213,
    "word": "quite",
    "pos": "adv",
    "pronunciation": "क्ाइट",
    "meaningHi": "बिलकुल, नितांत",
    "meaningEn": "fairly",
    "examples": [
      {
        "en": "quite foolish",
        "hi": "बिलकुल मूर्खतापूर्ण"
      }
    ]
  },
  {
    "id": 214,
    "word": "Ram",
    "pos": "n",
    "pronunciation": "राम",
    "meaningHi": "श्ी राम अत्ंत प्राचीन काल में अयोध्ा के एक महान राजा थे। इन्ें ईश्वर का अवतार भी मानते हैं। इनके-जैसा सुदर्शन, शीलवान, वीर, परोपकारी, प्रजापालक, और",
    "meaningEn": "an incarnation of Lord Vishnu; a virtuous king",
    "examples": []
  },
  {
    "id": 215,
    "word": "rather",
    "pos": "adv",
    "pronunciation": "रैदर",
    "meaningHi": "किसी हद तक, थोड़ा",
    "meaningEn": "preferably",
    "examples": [
      {
        "en": "It’s rather cold today",
        "hi": "आज थोड़ी ठंढ है।"
      }
    ]
  },
  {
    "id": 216,
    "word": "really",
    "pos": "adv",
    "pronunciation": "रिअलि",
    "meaningHi": "सचमुच 2 आश्चर्य, रुचि, संदेह आदि व्यक्त करने के लिए प्रश्न-रूप में प्रयुक्त—! अर्थात, क्ा सचमुच?",
    "meaningEn": "truly",
    "examples": [
      {
        "en": "I am really surprised!",
        "hi": "मैं सचमुच चकित हँ!"
      }
    ]
  },
  {
    "id": 217,
    "word": "samadhi",
    "pos": "n",
    "pronunciation": "समाधि",
    "meaningHi": "समाधि — गहन ध्यान की अवस्था",
    "meaningEn": "a state of deep meditative absorption",
    "examples": []
  },
  {
    "id": 218,
    "word": "sense",
    "pos": "n",
    "pronunciation": "सेन्स",
    "meaningHi": "समझदारी, अच्छी परख या समझ",
    "meaningEn": "feeling",
    "examples": [
      {
        "en": "dress sense",
        "hi": "पोशाक की समझदारी"
      }
    ]
  },
  {
    "id": 219,
    "word": "several",
    "pos": "det pron",
    "pronunciation": "सेवरल",
    "meaningHi": "अनेक, कुछ",
    "meaningEn": "a few",
    "examples": [
      {
        "en": "There are several colours in a rainbow",
        "hi": "इंद्रधनुष में अनेक रंग होते हैं।"
      }
    ]
  },
  {
    "id": 220,
    "word": "Shiv",
    "pos": "n",
    "pronunciation": "शिव",
    "meaningHi": "शिव परब्रह्म-परमेश्वर द्ारा रचे गए एक महादेवता जिन्ें अंत में सृष्टि को समेटने की जिम्ेवारी दी गई है।",
    "meaningEn": "the destroyer and transformer deity in Hinduism",
    "examples": []
  },
  {
    "id": 221,
    "word": "smile",
    "pos": "n / v",
    "pronunciation": "स्माइल",
    "meaningHi": "मुस्ान, मुस्कराहट | मुस्कराना",
    "meaningEn": "happy expression",
    "examples": [
      {
        "en": "A good smile lights up the surroundings",
        "hi": "एक अच्छी मुस्ान परिवेश को प्रकाशित कर देती है।"
      }
    ]
  },
  {
    "id": 222,
    "word": "sometimes",
    "pos": "adv",
    "pronunciation": "सम्टाइम्ज़",
    "meaningHi": "कभीकभी अंंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ",
    "meaningEn": "occasionally",
    "examples": [
      {
        "en": "Sometimes I am in Delhi",
        "hi": "कभी-कभी मैं दिल्ी में रहता हँ।"
      }
    ]
  },
  {
    "id": 223,
    "word": "support",
    "pos": "n / v",
    "pronunciation": "सपोट",
    "meaningHi": "समर्थन और प्रोत्ाहन | समर्थन देना",
    "meaningEn": "to help",
    "examples": [
      {
        "en": "I support the law for population control",
        "hi": "मैं जनसंख्या नियंत्रण कानूून का समर्थन करता हँ।"
      }
    ]
  },
  {
    "id": 224,
    "word": "though",
    "pos": "conj",
    "pronunciation": "दो",
    "meaningHi": "यद्यपि, हालाँकि",
    "meaningEn": "although",
    "examples": [
      {
        "en": "Though old, he can still run",
        "hi": "हालाँकि वह बूूढ़ा है, वह फिरभी दौड़ सकता है।"
      }
    ]
  },
  {
    "id": 225,
    "word": "together",
    "pos": "adv",
    "pronunciation": "टुगेदर",
    "meaningHi": "साथ-साथ",
    "meaningEn": "jointly",
    "examples": [
      {
        "en": "They came together",
        "hi": "वे साथ-साथ आए"
      }
    ]
  },
  {
    "id": 226,
    "word": "tolerance",
    "pos": "n",
    "pronunciation": "टॉलरन्स",
    "meaningHi": "सहिष्णुता",
    "meaningEn": "acceptance of differences",
    "examples": [
      {
        "en": "religious tolerance",
        "hi": "धार्मिक सहिष्णुष्णुता"
      }
    ]
  },
  {
    "id": 227,
    "word": "Vishnu",
    "pos": "n",
    "pronunciation": "विष्ु",
    "meaningHi": "महादेवता विष्ु परब्रह्म-परमेश्वर के वह सगुण-साकार रूप हैं जो सृष्टि का पालन करते हैं।",
    "meaningEn": "the preserver deity in Hinduism",
    "examples": []
  },
  {
    "id": 228,
    "word": "yet",
    "pos": "adv conj",
    "pronunciation": "येट",
    "meaningHi": "तब तक, अब तक 2 फिरभी",
    "meaningEn": "still",
    "examples": [
      {
        "en": "I have not yet received my gift",
        "hi": "मुझे मेरा उपहार अभी तक नहीं मिला।"
      },
      {
        "en": "I gave him all that he wanted, yet he is unhappy",
        "hi": "जो कुछ वह चाहता था मैंने उसे सब दे दिया, फिरभी वह नाखुश है।"
      }
    ]
  },
  {
    "id": 229,
    "word": "across",
    "pos": "adv",
    "pronunciation": "अक्ॉस",
    "meaningHi": "आर-पार",
    "meaningEn": "from one side to the other",
    "examples": [
      {
        "en": "He walked across the field",
        "hi": "वह मैदान के एक ओर से दूसरी ओर चल कर गया।"
      }
    ]
  },
  {
    "id": 230,
    "word": "age",
    "pos": "n / v",
    "pronunciation": "एज",
    "meaningHi": "उम्र; युग",
    "meaningEn": "the length of time lived; an era",
    "examples": [
      {
        "en": "What's your age?",
        "hi": "तुम्ारी उम्र क्ा है?"
      },
      {
        "en": "modern age",
        "hi": "आधुनिक युग"
      }
    ]
  },
  {
    "id": 231,
    "word": "arm",
    "pos": "n / v",
    "pronunciation": "आम",
    "meaningHi": "भुजा, बाँह",
    "meaningEn": "upper limb of the body",
    "examples": [
      {
        "en": "fire arms",
        "hi": "आग्ेय अस्त्र"
      },
      {
        "en": "a country armed with nuclear weapons",
        "hi": "नाभिकीय अस्त्रों से लैस एक देश।"
      }
    ]
  },
  {
    "id": 232,
    "word": "aware",
    "pos": "adj",
    "pronunciation": "अवेअ",
    "meaningHi": "जागरूक, जानकारी रखने वाला",
    "meaningEn": "conscious",
    "examples": [
      {
        "en": "The nation needs aware citizens",
        "hi": "देश को जागरूक नागरिकों की जरूरत है।"
      }
    ]
  },
  {
    "id": 233,
    "word": "birth",
    "pos": "n",
    "pronunciation": "बर्थ",
    "meaningHi": "जन्म",
    "meaningEn": "the process of being born",
    "examples": []
  },
  {
    "id": 234,
    "word": "composed",
    "pos": "adj",
    "pronunciation": "कम्ोज़्ड",
    "meaningHi": "शांतचित्त 2 से निर्मित, से बना हुआ 1",
    "meaningEn": "calm",
    "examples": [
      {
        "en": "A cool and composed man",
        "hi": "एक ठंढा और शांतचित्त व्यक्ति।"
      },
      {
        "en": "Air is composed of several gases",
        "hi": "हवा कई गैसों से बनी हुई होती है।"
      }
    ]
  },
  {
    "id": 235,
    "word": "confidence",
    "pos": "n",
    "pronunciation": "भरोसा है।",
    "meaningHi": "कॉन्फ़िडन्स भरोसा या पक्का विश्ास",
    "meaningEn": "belief in oneself; trust",
    "examples": [
      {
        "en": "I have full confidence in you",
        "hi": "मुझे तुम पर पूूरा"
      }
    ]
  },
  {
    "id": 236,
    "word": "corruption",
    "pos": "n",
    "pronunciation": "करपशन",
    "meaningHi": "भ्रष्टाचार, रिश्वरखोरी",
    "meaningEn": "dishonesty",
    "examples": [
      {
        "en": "Hong Kong has shown how corruption can be removed effectively",
        "hi": "हौंगकौंग ने यह दिखाया है कि भ्रष्टाचार कैसे प्रभावी तरीके से हटाया जा सकता है।"
      }
    ]
  },
  {
    "id": 237,
    "word": "cruelty",
    "pos": "n",
    "pronunciation": "क्ूअल्टि",
    "meaningHi": "क्रूरता, निर्दयता",
    "meaningEn": "unkindness",
    "examples": [
      {
        "en": "Cruelty is a demonical trait",
        "hi": "निर्दयता एक आसुरी लक्षण है।"
      }
    ]
  },
  {
    "id": 238,
    "word": "culture",
    "pos": "n",
    "pronunciation": "कलचर",
    "meaningHi": "संस्कृति",
    "meaningEn": "customs and beliefs of a group",
    "examples": [
      {
        "en": "Different countries have different cultures",
        "hi": "अलग-अलग देशों की अलग-अलग संस्कृति होती है।"
      }
    ]
  },
  {
    "id": 239,
    "word": "destroy",
    "pos": "v",
    "pronunciation": "डिस्ट्रोय",
    "meaningHi": "नष्ट करना अंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ",
    "meaningEn": "to demolish",
    "examples": [
      {
        "en": "The atom bomb completely destroyed Hiroshima and Nagasaki cities in Japan in 1945",
        "hi": "अणु बम ने जापान के हिरोशिमा और नागासाकी शहरों को वर्ष 1945 में पूूरी तरह नष्ट कर दिया।"
      }
    ]
  },
  {
    "id": 240,
    "word": "doubt",
    "pos": "n / v",
    "pronunciation": "डाउट",
    "meaningHi": "संदेह, शक | संदेह करना अंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ",
    "meaningEn": "uncertainty; to question",
    "examples": [
      {
        "en": "I have no doubts that he will come",
        "hi": "मुझे कोई शक नहीं कि वह आएगा।"
      },
      {
        "en": "I do not doubt his integrity",
        "hi": "मैं उसकी ईमानदारी पर संदेह नहीं करता।"
      }
    ]
  },
  {
    "id": 241,
    "word": "dream",
    "pos": "n / v",
    "pronunciation": "ड्ीम",
    "meaningHi": "सपना; स्वप्न",
    "meaningEn": "images during sleep; an aspiration",
    "examples": []
  },
  {
    "id": 242,
    "word": "drink",
    "pos": "n / v",
    "pronunciation": "ड्रिंंक",
    "meaningHi": "पीना; पेय",
    "meaningEn": "to swallow liquid; a beverage",
    "examples": []
  },
  {
    "id": 243,
    "word": "ear",
    "pos": "n",
    "pronunciation": "इअर",
    "meaningHi": "कान",
    "meaningEn": "the organ of hearing",
    "examples": []
  },
  {
    "id": 244,
    "word": "education",
    "pos": "n",
    "pronunciation": "एजुकेशन",
    "meaningHi": "शिक्षाक्षा, तालीम",
    "meaningEn": "the process of learning; instruction",
    "examples": []
  },
  {
    "id": 245,
    "word": "equal",
    "pos": "n adj / v",
    "pronunciation": "ईक्वल",
    "meaningHi": "बराबरी वाला, बराबर | बराबर होना या करना",
    "meaningEn": "the same in quantity or value; fair",
    "examples": [
      {
        "en": "'Equal opportunity for all' is the motto of democracy",
        "hi": "'सबों के लिए समान अवसर' लोक- तंत्र का नीतिवाक्य है।"
      },
      {
        "en": "Virat has equaled Sachin's record",
        "hi": "विराट ने सचिन के रिकॅार्ड को बराबर कर दिया है।"
      }
    ]
  },
  {
    "id": 246,
    "word": "feeling",
    "pos": "n",
    "pronunciation": "फ़ीीलिंग",
    "meaningHi": "अहसास, भावना फ़ीीमेल मादा, स्त्री",
    "meaningEn": "an emotion; a sensation",
    "examples": [
      {
        "en": "care for others' feelings",
        "hi": "दूसरों की भावनाओं की परवाह करो"
      },
      {
        "en": "a herd of female deer",
        "hi": "मादा हिरणों का एक झुंड"
      }
    ]
  },
  {
    "id": 247,
    "word": "finger",
    "pos": "n",
    "pronunciation": "फ़िंंगर",
    "meaningHi": "अंगुली",
    "meaningEn": "a part of the hand",
    "examples": []
  },
  {
    "id": 248,
    "word": "genuine",
    "pos": "adj",
    "pronunciation": "जेन्युइन",
    "meaningHi": "असली, सचमुच का",
    "meaningEn": "real",
    "examples": [
      {
        "en": "genuine love",
        "hi": "सचमुच का प्रेम"
      }
    ]
  },
  {
    "id": 249,
    "word": "greed",
    "pos": "n",
    "pronunciation": "ग्रीड",
    "meaningHi": "लालच ग्ीन वेज- टबल्स हरी सब््जियाँ",
    "meaningEn": "excessive desire for wealth",
    "examples": [
      {
        "en": "Too much of greed may land one in trouble",
        "hi": "अत्यधिक लोभ किसी को समस्ा में डाल सकता है।"
      },
      {
        "en": "Green vegetables must form a part of our daily diet",
        "hi": "हरी सब््जियां हमारे रोज के भोजन का एक हिस्ा होनी ही चाहिए।"
      }
    ]
  },
  {
    "id": 250,
    "word": "hatred",
    "pos": "n",
    "pronunciation": "हेट्रिड",
    "meaningHi": "घृणा, नफरत हैव किसी के पास कुछ होना साधारणतः इसका प्रयोग सहायक क्रिया के रूप में होता है, जैसे",
    "meaningEn": "intense dislike",
    "examples": [
      {
        "en": "Hatred cannot lead to God and goodness",
        "hi": "घृणा ईश्वर और अच्ाई की ओर नहीं ले जा सकती।"
      },
      {
        "en": "I have eaten",
        "hi": "मैंने खा लिया है।"
      }
    ]
  },
  {
    "id": 251,
    "word": "inspired",
    "pos": "adj",
    "pronunciation": "इन्पाइअड",
    "meaningHi": "प्रेरित, प्रेरणापूर्ण इन्परेशन प्रेरणा",
    "meaningEn": "motivated",
    "examples": [
      {
        "en": "a politician inspired by Gandhiji",
        "hi": "गाँधीजी से प्रेरित एक राजनेता"
      },
      {
        "en": "draw inspiration from somebody",
        "hi": "किसी से प्रेरणा प्राप्त करना"
      }
    ]
  },
  {
    "id": 252,
    "word": "intellect",
    "pos": "n",
    "pronunciation": "इन्टलेक्ट",
    "meaningHi": "प्रज्ा, बुद्धि इन्टलेक्ुअल बौद्धिक व्यक्ति इन्टलेक्ुअल बौद्धिक, बुद्धि से संबंध रखने वाला इंटेलिजन्स बुद्धि, अक्ल",
    "meaningEn": "mental power",
    "examples": [
      {
        "en": "He is an intellectual",
        "hi": "वह एक बौद्धिक व्यक्ति है।"
      },
      {
        "en": "intellectual development",
        "hi": "बौद्धिक विकास"
      }
    ]
  },
  {
    "id": 253,
    "word": "leg",
    "pos": "n",
    "pronunciation": "लेग",
    "meaningHi": "टाँग, पैर",
    "meaningEn": "lower limb of the body",
    "examples": []
  },
  {
    "id": 254,
    "word": "misery",
    "pos": "n",
    "pronunciation": "मिज़रि",
    "meaningHi": "दुःख, घोर तकलीफ",
    "meaningEn": "suffering",
    "examples": [
      {
        "en": "There is no end to their miseries",
        "hi": "उनके दुखों का कोई अंत नहीं है।"
      }
    ]
  },
  {
    "id": 255,
    "word": "mouth",
    "pos": "n",
    "pronunciation": "माउथ",
    "meaningHi": "मुँह, मुख",
    "meaningEn": "face opening",
    "examples": []
  },
  {
    "id": 256,
    "word": "praise",
    "pos": "n / v",
    "pronunciation": "प्रेज़",
    "meaningHi": "तारीफ, प्रशंसा | प्रशंसा करना",
    "meaningEn": "approval",
    "examples": [
      {
        "en": "Remain equally composed in praise and blame is the message of the Bhagavad-Gita",
        "hi": "प्रशंसा और निंदा में समान रहें, यह भगवद्-गीता का संदेश है।"
      },
      {
        "en": "Shouldn't we praise the virtuous?",
        "hi": "क्ा हम सदाचारियों की प्रशंसा न करें?"
      }
    ]
  },
  {
    "id": 257,
    "word": "principle",
    "pos": "n",
    "pronunciation": "प्रिन्पल",
    "meaningHi": "सिद्धांद्धांत 2 नियम 1",
    "meaningEn": "rule",
    "examples": [
      {
        "en": "He was a man of high principles",
        "hi": "वह ऊँचे सिद्धांद्धांतों पर चलने वाला एक व्यक्ति था।"
      },
      {
        "en": "There are certain fundamental principles behind teambuilding",
        "hi": "टीम बनाने के पीछे कुछ आधारभूूत नियम होते हैं।"
      }
    ]
  },
  {
    "id": 258,
    "word": "shoulder",
    "pos": "n",
    "pronunciation": "शोल्डर",
    "meaningHi": "कंधा",
    "meaningEn": "body joint",
    "examples": []
  },
  {
    "id": 259,
    "word": "success",
    "pos": "n",
    "pronunciation": "सक्ेस",
    "meaningHi": "सफलता",
    "meaningEn": "achievement",
    "examples": []
  },
  {
    "id": 260,
    "word": "suffer",
    "pos": "v",
    "pronunciation": "सफ़र",
    "meaningHi": "कष्ट उठाना",
    "meaningEn": "to endure",
    "examples": [
      {
        "en": "An ordinary citizen has to suffer everyday",
        "hi": "एक साधारण नागरिक को हर दिन कष्ट उठाना पड़ता है।"
      }
    ]
  },
  {
    "id": 261,
    "word": "violence",
    "pos": "n",
    "pronunciation": "वाइअलन्स",
    "meaningHi": "हिंसा",
    "meaningEn": "physical force",
    "examples": [
      {
        "en": "Violence is not a mark of a developed civilization",
        "hi": "हिंसा एक विकसित सभ्यता का लक्षण नहीं है।"
      }
    ]
  },
  {
    "id": 262,
    "word": "afraid",
    "pos": "adj",
    "pronunciation": "अफ्े़ड",
    "meaningHi": "डरा हुआ, भयभीत",
    "meaningEn": "feeling fear; scared",
    "examples": [
      {
        "en": "afraid of dogs",
        "hi": "कुतों से डरने वाला"
      }
    ]
  },
  {
    "id": 263,
    "word": "air",
    "pos": "n",
    "pronunciation": "एअ",
    "meaningHi": "हवा",
    "meaningEn": "the atmosphere; a manner",
    "examples": [
      {
        "en": "Let the air be pollution-free",
        "hi": "हवा को प्रदूषण-मुक्त रहने दो।"
      }
    ]
  },
  {
    "id": 264,
    "word": "avatar",
    "pos": "n",
    "pronunciation": "अवतार",
    "meaningHi": "अवतार — ईश्वर का पृथ्वी पर अवतरण",
    "meaningEn": "an incarnation of God on earth",
    "examples": [
      {
        "en": "Lord Krishn is said to be an avatar of God",
        "hi": "श्ीकृष्ण को ईश्वर का अवतार कहा जाता है।"
      },
      {
        "en": "This medicine is not available in the market",
        "hi": "यह दवा बाजार में उपलब्ध नहीं है।"
      }
    ]
  },
  {
    "id": 265,
    "word": "car",
    "pos": "n",
    "pronunciation": "कार",
    "meaningHi": "मोटरकार काबोहाइड्रेट भोजन से उपलब्ध एक तत्त्व, जैसे शक्कर, जो शरीर को ऊर्जा प्रदान करता है",
    "meaningEn": "a motor vehicle",
    "examples": [
      {
        "en": "Food grains contain much carbohydrate",
        "hi": "अन्न में काफी काबोहाइड्ेट होता है।"
      }
    ]
  },
  {
    "id": 266,
    "word": "choice",
    "pos": "n",
    "pronunciation": "चोइस",
    "meaningHi": "पसंद, चुनाव",
    "meaningEn": "an act of selecting; an option",
    "examples": [
      {
        "en": "a good choice",
        "hi": "एक अच्ा चुनाव"
      }
    ]
  },
  {
    "id": 267,
    "word": "church",
    "pos": "n",
    "pronunciation": "चर्च",
    "meaningHi": "गिरजाघर ईसाइयों का",
    "meaningEn": "place of worship",
    "examples": []
  },
  {
    "id": 268,
    "word": "clean",
    "pos": "adj / v",
    "pronunciation": "क्ीन",
    "meaningHi": "साफ-सुथरा | साफ करना",
    "meaningEn": "free from dirt; to remove dirt",
    "examples": [
      {
        "en": "a clean environment",
        "hi": "एक साफ-सुथरा वातावरण"
      },
      {
        "en": "cleaning my room",
        "hi": "मेरा कमरा साफ कर रहा"
      }
    ]
  },
  {
    "id": 269,
    "word": "country",
    "pos": "n",
    "pronunciation": "कन्ट्रि",
    "meaningHi": "देश 2 देहात",
    "meaningEn": "a nation; rural area",
    "examples": [
      {
        "en": "India is a big country",
        "hi": "भारत एक बड़ा देश है।"
      },
      {
        "en": "They spent a nice day in the country",
        "hi": "उनोंने देहातक्षेत्र में एक अच्ा दिन गुजारा।"
      }
    ]
  },
  {
    "id": 270,
    "word": "emotion",
    "pos": "n",
    "pronunciation": "इमोशन",
    "meaningHi": "भावना, मनोभाव इमोशनल भावनात्मक",
    "meaningEn": "a strong feeling",
    "examples": [
      {
        "en": "Can there be a human being without emotions?",
        "hi": "क्ा भावनाओं के बिना कोई इंसान हो सकता है?"
      },
      {
        "en": "an emotional outburst",
        "hi": "एक भावनात्मक विस्ोट"
      }
    ]
  },
  {
    "id": 271,
    "word": "ground",
    "pos": "n",
    "pronunciation": "ग्ाउन्ड",
    "meaningHi": "भूमि, मैदान 2 किसी बात का आधार",
    "meaningEn": "the earth's surface; soil",
    "examples": [
      {
        "en": "On what ground are you making the allegations?",
        "hi": "किस आधार पर आप आरोप लगा रहे हैं?"
      }
    ]
  },
  {
    "id": 272,
    "word": "practice",
    "pos": "n",
    "pronunciation": "प्ैक्टिस",
    "meaningHi": "अभ्यास",
    "meaningEn": "repeated doing",
    "examples": [
      {
        "en": "Players are having hard practice",
        "hi": "खिलाड़ियों का अभ्ास जम कर चल रहा है।"
      },
      {
        "en": "Animal sacrifice is an old but bad practice",
        "hi": "पशुबलि एक पुरानी लेकिन बुरी प्रथा है।"
      }
    ]
  },
  {
    "id": 273,
    "word": "Prakriti",
    "pos": "n",
    "pronunciation": "परा प्रकृति",
    "meaningHi": "पराप्रकृति परब्रह्म-परमेश्वर की वह शक्ति जिससे मिल कर परब्रह्म-परमेश्वर ब्रह्मांडों, महादेवताओं, देवताओं और अन्य जीवों की रचना करते हैं।",
    "meaningEn": "nature; the material world",
    "examples": []
  },
  {
    "id": 274,
    "word": "proud",
    "pos": "adj",
    "pronunciation": "प्राउड",
    "meaningHi": "अभिमानी, गर्वान्वित प्ॉविडेंट फ़न्ड भविष्यनिधि कामकाज करने वालों की कमाई का एक अंश जिस निधि में उनके भविष्य में काम आने के लिए डाल दिया जाता है, उसे",
    "meaningEn": "self-respecting",
    "examples": [
      {
        "en": "proud parents",
        "hi": "गर्वान्वित माता-पिता"
      },
      {
        "en": "For your future economic security, you must open a Public Provident Fund Account in a bank",
        "hi": "अपने भविष्य की आर्थिक सुरक्षा के लिए तुम्ें एक बैंक में पब्लिक प्रॉविडेंट फंड का अकाउंट जरूर खोलना चाहिए।"
      }
    ]
  },
  {
    "id": 275,
    "word": "sorry",
    "pos": "adj",
    "pronunciation": "सॉरि",
    "meaningHi": "खेद है, क्षमा करें खेद व्यक्त करने या माफी माँगने के लिए प्रयोग किया जाने वाला शब्द",
    "meaningEn": "regretful",
    "examples": [
      {
        "en": "Sorry, I hurt you!",
        "hi": "क्षमा करो, मैंने तुम्ें दुःख पहुँचाया!"
      }
    ]
  },
  {
    "id": 276,
    "word": "sound",
    "pos": "n / v",
    "pronunciation": "साउन्ड",
    "meaningHi": "ध्वनि, आवाज | मालूम पड़ना, जान पड़ना 184 185 अंंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ",
    "meaningEn": "noise; healthy",
    "examples": [
      {
        "en": "It sounds as if he is always busy",
        "hi": "ऐसा जान पड़ता है जैसे वह हमेशा व्यस्त रहता है।"
      }
    ]
  },
  {
    "id": 277,
    "word": "street",
    "pos": "n",
    "pronunciation": "स्ट्रीट",
    "meaningHi": "गली 2 पथ, सड़क",
    "meaningEn": "road",
    "examples": [
      {
        "en": "जैसे, ब्रिटिश प्रधान मंत्री का पता 10, Downing Street",
        "hi": "10, डाऊनिंग पथ"
      }
    ]
  },
  {
    "id": 278,
    "word": "trinity",
    "pos": "n",
    "pronunciation": "ट्रिनिटी",
    "meaningHi": "त्रिमूर्ति — ब्रह्मा, विष्णु, शिव",
    "meaningEn": "the three main Hindu deities: Brahma, Vishnu, Shiva",
    "examples": [
      {
        "en": "Brahma, Vishnu and Shiva are called the holy trinity in Hinduism",
        "hi": "हिंदू-धर्म में ब्रह्ा, विष्णु और शिव को पवित्र त्रिमूूर्ति कहते हैं।"
      }
    ]
  },
  {
    "id": 279,
    "word": "affection",
    "pos": "n",
    "pronunciation": "अफ़ेक्शन",
    "meaningHi": "स्ेह, प्ार अंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ",
    "meaningEn": "love",
    "examples": [
      {
        "en": "Children need affection",
        "hi": "बचों को स्ेह की जरूरत होती है।"
      }
    ]
  },
  {
    "id": 280,
    "word": "answer",
    "pos": "n / v",
    "pronunciation": "आन्सर",
    "meaningHi": "उत्तर, जवाब",
    "meaningEn": "a reply; to respond",
    "examples": [
      {
        "en": "Do you have an answer?",
        "hi": "क्ा तुम्ारे पास कोई जवाब है?"
      },
      {
        "en": "Did she answer quickly?",
        "hi": "क्ा उसने जल्ी से जवाब दिया?"
      }
    ]
  },
  {
    "id": 281,
    "word": "ashamed",
    "pos": "adj",
    "pronunciation": "अशेम्ड",
    "meaningHi": "लज््जित",
    "meaningEn": "shamed",
    "examples": [
      {
        "en": "I am ashamed at your conduct",
        "hi": "मैं तुम्ारे व्यवहार पर शर्मिंदा हँ।"
      }
    ]
  },
  {
    "id": 282,
    "word": "awake",
    "pos": "adj",
    "pronunciation": "अवेक",
    "meaningHi": "जगा हुआ",
    "meaningEn": "alert",
    "examples": [
      {
        "en": "Is he awake?",
        "hi": "क्ा वह जगा हुआ है?"
      }
    ]
  },
  {
    "id": 283,
    "word": "behaviour",
    "pos": "n",
    "pronunciation": "बिहेवियर",
    "meaningHi": "आचरण, व्यवहार",
    "meaningEn": "the way one acts",
    "examples": [
      {
        "en": "Good behaviour is always appreciated",
        "hi": "अच्े व्यवहार की हमेशा तारीफ होती है।"
      }
    ]
  },
  {
    "id": 284,
    "word": "cause",
    "pos": "n / v",
    "pronunciation": "कौज़",
    "meaningHi": "कारण | उत्पन्न करना, कारण बनना",
    "meaningEn": "a reason; to make happen",
    "examples": [
      {
        "en": "the root cause of the problem",
        "hi": "समस्ा का मूूल कारण"
      },
      {
        "en": "Heavy rains caused traffic jams",
        "hi": "ज्ादा बारिश ट्रैफिक-जाम का कारण बनी।"
      }
    ]
  },
  {
    "id": 285,
    "word": "cheat",
    "pos": "n / v",
    "pronunciation": "चीट",
    "meaningHi": "धोखेबाज | धोखा देना",
    "meaningEn": "to act dishonestly",
    "examples": [
      {
        "en": "Beware of cheats",
        "hi": "धोखेबाजों से सावधान रहें।"
      },
      {
        "en": "Cheating is an immoral act",
        "hi": "धोखा देना एक अनैतिक आचरण है।"
      }
    ]
  },
  {
    "id": 286,
    "word": "class",
    "pos": "n",
    "pronunciation": "क्ास",
    "meaningHi": "वर्ग, कक्षा",
    "meaningEn": "a group; a lesson; a category",
    "examples": [
      {
        "en": "She is in class twelve",
        "hi": "वह बारहवीं कक्षा में है।"
      }
    ]
  },
  {
    "id": 287,
    "word": "committed",
    "pos": "adj",
    "pronunciation": "कमिटेड",
    "meaningHi": "प्रतिबद्ध, निष्ावान",
    "meaningEn": "dedicated; devoted",
    "examples": [
      {
        "en": "committed to each other",
        "hi": "एक दूसरे के प्रति निष्ठावान"
      }
    ]
  },
  {
    "id": 288,
    "word": "concentrate",
    "pos": "v",
    "pronunciation": "कॉन्सन्ट्रेट",
    "meaningHi": "एकाग्र करना, ध्ान लगाना",
    "meaningEn": "to focus",
    "examples": [
      {
        "en": "You can concentrate better in early hours of morning",
        "hi": "तुम सुबह-सुबह ब्ाह्ममुहूर्त में ज्ादा अच्े से ध्यान केंद्रित कर सकते हो।"
      }
    ]
  },
  {
    "id": 289,
    "word": "conduct",
    "pos": "n / v",
    "pronunciation": "कान्डक्ट",
    "meaningHi": "आचरण, व्यवहार | 1 आचरण करना 2 संचालन करना 44 45 अंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ",
    "meaningEn": "behaviour",
    "examples": [
      {
        "en": "good conduct",
        "hi": "अच्ा आचरण"
      },
      {
        "en": "He always conducts himself well",
        "hi": "वह हमेशा अच्ा आचरण करता है।"
      }
    ]
  },
  {
    "id": 290,
    "word": "confident",
    "pos": "adj",
    "pronunciation": "कॉन्फ़िडन्ट",
    "meaningHi": "आत्मविश्ासी, विश्ासपूर्ण",
    "meaningEn": "self-assured",
    "examples": [
      {
        "en": "He is very confident",
        "hi": "वह अत्ंत आत्मविश्वासी है।"
      }
    ]
  },
  {
    "id": 291,
    "word": "cruel",
    "pos": "adj",
    "pronunciation": "क्ूअल",
    "meaningHi": "निर्दयी, क्रूर",
    "meaningEn": "causing pain",
    "examples": [
      {
        "en": "Killing animals in the name of sacrifice is a cruel practice",
        "hi": "कुरबानी के नाम पर जानवरों की हत्ा एक क्रूूर प्रथा है।"
      }
    ]
  },
  {
    "id": 292,
    "word": "decent",
    "pos": "adj",
    "pronunciation": "डीसन्ट",
    "meaningHi": "शालीन, सुघड़",
    "meaningEn": "respectable; adequate",
    "examples": [
      {
        "en": "a decent girl",
        "hi": "एक शालीन लड़की"
      }
    ]
  },
  {
    "id": 293,
    "word": "encourage",
    "pos": "v",
    "pronunciation": "इन्करिज",
    "meaningHi": "साहस देना, प्रोत्साहित करना, हिम्मत बढ़ाना",
    "meaningEn": "to support",
    "examples": [
      {
        "en": "encourage questioning",
        "hi": "सवाल पूूछने को प्रोत्साहित करना"
      }
    ]
  },
  {
    "id": 294,
    "word": "energy",
    "pos": "n",
    "pronunciation": "एनर्जीी",
    "meaningHi": "ऊर्जा 2 बहुत सक्रिय रहने की क्षमता, ताकत 1",
    "meaningEn": "the power to do work; vitality",
    "examples": [
      {
        "en": "Light and sound are both forms of energy",
        "hi": "प्रकाश और आवाज दोनों ऊर्जा के रूप हैं।"
      },
      {
        "en": "After working for ten hours, my energy is exhausted",
        "hi": "दस घंटे काम करने के बाद मेरी सक्रिय रहने की ताकत खत्म हो गई है।"
      }
    ]
  },
  {
    "id": 295,
    "word": "enmity",
    "pos": "n",
    "pronunciation": "एन्मटि",
    "meaningHi": "दुश्मनी, शत्ुता",
    "meaningEn": "hostility",
    "examples": [
      {
        "en": "Enmity is a negative feeling",
        "hi": "शत्रुता एक नकारात्मक भावना है।"
      }
    ]
  },
  {
    "id": 296,
    "word": "example",
    "pos": "n",
    "pronunciation": "इग्ाम्प्ल",
    "meaningHi": "उदाहरण",
    "meaningEn": "a sample; an instance",
    "examples": [
      {
        "en": "Sri Ram is a perfect example of a noble king",
        "hi": "श्ीराम उत्तम राजा के एक पूर्ण उदाहरण हैं।"
      }
    ]
  },
  {
    "id": 297,
    "word": "exist",
    "pos": "v",
    "pronunciation": "इग्जि़स्ट",
    "meaningHi": "जीवित रहना, अस्तित्व में होना",
    "meaningEn": "",
    "examples": [
      {
        "en": "Dinosaurs do not exist on earth now",
        "hi": "डायनासोर अब धरती पर अस्तित्व में नहीं हैं।"
      }
    ]
  },
  {
    "id": 298,
    "word": "failure",
    "pos": "n",
    "pronunciation": "फे़ल्यर",
    "meaningHi": "असफलता, नाकामयाबी",
    "meaningEn": "lack of success",
    "examples": [
      {
        "en": "Failure is always a great teacher",
        "hi": "असफलता सदा एक महान शिक्षक होती है।"
      }
    ]
  },
  {
    "id": 299,
    "word": "false",
    "pos": "adj",
    "pronunciation": "फ़ॉल्स",
    "meaningHi": "गलत, झूठा, असत्य फ़मिलिअ- र जाना-पहचाना, सुपरिचित",
    "meaningEn": "untrue",
    "examples": [
      {
        "en": "false allegation",
        "hi": "झूठा आरोप"
      },
      {
        "en": "a familiar name",
        "hi": "एक जाना-पहचाना नाम"
      }
    ]
  },
  {
    "id": 300,
    "word": "focus",
    "pos": "n",
    "pronunciation": "फ़ोकस",
    "meaningHi": "किरण-केंद्र, वह बिंदु जहाँ किरणें एकत्र होती हैं The . . फोटो धुँधले हैं। शायद कैमरे का किरणकेंद्र ठीक नहीं था।",
    "meaningEn": "to concentrate; a centre of attention",
    "examples": []
  },
  {
    "id": 301,
    "word": "grief",
    "pos": "n",
    "pronunciation": "ग्ीफ़",
    "meaningHi": "गहरा शोक",
    "meaningEn": "deep sorrow; mourning",
    "examples": [
      {
        "en": "grief-stricken family",
        "hi": "शोकसंतप्त परिवार"
      }
    ]
  },
  {
    "id": 302,
    "word": "group",
    "pos": "n",
    "pronunciation": "ग्ुप",
    "meaningHi": "समूूह",
    "meaningEn": "a number of things together",
    "examples": [
      {
        "en": "a self-help group of women",
        "hi": "स्त्रियों का एक स्वयं-सहायता समूूह।"
      }
    ]
  },
  {
    "id": 303,
    "word": "guilt",
    "pos": "n",
    "pronunciation": "गिल्ट",
    "meaningHi": "अपराधबोध, दोषभावना 88 89 H अंंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ",
    "meaningEn": "the fact of having committed a wrong",
    "examples": [
      {
        "en": "After cheating my friend I developed a feeling of guilt",
        "hi": "अपने मित्र को धोखा देने के बाद मेरे अंदर एक अपराधबोध पैदा हो गया।"
      }
    ]
  },
  {
    "id": 304,
    "word": "guilty",
    "pos": "adj",
    "pronunciation": "गिल्टि",
    "meaningHi": "दोषी",
    "meaningEn": "responsible for a wrong; feeling guilt",
    "examples": [
      {
        "en": "Let the guilty be punished",
        "hi": "दोषी को दंडित होने दो।"
      }
    ]
  },
  {
    "id": 305,
    "word": "health",
    "pos": "n",
    "pronunciation": "हेल्थ",
    "meaningHi": "स्ास्थ्य, सेहत",
    "meaningEn": "the state of being well",
    "examples": [
      {
        "en": "A good health is the foundation of a happy life",
        "hi": "एक अच्ा स्ास्थ्य एक सुखी जीवन की आधारशिला है।"
      }
    ]
  },
  {
    "id": 306,
    "word": "helpful",
    "pos": "adj",
    "pronunciation": "हेल्पफ़ुल",
    "meaningHi": "मददगार हेल्पफ़ुलनस मदद करने की प्रवृत्ति या क्रिया 92 93 अंंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ",
    "meaningEn": "useful",
    "examples": [
      {
        "en": "a helpful person",
        "hi": "एक मदद करने वाला व्यक्ति"
      },
      {
        "en": "Helpful- ness is a great virtue",
        "hi": "मदद करने की प्रवृत्ति एक महान गुण है।"
      }
    ]
  },
  {
    "id": 307,
    "word": "improve",
    "pos": "v",
    "pronunciation": "इम्प्ूव",
    "meaningHi": "सुधारना, बेहतर बनाना",
    "meaningEn": "to better",
    "examples": [
      {
        "en": "improve the world around you",
        "hi": "अपने चारों तरफ की दुनिया को बेहतर बनाओ।"
      }
    ]
  },
  {
    "id": 308,
    "word": "judge",
    "pos": "n / v",
    "pronunciation": "जज",
    "meaningHi": "न्यायाधीश | किसी व्यक्ति या वस्तु के विषय में राय बनाना या देना जुडिशरि न्यायपालिका J 16 106 107 अंंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ",
    "meaningEn": "to form an opinion; a legal official",
    "examples": [
      {
        "en": "a judge of the High Court",
        "hi": "उच्च न्ायालय के एक न्ायाधीश"
      },
      {
        "en": "It is difficult to judge someone's abilities by just seeing the face",
        "hi": "किसी की सूूरत के आधार पर उसकी योग्यताओं के विषय में राय बनाना कठिन है।"
      }
    ]
  },
  {
    "id": 309,
    "word": "murder",
    "pos": "n / v",
    "pronunciation": "मडर",
    "meaningHi": "मानवहत्ा का अपराध | मानवहत्ा करना",
    "meaningEn": "unlawful killing",
    "examples": [
      {
        "en": "Murder is a heinous crime",
        "hi": "मानवहत्ा एक संगीन अपराध है।"
      },
      {
        "en": "Did Stalin himself murder his wife?",
        "hi": "क्ा स्ालिन ने स्वयं अपनी पत्ी की हत्ा की?"
      }
    ]
  },
  {
    "id": 310,
    "word": "perfect",
    "pos": "adj",
    "pronunciation": "पफे़क्ट",
    "meaningHi": "संपूर्णतः त्रुटिहीन, हर तरह से अच्ा 142 143 अंंगरेज़ी शब्द उच्ारण हिंदी में अर्थ",
    "meaningEn": "flawless",
    "examples": [
      {
        "en": "Can somebody be absolutely perfect?",
        "hi": "क्ा कोई पूूरी तरह त्रुटिहीन हो सकता है?"
      }
    ]
  },
  {
    "id": 311,
    "word": "person",
    "pos": "n",
    "pronunciation": "पर्सन",
    "meaningHi": "व्यक्ति",
    "meaningEn": "individual",
    "examples": []
  },
  {
    "id": 312,
    "word": "positive",
    "pos": "adj",
    "pronunciation": "पॉज़टिव",
    "meaningHi": "सकारात्मक",
    "meaningEn": "optimistic",
    "examples": [
      {
        "en": "a positive attitude",
        "hi": "एक सकारात्मक रुख"
      }
    ]
  },
  {
    "id": 313,
    "word": "pride",
    "pos": "n",
    "pronunciation": "प्राइड",
    "meaningHi": "गर्व अच्े अर्थ में",
    "meaningEn": "self-respect",
    "examples": [
      {
        "en": "Pride and arrogance are widely different things",
        "hi": "गर्व और अहंकार काफी अलग चीजें हैं।"
      }
    ]
  },
  {
    "id": 314,
    "word": "problem",
    "pos": "n",
    "pronunciation": "प्ॉब्लम",
    "meaningHi": "समस्या",
    "meaningEn": "difficulty",
    "examples": [
      {
        "en": "A worker comes with problems, a leader with solutions",
        "hi": "एक कार्यकर्ता समस्ा लाता है, जबकि एक नेतृत्वकर्ता समाधान ले कर आता है।"
      }
    ]
  },
  {
    "id": 315,
    "word": "promise",
    "pos": "n / v",
    "pronunciation": "प्ॉमिस",
    "meaningHi": "वचन, प्रतिज्ा, वादा | वचन देना, वादा करना अंंगरेज़ी शब्द उच्ारण हिंदी में अर्थ",
    "meaningEn": "commitment",
    "examples": [
      {
        "en": "A promise must be kept",
        "hi": "किसी वायदे को जरूर पूूरा करना चाहिए।"
      },
      {
        "en": "He had promised to attend my wedding",
        "hi": "उसने मेरी शादी में शरीक होने का वायदा किया था।"
      }
    ]
  },
  {
    "id": 316,
    "word": "protection",
    "pos": "n",
    "pronunciation": "प्रटेक्शन",
    "meaningHi": "सुरक्षा, बचाव",
    "meaningEn": "guarding",
    "examples": [
      {
        "en": "Women need special pro- tection these days",
        "hi": "स्त्रियों को आज-कल विशेष सुरक्षा की जरूरत होती है।"
      }
    ]
  },
  {
    "id": 317,
    "word": "question",
    "pos": "n / v",
    "pronunciation": "क्वेेसचन",
    "meaningHi": "प्रश्न",
    "meaningEn": "inquiry",
    "examples": [
      {
        "en": "What is your question?",
        "hi": "तुम्ारा प्रश्न क्ा है?"
      }
    ]
  },
  {
    "id": 318,
    "word": "reason",
    "pos": "n",
    "pronunciation": "रीज़न",
    "meaningHi": "कारण; तर्क",
    "meaningEn": "cause",
    "examples": [
      {
        "en": "There is also a test of reasoning in certain exams",
        "hi": "कुछ परीक्षाओं में तर्कशक्ति की भी जाँच होती है।"
      },
      {
        "en": "Our reason must control our emotions",
        "hi": "हमारी बुद्धि को हमारी भावनाओं को नियंत्रित करना चाहिए।"
      }
    ]
  },
  {
    "id": 319,
    "word": "result",
    "pos": "n / v",
    "pronunciation": "रिज़ल्ट",
    "meaningHi": "परिणाम",
    "meaningEn": "outcome",
    "examples": [
      {
        "en": "Heavy rains resulted in floods",
        "hi": "ज्ादा बारिश के परिणामस्वरुप बाढ़ आ गई।"
      }
    ]
  },
  {
    "id": 320,
    "word": "shame",
    "pos": "n",
    "pronunciation": "शेम",
    "meaningHi": "लज्जा, शर्म",
    "meaningEn": "disgrace",
    "examples": [
      {
        "en": "His face was red with shame",
        "hi": "उसका चेहरा शर्म से लाल था।"
      }
    ]
  },
  {
    "id": 321,
    "word": "share",
    "pos": "n / v",
    "pronunciation": "शेअर",
    "meaningHi": "हिस्ा, हक़ ’s पिता की संपत्ति में बेटी का भी एक हिस्ा होता है। | अपनी किसी चीज को दो या अधिक लोगों में बाँटना या साझा करना",
    "meaningEn": "to divide",
    "examples": [
      {
        "en": "Let us share a part of our income with the poor",
        "hi": "हम अपनी आमदनी का एक हिस्ा गरीबों के साथ साझा किया करें।"
      }
    ]
  },
  {
    "id": 322,
    "word": "tradition",
    "pos": "n",
    "pronunciation": "ट्रडिशन",
    "meaningHi": "परंपरा",
    "meaningEn": "custom",
    "examples": [
      {
        "en": "Not all traditions are excellent",
        "hi": "सभी परंपराएं बहुत अच्छी नहीं होतीं।"
      }
    ]
  },
  {
    "id": 323,
    "word": "violent",
    "pos": "adj",
    "pronunciation": "वाइअलन्ट",
    "meaningHi": "हिंसापूर्ण, हिंसक वाइअ- लन्ट्लि हिंसापूर्वक 214 215 अंंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ वचुअलि करीब-करीब",
    "meaningEn": "forceful",
    "examples": [
      {
        "en": "a violent community",
        "hi": "एक हिंसक समुदाय"
      },
      {
        "en": "speak violently",
        "hi": "हिंसक तरीके से बोलना"
      }
    ]
  },
  {
    "id": 324,
    "word": "worship",
    "pos": "n",
    "pronunciation": "आइडल",
    "meaningHi": "पूजा, उपासना, आराधना",
    "meaningEn": "to show reverence to God; religious devotion",
    "examples": [
      {
        "en": "Idol",
        "hi": "worship is one of the many ways of worship. पूूजा के कई तरीकों में से देवमूूर्तिपूूजा भी पूूजा का एक तरीका है।"
      }
    ]
  },
  {
    "id": 325,
    "word": "able",
    "pos": "adj",
    "pronunciation": "एबल",
    "meaningHi": "योग्य, समर्थ",
    "meaningEn": "having the power or skill",
    "examples": [
      {
        "en": "able to run fast",
        "hi": "तेज दौड़ने में समर्थ"
      },
      {
        "en": "a dependable friend",
        "hi": "एक भरोसे के योग्य मित्र"
      }
    ]
  },
  {
    "id": 326,
    "word": "alone",
    "pos": "adj adv",
    "pronunciation": "अलउन",
    "meaningHi": "अकेला",
    "meaningEn": "by oneself; without others",
    "examples": [
      {
        "en": "I am all alone",
        "hi": "मैं बिलकुल अकेला हँ।"
      },
      {
        "en": "Take him along",
        "hi": "उसे साथ-साथ ले लो।"
      }
    ]
  },
  {
    "id": 327,
    "word": "clear",
    "pos": "adj / v",
    "pronunciation": "आसमान",
    "meaningHi": "स्पष्ट, साफ़",
    "meaningEn": "easy to understand; transparent",
    "examples": [
      {
        "en": "a clear sky",
        "hi": "एक साफ | क्लिअ(र"
      },
      {
        "en": "The sky cleared up",
        "hi": "आसमान साफ हो गया"
      }
    ]
  },
  {
    "id": 328,
    "word": "community",
    "pos": "n",
    "pronunciation": "कम्ूनटि",
    "meaningHi": "समुदाय, समाज",
    "meaningEn": "a group",
    "examples": [
      {
        "en": "the muslim community",
        "hi": "मुस्लिम समाज"
      }
    ]
  },
  {
    "id": 329,
    "word": "egoistic",
    "pos": "adj",
    "pronunciation": "ईगोइस्टिक",
    "meaningHi": "अहंमानी or ईदर आइदर 1 या-तो-या दो में से कोई एक 2 कोई एक 1",
    "meaningEn": "excessively self-centred",
    "examples": [
      {
        "en": "egoistic attitude",
        "hi": "अहंमानी रुख"
      },
      {
        "en": "You can either play or study now",
        "hi": "तुम अभी या तो पढ़ सकते हो या खेल सकते हो।"
      }
    ]
  },
  {
    "id": 330,
    "word": "pleasure",
    "pos": "n",
    "pronunciation": "प्ेशज़र",
    "meaningHi": "खुशी",
    "meaningEn": "enjoyment",
    "examples": [
      {
        "en": "It was a pleasure meeting you",
        "hi": "आपसे मुलाक़ात कर के खुशी हुई।"
      }
    ]
  },
  {
    "id": 331,
    "word": "possible",
    "pos": "adj",
    "pronunciation": "पॉसिब्ल",
    "meaningHi": "संभव",
    "meaningEn": "able to happen",
    "examples": [
      {
        "en": "Isn't it possible to travel at the speed of light?",
        "hi": "क्ा प्रकाश की गति से चलना संभव नहीं है?"
      }
    ]
  },
  {
    "id": 332,
    "word": "ready",
    "pos": "adj",
    "pronunciation": "रेडि",
    "meaningHi": "तैयार",
    "meaningEn": "prepared",
    "examples": [
      {
        "en": "Are you ready to go?",
        "hi": "क्ा तुम जाने को तैयार हो?"
      }
    ]
  },
  {
    "id": 333,
    "word": "selfishness",
    "pos": "n",
    "pronunciation": "सेल््फि़शनेस",
    "meaningHi": "स्वार्थपरता",
    "meaningEn": "concern only for oneself",
    "examples": [
      {
        "en": "Selfishness beyond a point is not good",
        "hi": "एक हद से ज्ादा स्ार्थपरता अच्छी नहीं होती।"
      }
    ]
  },
  {
    "id": 334,
    "word": "strength",
    "pos": "n",
    "pronunciation": "स्ट्ेंगथ",
    "meaningHi": "शक्ति, बल",
    "meaningEn": "power",
    "examples": []
  },
  {
    "id": 335,
    "word": "apologize",
    "pos": "v",
    "pronunciation": "",
    "meaningHi": "अपॉलजाइज़माफी माँगना",
    "meaningEn": "to say sorry",
    "examples": [
      {
        "en": "I apologise for the delay",
        "hi": "मैं देरी के लिए क्षमा चाहता हँ।"
      }
    ]
  },
  {
    "id": 336,
    "word": "attitude",
    "pos": "n",
    "pronunciation": "ऐटीट्यूड",
    "meaningHi": "रुख, व्यवहार",
    "meaningEn": "outlook",
    "examples": [
      {
        "en": "He has a racist attitude",
        "hi": "उसका रुख नस्लवादी है।"
      }
    ]
  },
  {
    "id": 337,
    "word": "beautiful",
    "pos": "adj",
    "pronunciation": "ब्ूटिफ़ल",
    "meaningHi": "सुंदर",
    "meaningEn": "pleasing to the senses; lovely",
    "examples": []
  },
  {
    "id": 338,
    "word": "behave",
    "pos": "v",
    "pronunciation": "बिहेव",
    "meaningHi": "आचरण करना, व्यवहार करना",
    "meaningEn": "to act in a particular way",
    "examples": [
      {
        "en": "Behave like a good boy",
        "hi": "एक अच्े बच्चे की तरह व्यवहार करो।"
      }
    ]
  },
  {
    "id": 339,
    "word": "better",
    "pos": "adj adv",
    "pronunciation": "बेटर",
    "meaningHi": "बेहतर, से और अच्ा",
    "meaningEn": "of higher quality; more good",
    "examples": [
      {
        "en": "She is better than her brother",
        "hi": "वह अपने भाई से बेहतर है।"
      }
    ]
  },
  {
    "id": 340,
    "word": "black",
    "pos": "adj / n",
    "pronunciation": "ब्ैक",
    "meaningHi": "काला रंग | काला व्यक्ति",
    "meaningEn": "the darkest color",
    "examples": []
  },
  {
    "id": 341,
    "word": "blame",
    "pos": "n / v",
    "pronunciation": "ब्ेम",
    "meaningHi": "गलती की जिम्ेदारी, दोषारोपण 26 27 अंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ | दोष देना, आरोप लगाना",
    "meaningEn": "to hold responsible; fault",
    "examples": [
      {
        "en": "Don't blame others for your failures",
        "hi": "अपनी असफलता के लिए दूसरों को दोष मत दो।"
      }
    ]
  },
  {
    "id": 342,
    "word": "breath",
    "pos": "n",
    "pronunciation": "ब्ेथ",
    "meaningHi": "साँस अंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ",
    "meaningEn": "air taken in and out of lungs",
    "examples": [
      {
        "en": "Take a deep breath",
        "hi": "एक गहरी साँस लें।"
      }
    ]
  },
  {
    "id": 343,
    "word": "bright",
    "pos": "adj",
    "pronunciation": "ब्ाइट",
    "meaningHi": "प्रकाशमान, चमकीला",
    "meaningEn": "giving out light; intelligent",
    "examples": [
      {
        "en": "a bright light",
        "hi": "उज्ज्वल प्रकाश"
      }
    ]
  },
  {
    "id": 344,
    "word": "cheerful",
    "pos": "adj",
    "pronunciation": "चिअफ़ल",
    "meaningHi": "हँसमुख, प्रसन्न",
    "meaningEn": "happy and bright",
    "examples": [
      {
        "en": "a cheerful person",
        "hi": "एक हँसमुख व्यक्ति"
      }
    ]
  },
  {
    "id": 345,
    "word": "commit",
    "pos": "v",
    "pronunciation": "कमिट",
    "meaningHi": "वचन देना 2 {कोई गलत काम} करना 1",
    "meaningEn": "to dedicate",
    "examples": [
      {
        "en": "He committed that he would come",
        "hi": "उसने वचन दिया कि वह आएगा।"
      },
      {
        "en": "He committed a sin",
        "hi": "उसने एक पाप किया।"
      }
    ]
  },
  {
    "id": 346,
    "word": "connect",
    "pos": "v",
    "pronunciation": "कनेक्ट",
    "meaningHi": "जुड़ना, जोड़ना, संबंध स्थापित करना",
    "meaningEn": "to join; to link together",
    "examples": [
      {
        "en": "He is unable to connect with young people",
        "hi": "वह युवाओं से जुड़ने में असमर्थ रहता है।"
      }
    ]
  },
  {
    "id": 347,
    "word": "consequence",
    "pos": "n",
    "pronunciation": "कॉन्सिक्ंस",
    "meaningHi": "परिणाम अंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ",
    "meaningEn": "a result",
    "examples": [
      {
        "en": "consequences of war",
        "hi": "युद्ध के परिणाम"
      }
    ]
  },
  {
    "id": 348,
    "word": "contempt",
    "pos": "n",
    "pronunciation": "कन्टेम्प्ट",
    "meaningHi": "तिरस्ार, नीच भाव 46 47 अंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ",
    "meaningEn": "scorn",
    "examples": [
      {
        "en": "Contempt for manual labour made India poor",
        "hi": "हाथों से की जाने वाली मेहनत के प्रति नीच भाव ने भारत को गरीब बना दिया।"
      }
    ]
  },
  {
    "id": 349,
    "word": "creative",
    "pos": "adj",
    "pronunciation": "क्रिएटिव",
    "meaningHi": "नई चीजें सोचने और बनाने वाला, सृजनशील कितना सृजनशील विचार!",
    "meaningEn": "inventive",
    "examples": []
  },
  {
    "id": 350,
    "word": "creativity",
    "pos": "n",
    "pronunciation": "क्रिएटिवटि",
    "meaningHi": "सृजनात्मकता, नई चीजें सोचने और बनाने की क्षमता",
    "meaningEn": "inventiveness",
    "examples": [
      {
        "en": "Children are naturally creative",
        "hi": "बच्चे स्ाभाविक रूप से सृजनशील होते हैं।"
      }
    ]
  },
  {
    "id": 351,
    "word": "crime",
    "pos": "n",
    "pronunciation": "क्राइम",
    "meaningHi": "अपराध",
    "meaningEn": "lawless act",
    "examples": [
      {
        "en": "Breaking of the law is crime",
        "hi": "कानूून तोडना अपराध है।"
      }
    ]
  },
  {
    "id": 352,
    "word": "enemy",
    "pos": "n",
    "pronunciation": "एनमि",
    "meaningHi": "शत्ु, दुश्मन",
    "meaningEn": "a foe",
    "examples": [
      {
        "en": "Treat no one as an enemy",
        "hi": "किसी से भी दुश्मन-जैसा व्यवहार न करो।"
      }
    ]
  },
  {
    "id": 353,
    "word": "far",
    "pos": "adj adv",
    "pronunciation": "फ़ार",
    "meaningHi": "दूर",
    "meaningEn": "at a great distance",
    "examples": [
      {
        "en": "very far from here",
        "hi": "यहाँ से काफी दूर"
      }
    ]
  },
  {
    "id": 354,
    "word": "focused",
    "pos": "adj",
    "pronunciation": "फ़ोकस्ड",
    "meaningHi": "ध्ानकेंद्रित . . छात्राएँ अकसर अधिक ध्यानकेंद्रित होती हैं। इसीलिए वे छात्रों से अधिक नम्बर लाती हैं।",
    "meaningEn": "concentrated",
    "examples": []
  },
  {
    "id": 355,
    "word": "general",
    "pos": "adj",
    "pronunciation": "जेनरल",
    "meaningHi": "साधारण 2 सामान्य 1",
    "meaningEn": "overall; not specific",
    "examples": [
      {
        "en": "Generally he is cool-headed",
        "hi": "सामान्य रूप से वह ठंढे दिमाग वाला व्यक्ति है।"
      },
      {
        "en": "a generous man",
        "hi": "एक उदार व्यक्ति"
      }
    ]
  },
  {
    "id": 356,
    "word": "habit",
    "pos": "n",
    "pronunciation": "हैबिट",
    "meaningHi": "आदत",
    "meaningEn": "a regular practice; a tendency",
    "examples": []
  },
  {
    "id": 357,
    "word": "hot",
    "pos": "adj",
    "pronunciation": "हॉट",
    "meaningHi": "गरम",
    "meaningEn": "having high temperature",
    "examples": [
      {
        "en": "hot tea",
        "hi": "गरम चाय"
      }
    ]
  },
  {
    "id": 358,
    "word": "influence",
    "pos": "n / v",
    "pronunciation": "इन्फ़्लुलुअन्स",
    "meaningHi": "प्रभाव, व्यक्ति या वस्तु को प्रभावित कर नियंत्रित करने की शक्ति | प्रभावित करना, व्यक्ति या वस्तु में परिवर्तन लाने के लिए उस पर प्रभाव का प्रयोग करना",
    "meaningEn": "to affect",
    "examples": [
      {
        "en": "Lata Mangeshkar's melody has global influence",
        "hi": "लता मंगेशकर के संगीत का विश्वव्ापी प्रभाव है।"
      },
      {
        "en": "Cinema can greatly influence young minds",
        "hi": "सिनेमा युवाओं के दिमाग को काफी प्रभावित कर सकता है।"
      }
    ]
  },
  {
    "id": 359,
    "word": "large",
    "pos": "adj",
    "pronunciation": "लाज",
    "meaningHi": "बड़ा",
    "meaningEn": "big; of great size",
    "examples": [
      {
        "en": "elephant's large ears",
        "hi": "हाथी के बड़े कान"
      }
    ]
  },
  {
    "id": 360,
    "word": "least",
    "pos": "det adv",
    "pronunciation": "लीस्ट",
    "meaningHi": "न्यूनतम, कम-से-कम",
    "meaningEn": "smallest in amount",
    "examples": [
      {
        "en": "You may have to wait for at least twenty minutes",
        "hi": "तुम्ें कम- से-कम बीस मिनट इंतजार करना पड़ सकता है।"
      }
    ]
  },
  {
    "id": 361,
    "word": "lie",
    "pos": "n / v",
    "pronunciation": "लाइ",
    "meaningHi": "झूठ | 1 लेटना 2 झूठ बोलना",
    "meaningEn": "to recline; to say something untrue",
    "examples": [
      {
        "en": "It is a lie",
        "hi": "यह एक झूठ है।"
      },
      {
        "en": "lie down",
        "hi": "लेट जाना"
      }
    ]
  },
  {
    "id": 362,
    "word": "likely",
    "pos": "adv",
    "pronunciation": "लाइक्लि",
    "meaningHi": "संभावित या प्रत्याशित जिसके होने की आशा हो",
    "meaningEn": "probable; expected",
    "examples": [
      {
        "en": "It is likely to rain",
        "hi": "बारिश होने की संभावना है।"
      }
    ]
  },
  {
    "id": 363,
    "word": "listen",
    "pos": "v",
    "pronunciation": "लिसन",
    "meaningHi": "ध्ान से सुनना",
    "meaningEn": "to pay attention to sound",
    "examples": [
      {
        "en": "Please listen to this song",
        "hi": "कृपया इस गीत को ध्यान से सुनें।"
      }
    ]
  },
  {
    "id": 364,
    "word": "matter",
    "pos": "n",
    "pronunciation": "मैटर",
    "meaningHi": "पदार्थ 2 मामला",
    "meaningEn": "a subject; to be important",
    "examples": [
      {
        "en": "Matter and energy together constitute the material universe",
        "hi": "पदार्थ और ऊर्जा मिलकर इस भौतिक संसार का निर्माण करते हैं।"
      },
      {
        "en": "What is the matter?",
        "hi": "क्ा मामला है?"
      }
    ]
  },
  {
    "id": 365,
    "word": "progress",
    "pos": "n / v",
    "pronunciation": "प्ोग्ेस",
    "meaningHi": "प्रगति किसी काम में आगे या ऊँचे बढ़ने को प्रगति कहते हैं। | प्रगति करना",
    "meaningEn": "improvement",
    "examples": [
      {
        "en": "How do we measure the prog- ress of a country?",
        "hi": "हम एक देश की प्रगति को कैसे मापते हैं?"
      },
      {
        "en": "Is the world really progress- ing?",
        "hi": "क्ा दुनिया वास्तव में प्रगति कर रही है?"
      }
    ]
  },
  {
    "id": 366,
    "word": "punish",
    "pos": "v",
    "pronunciation": "पनिश",
    "meaningHi": "दंड देना, सजा देना",
    "meaningEn": "to penalize",
    "examples": [
      {
        "en": "Should children be punished for small mistakes?",
        "hi": "क्ा बचों को छोटी-छोटी गलतियों के दंडित किया जाना चाहिए?"
      }
    ]
  },
  {
    "id": 367,
    "word": "Puran",
    "pos": "n",
    "pronunciation": "पुराण",
    "meaningHi": "पुराण हिंदुओं के धर्मग्ंथों में से एक ग्ंथ-वर्ग हैं, जिनमें कथा-कहानियों के माध्यम से धर्म के तत्त्व को समझाया गया है। 18 महापुराण हैं और 18 उपपुराण।",
    "meaningEn": "ancient Hindu texts of mythology and cosmology",
    "examples": []
  },
  {
    "id": 368,
    "word": "quick",
    "pos": "adj",
    "pronunciation": "क्विक",
    "meaningHi": "फुरती से किया गया",
    "meaningEn": "fast",
    "examples": [
      {
        "en": "a quick action",
        "hi": "फुरती से की गई एक कार्रवाई"
      }
    ]
  },
  {
    "id": 369,
    "word": "quickly",
    "pos": "adv",
    "pronunciation": "क्विक्लि",
    "meaningHi": "जल्ी से, फुर्तीी के साथ, शीघ्र",
    "meaningEn": "rapidly",
    "examples": [
      {
        "en": "the ambulance came quickly",
        "hi": "ऐम्ुलंस जल्ी से आई"
      }
    ]
  },
  {
    "id": 370,
    "word": "regret",
    "pos": "n / v",
    "pronunciation": "रिग्ेट",
    "meaningHi": "खेद, पछतावा | पछताना रेग्युलर नियमित रेग्युललि नियमित रूप से",
    "meaningEn": "to feel sorry",
    "examples": [
      {
        "en": "no regrets!",
        "hi": "कोई पछतावा नहीं!"
      },
      {
        "en": "I regret giving him loan",
        "hi": "मुझे उसे कर्ज देने का पछतावा है।"
      }
    ]
  },
  {
    "id": 371,
    "word": "set",
    "pos": "v / n",
    "pronunciation": "सेट",
    "meaningHi": "किसी चीज को किस अन्य चीज में ठीक से लगाना, जड़ना 2 तय करना 1",
    "meaningEn": "to place",
    "examples": [
      {
        "en": "sofa set",
        "hi": "कई सोफे मिल कर एक सोफासेट बनाते हैं"
      },
      {
        "en": "He has set the furniture in the living room well",
        "hi": "उसने फर्नीचर को लिविंग रूम में अच्छी तरह लगा दिया है।"
      }
    ]
  },
  {
    "id": 372,
    "word": "short",
    "pos": "adj",
    "pronunciation": "शॉट",
    "meaningHi": "छोटा शुड चाहिए करना चाहिए के अर्थ में",
    "meaningEn": "not long",
    "examples": [
      {
        "en": "a short speech",
        "hi": "एक छोटा भाषण"
      },
      {
        "en": "You should eat within limits to avoid being overweight",
        "hi": "मोटापे से बचने के लिए तुम्ें सीमा के भीतर खाना चाहिए।"
      }
    ]
  },
  {
    "id": 373,
    "word": "steal",
    "pos": "v",
    "pronunciation": "स्ील",
    "meaningHi": "चुराना",
    "meaningEn": "to take",
    "examples": []
  },
  {
    "id": 374,
    "word": "story",
    "pos": "n",
    "pronunciation": "स्ोरी",
    "meaningHi": "कहानी",
    "meaningEn": "narrative",
    "examples": []
  },
  {
    "id": 375,
    "word": "succeed",
    "pos": "v",
    "pronunciation": "सक्ीड",
    "meaningHi": "सफल होना अंंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ",
    "meaningEn": "to achieve",
    "examples": []
  },
  {
    "id": 376,
    "word": "temper",
    "pos": "n",
    "pronunciation": "टेम्पर",
    "meaningHi": "क्रोध 2 क्रोधी स्वभाव",
    "meaningEn": "mood",
    "examples": [
      {
        "en": "Never lose temper",
        "hi": "कभी क्रोध न करो।"
      },
      {
        "en": "a man of strong temper",
        "hi": "क्रोधी स्वभाव का एक इंसान।"
      }
    ]
  },
  {
    "id": 377,
    "word": "thank",
    "pos": "v",
    "pronunciation": "थैंक",
    "meaningHi": "धन्यवाद देना थैंक्स धन्यवाद! थैंक यू आपको धन्यवाद!",
    "meaningEn": "to appreciate",
    "examples": [
      {
        "en": "Thanking people who help us is basic human courtesy",
        "hi": "जो हमें मदद करें उन्हेंें धन्यवाद देना एक आधारभूूत मानवीय शिष्टाचार है।"
      }
    ]
  },
  {
    "id": 378,
    "word": "unfair",
    "pos": "adj",
    "pronunciation": "अनफ़ेेअर",
    "meaningHi": "अनुचित, अन्यायपूर्ण",
    "meaningEn": "unjust",
    "examples": [
      {
        "en": "dowry is an unfair practice",
        "hi": "दहेज एक अन्ायपूर्ण रिवाज है।"
      }
    ]
  },
  {
    "id": 379,
    "word": "unkind",
    "pos": "adj",
    "pronunciation": "अन्ाइन्ड",
    "meaningHi": "जो दयालु नहीं हो; निर्दयी अन्लोफ़ल गैर-कानूनी",
    "meaningEn": "not kind",
    "examples": [
      {
        "en": "unkind behaviour towards animals",
        "hi": "जानवरों के प्रति निर्दयी व्यवहार"
      },
      {
        "en": "unlawful activities",
        "hi": "गैरकानूूनी गतिविधियाँ"
      }
    ]
  },
  {
    "id": 380,
    "word": "victory",
    "pos": "n",
    "pronunciation": "विक्टरि",
    "meaningHi": "विजय, जीत",
    "meaningEn": "triumph",
    "examples": [
      {
        "en": "Victory and defeat are both parts of life",
        "hi": "जीत और हार दोनों ही जीवन के अंग हैं।"
      }
    ]
  },
  {
    "id": 381,
    "word": "war",
    "pos": "n",
    "pronunciation": "वोर",
    "meaningHi": "युद्ध, जंग",
    "meaningEn": "conflict",
    "examples": [
      {
        "en": "Wars bring suffering to a large number of people",
        "hi": "युद्ध लोगों की एक बड़ी संख्या के लिए दुःख ले कर आते हैं।"
      }
    ]
  },
  {
    "id": 382,
    "word": "worry",
    "pos": "n / v",
    "pronunciation": "वरि",
    "meaningHi": "चिंता, फिक्र | चिंता करना वरिड चिंतित",
    "meaningEn": "anxiety",
    "examples": []
  },
  {
    "id": 383,
    "word": "arrogance",
    "pos": "n",
    "pronunciation": "ऐरगंस",
    "meaningHi": "घमंड",
    "meaningEn": "pride",
    "examples": [
      {
        "en": "Arrogance can make you unpopular",
        "hi": "घमंड तुम्ें अलोकप्रिय बना दे सकता है।"
      }
    ]
  },
  {
    "id": 384,
    "word": "balance",
    "pos": "n / v",
    "pronunciation": "बैलंस",
    "meaningHi": "संतुलन 2 तराजू | संतुलित करना/ संतुलित रखना अंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ बैलन्स-शीटकिसी संस्ा की संपत्ति और आय-व्यय संबंधी ब्ोरों का पक्का",
    "meaningEn": "stability",
    "examples": [
      {
        "en": "work-life balance",
        "hi": "कार्य और जीवन का संतुलन"
      },
      {
        "en": "Can you balance your body on one leg?",
        "hi": "क्ा तुम एक पैर पर शरीर का संतुलन बनाए रख सकते हो?"
      }
    ]
  },
  {
    "id": 385,
    "word": "beauty",
    "pos": "n",
    "pronunciation": "ब्ूटी",
    "meaningHi": "सौंदर्य, सुंदरता",
    "meaningEn": "the quality of being beautiful",
    "examples": [
      {
        "en": "Beauty lies in the eyes of the beholder",
        "hi": "सुंदरता देखने वाले की आँखों में होती है।"
      }
    ]
  },
  {
    "id": 386,
    "word": "belong",
    "pos": "v",
    "pronunciation": "बिलौंंग",
    "meaningHi": "से होना 2 स्ामित्व रखना 1",
    "meaningEn": "to be the property of; to be a member",
    "examples": [
      {
        "en": "He belongs to Delhi",
        "hi": "वह दिल्ी से है।"
      },
      {
        "en": "This book belongs to him",
        "hi": "यह किताब उसकी है।"
      }
    ]
  },
  {
    "id": 387,
    "word": "Bible",
    "pos": "n",
    "pronunciation": "बाइबल",
    "meaningHi": "यह ईसाई धर्म का एकमात्र आधारग्ंथ है, जैसे भगवद्- गीता भगवद्-धर्म का एकमात्र आधारग्ंथ है। बाइबिल में कुछ तो ईश्वर की वाणी माने जाने वाले अंश हैं और",
    "meaningEn": "the sacred scripture of Christianity",
    "examples": []
  },
  {
    "id": 388,
    "word": "certain",
    "pos": "adj",
    "pronunciation": "सट्न",
    "meaningHi": "निश्चित, निस्ंदेह",
    "meaningEn": "sure; definite; specific",
    "examples": [
      {
        "en": "It is certain that it will rain today",
        "hi": "यह निश्चित है कि आज बारिश होगी।"
      }
    ]
  },
  {
    "id": 389,
    "word": "condition",
    "pos": "n",
    "pronunciation": "कन्डिशन",
    "meaningHi": "दशा, हालत",
    "meaningEn": "the state of something; a requirement",
    "examples": [
      {
        "en": "The condition of the patient is critical",
        "hi": "मरीज की हालत गंभीर है।"
      }
    ]
  },
  {
    "id": 390,
    "word": "connection",
    "pos": "n",
    "pronunciation": "कनेक्शन",
    "meaningHi": "संबंध, संपर्क",
    "meaningEn": "a link; a relationship",
    "examples": [
      {
        "en": "I have no connection with him",
        "hi": "मेरा उससे कोई संपर्क नहीं है।"
      }
    ]
  },
  {
    "id": 391,
    "word": "course",
    "pos": "n",
    "pronunciation": "कोर्स",
    "meaningHi": "पाठ्यक्रम, कोर्स 2 रास्ता",
    "meaningEn": "a path of study; direction",
    "examples": [
      {
        "en": "This topic is not in our course",
        "hi": "यह विषय हमारे पाठ्यक्रम में नहीं है।"
      },
      {
        "en": "course-correction",
        "hi": "रास्ा या दिशा सुधारना"
      }
    ]
  },
  {
    "id": 392,
    "word": "interest",
    "pos": "n / v",
    "pronunciation": "इन्ट्रस्ट",
    "meaningHi": "रुचि, दिलचस्पी 2 सूद | रुचि या दिलचस्पी जगाना इन्ट्रस्टिंंग रोचक, दिलचस्प",
    "meaningEn": "attention; curiosity; a charge for borrowing",
    "examples": [
      {
        "en": "I have no interest in cricket",
        "hi": "मेरी क्रिकेट में कोई रुचि नहीं है।"
      },
      {
        "en": "high interest rates",
        "hi": "सूूद की ऊँची दर"
      }
    ]
  },
  {
    "id": 393,
    "word": "level",
    "pos": "n / adj / v",
    "pronunciation": "लेवल",
    "meaningHi": "स्तर कितनी ऊँचाई या निचाई पर | समतल, बराबर 112 113 अंंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ | समतल करना",
    "meaningEn": "a height; a stage; flat",
    "examples": [
      {
        "en": "3000 feet above the sea level - समुद्र के स्तर से 3000 फीट ऊपर; What is the level of his knowledge?",
        "hi": "उनके ज्ान का स्तर क्ा है?"
      },
      {
        "en": "a level field",
        "hi": "एक समतल मैदान"
      }
    ]
  },
  {
    "id": 394,
    "word": "order",
    "pos": "n / v",
    "pronunciation": "ओडर",
    "meaningHi": "आदेश, हुक्म 2 सुव्यवस्ा | आदेश देना ओडनरि साधारण, मामूली",
    "meaningEn": "arrangement",
    "examples": [
      {
        "en": "In the army, you have to follow all the orders",
        "hi": "सेना में तुम्ें हर आदेश का पालन करना होता है"
      },
      {
        "en": "law and order",
        "hi": "कानूून और व्यवस्था"
      }
    ]
  },
  {
    "id": 395,
    "word": "persistent",
    "pos": "adj",
    "pronunciation": "पसिस्टन्ट",
    "meaningHi": "लगा रहने वाला किसी काम को आसानी से नहीं छोड़ देने वाला",
    "meaningEn": "continuing firmly",
    "examples": [
      {
        "en": "persistent efforts",
        "hi": "लगातार प्रयास"
      }
    ]
  },
  {
    "id": 396,
    "word": "position",
    "pos": "n",
    "pronunciation": "पज़िशन",
    "meaningHi": "अवस्ा 2 पद",
    "meaningEn": "place; view",
    "examples": [
      {
        "en": "His financial position is not good",
        "hi": "उसकी आर्थिक अवस्था अच्छी नहीं है।"
      },
      {
        "en": "He got a high position in the company",
        "hi": "उसे कंपनी में एक ऊँचा पद मिला।"
      }
    ]
  },
  {
    "id": 397,
    "word": "Quran",
    "pos": "n",
    "pronunciation": "कुरआन",
    "meaningHi": "इसलाम-धर्म का प्रमुख आधारग्ंथ, जिसे मुसलमान अल्ाह यानि ईश्वर की वाणी मानते हैं।",
    "meaningEn": "the sacred scripture of Islam",
    "examples": []
  },
  {
    "id": 398,
    "word": "single",
    "pos": "adj n",
    "pronunciation": "सिंंगल",
    "meaningHi": "एक, अकेला 2 अविवाहित",
    "meaningEn": "one",
    "examples": [
      {
        "en": "I will not give you a single penny",
        "hi": "मैं तुम्ें एक भी पैसा नहीं दूँगा।"
      },
      {
        "en": "Is he single?",
        "hi": "क्ा वह अविवाहित है?"
      }
    ]
  },
  {
    "id": 399,
    "word": "state",
    "pos": "n / v",
    "pronunciation": "स्टेट",
    "meaningHi": "दशा, अवस्ा 2 राज्य, प्रदेश 3 संप्रभु देश 2",
    "meaningEn": "condition",
    "examples": [
      {
        "en": "the state of our nation",
        "hi": "हमारे देश की दशा"
      },
      {
        "en": "state the truth",
        "hi": "सत्य कहो"
      }
    ]
  },
  {
    "id": 400,
    "word": "subject",
    "pos": "n",
    "pronunciation": "सब्ेक्ट",
    "meaningHi": "विषय 2 प्रजा",
    "meaningEn": "topic",
    "examples": []
  },
  {
    "id": 401,
    "word": "vision",
    "pos": "n",
    "pronunciation": "विशज़न",
    "meaningHi": "दृष्टि 2 दर्शन 3 स्वप्न, कल्पनाशक्ति से बनाई गई कोई उद्ेश्यपूर्ण योजना 1 दृष्टि",
    "meaningEn": "sight; dream",
    "examples": [
      {
        "en": "He lost his vision",
        "hi": "उसने अपनी दृष्टि खो दी, अर्थात अंधा हो गया।"
      },
      {
        "en": "Arjun had a vision of the cosmic form of Lord Krishn",
        "hi": "अर्जुन को श्ीकृष्ण के विश्वरूप के दर्शन हुए।"
      }
    ]
  },
  {
    "id": 402,
    "word": "achieve",
    "pos": "v",
    "pronunciation": "अचीव",
    "meaningHi": "प्राप्त करना",
    "meaningEn": "to accomplish a goal",
    "examples": [
      {
        "en": "India achieved independence इन 1947",
        "hi": "भारत ने 1947 में स्वतंत्रता प्राप्त की।"
      }
    ]
  },
  {
    "id": 403,
    "word": "act",
    "pos": "n / v",
    "pronunciation": "ऐक्ट",
    "meaningHi": "कर्म; अभिनय करना",
    "meaningEn": "to do something; a deed",
    "examples": [
      {
        "en": "an act of charity",
        "hi": "परोपकार का कर्म"
      },
      {
        "en": "The police did not act",
        "hi": "पुलिस ने कार्रवाई नहीं की।"
      }
    ]
  },
  {
    "id": 404,
    "word": "alive",
    "pos": "adj",
    "pronunciation": "अलाइव",
    "meaningHi": "जिंदा, जीवित",
    "meaningEn": "living",
    "examples": [
      {
        "en": "My grandfather is still alive",
        "hi": "मेरे दादाजी अभी भी जीवित हैं।"
      }
    ]
  },
  {
    "id": 405,
    "word": "anxiety",
    "pos": "n",
    "pronunciation": "ऐंग्ज़ाइटि",
    "meaningHi": "चिंता",
    "meaningEn": "worry",
    "examples": [
      {
        "en": "Prolonged anxiety is not good for mental health",
        "hi": "मानसिक स्ास्थ्य के लिए लंबी चिंता अच्छी नहीं होती।"
      }
    ]
  },
  {
    "id": 406,
    "word": "anxious",
    "pos": "adj",
    "pronunciation": "ऐंंक्शस",
    "meaningHi": "चिंतित",
    "meaningEn": "worried",
    "examples": [
      {
        "en": "You look anxious",
        "hi": "तुम चिंतित दिखते हो।"
      }
    ]
  },
  {
    "id": 407,
    "word": "break",
    "pos": "n / v",
    "pronunciation": "ब्ेक",
    "meaningHi": "किसी वस्तु में दरार, टूट 2 किसी काम के बीच थोड़ी छुट्ी या अवकाश | तोड़ना",
    "meaningEn": "to separate into pieces; a pause",
    "examples": [
      {
        "en": "He broke the glass",
        "hi": "उसने शीशा तोड़ दिया।"
      }
    ]
  },
  {
    "id": 408,
    "word": "build",
    "pos": "v",
    "pronunciation": "बिल्ड",
    "meaningHi": "बनाना, निर्माण करना",
    "meaningEn": "to construct; to make",
    "examples": [
      {
        "en": "build a house",
        "hi": "घर बनाना"
      }
    ]
  },
  {
    "id": 409,
    "word": "buy",
    "pos": "v",
    "pronunciation": "बाइ",
    "meaningHi": "खरीदना अंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ",
    "meaningEn": "to purchase; to acquire",
    "examples": [
      {
        "en": "I bought a pen",
        "hi": "मैंने एक कलम खरीदी।"
      }
    ]
  },
  {
    "id": 410,
    "word": "careless",
    "pos": "adj",
    "pronunciation": "केअलस",
    "meaningHi": "असावधान, लापरवाह अंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ",
    "meaningEn": "not paying attention; negligent",
    "examples": [
      {
        "en": "a careless boy",
        "hi": "एक लापरवाह लड़का।"
      }
    ]
  },
  {
    "id": 411,
    "word": "carry",
    "pos": "v",
    "pronunciation": "कैरि",
    "meaningHi": "ढोना, ले चलना 2 जारी रखना",
    "meaningEn": "to transport; to hold",
    "examples": [
      {
        "en": "She was carrying a briefcase",
        "hi": "वह एक ब्रीफकेस कैरी कर रही थी।"
      },
      {
        "en": "Carry on with your work",
        "hi": "अपना काम जारी रखो।"
      }
    ]
  },
  {
    "id": 412,
    "word": "catch",
    "pos": "v",
    "pronunciation": "कैच",
    "meaningHi": "पकड़ना",
    "meaningEn": "to capture; to grab",
    "examples": [
      {
        "en": "Catch the glass",
        "hi": "ग्ास पकड़ो।"
      }
    ]
  },
  {
    "id": 413,
    "word": "challenge",
    "pos": "n / v",
    "pronunciation": "चैलिंज",
    "meaningHi": "चुनौती | चुनौती देना",
    "meaningEn": "a difficult task; to dare",
    "examples": [
      {
        "en": "I accept the challenge",
        "hi": "मैं चुनौती स्ीकार करता हँ।"
      },
      {
        "en": "She challenged me to a game of chess",
        "hi": "उसने मुझे शतरंज खेलने की चुनौती दी।"
      }
    ]
  },
  {
    "id": 414,
    "word": "concern",
    "pos": "v / n",
    "pronunciation": "कन्सर्न",
    "meaningHi": "किसी से संबंधित होना अंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ",
    "meaningEn": "worry; to relate to; interest",
    "examples": [
      {
        "en": "Forced conversions in certain countries are causing concern",
        "hi": "कुछ देशों में जबरदस्ी धर्मांंतरण चिंता का कारण बन रहा है।"
      },
      {
        "en": "This matter does not concern me",
        "hi": "यह मामला मुझसे संबंधित नहीं है।"
      }
    ]
  },
  {
    "id": 415,
    "word": "continue",
    "pos": "v",
    "pronunciation": "कन्टिन्यू",
    "meaningHi": "जारी रहना",
    "meaningEn": "to go on; to persist",
    "examples": [
      {
        "en": "Continue studying",
        "hi": "पढ़ाई जारी रखो।"
      }
    ]
  },
  {
    "id": 416,
    "word": "correct",
    "pos": "adj / v",
    "pronunciation": "करेक्ट",
    "meaningHi": "सही 48 49 अंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ | सुधारना, ठीक करना",
    "meaningEn": "right; accurate; to fix",
    "examples": [
      {
        "en": "Which is the correct answer?",
        "hi": "सही उत्तर कौन-सा है?"
      },
      {
        "en": "Correct the spelling of this word",
        "hi": "इस शब्द की स्पेलिंग ठीक कर लो।"
      }
    ]
  },
  {
    "id": 417,
    "word": "cover",
    "pos": "n / v",
    "pronunciation": "कवर",
    "meaningHi": "आवरण, खोल, ढक्कन | ढँकना",
    "meaningEn": "to place over; a protective layer",
    "examples": [
      {
        "en": "snow -covered the mountain-tops",
        "hi": "बर्फ ने पर्वतशिखरों को ढँक लिया।"
      }
    ]
  },
  {
    "id": 418,
    "word": "creature",
    "pos": "n",
    "pronunciation": "क्रीचर",
    "meaningHi": "जीव, प्राणी",
    "meaningEn": "a being",
    "examples": []
  },
  {
    "id": 419,
    "word": "cross",
    "pos": "n / v",
    "pronunciation": "क्रॉस",
    "meaningHi": "काटने का चिन्ह X 2 सूली, जिसपर चढ़ा कर ईसा मसीह की हत्ा की गई थी। इसे ईसाई धर्म का चिह्न माना जाता है। | पार करना",
    "meaningEn": "to go across; an X shape",
    "examples": [
      {
        "en": "Lord Rama crossed the Ganga river in the boat of Kewat",
        "hi": "श्ीराम ने गंगा नदी केवट के नाव में पार की।"
      }
    ]
  },
  {
    "id": 420,
    "word": "cry",
    "pos": "n / v",
    "pronunciation": "क्राइ",
    "meaningHi": "रोने की चिल्ाहट, चीख | चिल्ाना, रोना",
    "meaningEn": "to weep; to shout",
    "examples": [
      {
        "en": "We heard a cry",
        "hi": "हमने एक चीख सुनी।"
      },
      {
        "en": "The child is crying",
        "hi": "बच्चा रो रहा है।"
      }
    ]
  },
  {
    "id": 421,
    "word": "curiosity",
    "pos": "n",
    "pronunciation": "क्युरिऔसिटी",
    "meaningHi": "जिज्ासा, उत्ुकता",
    "meaningEn": "desire to know",
    "examples": [
      {
        "en": "There is no knowledge without curiosity",
        "hi": "जिज्ासा के बिना ज्ान नहीं होता।"
      }
    ]
  },
  {
    "id": 422,
    "word": "cut",
    "pos": "n / v",
    "pronunciation": "कट",
    "meaningHi": "कटाव, घाव | काटना",
    "meaningEn": "to divide with a sharp instrument",
    "examples": [
      {
        "en": "cut-mark on the chin",
        "hi": "ठुड्ी पर कटाव का चिह्न"
      },
      {
        "en": "cut into pieces",
        "hi": "टुकड़े-टुकड़े में काटना"
      }
    ]
  },
  {
    "id": 423,
    "word": "defeat",
    "pos": "n / v",
    "pronunciation": "डिफ़ीीट",
    "meaningHi": "हार, पराजय | हराना, पराजित करना",
    "meaningEn": "to beat",
    "examples": [
      {
        "en": "Defeat should not deter you",
        "hi": "पराजय से तुम्ें रुकना नहीं चाहिए।"
      },
      {
        "en": "India has defeated Pakistan several times in war",
        "hi": "भारत ने कई बार पाकिस्ान को युद्ध में हराया है।"
      }
    ]
  },
  {
    "id": 424,
    "word": "defend",
    "pos": "v",
    "pronunciation": "डिफ़ेेन्ड",
    "meaningHi": "रक्षा करना 54 55 अंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ",
    "meaningEn": "to protect",
    "examples": []
  },
  {
    "id": 425,
    "word": "delight",
    "pos": "n / v",
    "pronunciation": "डिलाइट",
    "meaningHi": "अति आनंद, अत्ंत प्रसन्नता | अत्यधिक आनंदित कर देना",
    "meaningEn": "great joy",
    "examples": [
      {
        "en": "It is a de- light to see you here",
        "hi": "तुम्ें यहाँ देखना अति आनंद का विषय है।"
      },
      {
        "en": "The game delighted me",
        "hi": "खेल ने मुझे खूूब आनंदित कर दिया।"
      }
    ]
  },
  {
    "id": 426,
    "word": "deserve",
    "pos": "v",
    "pronunciation": "डिज़र्व",
    "meaningHi": "अच्े या बुरे कर्मफल का पात्र होना",
    "meaningEn": "to be worthy of",
    "examples": [
      {
        "en": "He deserves punishment",
        "hi": "वह सजा का पात्र है।"
      }
    ]
  },
  {
    "id": 427,
    "word": "drive",
    "pos": "n / v",
    "pronunciation": "ड्राइव",
    "meaningHi": "कार पर सैर 2 मुहिम 3 प्रबल प्रेरणा-शक्ति 1",
    "meaningEn": "to operate a vehicle",
    "examples": [
      {
        "en": "I like to drive",
        "hi": "मैं ड्ाइव करना पसंद करता हँ।"
      },
      {
        "en": "We went on a long drive",
        "hi": "हम एक लंबी कार-सैर पर गए।"
      }
    ]
  },
  {
    "id": 428,
    "word": "enter",
    "pos": "v",
    "pronunciation": "एन्टर",
    "meaningHi": "प्रवेश पाना, घुसना",
    "meaningEn": "to go into; to come in",
    "examples": [
      {
        "en": "She entered the classroom",
        "hi": "वह कक्षा में घुसी।"
      }
    ]
  },
  {
    "id": 429,
    "word": "explain",
    "pos": "v",
    "pronunciation": "एक्सप्ेन",
    "meaningHi": "समझाना",
    "meaningEn": "to make clear; to describe",
    "examples": [
      {
        "en": "Could you please explain the meaning of this poem?",
        "hi": "क्ा तुम इस कविता का अर्थ स्पष्ट कर सकते हो?"
      }
    ]
  },
  {
    "id": 430,
    "word": "fairly",
    "pos": "adv",
    "pronunciation": "फ़ेअलि",
    "meaningHi": "काफी 2 निष्पक्षता पूर्वक, न्यायपूर्वक",
    "meaningEn": "justly",
    "examples": [
      {
        "en": "fairly difficult",
        "hi": "काफी कठिन"
      },
      {
        "en": "He was not treated fairly",
        "hi": "उसके साथ न्ायपूर्ण व्यवहार नहीं हुआ।"
      }
    ]
  },
  {
    "id": 431,
    "word": "fault",
    "pos": "n",
    "pronunciation": "फ़ॉल्ट",
    "meaningHi": "दोष, गलती",
    "meaningEn": "defect",
    "examples": [
      {
        "en": "whose fault?",
        "hi": "किसकी गलती?"
      }
    ]
  },
  {
    "id": 432,
    "word": "fly",
    "pos": "n / v",
    "pronunciation": "फ़लाइ",
    "meaningHi": "मक्ी | 1 उड़ना 2 विमान में यात्ा करना",
    "meaningEn": "to move through the air",
    "examples": [
      {
        "en": "The bird is flying",
        "hi": "चिड़िया उड़ रही है।"
      },
      {
        "en": "He flew to London",
        "hi": "वह विमान से उड़ कर लंदन गया।"
      }
    ]
  },
  {
    "id": 433,
    "word": "forget",
    "pos": "v",
    "pronunciation": "फ़गेट",
    "meaningHi": "भूल जाना",
    "meaningEn": "to fail to remember",
    "examples": [
      {
        "en": "He forgets easily",
        "hi": "वह आसानी से भूूल जाता है।"
      }
    ]
  },
  {
    "id": 434,
    "word": "harsh",
    "pos": "adj",
    "pronunciation": "हाश",
    "meaningHi": "कठोर, रूखा",
    "meaningEn": "severe",
    "examples": [
      {
        "en": "harsh behaviour",
        "hi": "रूखा व्यवहार"
      }
    ]
  },
  {
    "id": 435,
    "word": "include",
    "pos": "v",
    "pronunciation": "इन्क्ूड",
    "meaningHi": "अंतर्गत होना, शामिल करना, साथ में रखना",
    "meaningEn": "to contain",
    "examples": [
      {
        "en": "Include girls too in the team",
        "hi": "टीम में लड़कियों को भी शामिल करो।"
      }
    ]
  },
  {
    "id": 436,
    "word": "manner",
    "pos": "n",
    "pronunciation": "मैनर",
    "meaningHi": "ढंग, रीति, तरीका 2 व्यवहार और बातचीत करने की तहजीब और तौर-तरीका 1 A law . एक कानूून को उचित तरीके से लागूू करना चाहिए। 2",
    "meaningEn": "behaviour",
    "examples": [
      {
        "en": "He doesn't have good manners",
        "hi": "उसके पास अच्छी तहजीब और तौर-तरीके नहीं हैं।"
      }
    ]
  },
  {
    "id": 437,
    "word": "mistake",
    "pos": "n",
    "pronunciation": "मिस्ेक",
    "meaningHi": "भूल, गलती",
    "meaningEn": "error",
    "examples": [
      {
        "en": "I made a mistake",
        "hi": "मैंने एक गलती कर दी।"
      }
    ]
  },
  {
    "id": 438,
    "word": "mystery",
    "pos": "n",
    "pronunciation": "मिस्टरि",
    "meaningHi": "रहस्य N अंंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ",
    "meaningEn": "something unknown",
    "examples": [
      {
        "en": "The mystery of the UFOs has not yet been solved",
        "hi": "यूू. एफ. ओ. का रहस्य अभी तक सुलझ नहीं पाया है।"
      }
    ]
  },
  {
    "id": 439,
    "word": "negative",
    "pos": "adj",
    "pronunciation": "नेगटिव",
    "meaningHi": "नकारात्मक",
    "meaningEn": "harmful",
    "examples": [
      {
        "en": "Let's shed negative emotions",
        "hi": "नकारात्मक भावनाओं को हम त्ाग दें।"
      }
    ]
  },
  {
    "id": 440,
    "word": "neglect",
    "pos": "v",
    "pronunciation": "निग्ेक्ट",
    "meaningHi": "उपेक्षा करना",
    "meaningEn": "to ignore",
    "examples": [
      {
        "en": "Never neglect your health",
        "hi": "अपने स्ास्थ्य की कभी भी उपेक्षा न करो।"
      }
    ]
  },
  {
    "id": 441,
    "word": "orphan",
    "pos": "n",
    "pronunciation": "ओफ़न",
    "meaningHi": "अनाथ",
    "meaningEn": "parentless child",
    "examples": [
      {
        "en": "The shelter for orphans is called orphanage",
        "hi": "अनाथों के रहने की जगह को अना- थालय कहते हैं।"
      }
    ]
  },
  {
    "id": 442,
    "word": "poison",
    "pos": "n / v",
    "pronunciation": "पोइज़न",
    "meaningHi": "जहर, विष | विष मिला देना",
    "meaningEn": "harmful substance",
    "examples": [
      {
        "en": "Some people poison the minds of others",
        "hi": "कुछ लोग दूसरों के दिमाग में जहर भर देते हैं।"
      }
    ]
  },
  {
    "id": 443,
    "word": "provide",
    "pos": "v",
    "pronunciation": "प्रवाइड",
    "meaningHi": "उपलब्ध कराना",
    "meaningEn": "to supply",
    "examples": [
      {
        "en": "Parents provide everything to their children",
        "hi": "माता-पिता बचों को सब-कुछ उपलब्ध कराते हैं।"
      }
    ]
  },
  {
    "id": 444,
    "word": "receive",
    "pos": "v",
    "pronunciation": "रिसीव",
    "meaningHi": "प्राप्त या स्ीकार करना",
    "meaningEn": "to get",
    "examples": [
      {
        "en": "I received a letter today",
        "hi": "मुझे आज एक चिट्ी प्राप्त हुई ।"
      }
    ]
  },
  {
    "id": 445,
    "word": "release",
    "pos": "n / v",
    "pronunciation": "रिलीस",
    "meaningHi": "छुटकारा, मुक्ति | मुक्त करना, खुला छोड़ना रिलाइ- अब्ल भरोसेमंद जिस पर भरोसा किया जा सके",
    "meaningEn": "to free",
    "examples": [
      {
        "en": "Can we find release from all pain and suffering?",
        "hi": "क्ा हमलोग सभी दु:ख-दर्द से छुटकारा पा सकते हैं?"
      },
      {
        "en": "Has he been released from jail?",
        "hi": "क्ा उसे जेल से मुक्त कर दिया गया है?"
      }
    ]
  },
  {
    "id": 446,
    "word": "rescue",
    "pos": "n / v",
    "pronunciation": "रेस्क्यू",
    "meaningHi": "बचाव, उद्धार | उद्धार करना, मुक्त कराना",
    "meaningEn": "to save",
    "examples": [
      {
        "en": "flood rescue operation",
        "hi": "बाढ़ से बचाव का अभियान"
      },
      {
        "en": "The flood hit were rescued by helicopters",
        "hi": "बाढ़-पीड़ितों का हेलिकॉप्टर के माध्यम से उद्धार कराया गया।"
      }
    ]
  },
  {
    "id": 447,
    "word": "return",
    "pos": "n / v",
    "pronunciation": "रिटर्न",
    "meaningHi": "वापसी 2 मुनाफा, लाभ कम मुनाफे वाला निवेश | वापस लौटना रेवरेंस श्रद्धाद्धा, अत्यधिक आदर",
    "meaningEn": "to come back",
    "examples": [
      {
        "en": "a low",
        "hi": "return investment"
      }
    ]
  },
  {
    "id": 448,
    "word": "rob",
    "pos": "v",
    "pronunciation": "रॉब",
    "meaningHi": "लूटना",
    "meaningEn": "to steal",
    "examples": [
      {
        "en": "He was robbed at gunpoint",
        "hi": "उसे बन्ूक दिखा कर लूूट लिया गया।"
      }
    ]
  },
  {
    "id": 449,
    "word": "shelter",
    "pos": "n / v",
    "pronunciation": "शेल्टर",
    "meaningHi": "शरण, आश्रय 2 रहने का ठिकाना 1",
    "meaningEn": "protection",
    "examples": [
      {
        "en": "Some pol- iticians shelter criminals",
        "hi": "कुछ राजनीतिज्ञ अपराधियों को आश्रय देते हैं।"
      },
      {
        "en": "When the rain started, people ran for shelter",
        "hi": "बारिश शुरू होने पर लोग आश्रय के लिए दौड़े।"
      }
    ]
  },
  {
    "id": 450,
    "word": "stable",
    "pos": "adj",
    "pronunciation": "स्ेब्ल",
    "meaningHi": "स्थिर",
    "meaningEn": "steady",
    "examples": [
      {
        "en": "a stable health",
        "hi": "स्थिर स्ास्थ्य, जिसमें उतार-चढ़ाव नहीं होता हो"
      }
    ]
  },
  {
    "id": 451,
    "word": "steady",
    "pos": "adj",
    "pronunciation": "स्ेडि",
    "meaningHi": "अविचल",
    "meaningEn": "firm",
    "examples": [
      {
        "en": "The slow and steady wins the race",
        "hi": "धीरे चलने वाला अविचल व्यक्ति ही लंबी दौड़ में जीतता है।"
      }
    ]
  },
  {
    "id": 452,
    "word": "strict",
    "pos": "adj",
    "pronunciation": "स्ट्रिक्ट",
    "meaningHi": "काम कराने में सख्त 190 191 अंंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ",
    "meaningEn": "demanding",
    "examples": []
  },
  {
    "id": 453,
    "word": "terrorism",
    "pos": "n",
    "pronunciation": "टेररिज़म",
    "meaningHi": "आतंकवाद",
    "meaningEn": "use of violence for political aims",
    "examples": [
      {
        "en": "Terrorism is destroying world peace",
        "hi": "आतंकवाद दुनिया की शांति का नाश कर रहा है।"
      }
    ]
  },
  {
    "id": 454,
    "word": "wealth",
    "pos": "n",
    "pronunciation": "वेल्थ",
    "meaningHi": "धन-संपत्ति वेल््थि धनी",
    "meaningEn": "riches",
    "examples": [
      {
        "en": "Not all wealthy people use their wealth for helping the needy and the poor",
        "hi": "सभी धनी लोग अपने धन का प्रयोग जरूरतमंदों और गरीबों की मदद के लिए नहीं करते।"
      }
    ]
  },
  {
    "id": 455,
    "word": "willing",
    "pos": "adj",
    "pronunciation": "विलिंग",
    "meaningHi": "इच्ुक",
    "meaningEn": "ready",
    "examples": [
      {
        "en": "Is he willing to work?",
        "hi": "क्ा वह काम करने को इच्ुक है?"
      }
    ]
  },
  {
    "id": 456,
    "word": "wonder",
    "pos": "v",
    "pronunciation": "वन्डर",
    "meaningHi": "आश्चर्यचकित होना",
    "meaningEn": "amazement",
    "examples": []
  },
  {
    "id": 457,
    "word": "worth",
    "pos": "n",
    "pronunciation": "वर्थ",
    "meaningHi": "किसी व्यक्ति या वस्तु का महत्त्व 222 223 Y अंंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ",
    "meaningEn": "value",
    "examples": []
  },
  {
    "id": 458,
    "word": "add",
    "pos": "v",
    "pronunciation": "ऐड",
    "meaningHi": "जोड़ना",
    "meaningEn": "to join; to put together",
    "examples": [
      {
        "en": "Add some salt",
        "hi": "थोड़ा नमक डालो।"
      }
    ]
  },
  {
    "id": 459,
    "word": "agree",
    "pos": "v",
    "pronunciation": "अग्ी",
    "meaningHi": "सहमत होना",
    "meaningEn": "to have the same opinion",
    "examples": [
      {
        "en": "I agree with you",
        "hi": "मैं तुमसे सहमत हँ।"
      },
      {
        "en": "Production of tomato sauce is an agro-industry",
        "hi": "टमाटर-सौस का उत्ादन एक कृषि-उद्ोग है।"
      }
    ]
  },
  {
    "id": 460,
    "word": "allow",
    "pos": "v",
    "pronunciation": "अलाउ",
    "meaningHi": "अनुमति देना",
    "meaningEn": "to permit; to let",
    "examples": [
      {
        "en": "Please allow me to speak",
        "hi": "कृपया मुझे बोलने की इजाजत दें।"
      }
    ]
  },
  {
    "id": 461,
    "word": "appear",
    "pos": "v",
    "pronunciation": "अपिअर",
    "meaningHi": "उपस्थित या हाजिर होना 2 {ऐसा} लगना {जैसे} 1",
    "meaningEn": "to come into sight; to seem",
    "examples": [
      {
        "en": "He appeared before the court",
        "hi": "वह अदालत के सामने हाजिर हुआ।"
      },
      {
        "en": "It appears that he is sick",
        "hi": "ऐसा लगता है जैसे वह बीमार है।"
      }
    ]
  },
  {
    "id": 462,
    "word": "consider",
    "pos": "v",
    "pronunciation": "कन्सिडर",
    "meaningHi": "विचार करना, सोचना कन्सिडरिंग किसी बात को ध्ान में रखते हुए",
    "meaningEn": "to think about carefully",
    "examples": [
      {
        "en": "Consider giving me a few of your books",
        "hi": "मुझे अपनी कुछ किताबें देने पर विचार करो।"
      },
      {
        "en": "Considering the expenditure, he dropped the idea of buying a car",
        "hi": "खर्च को ध्यान में रखते हुए उसने कार खरीदने का विचार छोड़ दिया।"
      }
    ]
  },
  {
    "id": 463,
    "word": "cooperative",
    "pos": "n / adj",
    "pronunciation": "कोअॉपरटिव",
    "meaningHi": "सहकारी संस्ा | सहयोग करने वाला",
    "meaningEn": "working together",
    "examples": [
      {
        "en": "Amul is a large milk",
        "hi": "cooperative."
      },
      {
        "en": "The officer has a cooperative attitude",
        "hi": "वह अधिकारी एक सहयोग करने वाला रुख रखता है।"
      }
    ]
  },
  {
    "id": 464,
    "word": "decide",
    "pos": "v",
    "pronunciation": "डिसाइड",
    "meaningHi": "निर्णय करना",
    "meaningEn": "to make a choice",
    "examples": [
      {
        "en": "Let's decide quickly",
        "hi": "आओ, जल्ी निर्णय करें ।"
      }
    ]
  },
  {
    "id": 465,
    "word": "describe",
    "pos": "v",
    "pronunciation": "डिस्काइब",
    "meaningHi": "वर्णन करना",
    "meaningEn": "to give an account of",
    "examples": [
      {
        "en": "describe the place in brief",
        "hi": "स्थान का वर्णन संक्षेप में करो"
      }
    ]
  },
  {
    "id": 466,
    "word": "etiquette",
    "pos": "n",
    "pronunciation": "एटिकेट",
    "meaningHi": "शिष्टाचार के तौर-तरीके",
    "meaningEn": "polite rules",
    "examples": [
      {
        "en": "We should all know the basic etiquette",
        "hi": "हम सभी को मूूलभूूत शिष्टाचार के तौर-तरीके जानने चाहिए।"
      }
    ]
  },
  {
    "id": 467,
    "word": "expect",
    "pos": "v",
    "pronunciation": "इक्स्ेक्ट",
    "meaningHi": "आशा करना, प्रत्ाशा करना",
    "meaningEn": "",
    "examples": [
      {
        "en": "I expect good results this time",
        "hi": "इस बार मैं अच्े परिणामों की आशा करता हँ।"
      }
    ]
  },
  {
    "id": 468,
    "word": "gentle",
    "pos": "adj",
    "pronunciation": "जेन्ट्ल",
    "meaningHi": "सौम्य, कोमल G 52 अंंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ",
    "meaningEn": "kind and careful; mild",
    "examples": [
      {
        "en": "gentle manners",
        "hi": "व्यवहार करने के सौम्य तौर-तरीके"
      }
    ]
  },
  {
    "id": 469,
    "word": "guide",
    "pos": "n / v",
    "pronunciation": "गाइड",
    "meaningHi": "मार्गदर्शक | रास्ता बताना, मार्गदर्शन करना",
    "meaningEn": "to lead",
    "examples": [
      {
        "en": "a tourist guide",
        "hi": "एक पर्यटन -मार्गदर्शक"
      },
      {
        "en": "My teacher keeps guiding me",
        "hi": "मेरे शिक्षक मेरा मार्गदर्शन करते रहते हैं।"
      }
    ]
  },
  {
    "id": 470,
    "word": "namaste",
    "pos": "n",
    "pronunciation": "नमस्ते",
    "meaningHi": "नमस्ते — सम्मानपूर्ण अभिवादन",
    "meaningEn": "a respectful greeting meaning 'I bow to the divine in you'",
    "examples": []
  },
  {
    "id": 471,
    "word": "notice",
    "pos": "n",
    "pronunciation": "नोटिस",
    "meaningHi": "सूचना, नोटिस 2 जानकारी 1",
    "meaningEn": "to observe",
    "examples": [
      {
        "en": "I have received a notice from the municipality",
        "hi": "मैंने नगरपालिका से एक नोटिस प्राप्त की है।"
      },
      {
        "en": "It has come to my notice that your child has not been going to the school",
        "hi": "यह मेरी जानकारी में आया है कि आपका बच्चा स्कूल नहीं जाता रहा है।"
      }
    ]
  },
  {
    "id": 472,
    "word": "powerful",
    "pos": "adj",
    "pronunciation": "पाउअफ़ल",
    "meaningHi": "शक्तिशाली, बलशाली",
    "meaningEn": "strong",
    "examples": [
      {
        "en": "a powerful man",
        "hi": "एक शक्तिशाली व्यक्ति"
      }
    ]
  },
  {
    "id": 473,
    "word": "raise",
    "pos": "v",
    "pronunciation": "रेज़",
    "meaningHi": "ऊपर उठाना 2 पालन-पोषण करके बड़ा करना",
    "meaningEn": "to lift",
    "examples": [
      {
        "en": "Raise your hands",
        "hi": "अपने हाथ उठाओ!"
      },
      {
        "en": "raise children",
        "hi": "बच्चे पाल-पोस कर बड़े करना"
      }
    ]
  },
  {
    "id": 474,
    "word": "reach",
    "pos": "v",
    "pronunciation": "रीच",
    "meaningHi": "पहुँचना",
    "meaningEn": "to arrive at",
    "examples": [
      {
        "en": "She has reached home",
        "hi": "वह घर पहुँच गई है।"
      }
    ]
  },
  {
    "id": 475,
    "word": "remain",
    "pos": "v",
    "pronunciation": "रिमेन",
    "meaningHi": "बने रहना 164 165 अंंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ",
    "meaningEn": "to stay",
    "examples": [
      {
        "en": "Please remain in our team",
        "hi": "कृपया हमारी टीम में बने रहो।"
      }
    ]
  },
  {
    "id": 476,
    "word": "report",
    "pos": "n / v",
    "pronunciation": "रिपोट",
    "meaningHi": "विवरण 2 अखबार या पत्रिका में छपी कोई खबर | 1 सूचित करना 2 खबर प्रकाशित करना 1 ? - क्ा तुमने पुलिस को सूूचित कर दिया है? 2 Did the ? - क्ा अखबारों ने",
    "meaningEn": "account",
    "examples": [
      {
        "en": "medical test report",
        "hi": "चिकित्ीय जाँच-विवरण"
      },
      {
        "en": "A lawyer represents the client in the court",
        "hi": "एक वकील न्ायालय में मुवक्किल का प्रतिनिधित्व करता है।"
      }
    ]
  },
  {
    "id": 477,
    "word": "silent",
    "pos": "adj",
    "pronunciation": "साइलन्ट",
    "meaningHi": "चुप, खामोश",
    "meaningEn": "quiet",
    "examples": [
      {
        "en": "a silent protest",
        "hi": "एक खामोश विरोध, जिसमें मुख से कुछ बोला नहीं जाता।"
      }
    ]
  },
  {
    "id": 478,
    "word": "sleep",
    "pos": "n / v",
    "pronunciation": "स्ीप",
    "meaningHi": "नींद | सोना",
    "meaningEn": "to rest",
    "examples": [
      {
        "en": "Did you have enough sleep?",
        "hi": "क्ा तुमने पर्याप्त नींद ली?"
      },
      {
        "en": "Is she sleeping?",
        "hi": "क्ा वह सो रही है?"
      }
    ]
  },
  {
    "id": 479,
    "word": "suggest",
    "pos": "v",
    "pronunciation": "सजेस्ट",
    "meaningHi": "सुझाव देना",
    "meaningEn": "to propose",
    "examples": [
      {
        "en": "Could you suggest some improvements?",
        "hi": "क्ा तुम कुछ सुधार का सुझाव दे सकते हो?"
      }
    ]
  },
  {
    "id": 480,
    "word": "throw",
    "pos": "v",
    "pronunciation": "थ्ो",
    "meaningHi": "फेंकना",
    "meaningEn": "to toss",
    "examples": []
  },
  {
    "id": 481,
    "word": "touch",
    "pos": "n / v",
    "pronunciation": "टच",
    "meaningHi": "छूने की क्रिया, स्पर्श | छूना",
    "meaningEn": "to contact",
    "examples": []
  },
  {
    "id": 482,
    "word": "afternoon",
    "pos": "n",
    "pronunciation": "आफ़्टर",
    "meaningHi": "आफ़्टरनूनदोपहर में, अपराह्न में वड्ज़ तत्पश्चात, बाद में",
    "meaningEn": "time after noon",
    "examples": [
      {
        "en": "The time after 12 noon till evening is called afternoon",
        "hi": "मध्य दिवस 12 बजे के बाद शाम तक के समय को 'आफ़टरनूून' कहते हैं।"
      },
      {
        "en": "I came first, she came afterwards",
        "hi": "मैं पहले आया, वह बाद में आई।"
      }
    ]
  },
  {
    "id": 483,
    "word": "aim",
    "pos": "n / v",
    "pronunciation": "एम",
    "meaningHi": "उद्ेश्य, लक्ष्य | लक्ष्य उद्ेश्य साधना",
    "meaningEn": "goal",
    "examples": [
      {
        "en": "What is the aim of human life?",
        "hi": "मानव जीवन का उद्देश्य क्ा है?"
      },
      {
        "en": "Aim high",
        "hi": "ऊँचे लक्ष्य को साधो।"
      }
    ]
  },
  {
    "id": 484,
    "word": "beyond",
    "pos": "adv",
    "pronunciation": "बियोंंड",
    "meaningHi": "के परे, से बाहर",
    "meaningEn": "on the far side of; more than",
    "examples": [
      {
        "en": "What happened was beyond my imagination",
        "hi": "जो हुआ वह मेरी कल्पना से परे था।"
      }
    ]
  },
  {
    "id": 485,
    "word": "blind",
    "pos": "adj",
    "pronunciation": "ब्ाइंड",
    "meaningHi": "अंधा, नेत्रहीन",
    "meaningEn": "unable to see",
    "examples": [
      {
        "en": "People are often blind to their own weaknesses",
        "hi": "लोग अपनी कमजोरियों के प्रति अकसर अंधे रहा करते हैं।"
      }
    ]
  },
  {
    "id": 486,
    "word": "business",
    "pos": "n",
    "pronunciation": "बिज़्नस",
    "meaningHi": "व्यापार",
    "meaningEn": "commercial activity; a company",
    "examples": []
  },
  {
    "id": 487,
    "word": "comprehend",
    "pos": "v",
    "pronunciation": "कॉम्प्रिहेंड",
    "meaningHi": "पूरी तरह समझना",
    "meaningEn": "to understand",
    "examples": [
      {
        "en": "unable to comprehend",
        "hi": "समझने में असमर्थ"
      }
    ]
  },
  {
    "id": 488,
    "word": "eager",
    "pos": "adj",
    "pronunciation": "ईगर",
    "meaningHi": "उत्ुक, इच्ुक",
    "meaningEn": "enthusiastic",
    "examples": [
      {
        "en": "eager to play",
        "hi": "खेलने के लिए उत्ुक"
      }
    ]
  },
  {
    "id": 489,
    "word": "effect",
    "pos": "n",
    "pronunciation": "इफे़क्ट",
    "meaningHi": "प्रभाव, परिणाम",
    "meaningEn": "a result; an impression",
    "examples": [
      {
        "en": "Asthma among children is an effect of air pollution",
        "hi": "बचों में अस्थमा वायु-प्रदूषण का परिणाम है।"
      }
    ]
  },
  {
    "id": 490,
    "word": "evening",
    "pos": "n",
    "pronunciation": "ईवनिंग",
    "meaningHi": "संध्ा, शाम 70 71 अंंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ",
    "meaningEn": "the period between afternoon and night",
    "examples": []
  },
  {
    "id": 491,
    "word": "fierce",
    "pos": "adj",
    "pronunciation": "फि़अस",
    "meaningHi": "भयंकर रूप से उग्र",
    "meaningEn": "aggressive",
    "examples": [
      {
        "en": "a fierce animal",
        "hi": "एक भयंकर रूप से उग्र जानवर"
      }
    ]
  },
  {
    "id": 492,
    "word": "future",
    "pos": "n / adj",
    "pronunciation": "फ़यूचर",
    "meaningHi": "भविष्य",
    "meaningEn": "the time yet to come",
    "examples": [
      {
        "en": "an uncertain future",
        "hi": "एक अनिश्चित भविष्य"
      },
      {
        "en": "the future plan",
        "hi": "भविष्य की योजना"
      }
    ]
  },
  {
    "id": 493,
    "word": "guard",
    "pos": "n / v",
    "pronunciation": "गाड",
    "meaningHi": "सुरक्षा-कर्मचारी 2 सुरक्षा-कवच | रक्षा करना, सुरक्षा प्रदान करना",
    "meaningEn": "to protect",
    "examples": [
      {
        "en": "जैसे, night",
        "hi": "guard"
      },
      {
        "en": "जैसे, chest",
        "hi": "guard"
      }
    ]
  },
  {
    "id": 494,
    "word": "history",
    "pos": "n",
    "pronunciation": "हिस्ट्रि",
    "meaningHi": "इतिहास",
    "meaningEn": "events of the past; a record",
    "examples": [
      {
        "en": "History is a record of the past events of a society",
        "hi": "इतिहास किसी समाज के भूूतकाल की घटनाओं का दस्तावेज है।"
      }
    ]
  },
  {
    "id": 495,
    "word": "ignore",
    "pos": "v",
    "pronunciation": "इग्नोर",
    "meaningHi": "उपेक्षा करना, ध्ान नहीं देना",
    "meaningEn": "to disregard",
    "examples": [
      {
        "en": "Let's ignore the small mistakes of others",
        "hi": "हम दूसरों की छोटी-छोटी भूूलों पर ध्यान न दें।"
      }
    ]
  },
  {
    "id": 496,
    "word": "Islam",
    "pos": "n",
    "pronunciation": "इज़लाम",
    "meaningHi": "इसलाम धर्म पैगंबर मुहम्मद द्ारा स्थापित धर्म",
    "meaningEn": "the religion founded by Prophet Muhammad",
    "examples": []
  },
  {
    "id": 497,
    "word": "language",
    "pos": "n",
    "pronunciation": "बॉडि",
    "meaningHi": "लैंग्विज शारीरिक हावभाव",
    "meaningEn": "a system of communication",
    "examples": [
      {
        "en": "His body language was not friendly",
        "hi": "उसके हावभाव मित्रतापूर्ण नहीं थे।"
      }
    ]
  },
  {
    "id": 498,
    "word": "lesson",
    "pos": "n",
    "pronunciation": "लेसन",
    "meaningHi": "पाठ किसी पुस्तक का एक अध्ाय 2 सीख",
    "meaningEn": "something learned",
    "examples": [
      {
        "en": "Each failure leaves a lesson to learn",
        "hi": "हर असफलता एक सीख छोड़ जाती है।"
      }
    ]
  },
  {
    "id": 499,
    "word": "lonely",
    "pos": "adj",
    "pronunciation": "लोन्लि",
    "meaningHi": "अकेला 114 115 अंंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ लोन्लिनस एकाकीपन, अकेलापन",
    "meaningEn": "alone",
    "examples": [
      {
        "en": "Being lonely can be an awful experience",
        "hi": "अकेला रहना एक बुरा अनुभव हो सकता है।"
      },
      {
        "en": "Saint Aurobindo used his loneliness in the prison cell to achieve communion with God",
        "hi": "महर्षि अरविंद ने जेल के सेल में अपने एकाकीपन का प्रयोग ईश्वर से अंतरंग संपर्क स्थापित करने के लिए किया।"
      }
    ]
  },
  {
    "id": 500,
    "word": "market",
    "pos": "n",
    "pronunciation": "माकिट",
    "meaningHi": "बाजार, मार्केेट",
    "meaningEn": "a place for buying and selling",
    "examples": []
  },
  {
    "id": 501,
    "word": "music",
    "pos": "n",
    "pronunciation": "म्ूज़िक",
    "meaningHi": "संगीत : क्ासिक्ल म्ूज़िक शास्त्रीय संगीत : in- इन्सट्रमेंट्ल म्ूज़िक वाद्यसंगीत 126 127 अंंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ : vo- cal वोकल म्ूज़िक",
    "meaningEn": "arranged sounds",
    "examples": [
      {
        "en": "Even plants and trees like music",
        "hi": "पेड़-पौधे भी संगीत पसंद करते हैं।"
      },
      {
        "en": "Classical music arouses the soul",
        "hi": "शास्त्रीय संगीत आत्मा को जगा देता है।"
      }
    ]
  },
  {
    "id": 502,
    "word": "natural",
    "pos": "adj",
    "pronunciation": "नैचरल",
    "meaningHi": "स्ाभाविक, प्राकृतिक नैचरलि स्ाभाविक ढंग से",
    "meaningEn": "of nature",
    "examples": [
      {
        "en": "natural scenery - प्राकृतिक दृश्य; a natural reaction",
        "hi": "एक स्ाभाविक प्रतिक्रिया"
      },
      {
        "en": "I didn't do anything; it happened naturally",
        "hi": "मैंने कुछ नहीं किया; यह स्ाभाविक रूप से हो गया।"
      }
    ]
  },
  {
    "id": 503,
    "word": "pleasant",
    "pos": "adj",
    "pronunciation": "प्ेज़न्ट",
    "meaningHi": "सुखद, आनंददायक प्लीज़ कृपया",
    "meaningEn": "agreeable",
    "examples": [
      {
        "en": "a pleasant evening",
        "hi": "एक सुखद शाम"
      },
      {
        "en": "come here, please! यहाँ आओ, कृपया! Please help me",
        "hi": "कृपया मेरी मदद करें!"
      }
    ]
  },
  {
    "id": 504,
    "word": "present",
    "pos": "adj / v",
    "pronunciation": "औम्निप्रेज़ंट",
    "meaningHi": "सर्वव्याव्यापी, सभी जगह उपस्थित | 1 उपस्थित होना 2 प्रस्तुत करना 3 उपहार देना | वर्तमान",
    "meaningEn": "gift; here now",
    "examples": [
      {
        "en": "It is believed that God is omnipresent",
        "hi": "ऐसा विश्वास करते हैं कि ईश्वर सर्व्ापी हैं।"
      },
      {
        "en": "Many students were not present in the class",
        "hi": "कई विद्यार्थीी कक्षा में उपस्थित नहीं थे।"
      }
    ]
  },
  {
    "id": 505,
    "word": "price",
    "pos": "n",
    "pronunciation": "प्राइस",
    "meaningHi": "कीमत, दाम, मूल्य",
    "meaningEn": "cost",
    "examples": []
  },
  {
    "id": 506,
    "word": "process",
    "pos": "n / v",
    "pronunciation": "प्ोसेस",
    "meaningHi": "प्रक्रिया | 1 प्रक्रिया में डालना",
    "meaningEn": "steps",
    "examples": [
      {
        "en": "the process of making soap",
        "hi": "साबुन बनाने की प्रक्रिया"
      },
      {
        "en": "Your application is being processed",
        "hi": "आपका आवेदन प्रकिया में डाल दिया गया है।"
      }
    ]
  },
  {
    "id": 507,
    "word": "public",
    "pos": "adj / n",
    "pronunciation": "पब्लिक",
    "meaningHi": "सार्वजनिक | जनता",
    "meaningEn": "for all",
    "examples": [
      {
        "en": "a public library",
        "hi": "एक सार्वजनिक पुस्तकालय, जो किसी एक व्यक्ति का नहीं हो बल्कि सभी के लिए खुला हो।"
      },
      {
        "en": "The public is driven more by emotions than reason",
        "hi": "जनता बुद्धि से अधिक भावना से चलती है।"
      }
    ]
  },
  {
    "id": 508,
    "word": "sadness",
    "pos": "n",
    "pronunciation": "सैड्नेस",
    "meaningHi": "उदासी",
    "meaningEn": "unhappiness",
    "examples": [
      {
        "en": "Listening to good music may remove all sadness",
        "hi": "अच्ा संगीत सारी उदासी मिटा सकता है।"
      }
    ]
  },
  {
    "id": 509,
    "word": "satisfy",
    "pos": "v",
    "pronunciation": "सैटिस्फ़ाइ",
    "meaningHi": "संतुष्ट करना",
    "meaningEn": "to fulfil",
    "examples": [
      {
        "en": "Did the hotel food satisfy you?",
        "hi": "क्ा होटल के भोजन ने तुम्ें संतुष्ट किया?"
      }
    ]
  },
  {
    "id": 510,
    "word": "science",
    "pos": "n",
    "pronunciation": "साइन्स",
    "meaningHi": "विज्ान 172 173 अंंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ",
    "meaningEn": "study of nature",
    "examples": []
  },
  {
    "id": 511,
    "word": "shine",
    "pos": "v",
    "pronunciation": "शाइन",
    "meaningHi": "चमकना",
    "meaningEn": "to glow",
    "examples": [
      {
        "en": "his face shines",
        "hi": "उसका चेहरा चमकता है"
      }
    ]
  },
  {
    "id": 512,
    "word": "situation",
    "pos": "n",
    "pronunciation": "सिचुएशन",
    "meaningHi": "स्थिति",
    "meaningEn": "circumstances",
    "examples": [
      {
        "en": "a bad situation",
        "hi": "एक बुरी स्थिति"
      }
    ]
  },
  {
    "id": 513,
    "word": "survive",
    "pos": "v",
    "pronunciation": "सवाइव",
    "meaningHi": "जीवित बचना, अस्तित्व में रहना",
    "meaningEn": "to live on",
    "examples": [
      {
        "en": "Will the patient survive?",
        "hi": "क्ा मरीज जीवित बचेगा?"
      }
    ]
  },
  {
    "id": 514,
    "word": "ability",
    "pos": "n",
    "pronunciation": "अबिलिटी",
    "meaningHi": "योग्यता, क्षमता",
    "meaningEn": "the power or skill to do something",
    "examples": [
      {
        "en": "ability to memorise",
        "hi": "स्मरण करने की योग्यता"
      }
    ]
  },
  {
    "id": 515,
    "word": "admit",
    "pos": "v",
    "pronunciation": "अडमिट",
    "meaningHi": "आने देना, भरती करना 2 मान लेना",
    "meaningEn": "to confess",
    "examples": [
      {
        "en": "admitted to the school",
        "hi": "स्कूल में दाखिल"
      },
      {
        "en": "I admit I made a mistake",
        "hi": "मैं मानता हँ मैंने गलती की।"
      }
    ]
  },
  {
    "id": 516,
    "word": "advice",
    "pos": "n",
    "pronunciation": "अड्वाइस",
    "meaningHi": "सलाह",
    "meaningEn": "guidance; a recommendation",
    "examples": [
      {
        "en": "I need your advice",
        "hi": "मुझे तुम्ारी सलाह की जरूरत है।"
      }
    ]
  },
  {
    "id": 517,
    "word": "calmly",
    "pos": "adv",
    "pronunciation": "काम्ी",
    "meaningHi": "शांतिपूर्वक, चुपचाप",
    "meaningEn": "peacefully",
    "examples": [
      {
        "en": "She keeps working calmly",
        "hi": "वह शांतिपूर्वक काम करती रहती है।"
      }
    ]
  },
  {
    "id": 518,
    "word": "clever",
    "pos": "adj",
    "pronunciation": "क्लेवर",
    "meaningHi": "चालाक, चतुर 38 39 अंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ",
    "meaningEn": "intelligent",
    "examples": []
  },
  {
    "id": 519,
    "word": "comfort",
    "pos": "n / v",
    "pronunciation": "कम्फ़ट",
    "meaningHi": "आराम 2 सुख-सुविधा की वस्तुएँ",
    "meaningEn": "a state of ease; to console",
    "examples": [
      {
        "en": "A sannyasi has to leave worldly comforts",
        "hi": "एक संन्ासी को सांसारिक सुख-सुविधाओं को छोड़ना होता है।"
      },
      {
        "en": "The teacher was trying to comfort the failed students",
        "hi": "शिक्षक असफल छात्रों को सांत्वना देने की कोशिश कर रहे थे।"
      }
    ]
  },
  {
    "id": 520,
    "word": "discover",
    "pos": "v",
    "pronunciation": "डिस्कवर",
    "meaningHi": "खोज करना",
    "meaningEn": "to find",
    "examples": [
      {
        "en": "Did Benjamin Franklin discover electricity?",
        "hi": "क्ा बिजली की खोज बेंजमिन फ़्ैंक्लिन ने की?"
      }
    ]
  },
  {
    "id": 521,
    "word": "enjoy",
    "pos": "v",
    "pronunciation": "इनजोइ",
    "meaningHi": "आनंद लेना",
    "meaningEn": "to take pleasure in",
    "examples": [
      {
        "en": "Enjoy life; let suffering not mar it",
        "hi": "जीवन का आनंद लो; दुखों को इसे नष्ट न करने दो।"
      }
    ]
  },
  {
    "id": 522,
    "word": "escape",
    "pos": "n / v",
    "pronunciation": "इस्केप",
    "meaningHi": "भागना, बच निकलना",
    "meaningEn": "to get away from; to flee",
    "examples": [
      {
        "en": "The prisoner's escape is causing concern",
        "hi": "कैदी का पलायन चिंता उत्पन्न कर रहा है।"
      },
      {
        "en": "He escaped from the prison",
        "hi": "वह जेल से भाग गया।"
      }
    ]
  },
  {
    "id": 523,
    "word": "forever",
    "pos": "adv",
    "pronunciation": "फ़र्एवर",
    "meaningHi": "सदैव, हमेशा के लिए, स्ायी रूप से",
    "meaningEn": "for all time; eternally",
    "examples": [
      {
        "en": "We have lost him forever",
        "hi": "हमने उन्हेंें हमेशा के लिए खो दिया है।"
      }
    ]
  },
  {
    "id": 524,
    "word": "fresh",
    "pos": "adj",
    "pronunciation": "फ्े़श",
    "meaningHi": "ताजा",
    "meaningEn": "newly made; not stale",
    "examples": []
  },
  {
    "id": 525,
    "word": "heavy",
    "pos": "adj",
    "pronunciation": "हेवि",
    "meaningHi": "भारी",
    "meaningEn": "of great weight",
    "examples": []
  },
  {
    "id": 526,
    "word": "optimist",
    "pos": "n",
    "pronunciation": "अॉप्टिमिस्ट",
    "meaningHi": "आशावादी",
    "meaningEn": "hopeful person",
    "examples": [
      {
        "en": "An optimist is one who always keeps hopes alive in life",
        "hi": "आशावादी वह है जो जीवन में हमेशा आशाएँ बनाए रखता है।"
      }
    ]
  },
  {
    "id": 527,
    "word": "quiet",
    "pos": "adj",
    "pronunciation": "क्वायट",
    "meaningHi": "शांत, खामोश 18 अंंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ",
    "meaningEn": "calm",
    "examples": [
      {
        "en": "a quiet environment",
        "hi": "शांत वातावरण"
      }
    ]
  },
  {
    "id": 528,
    "word": "racist",
    "pos": "adj",
    "pronunciation": "रेसिस्ट",
    "meaningHi": "नस्लवादी जो कुछ नसों के लोगों, जैसे अफ्ीका के काले लोगों को, या शूद्रोंों को, नीच दृष्टि से देखता हो।",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 529,
    "word": "sad",
    "pos": "adj",
    "pronunciation": "सैड",
    "meaningHi": "उदास 2 बुरा, शोकजनक",
    "meaningEn": "unhappy",
    "examples": [
      {
        "en": "Why is she sad?",
        "hi": "वह उदास क्योंों है?"
      },
      {
        "en": "a sad occurrence",
        "hi": "एक शोकजनक घटना"
      }
    ]
  },
  {
    "id": 530,
    "word": "sharp",
    "pos": "adj",
    "pronunciation": "शाप",
    "meaningHi": "तेज धार या नोंक वाला अंंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ",
    "meaningEn": "keen edge",
    "examples": [
      {
        "en": "a sharp knife - एक तेज धार वाला चाकूू; a sharp mind",
        "hi": "एक तेज दिमाग"
      }
    ]
  },
  {
    "id": 531,
    "word": "smooth",
    "pos": "adj",
    "pronunciation": "स्मूद",
    "meaningHi": "चिकना",
    "meaningEn": "even surface",
    "examples": [
      {
        "en": "a smooth surface",
        "hi": "एक चिकनी सतह"
      }
    ]
  },
  {
    "id": 532,
    "word": "straight",
    "pos": "adj / adv",
    "pronunciation": "स्ट्रेट",
    "meaningHi": "सीधा | सीधे",
    "meaningEn": "not curved",
    "examples": [
      {
        "en": "straight line",
        "hi": "सीधी रेखा"
      },
      {
        "en": "Go straight",
        "hi": "सीधे जाओ।"
      }
    ]
  },
  {
    "id": 533,
    "word": "strange",
    "pos": "adj",
    "pronunciation": "स्ट्ेनज",
    "meaningHi": "अजीब, विचित्र",
    "meaningEn": "unusual",
    "examples": [
      {
        "en": "strange people",
        "hi": "अजीब लोग"
      }
    ]
  },
  {
    "id": 534,
    "word": "studious",
    "pos": "adj",
    "pronunciation": "स्ूडिअस",
    "meaningHi": "अध्यनशील, पढ़ने-लिखने में रुचि रखने वाला",
    "meaningEn": "devoted to study",
    "examples": []
  },
  {
    "id": 535,
    "word": "sweet",
    "pos": "adj",
    "pronunciation": "स्वीट",
    "meaningHi": "मीठा",
    "meaningEn": "sugary",
    "examples": [
      {
        "en": "sweet memories",
        "hi": "मीठी यादें"
      }
    ]
  },
  {
    "id": 536,
    "word": "tactful",
    "pos": "adj",
    "pronunciation": "टैक्ट्फ़्ल",
    "meaningHi": "चतुराई से काम निकालने वाला अच्े अर्थ में",
    "meaningEn": "showing sensitivity",
    "examples": []
  },
  {
    "id": 537,
    "word": "trouble",
    "pos": "n",
    "pronunciation": "ट्र॒बल",
    "meaningHi": "समस्ा, कष्ट",
    "meaningEn": "difficulty",
    "examples": []
  },
  {
    "id": 538,
    "word": "youth",
    "pos": "n",
    "pronunciation": "यूथ़",
    "meaningHi": "युवा अवस्ा, यौवन, जवानी 2 जवान 1",
    "meaningEn": "young age",
    "examples": [
      {
        "en": "a yummy cake",
        "hi": "एक स्वादिष्ट केक"
      },
      {
        "en": "Youth is a priceless possession not be squandered away for the sake of momentary excitements",
        "hi": "युवा अवस्था एक अनमोल संपदा है जिसे क्षणिक उत्तेजनाओं के पीछे बर्बाद नहीं कर देना चाहिए।"
      }
    ]
  },
  {
    "id": 539,
    "word": "baptism",
    "pos": "n",
    "pronunciation": "बैप्टिज़म",
    "meaningHi": "बपतिस्मा — ईसाई शुद्धि संस्कार",
    "meaningEn": "a Christian ceremony of purification with water",
    "examples": []
  },
  {
    "id": 540,
    "word": "claim",
    "pos": "n / v",
    "pronunciation": "क्ेम",
    "meaningHi": "दावा अंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ | 1 दावा करना 2 मृत्ु का कारण बनना",
    "meaningEn": "to assert; to demand as rightful",
    "examples": [
      {
        "en": "His claim was false",
        "hi": "उसका दावा गलत था।"
      },
      {
        "en": "He claims that he has seen fairies",
        "hi": "वह दावा करता है कि उसने परियों को देखा है।"
      }
    ]
  },
  {
    "id": 541,
    "word": "collect",
    "pos": "v",
    "pronunciation": "कलेक्ट",
    "meaningHi": "संग्रह करना, इकट्ा करना",
    "meaningEn": "to gather; to bring together",
    "examples": [
      {
        "en": "collect coins",
        "hi": "सिक्कोंों का संग्रह करना"
      }
    ]
  },
  {
    "id": 542,
    "word": "compare",
    "pos": "v",
    "pronunciation": "तुलना एक आदमी से नहीं कर सकते।",
    "meaningHi": "कम्ेअर तुलना करना",
    "meaningEn": "to examine similarities and differences",
    "examples": [
      {
        "en": "You can't compare an animal with a man",
        "hi": "तुम एक जानवर की"
      }
    ]
  },
  {
    "id": 543,
    "word": "develop",
    "pos": "v",
    "pronunciation": "डिवेलप",
    "meaningHi": "विकास करना, विकसित होना",
    "meaningEn": "to grow; to advance",
    "examples": [
      {
        "en": "Let us develop our understanding",
        "hi": "हम अपनी समझ को विकसित करें।"
      }
    ]
  },
  {
    "id": 544,
    "word": "increase",
    "pos": "n / v",
    "pronunciation": "इनक्रीस",
    "meaningHi": "वृद्धि, बढ़ोत्तरी | बढ़ना, वृद्धि करना",
    "meaningEn": "to grow",
    "examples": [
      {
        "en": "increase in salary",
        "hi": "वेतन में वृद्धि"
      },
      {
        "en": "increase the exercises",
        "hi": "व्ायामों में वृद्धि करें"
      }
    ]
  },
  {
    "id": 545,
    "word": "involve",
    "pos": "v",
    "pronunciation": "इन्वॉल्व",
    "meaningHi": "किसी प्रसंग, कार्यक्रम या गतिविधि में किसी का शामिल होना, या करना",
    "meaningEn": "to include",
    "examples": [
      {
        "en": "Junior doctors were not involved in this surgery",
        "hi": "जूनियर डॉक्टरों को इस ऑपरेशन में शामिल नहीं किया गया।"
      }
    ]
  },
  {
    "id": 546,
    "word": "manage",
    "pos": "v",
    "pronunciation": "मैनिज",
    "meaningHi": "प्रबंध करना, संचालन करना",
    "meaningEn": "to handle",
    "examples": [
      {
        "en": "Who man- ages this business?",
        "hi": "इस व्यवसाय का संचालन कौन करता है?"
      }
    ]
  },
  {
    "id": 547,
    "word": "reduce",
    "pos": "v",
    "pronunciation": "रिड्ूस",
    "meaningHi": "आकार, मात्ा आदि की दृष्टि से घटाना, कम करना रिडक्शन कटौती, कमी",
    "meaningEn": "to lessen",
    "examples": [
      {
        "en": "Reduce your weight",
        "hi": "अपना वजन कम करो।"
      },
      {
        "en": "no reduction in prices",
        "hi": "मूूल्य में कोई कमी नहीं"
      }
    ]
  },
  {
    "id": 548,
    "word": "solve",
    "pos": "v",
    "pronunciation": "सॉल्व",
    "meaningHi": "हल करना, किसी समस्ा या प्रश्न का समाधान करना",
    "meaningEn": "to resolve",
    "examples": [
      {
        "en": "solve a problem",
        "hi": "समस्ा का समाधान करना"
      }
    ]
  },
  {
    "id": 549,
    "word": "achiever",
    "pos": "n",
    "pronunciation": "अचीवर",
    "meaningHi": "किसी कार्य को मेहनत द्ारा संपन्न कर सफलता प्राप्त करने वाला व्यक्ति; उपलब्धि प्राप्त करने वाला व्यक्ति",
    "meaningEn": "successful person",
    "examples": [
      {
        "en": "Don Bradman is the all-time great achiever in cricket",
        "hi": "डॉन ब्ैडमन क्रिकेट के खेल में अब तक के सबसे बड़े उपलब्धिकर्ता हैं।"
      }
    ]
  },
  {
    "id": 550,
    "word": "admire",
    "pos": "v",
    "pronunciation": "अड्मायर",
    "meaningHi": "आदर करना, प्रशंसा करना ऐड्मरेशन आदर, प्रशंसा",
    "meaningEn": "to respect",
    "examples": [
      {
        "en": "We admire Sachin Tendulkar",
        "hi": "हम सचिन तेंदुलकर की प्रशंसा करते हैं।"
      },
      {
        "en": "We have admiration for Virat Kohli",
        "hi": "विराट कोहली के लिए हमारे मन में प्रशंसा-भाव है।"
      }
    ]
  },
  {
    "id": 551,
    "word": "assertive",
    "pos": "adj",
    "pronunciation": "असर्िव",
    "meaningHi": "मुखर, अपने विचारों को जोर दे कर बोलने वाला",
    "meaningEn": "confident",
    "examples": [
      {
        "en": "Being assertive is a great quality sometimes",
        "hi": "कभी-कभी असर्टिव होना एक बड़ा गुण होता है।"
      }
    ]
  },
  {
    "id": 552,
    "word": "brain",
    "pos": "n",
    "pronunciation": "",
    "meaningHi": "ब्ेन, ब्ेइन मस्तिष्क, दिमाग",
    "meaningEn": "the organ of thinking; intellect",
    "examples": []
  },
  {
    "id": 553,
    "word": "decision",
    "pos": "n",
    "pronunciation": "डिसिशज़न",
    "meaningHi": "निर्णय, फैसला",
    "meaningEn": "a choice; a conclusion reached",
    "examples": [
      {
        "en": "Let's take a decision early",
        "hi": "हम एक निर्णय जल्ी लें।"
      }
    ]
  },
  {
    "id": 554,
    "word": "difference",
    "pos": "n",
    "pronunciation": "डिफ़्रन्स",
    "meaningHi": "अंतर, भेद",
    "meaningEn": "a way things are not the same",
    "examples": [
      {
        "en": "What is the difference between the two?",
        "hi": "दोनों के बीच अंतर क्ा है?"
      }
    ]
  },
  {
    "id": 555,
    "word": "inferiority",
    "pos": "n",
    "pronunciation": "इन््फि़रि",
    "meaningHi": "अौरटि हीनता अन्य से नीचा या छोटा होने की स्थिति",
    "meaningEn": "",
    "examples": [
      {
        "en": "Racists still believe in inferior- ity of certain races",
        "hi": "जातिवादी अभी भी कुछ जातियों की निम्नता में विश्वास करते हैं।"
      }
    ]
  },
  {
    "id": 556,
    "word": "offence",
    "pos": "n",
    "pronunciation": "अफ़ेेन्स",
    "meaningHi": "अपराध, दोष",
    "meaningEn": "a crime; causing hurt feelings",
    "examples": [
      {
        "en": "Stealing is an offence",
        "hi": "चोरी करना एक अपराध है।"
      }
    ]
  },
  {
    "id": 557,
    "word": "offend",
    "pos": "v",
    "pronunciation": "अफ़ेेन्ड",
    "meaningHi": "ठेस पहुँचाना, नाराज कर देना",
    "meaningEn": "to cause displeasure",
    "examples": [
      {
        "en": "He offends everybody with his rude speech",
        "hi": "वह अपनी रूखी वाणी से सभी को नाराज कर देता है।"
      }
    ]
  },
  {
    "id": 558,
    "word": "opinion",
    "pos": "n",
    "pronunciation": "अपिन्यन",
    "meaningHi": "विचार, मत, राय अपोनन्ट प्रतिपक्षी, विरोधी",
    "meaningEn": "personal view",
    "examples": [
      {
        "en": "What's your opinion?",
        "hi": "तुम्ारी राय क्ा है?"
      },
      {
        "en": "Never underestimate your opponents",
        "hi": "अपने विरोधियों को कम कर के मत आँको।"
      }
    ]
  },
  {
    "id": 559,
    "word": "pessimism",
    "pos": "n",
    "pronunciation": "पेसिमिज़म",
    "meaningHi": "निराशावादिता अंंगरेज़ी शब्द उच्ारण हिंदी में अर्थ",
    "meaningEn": "",
    "examples": [
      {
        "en": "Avoid pessimism",
        "hi": "निराशावादिता से बचो"
      }
    ]
  },
  {
    "id": 560,
    "word": "pessimist",
    "pos": "adj",
    "pronunciation": "पेसिमिस्ट",
    "meaningHi": "निराशावादी",
    "meaningEn": "",
    "examples": [
      {
        "en": "Pessimists seldom win in life",
        "hi": "निराशावादी लोग जीवन में शायद ही कभी जीतते हैं।"
      }
    ]
  },
  {
    "id": 561,
    "word": "poverty",
    "pos": "n",
    "pronunciation": "पॉवटि",
    "meaningHi": "दरिद्रता, गरीबी",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 562,
    "word": "sensible",
    "pos": "adj",
    "pronunciation": "सेन्सिबल",
    "meaningHi": "समझदार",
    "meaningEn": "practical",
    "examples": [
      {
        "en": "He is a sensible boy",
        "hi": "वह एक समझदार लड़का है।"
      }
    ]
  },
  {
    "id": 563,
    "word": "sensitive",
    "pos": "adj",
    "pronunciation": "सेन्सिटिव",
    "meaningHi": "संवेदनशील",
    "meaningEn": "easily affected",
    "examples": [
      {
        "en": "She is too sensitive",
        "hi": "वह अति संवेदनशील है।"
      }
    ]
  },
  {
    "id": 564,
    "word": "smell",
    "pos": "n / v",
    "pronunciation": "स्मेल",
    "meaningHi": "गंध, बू | 1 सूँघना 2 सुगंध फैलाना",
    "meaningEn": "odour",
    "examples": [
      {
        "en": "Rose smells well",
        "hi": "गुलाब अच्ा महकता है।"
      }
    ]
  },
  {
    "id": 565,
    "word": "submissive",
    "pos": "adj",
    "pronunciation": "सब्मिसिव",
    "meaningHi": "आज्ाकारी",
    "meaningEn": "yielding to authority",
    "examples": [
      {
        "en": "a submissive child",
        "hi": "एक आज्ाकारी बालक"
      }
    ]
  },
  {
    "id": 566,
    "word": "accident",
    "pos": "n",
    "pronunciation": "ऐक्सिडन्ट",
    "meaningHi": "दुर्घटना; संयोग",
    "meaningEn": "an unexpected harmful event",
    "examples": [
      {
        "en": "He was killed in an acci- dent",
        "hi": "वह एक दुर्घटना में मारा गया।"
      },
      {
        "en": "My meeting her in the library was an accident",
        "hi": "मेरी उससे पुस्तकालय में मुलाकात एक संयोग थी।"
      }
    ]
  },
  {
    "id": 567,
    "word": "address",
    "pos": "n / v",
    "pronunciation": "अड्ेस",
    "meaningHi": "पता | भाषण या व्याख्ान देना, संबोधन करना 1893 - स्ामी विवेकानंद ने विश्व की धर्मसंसद को 1893 में संबोधित किया।",
    "meaningEn": "a location; to speak to",
    "examples": []
  },
  {
    "id": 568,
    "word": "amount",
    "pos": "n",
    "pronunciation": "अमाउंट",
    "meaningHi": "पैसा 2 मात्ा 1",
    "meaningEn": "quantity",
    "examples": [
      {
        "en": "He lost a big amount in gambling",
        "hi": "उसने जुए में काफी पैसे गँवाए।"
      },
      {
        "en": "A big amount of our time is wasted every day",
        "hi": "हमारे समय की एक बड़ी मात्रा रोज बरबाद होती है।"
      }
    ]
  },
  {
    "id": 569,
    "word": "art",
    "pos": "n",
    "pronunciation": "आट",
    "meaningHi": "कला",
    "meaningEn": "creative expression; skill",
    "examples": [
      {
        "en": "Art is a creative activity",
        "hi": "कला एक सृजनात्मक गतिविधि है।"
      }
    ]
  },
  {
    "id": 570,
    "word": "board",
    "pos": "n / v",
    "pronunciation": "बोर्ड",
    "meaningHi": "लकड़ी का तख्ा या पटरा 2 परिषद, मंडल | विमान, जहाज, बस आदि में सवार होना अंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ",
    "meaningEn": "a flat piece of wood; a committee",
    "examples": [
      {
        "en": "board of directors",
        "hi": "निदेशक-मंडल"
      },
      {
        "en": "I boarded the flight",
        "hi": "मैं हवाई जहाज में चढ़ गया।"
      }
    ]
  },
  {
    "id": 571,
    "word": "breathe",
    "pos": "v",
    "pronunciation": "ब्ीद",
    "meaningHi": "साँस लेना",
    "meaningEn": "to take air in and out",
    "examples": [
      {
        "en": "The man is not yet dead; he is still breathing",
        "hi": "वह आदमी अभी मरा नहीं है; वह अभी भी साँस ले रहा है।"
      }
    ]
  },
  {
    "id": 572,
    "word": "bus",
    "pos": "n",
    "pronunciation": "बस",
    "meaningHi": "बस यात्रियों के लिए चार या छह पहिए की बड़ी गाड़ी",
    "meaningEn": "a large vehicle for passengers",
    "examples": []
  },
  {
    "id": 573,
    "word": "centre",
    "pos": "n",
    "pronunciation": "सेन्टर",
    "meaningHi": "केंद्र",
    "meaningEn": "the middle point; a main place",
    "examples": [
      {
        "en": "She was the centre of attraction",
        "hi": "वह आकर्षण का केंद्र थी।"
      }
    ]
  },
  {
    "id": 574,
    "word": "chance",
    "pos": "n",
    "pronunciation": "चान्स",
    "meaningHi": "मौका 2 संयोग",
    "meaningEn": "a possibility; an opportunity",
    "examples": [
      {
        "en": "Don't miss this golden chance",
        "hi": "यह सुनहरा मौका न गँवाओ।"
      },
      {
        "en": "It is a mere chance that we met today",
        "hi": "यह एक महज संयोग है कि हम आज मिले।"
      }
    ]
  },
  {
    "id": 575,
    "word": "circle",
    "pos": "n",
    "pronunciation": "सर्कल",
    "meaningHi": "घेरा, वृत्त",
    "meaningEn": "a round shape; a group",
    "examples": []
  },
  {
    "id": 576,
    "word": "colour",
    "pos": "n",
    "pronunciation": "कलर",
    "meaningHi": "रंग",
    "meaningEn": "a visual property like red or blue",
    "examples": [
      {
        "en": "Colours are of three kinds— primary, secondary and tertiary",
        "hi": "रंग तीन तरह के होते हैं— प्राथमिक, द्वितीयक और तृतीयक।"
      }
    ]
  },
  {
    "id": 577,
    "word": "company",
    "pos": "n",
    "pronunciation": "कम्पनि",
    "meaningHi": "व्यापार करने वाली कंपनी 2 साथ, संग, सन्निधि",
    "meaningEn": "a business",
    "examples": [
      {
        "en": "One feels good in his company",
        "hi": "उसके संग में अच्ा महसूूस होता है।"
      }
    ]
  },
  {
    "id": 578,
    "word": "complete",
    "pos": "adj / v",
    "pronunciation": "कम्प्ीट",
    "meaningHi": "पूर्ण 2 पूरा हो चुका हुआ | पूरा करना",
    "meaningEn": "whole; to finish",
    "examples": [
      {
        "en": "a complete man",
        "hi": "एक पूर्ण पुरुष"
      },
      {
        "en": "The work is complete",
        "hi": "काम पूूरा हो चुका है।"
      }
    ]
  },
  {
    "id": 579,
    "word": "contact",
    "pos": "n / v",
    "pronunciation": "कॉन्टैक्ट",
    "meaningHi": "संपर्क 2 व्यक्ति जिससे जान-पहचान हो | संपर्क करना",
    "meaningEn": "communication; to get in touch",
    "examples": [
      {
        "en": "He is an old contact",
        "hi": "वह एक पुरानी जान-पहचान का व्यक्ति है।"
      },
      {
        "en": "Please contact me tomorrow",
        "hi": "कृपया मुझसे कल संपर्क करें।"
      }
    ]
  },
  {
    "id": 580,
    "word": "crowd",
    "pos": "n",
    "pronunciation": "क्ाउड",
    "meaningHi": "भीड़ अंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ",
    "meaningEn": "a large group of people",
    "examples": []
  },
  {
    "id": 581,
    "word": "danger",
    "pos": "n",
    "pronunciation": "डेनजर",
    "meaningHi": "खतरा डेनजरस खतरनाक",
    "meaningEn": "risk of harm",
    "examples": [
      {
        "en": "Lion is a dangerous animal",
        "hi": "शेर एक खतरनाक जानवर है।"
      }
    ]
  },
  {
    "id": 582,
    "word": "demand",
    "pos": "n / v",
    "pronunciation": "डिमांंड",
    "meaningHi": "माँग अंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ | माँग करना",
    "meaningEn": "firm request",
    "examples": [
      {
        "en": "Their demand is that they should get free medicines",
        "hi": "उनकी माँग है कि उन्हेंें मुफ्त में दवाईयां मिलें।"
      },
      {
        "en": "Women are demanding more freedom in Saudi Arabia",
        "hi": "साउदी अरब में स्त्रियाँ अधिक स्वतंत्रता की माँग कर रही हैं।"
      }
    ]
  },
  {
    "id": 583,
    "word": "detail",
    "pos": "n",
    "pronunciation": "डीटेल",
    "meaningHi": "तथ्य या सूचना, ब्ोरा",
    "meaningEn": "a specific",
    "examples": [
      {
        "en": "Give me details of your trip",
        "hi": "अपनी यात्रा के विवरण मुझे दो।"
      }
    ]
  },
  {
    "id": 584,
    "word": "direction",
    "pos": "n",
    "pronunciation": "डरेक्शन",
    "meaningHi": "डाइरेक्शन 1 दिशा 2 निर्देशन",
    "meaningEn": "the way something faces or moves",
    "examples": [
      {
        "en": "We work under the direction of an expert",
        "hi": "हम एक विशेषज्ञ के निर्देेशन में काम करते हैं।"
      }
    ]
  },
  {
    "id": 585,
    "word": "distance",
    "pos": "n",
    "pronunciation": "डिस्टन्स",
    "meaningHi": "दूरी",
    "meaningEn": "the space between two points",
    "examples": []
  },
  {
    "id": 586,
    "word": "doctor",
    "pos": "n",
    "pronunciation": "डॉक्टर",
    "meaningHi": "चिकित्सक 2 स्ातकोत्तर से ऊपर की एक विशेष अकादमिक उपाधि",
    "meaningEn": "a medical professional; a physician",
    "examples": []
  },
  {
    "id": 587,
    "word": "event",
    "pos": "n",
    "pronunciation": "इवेन्ट",
    "meaningHi": "घटना 2 समारोह",
    "meaningEn": "occurrence",
    "examples": [
      {
        "en": "a sad event",
        "hi": "एक उदास करने वाली घटना"
      },
      {
        "en": "Marriage is always a big event",
        "hi": "विवाह हमेशा एक बड़ा समारोह होता है।"
      }
    ]
  },
  {
    "id": 588,
    "word": "evidence",
    "pos": "n",
    "pronunciation": "एविडन्स",
    "meaningHi": "प्रमाण, सबूत",
    "meaningEn": "proof",
    "examples": []
  },
  {
    "id": 589,
    "word": "expression",
    "pos": "n",
    "pronunciation": "इक्स्ेशन",
    "meaningHi": "विचारों या भावनाओं की अभिव्यक्ति",
    "meaningEn": "a look on the face; a phrase",
    "examples": [
      {
        "en": "Language is not the only medium of expression of emotions",
        "hi": "भावनाएं व्यक्त करने का एकमात्र माध्यम भाषा नहीं है।"
      }
    ]
  },
  {
    "id": 590,
    "word": "final",
    "pos": "adj / n",
    "pronunciation": "फ़ाइनल",
    "meaningHi": "अंतिम, निर्णायक | अंतिम खेल",
    "meaningEn": "last",
    "examples": [
      {
        "en": "final exam results",
        "hi": "अंतिम परीक्षा के परिणाम"
      },
      {
        "en": "India entered the world cup final",
        "hi": "भारत विश्वकप फाइनल में पहुँच गया।"
      }
    ]
  },
  {
    "id": 591,
    "word": "finish",
    "pos": "v",
    "pronunciation": "फ़िनिश",
    "meaningHi": "समाप्त करना",
    "meaningEn": "to end",
    "examples": [
      {
        "en": "Please finish your food",
        "hi": "कृपया अपना खाना समाप्त करो।"
      }
    ]
  },
  {
    "id": 592,
    "word": "floor",
    "pos": "n",
    "pronunciation": "फ़लोर",
    "meaningHi": "फ़र्श",
    "meaningEn": "the bottom surface of a room",
    "examples": []
  },
  {
    "id": 593,
    "word": "foreign",
    "pos": "adj",
    "pronunciation": "फ़ॉरन",
    "meaningHi": "परदेशी, विदेशी, बाहरी",
    "meaningEn": "of another country; unfamiliar",
    "examples": [
      {
        "en": "foreign goods",
        "hi": "विदेशी वस्ुएं"
      }
    ]
  },
  {
    "id": 594,
    "word": "formal",
    "pos": "adj",
    "pronunciation": "फ़ोमल",
    "meaningHi": "औपचारिक फ़ोचनट भाग्यशाली",
    "meaningEn": "following rules; official",
    "examples": [
      {
        "en": "a formal dress",
        "hi": "एक औपचारिक पोशाक"
      },
      {
        "en": "I am fortunate to have a sister like you",
        "hi": "मैं भाग्यशाली हँ कि तुम-जैसी बहन मेरे पास है।"
      }
    ]
  },
  {
    "id": 595,
    "word": "fruit",
    "pos": "n",
    "pronunciation": "फ़्रूट",
    "meaningHi": "फल",
    "meaningEn": "the product of a plant; a result",
    "examples": []
  },
  {
    "id": 596,
    "word": "glass",
    "pos": "n",
    "pronunciation": "ग्ास",
    "meaningHi": "काँच, शीशा 2 पानी पीने का गिलास ग्ोबल वोर्मिंग वैश्विक ऊष्ीकरण कुछ गैसों में वृद्धि के कारण पृथ्ी के वायुमंडल की गरमी में वृद्धि",
    "meaningEn": "a transparent material; a drinking vessel",
    "examples": []
  },
  {
    "id": 597,
    "word": "height",
    "pos": "n",
    "pronunciation": "हाइट",
    "meaningHi": "ऊँचाई, लंबाई",
    "meaningEn": "how tall something is",
    "examples": [
      {
        "en": "What is your height?",
        "hi": "तुम्ारी लंबाई क्ा है?"
      }
    ]
  },
  {
    "id": 598,
    "word": "hospital",
    "pos": "n",
    "pronunciation": "हॉस्पिट्ल",
    "meaningHi": "अस्पताल",
    "meaningEn": "a place for treating sick people",
    "examples": [
      {
        "en": "a private hospital",
        "hi": "एक गैरसर- कारी अस्पताल"
      }
    ]
  },
  {
    "id": 599,
    "word": "image",
    "pos": "n",
    "pronunciation": "इमिज",
    "meaningHi": "चित्र, छवि 2 मानसिक चित्र, छवि, किसी व्यक्ति या संगठन के विषय में लोगों के दिमाग में सामान्य धारणा, चित्र या कल्पना",
    "meaningEn": "a picture",
    "examples": [
      {
        "en": "your image in the mirror",
        "hi": "आईने में तुम्ारी छवि"
      },
      {
        "en": "This officer does not have a good image",
        "hi": "इस अधिकारी की छवि अच्छी नहीं है।"
      }
    ]
  },
  {
    "id": 600,
    "word": "imagine",
    "pos": "v",
    "pronunciation": "इमैजिन",
    "meaningHi": "कल्पना करना",
    "meaningEn": "to picture",
    "examples": [
      {
        "en": "Imagine that you are floating in midair",
        "hi": "कल्पना करो कि तुम बीच हवा में तैर रहे हो।"
      }
    ]
  },
  {
    "id": 601,
    "word": "indeed",
    "pos": "adv",
    "pronunciation": "इन्डीड",
    "meaningHi": "सचमुच, निश्चित रूप से",
    "meaningEn": "truly",
    "examples": [
      {
        "en": "indeed a good fellow",
        "hi": "निश्चय ही एक अच्ा इंसान"
      }
    ]
  },
  {
    "id": 602,
    "word": "job",
    "pos": "n",
    "pronunciation": "जॉब",
    "meaningHi": "नौकरी, काम",
    "meaningEn": "a paid position of work",
    "examples": [
      {
        "en": "I have got a job",
        "hi": "मुझे एक नौकरी मिल गई है।"
      }
    ]
  },
  {
    "id": 603,
    "word": "journey",
    "pos": "n",
    "pronunciation": "जर्नीी",
    "meaningHi": "यात्ा, सफर",
    "meaningEn": "a trip; travelling from one place to another",
    "examples": [
      {
        "en": "a tiring journey",
        "hi": "एक थकाने वाली यात्रा"
      }
    ]
  },
  {
    "id": 604,
    "word": "limit",
    "pos": "n / v",
    "pronunciation": "लिमिट",
    "meaningHi": "सीमा | सीमित करना अंंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ",
    "meaningEn": "a boundary; to restrict",
    "examples": [
      {
        "en": "It is good to remain within limits",
        "hi": "अपनी सीमाओं में रहना अच्ा होता है।"
      },
      {
        "en": "let us limit our needs",
        "hi": "हम अपनी जरूरतों को सीमित करें।"
      }
    ]
  },
  {
    "id": 605,
    "word": "meeting",
    "pos": "n",
    "pronunciation": "मीटिंग",
    "meaningHi": "सभा, गोष्ी 2 भेंट",
    "meaningEn": "gathering",
    "examples": [
      {
        "en": "I have to go to a meeting",
        "hi": "मुझे एक सभा में जाना है।"
      },
      {
        "en": "My meeting with the District Magistrate was useful",
        "hi": "जिला मैजिस्ट्रेट से मेरी मुलाकात उपयोगी रही।"
      }
    ]
  },
  {
    "id": 606,
    "word": "memory",
    "pos": "n",
    "pronunciation": "मेमरि",
    "meaningHi": "स्मृति, याददाश्त",
    "meaningEn": "recall ability",
    "examples": [
      {
        "en": "Omega 3 acid, which is found in flex seeds, strengthens mem- ory",
        "hi": "ओमेगा3 एसिड, जो तीसी में पाया जाता है, याददाश्त को मजबूूत बनाता है।"
      }
    ]
  },
  {
    "id": 607,
    "word": "message",
    "pos": "n",
    "pronunciation": "मेसिज",
    "meaningHi": "संदेश",
    "meaningEn": "communication",
    "examples": [
      {
        "en": "I have received his message",
        "hi": "उनका संदेश मुझे मिल गया है।"
      }
    ]
  },
  {
    "id": 608,
    "word": "method",
    "pos": "n",
    "pronunciation": "मेथड",
    "meaningHi": "पद्धति, तरीका",
    "meaningEn": "a way",
    "examples": [
      {
        "en": "Proper cooking methods can improve nutrition in our meals",
        "hi": "खाना पकाने की सही पद्धतियाँ हमारे भोजन में पोषक तत्त्वों की वृद्धि कर सकती हैं।"
      }
    ]
  },
  {
    "id": 609,
    "word": "middle",
    "pos": "n",
    "pronunciation": "मिड्ल",
    "meaningHi": "मध्य, बीच",
    "meaningEn": "centre",
    "examples": [
      {
        "en": "He sat in the middle row",
        "hi": "वह बीच की पंक्ति में बैठा।"
      }
    ]
  },
  {
    "id": 610,
    "word": "moment",
    "pos": "n",
    "pronunciation": "मोमन्ट",
    "meaningHi": "क्षण, पल मोनकि राजतंत्र जहाँ का शासन एक राजा के हाथों में हो",
    "meaningEn": "brief time",
    "examples": [
      {
        "en": "Live every moment happily",
        "hi": "हर पल को खुशी के साथ जिओ।"
      },
      {
        "en": "Monarchy is an old and outdated system",
        "hi": "राजतंत्र एक पुरानी और कालविरुद्ध व्यवस्था है।"
      }
    ]
  },
  {
    "id": 611,
    "word": "noise",
    "pos": "n",
    "pronunciation": "नोइज़",
    "meaningHi": "शोर, कोलाहल",
    "meaningEn": "unwanted sound",
    "examples": [
      {
        "en": "Noise is the opposite of music",
        "hi": "शोर संगीत का उलटा है।"
      }
    ]
  },
  {
    "id": 612,
    "word": "normal",
    "pos": "n adj",
    "pronunciation": "नोमल",
    "meaningHi": "साधारण, सामान्य",
    "meaningEn": "usual",
    "examples": [
      {
        "en": "The situation has become normal",
        "hi": "स्थिति सामान्य हो गई है।"
      }
    ]
  },
  {
    "id": 613,
    "word": "object",
    "pos": "n / v",
    "pronunciation": "अॉब्ेक्ट",
    "meaningHi": "पदार्थ, वस्तु | आपत्ति करना, एतराज करना अब्जेक्शन आपत्ति, एतराज",
    "meaningEn": "thing; to oppose",
    "examples": [
      {
        "en": "The object in the sky looked like a balloon",
        "hi": "आसमान में जो वस्ु थी वह एक बलूून की तरह दिख रही थी।"
      },
      {
        "en": "She objected to the use of foul language",
        "hi": "अभद्र भाषा के प्रयोग पर उसने आपत्ति की।"
      }
    ]
  },
  {
    "id": 614,
    "word": "ocean",
    "pos": "n",
    "pronunciation": "ओशन",
    "meaningHi": "महासागर",
    "meaningEn": "vast sea",
    "examples": [
      {
        "en": "The Indian Ocean",
        "hi": "हिंद महासागर"
      }
    ]
  },
  {
    "id": 615,
    "word": "office",
    "pos": "n",
    "pronunciation": "अॉफ़िस",
    "meaningHi": "कार्यालय अफ़िश्ल सरकारी, शासकीय 134 135 अंंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ",
    "meaningEn": "workplace",
    "examples": []
  },
  {
    "id": 616,
    "word": "oil",
    "pos": "n",
    "pronunciation": "अोइल",
    "meaningHi": "तेल ok ओके ठीक है!",
    "meaningEn": "liquid fuel",
    "examples": [
      {
        "en": "She is okay now",
        "hi": "वह अब ठीक है।"
      }
    ]
  },
  {
    "id": 617,
    "word": "partner",
    "pos": "n",
    "pronunciation": "पाट्नर",
    "meaningHi": "साथी, सहयोगी",
    "meaningEn": "one who shares",
    "examples": [
      {
        "en": "business partner",
        "hi": "व्ापार का साथी"
      }
    ]
  },
  {
    "id": 618,
    "word": "party",
    "pos": "n",
    "pronunciation": "पाटि",
    "meaningHi": "उत्सव 2 राजनीतिक पार्टीी या दल 3 मंडली 1",
    "meaningEn": "gathering",
    "examples": [
      {
        "en": "A birthday party",
        "hi": "जन्मदिन का उत्सव।"
      },
      {
        "en": "China does not allow any political party other than the communist party",
        "hi": "चीन कम्युनिस्ट पार्टीी के अलावा किसी अन्य राजनीतिक दल की अनुमति नहीं देता।"
      }
    ]
  },
  {
    "id": 619,
    "word": "pattern",
    "pos": "n",
    "pronunciation": "पैटर्न",
    "meaningHi": "नमूना, ढाँचा, डिज़ाइन अंंगरेज़ी शब्द उच्ारण हिंदी में अर्थ",
    "meaningEn": "repeated design",
    "examples": [
      {
        "en": "The weather pattern is changing",
        "hi": "मौसम का ढाँचा बदल रहा है।"
      }
    ]
  },
  {
    "id": 620,
    "word": "period",
    "pos": "n",
    "pronunciation": "पिअरियड",
    "meaningHi": "अवधि, काल",
    "meaningEn": "time span",
    "examples": [
      {
        "en": "the ancient period",
        "hi": "प्राचीन काल"
      }
    ]
  },
  {
    "id": 621,
    "word": "personal",
    "pos": "adj",
    "pronunciation": "पर्सनल",
    "meaningHi": "व्यक्तिगत",
    "meaningEn": "private",
    "examples": [
      {
        "en": "my personal views",
        "hi": "मेरे व्यक्तिगत विचार"
      }
    ]
  },
  {
    "id": 622,
    "word": "picture",
    "pos": "n",
    "pronunciation": "पिक्चर",
    "meaningHi": "तसवीर",
    "meaningEn": "image",
    "examples": []
  },
  {
    "id": 623,
    "word": "pocket",
    "pos": "n",
    "pronunciation": "पॉकिट",
    "meaningHi": "जेब",
    "meaningEn": "bag in clothing",
    "examples": []
  },
  {
    "id": 624,
    "word": "police",
    "pos": "n",
    "pronunciation": "पुलीस",
    "meaningHi": "पुलिस",
    "meaningEn": "law enforcement",
    "examples": []
  },
  {
    "id": 625,
    "word": "popular",
    "pos": "adj",
    "pronunciation": "पॉप्ुलर",
    "meaningHi": "लोकप्रिय",
    "meaningEn": "widely liked",
    "examples": [
      {
        "en": "a popular actor",
        "hi": "एक लोकप्रिय अभिनेता"
      }
    ]
  },
  {
    "id": 626,
    "word": "practise",
    "pos": "v",
    "pronunciation": "प्ैक्टिस",
    "meaningHi": "अभ्यास करना",
    "meaningEn": "to do regularly; to train",
    "examples": [
      {
        "en": "She is practising yoga these days",
        "hi": "वह आजकल योग का अभ्ास कर रही है।"
      }
    ]
  },
  {
    "id": 627,
    "word": "proper",
    "pos": "adj",
    "pronunciation": "प्ॉपर",
    "meaningHi": "उचित, उपयुक्त",
    "meaningEn": "correct",
    "examples": [
      {
        "en": "in proper uniform",
        "hi": "उचित वर्दीी में"
      }
    ]
  },
  {
    "id": 628,
    "word": "quality",
    "pos": "n",
    "pronunciation": "क्वॉलटि",
    "meaningHi": "गुण, गुणवत्ता, विशेषता",
    "meaningEn": "standard",
    "examples": [
      {
        "en": "Water has one quality, fire has another",
        "hi": "पानी में एक गुण होता हैं, आग में अन्य।"
      }
    ]
  },
  {
    "id": 629,
    "word": "range",
    "pos": "n",
    "pronunciation": "रेनज",
    "meaningHi": "एक ही चीज के कई प्रकार, या बहुत सारी अलग- -अलग चीजों का एक विस्तृस्तृत रेंज",
    "meaningEn": "extent",
    "examples": [
      {
        "en": "This shop has a wide range of dresses",
        "hi": "यह दूकान काफी भिन्न-भिन्न प्रकार की पोशाकें रखता है।"
      }
    ]
  },
  {
    "id": 630,
    "word": "relation",
    "pos": "n",
    "pronunciation": "रिलेशन",
    "meaningHi": "संबंध 2 संबंधी, रिश्तेश्तेदार",
    "meaningEn": "connection",
    "examples": [
      {
        "en": "My relations with him have soured",
        "hi": "उसके साथ मेरे संबंध खट्े हो गए हैं।"
      },
      {
        "en": "He is a close relation of mine",
        "hi": "वह मेरा एक नजदीकी रिश्तेश्तेदार है।"
      }
    ]
  },
  {
    "id": 631,
    "word": "remove",
    "pos": "v",
    "pronunciation": "रिमूव",
    "meaningHi": "हटाना",
    "meaningEn": "to take away",
    "examples": [
      {
        "en": "Would you please remove that chair?",
        "hi": "क्ा आप कृपया उस कुर्सीी को हटा देंगे?"
      }
    ]
  },
  {
    "id": 632,
    "word": "repeat",
    "pos": "v",
    "pronunciation": "रिपीट",
    "meaningHi": "दोहराना, दोबारा कहना या लिखना",
    "meaningEn": "to redo",
    "examples": [
      {
        "en": "Could you please repeat what you said?",
        "hi": "क्ा आपने जो कहा उसे कृपया दोहरा सकते हैं?"
      }
    ]
  },
  {
    "id": 633,
    "word": "replace",
    "pos": "v",
    "pronunciation": "रिप्ेस",
    "meaningHi": "किसी व्यक्ति या वस्तु का स्ान लेना 2 किसी व्यक्ति या वस्तु का स्ान किसी और को देना",
    "meaningEn": "to substitute",
    "examples": [
      {
        "en": "I have replaced my old chair with a new one",
        "hi": "मैंने अपनी पुरानी कुर्सीी नई कुर्सीी से बदल दी है।"
      },
      {
        "en": "Virat has replaced Dhoni as captain",
        "hi": "कैप्ेन के रूप में धोनी का स्थान विराट ने ले लिया है।"
      }
    ]
  },
  {
    "id": 634,
    "word": "sea",
    "pos": "n",
    "pronunciation": "सी",
    "meaningHi": "समुद्र",
    "meaningEn": "salt water body",
    "examples": []
  },
  {
    "id": 635,
    "word": "search",
    "pos": "v / n",
    "pronunciation": "सर्च",
    "meaningHi": "तलाशना, खोजना | किसी की तलाश सर्च एन्जिन इन्टरनेट पर खोज करने में मदद करने वाले प्रोग्ाम, जैसे गूगल, याहू आदि",
    "meaningEn": "to look for",
    "examples": [
      {
        "en": "Are you searching for your lost pen?",
        "hi": "क्ा तुम अपनी खोई कलम की तलाश कर रहे हो?"
      },
      {
        "en": "Our search for the missing child has ended",
        "hi": "खोए हुए बच्चे की हमारी तलाश खत्म हो गई है।"
      }
    ]
  },
  {
    "id": 636,
    "word": "season",
    "pos": "n",
    "pronunciation": "सीज़न",
    "meaningHi": "मौसम, ऋतु अंंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ",
    "meaningEn": "time of year",
    "examples": [
      {
        "en": "There are several seasons in India",
        "hi": "भारत में कई मौसम होते हैं।"
      }
    ]
  },
  {
    "id": 637,
    "word": "secret",
    "pos": "n / adj",
    "pronunciation": "सीक्रेट",
    "meaningHi": "गोपनीय बात, रहस्य | गोपनीय",
    "meaningEn": "hidden",
    "examples": [
      {
        "en": "I know some of his secrets",
        "hi": "मैं उसके कुछ रहस्य जानता हँ।"
      },
      {
        "en": "There was a secret meeting between the two",
        "hi": "दोनों के बीच एक गोपनीय मुलाकात हुई।"
      }
    ]
  },
  {
    "id": 638,
    "word": "section",
    "pos": "n",
    "pronunciation": "सेक्शन",
    "meaningHi": "खंड, भाग",
    "meaningEn": "part",
    "examples": [
      {
        "en": "He is in section B of class VII",
        "hi": "वह कक्षा आठ के खंड B में है।"
      }
    ]
  },
  {
    "id": 639,
    "word": "serious",
    "pos": "adj",
    "pronunciation": "सिअरिअस",
    "meaningHi": "गंभीर",
    "meaningEn": "important",
    "examples": [
      {
        "en": "a serious matter",
        "hi": "एक गंभीर मामला"
      }
    ]
  },
  {
    "id": 640,
    "word": "silver",
    "pos": "n",
    "pronunciation": "सिल्वर",
    "meaningHi": "चाँदी",
    "meaningEn": "precious metal",
    "examples": []
  },
  {
    "id": 641,
    "word": "skill",
    "pos": "n",
    "pronunciation": "स््किल",
    "meaningHi": "निपुणता, हुनर, कौशल",
    "meaningEn": "ability",
    "examples": [
      {
        "en": "cooking skills",
        "hi": "खाना बनाने का हुनर"
      }
    ]
  },
  {
    "id": 642,
    "word": "space",
    "pos": "n",
    "pronunciation": "स्पेस",
    "meaningHi": "अंतरिक्ष 2 खाली स्ान",
    "meaningEn": "area",
    "examples": [
      {
        "en": "spacecraft",
        "hi": "अंतरिक्ष यान"
      },
      {
        "en": "This house has little space",
        "hi": "इस घर में कम स्थान है।"
      }
    ]
  },
  {
    "id": 643,
    "word": "speed",
    "pos": "n",
    "pronunciation": "स्पीड",
    "meaningHi": "रफ्ार",
    "meaningEn": "rate",
    "examples": [
      {
        "en": "Speed thrills, but it also kills",
        "hi": "गति रोमांचित करती है, मगर यह मार भी देती है।"
      }
    ]
  },
  {
    "id": 644,
    "word": "sport",
    "pos": "n",
    "pronunciation": "सपोट",
    "meaningHi": "खेलकूद",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 645,
    "word": "square",
    "pos": "adj adv / n",
    "pronunciation": "स्केअर",
    "meaningHi": "वर्गाकार | 1 वर्ग वह आकृति जिसके चारों कोण और चारों रेखाएं बराबर हों 2 चौक",
    "meaningEn": "four-sided",
    "examples": [
      {
        "en": "a square table",
        "hi": "एक वर्गाकार टेबुल"
      },
      {
        "en": "Trafalgar square of London",
        "hi": "लंदन का ट्रफैल्गर चौक"
      }
    ]
  },
  {
    "id": 646,
    "word": "stage",
    "pos": "n",
    "pronunciation": "स्ेज",
    "meaningHi": "मंच",
    "meaningEn": "phase",
    "examples": [
      {
        "en": "dance stage",
        "hi": "नृत्य का मंच"
      }
    ]
  },
  {
    "id": 647,
    "word": "standard",
    "pos": "n / adj",
    "pronunciation": "स्ैन्डड",
    "meaningHi": "गुणवत्ता का स्तर 2 कक्षा, क्ास 1",
    "meaningEn": "level",
    "examples": [
      {
        "en": "standard products",
        "hi": "उत्तम उत्ाद"
      },
      {
        "en": "The standard of education in rural areas is not good",
        "hi": "ग्रामीण क्षेत्रों में शिक्षाक्षा की गुणवत्ताता का स्तर अच्ा नहीं है।"
      }
    ]
  },
  {
    "id": 648,
    "word": "stone",
    "pos": "n",
    "pronunciation": "स्ोन",
    "meaningHi": "पत्थर",
    "meaningEn": "rock",
    "examples": []
  },
  {
    "id": 649,
    "word": "store",
    "pos": "n / v",
    "pronunciation": "स्ोर",
    "meaningHi": "सामान का भंडार | जमा करना",
    "meaningEn": "shop",
    "examples": [
      {
        "en": "We have stored enough food grains",
        "hi": "हम लोगों ने काफी अन्न जमा कर लिया है।"
      }
    ]
  },
  {
    "id": 650,
    "word": "surface",
    "pos": "n",
    "pronunciation": "सर्फेेस",
    "meaningHi": "ऊपर की सतह",
    "meaningEn": "outer layer",
    "examples": [
      {
        "en": "The surface of earth is cooler than its inside",
        "hi": "धरती की सतह इसके अंदर के भाग से अधिक ठंडी है।"
      }
    ]
  },
  {
    "id": 651,
    "word": "total",
    "pos": "n adj",
    "pronunciation": "टोटल",
    "meaningHi": "पूर्ण, समग्र 2 कुल संख्ा",
    "meaningEn": "complete",
    "examples": [
      {
        "en": "total revolution",
        "hi": "संपूर्ण क्रांति"
      },
      {
        "en": "The total number of students?",
        "hi": "विद्ार्थियों की कुल संख्या?"
      }
    ]
  },
  {
    "id": 652,
    "word": "travel",
    "pos": "v",
    "pronunciation": "ट्ैवल",
    "meaningHi": "यात्ा या सफ़र करना",
    "meaningEn": "to journey",
    "examples": [
      {
        "en": "I travelled to Vietnam the last week",
        "hi": "मैंने पिछले हफ्े वियतनाम की यात्रा की।"
      }
    ]
  },
  {
    "id": 653,
    "word": "village",
    "pos": "n",
    "pronunciation": "विलिज",
    "meaningHi": "गाँव, ग्ाम",
    "meaningEn": "small community",
    "examples": []
  },
  {
    "id": 654,
    "word": "visit",
    "pos": "v",
    "pronunciation": "विज़िट",
    "meaningHi": "किसी स्ान पर जाना, किसी व्यक्ति से मिलने जाना",
    "meaningEn": "to go see",
    "examples": [
      {
        "en": "I have visited Ladakh",
        "hi": "मैं लद्ाख गया हँ।"
      }
    ]
  },
  {
    "id": 655,
    "word": "window",
    "pos": "n",
    "pronunciation": "विन्डो",
    "meaningHi": "खिड़की",
    "meaningEn": "wall opening",
    "examples": []
  },
  {
    "id": 656,
    "word": "active",
    "pos": "adj",
    "pronunciation": "ऐक्टिव",
    "meaningHi": "सक्रिय",
    "meaningEn": "engaged in activity; energetic",
    "examples": [
      {
        "en": "an active boy",
        "hi": "एक सक्रिय लड़का"
      }
    ]
  },
  {
    "id": 657,
    "word": "activity",
    "pos": "n",
    "pronunciation": "ऐक्टिवटी",
    "meaningHi": "गतिविधि",
    "meaningEn": "an action; something done",
    "examples": [
      {
        "en": "no activitiy for the last ten days",
        "hi": "पिछले दस दिनों से कोई गतिविधि नहीं"
      }
    ]
  },
  {
    "id": 658,
    "word": "actually",
    "pos": "adv",
    "pronunciation": "ऐक्ुअलि",
    "meaningHi": "वास्तव में",
    "meaningEn": "in fact; really",
    "examples": [
      {
        "en": "actually dead?",
        "hi": "सचमुच मरा हुआ?"
      }
    ]
  },
  {
    "id": 659,
    "word": "advantage",
    "pos": "n",
    "pronunciation": "अड्वान्टिज",
    "meaningHi": "सुविधा, फायदा",
    "meaningEn": "benefit",
    "examples": [
      {
        "en": "He has the advantage of a library in his neighbourhood",
        "hi": "उसके पास पड़ोस में एक पुस्तकालय होने का फायदा है।"
      }
    ]
  },
  {
    "id": 660,
    "word": "advise",
    "pos": "v",
    "pronunciation": "अड्वाइज़",
    "meaningHi": "सलाह देना",
    "meaningEn": "to give advice",
    "examples": [
      {
        "en": "I advised him to exercise daily",
        "hi": "मैंने उसे रोज व्ायाम करने की सलाह दी।"
      }
    ]
  },
  {
    "id": 661,
    "word": "affect",
    "pos": "v",
    "pronunciation": "अफ़ेक्ट",
    "meaningHi": "प्रभाव डालना",
    "meaningEn": "to have an effect on",
    "examples": [
      {
        "en": "Pollution affects health",
        "hi": "प्रदूषण स्ास्थ्य को प्रभावित करता है।"
      }
    ]
  },
  {
    "id": 662,
    "word": "announce",
    "pos": "v",
    "pronunciation": "अनाउंस",
    "meaningHi": "घोषणा करना",
    "meaningEn": "to declare",
    "examples": [
      {
        "en": "The results have been announced",
        "hi": "परिणामों की घोषणा हो गई है।"
      }
    ]
  },
  {
    "id": 663,
    "word": "another",
    "pos": "det",
    "pronunciation": "अनदर",
    "meaningHi": "दूसरा",
    "meaningEn": "one more; a different one",
    "examples": [
      {
        "en": "Please give me another pen",
        "hi": "कृपया मुझे दूसरी कलम दो।"
      }
    ]
  },
  {
    "id": 664,
    "word": "anyway",
    "pos": "adv",
    "pronunciation": "एनिवे",
    "meaningHi": "किसी-न-किसी प्रकार से एनिवेअ कहीं भी अपाट अलग",
    "meaningEn": "regardless",
    "examples": [
      {
        "en": "You won't find such stuff any- where",
        "hi": "ऐसी चीज तुम कहीं भी नहीं पाओगे।"
      },
      {
        "en": "They live apart - वे अलग रहते हैं। Apart from this, there is another reason",
        "hi": "इसके अलावा एक और कारण है।"
      }
    ]
  },
  {
    "id": 665,
    "word": "appeal",
    "pos": "n / v",
    "pronunciation": "अपील",
    "meaningHi": "निवेदन, अपील | निवेदन करना, अपील करना",
    "meaningEn": "request",
    "examples": [
      {
        "en": "The PM has appealed to everybody to maintain peace",
        "hi": "प्रधानमंत्री ने सभी से शांति बनाए रखने की अपील की है।"
      }
    ]
  },
  {
    "id": 666,
    "word": "apply",
    "pos": "v",
    "pronunciation": "अप्ाइ",
    "meaningHi": "आवेदन देना 2 लागू करना, व्यवहार में लाना",
    "meaningEn": "to use",
    "examples": [
      {
        "en": "He applied for a job",
        "hi": "उसने एक नौकरी के लिए आवेदन दिया।"
      },
      {
        "en": "Let's apply our mind",
        "hi": "चलो, हम अपना दिमाग लगाएँ।"
      }
    ]
  },
  {
    "id": 667,
    "word": "approval",
    "pos": "n",
    "pronunciation": "अप्रूवल",
    "meaningHi": "अनुमोदन, स्ीकृति of v अप्रूव 1 अनुमोदित करना 2 समर्थन करना 16 17 अंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ 1",
    "meaningEn": "permission",
    "examples": [
      {
        "en": "Approval is awaited",
        "hi": "अनुमोदन का इंतजार है।"
      },
      {
        "en": "My leave has been approved",
        "hi": "मेरी छुट्ी अनुमोदित हो गई है।"
      }
    ]
  },
  {
    "id": 668,
    "word": "argue",
    "pos": "v",
    "pronunciation": "आग्यु",
    "meaningHi": "तर्क-वितर्क करना, बहस करना",
    "meaningEn": "to debate",
    "examples": [
      {
        "en": "He argued well in the court",
        "hi": "उसने न्ायालय में अच्छी बहस की।"
      }
    ]
  },
  {
    "id": 669,
    "word": "argument",
    "pos": "n",
    "pronunciation": "आग्युमंट",
    "meaningHi": "तर्क, दलील, बहस",
    "meaningEn": "debate",
    "examples": [
      {
        "en": "There are many arguments in favour of God's existence",
        "hi": "ईश्वर के अस्तित्व के पक्ष में कई तर्क हैं।"
      }
    ]
  },
  {
    "id": 670,
    "word": "arrange",
    "pos": "v",
    "pronunciation": "अरेंज",
    "meaningHi": "व्यवस्थित करना, चीजों को उचित जगह पर लगाना 2 इंतजाम करना 1",
    "meaningEn": "to organize",
    "examples": [
      {
        "en": "I am arranging my books",
        "hi": "मैं अपनी किताबें व्यवस्थित कर रहा हँ।"
      },
      {
        "en": "I will arrange for a good dinner",
        "hi": "मैं एक अच्े रात्रिभोज का इंतजाम करूँगा।"
      }
    ]
  },
  {
    "id": 671,
    "word": "arrival",
    "pos": "n",
    "pronunciation": "अराइवल",
    "meaningHi": "आगमन",
    "meaningEn": "coming",
    "examples": [
      {
        "en": "The train's arrival time is 6 p.m.",
        "hi": "ट्ेन के पहुँचने का समय है शाम 6 बजे।"
      }
    ]
  },
  {
    "id": 672,
    "word": "arrive",
    "pos": "v",
    "pronunciation": "अराइव",
    "meaningHi": "पहुँचना",
    "meaningEn": "to reach",
    "examples": [
      {
        "en": "The train has arrived",
        "hi": "ट्ेन पहुँच गई है।"
      }
    ]
  },
  {
    "id": 673,
    "word": "artist",
    "pos": "n",
    "pronunciation": "आटिस्ट",
    "meaningHi": "कलाकार आर्य समाज स्ामी दयानंद द्ारा स्थापित, वेदों पर आधारित हिंदू-धर्म का एक संप्रदाय as ऐज़, अज़ 1 जैसा 2 के जैसा, के समान 3 चूँकि, कोंकि 4 के रूप",
    "meaningEn": "creator",
    "examples": [
      {
        "en": "Raphael and Leonardo da Vinci were all time great artists",
        "hi": "रैफ़ेअल और लिअनारदो दविन्ी महान सार्वकालिक कलाकार थे।"
      },
      {
        "en": "As you sow, so you reap",
        "hi": "जैसा बोओगे, वैसा काटोगे।"
      }
    ]
  },
  {
    "id": 674,
    "word": "attempt",
    "pos": "n / v",
    "pronunciation": "अटेम्ट",
    "meaningHi": "प्रयत्न, प्रयास, कोशिश | प्रयास करना, कोशिश करना",
    "meaningEn": "try",
    "examples": [
      {
        "en": "a good attempt",
        "hi": "एक अच्ा प्रयास"
      },
      {
        "en": "He attempted to kill me",
        "hi": "उसने मुझे जान से मारने की कोशिश की।"
      }
    ]
  },
  {
    "id": 675,
    "word": "attract",
    "pos": "v",
    "pronunciation": "अट्ैक्ट",
    "meaningHi": "आकर्षित करना अट्ैक्टिव आकर्षक",
    "meaningEn": "to draw",
    "examples": [
      {
        "en": "Music attracts me",
        "hi": "संगीत मुझे आकर्षित करता है।"
      },
      {
        "en": "an attractive painting",
        "hi": "एक आकर्षक रंगचित्र।"
      }
    ]
  },
  {
    "id": 676,
    "word": "audience",
    "pos": "n",
    "pronunciation": "ओडियंस",
    "meaningHi": "सुनने वाले, श्ोता",
    "meaningEn": "spectators",
    "examples": [
      {
        "en": "The Internet provides a worldwide audience",
        "hi": "इंटरनेट विश्व्ापी श्ोता प्रदान करता है।"
      }
    ]
  },
  {
    "id": 677,
    "word": "authority",
    "pos": "n",
    "pronunciation": "अथोरटि",
    "meaningHi": "अधिकार 2 अधिकार रखने वाली संस्ा या व्यक्ति 1",
    "meaningEn": "power",
    "examples": [
      {
        "en": "The police have no authority to hang a criminal",
        "hi": "पुलिस के पास अपराधी को फाँसी देने का अधिकार नहीं है।"
      },
      {
        "en": "Delhi Development Authority",
        "hi": "दिल्ी के विकास के लिए जिम्ेदार संस्था।"
      }
    ]
  },
  {
    "id": 678,
    "word": "avoid",
    "pos": "v",
    "pronunciation": "अवोइड",
    "meaningHi": "से बचना, दरकिनार करना",
    "meaningEn": "to evade",
    "examples": [
      {
        "en": "Avoid cold water",
        "hi": "ठंढे पानी से बचो।"
      }
    ]
  },
  {
    "id": 679,
    "word": "bad",
    "pos": "adj",
    "pronunciation": "बैड",
    "meaningHi": "बुरा, खराब",
    "meaningEn": "of poor quality; not good",
    "examples": [
      {
        "en": "bad body odour",
        "hi": "शरीर की बुरी दुर्गंध"
      }
    ]
  },
  {
    "id": 680,
    "word": "badly",
    "pos": "adv",
    "pronunciation": "बैड्लि",
    "meaningHi": "बुरी तरह, गंभीर रूप से",
    "meaningEn": "poorly",
    "examples": [
      {
        "en": "badly injured",
        "hi": "बुरी तरह घायल"
      }
    ]
  },
  {
    "id": 681,
    "word": "bag",
    "pos": "n / v",
    "pronunciation": "बैग",
    "meaningHi": "थैला | हासिल करना",
    "meaningEn": "container",
    "examples": [
      {
        "en": "Discard polythene bags",
        "hi": "पोलीथिन बैगों को त्ाग दो।"
      },
      {
        "en": "India bagged three gold medals",
        "hi": "भारत ने तीन गोल्ड मेडल हासिल किए ।"
      }
    ]
  },
  {
    "id": 682,
    "word": "bar",
    "pos": "n",
    "pronunciation": "बार",
    "meaningHi": "शराबखाना 2 वकीलों का समूह 3 रोक 4 टिकिया 5 डंडा",
    "meaningEn": "rod; counter",
    "examples": [
      {
        "en": "bar on gatherings",
        "hi": "इकठ्े होने पर रोक"
      },
      {
        "en": "bar of soap",
        "hi": "साबुन की टिकिया"
      }
    ]
  },
  {
    "id": 683,
    "word": "basic",
    "pos": "adj",
    "pronunciation": "बेइसिक",
    "meaningHi": "बेसिक, बुनियादी, आधारभूत",
    "meaningEn": "fundamental",
    "examples": [
      {
        "en": "We should all have the basic knowledge of civilised behaviour",
        "hi": "हम सभी को सभ्य आचरण का आधारभूूत ज्ान होना चाहिए।"
      }
    ]
  },
  {
    "id": 684,
    "word": "basically",
    "pos": "adv",
    "pronunciation": "बेसिक्ी",
    "meaningHi": "मूल रूप से",
    "meaningEn": "essentially",
    "examples": [
      {
        "en": "Man is basically good",
        "hi": "मनुष्य मूूल रूप से अच्ा हुआ करता है।"
      }
    ]
  },
  {
    "id": 685,
    "word": "basis",
    "pos": "n",
    "pronunciation": "बेसिस",
    "meaningHi": "आधार, नींव",
    "meaningEn": "foundation",
    "examples": [
      {
        "en": "What is the basis of your allegation?",
        "hi": "तुम्ारे आरोप का आधार क्ा है?"
      }
    ]
  },
  {
    "id": 686,
    "word": "bathe",
    "pos": "v",
    "pronunciation": "बेद",
    "meaningHi": "नहाना",
    "meaningEn": "to wash",
    "examples": [
      {
        "en": "Bathing in a river is enjoyable",
        "hi": "नदी में नहाना आनंददायक होता है।"
      }
    ]
  },
  {
    "id": 687,
    "word": "because",
    "pos": "conj",
    "pronunciation": "बिकॉज़",
    "meaningHi": "कोंकि",
    "meaningEn": "for the reason that",
    "examples": [
      {
        "en": "He came because he wanted some books",
        "hi": "वह आया क्योंोंकि वह कुछ किताबें चाहता था।"
      }
    ]
  },
  {
    "id": 688,
    "word": "beginning",
    "pos": "n",
    "pronunciation": "बिगिनिंग",
    "meaningHi": "आरंभ, शुरुआत",
    "meaningEn": "the start; the first part",
    "examples": [
      {
        "en": "a good beginning",
        "hi": "एक अच्छी शुरुआत"
      }
    ]
  },
  {
    "id": 689,
    "word": "beneath",
    "pos": "prep",
    "pronunciation": "बिनीथ",
    "meaningHi": "नीचे",
    "meaningEn": "under; below",
    "examples": [
      {
        "en": "The coin was found beneath the sofa",
        "hi": "सिक्ा सोफे के नीचे मिला।"
      }
    ]
  },
  {
    "id": 690,
    "word": "benefit",
    "pos": "n / v",
    "pronunciation": "बेनफ़िट",
    "meaningHi": "लाभ, फायदा | लाभ उठाना; लाभ प्रदान करना",
    "meaningEn": "an advantage; to gain from",
    "examples": [
      {
        "en": "There are immense benefits of a vegetarian diet",
        "hi": "शाकाहारी भोजन के बड़े फायदे हैं।"
      },
      {
        "en": "Who will benefit from this?",
        "hi": "इससे किसे लाभ होगा?"
      }
    ]
  },
  {
    "id": 691,
    "word": "beside",
    "pos": "prep",
    "pronunciation": "बिसाइड",
    "meaningHi": "पास, बगल में",
    "meaningEn": "next to; by the side of",
    "examples": [
      {
        "en": "She sat beside me",
        "hi": "वह मेरी बगल में बैठी।"
      }
    ]
  },
  {
    "id": 692,
    "word": "bet",
    "pos": "n / v",
    "pronunciation": "बेट",
    "meaningHi": "दाँव, बाजी | शर्त लगाना",
    "meaningEn": "to risk money on an outcome",
    "examples": [
      {
        "en": "Who lost the bet?",
        "hi": "बाजी कौन हारा?"
      },
      {
        "en": "I bet Virat will score a double century this time",
        "hi": "मैं बाजी लगाता हँ कि विराट इस बार एक दोहरा शतक बनाएगा।"
      }
    ]
  },
  {
    "id": 693,
    "word": "bit",
    "pos": "n",
    "pronunciation": "बिट",
    "meaningHi": "थोड़ा, हलका-सा",
    "meaningEn": "a small piece or amount",
    "examples": [
      {
        "en": "a bit salty in taste",
        "hi": "स्ाद में थोड़ा नमकीन"
      }
    ]
  },
  {
    "id": 694,
    "word": "block",
    "pos": "n / v",
    "pronunciation": "ब्ौक",
    "meaningHi": "भवनखंड 2 धातु या पत्थर आदि का बड़ा और भारी खंड | रोकना, बाधित करना",
    "meaningEn": "to prevent; a solid piece",
    "examples": [
      {
        "en": "Huge blocks of ice can be found in the Ganges where the river begins",
        "hi": "जहाँ गंगा नदी की शुरुआत होती है वहाँ बर्फ के विशाल खंड पाए जा सकते हैं।"
      },
      {
        "en": "Big dams block the natural flow of rivers",
        "hi": "बड़े डैम नदी के स्ाभाविक प्रवाह को बाधित कर देते हैं।"
      }
    ]
  },
  {
    "id": 695,
    "word": "bored",
    "pos": "adj",
    "pronunciation": "बोड",
    "meaningHi": "ऊबा हुआ",
    "meaningEn": "feeling weary from lack of interest",
    "examples": []
  },
  {
    "id": 696,
    "word": "boring",
    "pos": "adj",
    "pronunciation": "बोरिंग",
    "meaningHi": "उबाऊ : be",
    "meaningEn": "not interesting; dull",
    "examples": [
      {
        "en": "a boring film",
        "hi": "एक उबाऊ फिल्म"
      }
    ]
  },
  {
    "id": 697,
    "word": "borrow",
    "pos": "v",
    "pronunciation": "",
    "meaningHi": "बौरो, बौरउउधार लेना",
    "meaningEn": "to take temporarily",
    "examples": [
      {
        "en": "I borrowed money from my friend",
        "hi": "मैंने अपने मित्र से पैसे उधार लिए।"
      }
    ]
  },
  {
    "id": 698,
    "word": "bother",
    "pos": "v",
    "pronunciation": "बौदर",
    "meaningHi": "परेशान करना 28 29 अंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ",
    "meaningEn": "to annoy; to make an effort",
    "examples": [
      {
        "en": "He keeps bothering me",
        "hi": "वह मुझे परेशान करता रहता है।"
      }
    ]
  },
  {
    "id": 699,
    "word": "bottom",
    "pos": "n",
    "pronunciation": "बौटम",
    "meaningHi": "किसी चीज का तल या निचला हिस्ा; जल के नीचे की भूमि",
    "meaningEn": "the lowest part",
    "examples": [
      {
        "en": "The bottom of the well was visible",
        "hi": "कुआँ का तल दिखाई पड़ रहा था।"
      }
    ]
  },
  {
    "id": 700,
    "word": "bound",
    "pos": "adj",
    "pronunciation": "बाउंड",
    "meaningHi": "बाध्य होना 2 निश्चित रूप से होना 1",
    "meaningEn": "heading for; limited by",
    "examples": [
      {
        "en": "Bhishm Pitamah was bound by his promise",
        "hi": "भीष्म पितामह अपनी प्रतिज्ा से बँधे हुए थे।"
      },
      {
        "en": "One who works hard is bound to succeed",
        "hi": "वह जो कड़ी मेहनत करता है निश्चित रूप से सफल होता है।"
      }
    ]
  },
  {
    "id": 701,
    "word": "branch",
    "pos": "n",
    "pronunciation": "बांच",
    "meaningHi": "टहनी, शाखा",
    "meaningEn": "a division; a part of a tree",
    "examples": [
      {
        "en": "Ethics is a branch of philosophy",
        "hi": "नीतिशास्त्र दर्शनशास्त्र की एक शाखा है।"
      }
    ]
  },
  {
    "id": 702,
    "word": "breakfast",
    "pos": "n",
    "pronunciation": "ब्ेकफ़स्ट",
    "meaningHi": "सुबह का नाश्ता",
    "meaningEn": "morning meal",
    "examples": [
      {
        "en": "I had my breakfast just now",
        "hi": "मैंने अभी-अभी नाश्ता किया।"
      }
    ]
  },
  {
    "id": 703,
    "word": "bridge",
    "pos": "n",
    "pronunciation": "ब्रिज",
    "meaningHi": "सेतु, पुल",
    "meaningEn": "a structure crossing a gap",
    "examples": []
  },
  {
    "id": 704,
    "word": "brief",
    "pos": "adj",
    "pronunciation": "ब्ीफ़",
    "meaningHi": "संक्षिप्त; अल्पकालिक",
    "meaningEn": "short; lasting a short time",
    "examples": [
      {
        "en": "a brief meeting",
        "hi": "एक संक्षिप्त मुलाकात"
      }
    ]
  },
  {
    "id": 705,
    "word": "broad",
    "pos": "adj",
    "pronunciation": "ब्रॉड",
    "meaningHi": "चौड़ा 2 सामान्य, संक्षिप्त",
    "meaningEn": "wide",
    "examples": [
      {
        "en": "a broad description of the event",
        "hi": "धटना का एक सामान्य-संक्षिप या मोटामोटा वर्णन"
      }
    ]
  },
  {
    "id": 706,
    "word": "broken",
    "pos": "adj",
    "pronunciation": "ब्ोकन",
    "meaningHi": "टूटा हुआ",
    "meaningEn": "damaged; not whole",
    "examples": [
      {
        "en": "a broken glass",
        "hi": "एक टूूटा हुआ गिलास"
      }
    ]
  },
  {
    "id": 707,
    "word": "brush",
    "pos": "n / v",
    "pronunciation": "ब्रश",
    "meaningHi": "ब्रश, कूची | ब्रश से साफ करना",
    "meaningEn": "a tool with bristles",
    "examples": [
      {
        "en": "tooth brush - दाँत साफ करने का ब्रश; painting brush",
        "hi": "पेंटिंग करने का ब्रश"
      },
      {
        "en": "He definitely brushes his teeth before going to bed",
        "hi": "वह सोने के पहले जरूर ब्रश करता है।"
      }
    ]
  },
  {
    "id": 708,
    "word": "building",
    "pos": "n",
    "pronunciation": "बिल्ड्डंग",
    "meaningHi": "मकान,भवन",
    "meaningEn": "a structure with walls and roof",
    "examples": [
      {
        "en": "a big building",
        "hi": "एक बड़ा भवन"
      }
    ]
  },
  {
    "id": 709,
    "word": "burst",
    "pos": "v",
    "pronunciation": "बर्स्ट",
    "meaningHi": "एकाएक फूटना; एकाएक विस्फोटित कर देना",
    "meaningEn": "to break open suddenly",
    "examples": [
      {
        "en": "the balloon burst",
        "hi": "बैलूून फट गया।"
      }
    ]
  },
  {
    "id": 710,
    "word": "butter",
    "pos": "n",
    "pronunciation": "बटर",
    "meaningHi": "मक्खन",
    "meaningEn": "a dairy spread",
    "examples": []
  },
  {
    "id": 711,
    "word": "capital",
    "pos": "n / adj",
    "pronunciation": "कैपिटल",
    "meaningHi": "राजधानी 2 पूँजी धन | 1 बड़े रूप में लिखे गए {अक्षर} 2 सबसे बड़ा",
    "meaningEn": "chief city; wealth; uppercase letter",
    "examples": [
      {
        "en": "I have no capital to start a business",
        "hi": "मेरे पास व्ापार शुरू करने के लिए कोई पूूँजी नहीं है।"
      },
      {
        "en": "capital punishment",
        "hi": "मृत्ुदंड"
      }
    ]
  },
  {
    "id": 712,
    "word": "careful",
    "pos": "adj",
    "pronunciation": "केअफ़ल",
    "meaningHi": "सावधान, सतर्क",
    "meaningEn": "taking care; cautious",
    "examples": [
      {
        "en": "Be careful",
        "hi": "सतर्क रहो।"
      }
    ]
  },
  {
    "id": 713,
    "word": "century",
    "pos": "n",
    "pronunciation": "सेन्चरि",
    "meaningHi": "शताब्दी, सदी सौ वर्ष 2 {क्रिकेट में} शतक या सौ रन",
    "meaningEn": "100 years",
    "examples": [
      {
        "en": "The 21st century",
        "hi": "इक्ीसवीं शताब्ी"
      },
      {
        "en": "Virat again scored a century",
        "hi": "विराट ने फिर एक शतक बनाया।"
      }
    ]
  },
  {
    "id": 714,
    "word": "certainly",
    "pos": "adv",
    "pronunciation": "सट्न्लि",
    "meaningHi": "निश्चित रूप से, जरूर 34 35 अंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ",
    "meaningEn": "without doubt; definitely",
    "examples": [
      {
        "en": "I will certainly come",
        "hi": "मैं जरूर आऊँगा।"
      }
    ]
  },
  {
    "id": 715,
    "word": "charge",
    "pos": "n / v",
    "pronunciation": "चाज",
    "meaningHi": "मूल्य, शुल्क 2 आरोप 3 कार्यभार, जिम्ेदारी 4 विद्युद्युत की मात्ा 1 ? - होटल के इस कमरे का शुल्क क्ा है? 2 ? - उसके खिलाफ आरोप क्ा हैं? 3",
    "meaningEn": "to ask a price; to accuse",
    "examples": [
      {
        "en": "Every company needs a good chartered accountant for audit of its accounts",
        "hi": "हर कंपनी को लेखा-परीक्षण के लिए एक अच्े चार्टर्ड अकाउंटंट की जरूरत होती है।"
      },
      {
        "en": "He assumed charge of the Army Chief",
        "hi": "उनोंने सेनाप्रमुख का कार्यभार सँभाला।"
      }
    ]
  },
  {
    "id": 716,
    "word": "chase",
    "pos": "v",
    "pronunciation": "चेस",
    "meaningHi": "पीछा करना",
    "meaningEn": "to run after",
    "examples": [
      {
        "en": "The police chased the criminal - पुलिस ने अपराधी का पीछा किया; Great men chase their dreams",
        "hi": "महान लोग अपने सपनों के पीछे लग जाते हैं।"
      },
      {
        "en": "The police chased the criminal",
        "hi": "पुलिस ने अपराधी का पीछा किया; Great men chase their dreams - महान लोग अपने सपनों के पीछे लग जाते हैं।"
      }
    ]
  },
  {
    "id": 717,
    "word": "cheap",
    "pos": "adj",
    "pronunciation": "चीप",
    "meaningHi": "सस्ता, कम कीमत का",
    "meaningEn": "low-priced; inexpensive",
    "examples": []
  },
  {
    "id": 718,
    "word": "check",
    "pos": "n / v",
    "pronunciation": "चेक",
    "meaningHi": "जाँच, परीक्षण 2 रोकथाम | 1 जाँच करना 2 मालूम करना 3 रोकथाम करना",
    "meaningEn": "to examine; to verify",
    "examples": [
      {
        "en": "health check up",
        "hi": "स्ास्थ्य की जाँच"
      },
      {
        "en": "Is there no check on corruption?",
        "hi": "क्ा भ्रष्टाचार पर कोई रोक नहीं?"
      }
    ]
  },
  {
    "id": 719,
    "word": "chief",
    "pos": "n / adj",
    "pronunciation": "चीफ़",
    "meaningHi": "प्रधान, प्रमुख व्यक्ति | मुख्य",
    "meaningEn": "leader; most important",
    "examples": [
      {
        "en": "chief of the family",
        "hi": "परिवार का प्रमुख"
      },
      {
        "en": "Chief Engineer",
        "hi": "मुख्य अभियंता"
      }
    ]
  },
  {
    "id": 720,
    "word": "classroom",
    "pos": "n",
    "pronunciation": "क्ासरुम",
    "meaningHi": "कक्षा, क्ासरूम",
    "meaningEn": "teaching room",
    "examples": []
  },
  {
    "id": 721,
    "word": "climb",
    "pos": "v",
    "pronunciation": "क्ाइम",
    "meaningHi": "ऊपर चढ़ना",
    "meaningEn": "to go up",
    "examples": [
      {
        "en": "climb a mountain",
        "hi": "पहाड़ चढ़ना"
      }
    ]
  },
  {
    "id": 722,
    "word": "clothes",
    "pos": "n",
    "pronunciation": "खरीदना",
    "meaningHi": "क्ोद्ज़ कपड़े buy new नए कपड़े",
    "meaningEn": "garments",
    "examples": []
  },
  {
    "id": 723,
    "word": "coffee",
    "pos": "n",
    "pronunciation": "कौफ़ि",
    "meaningHi": "कौफी पीने का एक गरम पेय",
    "meaningEn": "a beverage",
    "examples": []
  },
  {
    "id": 724,
    "word": "collection",
    "pos": "n",
    "pronunciation": "कलेक्शन",
    "meaningHi": "संग्रह",
    "meaningEn": "a gathered group of things",
    "examples": [
      {
        "en": "a nice collection of books",
        "hi": "किताबों का एक अच्ा संग्रह"
      }
    ]
  },
  {
    "id": 725,
    "word": "combine",
    "pos": "v",
    "pronunciation": "कम्ाइन",
    "meaningHi": "दो या अधिक वस्तुओं का जोड़ना या मिलाना/मिलना",
    "meaningEn": "to merge",
    "examples": [
      {
        "en": "Great achievements are produced by combining planning, patience and hard work",
        "hi": "बड़ी उपलब्धियों के लिए योजना, कठिन परिश्रम और धीरज को मिलाना पड़ता है।"
      }
    ]
  },
  {
    "id": 726,
    "word": "command",
    "pos": "n / v",
    "pronunciation": "है।",
    "meaningHi": "कमान्ड आदेश",
    "meaningEn": "an order",
    "examples": [
      {
        "en": "Your wish is like command for me",
        "hi": "तुम्ारी इच्ा मेरे लिए आदेश-जैसी | कमान्ड आदेश देना (The soldiers were commanded to shoot at sight - सैनिकों"
      }
    ]
  },
  {
    "id": 727,
    "word": "comment",
    "pos": "n / v",
    "pronunciation": "की।",
    "meaningHi": "कौमेन्ट टिप्पणी कमर्शल व्यापारिक",
    "meaningEn": "a remark",
    "examples": [
      {
        "en": "He passed a comment on my dress - उसने मेरी पोशाक पर एक टिप्पणी | टिप्पणी करना (He commented on my new hairstyle",
        "hi": "उसने मेरे बालों की नई शैली पर टिप्पणी की।"
      },
      {
        "en": "commercial activity",
        "hi": "व्ापारिक गतिविधि"
      }
    ]
  },
  {
    "id": 728,
    "word": "common",
    "pos": "adj",
    "pronunciation": "कॉमन",
    "meaningHi": "सामान्य एक समूह की सभी वस्तुओं या व्यक्तियों में पाई जाने वाली चीज या गुण 2 साधारण, आम अंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ",
    "meaningEn": "ordinary",
    "examples": [
      {
        "en": "common sense",
        "hi": "सामान्य बुद्धि"
      },
      {
        "en": "common man",
        "hi": "आम आदमी"
      }
    ]
  },
  {
    "id": 729,
    "word": "complain",
    "pos": "v",
    "pronunciation": "कम्प्ेन",
    "meaningHi": "शिकायत करना",
    "meaningEn": "to express dissatisfaction",
    "examples": [
      {
        "en": "They were complaining about the food",
        "hi": "वे भोजन के बारे में शिकायत कर रहे थे।"
      }
    ]
  },
  {
    "id": 730,
    "word": "complaint",
    "pos": "n",
    "pronunciation": "कम्प्ेन्ट",
    "meaningHi": "शिकायत 42 43 अंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ",
    "meaningEn": "a grievance",
    "examples": [
      {
        "en": "He lodged a complaint with the police",
        "hi": "उसने पुलिस के पास एक शिकायत दर्ज कराई।"
      }
    ]
  },
  {
    "id": 731,
    "word": "concept",
    "pos": "n",
    "pronunciation": "कॉन्सेप्ट",
    "meaningHi": "विचार",
    "meaningEn": "an idea",
    "examples": [
      {
        "en": "New concepts will create a new world",
        "hi": "नए विचार नई दुनिया बनाएंगे।"
      }
    ]
  },
  {
    "id": 732,
    "word": "conclusion",
    "pos": "n",
    "pronunciation": "कन्क्ूशज़न",
    "meaningHi": "निष्कर्ष",
    "meaningEn": "the end",
    "examples": [
      {
        "en": "What is the conclusion, then?",
        "hi": "तब, निष्कर्ष क्ा निकला?"
      }
    ]
  },
  {
    "id": 733,
    "word": "confuse",
    "pos": "v",
    "pronunciation": "कन्फ़यूज़",
    "meaningHi": "उलझन में डाल देना, भ्रमित करना",
    "meaningEn": "to bewilder",
    "examples": [
      {
        "en": "Reading too many scriptures may confuse you",
        "hi": "अनेक शास्त्र पढ़ने से वे तुम्ें भ्रमित कर सकते हैं।"
      }
    ]
  },
  {
    "id": 734,
    "word": "confused",
    "pos": "adj",
    "pronunciation": "कन्फ़यूज़्ड",
    "meaningHi": "उलझन में पड़ा हुआ, भ्रमित, अस्पष्ट",
    "meaningEn": "puzzled",
    "examples": [
      {
        "en": "I am confused about the purpose of my life",
        "hi": "मैं अपने जीवन के उद्देश्य के बारे में अस्पष्ट हँ।"
      }
    ]
  },
  {
    "id": 735,
    "word": "congratulate",
    "pos": "v",
    "pronunciation": "कन्ग्ैचुलेट",
    "meaningHi": "बधाई देना",
    "meaningEn": "to express pleasure at success",
    "examples": [
      {
        "en": "I congratulated him on his exam results",
        "hi": "मैंने उसे उसकी परीक्षा के परिणाम पर बधाई दी।"
      }
    ]
  },
  {
    "id": 736,
    "word": "connected",
    "pos": "adj",
    "pronunciation": "कनेक़्टिड",
    "meaningHi": "जुड़ा हुआ, संपर्कवान",
    "meaningEn": "linked",
    "examples": [
      {
        "en": "He is a well- connected person",
        "hi": "वह एक काफी संपर्कवान व्यक्ति है।"
      }
    ]
  },
  {
    "id": 737,
    "word": "constantly",
    "pos": "adv",
    "pronunciation": "कॉन्सटन्ट्लि",
    "meaningHi": "निरंतर, सदा",
    "meaningEn": "always",
    "examples": [
      {
        "en": "He is constantly under stress",
        "hi": "वह सदा तनाव में रहता है।"
      }
    ]
  },
  {
    "id": 738,
    "word": "contain",
    "pos": "v",
    "pronunciation": "कन्ेन",
    "meaningHi": "में, अंदर कुछ होना, रहना या रखना",
    "meaningEn": "to hold",
    "examples": [
      {
        "en": "This pot contains drinking water",
        "hi": "इस बरतन में पीने का पानी है।"
      }
    ]
  },
  {
    "id": 739,
    "word": "contrast",
    "pos": "n",
    "pronunciation": "कॉन्ट्रास्ट",
    "meaningHi": "भेद, अंतर",
    "meaningEn": "difference",
    "examples": [
      {
        "en": "There is a sharp contrast between the two sisters",
        "hi": "दोनों बहनों में बहुत अंतर है।"
      }
    ]
  },
  {
    "id": 740,
    "word": "contribute",
    "pos": "v",
    "pronunciation": "कन्ट्रिब्यूट",
    "meaningHi": "सहयोग देना, योगदान देना",
    "meaningEn": "to add",
    "examples": [
      {
        "en": "Good books may immensely contribute to our growth",
        "hi": "अच्छी किताबें हमारे विकास में महान योगदान दे सकती हैं।"
      }
    ]
  },
  {
    "id": 741,
    "word": "convenient",
    "pos": "adj",
    "pronunciation": "कनवीनिअन्ट",
    "meaningHi": "आसान, सुविधाजनक",
    "meaningEn": "easy to use",
    "examples": [
      {
        "en": "Please let us know a convenient date for meeting",
        "hi": "मिलने के लिए एक सुविधाजनक तारीख बतलाएं।"
      }
    ]
  },
  {
    "id": 742,
    "word": "convince",
    "pos": "v",
    "pronunciation": "कन्विन्स",
    "meaningHi": "विश्ास दिलाना, राजी करना अंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ",
    "meaningEn": "to persuade",
    "examples": [
      {
        "en": "I convinced him to accept the new job",
        "hi": "मैंने उसे नई नौकरी स्ीकार कर लेने के लिए राजी किया।"
      }
    ]
  },
  {
    "id": 743,
    "word": "convinced",
    "pos": "adj",
    "pronunciation": "कन्विन्स्ट",
    "meaningHi": "किसी विषय में पूर्णत: आश्वस्त कि यह ठीक है",
    "meaningEn": "sure",
    "examples": [
      {
        "en": "I am convinced that there is life elsewhere in the universe too",
        "hi": "मैं आश्वस्त हँ कि इस ब्रहांड में कहीं और भी जीवन है।"
      }
    ]
  },
  {
    "id": 744,
    "word": "corner",
    "pos": "v",
    "pronunciation": "कॉर्नर",
    "meaningHi": "कोना",
    "meaningEn": "where edges meet",
    "examples": [
      {
        "en": "corner-table",
        "hi": "कोने का टेबुल"
      }
    ]
  },
  {
    "id": 745,
    "word": "correction",
    "pos": "n",
    "pronunciation": "करेक्शन",
    "meaningHi": "सुधारकार्य, त्रुटिशोधन",
    "meaningEn": "a fix",
    "examples": [
      {
        "en": "I am making a few corrections in my book",
        "hi": "मैं अपनी किताब में कुछ सुधार कर रहा हँ।"
      }
    ]
  },
  {
    "id": 746,
    "word": "cough",
    "pos": "n / v",
    "pronunciation": "कॉफ़",
    "meaningHi": "खाँसी | खाँसना",
    "meaningEn": "to expel air from lungs noisily",
    "examples": [
      {
        "en": "She has got a bad cough",
        "hi": "उसे बुरी खाँसी हो गई है।"
      },
      {
        "en": "He has been coughing all day",
        "hi": "वह सारे दिन खाँसता रहा है।"
      }
    ]
  },
  {
    "id": 747,
    "word": "count",
    "pos": "v",
    "pronunciation": "काउन्ट",
    "meaningHi": "गिनना, गिनती करना",
    "meaningEn": "to number",
    "examples": [
      {
        "en": "My child can count up to 10",
        "hi": "मेरा बच्चा 10 तक गिन सकता है।"
      }
    ]
  },
  {
    "id": 748,
    "word": "covered",
    "pos": "adj",
    "pronunciation": "कवड",
    "meaningHi": "ढँका हुआ CPU",
    "meaningEn": "having a cover; hidden",
    "examples": [
      {
        "en": "snow-covered mountains",
        "hi": "बर्फ से ढँके हुए पर्वत"
      }
    ]
  },
  {
    "id": 749,
    "word": "crash",
    "pos": "n / v",
    "pronunciation": "क्रैश",
    "meaningHi": "धमाके से गिरने की घटना 2 टक्कर 3 व्यापार या मूल्य में अचानक गिरावट | 1 जोर से टकराना 2 धमाके के साथ गिरना",
    "meaningEn": "a collision",
    "examples": [
      {
        "en": "plane",
        "hi": "crash"
      },
      {
        "en": "The car crashed into a wall",
        "hi": "कार एक दीवार से टकरा गई।"
      }
    ]
  },
  {
    "id": 750,
    "word": "crazy",
    "pos": "adj",
    "pronunciation": "क्ेज़ि",
    "meaningHi": "सनकी, मूर्ख 50 51 अंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ",
    "meaningEn": "wild",
    "examples": [
      {
        "en": "What a crazy idea!",
        "hi": "कैसा सनकी विचार!"
      }
    ]
  },
  {
    "id": 751,
    "word": "crisis",
    "pos": "n",
    "pronunciation": "क्ाइसिस",
    "meaningHi": "गंभीर कमी 2 संकट, विपत्ति क्रिटिकल थिंकिंग आलोचनात्मक चिंतन",
    "meaningEn": "critical time",
    "examples": [
      {
        "en": "The crisis is over",
        "hi": "संकट टल गया है।"
      },
      {
        "en": "Critical thinking is at the root of science",
        "hi": "विज्ान की जड़ में आलोचनात्मक चिंतन है।"
      }
    ]
  },
  {
    "id": 752,
    "word": "criticise",
    "pos": "v",
    "pronunciation": "क्रिटिसाइज़",
    "meaningHi": "आलोचना करना, गलतियाँ निकालना",
    "meaningEn": "to express disapproval",
    "examples": [
      {
        "en": "Understand well before criticising",
        "hi": "आलोचना करने के पहले बात को अच्छी तरह समझ लेना चाहिए।"
      }
    ]
  },
  {
    "id": 753,
    "word": "criticism",
    "pos": "n",
    "pronunciation": "क्रिटिसिज़म",
    "meaningHi": "आलोचना",
    "meaningEn": "disapproval",
    "examples": [
      {
        "en": "Tolerating criticism is a mark of democracy",
        "hi": "आलोचना को सहन करना लोकतंत्र का एक लक्षण है।"
      }
    ]
  },
  {
    "id": 754,
    "word": "curious",
    "pos": "adj",
    "pronunciation": "क्ुअरिअस",
    "meaningHi": "जिज्ासु, उत्ुक",
    "meaningEn": "eager to know",
    "examples": [
      {
        "en": "a curious child",
        "hi": "एक जिज्ासु बच्चा"
      }
    ]
  },
  {
    "id": 755,
    "word": "custom",
    "pos": "n",
    "pronunciation": "कस्टम",
    "meaningHi": "प्रथा, रीति-रिवाज़",
    "meaningEn": "a tradition",
    "examples": [
      {
        "en": "Good customs should be followed, bad ones discarded",
        "hi": "अच्छी प्रथाओं का पालन करना चाहिए, बुरी प्रथाओं को त्ाग देना चाहिए।"
      }
    ]
  },
  {
    "id": 756,
    "word": "damage",
    "pos": "n",
    "pronunciation": "डैमिज",
    "meaningHi": "नुकसान, क्षति dam",
    "meaningEn": "harm",
    "examples": [
      {
        "en": "There was no damage to the house",
        "hi": "मकान को कोई क्षति नहीं हुई।"
      }
    ]
  },
  {
    "id": 757,
    "word": "dance",
    "pos": "n / v",
    "pronunciation": "डान्स",
    "meaningHi": "नाच, नृत्य | नाचना, नृत्य करना",
    "meaningEn": "rhythmic movement",
    "examples": [
      {
        "en": "Dance is a form of art",
        "hi": "नृत्य कला का एक रूप है।"
      },
      {
        "en": "Let us dance",
        "hi": "आओ, नृत्य करें।"
      }
    ]
  },
  {
    "id": 758,
    "word": "declaration",
    "pos": "n",
    "pronunciation": "डेक्लरेशन",
    "meaningHi": "घोषणा",
    "meaningEn": "formal announcement",
    "examples": [
      {
        "en": "declaration of independence",
        "hi": "स्वतंत्रता की घोषणा"
      }
    ]
  },
  {
    "id": 759,
    "word": "declare",
    "pos": "v",
    "pronunciation": "डिक्ेअर",
    "meaningHi": "सार्वजनिक और आधिकारिक रूप से घोषित करना",
    "meaningEn": "to announce",
    "examples": [
      {
        "en": "India was declared free in 1947",
        "hi": "भारत 1947 में स्वतंत्र घोषित कर दिया गया।"
      }
    ]
  },
  {
    "id": 760,
    "word": "degree",
    "pos": "n",
    "pronunciation": "डिग्ी",
    "meaningHi": "डिग्ी तापमान को मापने की इकाई का स्तर 2 उपाधि 3 स्तर 1 33",
    "meaningEn": "a unit; qualification",
    "examples": [
      {
        "en": "He has got the bachelor's degree",
        "hi": "उसे स्ातकीय (बी."
      },
      {
        "en": "I have a high degree of regard for him",
        "hi": "मेरे अंदर उनके लिए ऊँचे स्तर का आदर है।"
      }
    ]
  },
  {
    "id": 761,
    "word": "deliberate",
    "pos": "adj",
    "pronunciation": "डिलिबरट",
    "meaningHi": "जानबूझ कर किया हुआ",
    "meaningEn": "intentional",
    "examples": [
      {
        "en": "a deliberate act",
        "hi": "एक जानबूूझ कर किया हुआ कार्य"
      }
    ]
  },
  {
    "id": 762,
    "word": "delicate",
    "pos": "adj",
    "pronunciation": "डेलिकट",
    "meaningHi": "कोमल, नाजुक",
    "meaningEn": "fragile",
    "examples": [
      {
        "en": "a delicate girl",
        "hi": "एक कोमल कन्ा"
      }
    ]
  },
  {
    "id": 763,
    "word": "deliver",
    "pos": "v",
    "pronunciation": "डिलिवर",
    "meaningHi": "निर्दिष्ट ठिकाने या पते पर सामान, पत्र आदि पहुँचाना 2 बच्ा पैदा कर देना 3 कोई निश्चित परिणाम सफलतापूर्वक देना 1",
    "meaningEn": "to bring",
    "examples": [
      {
        "en": "The letter was delivered at the correct address",
        "hi": "चिट्ी सही पते पर पहुँचा दी गई ।"
      },
      {
        "en": "She delivered a baby girl",
        "hi": "उसने एक नन्ही बालिका को जन्म दिया।"
      }
    ]
  },
  {
    "id": 764,
    "word": "democracy",
    "pos": "n",
    "pronunciation": "डिमौक्रसि",
    "meaningHi": "जनतंत्र, लोकतंत्र कि आत्मा है? 2",
    "meaningEn": "people's government",
    "examples": [
      {
        "en": "Democracy has spread in most parts of the world. लोकतंत्र दुनिया के अधिकांश हिस्सोंों में फैल गया है। demonstrate v डेमन्सट्रेट 1 प्रमाण देकर सिद्ध करना 2 किसी वस्तु की कार्यपद्धति को प्रदर्शित करना और समझाना 1 Can you demonstrate that soul exists?",
        "hi": "क्ा तुम यह प्रमाणित कर सकते हो (दिखा सकते हो"
      },
      {
        "en": "He demonstrated in the laboratory how hydrogen and oxygen, when combined, produce water",
        "hi": "उसने प्रयोगशाला में यह प्रदर्शित किया कि कैसे हाइड्ोजन और ऑक्सीजन मिल कर पानी बनाते हैं।"
      }
    ]
  },
  {
    "id": 765,
    "word": "desert",
    "pos": "n",
    "pronunciation": "भी रेगिस्ान में तबदील हो रही है।",
    "meaningHi": "डेज़र्ट, डिज़र्ट रेगिस्तास्तान, मरुभूमि",
    "meaningEn": "dry land",
    "examples": [
      {
        "en": "Arable lands are also turning into deserts",
        "hi": "खेती-योग्य भूूमि 56 57 अंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ"
      }
    ]
  },
  {
    "id": 766,
    "word": "design",
    "pos": "n / v",
    "pronunciation": "डिज़ाइन",
    "meaningHi": "डिज़ाइन, रूपरेखा | रूपरेखा बनाना से संबंधित कुछ शब्द नीचे दिए जाते हैं–",
    "meaningEn": "a plan",
    "examples": [
      {
        "en": "Does the design of the human body not indicate that there is an intelligent designer behind it?",
        "hi": "क्ा मानव शरीर की बनावट यह संकेत नहीं देती कि इसके पीछे एक बुद्धिशील डिज़ाईनर है?"
      },
      {
        "en": "Who designed the aircraft?",
        "hi": "हवाई जहाज की रूपरेखा किसने बनाई?"
      }
    ]
  },
  {
    "id": 767,
    "word": "desperate",
    "pos": "adj",
    "pronunciation": "डेस्परट",
    "meaningHi": "अत्यधिक निराशा या संकट के कारण दुस्ाहसी और कुछ भी करने को तैयार",
    "meaningEn": "hopeless",
    "examples": [
      {
        "en": "With food supply cut off, people became desperate",
        "hi": "अन्न की आपूूर्ति बन्द होने से लोग डेस्परेट हो गए।"
      }
    ]
  },
  {
    "id": 768,
    "word": "detailed",
    "pos": "adj",
    "pronunciation": "डीटेल्ड",
    "meaningHi": "विस्तृस्तृत ब्ोरे के साथ डिटर्मिन्ड कृतसंकल्प, दृढ़निश्चयी",
    "meaningEn": "thorough",
    "examples": [
      {
        "en": "a detailed description",
        "hi": "एक विस्ृत विवरण"
      },
      {
        "en": "determined to succeed",
        "hi": "सफल होने को दृढ़संकल्प"
      }
    ]
  },
  {
    "id": 769,
    "word": "difficult",
    "pos": "adj",
    "pronunciation": "डिफ़िकल्ट",
    "meaningHi": "कठिन, मुश््किल",
    "meaningEn": "hard",
    "examples": [
      {
        "en": "a difficult question",
        "hi": "एक कठिन सवाल"
      }
    ]
  },
  {
    "id": 770,
    "word": "difficulty",
    "pos": "n",
    "pronunciation": "डिफ़िकल्टि",
    "meaningHi": "कठिनाई",
    "meaningEn": "problem",
    "examples": [
      {
        "en": "any difficulty?",
        "hi": "कोई कठिनाई?"
      }
    ]
  },
  {
    "id": 771,
    "word": "dig",
    "pos": "v",
    "pronunciation": "डिग",
    "meaningHi": "खोदना",
    "meaningEn": "to excavate",
    "examples": [
      {
        "en": "Let's dig a soakpit to conserve water",
        "hi": "हम पानी बचाने के लिए एक सोकपिट खोदें।"
      }
    ]
  },
  {
    "id": 772,
    "word": "dinner",
    "pos": "n",
    "pronunciation": "डिनर",
    "meaningHi": "रात्रिभोज",
    "meaningEn": "main meal",
    "examples": []
  },
  {
    "id": 773,
    "word": "direct",
    "pos": "adj / v",
    "pronunciation": "डरेक्ट",
    "meaningHi": "डाइरेक्ट सीधा, प्रत्यक्ष | डाइरेक्ट निर्देश देना",
    "meaningEn": "straight",
    "examples": [
      {
        "en": "a direct train to Agra",
        "hi": "सीधे आगरा जाने वाली ट्ेन"
      },
      {
        "en": "Satyajit Ray directed memorable films",
        "hi": "सत्यजित रे ने यादगार फिल्मोंों का निर्देेशन किया।"
      }
    ]
  },
  {
    "id": 774,
    "word": "disagree",
    "pos": "v",
    "pronunciation": "डिसअग्ी",
    "meaningHi": "असहमत होना",
    "meaningEn": "to differ",
    "examples": [
      {
        "en": "We disagree with you",
        "hi": "हम आपसे असहमत हैं।"
      }
    ]
  },
  {
    "id": 775,
    "word": "disappear",
    "pos": "v",
    "pronunciation": "डिसअपिअ",
    "meaningHi": "लुप्त होना, गायब हो जाना अंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ डिस् अपॉइंटिड निराश of v डिसअप्ूव अस्ीकृत करना, अनुमोदन नहीं करना",
    "meaningEn": "to vanish",
    "examples": [
      {
        "en": "The dinosaurs disappeared from the earth",
        "hi": "डायनासोर धरती से गायब हो गए।"
      },
      {
        "en": "disappointed with son's results",
        "hi": "बेटे के परीक्षा-परिणामों से निराश"
      }
    ]
  },
  {
    "id": 776,
    "word": "discovery",
    "pos": "n",
    "pronunciation": "डिस्कवरि",
    "meaningHi": "नई खोज",
    "meaningEn": "the act of discovering",
    "examples": [
      {
        "en": "Was the discovery of America made by Columbus?",
        "hi": "क्ा अमेरिका की खोज कोलंबस द्ारा की गई?"
      }
    ]
  },
  {
    "id": 777,
    "word": "discuss",
    "pos": "v",
    "pronunciation": "डिस्कस",
    "meaningHi": "विचार-विमर्श करना",
    "meaningEn": "to talk about; to consider",
    "examples": []
  },
  {
    "id": 778,
    "word": "discussion",
    "pos": "n",
    "pronunciation": "डिस्कशन",
    "meaningHi": "विचार-विमर्श, चर्चा",
    "meaningEn": "conversation",
    "examples": []
  },
  {
    "id": 779,
    "word": "display",
    "pos": "n / v",
    "pronunciation": "डिस्प्े",
    "meaningHi": "सार्वजनिक स्ान पर वस्तुओं का व्यवस्थित प्रदर्शन | प्रदर्शन | प्रदर्शित करना",
    "meaningEn": "to show",
    "examples": [
      {
        "en": "books on display",
        "hi": "किताबों का प्रदर्शन"
      },
      {
        "en": "a nice display of books",
        "hi": "किताबों की एक अच्छी प्रदर्शनी"
      }
    ]
  },
  {
    "id": 780,
    "word": "distant",
    "pos": "adj",
    "pronunciation": "डिस्टन्ट",
    "meaningHi": "सुदूर, दूर का",
    "meaningEn": "far",
    "examples": [
      {
        "en": "a distant place",
        "hi": "एक सुदूर जगह"
      }
    ]
  },
  {
    "id": 781,
    "word": "disturb",
    "pos": "v",
    "pronunciation": "डिस्टर्ब",
    "meaningHi": "शांति भंग कर देना, चिंता में डाल देना",
    "meaningEn": "to interrupt",
    "examples": [
      {
        "en": "His unkind words disturb me",
        "hi": "उनकी अनुदार बातें मेरी मानसिक शांति भंग कर देती हैं।"
      }
    ]
  },
  {
    "id": 782,
    "word": "divide",
    "pos": "v",
    "pronunciation": "डिवाइड",
    "meaningHi": "विभाजित करना, बाँटना",
    "meaningEn": "to separate",
    "examples": [
      {
        "en": "The caste system divided the Hindus",
        "hi": "जातिप्रथा ने हिंदुओं को बाँट दिया।"
      }
    ]
  },
  {
    "id": 783,
    "word": "division",
    "pos": "n",
    "pronunciation": "डिविशज़न",
    "meaningHi": "बँटवारा, विभाजन 2 गणित में भाग",
    "meaningEn": "a section",
    "examples": [
      {
        "en": "The year 1947 saw the division of India in two parts",
        "hi": "वर्ष 1947 ने दो भागों में भारत का विभाजन देखा।"
      },
      {
        "en": "India in two parts",
        "hi": "वर्ष 1947 ने दो भागों में भारत का विभाजन देखा।"
      }
    ]
  },
  {
    "id": 784,
    "word": "divorce",
    "pos": "n / v",
    "pronunciation": "डिवोस",
    "meaningHi": "तलाक पति-पत्नी का कानूनी तौर पर अलग हो जाना | तलाक देना",
    "meaningEn": "marriage end",
    "examples": []
  },
  {
    "id": 785,
    "word": "drawing",
    "pos": "n",
    "pronunciation": "ड्ोइंग",
    "meaningHi": "रेखाचित्र",
    "meaningEn": "a sketch",
    "examples": []
  },
  {
    "id": 786,
    "word": "dress",
    "pos": "n / v",
    "pronunciation": "ड्ेस",
    "meaningHi": "पोशाक | 1 कपड़े पहनना 2 घाव पर मरहम-पट्ी करना कैशज़ुअल ड्रेसअनौपचारिक वस्त्र जैसे, लुंगी-गंजी फोमल ड्रेस औपचारिक वस्त्र जैसे, कुर्ता-पजामा-बंडी,",
    "meaningEn": "clothing",
    "examples": [
      {
        "en": "He dresses shabbily",
        "hi": "वह बेतरतीब तरीके से कपड़े पहनता है।"
      }
    ]
  },
  {
    "id": 787,
    "word": "economics",
    "pos": "n",
    "pronunciation": "ईकनॉमिक्स",
    "meaningHi": "अर्थशास्त्र",
    "meaningEn": "study of economy",
    "examples": [
      {
        "en": "Economics is the study of economic activity of mankind",
        "hi": "अर्थशास्त्र मनुष्य की आर्थिक गतिविधियों का अध्ययन है।"
      }
    ]
  },
  {
    "id": 788,
    "word": "elderly",
    "pos": "adj",
    "pronunciation": "एल्डलि",
    "meaningHi": "अधेड़, बूढ़ा",
    "meaningEn": "aged",
    "examples": [
      {
        "en": "care of the elderly",
        "hi": "बुजुर्गोंों की देखभाल"
      }
    ]
  },
  {
    "id": 789,
    "word": "elect",
    "pos": "v",
    "pronunciation": "इलेक्ट",
    "meaningHi": "चुनाव करना निर्वाचन करना",
    "meaningEn": "to vote for",
    "examples": [
      {
        "en": "elect the chairman",
        "hi": "अध्यक्ष का चुनाव करना"
      }
    ]
  },
  {
    "id": 790,
    "word": "election",
    "pos": "n",
    "pronunciation": "इलेक्शन",
    "meaningHi": "चुनाव, निर्वाचन",
    "meaningEn": "voting process",
    "examples": [
      {
        "en": "parliamentary election",
        "hi": "संसद का चुनाव"
      }
    ]
  },
  {
    "id": 791,
    "word": "electric",
    "pos": "adj",
    "pronunciation": "इलेक्ट्रिक",
    "meaningHi": "बिजली से चलने वाला",
    "meaningEn": "of electricity",
    "examples": []
  },
  {
    "id": 792,
    "word": "electrical",
    "pos": "adj",
    "pronunciation": "इलेक्ट्रिक्ल",
    "meaningHi": "बिजली से संबंधित",
    "meaningEn": "of electricity",
    "examples": [
      {
        "en": "electrical equipment",
        "hi": "बिजली के उपकरण"
      }
    ]
  },
  {
    "id": 793,
    "word": "electricity",
    "pos": "n",
    "pronunciation": "",
    "meaningHi": "इलेक्ट्रिसिटि बिजली, विद्युद्युतशक्ति",
    "meaningEn": "energy form",
    "examples": [
      {
        "en": "shortage of elec- tricity",
        "hi": "बिजली की कमी"
      }
    ]
  },
  {
    "id": 794,
    "word": "electronic",
    "pos": "adj",
    "pronunciation": "इलेक्ट्रॉनिक",
    "meaningHi": "इलेक्ट्ॉनिक्स पर आधारित",
    "meaningEn": "using electronics",
    "examples": []
  },
  {
    "id": 795,
    "word": "element",
    "pos": "n",
    "pronunciation": "एलिमन्ट",
    "meaningHi": "तत्त्व 2 किसी चीज का प्रमुख घटक अंंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ 1 So far, 94 . प्रकृति में अब तक 94 तत्त्वों की शिनाख्त की जा चुकी है, जैसे,",
    "meaningEn": "a basic part",
    "examples": []
  },
  {
    "id": 796,
    "word": "email",
    "pos": "n",
    "pronunciation": "ईमेल",
    "meaningHi": "ईमेल",
    "meaningEn": "electronic message",
    "examples": []
  },
  {
    "id": 797,
    "word": "emphasis",
    "pos": "n",
    "pronunciation": "एम्फ़सिस",
    "meaningHi": "विशेष दबाव या जोर",
    "meaningEn": "stress",
    "examples": [
      {
        "en": "emphasis on language learning",
        "hi": "भाषा सीखने पर जोर"
      }
    ]
  },
  {
    "id": 798,
    "word": "empty",
    "pos": "adj",
    "pronunciation": "एम्प्टि",
    "meaningHi": "रिक्त, खाली पात्र या स्ान",
    "meaningEn": "not full",
    "examples": [
      {
        "en": "empty box",
        "hi": "खाली बक्सा"
      }
    ]
  },
  {
    "id": 799,
    "word": "enable",
    "pos": "v",
    "pronunciation": "इनेबल",
    "meaningHi": "किसी को कोई कार्य करने-योग्य बनाना",
    "meaningEn": "to make possible",
    "examples": [
      {
        "en": "Enabling someone to earn his own bread is a noble work",
        "hi": "किसी को अपनी रोटी कमाने-योग्य बनाना एक पुण्य कार्य है।"
      }
    ]
  },
  {
    "id": 800,
    "word": "encounter",
    "pos": "n / v",
    "pronunciation": "न्टर",
    "meaningHi": "इन्ाउ- मुठभेड़, मुकाबला | इन्ाउ- सामना करना",
    "meaningEn": "to meet",
    "examples": [
      {
        "en": "He was killed in an encounter with the police",
        "hi": "वह पुलिस के साथ एक मुठभेड़ में मारा गया।"
      },
      {
        "en": "In carrying out any mission you will encounter many problems",
        "hi": "किसी भी मिशन को चलाने में तुम्ें कई समस्ाओं का सामना करना पड़ेगा।"
      }
    ]
  },
  {
    "id": 801,
    "word": "entrance",
    "pos": "n",
    "pronunciation": "एन्ट्रन्स",
    "meaningHi": "प्रवेश, दाखिला 2 प्रवेशद्ार",
    "meaningEn": "way in",
    "examples": [
      {
        "en": "entrance test",
        "hi": "प्रवेश- परीक्षा"
      },
      {
        "en": "the rear entrance",
        "hi": "पिछला प्रवेश-द्ार"
      }
    ]
  },
  {
    "id": 802,
    "word": "entry",
    "pos": "n",
    "pronunciation": "एन्ट्ी",
    "meaningHi": "प्रवेश",
    "meaningEn": "entering",
    "examples": [
      {
        "en": "Entry of antisocial elements should be prevented",
        "hi": "असामाजिक तत्त्वों का प्रवेश रोकना चाहिए।"
      }
    ]
  },
  {
    "id": 803,
    "word": "equipment",
    "pos": "n",
    "pronunciation": "इक्विप्मन्ट",
    "meaningHi": "उपकरण, कार्य करने के साधन और यंत्र",
    "meaningEn": "tools",
    "examples": [
      {
        "en": "cleaning equipment",
        "hi": "सफाई के उपकरण"
      }
    ]
  },
  {
    "id": 804,
    "word": "error",
    "pos": "n",
    "pronunciation": "एरर",
    "meaningHi": "गलती, त्रुटि",
    "meaningEn": "mistake",
    "examples": [
      {
        "en": "an error-free writing",
        "hi": "एक त्रुटिरहित लेखन"
      }
    ]
  },
  {
    "id": 805,
    "word": "estimate",
    "pos": "n / v",
    "pronunciation": "एस्टिमट",
    "meaningHi": "समय, मात्ा, कीमत आदि का अनुमान | प्राक्कलन करना, मूलांकन करना, अनुमान लगाना",
    "meaningEn": "rough calculation",
    "examples": [
      {
        "en": "The estimate seems to be high",
        "hi": "कीमत का अनुमान ज्ादा लगता है।"
      },
      {
        "en": "The engineers are estimating the likely cost of the building",
        "hi": "इंजीनियर्स भवन के संभावित मूूल्य का अनुमान लगा रहे हैं।"
      }
    ]
  },
  {
    "id": 806,
    "word": "exact",
    "pos": "adj",
    "pronunciation": "इग्ै़क्ट",
    "meaningHi": "ठीक-ठीक, सटीक, त्रुटिहीन",
    "meaningEn": "precise",
    "examples": [
      {
        "en": "Tell me the exact price",
        "hi": "मुझे सटीक मूूल्य बताओ।"
      }
    ]
  },
  {
    "id": 807,
    "word": "excellent",
    "pos": "adj",
    "pronunciation": "एक्सलन्ट",
    "meaningHi": "उत्तम, अतिश्रेष्ट, उत्कृष्ट",
    "meaningEn": "outstanding",
    "examples": [
      {
        "en": "An excellent player!",
        "hi": "एक अतिश्ेष्ठ खिलाड़ी!"
      }
    ]
  },
  {
    "id": 808,
    "word": "except",
    "pos": "prep",
    "pronunciation": "इक्ेप्ट",
    "meaningHi": "सिवाय {उसके}, {उसके} अलावा",
    "meaningEn": "excluding",
    "examples": [
      {
        "en": "Everybody joined the dinner except him",
        "hi": "उसके अलावा सभी रात्रिभोज में शामिल हुए।"
      }
    ]
  },
  {
    "id": 809,
    "word": "exchange",
    "pos": "n / v",
    "pronunciation": "इकस्चेंज",
    "meaningHi": "वस्तुविनिमय अदला-बदली 2 विदेशी मुद्रा 3 केंद्र | अदला-बदली करना",
    "meaningEn": "a swap",
    "examples": [
      {
        "en": "We exchanged our bags",
        "hi": "हमने अपने थैलों की अदला-बदली की।"
      }
    ]
  },
  {
    "id": 810,
    "word": "excited",
    "pos": "adj",
    "pronunciation": "इक्ाइटिड",
    "meaningHi": "उत्तेजित, अधीर",
    "meaningEn": "enthusiastic",
    "examples": [
      {
        "en": "Children are excited at the news of a picnic",
        "hi": "बच्चे पिकनिक के समाचार से उत्तेजित हैं।"
      }
    ]
  },
  {
    "id": 811,
    "word": "exciting",
    "pos": "adj",
    "pronunciation": "",
    "meaningHi": "इक्ाइटिंग उत्तेजक",
    "meaningEn": "thrilling",
    "examples": []
  },
  {
    "id": 812,
    "word": "excuse",
    "pos": "n / v",
    "pronunciation": "इकस्क्ूज़",
    "meaningHi": "बहाना | 1 माफ करना 2 निवृत्त हो जाना 72 73 अंंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ",
    "meaningEn": "a reason",
    "examples": [
      {
        "en": "She had a good excuse for missing the class",
        "hi": "उसके पास क्ास से अनुपस्थित होने का एक अच्ा बहाना था।"
      },
      {
        "en": "Please excuse me",
        "hi": "कृपया मुझे माफ करें।"
      }
    ]
  },
  {
    "id": 813,
    "word": "exercise",
    "pos": "n / v",
    "pronunciation": "एक्सर",
    "meaningHi": "साइज़ 1 व्यायाम या कसरत 2 अभ्यास | साइज़ शारीरिक व्यायाम करना",
    "meaningEn": "activity",
    "examples": [
      {
        "en": "naval exercise",
        "hi": "समुद्र में जलसेना का अभ्ास"
      }
    ]
  },
  {
    "id": 814,
    "word": "expensive",
    "pos": "adj",
    "pronunciation": "इक्स्ेन्सिव",
    "meaningHi": "बहुमूल्य, महँगा",
    "meaningEn": "costly",
    "examples": [
      {
        "en": "expensive dresses",
        "hi": "महँगे वस्त्र"
      }
    ]
  },
  {
    "id": 815,
    "word": "extra",
    "pos": "adj adv",
    "pronunciation": "एक्स्ट्रा",
    "meaningHi": "अतिरिक्त",
    "meaningEn": "additional",
    "examples": [
      {
        "en": "Let's avoid eating extra salt",
        "hi": "हम अतिरिक्त नमक खाने से बचें।"
      }
    ]
  },
  {
    "id": 816,
    "word": "favour",
    "pos": "v",
    "pronunciation": "फ़ेवर",
    "meaningHi": "किसी पर अनुग्रह या समर्थन करना 2 पसंद करना फ़ेव़रिट अत्ंत प्रिय, पसंदीदा",
    "meaningEn": "kind act",
    "examples": [
      {
        "en": "my favourite actor",
        "hi": "मेरा प्रिय अभिनेता"
      }
    ]
  },
  {
    "id": 817,
    "word": "feature",
    "pos": "n",
    "pronunciation": "फ़ीीचर",
    "meaningHi": "रूप, आकृति 2 विशेषता 1",
    "meaningEn": "characteristic",
    "examples": [
      {
        "en": "She is a boy with sharp features",
        "hi": "वह तीखे नाक-नक्श वाला लड़का है।"
      },
      {
        "en": "Equal- ity is a great feature of democracy",
        "hi": "समता लोकतंत्र की एक महान विशेषता है।"
      }
    ]
  },
  {
    "id": 818,
    "word": "few",
    "pos": "det adj",
    "pronunciation": "फ़यू",
    "meaningHi": "थोड़े-से, गिनेचुने",
    "meaningEn": "not many",
    "examples": [
      {
        "en": "Few people know here German",
        "hi": "गिनेचुने लोग यहाँ जर्मन भाषा जानते हैं।"
      }
    ]
  },
  {
    "id": 819,
    "word": "field",
    "pos": "n",
    "pronunciation": "फ़ील्ड",
    "meaningHi": "खेत 2 मैदान",
    "meaningEn": "an open area of land; a domain",
    "examples": [
      {
        "en": "plough the field",
        "hi": "खेत जोतना"
      },
      {
        "en": "playing field",
        "hi": "खेल का मैदान"
      }
    ]
  },
  {
    "id": 820,
    "word": "fit",
    "pos": "v / adj",
    "pronunciation": "फ़िट",
    "meaningHi": "जरूरत या आकार के हिसाब से सही या उचित बैठना या बैठाना | 1 उपयुक्त 2 हृष्टपुष्ट या स्वस्थ होना",
    "meaningEn": "suitable; healthy",
    "examples": [
      {
        "en": "The new dress fits well",
        "hi": "नई पोशाक अच्छी तरह फिट हो रही है।"
      },
      {
        "en": "Do what you think fit",
        "hi": "जो उपयुक्त समझो वह करो।"
      }
    ]
  },
  {
    "id": 821,
    "word": "fix",
    "pos": "v",
    "pronunciation": "फ़िक्स",
    "meaningHi": "स्थिर करना, लगा देना 2 किसी वस्तु को दृढ़ता से बैठाना, जड़ना",
    "meaningEn": "to repair",
    "examples": [
      {
        "en": "He fixed the picture on the wall",
        "hi": "उसने तसवीर को दीवार पर लगा दिया।"
      }
    ]
  },
  {
    "id": 822,
    "word": "flight",
    "pos": "n",
    "pronunciation": "फ़्लालाइट",
    "meaningHi": "उड़ान, विमान यात्ा 2 भागने की क्रिया",
    "meaningEn": "flying",
    "examples": [
      {
        "en": "बारिश के कारण My flight was cancelled due to rains",
        "hi": "मेरी फ्ाइट बारिश के कारण रद्द हो गई।"
      },
      {
        "en": "He was shot during flight",
        "hi": "भागते वक्त उसे गोली मारी गई।"
      }
    ]
  },
  {
    "id": 823,
    "word": "float",
    "pos": "v",
    "pronunciation": "फ़्लोट",
    "meaningHi": "जल या हवा के ऊपर उपलाना, तैरना",
    "meaningEn": "to rest on water",
    "examples": [
      {
        "en": "float on water",
        "hi": "जल पर उपलाना"
      }
    ]
  },
  {
    "id": 824,
    "word": "flood",
    "pos": "n / v",
    "pronunciation": "फ़्लड",
    "meaningHi": "बाढ़ 2 भरमार | 1 बाढ़ आना 2 किसी स्ान में बड़ी संख्ा में जमा होना, भरमार होना अंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ",
    "meaningEn": "water overflow",
    "examples": [
      {
        "en": "There is a flood of Chinese goods in the market",
        "hi": "बाज़ार में चीनी वस्ुओं की भरमार है।"
      },
      {
        "en": "My village is flooded",
        "hi": "मेरे गाँव में बाढ़ आई है।"
      }
    ]
  },
  {
    "id": 825,
    "word": "frame",
    "pos": "n / v",
    "pronunciation": "फ्े़म",
    "meaningHi": "ढाँचा, लकड़ी या धातु का चौखटा | 1 फ़्ेम चढ़ाना 2 किसी को झूठा फँसाना",
    "meaningEn": "structure",
    "examples": [
      {
        "en": "photo",
        "hi": "frame"
      },
      {
        "en": "I got the picture framed",
        "hi": "मैंने तसवीर को फ्ेम करा लिया।"
      }
    ]
  },
  {
    "id": 826,
    "word": "freeze",
    "pos": "v",
    "pronunciation": "फ़्ीज़",
    "meaningHi": "अधिक सर्दीी के कारण जम जाना 82 83 अंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ फ़्ीक्वंट अनेक बार होने वाला, बारंबार",
    "meaningEn": "to become ice",
    "examples": [
      {
        "en": "Water freezes below zero degree centigrade",
        "hi": "ज़ीरो डिग्रीग्री सेंटीग्रेड से नीचे पानी जम जाता है।"
      },
      {
        "en": "a frequent visitor",
        "hi": "एक बारंबार आनेवाला आगंतुक"
      }
    ]
  },
  {
    "id": 827,
    "word": "frighten",
    "pos": "v",
    "pronunciation": "फ़्ाइट्न",
    "meaningHi": "डराना, भयभीत कर देना",
    "meaningEn": "to scare",
    "examples": [
      {
        "en": "The dog fright- ened the child",
        "hi": "कुत्ते ने बच्चे को डरा दिया।"
      }
    ]
  },
  {
    "id": 828,
    "word": "front",
    "pos": "n",
    "pronunciation": "फ्ं़ट",
    "meaningHi": "सामने 2 युद्धक्षेत्र",
    "meaningEn": "forward part",
    "examples": [
      {
        "en": "the front of the house",
        "hi": "घर के सामने का हिस्ा"
      },
      {
        "en": "soldiers returning from the front",
        "hi": "युद्धक्षेत्र से लौटते हुए सैनिक"
      }
    ]
  },
  {
    "id": 829,
    "word": "fun",
    "pos": "n",
    "pronunciation": "फ़न",
    "meaningHi": "मौजमस्ती",
    "meaningEn": "enjoyment",
    "examples": [
      {
        "en": "Children are having fun",
        "hi": "बच्चे मौजमस्ी कर रहे हैं।"
      }
    ]
  },
  {
    "id": 830,
    "word": "funny",
    "pos": "adj",
    "pronunciation": "फ़नि",
    "meaningHi": "उपहासास्पद, विचित्र फ़निचर लकड़ी या लोहे का सामान, जैसे कुर्सीी, मेज, पलंग इत्यादि अंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ",
    "meaningEn": "amusing",
    "examples": [
      {
        "en": "a funny dress",
        "hi": "एक विचित्र पोशाक"
      }
    ]
  },
  {
    "id": 831,
    "word": "gap",
    "pos": "n",
    "pronunciation": "गैप",
    "meaningHi": "स्ान के संदर्भ में– बीच का खाली स्ान, दरार; समय के संदर्भ में– अंतराल, बीच का समय",
    "meaningEn": "space",
    "examples": [
      {
        "en": "There is gap in the wall",
        "hi": "दीवार में एक दरार है।"
      },
      {
        "en": "There is a long gap between the school time and the dinner time",
        "hi": "स्कूल के समय और रात्रिभोज के समय में काफी लंबा अंतराल है।"
      }
    ]
  },
  {
    "id": 832,
    "word": "gas",
    "pos": "n",
    "pronunciation": "गैस",
    "meaningHi": "गैस",
    "meaningEn": "fuel; vapour",
    "examples": []
  },
  {
    "id": 833,
    "word": "gather",
    "pos": "v",
    "pronunciation": "गैदर",
    "meaningHi": "इकट्ा करना, इकट्ा होना",
    "meaningEn": "to collect",
    "examples": [
      {
        "en": "He gathered some people for a protest मार्च",
        "hi": "उसने कुछ लोगों को विरोध-मार्च के लिए इकट्ा किया।"
      }
    ]
  },
  {
    "id": 834,
    "word": "gesture",
    "pos": "n",
    "pronunciation": "जेसचर",
    "meaningHi": "हावभाव, खास कर हाथों का हावभाव",
    "meaningEn": "a movement",
    "examples": []
  },
  {
    "id": 835,
    "word": "greeting",
    "pos": "n",
    "pronunciation": "ग्ीटिंग",
    "meaningHi": "शुभकामना, अभिवादन अंंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ",
    "meaningEn": "welcome",
    "examples": [
      {
        "en": "the Indian ways of greeting",
        "hi": "अभिवादन के भारतीय तरीके"
      },
      {
        "en": "Indian ways of greeting",
        "hi": "अभिवादन के भारतीय तरीके) अंंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ"
      }
    ]
  },
  {
    "id": 836,
    "word": "guess",
    "pos": "n / v",
    "pronunciation": "गेस",
    "meaningHi": "अनुमान | अनुमान करना",
    "meaningEn": "to estimate",
    "examples": [
      {
        "en": "It is a mere guess",
        "hi": "यह महज एक अनुमान है।"
      },
      {
        "en": "Can you guess the reasons?",
        "hi": "क्ा तुम कारण का अनुमान लगा सकते हो?"
      }
    ]
  },
  {
    "id": 837,
    "word": "hardly",
    "pos": "adv",
    "pronunciation": "हाड्लि",
    "meaningHi": "लगभग शून्य, न-के-बराबर",
    "meaningEn": "",
    "examples": [
      {
        "en": "Mohan works hard, but his brother Ashok hardly works. मोहन कड़ी मेहनत करता है, मगर उसका भाई अशोक न",
        "hi": "के-बराबर काम करता है।"
      }
    ]
  },
  {
    "id": 838,
    "word": "healthy",
    "pos": "adj",
    "pronunciation": "हेल््थि",
    "meaningHi": "निरोग, स्वस्थ",
    "meaningEn": "well",
    "examples": []
  },
  {
    "id": 839,
    "word": "hesitant",
    "pos": "adj",
    "pronunciation": "हेज़िटन्ट",
    "meaningHi": "संकोच या दुविधा मे पड़ा हुआ, हिचकिचाता हुआ हेज़िटेनश संकोच, हिचकिचाहट",
    "meaningEn": "uncertain",
    "examples": [
      {
        "en": "He was at first hesitant to speak",
        "hi": "वह शुरू में बोलने में हिचकिचा रहा था।"
      },
      {
        "en": "Hesitation goes slowly",
        "hi": "संकोच धीरे-धीरे जाता है।"
      }
    ]
  },
  {
    "id": 840,
    "word": "hit",
    "pos": "v",
    "pronunciation": "हिट",
    "meaningHi": "चोट मारना, प्रहार करना 2 टकराना",
    "meaningEn": "to strike",
    "examples": [
      {
        "en": "She hit the child with a stick",
        "hi": "उसने बच्चे को एक छड़ी से मारा।"
      },
      {
        "en": "The car hit a wall",
        "hi": "कार एक दीवार से टकरा गई।"
      }
    ]
  },
  {
    "id": 841,
    "word": "hobby",
    "pos": "n",
    "pronunciation": "हॉबि",
    "meaningHi": "शौक",
    "meaningEn": "leisure activity",
    "examples": [
      {
        "en": "Stamp collection is my hobby",
        "hi": "डाक टिकट जमा करना मेरा शौक है।"
      }
    ]
  },
  {
    "id": 842,
    "word": "holiday",
    "pos": "n",
    "pronunciation": "हॉलिडे",
    "meaningHi": "छुट्ी का दिन",
    "meaningEn": "vacation",
    "examples": [
      {
        "en": "national holidays",
        "hi": "राष्ट्रीीय छुट्ी-दिवस"
      }
    ]
  },
  {
    "id": 843,
    "word": "hollow",
    "pos": "adj",
    "pronunciation": "हॉलो",
    "meaningHi": "खोखला",
    "meaningEn": "empty inside",
    "examples": [
      {
        "en": "a hollow tree",
        "hi": "एक खोखला पेड़"
      }
    ]
  },
  {
    "id": 844,
    "word": "hungry",
    "pos": "adj",
    "pronunciation": "हंंग्ी",
    "meaningHi": "भूखा",
    "meaningEn": "needing food",
    "examples": [
      {
        "en": "11 crore people still sleep hungry in India",
        "hi": "ग्यारह करोड़ लोग अभी भी भारत में भूूखे सोते हैं।"
      }
    ]
  },
  {
    "id": 845,
    "word": "hurry",
    "pos": "n / v",
    "pronunciation": "हरि",
    "meaningHi": "जल्दबाजी, हड़बड़ी | शीघ्रता करना, जल्दबाजी करना",
    "meaningEn": "to rush",
    "examples": [
      {
        "en": "Are you in a hurry?",
        "hi": "क्ा तुम जल्ी में हो?"
      },
      {
        "en": "hurry up",
        "hi": "जल्ी करो"
      }
    ]
  },
  {
    "id": 846,
    "word": "identify",
    "pos": "v",
    "pronunciation": "",
    "meaningHi": "आइडेंटिफ़ाइ पहचानना",
    "meaningEn": "to recognize",
    "examples": [
      {
        "en": "Can you identify that person?",
        "hi": "क्ा तुम उस व्यक्ति को पहचान सकते हो?"
      }
    ]
  },
  {
    "id": 847,
    "word": "illness",
    "pos": "n",
    "pronunciation": "इलनस",
    "meaningHi": "बीमारी",
    "meaningEn": "disease",
    "examples": [
      {
        "en": "Stale food may cause illness",
        "hi": "बासी खाना बीमारी का कारण बन सकता है।"
      }
    ]
  },
  {
    "id": 848,
    "word": "inquire",
    "pos": "v",
    "pronunciation": "इन्क्वाइअर",
    "meaningHi": "पूछताछ करना, जाँच-पड़ताल करना इन्सेक्टिसाइडकीटनाशक 100 101 अंंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ",
    "meaningEn": "to ask",
    "examples": [
      {
        "en": "en- quire about somebody's health",
        "hi": "किसी की सेहत के बारे में पूूछताछ करना"
      },
      {
        "en": "Organic insecticides are better than chemical insecticides",
        "hi": "जैविक कीटनाशक रासायनिक कीटनाशकों से बेहतर होते हैं।"
      }
    ]
  },
  {
    "id": 849,
    "word": "inside",
    "pos": "n / prep",
    "pronunciation": "इन्साइड",
    "meaningHi": "भीतरी भाग, अंदर या भीतर | अंदर में, अंदरूनी इन्साइट्फ़ुल अंतर्दृष्टिपूर्ण किसी चीज के भीतरी सत्य को समझने या उजागर करने वाली दृष्टि या व्यक्ति",
    "meaningEn": "within",
    "examples": [
      {
        "en": "the inside of the box",
        "hi": "बक्से का भीतरी हिस्ा"
      },
      {
        "en": "He went inside the room",
        "hi": "वह कमरे के भीतर गया।"
      }
    ]
  },
  {
    "id": 850,
    "word": "instant",
    "pos": "adj",
    "pronunciation": "इन्स्टन्ट",
    "meaningHi": "तुरंत या तत्ाल होनेवाला तुरंत तैयार होने वाली कॉफी; तत्ाल समाधान; तुरंत प्रतिक्रिया",
    "meaningEn": "immediate",
    "examples": []
  },
  {
    "id": 851,
    "word": "instantly",
    "pos": "adv",
    "pronunciation": "इन्स्टन्टलि",
    "meaningHi": "तत्ाल, पलभर में, क्षणभर में of इन्स्ेड के स्ान पर, बदले में",
    "meaningEn": "right away",
    "examples": [
      {
        "en": "She instantly prepared a hot drink",
        "hi": "उसने तुरंत एक गरम पेय तैयार किया।"
      },
      {
        "en": "Instead of preparing for the exam he keeps playing cricket",
        "hi": "परीक्षा की तैयारी करने की जगह वह क्रिकेट खेलता रहता है।"
      }
    ]
  },
  {
    "id": 852,
    "word": "intend",
    "pos": "v",
    "pronunciation": "इंटेन्ड",
    "meaningHi": "इरादा रखना, मन में योजना रखना",
    "meaningEn": "to plan",
    "examples": [
      {
        "en": "I intend to educate some poor children",
        "hi": "मैं कुछ गरीब बचों को शिक्षित करने का इरादा रखता हँ।"
      }
    ]
  },
  {
    "id": 853,
    "word": "interfere",
    "pos": "v",
    "pronunciation": "इन्टफ़िअर",
    "meaningHi": "दखल देना, हस्तक्षेप करना इन्ट्ेस्टिड रुचि रखने वाला 102 103 अंंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ",
    "meaningEn": "to meddle",
    "examples": [
      {
        "en": "Please don't interfere in my work",
        "hi": "कृपया मेरे काम में दखल न दें।"
      },
      {
        "en": "Are you interested in buying land?",
        "hi": "क्ा तुम जमीन खरीदने में रुचि रखते हो?"
      }
    ]
  },
  {
    "id": 854,
    "word": "interrupt",
    "pos": "v",
    "pronunciation": "इन्टरप्ट",
    "meaningHi": "टोकाटोकी करना, रोक देना, बाधा डालना",
    "meaningEn": "to break in",
    "examples": [
      {
        "en": "He frequently interrupted my speech",
        "hi": "उसने कई बार मेरे भाषण में बाधा डाली।"
      }
    ]
  },
  {
    "id": 855,
    "word": "interview",
    "pos": "n / v",
    "pronunciation": "इन्टव्यू",
    "meaningHi": "साक्षात्ार प्रश्न पूछकर नौकरी, स्ूल-कॉलेज आदि में प्रवेश के लिए व्यक्ति की योग्यता का पता लगाने की प्रक्रिया | किसी विषय में किसी का इंटरव्यू या",
    "meaningEn": "questioning",
    "examples": [
      {
        "en": "telephonic interview",
        "hi": "टेलीफोन पर साक्षात्ार"
      },
      {
        "en": "We interviewed him for two hours",
        "hi": "हमलोगों ने उसका दो घंटों तक साक्षात्ार लिया।"
      }
    ]
  },
  {
    "id": 856,
    "word": "invention",
    "pos": "n",
    "pronunciation": "इन्वेनशन",
    "meaningHi": "आविष्ार कोई ऐसी नई चीज बनाना जो पहले से नहीं थी",
    "meaningEn": "new creation",
    "examples": [
      {
        "en": "invention of aeroplane",
        "hi": "हवाई जहाज का आविष्ार"
      }
    ]
  },
  {
    "id": 857,
    "word": "invitation",
    "pos": "n",
    "pronunciation": "इनविटेशन",
    "meaningHi": "निमंत्रण, न्यौता",
    "meaningEn": "request to attend",
    "examples": [
      {
        "en": "marriage invitation",
        "hi": "शादी का आमंत्रण"
      }
    ]
  },
  {
    "id": 858,
    "word": "invite",
    "pos": "v",
    "pronunciation": "इन्वाइट",
    "meaningHi": "आमंत्रण देना",
    "meaningEn": "to ask to attend",
    "examples": [
      {
        "en": "I had invited him to my marriage",
        "hi": "मैंने अपनी शादी में उन्हेंें आंमत्रित किया था।"
      }
    ]
  },
  {
    "id": 859,
    "word": "issue",
    "pos": "n / v",
    "pronunciation": "है।",
    "meaningHi": "इशू, इस्ू चर्चा या मुद्ा का विषय",
    "meaningEn": "topic; problem",
    "examples": [
      {
        "en": "Reservation in government jobs is a debatable issue - सरकारी नौकरियों में आरक्षण एक विवादित मुद्ा | इशू, इस्ू निर्गत करना, जारी करना (He issued a statement",
        "hi": "उसने एक बयान जारी किया।"
      },
      {
        "en": "Reservation in government jobs is a debatable issue",
        "hi": "सरकारी नौकरियों में आरक्षण एक विवादित मुद्ा | इशू, इस्ू निर्गत करना, जारी करना (He issued a statement - उसने एक बयान जारी किया।"
      }
    ]
  },
  {
    "id": 860,
    "word": "juice",
    "pos": "n",
    "pronunciation": "जूस",
    "meaningHi": "रस",
    "meaningEn": "fruit liquid",
    "examples": [
      {
        "en": "orange juice",
        "hi": "नारंगी का रस"
      }
    ]
  },
  {
    "id": 861,
    "word": "key",
    "pos": "n / adj",
    "pronunciation": "की",
    "meaningHi": "कुंजी, चाभी | अत्ंत महत्त्वपूर्ण",
    "meaningEn": "important; lock opener",
    "examples": [
      {
        "en": "Perseverance is the key to success",
        "hi": "लगे रहना सफलता की कुंजी है।"
      },
      {
        "en": "He is a key person in the organisation",
        "hi": "संगठन में वह एक अत्ंत महत्त्वपूर्ण व्यक्ति है।"
      }
    ]
  },
  {
    "id": 862,
    "word": "knock",
    "pos": "n / v",
    "pronunciation": "नॉक",
    "meaningHi": "खटखटाहट | 1 दरवाजा खटखटाना 2 गिरा दिया जाना 16 108 109 अंंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ नॉलिज ज्ान, जानकारी",
    "meaningEn": "to tap",
    "examples": [
      {
        "en": "There was a knock on the door",
        "hi": "दरवाजे पर एक खटखटाहट हुई।"
      },
      {
        "en": "she knocked at the door",
        "hi": "उसने दरवाजे को खटखटाया"
      }
    ]
  },
  {
    "id": 863,
    "word": "label",
    "pos": "n / v",
    "pronunciation": "लेबल",
    "meaningHi": "नाम की चिप्ी | नाम की चिप्ी लगाना",
    "meaningEn": "a tag",
    "examples": [
      {
        "en": "Is there a label on the container?",
        "hi": "डिब्े पर कोई नाम की चिप्ी भी है?"
      },
      {
        "en": "Each bottle was properly labelled",
        "hi": "सभी बोतलों पर उचित तरीके से नाम की चिप्ी लगाई हुई थी।"
      }
    ]
  },
  {
    "id": 864,
    "word": "largely",
    "pos": "adv",
    "pronunciation": "लाज्लि",
    "meaningHi": "अधिकांशत:",
    "meaningEn": "mostly",
    "examples": [
      {
        "en": "He is largely dependent on his children",
        "hi": "वह अधिकांशतः अपने बचों पर निर्भर है।"
      }
    ]
  },
  {
    "id": 865,
    "word": "later",
    "pos": "adv adj",
    "pronunciation": "लेटर",
    "meaningHi": "बाद में",
    "meaningEn": "afterwards",
    "examples": [
      {
        "en": "We will discuss this issue later",
        "hi": "हम इस मुद्े पर बाद में चर्चा करेंगे।"
      }
    ]
  },
  {
    "id": 866,
    "word": "laugh",
    "pos": "v",
    "pronunciation": "लाफ़",
    "meaningHi": "हँसना 85 110 111 अंंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ",
    "meaningEn": "to show amusement",
    "examples": [
      {
        "en": "laugh away the worries",
        "hi": "चिंताओं को हँस कर उड़ा देना"
      }
    ]
  },
  {
    "id": 867,
    "word": "laughter",
    "pos": "n",
    "pronunciation": "लाफ़्टर",
    "meaningHi": "हँसी",
    "meaningEn": "laughing",
    "examples": [
      {
        "en": "Laughter takes away depression",
        "hi": "हँसी अवसाद मिटा देती है।"
      }
    ]
  },
  {
    "id": 868,
    "word": "lawyer",
    "pos": "n",
    "pronunciation": "लोयर",
    "meaningHi": "वकील",
    "meaningEn": "legal professional",
    "examples": [
      {
        "en": "Lawyers in India don black gown",
        "hi": "भारत में वकील काला लबादा पहनते हैं।"
      }
    ]
  },
  {
    "id": 869,
    "word": "lay",
    "pos": "v",
    "pronunciation": "ले",
    "meaningHi": "रखना",
    "meaningEn": "to put down",
    "examples": [
      {
        "en": "He laid his hand on my shoulder",
        "hi": "उसने अपना हाथ मेरे कंधे पर रखा।"
      }
    ]
  },
  {
    "id": 870,
    "word": "legal",
    "pos": "adj",
    "pronunciation": "लीगल",
    "meaningHi": "वैध, कानूनी लेजिस्ेचर विधानमंडल जो कानून बनाता है",
    "meaningEn": "lawful",
    "examples": [
      {
        "en": "It is not legal to drive a car without a license",
        "hi": "बिना लाइसेंस के कार चलाना कानूूनी नहीं है।"
      },
      {
        "en": "the legisla- ture makes laws",
        "hi": "विधानमण्डल कानूून बनाता है।"
      }
    ]
  },
  {
    "id": 871,
    "word": "loose",
    "pos": "adj",
    "pronunciation": "लूस",
    "meaningHi": "खुला, बंधनमुक्त",
    "meaningEn": "not tight",
    "examples": [
      {
        "en": "loose tea",
        "hi": "खुली हुई चाय, जो पैकड नहीं हो"
      }
    ]
  },
  {
    "id": 872,
    "word": "low",
    "pos": "adj / n",
    "pronunciation": "लो",
    "meaningHi": "नीचे, निम्न ; | निम्न बिंदु, निम्न स्तर अंंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ",
    "meaningEn": "not high",
    "examples": [
      {
        "en": "He spoke in a low voice",
        "hi": "वह नीची आवाज में बोला।"
      },
      {
        "en": "low land",
        "hi": "नीची जमीन"
      }
    ]
  },
  {
    "id": 873,
    "word": "lower",
    "pos": "adj",
    "pronunciation": "लोअर",
    "meaningHi": "निचला",
    "meaningEn": "to reduce",
    "examples": [
      {
        "en": "The lower parts of the body",
        "hi": "शरीर के निचले हिस्े"
      }
    ]
  },
  {
    "id": 874,
    "word": "lucky",
    "pos": "adj",
    "pronunciation": "लकि",
    "meaningHi": "भाग्यशाली, किस्मत वाला",
    "meaningEn": "fortunate",
    "examples": [
      {
        "en": "I am lucky that I got parents like you",
        "hi": "मैं भाग्यशाली हँ कि मुझे आप-जैसे माता-पिता मिले।"
      }
    ]
  },
  {
    "id": 875,
    "word": "lunch",
    "pos": "n",
    "pronunciation": "लन्च",
    "meaningHi": "दिन का भोजन, लंच",
    "meaningEn": "midday meal",
    "examples": [
      {
        "en": "Would you please join me today on lunch? - क्ा आप कृपया आज मेरे साथ दिन के खाने में शामिल होंगे? 116 117 M अंंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ machine n मशीन यंत्र, मशीन (sewing machine",
        "hi": "सिलाई मशीन"
      }
    ]
  },
  {
    "id": 876,
    "word": "major",
    "pos": "adj",
    "pronunciation": "मेजर",
    "meaningHi": "बड़ा, मुख्य मजौरटि अधिकांश, बहुसंख्यक, जो ज्ादा संख्ा में हों",
    "meaningEn": "important",
    "examples": [
      {
        "en": "Scarcity of water is the major problem in this area",
        "hi": "पानी की कमी इस क्षेत्र की बड़ी समस्ा है।"
      },
      {
        "en": "Christians are in majority in Europe",
        "hi": "यूूरोप में बहुसंख्यक लोग ईसाई हैं।"
      }
    ]
  },
  {
    "id": 877,
    "word": "marry",
    "pos": "v",
    "pronunciation": "मैरि",
    "meaningHi": "विवाह करना",
    "meaningEn": "to wed",
    "examples": [
      {
        "en": "I will not marry till I am employed",
        "hi": "मैं रोजगार मिलने तक शादी नहीं करूँगा।"
      }
    ]
  },
  {
    "id": 878,
    "word": "match",
    "pos": "n",
    "pronunciation": "मैच",
    "meaningHi": "खेलप्रतियोगिता 2 माचिस 3 जोड़ीदार मटिअरिअल कुछ बनाने के लिए पदार्थ, सामग्ी मटिअरिअल भौतिक न कि आध्ात्मिक या भावनात्मक",
    "meaningEn": "contest; to fit",
    "examples": [
      {
        "en": "our team won the match",
        "hi": "हमारी टीम मैच जीत गई।"
      },
      {
        "en": "We have found a match for our daughter",
        "hi": "हमने अपनी बेटी के लिए एक जोड़ीदार की तलाश कर ली।"
      }
    ]
  },
  {
    "id": 879,
    "word": "means",
    "pos": "n",
    "pronunciation": "मीनज़",
    "meaningHi": "उपाय, साधन",
    "meaningEn": "method",
    "examples": [
      {
        "en": "Means and end should both be as pure as possible - लक्ष्य-प्राप्ति के साधन और लक्ष्य, दोनों यथासंभव शुद्ध होने चाहिए; means of communication",
        "hi": "यातायात के साधन"
      },
      {
        "en": "Means and end should both be as pure as possible",
        "hi": "लक्ष्य-प्राप्ति के साधन और लक्ष्य, दोनों यथासंभव शुद्ध होने चाहिए; means of communication - यातायात के साधन) mean-"
      }
    ]
  },
  {
    "id": 880,
    "word": "medium",
    "pos": "n",
    "pronunciation": "मीडिअम",
    "meaningHi": "कुछ व्यक्त करने या संप्रेषित करने का माध्यम",
    "meaningEn": "middle",
    "examples": [
      {
        "en": "Language is a medium of expression",
        "hi": "भाषा अभिव्यक्ति का एक माध्यम है।"
      }
    ]
  },
  {
    "id": 881,
    "word": "mention",
    "pos": "v",
    "pronunciation": "मेनशन",
    "meaningHi": "उल्ेख करना, जिक्र करना",
    "meaningEn": "to note",
    "examples": [
      {
        "en": "He mentioned his problem to me",
        "hi": "उसने अपनी समस्ा का मुझसे जिक्र किया।"
      }
    ]
  },
  {
    "id": 882,
    "word": "minute",
    "pos": "n",
    "pronunciation": "मिनिट",
    "meaningHi": "मिनट",
    "meaningEn": "60 seconds",
    "examples": []
  },
  {
    "id": 883,
    "word": "mix",
    "pos": "v / n",
    "pronunciation": "मिक्स",
    "meaningHi": "मिलना-जुलना 2 कई चीजों को एक साथ मिलाना | विभिन्न प्रकार के लोगों या वस्तुओं का मिश्रण",
    "meaningEn": "to blend",
    "examples": [
      {
        "en": "He does not mix with common people",
        "hi": "वह साधारण लोगों से नहीं मिलता-जुलता है"
      },
      {
        "en": "Many spices have to be mixed to produce a good flavour",
        "hi": "एक अच्े स्ाद के लिए कई मसालों को मिलाना पड़ता है।"
      }
    ]
  },
  {
    "id": 884,
    "word": "mixture",
    "pos": "n",
    "pronunciation": "मिक्सचर",
    "meaningHi": "विभिन्न वस्तुओं का मिश्रण अंंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ",
    "meaningEn": "a blend",
    "examples": [
      {
        "en": "The new cricket team is a mixture of fresh talent and experienced players",
        "hi": "नई क्रिकेट टीम ताजी प्रतिभा और अनुभवी खिलाड़ियों का मिश्रण है।"
      }
    ]
  },
  {
    "id": 885,
    "word": "model",
    "pos": "n",
    "pronunciation": "मॉड्ल",
    "meaningHi": "नमूना या प्रतिदर्श 2 मॉडल मॉड्न आधुनिक",
    "meaningEn": "example",
    "examples": [
      {
        "en": "A small clay-model of the house is ready",
        "hi": "घर का एक छोटा-सा मिट्ी का नमूूना तैयार है।"
      },
      {
        "en": "She is a model",
        "hi": "वह एक मॉडल है जो कपड़ों का विज्ापन करती है।"
      }
    ]
  },
  {
    "id": 886,
    "word": "motion",
    "pos": "n",
    "pronunciation": "मोशन",
    "meaningHi": "गति",
    "meaningEn": "movement",
    "examples": [
      {
        "en": "The car was in motion",
        "hi": "कार गति में थी।"
      }
    ]
  },
  {
    "id": 887,
    "word": "mouse",
    "pos": "n",
    "pronunciation": "माउस",
    "meaningHi": "चूहा 2 कंप्यूटर का माउस अंंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ",
    "meaningEn": "small animal; device",
    "examples": []
  },
  {
    "id": 888,
    "word": "narrow",
    "pos": "adj",
    "pronunciation": "नैरो",
    "meaningHi": "संकीर्ण, सँकरा, पतला",
    "meaningEn": "not wide",
    "examples": [
      {
        "en": "a narrow alley - एक पतली गली; a narrow mind",
        "hi": "एक संकीर्ण दिमाग"
      }
    ]
  },
  {
    "id": 889,
    "word": "national",
    "pos": "adj",
    "pronunciation": "नैशनल",
    "meaningHi": "राष्ट्ीय",
    "meaningEn": "of a nation",
    "examples": [
      {
        "en": "national flag - राष्ट्रीीय ध्वज; a national crisis",
        "hi": "एक राष्ट्रीीय संकट"
      }
    ]
  },
  {
    "id": 890,
    "word": "nearby",
    "pos": "adj",
    "pronunciation": "निअर",
    "meaningHi": "निकटस्थित 50 128 129 अंंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ",
    "meaningEn": "close",
    "examples": [
      {
        "en": "a nearby hotel",
        "hi": "एक निकटस्थित होटल"
      }
    ]
  },
  {
    "id": 891,
    "word": "nearly",
    "pos": "adv",
    "pronunciation": "निअलि",
    "meaningHi": "लगभग",
    "meaningEn": "almost",
    "examples": [
      {
        "en": "nearly ten people came",
        "hi": "लगभग दस लोग आए"
      }
    ]
  },
  {
    "id": 892,
    "word": "nervous",
    "pos": "adj",
    "pronunciation": "नर्वस",
    "meaningHi": "चिंतित, घबराया हुआ",
    "meaningEn": "anxious",
    "examples": [
      {
        "en": "He was nervous before the interview",
        "hi": "साक्षात्ार के पहले वह घबराया हुआ था।"
      }
    ]
  },
  {
    "id": 893,
    "word": "nobody",
    "pos": "pron",
    "pronunciation": "बॉडी",
    "meaningHi": "नो वन, नो कोई नहीं",
    "meaningEn": "no one",
    "examples": [
      {
        "en": "No one is happy",
        "hi": "कोई भी खुश नहीं है।"
      }
    ]
  },
  {
    "id": 894,
    "word": "noisy",
    "pos": "adj",
    "pronunciation": "नोइज़ि",
    "meaningHi": "शोर मचानेवाला, कोलाहलपूर्ण",
    "meaningEn": "loud",
    "examples": [
      {
        "en": "a noisy baby",
        "hi": "एक शोर मचाने वाला शिशु"
      }
    ]
  },
  {
    "id": 895,
    "word": "nonsense",
    "pos": "n",
    "pronunciation": "नॉन्सन्स",
    "meaningHi": "निरर्थक, असंगत या अनर्गल नॉनवायलंस अहिंसा 130 131 अंंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ no one →",
    "meaningEn": "meaningless",
    "examples": [
      {
        "en": "I don't like nonsense",
        "hi": "मैं अनर्गल बातें पसंद नहीं करता।"
      },
      {
        "en": "Non-violence holds a high place among the values of the Indian civilization",
        "hi": "भारतीय सभ्यता के जीवन मूूलों में अहिंसा का एक ऊँचा स्थान है।"
      }
    ]
  },
  {
    "id": 896,
    "word": "nowhere",
    "pos": "adv",
    "pronunciation": "नोवेअर",
    "meaningHi": "कहीं नहीं",
    "meaningEn": "no place",
    "examples": [
      {
        "en": "Nowhere you will find such beautiful buildings",
        "hi": "इस तरह की सुंदर इमारतें आप कहीं नहीं पाएँगे।"
      }
    ]
  },
  {
    "id": 897,
    "word": "nurse",
    "pos": "n",
    "pronunciation": "नर्स",
    "meaningHi": "रोगियों की देखभाल के लिए प्रशिक्षित व्यक्ति 132 133 O अंंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ",
    "meaningEn": "healthcare worker",
    "examples": [
      {
        "en": "She is a nurse in a private hospital",
        "hi": "वह एक निजी अस्पताल में नर्स हैं।"
      }
    ]
  },
  {
    "id": 898,
    "word": "odd",
    "pos": "adj",
    "pronunciation": "अॉड",
    "meaningHi": "अजीब, विचित्र 2 Odd विषम संख्ा जो संख्या 2 से विभाजित न हो, जैसे 3,5,7 आदि",
    "meaningEn": "strange",
    "examples": [
      {
        "en": "It may be odd to speak in English where no one knows English",
        "hi": "जहाँ कोई अंगरेज़ी नहीं जानता वहाँ अंगरेज़ी बोलना अजीब लग सकता है।"
      }
    ]
  },
  {
    "id": 899,
    "word": "official",
    "pos": "n",
    "pronunciation": "अफ़िश्ल",
    "meaningHi": "अधिकारी",
    "meaningEn": "authorized",
    "examples": [
      {
        "en": "Some officials visited us yesterday",
        "hi": "कुछ अधिकारी कल हमारे यहाँ आए।"
      }
    ]
  },
  {
    "id": 900,
    "word": "operate",
    "pos": "v",
    "pronunciation": "अॉपरेट",
    "meaningHi": "चलाना 2 अॉपरेशन करना अॉपरेशन 1 संचालन 2 शल्ोपचार चीर-फाड़ 3 अभियान",
    "meaningEn": "to function",
    "examples": [
      {
        "en": "Who operates the machine?",
        "hi": "यह मशीन कौन चलाता है?"
      },
      {
        "en": "Doctors operated on her stomach",
        "hi": "डॉक्टरों ने उसकी पेट का ऑपरेशन किया।"
      }
    ]
  },
  {
    "id": 901,
    "word": "option",
    "pos": "n",
    "pronunciation": "अॉपशन",
    "meaningHi": "विकल्प, सोच-विचार के बाद चयन करने- -योग्य कोई चीज अॉप्टिमिज़म आशावादिता 136 137 अंंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ",
    "meaningEn": "choice",
    "examples": [
      {
        "en": "What are the options?",
        "hi": "विकल्प क्ा हैं?"
      },
      {
        "en": "optimism is a healthy attitude",
        "hi": "आशावादिता एक स्वस्थ रुख है।"
      }
    ]
  },
  {
    "id": 902,
    "word": "paper",
    "pos": "n",
    "pronunciation": "पेपर",
    "meaningHi": "कागज",
    "meaningEn": "writing material",
    "examples": []
  },
  {
    "id": 903,
    "word": "passage",
    "pos": "n",
    "pronunciation": "पैसिज",
    "meaningHi": "गलियारा, रास्ता",
    "meaningEn": "corridor",
    "examples": []
  },
  {
    "id": 904,
    "word": "pause",
    "pos": "n / v",
    "pronunciation": "पॉज़",
    "meaningHi": "विराम, रुकावट, ठहराव | थोड़ी देर के लिए रुकना",
    "meaningEn": "brief stop",
    "examples": [
      {
        "en": "He paused several times during his speech",
        "hi": "वे अपने भाषण के बीच कई बार रुके।"
      }
    ]
  },
  {
    "id": 905,
    "word": "payment",
    "pos": "n",
    "pronunciation": "पेमन्ट",
    "meaningHi": "भुगतान, धनराशि",
    "meaningEn": "money paid",
    "examples": [
      {
        "en": "The payment for the books has been received",
        "hi": "किताबों के लिए भुगतान प्राप्त कर लिया गया है।"
      }
    ]
  },
  {
    "id": 906,
    "word": "pen",
    "pos": "n",
    "pronunciation": "पेन",
    "meaningHi": "कलम",
    "meaningEn": "writing tool",
    "examples": []
  },
  {
    "id": 907,
    "word": "pencil",
    "pos": "n",
    "pronunciation": "पेन्ल",
    "meaningHi": "पेंसिल",
    "meaningEn": "graphite writer",
    "examples": []
  },
  {
    "id": 908,
    "word": "perform",
    "pos": "v",
    "pronunciation": "पफ़ोम",
    "meaningHi": "कुछ फल देते हुए काम करना, निभाना 2 कार्यक्रम प्रस्तुत करना",
    "meaningEn": "to do",
    "examples": [
      {
        "en": "She performs her duties well",
        "hi": "वह अपने कर्तव्योंों को अच्छी तरह निभाती है।"
      },
      {
        "en": "Children performed two plays",
        "hi": "बचों ने दो नाटक प्रस्ुत किए।"
      }
    ]
  },
  {
    "id": 909,
    "word": "physical",
    "pos": "adj",
    "pronunciation": "फ़िज़िकल",
    "meaningHi": "शारीरिक",
    "meaningEn": "bodily",
    "examples": [
      {
        "en": "Isn't physical exercise a necessary part of a good life?",
        "hi": "क्ा शारीरिक व्ायाम अच्े जीवन का एक आवश्यक अंग नहीं है?"
      }
    ]
  },
  {
    "id": 910,
    "word": "piece",
    "pos": "n",
    "pronunciation": "पीस",
    "meaningHi": "टुकड़ा",
    "meaningEn": "a part",
    "examples": []
  },
  {
    "id": 911,
    "word": "plain",
    "pos": "adj / n",
    "pronunciation": "प्ेन",
    "meaningHi": "स्पष्ट, सरल, साफ | बड़ा सपाट मैदान",
    "meaningEn": "simple",
    "examples": [
      {
        "en": "a plain language सरल भाषा; plain paper",
        "hi": "साफ कागज, जिसपर कुछ लिखा नहीं हो"
      },
      {
        "en": "the vast plains of northern India",
        "hi": "उत्तर भारत के विशाल समतल क्षेत्र"
      }
    ]
  },
  {
    "id": 912,
    "word": "plant",
    "pos": "n / v",
    "pronunciation": "प्ान्ट",
    "meaningHi": "पौधा, वनस्पति 2 फैक्टरी | {पौधे} लगाना",
    "meaningEn": "living thing",
    "examples": [
      {
        "en": "A small plant grows into a large tree",
        "hi": "एक छोटा पौधा एक बड़ा पेड़ बन जाता है।"
      },
      {
        "en": "Jamshedji Tata set up a big steel plant at Jamshedpur. जमशे",
        "hi": "दजी टाटा ने जमशेदपुर में एक बड़ी स्ील-फैक्टरी स्थापित की।"
      }
    ]
  },
  {
    "id": 913,
    "word": "please",
    "pos": "v",
    "pronunciation": "प्लीज़",
    "meaningHi": "संतुष्ट करना",
    "meaningEn": "to satisfy",
    "examples": [
      {
        "en": "Can you please everybody?",
        "hi": "क्ा आप सभी को संतुष्ट कर सकते हैं?"
      }
    ]
  },
  {
    "id": 914,
    "word": "pleased",
    "pos": "adj",
    "pronunciation": "प्ीज़्ड",
    "meaningHi": "प्रसन्न",
    "meaningEn": "happy",
    "examples": [
      {
        "en": "I am pleased to inform that my son is getting married soon",
        "hi": "मैं यह बताते हुए प्रसन्न हँ कि मेरे बेटे की शादी जल्द होने वाली है।"
      }
    ]
  },
  {
    "id": 915,
    "word": "plenty",
    "pos": "adv pron",
    "pronunciation": "प्ेन्टि",
    "meaningHi": "प्रचुर, भरपूर, काफी 2 समृद्धि",
    "meaningEn": "abundance",
    "examples": [
      {
        "en": "We should eat plenty of fruits daily",
        "hi": "हमें रोज भरपूूर फल खाने चाहिए।"
      },
      {
        "en": "India was once a land of plenty",
        "hi": "भारत एक दिन समृद्धि का देश था।"
      }
    ]
  },
  {
    "id": 916,
    "word": "politics",
    "pos": "n",
    "pronunciation": "पॉलटिक्स",
    "meaningHi": "राजनीति",
    "meaningEn": "government",
    "examples": [
      {
        "en": "Good politics elevates a nation, bad politics destroys it",
        "hi": "अच्छी राजनीति राष्ट्र को ऊपर उठा देती हैं, बुरी राजनीति इसे नष्ट कर देती है।"
      }
    ]
  },
  {
    "id": 917,
    "word": "pollution",
    "pos": "n",
    "pronunciation": "पलूशन",
    "meaningHi": "प्रदूषण, गंदगी",
    "meaningEn": "contamination",
    "examples": [
      {
        "en": "Air-pollution may make life on earth difficult",
        "hi": "वायु-प्रदूषण धरती पर जीवन को कठिन बना दे सकता है।"
      }
    ]
  },
  {
    "id": 918,
    "word": "practical",
    "pos": "adj",
    "pronunciation": "प्ैक्टिकल",
    "meaningHi": "व्यावहारिक",
    "meaningEn": "useful",
    "examples": [
      {
        "en": "a practical man",
        "hi": "एक व्यावहारिक इंसान"
      }
    ]
  },
  {
    "id": 919,
    "word": "prefer",
    "pos": "v",
    "pronunciation": "प्रिफ़र",
    "meaningHi": "{एक चीज़ की तुलना में किसी दूसरी चीज को अधिक} पसंद करना अंंगरेज़ी शब्द उच्ारण हिंदी में अर्थ",
    "meaningEn": "to like better",
    "examples": [
      {
        "en": "I prefer mangoes to guava",
        "hi": "मैं अमरूद से अधिक आम पसंद करता हँ।"
      }
    ]
  },
  {
    "id": 920,
    "word": "prepare",
    "pos": "v",
    "pronunciation": "प्रिपेअर",
    "meaningHi": "तैयारी करना 2 बनाना",
    "meaningEn": "to ready",
    "examples": [
      {
        "en": "Prepare for the exam",
        "hi": "परीक्षा की तैयारी करो"
      },
      {
        "en": "Prepare a chart",
        "hi": "एक चार्ट बनाओ"
      }
    ]
  },
  {
    "id": 921,
    "word": "press",
    "pos": "n / v",
    "pronunciation": "प्रेस",
    "meaningHi": "पत्रकार 2 कपड़े प्रेस करने वाला उपकरण जिसे आयरन भी कहते हैं 3 छापाखाना | 1 दबाना 2 दबाव देना 1",
    "meaningEn": "to push",
    "examples": [
      {
        "en": "He pressed my feet",
        "hi": "उसने मेरे पैर को दबाए।"
      },
      {
        "en": "He is pressing me hard to attend the conference",
        "hi": "गोष्ी में भाग लेने के लिए वह मुझपर काफी दबाव डाल रहा है।"
      }
    ]
  },
  {
    "id": 922,
    "word": "pressure",
    "pos": "n",
    "pronunciation": "प्ेशर",
    "meaningHi": "दबाव",
    "meaningEn": "force",
    "examples": [
      {
        "en": "The police often act under pressure from the ministers",
        "hi": "पुसिल अकसर मंत्रियों के दबाव में कार्य करती है।"
      }
    ]
  },
  {
    "id": 923,
    "word": "pretend",
    "pos": "v",
    "pronunciation": "प्रिटेन्ड",
    "meaningHi": "झूठमूठ का अभिनय करना, दिखावा करना",
    "meaningEn": "to fake",
    "examples": [
      {
        "en": "He was pretending to be asleep",
        "hi": "वह सोने का अभिनय कर रहा था।"
      }
    ]
  },
  {
    "id": 924,
    "word": "pretty",
    "pos": "adj",
    "pronunciation": "प्रिटि",
    "meaningHi": "आकर्षक 2 काफी-कुछ",
    "meaningEn": "attractive",
    "examples": [
      {
        "en": "a pretty girl",
        "hi": "एक आकर्षक लड़की"
      },
      {
        "en": "The two brothers are pretty much the same",
        "hi": "दोनों भाई काफी-कुछ एक ही तरह के हैं।"
      }
    ]
  },
  {
    "id": 925,
    "word": "previous",
    "pos": "adj",
    "pronunciation": "प्ीविअस",
    "meaningHi": "पहले वाला, पूर्वर्तीी",
    "meaningEn": "earlier",
    "examples": [
      {
        "en": "the previous year",
        "hi": "इसके पहले का साल"
      }
    ]
  },
  {
    "id": 926,
    "word": "print",
    "pos": "n / v",
    "pronunciation": "प्रिंट",
    "meaningHi": "छपाई, टाइप, मुद्रण | छापना, मुद्रित करना",
    "meaningEn": "to reproduce",
    "examples": [
      {
        "en": "she got her book printed",
        "hi": "उसने अपनी किताब छपवाई ।"
      }
    ]
  },
  {
    "id": 927,
    "word": "priority",
    "pos": "n",
    "pronunciation": "प्राइअॉरटि",
    "meaningHi": "प्राथमिकता अधिक महत्त्वपूर्ण ; फुटबॉल इस क्षण मेरी प्राथमिकता नहीं है; परीक्षा की तैयारी अभी प्राथमिकता है।",
    "meaningEn": "main thing",
    "examples": []
  },
  {
    "id": 928,
    "word": "private",
    "pos": "adj",
    "pronunciation": "प्ाइवट",
    "meaningHi": "निजी, व्यक्तिगत",
    "meaningEn": "personal",
    "examples": [
      {
        "en": "This car is my private property, not public property",
        "hi": "यह कार मेरी निजी सम्पत्ति है, सार्वजनिक संपत्ति नहीं।"
      }
    ]
  },
  {
    "id": 929,
    "word": "prize",
    "pos": "n",
    "pronunciation": "प्राइज़",
    "meaningHi": "पुरस्ार, ईनाम",
    "meaningEn": "reward",
    "examples": [
      {
        "en": "the Nobel Prize",
        "hi": "नोबेल पुरस्ार"
      },
      {
        "en": "Nobel Prize",
        "hi": "नोबेल पुरस्ार)"
      }
    ]
  },
  {
    "id": 930,
    "word": "probably",
    "pos": "adv",
    "pronunciation": "प्ॉबब्लि",
    "meaningHi": "शायद, संभवतः",
    "meaningEn": "most likely",
    "examples": [
      {
        "en": "He will probably come",
        "hi": "वह संभवतः आएगा।"
      }
    ]
  },
  {
    "id": 931,
    "word": "profit",
    "pos": "n / v",
    "pronunciation": "प्ॉफ़िट",
    "meaningHi": "लाभ, नफा | फ़ायदा मिलना",
    "meaningEn": "gain",
    "examples": [
      {
        "en": "You may not profit much from business of candle making",
        "hi": "तुम मोमबत्ती के व्ापार से शायद अधिक लाभ नहीं कमा पाओगे।"
      }
    ]
  },
  {
    "id": 932,
    "word": "project",
    "pos": "n / v",
    "pronunciation": "प्ॉजेक्ट",
    "meaningHi": "परियोजना, प्रकल्प कोई एक विशेष कार्य जिसे योजनाबद्ध तरीके से एक समयसीमा में पूरा करना हो",
    "meaningEn": "undertaking",
    "examples": [
      {
        "en": "India is working on a project of sending a man on the moon",
        "hi": "भारत चाँद पर एक इंसान को भेजने के प्रकल्प पर काम कर रहा है।"
      }
    ]
  },
  {
    "id": 933,
    "word": "proof",
    "pos": "n",
    "pronunciation": "प्रूफ़",
    "meaningHi": "सबूत",
    "meaningEn": "evidence",
    "examples": [
      {
        "en": "Do you have any proof that he stole your wallet?",
        "hi": "क्ा तुम्ारे पास कोई सबूूत है कि उसने तुम्ारा बटुआ चुराया?"
      }
    ]
  },
  {
    "id": 934,
    "word": "properly",
    "pos": "adv",
    "pronunciation": "प्ॉपलि",
    "meaningHi": "ढंग से, ठीक से",
    "meaningEn": "correctly",
    "examples": [
      {
        "en": "He was dressed properly",
        "hi": "वह पोशाक में था।"
      }
    ]
  },
  {
    "id": 935,
    "word": "protest",
    "pos": "n / v",
    "pronunciation": "प्ॉटेस्ट",
    "meaningHi": "विरोध, प्रतिवाद | विरोध, प्रतिवाद करना",
    "meaningEn": "objection",
    "examples": [
      {
        "en": "There were protests against the new law",
        "hi": "नए कानूून के खिलाफ विरोध-प्रदर्शन हुए।"
      }
    ]
  },
  {
    "id": 936,
    "word": "prove",
    "pos": "v",
    "pronunciation": "प्रूव",
    "meaningHi": "सिद्ध करना",
    "meaningEn": "to show true",
    "examples": [
      {
        "en": "Can you prove that earth is round?",
        "hi": "क्ा तुम सिद्ध कर सकते हो कि धरती गोल है?"
      }
    ]
  },
  {
    "id": 937,
    "word": "pupil",
    "pos": "n",
    "pronunciation": "प्ूपल",
    "meaningHi": "शिष्य, छात्र",
    "meaningEn": "student",
    "examples": []
  },
  {
    "id": 938,
    "word": "quantity",
    "pos": "n",
    "pronunciation": "क्वांंटिटि",
    "meaningHi": "मात्ा, परिमाण",
    "meaningEn": "amount",
    "examples": [
      {
        "en": "Eating food in small quantities is healthier",
        "hi": "थोड़ी-थोड़ी मात्रा में भोजन खाना अधिक स्ास्थ्यकर होता है।"
      }
    ]
  },
  {
    "id": 939,
    "word": "quarrel",
    "pos": "n / v",
    "pronunciation": "क्वॉरल",
    "meaningHi": "झगड़ा या विवाद | झगड़ा करना",
    "meaningEn": "argument",
    "examples": [
      {
        "en": "Why was there a quar- rel between the two friends?",
        "hi": "दोनों दोस्तोंों के बीच झगड़ा क्योंों हुआ?"
      },
      {
        "en": "Don't quarrel",
        "hi": "झगड़ा न करो"
      }
    ]
  },
  {
    "id": 940,
    "word": "quarter",
    "pos": "n",
    "pronunciation": "क्वॉटर",
    "meaningHi": "एक चौथाई 2 तिमाही 3 आवास मकान",
    "meaningEn": "one fourth",
    "examples": [
      {
        "en": "a quarter of a litre",
        "hi": "एक चौथाई लीटर"
      },
      {
        "en": "in the first quarter of the year",
        "hi": "साल की पहली तिमाही में"
      }
    ]
  },
  {
    "id": 941,
    "word": "queue",
    "pos": "n",
    "pronunciation": "क्यू",
    "meaningHi": "कतार या लाइन",
    "meaningEn": "line",
    "examples": [
      {
        "en": "Why is there such a long queue?",
        "hi": "इतनी लंबी लाइन क्योंों है?"
      }
    ]
  },
  {
    "id": 942,
    "word": "radio",
    "pos": "n",
    "pronunciation": "रेडिओ",
    "meaningHi": "रेडियो ऐसा यंत्र जिसमें से रेडियो-स्ेशन से प्रसारित ध्वनियाँ निकलती हों।",
    "meaningEn": "broadcast device",
    "examples": []
  },
  {
    "id": 943,
    "word": "rarely",
    "pos": "adv",
    "pronunciation": "रेअलि",
    "meaningHi": "कम ही, विरले ही",
    "meaningEn": "seldom",
    "examples": [
      {
        "en": "He is rarely seen happy",
        "hi": "वह विरले ही खुश देखा जाता है।"
      }
    ]
  },
  {
    "id": 944,
    "word": "raw",
    "pos": "adj",
    "pronunciation": "रॉ",
    "meaningHi": "कच्ी स्थिति में 2 अनगढ़",
    "meaningEn": "uncooked",
    "examples": [
      {
        "en": "raw material",
        "hi": "कच्चा माल"
      },
      {
        "en": "a raw artist",
        "hi": "एक कच्चा कलाकार"
      }
    ]
  },
  {
    "id": 945,
    "word": "react",
    "pos": "v",
    "pronunciation": "रिऐक्ट",
    "meaningHi": "प्रतिक्रिया व्यक्त करना रिऐक्शन प्रतिक्रिया 160 161 अंंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ",
    "meaningEn": "to respond",
    "examples": [
      {
        "en": "Never react without understanding a matter",
        "hi": "किसी मामले को बिना समझे कभी प्रतिक्रिया मत व्यक्त करो।"
      },
      {
        "en": "What was her reaction?",
        "hi": "उसकी प्रतिक्रिया क्ा थी?"
      }
    ]
  },
  {
    "id": 946,
    "word": "recent",
    "pos": "adj",
    "pronunciation": "रीसन्ट",
    "meaningHi": "हाल का रीसंटलि हाल ही में अंंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ रेकग्ाइज़ 1 पहचानना 2 मान्यता देना 1948 - इजराइल को एक स्वतंत्र देश के रूप में 1948 में",
    "meaningEn": "recent",
    "examples": [
      {
        "en": "a recent incident",
        "hi": "एक हाल की घटना"
      },
      {
        "en": "She visited us recently",
        "hi": "वह हमारे यहाँ हाल में आई थी।"
      }
    ]
  },
  {
    "id": 947,
    "word": "record",
    "pos": "n / v",
    "pronunciation": "रेकोड",
    "meaningHi": "अभिलेख, दस्तावेज, कागजात | रिकॉर्ड करना तथ्योंों या घटनाओं को भविष्य में उपयोग के लिए लिपिबद्ध करना या ध्वनि या चित्र अथवा चलचित्र के रूप में अंकित",
    "meaningEn": "account",
    "examples": [
      {
        "en": "Some records are missing",
        "hi": "कुछ दस्तावेज गायब हैं।"
      },
      {
        "en": "His telephonic conversation was recorded",
        "hi": "फोन पर हुई उसकी बातचीत रिकॉर्ड कर ली गई।"
      }
    ]
  },
  {
    "id": 948,
    "word": "recover",
    "pos": "v",
    "pronunciation": "की वसूूली की कोशिश कर रहा है।",
    "meaningHi": "रिकवर 1 स्ास्थ्य-लाभ करना 2 फिर से वापस प्राप्त करना 3 वसूली करना 1",
    "meaningEn": "to heal",
    "examples": [
      {
        "en": "After surgery, he is on way to recovery",
        "hi": "ऑपरेशन के बाद वह स्ास्थ्यलाभ के रास्े पर है।"
      },
      {
        "en": "There has been no recovery of the stolen car yet",
        "hi": "चोरी की गई कार की बरामदगी अभी तक नहीं हो पाई है।"
      }
    ]
  },
  {
    "id": 949,
    "word": "refer",
    "pos": "v",
    "pronunciation": "अंंगरेज़ी शब्द",
    "meaningHi": "रिफ़र 1 उल्ेख या चर्चा करना 2 कहीं भेजना 162 163 उच्ारण हिंंदी में अर्थ 1",
    "meaningEn": "to mention",
    "examples": [
      {
        "en": "To prove his point, he referred to a passage in the Bible",
        "hi": "अपनी बात को सिद्ध करने के लिए उसने बाइबिल के एक अंश का उल्ेख किया ।"
      },
      {
        "en": "The patient was referred to a bigger hospital",
        "hi": "मरीज को एक बड़े अस्पताल में भेजा गया ।"
      }
    ]
  },
  {
    "id": 950,
    "word": "refuse",
    "pos": "v",
    "pronunciation": "रिफ़यूज़",
    "meaningHi": "इनकार करना, मना करना",
    "meaningEn": "to decline",
    "examples": [
      {
        "en": "He refused to come",
        "hi": "उसने आने से मना कर दिया।"
      }
    ]
  },
  {
    "id": 951,
    "word": "region",
    "pos": "n",
    "pronunciation": "रीजन",
    "meaningHi": "क्षेत्र रीजनल क्षेत्ीय",
    "meaningEn": "area",
    "examples": [
      {
        "en": "the northern region of India",
        "hi": "भारत का उत्तरी क्षेत्र"
      }
    ]
  },
  {
    "id": 952,
    "word": "reject",
    "pos": "v",
    "pronunciation": "रिजेक्ट",
    "meaningHi": "अस्ीकृत कर देना अंंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ to रिलेटिड से संबंधित",
    "meaningEn": "to refuse",
    "examples": [
      {
        "en": "My proposal was rejected",
        "hi": "मेरा प्रस्ताव अस्ीकृत कर दिया गया।"
      },
      {
        "en": "What was his lecture related to?",
        "hi": "उसका भाषण किस विषय से संबंधित था?"
      }
    ]
  },
  {
    "id": 953,
    "word": "relax",
    "pos": "v",
    "pronunciation": "रिलैक्स",
    "meaningHi": "विश्ाम करना",
    "meaningEn": "to rest",
    "examples": [
      {
        "en": "Let us relax for some time",
        "hi": "हम थोड़ी देर आराम करें।"
      }
    ]
  },
  {
    "id": 954,
    "word": "relief",
    "pos": "n",
    "pronunciation": "रिलीफ़",
    "meaningHi": "राहत या चैन",
    "meaningEn": "comfort",
    "examples": [
      {
        "en": "The rain gave relief to the farmers",
        "hi": "बारिश ने किसानों को राहत दी।"
      }
    ]
  },
  {
    "id": 955,
    "word": "remark",
    "pos": "n / v",
    "pronunciation": "रिमाक",
    "meaningHi": "टिप्पणी, कथन | टिप्पणी करना",
    "meaningEn": "comment",
    "examples": [
      {
        "en": "He made bad remarks about the food in the hostel",
        "hi": "उसने हॉस्टल के खाने के बारे में बुरी टिप्पणियाँ कीं।"
      },
      {
        "en": "The new principal remarked that the students' canteen could be cleaner",
        "hi": "नए प्राचार्य ने टिप्पणी की कि छात्रों की कैंटीन में सफाई बेहतर हो सकती थी।"
      }
    ]
  },
  {
    "id": 956,
    "word": "repair",
    "pos": "n / v",
    "pronunciation": "मरम्मत में है।",
    "meaningHi": "रिपेअर मरम्मत मरम्मत करना",
    "meaningEn": "to fix",
    "examples": [
      {
        "en": "My house is under repair",
        "hi": "मेरा घर | रिपेअ(र"
      },
      {
        "en": "Did you get your car repaired?",
        "hi": "क्ा तुमने अपनी कार मरम्मत कराई?"
      }
    ]
  },
  {
    "id": 957,
    "word": "reply",
    "pos": "n / v",
    "pronunciation": "रिप्ाइ",
    "meaningHi": "जवाब, उत्तर | जवाब या उत्तर देना अंंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ",
    "meaningEn": "to answer",
    "examples": [
      {
        "en": "He gave no reply to my questions",
        "hi": "उसने मेरे सवालों का कोई जवाब नहीं दिया।"
      },
      {
        "en": "Did she reply?",
        "hi": "क्ा उसने जवाब दिया?"
      }
    ]
  },
  {
    "id": 958,
    "word": "rid",
    "pos": "v",
    "pronunciation": "रिड",
    "meaningHi": "मुक्त करना, पीछा छुड़ाना",
    "meaningEn": "to free from",
    "examples": [
      {
        "en": "Rid yourself of worries",
        "hi": "चिंताओं से अपना पीछा छुड़ाओ"
      }
    ]
  },
  {
    "id": 959,
    "word": "rough",
    "pos": "adj",
    "pronunciation": "रफ़",
    "meaningHi": "वस्तु के लिए खुरदरा 2 व्यक्ति के लिए रुक्ष रूखे व्यव- हार वाला 168 169 अंंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ",
    "meaningEn": "uneven",
    "examples": [
      {
        "en": "a rough surface",
        "hi": "एक खुरदरी सतह"
      },
      {
        "en": "rough behaviour",
        "hi": "रूखा व्यवहार"
      }
    ]
  },
  {
    "id": 960,
    "word": "round",
    "pos": "adj / n",
    "pronunciation": "राउन्ड",
    "meaningHi": "गोल | 1 फेरा, गश्त, चक्कर 2 बारी 1",
    "meaningEn": "circular",
    "examples": [
      {
        "en": "a round plate",
        "hi": "एक गोल प्ेट"
      },
      {
        "en": "He took a round of the village and came back",
        "hi": "उसने गाँव का एक चक्कर लगाया और आ गया।"
      }
    ]
  },
  {
    "id": 961,
    "word": "row",
    "pos": "n",
    "pronunciation": "रो",
    "meaningHi": "कतार, पंक्ति 2 झगड़ा",
    "meaningEn": "a line",
    "examples": [
      {
        "en": "He sat in the front row",
        "hi": "वह अगली पंक्ति में बैठा।"
      },
      {
        "en": "He just had a row with his wife",
        "hi": "उसका अभी-अभी अपनी पत्ी से झगड़ा हुआ है।"
      }
    ]
  },
  {
    "id": 962,
    "word": "rub",
    "pos": "v",
    "pronunciation": "रब",
    "meaningHi": "रगड़ना रबिश कूड़ा-करकट, बेकार की चीजें",
    "meaningEn": "to move against",
    "examples": []
  },
  {
    "id": 963,
    "word": "safety",
    "pos": "n",
    "pronunciation": "सेफ़्टि",
    "meaningHi": "सुरक्षा",
    "meaningEn": "security",
    "examples": [
      {
        "en": "The police are there to ensure the safety of citizens",
        "hi": "पुलिस नागरिकों की सुरक्षा सुनिश्चित करने के लिए होती है।"
      }
    ]
  },
  {
    "id": 964,
    "word": "satisfied",
    "pos": "adj",
    "pronunciation": "सैटिसफ़ाइड",
    "meaningHi": "संतुष्ट",
    "meaningEn": "content",
    "examples": [
      {
        "en": "Are you satisfied with the coaching?",
        "hi": "क्ा तुम कोचिंग से संतुष्ट हो?"
      }
    ]
  },
  {
    "id": 965,
    "word": "saving",
    "pos": "n",
    "pronunciation": "सेविंग",
    "meaningHi": "बचत 2 जमापूँजी",
    "meaningEn": "kept money",
    "examples": [
      {
        "en": "Saving is a good habit",
        "hi": "बचत एक अच्छी आदत है।"
      },
      {
        "en": "What are your sav- ings?",
        "hi": "तुम्ारी जमापूूँजी क्ा है?"
      }
    ]
  },
  {
    "id": 966,
    "word": "scale",
    "pos": "n",
    "pronunciation": "स्ेल",
    "meaningHi": "पैमाना 2 रूलर 3 तराजू, पलड़ा",
    "meaningEn": "range",
    "examples": [
      {
        "en": "large scale cheating at the exam",
        "hi": "परीक्षा में बड़े पैमाने पर नकल"
      },
      {
        "en": "The teacher beat the student with a scale",
        "hi": "शिक्षक ने विद्यार्थीी की स्ेल से पिटाई की।"
      }
    ]
  },
  {
    "id": 967,
    "word": "scare",
    "pos": "n / v",
    "pronunciation": "स्ेअर",
    "meaningHi": "डर, भय | डरा देना",
    "meaningEn": "to frighten",
    "examples": [
      {
        "en": "scare of wild animals",
        "hi": "जंगली जानवरों का भय"
      },
      {
        "en": "Loud sounds scare my doggy",
        "hi": "मेरे कुत्ते को ऊँची आवाजें डरा देती हैं।"
      }
    ]
  },
  {
    "id": 968,
    "word": "scared",
    "pos": "adj",
    "pronunciation": "स्ेअड",
    "meaningHi": "भयभीत",
    "meaningEn": "afraid",
    "examples": []
  },
  {
    "id": 969,
    "word": "scene",
    "pos": "n",
    "pronunciation": "सीन",
    "meaningHi": "दृश्य",
    "meaningEn": "a view",
    "examples": [
      {
        "en": "what a scene!",
        "hi": "क्ा दृश्य है!"
      }
    ]
  },
  {
    "id": 970,
    "word": "schedule",
    "pos": "n / v",
    "pronunciation": "शेड्ूल",
    "meaningHi": "समय-सहित कार्य-योजना | किसी बात की समय-सारणी तय करना Did you ? - क्ा अपने परिवार से मशविरा करके तुमने अपनी यात्रा की समय-सारणी तय की?",
    "meaningEn": "timetable",
    "examples": []
  },
  {
    "id": 971,
    "word": "scheme",
    "pos": "n",
    "pronunciation": "स्ीम",
    "meaningHi": "योजना खास कर सरकारी योजना या प्रणाली",
    "meaningEn": "plan",
    "examples": [
      {
        "en": "The government has started a new scheme for blind students",
        "hi": "सरकार ने नेत्रहीन विद्ार्थियों के लिए एक नई योजना शुरू की है।"
      }
    ]
  },
  {
    "id": 972,
    "word": "score",
    "pos": "n / v",
    "pronunciation": "स्ोर",
    "meaningHi": "खिलाड़ी आदि के प्राप्त अंक का लेखा | 1 खेल में स्ोर करना 2 परीक्षा में अंक लाना 1",
    "meaningEn": "points",
    "examples": [
      {
        "en": "What is the score?",
        "hi": "स्ोर क्ा है?"
      },
      {
        "en": "Virat Kohli scored the highest runs",
        "hi": "विराट कोहली ने सबसे अधिक रन बनाए।"
      }
    ]
  },
  {
    "id": 973,
    "word": "second",
    "pos": "det adv",
    "pronunciation": "सेकण्ड",
    "meaningHi": "n v 1 क्रम में दूसरा 2 मिनट का साठवाँ भाग",
    "meaningEn": "after first",
    "examples": [
      {
        "en": "We sat in the second row",
        "hi": "हम दूसरी पंक्ति में बैठे"
      },
      {
        "en": "Please wait for a few seconds",
        "hi": "कृपया कुछ क्षणों के लिए प्रतीक्षा करें।"
      }
    ]
  },
  {
    "id": 974,
    "word": "sentence",
    "pos": "n",
    "pronunciation": "सेन्टन्स",
    "meaningHi": "वाक्य",
    "meaningEn": "words; punishment",
    "examples": [
      {
        "en": "A sentence is made of several words",
        "hi": "एक वाक्य कई शब्दोंों से बनता है।"
      }
    ]
  },
  {
    "id": 975,
    "word": "separate",
    "pos": "adj / v",
    "pronunciation": "सेपरट",
    "meaningHi": "पृथक, अलग | अलग हो जाना",
    "meaningEn": "to divide",
    "examples": [
      {
        "en": "Pakistan and Bangladesh are now two separate countries",
        "hi": "पाकिस्ान और बांग्ादेश अब दो अलग देश हैं।"
      },
      {
        "en": "The two brothers have separated",
        "hi": "दोनों भाई अलग हो गए हैं।"
      }
    ]
  },
  {
    "id": 976,
    "word": "seriously",
    "pos": "adv",
    "pronunciation": "गंभीर रूप से घायल",
    "meaningHi": "सिअरिअस््लि गंभीर रूप से",
    "meaningEn": "earnestly",
    "examples": []
  },
  {
    "id": 977,
    "word": "settle",
    "pos": "v",
    "pronunciation": "सेट्ल",
    "meaningHi": "बहस या विवाद को सुलझा देना",
    "meaningEn": "to resolve",
    "examples": [
      {
        "en": "settle a dispute - एक विवाद को सुलझाना 2 कहीं बस जाना (settle abroad",
        "hi": "विदेश में बस जाना"
      }
    ]
  },
  {
    "id": 978,
    "word": "shade",
    "pos": "n",
    "pronunciation": "शेड",
    "meaningHi": "साया, छायादार क्षेत्र 2 रंग का एक रूप 176 177 अंंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ",
    "meaningEn": "partial dark",
    "examples": [
      {
        "en": "Pink is a shade of red",
        "hi": "पिंक रंग लाल रंग का एक रूप है।"
      }
    ]
  },
  {
    "id": 979,
    "word": "shadow",
    "pos": "n",
    "pronunciation": "शैडो",
    "meaningHi": "छाया, परछाई",
    "meaningEn": "dark image",
    "examples": [
      {
        "en": "He stood in the shadow of a tree",
        "hi": "वह एक पेड़ की छाया में खड़ा हुआ।"
      }
    ]
  },
  {
    "id": 980,
    "word": "shake",
    "pos": "v",
    "pronunciation": "शेक",
    "meaningHi": "हिलना 2 हिलाना शैल भविष्यत काल की सहायक क्रिया",
    "meaningEn": "to tremble",
    "examples": [
      {
        "en": "The tree was shaking",
        "hi": "पेड़ हिल रहा था।"
      },
      {
        "en": "He shook his head",
        "hi": "उसने अपना सर हिलाया।"
      }
    ]
  },
  {
    "id": 981,
    "word": "shock",
    "pos": "n / v",
    "pronunciation": "शॉक",
    "meaningHi": "आघात, सदमा",
    "meaningEn": "sudden upset",
    "examples": [
      {
        "en": "His rude behaviour shocked me",
        "hi": "उसके रूखे व्यवहार से मुझे सदमा लगा।"
      }
    ]
  },
  {
    "id": 982,
    "word": "shoot",
    "pos": "v",
    "pronunciation": "शूट",
    "meaningHi": "गोली मारना 2 फोटो या विडियो खींचना",
    "meaningEn": "to fire",
    "examples": [
      {
        "en": "The criminal was shot",
        "hi": "अपराधी को गोली मारी गई"
      },
      {
        "en": "The movie was shot in London",
        "hi": "फिल्म की शूटिंग लंदन में हुई।"
      }
    ]
  },
  {
    "id": 983,
    "word": "shout",
    "pos": "n / v",
    "pronunciation": "शाउट",
    "meaningHi": "चिल्ाहट | चिल्ाना, बहुत जोर से बोलना",
    "meaningEn": "to yell",
    "examples": [
      {
        "en": "Ci- vilised people rarely shout",
        "hi": "सभ्य लोग विरले ही चिल्ा कर बोलते हैं।"
      }
    ]
  },
  {
    "id": 984,
    "word": "sight",
    "pos": "n",
    "pronunciation": "साइट",
    "meaningHi": "दृष्टि 2 दृश्य",
    "meaningEn": "vision",
    "examples": [
      {
        "en": "test of eye sight",
        "hi": "दृष्टि की जाँच"
      },
      {
        "en": "a beautiful sight",
        "hi": "एक सुंदर दृश्य"
      }
    ]
  },
  {
    "id": 985,
    "word": "similar",
    "pos": "adj",
    "pronunciation": "सिमिलर",
    "meaningHi": "मिलता-जुलता",
    "meaningEn": "alike",
    "examples": [
      {
        "en": "a similar face",
        "hi": "एक मिलता जुलता चेहरा"
      }
    ]
  },
  {
    "id": 986,
    "word": "sky",
    "pos": "n",
    "pronunciation": "स्ाई",
    "meaningHi": "आकाश",
    "meaningEn": "atmosphere",
    "examples": []
  },
  {
    "id": 987,
    "word": "slide",
    "pos": "v",
    "pronunciation": "स्ाइड",
    "meaningHi": "फिसलना, खिसकना",
    "meaningEn": "to glide",
    "examples": []
  },
  {
    "id": 988,
    "word": "slowly",
    "pos": "adv",
    "pronunciation": "स्ोलि",
    "meaningHi": "धीरे-धीरे",
    "meaningEn": "not fast",
    "examples": []
  },
  {
    "id": 989,
    "word": "smart",
    "pos": "adj",
    "pronunciation": "स्माट",
    "meaningHi": "तेजतर्रार 2 आकर्षक",
    "meaningEn": "clever",
    "examples": []
  },
  {
    "id": 990,
    "word": "smoke",
    "pos": "n / v",
    "pronunciation": "स्मोक",
    "meaningHi": "धुँआ | सिगरेट पीना",
    "meaningEn": "fire gas",
    "examples": [
      {
        "en": "Smoking may cause cancer",
        "hi": "सिगरेट पीने से कैंसर हो सकता है।"
      }
    ]
  },
  {
    "id": 991,
    "word": "social",
    "pos": "adj",
    "pronunciation": "सोशल",
    "meaningHi": "सामाजिक",
    "meaningEn": "of society",
    "examples": [
      {
        "en": "a social worker",
        "hi": "एक सामाजिक कार्यकर्ता"
      }
    ]
  },
  {
    "id": 992,
    "word": "somebody",
    "pos": "pron",
    "pronunciation": "सम्बडि",
    "meaningHi": "कोई व्यक्ति",
    "meaningEn": "someone",
    "examples": [
      {
        "en": "Somebody came",
        "hi": "कोई आया"
      }
    ]
  },
  {
    "id": 993,
    "word": "somehow",
    "pos": "adv",
    "pronunciation": "सम्ाउ",
    "meaningHi": "किसी तरह से",
    "meaningEn": "in some way",
    "examples": [
      {
        "en": "Somehow I came",
        "hi": "किसी तरह मैं आया"
      }
    ]
  },
  {
    "id": 994,
    "word": "someone",
    "pos": "pron",
    "pronunciation": "सम्वन",
    "meaningHi": "कोई व्यक्ति",
    "meaningEn": "a person",
    "examples": [
      {
        "en": "Someone came",
        "hi": "कोई आया"
      }
    ]
  },
  {
    "id": 995,
    "word": "something",
    "pos": "pron",
    "pronunciation": "सम्थंग",
    "meaningHi": "कुछ",
    "meaningEn": "a thing",
    "examples": [
      {
        "en": "Something is wrong",
        "hi": "कुछ गड़बड़ है।"
      }
    ]
  },
  {
    "id": 996,
    "word": "somewhat",
    "pos": "adv",
    "pronunciation": "सम्वॉट",
    "meaningHi": "कुछ-कुछ, किसी हद तक",
    "meaningEn": "a bit",
    "examples": [
      {
        "en": "some- what hesitant",
        "hi": "कुछ-कुछ हिचकिचाता हुआ"
      }
    ]
  },
  {
    "id": 997,
    "word": "somewhere",
    "pos": "adv",
    "pronunciation": "सम्ेअर",
    "meaningHi": "कहीं",
    "meaningEn": "some place",
    "examples": [
      {
        "en": "He has gone somewhere",
        "hi": "वह कहीं गया है।"
      }
    ]
  },
  {
    "id": 998,
    "word": "special",
    "pos": "adj",
    "pronunciation": "स्ेशल",
    "meaningHi": "विशिष्ट, खास",
    "meaningEn": "unique",
    "examples": [
      {
        "en": "special guests",
        "hi": "खास मेहमान"
      }
    ]
  },
  {
    "id": 999,
    "word": "speech",
    "pos": "n",
    "pronunciation": "स्पीच",
    "meaningHi": "भाषण",
    "meaningEn": "speaking",
    "examples": [
      {
        "en": "a great speech",
        "hi": "एक महान भाषण"
      }
    ]
  },
  {
    "id": 1000,
    "word": "spend",
    "pos": "v",
    "pronunciation": "स्पेन्ड",
    "meaningHi": "खर्च करना",
    "meaningEn": "to use",
    "examples": [
      {
        "en": "spend your energy on good things",
        "hi": "अपनी ऊर्जा अच्छी चीजों पर खर्च करो"
      }
    ]
  },
  {
    "id": 1001,
    "word": "spread",
    "pos": "v",
    "pronunciation": "स्प्रेड",
    "meaningHi": "फैलाना",
    "meaningEn": "to extend",
    "examples": [
      {
        "en": "Spread peace, not hatred",
        "hi": "शांति फैलाओ, नफरत नहीं।"
      }
    ]
  },
  {
    "id": 1002,
    "word": "spring",
    "pos": "n / v",
    "pronunciation": "स्प्ंग",
    "meaningHi": "वसंत ऋतु 186 187 अंंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ SQ n एस क्यू स्पिरिचुअल कोशंट आध्ात्मिक लब्धि आध्ात्मिक उपल- ब्धि कितनी हुई है, यह जानने का",
    "meaningEn": "season; to jump",
    "examples": [
      {
        "en": "He sprang to his feet",
        "hi": "वह उछल कर अपने पैरों पर खड़ा हो गया।"
      }
    ]
  },
  {
    "id": 1003,
    "word": "stare",
    "pos": "v",
    "pronunciation": "स्ेअर",
    "meaningHi": "देखते रहना, घूरना",
    "meaningEn": "to gaze",
    "examples": []
  },
  {
    "id": 1004,
    "word": "statement",
    "pos": "n",
    "pronunciation": "स्ेट्मन्ट",
    "meaningHi": "कथन, बयान",
    "meaningEn": "declaration",
    "examples": [
      {
        "en": "statement of the victim",
        "hi": "पीड़ित का बयान"
      }
    ]
  },
  {
    "id": 1005,
    "word": "stick",
    "pos": "n / v",
    "pronunciation": "स्टिक",
    "meaningHi": "छड़ी, लकड़ी का छोटा डंडा | 1 चिपकना 2 चिपकाना",
    "meaningEn": "",
    "examples": [
      {
        "en": "This stamp does not stick properly",
        "hi": "यह टिकट ठीक से चिपकती नहीं।"
      }
    ]
  },
  {
    "id": 1006,
    "word": "storm",
    "pos": "n",
    "pronunciation": "स्ोम",
    "meaningHi": "आँधी, तूफान",
    "meaningEn": "bad weather",
    "examples": []
  },
  {
    "id": 1007,
    "word": "stranger",
    "pos": "n",
    "pronunciation": "स्ट्रेनजर",
    "meaningHi": "अजनबी जिससे कभी कोई जान-पहचान नहीं हुई हो",
    "meaningEn": "unknown person",
    "examples": []
  },
  {
    "id": 1008,
    "word": "stretch",
    "pos": "v",
    "pronunciation": "स्ट्ेच",
    "meaningHi": "खींच कर लंबा करना",
    "meaningEn": "to extend",
    "examples": [
      {
        "en": "Elastic can be stretched",
        "hi": "इलास्टिक को खींच कर लंबा किया जा सकता है।"
      }
    ]
  },
  {
    "id": 1009,
    "word": "strike",
    "pos": "n / v",
    "pronunciation": "स्ट्ाइक",
    "meaningHi": "हड़ताल 2 हमला | 1 मारना 2 दिमाग में कोई बात आना 3 हड़ताल करना 4 हटाना 1",
    "meaningEn": "to hit",
    "examples": [
      {
        "en": "workers' strike",
        "hi": "मजदूरों की हड़ताल"
      },
      {
        "en": "an air strike",
        "hi": "हवाई हमला"
      }
    ]
  },
  {
    "id": 1010,
    "word": "study",
    "pos": "n / v",
    "pronunciation": "स्टडि",
    "meaningHi": "अध्यन, पढ़ाई 2 अध्यन का कमरा | अध्यन करना",
    "meaningEn": "to learn",
    "examples": [
      {
        "en": "study history",
        "hi": "इतिहास पढ़ना"
      }
    ]
  },
  {
    "id": 1011,
    "word": "stupid",
    "pos": "adj",
    "pronunciation": "स्ट्ूपिड",
    "meaningHi": "नासमझ",
    "meaningEn": "foolish",
    "examples": []
  },
  {
    "id": 1012,
    "word": "substance",
    "pos": "n",
    "pronunciation": "सब्सटन्स",
    "meaningHi": "पदार्थ, वस्तु 2 सत्य",
    "meaningEn": "material",
    "examples": [
      {
        "en": "What substance is this?",
        "hi": "यह कौन-सा पदार्थ है?"
      },
      {
        "en": "There is no substance to these rumours",
        "hi": "इन अफवाहों में कोई सच्चाई नहीं है।"
      }
    ]
  },
  {
    "id": 1013,
    "word": "sudden",
    "pos": "adj",
    "pronunciation": "सड्न",
    "meaningHi": "अचानक होने वाला",
    "meaningEn": "unexpected",
    "examples": [
      {
        "en": "sudden death",
        "hi": "अचानक मृत्ु"
      }
    ]
  },
  {
    "id": 1014,
    "word": "suddenly",
    "pos": "adv",
    "pronunciation": "सडन्लि",
    "meaningHi": "अचानक",
    "meaningEn": "abruptly",
    "examples": [
      {
        "en": "She suddenly started crying",
        "hi": "उसने अचानक रोना शुरू कर दिया।"
      }
    ]
  },
  {
    "id": 1015,
    "word": "summer",
    "pos": "n",
    "pronunciation": "समर",
    "meaningHi": "ग्ीष्म ऋतु, गरमी का मौसम",
    "meaningEn": "warm season",
    "examples": []
  },
  {
    "id": 1016,
    "word": "supply",
    "pos": "n / v",
    "pronunciation": "सप्ाइ",
    "meaningHi": "आपूर्ति | आपूर्ति करना, प्रदान करना",
    "meaningEn": "to provide",
    "examples": [
      {
        "en": "जैसे, water supply",
        "hi": "जल की आपूूर्ति"
      },
      {
        "en": "Who supplies vegetables here?",
        "hi": "यहाँ सब््जियों की कौन आपूूर्ति करता है?"
      }
    ]
  },
  {
    "id": 1017,
    "word": "surprise",
    "pos": "n / v",
    "pronunciation": "सप्ाइज़",
    "meaningHi": "आश्चर्य, ताज्जुब | किसी को आश्चर्यचकित करना",
    "meaningEn": "unexpected",
    "examples": [
      {
        "en": "She surprised everybody by scoring the highest marks",
        "hi": "सबसे अधिक नंबर ला कर उसने सभी को आश्चर्यचकित कर दिया।"
      }
    ]
  },
  {
    "id": 1018,
    "word": "swallow",
    "pos": "v",
    "pronunciation": "स्ॉलो",
    "meaningHi": "निगलना",
    "meaningEn": "to ingest",
    "examples": [
      {
        "en": "Swallow the pill",
        "hi": "दवा की गोली को निगल लो।"
      }
    ]
  },
  {
    "id": 1019,
    "word": "sweep",
    "pos": "v",
    "pronunciation": "स्ीप",
    "meaningHi": "झाड़ू या ब्रश से फ़र्श साफ करना",
    "meaningEn": "to clean",
    "examples": [
      {
        "en": "sweep the floor",
        "hi": "फर्श साफ करना"
      }
    ]
  },
  {
    "id": 1020,
    "word": "swimming",
    "pos": "n",
    "pronunciation": "स्विमिंग",
    "meaningHi": "तैरना",
    "meaningEn": "water sport",
    "examples": [
      {
        "en": "Swimming is the best exercise",
        "hi": "तैरना सबसे अच्ा व्ायाम है।"
      }
    ]
  },
  {
    "id": 1021,
    "word": "swing",
    "pos": "n / v",
    "pronunciation": "स्विंंग",
    "meaningHi": "झूला | झूलना, झुलाना",
    "meaningEn": "to sway",
    "examples": [
      {
        "en": "There are no swings in my school",
        "hi": "मेरे स्कूल में झूले नहीं हैं।"
      },
      {
        "en": "his mood keeps swinging from joy to sadness",
        "hi": "उसका मिजाज आनंद से उदासी की ओर झूलता रहता है।"
      }
    ]
  },
  {
    "id": 1022,
    "word": "switch",
    "pos": "n",
    "pronunciation": "स्विच",
    "meaningHi": "बिजली का स्विच",
    "meaningEn": "to change",
    "examples": []
  },
  {
    "id": 1023,
    "word": "system",
    "pos": "n",
    "pronunciation": "सिस्टम",
    "meaningHi": "तंत्र, व्यवस्ा 194 195 T अंंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ",
    "meaningEn": "organized set",
    "examples": [
      {
        "en": "The system of schooling needs a change",
        "hi": "स्कूल की व्यवस्था में परिवर्तन की जरूरत है।"
      }
    ]
  },
  {
    "id": 1024,
    "word": "target",
    "pos": "n",
    "pronunciation": "टागिट",
    "meaningHi": "लक्ष्य, निशाना",
    "meaningEn": "goal",
    "examples": []
  },
  {
    "id": 1025,
    "word": "taste",
    "pos": "n / v",
    "pronunciation": "टेस्ट",
    "meaningHi": "स्ाद 2 अभिरुचि, पसंद 2",
    "meaningEn": "flavour sense",
    "examples": [
      {
        "en": "Honey tastes well",
        "hi": "मधु में अच्ा स्ाद होता है।"
      },
      {
        "en": "Let me taste the food",
        "hi": "मुझे खाने को चखने दो।"
      }
    ]
  },
  {
    "id": 1026,
    "word": "terrible",
    "pos": "adj",
    "pronunciation": "टेरब्ल",
    "meaningHi": "भयानक",
    "meaningEn": "awful",
    "examples": [
      {
        "en": "a terrible creature",
        "hi": "एक भयानक जीव"
      }
    ]
  },
  {
    "id": 1027,
    "word": "thick",
    "pos": "adj",
    "pronunciation": "थिक",
    "meaningHi": "मोटा 2 गाढ़ा",
    "meaningEn": "dense",
    "examples": [
      {
        "en": "a thick wall",
        "hi": "मोटी दीवार"
      },
      {
        "en": "a thick soup",
        "hi": "गाढ़ा सूूप"
      }
    ]
  },
  {
    "id": 1028,
    "word": "thirsty",
    "pos": "adj",
    "pronunciation": "थस्टि",
    "meaningHi": "प्ासा",
    "meaningEn": "needing water",
    "examples": [
      {
        "en": "a thirsty crow",
        "hi": "एक प्ासा कउआ"
      }
    ]
  },
  {
    "id": 1029,
    "word": "threaten",
    "pos": "v",
    "pronunciation": "थ्ेट्न",
    "meaningHi": "धमकी देना थ्ू 1 के माध्यम से, के द्ारा 2 आर-पार 3 आरंभ से अंत तक 1",
    "meaningEn": "to warn",
    "examples": [
      {
        "en": "Who is threatening you?",
        "hi": "तुम्ें कौन धमकी दे रहा है?"
      },
      {
        "en": "The thief entered through the window",
        "hi": "चोर खिड़की के माध्यम से आया।"
      }
    ]
  },
  {
    "id": 1030,
    "word": "ticket",
    "pos": "n",
    "pronunciation": "टिकिट",
    "meaningHi": "टिकट",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1031,
    "word": "tie",
    "pos": "n / v",
    "pronunciation": "टाइ",
    "meaningHi": "टाई नेकटाई जो गले में बाँधी जाती है | बाँधना 200 201 अंंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1032,
    "word": "tight",
    "pos": "adj adv",
    "pronunciation": "टाइट",
    "meaningHi": "कसा हुआ ढीला का उलटा",
    "meaningEn": "not loose",
    "examples": [
      {
        "en": "tight shoes - कसे हुए जूूते, जिन्हेंें पहन कर चलने में दिक्कत हो सकती है; tight schedule",
        "hi": "कसा हुआ कार्यक्रम"
      }
    ]
  },
  {
    "id": 1033,
    "word": "tip",
    "pos": "n",
    "pronunciation": "टिप",
    "meaningHi": "सिरा, ऊपर का नुकीला हिस्ा 2 रेस्तराँ आदि में बैरे को दी जाने वाली बख्ीश 3 छोटी-छोटी सीख",
    "meaningEn": "end; advice",
    "examples": [
      {
        "en": "tip of the pencil",
        "hi": "पेंसिल का नुकीला हिस्ा"
      },
      {
        "en": "tips for success in interviews",
        "hi": "साक्षात्ारों में सफल होने के लिए टिप्स"
      }
    ]
  },
  {
    "id": 1034,
    "word": "tired",
    "pos": "adj",
    "pronunciation": "टायड",
    "meaningHi": "थका हुआ",
    "meaningEn": "weary",
    "examples": []
  },
  {
    "id": 1035,
    "word": "today",
    "pos": "n adv",
    "pronunciation": "टुडे",
    "meaningHi": "आज",
    "meaningEn": "this day",
    "examples": [
      {
        "en": "Enjoy today, but save for tomorrow",
        "hi": "आज आनंद मनाओ, मगर कल के लिए बचाओ।"
      }
    ]
  },
  {
    "id": 1036,
    "word": "tongue",
    "pos": "n",
    "pronunciation": "टंग",
    "meaningHi": "जीभ",
    "meaningEn": "organ of taste",
    "examples": []
  },
  {
    "id": 1037,
    "word": "tonight",
    "pos": "n",
    "pronunciation": "टुनाइट",
    "meaningHi": "आज रात",
    "meaningEn": "this night",
    "examples": []
  },
  {
    "id": 1038,
    "word": "top",
    "pos": "n / adj / v",
    "pronunciation": "टॉप",
    "meaningHi": "चोटी, शिखर | शीर्षस्थ, सर्वोपरि | 1 प्रथम आना 2 भोजन की किसी चीज के ऊपर कुछ और लगाना",
    "meaningEn": "highest",
    "examples": [
      {
        "en": "hill top",
        "hi": "पहाड़ी की चोटी"
      },
      {
        "en": "top priority - सर्वोच्च प्राथमि- कता; top position",
        "hi": "सर्वोच्च पद"
      }
    ]
  },
  {
    "id": 1039,
    "word": "tough",
    "pos": "adj",
    "pronunciation": "टफ़",
    "meaningHi": "सख्त 2 कठिन",
    "meaningEn": "strong",
    "examples": [
      {
        "en": "a tough officer",
        "hi": "एक सख्त अधिकारी"
      },
      {
        "en": "a tough question",
        "hi": "एक कठिन प्रश्न"
      }
    ]
  },
  {
    "id": 1040,
    "word": "track",
    "pos": "n / v",
    "pronunciation": "ट्रैक",
    "meaningHi": "चलते रहने से बना रास्ता | पता लगाना, पीछा करना",
    "meaningEn": "path",
    "examples": [
      {
        "en": "mountain tracks",
        "hi": "पहाड़ी पगडंडियाँ"
      },
      {
        "en": "The police are trying to track the criminals",
        "hi": "पुलिस अपराधियों का पता लगाने की कोशिश कर रही है।"
      }
    ]
  },
  {
    "id": 1041,
    "word": "trade",
    "pos": "n / v",
    "pronunciation": "ट्रेड",
    "meaningHi": "व्यापार 202 203 अंंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ | व्यापार करना",
    "meaningEn": "commerce",
    "examples": [
      {
        "en": "silk trade",
        "hi": "रेशम का व्ापार"
      },
      {
        "en": "He trades in medicines",
        "hi": "वह दवा का व्ापार करता है।"
      }
    ]
  },
  {
    "id": 1042,
    "word": "traffic",
    "pos": "n",
    "pronunciation": "ट्ैफ़िक",
    "meaningHi": "यातायात",
    "meaningEn": "road vehicles",
    "examples": [
      {
        "en": "heavy traffic",
        "hi": "अत्यधिक यातायात"
      }
    ]
  },
  {
    "id": 1043,
    "word": "tragedy",
    "pos": "n",
    "pronunciation": "ट्ैजडि",
    "meaningHi": "त्ासदी, अत्ंत दुखद घटना",
    "meaningEn": "a very sad event",
    "examples": [
      {
        "en": "The Latur earthquake was a big tragedy",
        "hi": "लातूूर का भूूकंप एक बड़ी त्रासदी थी।"
      }
    ]
  },
  {
    "id": 1044,
    "word": "train",
    "pos": "n / v",
    "pronunciation": "ट्रेन",
    "meaningHi": "ट्रेन, रेल | प्रशिक्षण देना",
    "meaningEn": "to teach; vehicle",
    "examples": [
      {
        "en": "Elephants can be trained even to paint",
        "hi": "हाथियों को पेंटिंग करने के लिए भी प्रशिक्षित किया जा सकता है।"
      }
    ]
  },
  {
    "id": 1045,
    "word": "treat",
    "pos": "n / v",
    "pronunciation": "ट्रीट",
    "meaningHi": "दावत | व्यवहार-विशेष करना",
    "meaningEn": "to handle",
    "examples": [
      {
        "en": "as birthday treat",
        "hi": "जन्मदिन की दावत"
      },
      {
        "en": "Let us treat women with respect",
        "hi": "हम स्त्रियों के साथ आदरपूर्ण व्यवहार करें!"
      }
    ]
  },
  {
    "id": 1046,
    "word": "treatment",
    "pos": "n",
    "pronunciation": "ट्ीटमन्ट",
    "meaningHi": "इलाज",
    "meaningEn": "care",
    "examples": [
      {
        "en": "He is under treatment for tuberculosis",
        "hi": "वह यक्षमा के लिए इलाज में है।"
      }
    ]
  },
  {
    "id": 1047,
    "word": "trial",
    "pos": "n",
    "pronunciation": "ट्ायल",
    "meaningHi": "परीक्षण, आजमाइश 2 मुकदमा, मुकदमे की सुनवाई",
    "meaningEn": "test",
    "examples": [
      {
        "en": "trial run of a car",
        "hi": "नई कार खरीदने के पहले जब उसे आजमाइश के लिए चला कर देखते हैं तो उसे ट्ायल-रन कहते हैं।"
      },
      {
        "en": "He is facing a trial",
        "hi": "वह एक मुकदमा झेल रहा है।"
      }
    ]
  },
  {
    "id": 1048,
    "word": "trick",
    "pos": "n",
    "pronunciation": "ट्रिक",
    "meaningHi": "करतब, करामात, हाथ की सफाई 2 तरकीब, दाँवपेंच 3 शरारत",
    "meaningEn": "a cunning act",
    "examples": [
      {
        "en": "a magician's tricks",
        "hi": "एक जादूगर के करतब"
      },
      {
        "en": "business tricks",
        "hi": "व्ापार करने के दाँवपेंच"
      }
    ]
  },
  {
    "id": 1049,
    "word": "twist",
    "pos": "n / v",
    "pronunciation": "ट्विस्ट",
    "meaningHi": "मरोड़ने की क्रिया, मोड़, घुमाव | मरोड़ने की क्रिया",
    "meaningEn": "to turn",
    "examples": [
      {
        "en": "a new twist in the story",
        "hi": "कहानी में एक नया मोड़"
      },
      {
        "en": "twist somebody's arm",
        "hi": "किसी की बाँह मरोड़ना"
      }
    ]
  },
  {
    "id": 1050,
    "word": "typical",
    "pos": "adj",
    "pronunciation": "टिपिक्ल",
    "meaningHi": "प्रातिनिधिक, आदर्शभूत, ठेठ 206 207 U अंंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ",
    "meaningEn": "characteristic",
    "examples": [
      {
        "en": "a typical Indian fellow - एक ठेठ भारतीय जन; typical American accent",
        "hi": "एक आदर्शभूूत अमेरिकन उच्चारण"
      },
      {
        "en": "Indian fellow",
        "hi": "एक ठेठ भारतीय जन; typical American accent - एक आदर्शभूूत अमेरिकन उच्चारण) 206 207 U अंंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ"
      }
    ]
  },
  {
    "id": 1051,
    "word": "unable",
    "pos": "adj",
    "pronunciation": "अनेबल",
    "meaningHi": "{कुछ करने में} असमर्थ, अक्षम अनसर्टन अनिश्चित",
    "meaningEn": "not capable",
    "examples": [
      {
        "en": "unable to eat more",
        "hi": "और अधिक खाने में असमर्थ"
      },
      {
        "en": "The programme is uncertain",
        "hi": "कार्यक्रम अनिश्चित है।"
      }
    ]
  },
  {
    "id": 1052,
    "word": "uniform",
    "pos": "n",
    "pronunciation": "यूनिफ़ोम",
    "meaningHi": "वर्दीी, गणवेश यूनिफ़ोम एक जैसा, जो बदलता नहीं ? - क्ा निजी और सरकारी शिक्षकों के लिए एक-जैसा वेतन होना चाहिए?",
    "meaningEn": "standard clothing",
    "examples": []
  },
  {
    "id": 1053,
    "word": "union",
    "pos": "n",
    "pronunciation": "यूनिअन",
    "meaningHi": "मिलन 2 एक हो जाना 3 संघ",
    "meaningEn": "joining together",
    "examples": [
      {
        "en": "reunion of the schoolmates",
        "hi": "स्कूल के साथियों का पुनः मिलन"
      },
      {
        "en": "union with God",
        "hi": "ईश्वर के साथ एक हो जाना"
      }
    ]
  },
  {
    "id": 1054,
    "word": "unite",
    "pos": "v",
    "pronunciation": "युनाइट",
    "meaningHi": "एक होना 2 जोड़ना",
    "meaningEn": "to combine",
    "examples": [
      {
        "en": "My parents have reunited",
        "hi": "मेरे मातापिता फिर से एक हो गए हैं।"
      },
      {
        "en": "uniting two broken parts",
        "hi": "दो टूूटे टुकड़ों को जोड़ना"
      }
    ]
  },
  {
    "id": 1055,
    "word": "united",
    "pos": "adj",
    "pronunciation": "युनाइटिड",
    "meaningHi": "एकसाथ, संयुक्त",
    "meaningEn": "joined",
    "examples": [
      {
        "en": "United you win, divided you lose",
        "hi": "एकजुट जीतते हैं, विभाजित हारते हैं।"
      }
    ]
  },
  {
    "id": 1056,
    "word": "unlock",
    "pos": "v",
    "pronunciation": "अनलॉक",
    "meaningHi": "ताला खोलना अनलकी अभागा, बदकिस्मत un- अन्प्ेज़्न्ट अप्रिय",
    "meaningEn": "to open",
    "examples": [
      {
        "en": "She unlocked the door",
        "hi": "उसने दरवाजे का ताला खोल दिया।"
      },
      {
        "en": "unpleasant feelings",
        "hi": "अप्रिय अहसास"
      }
    ]
  },
  {
    "id": 1057,
    "word": "upper",
    "pos": "adj",
    "pronunciation": "अपर",
    "meaningHi": "ऊपरी",
    "meaningEn": "higher",
    "examples": [
      {
        "en": "upper berth",
        "hi": "ऊपरी बर्थ"
      }
    ]
  },
  {
    "id": 1058,
    "word": "upset",
    "pos": "v / adj",
    "pronunciation": "अप्ेट",
    "meaningHi": "परेशान कर देना | चिंतित और परेशान अप्ेटिंग परेशान कर देने वाला अप्स्ेअज़ ऊपरी मंजिल पर / का अपवड्ज़ ऊपर की ओर अपवड ऊपर की ओर वाला",
    "meaningEn": "disturbed",
    "examples": [
      {
        "en": "He upset me - उसने मुझे परेशान कर दिया 2 अस्तव्यस्त, उलटपलट कर देना (He upset my plans",
        "hi": "उसने मेरी योजना अस्तव्यस्त कर दी।"
      },
      {
        "en": "He looks upset",
        "hi": "वह परेशान दिखता है।"
      }
    ]
  },
  {
    "id": 1059,
    "word": "urban",
    "pos": "adj",
    "pronunciation": "अर्बन",
    "meaningHi": "शहरी",
    "meaningEn": "of a city",
    "examples": [
      {
        "en": "urban culture",
        "hi": "शहरी संस्कृति"
      }
    ]
  },
  {
    "id": 1060,
    "word": "urgent",
    "pos": "adj",
    "pronunciation": "अजन्ट",
    "meaningHi": "तुरंत जरूरी",
    "meaningEn": "needing action now",
    "examples": [
      {
        "en": "urgent work",
        "hi": "तुरंत जरूरी काम"
      }
    ]
  },
  {
    "id": 1061,
    "word": "useful",
    "pos": "adj",
    "pronunciation": "यूस्फ़्ल",
    "meaningHi": "उपयोगी",
    "meaningEn": "helpful",
    "examples": [
      {
        "en": "a useful man",
        "hi": "एक उपयोगी आदमी"
      }
    ]
  },
  {
    "id": 1062,
    "word": "useless",
    "pos": "adj",
    "pronunciation": "यूस्लस",
    "meaningHi": "बेकार",
    "meaningEn": "pointless",
    "examples": [
      {
        "en": "a useless fellow",
        "hi": "एक बेकार का आदमी"
      }
    ]
  },
  {
    "id": 1063,
    "word": "usual",
    "pos": "adj",
    "pronunciation": "यूशज़ुअल",
    "meaningHi": "सामान्य, हमेशा-जैसा",
    "meaningEn": "normal",
    "examples": [
      {
        "en": "his usual dress",
        "hi": "उसका हमेशा-जैसा वस्त्र"
      }
    ]
  },
  {
    "id": 1064,
    "word": "usually",
    "pos": "adv",
    "pronunciation": "यूशज़ुअलि",
    "meaningHi": "सामान्यत:, अकसर अन्-यूशज़ुअलि असाधारण तरीके से V अंंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ",
    "meaningEn": "normally",
    "examples": [
      {
        "en": "The doctor usually sits from 6 p.m. to 8 p.m.",
        "hi": "डॉक्टर सामान्यतः शाम 6 से 8 बैठते हैं।"
      },
      {
        "en": "It is unusually hot today",
        "hi": "आज असाधारण रूप से गरम है।"
      }
    ]
  },
  {
    "id": 1065,
    "word": "valid",
    "pos": "adj",
    "pronunciation": "वैलिड",
    "meaningHi": "सही, वैध, मान्य",
    "meaningEn": "legitimate",
    "examples": [
      {
        "en": "a valid passport",
        "hi": "एक मान्य पासपोर्ट"
      }
    ]
  },
  {
    "id": 1066,
    "word": "valley",
    "pos": "n",
    "pronunciation": "वैलि",
    "meaningHi": "घाटी दो पहाड़ियों या पहाड़ों के बीच की नीची जमीन जहाँ से सामान्यतः कोई नदी प्रवाहित होती है। वैल्ुअबल बहुमूल्य, कीमती",
    "meaningEn": "low ground",
    "examples": [
      {
        "en": "Indus Valley Civilization",
        "hi": "सिन्ु घाटी की सभ्यता"
      },
      {
        "en": "Life is valuable, do not waste it",
        "hi": "जीवन कीमती है, इसे व्यर्थ न करें।"
      }
    ]
  },
  {
    "id": 1067,
    "word": "variation",
    "pos": "n",
    "pronunciation": "वेअरिएशन",
    "meaningHi": "भिन्नता, परिवर्तन की मात्ा",
    "meaningEn": "change",
    "examples": [
      {
        "en": "The uniform must be the same for all, and no varia",
        "hi": "tions are allowed. वर्दीी सभी के लिए एकजैसी होनी चाहिए और इसमें किसी भिन्नता की अनुमति नहीं है।"
      }
    ]
  },
  {
    "id": 1068,
    "word": "varied",
    "pos": "adj",
    "pronunciation": "वेअरिड",
    "meaningHi": "अलग-अलग तरह के",
    "meaningEn": "diverse",
    "examples": [
      {
        "en": "varied opinion",
        "hi": "अलग-अलग तरह की राय"
      }
    ]
  },
  {
    "id": 1069,
    "word": "variety",
    "pos": "n",
    "pronunciation": "वराइअटि",
    "meaningHi": "विविधता",
    "meaningEn": "range",
    "examples": [
      {
        "en": "A variety of clothes are available in this shop",
        "hi": "इस दूकान में वस्त्रोंस्त्रों की विविधता उपलब्ध है।"
      }
    ]
  },
  {
    "id": 1070,
    "word": "various",
    "pos": "adj",
    "pronunciation": "वेअरिअस",
    "meaningHi": "विभिन्न, विविध",
    "meaningEn": "different",
    "examples": [
      {
        "en": "There are various paths that lead to God",
        "hi": "विभिन्न रास्े हैं जो ईश्वर की ओर ले जाते हैं।"
      }
    ]
  },
  {
    "id": 1071,
    "word": "vehicle",
    "pos": "n",
    "pronunciation": "वीअकल",
    "meaningHi": "वाहन, गाड़ी",
    "meaningEn": "transport",
    "examples": []
  },
  {
    "id": 1072,
    "word": "victim",
    "pos": "n",
    "pronunciation": "विक्टिम",
    "meaningHi": "पीड़ित, शिकार",
    "meaningEn": "sufferer",
    "examples": [
      {
        "en": "crime victim",
        "hi": "अपराध का शिकार"
      }
    ]
  },
  {
    "id": 1073,
    "word": "visible",
    "pos": "adj",
    "pronunciation": "विजि़ब्ल",
    "meaningHi": "दृष्टिगोचर, जो दिखाई पड़ता हो",
    "meaningEn": "can be seen",
    "examples": [
      {
        "en": "The visible side of the moon",
        "hi": "चाँद का वह हिस्ा जो दिखाई पड़ता है।"
      }
    ]
  },
  {
    "id": 1074,
    "word": "vital",
    "pos": "adj",
    "pronunciation": "वाइट्ल",
    "meaningHi": "अतिमहत्त्वपूर्ण",
    "meaningEn": "essential",
    "examples": [
      {
        "en": "oxygen is vital for life",
        "hi": "ऑक्सीजन जीवन के लिए अतिमहत्त्वपूर्ण है।"
      }
    ]
  },
  {
    "id": 1075,
    "word": "volume",
    "pos": "n",
    "pronunciation": "वॉल्ूम",
    "meaningHi": "आयतन, मात्ा 2 कई खंडों वाली पुस्तक का कोई एक खंड",
    "meaningEn": "amount; loudness",
    "examples": [
      {
        "en": "increasing volume of traffic",
        "hi": "ट्रैफिक की बढ़ती हुई मात्रा"
      },
      {
        "en": "the first volume of Bhagavat Mahapuran",
        "hi": "भागवत महापुराण का पहला खंड"
      }
    ]
  },
  {
    "id": 1076,
    "word": "wander",
    "pos": "v",
    "pronunciation": "वॉन्डर",
    "meaningHi": "बिना उद्ेश्य घूमना",
    "meaningEn": "to roam",
    "examples": [
      {
        "en": "That poet was often seen wandering the streets",
        "hi": "उस कवि को अकसर सडकों पर निरुद्देश्य घूूमते देखा जाता था।"
      }
    ]
  },
  {
    "id": 1077,
    "word": "waste",
    "pos": "n / v",
    "pronunciation": "वेस्ट",
    "meaningHi": "कचड़ा, बचाखुचा बिना काम का पदार्थ W 94 अंंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ | बर्बाद करना",
    "meaningEn": "to squander",
    "examples": [
      {
        "en": "waste bin",
        "hi": "कचड़ा रखने का पात्र"
      },
      {
        "en": "Let us not waste water",
        "hi": "हम पानी बर्बाद न करें।"
      }
    ]
  },
  {
    "id": 1078,
    "word": "weather",
    "pos": "n",
    "pronunciation": "वेदर",
    "meaningHi": "मौसम",
    "meaningEn": "climate",
    "examples": []
  },
  {
    "id": 1079,
    "word": "weight",
    "pos": "n",
    "pronunciation": "वेट",
    "meaningHi": "वजन, भार वेल्कम स्ागत करना वेल्कम स्ागतयोग्य, हर्षप्रद ! वेल्कम आपका स्ागत!",
    "meaningEn": "heaviness",
    "examples": [
      {
        "en": "He welcomed the guests",
        "hi": "उसने मेहमानों का स्ागत किया।"
      },
      {
        "en": "a welcome step",
        "hi": "एक स्ागतयोग्य कदम"
      }
    ]
  },
  {
    "id": 1080,
    "word": "wet",
    "pos": "adj",
    "pronunciation": "वेट",
    "meaningHi": "गीला",
    "meaningEn": "moist",
    "examples": [
      {
        "en": "wet clothes",
        "hi": "गीले कपड़े"
      }
    ]
  },
  {
    "id": 1081,
    "word": "wheel",
    "pos": "n",
    "pronunciation": "वील",
    "meaningHi": "पहिया",
    "meaningEn": "circular object",
    "examples": [
      {
        "en": "wheels of a car",
        "hi": "एक कार के पहिए"
      }
    ]
  },
  {
    "id": 1082,
    "word": "whisper",
    "pos": "n / v",
    "pronunciation": "विस्पर",
    "meaningHi": "फुसफुसाहट कान में धीरे-से कुछ बोलने की क्रिया | फुसफुसाना बहुत धीमे से बोलना",
    "meaningEn": "soft speech",
    "examples": [
      {
        "en": "whisper campaign",
        "hi": "फुसफुसाहट- अभियान"
      },
      {
        "en": "He whispered something into his ears",
        "hi": "उसने उसके कानों में कुछ फुसफुसाया।"
      }
    ]
  },
  {
    "id": 1083,
    "word": "winner",
    "pos": "n",
    "pronunciation": "विनर",
    "meaningHi": "विजेता",
    "meaningEn": "victor",
    "examples": []
  },
  {
    "id": 1084,
    "word": "winter",
    "pos": "n",
    "pronunciation": "विंंटर",
    "meaningHi": "जाड़े का मौसम, शरद ऋतु",
    "meaningEn": "cold season",
    "examples": []
  },
  {
    "id": 1085,
    "word": "yellow",
    "pos": "n",
    "pronunciation": "येलो",
    "meaningHi": "पीला yes येस हाँ",
    "meaningEn": "bright colour",
    "examples": []
  },
  {
    "id": 1086,
    "word": "zebra",
    "pos": "n",
    "pronunciation": "ज़ेब्ा",
    "meaningHi": "जेबरा ज़िरो शून्य",
    "meaningEn": "striped animal",
    "examples": [
      {
        "en": "Zebra is found in Africa",
        "hi": "जेबरा अफ्ीका में पाया जाता है।"
      },
      {
        "en": "Zero was invented in India",
        "hi": "शून्य की संख्या की इजाद भारत में हुई।"
      }
    ]
  },
  {
    "id": 1087,
    "word": "zoo",
    "pos": "n",
    "pronunciation": "ज़ू",
    "meaningHi": "चिड़ियाघर",
    "meaningEn": "animal park",
    "examples": []
  },
  {
    "id": 1088,
    "word": "alert",
    "pos": "adj",
    "pronunciation": "अलर्ट",
    "meaningHi": "सतर्क",
    "meaningEn": "watchful",
    "examples": [
      {
        "en": "Always remain alert",
        "hi": "सदा सतर्क रहो।"
      }
    ]
  },
  {
    "id": 1089,
    "word": "abort",
    "pos": "v",
    "pronunciation": "अबॉट",
    "meaningHi": "गर्भ में स्थित बच्े के भ्ूण को गिरा कर नष्ट कर देना 2 किसी योजना या कार्य को शुरू होने या पूरा होने से पहले समाप्त कर देना।",
    "meaningEn": "to end prematurely",
    "examples": [
      {
        "en": "The plan has been aborted",
        "hi": "योजना को बीच में ही त्ाग दिया गया है।"
      }
    ]
  },
  {
    "id": 1090,
    "word": "abroad",
    "pos": "adv",
    "pronunciation": "अब्ॉड",
    "meaningHi": "विदेश में, देश के बाहर ऐब्सलूट्ली पूरी तरह, बिलकुल",
    "meaningEn": "in a foreign country",
    "examples": [
      {
        "en": "My son lives abroad",
        "hi": "मेरा बेटा विदेश में रहता है।"
      },
      {
        "en": "absolutely right",
        "hi": "बिलकुल सही"
      }
    ]
  },
  {
    "id": 1091,
    "word": "account",
    "pos": "n",
    "pronunciation": "अकाउंट",
    "meaningHi": "हिसाब-किताब अकाउंट हिसाब-किताब देना, जवाब देना",
    "meaningEn": "bank record",
    "examples": [
      {
        "en": "Everyone has to account for all his deeds",
        "hi": "हरएक को अपने सभी कर्मों का हिसाब-किताब देना पड़ता है।"
      }
    ]
  },
  {
    "id": 1092,
    "word": "actor",
    "pos": "n",
    "pronunciation": "ऐक्टर",
    "meaningHi": "अभिनेता",
    "meaningEn": "performer",
    "examples": [
      {
        "en": "a great actor",
        "hi": "एक महान अभिनेता"
      }
    ]
  },
  {
    "id": 1093,
    "word": "actress",
    "pos": "n",
    "pronunciation": "ऐक्ट्ेस",
    "meaningHi": "अभिनेत्ी",
    "meaningEn": "female performer",
    "examples": [
      {
        "en": "a great actress",
        "hi": "एक महान अभिनेत्री"
      }
    ]
  },
  {
    "id": 1094,
    "word": "addition",
    "pos": "n",
    "pronunciation": "ऐडिशन",
    "meaningHi": "जोड़ in to इन ऐडिशन टु इसके अलावा, इसके साथ-साथ",
    "meaningEn": "something added; the process of adding",
    "examples": [
      {
        "en": "Addition is easier than multipli- cation",
        "hi": "जोड़ गुणा करने से सरल होता है।"
      },
      {
        "en": "Your food needs minerals in addition to vitamins",
        "hi": "विटामिन के साथ-साथ तुम्ारे भोजन में खनिज तत्त्व भी चाहिए।"
      }
    ]
  },
  {
    "id": 1095,
    "word": "adjective",
    "pos": "n",
    "pronunciation": "ऐजक्टिव",
    "meaningHi": "विशेषण 10 11 अंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ",
    "meaningEn": "describing word",
    "examples": [
      {
        "en": "'Good' is an adjective",
        "hi": "'अच्ा' एक विशेषण है।"
      }
    ]
  },
  {
    "id": 1096,
    "word": "adult",
    "pos": "adj n",
    "pronunciation": "ऐडल्ट",
    "meaningHi": "बालिग ; जो अब बच्ा नहीं रहा, बड़ा हो गया हो अड्वान्स्ट 1 उन्नत 2 आगे बढ़ा हुआ",
    "meaningEn": "grown person",
    "examples": [
      {
        "en": "adult films",
        "hi": "बालिग लोगों के लिए बनायी गई फिल्ें"
      },
      {
        "en": "He is an adult",
        "hi": "वह बालिग है।"
      }
    ]
  },
  {
    "id": 1097,
    "word": "aerobics",
    "pos": "n",
    "pronunciation": "एअरोबिक्स",
    "meaningHi": "संगीत की लय पर किया जाने वाला शारीरिक व्यायाम",
    "meaningEn": "fitness exercise",
    "examples": [
      {
        "en": "I am practising aerobics",
        "hi": "मैं एअरोबिक्स का अभ्ास कर रही हँ।"
      }
    ]
  },
  {
    "id": 1098,
    "word": "afford",
    "pos": "v",
    "pronunciation": "अफ़ोड",
    "meaningHi": "खर्च वहन करना, सामर्थ्य रखना",
    "meaningEn": "to have means",
    "examples": [
      {
        "en": "We can't afford a car",
        "hi": "हम कार का खर्च वहन नहीं कर सकते।"
      }
    ]
  },
  {
    "id": 1099,
    "word": "against",
    "pos": "prep",
    "pronunciation": "अगेन्स्ट",
    "meaningHi": "विरुद्ध, खिलाफ 2 का सहारा ले कर 1",
    "meaningEn": "in opposition to",
    "examples": [
      {
        "en": "Everybody in the class was against him",
        "hi": "क्ास में सभी उसके खिलाफ थे।"
      },
      {
        "en": "He stood leaning against the wall",
        "hi": "वह दीवार के सहारे खड़ा था।"
      }
    ]
  },
  {
    "id": 1100,
    "word": "ago",
    "pos": "adv",
    "pronunciation": "",
    "meaningHi": "पहले",
    "meaningEn": "in the past; before now",
    "examples": [
      {
        "en": "A few moments ago he was here",
        "hi": "कुछ क्षण पहले वह यहीं था।"
      }
    ]
  },
  {
    "id": 1101,
    "word": "ahead",
    "pos": "adv",
    "pronunciation": "अहेड",
    "meaningHi": "आगे",
    "meaningEn": "in front; forward",
    "examples": [
      {
        "en": "The US is ahead of us in science and technology",
        "hi": "अमेरिका हमसे विज्ान और प्रौद्योगिकी में आगे हैं।"
      }
    ]
  },
  {
    "id": 1102,
    "word": "amuse",
    "pos": "v",
    "pronunciation": "अम्ूज़",
    "meaningHi": "व्यंग्यपूर्ण तरीके से आनंदित होना, हँसाना, मन बहलाना",
    "meaningEn": "to entertain",
    "examples": [
      {
        "en": "His jokes amused us",
        "hi": "उसके चुटकुलों ने हमें आनंदित किया।"
      }
    ]
  },
  {
    "id": 1103,
    "word": "amused",
    "pos": "adj",
    "pronunciation": "अम्ूज़्ड",
    "meaningHi": "व्यंग्यपूर्ण तरीके से आनंदित 2 हँसी आने-जैसा",
    "meaningEn": "entertained",
    "examples": [
      {
        "en": "I was amused to see his deep red dress",
        "hi": "उसके गहरे लाल वस्त्र को देख कर मैं हँसी आने-जैसा हुआ।"
      }
    ]
  },
  {
    "id": 1104,
    "word": "amusing",
    "pos": "adj",
    "pronunciation": "अम्ूज़िंग",
    "meaningHi": "मनोरंजक, उपहासास्पद an a ऐन, अन एक यह वाउअल साउंड्स के पहले a के बदले आता है",
    "meaningEn": "funny",
    "examples": [
      {
        "en": "amusing manners",
        "hi": "उपहासास्पद तौर तरीके"
      },
      {
        "en": "an animal",
        "hi": "एक जानवर"
      }
    ]
  },
  {
    "id": 1105,
    "word": "analyse",
    "pos": "v",
    "pronunciation": "ऐनलाइज़",
    "meaningHi": "विश्ेषण करना; किसी वस्तु या विचार के अंगों को अलग-अलग कर समझना 14 15 अंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ",
    "meaningEn": "to examine",
    "examples": [
      {
        "en": "An- layse the causes of war",
        "hi": "युद्ध के कारणों का विश्ेषण करो।"
      }
    ]
  },
  {
    "id": 1106,
    "word": "analysis",
    "pos": "n",
    "pronunciation": "अनैलसिस",
    "meaningHi": "विश्ेषण",
    "meaningEn": "examination",
    "examples": [
      {
        "en": "analysis of the reasons of price rise",
        "hi": "दाम बढ़ने के कारणों का विश्ेषण"
      }
    ]
  },
  {
    "id": 1107,
    "word": "April",
    "pos": "n",
    "pronunciation": "एप्रिल",
    "meaningHi": "अप्रैल का महीना",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1108,
    "word": "Arab",
    "pos": "n adj",
    "pronunciation": "ऐरब",
    "meaningHi": "अरब देश का वासी",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1109,
    "word": "athletics",
    "pos": "n",
    "pronunciation": "ऐथ्लेटिक्स",
    "meaningHi": "दौड़ने-कूदने आदि का खेल",
    "meaningEn": "sports and physical exercises",
    "examples": []
  },
  {
    "id": 1110,
    "word": "ATM card",
    "pos": "n",
    "pronunciation": "काड",
    "meaningHi": "ए.टी.एम. एटीएम मशीन से पैसे की निकासी के लिए बना प्ास्टिक कार्ड",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1111,
    "word": "attach",
    "pos": "v",
    "pronunciation": "अटैच",
    "meaningHi": "जोड़ना",
    "meaningEn": "to fasten",
    "examples": [
      {
        "en": "The wagon was attached to the engine",
        "hi": "डब्ा इंजिन में जोड़ा गया।"
      }
    ]
  },
  {
    "id": 1112,
    "word": "audit",
    "pos": "n v",
    "pronunciation": "अॉडिट",
    "meaningHi": "लेखा-परीक्षण आमदनी और खर्च तथा हानि- -लाभ का हिसाब-किताब; लेखा-परीक्षण करना",
    "meaningEn": "an official examination",
    "examples": []
  },
  {
    "id": 1113,
    "word": "August",
    "pos": "n",
    "pronunciation": "ओगस्ट",
    "meaningHi": "अगस्त का महीना अंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1114,
    "word": "autumn",
    "pos": "n",
    "pronunciation": "ओटम",
    "meaningHi": "पतझड़ का मौसम",
    "meaningEn": "fall",
    "examples": []
  },
  {
    "id": 1115,
    "word": "backward",
    "pos": "adv",
    "pronunciation": "बैकवड",
    "meaningHi": "पीछे की ओर 2 पिछड़ा हुआ बैकवड्ज़ पीछे {की ओर}",
    "meaningEn": "reversed",
    "examples": [
      {
        "en": "She bent backward",
        "hi": "वह पीछे की ओर झुकी।"
      },
      {
        "en": "backward classes",
        "hi": "पिछड़े हुए वर्ग"
      }
    ]
  },
  {
    "id": 1116,
    "word": "barber",
    "pos": "n",
    "pronunciation": "बार्बर",
    "meaningHi": "नाई या हज्जाम",
    "meaningEn": "hair cutter",
    "examples": []
  },
  {
    "id": 1117,
    "word": "bat",
    "pos": "n",
    "pronunciation": "बैट",
    "meaningHi": ". चमगादड़ 2 क्रिकेट या बेसबॉल का बल्ा",
    "meaningEn": "hitting stick; flying mammal",
    "examples": []
  },
  {
    "id": 1118,
    "word": "battery",
    "pos": "n",
    "pronunciation": "बैटरी",
    "meaningHi": "बैटरी बिजली को जमा करने और बिजली की धारा उत्पन्न करने वाला यंत्र।",
    "meaningEn": "energy device",
    "examples": []
  },
  {
    "id": 1119,
    "word": "birthday",
    "pos": "n",
    "pronunciation": "बर्थडे",
    "meaningHi": "जन्मदिन",
    "meaningEn": "birth anniversary",
    "examples": []
  },
  {
    "id": 1120,
    "word": "blink",
    "pos": "v",
    "pronunciation": "ब्लंक",
    "meaningHi": "आँखें झपकाना या मीचना",
    "meaningEn": "quick eye closure",
    "examples": []
  },
  {
    "id": 1121,
    "word": "boredom",
    "pos": "n",
    "pronunciation": "बोरडम",
    "meaningHi": "बोरियत, ऊब",
    "meaningEn": "state of being bored",
    "examples": [
      {
        "en": "I turn to painting to overcome boredom",
        "hi": "मैं बोरियत हटाने के लिए पेंटिंग करता हँ।"
      }
    ]
  },
  {
    "id": 1122,
    "word": "brown",
    "pos": "adj",
    "pronunciation": "ब्ाउन",
    "meaningHi": "भूरा रंग का",
    "meaningEn": "a dark warm color",
    "examples": []
  },
  {
    "id": 1123,
    "word": "budget",
    "pos": "n",
    "pronunciation": "बजिट",
    "meaningHi": "आने वाले खर्च का अनुमानित लेखा-जोखा",
    "meaningEn": "financial plan",
    "examples": [
      {
        "en": "The government presents its annual budget in the parliament",
        "hi": "सरकार अपना वार्षिक बजट संसद में प्रस्ुत करती है।"
      }
    ]
  },
  {
    "id": 1124,
    "word": "buffalo",
    "pos": "n",
    "pronunciation": "बफ़लो",
    "meaningHi": "भैंस 30 31 अंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ",
    "meaningEn": "large animal",
    "examples": []
  },
  {
    "id": 1125,
    "word": "bunch",
    "pos": "n",
    "pronunciation": "बंच",
    "meaningHi": "समूह, गुच्ा",
    "meaningEn": "a cluster",
    "examples": [
      {
        "en": "a bunch of flowers",
        "hi": "फूूलों का एक गुच्ा"
      }
    ]
  },
  {
    "id": 1126,
    "word": "burnt",
    "pos": "adj",
    "pronunciation": "बर्न्ट",
    "meaningHi": "जला हुआ",
    "meaningEn": "damaged by fire",
    "examples": [
      {
        "en": "burnt clothes",
        "hi": "जले हुए कपड़े"
      }
    ]
  },
  {
    "id": 1127,
    "word": "cabin",
    "pos": "n",
    "pronunciation": "कैबिन",
    "meaningHi": "छोटा कक्ष",
    "meaningEn": "small shelter",
    "examples": []
  },
  {
    "id": 1128,
    "word": "calculative",
    "pos": "adj",
    "pronunciation": "कैल्कुलटिव",
    "meaningHi": "अपने फायदे-नुकसान की गिनती करके हर काम करने वाला स्वार्थी व्यक्ति",
    "meaningEn": "self-interested",
    "examples": []
  },
  {
    "id": 1129,
    "word": "calories",
    "pos": "n",
    "pronunciation": "कैलरीस",
    "meaningHi": "भोजन से प्राप्त ऊर्जा की इकाई",
    "meaningEn": "energy units",
    "examples": [
      {
        "en": "Don't consume too many calories",
        "hi": "अधिक कैलरीस ग्रहण नहीं किया करो।"
      }
    ]
  },
  {
    "id": 1130,
    "word": "cancer",
    "pos": "n",
    "pronunciation": "कैंसर",
    "meaningHi": "कर्क रोग एक गंभीर बीमारी जिसमें शरीर के किसी भाग की कोशिकाओं की संख्ा असामान्य रूप से बढ़ने लगती है।",
    "meaningEn": "serious disease",
    "examples": []
  },
  {
    "id": 1131,
    "word": "capitalism",
    "pos": "n",
    "pronunciation": "कैपिटलिज़म",
    "meaningHi": "पूँजीवाद वह सिद्धांद्धांत जो यह मानता है कि बाजार की शक्तियों पर कोई सरकारी नियंत्रण नहीं होना चाहिए, व्यापार करने और व्यक्तिगत धन-संपत्ति अर्जित",
    "meaningEn": "economic system",
    "examples": []
  },
  {
    "id": 1132,
    "word": "cataract",
    "pos": "n",
    "pronunciation": "कैटरैक्ट",
    "meaningHi": "मोतियाबिंद आँखों की एक बीमारी जिसमें कम दिखने लगता है।",
    "meaningEn": "eye condition",
    "examples": []
  },
  {
    "id": 1133,
    "word": "centimetre",
    "pos": "n",
    "pronunciation": "सेन्टिमीटर",
    "meaningHi": "मीटर का सौवाँ भाग",
    "meaningEn": "unit of length",
    "examples": []
  },
  {
    "id": 1134,
    "word": "central",
    "pos": "adj",
    "pronunciation": "सेन्ट्रल",
    "meaningHi": "केंद्रीय 2 मुख्य",
    "meaningEn": "in the centre; main",
    "examples": [
      {
        "en": "the central government",
        "hi": "केंद्रीय सरकार"
      },
      {
        "en": "the central figure",
        "hi": "मुख्य व्यक्ति"
      }
    ]
  },
  {
    "id": 1135,
    "word": "cheek",
    "pos": "n",
    "pronunciation": "चीक",
    "meaningHi": "गाल 36 37 अंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ",
    "meaningEn": "the side of the face",
    "examples": []
  },
  {
    "id": 1136,
    "word": "cigarette",
    "pos": "n",
    "pronunciation": "सिगरेट",
    "meaningHi": "सिगरेट",
    "meaningEn": "a roll of tobacco for smoking",
    "examples": [
      {
        "en": "Cigarette may cause cancer",
        "hi": "सिगरेट कैंसर का कारण बन सकता है।"
      }
    ]
  },
  {
    "id": 1137,
    "word": "cinema",
    "pos": "n",
    "pronunciation": "सिनमा",
    "meaningHi": "सिनेमा",
    "meaningEn": "movie theatre",
    "examples": []
  },
  {
    "id": 1138,
    "word": "classic",
    "pos": "n / adj",
    "pronunciation": "क्ैसिक",
    "meaningHi": "अत्ंत बढ़िया या याद किया जाने-योग्य श्ेण्य ग्ंथ | 1 उत्कृष्ट 2 प्रातिनिधिक 1",
    "meaningEn": "of lasting quality; traditional",
    "examples": [
      {
        "en": "The Ramcharitmanas is a literary classic",
        "hi": "रामचरितमानस एक न भूूलने-योग्य साहित्यिक कृति है।"
      },
      {
        "en": "She prefers classic furniture designs",
        "hi": "वह उत्कृष्ट फर्नीचर डिज़ाइन पसंद करती है।"
      }
    ]
  },
  {
    "id": 1139,
    "word": "clearly",
    "pos": "adv",
    "pronunciation": "",
    "meaningHi": "क्लिअलि स्पष्ट रूप से, साफ तौर से",
    "meaningEn": "in a clear manner; obviously",
    "examples": [
      {
        "en": "clearly visible",
        "hi": "साफ तौर पर दिखने वाला"
      }
    ]
  },
  {
    "id": 1140,
    "word": "clerk",
    "pos": "n",
    "pronunciation": "क्ाक",
    "meaningHi": "लिपिक, क्लर्क",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1141,
    "word": "closed",
    "pos": "adj",
    "pronunciation": "क्ोज़्ड",
    "meaningHi": "बंद",
    "meaningEn": "not open; shut",
    "examples": [
      {
        "en": "a closed mind",
        "hi": "एक बंद दिमाग जिसमें नए विचार प्रवेश नहीं करते हों।"
      }
    ]
  },
  {
    "id": 1142,
    "word": "closely",
    "pos": "adv",
    "pronunciation": "देखना",
    "meaningHi": "क्ोज़्लि नजदीक से नजदीकी से",
    "meaningEn": "in a close manner; carefully",
    "examples": []
  },
  {
    "id": 1143,
    "word": "closet",
    "pos": "n",
    "pronunciation": "क्ोज़िट",
    "meaningHi": "कमरे में लगी बड़ी अलमारी",
    "meaningEn": "a small room for storing things",
    "examples": []
  },
  {
    "id": 1144,
    "word": "compete",
    "pos": "v",
    "pronunciation": "कम्ीट",
    "meaningHi": "प्रतियोगिता में भाग लेना, प्रतिस्पर्धा करना",
    "meaningEn": "to try to win against others",
    "examples": [
      {
        "en": "We are ready to compete with the best in the world",
        "hi": "दुनिया में जो सर्वश्ेष्ठ हैं हम उनसे प्रतिस्पर्धा करने को तैयार हैं।"
      }
    ]
  },
  {
    "id": 1145,
    "word": "completely",
    "pos": "adv",
    "pronunciation": "कम्प्ीट्लि",
    "meaningHi": "पूरी तरह All . सारी प्राचीन सभ्यताएं नष्ट कर दी गई ं, लेकिन भारतीय सभ्यता जीवित रही। कॉम्प्लिकेटिड उलझा हुआ, जटिल",
    "meaningEn": "totally; entirely",
    "examples": [
      {
        "en": "a complicated problem",
        "hi": "एक जटिल समस्ा।"
      }
    ]
  },
  {
    "id": 1146,
    "word": "computer",
    "pos": "n",
    "pronunciation": "कम्प्ूटर",
    "meaningHi": "कंप्यूटर",
    "meaningEn": "an electronic device for processing data",
    "examples": []
  },
  {
    "id": 1147,
    "word": "concerned",
    "pos": "adj",
    "pronunciation": "कन्सन्ड",
    "meaningHi": "संबंधित 2 चिंतित 1",
    "meaningEn": "worried; involved",
    "examples": [
      {
        "en": "The police often receive calls concerning lost pets",
        "hi": "पुलिस खोए हुए पालतूू जानवरों के विषय में अकसर फोन कौल प्राप्त करती रहती है।"
      },
      {
        "en": "Call the concerned person",
        "hi": "संबंधित व्यक्ति को बुलाओ।"
      }
    ]
  },
  {
    "id": 1148,
    "word": "confusing",
    "pos": "adj",
    "pronunciation": "कऩ््यूज़िंंग",
    "meaningHi": "उलझन में डालने वाला, दिमाग भ्रमित करने वाला",
    "meaningEn": "hard to understand",
    "examples": [
      {
        "en": "a confusing statement",
        "hi": "एक उलझन में डालने वाला बयान"
      }
    ]
  },
  {
    "id": 1149,
    "word": "consist of",
    "pos": "v",
    "pronunciation": "कन्सिस्ट अॉव",
    "meaningHi": "बना होना",
    "meaningEn": "",
    "examples": [
      {
        "en": "This class consists of only female students",
        "hi": "यह कक्षा केवल छात्राओं से बनी है।"
      }
    ]
  },
  {
    "id": 1150,
    "word": "consult",
    "pos": "v",
    "pronunciation": "कन्सल्ट",
    "meaningHi": "परामर्श या सलाह लेना",
    "meaningEn": "to seek advice",
    "examples": [
      {
        "en": "consult a heart-specialist",
        "hi": "एक ह्रदयरोग-विशेषज्ञ से सलाह लो।"
      }
    ]
  },
  {
    "id": 1151,
    "word": "container",
    "pos": "n",
    "pronunciation": "कन्ेनर",
    "meaningHi": "बड़ा बर्तन जिसमें कुछ रखा जा सके",
    "meaningEn": "a holder",
    "examples": []
  },
  {
    "id": 1152,
    "word": "content(s)",
    "pos": "n",
    "pronunciation": "कॉन्टेन्ट्स",
    "meaningHi": "भीतर या अंदर रखी वस्तु या वस्तुएँ 2 किसी किताब की विषयवस्तु",
    "meaningEn": "",
    "examples": [
      {
        "en": "What are the contents of this box?",
        "hi": "इस बक्से के भीतर क्ा वस्ुएं हैं?"
      },
      {
        "en": "This book has objectionable content",
        "hi": "इस पुस्तक में आपत्तिजनक विषयवस्ु है।"
      }
    ]
  },
  {
    "id": 1153,
    "word": "contractor",
    "pos": "n",
    "pronunciation": "कन्ट्रैक्टर",
    "meaningHi": "ठेकेदार",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1154,
    "word": "convincing",
    "pos": "adj",
    "pronunciation": "कन्विन्सिंंग",
    "meaningHi": "आश्वस्त करने वाला, यकीन दिलाने वाला कि कोई बात सही है",
    "meaningEn": "persuasive",
    "examples": [
      {
        "en": "He gave convincing arguments",
        "hi": "उसने यकीन दिलाने वाले तर्क दिए।"
      }
    ]
  },
  {
    "id": 1155,
    "word": "cope (with)",
    "pos": "v",
    "pronunciation": "कोप",
    "meaningHi": "कठिन स्थिति का सामना करना",
    "meaningEn": "",
    "examples": [
      {
        "en": "Learn to cope with pressure",
        "hi": "दबाव का सामना करना सीखो।"
      }
    ]
  },
  {
    "id": 1156,
    "word": "couple",
    "pos": "n",
    "pronunciation": "कप्ल",
    "meaningHi": "पति-पत्नी का जोड़ा 2 जोड़ा अंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ",
    "meaningEn": "a pair",
    "examples": [
      {
        "en": "a beautiful couple",
        "hi": "पति-पत्ी का एक सुंदर जोड़ा"
      },
      {
        "en": "a couple of pencils",
        "hi": "एक-जोड़ा पेंसिल, यानि दो पेंसिलें"
      }
    ]
  },
  {
    "id": 1157,
    "word": "crowded",
    "pos": "adj",
    "pronunciation": "क्ाउडिड",
    "meaningHi": "भीड़-भाड़ से भरा हुआ",
    "meaningEn": "full of people",
    "examples": [
      {
        "en": "a crowded market",
        "hi": "एक भीड़-भरा बाज़ार"
      }
    ]
  },
  {
    "id": 1158,
    "word": "currency",
    "pos": "n",
    "pronunciation": "करन्सि",
    "meaningHi": "मुद्रा",
    "meaningEn": "money",
    "examples": [
      {
        "en": "Dollar is the currency of the USA",
        "hi": "डॉलर अमेरिका की मुद्रा है।"
      }
    ]
  },
  {
    "id": 1159,
    "word": "cyber café",
    "pos": "n",
    "pronunciation": "साइबर कैफ़े",
    "meaningHi": "साइबर कैफ़े पैसे भुगतान कर कंप्यूटर के प्रयोग की सुविधा देने वाली दुकान 52 53 अंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1160,
    "word": "database",
    "pos": "n",
    "pronunciation": "डेटबेस",
    "meaningHi": "कंप्यूटर में संचित व्यवस्थित सूचना-सामग्ी",
    "meaningEn": "",
    "examples": [
      {
        "en": "a database of customers",
        "hi": "खरीदारों का डेटाबेस"
      }
    ]
  },
  {
    "id": 1161,
    "word": "definite",
    "pos": "adj",
    "pronunciation": "डेफ़िनट",
    "meaningHi": "निश्चित, सटीक, स्पष्ट",
    "meaningEn": "clear; certain",
    "examples": [
      {
        "en": "He gave no definite answer",
        "hi": "उसने कोई निश्चित जवाब नहीं दिया।"
      }
    ]
  },
  {
    "id": 1162,
    "word": "depend (on)",
    "pos": "v",
    "pronunciation": "डिपेन्ड",
    "meaningHi": "निर्भर होना",
    "meaningEn": "",
    "examples": [
      {
        "en": "I am still dependent on my parents",
        "hi": "मैं अभी भी अपने माता-पिता पर निर्भर हँ।"
      }
    ]
  },
  {
    "id": 1163,
    "word": "deposit",
    "pos": "v",
    "pronunciation": "डिपॉजिट",
    "meaningHi": "जमा करना",
    "meaningEn": "",
    "examples": [
      {
        "en": "I have deposited some money in your bank account",
        "hi": "मैंने तुम्ारे बैंक अकाउंट में कुछ पैसे जमा कर दिए हैं।"
      }
    ]
  },
  {
    "id": 1164,
    "word": "diabetes",
    "pos": "n",
    "pronunciation": "डाइअबीटीज़",
    "meaningHi": "मधुमेह चीनी की बीमारी",
    "meaningEn": "a disease affecting blood sugar",
    "examples": []
  },
  {
    "id": 1165,
    "word": "dictator",
    "pos": "n",
    "pronunciation": "डिक्टेटर",
    "meaningHi": "तानाशाह डिक्टेटरशिप तानाशाही, अधिनायकत्व",
    "meaningEn": "a ruler with total power",
    "examples": [
      {
        "en": "Hitler was a dictator",
        "hi": "हिटलर एक तानाशाह था।"
      },
      {
        "en": "There is no dictatorship in a democracy",
        "hi": "लोकतंत्र में तानाशाही नहीं चलती।"
      }
    ]
  },
  {
    "id": 1166,
    "word": "docile",
    "pos": "adj",
    "pronunciation": "डोसाइल",
    "meaningHi": "शांत और विनीत",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1167,
    "word": "download",
    "pos": "v",
    "pronunciation": "डाउनलोड",
    "meaningHi": "इंटरनेट से अपने कंप्यूटर में डेटा या फ़ाइल आदि उतार लेना",
    "meaningEn": "",
    "examples": [
      {
        "en": "He downloaded the movie from the Net",
        "hi": "उसने मूवी को इंटरनेट से डाउनलोड कर लिया।"
      }
    ]
  },
  {
    "id": 1168,
    "word": "dress sense",
    "pos": "n",
    "pronunciation": "ड्ेस्ेन्स",
    "meaningHi": "विभिन्न अवसरों के लिए वस्त्र चुनने और पहनने की समझ 62 63 अंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ",
    "meaningEn": "",
    "examples": [
      {
        "en": "Some men do not have a dress sense",
        "hi": "कुछ पुरुषों को ड्ेस-सेन्स नहीं होता।"
      }
    ]
  },
  {
    "id": 1169,
    "word": "driving",
    "pos": "n",
    "pronunciation": "ड्ाइविंग",
    "meaningHi": "गाड़ी चलाने की कला",
    "meaningEn": "",
    "examples": [
      {
        "en": "How much time it takes to learn driving?",
        "hi": "ड्ाइविंग सीखने में कितना समय लगता है?"
      }
    ]
  },
  {
    "id": 1170,
    "word": "elbow",
    "pos": "n",
    "pronunciation": "एल्ो",
    "meaningHi": "कोहनी",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1171,
    "word": "elegant",
    "pos": "adj",
    "pronunciation": "एलिगन्ट",
    "meaningHi": "सहजशिष्ट",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1172,
    "word": "elevator",
    "pos": "n",
    "pronunciation": "एलिवेटर",
    "meaningHi": "लिफ्ट, बिल्ड्डंग में ऊपर ले जाने का यंत्र",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1173,
    "word": "eloquent",
    "pos": "adj",
    "pronunciation": "एलक्वन्ट",
    "meaningHi": "सुवक्ता बिना हिचकिचाए और धाराप्रवाह बोलने वाला एल्सवेअर कहीं और, अन्यत्र",
    "meaningEn": "",
    "examples": [
      {
        "en": "an eloquent speech",
        "hi": "धाराप्रवाह भाषण"
      },
      {
        "en": "Let's sit elsewhere",
        "hi": "हम कहीं और बैठें।"
      }
    ]
  },
  {
    "id": 1174,
    "word": "emerge",
    "pos": "v",
    "pronunciation": "इमर्ज",
    "meaningHi": "कहीं से प्रकट होना या निकलना",
    "meaningEn": "",
    "examples": [
      {
        "en": "The sun emerged from the clouds",
        "hi": "बादलों के बीच से सूूरज निकला।"
      }
    ]
  },
  {
    "id": 1175,
    "word": "emphasise",
    "pos": "v",
    "pronunciation": "एम्फ़साइज़",
    "meaningHi": "किसी बात पर विशेष जोर देना",
    "meaningEn": "",
    "examples": [
      {
        "en": "He emphasised the need for honesty",
        "hi": "उनोंने ईमानदारी की जरूरत पर जोर दिया।"
      }
    ]
  },
  {
    "id": 1176,
    "word": "enjoyable",
    "pos": "adj",
    "pronunciation": "",
    "meaningHi": "इन्जोइअबल आनंददायक",
    "meaningEn": "giving pleasure",
    "examples": [
      {
        "en": "An enjoyable elephant ride",
        "hi": "हाथी की एक आनंददायी सवारी।"
      }
    ]
  },
  {
    "id": 1177,
    "word": "equivalent",
    "pos": "n",
    "pronunciation": "इक्विवलन्ट",
    "meaningHi": "समकक्ष, समवस्तु इक्विवलन्ट समान मूल्य का, समकक्ष अंंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ",
    "meaningEn": "equal",
    "examples": [
      {
        "en": "'Sari' has no equivalent word in English",
        "hi": "'साड़ी' का समकक्ष कोई शब्द अंगरेज़ी में नहीं है।"
      },
      {
        "en": "I had no dollars, but I gave him an equivalent amount in rupees",
        "hi": "मेरे पास डॉलर्स नहीं थे, मगर मैंने उसे एक समकक्ष मूूल्य रुपयों में अदा किया।"
      }
    ]
  },
  {
    "id": 1178,
    "word": "erratic",
    "pos": "adj",
    "pronunciation": "इरैटिक",
    "meaningHi": "मनमौजी",
    "meaningEn": "",
    "examples": [
      {
        "en": "erratic power supply",
        "hi": "बिजली की मनमौजी आपूूर्ति, यानि जब मर्जीी बिजली आई, जब मर्जीी चली गई।"
      }
    ]
  },
  {
    "id": 1179,
    "word": "exactly",
    "pos": "adv",
    "pronunciation": "इग्ै़क्ट्लि",
    "meaningHi": "यथावत, बिलकुल ठीक-ठीक वैसा ही अंंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ",
    "meaningEn": "precisely",
    "examples": [
      {
        "en": "The two sisters look exactly the same",
        "hi": "दोनों बहनें बिलकुल एक-जैसी लगती हैं।"
      }
    ]
  },
  {
    "id": 1180,
    "word": "exaggerate",
    "pos": "v",
    "pronunciation": "इग्ै़जरेट",
    "meaningHi": "बढ़ा-चढ़ा कर कहना",
    "meaningEn": "to overstate",
    "examples": [
      {
        "en": "Poets often exaggerate",
        "hi": "कवि अकसर बढ़ा-चढ़ा कर बातें करते हैं।"
      }
    ]
  },
  {
    "id": 1181,
    "word": "executive",
    "pos": "n",
    "pronunciation": "इगज़ेक्युटिव",
    "meaningHi": "कार्यकारी अधिकारी",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1182,
    "word": "exhibition",
    "pos": "n",
    "pronunciation": "एक्सिबिशन",
    "meaningHi": "प्रदर्शनी, नुमाइश",
    "meaningEn": "display",
    "examples": [
      {
        "en": "a book-exhibition",
        "hi": "किताबों की एक प्रदर्शनी"
      }
    ]
  },
  {
    "id": 1183,
    "word": "extrovert",
    "pos": "adj",
    "pronunciation": "एक्स्ट्रवर्ट",
    "meaningHi": "बहिमुर्खीी जो व्यक्ति अपने अंदर छिपा नहीं रहता बल्कि बाहर लोगों से खुल कर बोलता या मिलता-जुलता है",
    "meaningEn": "",
    "examples": [
      {
        "en": "Poets are generally introverts, but politicians have to be extroverts",
        "hi": "कवि सामान्यतः अंतर्मुख होते हैं, लेकिन राजनीतिज्ञोंों का बहिर्मुख होना आवश्यक है।"
      }
    ]
  },
  {
    "id": 1184,
    "word": "factory",
    "pos": "n",
    "pronunciation": "फै़क्ट्रि",
    "meaningHi": "कारखाना",
    "meaningEn": "a building for manufacturing",
    "examples": []
  },
  {
    "id": 1185,
    "word": "famous",
    "pos": "adj",
    "pronunciation": "फ़ेमस",
    "meaningHi": "विख्ात, प्रसिद्ध",
    "meaningEn": "well-known",
    "examples": [
      {
        "en": "a famous player",
        "hi": "एक प्रसिद्ध खिलाड़ी"
      }
    ]
  },
  {
    "id": 1186,
    "word": "fasten",
    "pos": "v",
    "pronunciation": "फ़ासन",
    "meaningHi": "बाँधना",
    "meaningEn": "",
    "examples": [
      {
        "en": "fasten the seat belt",
        "hi": "सीटबेल्ट बाँध लें"
      }
    ]
  },
  {
    "id": 1187,
    "word": "fat",
    "pos": "adj / n",
    "pronunciation": "फ़ैट",
    "meaningHi": "स्ूल, मोटा | चरबी",
    "meaningEn": "",
    "examples": [
      {
        "en": "a fat baby",
        "hi": "एक मोटा बच्चा"
      },
      {
        "en": "Should we consume less fat? क्ा हमें तेल",
        "hi": "चर्बीी कम खाना चाहिए?"
      }
    ]
  },
  {
    "id": 1188,
    "word": "fence",
    "pos": "n",
    "pronunciation": "फ़ेेन्स",
    "meaningHi": "चारदीवारी, लकड़ी या धातु का बना घेरा, बाड़",
    "meaningEn": "barrier",
    "examples": []
  },
  {
    "id": 1189,
    "word": "fetch",
    "pos": "v",
    "pronunciation": "फ़ेच",
    "meaningHi": "कहीं जाकर कुछ लाना",
    "meaningEn": "",
    "examples": [
      {
        "en": "Fetch some water from the well",
        "hi": "कुँए से थोड़ा पानी ले कर आओ।"
      }
    ]
  },
  {
    "id": 1190,
    "word": "fibre",
    "pos": "n",
    "pronunciation": "फ़ाइबर",
    "meaningHi": "रेशा",
    "meaningEn": "",
    "examples": [
      {
        "en": "cloth made from natural fibre",
        "hi": "प्राकृतिक रेशे से बना कपड़ा"
      }
    ]
  },
  {
    "id": 1191,
    "word": "figure",
    "pos": "n",
    "pronunciation": "फ़िगर",
    "meaningHi": "चित्र 2 संख्ा 3 शरीर की आकृति अंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ",
    "meaningEn": "a number; a shape; a person",
    "examples": [
      {
        "en": "draw a figure",
        "hi": "एक चित्र उकेरना"
      },
      {
        "en": "population figures",
        "hi": "जनसंख्या के आँकड़े"
      }
    ]
  },
  {
    "id": 1192,
    "word": "finally",
    "pos": "adv",
    "pronunciation": "फ़ाइन्लि",
    "meaningHi": "अंत में, अंततः, आखिरकार",
    "meaningEn": "at last",
    "examples": [
      {
        "en": "Finally he agreed",
        "hi": "अंततः वह मान गया।"
      }
    ]
  },
  {
    "id": 1193,
    "word": "flavour",
    "pos": "n  v",
    "pronunciation": "खाने का स्ाद और सुगंध",
    "meaningHi": "फ़लेवर सुगंध, खुशबू, स्ाद the",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1194,
    "word": "genius",
    "pos": "adj",
    "pronunciation": "जीनिअस",
    "meaningHi": "असाधारण रूप से मेधावी और सृजनशील, अति महान",
    "meaningEn": "exceptional intelligence",
    "examples": [
      {
        "en": "Einstein was a genious",
        "hi": "आइन्सटीन एक जीनिअस थे।"
      }
    ]
  },
  {
    "id": 1195,
    "word": "good bye",
    "pos": "n",
    "pronunciation": "गुड्बाइ",
    "meaningHi": "विदा! विदा लेते वक्त बोले जाने वाले शब्द गुड गावनन्स सुशासन, अच्ा शासन",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1196,
    "word": "grade",
    "pos": "n / v",
    "pronunciation": "ग्रेड",
    "meaningHi": "श्ेणी, वर्ग | वर्गीीकरण करना, श्ेणी निर्धारित करना ग्ैजुअलि क्रमशः, धीरे-धीरे एकाएक नहीं",
    "meaningEn": "level",
    "examples": [
      {
        "en": "a second-grade school",
        "hi": "द्वितीय श्ेणी का एक स्कूल"
      },
      {
        "en": "some schools grade children according to merit and divide them in different sections",
        "hi": "कुछ स्कूल बचों की प्रतिभा के आधार पर उनकी श्ेणी निर्धारित करते हैं, और उन्हेंें अलग-अलग सेक्शन में रखते हैं।"
      }
    ]
  },
  {
    "id": 1197,
    "word": "grand",
    "pos": "adj",
    "pronunciation": "ग्ैन्ड",
    "meaningHi": "शानदार",
    "meaningEn": "impressive",
    "examples": [
      {
        "en": "a grand programme",
        "hi": "एक शानदार कार्यक्रम"
      }
    ]
  },
  {
    "id": 1198,
    "word": "handle",
    "pos": "n / v",
    "pronunciation": "हैन्ड्ल",
    "meaningHi": "हत्ा | सँभालना",
    "meaningEn": "to manage",
    "examples": [
      {
        "en": "handle a situation",
        "hi": "एक परिस्थिति को सँभालना"
      }
    ]
  },
  {
    "id": 1199,
    "word": "herself",
    "pos": "pron",
    "pronunciation": "हसेलफ़",
    "meaningHi": "स्वयं स्त्री ने",
    "meaningEn": "",
    "examples": [
      {
        "en": "She had herself said that",
        "hi": "उसने खुद ही वह कहा था।"
      }
    ]
  },
  {
    "id": 1200,
    "word": "hesitancy",
    "pos": "n",
    "pronunciation": "हेज़िटन्सीन्सी",
    "meaningHi": "संकोच, हिचकिचाहट",
    "meaningEn": "",
    "examples": [
      {
        "en": "She shed her hesitancy and became vocal",
        "hi": "उसने अपनी हिचकिचाहट त्ाग दी और मुखर हो गई।"
      }
    ]
  },
  {
    "id": 1201,
    "word": "hygiene",
    "pos": "n",
    "pronunciation": "हाइजीन",
    "meaningHi": "स्वच्छता, स्ास्थ्यकारिता",
    "meaningEn": "",
    "examples": [
      {
        "en": "Hygiene in the kitchen is especially important",
        "hi": "रसोई में स्वच्छता खास तौर पर जरूरी है।"
      }
    ]
  },
  {
    "id": 1202,
    "word": "infection",
    "pos": "n",
    "pronunciation": "इनफ़ेक्शन",
    "meaningHi": "रोगसंचार, बीमारी लग जाना",
    "meaningEn": "disease",
    "examples": [
      {
        "en": "I've caught a viral infection",
        "hi": "मुझे एक वायरल इनफ़ेक्शन लग गया है।"
      }
    ]
  },
  {
    "id": 1203,
    "word": "inform",
    "pos": "v",
    "pronunciation": "इन्फ़ौम",
    "meaningHi": "सूचना देना, सूचित करना",
    "meaningEn": "to tell",
    "examples": [
      {
        "en": "Did you inform the police?",
        "hi": "क्ा तुमने पुलिस को खबर की?"
      }
    ]
  },
  {
    "id": 1204,
    "word": "injury",
    "pos": "n",
    "pronunciation": "इनजरि",
    "meaningHi": "शरीर या अंग पर लगी चोट",
    "meaningEn": "harm",
    "examples": [
      {
        "en": "got an injury while playing",
        "hi": "खेलने के दौरान चोट लग गई।"
      }
    ]
  },
  {
    "id": 1205,
    "word": "insist (on)",
    "pos": "v",
    "pronunciation": "इन्सिस्ट",
    "meaningHi": "आग्रह करना, हठ करना",
    "meaningEn": "",
    "examples": [
      {
        "en": "He insisted on sitting in the front row",
        "hi": "वह पहली पंक्ति में बैठने का हठ करता रहा।"
      }
    ]
  },
  {
    "id": 1206,
    "word": "institute",
    "pos": "n",
    "pronunciation": "इन्स्टिट्यूट",
    "meaningHi": "संस्ान, संस्ान का भवन",
    "meaningEn": "",
    "examples": [
      {
        "en": "a training institute",
        "hi": "एक प्रशिक्षण संस्थान"
      }
    ]
  },
  {
    "id": 1207,
    "word": "insurance",
    "pos": "n",
    "pronunciation": "इन्शौरन्स",
    "meaningHi": "बीमा",
    "meaningEn": "risk protection",
    "examples": [
      {
        "en": "health insurance",
        "hi": "स्ास्थ्य बीमा"
      }
    ]
  },
  {
    "id": 1208,
    "word": "Internet",
    "pos": "n",
    "pronunciation": "इन्टनेट",
    "meaningHi": "इन्टरनेट, अंतर्राष्ट्ीय कंप्यूटर प्रणाली",
    "meaningEn": "global network",
    "examples": []
  },
  {
    "id": 1209,
    "word": "introduce",
    "pos": "v",
    "pronunciation": "इन्ट्रड्ूस",
    "meaningHi": "से परिचय कराना 2 पहली बार प्रयोग में लाना 1",
    "meaningEn": "",
    "examples": [
      {
        "en": "I introduced him to a good lawyer",
        "hi": "मैंने उसका परिचय एक अच्े वकील से कराया।"
      },
      {
        "en": "Biometric attendance is being introduced in many offices",
        "hi": "अनेक कार्यालयों में बायोमेट्रिक उपस्थिति का नया प्रयोग शुरू किया जा रहा है।"
      }
    ]
  },
  {
    "id": 1210,
    "word": "introvert",
    "pos": "adj",
    "pronunciation": "इन्ट्रवट",
    "meaningHi": "अंतमुर्खीी व्यक्ति, जो अपने अंदर ही रहे, खुल कर लोगों से घुले-मिले नहीं",
    "meaningEn": "",
    "examples": [
      {
        "en": "Poets are often in- troverts",
        "hi": "कवि अकसर अंतर्मुखी हुआ करते हैं।"
      }
    ]
  },
  {
    "id": 1211,
    "word": "itself",
    "pos": "pron",
    "pronunciation": "इट्सेल्फ़",
    "meaningHi": "स्वयं, खुद ही 104 105 अंंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ जेलसी ईर्ष्या किसी दूसरे की अच्ाई या प्रगति देख कर मन में होने वाली जलन",
    "meaningEn": "it and nothing else",
    "examples": [
      {
        "en": "The washing machine switches itself off when washing is complete",
        "hi": "धुलाई पूूरी होने पर वाशिंग मशीन अपने आप को ऑफ कर लेती है।"
      },
      {
        "en": "Jealousy is a bad emotion",
        "hi": "ईर्ष्या एक बुरी भावना है।"
      }
    ]
  },
  {
    "id": 1212,
    "word": "keyboard",
    "pos": "n",
    "pronunciation": "कीीबोड",
    "meaningHi": "कुंजीपटल",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1213,
    "word": "laptop",
    "pos": "n",
    "pronunciation": "लैपटॉप",
    "meaningHi": "गोद में रखने वाला छोटा कंप्यूटर",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1214,
    "word": "length",
    "pos": "n",
    "pronunciation": "लेंगथ",
    "meaningHi": "लंबाई",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1215,
    "word": "lessen",
    "pos": "v",
    "pronunciation": "लेसन",
    "meaningHi": "कम करना",
    "meaningEn": "",
    "examples": [
      {
        "en": "Exercise lessens the risk of heart disease",
        "hi": "व्ायाम दिल की बीमारी के जोखिम को कम कर देता है।"
      }
    ]
  },
  {
    "id": 1216,
    "word": "letter",
    "pos": "n",
    "pronunciation": "लेटर",
    "meaningHi": "पत्र, चिट्ी 2 अक्षर जैसे, a, b, c आदि",
    "meaningEn": "a written message; a character of the alphabet",
    "examples": []
  },
  {
    "id": 1217,
    "word": "March",
    "pos": "n / v",
    "pronunciation": "माच",
    "meaningHi": "मार्च का महीना 118 119 अंंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ | 1 कदम-से-कदम मिला कर जब सिपाही चलते हैं तो इसे 'मार्च' कहते हैं 2 आगे बढ़ना | मार्च करना",
    "meaningEn": "",
    "examples": [
      {
        "en": "The march towards prosperity began with the industrial revolution",
        "hi": "औद्योगिक क्रांति के साथ समृद्धि की ओर आगे बढ़ना शुरू हो गया।"
      },
      {
        "en": "The police contingents are marching towards the India Gate",
        "hi": "पुलिस की टुकड़ियाँ इंडिया गेट की तरफ मार्च कर रही हैं।"
      }
    ]
  },
  {
    "id": 1218,
    "word": "mation)",
    "pos": "n",
    "pronunciation": "",
    "meaningHi": "हलो, हलउ हलो अभिवादन, नमस्ते",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1219,
    "word": "measure",
    "pos": "v",
    "pronunciation": "मेशज़र",
    "meaningHi": "नापना मीडिअम मध्यम बीच-बीच का",
    "meaningEn": "to find the size of; a step taken",
    "examples": [
      {
        "en": "Can we measure the sky?",
        "hi": "क्ा हम आसमान को नाप सकते हैं?"
      },
      {
        "en": "medium height",
        "hi": "मध्यम ऊँचाई"
      }
    ]
  },
  {
    "id": 1220,
    "word": "monitor",
    "pos": "n / v",
    "pronunciation": "मॉनिटर",
    "meaningHi": "जिस पर चित्र, विडियो या डेटा दिखे, जैसे कंप्यूटर का मॉनिटर | निगरानी करना",
    "meaningEn": "",
    "examples": [
      {
        "en": "Let us monitor the progress of every child in the class",
        "hi": "हम कक्षा के प्रत्ेक बच्चे की प्रगति की निगरानी करें।"
      }
    ]
  },
  {
    "id": 1221,
    "word": "month",
    "pos": "n",
    "pronunciation": "मन्थ",
    "meaningHi": "महीना, माह",
    "meaningEn": "yearly division",
    "examples": []
  },
  {
    "id": 1222,
    "word": "muscle",
    "pos": "n",
    "pronunciation": "मसल",
    "meaningHi": "मांसपेशी",
    "meaningEn": "",
    "examples": [
      {
        "en": "Exercise helps build muscles",
        "hi": "व्ायाम मांसपेशियाँ बनाने में मदद करता है।"
      }
    ]
  },
  {
    "id": 1223,
    "word": "nerve",
    "pos": "n",
    "pronunciation": "नर्व",
    "meaningHi": "स्ायु ये शरीर के भीतर महीन धागों-जैसे होते हैं जो दिमाग और शरीर के अन्य हिस्सोंों के बीच संदेश ले जाते हैं। 2 साहस",
    "meaningEn": "body fibre",
    "examples": [
      {
        "en": "Only he has the nerve to do it",
        "hi": "यह करने का साहस केवल उसी के पास है।"
      }
    ]
  },
  {
    "id": 1224,
    "word": "next to",
    "pos": "prep",
    "pronunciation": "नेक्स्ट",
    "meaningHi": "के बगल में, अगला वाला",
    "meaningEn": "",
    "examples": [
      {
        "en": "My house is next to the hotel",
        "hi": "मेरा घर होटल के बगल में है।"
      }
    ]
  },
  {
    "id": 1225,
    "word": "nor",
    "pos": "det pron / conj adv",
    "pronunciation": "नीदर नौर",
    "meaningHi": "नाइदर 1 न तो, न 2 दोनों में से कोई नहीं | ..और न ही",
    "meaningEn": "",
    "examples": [
      {
        "en": "I weather today is neither hot nor cold",
        "hi": "आज मौसम न तो गरम है न ठंडा।"
      },
      {
        "en": "Are you an Indian or a Pakistani? - Neither!",
        "hi": "तुम हिंदुस्ानी हो पाकिस्ानी? - दोनों में से कोई नहीं!"
      }
    ]
  },
  {
    "id": 1226,
    "word": "obtain",
    "pos": "v",
    "pronunciation": "अब्टेन",
    "meaningHi": "प्राप्त करना अॉब््वि़अस स्पष्ट, प्रत्यक्ष अकेशज़न अवसर, मौका",
    "meaningEn": "to get",
    "examples": [
      {
        "en": "She has obtained good marks",
        "hi": "उसने अच्े अंक प्राप्त किए हैं।"
      },
      {
        "en": "The difference between the two brothers is obvious",
        "hi": "दोनों भाइयों के बीच का फर्क स्पष्ट है।"
      }
    ]
  },
  {
    "id": 1227,
    "word": "occupy",
    "pos": "v",
    "pronunciation": "अॉक्युपाइ",
    "meaningHi": "समय या जगह घेरना 2 स्ान ग्रहण करना 3 रहना 1",
    "meaningEn": "",
    "examples": [
      {
        "en": "This small sofa won't occupy much space in your room",
        "hi": "यह छोटा सोफा आपके कमरे में ज्ादा जगह नहीं घेरेगा।"
      },
      {
        "en": "He occupied his seat",
        "hi": "उसने अपना स्थान ग्रहण किया।"
      }
    ]
  },
  {
    "id": 1228,
    "word": "occur",
    "pos": "v",
    "pronunciation": "अकर",
    "meaningHi": "होना, घटित होना 70 अंंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ",
    "meaningEn": "to happen",
    "examples": [
      {
        "en": "This incident occurred around 9 a.m.",
        "hi": "यह घटना नौ बजे सुबह के करीब घटित हुई।"
      }
    ]
  },
  {
    "id": 1229,
    "word": "offer",
    "pos": "n / v",
    "pronunciation": "अॉफ़र",
    "meaningHi": "प्रस्ताव | 1 प्रस्ताव देना 2 भेंट देना",
    "meaningEn": "to present for acceptance; a proposal",
    "examples": [
      {
        "en": "I did not accept his offer of a job",
        "hi": "मैंने उनके द्ारा दिए गए नौकरी के प्रस्ताव को स्ीकार नहीं किया।"
      },
      {
        "en": "The company offered him a job",
        "hi": "कंपनी ने उसे एक नौकरी का प्रस्ताव दिया"
      }
    ]
  },
  {
    "id": 1230,
    "word": "oratory",
    "pos": "n",
    "pronunciation": "ओरट्री",
    "meaningHi": "वक्तृत्व, सुंदर बोलने की कला",
    "meaningEn": "",
    "examples": [
      {
        "en": "Oratory alone is not enough for being a good leader",
        "hi": "एक अच्ा नेता होने के लिए सुंदर बोलने की कला काफी नहीं है।"
      }
    ]
  },
  {
    "id": 1231,
    "word": "organ",
    "pos": "n",
    "pronunciation": "ओगन",
    "meaningHi": "शरीर का अंग ओगनाइज़्ड व्यवस्थित, संगठित, आयोजित",
    "meaningEn": "body part",
    "examples": [
      {
        "en": "Brain is the most important organ of the body",
        "hi": "मस्तिष्क शरीर का सबसे महत्त्वपूर्ण अंग है।"
      },
      {
        "en": "a well organised programme",
        "hi": "एक अच्छी तरह आयोजित कार्यक्रम"
      }
    ]
  },
  {
    "id": 1232,
    "word": "organise",
    "pos": "v",
    "pronunciation": "ओगनाइज़",
    "meaningHi": "संगठित करना, आयोजित करना अंंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ अरिजनल मूल, मौलिक नकल नहीं",
    "meaningEn": "to arrange",
    "examples": [
      {
        "en": "We organ- ised a painting competition",
        "hi": "हम लोगों ने एक चित्रकला-प्रतिस्पर्धा-कार्यक्रम आयोजित किया।"
      },
      {
        "en": "The court wants original documents, not photocopies",
        "hi": "न्ायालय मूूल दस्तावेज चाहता है, फोटोकॉपी नहीं।"
      }
    ]
  },
  {
    "id": 1233,
    "word": "other",
    "pos": "adj",
    "pronunciation": "अदर",
    "meaningHi": "दूसरा, अन्य अदरवाइज़ 1 अन्यथा 2 नहीं तो, वरना ओट टु चाहिए",
    "meaningEn": "different; additional",
    "examples": [
      {
        "en": "He said yes, but what did others say?",
        "hi": "उसने कहा हाँ, मगर दूसरों ने क्ा कहा?"
      },
      {
        "en": "walk fast, otherwise you may miss the bus",
        "hi": "तेज चलो, नहीं तो बस छूूट सकती है।"
      }
    ]
  },
  {
    "id": 1234,
    "word": "own",
    "pos": "adj / v",
    "pronunciation": "अउन",
    "meaningHi": "अपना, निजी | किसी वस्तु का स्ामी होना अंंगरेज़ी शब्द उच्ारण हिंदी में अर्थ",
    "meaningEn": "belonging to oneself; to possess",
    "examples": [
      {
        "en": "It is my own car",
        "hi": "यह मेरी अपनी कार है।"
      },
      {
        "en": "I have two cars",
        "hi": "मेरे पास दो कारें हैं।"
      }
    ]
  },
  {
    "id": 1235,
    "word": "paint",
    "pos": "n / v",
    "pronunciation": "पेंट",
    "meaningHi": "रंग | 1 रंगना 1 रंगचित्र बनाना",
    "meaningEn": "to colour",
    "examples": [
      {
        "en": "We painted the walls",
        "hi": "हमलोगों ने दीवारें रंगीं।"
      },
      {
        "en": "She paints in oil colour",
        "hi": "वह तैलचित्र बनाती है।"
      }
    ]
  },
  {
    "id": 1236,
    "word": "parliament",
    "pos": "n",
    "pronunciation": "पालमन्ट",
    "meaningHi": "संसद जहाँ चुने हुए जनप्रतिनिधि मिल कर कानून बनाते हैं",
    "meaningEn": "",
    "examples": [
      {
        "en": "the Indian parliament",
        "hi": "भारत की संसद"
      },
      {
        "en": "Indian parliament",
        "hi": "भारत की संसद)"
      }
    ]
  },
  {
    "id": 1237,
    "word": "partnership",
    "pos": "n",
    "pronunciation": "शिप",
    "meaningHi": "पार्टनर- साझेदारी, मिल-जुल कर काम करने की क्रिया",
    "meaningEn": "",
    "examples": [
      {
        "en": "The two companies work in partner- ship with each other",
        "hi": "ये दो कंपनियाँ एक-दूसरे की साझेदारी में काम करती हैं।"
      }
    ]
  },
  {
    "id": 1238,
    "word": "passenger",
    "pos": "n",
    "pronunciation": "पैसिनजर",
    "meaningHi": "यात्ी",
    "meaningEn": "traveller",
    "examples": [
      {
        "en": "a bus passenger",
        "hi": "एक बस-यात्री"
      }
    ]
  },
  {
    "id": 1239,
    "word": "persuade",
    "pos": "v",
    "pronunciation": "पस्ेड",
    "meaningHi": "राजी करना, मनाना",
    "meaningEn": "to convince",
    "examples": [
      {
        "en": "Could you persuade him to sing a song?",
        "hi": "क्ा तुम उसे एक गाना गाने के लिए राजी कर पाए?"
      }
    ]
  },
  {
    "id": 1240,
    "word": "persuasive",
    "pos": "adj",
    "pronunciation": "पस्ेसिव",
    "meaningHi": "राजी कर लेने वाला, मना लेने वाला",
    "meaningEn": "",
    "examples": [
      {
        "en": "He has a persuasive manner of speech",
        "hi": "उसका बातचीत करने का तरीका मना लेने वाला है।"
      }
    ]
  },
  {
    "id": 1241,
    "word": "petrol",
    "pos": "n",
    "pronunciation": "पेट्रल",
    "meaningHi": "पेट्रोल फ़िलै्थ्रपि परोपकार, मानवोपकार",
    "meaningEn": "",
    "examples": [
      {
        "en": "Philanthropy is a divine virtue",
        "hi": "परोपकार एक दिव्य गुण है।"
      }
    ]
  },
  {
    "id": 1242,
    "word": "phone",
    "pos": "n / v",
    "pronunciation": "फ़ोन",
    "meaningHi": "फोन, दूरभाष | फ़ोन करना",
    "meaningEn": "telephone",
    "examples": [
      {
        "en": "Did you phone her?",
        "hi": "क्ा तुमने उसे फोन किया?"
      }
    ]
  },
  {
    "id": 1243,
    "word": "pin",
    "pos": "n",
    "pronunciation": "पिन",
    "meaningHi": "पिन",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1244,
    "word": "pinch",
    "pos": "v",
    "pronunciation": "पिन्च",
    "meaningHi": "चिकोटी काटना",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1245,
    "word": "place",
    "pos": "n",
    "pronunciation": "प्ेस",
    "meaningHi": "जगह, स्ान",
    "meaningEn": "location",
    "examples": []
  },
  {
    "id": 1246,
    "word": "plane",
    "pos": "n",
    "pronunciation": "प्ेन",
    "meaningHi": "हवाई जहाज",
    "meaningEn": "",
    "examples": [
      {
        "en": "The plane landed",
        "hi": "हवाई जहाज उतरा।"
      }
    ]
  },
  {
    "id": 1247,
    "word": "plastic",
    "pos": "n",
    "pronunciation": "प्ैस्टिक",
    "meaningHi": "प्ास्टिक",
    "meaningEn": "synthetic material",
    "examples": [
      {
        "en": "Isn't plastic damaging the environment?",
        "hi": "क्ा प्ास्टिक वातावरण को नुकसान नहीं पहुँचा रहा है?"
      }
    ]
  },
  {
    "id": 1248,
    "word": "plate",
    "pos": "n",
    "pronunciation": "प्लेट",
    "meaningHi": "तश्तरी",
    "meaningEn": "flat dish",
    "examples": []
  },
  {
    "id": 1249,
    "word": "platform",
    "pos": "n",
    "pronunciation": "प्ैट्फोम",
    "meaningHi": "चबूतरा, मंच 2 रेलवे स्ेशन का प्लैटफौर्म अंंगरेज़ी शब्द उच्ारण हिंदी में अर्थ",
    "meaningEn": "raised surface",
    "examples": [
      {
        "en": "He was speaking from a political platform",
        "hi": "वह एक राजनीतिक मंच से बोल रहा था।"
      }
    ]
  },
  {
    "id": 1250,
    "word": "possess",
    "pos": "v",
    "pronunciation": "पज़ेस",
    "meaningHi": "अपने पास कुछ होना",
    "meaningEn": "to own",
    "examples": [
      {
        "en": "I possess a house",
        "hi": "मेरे पास एक घर है।"
      }
    ]
  },
  {
    "id": 1251,
    "word": "possibility",
    "pos": "n",
    "pronunciation": "पॉसिबिलटि",
    "meaningHi": "संभावना",
    "meaningEn": "potential",
    "examples": [
      {
        "en": "There is no possibility of rains today",
        "hi": "आज बारिश की कोई संभावना नहीं है।"
      }
    ]
  },
  {
    "id": 1252,
    "word": "possibly",
    "pos": "adv",
    "pronunciation": "पॉसिब्लि",
    "meaningHi": "शायद",
    "meaningEn": "maybe",
    "examples": [
      {
        "en": "She may possibly come today",
        "hi": "वह शायद आज आएगी।"
      }
    ]
  },
  {
    "id": 1253,
    "word": "posture",
    "pos": "n",
    "pronunciation": "पॉसचर",
    "meaningHi": "बैठने या खड़े होने की मुद्रा या तरीका",
    "meaningEn": "body position",
    "examples": [
      {
        "en": "Bad posture can lead to back pain",
        "hi": "बैठने की गलत मुद्रा से पीठ का दर्द हो सकता है।"
      }
    ]
  },
  {
    "id": 1254,
    "word": "pot",
    "pos": "n",
    "pronunciation": "",
    "meaningHi": "पॉट कटोरा, बरतन",
    "meaningEn": "a container",
    "examples": []
  },
  {
    "id": 1255,
    "word": "precise",
    "pos": "adj",
    "pronunciation": "प्रिसाइस",
    "meaningHi": "सटीक, स्पष्ट और जितनी जरूरत हो ठीक उतने ही शब्दों में कहा हुआ",
    "meaningEn": "exact",
    "examples": [
      {
        "en": "He never gives a clear and precise answer",
        "hi": "वह कभी भी स्पष्ट और सटीक उत्तर नहीं देता।"
      }
    ]
  },
  {
    "id": 1256,
    "word": "principal",
    "pos": "n / adj",
    "pronunciation": "प्रिन्पल",
    "meaningHi": "किसी स्ूल या कॉलेज का प्राचार्य | मुख्य, प्रधान",
    "meaningEn": "head",
    "examples": [
      {
        "en": "the principal cities of India",
        "hi": "भारत के मुख्य शहर"
      }
    ]
  },
  {
    "id": 1257,
    "word": "prioritise",
    "pos": "v",
    "pronunciation": "इज़",
    "meaningHi": "प्राइअॉरटा- प्राथमिकता तय करना कौन काम कब अधिक और पहले जरूरी है, यह तय करना अंंगरेज़ी शब्द उच्ारण हिंदी में अर्थ",
    "meaningEn": "",
    "examples": [
      {
        "en": "Daily prioritise your tasks to become effective",
        "hi": "प्रभावी होने के लिए रोज अपने कार्योंों की प्राथमिकता तय किया करो, यानि कौन-सा काम पहले करना है, कौन-सा बाद में।"
      }
    ]
  },
  {
    "id": 1258,
    "word": "probable",
    "pos": "adj",
    "pronunciation": "प्ॉबब्ल",
    "meaningHi": "संभावित जिसकी अधिक संभावना हो",
    "meaningEn": "likely",
    "examples": [
      {
        "en": "a probable consequence",
        "hi": "एक संभावित परिणाम"
      }
    ]
  },
  {
    "id": 1259,
    "word": "produce",
    "pos": "v",
    "pronunciation": "प्रड्ूस",
    "meaningHi": "उत्पादन करना, कुछ बनाना",
    "meaningEn": "to make",
    "examples": [
      {
        "en": "produce milk products",
        "hi": "दूध के सामान का उत्ादन करो"
      }
    ]
  },
  {
    "id": 1260,
    "word": "professional",
    "pos": "n",
    "pronunciation": "प्रफ़ेेशनल",
    "meaningHi": "प्रोफे़शनल, पेशेवर",
    "meaningEn": "skilled",
    "examples": [
      {
        "en": "She is a fashion-designing professional",
        "hi": "वह एक फैशनडिजाईन पेशेवर है।"
      }
    ]
  },
  {
    "id": 1261,
    "word": "pronounce",
    "pos": "v",
    "pronunciation": "प्रनाउन्स",
    "meaningHi": "उच्ारण करना",
    "meaningEn": "",
    "examples": [
      {
        "en": "Some names are difficult to pronounce",
        "hi": "कुछ नामों का उच्चारण करना कठिन होता है।"
      }
    ]
  },
  {
    "id": 1262,
    "word": "quilt",
    "pos": "n",
    "pronunciation": "क्विल्ट",
    "meaningHi": "रजाई",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1263,
    "word": "quote",
    "pos": "v",
    "pronunciation": "क्वोट",
    "meaningHi": "उद्धृत करना, अपने कथन की पुष्टि में किसी बात को मिसाल के तौर पर पेश करना 158 159 R अंंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ",
    "meaningEn": "",
    "examples": [
      {
        "en": "He often quotes from the Bible",
        "hi": "वह अकसर बाइबिल से उद्धृत करता रहता है।"
      }
    ]
  },
  {
    "id": 1264,
    "word": "Quotient)",
    "pos": "n",
    "pronunciation": "ई क्यू",
    "meaningHi": "इमोशनल कोशंट भावनात्मक लब्धि भावनात्मक विकास मापने का पैमाना",
    "meaningEn": "",
    "examples": [
      {
        "en": "EQ has been found more important than IQ for success in life",
        "hi": "जीवन में सफल होने के लिए बुद्धिलब्धि से अधिक भावनात्मक लब्धि को महत्त्वपूर्ण पाया गया है।"
      }
    ]
  },
  {
    "id": 1265,
    "word": "regard",
    "pos": "n / v",
    "pronunciation": "रिगाड",
    "meaningHi": "आदर | 1 आदर देना 2 के रूप में मान्यता देना 1",
    "meaningEn": "to consider",
    "examples": [
      {
        "en": "I have great regards for her",
        "hi": "मेरा उनके लिए बड़ा आदर है।"
      },
      {
        "en": "Her work is well regarded",
        "hi": "उसका कार्य काफी आदर-प्राप्त है।"
      }
    ]
  },
  {
    "id": 1266,
    "word": "relative",
    "pos": "n",
    "pronunciation": "रेलटिव",
    "meaningHi": "रिश्तेश्तेदार, संबंधी",
    "meaningEn": "family member",
    "examples": [
      {
        "en": "She is a close relative",
        "hi": "वह एक निकट की रिश्तेश्तेदार है।"
      }
    ]
  },
  {
    "id": 1267,
    "word": "reserve",
    "pos": "v",
    "pronunciation": "रिज़र्व",
    "meaningHi": "आरक्षित या सुरक्षित रखना रिज़व्ड 1 संकोची, अपने-आप में रहने वाला 2 आरक्षित",
    "meaningEn": "to book",
    "examples": [
      {
        "en": "Please reserve a seat for me",
        "hi": "कृपया मेरे लिए एक सीट आरक्षित कर लो।"
      }
    ]
  },
  {
    "id": 1268,
    "word": "sanitation",
    "pos": "n",
    "pronunciation": "सैनिटेशन",
    "meaningHi": "सफाई, स्वच्छता",
    "meaningEn": "",
    "examples": [
      {
        "en": "Poor sanitation in toilets causes disease",
        "hi": "शौचालयों में अपर्याप्त स्वच्छता बीमारी का कारण बनती है।"
      }
    ]
  },
  {
    "id": 1269,
    "word": "scrap",
    "pos": "n",
    "pronunciation": "स्कैप",
    "meaningHi": "किसी चीज का टुकड़ा",
    "meaningEn": "",
    "examples": [
      {
        "en": "a scrap of paper",
        "hi": "कागज का एक टुकड़ा"
      }
    ]
  },
  {
    "id": 1270,
    "word": "scrape",
    "pos": "v",
    "pronunciation": "स्केप",
    "meaningHi": "खुरचना, रगड़ कर साफ़ करना",
    "meaningEn": "",
    "examples": [
      {
        "en": "She scraped the carrots and sliced them",
        "hi": "उसने गाजर को खुरचा और उसे काटा"
      }
    ]
  },
  {
    "id": 1271,
    "word": "scream",
    "pos": "n / v",
    "pronunciation": "स्कीम",
    "meaningHi": "जोर की चीख | जोर से चीखना",
    "meaningEn": "",
    "examples": [
      {
        "en": "We heard a scream",
        "hi": "हमने एक चीख सुनी।"
      },
      {
        "en": "Children screamed with joy",
        "hi": "बच्चे खुशी के मारे जोर से चीख रहे थे।"
      }
    ]
  },
  {
    "id": 1272,
    "word": "seller",
    "pos": "n",
    "pronunciation": "सेलर",
    "meaningHi": "विक्रेक्रेता",
    "meaningEn": "one who sells",
    "examples": [
      {
        "en": "Sellers and buyers both should be happy",
        "hi": "बेचेने और खरीदने वाले दोनों खुश रहने चाहिए।"
      }
    ]
  },
  {
    "id": 1273,
    "word": "separation",
    "pos": "n",
    "pronunciation": "सेपरेशन",
    "meaningHi": "अलगाव",
    "meaningEn": "",
    "examples": [
      {
        "en": "The separation of Hindustan and Pakistan affected millions of families",
        "hi": "हिंदुस्ान और पाकिस्ान के अलगाव ने लाखों परिवारों को प्रभावित किया।"
      }
    ]
  },
  {
    "id": 1274,
    "word": "September",
    "pos": "n",
    "pronunciation": "सेप्ेम्बर",
    "meaningHi": "सितंबर का महीना अंंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1275,
    "word": "series",
    "pos": "n",
    "pronunciation": "सीअरीज़",
    "meaningHi": "श्रृंृंखला एक-के-बाद-एक कई खंडों में जो हो या चले",
    "meaningEn": "sequence",
    "examples": [
      {
        "en": "cricket test series",
        "hi": "क्रिकेट टेस्ट-श्रृंृंखला"
      }
    ]
  },
  {
    "id": 1276,
    "word": "shallow",
    "pos": "adj",
    "pronunciation": "शैलो",
    "meaningHi": "छिछला, गहरा नहीं",
    "meaningEn": "not deep",
    "examples": [
      {
        "en": "a shallow pond - एक छिछला तालाब; shallow knowledge",
        "hi": "छिछला ज्ान"
      }
    ]
  },
  {
    "id": 1277,
    "word": "shoes",
    "pos": "n",
    "pronunciation": "शूज़",
    "meaningHi": "जूते",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1278,
    "word": "shopping",
    "pos": "n",
    "pronunciation": "शॉपिंग",
    "meaningHi": "खरीददारी 178 179 अंंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1279,
    "word": "shrink",
    "pos": "v",
    "pronunciation": "श्रिंंक",
    "meaningHi": "सिकुड़ जाना",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1280,
    "word": "sickness",
    "pos": "n",
    "pronunciation": "सिकनेस",
    "meaningHi": "बीमारी",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1281,
    "word": "skirt",
    "pos": "n",
    "pronunciation": "स्कर्ट",
    "meaningHi": "स्कर्ट, घाघरा",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1282,
    "word": "slice",
    "pos": "n / v",
    "pronunciation": "स्ाइस",
    "meaningHi": "कतला, कतरा | कतरों में काटना",
    "meaningEn": "",
    "examples": [
      {
        "en": "mango slice",
        "hi": "आम का कतरा"
      },
      {
        "en": "slice a mango",
        "hi": "आम के कतरे काटना"
      }
    ]
  },
  {
    "id": 1283,
    "word": "slight",
    "pos": "adj",
    "pronunciation": "स्ाइट",
    "meaningHi": "थोड़ा-सा, मामूली",
    "meaningEn": "minor",
    "examples": [
      {
        "en": "slight injury",
        "hi": "मामूूली चोट"
      }
    ]
  },
  {
    "id": 1284,
    "word": "slightly",
    "pos": "adv",
    "pronunciation": "स्ाइटलि",
    "meaningHi": "थोड़ा-सा, जरा-सा",
    "meaningEn": "a bit",
    "examples": [
      {
        "en": "slightly sour",
        "hi": "जरा-सा खट्ा"
      }
    ]
  },
  {
    "id": 1285,
    "word": "socialism",
    "pos": "n",
    "pronunciation": "सोशलिज़म",
    "meaningHi": "समाजवाद",
    "meaningEn": "",
    "examples": [
      {
        "en": "Socialism wants everybody to be economically equal",
        "hi": "समाजवाद चाहता है कि सभी आर्थिक रूप से बराबर हों।"
      }
    ]
  },
  {
    "id": 1286,
    "word": "socks",
    "pos": "n",
    "pronunciation": "सॉक्स",
    "meaningHi": "मोजे",
    "meaningEn": "",
    "examples": [
      {
        "en": "If your socks smell, they can be a nuisance",
        "hi": "अगर तुम्ारे मोजे महकते हैं तो वे एक बुरी परेशानी बन सकते हैं।"
      }
    ]
  },
  {
    "id": 1287,
    "word": "software",
    "pos": "n",
    "pronunciation": "सॉफ़्टवेअ",
    "meaningHi": "र प्रोग्ाम जिससे कंप्यूटर पर कार्य होता है, जैसे माइक्रो सॉफ़ट वर्ड एक भाषा लिखने का सॉफ्टवेअर है",
    "meaningEn": "computer programs",
    "examples": []
  },
  {
    "id": 1288,
    "word": "spare",
    "pos": "adj / v",
    "pronunciation": "स्पेअर",
    "meaningHi": "अतिरिक्त, फाजिल",
    "meaningEn": "extra",
    "examples": [
      {
        "en": "Please spare a couple of hours for me today",
        "hi": "कृपया आज दो घंटे मेरे लिए दो।"
      },
      {
        "en": "Please spare me for a few minutes",
        "hi": "मुझे कुछ देर के लिए माफ कर दो। (छोड़ दो"
      }
    ]
  },
  {
    "id": 1289,
    "word": "spelling",
    "pos": "n",
    "pronunciation": "स्ेलिंग",
    "meaningHi": "हिज्जे, वर्तनी",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1290,
    "word": "spill",
    "pos": "v",
    "pronunciation": "स्पिल",
    "meaningHi": "छलकना 2 छलकाना",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1291,
    "word": "split",
    "pos": "v",
    "pronunciation": "स्प्लिट",
    "meaningHi": "तोड़ना, विभक्त करना",
    "meaningEn": "",
    "examples": [
      {
        "en": "Scientists split the atom to produce nuclear energy",
        "hi": "वैज्ञानिकों ने अणु को तोड़ कर नाभिकीय ऊर्जा पैदा की।"
      }
    ]
  },
  {
    "id": 1292,
    "word": "spoil",
    "pos": "v",
    "pronunciation": "स्पोइल",
    "meaningHi": "बिगाड़ देना, खराब कर देना",
    "meaningEn": "",
    "examples": [
      {
        "en": "He spoiled my day",
        "hi": "उसने मेरा दिन खराब कर दिया।"
      }
    ]
  },
  {
    "id": 1293,
    "word": "spray",
    "pos": "v",
    "pronunciation": "स्पे",
    "meaningHi": "फुहार छोड़ना",
    "meaningEn": "",
    "examples": [
      {
        "en": "Terrorists sprayed bullets on innocent people",
        "hi": "आतंकवादियों ने निर्दोोष लोगों पर गोलियों की फुहार छोड़ी।"
      }
    ]
  },
  {
    "id": 1294,
    "word": "squeeze",
    "pos": "v",
    "pronunciation": "स्क्वीज़",
    "meaningHi": "चारों ओर से दबाना, निचोड़ना",
    "meaningEn": "",
    "examples": [
      {
        "en": "squeeze the orange",
        "hi": "नारंगी को दबा कर निचोड़ो"
      }
    ]
  },
  {
    "id": 1295,
    "word": "stammer",
    "pos": "v",
    "pronunciation": "स्ैमर",
    "meaningHi": "हकलाना",
    "meaningEn": "to stutter",
    "examples": [
      {
        "en": "Stammering is curable",
        "hi": "हकलाने का इलाज है।"
      }
    ]
  },
  {
    "id": 1296,
    "word": "stamp",
    "pos": "n / v",
    "pronunciation": "स्ैम्प",
    "meaningHi": "मुहर 2 डाक टिकट | 1 मुहर लगाना 2 पैर पटकना",
    "meaningEn": "postage; to step",
    "examples": [
      {
        "en": "stamp collector",
        "hi": "डाक टिकट जमा करने वाला"
      }
    ]
  },
  {
    "id": 1297,
    "word": "steam",
    "pos": "n",
    "pronunciation": "स्ीम",
    "meaningHi": "भाप 188 189 अंंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1298,
    "word": "steep",
    "pos": "adj",
    "pronunciation": "स्ीप",
    "meaningHi": "खड़ी चढ़ाई",
    "meaningEn": "",
    "examples": [
      {
        "en": "a steep climb - एक खड़ी चढ़ाई; a steep mountain",
        "hi": "एक खड़ा पर्वत"
      }
    ]
  },
  {
    "id": 1299,
    "word": "steer",
    "pos": "v",
    "pronunciation": "स्टिअर",
    "meaningHi": "गाड़ी चलाना, परिचालन करना 2 स्थिति को अपने नियंत्रण में कर उसकी दिशा और गति को निर्देशित करना 1",
    "meaningEn": "",
    "examples": [
      {
        "en": "He steered the car into the parking area",
        "hi": "वह कार को पार्किंग क्षेत्र में ले गया।"
      },
      {
        "en": "He steered the team to victory",
        "hi": "वह टीम को जीत की ओर ले गया।"
      }
    ]
  },
  {
    "id": 1300,
    "word": "sticky",
    "pos": "adj",
    "pronunciation": "स्टिकि",
    "meaningHi": "चिपचिपा",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1301,
    "word": "stiff",
    "pos": "adj",
    "pronunciation": "स्टिफ़",
    "meaningHi": "सख्त जो लचीला नहीं हो",
    "meaningEn": "",
    "examples": [
      {
        "en": "a stiff man",
        "hi": "एक सख्त इनसान"
      }
    ]
  },
  {
    "id": 1302,
    "word": "sting",
    "pos": "n / v",
    "pronunciation": "स्टिंंग",
    "meaningHi": "डंक | डंक मारना",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1303,
    "word": "string",
    "pos": "n",
    "pronunciation": "स्ट्रिंंग",
    "meaningHi": "डोरी, फीता",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1304,
    "word": "superior",
    "pos": "adj",
    "pronunciation": "सुपिअरियर",
    "meaningHi": "किसी अन्य की अपेक्षा श्रेष्ट, बेहतर",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1305,
    "word": "superiority",
    "pos": "n",
    "pronunciation": "सुपिअरिअॉ",
    "meaningHi": "रटि किसी अन्य की अपेक्षा श्रेष्टता 192 193 अंंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ",
    "meaningEn": "being higher in rank",
    "examples": []
  },
  {
    "id": 1306,
    "word": "supplier",
    "pos": "n",
    "pronunciation": "सप्ाइअर",
    "meaningHi": "आपूर्तिकर्ता",
    "meaningEn": "",
    "examples": [
      {
        "en": "supplier of school uniform",
        "hi": "स्कूल युनिफॉर्म की आपूूर्ति करने वाला।"
      }
    ]
  },
  {
    "id": 1307,
    "word": "suppose",
    "pos": "v",
    "pronunciation": "सपोज़",
    "meaningHi": "कल्पना करना, मान लो",
    "meaningEn": "to assume",
    "examples": [
      {
        "en": "Suppose the sun does not rise tomorrow",
        "hi": "मान लो कि कल सूूरज नहीं उगता है।"
      }
    ]
  },
  {
    "id": 1308,
    "word": "sweets",
    "pos": "n",
    "pronunciation": "स्वीट",
    "meaningHi": "मिठाइयाँ",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1309,
    "word": "tense",
    "pos": "adj / n",
    "pronunciation": "टेन्स",
    "meaningHi": "तनावग्रस्त | {व्याकरण में} काल वर्तमानकाल, भूतकाल, भविष्यकाल",
    "meaningEn": "",
    "examples": [
      {
        "en": "the atmosphere was tense",
        "hi": "वातावरण तनावपूर्ण था।"
      }
    ]
  },
  {
    "id": 1310,
    "word": "tension",
    "pos": "n",
    "pronunciation": "हाइपर",
    "meaningHi": "टेंशन 1 रक्तचाप या ब्लडप्रेप्रेशर की बीमारी 96 97 I अंंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1311,
    "word": "their",
    "pos": "det",
    "pronunciation": "देअर",
    "meaningHi": "उनका 198 199 अंंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ",
    "meaningEn": "belonging to them",
    "examples": [
      {
        "en": "Football is their favourite sport",
        "hi": "फुटबौल उनका चहेता खेल है।"
      }
    ]
  },
  {
    "id": 1312,
    "word": "theirs",
    "pos": "pron",
    "pronunciation": "देअज़",
    "meaningHi": "उनका",
    "meaningEn": "",
    "examples": [
      {
        "en": "Football is a favourite sport of theirs",
        "hi": "फुटबौल उनका चहेता खेल है।"
      }
    ]
  },
  {
    "id": 1313,
    "word": "thinker",
    "pos": "adj",
    "pronunciation": "थिंकर",
    "meaningHi": "चिंतक",
    "meaningEn": "one who thinks deeply",
    "examples": [
      {
        "en": "Bertrand Russell was a thinker",
        "hi": "बट्रेंेंड रसेल एक चिंतक थे।"
      }
    ]
  },
  {
    "id": 1314,
    "word": "thinking",
    "pos": "n",
    "pronunciation": "थिंकिंग",
    "meaningHi": "चिंतन, सोचने की क्रिया थरो, थॉरो परिपूर्ण, विस्तृस्तृत अंंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ",
    "meaningEn": "the process of thought",
    "examples": [
      {
        "en": "Technology grew due to creative thinking",
        "hi": "प्रौद्योगिकी का विकास सृजनात्मक चिंतन से हुआ।"
      },
      {
        "en": "He has a thorough knowl- edge of mathematics",
        "hi": "उसे गणित का परिपूर्ण ज्ान है।"
      }
    ]
  },
  {
    "id": 1315,
    "word": "thumb",
    "pos": "n",
    "pronunciation": "थम",
    "meaningHi": "अँगूठा",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1316,
    "word": "tooth",
    "pos": "n",
    "pronunciation": "टूथ",
    "meaningHi": "दाँत",
    "meaningEn": "mouth structure",
    "examples": []
  },
  {
    "id": 1317,
    "word": "trading",
    "pos": "n",
    "pronunciation": "ट्ेडिंग",
    "meaningHi": "व्यापार",
    "meaningEn": "",
    "examples": [
      {
        "en": "Sunday trading is not allowed in some cities",
        "hi": "रविवार का व्ापार कुछ शहरों में मना है।"
      }
    ]
  },
  {
    "id": 1318,
    "word": "training",
    "pos": "n",
    "pronunciation": "ट्रेनिंग",
    "meaningHi": "प्रशिक्षण",
    "meaningEn": "teaching skills",
    "examples": [
      {
        "en": "Training can transform anybody",
        "hi": "प्रशिक्षण किसी को भी बदल कर सकता है।"
      }
    ]
  },
  {
    "id": 1319,
    "word": "translate",
    "pos": "v",
    "pronunciation": "ट्रैन्सलेट",
    "meaningHi": "अनुवाद करना",
    "meaningEn": "to convert between languages",
    "examples": []
  },
  {
    "id": 1320,
    "word": "transport",
    "pos": "n / v",
    "pronunciation": "ट्ैन्सपोर्ट",
    "meaningHi": "परिवहन गाड़ी-घोड़ा आदि, जिनसे व्यक्ति या माल ढोए जाते हों। | लोगों या माल को ढोना, ले जाना",
    "meaningEn": "to carry from place to place",
    "examples": [
      {
        "en": "My baggage was transported to Delhi by truck",
        "hi": "मेरा बोरिया-बिस्तर ट्रक के द्ारा दिल्ी ले जाया गया।"
      }
    ]
  },
  {
    "id": 1321,
    "word": "traveller",
    "pos": "n",
    "pronunciation": "ट्ैवलर",
    "meaningHi": "यात्ी",
    "meaningEn": "one who travels",
    "examples": []
  },
  {
    "id": 1322,
    "word": "tread",
    "pos": "v",
    "pronunciation": "ट्रेड",
    "meaningHi": "चलना, पैर रखना",
    "meaningEn": "",
    "examples": [
      {
        "en": "tread carefully",
        "hi": "सँभल कर चलो, सँभल कर किसी काम में बढ़ो"
      }
    ]
  },
  {
    "id": 1323,
    "word": "trousers",
    "pos": "n",
    "pronunciation": "ट्ाउज़ज़",
    "meaningHi": "पतलून, पाजामा 204 205 अंंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ",
    "meaningEn": "leg garments",
    "examples": []
  },
  {
    "id": 1324,
    "word": "Twitter",
    "pos": "n",
    "pronunciation": "ट्विटर",
    "meaningHi": "ट्विटर एक खास फोरम जिसमें बहुत थोड़े शब्दों में कोई बात कही और सोशल मीडिया पर प्रसारित की जाती है। 2 चिड़ियों की चहचहाहट",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1325,
    "word": "ulcer",
    "pos": "n",
    "pronunciation": "अल्सर",
    "meaningHi": "फोड़ा या नासूूर",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1326,
    "word": "umpire",
    "pos": "n",
    "pronunciation": "अम्ाइअर",
    "meaningHi": "क्रिकेट या टेनिस का अंपायर, जो खेल में निर्णय देता है।",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1327,
    "word": "unhurt",
    "pos": "adj",
    "pronunciation": "अन्हर्ट",
    "meaningHi": "बिना चोट खाए",
    "meaningEn": "",
    "examples": [
      {
        "en": "He returned unhurt from the war",
        "hi": "युद्ध से वह बिना चोट खाए लौट आया।"
      }
    ]
  },
  {
    "id": 1328,
    "word": "unless",
    "pos": "conj",
    "pronunciation": "अन्लेस",
    "meaningHi": "जबतक..तबतक",
    "meaningEn": "except if",
    "examples": [
      {
        "en": "an unlikely event",
        "hi": "एक ऐसी घटना जिसकी संभावना नहीं थी।"
      },
      {
        "en": "Unless he apologises, I will not go to him",
        "hi": "जबतक वह क्षमा नहीं माँगता, तबतक मैं उसके पास नहीं जाऊँगा।"
      }
    ]
  },
  {
    "id": 1329,
    "word": "unrest",
    "pos": "n",
    "pronunciation": "अनरेस्ट",
    "meaningHi": "अशांति, बेचैनी / अन्टिल निर्दिष्ट समय या घटना के होने तक अन्यूशज़ुअल असामान्य",
    "meaningEn": "disturbance",
    "examples": [
      {
        "en": "widespread unrest due to price rise",
        "hi": "मूूल्य वृद्धि के कारण व्ापक बेचैनी"
      },
      {
        "en": "wait until / till he comes",
        "hi": "उसके आने तक इंतज़ार करो"
      }
    ]
  },
  {
    "id": 1330,
    "word": "upload",
    "pos": "v",
    "pronunciation": "अपलोड",
    "meaningHi": "कंप्यूटर-फाइल को इन्टरनेट पर अपलोड करना अंंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1331,
    "word": "vacancy",
    "pos": "n",
    "pronunciation": "वेकन्सि",
    "meaningHi": "रिक्ति",
    "meaningEn": "empty position",
    "examples": [
      {
        "en": "There is no vacancy for the post of typist",
        "hi": "टाइपिस्ट के पद के लिए कोई रिक्ति या खाली जगह नहीं है।"
      }
    ]
  },
  {
    "id": 1332,
    "word": "vacant",
    "pos": "adj",
    "pronunciation": "वेकन्ट",
    "meaningHi": "रिक्त, खाली",
    "meaningEn": "empty",
    "examples": [
      {
        "en": "Our house is vacant",
        "hi": "हम लोगों का घर खाली है।"
      }
    ]
  },
  {
    "id": 1333,
    "word": "vacation",
    "pos": "n",
    "pronunciation": "वकेशन",
    "meaningHi": "लंबा अवकाश",
    "meaningEn": "holiday",
    "examples": [
      {
        "en": "I spent my summer vacation at Simla",
        "hi": "मैंने गर्मीी की छुट्ी शिमला में बिताई।"
      }
    ]
  },
  {
    "id": 1334,
    "word": "vaccine",
    "pos": "n",
    "pronunciation": "वैक्सीन",
    "meaningHi": "टीके की दवा",
    "meaningEn": "immunizing substance",
    "examples": [
      {
        "en": "A vaccine prevents a disease",
        "hi": "वैक्सीन किसी बीमारी को रोकती है।"
      }
    ]
  },
  {
    "id": 1335,
    "word": "vague",
    "pos": "adj",
    "pronunciation": "वेग",
    "meaningHi": "अस्पष्ट",
    "meaningEn": "unclear",
    "examples": [
      {
        "en": "a vague statement",
        "hi": "एक अस्पष्ट बयान"
      }
    ]
  },
  {
    "id": 1336,
    "word": "value(s)",
    "pos": "n",
    "pronunciation": "वैल्ूज़",
    "meaningHi": "जीवनमूल्य 55 212 213 अंंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ",
    "meaningEn": "",
    "examples": [
      {
        "en": "Helping others is a great human value",
        "hi": "परोपकार एक महान जीवनमूूल्य है।"
      }
    ]
  },
  {
    "id": 1337,
    "word": "velvet",
    "pos": "n",
    "pronunciation": "वेलविट",
    "meaningHi": "मखमल",
    "meaningEn": "soft fabric",
    "examples": []
  },
  {
    "id": 1338,
    "word": "venom",
    "pos": "n",
    "pronunciation": "वेनम",
    "meaningHi": "साँप का विष, जहर",
    "meaningEn": "poison from animals",
    "examples": []
  },
  {
    "id": 1339,
    "word": "venture",
    "pos": "n",
    "pronunciation": "वेन्चर",
    "meaningHi": "नई और कुछ जोखिम भरी परियोजना",
    "meaningEn": "a risky undertaking",
    "examples": [
      {
        "en": "Making iron-ropes is my new venture",
        "hi": "लोहे की रस्ी बनाना मेरी नई परियोजना है।"
      }
    ]
  },
  {
    "id": 1340,
    "word": "venus",
    "pos": "n",
    "pronunciation": "वीनस",
    "meaningHi": "शुक्रग्रह अंंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ",
    "meaningEn": "a planet; goddess of love",
    "examples": []
  },
  {
    "id": 1341,
    "word": "version",
    "pos": "n",
    "pronunciation": "वर्शन",
    "meaningHi": "रूपांतर, संस्करण, पाठांतर",
    "meaningEn": "a form of something",
    "examples": [
      {
        "en": "Many versions of the Valmiki Ramayan are found",
        "hi": "वाल्ीकि रामायण के कई पाठांतर मिलते हैं।"
      }
    ]
  },
  {
    "id": 1342,
    "word": "vertical",
    "pos": "adj",
    "pronunciation": "वर्िकल",
    "meaningHi": "सीधा-खड़ा",
    "meaningEn": "upright",
    "examples": [
      {
        "en": "She drew some vertical lines on the paper",
        "hi": "उसने कुछ सीधी-खड़ी रेखाएँ कागज पर बनाईं।"
      }
    ]
  },
  {
    "id": 1343,
    "word": "vibrant",
    "pos": "adj",
    "pronunciation": "वाइब्रंट",
    "meaningHi": "जीवंत और उत्ाहपूर्ण",
    "meaningEn": "full of energy",
    "examples": [
      {
        "en": "a vibrant person",
        "hi": "एक जीवंत व्यक्ति"
      }
    ]
  },
  {
    "id": 1344,
    "word": "video",
    "pos": "n",
    "pronunciation": "विडिओ",
    "meaningHi": "विडिओ, चित्रमुद्रण",
    "meaningEn": "visual recording",
    "examples": []
  },
  {
    "id": 1345,
    "word": "virus",
    "pos": "n",
    "pronunciation": "वाइरस",
    "meaningHi": "विषाणु शरीर में ज्ादातर इन्ेक्शन या रोग बैक्टी- रिया या वायरस के शरीर में प्रवेश करने से होते हैं।",
    "meaningEn": "an infectious agent",
    "examples": []
  },
  {
    "id": 1346,
    "word": "visitor",
    "pos": "n",
    "pronunciation": "विज़िटर",
    "meaningHi": "मुलाकाती, आगंतुक",
    "meaningEn": "guest",
    "examples": [
      {
        "en": "The Taj attracts thousands of visitors",
        "hi": "ताजमहल हजारों आगंतुकों को आकर्षित करता है।"
      }
    ]
  },
  {
    "id": 1347,
    "word": "vitamins",
    "pos": "n",
    "pronunciation": "विटमिंस",
    "meaningHi": "विटामिन शरीर के स्ास्थ्य के लिए एक प्रकार के आवश्यक तत्त्व अंंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ",
    "meaningEn": "essential nutrients",
    "examples": [
      {
        "en": "Vitamins are found in fruits and vegetables",
        "hi": "विटामिन फलों और सब््जियों में मिलते हैं।"
      }
    ]
  },
  {
    "id": 1348,
    "word": "website",
    "pos": "n",
    "pronunciation": "वेब्साइट",
    "meaningHi": "इन्टरनेट पर किसी व्यक्ति, संस्ा या कंपनी का सूचनाकेंद्र",
    "meaningEn": "web pages",
    "examples": []
  },
  {
    "id": 1349,
    "word": "weigh",
    "pos": "v",
    "pronunciation": "वे",
    "meaningHi": "वजन करना, तौलना",
    "meaningEn": "to measure weight",
    "examples": [
      {
        "en": "I am weighing vegetables",
        "hi": "मैं सब््जियाँ तौल रहा हँ।"
      }
    ]
  },
  {
    "id": 1350,
    "word": "whistle",
    "pos": "n / v",
    "pronunciation": "विस्ल",
    "meaningHi": "सीटी | मुँह से सिटी बजाना",
    "meaningEn": "to make a shrill sound",
    "examples": [
      {
        "en": "The policeman blew the whistle",
        "hi": "पुलिस वाले ने सीटी बजाई।"
      },
      {
        "en": "He was whistling a tune",
        "hi": "वह होठों से सीटी बजाकर एक धुन निकाल रहा था।"
      }
    ]
  },
  {
    "id": 1351,
    "word": "wind up",
    "pos": "v",
    "pronunciation": "वाइंडप",
    "meaningHi": "खत्म करना, विराम देना",
    "meaningEn": "to end up; to conclude",
    "examples": [
      {
        "en": "Let’s wind up the discussion",
        "hi": "चलो, हम चर्चा खत्म करें।"
      }
    ]
  },
  {
    "id": 1352,
    "word": "Gyan yog",
    "pos": "n",
    "pronunciation": "आत्मा के वास्तविक स्वरूप के ज्ान के माध्यम से मोक्ष",
    "meaningHi": "ज्ान योग ज्ानयोग, the की प्राप्ति कराने वाला मार्ग 90 91 अंंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ हाड्वेअर कंप्यूटर की मशीनरी",
    "meaningEn": "the yoga of knowledge and wisdom",
    "examples": []
  },
  {
    "id": 1353,
    "word": "Hath yog",
    "pos": "n",
    "pronunciation": "हठ योग",
    "meaningHi": "हठयोग ध्ानयोग, अष्टांांगयोग का एक रूप",
    "meaningEn": "the yoga of physical postures and breath",
    "examples": []
  },
  {
    "id": 1354,
    "word": "Kriya yog",
    "pos": "n",
    "pronunciation": "क्रियायोग",
    "meaningHi": "ध्ानयोग का एक रूप 'क्रियायोग' शब्द ध्ानयोगी श्यामा चरण लाहिड़ी महाशय और उनके शिषों योगानन्द आदि द्ारा विशेष रूप से लोकप्रिय किया गया L अंंगरेज़ी शब्द",
    "meaningEn": "the yoga of action and purification",
    "examples": []
  },
  {
    "id": 1355,
    "word": "theism",
    "pos": "n",
    "pronunciation": "मॉनथीइज़म",
    "meaningHi": "ईश्वरवाद — ईश्वर के अस्तित्व में विश्वास",
    "meaningEn": "belief in the existence of God",
    "examples": []
  }
];
