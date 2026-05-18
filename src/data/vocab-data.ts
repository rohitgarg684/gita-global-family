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
    "meaningEn": "the supreme being; a deity",
    "examples": [
      {
        "en": "Is God",
        "hi": "realisation the final goal of human life? - क्ा परमेश्वर की अनुभूति मानव-जीवन का अंतिम लक्ष्य है?"
      },
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
    "meaningHi": "दिल, हृदय",
    "meaningEn": "the organ that pumps blood; center of emotions",
    "examples": []
  },
  {
    "id": 3,
    "word": "mind",
    "pos": "v",
    "pronunciation": "माइन्ड",
    "meaningHi": "किसी की बात का बुरा मान लेना 2 ध्ान देना",
    "meaningEn": "",
    "examples": [
      {
        "en": "Please mind your own business",
        "hi": "कृपया अपने काम पर ध्यान दें, अर्थात कृपया अपने काम से काम रखें।"
      }
    ]
  },
  {
    "id": 4,
    "word": "truth",
    "pos": "n",
    "pronunciation": "ट्रूथ",
    "meaningHi": "सच्ाई",
    "meaningEn": "the quality of being true; reality",
    "examples": [
      {
        "en": "Truth has to be spoken, but in an appropriate manner",
        "hi": "सत्य बोलना है, मगर उचित तरीके से।"
      }
    ]
  },
  {
    "id": 5,
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
    "id": 6,
    "word": "faith",
    "pos": "n",
    "pronunciation": "फ़ेथ",
    "meaningHi": "विश्वास, आस्था, श्रद्धा",
    "meaningEn": "complete trust; belief without proof",
    "examples": []
  },
  {
    "id": 7,
    "word": "peace",
    "pos": "n",
    "pronunciation": "पीस",
    "meaningHi": "शांति",
    "meaningEn": "freedom from disturbance; calm",
    "examples": [
      {
        "en": "There cannot be happiness without peace",
        "hi": "शांति के बिना सुख नहीं हो सकता।"
      }
    ]
  },
  {
    "id": 8,
    "word": "right",
    "pos": "n",
    "pronunciation": "राइट",
    "meaningHi": "अधिकार, हक 2 {राजनीतिक} दक्षिणपंथ",
    "meaningEn": "",
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
    "id": 9,
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
    "id": 10,
    "word": "do",
    "pos": "v",
    "pronunciation": "डू",
    "meaningHi": "करना",
    "meaningEn": "to perform; to carry out",
    "examples": [
      {
        "en": "I will do it",
        "hi": "मैं यह करूँगा।"
      }
    ]
  },
  {
    "id": 11,
    "word": "heaven",
    "pos": "n",
    "pronunciation": "हेवन",
    "meaningHi": "स्वर्ग",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 12,
    "word": "in",
    "pos": "prep adv",
    "pronunciation": "इन",
    "meaningHi": "समयावधि में 2 भीतर, अंदर 1 I will do this in two days - मैं इसे दो दिनों की समायावधि में कर दूँगा। 2 He is in the room - वह कमरे के अंदर है। inadequate adj इनऐडिक्वट अपर्याप्त, जो काफी नहीं हो…",
    "meaningEn": "",
    "examples": [
      {
        "en": "inadequate food",
        "hi": "अपर्याप्त भोजन"
      },
      {
        "en": "I will do this in two days",
        "hi": "मैं इसे दो दिनों की समायावधि में कर दूँगा। 2 He is in the room - वह कमरे के अंदर है।"
      }
    ]
  },
  {
    "id": 13,
    "word": "it",
    "pos": "pron det",
    "pronunciation": "इट",
    "meaningHi": "वह, यह",
    "meaningEn": "",
    "examples": [
      {
        "en": "It is a mouse",
        "hi": "यह एक चूूहा है।"
      },
      {
        "en": "It is a mouse",
        "hi": "यह एक चूूहा है।"
      }
    ]
  },
  {
    "id": 14,
    "word": "not",
    "pos": "adv adj",
    "pronunciation": "नॉट",
    "meaningHi": "नहीं (निषेध)",
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
    "id": 15,
    "word": "of",
    "pos": "prep",
    "pronunciation": "अव, ऑव",
    "meaningHi": "अव, ऑव का",
    "meaningEn": "",
    "examples": [
      {
        "en": "life of the Buddha",
        "hi": "बुद्ध का जीवन"
      }
    ]
  },
  {
    "id": 16,
    "word": "religion",
    "pos": "n",
    "pronunciation": "रिलिजन",
    "meaningHi": "धर्म रिलिजस धार्मिक on v रिलाइ निर्भर होना, विश्ास करना",
    "meaningEn": "",
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
    "id": 17,
    "word": "to",
    "pos": "prep",
    "pronunciation": "अकोडिंग  टु",
    "meaningHi": "को, की ओर",
    "meaningEn": "in the direction of; used with verbs",
    "examples": [
      {
        "en": "According to the Bhagavad-Gita, forgetting our divine nature is the root cause of suffering",
        "hi": "भगवद्-गीता के अनुसार अपने ईश्वरीय स्वरूप को भूूल जाना हमारे दुखों का मूूल कारण है। | 1 की दिशा में 2 (कई अन्य प्रकार से to का प्रयोग किया जाता है) He went to Delhi - वह दिल्ी गया। I want to go - मैं जाना चाहता हँ। To say that he is the best singer is too much - यह कहना कि वह सर्वश्ेष्ठ गायक है, कुछ ज्ादा ही हो गया।"
      }
    ]
  },
  {
    "id": 18,
    "word": "and",
    "pos": "conj",
    "pronunciation": "ऐंंड,  अंड",
    "meaningHi": "और, तथा",
    "meaningEn": "used to connect words or clauses",
    "examples": [
      {
        "en": "Ram and Shyam",
        "hi": "राम और श्ाम"
      }
    ]
  },
  {
    "id": 19,
    "word": "family",
    "pos": "n",
    "pronunciation": "फ़ैैमलि",
    "meaningHi": "परिवार",
    "meaningEn": "parents and children",
    "examples": [
      {
        "en": "a large family",
        "hi": "एक बड़ा परिवार"
      }
    ]
  },
  {
    "id": 20,
    "word": "for",
    "pos": "prep",
    "pronunciation": "1 के लिए  2 कोंकि",
    "meaningHi": "के लिए; क्योंकि",
    "meaningEn": "intended to belong to; because",
    "examples": [
      {
        "en": "I cannot go, for I am busy",
        "hi": "मैं नहीं जा सकता क्योंोंकि मैं व्यस्त हँ।"
      }
    ]
  },
  {
    "id": 21,
    "word": "forgive",
    "pos": "v",
    "pronunciation": "फ़गिव",
    "meaningHi": "माफ करना, क्षमा करना",
    "meaningEn": "to pardon",
    "examples": [
      {
        "en": "God forgives them who forgive others",
        "hi": "जो दूसरों को माफ करते हैं, ईश्वर उन्हेंें माफ़ कर देते हैं।"
      }
    ]
  },
  {
    "id": 22,
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
    "id": 23,
    "word": "or",
    "pos": "conj",
    "pronunciation": "इस मैच में कौन खेलेगा?",
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
    "id": 24,
    "word": "but",
    "pos": "conj",
    "pronunciation": "बट",
    "meaningHi": "लेकिन, किंतु, परंतु",
    "meaningEn": "however; except",
    "examples": [
      {
        "en": "He is tough",
        "hi": "looking but kind-hearted - वह सख्त दिखता है मगर उदारहृदय है।"
      },
      {
        "en": "I brought everything but my passport",
        "hi": "मैं अपने पासपोर्ट के अलावा सभी कुछ ले कर आया।"
      }
    ]
  },
  {
    "id": 25,
    "word": "her",
    "pos": "pron det",
    "pronunciation": "उसकी कलम खो गई है।",
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
    "id": 26,
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
    "id": 27,
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
    "id": 28,
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
    "id": 29,
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
    "id": 30,
    "word": "we",
    "pos": "pron",
    "pronunciation": "वी",
    "meaningHi": "हम",
    "meaningEn": "used to refer to oneself and others",
    "examples": []
  },
  {
    "id": 31,
    "word": "you",
    "pos": "pron",
    "pronunciation": "यू",
    "meaningHi": "तुम, आप",
    "meaningEn": "used to refer to the person spoken to",
    "examples": []
  },
  {
    "id": 32,
    "word": "father",
    "pos": "n",
    "pronunciation": "पिता",
    "meaningHi": "",
    "meaningEn": "male parent",
    "examples": []
  },
  {
    "id": 33,
    "word": "friend",
    "pos": "n",
    "pronunciation": "फ्े़न्ड",
    "meaningHi": "मित्र, दोस्त फ्े़न्डशिप मित्रता फ्े़न्ड्लि मित्रतापूर्ण, दोस्ताना",
    "meaningEn": "person you know and like",
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
    "id": 34,
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
    "id": 35,
    "word": "its",
    "pos": "det",
    "pronunciation": "इट्स",
    "meaningHi": "उसका, इसका",
    "meaningEn": "",
    "examples": [
      {
        "en": "Its price is ten rupees",
        "hi": "इसकी कीमत दस रुपए है।"
      },
      {
        "en": "Its price is ten rupees",
        "hi": "इसकी कीमत दस रुपए है।"
      }
    ]
  },
  {
    "id": 36,
    "word": "mother",
    "pos": "n",
    "pronunciation": "माता",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 37,
    "word": "our",
    "pos": "det",
    "pronunciation": "आर",
    "meaningHi": "हमारा",
    "meaningEn": "",
    "examples": [
      {
        "en": "He is our friend",
        "hi": "वह हमारा दोस्त है।"
      },
      {
        "en": "He is our friend",
        "hi": "वह हमारा दोस्त है।"
      }
    ]
  },
  {
    "id": 38,
    "word": "still",
    "pos": "adv / adj",
    "pronunciation": "स्टिल",
    "meaningHi": "अबतक 2 निस्तब्ध, शांत बिना हिले-डुले 1 Is he ? - क्ा वह अभी तक वहाँ बैठा हुआ है? 2",
    "meaningEn": "",
    "examples": [
      {
        "en": "still waters",
        "hi": "शांत जल"
      }
    ]
  },
  {
    "id": 39,
    "word": "teach",
    "pos": "v",
    "pronunciation": "टीच",
    "meaningHi": "पढ़ाना, सिखाना 139 196 197 अंंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 40,
    "word": "us",
    "pos": "pron",
    "pronunciation": "अस",
    "meaningHi": "हमें, हमको",
    "meaningEn": "used to refer to oneself and others",
    "examples": [
      {
        "en": "He gave us ten rupees.",
        "hi": "उसने हमें दस रुपए दिए। We took the dog with us - हम हमारे साथ कुत्ते को ले गए।"
      },
      {
        "en": "We took the dog with us",
        "hi": "हम हमारे साथ कुत्ते को ले गए।"
      }
    ]
  },
  {
    "id": 41,
    "word": "world",
    "pos": "n",
    "pronunciation": "वर्ल्ड",
    "meaningHi": "संसार, दुनिया",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 42,
    "word": "yours",
    "pos": "pron",
    "pronunciation": "योज़",
    "meaningHi": "तेरा, तुम्ारा, आपका Is ? - क्ा वह कार तुम्ारी है? Is he a ? - क्ा वह तुम्ारा दोस्त है?",
    "meaningEn": "",
    "examples": [
      {
        "en": "It is simple, you can yourself do it",
        "hi": "यह आसान है, तुम खुद ही इसे कर सकते हो"
      }
    ]
  },
  {
    "id": 43,
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
    "id": 44,
    "word": "how",
    "pos": "adv",
    "pronunciation": "हाउ",
    "meaningHi": "कैसे, किस प्रकार",
    "meaningEn": "in what way or manner",
    "examples": [
      {
        "en": "How did you go there?",
        "hi": "आप वहाँ कैसे गए?"
      }
    ]
  },
  {
    "id": 45,
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
    "id": 46,
    "word": "prophet",
    "pos": "n",
    "pronunciation": "प्ॉफ़ेट",
    "meaningHi": "पैगंबर ईसाई, यहूदी और इसलाम धर्मों में कथित रूप से ईश्वर का संदेश लाने वाले धर्मशिक्षक",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 47,
    "word": "so",
    "pos": "adv conj",
    "pronunciation": "सो",
    "meaningHi": "इतना 2 इसलिए 3 ताकि",
    "meaningEn": "",
    "examples": [
      {
        "en": "so much?",
        "hi": "इतना अधिक?; Is it so difficult? - क्ा यह इतना कठिन है?"
      },
      {
        "en": "There are no taxis, so you will have to walk",
        "hi": "यहाँ कोई टैक्सी नहीं है, इसलिए तुम्ें चल कर जाना पड़ेगा।"
      }
    ]
  },
  {
    "id": 48,
    "word": "there",
    "pos": "adv",
    "pronunciation": "गए थे।",
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
    "id": 49,
    "word": "which",
    "pos": "pron",
    "pronunciation": "विच",
    "meaningHi": "कौन-सा, जो",
    "meaningEn": "asking about a choice",
    "examples": [
      {
        "en": "Which boy did it?",
        "hi": "किस बच्चे ने यह किया?"
      }
    ]
  },
  {
    "id": 50,
    "word": "who",
    "pos": "pron",
    "pronunciation": "हू",
    "meaningHi": "कौन, जो (व्यक्ति)",
    "meaningEn": "what person",
    "examples": [
      {
        "en": "Who is there?",
        "hi": "कौन है वहाँ?"
      }
    ]
  },
  {
    "id": 51,
    "word": "why",
    "pos": "adv",
    "pronunciation": "वाइ",
    "meaningHi": "कों",
    "meaningEn": "",
    "examples": [
      {
        "en": "Why did you cry?",
        "hi": "तुम क्योंों रोए?"
      }
    ]
  },
  {
    "id": 52,
    "word": "about",
    "pos": "adj adv / n",
    "pronunciation": "अबाउट",
    "meaningHi": "के बारे में; करीब-करीब, लगभग",
    "meaningEn": "regarding; approximately",
    "examples": [
      {
        "en": "The school is about three kilometres from here",
        "hi": "स्कूल यहाँ से लगभग तीन किलोमीटर है।"
      }
    ]
  },
  {
    "id": 53,
    "word": "all",
    "pos": "n adj adv",
    "pronunciation": "ओल",
    "meaningHi": "सभी, सब, समस्त",
    "meaningEn": "every one; the whole of",
    "examples": [
      {
        "en": "All have left",
        "hi": "सभी चले गए हैं।"
      }
    ]
  },
  {
    "id": 54,
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
    "id": 55,
    "word": "brave",
    "pos": "adj",
    "pronunciation": "ब्ेव",
    "meaningHi": "बहादुर",
    "meaningEn": "",
    "examples": [
      {
        "en": "a brave soldier",
        "hi": "एक बहादुर सिपाही"
      }
    ]
  },
  {
    "id": 56,
    "word": "character",
    "pos": "n",
    "pronunciation": "कैरक्टर",
    "meaningHi": "चरित्र; स्वभाव; अक्षर",
    "meaningEn": "qualities of a person; a letter",
    "examples": []
  },
  {
    "id": 57,
    "word": "child",
    "pos": "n",
    "pronunciation": "चाइल्ड",
    "meaningHi": "बच्चा, बालक",
    "meaningEn": "a young person",
    "examples": []
  },
  {
    "id": 58,
    "word": "children",
    "pos": "n",
    "pronunciation": "चिल्ड्रन",
    "meaningHi": "बच्चे (बहुवचन)",
    "meaningEn": "plural of child; young people",
    "examples": [
      {
        "en": "Children are creative",
        "hi": "बच्चे सृजनशील होते हैं।"
      }
    ]
  },
  {
    "id": 59,
    "word": "get",
    "pos": "v",
    "pronunciation": "गेट",
    "meaningHi": "पाना, मिलना, प्राप्त करना",
    "meaningEn": "to receive; to obtain",
    "examples": [
      {
        "en": "I got a prize today",
        "hi": "मुझे आज एक पुरस्ार मिला"
      }
    ]
  },
  {
    "id": 60,
    "word": "go",
    "pos": "v",
    "pronunciation": "गो",
    "meaningHi": "जाना",
    "meaningEn": "to move; to travel",
    "examples": []
  },
  {
    "id": 61,
    "word": "learn",
    "pos": "v",
    "pronunciation": "लर्न",
    "meaningHi": "सीखना",
    "meaningEn": "",
    "examples": [
      {
        "en": "Learn humility",
        "hi": "विनम्रता सीखो।"
      }
    ]
  },
  {
    "id": 62,
    "word": "now",
    "pos": "adv",
    "pronunciation": "नाउ",
    "meaningHi": "अब, इस समय",
    "meaningEn": "at the present time",
    "examples": []
  },
  {
    "id": 63,
    "word": "patience",
    "pos": "n",
    "pronunciation": "पेशन्स",
    "meaningHi": "धीरज, धैर्य",
    "meaningEn": "",
    "examples": [
      {
        "en": "Don't lose patience!",
        "hi": "धीरज न खोएँ!"
      }
    ]
  },
  {
    "id": 64,
    "word": "say",
    "pos": "v",
    "pronunciation": "से",
    "meaningHi": "कहना, बोलना",
    "meaningEn": "to speak; to utter words",
    "examples": [
      {
        "en": "she said nothing",
        "hi": "उसने कुछ नहीं कहा"
      }
    ]
  },
  {
    "id": 65,
    "word": "spiritual",
    "pos": "adj",
    "pronunciation": "स्पिरिचुअल",
    "meaningHi": "आध्ात्मिक, आत्मा और परमात्मा से संबंधित",
    "meaningEn": "",
    "examples": [
      {
        "en": "a spiritual life",
        "hi": "एक आध्यात्मिक जीवन"
      }
    ]
  },
  {
    "id": 66,
    "word": "spirituality",
    "pos": "n",
    "pronunciation": "का गुण",
    "meaningHi": "हाइयर स्पिरिचु ऐलिटी उच्चतर आध्ात्मिकता आत्मा और परमात्मा की खोज, ज्ान, ध्ान और भक्ति में लगे रहना -लोअर स्पिरिचु- ऐलिटी निम्न आध्ात्मिकता भूत-प्रेत",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 67,
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
    "id": 68,
    "word": "could",
    "pos": "v",
    "pronunciation": "कुड",
    "meaningHi": "सकता था; संभावना व्यक्त करना",
    "meaningEn": "past tense of 'can'; expressing possibility",
    "examples": [
      {
        "en": "She could be famous one day",
        "hi": "वह एक दिन प्रसिद्ध हो सकती है।"
      }
    ]
  },
  {
    "id": 69,
    "word": "let",
    "pos": "v",
    "pronunciation": "लेट",
    "meaningHi": "कुछ होने देना",
    "meaningEn": "",
    "examples": [
      {
        "en": "Let him go - उसे जाने दो! Let her eat",
        "hi": "उसे खाने दो!"
      }
    ]
  },
  {
    "id": 70,
    "word": "make",
    "pos": "v",
    "pronunciation": "मेक",
    "meaningHi": "बनाना",
    "meaningEn": "",
    "examples": [
      {
        "en": "His company makes sewing machines",
        "hi": "उसकी कंपनी सिलाई मशीन बनाती है।"
      }
    ]
  },
  {
    "id": 71,
    "word": "respect",
    "pos": "n / v",
    "pronunciation": "रिस्ेक्ट",
    "meaningHi": "संमान, आदरभावना",
    "meaningEn": "",
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
    "id": 72,
    "word": "think",
    "pos": "v",
    "pronunciation": "थिंक",
    "meaningHi": "सोचना, विचार करना",
    "meaningEn": "to believe; to use the mind",
    "examples": []
  },
  {
    "id": 73,
    "word": "bliss",
    "pos": "n",
    "pronunciation": "ब्लिस",
    "meaningHi": "परम आनंद",
    "meaningEn": "supreme happiness; divine joy",
    "examples": [
      {
        "en": "The beauty of nature is a source of great bliss",
        "hi": "प्रकृति का सौंदर्य महान आनंद का एक श्ोत है।"
      }
    ]
  },
  {
    "id": 74,
    "word": "come",
    "pos": "v",
    "pronunciation": "कम",
    "meaningHi": "आना",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 75,
    "word": "deity",
    "pos": "n",
    "pronunciation": "डेअटि",
    "meaningHi": "देवता",
    "meaningEn": "a god or goddess",
    "examples": []
  },
  {
    "id": 76,
    "word": "follow",
    "pos": "v",
    "pronunciation": "फ़ॉलो",
    "meaningHi": "पीछे-पीछे चलना, निर्देश के अनुसार कार्य करना 2 समझना 1",
    "meaningEn": "to go after",
    "examples": []
  },
  {
    "id": 77,
    "word": "give",
    "pos": "v",
    "pronunciation": "गिव",
    "meaningHi": "देना",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 78,
    "word": "good",
    "pos": "adj",
    "pronunciation": "गुड",
    "meaningHi": "अच्ा",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 79,
    "word": "human",
    "pos": "n / adj",
    "pronunciation": "ह्ूमन",
    "meaningHi": "मानव, मनुष्य | मानवीय, मनुष्य से संबंधित ह्ूमैनटि मानवता",
    "meaningEn": "",
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
    "id": 80,
    "word": "know",
    "pos": "v",
    "pronunciation": "नो",
    "meaningHi": "जानना",
    "meaningEn": "",
    "examples": [
      {
        "en": "know yourself",
        "hi": "अपने-आप को जानो"
      }
    ]
  },
  {
    "id": 81,
    "word": "peaceful",
    "pos": "adj",
    "pronunciation": "पीसफ़ल",
    "meaningHi": "शांतिपूर्ण",
    "meaningEn": "",
    "examples": [
      {
        "en": "a peaceful country",
        "hi": "एक शांत देश"
      }
    ]
  },
  {
    "id": 82,
    "word": "sacred",
    "pos": "adj",
    "pronunciation": "सेक्रिड",
    "meaningHi": "पवित्र",
    "meaningEn": "",
    "examples": [
      {
        "en": "The Vedas are the sacred books of the Hindus",
        "hi": "वेद हिंदुओं के पवित्र ग्रंथ हैं।"
      }
    ]
  },
  {
    "id": 83,
    "word": "speak",
    "pos": "v",
    "pronunciation": "स्पीक",
    "meaningHi": "बोलना",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 84,
    "word": "take",
    "pos": "v",
    "pronunciation": "टेक",
    "meaningHi": "लेना",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 85,
    "word": "use",
    "pos": "n / v",
    "pronunciation": "यूस",
    "meaningHi": "उपयोग करना; प्रयोग",
    "meaningEn": "to put into service; to employ",
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
    "id": 86,
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
    "id": 87,
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
    "id": 88,
    "word": "contentment",
    "pos": "n",
    "pronunciation": "कंटेंट्मंट",
    "meaningHi": "संतोष",
    "meaningEn": "satisfaction and peace",
    "examples": [
      {
        "en": "Contentment is a great virtue",
        "hi": "संतोष एक महान सद्ुण है।"
      }
    ]
  },
  {
    "id": 89,
    "word": "first",
    "pos": "det adj",
    "pronunciation": "फ़स्ट",
    "meaningHi": "पहला, प्रथम",
    "meaningEn": "before all others; earliest",
    "examples": []
  },
  {
    "id": 90,
    "word": "gratitude",
    "pos": "n",
    "pronunciation": "ग्ैटिट्यूड",
    "meaningHi": "कृतज्ञता",
    "meaningEn": "",
    "examples": [
      {
        "en": "Gratitude is among the greatest virtues",
        "hi": "कृतज्ञता महानतम गुणों में से एक है।"
      }
    ]
  },
  {
    "id": 91,
    "word": "honesty",
    "pos": "n",
    "pronunciation": "अौनेस्ी",
    "meaningHi": "ईमानदारी",
    "meaningEn": "",
    "examples": [
      {
        "en": "Honesty is a great virtue",
        "hi": "ईमानदारी एक महान सद्ुण है।"
      }
    ]
  },
  {
    "id": 92,
    "word": "kindness",
    "pos": "n",
    "pronunciation": "काइन्ड्नस",
    "meaningHi": "दयाभाव",
    "meaningEn": "",
    "examples": [
      {
        "en": "If you have kindness for others, God will have kindness for you",
        "hi": "अगर तुम दूसरों के प्रति दयाभाव रखते हो तो ईश्वर भी तुम्ारे प्रति दयाभाव रखेंगे।"
      }
    ]
  },
  {
    "id": 93,
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
    "id": 94,
    "word": "old",
    "pos": "adj",
    "pronunciation": "ओल्ड",
    "meaningHi": "बूढ़ा, वृद्ध 2 पुराना",
    "meaningEn": "",
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
    "id": 95,
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
    "id": 96,
    "word": "patient",
    "pos": "adj / n",
    "pronunciation": "पेशंट",
    "meaningHi": "धैर्यशील, धीरज रखने वाला | रोगी, जिसका इलाज चल रहा हो",
    "meaningEn": "",
    "examples": [
      {
        "en": "a patient person",
        "hi": "एक धैर्यशील व्यक्ति"
      }
    ]
  },
  {
    "id": 97,
    "word": "small",
    "pos": "adj",
    "pronunciation": "स्मोल",
    "meaningHi": "छोटा अंंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ",
    "meaningEn": "",
    "examples": [
      {
        "en": "small mistake",
        "hi": "छोटी भूूल"
      }
    ]
  },
  {
    "id": 98,
    "word": "up",
    "pos": "adv prep",
    "pronunciation": "अप",
    "meaningHi": "ऊपर की ओर",
    "meaningEn": "toward a higher position",
    "examples": []
  },
  {
    "id": 99,
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
    "id": 100,
    "word": "after",
    "pos": "adv",
    "pronunciation": "आफ़्टर",
    "meaningHi": "के बाद; पीछे",
    "meaningEn": "following in time; behind",
    "examples": [
      {
        "en": "The police are after him",
        "hi": "पुलिस उसके पीछे लगी है।"
      }
    ]
  },
  {
    "id": 101,
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
    "id": 102,
    "word": "between",
    "pos": "prep",
    "pronunciation": "बिट्ीन",
    "meaningHi": "दो के बीच में",
    "meaningEn": "in the space separating two things",
    "examples": []
  },
  {
    "id": 103,
    "word": "brother",
    "pos": "n",
    "pronunciation": "ब्रदर",
    "meaningHi": "भाई",
    "meaningEn": "a male sibling",
    "examples": []
  },
  {
    "id": 104,
    "word": "control",
    "pos": "n / v",
    "pronunciation": "कन्ट्ोल",
    "meaningHi": "नियंत्रण; वश में करना",
    "meaningEn": "to direct; power over something",
    "examples": [
      {
        "en": "Self",
        "hi": "control is especially important for students -आत्म-नियंत्रण विद्ार्थियों के लिए विशेष महत्त्वपूर्ण होता है।"
      },
      {
        "en": "Controlling our desires is not easy",
        "hi": "अपनी इच्ाओं को नियंत्रित करना आसान नहीं है।"
      }
    ]
  },
  {
    "id": 105,
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
    "id": 106,
    "word": "every",
    "pos": "det",
    "pronunciation": "एव्ी",
    "meaningHi": "प्रत्ेक, सब एव्रिवन हर आदमी, सभी",
    "meaningEn": "each one",
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
    "id": 107,
    "word": "freedom",
    "pos": "n",
    "pronunciation": "फ़्रीडम",
    "meaningHi": "स्वतंत्रता, आजादी फ़्ी प्रेस आजाद पत्रकारिता",
    "meaningEn": "state of being free",
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
    "id": 108,
    "word": "joy",
    "pos": "n",
    "pronunciation": "जोइ",
    "meaningHi": "खुशी",
    "meaningEn": "",
    "examples": [
      {
        "en": "Boating gives great joy",
        "hi": "नौका-विहार बड़ा आनंद प्रदान करता है।"
      }
    ]
  },
  {
    "id": 109,
    "word": "little",
    "pos": "adj",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 110,
    "word": "off",
    "pos": "adv prep",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 111,
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
    "id": 112,
    "word": "put",
    "pos": "v",
    "pronunciation": "पुट",
    "meaningHi": "रखना, डालना 156 157 Q अंंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ",
    "meaningEn": "",
    "examples": [
      {
        "en": "She put the clothes in the suitcase",
        "hi": "उसने कपड़ों को सूूटकेस में डाला।"
      }
    ]
  },
  {
    "id": 113,
    "word": "run",
    "pos": "n / v",
    "pronunciation": "रन",
    "meaningHi": "दौड़ | दौड़ना",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 114,
    "word": "serve",
    "pos": "v",
    "pronunciation": "सर्व",
    "meaningHi": "सेवा करना 2 भोजन परोसना",
    "meaningEn": "to work for; to provide food",
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
    "id": 115,
    "word": "too",
    "pos": "adv",
    "pronunciation": "टू",
    "meaningHi": "भी 2 बहुत 1",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 116,
    "word": "under",
    "pos": "prep",
    "pronunciation": "अन्डर",
    "meaningHi": "नीचे, नीचे से",
    "meaningEn": "",
    "examples": [
      {
        "en": "He pushed the bag under the bed",
        "hi": "उसने थैले को बिस्तर के नीचे ठेल दिया।"
      }
    ]
  },
  {
    "id": 117,
    "word": "way",
    "pos": "n",
    "pronunciation": "वे",
    "meaningHi": "रास्ता; तरीका, ढंग",
    "meaningEn": "a method; a path or road",
    "examples": []
  },
  {
    "id": 118,
    "word": "work",
    "pos": "n / v",
    "pronunciation": "वर्क",
    "meaningHi": "कार्य | कार्य करना",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 119,
    "word": "above",
    "pos": "adv",
    "pronunciation": "अबव",
    "meaningHi": "ऊपर",
    "meaningEn": "in a higher position; more than",
    "examples": []
  },
  {
    "id": 120,
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
    "id": 121,
    "word": "already",
    "pos": "adv",
    "pronunciation": "ओलरेडि",
    "meaningHi": "पहले से, पहले ही",
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
    "id": 122,
    "word": "always",
    "pos": "adv",
    "pronunciation": "ओलवेज़",
    "meaningHi": "हमेशा, सदैव",
    "meaningEn": "at all times; forever",
    "examples": [
      {
        "en": "He is always polite",
        "hi": "वह हमेशा विनम्र रहता है।"
      }
    ]
  },
  {
    "id": 123,
    "word": "around",
    "pos": "adv",
    "pronunciation": "अराउंड",
    "meaningHi": "चारों ओर; लगभग",
    "meaningEn": "on every side; approximately",
    "examples": [
      {
        "en": "No one is around",
        "hi": "कोई भी आसपास नहीं है।"
      }
    ]
  },
  {
    "id": 124,
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
    "id": 125,
    "word": "behind",
    "pos": "adv",
    "pronunciation": "बिहाइंड",
    "meaningHi": "पीछे, पीठ की ओर",
    "meaningEn": "at the back of; after",
    "examples": [
      {
        "en": "My house is behind the movie theatre",
        "hi": "मेरा घर सिनेमा हॉल के पीछे है।"
      }
    ]
  },
  {
    "id": 126,
    "word": "below",
    "pos": "prep adv",
    "pronunciation": "बिलो,",
    "meaningHi": "नीचे, नीचे की ओर",
    "meaningEn": "under; lower than",
    "examples": [
      {
        "en": "Her performance was below average",
        "hi": "उसका कार्य औसत से नीचे दर्जे का था।"
      }
    ]
  },
  {
    "id": 127,
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
    "id": 128,
    "word": "dignity",
    "pos": "n",
    "pronunciation": "डिग्निटी",
    "meaningHi": "गरिमा, शालीनता",
    "meaningEn": "quality of being worthy of respect",
    "examples": [
      {
        "en": "He conducts himself with great dignity",
        "hi": "वह बड़ी गरिमा के साथ चलता-फिरता-बोलता है।"
      }
    ]
  },
  {
    "id": 129,
    "word": "earth",
    "pos": "n",
    "pronunciation": "अर्थ",
    "meaningHi": "पृथ्वी; मिट्टी",
    "meaningEn": "the world; soil",
    "examples": []
  },
  {
    "id": 130,
    "word": "empathy",
    "pos": "n",
    "pronunciation": "एम्पथि",
    "meaningHi": "समानुभूति किसी परिस्थिति में कोई दूसरा व्यक्ति कैसा महसूस कर रहा होगा, यह खुद महसूस करना और समझना 66 67 अंंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ",
    "meaningEn": "sharing others' feelings",
    "examples": []
  },
  {
    "id": 131,
    "word": "end",
    "pos": "n / v",
    "pronunciation": "एन्ड",
    "meaningHi": "अंत, समाप्ति; समाप्त करना",
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
    "id": 132,
    "word": "ethics",
    "pos": "n",
    "pronunciation": "एथिक्स",
    "meaningHi": "नैतिकता, नैतिकतापूर्ण आचार-विचार",
    "meaningEn": "moral principles",
    "examples": [
      {
        "en": "Ethics should never be neglected in life",
        "hi": "जीवन में नैतिकता की उपेक्षा कभी नहीं करनी चाहिए।"
      }
    ]
  },
  {
    "id": 133,
    "word": "find",
    "pos": "v",
    "pronunciation": "फ़ाइन्ड",
    "meaningHi": "खोजना, पता लगाना 2 पा लेना",
    "meaningEn": "",
    "examples": [
      {
        "en": "trying to find out",
        "hi": "पता लगाने की कोशिश कर रहा"
      },
      {
        "en": "I found my lost wallet",
        "hi": "मैंने अपना खोया बटुआ पा लिया।"
      }
    ]
  },
  {
    "id": 134,
    "word": "grateful",
    "pos": "adj",
    "pronunciation": "ग्ेट्फ़ल",
    "meaningHi": "कृतज्ञ, आभारी",
    "meaningEn": "",
    "examples": [
      {
        "en": "Let's be grateful to our martyrs",
        "hi": "अपने शहीदों के प्रति हम कृतज्ञ हों।"
      }
    ]
  },
  {
    "id": 135,
    "word": "great",
    "pos": "adj",
    "pronunciation": "ग्रेट",
    "meaningHi": "महान 2 बहुत बड़ा",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 136,
    "word": "him",
    "pos": "pron",
    "pronunciation": "हिम",
    "meaningHi": "उसको, उसे (पुरुष)",
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
    "id": 137,
    "word": "light",
    "pos": "n / v / adj",
    "pronunciation": "लाइट",
    "meaningHi": "प्रकाश, रोशनी",
    "meaningEn": "brightness; not heavy; to illuminate",
    "examples": [
      {
        "en": "light a cigarette",
        "hi": "सिगरेट जलाना; light a candle - मोमबत्ती जलाना"
      },
      {
        "en": "light baggage",
        "hi": "हलका सामान"
      }
    ]
  },
  {
    "id": 138,
    "word": "long",
    "pos": "adj / adv",
    "pronunciation": "लौंग",
    "meaningHi": "लंबा | लंबे समय तक",
    "meaningEn": "",
    "examples": [
      {
        "en": "long distance",
        "hi": "लंबी दूरी"
      },
      {
        "en": "How long will it take? - कितना समय लगेगा? Long-established traditions",
        "hi": "लम्े समय से चली आ रही परंपराएं।"
      }
    ]
  },
  {
    "id": 139,
    "word": "never",
    "pos": "adv",
    "pronunciation": "को धोखा न दो",
    "meaningHi": "अंंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ net",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 140,
    "word": "number",
    "pos": "n",
    "pronunciation": "नम्बर र",
    "meaningHi": "संख्ा, अंक अंंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ",
    "meaningEn": "",
    "examples": [
      {
        "en": "What is the likely number of people arriving today?",
        "hi": "आज यहाँ पहुँचने वाले लोगों की संभावित संख्या क्ा है?"
      }
    ]
  },
  {
    "id": 141,
    "word": "service",
    "pos": "n",
    "pronunciation": "सर्विस",
    "meaningHi": "नौकरी 2 सेवा",
    "meaningEn": "",
    "examples": [
      {
        "en": "He has got into government service",
        "hi": "वह सरकारी नौकरी में चला गया है।"
      }
    ]
  },
  {
    "id": 142,
    "word": "since",
    "pos": "prep conj adv",
    "pronunciation": "सिन्स",
    "meaningHi": "चूँकि, कोंकि 2 से अतीत में विशिष्ट समयबिंदु से अब तक 1",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 143,
    "word": "whole",
    "pos": "n adj",
    "pronunciation": "होल",
    "meaningHi": "पूरा, सारा होल्ेल र थोकविक्रेक्रेता",
    "meaningEn": "",
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
    "id": 144,
    "word": "wrong",
    "pos": "adj",
    "pronunciation": "रौंग",
    "meaningHi": "गलत, असत्य 224 225 अंंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 145,
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
    "id": 146,
    "word": "evil",
    "pos": "adj / n",
    "pronunciation": "ईवल",
    "meaningHi": "बुरा, हानिकारक, दुष्ट | बुराई, दुष्टता ex एक्स भूतपूर्व",
    "meaningEn": "",
    "examples": [
      {
        "en": "evil tradition of animal-sacrifice",
        "hi": "पशुबलि की बुरी परंपरा"
      },
      {
        "en": "fight the evil",
        "hi": "बुराई से लड़ो"
      }
    ]
  },
  {
    "id": 147,
    "word": "happy",
    "pos": "adj",
    "pronunciation": "हैपि",
    "meaningHi": "खुश हैपिनस प्रसन्नता, खुशी",
    "meaningEn": "",
    "examples": [
      {
        "en": "Isn't happiness the main aim of life?",
        "hi": "क्ा सुख जीवन का मुख्य उद्देश्य नहीं है?"
      }
    ]
  },
  {
    "id": 148,
    "word": "home",
    "pos": "n",
    "pronunciation": "होम",
    "meaningHi": "गृह घर",
    "meaningEn": "",
    "examples": [
      {
        "en": "It the family that turns a house into a home",
        "hi": "यह परिवार है जो एक मकान को एक घर में बदल देता है।"
      }
    ]
  },
  {
    "id": 149,
    "word": "money",
    "pos": "n",
    "pronunciation": "मनि",
    "meaningHi": "रुपया, पैसा, मुद्रा",
    "meaningEn": "",
    "examples": [
      {
        "en": "Money is important but not everything",
        "hi": "पैसा महत्त्वपूर्ण है मगर सब -कुछ नहीं।"
      }
    ]
  },
  {
    "id": 150,
    "word": "power",
    "pos": "n",
    "pronunciation": "पाउअर",
    "meaningHi": "बल, शक्ति 2 बिजली",
    "meaningEn": "ability to act; strength; authority",
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
    "id": 151,
    "word": "school",
    "pos": "n",
    "pronunciation": "स्ूल",
    "meaningHi": "पाठशाला, स्ूल",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 152,
    "word": "sister",
    "pos": "n",
    "pronunciation": "सिस्टर",
    "meaningHi": "बहन 180 181 अंंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 153,
    "word": "sorrow",
    "pos": "n",
    "pronunciation": "सॉरो",
    "meaningHi": "दुःख",
    "meaningEn": "",
    "examples": [
      {
        "en": "Enlightened detachment is the best medicine for sorrow",
        "hi": "अनासक्ति दुःख की सबसे अच्छी दवा है।"
      }
    ]
  },
  {
    "id": 154,
    "word": "voice",
    "pos": "n",
    "pronunciation": "वोइस",
    "meaningHi": "मुख से निकलने वाली आवाज या बोली",
    "meaningEn": "",
    "examples": [
      {
        "en": "a sweet voice",
        "hi": "एक मधुर आवाज"
      }
    ]
  },
  {
    "id": 155,
    "word": "water",
    "pos": "n / v",
    "pronunciation": "पौधों में पानी पटा रही है।",
    "meaningHi": "वॉटर पानी",
    "meaningEn": "",
    "examples": [
      {
        "en": "Let's save water",
        "hi": "आओ, पानी बचाएँ"
      }
    ]
  },
  {
    "id": 156,
    "word": "ask",
    "pos": "v",
    "pronunciation": "आस्क",
    "meaningHi": "पूछना",
    "meaningEn": "",
    "examples": [
      {
        "en": "Don't ask too many questions",
        "hi": "ढेर सारे सवाल न पूूछो।"
      }
    ]
  },
  {
    "id": 157,
    "word": "begin",
    "pos": "v",
    "pronunciation": "बिगिन",
    "meaningHi": "शुरू होना, शुरू करना",
    "meaningEn": "to start; to commence",
    "examples": [
      {
        "en": "Begin working, and the problems will be solved",
        "hi": "काम करना शुरू करो, और समस्ाएं सुलझ जाएंगी।"
      }
    ]
  },
  {
    "id": 158,
    "word": "choose",
    "pos": "v",
    "pronunciation": "चूज़",
    "meaningHi": "चुनना Christian-",
    "meaningEn": "to select",
    "examples": [
      {
        "en": "Never choose a bad character as your friend",
        "hi": "एक बुरे चरित्र वाले व्यक्ति को अपने दोस्त के रूप में कभी मत चुनो।"
      }
    ]
  },
  {
    "id": 159,
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
    "id": 160,
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
    "id": 161,
    "word": "feel",
    "pos": "v",
    "pronunciation": "फ़ील",
    "meaningHi": "महसूस करना",
    "meaningEn": "",
    "examples": [
      {
        "en": "Feel grateful when somebody helps you",
        "hi": "कृतज्ञ महसूूस करो जब कोई तुम्ारी मदद करे।"
      }
    ]
  },
  {
    "id": 162,
    "word": "help",
    "pos": "n / v",
    "pronunciation": "हेल्प",
    "meaningHi": "मदद, सहायता | मदद करना",
    "meaningEn": "",
    "examples": [
      {
        "en": "I need some help",
        "hi": "मुझे थोड़े मदद की जरूरत है।"
      },
      {
        "en": "Let's help the needy and the poor",
        "hi": "हम जरूरतमंदों और गरीबों की मदद करें।"
      }
    ]
  },
  {
    "id": 163,
    "word": "honour",
    "pos": "n",
    "pronunciation": "फ़ैैमलि",
    "meaningHi": "अौनर परिवार की प्रतिष्ा, संमान",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 164,
    "word": "innocent",
    "pos": "adj",
    "pronunciation": "इनसन्ट",
    "meaningHi": "बेकसूर 2 भोलाभाला",
    "meaningEn": "",
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
    "id": 165,
    "word": "joyful",
    "pos": "adj",
    "pronunciation": "जोयफ़ल",
    "meaningHi": "आनंदपूर्ण, मस्तीभरा",
    "meaningEn": "",
    "examples": [
      {
        "en": "a joyful journey",
        "hi": "एक मस्ी भरी यात्रा"
      }
    ]
  },
  {
    "id": 166,
    "word": "justice",
    "pos": "n",
    "pronunciation": "जस्टिस",
    "meaningHi": "न्याय, इंसाफ 2 जज, न्यायाधीश K अंंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ",
    "meaningEn": "",
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
    "id": 167,
    "word": "keep",
    "pos": "v",
    "pronunciation": "कीप",
    "meaningHi": "रखना",
    "meaningEn": "",
    "examples": [
      {
        "en": "Keep the books in the bookshelf",
        "hi": "किताबों को बुकशेल्फ में रखो"
      }
    ]
  },
  {
    "id": 168,
    "word": "leave",
    "pos": "n / v",
    "pronunciation": "लीव",
    "meaningHi": "छुट्ी, अवकाश | छोड़ देना, किसी व्यक्ति या वस्तु से दूर जाना",
    "meaningEn": "",
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
    "id": 169,
    "word": "live",
    "pos": "adv adj",
    "pronunciation": "लाइव",
    "meaningHi": "जीवित, सजीव 2 दर्शकों के सामने सजीव रूप में प्रस्तुत जो पहले से रिकॉर्ड किया हुआ नहीं हो, बल्कि अभी चल रहा हो 1",
    "meaningEn": "",
    "examples": [
      {
        "en": "We live in Delhi",
        "hi": "हम दिल्ी में रहते हैं।"
      },
      {
        "en": "All of us want to live long",
        "hi": "हम सभी लंबा जीना चाहते हैं।"
      }
    ]
  },
  {
    "id": 170,
    "word": "look",
    "pos": "v",
    "pronunciation": "लुक",
    "meaningHi": "देखना",
    "meaningEn": "",
    "examples": [
      {
        "en": "look at me",
        "hi": "मेरी ओर देखो।"
      }
    ]
  },
  {
    "id": 171,
    "word": "loyal",
    "pos": "adj",
    "pronunciation": "लोयल",
    "meaningHi": "वफादार, निष्ावान",
    "meaningEn": "",
    "examples": [
      {
        "en": "a loyal servant",
        "hi": "एक वफादार सेवक"
      }
    ]
  },
  {
    "id": 172,
    "word": "loyalty",
    "pos": "n",
    "pronunciation": "लोयल्टि",
    "meaningHi": "वफादारी, निष्ा",
    "meaningEn": "",
    "examples": [
      {
        "en": "His loyalty is beyond doubt",
        "hi": "उसकी वफादारी संदेह से परे है।"
      }
    ]
  },
  {
    "id": 173,
    "word": "moral",
    "pos": "adj",
    "pronunciation": "मॉरल",
    "meaningHi": "नैतिक, सदाचारी मॉरल डाइलमा नैतिक दुविधा यानि यह कर्तव्य करें या वह कर्तव्य करें, क्या करें, ऐसी दुविधा मरैलिटी नैतिकता क्ा धर्मपूर्ण या नैतिक है, और",
    "meaningEn": "",
    "examples": [
      {
        "en": "He has a strong moral character",
        "hi": "वह एक मजबूूत नैतिक चरित्र वाला व्यक्ति है।"
      }
    ]
  },
  {
    "id": 174,
    "word": "move",
    "pos": "n / v",
    "pronunciation": "मूव",
    "meaningHi": "स्ान या स्थिति में परिवर्तन, कदम 2 चाल | 1 हिलना 2 चलना, चलाना",
    "meaningEn": "",
    "examples": [
      {
        "en": "This is a move in the right direction",
        "hi": "यह सही दिशा में एक कदम है।"
      },
      {
        "en": "Good chess players make well thought out moves",
        "hi": "शतरंज के अच्े खिलाड़ी अच्छी तरह सोची-समझी चाल चलते हैं।"
      }
    ]
  },
  {
    "id": 175,
    "word": "need",
    "pos": "n / v",
    "pronunciation": "नीड",
    "meaningHi": "जरूरत | जरूरत होना",
    "meaningEn": "",
    "examples": [
      {
        "en": "My needs are limited",
        "hi": "मेरी जरूरतें थोड़ी हैं।"
      },
      {
        "en": "I need you",
        "hi": "मुझे तुम्ारी जरूरत है।"
      }
    ]
  },
  {
    "id": 176,
    "word": "start",
    "pos": "n / v",
    "pronunciation": "स्टाट",
    "meaningHi": "शुरुआत | शुरू करना",
    "meaningEn": "",
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
    "id": 177,
    "word": "strong",
    "pos": "adj",
    "pronunciation": "स्ट्रौंौंग",
    "meaningHi": "मजबूत, बलवान",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 178,
    "word": "trust",
    "pos": "n / v",
    "pronunciation": "ट्रस्ट",
    "meaningHi": "विश्ास",
    "meaningEn": "firm belief; to have confidence in",
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
    "id": 179,
    "word": "try",
    "pos": "v",
    "pronunciation": "ट्राइ",
    "meaningHi": "प्रयत्न करना",
    "meaningEn": "",
    "examples": [
      {
        "en": "Keep trying, and you will succeed",
        "hi": "कोशिश करते रहो, और तुम्ें सफलता मिलेगी।"
      }
    ]
  },
  {
    "id": 180,
    "word": "value",
    "pos": "n / v",
    "pronunciation": "वैल्ू",
    "meaningHi": "मूल्य, कीमत | किसी व्यक्ति या वस्तु को महत्त्वपूर्ण या मूल्यवान मानना",
    "meaningEn": "",
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
    "id": 181,
    "word": "want",
    "pos": "v",
    "pronunciation": "वॉन्ट",
    "meaningHi": "चाहना",
    "meaningEn": "",
    "examples": [
      {
        "en": "I want to eat",
        "hi": "मैं खाना चाहता हँ।"
      }
    ]
  },
  {
    "id": 182,
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
    "id": 183,
    "word": "eat",
    "pos": "v",
    "pronunciation": "ईट",
    "meaningHi": "खाना",
    "meaningEn": "to consume food",
    "examples": []
  },
  {
    "id": 184,
    "word": "grow",
    "pos": "v",
    "pronunciation": "ग्ो",
    "meaningHi": "बढ़ना, उगना",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 185,
    "word": "happen",
    "pos": "v",
    "pronunciation": "हैपन",
    "meaningHi": "होना, घटित होना",
    "meaningEn": "",
    "examples": [
      {
        "en": "What happened?",
        "hi": "क्ा हुआ?"
      }
    ]
  },
  {
    "id": 186,
    "word": "hold",
    "pos": "n / v",
    "pronunciation": "होल्ड",
    "meaningHi": "पकड़ | पकड़ना, थामे रहना",
    "meaningEn": "",
    "examples": [
      {
        "en": "The professor has a good hold on his students",
        "hi": "इस प्राध्यापक की अपने छात्रों पर अच्छी पकड़ है।"
      },
      {
        "en": "Please hold the glass for a moment",
        "hi": "कृपया एक क्षण के लिए ग्ास को पकड़ो।"
      }
    ]
  },
  {
    "id": 187,
    "word": "law",
    "pos": "n",
    "pronunciation": "लो",
    "meaningHi": "कानून",
    "meaningEn": "",
    "examples": [
      {
        "en": "law abiding citizens",
        "hi": "कानूून को मानने वाले नागरिक"
      }
    ]
  },
  {
    "id": 188,
    "word": "lead",
    "pos": "v",
    "pronunciation": "लीड",
    "meaningHi": "नेतृत्व करना 2 किसी व्यक्ति को साथ ले जाना या उसे रास्ता दिखाना, सही दिशा में ले जाना 1",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 189,
    "word": "lose",
    "pos": "v",
    "pronunciation": "लूज़",
    "meaningHi": "खो देना",
    "meaningEn": "",
    "examples": [
      {
        "en": "don't lose patience - धीरज मत खोओ; I lost my wallet",
        "hi": "मैंने अपना बटुआ खो दिया।"
      }
    ]
  },
  {
    "id": 190,
    "word": "love",
    "pos": "n / v",
    "pronunciation": "लव",
    "meaningHi": "प्रेम, प्ार | प्ार करना",
    "meaningEn": "",
    "examples": [
      {
        "en": "love is elixir",
        "hi": "प्रेम अमृत है।"
      },
      {
        "en": "Let's love all creatures",
        "hi": "हम सभी जीवों से प्रेम करें।"
      }
    ]
  },
  {
    "id": 191,
    "word": "meet",
    "pos": "v",
    "pronunciation": "मीट",
    "meaningHi": "मिलना, भेंट होना, भेंट करना अंंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ",
    "meaningEn": "",
    "examples": [
      {
        "en": "I met a saint",
        "hi": "मैं एक संत से मिला।"
      }
    ]
  },
  {
    "id": 192,
    "word": "open",
    "pos": "adj / v",
    "pronunciation": "ओपन",
    "meaningHi": "खुला हुआ | खोलना",
    "meaningEn": "",
    "examples": [
      {
        "en": "The door is open",
        "hi": "दरवाजा खुला है।"
      },
      {
        "en": "Please open the door",
        "hi": "कृपया दरवाजा खोलें।"
      }
    ]
  },
  {
    "id": 193,
    "word": "pay",
    "pos": "n / v",
    "pronunciation": "पे",
    "meaningHi": "वेतन | किसी काम के लिए भुगतान करना या पैसे देना",
    "meaningEn": "",
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
    "id": 194,
    "word": "play",
    "pos": "n / v",
    "pronunciation": "प्े",
    "meaningHi": "खेल 2 नाटक | खेलना",
    "meaningEn": "",
    "examples": [
      {
        "en": "Play and studies should coexist",
        "hi": "खेल और पढ़ाई साथ-साथ रहने चाहिए।"
      },
      {
        "en": "Shakespeare wrote a number of famous plays",
        "hi": "शेक्सपियर ने कई प्रसिद्ध नाटक लिखे।"
      }
    ]
  },
  {
    "id": 195,
    "word": "remember",
    "pos": "v",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 196,
    "word": "sit",
    "pos": "v",
    "pronunciation": "सिट",
    "meaningHi": "बैठना",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 197,
    "word": "stand",
    "pos": "n / v",
    "pronunciation": "स्ैन्ड",
    "meaningHi": "स्टैंड, वस्तु को टेकने या टिकाने का साधन | खड़ा होना | समझना",
    "meaningEn": "",
    "examples": [
      {
        "en": "Do you understand?",
        "hi": "क्ा तुम समझ रहे हो?"
      }
    ]
  },
  {
    "id": 198,
    "word": "stop",
    "pos": "n / v",
    "pronunciation": "स्ॉप",
    "meaningHi": "ठहराव | रोकना",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 199,
    "word": "understand",
    "pos": "v",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 200,
    "word": "walk",
    "pos": "n / v",
    "pronunciation": "वोक",
    "meaningHi": "पैदल सैर, पैदल भ्रमण | टहलना, चलना",
    "meaningEn": "",
    "examples": [
      {
        "en": "a long walk",
        "hi": "एक लंबी पैदल सैर"
      }
    ]
  },
  {
    "id": 201,
    "word": "watch",
    "pos": "n / v",
    "pronunciation": "वॉच",
    "meaningHi": "हाथघड़ी 2 निगरानी | ध्ान से देखना",
    "meaningEn": "",
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
    "id": 202,
    "word": "write",
    "pos": "v",
    "pronunciation": "राइट",
    "meaningHi": "लिखना",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 203,
    "word": "caring",
    "pos": "adj",
    "pronunciation": "केयरिंग",
    "meaningHi": "देखभाल के स्वभाव वाला",
    "meaningEn": "showing kindness",
    "examples": []
  },
  {
    "id": 204,
    "word": "close",
    "pos": "adj / n / v",
    "pronunciation": "क्ोज़",
    "meaningHi": "बंद करना; नज़दीक; निकट",
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
    "id": 205,
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
    "id": 206,
    "word": "courtesy",
    "pos": "n",
    "pronunciation": "कटसी",
    "meaningHi": "शिष्ट या सभ्य व्यवहार",
    "meaningEn": "polite behaviour",
    "examples": [
      {
        "en": "It is a common courtesy to say 'thank you' to someone who provides some help",
        "hi": "जो मदद करे उसे 'धन्यवाद' कहना एक सामान्य शिष्टाचार है।"
      }
    ]
  },
  {
    "id": 207,
    "word": "create",
    "pos": "v",
    "pronunciation": "क्रिएट",
    "meaningHi": "उत्पन्न करना, सृजन करना, कुछ बनाना",
    "meaningEn": "to bring into existence",
    "examples": [
      {
        "en": "Did God create this universe?",
        "hi": "क्ा ईश्वर ने इस ब्रहांड का सृजन किया?"
      },
      {
        "en": "Did God create this universe?",
        "hi": "क्ा ईश्वर ने इस ब्रहांड का सृजन किया?"
      }
    ]
  },
  {
    "id": 208,
    "word": "diligent",
    "pos": "adj",
    "pronunciation": "डिलिजन्ट",
    "meaningHi": "परिश्रमी",
    "meaningEn": "hardworking",
    "examples": []
  },
  {
    "id": 209,
    "word": "eye",
    "pos": "n",
    "pronunciation": "आइ",
    "meaningHi": "नेत्र, आँख 74 75 F अंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ",
    "meaningEn": "organ of sight",
    "examples": []
  },
  {
    "id": 210,
    "word": "fight",
    "pos": "v",
    "pronunciation": "फ़ाइट",
    "meaningHi": "लड़ना",
    "meaningEn": "to struggle; battle",
    "examples": [
      {
        "en": "Shouldn't we fight against injustice?",
        "hi": "क्ा हमें अन्ाय से लड़ना नहीं चाहिए?"
      }
    ]
  },
  {
    "id": 211,
    "word": "house",
    "pos": "n",
    "pronunciation": "हाउस",
    "meaningHi": "घर",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 212,
    "word": "immoral",
    "pos": "n",
    "pronunciation": "इम्मौरल",
    "meaningHi": "अनैतिक, जो नैतिकता के खिलाफ हो",
    "meaningEn": "",
    "examples": [
      {
        "en": "Cheating a friend is an immoral act",
        "hi": "एक मित्र को धोखा देना एक अनैतिक काम है"
      }
    ]
  },
  {
    "id": 213,
    "word": "nature",
    "pos": "n",
    "pronunciation": "उसका स्वभाव मित्रतापूर्ण है।",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 214,
    "word": "night",
    "pos": "n",
    "pronunciation": "नाइट",
    "meaningHi": "रात",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 215,
    "word": "point",
    "pos": "n / v",
    "pronunciation": "पोइन्ट",
    "meaningHi": "बिंदु 2 मुख्य बात 3 दशमलव 4 जगह 5 संख्ा | 1 उंगली दिखाना 2 बतलाना 146 147 अंंगरेज़ी शब्द उच्ारण हिंदी में अर्थ",
    "meaningEn": "",
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
    "id": 216,
    "word": "polite",
    "pos": "adj",
    "pronunciation": "पलाइट",
    "meaningHi": "नम्र, शिष्ट, भद्र",
    "meaningEn": "",
    "examples": [
      {
        "en": "Being polite is a mark of civilization",
        "hi": "विनम्र होना सभ्यता का एक चिह्न है।"
      }
    ]
  },
  {
    "id": 217,
    "word": "protect",
    "pos": "v",
    "pronunciation": "प्रटेक्ट",
    "meaningHi": "रक्षा करना, बचाना",
    "meaningEn": "to keep safe; to guard",
    "examples": [
      {
        "en": "Protect children from bad influences",
        "hi": "बुरे प्रभावों से बचों की रक्षा करें।"
      }
    ]
  },
  {
    "id": 218,
    "word": "purpose",
    "pos": "n",
    "pronunciation": "पपस",
    "meaningHi": "उद्ेश्य",
    "meaningEn": "",
    "examples": [
      {
        "en": "What is the purpose of human life?",
        "hi": "मानव-जीवन का उद्देश्य क्ा है?"
      }
    ]
  },
  {
    "id": 219,
    "word": "simple",
    "pos": "adj",
    "pronunciation": "सिम्पल",
    "meaningHi": "आसान 2 सरल प्रकृति का",
    "meaningEn": "",
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
    "id": 220,
    "word": "sympathy",
    "pos": "n",
    "pronunciation": "सिम्पथि",
    "meaningHi": "सहानुभूति",
    "meaningEn": "",
    "examples": [
      {
        "en": "Let us have sympathy for the poor",
        "hi": "हम गरीबों से सहानुभूति रखें।"
      }
    ]
  },
  {
    "id": 221,
    "word": "thought",
    "pos": "n",
    "pronunciation": "थोट",
    "meaningHi": "विचार, चिंतन",
    "meaningEn": "",
    "examples": [
      {
        "en": "A good thought can change life",
        "hi": "एक अच्ा विचार जीवन को बदल सकता है।"
      }
    ]
  },
  {
    "id": 222,
    "word": "woman",
    "pos": "n",
    "pronunciation": "वुमन",
    "meaningHi": "महिला, स्त्री",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 223,
    "word": "young",
    "pos": "adj",
    "pronunciation": "यंग",
    "meaningHi": "कम उम्र वाला, किशोर, जवान",
    "meaningEn": "",
    "examples": [
      {
        "en": "Yog is for both the young and the old",
        "hi": "योग जवान और बूूढ़े सभी के लिए है।"
      }
    ]
  },
  {
    "id": 224,
    "word": "almost",
    "pos": "adv",
    "pronunciation": "ओलमउस्ट",
    "meaningHi": "लगभग, करीब-करीब",
    "meaningEn": "nearly; not quite",
    "examples": [
      {
        "en": "Almost everybody has come",
        "hi": "लगभग सभी आ गए हैं।"
      }
    ]
  },
  {
    "id": 225,
    "word": "anger",
    "pos": "n",
    "pronunciation": "ऐंंगर",
    "meaningHi": "क्रोध, गुस्ा",
    "meaningEn": "",
    "examples": [
      {
        "en": "Anger is one of the three doorways to hell",
        "hi": "गुस्ा नरक के तीन दरवाजों में से एक है।"
      }
    ]
  },
  {
    "id": 226,
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
    "id": 227,
    "word": "attention",
    "pos": "n",
    "pronunciation": "अटेंशन",
    "meaningHi": "ध्ान",
    "meaningEn": "",
    "examples": [
      {
        "en": "Pay attention to what your teacher says",
        "hi": "अपने शिक्षक की बात पर ध्यान दो।"
      }
    ]
  },
  {
    "id": 228,
    "word": "Brahm",
    "pos": "n",
    "pronunciation": "ब्रह्म",
    "meaningHi": "निराकार निर्विशेष परमेश्वर जिनका कोई एक निश्चित रूप या आकार नहीं होता। इन्ें 'निर्गुण ब्रह्म' भी कहते हैं।",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 229,
    "word": "Brahma",
    "pos": "n",
    "pronunciation": "ब्रह्ा",
    "meaningHi": "परब्रह्म-परमेश्वर द्ारा बनाए गए एक महादेवता जिन्ें हिंदू-धर्म के अनुसार संसार को रचने का दायित्व दिया गया है।",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 230,
    "word": "Dharm",
    "pos": "n",
    "pronunciation": "भगवद्-धर्म",
    "meaningHi": "यह वह धर्म है जो भगवद्-गीता को एकमात्र आधारग्ंथ के रूप में स्ीकार करता है। भगवान श्ीकृष्ण द्ारा दिया गया यह धर्म जातपात पर आधारित वर्णाश्रम धर्म से",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 231,
    "word": "dhyan",
    "pos": "n",
    "pronunciation": "ध्ान",
    "meaningHi": "ध्ान, मेडिटेशन",
    "meaningEn": "",
    "examples": [
      {
        "en": "When attention is constantly pointed on one object, it is called dhyan",
        "hi": "जब चेतना किसी एक चीज पर लगातार केंद्रित रहे तो इसे ध्यान कहते हैं।"
      }
    ]
  },
  {
    "id": 232,
    "word": "dhyanyog",
    "pos": "n",
    "pronunciation": "ध्ानयोग",
    "meaningHi": "ध्ानयोग ध्ान के माध्यम से अपनी आत्मा के वास्तविक ईश्वरीय स्वरूप का ज्ान",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 233,
    "word": "early",
    "pos": "adj adv",
    "pronunciation": "अर्लीी",
    "meaningHi": "जल्दी, सवेरे",
    "meaningEn": "before the expected time",
    "examples": [
      {
        "en": "Early to bed and early to rise makes a man healthy, wealthy and wise",
        "hi": "जल्ी सोना, जल्ी उठना इंसान को स्वस्थ, समृद्ध और विवेकशील बनाता है।"
      }
    ]
  },
  {
    "id": 234,
    "word": "enough",
    "pos": "pron",
    "pronunciation": "इनफ़",
    "meaningHi": "पर्याप्त, काफ़ी",
    "meaningEn": "as much as needed; sufficient",
    "examples": [
      {
        "en": "There is enough for everybody's need, nut never enough for anybody's greed",
        "hi": "सभी की जरूरतें पूूरी करने के लिए काफी है, लेकिन किसी की लोभपूूर्ति के लिए कभी कुछ भी काफी नहीं होता।"
      }
    ]
  },
  {
    "id": 235,
    "word": "experience",
    "pos": "n / v",
    "pronunciation": "इक्स्पिअ-",
    "meaningHi": "रिअन्स अनुभव, तजुरबा | अन्स अनुभव करना",
    "meaningEn": "knowledge gained; event",
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
    "id": 236,
    "word": "force",
    "pos": "n / v",
    "pronunciation": "फ़ोर्स",
    "meaningHi": "बल, शक्ति 2 सेना, पुलिस | दबाब देना, बाध्य करना",
    "meaningEn": "strength; to compel",
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
    "id": 237,
    "word": "further",
    "pos": "adj",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "more; additional",
    "examples": []
  },
  {
    "id": 238,
    "word": "Gita",
    "pos": "n",
    "pronunciation": "भगवद्-",
    "meaningHi": "गीता महाभारत के युद्ध के ठीक पहले श्ीकृष्ण के मुख से बोली गई ईश्वर की वाणी जिसे महर्षि वेदव्यास ने कविता का रूप दिया। यह हिंदुओं की कई पवित्र",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 239,
    "word": "Krishn",
    "pos": "n",
    "pronunciation": "कृष्ण",
    "meaningHi": "श्ीकृष्ण श्ीकृष्ण श्ीराम के साथ-साथ हिंदू-धर्म के सबसे आदर्श प्रतिनिधि हैं। ईश्वर के अवतार माने जाने वाले श्ीकृष्ण ने ही भगवद्-गीता का कथन किया था जो",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 240,
    "word": "moksha",
    "pos": "n",
    "pronunciation": "मोक्ष",
    "meaningHi": "मोक्ष, जन्म-मरण के चक्र से मुक्ति, निर्वाण",
    "meaningEn": "",
    "examples": [
      {
        "en": "Moksha is said to be the final goal of all humans",
        "hi": "मोक्ष सभी मनुष्यों का अंतिम लक्ष्य कहा जाता है।"
      }
    ]
  },
  {
    "id": 241,
    "word": "nirvana",
    "pos": "n",
    "pronunciation": "निर्वान",
    "meaningHi": "निर्वाण, मोक्ष जन्ममृत्ु के चक्र से और सभी दुखों से अंतिम मुक्ति no",
    "meaningEn": "",
    "examples": [
      {
        "en": "Nirvana is the final goal of life",
        "hi": "निर्वाण जीवन का अंतिम लक्ष्य है।"
      }
    ]
  },
  {
    "id": 242,
    "word": "often",
    "pos": "adv",
    "pronunciation": "अॉफ़न",
    "meaningHi": "अकसर, प्रायः",
    "meaningEn": "",
    "examples": [
      {
        "en": "He often visits our place",
        "hi": "वह अकसर हमारे यहाँ आता है।"
      }
    ]
  },
  {
    "id": 243,
    "word": "perhaps",
    "pos": "adv",
    "pronunciation": "पहैप्स",
    "meaningHi": "शायद, कदाचित",
    "meaningEn": "",
    "examples": [
      {
        "en": "Perhaps he is unwilling",
        "hi": "वह शायद इच्ुक नहीं है।"
      }
    ]
  },
  {
    "id": 244,
    "word": "quite",
    "pos": "adv",
    "pronunciation": "क्ाइट",
    "meaningHi": "बिलकुल, नितांत",
    "meaningEn": "",
    "examples": [
      {
        "en": "quite foolish",
        "hi": "बिलकुल मूर्खतापूर्ण"
      }
    ]
  },
  {
    "id": 245,
    "word": "Ram",
    "pos": "n",
    "pronunciation": "राम",
    "meaningHi": "श्ी राम अत्ंत प्राचीन काल में अयोध्ा के एक महान राजा थे। इन्ें ईश्वर का अवतार भी मानते हैं। इनके-जैसा सुदर्शन, शीलवान, वीर, परोपकारी, प्रजापालक, और",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 246,
    "word": "rather",
    "pos": "adv",
    "pronunciation": "आज थोड़ी ठंढ है।",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 247,
    "word": "really",
    "pos": "adv",
    "pronunciation": "रिअलि",
    "meaningHi": "सचमुच 2 आश्चर्य, रुचि, संदेह आदि व्यक्त करने के लिए प्रश्न-रूप में प्रयुक्त—! अर्थात, क्ा सचमुच?",
    "meaningEn": "",
    "examples": [
      {
        "en": "I am really surprised!",
        "hi": "मैं सचमुच चकित हँ!"
      }
    ]
  },
  {
    "id": 248,
    "word": "samadhi",
    "pos": "n",
    "pronunciation": "समाधि",
    "meaningHi": "ध्ान की सबसे ऊँची और गंभीर अवस्ा जिसमें पहुँचने पर अपनी आत्मा के ईश्वरीय स्वरूप और परमात्मा के दर्शन हो सकते हैं। S 303 170 171 अंंगरेज़ी शब्द उच्ारण",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 249,
    "word": "sense",
    "pos": "n",
    "pronunciation": "सेन्स",
    "meaningHi": "समझदारी, अच्छी परख या समझ",
    "meaningEn": "",
    "examples": [
      {
        "en": "dress sense",
        "hi": "पोशाक की समझदारी"
      }
    ]
  },
  {
    "id": 250,
    "word": "several",
    "pos": "det pron",
    "pronunciation": "सेवरल",
    "meaningHi": "अनेक, कुछ",
    "meaningEn": "",
    "examples": [
      {
        "en": "There are several colours in a rainbow",
        "hi": "इंद्रधनुष में अनेक रंग होते हैं।"
      }
    ]
  },
  {
    "id": 251,
    "word": "Shiv",
    "pos": "n",
    "pronunciation": "शिव",
    "meaningHi": "शिव परब्रह्म-परमेश्वर द्ारा रचे गए एक महादेवता जिन्ें अंत में सृष्टि को समेटने की जिम्ेवारी दी गई है।",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 252,
    "word": "smile",
    "pos": "n / v",
    "pronunciation": "स्माइल",
    "meaningHi": "मुस्ान, मुस्कराहट | मुस्कराना",
    "meaningEn": "",
    "examples": [
      {
        "en": "A good smile lights up the surroundings",
        "hi": "एक अच्छी मुस्ान परिवेश को प्रकाशित कर देती है।"
      }
    ]
  },
  {
    "id": 253,
    "word": "sometimes",
    "pos": "adv",
    "pronunciation": "सम्टाइम्ज़",
    "meaningHi": "कभीकभी अंंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ",
    "meaningEn": "",
    "examples": [
      {
        "en": "Sometimes I am in Delhi",
        "hi": "कभी-कभी मैं दिल्ी में रहता हँ।"
      }
    ]
  },
  {
    "id": 254,
    "word": "support",
    "pos": "n / v",
    "pronunciation": "सपोट",
    "meaningHi": "समर्थन और प्रोत्ाहन | समर्थन देना",
    "meaningEn": "",
    "examples": [
      {
        "en": "I support the law for population control",
        "hi": "मैं जनसंख्या नियंत्रण कानूून का समर्थन करता हँ।"
      }
    ]
  },
  {
    "id": 255,
    "word": "though",
    "pos": "conj",
    "pronunciation": "दो",
    "meaningHi": "यद्यपि, हालाँकि",
    "meaningEn": "",
    "examples": [
      {
        "en": "Though old, he can still run",
        "hi": "हालाँकि वह बूूढ़ा है, वह फिरभी दौड़ सकता है।"
      }
    ]
  },
  {
    "id": 256,
    "word": "together",
    "pos": "adv",
    "pronunciation": "टुगेदर",
    "meaningHi": "साथ-साथ",
    "meaningEn": "",
    "examples": [
      {
        "en": "They came together",
        "hi": "वे साथ-साथ आए"
      }
    ]
  },
  {
    "id": 257,
    "word": "tolerance",
    "pos": "n",
    "pronunciation": "टॉलरन्स",
    "meaningHi": "सहनशीलता, सहिष्ुता",
    "meaningEn": "",
    "examples": [
      {
        "en": "religious tolerance",
        "hi": "धार्मिक सहिष्णुष्णुता"
      }
    ]
  },
  {
    "id": 258,
    "word": "Vishnu",
    "pos": "n",
    "pronunciation": "विष्ु",
    "meaningHi": "महादेवता विष्ु परब्रह्म-परमेश्वर के वह सगुण-साकार रूप हैं जो सृष्टि का पालन करते हैं।",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 259,
    "word": "yet",
    "pos": "adv conj",
    "pronunciation": "येट",
    "meaningHi": "तब तक, अब तक 2 फिरभी",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 260,
    "word": "across",
    "pos": "adv",
    "pronunciation": "अक्ॉस",
    "meaningHi": "एक ओर से दूसरी ओर, आर-पार",
    "meaningEn": "from one side to the other",
    "examples": []
  },
  {
    "id": 261,
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
    "id": 262,
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
    "id": 263,
    "word": "aware",
    "pos": "adj",
    "pronunciation": "अवेअ",
    "meaningHi": "जागरूक, जानकारी रखने वाला",
    "meaningEn": "having knowledge of",
    "examples": [
      {
        "en": "The nation needs aware citizens",
        "hi": "देश को जागरूक नागरिकों की जरूरत है।"
      }
    ]
  },
  {
    "id": 264,
    "word": "birth",
    "pos": "n",
    "pronunciation": "बर्थ",
    "meaningHi": "जन्म",
    "meaningEn": "being born",
    "examples": []
  },
  {
    "id": 265,
    "word": "composed",
    "pos": "adj",
    "pronunciation": "कम्ोज़्ड",
    "meaningHi": "शांतचित्त 2 से निर्मित, से बना हुआ 1",
    "meaningEn": "calm; made up of",
    "examples": []
  },
  {
    "id": 266,
    "word": "confidence",
    "pos": "n",
    "pronunciation": "भरोसा है।",
    "meaningHi": "",
    "meaningEn": "self-belief",
    "examples": []
  },
  {
    "id": 267,
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
    "id": 268,
    "word": "cruelty",
    "pos": "n",
    "pronunciation": "क्ूअल्टि",
    "meaningHi": "क्रूरता, निर्दयता",
    "meaningEn": "cruel behaviour",
    "examples": [
      {
        "en": "Cruelty is a demonical trait",
        "hi": "निर्दयता एक आसुरी लक्षण है।"
      }
    ]
  },
  {
    "id": 269,
    "word": "culture",
    "pos": "n",
    "pronunciation": "अलग-अलग संस्कृति होती है।",
    "meaningHi": "",
    "meaningEn": "customs of a society",
    "examples": []
  },
  {
    "id": 270,
    "word": "destroy",
    "pos": "v",
    "pronunciation": "डिस्ट्रोय",
    "meaningHi": "नष्ट करना अंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ",
    "meaningEn": "to ruin completely",
    "examples": [
      {
        "en": "The atom bomb completely destroyed Hiroshima and Nagasaki cities in Japan in 1945",
        "hi": "अणु बम ने जापान के हिरोशिमा और नागासाकी शहरों को वर्ष 1945 में पूूरी तरह नष्ट कर दिया।"
      }
    ]
  },
  {
    "id": 271,
    "word": "doubt",
    "pos": "n / v",
    "pronunciation": "डाउट",
    "meaningHi": "संदेह, शक; संदेह करना",
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
    "id": 272,
    "word": "dream",
    "pos": "n / v",
    "pronunciation": "ड्ीम",
    "meaningHi": "सपना; स्वप्न देखना",
    "meaningEn": "images during sleep; an aspiration",
    "examples": []
  },
  {
    "id": 273,
    "word": "drink",
    "pos": "n / v",
    "pronunciation": "ड्रिंंक",
    "meaningHi": "पेय पदार्थ (जैसे, चाय, कोल्ड-ड्रिंंक, शरबत आदि) 2 शराब",
    "meaningEn": "to swallow liquid",
    "examples": []
  },
  {
    "id": 274,
    "word": "ear",
    "pos": "n",
    "pronunciation": "कान",
    "meaningHi": "कान",
    "meaningEn": "the organ of hearing",
    "examples": []
  },
  {
    "id": 275,
    "word": "education",
    "pos": "n",
    "pronunciation": "एजुकेशन",
    "meaningHi": "शिक्षाक्षा, तालीम",
    "meaningEn": "process of learning",
    "examples": []
  },
  {
    "id": 276,
    "word": "equal",
    "pos": "n adj / v",
    "pronunciation": "ईक्वल",
    "meaningHi": "बराबरी वाला, बराबर",
    "meaningEn": "the same in value",
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
    "id": 277,
    "word": "feeling",
    "pos": "n",
    "pronunciation": "फ़ीीलिंग",
    "meaningHi": "अहसास, भावना फ़ीीमेल मादा, स्त्री",
    "meaningEn": "emotion; sensation",
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
    "id": 278,
    "word": "finger",
    "pos": "n",
    "pronunciation": "फ़िंंगर",
    "meaningHi": "अंगुली",
    "meaningEn": "part of hand",
    "examples": []
  },
  {
    "id": 279,
    "word": "food",
    "pos": "n",
    "pronunciation": "फ़ूड",
    "meaningHi": "भोजन",
    "meaningEn": "things eaten",
    "examples": []
  },
  {
    "id": 280,
    "word": "genuine",
    "pos": "adj",
    "pronunciation": "जेन्युइन",
    "meaningHi": "असली, सचमुच का",
    "meaningEn": "",
    "examples": [
      {
        "en": "genuine love",
        "hi": "सचमुच का प्रेम"
      }
    ]
  },
  {
    "id": 281,
    "word": "greed",
    "pos": "n",
    "pronunciation": "ग्रीड",
    "meaningHi": "लालच ग्ीन वेज- टबल्स हरी सब््जियाँ",
    "meaningEn": "",
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
    "id": 282,
    "word": "hatred",
    "pos": "n",
    "pronunciation": "हेट्रिड",
    "meaningHi": "घृणा, नफरत हैव किसी के पास कुछ होना साधारणतः इसका प्रयोग सहायक क्रिया के रूप में होता है, जैसे",
    "meaningEn": "",
    "examples": [
      {
        "en": "Hatred cannot lead to God and goodness",
        "hi": "घृणा ईश्वर और अच्ाई की ओर नहीं ले जा सकती।"
      }
    ]
  },
  {
    "id": 283,
    "word": "inspired",
    "pos": "adj",
    "pronunciation": "इन्पाइअड",
    "meaningHi": "प्रेरित, प्रेरणापूर्ण इन्परेशन प्रेरणा",
    "meaningEn": "",
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
    "id": 284,
    "word": "intellect",
    "pos": "n",
    "pronunciation": "इन्टलेक्ट",
    "meaningHi": "प्रज्ा, बुद्धि इन्टलेक्ुअल बौद्धिक व्यक्ति इन्टलेक्ुअल बौद्धिक, बुद्धि से संबंध रखने वाला इंटेलिजन्स बुद्धि, अक्ल",
    "meaningEn": "",
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
    "id": 285,
    "word": "leg",
    "pos": "n",
    "pronunciation": "लेग",
    "meaningHi": "टाँग, पैर",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 286,
    "word": "misery",
    "pos": "n",
    "pronunciation": "मिज़रि",
    "meaningHi": "दुःख, घोर तकलीफ",
    "meaningEn": "",
    "examples": [
      {
        "en": "There is no end to their miseries",
        "hi": "उनके दुखों का कोई अंत नहीं है।"
      }
    ]
  },
  {
    "id": 287,
    "word": "mouth",
    "pos": "n",
    "pronunciation": "माउथ",
    "meaningHi": "मुँह, मुख",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 288,
    "word": "praise",
    "pos": "n / v",
    "pronunciation": "प्रेज़",
    "meaningHi": "तारीफ, प्रशंसा | प्रशंसा करना",
    "meaningEn": "",
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
    "id": 289,
    "word": "principle",
    "pos": "n",
    "pronunciation": "प्रिन्पल",
    "meaningHi": "सिद्धांद्धांत 2 नियम 1",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 290,
    "word": "shoulder",
    "pos": "n",
    "pronunciation": "शोल्डर",
    "meaningHi": "कंधा",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 291,
    "word": "success",
    "pos": "n",
    "pronunciation": "सक्ेस",
    "meaningHi": "सफलता, कामयाबी success-",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 292,
    "word": "suffer",
    "pos": "v",
    "pronunciation": "पड़ता है।",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 293,
    "word": "violence",
    "pos": "n",
    "pronunciation": "वाइअलन्स",
    "meaningHi": "हिंसा",
    "meaningEn": "",
    "examples": [
      {
        "en": "Violence is not a mark of a developed civilization",
        "hi": "हिंसा एक विकसित सभ्यता का लक्षण नहीं है।"
      }
    ]
  },
  {
    "id": 294,
    "word": "afraid",
    "pos": "adj",
    "pronunciation": "अफ्े़ड",
    "meaningHi": "डरा हुआ, भयभीत",
    "meaningEn": "",
    "examples": [
      {
        "en": "afraid of dogs",
        "hi": "कुतों से डरने वाला"
      }
    ]
  },
  {
    "id": 295,
    "word": "air",
    "pos": "n",
    "pronunciation": "एअ",
    "meaningHi": "हवा",
    "meaningEn": "",
    "examples": [
      {
        "en": "Let the air be pollution",
        "hi": "free - हवा को प्रदूषण-मुक्त रहने दो।"
      }
    ]
  },
  {
    "id": 296,
    "word": "avatar",
    "pos": "n",
    "pronunciation": "अवतार",
    "meaningHi": "ईश्वर का अवतार अवेलबल उपलब्ध ऐवरिज 1 औसत 2 साधारण",
    "meaningEn": "",
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
    "id": 297,
    "word": "car",
    "pos": "n",
    "pronunciation": "मोटरकार",
    "meaningHi": "काबोहाइड्रेट भोजन से उपलब्ध एक तत्त्व, जैसे शक्कर, जो शरीर को ऊर्जा प्रदान करता है",
    "meaningEn": "",
    "examples": [
      {
        "en": "Food grains contain much carbohydrate",
        "hi": "अन्न में काफी काबोहाइड्ेट होता है।"
      }
    ]
  },
  {
    "id": 298,
    "word": "choice",
    "pos": "n",
    "pronunciation": "चोइस",
    "meaningHi": "चुनाव, विकल्प",
    "meaningEn": "an act of selecting; an option",
    "examples": [
      {
        "en": "a good choice",
        "hi": "एक अच्ा चुनाव"
      }
    ]
  },
  {
    "id": 299,
    "word": "church",
    "pos": "n",
    "pronunciation": "चर्च",
    "meaningHi": "गिरजाघर ईसाइयों का",
    "meaningEn": "place of worship",
    "examples": []
  },
  {
    "id": 300,
    "word": "clean",
    "pos": "adj / v",
    "pronunciation": "क्ीन",
    "meaningHi": "साफ़, स्वच्छ; साफ़ करना",
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
    "id": 301,
    "word": "country",
    "pos": "n",
    "pronunciation": "कन्ट्रि",
    "meaningHi": "देश; ग्रामीण क्षेत्र",
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
    "id": 302,
    "word": "door",
    "pos": "n",
    "pronunciation": "दरवाजा",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 303,
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
    "id": 304,
    "word": "fire",
    "pos": "n / v",
    "pronunciation": "दिया।",
    "meaningHi": "फ़ायर अग्नि, आग",
    "meaningEn": "",
    "examples": [
      {
        "en": "Fire is given a sacred position in the Vedic religion",
        "hi": "वैदिक धर्म में अग्नि को एक पवित्र स्थान दिया गया है"
      }
    ]
  },
  {
    "id": 305,
    "word": "ground",
    "pos": "n",
    "pronunciation": "ग्ाउन्ड",
    "meaningHi": "भूमि, मैदान 2 किसी बात का आधार",
    "meaningEn": "",
    "examples": [
      {
        "en": "On what ground are you making the allegations?",
        "hi": "किस आधार पर आप आरोप लगा रहे हैं?"
      }
    ]
  },
  {
    "id": 306,
    "word": "practice",
    "pos": "n",
    "pronunciation": "प्ैक्टिस",
    "meaningHi": "अभ्यास 2 प्रथा 3 वकालत का काम 1 Players are having hard practice - खिलाड़ियों का अभ्ास जम कर चल रहा है। 2 Animal sacrifice is an old but bad practice - पशुबलि एक पुरानी लेकिन बुरी प्रथा है। 3 He has a…",
    "meaningEn": "",
    "examples": [
      {
        "en": "Players are having hard practice",
        "hi": "खिलाड़ियों का अभ्ास जम कर चल रहा है। 2 Animal sacrifice is an old but bad practice - पशुबलि एक पुरानी लेकिन बुरी प्रथा है। 3 He has a roaring practice - उसकी वकालत खूूब चलती है।"
      }
    ]
  },
  {
    "id": 307,
    "word": "Prakriti",
    "pos": "n",
    "pronunciation": "परा प्रकृति",
    "meaningHi": "पराप्रकृति परब्रह्म-परमेश्वर की वह शक्ति जिससे मिल कर परब्रह्म-परमेश्वर ब्रह्मांडों, महादेवताओं, देवताओं और अन्य जीवों की रचना करते हैं।",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 308,
    "word": "proud",
    "pos": "adj",
    "pronunciation": "प्राउड",
    "meaningHi": "अभिमानी, गर्वान्वित प्ॉविडेंट फ़न्ड भविष्यनिधि कामकाज करने वालों की कमाई का एक अंश जिस निधि में उनके भविष्य में काम आने के लिए डाल दिया जाता है, उसे",
    "meaningEn": "",
    "examples": [
      {
        "en": "proud parents",
        "hi": "गर्वान्वित माता-पिता"
      }
    ]
  },
  {
    "id": 309,
    "word": "sorry",
    "pos": "adj",
    "pronunciation": "सॉरि",
    "meaningHi": "खेद है, क्षमा करें खेद व्यक्त करने या माफी माँगने के लिए प्रयोग किया जाने वाला शब्द",
    "meaningEn": "",
    "examples": [
      {
        "en": "Sorry, I hurt you!",
        "hi": "क्षमा करो, मैंने तुम्ें दुःख पहुँचाया!"
      }
    ]
  },
  {
    "id": 310,
    "word": "sound",
    "pos": "n / v",
    "pronunciation": "साउन्ड",
    "meaningHi": "ध्वनि, आवाज | मालूम पड़ना, जान पड़ना 184 185 अंंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 311,
    "word": "street",
    "pos": "n",
    "pronunciation": "स्ट्रीट",
    "meaningHi": "गली 2 पथ, सड़क",
    "meaningEn": "",
    "examples": [
      {
        "en": "जैसे, ब्रिटिश प्रधान मंत्री का पता 10, Downing Street",
        "hi": "10, डाऊनिंग पथ"
      }
    ]
  },
  {
    "id": 312,
    "word": "trinity",
    "pos": "n",
    "pronunciation": "ट्रिनिटी",
    "meaningHi": "त्रिमूर्ति ईसाई धर्म में पिता, पुत्र और पवित्र आत्मा अर्थात फ़ादर, सन एंड होली स्पिरिट के संयोग को ईश्वर कहते हैं 2 किन्हींीं तीन का समूह",
    "meaningEn": "",
    "examples": [
      {
        "en": "Brahma, Vishnu and Shiva are called the holy trinity in Hinduism",
        "hi": "हिंदू-धर्म में ब्रह्ा, विष्णु और शिव को पवित्र त्रिमूूर्ति कहते हैं।"
      }
    ]
  },
  {
    "id": 313,
    "word": "affection",
    "pos": "n",
    "pronunciation": "अफ़ेक्शन",
    "meaningHi": "स्ेह, प्ार अंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ",
    "meaningEn": "a gentle feeling of love",
    "examples": [
      {
        "en": "Children need affection",
        "hi": "बचों को स्ेह की जरूरत होती है।"
      }
    ]
  },
  {
    "id": 314,
    "word": "answer",
    "pos": "n / v",
    "pronunciation": "आन्सर",
    "meaningHi": "उत्तर, जवाब; उत्तर देना",
    "meaningEn": "a reply; a response",
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
    "id": 315,
    "word": "ashamed",
    "pos": "adj",
    "pronunciation": "अशेम्ड",
    "meaningHi": "लज््जित",
    "meaningEn": "feeling shame",
    "examples": [
      {
        "en": "I am ashamed at your conduct",
        "hi": "मैं तुम्ारे व्यवहार पर शर्मिंदा हँ।"
      }
    ]
  },
  {
    "id": 316,
    "word": "awake",
    "pos": "adj",
    "pronunciation": "अवेक",
    "meaningHi": "जगा हुआ",
    "meaningEn": "not asleep; alert",
    "examples": [
      {
        "en": "Is he awake?",
        "hi": "क्ा वह जगा हुआ है?"
      }
    ]
  },
  {
    "id": 317,
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
    "id": 318,
    "word": "cause",
    "pos": "n / v",
    "pronunciation": "कौज़",
    "meaningHi": "कारण; उत्पन्न करना",
    "meaningEn": "a reason; to make happen",
    "examples": [
      {
        "en": "the root cause of the problem",
        "hi": "समस्ा का मूूल कारण"
      }
    ]
  },
  {
    "id": 319,
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
    "id": 320,
    "word": "class",
    "pos": "n",
    "pronunciation": "क्ास",
    "meaningHi": "कक्षा; वर्ग; श्रेणी",
    "meaningEn": "a group; a lesson; a category",
    "examples": [
      {
        "en": "She is in class twelve",
        "hi": "वह बारहवीं कक्षा में है।"
      }
    ]
  },
  {
    "id": 321,
    "word": "committed",
    "pos": "adj",
    "pronunciation": "कमिटेड",
    "meaningHi": "प्रतिबद्ध, निष्ावान",
    "meaningEn": "dedicated",
    "examples": [
      {
        "en": "committed to each other",
        "hi": "एक दूसरे के प्रति निष्ठावान"
      }
    ]
  },
  {
    "id": 322,
    "word": "concentrate",
    "pos": "v",
    "pronunciation": "कॉन्सन्ट्रेट",
    "meaningHi": "एकाग्र करना, ध्ान लगाना",
    "meaningEn": "to focus attention",
    "examples": [
      {
        "en": "You can concentrate better in early hours of morning",
        "hi": "तुम सुबह-सुबह ब्ाह्ममुहूर्त में ज्ादा अच्े से ध्यान केंद्रित कर सकते हो।"
      }
    ]
  },
  {
    "id": 323,
    "word": "conduct",
    "pos": "n / v",
    "pronunciation": "कान्डक्ट",
    "meaningHi": "आचरण, व्यवहार | 1 आचरण करना 2 संचालन करना 44 45 अंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ",
    "meaningEn": "to lead; behaviour",
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
    "id": 324,
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
    "id": 325,
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
    "id": 326,
    "word": "decent",
    "pos": "adj",
    "pronunciation": "डीसन्ट",
    "meaningHi": "शालीन, सुघड़",
    "meaningEn": "respectable",
    "examples": [
      {
        "en": "a decent girl",
        "hi": "एक शालीन लड़की"
      }
    ]
  },
  {
    "id": 327,
    "word": "encourage",
    "pos": "v",
    "pronunciation": "इन्करिज",
    "meaningHi": "साहस देना, प्रोत्साहित करना, हिम्मत बढ़ाना",
    "meaningEn": "to give support",
    "examples": [
      {
        "en": "encourage questioning",
        "hi": "सवाल पूूछने को प्रोत्साहित करना"
      }
    ]
  },
  {
    "id": 328,
    "word": "energy",
    "pos": "n",
    "pronunciation": "एनर्जीी",
    "meaningHi": "ऊर्जा 2 बहुत सक्रिय रहने की क्षमता, ताकत 1 Light and sound are both forms of energy - प्रकाश और आवाज दोनों ऊर्जा के रूप हैं। 2 After working for ten hours, my energy is exhausted - दस घंटे काम करने…",
    "meaningEn": "power to do work",
    "examples": [
      {
        "en": "Light and sound are both forms of energy",
        "hi": "प्रकाश और आवाज दोनों ऊर्जा के रूप हैं। 2 After working for ten hours, my energy is exhausted - दस घंटे काम करने के बाद मेरी सक्रिय रहने की ताकत खत्म हो गई है।"
      }
    ]
  },
  {
    "id": 329,
    "word": "enmity",
    "pos": "n",
    "pronunciation": "एन्मटि",
    "meaningHi": "दुश्मनी, शत्ुता",
    "meaningEn": "",
    "examples": [
      {
        "en": "Enmity is a negative feeling",
        "hi": "शत्रुता एक नकारात्मक भावना है।"
      }
    ]
  },
  {
    "id": 330,
    "word": "example",
    "pos": "n",
    "pronunciation": "इग्ाम्प्ल",
    "meaningHi": "उदाहरण",
    "meaningEn": "a sample; instance",
    "examples": [
      {
        "en": "Sri Ram is a perfect example of a noble king",
        "hi": "श्ीराम उत्तम राजा के एक पूर्ण उदाहरण हैं।"
      }
    ]
  },
  {
    "id": 331,
    "word": "exist",
    "pos": "v",
    "pronunciation": "इग्जि़स्ट",
    "meaningHi": "जीवित रहना, अस्तित्व में होना",
    "meaningEn": "to be; to live",
    "examples": [
      {
        "en": "Dinosaurs do not exist on earth now",
        "hi": "डायनासोर अब धरती पर अस्तित्व में नहीं हैं।"
      }
    ]
  },
  {
    "id": 332,
    "word": "fact",
    "pos": "n",
    "pronunciation": "फ़ैैक्ट",
    "meaningHi": "सच्ाई 2 तथ्य",
    "meaningEn": "",
    "examples": [
      {
        "en": "Let's know the facts first",
        "hi": "हमें पहले तथों को जान लेना चाहिए।"
      }
    ]
  },
  {
    "id": 333,
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
    "id": 334,
    "word": "false",
    "pos": "adj",
    "pronunciation": "फ़ॉल्स",
    "meaningHi": "गलत, झूठा, असत्य फ़मिलिअ- र जाना-पहचाना, सुपरिचित",
    "meaningEn": "not true",
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
    "id": 335,
    "word": "focus",
    "pos": "n",
    "pronunciation": "फ़ोकस",
    "meaningHi": "किरण-केंद्र, वह बिंदु जहाँ किरणें एकत्र होती हैं The . . फोटो धुँधले हैं। शायद कैमरे का किरणकेंद्र ठीक नहीं था।",
    "meaningEn": "to concentrate",
    "examples": []
  },
  {
    "id": 336,
    "word": "grief",
    "pos": "n",
    "pronunciation": "ग्ीफ़",
    "meaningHi": "गहरा शोक",
    "meaningEn": "",
    "examples": [
      {
        "en": "grief-stricken family",
        "hi": "शोकसंतप्त परिवार"
      }
    ]
  },
  {
    "id": 337,
    "word": "group",
    "pos": "n",
    "pronunciation": "ग्ुप",
    "meaningHi": "समूूह",
    "meaningEn": "",
    "examples": [
      {
        "en": "a self-help group of women",
        "hi": "स्त्रियों का एक स्वयं-सहायता समूूह।"
      }
    ]
  },
  {
    "id": 338,
    "word": "guilt",
    "pos": "n",
    "pronunciation": "गिल्ट",
    "meaningHi": "अपराधबोध, दोषभावना 88 89 H अंंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ",
    "meaningEn": "",
    "examples": [
      {
        "en": "After cheating my friend I developed a feeling of guilt",
        "hi": "अपने मित्र को धोखा देने के बाद मेरे अंदर एक अपराधबोध पैदा हो गया।"
      }
    ]
  },
  {
    "id": 339,
    "word": "guilty",
    "pos": "adj",
    "pronunciation": "गिल्टि",
    "meaningHi": "दोषी",
    "meaningEn": "",
    "examples": [
      {
        "en": "Let the guilty be punished",
        "hi": "दोषी को दंडित होने दो।"
      }
    ]
  },
  {
    "id": 340,
    "word": "health",
    "pos": "n",
    "pronunciation": "हेल्थ",
    "meaningHi": "स्ास्थ्य, सेहत",
    "meaningEn": "",
    "examples": [
      {
        "en": "A good health is the foundation of a happy life",
        "hi": "एक अच्ा स्ास्थ्य एक सुखी जीवन की आधारशिला है।"
      }
    ]
  },
  {
    "id": 341,
    "word": "helpful",
    "pos": "adj",
    "pronunciation": "हेल्पफ़ुल",
    "meaningHi": "मददगार हेल्पफ़ुलनस मदद करने की प्रवृत्ति या क्रिया 92 93 अंंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ",
    "meaningEn": "",
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
    "id": 342,
    "word": "idea",
    "pos": "n",
    "pronunciation": "आइडिअ",
    "meaningHi": "विचार",
    "meaningEn": "",
    "examples": [
      {
        "en": "New ideas have changed the world",
        "hi": "नए विचारों ने दुनिया को बदल दिया है।"
      }
    ]
  },
  {
    "id": 343,
    "word": "improve",
    "pos": "v",
    "pronunciation": "इम्प्ूव",
    "meaningHi": "सुधारना, बेहतर बनाना",
    "meaningEn": "",
    "examples": [
      {
        "en": "improve the world around you",
        "hi": "अपने चारों तरफ की दुनिया को बेहतर बनाओ।"
      }
    ]
  },
  {
    "id": 344,
    "word": "judge",
    "pos": "n / v",
    "pronunciation": "जज",
    "meaningHi": "न्यायाधीश | किसी व्यक्ति या वस्तु के विषय में राय बनाना या देना जुडिशरि न्यायपालिका J 16 106 107 अंंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ",
    "meaningEn": "",
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
    "id": 345,
    "word": "murder",
    "pos": "n / v",
    "pronunciation": "पत्ी की हत्ा की?",
    "meaningHi": "मडर मानवहत्ा का अपराध",
    "meaningEn": "",
    "examples": [
      {
        "en": "Murder is a heinous crime",
        "hi": "मानवहत्ा एक संगीन अपराध है।"
      }
    ]
  },
  {
    "id": 346,
    "word": "part",
    "pos": "n",
    "pronunciation": "पाट",
    "meaningHi": "अंश, भाग, हिस्ा",
    "meaningEn": "",
    "examples": [
      {
        "en": "parts of the body",
        "hi": "शरीर के अंग"
      }
    ]
  },
  {
    "id": 347,
    "word": "perfect",
    "pos": "adj",
    "pronunciation": "पफे़क्ट",
    "meaningHi": "संपूर्णतः त्रुटिहीन, हर तरह से अच्ा 142 143 अंंगरेज़ी शब्द उच्ारण हिंदी में अर्थ",
    "meaningEn": "",
    "examples": [
      {
        "en": "Can somebody be absolutely perfect?",
        "hi": "क्ा कोई पूूरी तरह त्रुटिहीन हो सकता है?"
      }
    ]
  },
  {
    "id": 348,
    "word": "person",
    "pos": "n",
    "pronunciation": "पर्सन",
    "meaningHi": "व्यक्ति",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 349,
    "word": "positive",
    "pos": "adj",
    "pronunciation": "पॉज़टिव",
    "meaningHi": "सकारात्मक",
    "meaningEn": "",
    "examples": [
      {
        "en": "a positive attitude",
        "hi": "एक सकारात्मक रुख"
      }
    ]
  },
  {
    "id": 350,
    "word": "pride",
    "pos": "n",
    "pronunciation": "प्राइड",
    "meaningHi": "गर्व अच्े अर्थ में",
    "meaningEn": "",
    "examples": [
      {
        "en": "Pride and arrogance are widely different things",
        "hi": "गर्व और अहंकार काफी अलग चीजें हैं।"
      }
    ]
  },
  {
    "id": 351,
    "word": "problem",
    "pos": "n",
    "pronunciation": "प्ॉब्लम",
    "meaningHi": "समस्ा",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 352,
    "word": "promise",
    "pos": "n / v",
    "pronunciation": "प्ॉमिस",
    "meaningHi": "वचन, प्रतिज्ा, वादा | वचन देना, वादा करना अंंगरेज़ी शब्द उच्ारण हिंदी में अर्थ",
    "meaningEn": "",
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
    "id": 353,
    "word": "protection",
    "pos": "n",
    "pronunciation": "प्रटेक्शन",
    "meaningHi": "सुरक्षा, बचाव",
    "meaningEn": "",
    "examples": [
      {
        "en": "Women need special pro- tection these days",
        "hi": "स्त्रियों को आज-कल विशेष सुरक्षा की जरूरत होती है।"
      }
    ]
  },
  {
    "id": 354,
    "word": "question",
    "pos": "n / v",
    "pronunciation": "क्वेेसचन",
    "meaningHi": "प्रश्न, सवाल | किसी चीज के औचित्य पर सवाल उठाना या संदेह व्यक्त करना He ’s उनोंने सरकार के निर्णय पर सवाल उठाए।",
    "meaningEn": "",
    "examples": [
      {
        "en": "What is your question?",
        "hi": "तुम्ारा प्रश्न क्ा है?"
      }
    ]
  },
  {
    "id": 355,
    "word": "reason",
    "pos": "n",
    "pronunciation": "रीज़न",
    "meaningHi": "कारण 2 बुद्धि, तर्कशक्ति 1 ? - दुनिया का तापमान बढ़ने का कारण क्ा है? 2",
    "meaningEn": "",
    "examples": [
      {
        "en": "There is also a test of reasoning in certain exams",
        "hi": "कुछ परीक्षाओं में तर्कशक्ति की भी जाँच होती है।"
      }
    ]
  },
  {
    "id": 356,
    "word": "result",
    "pos": "n / v",
    "pronunciation": "रिज़ल्ट",
    "meaningHi": "परिणाम | परिणाम उत्पन्न करना",
    "meaningEn": "",
    "examples": [
      {
        "en": "Heavy rains resulted in floods",
        "hi": "ज्ादा बारिश के परिणामस्वरुप बाढ़ आ गई।"
      }
    ]
  },
  {
    "id": 357,
    "word": "shame",
    "pos": "n",
    "pronunciation": "शेम",
    "meaningHi": "लज्जा, शर्म",
    "meaningEn": "",
    "examples": [
      {
        "en": "His face was red with shame",
        "hi": "उसका चेहरा शर्म से लाल था।"
      }
    ]
  },
  {
    "id": 358,
    "word": "share",
    "pos": "n / v",
    "pronunciation": "हिस्ा, हक़",
    "meaningHi": "’s पिता की संपत्ति में बेटी का भी एक हिस्ा होता है। | लोगों में बाँटना या साझा करना",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 359,
    "word": "tradition",
    "pos": "n",
    "pronunciation": "ट्रडिशन",
    "meaningHi": "परंपरा",
    "meaningEn": "",
    "examples": [
      {
        "en": "Not all traditions are excellent",
        "hi": "सभी परंपराएं बहुत अच्छी नहीं होतीं।"
      }
    ]
  },
  {
    "id": 360,
    "word": "violent",
    "pos": "adj",
    "pronunciation": "वाइअलन्ट",
    "meaningHi": "हिंसापूर्ण, हिंसक वाइअ- लन्ट्लि हिंसापूर्वक 214 215 अंंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ वचुअलि करीब-करीब",
    "meaningEn": "",
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
    "id": 361,
    "word": "worship",
    "pos": "n",
    "pronunciation": "आइडल",
    "meaningHi": "वर्शिप देवमूर्तिपूजा",
    "meaningEn": "",
    "examples": [
      {
        "en": "Idol",
        "hi": "worship is one of the many ways of worship. पूूजा के कई तरीकों में से देवमूूर्तिपूूजा भी पूूजा का एक तरीका है।"
      }
    ]
  },
  {
    "id": 362,
    "word": "alone",
    "pos": "adj adv",
    "pronunciation": "अलोन,",
    "meaningHi": "अकेला",
    "meaningEn": "by oneself; without others",
    "examples": [
      {
        "en": "I am all alone",
        "hi": "मैं बिलकुल अकेला हँ।"
      },
      {
        "en": "There were trees all along the road",
        "hi": "सड़क के एक सिरे से दूसरे सिरे तक पेड़ लगे हुए थे।"
      }
    ]
  },
  {
    "id": 363,
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
    "id": 364,
    "word": "community",
    "pos": "n",
    "pronunciation": "कम्ूनटि",
    "meaningHi": "समुदाय, समाज",
    "meaningEn": "group of people",
    "examples": [
      {
        "en": "the muslim community",
        "hi": "मुस्लिम समाज"
      }
    ]
  },
  {
    "id": 365,
    "word": "deep",
    "pos": "adj",
    "pronunciation": "डीप",
    "meaningHi": "गहरा",
    "meaningEn": "",
    "examples": [
      {
        "en": "deep sea - गहरा समुद्र; in deep meditation",
        "hi": "गहरे ध्यान में"
      }
    ]
  },
  {
    "id": 366,
    "word": "egoistic",
    "pos": "adj",
    "pronunciation": "ईगोइस्टिक",
    "meaningHi": "अहंमानी or",
    "meaningEn": "",
    "examples": [
      {
        "en": "egoistic attitude",
        "hi": "अहंमानी रुख"
      }
    ]
  },
  {
    "id": 367,
    "word": "free",
    "pos": "adj adv",
    "pronunciation": "फ़्ी",
    "meaningHi": "स्वतंत्र, आजाद | आजाद होना, छुटकारा दिलाना",
    "meaningEn": "",
    "examples": [
      {
        "en": "a free country",
        "hi": "एक आजाद देश"
      },
      {
        "en": "freed from jail",
        "hi": "जेल से मुक्त किया गया"
      }
    ]
  },
  {
    "id": 368,
    "word": "full",
    "pos": "adj",
    "pronunciation": "फ़ुल",
    "meaningHi": "भरा हुआ, पूरा भरा",
    "meaningEn": "",
    "examples": [
      {
        "en": "The tank is full",
        "hi": "टंकी भरी हुई है।"
      }
    ]
  },
  {
    "id": 369,
    "word": "hard",
    "pos": "adj adv",
    "pronunciation": "हाड",
    "meaningHi": "कड़ा, कठोर, सख्त 2 कठिन",
    "meaningEn": "",
    "examples": [
      {
        "en": "a hard surface",
        "hi": "एक कड़ी सतह"
      },
      {
        "en": "a hard decision",
        "hi": "एक कठिन निर्णय"
      }
    ]
  },
  {
    "id": 370,
    "word": "pleasure",
    "pos": "n",
    "pronunciation": "प्ेशज़र",
    "meaningHi": "खुशी",
    "meaningEn": "",
    "examples": [
      {
        "en": "It was a pleasure meeting you",
        "hi": "आपसे मुलाक़ात कर के खुशी हुई।"
      }
    ]
  },
  {
    "id": 371,
    "word": "possible",
    "pos": "adj",
    "pronunciation": "पॉसिब्ल",
    "meaningHi": "संभव",
    "meaningEn": "",
    "examples": [
      {
        "en": "Isn't it possible to travel at the speed of light?",
        "hi": "क्ा प्रकाश की गति से चलना संभव नहीं है?"
      }
    ]
  },
  {
    "id": 372,
    "word": "ready",
    "pos": "adj",
    "pronunciation": "रेडि",
    "meaningHi": "तैयार",
    "meaningEn": "",
    "examples": [
      {
        "en": "Are you ready to go?",
        "hi": "क्ा तुम जाने को तैयार हो?"
      }
    ]
  },
  {
    "id": 373,
    "word": "selfishness",
    "pos": "n",
    "pronunciation": "सेल््फि़शनेस",
    "meaningHi": "स्वार्थपरता",
    "meaningEn": "",
    "examples": [
      {
        "en": "Selfishness beyond a point is not good",
        "hi": "एक हद से ज्ादा स्ार्थपरता अच्छी नहीं होती।"
      }
    ]
  },
  {
    "id": 374,
    "word": "strength",
    "pos": "n",
    "pronunciation": "स्ट्ेंगथ",
    "meaningHi": "ताकत",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 375,
    "word": "true",
    "pos": "adj",
    "pronunciation": "ट्रू",
    "meaningHi": "सत्य, सच",
    "meaningEn": "",
    "examples": [
      {
        "en": "Isn't that true?",
        "hi": "क्ा वह सच नहीं है?"
      }
    ]
  },
  {
    "id": 376,
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
    "id": 377,
    "word": "attitude",
    "pos": "n",
    "pronunciation": "ऐटीट्यूड",
    "meaningHi": "रुख, व्यवहार",
    "meaningEn": "a way of thinking",
    "examples": [
      {
        "en": "He has a racist attitude",
        "hi": "उसका रुख नस्लवादी है।"
      }
    ]
  },
  {
    "id": 378,
    "word": "beautiful",
    "pos": "adj",
    "pronunciation": "ब्ूटिफ़ल",
    "meaningHi": "सुंदर",
    "meaningEn": "pleasing to the senses; lovely",
    "examples": []
  },
  {
    "id": 379,
    "word": "behave",
    "pos": "v",
    "pronunciation": "बिहेव",
    "meaningHi": "आचरण करना, व्यवहार करना",
    "meaningEn": "to act in a way",
    "examples": [
      {
        "en": "Behave like a good boy",
        "hi": "एक अच्े बच्चे की तरह व्यवहार करो।"
      }
    ]
  },
  {
    "id": 380,
    "word": "better",
    "pos": "adj adv",
    "pronunciation": "बेटर",
    "meaningHi": "बेहतर, और अच्छा",
    "meaningEn": "of higher quality; more good",
    "examples": [
      {
        "en": "She is better than her brother",
        "hi": "वह अपने भाई से बेहतर है।"
      }
    ]
  },
  {
    "id": 381,
    "word": "black",
    "pos": "adj / n",
    "pronunciation": "ब्ैक",
    "meaningHi": "काला (रंग)",
    "meaningEn": "the darkest color",
    "examples": []
  },
  {
    "id": 382,
    "word": "blame",
    "pos": "n / v",
    "pronunciation": "ब्ेम",
    "meaningHi": "गलती की जिम्ेदारी, दोषारोपण 26 27 अंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ | दोष देना, आरोप लगाना",
    "meaningEn": "to hold responsible",
    "examples": [
      {
        "en": "Don't blame others for your failures",
        "hi": "अपनी असफलता के लिए दूसरों को दोष मत दो।"
      }
    ]
  },
  {
    "id": 383,
    "word": "breath",
    "pos": "n",
    "pronunciation": "ब्ेथ",
    "meaningHi": "साँस अंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ",
    "meaningEn": "air in and out of lungs",
    "examples": [
      {
        "en": "Take a deep breath",
        "hi": "एक गहरी साँस लें।"
      }
    ]
  },
  {
    "id": 384,
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
    "id": 385,
    "word": "cheerful",
    "pos": "adj",
    "pronunciation": "चिअफ़ल",
    "meaningHi": "हँसमुख, प्रसन्न",
    "meaningEn": "happy and optimistic",
    "examples": [
      {
        "en": "a cheerful person",
        "hi": "एक हँसमुख व्यक्ति"
      }
    ]
  },
  {
    "id": 386,
    "word": "commit",
    "pos": "v",
    "pronunciation": "कमिट",
    "meaningHi": "वचन देना 2 {कोई गलत काम} करना 1",
    "meaningEn": "to carry out; dedicate",
    "examples": []
  },
  {
    "id": 387,
    "word": "connect",
    "pos": "v",
    "pronunciation": "कनेक्ट",
    "meaningHi": "जुड़ना, जोड़ना, संबंध स्थापित करना",
    "meaningEn": "to join together",
    "examples": [
      {
        "en": "He is unable to connect with young people",
        "hi": "वह युवाओं से जुड़ने में असमर्थ रहता है।"
      },
      {
        "en": "He is unable to connect with young people",
        "hi": "वह युवाओं से जुड़ने में असमर्थ रहता है।"
      }
    ]
  },
  {
    "id": 388,
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
    "id": 389,
    "word": "contempt",
    "pos": "n",
    "pronunciation": "कन्टेम्प्ट",
    "meaningHi": "तिरस्ार, नीच भाव 46 47 अंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ",
    "meaningEn": "disrespect; scorn",
    "examples": [
      {
        "en": "Contempt for manual labour made India poor",
        "hi": "हाथों से की जाने वाली मेहनत के प्रति नीच भाव ने भारत को गरीब बना दिया।"
      }
    ]
  },
  {
    "id": 390,
    "word": "creative",
    "pos": "adj",
    "pronunciation": "क्रिएटिव",
    "meaningHi": "नई चीजें सोचने और बनाने वाला, सृजनशील कितना सृजनशील विचार!",
    "meaningEn": "inventive",
    "examples": []
  },
  {
    "id": 391,
    "word": "creativity",
    "pos": "n",
    "pronunciation": "क्रिएटिवटि",
    "meaningHi": "सृजनात्मकता, नई चीजें सोचने और बनाने की क्षमता",
    "meaningEn": "ability to create",
    "examples": [
      {
        "en": "Children are naturally creative",
        "hi": "बच्चे स्ाभाविक रूप से सृजनशील होते हैं।"
      }
    ]
  },
  {
    "id": 392,
    "word": "crime",
    "pos": "n",
    "pronunciation": "क्राइम",
    "meaningHi": "अपराध",
    "meaningEn": "an illegal act",
    "examples": [
      {
        "en": "Breaking of the law is crime",
        "hi": "कानूून तोडना अपराध है।"
      }
    ]
  },
  {
    "id": 393,
    "word": "enemy",
    "pos": "n",
    "pronunciation": "एनमि",
    "meaningHi": "शत्रु, दुश्मन",
    "meaningEn": "a person who is hostile",
    "examples": [
      {
        "en": "Treat no one as an enemy",
        "hi": "किसी से भी दुश्मन-जैसा व्यवहार न करो।"
      }
    ]
  },
  {
    "id": 394,
    "word": "far",
    "pos": "adj adv",
    "pronunciation": "",
    "meaningHi": "फ़ार दूर",
    "meaningEn": "at great distance",
    "examples": [
      {
        "en": "very far from here",
        "hi": "यहाँ से काफी दूर"
      }
    ]
  },
  {
    "id": 395,
    "word": "focused",
    "pos": "adj",
    "pronunciation": "फ़ोकस्ड",
    "meaningHi": "ध्ानकेंद्रित . . छात्राएँ अकसर अधिक ध्यानकेंद्रित होती हैं। इसीलिए वे छात्रों से अधिक नम्बर लाती हैं।",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 396,
    "word": "general",
    "pos": "adj",
    "pronunciation": "जेनरल",
    "meaningHi": "साधारण 2 सामान्य 1",
    "meaningEn": "",
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
    "id": 397,
    "word": "habit",
    "pos": "n",
    "pronunciation": "हैबिट",
    "meaningHi": "आदत",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 398,
    "word": "hot",
    "pos": "adj",
    "pronunciation": "हॉट",
    "meaningHi": "गरम",
    "meaningEn": "",
    "examples": [
      {
        "en": "hot tea",
        "hi": "गरम चाय"
      }
    ]
  },
  {
    "id": 399,
    "word": "influence",
    "pos": "n / v",
    "pronunciation": "इन्फ़्लुलुअन्स",
    "meaningHi": "प्रभाव, व्यक्ति या वस्तु को प्रभावित कर नियंत्रित करने की शक्ति | प्रभावित करना, व्यक्ति या वस्तु में परिवर्तन लाने के लिए उस पर प्रभाव का प्रयोग करना",
    "meaningEn": "",
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
    "id": 400,
    "word": "large",
    "pos": "adj",
    "pronunciation": "लाज",
    "meaningHi": "बड़ा",
    "meaningEn": "",
    "examples": [
      {
        "en": "elephant's large ears",
        "hi": "हाथी के बड़े कान"
      }
    ]
  },
  {
    "id": 401,
    "word": "least",
    "pos": "det adv",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 402,
    "word": "lie",
    "pos": "n / v",
    "pronunciation": "लाइ",
    "meaningHi": "झूठ | 1 लेटना 2 झूठ बोलना",
    "meaningEn": "",
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
    "id": 403,
    "word": "likely",
    "pos": "adv",
    "pronunciation": "लाइक्लि",
    "meaningHi": "संभावित या प्रत्याशित जिसके होने की आशा हो",
    "meaningEn": "",
    "examples": [
      {
        "en": "It is likely to rain",
        "hi": "बारिश होने की संभावना है।"
      }
    ]
  },
  {
    "id": 404,
    "word": "listen",
    "pos": "v",
    "pronunciation": "लिसन",
    "meaningHi": "ध्ान से सुनना",
    "meaningEn": "",
    "examples": [
      {
        "en": "Please listen to this song",
        "hi": "कृपया इस गीत को ध्यान से सुनें।"
      }
    ]
  },
  {
    "id": 405,
    "word": "matter",
    "pos": "n",
    "pronunciation": "मामला है?",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 406,
    "word": "progress",
    "pos": "n / v",
    "pronunciation": "प्ोग्ेस",
    "meaningHi": "प्रगति किसी काम में आगे या ऊँचे बढ़ने को प्रगति कहते हैं। | प्रगति करना",
    "meaningEn": "",
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
    "id": 407,
    "word": "punish",
    "pos": "v",
    "pronunciation": "पनिश",
    "meaningHi": "दंड देना, सजा देना",
    "meaningEn": "",
    "examples": [
      {
        "en": "Should children be punished for small mistakes?",
        "hi": "क्ा बचों को छोटी-छोटी गलतियों के दंडित किया जाना चाहिए?"
      }
    ]
  },
  {
    "id": 408,
    "word": "Puran",
    "pos": "n",
    "pronunciation": "पुराण",
    "meaningHi": "पुराण हिंदुओं के धर्मग्ंथों में से एक ग्ंथ-वर्ग हैं, जिनमें कथा-कहानियों के माध्यम से धर्म के तत्त्व को समझाया गया है। 18 महापुराण हैं और 18 उपपुराण।",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 409,
    "word": "quick",
    "pos": "adj",
    "pronunciation": "क्विक",
    "meaningHi": "फुरती से किया गया",
    "meaningEn": "",
    "examples": [
      {
        "en": "a quick action",
        "hi": "फुरती से की गई एक कार्रवाई"
      }
    ]
  },
  {
    "id": 410,
    "word": "quickly",
    "pos": "adv",
    "pronunciation": "क्विक्लि",
    "meaningHi": "जल्ी से, फुर्तीी के साथ, शीघ्र",
    "meaningEn": "",
    "examples": [
      {
        "en": "the ambulance came quickly",
        "hi": "ऐम्ुलंस जल्ी से आई"
      }
    ]
  },
  {
    "id": 411,
    "word": "regret",
    "pos": "n / v",
    "pronunciation": "रिग्ेट",
    "meaningHi": "खेद, पछतावा | पछताना रेग्युलर नियमित रेग्युललि नियमित रूप से",
    "meaningEn": "",
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
    "id": 412,
    "word": "set",
    "pos": "v / n",
    "pronunciation": "सेट",
    "meaningHi": "किसी चीज को किस अन्य चीज में ठीक से लगाना, जड़ना 2 तय करना 1",
    "meaningEn": "",
    "examples": [
      {
        "en": "sofa set",
        "hi": "कई सोफे मिल कर एक सोफासेट बनाते हैं"
      }
    ]
  },
  {
    "id": 413,
    "word": "short",
    "pos": "adj",
    "pronunciation": "शॉट",
    "meaningHi": "छोटा शुड चाहिए करना चाहिए के अर्थ में",
    "meaningEn": "",
    "examples": [
      {
        "en": "a short speech",
        "hi": "एक छोटा भाषण"
      }
    ]
  },
  {
    "id": 414,
    "word": "steal",
    "pos": "v",
    "pronunciation": "स्ील",
    "meaningHi": "चुराना",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 415,
    "word": "story",
    "pos": "n",
    "pronunciation": "स्ोरी",
    "meaningHi": "कहानी",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 416,
    "word": "succeed",
    "pos": "v",
    "pronunciation": "सक्ीड",
    "meaningHi": "सफल होना अंंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 417,
    "word": "temper",
    "pos": "n",
    "pronunciation": "टेम्पर",
    "meaningHi": "क्रोध 2 क्रोधी स्वभाव",
    "meaningEn": "",
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
    "id": 418,
    "word": "thank",
    "pos": "v",
    "pronunciation": "थैंक",
    "meaningHi": "धन्यवाद देना",
    "meaningEn": "",
    "examples": [
      {
        "en": "Thanking people who help us is basic human courtesy",
        "hi": "जो हमें मदद करें उन्हेंें धन्यवाद देना एक आधारभूूत मानवीय शिष्टाचार है।"
      }
    ]
  },
  {
    "id": 419,
    "word": "unfair",
    "pos": "adj",
    "pronunciation": "अनफ़ेेअर",
    "meaningHi": "अनुचित, अन्यायपूर्ण",
    "meaningEn": "",
    "examples": [
      {
        "en": "dowry is an unfair practice",
        "hi": "दहेज एक अन्ायपूर्ण रिवाज है।"
      }
    ]
  },
  {
    "id": 420,
    "word": "unkind",
    "pos": "adj",
    "pronunciation": "अन्ाइन्ड",
    "meaningHi": "जो दयालु नहीं हो; निर्दयी अन्लोफ़ल गैर-कानूनी",
    "meaningEn": "",
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
    "id": 421,
    "word": "victory",
    "pos": "n",
    "pronunciation": "विक्टरि",
    "meaningHi": "विजय, जीत",
    "meaningEn": "",
    "examples": [
      {
        "en": "Victory and defeat are both parts of life",
        "hi": "जीत और हार दोनों ही जीवन के अंग हैं।"
      }
    ]
  },
  {
    "id": 422,
    "word": "war",
    "pos": "n",
    "pronunciation": "के लिए दुःख ले कर आते हैं।",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 423,
    "word": "worry",
    "pos": "n / v",
    "pronunciation": "वरि",
    "meaningHi": "चिंता, फिक्र | चिंता करना वरिड चिंतित",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 424,
    "word": "arrogance",
    "pos": "n",
    "pronunciation": "ऐरगंस",
    "meaningHi": "घमंड",
    "meaningEn": "excessive pride; conceit",
    "examples": [
      {
        "en": "Arrogance can make you unpopular",
        "hi": "घमंड तुम्ें अलोकप्रिय बना दे सकता है।"
      }
    ]
  },
  {
    "id": 425,
    "word": "balance",
    "pos": "n / v",
    "pronunciation": "बैलंस",
    "meaningHi": "संतुलन 2 तराजू | संतुलित करना/ संतुलित रखना B अंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ बैलन्स-शीटकिसी संस्ा की संपत्ति और आय-व्यय संबंधी ब्ोरों का पक्का",
    "meaningEn": "equal distribution; stability",
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
    "id": 426,
    "word": "beauty",
    "pos": "n",
    "pronunciation": "ब्ूटी",
    "meaningHi": "सुंदरता",
    "meaningEn": "quality of being beautiful",
    "examples": [
      {
        "en": "Beauty lies in the eyes of the beholder",
        "hi": "सुंदरता देखने वाले की आँखों में होती है।"
      }
    ]
  },
  {
    "id": 427,
    "word": "belong",
    "pos": "v",
    "pronunciation": "बिलौंंग",
    "meaningHi": "से होना 2 स्ामित्व रखना 1",
    "meaningEn": "to be a member of",
    "examples": []
  },
  {
    "id": 428,
    "word": "Bible",
    "pos": "n",
    "pronunciation": "बाइबल",
    "meaningHi": "यह ईसाई धर्म का एकमात्र आधारग्ंथ है, जैसे भगवद्- गीता भगवद्-धर्म का एकमात्र आधारग्ंथ है। बाइबिल में कुछ तो ईश्वर की वाणी माने जाने वाले अंश हैं और",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 429,
    "word": "certain",
    "pos": "adj",
    "pronunciation": "सट्न",
    "meaningHi": "निश्चित; कुछ विशेष",
    "meaningEn": "sure; definite; specific",
    "examples": [
      {
        "en": "It is certain that it will rain today",
        "hi": "यह निश्चित है कि आज बारिश होगी।"
      }
    ]
  },
  {
    "id": 430,
    "word": "condition",
    "pos": "n",
    "pronunciation": "कन्डिशन",
    "meaningHi": "दशा, हालत; शर्त",
    "meaningEn": "the state of something; a requirement",
    "examples": [
      {
        "en": "The condition of the patient is critical",
        "hi": "मरीज की हालत गंभीर है।"
      }
    ]
  },
  {
    "id": 431,
    "word": "connection",
    "pos": "n",
    "pronunciation": "कनेक्शन",
    "meaningHi": "संबंध, संपर्क",
    "meaningEn": "a link",
    "examples": [
      {
        "en": "I have no connection with him",
        "hi": "मेरा उससे कोई संपर्क नहीं है।"
      }
    ]
  },
  {
    "id": 432,
    "word": "course",
    "pos": "n",
    "pronunciation": "कोर्स",
    "meaningHi": "पाठ्यक्रम; दिशा; of course - निस्संदेह",
    "meaningEn": "a path; a series of lessons",
    "examples": [
      {
        "en": "This topic is not in our course",
        "hi": "यह विषय हमारे पाठ्यक्रम में नहीं है।"
      },
      {
        "en": "course",
        "hi": "correction - रास्ा या दिशा सुधारना"
      }
    ]
  },
  {
    "id": 433,
    "word": "interest",
    "pos": "n / v",
    "pronunciation": "इन्ट्रस्ट",
    "meaningHi": "रुचि, दिलचस्पी 2 सूद | रुचि या दिलचस्पी जगाना इन्ट्रस्टिंंग रोचक, दिलचस्प",
    "meaningEn": "",
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
    "id": 434,
    "word": "level",
    "pos": "n / adj / v",
    "pronunciation": "लेवल",
    "meaningHi": "स्तर कितनी ऊँचाई या निचाई पर | समतल, बराबर 112 113 अंंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ | समतल करना",
    "meaningEn": "",
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
    "id": 435,
    "word": "order",
    "pos": "n / v",
    "pronunciation": "से आग्रह करना सीखो।",
    "meaningHi": "ओडर 1 आदेश, हुक्म 2 सुव्यवस्ा | ओडनरि साधारण, मामूली",
    "meaningEn": "",
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
    "id": 436,
    "word": "persistent",
    "pos": "adj",
    "pronunciation": "पसिस्टन्ट",
    "meaningHi": "लगा रहने वाला किसी काम को आसानी से नहीं छोड़ देने वाला",
    "meaningEn": "",
    "examples": [
      {
        "en": "persistent efforts",
        "hi": "लगातार प्रयास"
      }
    ]
  },
  {
    "id": 437,
    "word": "position",
    "pos": "n",
    "pronunciation": "पज़िशन",
    "meaningHi": "अवस्ा 2 पद",
    "meaningEn": "",
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
    "id": 438,
    "word": "Quran",
    "pos": "n",
    "pronunciation": "कुरआन",
    "meaningHi": "इसलाम-धर्म का प्रमुख आधारग्ंथ, जिसे मुसलमान अल्ाह यानि ईश्वर की वाणी मानते हैं।",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 439,
    "word": "single",
    "pos": "adj n",
    "pronunciation": "सिंंगल",
    "meaningHi": "एक, अकेला 2 अविवाहित",
    "meaningEn": "",
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
    "id": 440,
    "word": "state",
    "pos": "n / v",
    "pronunciation": "स्टेट",
    "meaningHi": "दशा, अवस्ा 2 राज्य, प्रदेश 3 संप्रभु देश 2",
    "meaningEn": "",
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
    "id": 441,
    "word": "subject",
    "pos": "n",
    "pronunciation": "सब्ेक्ट",
    "meaningHi": "विषय 2 प्रजा",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 442,
    "word": "vision",
    "pos": "n",
    "pronunciation": "विशज़न",
    "meaningHi": "दृष्टि 2 दर्शन 3 स्वप्न, कल्पनाशक्ति से बनाई गई कोई उद्ेश्यपूर्ण योजना 1 दृष्टि",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 443,
    "word": "achieve",
    "pos": "v",
    "pronunciation": "अचीव",
    "meaningHi": "प्राप्त करना, उपलब्धि प्राप्त करना",
    "meaningEn": "",
    "examples": [
      {
        "en": "India achieved independence इन 1947",
        "hi": "भारत ने 1947 में स्वतंत्रता प्राप्त की।"
      }
    ]
  },
  {
    "id": 444,
    "word": "act",
    "pos": "n / v",
    "pronunciation": "ऐक्ट",
    "meaningHi": "कर्म, कार्य; अभिनय करना",
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
    "id": 445,
    "word": "alive",
    "pos": "adj",
    "pronunciation": "अलाइव",
    "meaningHi": "जिंदा, जीवित",
    "meaningEn": "living; not dead",
    "examples": [
      {
        "en": "My grandfather is still alive",
        "hi": "मेरे दादाजी अभी भी जीवित हैं।"
      }
    ]
  },
  {
    "id": 446,
    "word": "anxiety",
    "pos": "n",
    "pronunciation": "ऐंग्ज़ाइटि",
    "meaningHi": "चिंता",
    "meaningEn": "a feeling of worry",
    "examples": [
      {
        "en": "Prolonged anxiety is not good for mental health",
        "hi": "मानसिक स्ास्थ्य के लिए लंबी चिंता अच्छी नहीं होती।"
      }
    ]
  },
  {
    "id": 447,
    "word": "anxious",
    "pos": "adj",
    "pronunciation": "ऐंंक्शस",
    "meaningHi": "चिंतित",
    "meaningEn": "worried; eager",
    "examples": [
      {
        "en": "You look anxious",
        "hi": "तुम चिंतित दिखते हो।"
      }
    ]
  },
  {
    "id": 448,
    "word": "break",
    "pos": "n / v",
    "pronunciation": "ब्ेक",
    "meaningHi": "तोड़ना; टूटना; अंतराल",
    "meaningEn": "to separate into pieces; a pause",
    "examples": [
      {
        "en": "He broke the glass",
        "hi": "उसने शीशा तोड़ दिया।"
      }
    ]
  },
  {
    "id": 449,
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
    "id": 450,
    "word": "buy",
    "pos": "v",
    "pronunciation": "बाइ",
    "meaningHi": "खरीदना",
    "meaningEn": "to purchase; to acquire",
    "examples": [
      {
        "en": "I bought a pen",
        "hi": "मैंने एक कलम खरीदी।"
      }
    ]
  },
  {
    "id": 451,
    "word": "careless",
    "pos": "adj",
    "pronunciation": "केअलस",
    "meaningHi": "असावधान, लापरवाह अंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ",
    "meaningEn": "negligent",
    "examples": [
      {
        "en": "a careless boy",
        "hi": "एक लापरवाह लड़का।"
      }
    ]
  },
  {
    "id": 452,
    "word": "carry",
    "pos": "v",
    "pronunciation": "कैरि",
    "meaningHi": "ले जाना, उठाना",
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
    "id": 453,
    "word": "catch",
    "pos": "v",
    "pronunciation": "कैच",
    "meaningHi": "पकड़ना",
    "meaningEn": "to capture; to grab",
    "examples": [
      {
        "en": "Catch the glass",
        "hi": "ग्ास पकड़ो।"
      }
    ]
  },
  {
    "id": 454,
    "word": "challenge",
    "pos": "n / v",
    "pronunciation": "चैलिंज",
    "meaningHi": "चुनौती | चुनौती देना",
    "meaningEn": "a difficult task",
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
    "id": 455,
    "word": "concern",
    "pos": "v / n",
    "pronunciation": "कन्सर्न",
    "meaningHi": "किसी से संबंधित होना अंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ This matter does not concern me - यह मामला मुझसे संबंधित नहीं है।",
    "meaningEn": "worry; interest",
    "examples": [
      {
        "en": "Forced conversions in certain countries are causing concern",
        "hi": "कुछ देशों में जबरदस्ी धर्मांंतरण चिंता का कारण बन रहा है।"
      },
      {
        "en": "This matter does not concern me",
        "hi": "यह मामला मुझसे संबंधित नहीं है। | चिंता, परवाह (Forced conversions in certain countries are causing concern - कुछ देशों में जबरदस्ी धर्मांंतरण चिंता का कारण बन रहा है।"
      }
    ]
  },
  {
    "id": 456,
    "word": "continue",
    "pos": "v",
    "pronunciation": "कन्टिन्यू",
    "meaningHi": "जारी रखना",
    "meaningEn": "to go on; to persist",
    "examples": [
      {
        "en": "Continue studying",
        "hi": "पढ़ाई जारी रखो।"
      }
    ]
  },
  {
    "id": 457,
    "word": "correct",
    "pos": "adj / v",
    "pronunciation": "करेक्ट",
    "meaningHi": "सही, ठीक; सुधारना",
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
    "id": 458,
    "word": "cover",
    "pos": "n / v",
    "pronunciation": "ढँक लिया।",
    "meaningHi": "ढकना; आवरण",
    "meaningEn": "to place over; a protective layer",
    "examples": [
      {
        "en": "snow",
        "hi": "covered the mountain-tops - बर्फ ने पर्वतशिखरों को ढँक लिया।"
      }
    ]
  },
  {
    "id": 459,
    "word": "creature",
    "pos": "n",
    "pronunciation": "क्रीचर",
    "meaningHi": "जीव, प्राणी",
    "meaningEn": "a living being",
    "examples": []
  },
  {
    "id": 460,
    "word": "cross",
    "pos": "n / v",
    "pronunciation": "क्रॉस",
    "meaningHi": "पार करना; क्रॉस का निशान",
    "meaningEn": "to go across; an X shape",
    "examples": [
      {
        "en": "Lord Rama crossed the Ganga river in the boat of Kewat",
        "hi": "श्ीराम ने गंगा नदी केवट के नाव में पार की।"
      }
    ]
  },
  {
    "id": 461,
    "word": "cry",
    "pos": "n / v",
    "pronunciation": "क्राइ",
    "meaningHi": "रोना; चिल्लाना",
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
    "id": 462,
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
    "id": 463,
    "word": "cut",
    "pos": "n / v",
    "pronunciation": "कट",
    "meaningHi": "काटना",
    "meaningEn": "to divide with a sharp instrument",
    "examples": [
      {
        "en": "cut into pieces",
        "hi": "टुकड़े-टुकड़े में काटना"
      }
    ]
  },
  {
    "id": 464,
    "word": "defeat",
    "pos": "n / v",
    "pronunciation": "डिफ़ीीट",
    "meaningHi": "हार, पराजय | हराना, पराजित करना",
    "meaningEn": "to beat; a loss",
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
    "id": 465,
    "word": "defend",
    "pos": "v",
    "pronunciation": "डिफ़ेेन्ड",
    "meaningHi": "रक्षा करना 54 55 अंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ",
    "meaningEn": "to protect",
    "examples": []
  },
  {
    "id": 466,
    "word": "delight",
    "pos": "n / v",
    "pronunciation": "डिलाइट",
    "meaningHi": "अति आनंद, अत्ंत प्रसन्नता | अत्यधिक आनंदित कर देना",
    "meaningEn": "great pleasure",
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
    "id": 467,
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
    "id": 468,
    "word": "drive",
    "pos": "n / v",
    "pronunciation": "ड्राइव",
    "meaningHi": "गाड़ी चलाना; प्रेरित करना",
    "meaningEn": "to operate a vehicle; to motivate",
    "examples": [
      {
        "en": "I like to drive",
        "hi": "मैं ड्ाइव करना पसंद करता हँ।"
      },
      {
        "en": "The police have launched a helmet checking drive",
        "hi": "पुलिस ने हेलमेट-जाँच की मुहिम छेड़ रखी है। 3 He is a capable fellow, but he lacks the dirve - वह एक योग्य व्यक्ति है, मगर उसमें प्रबल प्रेरणा-शक्ति की कमी है। | गाड़ी चलाना (I like to drive - मैं ड्ाइव करना पसंद करता हँ।"
      }
    ]
  },
  {
    "id": 469,
    "word": "enter",
    "pos": "v",
    "pronunciation": "एन्टर",
    "meaningHi": "प्रवेश करना, अंदर जाना",
    "meaningEn": "to go into; to come in",
    "examples": [
      {
        "en": "She entered the classroom",
        "hi": "वह कक्षा में घुसी।"
      }
    ]
  },
  {
    "id": 470,
    "word": "explain",
    "pos": "v",
    "pronunciation": "एक्सप्ेन",
    "meaningHi": "व्याख्ा करना, अर्थ स्पष्ट करना",
    "meaningEn": "to make clear",
    "examples": [
      {
        "en": "Could you please explain the meaning of this poem?",
        "hi": "क्ा तुम इस कविता का अर्थ स्पष्ट कर सकते हो?"
      }
    ]
  },
  {
    "id": 471,
    "word": "fairly",
    "pos": "adv",
    "pronunciation": "फ़ेअलि",
    "meaningHi": "काफी 2 निष्पक्षता पूर्वक, न्यायपूर्वक",
    "meaningEn": "",
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
    "id": 472,
    "word": "fault",
    "pos": "n",
    "pronunciation": "फ़ॉल्ट",
    "meaningHi": "दोष, गलती",
    "meaningEn": "a mistake; defect",
    "examples": [
      {
        "en": "whose fault?",
        "hi": "किसकी गलती?"
      }
    ]
  },
  {
    "id": 473,
    "word": "fill",
    "pos": "v",
    "pronunciation": "फ़िल",
    "meaningHi": "भरना, भर जाना",
    "meaningEn": "",
    "examples": [
      {
        "en": "fill the tank",
        "hi": "टंकी भरना"
      }
    ]
  },
  {
    "id": 474,
    "word": "fly",
    "pos": "n / v",
    "pronunciation": "फ़लाइ",
    "meaningHi": "मक्ी | 1 उड़ना 2 विमान में यात्ा करना",
    "meaningEn": "to move through air",
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
    "id": 475,
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
    "id": 476,
    "word": "harsh",
    "pos": "adj",
    "pronunciation": "हाश",
    "meaningHi": "कठोर, रूखा",
    "meaningEn": "",
    "examples": [
      {
        "en": "harsh behaviour",
        "hi": "रूखा व्यवहार"
      }
    ]
  },
  {
    "id": 477,
    "word": "include",
    "pos": "v",
    "pronunciation": "इन्क्ूड",
    "meaningHi": "अंतर्गत होना, शामिल करना, साथ में रखना",
    "meaningEn": "",
    "examples": [
      {
        "en": "Include girls too in the team",
        "hi": "टीम में लड़कियों को भी शामिल करो।"
      }
    ]
  },
  {
    "id": 478,
    "word": "manner",
    "pos": "n",
    "pronunciation": "तहजीब और तौर-तरीके नहीं हैं।",
    "meaningHi": "ड्ेसिंग मैनर्स वस्त्र पहनने के तौर-तरीके -ईटिंग मैनर्स खाने के तौर-तरीके -ग्ीटिंग मैनर्स अभिवादन करने के तौर-तरीके -प्लेटाइम मैनर्सखेलने के समय के",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 479,
    "word": "mistake",
    "pos": "n",
    "pronunciation": "मिस्ेक",
    "meaningHi": "भूल, गलती",
    "meaningEn": "",
    "examples": [
      {
        "en": "I made a mistake",
        "hi": "मैंने एक गलती कर दी।"
      }
    ]
  },
  {
    "id": 480,
    "word": "mystery",
    "pos": "n",
    "pronunciation": "मिस्टरि",
    "meaningHi": "रहस्य N अंंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ",
    "meaningEn": "",
    "examples": [
      {
        "en": "The mystery of the UFOs has not yet been solved",
        "hi": "यूू. एफ. ओ. का रहस्य अभी तक सुलझ नहीं पाया है।"
      }
    ]
  },
  {
    "id": 481,
    "word": "negative",
    "pos": "adj",
    "pronunciation": "नेगटिव",
    "meaningHi": "नकारात्मक",
    "meaningEn": "",
    "examples": [
      {
        "en": "Let's shed negative emotions",
        "hi": "नकारात्मक भावनाओं को हम त्ाग दें।"
      }
    ]
  },
  {
    "id": 482,
    "word": "neglect",
    "pos": "v",
    "pronunciation": "निग्ेक्ट",
    "meaningHi": "उपेक्षा करना",
    "meaningEn": "",
    "examples": [
      {
        "en": "Never neglect your health",
        "hi": "अपने स्ास्थ्य की कभी भी उपेक्षा न करो।"
      }
    ]
  },
  {
    "id": 483,
    "word": "orphan",
    "pos": "n",
    "pronunciation": "ओफ़न",
    "meaningHi": "अनाथ",
    "meaningEn": "",
    "examples": [
      {
        "en": "The shelter for orphans is called orphanage",
        "hi": "अनाथों के रहने की जगह को अना- थालय कहते हैं।"
      }
    ]
  },
  {
    "id": 484,
    "word": "poison",
    "pos": "n / v",
    "pronunciation": "पोइज़न",
    "meaningHi": "जहर, विष | विष मिला देना",
    "meaningEn": "",
    "examples": [
      {
        "en": "Some people poison the minds of others",
        "hi": "कुछ लोग दूसरों के दिमाग में जहर भर देते हैं।"
      }
    ]
  },
  {
    "id": 485,
    "word": "provide",
    "pos": "v",
    "pronunciation": "प्रवाइड",
    "meaningHi": "उपलब्ध कराना",
    "meaningEn": "",
    "examples": [
      {
        "en": "Parents provide everything to their children",
        "hi": "माता-पिता बचों को सब-कुछ उपलब्ध कराते हैं।"
      }
    ]
  },
  {
    "id": 486,
    "word": "receive",
    "pos": "v",
    "pronunciation": "रिसीव",
    "meaningHi": "प्राप्त या स्ीकार करना",
    "meaningEn": "",
    "examples": [
      {
        "en": "I received a letter today",
        "hi": "मुझे आज एक चिट्ी प्राप्त हुई ।"
      }
    ]
  },
  {
    "id": 487,
    "word": "release",
    "pos": "n / v",
    "pronunciation": "रिलीस",
    "meaningHi": "छुटकारा, मुक्ति | मुक्त करना, खुला छोड़ना रिलाइ- अब्ल भरोसेमंद जिस पर भरोसा किया जा सके",
    "meaningEn": "",
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
    "id": 488,
    "word": "rescue",
    "pos": "n / v",
    "pronunciation": "रेस्क्यू",
    "meaningHi": "बचाव, उद्धार | उद्धार करना, मुक्त कराना",
    "meaningEn": "",
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
    "id": 489,
    "word": "return",
    "pos": "n / v",
    "pronunciation": "रिटर्न",
    "meaningHi": "वापसी 2 मुनाफा, लाभ कम मुनाफे वाला निवेश | वापस लौटना रेवरेंस श्रद्धाद्धा, अत्यधिक आदर",
    "meaningEn": "",
    "examples": [
      {
        "en": "a low",
        "hi": "return investment"
      }
    ]
  },
  {
    "id": 490,
    "word": "rob",
    "pos": "v",
    "pronunciation": "रॉब",
    "meaningHi": "लूटना",
    "meaningEn": "",
    "examples": [
      {
        "en": "He was robbed at gunpoint",
        "hi": "उसे बन्ूक दिखा कर लूूट लिया गया।"
      }
    ]
  },
  {
    "id": 491,
    "word": "shelter",
    "pos": "n / v",
    "pronunciation": "शेल्टर",
    "meaningHi": "शरण, आश्रय 2 रहने का ठिकाना 1",
    "meaningEn": "",
    "examples": [
      {
        "en": "Some pol- iticians shelter criminals",
        "hi": "कुछ राजनीतिज्ञ अपराधियों को आश्रय देते हैं।"
      }
    ]
  },
  {
    "id": 492,
    "word": "stable",
    "pos": "adj",
    "pronunciation": "स्ेब्ल",
    "meaningHi": "स्थिर",
    "meaningEn": "",
    "examples": [
      {
        "en": "a stable health",
        "hi": "स्थिर स्ास्थ्य, जिसमें उतार-चढ़ाव नहीं होता हो"
      }
    ]
  },
  {
    "id": 493,
    "word": "steady",
    "pos": "adj",
    "pronunciation": "स्ेडि",
    "meaningHi": "अविचल",
    "meaningEn": "",
    "examples": [
      {
        "en": "The slow and steady wins the race",
        "hi": "धीरे चलने वाला अविचल व्यक्ति ही लंबी दौड़ में जीतता है।"
      }
    ]
  },
  {
    "id": 494,
    "word": "strict",
    "pos": "adj",
    "pronunciation": "स्ट्रिक्ट",
    "meaningHi": "काम कराने में सख्त 190 191 अंंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 495,
    "word": "terrorism",
    "pos": "n",
    "pronunciation": "टेररिज़म",
    "meaningHi": "आतंकवाद",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 496,
    "word": "wealth",
    "pos": "n",
    "pronunciation": "वेल्थ",
    "meaningHi": "धन-संपत्ति वेल््थि धनी",
    "meaningEn": "",
    "examples": [
      {
        "en": "Not all wealthy people use their wealth for helping the needy and the poor",
        "hi": "सभी धनी लोग अपने धन का प्रयोग जरूरतमंदों और गरीबों की मदद के लिए नहीं करते।"
      }
    ]
  },
  {
    "id": 497,
    "word": "willing",
    "pos": "adj",
    "pronunciation": "विलिंग",
    "meaningHi": "इच्ुक",
    "meaningEn": "",
    "examples": [
      {
        "en": "Is he willing to work?",
        "hi": "क्ा वह काम करने को इच्ुक है?"
      }
    ]
  },
  {
    "id": 498,
    "word": "wonder",
    "pos": "v",
    "pronunciation": "वन्डर",
    "meaningHi": "आश्चर्यचकित होना",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 499,
    "word": "worth",
    "pos": "n",
    "pronunciation": "वर्थ",
    "meaningHi": "किसी व्यक्ति या वस्तु का महत्त्व 222 223 Y अंंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 500,
    "word": "add",
    "pos": "v",
    "pronunciation": "ऐड",
    "meaningHi": "जोड़ना, मिलाना",
    "meaningEn": "to join; to put together",
    "examples": [
      {
        "en": "Add some salt",
        "hi": "थोड़ा नमक डालो।"
      }
    ]
  },
  {
    "id": 501,
    "word": "agree",
    "pos": "v",
    "pronunciation": "अग्ी",
    "meaningHi": "सहमत होना, राज़ी होना",
    "meaningEn": "to have the same opinion",
    "examples": [
      {
        "en": "I agree with you",
        "hi": "मैं तुमसे सहमत हँ।"
      },
      {
        "en": "Production of tomato sauce is an agro",
        "hi": "industry - टमाटर-सौस का उत्ादन एक कृषि-उद्ोग है।"
      }
    ]
  },
  {
    "id": 502,
    "word": "allow",
    "pos": "v",
    "pronunciation": "अलाउ",
    "meaningHi": "अनुमति देना, आज्ञा देना",
    "meaningEn": "to permit; to let",
    "examples": [
      {
        "en": "Please allow me to speak",
        "hi": "कृपया मुझे बोलने की इजाजत दें।"
      }
    ]
  },
  {
    "id": 503,
    "word": "appear",
    "pos": "v",
    "pronunciation": "अपिअर",
    "meaningHi": "दिखाई देना; प्रतीत होना",
    "meaningEn": "to come into sight; to seem",
    "examples": [
      {
        "en": "He appeared before the court",
        "hi": "वह अदालत के सामने हाजिर हुआ। 2 It appears that he is sick - ऐसा लगता है जैसे वह बीमार है। appearance n अपिअरंस 1 उपस्थिति, हाजिरी 2 रूप-रंग 3 प्रतीति, आभास 1 The judge has ordered his personal appearance in the court - जज ने न्ायालय में उनकी व्यक्तिगत उपस्थिति का आदेश दिया है। 2 She has a pleasant ap- pearance - उनका रूप-रंग मनोहर है। 3 Appearance and reality are not always the same - जैसा आभास होता है और जो सच्चाई है, वे हमेशा एक-जैसे नहीं होते।"
      }
    ]
  },
  {
    "id": 504,
    "word": "consider",
    "pos": "v",
    "pronunciation": "कन्सिडर",
    "meaningHi": "विचार करना, सोचना",
    "meaningEn": "to think about carefully",
    "examples": [
      {
        "en": "Consider giving me a few of your books",
        "hi": "मुझे अपनी कुछ किताबें देने पर विचार करो।"
      }
    ]
  },
  {
    "id": 505,
    "word": "cooperative",
    "pos": "n / adj",
    "pronunciation": "कोअॉपरटिव",
    "meaningHi": "सहकारी संस्ा | सहयोग करने वाला",
    "meaningEn": "willing to work together",
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
    "id": 506,
    "word": "decide",
    "pos": "v",
    "pronunciation": "डिसाइड",
    "meaningHi": "निर्णय करना, फ़ैसला करना",
    "meaningEn": "to make a choice; to resolve",
    "examples": [
      {
        "en": "Let's decide quickly",
        "hi": "आओ, जल्ी निर्णय करें ।"
      }
    ]
  },
  {
    "id": 507,
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
    "id": 508,
    "word": "etiquette",
    "pos": "n",
    "pronunciation": "एटिकेट",
    "meaningHi": "शिष्टाचार के तौर-तरीके",
    "meaningEn": "rules of polite behaviour",
    "examples": [
      {
        "en": "We should all know the basic etiquette",
        "hi": "हम सभी को मूूलभूूत शिष्टाचार के तौर-तरीके जानने चाहिए।"
      }
    ]
  },
  {
    "id": 509,
    "word": "expect",
    "pos": "v",
    "pronunciation": "इक्स्ेक्ट",
    "meaningHi": "आशा करना, प्रत्ाशा करना",
    "meaningEn": "to anticipate",
    "examples": [
      {
        "en": "I expect good results this time",
        "hi": "इस बार मैं अच्े परिणामों की आशा करता हँ।"
      }
    ]
  },
  {
    "id": 510,
    "word": "gentle",
    "pos": "adj",
    "pronunciation": "जेन्ट्ल",
    "meaningHi": "सौम्य, कोमल G 52 अंंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ",
    "meaningEn": "",
    "examples": [
      {
        "en": "gentle manners",
        "hi": "व्यवहार करने के सौम्य तौर-तरीके"
      }
    ]
  },
  {
    "id": 511,
    "word": "guide",
    "pos": "n / v",
    "pronunciation": "गाइड",
    "meaningHi": "मार्गदर्शक | रास्ता बताना, मार्गदर्शन करना",
    "meaningEn": "",
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
    "id": 512,
    "word": "hope",
    "pos": "n / v",
    "pronunciation": "होप",
    "meaningHi": "आशा, उम्ीद | आशा करना 94 95 अंंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ",
    "meaningEn": "",
    "examples": [
      {
        "en": "Hope is a life-sustaining emotion",
        "hi": "आशा जीवन को थामे रखने वाली भावना है।"
      },
      {
        "en": "I hope he will improve",
        "hi": "मैं आशा करता हँ, वह सुधरेगा।"
      }
    ]
  },
  {
    "id": 513,
    "word": "knowledge",
    "pos": "n",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 514,
    "word": "namaste",
    "pos": "n",
    "pronunciation": "नमस्ते",
    "meaningHi": "नमस्ते अभिवादन करने की भारतीय पद्धति",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 515,
    "word": "notice",
    "pos": "n",
    "pronunciation": "नोटिस",
    "meaningHi": "सूचना, नोटिस 2 जानकारी 1",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 516,
    "word": "powerful",
    "pos": "adj",
    "pronunciation": "पाउअफ़ल",
    "meaningHi": "शक्तिशाली, बलशाली",
    "meaningEn": "",
    "examples": [
      {
        "en": "a powerful man",
        "hi": "एक शक्तिशाली व्यक्ति"
      }
    ]
  },
  {
    "id": 517,
    "word": "raise",
    "pos": "v",
    "pronunciation": "रेज़",
    "meaningHi": "ऊपर उठाना 2 पालन-पोषण करके बड़ा करना",
    "meaningEn": "",
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
    "id": 518,
    "word": "reach",
    "pos": "v",
    "pronunciation": "रीच",
    "meaningHi": "पहुँचना",
    "meaningEn": "",
    "examples": [
      {
        "en": "She has reached home",
        "hi": "वह घर पहुँच गई है।"
      }
    ]
  },
  {
    "id": 519,
    "word": "remain",
    "pos": "v",
    "pronunciation": "रिमेन",
    "meaningHi": "बने रहना 164 165 अंंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ",
    "meaningEn": "",
    "examples": [
      {
        "en": "Please remain in our team",
        "hi": "कृपया हमारी टीम में बने रहो।"
      }
    ]
  },
  {
    "id": 520,
    "word": "report",
    "pos": "n / v",
    "pronunciation": "रिपोट",
    "meaningHi": "विवरण 2 अखबार या पत्रिका में छपी कोई खबर | 1 सूचित करना 2 खबर प्रकाशित करना 1 ? - क्ा तुमने पुलिस को सूूचित कर दिया है? 2 Did the ? - क्ा अखबारों ने",
    "meaningEn": "",
    "examples": [
      {
        "en": "medical test report",
        "hi": "चिकित्ीय जाँच-विवरण"
      }
    ]
  },
  {
    "id": 521,
    "word": "silent",
    "pos": "adj",
    "pronunciation": "साइलन्ट",
    "meaningHi": "चुप, खामोश",
    "meaningEn": "",
    "examples": [
      {
        "en": "a silent protest",
        "hi": "एक खामोश विरोध, जिसमें मुख से कुछ बोला नहीं जाता।"
      }
    ]
  },
  {
    "id": 522,
    "word": "sleep",
    "pos": "n / v",
    "pronunciation": "स्ीप",
    "meaningHi": "नींद | सोना",
    "meaningEn": "",
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
    "id": 523,
    "word": "suggest",
    "pos": "v",
    "pronunciation": "सजेस्ट",
    "meaningHi": "सुझाव देना",
    "meaningEn": "",
    "examples": [
      {
        "en": "Could you suggest some improvements?",
        "hi": "क्ा तुम कुछ सुधार का सुझाव दे सकते हो?"
      }
    ]
  },
  {
    "id": 524,
    "word": "throw",
    "pos": "v",
    "pronunciation": "थ्ो",
    "meaningHi": "फेंकना",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 525,
    "word": "touch",
    "pos": "n / v",
    "pronunciation": "टच",
    "meaningHi": "छूने की क्रिया, स्पर्श | छूना",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 526,
    "word": "afternoon",
    "pos": "n",
    "pronunciation": "'आफ़टरनूून' कहते हैं।",
    "meaningHi": "आफ़्टर वड्ज़ तत्पश्चात, बाद में",
    "meaningEn": "time between noon and evening",
    "examples": [
      {
        "en": "I came first, she came afterwards",
        "hi": "मैं पहले आया, वह बाद में आई।"
      }
    ]
  },
  {
    "id": 527,
    "word": "aim",
    "pos": "n / v",
    "pronunciation": "एम",
    "meaningHi": "उद्ेश्य, लक्ष्य | लक्ष्य उद्ेश्य साधना",
    "meaningEn": "",
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
    "id": 528,
    "word": "beyond",
    "pos": "adv",
    "pronunciation": "बियोंंड",
    "meaningHi": "के परे, से बाहर",
    "meaningEn": "on the far side of",
    "examples": [
      {
        "en": "What happened was beyond my imagination",
        "hi": "जो हुआ वह मेरी कल्पना से परे था।"
      }
    ]
  },
  {
    "id": 529,
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
    "id": 530,
    "word": "business",
    "pos": "n",
    "pronunciation": "बिज़्नस",
    "meaningHi": "व्यापार",
    "meaningEn": "commercial activity",
    "examples": []
  },
  {
    "id": 531,
    "word": "comprehend",
    "pos": "v",
    "pronunciation": "कॉम्प्रिहेंड",
    "meaningHi": "पूरी तरह समझना",
    "meaningEn": "to understand fully",
    "examples": [
      {
        "en": "unable to comprehend",
        "hi": "समझने में असमर्थ"
      }
    ]
  },
  {
    "id": 532,
    "word": "eager",
    "pos": "adj",
    "pronunciation": "लिए उत्ुक",
    "meaningHi": "",
    "meaningEn": "keen; enthusiastic",
    "examples": []
  },
  {
    "id": 533,
    "word": "effect",
    "pos": "n",
    "pronunciation": "इफे़क्ट",
    "meaningHi": "प्रभाव, असर",
    "meaningEn": "a result; an impression",
    "examples": [
      {
        "en": "Asthma among children is an effect of air pollution",
        "hi": "बचों में अस्थमा वायु-प्रदूषण का परिणाम है।"
      }
    ]
  },
  {
    "id": 534,
    "word": "evening",
    "pos": "n",
    "pronunciation": "ईवनिंग",
    "meaningHi": "संध्ा, शाम 70 71 अंंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ",
    "meaningEn": "between afternoon and night",
    "examples": []
  },
  {
    "id": 535,
    "word": "fierce",
    "pos": "adj",
    "pronunciation": "फि़अस",
    "meaningHi": "भयंकर रूप से उग्र",
    "meaningEn": "aggressive; intense",
    "examples": [
      {
        "en": "a fierce animal",
        "hi": "एक भयंकर रूप से उग्र जानवर"
      }
    ]
  },
  {
    "id": 536,
    "word": "future",
    "pos": "n / adj",
    "pronunciation": "फ़यूचर",
    "meaningHi": "भविष्य | भावी, भविष्य का 84 85 अंंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ",
    "meaningEn": "time yet to come",
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
    "id": 537,
    "word": "guard",
    "pos": "n / v",
    "pronunciation": "गाड",
    "meaningHi": "सुरक्षा-कर्मचारी 2 सुरक्षा-कवच | रक्षा करना, सुरक्षा प्रदान करना",
    "meaningEn": "",
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
    "id": 538,
    "word": "history",
    "pos": "n",
    "pronunciation": "हिस्ट्रि",
    "meaningHi": "इतिहास",
    "meaningEn": "",
    "examples": [
      {
        "en": "History is a record of the past events of a society",
        "hi": "इतिहास किसी समाज के भूूतकाल की घटनाओं का दस्तावेज है।"
      }
    ]
  },
  {
    "id": 539,
    "word": "ignore",
    "pos": "v",
    "pronunciation": "इग्नोर",
    "meaningHi": "उपेक्षा करना, ध्ान नहीं देना",
    "meaningEn": "",
    "examples": [
      {
        "en": "Let's ignore the small mistakes of others",
        "hi": "हम दूसरों की छोटी-छोटी भूूलों पर ध्यान न दें।"
      }
    ]
  },
  {
    "id": 540,
    "word": "Islam",
    "pos": "n",
    "pronunciation": "इज़लाम",
    "meaningHi": "इसलाम धर्म पैगंबर मुहम्मद द्ारा स्थापित धर्म",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 541,
    "word": "language",
    "pos": "n",
    "pronunciation": "बॉडि",
    "meaningHi": "लैंग्विज शारीरिक हावभाव",
    "meaningEn": "",
    "examples": [
      {
        "en": "His body language was not friendly",
        "hi": "उसके हावभाव मित्रतापूर्ण नहीं थे।"
      }
    ]
  },
  {
    "id": 542,
    "word": "lesson",
    "pos": "n",
    "pronunciation": "लेसन",
    "meaningHi": "पाठ किसी पुस्तक का एक अध्ाय 2 सीख",
    "meaningEn": "",
    "examples": [
      {
        "en": "Each failure leaves a lesson to learn",
        "hi": "हर असफलता एक सीख छोड़ जाती है।"
      }
    ]
  },
  {
    "id": 543,
    "word": "lonely",
    "pos": "adj",
    "pronunciation": "लोन्लि",
    "meaningHi": "अकेला 114 115 अंंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ लोन्लिनस एकाकीपन, अकेलापन",
    "meaningEn": "",
    "examples": [
      {
        "en": "Being lonely can be an awful experience",
        "hi": "अकेला रहना एक बुरा अनुभव हो सकता है।"
      }
    ]
  },
  {
    "id": 544,
    "word": "market",
    "pos": "n",
    "pronunciation": "माकिट",
    "meaningHi": "बाजार, मार्केेट",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 545,
    "word": "music",
    "pos": "n",
    "pronunciation": "म्ूज़िक",
    "meaningHi": "संगीत : क्ासिक्ल म्ूज़िक शास्त्रीय संगीत : in- इन्सट्रमेंट्ल म्ूज़िक वाद्यसंगीत 126 127 अंंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ : vo- cal वोकल म्ूज़िक",
    "meaningEn": "",
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
    "id": 546,
    "word": "natural",
    "pos": "adj",
    "pronunciation": "नैचरल",
    "meaningHi": "स्ाभाविक, प्राकृतिक नैचरलि स्ाभाविक ढंग से",
    "meaningEn": "",
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
    "id": 547,
    "word": "pleasant",
    "pos": "adj",
    "pronunciation": "प्ेज़न्ट",
    "meaningHi": "सुखद, आनंददायक प्लीज़ कृपया",
    "meaningEn": "",
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
    "id": 548,
    "word": "present",
    "pos": "adj / v",
    "pronunciation": "औम्निप्रेज़ंट",
    "meaningHi": "सर्वव्याव्यापी, सभी जगह उपस्थित | 1 उपस्थित होना 2 प्रस्तुत करना 3 उपहार देना | वर्तमान",
    "meaningEn": "",
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
    "id": 549,
    "word": "price",
    "pos": "n",
    "pronunciation": "प्राइस",
    "meaningHi": "कीमत, दाम, मूल्य",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 550,
    "word": "process",
    "pos": "n / v",
    "pronunciation": "प्ोसेस",
    "meaningHi": "प्रक्रिया | 1 प्रक्रिया में डालना",
    "meaningEn": "",
    "examples": [
      {
        "en": "the process of making soap",
        "hi": "साबुन बनाने की प्रक्रिया"
      }
    ]
  },
  {
    "id": 551,
    "word": "public",
    "pos": "adj / n",
    "pronunciation": "पब्लिक",
    "meaningHi": "सार्वजनिक | जनता",
    "meaningEn": "",
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
    "id": 552,
    "word": "sadness",
    "pos": "n",
    "pronunciation": "सैड्नेस",
    "meaningHi": "उदासी",
    "meaningEn": "",
    "examples": [
      {
        "en": "Listening to good music may remove all sadness",
        "hi": "अच्ा संगीत सारी उदासी मिटा सकता है।"
      }
    ]
  },
  {
    "id": 553,
    "word": "satisfy",
    "pos": "v",
    "pronunciation": "सैटिस्फ़ाइ",
    "meaningHi": "संतुष्ट करना",
    "meaningEn": "",
    "examples": [
      {
        "en": "Did the hotel food satisfy you?",
        "hi": "क्ा होटल के भोजन ने तुम्ें संतुष्ट किया?"
      }
    ]
  },
  {
    "id": 554,
    "word": "science",
    "pos": "n",
    "pronunciation": "साइन्स",
    "meaningHi": "विज्ान 172 173 अंंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 555,
    "word": "shine",
    "pos": "v",
    "pronunciation": "शाइन",
    "meaningHi": "चमकना",
    "meaningEn": "",
    "examples": [
      {
        "en": "his face shines",
        "hi": "उसका चेहरा चमकता है"
      }
    ]
  },
  {
    "id": 556,
    "word": "situation",
    "pos": "n",
    "pronunciation": "सिचुएशन",
    "meaningHi": "स्थिति",
    "meaningEn": "",
    "examples": [
      {
        "en": "a bad situation",
        "hi": "एक बुरी स्थिति"
      }
    ]
  },
  {
    "id": 557,
    "word": "survive",
    "pos": "v",
    "pronunciation": "सवाइव",
    "meaningHi": "जीवित बचना, अस्तित्व में रहना",
    "meaningEn": "",
    "examples": [
      {
        "en": "Will the patient survive?",
        "hi": "क्ा मरीज जीवित बचेगा?"
      }
    ]
  },
  {
    "id": 558,
    "word": "ability",
    "pos": "n",
    "pronunciation": "अबिलिटी",
    "meaningHi": "योग्यता, क्षमता",
    "meaningEn": "",
    "examples": [
      {
        "en": "ability to memorise",
        "hi": "स्मरण करने की योग्यता"
      }
    ]
  },
  {
    "id": 559,
    "word": "admit",
    "pos": "v",
    "pronunciation": "अडमिट",
    "meaningHi": "आने देना, भरती करना 2 मान लेना",
    "meaningEn": "",
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
    "id": 560,
    "word": "advice",
    "pos": "n",
    "pronunciation": "अड्वाइस",
    "meaningHi": "सलाह",
    "meaningEn": "",
    "examples": [
      {
        "en": "I need your advice",
        "hi": "मुझे तुम्ारी सलाह की जरूरत है।"
      }
    ]
  },
  {
    "id": 561,
    "word": "burn",
    "pos": "v",
    "pronunciation": "बर्न",
    "meaningHi": "आग या ताप से जलना या जलाना",
    "meaningEn": "",
    "examples": [
      {
        "en": "Fire burns",
        "hi": "आग जलाती है।"
      }
    ]
  },
  {
    "id": 562,
    "word": "calm",
    "pos": "n / adj / v",
    "pronunciation": "काम",
    "meaningHi": "शांति | शांत | शांत हो जाना या शांत करना",
    "meaningEn": "peaceful; not excited",
    "examples": [
      {
        "en": "The calm of a winter morning was disturbed by an explosion",
        "hi": "जाड़े की सुबह की शांति एक विस्ोट से नष्ट हो गई।"
      },
      {
        "en": "a calm person",
        "hi": "एक शांत व्यक्ति"
      }
    ]
  },
  {
    "id": 563,
    "word": "calmly",
    "pos": "adv",
    "pronunciation": "काम्ी",
    "meaningHi": "शांतिपूर्वक, चुपचाप",
    "meaningEn": "",
    "examples": [
      {
        "en": "She keeps working calmly",
        "hi": "वह शांतिपूर्वक काम करती रहती है।"
      }
    ]
  },
  {
    "id": 564,
    "word": "clever",
    "pos": "adj",
    "pronunciation": "क्लेवर",
    "meaningHi": "चालाक, चतुर 38 39 अंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ",
    "meaningEn": "intelligent",
    "examples": []
  },
  {
    "id": 565,
    "word": "cold",
    "pos": "n / adj",
    "pronunciation": "कोल्ड",
    "meaningHi": "ठंड | ठंडा अंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ",
    "meaningEn": "",
    "examples": [
      {
        "en": "I have got a bad cold",
        "hi": "मुझे बुरी ठंढ लग गई है।"
      },
      {
        "en": "cold coffee",
        "hi": "ठंडी कौफी"
      }
    ]
  },
  {
    "id": 566,
    "word": "comfort",
    "pos": "n / v",
    "pronunciation": "कम्फ़ट",
    "meaningHi": "आराम 2 सुख-सुविधा की वस्तुएँ",
    "meaningEn": "ease; to console",
    "examples": []
  },
  {
    "id": 567,
    "word": "discover",
    "pos": "v",
    "pronunciation": "डिस्कवर",
    "meaningHi": "खोज करना, पता लगाना",
    "meaningEn": "to find for the first time",
    "examples": [
      {
        "en": "Did Benjamin Franklin discover electricity?",
        "hi": "क्ा बिजली की खोज बेंजमिन फ़्ैंक्लिन ने की?"
      }
    ]
  },
  {
    "id": 568,
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
    "id": 569,
    "word": "escape",
    "pos": "n / v",
    "pronunciation": "इस्केप",
    "meaningHi": "भागने की क्रिया, पलायन",
    "meaningEn": "to get away from",
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
    "id": 570,
    "word": "fair",
    "pos": "adj",
    "pronunciation": "न्ायपूर्ण निर्णय।",
    "meaningHi": "",
    "meaningEn": "just; a market",
    "examples": []
  },
  {
    "id": 571,
    "word": "forever",
    "pos": "adv",
    "pronunciation": "फ़र्एवर",
    "meaningHi": "सदैव, हमेशा के लिए, स्ायी रूप से",
    "meaningEn": "for all time",
    "examples": [
      {
        "en": "We have lost him forever",
        "hi": "हमने उन्हेंें हमेशा के लिए खो दिया है।"
      }
    ]
  },
  {
    "id": 572,
    "word": "fresh",
    "pos": "adj",
    "pronunciation": "फ्े़श",
    "meaningHi": "ताजा",
    "meaningEn": "newly made",
    "examples": []
  },
  {
    "id": 573,
    "word": "heavy",
    "pos": "adj",
    "pronunciation": "हेवि",
    "meaningHi": "भारी",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 574,
    "word": "optimist",
    "pos": "n",
    "pronunciation": "अॉप्टिमिस्ट",
    "meaningHi": "आशावादी",
    "meaningEn": "",
    "examples": [
      {
        "en": "An optimist is one who always keeps hopes alive in life",
        "hi": "आशावादी वह है जो जीवन में हमेशा आशाएँ बनाए रखता है।"
      }
    ]
  },
  {
    "id": 575,
    "word": "quiet",
    "pos": "adj",
    "pronunciation": "क्वायट",
    "meaningHi": "शांत, खामोश 18 अंंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ",
    "meaningEn": "",
    "examples": [
      {
        "en": "a quiet environment",
        "hi": "शांत वातावरण"
      }
    ]
  },
  {
    "id": 576,
    "word": "racist",
    "pos": "adj",
    "pronunciation": "रेसिस्ट",
    "meaningHi": "नस्लवादी जो कुछ नसों के लोगों, जैसे अफ्ीका के काले लोगों को, या शूद्रोंों को, नीच दृष्टि से देखता हो।",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 577,
    "word": "sad",
    "pos": "adj",
    "pronunciation": "सैड",
    "meaningHi": "उदास 2 बुरा, शोकजनक",
    "meaningEn": "",
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
    "id": 578,
    "word": "sharp",
    "pos": "adj",
    "pronunciation": "शाप",
    "meaningHi": "तेज धार या नोंक वाला अंंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ",
    "meaningEn": "",
    "examples": [
      {
        "en": "a sharp knife - एक तेज धार वाला चाकूू; a sharp mind",
        "hi": "एक तेज दिमाग"
      }
    ]
  },
  {
    "id": 579,
    "word": "smooth",
    "pos": "adj",
    "pronunciation": "स्मूद",
    "meaningHi": "चिकना",
    "meaningEn": "",
    "examples": [
      {
        "en": "a smooth surface",
        "hi": "एक चिकनी सतह"
      }
    ]
  },
  {
    "id": 580,
    "word": "straight",
    "pos": "adj / adv",
    "pronunciation": "स्ट्रेट",
    "meaningHi": "सीधा | सीधे",
    "meaningEn": "",
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
    "id": 581,
    "word": "strange",
    "pos": "adj",
    "pronunciation": "स्ट्ेनज",
    "meaningHi": "अजीब, विचित्र",
    "meaningEn": "",
    "examples": [
      {
        "en": "strange people",
        "hi": "अजीब लोग"
      }
    ]
  },
  {
    "id": 582,
    "word": "studious",
    "pos": "adj",
    "pronunciation": "स्ूडिअस",
    "meaningHi": "अध्यनशील, पढ़ने-लिखने में रुचि रखने वाला",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 583,
    "word": "sweet",
    "pos": "adj",
    "pronunciation": "स्वीट",
    "meaningHi": "मीठा",
    "meaningEn": "",
    "examples": [
      {
        "en": "sweet memories",
        "hi": "मीठी यादें"
      }
    ]
  },
  {
    "id": 584,
    "word": "tactful",
    "pos": "adj",
    "pronunciation": "टैक्ट्फ़्ल",
    "meaningHi": "चतुराई से काम निकालने वाला अच्े अर्थ में",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 585,
    "word": "trouble",
    "pos": "n",
    "pronunciation": "ट्र॒बल",
    "meaningHi": "समस्ा, कष्ट",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 586,
    "word": "youth",
    "pos": "n",
    "pronunciation": "यूथ़",
    "meaningHi": "युवा अवस्ा, यौवन, जवानी 2 जवान 1",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 587,
    "word": "baptism",
    "pos": "n",
    "pronunciation": "बैप्टिज़म",
    "meaningHi": "ईसाई धर्म में दीक्षा को बैप्टिज़म कहते हैं।",
    "meaningEn": "religious purification ceremony",
    "examples": []
  },
  {
    "id": 588,
    "word": "claim",
    "pos": "n / v",
    "pronunciation": "क्ेम",
    "meaningHi": "दावा अंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ",
    "meaningEn": "to assert",
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
    "id": 589,
    "word": "collect",
    "pos": "v",
    "pronunciation": "कलेक्ट",
    "meaningHi": "संग्रह करना, इकट्ा करना",
    "meaningEn": "to gather",
    "examples": [
      {
        "en": "collect coins",
        "hi": "सिक्कोंों का संग्रह करना"
      }
    ]
  },
  {
    "id": 590,
    "word": "compare",
    "pos": "v",
    "pronunciation": "तुलना एक आदमी से नहीं कर सकते।",
    "meaningHi": "कम्ेअ(र) तुलना करना (You can't compare an animal with a man - तुम एक जानवर की",
    "meaningEn": "to examine similarities",
    "examples": [
      {
        "en": "You can't compare an animal with a man",
        "hi": "तुम एक जानवर की तुलना एक आदमी से नहीं कर सकते।"
      }
    ]
  },
  {
    "id": 591,
    "word": "develop",
    "pos": "v",
    "pronunciation": "डिवेलप",
    "meaningHi": "विकसित करना/होना",
    "meaningEn": "to grow; to create over time",
    "examples": [
      {
        "en": "Let us develop our understanding",
        "hi": "हम अपनी समझ को विकसित करें।"
      }
    ]
  },
  {
    "id": 592,
    "word": "increase",
    "pos": "n / v",
    "pronunciation": "इनक्रीस",
    "meaningHi": "वृद्धि, बढ़ोत्तरी | बढ़ना, वृद्धि करना",
    "meaningEn": "",
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
    "id": 593,
    "word": "involve",
    "pos": "v",
    "pronunciation": "इन्वॉल्व",
    "meaningHi": "किसी प्रसंग, कार्यक्रम या गतिविधि में किसी का शामिल होना, या करना",
    "meaningEn": "",
    "examples": [
      {
        "en": "Junior doctors were not involved in this surgery",
        "hi": "जूनियर डॉक्टरों को इस ऑपरेशन में शामिल नहीं किया गया।"
      }
    ]
  },
  {
    "id": 594,
    "word": "manage",
    "pos": "v",
    "pronunciation": "मैनिज",
    "meaningHi": "प्रबंध करना, संचालन करना",
    "meaningEn": "",
    "examples": [
      {
        "en": "Who man- ages this business?",
        "hi": "इस व्यवसाय का संचालन कौन करता है?"
      }
    ]
  },
  {
    "id": 595,
    "word": "reduce",
    "pos": "v",
    "pronunciation": "रिड्ूस",
    "meaningHi": "आकार, मात्ा आदि की दृष्टि से घटाना, कम करना रिडक्शन कटौती, कमी",
    "meaningEn": "",
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
    "id": 596,
    "word": "solve",
    "pos": "v",
    "pronunciation": "सॉल्व",
    "meaningHi": "हल करना, किसी समस्ा या प्रश्न का समाधान करना",
    "meaningEn": "",
    "examples": [
      {
        "en": "solve a problem",
        "hi": "समस्ा का समाधान करना"
      }
    ]
  },
  {
    "id": 597,
    "word": "achiever",
    "pos": "n",
    "pronunciation": "अचीवर",
    "meaningHi": "किसी कार्य को मेहनत द्ारा संपन्न कर सफलता प्राप्त करने वाला व्यक्ति; उपलब्धि प्राप्त करने वाला व्यक्ति",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 598,
    "word": "admire",
    "pos": "v",
    "pronunciation": "अड्मायर",
    "meaningHi": "आदर करना, प्रशंसा करना ऐड्मरेशन आदर, प्रशंसा",
    "meaningEn": "",
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
    "id": 599,
    "word": "assertive",
    "pos": "adj",
    "pronunciation": "असर्िव",
    "meaningHi": "मुखर, अपने विचारों को जोर दे कर बोलने वाला",
    "meaningEn": "confident and direct",
    "examples": [
      {
        "en": "Being assertive is a great quality sometimes",
        "hi": "कभी-कभी असर्टिव होना एक बड़ा गुण होता है।"
      }
    ]
  },
  {
    "id": 600,
    "word": "brain",
    "pos": "n",
    "pronunciation": "ब्ेन, ब्ेइन",
    "meaningHi": "ब्ेन, ब्ेइन मस्तिष्क, दिमाग brain-",
    "meaningEn": "organ of thinking",
    "examples": []
  },
  {
    "id": 601,
    "word": "decision",
    "pos": "n",
    "pronunciation": "डिसिशज़न",
    "meaningHi": "निर्णय, फैसला",
    "meaningEn": "a choice made",
    "examples": [
      {
        "en": "Let's take a decision early",
        "hi": "हम एक निर्णय जल्ी लें।"
      }
    ]
  },
  {
    "id": 602,
    "word": "difference",
    "pos": "n",
    "pronunciation": "डिफ़्रन्स",
    "meaningHi": "अंतर, भेद",
    "meaningEn": "way things are not same",
    "examples": [
      {
        "en": "What is the difference between the two?",
        "hi": "दोनों के बीच अंतर क्ा है?"
      }
    ]
  },
  {
    "id": 603,
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
    "id": 604,
    "word": "offence",
    "pos": "n",
    "pronunciation": "अफ़ेेन्स",
    "meaningHi": "अपराध, दोष",
    "meaningEn": "",
    "examples": [
      {
        "en": "Stealing is an offence",
        "hi": "चोरी करना एक अपराध है।"
      }
    ]
  },
  {
    "id": 605,
    "word": "offend",
    "pos": "v",
    "pronunciation": "अफ़ेेन्ड",
    "meaningHi": "ठेस पहुँचाना, नाराज कर देना",
    "meaningEn": "",
    "examples": [
      {
        "en": "He offends everybody with his rude speech",
        "hi": "वह अपनी रूखी वाणी से सभी को नाराज कर देता है।"
      }
    ]
  },
  {
    "id": 606,
    "word": "opinion",
    "pos": "n",
    "pronunciation": "अपिन्यन",
    "meaningHi": "विचार, मत, राय अपोनन्ट प्रतिपक्षी, विरोधी",
    "meaningEn": "",
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
    "id": 607,
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
    "id": 608,
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
    "id": 609,
    "word": "poverty",
    "pos": "n",
    "pronunciation": "पॉवटि",
    "meaningHi": "दरिद्रता, गरीबी",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 610,
    "word": "sensible",
    "pos": "adj",
    "pronunciation": "सेन्सिबल",
    "meaningHi": "समझदार",
    "meaningEn": "",
    "examples": [
      {
        "en": "He is a sensible boy",
        "hi": "वह एक समझदार लड़का है।"
      }
    ]
  },
  {
    "id": 611,
    "word": "sensitive",
    "pos": "adj",
    "pronunciation": "सेन्सिटिव",
    "meaningHi": "संवेदनशील",
    "meaningEn": "",
    "examples": [
      {
        "en": "She is too sensitive",
        "hi": "वह अति संवेदनशील है।"
      }
    ]
  },
  {
    "id": 612,
    "word": "smell",
    "pos": "n / v",
    "pronunciation": "स्मेल",
    "meaningHi": "गंध, बू | 1 सूँघना 2 सुगंध फैलाना",
    "meaningEn": "",
    "examples": [
      {
        "en": "Rose smells well",
        "hi": "गुलाब अच्ा महकता है।"
      }
    ]
  },
  {
    "id": 613,
    "word": "submissive",
    "pos": "adj",
    "pronunciation": "सब्मिसिव",
    "meaningHi": "आज्ाकारी",
    "meaningEn": "",
    "examples": [
      {
        "en": "a submissive child",
        "hi": "एक आज्ाकारी बालक"
      }
    ]
  },
  {
    "id": 614,
    "word": "accident",
    "pos": "n",
    "pronunciation": "ऐक्सिडन्ट",
    "meaningHi": "दुर्घटना 2 संयोग ऐक्सिडन्ट इनशोरन्स दुर्घटना बीमा दुर्घटना में मृत्ु होने पर जिसमें परिवार को पैसे मिलते हैं। A 8 9 अंगरेज़ी शब्द उच्ारण हिंंदी में",
    "meaningEn": "",
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
    "id": 615,
    "word": "address",
    "pos": "n / v",
    "pronunciation": "अड्ेस",
    "meaningHi": "पता | भाषण या व्याख्ान देना, संबोधन करना 1893 - स्ामी विवेकानंद ने विश्व की धर्मसंसद को 1893 में संबोधित किया।",
    "meaningEn": "a location; to speak to",
    "examples": []
  },
  {
    "id": 616,
    "word": "amount",
    "pos": "n",
    "pronunciation": "अमाउंट",
    "meaningHi": "पैसा 2 मात्ा 1",
    "meaningEn": "a quantity; total",
    "examples": []
  },
  {
    "id": 617,
    "word": "art",
    "pos": "n",
    "pronunciation": "आट",
    "meaningHi": "कला",
    "meaningEn": "",
    "examples": [
      {
        "en": "Art is a creative activity",
        "hi": "कला एक सृजनात्मक गतिविधि है।"
      }
    ]
  },
  {
    "id": 618,
    "word": "board",
    "pos": "n / v",
    "pronunciation": "बोर्ड",
    "meaningHi": "लकड़ी का तख्ा या पटरा 2 परिषद, मंडल",
    "meaningEn": "flat wood; a committee",
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
    "id": 619,
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
    "id": 620,
    "word": "bus",
    "pos": "n",
    "pronunciation": "बस",
    "meaningHi": "बस (यात्रियों के लिए चार या छह पहिए की बड़ी गाड़ी)",
    "meaningEn": "large passenger vehicle",
    "examples": []
  },
  {
    "id": 621,
    "word": "centre",
    "pos": "n",
    "pronunciation": "सेन्टर",
    "meaningHi": "केंद्र",
    "meaningEn": "the middle point",
    "examples": [
      {
        "en": "She was the centre of attraction",
        "hi": "वह आकर्षण का केंद्र थी।"
      },
      {
        "en": "She was the centre of attraction",
        "hi": "वह आकर्षण का केंद्र थी।"
      }
    ]
  },
  {
    "id": 622,
    "word": "chance",
    "pos": "n",
    "pronunciation": "चान्स",
    "meaningHi": "अवसर; संयोग",
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
    "id": 623,
    "word": "circle",
    "pos": "n",
    "pronunciation": "सर्कल",
    "meaningHi": "घेरा, वृत्त circumst-",
    "meaningEn": "a round shape",
    "examples": []
  },
  {
    "id": 624,
    "word": "colour",
    "pos": "n",
    "pronunciation": "और तृतीयक।",
    "meaningHi": "रंग combi-",
    "meaningEn": "a visual property",
    "examples": [
      {
        "en": "Colours are of three kinds— primary, secondary and tertiary",
        "hi": "रंग तीन तरह के होते हैं— प्राथमिक, द्वितीयक और तृतीयक।"
      }
    ]
  },
  {
    "id": 625,
    "word": "company",
    "pos": "n",
    "pronunciation": "कम्पनि",
    "meaningHi": "कंपनी; साथ, संगति",
    "meaningEn": "a business; companionship",
    "examples": [
      {
        "en": "One feels good in his company",
        "hi": "उसके संग में अच्ा महसूूस होता है।"
      }
    ]
  },
  {
    "id": 626,
    "word": "complete",
    "pos": "adj / v",
    "pronunciation": "कम्प्ीट",
    "meaningHi": "पूर्ण, पूरा; पूरा करना",
    "meaningEn": "entire; to finish",
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
    "id": 627,
    "word": "contact",
    "pos": "n / v",
    "pronunciation": "कॉन्टैक्ट",
    "meaningHi": "संपर्क 2 व्यक्ति जिससे जान-पहचान हो | संपर्क करना",
    "meaningEn": "to get in touch",
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
    "id": 628,
    "word": "crowd",
    "pos": "n",
    "pronunciation": "क्ाउड",
    "meaningHi": "भीड़ अंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ",
    "meaningEn": "large group of people",
    "examples": []
  },
  {
    "id": 629,
    "word": "danger",
    "pos": "n",
    "pronunciation": "डेनजर",
    "meaningHi": "ख़तरा",
    "meaningEn": "a threat; risk of harm",
    "examples": [
      {
        "en": "Lion is a dangerous animal",
        "hi": "शेर एक खतरनाक जानवर है।"
      }
    ]
  },
  {
    "id": 630,
    "word": "demand",
    "pos": "n / v",
    "pronunciation": "डिमांंड",
    "meaningHi": "माँग अंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ",
    "meaningEn": "to ask firmly",
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
    "id": 631,
    "word": "detail",
    "pos": "n",
    "pronunciation": "डीटेल",
    "meaningHi": "तथ्य या सूचना, ब्ोरा",
    "meaningEn": "a small particular",
    "examples": [
      {
        "en": "Give me details of your trip",
        "hi": "अपनी यात्रा के विवरण मुझे दो।"
      }
    ]
  },
  {
    "id": 632,
    "word": "direction",
    "pos": "n",
    "pronunciation": "डरेक्शन",
    "meaningHi": "दिशा",
    "meaningEn": "the way something faces or moves",
    "examples": [
      {
        "en": "We work under the direction of an expert",
        "hi": "हम एक विशेषज्ञ के निर्देेशन में काम करते हैं।"
      }
    ]
  },
  {
    "id": 633,
    "word": "distance",
    "pos": "n",
    "pronunciation": "डिस्टन्स",
    "meaningHi": "दूरी",
    "meaningEn": "the space between two points",
    "examples": []
  },
  {
    "id": 634,
    "word": "doctor",
    "pos": "n",
    "pronunciation": "डॉक्टर",
    "meaningHi": "चिकित्सक 2 स्ातकोत्तर से ऊपर की एक विशेष अकादमिक उपाधि",
    "meaningEn": "medical professional",
    "examples": []
  },
  {
    "id": 635,
    "word": "event",
    "pos": "n",
    "pronunciation": "इवेन्ट",
    "meaningHi": "घटना 2 समारोह",
    "meaningEn": "something that happens",
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
    "id": 636,
    "word": "evidence",
    "pos": "n",
    "pronunciation": "एविडन्स",
    "meaningHi": "प्रमाण, सबूत",
    "meaningEn": "proof",
    "examples": []
  },
  {
    "id": 637,
    "word": "expression",
    "pos": "n",
    "pronunciation": "इक्स्ेशन",
    "meaningHi": "विचारों या भावनाओं की अभिव्यक्ति",
    "meaningEn": "a look; a phrase",
    "examples": [
      {
        "en": "Language is not the only medium of expression of emotions",
        "hi": "भावनाएं व्यक्त करने का एकमात्र माध्यम भाषा नहीं है।"
      }
    ]
  },
  {
    "id": 638,
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
    "id": 639,
    "word": "finish",
    "pos": "v",
    "pronunciation": "फ़िनिश",
    "meaningHi": "समाप्त करना",
    "meaningEn": "to complete",
    "examples": [
      {
        "en": "Please finish your food",
        "hi": "कृपया अपना खाना समाप्त करो।"
      }
    ]
  },
  {
    "id": 640,
    "word": "floor",
    "pos": "n",
    "pronunciation": "फ़र्श",
    "meaningHi": "",
    "meaningEn": "bottom of room",
    "examples": []
  },
  {
    "id": 641,
    "word": "foreign",
    "pos": "adj",
    "pronunciation": "फ़ॉरन",
    "meaningHi": "परदेशी, विदेशी, बाहरी",
    "meaningEn": "of another country",
    "examples": [
      {
        "en": "foreign goods",
        "hi": "विदेशी वस्ुएं"
      }
    ]
  },
  {
    "id": 642,
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
    "id": 643,
    "word": "fruit",
    "pos": "n",
    "pronunciation": "फ़्रूट",
    "meaningHi": "फल",
    "meaningEn": "product of plant",
    "examples": []
  },
  {
    "id": 644,
    "word": "glass",
    "pos": "n",
    "pronunciation": "ग्ास",
    "meaningHi": "काँच, शीशा 2 पानी पीने का गिलास ग्ोबल वोर्मिंग वैश्विक ऊष्ीकरण कुछ गैसों में वृद्धि के कारण पृथ्ी के वायुमंडल की गरमी में वृद्धि",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 645,
    "word": "height",
    "pos": "n",
    "pronunciation": "हाइट",
    "meaningHi": "ऊँचाई, लंबाई",
    "meaningEn": "",
    "examples": [
      {
        "en": "What is your height?",
        "hi": "तुम्ारी लंबाई क्ा है?"
      }
    ]
  },
  {
    "id": 646,
    "word": "hospital",
    "pos": "n",
    "pronunciation": "हॉस्पिट्ल",
    "meaningHi": "अस्पताल",
    "meaningEn": "",
    "examples": [
      {
        "en": "a private hospital",
        "hi": "एक गैरसर- कारी अस्पताल"
      }
    ]
  },
  {
    "id": 647,
    "word": "image",
    "pos": "n",
    "pronunciation": "इमिज",
    "meaningHi": "चित्र, छवि 2 मानसिक चित्र, छवि, किसी व्यक्ति या संगठन के विषय में लोगों के दिमाग में सामान्य धारणा, चित्र या कल्पना",
    "meaningEn": "",
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
    "id": 648,
    "word": "imagine",
    "pos": "v",
    "pronunciation": "इमैजिन",
    "meaningHi": "कल्पना करना",
    "meaningEn": "",
    "examples": [
      {
        "en": "Imagine that you are floating in midair",
        "hi": "कल्पना करो कि तुम बीच हवा में तैर रहे हो।"
      }
    ]
  },
  {
    "id": 649,
    "word": "indeed",
    "pos": "adv",
    "pronunciation": "इन्डीड",
    "meaningHi": "सचमुच, निश्चित रूप से",
    "meaningEn": "",
    "examples": [
      {
        "en": "indeed a good fellow",
        "hi": "निश्चय ही एक अच्ा इंसान"
      }
    ]
  },
  {
    "id": 650,
    "word": "job",
    "pos": "n",
    "pronunciation": "जॉब",
    "meaningHi": "नौकरी, काम",
    "meaningEn": "",
    "examples": [
      {
        "en": "I have got a job",
        "hi": "मुझे एक नौकरी मिल गई है।"
      }
    ]
  },
  {
    "id": 651,
    "word": "journey",
    "pos": "n",
    "pronunciation": "जर्नीी",
    "meaningHi": "यात्ा, सफर",
    "meaningEn": "",
    "examples": [
      {
        "en": "a tiring journey",
        "hi": "एक थकाने वाली यात्रा"
      }
    ]
  },
  {
    "id": 652,
    "word": "limit",
    "pos": "n / v",
    "pronunciation": "लिमिट",
    "meaningHi": "सीमा | सीमित करना अंंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ",
    "meaningEn": "",
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
    "id": 653,
    "word": "meeting",
    "pos": "n",
    "pronunciation": "मीटिंग",
    "meaningHi": "सभा, गोष्ी 2 भेंट",
    "meaningEn": "",
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
    "id": 654,
    "word": "memory",
    "pos": "n",
    "pronunciation": "मेमरि",
    "meaningHi": "स्मृति, याददाश्त",
    "meaningEn": "",
    "examples": [
      {
        "en": "Omega 3 acid, which is found in flex seeds, strengthens mem- ory",
        "hi": "ओमेगा3 एसिड, जो तीसी में पाया जाता है, याददाश्त को मजबूूत बनाता है।"
      }
    ]
  },
  {
    "id": 655,
    "word": "message",
    "pos": "n",
    "pronunciation": "मेसिज",
    "meaningHi": "संदेश",
    "meaningEn": "",
    "examples": [
      {
        "en": "I have received his message",
        "hi": "उनका संदेश मुझे मिल गया है।"
      }
    ]
  },
  {
    "id": 656,
    "word": "method",
    "pos": "n",
    "pronunciation": "मेथड",
    "meaningHi": "पद्धति, तरीका",
    "meaningEn": "",
    "examples": [
      {
        "en": "Proper cooking methods can improve nutrition in our meals",
        "hi": "खाना पकाने की सही पद्धतियाँ हमारे भोजन में पोषक तत्त्वों की वृद्धि कर सकती हैं।"
      }
    ]
  },
  {
    "id": 657,
    "word": "middle",
    "pos": "n",
    "pronunciation": "मिड्ल",
    "meaningHi": "मध्य, बीच",
    "meaningEn": "",
    "examples": [
      {
        "en": "He sat in the middle row",
        "hi": "वह बीच की पंक्ति में बैठा।"
      }
    ]
  },
  {
    "id": 658,
    "word": "moment",
    "pos": "n",
    "pronunciation": "मोमन्ट",
    "meaningHi": "क्षण, पल मोनकि राजतंत्र जहाँ का शासन एक राजा के हाथों में हो",
    "meaningEn": "",
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
    "id": 659,
    "word": "noise",
    "pos": "n",
    "pronunciation": "नोइज़",
    "meaningHi": "शोर, कोलाहल",
    "meaningEn": "",
    "examples": [
      {
        "en": "Noise is the opposite of music",
        "hi": "शोर संगीत का उलटा है।"
      }
    ]
  },
  {
    "id": 660,
    "word": "normal",
    "pos": "n adj",
    "pronunciation": "नोमल",
    "meaningHi": "साधारण, सामान्य",
    "meaningEn": "",
    "examples": [
      {
        "en": "The situation has become normal",
        "hi": "स्थिति सामान्य हो गई है।"
      }
    ]
  },
  {
    "id": 661,
    "word": "object",
    "pos": "n / v",
    "pronunciation": "अॉब्ेक्ट",
    "meaningHi": "पदार्थ, वस्तु | आपत्ति करना, एतराज करना अब्जेक्शन आपत्ति, एतराज",
    "meaningEn": "",
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
    "id": 662,
    "word": "ocean",
    "pos": "n",
    "pronunciation": "ओशन",
    "meaningHi": "महासागर",
    "meaningEn": "",
    "examples": [
      {
        "en": "The Indian Ocean",
        "hi": "हिंद महासागर"
      }
    ]
  },
  {
    "id": 663,
    "word": "office",
    "pos": "n",
    "pronunciation": "अॉफ़िस",
    "meaningHi": "कार्यालय अफ़िश्ल सरकारी, शासकीय 134 135 अंंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 664,
    "word": "oil",
    "pos": "n",
    "pronunciation": "अोइल",
    "meaningHi": "तेल ok",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 665,
    "word": "partner",
    "pos": "n",
    "pronunciation": "पाट्नर",
    "meaningHi": "साथी, सहयोगी",
    "meaningEn": "",
    "examples": [
      {
        "en": "business partner",
        "hi": "व्ापार का साथी"
      }
    ]
  },
  {
    "id": 666,
    "word": "party",
    "pos": "n",
    "pronunciation": "पाटि",
    "meaningHi": "उत्सव 2 राजनीतिक पार्टीी या दल 3 मंडली 1",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 667,
    "word": "pattern",
    "pos": "n",
    "pronunciation": "पैटर्न",
    "meaningHi": "नमूना, ढाँचा, डिज़ाइन अंंगरेज़ी शब्द उच्ारण हिंदी में अर्थ",
    "meaningEn": "",
    "examples": [
      {
        "en": "The weather pattern is changing",
        "hi": "मौसम का ढाँचा बदल रहा है।"
      }
    ]
  },
  {
    "id": 668,
    "word": "period",
    "pos": "n",
    "pronunciation": "पिअरियड",
    "meaningHi": "अवधि, काल",
    "meaningEn": "",
    "examples": [
      {
        "en": "the ancient period",
        "hi": "प्राचीन काल"
      }
    ]
  },
  {
    "id": 669,
    "word": "personal",
    "pos": "adj",
    "pronunciation": "पर्सनल",
    "meaningHi": "व्यक्तिगत",
    "meaningEn": "",
    "examples": [
      {
        "en": "my personal views",
        "hi": "मेरे व्यक्तिगत विचार"
      }
    ]
  },
  {
    "id": 670,
    "word": "picture",
    "pos": "n",
    "pronunciation": "पिक्चर",
    "meaningHi": "तसवीर",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 671,
    "word": "pocket",
    "pos": "n",
    "pronunciation": "पॉकिट",
    "meaningHi": "जेब",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 672,
    "word": "police",
    "pos": "n",
    "pronunciation": "पुलीस",
    "meaningHi": "पुलिस",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 673,
    "word": "popular",
    "pos": "adj",
    "pronunciation": "पॉप्ुलर",
    "meaningHi": "लोकप्रिय",
    "meaningEn": "",
    "examples": [
      {
        "en": "a popular actor",
        "hi": "एक लोकप्रिय अभिनेता"
      }
    ]
  },
  {
    "id": 674,
    "word": "practise",
    "pos": "v",
    "pronunciation": "प्ैक्टिस",
    "meaningHi": "अभ्यास करना",
    "meaningEn": "",
    "examples": [
      {
        "en": "She is practising yoga these days",
        "hi": "वह आजकल योग का अभ्ास कर रही है।"
      }
    ]
  },
  {
    "id": 675,
    "word": "proper",
    "pos": "adj",
    "pronunciation": "प्ॉपर",
    "meaningHi": "उचित, उपयुक्त",
    "meaningEn": "",
    "examples": [
      {
        "en": "in proper uniform",
        "hi": "उचित वर्दीी में"
      }
    ]
  },
  {
    "id": 676,
    "word": "quality",
    "pos": "n",
    "pronunciation": "क्वॉलटि",
    "meaningHi": "गुण, गुणवत्ता, विशेषता",
    "meaningEn": "",
    "examples": [
      {
        "en": "Water has one quality, fire has another",
        "hi": "पानी में एक गुण होता हैं, आग में अन्य।"
      }
    ]
  },
  {
    "id": 677,
    "word": "range",
    "pos": "n",
    "pronunciation": "रेनज",
    "meaningHi": "एक ही चीज के कई प्रकार, या बहुत सारी अलग- -अलग चीजों का एक विस्तृस्तृत रेंज",
    "meaningEn": "",
    "examples": [
      {
        "en": "This shop has a wide range of dresses",
        "hi": "यह दूकान काफी भिन्न-भिन्न प्रकार की पोशाकें रखता है।"
      }
    ]
  },
  {
    "id": 678,
    "word": "relation",
    "pos": "n",
    "pronunciation": "रिलेशन",
    "meaningHi": "संबंध 2 संबंधी, रिश्तेश्तेदार",
    "meaningEn": "",
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
    "id": 679,
    "word": "remove",
    "pos": "v",
    "pronunciation": "रिमूव",
    "meaningHi": "हटाना",
    "meaningEn": "",
    "examples": [
      {
        "en": "Would you please remove that chair?",
        "hi": "क्ा आप कृपया उस कुर्सीी को हटा देंगे?"
      }
    ]
  },
  {
    "id": 680,
    "word": "repeat",
    "pos": "v",
    "pronunciation": "रिपीट",
    "meaningHi": "दोहराना, दोबारा कहना या लिखना",
    "meaningEn": "",
    "examples": [
      {
        "en": "Could you please repeat what you said?",
        "hi": "क्ा आपने जो कहा उसे कृपया दोहरा सकते हैं?"
      }
    ]
  },
  {
    "id": 681,
    "word": "replace",
    "pos": "v",
    "pronunciation": "रिप्ेस",
    "meaningHi": "किसी व्यक्ति या वस्तु का स्ान लेना 2 किसी व्यक्ति या वस्तु का स्ान किसी और को देना",
    "meaningEn": "",
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
    "id": 682,
    "word": "sea",
    "pos": "n",
    "pronunciation": "सी",
    "meaningHi": "समुद्र",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 683,
    "word": "search",
    "pos": "v / n",
    "pronunciation": "सर्च",
    "meaningHi": "तलाशना, खोजना | किसी की तलाश सर्च एन्जिन इन्टरनेट पर खोज करने में मदद करने वाले प्रोग्ाम, जैसे गूगल, याहू आदि",
    "meaningEn": "",
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
    "id": 684,
    "word": "season",
    "pos": "n",
    "pronunciation": "सीज़न",
    "meaningHi": "मौसम, ऋतु अंंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ",
    "meaningEn": "",
    "examples": [
      {
        "en": "There are several seasons in India",
        "hi": "भारत में कई मौसम होते हैं।"
      }
    ]
  },
  {
    "id": 685,
    "word": "secret",
    "pos": "n / adj",
    "pronunciation": "सीक्रेट",
    "meaningHi": "गोपनीय बात, रहस्य | गोपनीय",
    "meaningEn": "",
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
    "id": 686,
    "word": "section",
    "pos": "n",
    "pronunciation": "सेक्शन",
    "meaningHi": "खंड, भाग",
    "meaningEn": "",
    "examples": [
      {
        "en": "He is in section B of class VII",
        "hi": "वह कक्षा आठ के खंड B में है।"
      }
    ]
  },
  {
    "id": 687,
    "word": "serious",
    "pos": "adj",
    "pronunciation": "सिअरिअस",
    "meaningHi": "गंभीर",
    "meaningEn": "",
    "examples": [
      {
        "en": "a serious matter",
        "hi": "एक गंभीर मामला"
      }
    ]
  },
  {
    "id": 688,
    "word": "silver",
    "pos": "n",
    "pronunciation": "सिल्वर",
    "meaningHi": "चाँदी",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 689,
    "word": "skill",
    "pos": "n",
    "pronunciation": "स््किल",
    "meaningHi": "निपुणता, हुनर, कौशल",
    "meaningEn": "",
    "examples": [
      {
        "en": "cooking skills",
        "hi": "खाना बनाने का हुनर"
      }
    ]
  },
  {
    "id": 690,
    "word": "space",
    "pos": "n",
    "pronunciation": "स्पेस",
    "meaningHi": "अंतरिक्ष 2 खाली स्ान",
    "meaningEn": "",
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
    "id": 691,
    "word": "speed",
    "pos": "n",
    "pronunciation": "स्पीड",
    "meaningHi": "रफ्ार",
    "meaningEn": "",
    "examples": [
      {
        "en": "Speed thrills, but it also kills",
        "hi": "गति रोमांचित करती है, मगर यह मार भी देती है।"
      }
    ]
  },
  {
    "id": 692,
    "word": "sport",
    "pos": "n",
    "pronunciation": "सपोट",
    "meaningHi": "खेलकूद",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 693,
    "word": "square",
    "pos": "adj adv / n",
    "pronunciation": "स्केअर",
    "meaningHi": "वर्गाकार | 1 वर्ग वह आकृति जिसके चारों कोण और चारों रेखाएं बराबर हों 2 चौक",
    "meaningEn": "",
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
    "id": 694,
    "word": "stage",
    "pos": "n",
    "pronunciation": "स्ेज",
    "meaningHi": "मंच",
    "meaningEn": "",
    "examples": [
      {
        "en": "dance stage",
        "hi": "नृत्य का मंच"
      }
    ]
  },
  {
    "id": 695,
    "word": "standard",
    "pos": "n / adj",
    "pronunciation": "स्ैन्डड",
    "meaningHi": "गुणवत्ता का स्तर 2 कक्षा, क्ास 1",
    "meaningEn": "",
    "examples": [
      {
        "en": "standard products",
        "hi": "उत्तम उत्ाद"
      }
    ]
  },
  {
    "id": 696,
    "word": "stone",
    "pos": "n",
    "pronunciation": "स्ोन",
    "meaningHi": "पत्थर",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 697,
    "word": "store",
    "pos": "n / v",
    "pronunciation": "स्ोर",
    "meaningHi": "सामान का भंडार | जमा करना",
    "meaningEn": "",
    "examples": [
      {
        "en": "We have stored enough food grains",
        "hi": "हम लोगों ने काफी अन्न जमा कर लिया है।"
      }
    ]
  },
  {
    "id": 698,
    "word": "surface",
    "pos": "n",
    "pronunciation": "सर्फेेस",
    "meaningHi": "ऊपर की सतह",
    "meaningEn": "",
    "examples": [
      {
        "en": "The surface of earth is cooler than its inside",
        "hi": "धरती की सतह इसके अंदर के भाग से अधिक ठंडी है।"
      }
    ]
  },
  {
    "id": 699,
    "word": "total",
    "pos": "n adj",
    "pronunciation": "टोटल",
    "meaningHi": "पूर्ण, समग्र 2 कुल संख्ा",
    "meaningEn": "",
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
    "id": 700,
    "word": "travel",
    "pos": "v",
    "pronunciation": "ट्ैवल",
    "meaningHi": "यात्ा या सफ़र करना",
    "meaningEn": "",
    "examples": [
      {
        "en": "I travelled to Vietnam the last week",
        "hi": "मैंने पिछले हफ्े वियतनाम की यात्रा की।"
      }
    ]
  },
  {
    "id": 701,
    "word": "village",
    "pos": "n",
    "pronunciation": "विलिज",
    "meaningHi": "गाँव, ग्ाम",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 702,
    "word": "visit",
    "pos": "v",
    "pronunciation": "विज़िट",
    "meaningHi": "किसी स्ान पर जाना, किसी व्यक्ति से मिलने जाना",
    "meaningEn": "",
    "examples": [
      {
        "en": "I have visited Ladakh",
        "hi": "मैं लद्ाख गया हँ।"
      }
    ]
  },
  {
    "id": 703,
    "word": "window",
    "pos": "n",
    "pronunciation": "विन्डो",
    "meaningHi": "खिड़की",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 704,
    "word": "active",
    "pos": "adj",
    "pronunciation": "ऐक्टिव",
    "meaningHi": "सक्रिय",
    "meaningEn": "",
    "examples": [
      {
        "en": "an active boy",
        "hi": "एक सक्रिय लड़का"
      }
    ]
  },
  {
    "id": 705,
    "word": "activity",
    "pos": "n",
    "pronunciation": "ऐक्टिवटी",
    "meaningHi": "गतिविधि, क्रिया",
    "meaningEn": "",
    "examples": [
      {
        "en": "no activitiy for the last ten days",
        "hi": "पिछले दस दिनों से कोई गतिविधि नहीं"
      }
    ]
  },
  {
    "id": 706,
    "word": "actually",
    "pos": "adv",
    "pronunciation": "ऐक्ुअलि",
    "meaningHi": "सचमुच, वास्तव में",
    "meaningEn": "in fact; really",
    "examples": [
      {
        "en": "actually dead?",
        "hi": "सचमुच मरा हुआ?"
      }
    ]
  },
  {
    "id": 707,
    "word": "advantage",
    "pos": "n",
    "pronunciation": "अड्वान्टिज",
    "meaningHi": "सुविधा, फायदा",
    "meaningEn": "a favorable condition; benefit",
    "examples": [
      {
        "en": "He has the advantage of a library in his neighbourhood",
        "hi": "उसके पास पड़ोस में एक पुस्तकालय होने का फायदा है।"
      }
    ]
  },
  {
    "id": 708,
    "word": "advise",
    "pos": "v",
    "pronunciation": "अड्वाइज़",
    "meaningHi": "सलाह देना",
    "meaningEn": "",
    "examples": [
      {
        "en": "I advised him to exercise daily",
        "hi": "मैंने उसे रोज व्ायाम करने की सलाह दी।"
      }
    ]
  },
  {
    "id": 709,
    "word": "affect",
    "pos": "v",
    "pronunciation": "अफ़ेक्ट",
    "meaningHi": "प्रभाव डालना",
    "meaningEn": "",
    "examples": [
      {
        "en": "Pollution affects health",
        "hi": "प्रदूषण स्ास्थ्य को प्रभावित करता है।"
      }
    ]
  },
  {
    "id": 710,
    "word": "announce",
    "pos": "v",
    "pronunciation": "अनाउंस",
    "meaningHi": "घोषणा करना",
    "meaningEn": "to make known publicly",
    "examples": [
      {
        "en": "The results have been announced",
        "hi": "परिणामों की घोषणा हो गई है।"
      }
    ]
  },
  {
    "id": 711,
    "word": "another",
    "pos": "det",
    "pronunciation": "कृपया मुझे दूसरी कलम दो।",
    "meaningHi": "एक और, दूसरा",
    "meaningEn": "one more; a different one",
    "examples": [
      {
        "en": "Please give me another pen",
        "hi": "कृपया मुझे दूसरी कलम दो।"
      }
    ]
  },
  {
    "id": 712,
    "word": "anyway",
    "pos": "adv",
    "pronunciation": "एनिवे",
    "meaningHi": "किसी-न-किसी प्रकार से एनिवेअ कहीं भी अपाट अलग",
    "meaningEn": "regardless; in any case",
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
    "id": 713,
    "word": "appeal",
    "pos": "n / v",
    "pronunciation": "अपील",
    "meaningHi": "निवेदन, अपील | निवेदन करना, अपील करना",
    "meaningEn": "to make a request; attraction",
    "examples": [
      {
        "en": "The PM has appealed to everybody to maintain peace",
        "hi": "प्रधानमंत्री ने सभी से शांति बनाए रखने की अपील की है।"
      }
    ]
  },
  {
    "id": 714,
    "word": "apply",
    "pos": "v",
    "pronunciation": "अप्ाइ",
    "meaningHi": "आवेदन देना 2 लागू करना, व्यवहार में लाना",
    "meaningEn": "to put to use; to request",
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
    "id": 715,
    "word": "approval",
    "pos": "n",
    "pronunciation": "अप्रूवल",
    "meaningHi": "अनुमोदन, स्ीकृति of v अप्रूव 1 अनुमोदित करना 2 समर्थन करना 16 17 अंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ 1",
    "meaningEn": "agreement; permission",
    "examples": [
      {
        "en": "Approval is awaited",
        "hi": "अनुमोदन का इंतजार है।"
      }
    ]
  },
  {
    "id": 716,
    "word": "argue",
    "pos": "v",
    "pronunciation": "आग्यु",
    "meaningHi": "तर्क-वितर्क करना, बहस करना",
    "meaningEn": "to give reasons for or against",
    "examples": [
      {
        "en": "He argued well in the court",
        "hi": "उसने न्ायालय में अच्छी बहस की।"
      }
    ]
  },
  {
    "id": 717,
    "word": "argument",
    "pos": "n",
    "pronunciation": "आग्युमंट",
    "meaningHi": "तर्क, दलील, बहस",
    "meaningEn": "a disagreement; a reason",
    "examples": [
      {
        "en": "There are many arguments in favour of God's existence",
        "hi": "ईश्वर के अस्तित्व के पक्ष में कई तर्क हैं।"
      }
    ]
  },
  {
    "id": 718,
    "word": "arrange",
    "pos": "v",
    "pronunciation": "अरेंज",
    "meaningHi": "व्यवस्थित करना, चीजों को उचित जगह पर लगाना 2 इंतजाम करना 1",
    "meaningEn": "to put in order",
    "examples": []
  },
  {
    "id": 719,
    "word": "arrival",
    "pos": "n",
    "pronunciation": "अराइवल",
    "meaningHi": "आगमन",
    "meaningEn": "the act of arriving",
    "examples": [
      {
        "en": "The train's arrival time is 6 p.m.",
        "hi": "ट्ेन के पहुँचने का समय है शाम 6 बजे।"
      }
    ]
  },
  {
    "id": 720,
    "word": "arrive",
    "pos": "v",
    "pronunciation": "अराइव",
    "meaningHi": "पहुँचना, आ जाना",
    "meaningEn": "to reach a destination",
    "examples": [
      {
        "en": "The train has arrived",
        "hi": "ट्ेन पहुँच गई है।"
      }
    ]
  },
  {
    "id": 721,
    "word": "artist",
    "pos": "n",
    "pronunciation": "आटिस्ट",
    "meaningHi": "कलाकार आर्य समाज स्ामी दयानंद द्ारा स्थापित, वेदों पर आधारित हिंदू-धर्म का एक संप्रदाय as ऐज़, अज़ 1 जैसा 2 के जैसा, के समान 3 चूँकि, कोंकि 4 के रूप",
    "meaningEn": "a person who creates art",
    "examples": [
      {
        "en": "Raphael and Leonardo da Vinci were all time great artists",
        "hi": "रैफ़ेअल और लिअनारदो दविन्ी महान सार्वकालिक कलाकार थे।"
      }
    ]
  },
  {
    "id": 722,
    "word": "attempt",
    "pos": "n / v",
    "pronunciation": "अटेम्ट",
    "meaningHi": "प्रयत्न, प्रयास, कोशिश | प्रयास करना, कोशिश करना",
    "meaningEn": "to try; an effort",
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
    "id": 723,
    "word": "attract",
    "pos": "v",
    "pronunciation": "अट्ैक्ट",
    "meaningHi": "आकर्षित करना अट्ैक्टिव आकर्षक",
    "meaningEn": "to draw toward",
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
    "id": 724,
    "word": "audience",
    "pos": "n",
    "pronunciation": "ओडियंस",
    "meaningHi": "सुनने वाले, श्ोता",
    "meaningEn": "people watching or listening",
    "examples": [
      {
        "en": "The Internet provides a worldwide audience",
        "hi": "इंटरनेट विश्व्ापी श्ोता प्रदान करता है।"
      }
    ]
  },
  {
    "id": 725,
    "word": "authority",
    "pos": "n",
    "pronunciation": "अथोरटि",
    "meaningHi": "अधिकार 2 अधिकार रखने वाली संस्ा या व्यक्ति 1",
    "meaningEn": "power to command",
    "examples": []
  },
  {
    "id": 726,
    "word": "avoid",
    "pos": "v",
    "pronunciation": "अवोइड",
    "meaningHi": "से बचना, दरकिनार करना",
    "meaningEn": "to stay away from",
    "examples": [
      {
        "en": "Avoid cold water",
        "hi": "ठंढे पानी से बचो।"
      }
    ]
  },
  {
    "id": 727,
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
    "id": 728,
    "word": "badly",
    "pos": "adv",
    "pronunciation": "बैड्लि",
    "meaningHi": "बुरी तरह, गंभीर रूप से",
    "meaningEn": "in a bad manner",
    "examples": [
      {
        "en": "badly injured",
        "hi": "बुरी तरह घायल"
      }
    ]
  },
  {
    "id": 729,
    "word": "bag",
    "pos": "n / v",
    "pronunciation": "बैग",
    "meaningHi": "थैला | हासिल करना",
    "meaningEn": "a container for carrying",
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
    "id": 730,
    "word": "bar",
    "pos": "n",
    "pronunciation": "",
    "meaningHi": "बार 1 शराबखाना 2 वकीलों का समूह 3 रोक 4 टिकिया 5 डंडा",
    "meaningEn": "a rod; a counter",
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
    "id": 731,
    "word": "basic",
    "pos": "adj",
    "pronunciation": "बेसिक,",
    "meaningHi": "बेइसिक बुनियादी, आधारभूत",
    "meaningEn": "fundamental; essential",
    "examples": [
      {
        "en": "We should all have the basic knowledge of civilised behaviour",
        "hi": "हम सभी को सभ्य आचरण का आधारभूूत ज्ान होना चाहिए।"
      }
    ]
  },
  {
    "id": 732,
    "word": "basically",
    "pos": "adv",
    "pronunciation": "बेसिक्ी",
    "meaningHi": "मूल रूप से",
    "meaningEn": "fundamentally",
    "examples": [
      {
        "en": "Man is basically good",
        "hi": "मनुष्य मूूल रूप से अच्ा हुआ करता है।"
      }
    ]
  },
  {
    "id": 733,
    "word": "basis",
    "pos": "n",
    "pronunciation": "बेसिस",
    "meaningHi": "आधार, नींव",
    "meaningEn": "foundation; main reason",
    "examples": [
      {
        "en": "What is the basis of your allegation?",
        "hi": "तुम्ारे आरोप का आधार क्ा है?"
      }
    ]
  },
  {
    "id": 734,
    "word": "bathe",
    "pos": "v",
    "pronunciation": "बेद",
    "meaningHi": "नहाना",
    "meaningEn": "to wash the body",
    "examples": [
      {
        "en": "Bathing in a river is enjoyable",
        "hi": "नदी में नहाना आनंददायक होता है।"
      }
    ]
  },
  {
    "id": 735,
    "word": "because",
    "pos": "conj",
    "pronunciation": "बिकॉज़",
    "meaningHi": "क्योंकि",
    "meaningEn": "for the reason that",
    "examples": [
      {
        "en": "He came because he wanted some books",
        "hi": "वह आया क्योंोंकि वह कुछ किताबें चाहता था।"
      }
    ]
  },
  {
    "id": 736,
    "word": "beginning",
    "pos": "n",
    "pronunciation": "बिगिनिंग",
    "meaningHi": "आरंभ, शुरुआत",
    "meaningEn": "the start",
    "examples": [
      {
        "en": "a good beginning",
        "hi": "एक अच्छी शुरुआत"
      }
    ]
  },
  {
    "id": 737,
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
    "id": 738,
    "word": "benefit",
    "pos": "n / v",
    "pronunciation": "बेनफ़िट",
    "meaningHi": "लाभ, फायदा | लाभ उठाना; लाभ प्रदान करना",
    "meaningEn": "an advantage",
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
    "id": 739,
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
    "id": 740,
    "word": "bet",
    "pos": "n / v",
    "pronunciation": "बेट",
    "meaningHi": "दाँव, बाजी | शर्त लगाना",
    "meaningEn": "to risk money on outcome",
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
    "id": 741,
    "word": "bit",
    "pos": "n",
    "pronunciation": "बिट",
    "meaningHi": "थोड़ा, ज़रा-सा",
    "meaningEn": "a small piece or amount",
    "examples": [
      {
        "en": "a bit salty in taste",
        "hi": "स्ाद में थोड़ा नमकीन"
      }
    ]
  },
  {
    "id": 742,
    "word": "block",
    "pos": "n / v",
    "pronunciation": "ब्ौक",
    "meaningHi": "भवनखंड 2 धातु या पत्थर आदि का बड़ा और भारी खंड | रोकना, बाधित करना",
    "meaningEn": "a solid piece; to obstruct",
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
    "id": 743,
    "word": "bored",
    "pos": "adj",
    "pronunciation": "बोड",
    "meaningHi": "ऊबा हुआ",
    "meaningEn": "weary from lack of interest",
    "examples": []
  },
  {
    "id": 744,
    "word": "boring",
    "pos": "adj",
    "pronunciation": "बोरिंग",
    "meaningHi": "उबाऊ : be",
    "meaningEn": "not interesting",
    "examples": [
      {
        "en": "a boring film",
        "hi": "एक उबाऊ फिल्म"
      }
    ]
  },
  {
    "id": 745,
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
    "id": 746,
    "word": "bother",
    "pos": "v",
    "pronunciation": "वह मुझे परेशान करता रहता है।",
    "meaningHi": "अंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ",
    "meaningEn": "to annoy",
    "examples": []
  },
  {
    "id": 747,
    "word": "bottom",
    "pos": "n",
    "pronunciation": "बौटम",
    "meaningHi": "किसी चीज का तल या निचला हिस्ा; जल के नीचे की भूमि",
    "meaningEn": "the lowest part",
    "examples": [
      {
        "en": "The bottom of the well was visible",
        "hi": "कुआँ का तल दिखाई पड़ रहा था।"
      },
      {
        "en": "The bottom of the well was visible",
        "hi": "कुआँ का तल दिखाई पड़ रहा था।"
      }
    ]
  },
  {
    "id": 748,
    "word": "bound",
    "pos": "adj",
    "pronunciation": "बाउंड",
    "meaningHi": "बाध्य होना 2 निश्चित रूप से होना 1",
    "meaningEn": "tied; heading for",
    "examples": []
  },
  {
    "id": 749,
    "word": "branch",
    "pos": "n",
    "pronunciation": "बांच",
    "meaningHi": "टहनी, शाखा",
    "meaningEn": "part of a tree; a division",
    "examples": [
      {
        "en": "Ethics is a branch of philosophy",
        "hi": "नीतिशास्त्र दर्शनशास्त्र की एक शाखा है।"
      }
    ]
  },
  {
    "id": 750,
    "word": "breakfast",
    "pos": "n",
    "pronunciation": "ब्ेकफ़स्ट",
    "meaningHi": "सुबह का नाश्ता",
    "meaningEn": "first meal of the day",
    "examples": [
      {
        "en": "I had my breakfast just now",
        "hi": "मैंने अभी-अभी नाश्ता किया।"
      }
    ]
  },
  {
    "id": 751,
    "word": "bridge",
    "pos": "n",
    "pronunciation": "ब्रिज",
    "meaningHi": "सेतु, पुल",
    "meaningEn": "structure over a gap",
    "examples": []
  },
  {
    "id": 752,
    "word": "brief",
    "pos": "adj",
    "pronunciation": "ब्ीफ़",
    "meaningHi": "संक्षिप्त; अल्पकालिक",
    "meaningEn": "short; concise",
    "examples": [
      {
        "en": "a brief meeting",
        "hi": "एक संक्षिप्त मुलाकात"
      }
    ]
  },
  {
    "id": 753,
    "word": "broad",
    "pos": "adj",
    "pronunciation": "ब्रॉड",
    "meaningHi": "चौड़ा 2 सामान्य, संक्षिप्त",
    "meaningEn": "wide; extensive",
    "examples": [
      {
        "en": "a broad description of the event",
        "hi": "धटना का एक सामान्य-संक्षिप या मोटामोटा वर्णन"
      }
    ]
  },
  {
    "id": 754,
    "word": "broken",
    "pos": "adj",
    "pronunciation": "ब्ोकन",
    "meaningHi": "टूटा हुआ",
    "meaningEn": "damaged",
    "examples": [
      {
        "en": "a broken glass",
        "hi": "एक टूूटा हुआ गिलास"
      }
    ]
  },
  {
    "id": 755,
    "word": "brush",
    "pos": "n / v",
    "pronunciation": "ब्रश",
    "meaningHi": "ब्रश, कूची | ब्रश से साफ करना",
    "meaningEn": "tool for cleaning",
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
    "id": 756,
    "word": "building",
    "pos": "n",
    "pronunciation": "बिल्ड्डंग",
    "meaningHi": "मकान,भवन",
    "meaningEn": "a structure with walls",
    "examples": [
      {
        "en": "a big building",
        "hi": "एक बड़ा भवन"
      }
    ]
  },
  {
    "id": 757,
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
    "id": 758,
    "word": "butter",
    "pos": "n",
    "pronunciation": "मक्खन",
    "meaningHi": "",
    "meaningEn": "dairy spread",
    "examples": []
  },
  {
    "id": 759,
    "word": "capital",
    "pos": "n / adj",
    "pronunciation": "कैपिटल",
    "meaningHi": "राजधानी 2 पूँजी (धन)",
    "meaningEn": "chief city; wealth",
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
    "id": 760,
    "word": "careful",
    "pos": "adj",
    "pronunciation": "केअफ़ल",
    "meaningHi": "सावधान, सतर्क",
    "meaningEn": "taking care",
    "examples": [
      {
        "en": "Be careful",
        "hi": "सतर्क रहो।"
      }
    ]
  },
  {
    "id": 761,
    "word": "century",
    "pos": "n",
    "pronunciation": "सेन्चरि",
    "meaningHi": "शताब्दी, सदी सौ वर्ष 2 {क्रिकेट में} शतक या सौ रन",
    "meaningEn": "a period of 100 years",
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
    "id": 762,
    "word": "certainly",
    "pos": "adv",
    "pronunciation": "सट्न्लि",
    "meaningHi": "निश्चित रूप से, जरूर 34 35 अंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ",
    "meaningEn": "without doubt",
    "examples": [
      {
        "en": "I will certainly come",
        "hi": "मैं जरूर आऊँगा।"
      }
    ]
  },
  {
    "id": 763,
    "word": "charge",
    "pos": "n / v",
    "pronunciation": "चाज",
    "meaningHi": "मूल्य, शुल्क 2 आरोप 3 कार्यभार, जिम्ेदारी 4 विद्युद्युत की मात्ा 1 What are the charges for this hotel room? - होटल के इस कमरे का शुल्क क्ा है? 2 What are the charges against him? - उसके खिलाफ आरोप…",
    "meaningEn": "to ask a price",
    "examples": [
      {
        "en": "Every company needs a good chartered accountant for audit of its accounts",
        "hi": "हर कंपनी को लेखा-परीक्षण के लिए एक अच्े चार्टर्ड अकाउंटंट की जरूरत होती है।"
      },
      {
        "en": "What are the charges for this hotel room?",
        "hi": "होटल के इस कमरे का शुल्क क्ा है?"
      }
    ]
  },
  {
    "id": 764,
    "word": "chase",
    "pos": "v",
    "pronunciation": "चेस",
    "meaningHi": "पीछा करना",
    "meaningEn": "to run after",
    "examples": [
      {
        "en": "The police chased the criminal - पुलिस ने अपराधी का पीछा किया; Great men chase their dreams",
        "hi": "महान लोग अपने सपनों के पीछे लग जाते हैं।"
      }
    ]
  },
  {
    "id": 765,
    "word": "cheap",
    "pos": "adj",
    "pronunciation": "चीप",
    "meaningHi": "सस्ता, कम कीमत का",
    "meaningEn": "low in price",
    "examples": []
  },
  {
    "id": 766,
    "word": "check",
    "pos": "n / v",
    "pronunciation": "चेक",
    "meaningHi": "जाँच, परीक्षण 2 रोकथाम | 1 जाँच करना 2 मालूम करना 3 रोकथाम करना",
    "meaningEn": "to examine",
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
    "id": 767,
    "word": "chief",
    "pos": "n / adj",
    "pronunciation": "चीफ़",
    "meaningHi": "प्रधान, प्रमुख व्यक्ति",
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
    "id": 768,
    "word": "classroom",
    "pos": "n",
    "pronunciation": "क्ासरुम",
    "meaningHi": "कक्षा, क्ासरूम",
    "meaningEn": "room for teaching",
    "examples": []
  },
  {
    "id": 769,
    "word": "climb",
    "pos": "v",
    "pronunciation": "क्ाइम",
    "meaningHi": "ऊपर चढ़ना",
    "meaningEn": "to go upward",
    "examples": [
      {
        "en": "climb a mountain",
        "hi": "पहाड़ चढ़ना"
      }
    ]
  },
  {
    "id": 770,
    "word": "clothes",
    "pos": "n",
    "pronunciation": "खरीदना",
    "meaningHi": "",
    "meaningEn": "garments",
    "examples": []
  },
  {
    "id": 771,
    "word": "coffee",
    "pos": "n",
    "pronunciation": "कौफ़ि",
    "meaningHi": "कौफी पीने का एक गरम पेय",
    "meaningEn": "a hot beverage",
    "examples": []
  },
  {
    "id": 772,
    "word": "collection",
    "pos": "n",
    "pronunciation": "कलेक्शन",
    "meaningHi": "संग्रह",
    "meaningEn": "gathered group",
    "examples": [
      {
        "en": "a nice collection of books",
        "hi": "किताबों का एक अच्ा संग्रह"
      }
    ]
  },
  {
    "id": 773,
    "word": "combine",
    "pos": "v",
    "pronunciation": "कम्ाइन",
    "meaningHi": "दो या अधिक वस्तुओं का जोड़ना या मिलाना/मिलना",
    "meaningEn": "to join together",
    "examples": [
      {
        "en": "Great achievements are produced by combining planning, patience and hard work",
        "hi": "बड़ी उपलब्धियों के लिए योजना, कठिन परिश्रम और धीरज को मिलाना पड़ता है।"
      }
    ]
  },
  {
    "id": 774,
    "word": "command",
    "pos": "n / v",
    "pronunciation": "है।",
    "meaningHi": "| कमान्ड आदेश देना",
    "meaningEn": "an order",
    "examples": [
      {
        "en": "The soldiers were commanded to shoot at sight",
        "hi": "सैनिकों को यह आदेश था कि वे देखते ही गोली मार दें।"
      }
    ]
  },
  {
    "id": 775,
    "word": "comment",
    "pos": "n / v",
    "pronunciation": "की।",
    "meaningHi": "| टिप्पणी करना कमर्शल व्यापारिक",
    "meaningEn": "a remark",
    "examples": [
      {
        "en": "He commented on my new hairstyle",
        "hi": "उसने मेरे बालों की नई शैली पर टिप्पणी की।"
      },
      {
        "en": "commercial activity",
        "hi": "व्ापारिक गतिविधि"
      }
    ]
  },
  {
    "id": 776,
    "word": "common",
    "pos": "adj",
    "pronunciation": "कॉमन",
    "meaningHi": "सामान्य; साझा",
    "meaningEn": "frequent; shared; ordinary",
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
    "id": 777,
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
    "id": 778,
    "word": "complaint",
    "pos": "n",
    "pronunciation": "कम्प्ेन्ट",
    "meaningHi": "शिकायत 42 43 अंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ",
    "meaningEn": "expression of dissatisfaction",
    "examples": [
      {
        "en": "He lodged a complaint with the police",
        "hi": "उसने पुलिस के पास एक शिकायत दर्ज कराई।"
      }
    ]
  },
  {
    "id": 779,
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
    "id": 780,
    "word": "conclusion",
    "pos": "n",
    "pronunciation": "कन्क्ूशज़न",
    "meaningHi": "निष्कर्ष",
    "meaningEn": "the end; a decision",
    "examples": [
      {
        "en": "What is the conclusion, then?",
        "hi": "तब, निष्कर्ष क्ा निकला?"
      }
    ]
  },
  {
    "id": 781,
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
    "id": 782,
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
    "id": 783,
    "word": "congratulate",
    "pos": "v",
    "pronunciation": "कन्ग्ैचुलेट",
    "meaningHi": "बधाई देना",
    "meaningEn": "to express joy at success",
    "examples": [
      {
        "en": "I congratulated him on his exam results",
        "hi": "मैंने उसे उसकी परीक्षा के परिणाम पर बधाई दी।"
      }
    ]
  },
  {
    "id": 784,
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
    "id": 785,
    "word": "constantly",
    "pos": "adv",
    "pronunciation": "कॉन्सटन्ट्लि",
    "meaningHi": "निरंतर, सदा",
    "meaningEn": "continuously",
    "examples": [
      {
        "en": "He is constantly under stress",
        "hi": "वह सदा तनाव में रहता है।"
      }
    ]
  },
  {
    "id": 786,
    "word": "contain",
    "pos": "v",
    "pronunciation": "कन्ेन",
    "meaningHi": "में, अंदर कुछ होना, रहना या रखना",
    "meaningEn": "to hold within",
    "examples": [
      {
        "en": "This pot contains drinking water",
        "hi": "इस बरतन में पीने का पानी है।"
      }
    ]
  },
  {
    "id": 787,
    "word": "contrast",
    "pos": "n",
    "pronunciation": "कॉन्ट्रास्ट",
    "meaningHi": "भेद, अंतर",
    "meaningEn": "difference; to compare",
    "examples": [
      {
        "en": "There is a sharp contrast between the two sisters",
        "hi": "दोनों बहनों में बहुत अंतर है।"
      }
    ]
  },
  {
    "id": 788,
    "word": "contribute",
    "pos": "v",
    "pronunciation": "कन्ट्रिब्यूट",
    "meaningHi": "सहयोग देना, योगदान देना",
    "meaningEn": "to give; add to",
    "examples": [
      {
        "en": "Good books may immensely contribute to our growth",
        "hi": "अच्छी किताबें हमारे विकास में महान योगदान दे सकती हैं।"
      }
    ]
  },
  {
    "id": 789,
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
    "id": 790,
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
    "id": 791,
    "word": "convinced",
    "pos": "adj",
    "pronunciation": "कन्विन्स्ट",
    "meaningHi": "किसी विषय में पूर्णत: आश्वस्त कि यह ठीक है",
    "meaningEn": "firmly believing",
    "examples": [
      {
        "en": "I am convinced that there is life elsewhere in the universe too",
        "hi": "मैं आश्वस्त हँ कि इस ब्रहांड में कहीं और भी जीवन है।"
      }
    ]
  },
  {
    "id": 792,
    "word": "corner",
    "pos": "v",
    "pronunciation": "कॉर्नर",
    "meaningHi": "कोना",
    "meaningEn": "a point where edges meet",
    "examples": [
      {
        "en": "corner",
        "hi": "table - कोने का टेबुल"
      }
    ]
  },
  {
    "id": 793,
    "word": "correction",
    "pos": "n",
    "pronunciation": "करेक्शन",
    "meaningHi": "सुधारकार्य, त्रुटिशोधन",
    "meaningEn": "fixing an error",
    "examples": [
      {
        "en": "I am making a few corrections in my book",
        "hi": "मैं अपनी किताब में कुछ सुधार कर रहा हँ।"
      }
    ]
  },
  {
    "id": 794,
    "word": "cough",
    "pos": "n / v",
    "pronunciation": "कॉफ़",
    "meaningHi": "खाँसी | खाँसना",
    "meaningEn": "to expel air noisily",
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
    "id": 795,
    "word": "count",
    "pos": "v",
    "pronunciation": "काउन्ट",
    "meaningHi": "गिनती करना; मायने रखना",
    "meaningEn": "to number; to matter",
    "examples": [
      {
        "en": "My child can count up to 10",
        "hi": "मेरा बच्चा 10 तक गिन सकता है।"
      }
    ]
  },
  {
    "id": 796,
    "word": "covered",
    "pos": "adj",
    "pronunciation": "कवड",
    "meaningHi": "ढँका हुआ CPU",
    "meaningEn": "",
    "examples": [
      {
        "en": "snow-covered mountains",
        "hi": "बर्फ से ढँके हुए पर्वत"
      }
    ]
  },
  {
    "id": 797,
    "word": "crash",
    "pos": "n / v",
    "pronunciation": "क्रैश",
    "meaningHi": "धमाके से गिरने की घटना 2 टक्कर 3 व्यापार या मूल्य में अचानक गिरावट | 1 जोर से टकराना 2 धमाके के साथ गिरना",
    "meaningEn": "violent collision",
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
    "id": 798,
    "word": "crazy",
    "pos": "adj",
    "pronunciation": "क्ेज़ि",
    "meaningHi": "सनकी, मूर्ख 50 51 अंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ",
    "meaningEn": "insane; enthusiastic",
    "examples": [
      {
        "en": "What a crazy idea!",
        "hi": "कैसा सनकी विचार!"
      }
    ]
  },
  {
    "id": 799,
    "word": "crisis",
    "pos": "n",
    "pronunciation": "क्ाइसिस",
    "meaningHi": "गंभीर कमी 2 संकट, विपत्ति क्रिटिकल थिंकिंग आलोचनात्मक चिंतन",
    "meaningEn": "time of difficulty",
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
    "id": 800,
    "word": "criticise",
    "pos": "v",
    "pronunciation": "क्रिटिसाइज़",
    "meaningHi": "आलोचना करना, गलतियाँ निकालना",
    "meaningEn": "",
    "examples": [
      {
        "en": "Understand well before criticising",
        "hi": "आलोचना करने के पहले बात को अच्छी तरह समझ लेना चाहिए।"
      }
    ]
  },
  {
    "id": 801,
    "word": "criticism",
    "pos": "n",
    "pronunciation": "क्रिटिसिज़म",
    "meaningHi": "आलोचना",
    "meaningEn": "expression of disapproval",
    "examples": [
      {
        "en": "Tolerating criticism is a mark of democracy",
        "hi": "आलोचना को सहन करना लोकतंत्र का एक लक्षण है।"
      }
    ]
  },
  {
    "id": 802,
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
    "id": 803,
    "word": "custom",
    "pos": "n",
    "pronunciation": "कस्टम",
    "meaningHi": "प्रथा, रीति-रिवाज़",
    "meaningEn": "traditional practice",
    "examples": [
      {
        "en": "Good customs should be followed, bad ones discarded",
        "hi": "अच्छी प्रथाओं का पालन करना चाहिए, बुरी प्रथाओं को त्ाग देना चाहिए।"
      }
    ]
  },
  {
    "id": 804,
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
    "id": 805,
    "word": "dance",
    "pos": "n / v",
    "pronunciation": "डान्स",
    "meaningHi": "नाच, नृत्य | नाचना, नृत्य करना",
    "meaningEn": "to move to music",
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
    "id": 806,
    "word": "declaration",
    "pos": "n",
    "pronunciation": "डेक्लरेशन",
    "meaningHi": "घोषणा",
    "meaningEn": "",
    "examples": [
      {
        "en": "declaration of independence",
        "hi": "स्वतंत्रता की घोषणा"
      }
    ]
  },
  {
    "id": 807,
    "word": "declare",
    "pos": "v",
    "pronunciation": "डिक्ेअर",
    "meaningHi": "सार्वजनिक और आधिकारिक रूप से घोषित करना",
    "meaningEn": "to announce officially",
    "examples": [
      {
        "en": "India was declared free in 1947",
        "hi": "भारत 1947 में स्वतंत्र घोषित कर दिया गया।"
      }
    ]
  },
  {
    "id": 808,
    "word": "degree",
    "pos": "n",
    "pronunciation": "डिग्ी",
    "meaningHi": "डिग्ी तापमान को मापने की इकाई का स्तर 2 उपाधि 3 स्तर 1 33",
    "meaningEn": "a unit; qualification",
    "examples": []
  },
  {
    "id": 809,
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
    "id": 810,
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
    "id": 811,
    "word": "deliver",
    "pos": "v",
    "pronunciation": "डिलिवर",
    "meaningHi": "निर्दिष्ट ठिकाने या पते पर सामान, पत्र आदि पहुँचाना 2 बच्ा पैदा कर देना 3 कोई निश्चित परिणाम सफलतापूर्वक देना 1",
    "meaningEn": "to bring; hand over",
    "examples": []
  },
  {
    "id": 812,
    "word": "democracy",
    "pos": "n",
    "pronunciation": "डिमौक्रसि",
    "meaningHi": "जनतंत्र, लोकतंत्र कि आत्मा है? 2",
    "meaningEn": "government by the people",
    "examples": [
      {
        "en": "Democracy has spread in most parts of the world. लोकतंत्र दुनिया के अधिकांश हिस्सोंों में फैल गया है। demonstrate v डेमन्सट्रेट 1 प्रमाण देकर सिद्ध करना 2 किसी वस्तु की कार्यपद्धति को प्रदर्शित करना और समझाना 1 Can you demonstrate that soul exists?",
        "hi": "क्ा तुम यह प्रमाणित कर सकते हो (दिखा सकते हो"
      }
    ]
  },
  {
    "id": 813,
    "word": "desert",
    "pos": "n",
    "pronunciation": "अंगरेज़ी शब्द",
    "meaningHi": "उच्ारण हिंंदी में अर्थ",
    "meaningEn": "dry barren area; to abandon",
    "examples": []
  },
  {
    "id": 814,
    "word": "design",
    "pos": "n / v",
    "pronunciation": "डिज़ाइन",
    "meaningHi": "डिज़ाइन, रूपरेखा | रूपरेखा बनाना से संबंधित कुछ शब्द नीचे दिए जाते हैं–",
    "meaningEn": "a plan; to create",
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
    "id": 815,
    "word": "desperate",
    "pos": "adj",
    "pronunciation": "डेस्परट",
    "meaningHi": "अत्यधिक निराशा या संकट के कारण दुस्ाहसी और कुछ भी करने को तैयार",
    "meaningEn": "having little hope",
    "examples": []
  },
  {
    "id": 816,
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
    "id": 817,
    "word": "difficult",
    "pos": "adj",
    "pronunciation": "डिफ़िकल्ट",
    "meaningHi": "कठिन, मुश्किल",
    "meaningEn": "hard to do; not easy",
    "examples": [
      {
        "en": "a difficult question",
        "hi": "एक कठिन सवाल"
      }
    ]
  },
  {
    "id": 818,
    "word": "difficulty",
    "pos": "n",
    "pronunciation": "डिफ़िकल्टि",
    "meaningHi": "कठिनाई",
    "meaningEn": "a problem",
    "examples": [
      {
        "en": "any difficulty?",
        "hi": "कोई कठिनाई?"
      }
    ]
  },
  {
    "id": 819,
    "word": "dig",
    "pos": "v",
    "pronunciation": "डिग",
    "meaningHi": "खोदना",
    "meaningEn": "to break up earth",
    "examples": [
      {
        "en": "Let's dig a soakpit to conserve water",
        "hi": "हम पानी बचाने के लिए एक सोकपिट खोदें।"
      }
    ]
  },
  {
    "id": 820,
    "word": "dinner",
    "pos": "n",
    "pronunciation": "रात्रिभोज",
    "meaningHi": "रात्रिभोज diploma-",
    "meaningEn": "main meal of day",
    "examples": []
  },
  {
    "id": 821,
    "word": "direct",
    "pos": "adj / v",
    "pronunciation": "डरेक्ट",
    "meaningHi": "डाइरेक्ट सीधा, प्रत्यक्ष | डाइरेक्ट निर्देश देना",
    "meaningEn": "straight; to guide",
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
    "id": 822,
    "word": "disagree",
    "pos": "v",
    "pronunciation": "डिसअग्ी",
    "meaningHi": "असहमत होना",
    "meaningEn": "to differ in opinion",
    "examples": [
      {
        "en": "We disagree with you",
        "hi": "हम आपसे असहमत हैं।"
      }
    ]
  },
  {
    "id": 823,
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
    "id": 824,
    "word": "discovery",
    "pos": "n",
    "pronunciation": "डिस्कवरि",
    "meaningHi": "नई खोज",
    "meaningEn": "act of discovering",
    "examples": [
      {
        "en": "Was the discovery of America made by Columbus?",
        "hi": "क्ा अमेरिका की खोज कोलंबस द्ारा की गई?"
      }
    ]
  },
  {
    "id": 825,
    "word": "discuss",
    "pos": "v",
    "pronunciation": "डिस्कस",
    "meaningHi": "विचार-विमर्श करना",
    "meaningEn": "to talk about",
    "examples": []
  },
  {
    "id": 826,
    "word": "discussion",
    "pos": "n",
    "pronunciation": "डिस्कशन",
    "meaningHi": "विचार-विमर्श, चर्चा",
    "meaningEn": "conversation about something",
    "examples": []
  },
  {
    "id": 827,
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
    "id": 828,
    "word": "distant",
    "pos": "adj",
    "pronunciation": "डिस्टन्ट",
    "meaningHi": "सुदूर, दूर का",
    "meaningEn": "far away",
    "examples": [
      {
        "en": "a distant place",
        "hi": "एक सुदूर जगह"
      }
    ]
  },
  {
    "id": 829,
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
    "id": 830,
    "word": "divide",
    "pos": "v",
    "pronunciation": "डिवाइड",
    "meaningHi": "विभाजित करना, बाँटना",
    "meaningEn": "to separate into parts",
    "examples": [
      {
        "en": "The caste system divided the Hindus",
        "hi": "जातिप्रथा ने हिंदुओं को बाँट दिया।"
      }
    ]
  },
  {
    "id": 831,
    "word": "division",
    "pos": "n",
    "pronunciation": "डिविशज़न",
    "meaningHi": "बँटवारा, विभाजन 2 गणित में भाग",
    "meaningEn": "act of dividing",
    "examples": [
      {
        "en": "The year 1947 saw the division of India in two parts",
        "hi": "वर्ष 1947 ने दो भागों में भारत का विभाजन देखा।"
      }
    ]
  },
  {
    "id": 832,
    "word": "divorce",
    "pos": "n / v",
    "pronunciation": "डिवोस",
    "meaningHi": "तलाक पति-पत्नी का कानूनी तौर पर अलग हो जाना | तलाक देना",
    "meaningEn": "legal ending of marriage",
    "examples": []
  },
  {
    "id": 833,
    "word": "drawing",
    "pos": "n",
    "pronunciation": "ड्ोइंग",
    "meaningHi": "रेखाचित्र",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 834,
    "word": "dress",
    "pos": "n / v",
    "pronunciation": "ड्ेस",
    "meaningHi": "पोशाक",
    "meaningEn": "a garment; to clothe",
    "examples": [
      {
        "en": "He dresses shabbily",
        "hi": "वह बेतरतीब तरीके से कपड़े पहनता है।"
      }
    ]
  },
  {
    "id": 835,
    "word": "economics",
    "pos": "n",
    "pronunciation": "ईकनॉमिक्स",
    "meaningHi": "अर्थशास्त्र",
    "meaningEn": "study of wealth",
    "examples": [
      {
        "en": "Economics is the study of economic activity of mankind",
        "hi": "अर्थशास्त्र मनुष्य की आर्थिक गतिविधियों का अध्ययन है।"
      }
    ]
  },
  {
    "id": 836,
    "word": "elderly",
    "pos": "adj",
    "pronunciation": "एल्डलि",
    "meaningHi": "अधेड़, बूढ़ा",
    "meaningEn": "old; aged",
    "examples": [
      {
        "en": "care of the elderly",
        "hi": "बुजुर्गोंों की देखभाल"
      }
    ]
  },
  {
    "id": 837,
    "word": "elect",
    "pos": "v",
    "pronunciation": "इलेक्ट",
    "meaningHi": "चुनाव करना निर्वाचन करना",
    "meaningEn": "to choose by voting",
    "examples": [
      {
        "en": "elect the chairman",
        "hi": "अध्यक्ष का चुनाव करना"
      }
    ]
  },
  {
    "id": 838,
    "word": "election",
    "pos": "n",
    "pronunciation": "इलेक्शन",
    "meaningHi": "चुनाव, निर्वाचन",
    "meaningEn": "choosing by vote",
    "examples": [
      {
        "en": "parliamentary election",
        "hi": "संसद का चुनाव"
      }
    ]
  },
  {
    "id": 839,
    "word": "electric",
    "pos": "adj",
    "pronunciation": "इलेक्ट्रिक",
    "meaningHi": "बिजली से चलने वाला",
    "meaningEn": "of electricity",
    "examples": []
  },
  {
    "id": 840,
    "word": "electrical",
    "pos": "adj",
    "pronunciation": "इलेक्ट्रिक्ल",
    "meaningHi": "बिजली से संबंधित",
    "meaningEn": "",
    "examples": [
      {
        "en": "electrical equipment",
        "hi": "बिजली के उपकरण"
      }
    ]
  },
  {
    "id": 841,
    "word": "electricity",
    "pos": "n",
    "pronunciation": "",
    "meaningHi": "इलेक्ट्रिसिटि बिजली, विद्युद्युतशक्ति",
    "meaningEn": "form of energy",
    "examples": [
      {
        "en": "shortage of elec- tricity",
        "hi": "बिजली की कमी"
      }
    ]
  },
  {
    "id": 842,
    "word": "electronic",
    "pos": "adj",
    "pronunciation": "इलेक्ट्रॉनिक",
    "meaningHi": "इलेक्ट्ॉनिक्स पर आधारित",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 843,
    "word": "element",
    "pos": "n",
    "pronunciation": "एलिमन्ट",
    "meaningHi": "तत्त्व 2 किसी चीज का प्रमुख घटक अंंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ 1 So far, 94 . प्रकृति में अब तक 94 तत्त्वों की शिनाख्त की जा चुकी है, जैसे,",
    "meaningEn": "a basic part",
    "examples": []
  },
  {
    "id": 844,
    "word": "email",
    "pos": "n",
    "pronunciation": "ईमेल",
    "meaningHi": "ईमेल",
    "meaningEn": "electronic mail",
    "examples": []
  },
  {
    "id": 845,
    "word": "emphasis",
    "pos": "n",
    "pronunciation": "एम्फ़सिस",
    "meaningHi": "विशेष दबाव या जोर",
    "meaningEn": "special importance",
    "examples": [
      {
        "en": "emphasis on language learning",
        "hi": "भाषा सीखने पर जोर"
      }
    ]
  },
  {
    "id": 846,
    "word": "empty",
    "pos": "adj",
    "pronunciation": "एम्प्टि",
    "meaningHi": "रिक्त, खाली (पात्र या स्ान)",
    "meaningEn": "containing nothing",
    "examples": [
      {
        "en": "empty box",
        "hi": "खाली बक्सा"
      }
    ]
  },
  {
    "id": 847,
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
    "id": 848,
    "word": "encounter",
    "pos": "n / v",
    "pronunciation": "इन्ाउ-",
    "meaningHi": "न्टर मुठभेड़, मुकाबला | न्टर सामना करना",
    "meaningEn": "to meet unexpectedly",
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
    "id": 849,
    "word": "entrance",
    "pos": "n",
    "pronunciation": "एन्ट्रन्स",
    "meaningHi": "प्रवेश, दाखिला 2 प्रवेशद्ार",
    "meaningEn": "a way in",
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
    "id": 850,
    "word": "entry",
    "pos": "n",
    "pronunciation": "एन्ट्ी",
    "meaningHi": "प्रवेश",
    "meaningEn": "",
    "examples": [
      {
        "en": "Entry of antisocial elements should be prevented",
        "hi": "असामाजिक तत्त्वों का प्रवेश रोकना चाहिए।"
      }
    ]
  },
  {
    "id": 851,
    "word": "equipment",
    "pos": "n",
    "pronunciation": "इक्विप्मन्ट",
    "meaningHi": "उपकरण, कार्य करने के साधन और यंत्र",
    "meaningEn": "tools needed",
    "examples": [
      {
        "en": "cleaning equipment",
        "hi": "सफाई के उपकरण"
      }
    ]
  },
  {
    "id": 852,
    "word": "error",
    "pos": "n",
    "pronunciation": "त्रुटिरहित लेखन",
    "meaningHi": "",
    "meaningEn": "a mistake",
    "examples": []
  },
  {
    "id": 853,
    "word": "estimate",
    "pos": "n / v",
    "pronunciation": "एस्टिमट",
    "meaningHi": "समय, मात्ा, कीमत आदि का अनुमान | प्राक्कलन करना, मूलांकन करना, अनुमान लगाना",
    "meaningEn": "to calculate roughly",
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
    "id": 854,
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
    "id": 855,
    "word": "excellent",
    "pos": "adj",
    "pronunciation": "एक्सलन्ट",
    "meaningHi": "उत्तम, अतिश्रेष्ट, उत्कृष्ट",
    "meaningEn": "extremely good",
    "examples": [
      {
        "en": "An excellent player!",
        "hi": "एक अतिश्ेष्ठ खिलाड़ी!"
      }
    ]
  },
  {
    "id": 856,
    "word": "except",
    "pos": "prep",
    "pronunciation": "इक्ेप्ट",
    "meaningHi": "सिवाय {उसके}, {उसके} अलावा",
    "meaningEn": "not including",
    "examples": [
      {
        "en": "Everybody joined the dinner except him",
        "hi": "उसके अलावा सभी रात्रिभोज में शामिल हुए।"
      }
    ]
  },
  {
    "id": 857,
    "word": "exchange",
    "pos": "n / v",
    "pronunciation": "इकस्चेंज",
    "meaningHi": "वस्तुविनिमय अदला-बदली 2 विदेशी मुद्रा 3 केंद्र | अदला-बदली करना",
    "meaningEn": "to swap",
    "examples": [
      {
        "en": "We exchanged our bags",
        "hi": "हमने अपने थैलों की अदला-बदली की।"
      }
    ]
  },
  {
    "id": 858,
    "word": "excited",
    "pos": "adj",
    "pronunciation": "इक्ाइटिड",
    "meaningHi": "उत्तेजित, अधीर",
    "meaningEn": "feeling enthusiasm",
    "examples": [
      {
        "en": "Children are excited at the news of a picnic",
        "hi": "बच्चे पिकनिक के समाचार से उत्तेजित हैं।"
      }
    ]
  },
  {
    "id": 859,
    "word": "exciting",
    "pos": "adj",
    "pronunciation": "",
    "meaningHi": "इक्ाइटिंग उत्तेजक",
    "meaningEn": "causing excitement",
    "examples": []
  },
  {
    "id": 860,
    "word": "excuse",
    "pos": "n / v",
    "pronunciation": "इकस्क्ूज़",
    "meaningHi": "बहाना | 1 माफ करना 2 निवृत्त हो जाना 72 73 अंंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ",
    "meaningEn": "a reason; to forgive",
    "examples": [
      {
        "en": "She had a good excuse for missing the class",
        "hi": "उसके पास क्ास से अनुपस्थित होने का एक अच्ा बहाना था।"
      }
    ]
  },
  {
    "id": 861,
    "word": "exercise",
    "pos": "n / v",
    "pronunciation": "एक्सर",
    "meaningHi": "साइज़ 1 व्यायाम या कसरत 2 अभ्यास | साइज़ शारीरिक व्यायाम करना",
    "meaningEn": "physical activity",
    "examples": [
      {
        "en": "naval exercise",
        "hi": "समुद्र में जलसेना का अभ्ास"
      }
    ]
  },
  {
    "id": 862,
    "word": "expensive",
    "pos": "adj",
    "pronunciation": "इक्स्ेन्सिव",
    "meaningHi": "बहुमूल्य, महँगा",
    "meaningEn": "costing a lot",
    "examples": [
      {
        "en": "expensive dresses",
        "hi": "महँगे वस्त्र"
      }
    ]
  },
  {
    "id": 863,
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
    "id": 864,
    "word": "favour",
    "pos": "v",
    "pronunciation": "फ़ेव़रिट",
    "meaningHi": "अत्ंत प्रिय, पसंदीदा",
    "meaningEn": "act of kindness",
    "examples": [
      {
        "en": "my favourite actor",
        "hi": "मेरा प्रिय अभिनेता"
      }
    ]
  },
  {
    "id": 865,
    "word": "feature",
    "pos": "n",
    "pronunciation": "फ़ीीचर",
    "meaningHi": "रूप, आकृति 2 विशेषता 1",
    "meaningEn": "a characteristic",
    "examples": []
  },
  {
    "id": 866,
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
    "id": 867,
    "word": "field",
    "pos": "n",
    "pronunciation": "फ़ील्ड",
    "meaningHi": "खेत 2 मैदान",
    "meaningEn": "open area; domain",
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
    "id": 868,
    "word": "fit",
    "pos": "v / adj",
    "pronunciation": "फ़िट",
    "meaningHi": "जरूरत या आकार के हिसाब से सही या उचित बैठना या बैठाना | 1 उपयुक्त 2 हृष्टपुष्ट या स्वस्थ होना",
    "meaningEn": "healthy; suitable",
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
    "id": 869,
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
    "id": 870,
    "word": "flight",
    "pos": "n",
    "pronunciation": "फ़्लालाइट",
    "meaningHi": "उड़ान, विमान यात्ा 2 भागने की क्रिया",
    "meaningEn": "act of flying",
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
    "id": 871,
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
    "id": 872,
    "word": "flood",
    "pos": "n / v",
    "pronunciation": "फ़्लड",
    "meaningHi": "बाढ़ 2 भरमार | 1 बाढ़ आना 2 किसी स्ान में बड़ी संख्ा में जमा होना, भरमार होना अंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ",
    "meaningEn": "overflow of water",
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
    "id": 873,
    "word": "frame",
    "pos": "n / v",
    "pronunciation": "फ्े़म",
    "meaningHi": "ढाँचा, लकड़ी या धातु का चौखटा | 1 फ़्ेम चढ़ाना 2 किसी को झूठा फँसाना",
    "meaningEn": "structure; border",
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
    "id": 874,
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
    "id": 875,
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
    "id": 876,
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
    "id": 877,
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
    "id": 878,
    "word": "funny",
    "pos": "adj",
    "pronunciation": "फ़नि",
    "meaningHi": "उपहासास्पद, विचित्र फ़निचर लकड़ी या लोहे का सामान, जैसे कुर्सीी, मेज, पलंग इत्यादि अंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ",
    "meaningEn": "causing laughter",
    "examples": [
      {
        "en": "a funny dress",
        "hi": "एक विचित्र पोशाक"
      }
    ]
  },
  {
    "id": 879,
    "word": "gap",
    "pos": "n",
    "pronunciation": "गैप",
    "meaningHi": "स्ान के संदर्भ में– बीच का खाली स्ान, दरार; समय के संदर्भ में– अंतराल, बीच का समय",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 880,
    "word": "gas",
    "pos": "n",
    "pronunciation": "गैस",
    "meaningHi": "गैस",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 881,
    "word": "gather",
    "pos": "v",
    "pronunciation": "",
    "meaningHi": "गैदर इकट्ा करना, इकट्ा होना",
    "meaningEn": "",
    "examples": [
      {
        "en": "He gathered some people for a protest मार्च",
        "hi": "उसने कुछ लोगों को विरोध-मार्च के लिए इकट्ा किया।"
      }
    ]
  },
  {
    "id": 882,
    "word": "gesture",
    "pos": "n",
    "pronunciation": "जेसचर",
    "meaningHi": "हावभाव, खास कर हाथों का हावभाव",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 883,
    "word": "greeting",
    "pos": "n",
    "pronunciation": "ग्ीटिंग",
    "meaningHi": "शुभकामना, अभिवादन अंंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ",
    "meaningEn": "",
    "examples": [
      {
        "en": "the Indian ways of greeting",
        "hi": "अभिवादन के भारतीय तरीके"
      }
    ]
  },
  {
    "id": 884,
    "word": "guess",
    "pos": "n / v",
    "pronunciation": "गेस",
    "meaningHi": "अनुमान | अनुमान करना",
    "meaningEn": "",
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
    "id": 885,
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
    "id": 886,
    "word": "healthy",
    "pos": "adj",
    "pronunciation": "हेल््थि",
    "meaningHi": "निरोग, स्वस्थ",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 887,
    "word": "hesitant",
    "pos": "adj",
    "pronunciation": "हेज़िटन्ट",
    "meaningHi": "संकोच या दुविधा मे पड़ा हुआ, हिचकिचाता हुआ हेज़िटेनश संकोच, हिचकिचाहट",
    "meaningEn": "",
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
    "id": 888,
    "word": "hit",
    "pos": "v",
    "pronunciation": "हिट",
    "meaningHi": "चोट मारना, प्रहार करना 2 टकराना",
    "meaningEn": "",
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
    "id": 889,
    "word": "hobby",
    "pos": "n",
    "pronunciation": "हॉबि",
    "meaningHi": "शौक",
    "meaningEn": "",
    "examples": [
      {
        "en": "Stamp collection is my hobby",
        "hi": "डाक टिकट जमा करना मेरा शौक है।"
      }
    ]
  },
  {
    "id": 890,
    "word": "holiday",
    "pos": "n",
    "pronunciation": "हॉलिडे",
    "meaningHi": "छुट्ी का दिन",
    "meaningEn": "",
    "examples": [
      {
        "en": "national holidays",
        "hi": "राष्ट्रीीय छुट्ी-दिवस"
      }
    ]
  },
  {
    "id": 891,
    "word": "hollow",
    "pos": "adj",
    "pronunciation": "हॉलो",
    "meaningHi": "खोखला",
    "meaningEn": "",
    "examples": [
      {
        "en": "a hollow tree",
        "hi": "एक खोखला पेड़"
      }
    ]
  },
  {
    "id": 892,
    "word": "hungry",
    "pos": "adj",
    "pronunciation": "हंंग्ी",
    "meaningHi": "भूखा",
    "meaningEn": "",
    "examples": [
      {
        "en": "11 crore people still sleep hungry in India",
        "hi": "ग्यारह करोड़ लोग अभी भी भारत में भूूखे सोते हैं।"
      }
    ]
  },
  {
    "id": 893,
    "word": "hurry",
    "pos": "n / v",
    "pronunciation": "हरि",
    "meaningHi": "जल्दबाजी, हड़बड़ी | शीघ्रता करना, जल्दबाजी करना",
    "meaningEn": "",
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
    "id": 894,
    "word": "identify",
    "pos": "v",
    "pronunciation": "",
    "meaningHi": "आइडेंटिफ़ाइ पहचानना",
    "meaningEn": "",
    "examples": [
      {
        "en": "Can you identify that person?",
        "hi": "क्ा तुम उस व्यक्ति को पहचान सकते हो?"
      }
    ]
  },
  {
    "id": 895,
    "word": "illness",
    "pos": "n",
    "pronunciation": "इलनस",
    "meaningHi": "बीमारी",
    "meaningEn": "",
    "examples": [
      {
        "en": "Stale food may cause illness",
        "hi": "बासी खाना बीमारी का कारण बन सकता है।"
      }
    ]
  },
  {
    "id": 896,
    "word": "inquire",
    "pos": "v",
    "pronunciation": "इन्क्वाइअर",
    "meaningHi": "पूछताछ करना, जाँच-पड़ताल करना इन्सेक्टिसाइडकीटनाशक 100 101 अंंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ",
    "meaningEn": "",
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
    "id": 897,
    "word": "inside",
    "pos": "n / prep",
    "pronunciation": "इन्साइड",
    "meaningHi": "भीतरी भाग, अंदर या भीतर",
    "meaningEn": "",
    "examples": [
      {
        "en": "the inside of the box",
        "hi": "बक्से का भीतरी हिस्ा"
      }
    ]
  },
  {
    "id": 898,
    "word": "instant",
    "pos": "adj",
    "pronunciation": "इन्स्टन्ट",
    "meaningHi": "तुरंत या तत्ाल होनेवाला तुरंत तैयार होने वाली कॉफी; तत्ाल समाधान; तुरंत प्रतिक्रिया",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 899,
    "word": "instantly",
    "pos": "adv",
    "pronunciation": "इन्स्टन्टलि",
    "meaningHi": "तत्ाल, पलभर में, क्षणभर में of इन्स्ेड के स्ान पर, बदले में",
    "meaningEn": "",
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
    "id": 900,
    "word": "intend",
    "pos": "v",
    "pronunciation": "इंटेन्ड",
    "meaningHi": "इरादा रखना, मन में योजना रखना",
    "meaningEn": "",
    "examples": [
      {
        "en": "I intend to educate some poor children",
        "hi": "मैं कुछ गरीब बचों को शिक्षित करने का इरादा रखता हँ।"
      }
    ]
  },
  {
    "id": 901,
    "word": "interfere",
    "pos": "v",
    "pronunciation": "इन्टफ़िअर",
    "meaningHi": "दखल देना, हस्तक्षेप करना इन्ट्ेस्टिड रुचि रखने वाला 102 103 अंंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ",
    "meaningEn": "",
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
    "id": 902,
    "word": "interrupt",
    "pos": "v",
    "pronunciation": "इन्टरप्ट",
    "meaningHi": "टोकाटोकी करना, रोक देना, बाधा डालना",
    "meaningEn": "",
    "examples": [
      {
        "en": "He frequently interrupted my speech",
        "hi": "उसने कई बार मेरे भाषण में बाधा डाली।"
      }
    ]
  },
  {
    "id": 903,
    "word": "interview",
    "pos": "n / v",
    "pronunciation": "इन्टव्यू",
    "meaningHi": "साक्षात्ार प्रश्न पूछकर नौकरी, स्ूल-कॉलेज आदि में प्रवेश के लिए व्यक्ति की योग्यता का पता लगाने की प्रक्रिया | किसी विषय में किसी का इंटरव्यू या",
    "meaningEn": "",
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
    "id": 904,
    "word": "invention",
    "pos": "n",
    "pronunciation": "इन्वेनशन",
    "meaningHi": "आविष्ार कोई ऐसी नई चीज बनाना जो पहले से नहीं थी",
    "meaningEn": "",
    "examples": [
      {
        "en": "invention of aeroplane",
        "hi": "हवाई जहाज का आविष्ार"
      }
    ]
  },
  {
    "id": 905,
    "word": "invitation",
    "pos": "n",
    "pronunciation": "इनविटेशन",
    "meaningHi": "निमंत्रण, न्यौता",
    "meaningEn": "",
    "examples": [
      {
        "en": "marriage invitation",
        "hi": "शादी का आमंत्रण"
      }
    ]
  },
  {
    "id": 906,
    "word": "invite",
    "pos": "v",
    "pronunciation": "इन्वाइट",
    "meaningHi": "आमंत्रण देना",
    "meaningEn": "",
    "examples": [
      {
        "en": "I had invited him to my marriage",
        "hi": "मैंने अपनी शादी में उन्हेंें आंमत्रित किया था।"
      }
    ]
  },
  {
    "id": 907,
    "word": "issue",
    "pos": "n / v",
    "pronunciation": "इशू, इस्ू",
    "meaningHi": "चर्चा या मुद्ा का विषय | निर्गत करना, जारी करना",
    "meaningEn": "",
    "examples": [
      {
        "en": "Reservation in government jobs is a debatable issue",
        "hi": "सरकारी नौकरियों में आरक्षण एक विवादित मुद्ा है।"
      },
      {
        "en": "He issued a statement",
        "hi": "उसने एक बयान जारी किया।"
      }
    ]
  },
  {
    "id": 908,
    "word": "juice",
    "pos": "n",
    "pronunciation": "जूस",
    "meaningHi": "रस",
    "meaningEn": "",
    "examples": [
      {
        "en": "orange juice",
        "hi": "नारंगी का रस"
      }
    ]
  },
  {
    "id": 909,
    "word": "key",
    "pos": "n / adj",
    "pronunciation": "की",
    "meaningHi": "कुंजी, चाभी | अत्ंत महत्त्वपूर्ण",
    "meaningEn": "",
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
    "id": 910,
    "word": "knock",
    "pos": "n / v",
    "pronunciation": "नॉक",
    "meaningHi": "खटखटाहट | 1 दरवाजा खटखटाना 2 गिरा दिया जाना 16 108 109 अंंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ नॉलिज ज्ान, जानकारी",
    "meaningEn": "",
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
    "id": 911,
    "word": "label",
    "pos": "n / v",
    "pronunciation": "लेबल",
    "meaningHi": "नाम की चिप्ी | नाम की चिप्ी लगाना",
    "meaningEn": "",
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
    "id": 912,
    "word": "largely",
    "pos": "adv",
    "pronunciation": "लाज्लि",
    "meaningHi": "अधिकांशत:",
    "meaningEn": "",
    "examples": [
      {
        "en": "He is largely dependent on his children",
        "hi": "वह अधिकांशतः अपने बचों पर निर्भर है।"
      }
    ]
  },
  {
    "id": 913,
    "word": "later",
    "pos": "adv adj",
    "pronunciation": "",
    "meaningHi": "लेटर बाद में",
    "meaningEn": "",
    "examples": [
      {
        "en": "We will discuss this issue later",
        "hi": "हम इस मुद्े पर बाद में चर्चा करेंगे।"
      }
    ]
  },
  {
    "id": 914,
    "word": "laugh",
    "pos": "v",
    "pronunciation": "लाफ़",
    "meaningHi": "हँसना 85 110 111 अंंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ",
    "meaningEn": "",
    "examples": [
      {
        "en": "laugh away the worries",
        "hi": "चिंताओं को हँस कर उड़ा देना"
      }
    ]
  },
  {
    "id": 915,
    "word": "laughter",
    "pos": "n",
    "pronunciation": "लाफ़्टर",
    "meaningHi": "हँसी",
    "meaningEn": "",
    "examples": [
      {
        "en": "Laughter takes away depression",
        "hi": "हँसी अवसाद मिटा देती है।"
      }
    ]
  },
  {
    "id": 916,
    "word": "lawyer",
    "pos": "n",
    "pronunciation": "",
    "meaningHi": "लोयर वकील",
    "meaningEn": "",
    "examples": [
      {
        "en": "Lawyers in India don black gown",
        "hi": "भारत में वकील काला लबादा पहनते हैं।"
      }
    ]
  },
  {
    "id": 917,
    "word": "lay",
    "pos": "v",
    "pronunciation": "ले",
    "meaningHi": "रखना",
    "meaningEn": "",
    "examples": [
      {
        "en": "He laid his hand on my shoulder",
        "hi": "उसने अपना हाथ मेरे कंधे पर रखा।"
      }
    ]
  },
  {
    "id": 918,
    "word": "legal",
    "pos": "adj",
    "pronunciation": "लीगल",
    "meaningHi": "वैध, कानूनी लेजिस्ेचर विधानमंडल जो कानून बनाता है",
    "meaningEn": "",
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
    "id": 919,
    "word": "loose",
    "pos": "adj",
    "pronunciation": "लूस",
    "meaningHi": "खुला, बंधनमुक्त",
    "meaningEn": "",
    "examples": [
      {
        "en": "loose tea",
        "hi": "खुली हुई चाय, जो पैकड नहीं हो"
      }
    ]
  },
  {
    "id": 920,
    "word": "low",
    "pos": "adj / n",
    "pronunciation": "लो",
    "meaningHi": "नीचे, निम्न ; | निम्न बिंदु, निम्न स्तर अंंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ",
    "meaningEn": "",
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
    "id": 921,
    "word": "lower",
    "pos": "adj",
    "pronunciation": "के निचले हिस्े",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 922,
    "word": "lucky",
    "pos": "adj",
    "pronunciation": "लकि",
    "meaningHi": "भाग्यशाली, किस्मत वाला",
    "meaningEn": "",
    "examples": [
      {
        "en": "I am lucky that I got parents like you",
        "hi": "मैं भाग्यशाली हँ कि मुझे आप-जैसे माता-पिता मिले।"
      }
    ]
  },
  {
    "id": 923,
    "word": "lunch",
    "pos": "n",
    "pronunciation": "लन्च",
    "meaningHi": "दिन का भोजन, लंच",
    "meaningEn": "",
    "examples": [
      {
        "en": "Would you please join me today on lunch? - क्ा आप कृपया आज मेरे साथ दिन के खाने में शामिल होंगे? 116 117 M अंंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ machine n मशीन यंत्र, मशीन (sewing machine",
        "hi": "सिलाई मशीन"
      }
    ]
  },
  {
    "id": 924,
    "word": "major",
    "pos": "adj",
    "pronunciation": "की बड़ी समस्ा है।",
    "meaningHi": "मजौरटि अधिकांश, बहुसंख्यक, जो ज्ादा संख्ा में हों",
    "meaningEn": "",
    "examples": [
      {
        "en": "Christians are in majority in Europe",
        "hi": "यूूरोप में बहुसंख्यक लोग ईसाई हैं।"
      }
    ]
  },
  {
    "id": 925,
    "word": "marry",
    "pos": "v",
    "pronunciation": "मैरि",
    "meaningHi": "विवाह करना",
    "meaningEn": "",
    "examples": [
      {
        "en": "I will not marry till I am employed",
        "hi": "मैं रोजगार मिलने तक शादी नहीं करूँगा।"
      }
    ]
  },
  {
    "id": 926,
    "word": "match",
    "pos": "n",
    "pronunciation": "मैच",
    "meaningHi": "खेलप्रतियोगिता 2 माचिस 3 जोड़ीदार मटिअरिअल कुछ बनाने के लिए पदार्थ, सामग्ी मटिअरिअल भौतिक न कि आध्ात्मिक या भावनात्मक",
    "meaningEn": "",
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
    "id": 927,
    "word": "means",
    "pos": "n",
    "pronunciation": "मीनज़",
    "meaningHi": "उपाय, साधन",
    "meaningEn": "",
    "examples": [
      {
        "en": "Means and end should both be as pure as possible - लक्ष्य-प्राप्ति के साधन और लक्ष्य, दोनों यथासंभव शुद्ध होने चाहिए; means of communication",
        "hi": "यातायात के साधन"
      }
    ]
  },
  {
    "id": 928,
    "word": "medium",
    "pos": "n",
    "pronunciation": "मीडिअम",
    "meaningHi": "कुछ व्यक्त करने या संप्रेषित करने का माध्यम",
    "meaningEn": "",
    "examples": [
      {
        "en": "Language is a medium of expression",
        "hi": "भाषा अभिव्यक्ति का एक माध्यम है।"
      }
    ]
  },
  {
    "id": 929,
    "word": "mention",
    "pos": "v",
    "pronunciation": "मेनशन",
    "meaningHi": "उल्ेख करना, जिक्र करना",
    "meaningEn": "",
    "examples": [
      {
        "en": "He mentioned his problem to me",
        "hi": "उसने अपनी समस्ा का मुझसे जिक्र किया।"
      }
    ]
  },
  {
    "id": 930,
    "word": "minute",
    "pos": "n",
    "pronunciation": "मिनिट",
    "meaningHi": "मिनट",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 931,
    "word": "mix",
    "pos": "v / n",
    "pronunciation": "मिक्स",
    "meaningHi": "मिलना-जुलना 2 कई चीजों को एक साथ मिलाना | विभिन्न प्रकार के लोगों या वस्तुओं का मिश्रण",
    "meaningEn": "",
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
    "id": 932,
    "word": "mixture",
    "pos": "n",
    "pronunciation": "मिक्सचर",
    "meaningHi": "विभिन्न वस्तुओं का मिश्रण अंंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ",
    "meaningEn": "",
    "examples": [
      {
        "en": "The new cricket team is a mixture of fresh talent and experienced players",
        "hi": "नई क्रिकेट टीम ताजी प्रतिभा और अनुभवी खिलाड़ियों का मिश्रण है।"
      }
    ]
  },
  {
    "id": 933,
    "word": "model",
    "pos": "n",
    "pronunciation": "मॉड्ल",
    "meaningHi": "नमूना या प्रतिदर्श 2 मॉडल मॉड्न आधुनिक",
    "meaningEn": "",
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
    "id": 934,
    "word": "motion",
    "pos": "n",
    "pronunciation": "मोशन",
    "meaningHi": "गति",
    "meaningEn": "",
    "examples": [
      {
        "en": "The car was in motion",
        "hi": "कार गति में थी।"
      }
    ]
  },
  {
    "id": 935,
    "word": "mouse",
    "pos": "n",
    "pronunciation": "माउस",
    "meaningHi": "चूहा 2 कंप्यूटर का माउस अंंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 936,
    "word": "narrow",
    "pos": "adj",
    "pronunciation": "नैरो",
    "meaningHi": "संकीर्ण, सँकरा, पतला",
    "meaningEn": "",
    "examples": [
      {
        "en": "a narrow alley - एक पतली गली; a narrow mind",
        "hi": "एक संकीर्ण दिमाग"
      }
    ]
  },
  {
    "id": 937,
    "word": "national",
    "pos": "adj",
    "pronunciation": "नैशनल",
    "meaningHi": "राष्ट्ीय",
    "meaningEn": "",
    "examples": [
      {
        "en": "national flag - राष्ट्रीीय ध्वज; a national crisis",
        "hi": "एक राष्ट्रीीय संकट"
      }
    ]
  },
  {
    "id": 938,
    "word": "nearby",
    "pos": "adj",
    "pronunciation": "होटल",
    "meaningHi": "अंंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 939,
    "word": "nearly",
    "pos": "adv",
    "pronunciation": "निअलि",
    "meaningHi": "लगभग",
    "meaningEn": "",
    "examples": [
      {
        "en": "nearly ten people came",
        "hi": "लगभग दस लोग आए"
      }
    ]
  },
  {
    "id": 940,
    "word": "nervous",
    "pos": "adj",
    "pronunciation": "नर्वस",
    "meaningHi": "चिंतित, घबराया हुआ",
    "meaningEn": "",
    "examples": [
      {
        "en": "He was nervous before the interview",
        "hi": "साक्षात्ार के पहले वह घबराया हुआ था।"
      }
    ]
  },
  {
    "id": 941,
    "word": "nobody",
    "pos": "pron",
    "pronunciation": "नो वन, नो",
    "meaningHi": "बॉडी कोई नहीं",
    "meaningEn": "",
    "examples": [
      {
        "en": "No one is happy",
        "hi": "कोई भी खुश नहीं है।"
      }
    ]
  },
  {
    "id": 942,
    "word": "noisy",
    "pos": "adj",
    "pronunciation": "नोइज़ि",
    "meaningHi": "शोर मचानेवाला, कोलाहलपूर्ण",
    "meaningEn": "",
    "examples": [
      {
        "en": "a noisy baby",
        "hi": "एक शोर मचाने वाला शिशु"
      }
    ]
  },
  {
    "id": 943,
    "word": "nonsense",
    "pos": "n",
    "pronunciation": "नॉन्सन्स",
    "meaningHi": "निरर्थक, असंगत या अनर्गल नॉनवायलंस अहिंसा 130 131 अंंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ no one →",
    "meaningEn": "",
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
    "id": 944,
    "word": "nowhere",
    "pos": "adv",
    "pronunciation": "नोवेअर",
    "meaningHi": "कहीं नहीं",
    "meaningEn": "",
    "examples": [
      {
        "en": "Nowhere you will find such beautiful buildings",
        "hi": "इस तरह की सुंदर इमारतें आप कहीं नहीं पाएँगे।"
      }
    ]
  },
  {
    "id": 945,
    "word": "nurse",
    "pos": "n",
    "pronunciation": "नर्स",
    "meaningHi": "रोगियों की देखभाल के लिए प्रशिक्षित व्यक्ति 132 133 O अंंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ",
    "meaningEn": "",
    "examples": [
      {
        "en": "She is a nurse in a private hospital",
        "hi": "वह एक निजी अस्पताल में नर्स हैं।"
      }
    ]
  },
  {
    "id": 946,
    "word": "odd",
    "pos": "adj",
    "pronunciation": "अॉड",
    "meaningHi": "अजीब, विचित्र 2 Odd विषम संख्ा जो संख्या 2 से विभाजित न हो, जैसे 3,5,7 आदि",
    "meaningEn": "",
    "examples": [
      {
        "en": "It may be odd to speak in English where no one knows English",
        "hi": "जहाँ कोई अंगरेज़ी नहीं जानता वहाँ अंगरेज़ी बोलना अजीब लग सकता है।"
      }
    ]
  },
  {
    "id": 947,
    "word": "official",
    "pos": "n",
    "pronunciation": "अफ़िश्ल",
    "meaningHi": "अधिकारी",
    "meaningEn": "",
    "examples": [
      {
        "en": "Some officials visited us yesterday",
        "hi": "कुछ अधिकारी कल हमारे यहाँ आए।"
      }
    ]
  },
  {
    "id": 948,
    "word": "operate",
    "pos": "v",
    "pronunciation": "अॉपरेट",
    "meaningHi": "चलाना 2 अॉपरेशन करना अॉपरेशन 1 संचालन 2 शल्ोपचार चीर-फाड़ 3 अभियान",
    "meaningEn": "",
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
    "id": 949,
    "word": "option",
    "pos": "n",
    "pronunciation": "अॉपशन",
    "meaningHi": "विकल्प, सोच-विचार के बाद चयन करने- -योग्य कोई चीज अॉप्टिमिज़म आशावादिता 136 137 अंंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ",
    "meaningEn": "",
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
    "id": 950,
    "word": "paper",
    "pos": "n",
    "pronunciation": "कागज",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 951,
    "word": "passage",
    "pos": "n",
    "pronunciation": "पैसिज",
    "meaningHi": "गलियारा, रास्ता",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 952,
    "word": "pause",
    "pos": "n / v",
    "pronunciation": "पॉज़",
    "meaningHi": "विराम, रुकावट, ठहराव | थोड़ी देर के लिए रुकना",
    "meaningEn": "",
    "examples": [
      {
        "en": "He paused several times during his speech",
        "hi": "वे अपने भाषण के बीच कई बार रुके।"
      }
    ]
  },
  {
    "id": 953,
    "word": "payment",
    "pos": "n",
    "pronunciation": "पेमन्ट",
    "meaningHi": "भुगतान, धनराशि",
    "meaningEn": "",
    "examples": [
      {
        "en": "The payment for the books has been received",
        "hi": "किताबों के लिए भुगतान प्राप्त कर लिया गया है।"
      }
    ]
  },
  {
    "id": 954,
    "word": "pen",
    "pos": "n",
    "pronunciation": "पेन",
    "meaningHi": "कलम",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 955,
    "word": "pencil",
    "pos": "n",
    "pronunciation": "पेन्ल",
    "meaningHi": "पेंसिल",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 956,
    "word": "perform",
    "pos": "v",
    "pronunciation": "पफ़ोम",
    "meaningHi": "कुछ फल देते हुए काम करना, निभाना 2 कार्यक्रम प्रस्तुत करना",
    "meaningEn": "",
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
    "id": 957,
    "word": "physical",
    "pos": "adj",
    "pronunciation": "फ़िज़िकल",
    "meaningHi": "शारीरिक",
    "meaningEn": "",
    "examples": [
      {
        "en": "Isn't physical exercise a necessary part of a good life?",
        "hi": "क्ा शारीरिक व्ायाम अच्े जीवन का एक आवश्यक अंग नहीं है?"
      }
    ]
  },
  {
    "id": 958,
    "word": "piece",
    "pos": "n",
    "pronunciation": "पीस",
    "meaningHi": "टुकड़ा",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 959,
    "word": "plain",
    "pos": "adj / n",
    "pronunciation": "प्ेन",
    "meaningHi": "स्पष्ट, सरल, साफ | बड़ा सपाट मैदान",
    "meaningEn": "",
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
    "id": 960,
    "word": "plant",
    "pos": "n / v",
    "pronunciation": "प्ान्ट",
    "meaningHi": "पौधा, वनस्पति 2 फैक्टरी | {पौधे} लगाना",
    "meaningEn": "",
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
    "id": 961,
    "word": "please",
    "pos": "v",
    "pronunciation": "प्लीज़",
    "meaningHi": "संतुष्ट करना",
    "meaningEn": "",
    "examples": [
      {
        "en": "Can you please everybody?",
        "hi": "क्ा आप सभी को संतुष्ट कर सकते हैं?"
      }
    ]
  },
  {
    "id": 962,
    "word": "pleased",
    "pos": "adj",
    "pronunciation": "प्ीज़्ड",
    "meaningHi": "प्रसन्न",
    "meaningEn": "",
    "examples": [
      {
        "en": "I am pleased to inform that my son is getting married soon",
        "hi": "मैं यह बताते हुए प्रसन्न हँ कि मेरे बेटे की शादी जल्द होने वाली है।"
      }
    ]
  },
  {
    "id": 963,
    "word": "plenty",
    "pos": "adv pron",
    "pronunciation": "प्ेन्टि",
    "meaningHi": "प्रचुर, भरपूर, काफी 2 समृद्धि",
    "meaningEn": "",
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
    "id": 964,
    "word": "politics",
    "pos": "n",
    "pronunciation": "पॉलटिक्स",
    "meaningHi": "राजनीति",
    "meaningEn": "",
    "examples": [
      {
        "en": "Good politics elevates a nation, bad politics destroys it",
        "hi": "अच्छी राजनीति राष्ट्र को ऊपर उठा देती हैं, बुरी राजनीति इसे नष्ट कर देती है।"
      }
    ]
  },
  {
    "id": 965,
    "word": "pollution",
    "pos": "n",
    "pronunciation": "पलूशन",
    "meaningHi": "प्रदूषण, गंदगी",
    "meaningEn": "",
    "examples": [
      {
        "en": "Air-pollution may make life on earth difficult",
        "hi": "वायु-प्रदूषण धरती पर जीवन को कठिन बना दे सकता है।"
      }
    ]
  },
  {
    "id": 966,
    "word": "practical",
    "pos": "adj",
    "pronunciation": "प्ैक्टिकल",
    "meaningHi": "व्यावहारिक",
    "meaningEn": "",
    "examples": [
      {
        "en": "a practical man",
        "hi": "एक व्यावहारिक इंसान"
      }
    ]
  },
  {
    "id": 967,
    "word": "prefer",
    "pos": "v",
    "pronunciation": "प्रिफ़र",
    "meaningHi": "{एक चीज़ की तुलना में किसी दूसरी चीज को अधिक} पसंद करना अंंगरेज़ी शब्द उच्ारण हिंदी में अर्थ",
    "meaningEn": "",
    "examples": [
      {
        "en": "I prefer mangoes to guava",
        "hi": "मैं अमरूद से अधिक आम पसंद करता हँ।"
      }
    ]
  },
  {
    "id": 968,
    "word": "prepare",
    "pos": "v",
    "pronunciation": "प्रिपेअर",
    "meaningHi": "तैयारी करना 2 बनाना",
    "meaningEn": "",
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
    "id": 969,
    "word": "press",
    "pos": "n / v",
    "pronunciation": "प्रेस",
    "meaningHi": "पत्रकार 2 कपड़े प्रेस करने वाला उपकरण जिसे आयरन भी कहते हैं 3 छापाखाना | 1 दबाना 2 दबाव देना 1",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 970,
    "word": "pressure",
    "pos": "n",
    "pronunciation": "प्ेशर",
    "meaningHi": "दबाव",
    "meaningEn": "",
    "examples": [
      {
        "en": "The police often act under pressure from the ministers",
        "hi": "पुसिल अकसर मंत्रियों के दबाव में कार्य करती है।"
      }
    ]
  },
  {
    "id": 971,
    "word": "pretend",
    "pos": "v",
    "pronunciation": "प्रिटेन्ड",
    "meaningHi": "झूठमूठ का अभिनय करना, दिखावा करना",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 972,
    "word": "pretty",
    "pos": "adj",
    "pronunciation": "प्रिटि",
    "meaningHi": "आकर्षक 2 काफी-कुछ",
    "meaningEn": "",
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
    "id": 973,
    "word": "previous",
    "pos": "adj",
    "pronunciation": "प्ीविअस",
    "meaningHi": "पहले वाला, पूर्वर्तीी",
    "meaningEn": "",
    "examples": [
      {
        "en": "the previous year",
        "hi": "इसके पहले का साल"
      }
    ]
  },
  {
    "id": 974,
    "word": "print",
    "pos": "n / v",
    "pronunciation": "प्रिंट",
    "meaningHi": "छपाई, टाइप, मुद्रण | छापना, मुद्रित करना",
    "meaningEn": "",
    "examples": [
      {
        "en": "she got her book printed",
        "hi": "उसने अपनी किताब छपवाई ।"
      }
    ]
  },
  {
    "id": 975,
    "word": "priority",
    "pos": "n",
    "pronunciation": "प्राइअॉरटि",
    "meaningHi": "प्राथमिकता अधिक महत्त्वपूर्ण ; फुटबॉल इस क्षण मेरी प्राथमिकता नहीं है; परीक्षा की तैयारी अभी प्राथमिकता है।",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 976,
    "word": "private",
    "pos": "adj",
    "pronunciation": "प्ाइवट",
    "meaningHi": "निजी, व्यक्तिगत",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 977,
    "word": "prize",
    "pos": "n",
    "pronunciation": "प्राइज़",
    "meaningHi": "पुरस्ार, ईनाम",
    "meaningEn": "",
    "examples": [
      {
        "en": "the Nobel Prize",
        "hi": "नोबेल पुरस्ार"
      }
    ]
  },
  {
    "id": 978,
    "word": "probably",
    "pos": "adv",
    "pronunciation": "प्ॉबब्लि",
    "meaningHi": "शायद, संभवतः",
    "meaningEn": "",
    "examples": [
      {
        "en": "He will probably come",
        "hi": "वह संभवतः आएगा।"
      }
    ]
  },
  {
    "id": 979,
    "word": "profit",
    "pos": "n / v",
    "pronunciation": "प्ॉफ़िट",
    "meaningHi": "लाभ, नफा | फ़ायदा मिलना",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 980,
    "word": "project",
    "pos": "n / v",
    "pronunciation": "प्ॉजेक्ट",
    "meaningHi": "परियोजना, प्रकल्प कोई एक विशेष कार्य जिसे योजनाबद्ध तरीके से एक समयसीमा में पूरा करना हो",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 981,
    "word": "proof",
    "pos": "n",
    "pronunciation": "प्रूफ़",
    "meaningHi": "सबूत",
    "meaningEn": "",
    "examples": [
      {
        "en": "Do you have any proof that he stole your wallet?",
        "hi": "क्ा तुम्ारे पास कोई सबूूत है कि उसने तुम्ारा बटुआ चुराया?"
      }
    ]
  },
  {
    "id": 982,
    "word": "properly",
    "pos": "adv",
    "pronunciation": "प्ॉपलि",
    "meaningHi": "ढंग से, ठीक से",
    "meaningEn": "",
    "examples": [
      {
        "en": "He was dressed properly",
        "hi": "वह पोशाक में था।"
      }
    ]
  },
  {
    "id": 983,
    "word": "protest",
    "pos": "n / v",
    "pronunciation": "प्ॉटेस्ट",
    "meaningHi": "विरोध, प्रतिवाद | विरोध, प्रतिवाद करना",
    "meaningEn": "",
    "examples": [
      {
        "en": "There were protests against the new law",
        "hi": "नए कानूून के खिलाफ विरोध-प्रदर्शन हुए।"
      }
    ]
  },
  {
    "id": 984,
    "word": "prove",
    "pos": "v",
    "pronunciation": "प्रूव",
    "meaningHi": "सिद्ध करना",
    "meaningEn": "",
    "examples": [
      {
        "en": "Can you prove that earth is round?",
        "hi": "क्ा तुम सिद्ध कर सकते हो कि धरती गोल है?"
      }
    ]
  },
  {
    "id": 985,
    "word": "pupil",
    "pos": "n",
    "pronunciation": "प्ूपल",
    "meaningHi": "शिष्य, छात्र",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 986,
    "word": "quantity",
    "pos": "n",
    "pronunciation": "क्वांंटिटि",
    "meaningHi": "मात्ा, परिमाण",
    "meaningEn": "",
    "examples": [
      {
        "en": "Eating food in small quantities is healthier",
        "hi": "थोड़ी-थोड़ी मात्रा में भोजन खाना अधिक स्ास्थ्यकर होता है।"
      }
    ]
  },
  {
    "id": 987,
    "word": "quarrel",
    "pos": "n / v",
    "pronunciation": "क्वॉरल",
    "meaningHi": "झगड़ा या विवाद | झगड़ा करना",
    "meaningEn": "",
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
    "id": 988,
    "word": "quarter",
    "pos": "n",
    "pronunciation": "क्वॉटर",
    "meaningHi": "एक चौथाई 2 तिमाही 3 आवास मकान",
    "meaningEn": "",
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
    "id": 989,
    "word": "queue",
    "pos": "n",
    "pronunciation": "क्यू",
    "meaningHi": "कतार या लाइन",
    "meaningEn": "",
    "examples": [
      {
        "en": "Why is there such a long queue?",
        "hi": "इतनी लंबी लाइन क्योंों है?"
      }
    ]
  },
  {
    "id": 990,
    "word": "radio",
    "pos": "n",
    "pronunciation": "रेडिओ",
    "meaningHi": "रेडियो ऐसा यंत्र जिसमें से रेडियो-स्ेशन से प्रसारित ध्वनियाँ निकलती हों।",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 991,
    "word": "rarely",
    "pos": "adv",
    "pronunciation": "रेअलि",
    "meaningHi": "कम ही, विरले ही",
    "meaningEn": "",
    "examples": [
      {
        "en": "He is rarely seen happy",
        "hi": "वह विरले ही खुश देखा जाता है।"
      }
    ]
  },
  {
    "id": 992,
    "word": "raw",
    "pos": "adj",
    "pronunciation": "रॉ",
    "meaningHi": "कच्ी स्थिति में 2 अनगढ़",
    "meaningEn": "",
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
    "id": 993,
    "word": "react",
    "pos": "v",
    "pronunciation": "रिऐक्ट",
    "meaningHi": "प्रतिक्रिया व्यक्त करना रिऐक्शन प्रतिक्रिया 160 161 अंंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ",
    "meaningEn": "",
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
    "id": 994,
    "word": "recent",
    "pos": "adj",
    "pronunciation": "रीसन्ट",
    "meaningHi": "हाल का रीसंटलि हाल ही में अंंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ रेकग्ाइज़ 1 पहचानना 2 मान्यता देना 1948 - इजराइल को एक स्वतंत्र देश के रूप में 1948 में",
    "meaningEn": "",
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
    "id": 995,
    "word": "record",
    "pos": "n / v",
    "pronunciation": "रेकोड",
    "meaningHi": "अभिलेख, दस्तावेज, कागजात | रिकॉर्ड करना तथ्योंों या घटनाओं को भविष्य में उपयोग के लिए लिपिबद्ध करना या ध्वनि या चित्र अथवा चलचित्र के रूप में अंकित",
    "meaningEn": "",
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
    "id": 996,
    "word": "recover",
    "pos": "v",
    "pronunciation": "करना  3 वसूली करना",
    "meaningHi": "",
    "meaningEn": "",
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
    "id": 997,
    "word": "refer",
    "pos": "v",
    "pronunciation": "अंंगरेज़ी शब्द",
    "meaningHi": "उच्ारण हिंंदी में अर्थ 1",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 998,
    "word": "refuse",
    "pos": "v",
    "pronunciation": "रिफ़यूज़",
    "meaningHi": "इनकार करना, मना करना",
    "meaningEn": "",
    "examples": [
      {
        "en": "He refused to come",
        "hi": "उसने आने से मना कर दिया।"
      }
    ]
  },
  {
    "id": 999,
    "word": "region",
    "pos": "n",
    "pronunciation": "रीजन",
    "meaningHi": "क्षेत्र रीजनल क्षेत्ीय",
    "meaningEn": "",
    "examples": [
      {
        "en": "the northern region of India",
        "hi": "भारत का उत्तरी क्षेत्र"
      }
    ]
  },
  {
    "id": 1000,
    "word": "reject",
    "pos": "v",
    "pronunciation": "रिजेक्ट",
    "meaningHi": "अस्ीकृत कर देना अंंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ to रिलेटिड से संबंधित",
    "meaningEn": "",
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
    "id": 1001,
    "word": "relax",
    "pos": "v",
    "pronunciation": "रिलैक्स",
    "meaningHi": "विश्ाम करना",
    "meaningEn": "",
    "examples": [
      {
        "en": "Let us relax for some time",
        "hi": "हम थोड़ी देर आराम करें।"
      }
    ]
  },
  {
    "id": 1002,
    "word": "relief",
    "pos": "n",
    "pronunciation": "रिलीफ़",
    "meaningHi": "राहत या चैन",
    "meaningEn": "",
    "examples": [
      {
        "en": "The rain gave relief to the farmers",
        "hi": "बारिश ने किसानों को राहत दी।"
      }
    ]
  },
  {
    "id": 1003,
    "word": "remark",
    "pos": "n / v",
    "pronunciation": "रिमाक",
    "meaningHi": "टिप्पणी, कथन | टिप्पणी करना",
    "meaningEn": "",
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
    "id": 1004,
    "word": "repair",
    "pos": "n / v",
    "pronunciation": "मरम्मत में है।",
    "meaningHi": "| रिपेअर मरम्मत करना",
    "meaningEn": "",
    "examples": [
      {
        "en": "Did you get your car repaired?",
        "hi": "क्ा तुमने अपनी कार मरम्मत कराई?"
      }
    ]
  },
  {
    "id": 1005,
    "word": "reply",
    "pos": "n / v",
    "pronunciation": "रिप्ाइ",
    "meaningHi": "जवाब, उत्तर | जवाब या उत्तर देना अंंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ",
    "meaningEn": "",
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
    "id": 1006,
    "word": "rid",
    "pos": "v",
    "pronunciation": "रिड",
    "meaningHi": "मुक्त करना, पीछा छुड़ाना",
    "meaningEn": "",
    "examples": [
      {
        "en": "Rid yourself of worries",
        "hi": "चिंताओं से अपना पीछा छुड़ाओ"
      }
    ]
  },
  {
    "id": 1007,
    "word": "rough",
    "pos": "adj",
    "pronunciation": "रफ़",
    "meaningHi": "वस्तु के लिए खुरदरा 2 व्यक्ति के लिए रुक्ष रूखे व्यव- हार वाला 168 169 अंंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ",
    "meaningEn": "",
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
    "id": 1008,
    "word": "round",
    "pos": "adj / n",
    "pronunciation": "राउन्ड",
    "meaningHi": "गोल | 1 फेरा, गश्त, चक्कर 2 बारी 1",
    "meaningEn": "",
    "examples": [
      {
        "en": "a round plate",
        "hi": "एक गोल प्ेट"
      }
    ]
  },
  {
    "id": 1009,
    "word": "row",
    "pos": "n",
    "pronunciation": "रो",
    "meaningHi": "कतार, पंक्ति 2 झगड़ा",
    "meaningEn": "",
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
    "id": 1010,
    "word": "rub",
    "pos": "v",
    "pronunciation": "रब",
    "meaningHi": "रगड़ना रबिश कूड़ा-करकट, बेकार की चीजें",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1011,
    "word": "safety",
    "pos": "n",
    "pronunciation": "सेफ़्टि",
    "meaningHi": "सुरक्षा",
    "meaningEn": "",
    "examples": [
      {
        "en": "The police are there to ensure the safety of citizens",
        "hi": "पुलिस नागरिकों की सुरक्षा सुनिश्चित करने के लिए होती है।"
      }
    ]
  },
  {
    "id": 1012,
    "word": "satisfied",
    "pos": "adj",
    "pronunciation": "सैटिसफ़ाइड",
    "meaningHi": "संतुष्ट",
    "meaningEn": "",
    "examples": [
      {
        "en": "Are you satisfied with the coaching?",
        "hi": "क्ा तुम कोचिंग से संतुष्ट हो?"
      }
    ]
  },
  {
    "id": 1013,
    "word": "saving",
    "pos": "n",
    "pronunciation": "सेविंग",
    "meaningHi": "बचत 2 जमापूँजी",
    "meaningEn": "",
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
    "id": 1014,
    "word": "scale",
    "pos": "n",
    "pronunciation": "स्ेल",
    "meaningHi": "पैमाना 2 रूलर 3 तराजू, पलड़ा",
    "meaningEn": "",
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
    "id": 1015,
    "word": "scare",
    "pos": "n / v",
    "pronunciation": "स्ेअर",
    "meaningHi": "डर, भय | डरा देना",
    "meaningEn": "",
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
    "id": 1016,
    "word": "scared",
    "pos": "adj",
    "pronunciation": "स्ेअड",
    "meaningHi": "भयभीत",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1017,
    "word": "scene",
    "pos": "n",
    "pronunciation": "सीन",
    "meaningHi": "दृश्य",
    "meaningEn": "",
    "examples": [
      {
        "en": "what a scene!",
        "hi": "क्ा दृश्य है!"
      }
    ]
  },
  {
    "id": 1018,
    "word": "schedule",
    "pos": "n / v",
    "pronunciation": "शेड्ूल",
    "meaningHi": "समय-सहित कार्य-योजना | किसी बात की समय-सारणी तय करना Did you ? - क्ा अपने परिवार से मशविरा करके तुमने अपनी यात्रा की समय-सारणी तय की?",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1019,
    "word": "scheme",
    "pos": "n",
    "pronunciation": "स्ीम",
    "meaningHi": "योजना खास कर सरकारी योजना या प्रणाली",
    "meaningEn": "",
    "examples": [
      {
        "en": "The government has started a new scheme for blind students",
        "hi": "सरकार ने नेत्रहीन विद्ार्थियों के लिए एक नई योजना शुरू की है।"
      }
    ]
  },
  {
    "id": 1020,
    "word": "score",
    "pos": "n / v",
    "pronunciation": "खिलाड़ी आदि के प्राप्त अंक का",
    "meaningHi": "लेखा | 1",
    "meaningEn": "",
    "examples": [
      {
        "en": "What is the score?",
        "hi": "स्ोर क्ा है?"
      }
    ]
  },
  {
    "id": 1021,
    "word": "second",
    "pos": "det adv",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1022,
    "word": "sentence",
    "pos": "n",
    "pronunciation": "सेन्टन्स",
    "meaningHi": "वाक्य",
    "meaningEn": "",
    "examples": [
      {
        "en": "A sentence is made of several words",
        "hi": "एक वाक्य कई शब्दोंों से बनता है।"
      }
    ]
  },
  {
    "id": 1023,
    "word": "separate",
    "pos": "adj / v",
    "pronunciation": "सेपरट",
    "meaningHi": "पृथक, अलग | अलग हो जाना",
    "meaningEn": "",
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
    "id": 1024,
    "word": "seriously",
    "pos": "adv",
    "pronunciation": "गंभीर रूप से घायल",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1025,
    "word": "settle",
    "pos": "v",
    "pronunciation": "सेट्ल",
    "meaningHi": "बहस या विवाद को सुलझा देना",
    "meaningEn": "",
    "examples": [
      {
        "en": "settle a dispute - एक विवाद को सुलझाना 2 कहीं बस जाना (settle abroad",
        "hi": "विदेश में बस जाना"
      }
    ]
  },
  {
    "id": 1026,
    "word": "shade",
    "pos": "n",
    "pronunciation": "शेड",
    "meaningHi": "साया, छायादार क्षेत्र 2 रंग का एक रूप 176 177 अंंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ",
    "meaningEn": "",
    "examples": [
      {
        "en": "Pink is a shade of red",
        "hi": "पिंक रंग लाल रंग का एक रूप है।"
      }
    ]
  },
  {
    "id": 1027,
    "word": "shadow",
    "pos": "n",
    "pronunciation": "शैडो",
    "meaningHi": "छाया, परछाई",
    "meaningEn": "",
    "examples": [
      {
        "en": "He stood in the shadow of a tree",
        "hi": "वह एक पेड़ की छाया में खड़ा हुआ।"
      }
    ]
  },
  {
    "id": 1028,
    "word": "shake",
    "pos": "v",
    "pronunciation": "शेक",
    "meaningHi": "हिलना 2 हिलाना शैल भविष्यत काल की सहायक क्रिया",
    "meaningEn": "",
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
    "id": 1029,
    "word": "shock",
    "pos": "n / v",
    "pronunciation": "शॉक",
    "meaningHi": "आघात, सदमा",
    "meaningEn": "",
    "examples": [
      {
        "en": "His rude behaviour shocked me",
        "hi": "उसके रूखे व्यवहार से मुझे सदमा लगा।"
      }
    ]
  },
  {
    "id": 1030,
    "word": "shoot",
    "pos": "v",
    "pronunciation": "शूट",
    "meaningHi": "गोली मारना 2 फोटो या विडियो खींचना",
    "meaningEn": "",
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
    "id": 1031,
    "word": "shout",
    "pos": "n / v",
    "pronunciation": "शाउट",
    "meaningHi": "चिल्ाहट | चिल्ाना, बहुत जोर से बोलना",
    "meaningEn": "",
    "examples": [
      {
        "en": "Ci- vilised people rarely shout",
        "hi": "सभ्य लोग विरले ही चिल्ा कर बोलते हैं।"
      }
    ]
  },
  {
    "id": 1032,
    "word": "sight",
    "pos": "n",
    "pronunciation": "साइट",
    "meaningHi": "दृष्टि 2 दृश्य",
    "meaningEn": "",
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
    "id": 1033,
    "word": "similar",
    "pos": "adj",
    "pronunciation": "सिमिलर",
    "meaningHi": "मिलता-जुलता",
    "meaningEn": "",
    "examples": [
      {
        "en": "a similar face",
        "hi": "एक मिलता जुलता चेहरा"
      }
    ]
  },
  {
    "id": 1034,
    "word": "sky",
    "pos": "n",
    "pronunciation": "स्ाई",
    "meaningHi": "आकाश",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1035,
    "word": "slide",
    "pos": "v",
    "pronunciation": "स्ाइड",
    "meaningHi": "फिसलना, खिसकना",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1036,
    "word": "slowly",
    "pos": "adv",
    "pronunciation": "स्ोलि",
    "meaningHi": "धीरे-धीरे",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1037,
    "word": "smart",
    "pos": "adj",
    "pronunciation": "स्माट",
    "meaningHi": "तेजतर्रार 2 आकर्षक",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1038,
    "word": "smoke",
    "pos": "n / v",
    "pronunciation": "स्मोक",
    "meaningHi": "धुँआ | सिगरेट पीना",
    "meaningEn": "",
    "examples": [
      {
        "en": "Smoking may cause cancer",
        "hi": "सिगरेट पीने से कैंसर हो सकता है।"
      }
    ]
  },
  {
    "id": 1039,
    "word": "social",
    "pos": "adj",
    "pronunciation": "सोशल",
    "meaningHi": "सामाजिक",
    "meaningEn": "",
    "examples": [
      {
        "en": "a social worker",
        "hi": "एक सामाजिक कार्यकर्ता"
      }
    ]
  },
  {
    "id": 1040,
    "word": "somebody",
    "pos": "pron",
    "pronunciation": "सम्बडि",
    "meaningHi": "कोई व्यक्ति",
    "meaningEn": "",
    "examples": [
      {
        "en": "Somebody came",
        "hi": "कोई आया"
      }
    ]
  },
  {
    "id": 1041,
    "word": "somehow",
    "pos": "adv",
    "pronunciation": "सम्ाउ",
    "meaningHi": "किसी तरह से",
    "meaningEn": "",
    "examples": [
      {
        "en": "Somehow I came",
        "hi": "किसी तरह मैं आया"
      }
    ]
  },
  {
    "id": 1042,
    "word": "someone",
    "pos": "pron",
    "pronunciation": "सम्वन",
    "meaningHi": "कोई व्यक्ति",
    "meaningEn": "",
    "examples": [
      {
        "en": "Someone came",
        "hi": "कोई आया"
      }
    ]
  },
  {
    "id": 1043,
    "word": "something",
    "pos": "pron",
    "pronunciation": "सम्थंग",
    "meaningHi": "कुछ",
    "meaningEn": "",
    "examples": [
      {
        "en": "Something is wrong",
        "hi": "कुछ गड़बड़ है।"
      }
    ]
  },
  {
    "id": 1044,
    "word": "somewhat",
    "pos": "adv",
    "pronunciation": "सम्वॉट",
    "meaningHi": "कुछ-कुछ, किसी हद तक",
    "meaningEn": "",
    "examples": [
      {
        "en": "some- what hesitant",
        "hi": "कुछ-कुछ हिचकिचाता हुआ"
      }
    ]
  },
  {
    "id": 1045,
    "word": "somewhere",
    "pos": "adv",
    "pronunciation": "सम्ेअर",
    "meaningHi": "कहीं",
    "meaningEn": "",
    "examples": [
      {
        "en": "He has gone somewhere",
        "hi": "वह कहीं गया है।"
      }
    ]
  },
  {
    "id": 1046,
    "word": "special",
    "pos": "adj",
    "pronunciation": "स्ेशल",
    "meaningHi": "विशिष्ट, खास",
    "meaningEn": "",
    "examples": [
      {
        "en": "special guests",
        "hi": "खास मेहमान"
      }
    ]
  },
  {
    "id": 1047,
    "word": "speech",
    "pos": "n",
    "pronunciation": "स्पीच",
    "meaningHi": "भाषण",
    "meaningEn": "",
    "examples": [
      {
        "en": "a great speech",
        "hi": "एक महान भाषण"
      }
    ]
  },
  {
    "id": 1048,
    "word": "spend",
    "pos": "v",
    "pronunciation": "स्पेन्ड",
    "meaningHi": "खर्च करना",
    "meaningEn": "",
    "examples": [
      {
        "en": "spend your energy on good things",
        "hi": "अपनी ऊर्जा अच्छी चीजों पर खर्च करो"
      }
    ]
  },
  {
    "id": 1049,
    "word": "spread",
    "pos": "v",
    "pronunciation": "स्प्रेड",
    "meaningHi": "फैलाना",
    "meaningEn": "",
    "examples": [
      {
        "en": "Spread peace, not hatred",
        "hi": "शांति फैलाओ, नफरत नहीं।"
      }
    ]
  },
  {
    "id": 1050,
    "word": "spring",
    "pos": "n / v",
    "pronunciation": "स्प्ंग",
    "meaningHi": "वसंत ऋतु 186 187 अंंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ SQ",
    "meaningEn": "",
    "examples": [
      {
        "en": "Spiritual | तेजी से उछलना (He sprang to his feet",
        "hi": "वह उछल कर अपने पैरों पर खड़ा हो गया।"
      }
    ]
  },
  {
    "id": 1051,
    "word": "stare",
    "pos": "v",
    "pronunciation": "स्ेअर",
    "meaningHi": "देखते रहना, घूरना",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1052,
    "word": "statement",
    "pos": "n",
    "pronunciation": "स्ेट्मन्ट",
    "meaningHi": "कथन, बयान",
    "meaningEn": "",
    "examples": [
      {
        "en": "statement of the victim",
        "hi": "पीड़ित का बयान"
      }
    ]
  },
  {
    "id": 1053,
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
    "id": 1054,
    "word": "storm",
    "pos": "n",
    "pronunciation": "स्ोम",
    "meaningHi": "आँधी, तूफान",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1055,
    "word": "stranger",
    "pos": "n",
    "pronunciation": "स्ट्रेनजर",
    "meaningHi": "अजनबी जिससे कभी कोई जान-पहचान नहीं हुई हो",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1056,
    "word": "stretch",
    "pos": "v",
    "pronunciation": "स्ट्ेच",
    "meaningHi": "खींच कर लंबा करना",
    "meaningEn": "",
    "examples": [
      {
        "en": "Elastic can be stretched",
        "hi": "इलास्टिक को खींच कर लंबा किया जा सकता है।"
      }
    ]
  },
  {
    "id": 1057,
    "word": "strike",
    "pos": "n / v",
    "pronunciation": "स्ट्ाइक",
    "meaningHi": "हड़ताल 2 हमला | 1 मारना 2 दिमाग में कोई बात आना 3 हड़ताल करना 4 हटाना 1",
    "meaningEn": "",
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
    "id": 1058,
    "word": "study",
    "pos": "n / v",
    "pronunciation": "स्टडि",
    "meaningHi": "अध्यन, पढ़ाई 2 अध्यन का कमरा | अध्यन करना",
    "meaningEn": "",
    "examples": [
      {
        "en": "study history",
        "hi": "इतिहास पढ़ना"
      }
    ]
  },
  {
    "id": 1059,
    "word": "stupid",
    "pos": "adj",
    "pronunciation": "स्ट्ूपिड",
    "meaningHi": "नासमझ",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1060,
    "word": "substance",
    "pos": "n",
    "pronunciation": "सब्सटन्स",
    "meaningHi": "पदार्थ, वस्तु 2 सत्य",
    "meaningEn": "",
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
    "id": 1061,
    "word": "sudden",
    "pos": "adj",
    "pronunciation": "सड्न",
    "meaningHi": "अचानक होने वाला",
    "meaningEn": "",
    "examples": [
      {
        "en": "sudden death",
        "hi": "अचानक मृत्ु"
      }
    ]
  },
  {
    "id": 1062,
    "word": "suddenly",
    "pos": "adv",
    "pronunciation": "सडन्लि",
    "meaningHi": "अचानक",
    "meaningEn": "",
    "examples": [
      {
        "en": "She suddenly started crying",
        "hi": "उसने अचानक रोना शुरू कर दिया।"
      }
    ]
  },
  {
    "id": 1063,
    "word": "summer",
    "pos": "n",
    "pronunciation": "ग्ीष्म ऋतु, गरमी का मौसम",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1064,
    "word": "supply",
    "pos": "n / v",
    "pronunciation": "सप्ाइ",
    "meaningHi": "आपूर्ति | आपूर्ति करना, प्रदान करना",
    "meaningEn": "",
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
    "id": 1065,
    "word": "surprise",
    "pos": "n / v",
    "pronunciation": "सप्ाइज़",
    "meaningHi": "आश्चर्य, ताज्जुब | किसी को आश्चर्यचकित करना",
    "meaningEn": "",
    "examples": [
      {
        "en": "She surprised everybody by scoring the highest marks",
        "hi": "सबसे अधिक नंबर ला कर उसने सभी को आश्चर्यचकित कर दिया।"
      }
    ]
  },
  {
    "id": 1066,
    "word": "swallow",
    "pos": "v",
    "pronunciation": "स्ॉलो",
    "meaningHi": "निगलना",
    "meaningEn": "",
    "examples": [
      {
        "en": "Swallow the pill",
        "hi": "दवा की गोली को निगल लो।"
      }
    ]
  },
  {
    "id": 1067,
    "word": "sweep",
    "pos": "v",
    "pronunciation": "स्ीप",
    "meaningHi": "झाड़ू या ब्रश से फ़र्श साफ करना",
    "meaningEn": "",
    "examples": [
      {
        "en": "sweep the floor",
        "hi": "फर्श साफ करना"
      }
    ]
  },
  {
    "id": 1068,
    "word": "swimming",
    "pos": "n",
    "pronunciation": "स्विमिंग",
    "meaningHi": "तैरना",
    "meaningEn": "",
    "examples": [
      {
        "en": "Swimming is the best exercise",
        "hi": "तैरना सबसे अच्ा व्ायाम है।"
      }
    ]
  },
  {
    "id": 1069,
    "word": "swing",
    "pos": "n / v",
    "pronunciation": "स्विंंग",
    "meaningHi": "झूला | झूलना, झुलाना",
    "meaningEn": "",
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
    "id": 1070,
    "word": "switch",
    "pos": "n",
    "pronunciation": "स्विच",
    "meaningHi": "बिजली का स्विच",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1071,
    "word": "system",
    "pos": "n",
    "pronunciation": "सिस्टम",
    "meaningHi": "तंत्र, व्यवस्ा 194 195 T अंंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ",
    "meaningEn": "",
    "examples": [
      {
        "en": "The system of schooling needs a change",
        "hi": "स्कूल की व्यवस्था में परिवर्तन की जरूरत है।"
      }
    ]
  },
  {
    "id": 1072,
    "word": "target",
    "pos": "n",
    "pronunciation": "टागिट",
    "meaningHi": "लक्ष्य, निशाना",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1073,
    "word": "taste",
    "pos": "n / v",
    "pronunciation": "टेस्ट",
    "meaningHi": "स्ाद 2 अभिरुचि, पसंद 2",
    "meaningEn": "",
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
    "id": 1074,
    "word": "terrible",
    "pos": "adj",
    "pronunciation": "टेरब्ल",
    "meaningHi": "भयानक",
    "meaningEn": "",
    "examples": [
      {
        "en": "a terrible creature",
        "hi": "एक भयानक जीव"
      }
    ]
  },
  {
    "id": 1075,
    "word": "thick",
    "pos": "adj",
    "pronunciation": "थिक",
    "meaningHi": "मोटा 2 गाढ़ा",
    "meaningEn": "",
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
    "id": 1076,
    "word": "thirsty",
    "pos": "adj",
    "pronunciation": "थस्टि",
    "meaningHi": "प्ासा",
    "meaningEn": "",
    "examples": [
      {
        "en": "a thirsty crow",
        "hi": "एक प्ासा कउआ"
      }
    ]
  },
  {
    "id": 1077,
    "word": "threaten",
    "pos": "v",
    "pronunciation": "थ्ेट्न",
    "meaningHi": "धमकी देना थ्ू 1 के माध्यम से, के द्ारा 2 आर-पार 3 आरंभ से अंत तक 1",
    "meaningEn": "",
    "examples": [
      {
        "en": "Who is threatening you?",
        "hi": "तुम्ें कौन धमकी दे रहा है?"
      }
    ]
  },
  {
    "id": 1078,
    "word": "ticket",
    "pos": "n",
    "pronunciation": "टिकिट",
    "meaningHi": "टिकट",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1079,
    "word": "tie",
    "pos": "n / v",
    "pronunciation": "टाइ",
    "meaningHi": "टाई नेकटाई जो गले में बाँधी जाती है | बाँधना 200 201 अंंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1080,
    "word": "tight",
    "pos": "adj adv",
    "pronunciation": "टाइट",
    "meaningHi": "कसा हुआ ढीला का उलटा",
    "meaningEn": "",
    "examples": [
      {
        "en": "tight shoes - कसे हुए जूूते, जिन्हेंें पहन कर चलने में दिक्कत हो सकती है; tight schedule",
        "hi": "कसा हुआ कार्यक्रम"
      }
    ]
  },
  {
    "id": 1081,
    "word": "tip",
    "pos": "n",
    "pronunciation": "टिप",
    "meaningHi": "सिरा, ऊपर का नुकीला हिस्ा 2 रेस्तराँ आदि में बैरे को दी जाने वाली बख्ीश 3 छोटी-छोटी सीख",
    "meaningEn": "",
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
    "id": 1082,
    "word": "tired",
    "pos": "adj",
    "pronunciation": "टायड",
    "meaningHi": "थका हुआ",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1083,
    "word": "today",
    "pos": "n adv",
    "pronunciation": "टुडे",
    "meaningHi": "आज",
    "meaningEn": "",
    "examples": [
      {
        "en": "Enjoy today, but save for tomorrow",
        "hi": "आज आनंद मनाओ, मगर कल के लिए बचाओ।"
      }
    ]
  },
  {
    "id": 1084,
    "word": "tongue",
    "pos": "n",
    "pronunciation": "टंग",
    "meaningHi": "जीभ",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1085,
    "word": "tonight",
    "pos": "n",
    "pronunciation": "टुनाइट",
    "meaningHi": "आज रात",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1086,
    "word": "top",
    "pos": "n / adj / v",
    "pronunciation": "टॉप",
    "meaningHi": "चोटी, शिखर | शीर्षस्थ, सर्वोपरि | 1 प्रथम आना 2 भोजन की किसी चीज के ऊपर कुछ और लगाना",
    "meaningEn": "",
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
    "id": 1087,
    "word": "tough",
    "pos": "adj",
    "pronunciation": "टफ़",
    "meaningHi": "सख्त 2 कठिन",
    "meaningEn": "",
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
    "id": 1088,
    "word": "track",
    "pos": "n / v",
    "pronunciation": "ट्रैक",
    "meaningHi": "चलते रहने से बना रास्ता | पता लगाना, पीछा करना",
    "meaningEn": "",
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
    "id": 1089,
    "word": "trade",
    "pos": "n / v",
    "pronunciation": "ट्रेड",
    "meaningHi": "व्यापार 202 203 अंंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ | व्यापार करना",
    "meaningEn": "",
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
    "id": 1090,
    "word": "traffic",
    "pos": "n",
    "pronunciation": "ट्ैफ़िक",
    "meaningHi": "यातायात",
    "meaningEn": "",
    "examples": [
      {
        "en": "heavy traffic",
        "hi": "अत्यधिक यातायात"
      }
    ]
  },
  {
    "id": 1091,
    "word": "tragedy",
    "pos": "n",
    "pronunciation": "ट्ैजडि",
    "meaningHi": "त्ासदी, अत्ंत दुखद घटना",
    "meaningEn": "",
    "examples": [
      {
        "en": "The Latur earthquake was a big tragedy",
        "hi": "लातूूर का भूूकंप एक बड़ी त्रासदी थी।"
      }
    ]
  },
  {
    "id": 1092,
    "word": "train",
    "pos": "n / v",
    "pronunciation": "ट्रेन",
    "meaningHi": "ट्रेन, रेल | प्रशिक्षण देना",
    "meaningEn": "",
    "examples": [
      {
        "en": "Elephants can be trained even to paint",
        "hi": "हाथियों को पेंटिंग करने के लिए भी प्रशिक्षित किया जा सकता है।"
      }
    ]
  },
  {
    "id": 1093,
    "word": "treat",
    "pos": "n / v",
    "pronunciation": "ट्रीट",
    "meaningHi": "दावत | व्यवहार-विशेष करना",
    "meaningEn": "",
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
    "id": 1094,
    "word": "treatment",
    "pos": "n",
    "pronunciation": "ट्ीटमन्ट",
    "meaningHi": "इलाज",
    "meaningEn": "",
    "examples": [
      {
        "en": "He is under treatment for tuberculosis",
        "hi": "वह यक्षमा के लिए इलाज में है।"
      }
    ]
  },
  {
    "id": 1095,
    "word": "trial",
    "pos": "n",
    "pronunciation": "ट्ायल",
    "meaningHi": "परीक्षण, आजमाइश 2 मुकदमा, मुकदमे की सुनवाई",
    "meaningEn": "",
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
    "id": 1096,
    "word": "trick",
    "pos": "n",
    "pronunciation": "ट्रिक",
    "meaningHi": "करतब, करामात, हाथ की सफाई 2 तरकीब, दाँवपेंच 3 शरारत",
    "meaningEn": "",
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
    "id": 1097,
    "word": "twist",
    "pos": "n / v",
    "pronunciation": "ट्विस्ट",
    "meaningHi": "मरोड़ने की क्रिया, मोड़, घुमाव | मरोड़ने की क्रिया",
    "meaningEn": "",
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
    "id": 1098,
    "word": "typical",
    "pos": "adj",
    "pronunciation": "टिपिक्ल",
    "meaningHi": "प्रातिनिधिक, आदर्शभूत, ठेठ 206 207 U अंंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ",
    "meaningEn": "",
    "examples": [
      {
        "en": "a typical Indian fellow - एक ठेठ भारतीय जन; typical American accent",
        "hi": "एक आदर्शभूूत अमेरिकन उच्चारण"
      }
    ]
  },
  {
    "id": 1099,
    "word": "unable",
    "pos": "adj",
    "pronunciation": "अनेबल",
    "meaningHi": "{कुछ करने में} असमर्थ, अक्षम अनसर्टन अनिश्चित",
    "meaningEn": "",
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
    "id": 1100,
    "word": "uniform",
    "pos": "n",
    "pronunciation": "यूनिफ़ोम",
    "meaningHi": "वर्दीी, गणवेश यूनिफ़ोम एक जैसा, जो बदलता नहीं ? - क्ा निजी और सरकारी शिक्षकों के लिए एक-जैसा वेतन होना चाहिए?",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1101,
    "word": "union",
    "pos": "n",
    "pronunciation": "यूनिअन",
    "meaningHi": "मिलन 2 एक हो जाना 3 संघ",
    "meaningEn": "",
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
    "id": 1102,
    "word": "unite",
    "pos": "v",
    "pronunciation": "युनाइट",
    "meaningHi": "एक होना 2 जोड़ना",
    "meaningEn": "",
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
    "id": 1103,
    "word": "united",
    "pos": "adj",
    "pronunciation": "युनाइटिड",
    "meaningHi": "एकसाथ, संयुक्त",
    "meaningEn": "",
    "examples": [
      {
        "en": "United you win, divided you lose",
        "hi": "एकजुट जीतते हैं, विभाजित हारते हैं।"
      }
    ]
  },
  {
    "id": 1104,
    "word": "unlock",
    "pos": "v",
    "pronunciation": "अनलॉक",
    "meaningHi": "ताला खोलना अनलकी अभागा, बदकिस्मत un- अन्प्ेज़्न्ट अप्रिय",
    "meaningEn": "",
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
    "id": 1105,
    "word": "upper",
    "pos": "adj",
    "pronunciation": "",
    "meaningHi": "अपर ऊपरी",
    "meaningEn": "",
    "examples": [
      {
        "en": "upper berth",
        "hi": "ऊपरी बर्थ"
      }
    ]
  },
  {
    "id": 1106,
    "word": "upset",
    "pos": "v / adj",
    "pronunciation": "अप्ेट",
    "meaningHi": "परेशान कर देना | चिंतित और परेशान अप्ेटिंग परेशान कर देने वाला",
    "meaningEn": "",
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
    "id": 1107,
    "word": "urban",
    "pos": "adj",
    "pronunciation": "अर्बन",
    "meaningHi": "शहरी",
    "meaningEn": "",
    "examples": [
      {
        "en": "urban culture",
        "hi": "शहरी संस्कृति"
      }
    ]
  },
  {
    "id": 1108,
    "word": "urgent",
    "pos": "adj",
    "pronunciation": "अजन्ट",
    "meaningHi": "तुरंत जरूरी",
    "meaningEn": "",
    "examples": [
      {
        "en": "urgent work",
        "hi": "तुरंत जरूरी काम"
      }
    ]
  },
  {
    "id": 1109,
    "word": "useful",
    "pos": "adj",
    "pronunciation": "यूस्फ़्ल",
    "meaningHi": "उपयोगी",
    "meaningEn": "",
    "examples": [
      {
        "en": "a useful man",
        "hi": "एक उपयोगी आदमी"
      }
    ]
  },
  {
    "id": 1110,
    "word": "useless",
    "pos": "adj",
    "pronunciation": "यूस्लस",
    "meaningHi": "बेकार",
    "meaningEn": "",
    "examples": [
      {
        "en": "a useless fellow",
        "hi": "एक बेकार का आदमी"
      }
    ]
  },
  {
    "id": 1111,
    "word": "usual",
    "pos": "adj",
    "pronunciation": "यूशज़ुअल",
    "meaningHi": "सामान्य, हमेशा-जैसा",
    "meaningEn": "",
    "examples": [
      {
        "en": "his usual dress",
        "hi": "उसका हमेशा-जैसा वस्त्र"
      }
    ]
  },
  {
    "id": 1112,
    "word": "usually",
    "pos": "adv",
    "pronunciation": "यूशज़ुअलि",
    "meaningHi": "सामान्यत:, अकसर अन्-यूशज़ुअलि असाधारण तरीके से V अंंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ",
    "meaningEn": "",
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
    "id": 1113,
    "word": "valid",
    "pos": "adj",
    "pronunciation": "वैलिड",
    "meaningHi": "सही, वैध, मान्य",
    "meaningEn": "",
    "examples": [
      {
        "en": "a valid passport",
        "hi": "एक मान्य पासपोर्ट"
      }
    ]
  },
  {
    "id": 1114,
    "word": "valley",
    "pos": "n",
    "pronunciation": "वैलि",
    "meaningHi": "घाटी दो पहाड़ियों या पहाड़ों के बीच की नीची जमीन जहाँ से सामान्यतः कोई नदी प्रवाहित होती है। वैल्ुअबल बहुमूल्य, कीमती",
    "meaningEn": "",
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
    "id": 1115,
    "word": "variation",
    "pos": "n",
    "pronunciation": "वेअरिएशन",
    "meaningHi": "भिन्नता, परिवर्तन की मात्ा",
    "meaningEn": "",
    "examples": [
      {
        "en": "The uniform must be the same for all, and no varia",
        "hi": "tions are allowed. वर्दीी सभी के लिए एकजैसी होनी चाहिए और इसमें किसी भिन्नता की अनुमति नहीं है।"
      }
    ]
  },
  {
    "id": 1116,
    "word": "varied",
    "pos": "adj",
    "pronunciation": "वेअरिड",
    "meaningHi": "अलग-अलग तरह के",
    "meaningEn": "",
    "examples": [
      {
        "en": "varied opinion",
        "hi": "अलग-अलग तरह की राय"
      }
    ]
  },
  {
    "id": 1117,
    "word": "variety",
    "pos": "n",
    "pronunciation": "वराइअटि",
    "meaningHi": "विविधता",
    "meaningEn": "",
    "examples": [
      {
        "en": "A variety of clothes are available in this shop",
        "hi": "इस दूकान में वस्त्रोंस्त्रों की विविधता उपलब्ध है।"
      }
    ]
  },
  {
    "id": 1118,
    "word": "various",
    "pos": "adj",
    "pronunciation": "वेअरिअस",
    "meaningHi": "विभिन्न, विविध",
    "meaningEn": "",
    "examples": [
      {
        "en": "There are various paths that lead to God",
        "hi": "विभिन्न रास्े हैं जो ईश्वर की ओर ले जाते हैं।"
      }
    ]
  },
  {
    "id": 1119,
    "word": "vehicle",
    "pos": "n",
    "pronunciation": "वीअकल",
    "meaningHi": "वाहन, गाड़ी",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1120,
    "word": "victim",
    "pos": "n",
    "pronunciation": "विक्टिम",
    "meaningHi": "पीड़ित, शिकार",
    "meaningEn": "",
    "examples": [
      {
        "en": "crime victim",
        "hi": "अपराध का शिकार"
      }
    ]
  },
  {
    "id": 1121,
    "word": "visible",
    "pos": "adj",
    "pronunciation": "विजि़ब्ल",
    "meaningHi": "दृष्टिगोचर, जो दिखाई पड़ता हो",
    "meaningEn": "",
    "examples": [
      {
        "en": "The visible side of the moon",
        "hi": "चाँद का वह हिस्ा जो दिखाई पड़ता है।"
      }
    ]
  },
  {
    "id": 1122,
    "word": "vital",
    "pos": "adj",
    "pronunciation": "वाइट्ल",
    "meaningHi": "अतिमहत्त्वपूर्ण",
    "meaningEn": "",
    "examples": [
      {
        "en": "oxygen is vital for life",
        "hi": "ऑक्सीजन जीवन के लिए अतिमहत्त्वपूर्ण है।"
      }
    ]
  },
  {
    "id": 1123,
    "word": "volume",
    "pos": "n",
    "pronunciation": "वॉल्ूम",
    "meaningHi": "आयतन, मात्ा 2 कई खंडों वाली पुस्तक का कोई एक खंड",
    "meaningEn": "",
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
    "id": 1124,
    "word": "wander",
    "pos": "v",
    "pronunciation": "वॉन्डर",
    "meaningHi": "बिना उद्ेश्य घूमना",
    "meaningEn": "",
    "examples": [
      {
        "en": "That poet was often seen wandering the streets",
        "hi": "उस कवि को अकसर सडकों पर निरुद्देश्य घूूमते देखा जाता था।"
      }
    ]
  },
  {
    "id": 1125,
    "word": "waste",
    "pos": "n / v",
    "pronunciation": "वेस्ट",
    "meaningHi": "कचड़ा, बचाखुचा बिना काम का पदार्थ W 94 अंंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ | बर्बाद करना",
    "meaningEn": "",
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
    "id": 1126,
    "word": "weather",
    "pos": "n",
    "pronunciation": "मौसम",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1127,
    "word": "weight",
    "pos": "n",
    "pronunciation": "वेट",
    "meaningHi": "वजन, भार वेल्कम स्ागत करना वेल्कम स्ागतयोग्य, हर्षप्रद ! वेल्कम आपका स्ागत!",
    "meaningEn": "",
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
    "id": 1128,
    "word": "wet",
    "pos": "adj",
    "pronunciation": "वेट",
    "meaningHi": "गीला",
    "meaningEn": "",
    "examples": [
      {
        "en": "wet clothes",
        "hi": "गीले कपड़े"
      }
    ]
  },
  {
    "id": 1129,
    "word": "wheel",
    "pos": "n",
    "pronunciation": "वील",
    "meaningHi": "पहिया",
    "meaningEn": "",
    "examples": [
      {
        "en": "wheels of a car",
        "hi": "एक कार के पहिए"
      }
    ]
  },
  {
    "id": 1130,
    "word": "whisper",
    "pos": "n / v",
    "pronunciation": "विस्पर",
    "meaningHi": "फुसफुसाहट कान में धीरे-से कुछ बोलने की क्रिया | फुसफुसाना बहुत धीमे से बोलना",
    "meaningEn": "",
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
    "id": 1131,
    "word": "winner",
    "pos": "n",
    "pronunciation": "विजेता",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1132,
    "word": "winter",
    "pos": "n",
    "pronunciation": "विंंटर",
    "meaningHi": "जाड़े का मौसम, शरद ऋतु",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1133,
    "word": "yellow",
    "pos": "n",
    "pronunciation": "येलो",
    "meaningHi": "पीला yes येस हाँ",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1134,
    "word": "zebra",
    "pos": "n",
    "pronunciation": "ज़ेब्ा",
    "meaningHi": "जेबरा ज़िरो शून्य",
    "meaningEn": "",
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
    "id": 1135,
    "word": "zoo",
    "pos": "n",
    "pronunciation": "ज़ू",
    "meaningHi": "चिड़ियाघर",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1136,
    "word": "alert",
    "pos": "adj",
    "pronunciation": "अलर्ट",
    "meaningHi": "सतर्क",
    "meaningEn": "watchful; a warning",
    "examples": [
      {
        "en": "Always remain alert",
        "hi": "सदा सतर्क रहो।"
      }
    ]
  },
  {
    "id": 1137,
    "word": "abort",
    "pos": "v",
    "pronunciation": "अबॉट",
    "meaningHi": "गर्भ में स्थित बच्े के भ्ूण को गिरा कर नष्ट कर देना 2 किसी योजना या कार्य को शुरू होने या पूरा होने से पहले समाप्त कर देना।",
    "meaningEn": "",
    "examples": [
      {
        "en": "The plan has been aborted",
        "hi": "योजना को बीच में ही त्ाग दिया गया है।"
      }
    ]
  },
  {
    "id": 1138,
    "word": "about adj adv",
    "pos": "prep",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1139,
    "word": "above adv",
    "pos": "prep",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1140,
    "word": "abroad",
    "pos": "adv",
    "pronunciation": "अब्ॉड",
    "meaningHi": "विदेश में, देश के बाहर ऐब्सलूट्ली पूरी तरह, बिलकुल",
    "meaningEn": "",
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
    "id": 1141,
    "word": "absolutely",
    "pos": "adv",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1142,
    "word": "acceptable",
    "pos": "adj",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1143,
    "word": "accidental",
    "pos": "adj",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1144,
    "word": "accidentally",
    "pos": "adv",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "by chance; unintentionally",
    "examples": []
  },
  {
    "id": 1145,
    "word": "accommodation",
    "pos": "n",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "a place to live or stay",
    "examples": []
  },
  {
    "id": 1146,
    "word": "account",
    "pos": "n",
    "pronunciation": "अकाउंट",
    "meaningHi": "हिसाब-किताब अकाउंट हिसाब-किताब देना, जवाब देना",
    "meaningEn": "",
    "examples": [
      {
        "en": "Everyone has to account for all his deeds",
        "hi": "हरएक को अपने सभी कर्मों का हिसाब-किताब देना पड़ता है।"
      }
    ]
  },
  {
    "id": 1147,
    "word": "ache",
    "pos": "n",
    "pronunciation": "एक",
    "meaningHi": "ऐसा दर्द जो देर तक रहे",
    "meaningEn": "",
    "examples": [
      {
        "en": "backache",
        "hi": "पीठ का दर्द"
      }
    ]
  },
  {
    "id": 1148,
    "word": "achievement",
    "pos": "n",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "something accomplished",
    "examples": []
  },
  {
    "id": 1149,
    "word": "across adv",
    "pos": "prep",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1150,
    "word": "actor",
    "pos": "n",
    "pronunciation": "ऐक्टर",
    "meaningHi": "अभिनेता",
    "meaningEn": "",
    "examples": [
      {
        "en": "a great actor",
        "hi": "एक महान अभिनेता"
      }
    ]
  },
  {
    "id": 1151,
    "word": "actress",
    "pos": "n",
    "pronunciation": "ऐक्ट्ेस",
    "meaningHi": "अभिनेत्ी",
    "meaningEn": "",
    "examples": [
      {
        "en": "a great actress",
        "hi": "एक महान अभिनेत्री"
      }
    ]
  },
  {
    "id": 1152,
    "word": "addition",
    "pos": "n",
    "pronunciation": "ऐडिशन",
    "meaningHi": "जोड़ in to इन ऐडिशन टु इसके अलावा, इसके साथ-साथ",
    "meaningEn": "something added; the act of adding",
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
    "id": 1153,
    "word": "adjective",
    "pos": "n",
    "pronunciation": "ऐजक्टिव",
    "meaningHi": "विशेषण 10 11 अंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ",
    "meaningEn": "a word describing a noun",
    "examples": [
      {
        "en": "'Good' is an adjective",
        "hi": "'अच्ा' एक विशेषण है।"
      }
    ]
  },
  {
    "id": 1154,
    "word": "admiration",
    "pos": "n",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1155,
    "word": "adult",
    "pos": "adj n",
    "pronunciation": "ऐडल्ट",
    "meaningHi": "बालिग ; जो अब बच्ा नहीं रहा, बड़ा हो गया हो अड्वान्स्ट 1 उन्नत 2 आगे बढ़ा हुआ",
    "meaningEn": "a fully grown person",
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
    "id": 1156,
    "word": "advanced",
    "pos": "adj",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1157,
    "word": "aerobics",
    "pos": "n",
    "pronunciation": "एअरोबिक्स",
    "meaningHi": "संगीत की लय पर किया जाने वाला शारीरिक व्यायाम",
    "meaningEn": "physical fitness exercises",
    "examples": [
      {
        "en": "I am practising aerobics",
        "hi": "मैं एअरोबिक्स का अभ्ास कर रही हँ।"
      }
    ]
  },
  {
    "id": 1158,
    "word": "afford",
    "pos": "v",
    "pronunciation": "अफ़ोड",
    "meaningHi": "खर्च वहन करना, सामर्थ्य रखना",
    "meaningEn": "to have enough money for",
    "examples": [
      {
        "en": "We can't afford a car",
        "hi": "हम कार का खर्च वहन नहीं कर सकते।"
      }
    ]
  },
  {
    "id": 1159,
    "word": "afterwards",
    "pos": "adv",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1160,
    "word": "against",
    "pos": "prep",
    "pronunciation": "अगेन्स्ट",
    "meaningHi": "विरुद्ध, खिलाफ 2 का सहारा ले कर 1 Everybody in the class was against him - क्ास में सभी उसके खिलाफ थे। 2 He stood leaning against the wall - वह दीवार के सहारे खड़ा था।",
    "meaningEn": "in opposition to; touching",
    "examples": [
      {
        "en": "Everybody in the class was against him",
        "hi": "क्ास में सभी उसके खिलाफ थे। 2 He stood leaning against the wall - वह दीवार के सहारे खड़ा था।"
      }
    ]
  },
  {
    "id": 1161,
    "word": "aggressive",
    "pos": "adj",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1162,
    "word": "ago",
    "pos": "adv",
    "pronunciation": "",
    "meaningHi": "पहले, पूर्व में",
    "meaningEn": "in the past; before now",
    "examples": [
      {
        "en": "A few moments ago he was here",
        "hi": "कुछ क्षण पहले वह यहीं था।"
      }
    ]
  },
  {
    "id": 1163,
    "word": "agriculture",
    "pos": "n",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1164,
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
    "id": 1165,
    "word": "airs",
    "pos": "adv adj",
    "pronunciation": "डाउन्सेअज़",
    "meaningHi": "सीढ़ियों से नीचे, निचली मंजिल पर",
    "meaningEn": "",
    "examples": [
      {
        "en": "My wife is downstairs in the kitchen",
        "hi": "मेरी पत्ी नीचे रसोई में है।"
      }
    ]
  },
  {
    "id": 1166,
    "word": "all n adj adv",
    "pos": "pron",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1167,
    "word": "although",
    "pos": "conj",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1168,
    "word": "amongst)",
    "pos": "prep",
    "pronunciation": "अमंंग",
    "meaningHi": "दो से अधिक लोगों या चीजों के बीच में",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1169,
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
    "id": 1170,
    "word": "amused",
    "pos": "adj",
    "pronunciation": "अम्ूज़्ड",
    "meaningHi": "व्यंग्यपूर्ण तरीके से आनंदित 2 हँसी आने-जैसा",
    "meaningEn": "finding something funny",
    "examples": []
  },
  {
    "id": 1171,
    "word": "amusing",
    "pos": "adj",
    "pronunciation": "अम्ूज़िंग",
    "meaningHi": "मनोरंजक, उपहासास्पद an a ऐन, अन एक यह वाउअल साउंड्स के पहले a के बदले आता है",
    "meaningEn": "funny; entertaining",
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
    "id": 1172,
    "word": "analyse",
    "pos": "v",
    "pronunciation": "ऐनलाइज़",
    "meaningHi": "विश्ेषण करना; किसी वस्तु या विचार के अंगों को अलग-अलग कर समझना 14 15 अंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ",
    "meaningEn": "to examine in detail",
    "examples": [
      {
        "en": "An- layse the causes of war",
        "hi": "युद्ध के कारणों का विश्ेषण करो।"
      }
    ]
  },
  {
    "id": 1173,
    "word": "analysis",
    "pos": "n",
    "pronunciation": "अनैलसिस",
    "meaningHi": "विश्ेषण",
    "meaningEn": "detailed examination",
    "examples": [
      {
        "en": "analysis of the reasons of price rise",
        "hi": "दाम बढ़ने के कारणों का विश्ेषण"
      }
    ]
  },
  {
    "id": 1174,
    "word": "another det",
    "pos": "pron",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1175,
    "word": "any adj det",
    "pos": "pron",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1176,
    "word": "anybody",
    "pos": "pron",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1177,
    "word": "anybody)",
    "pos": "pron",
    "pronunciation": "एनिवन",
    "meaningHi": "कोई भी व्यक्ति एनिथिंग कोई भी वस्तु अंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ",
    "meaningEn": "",
    "examples": [
      {
        "en": "Anyone can do it",
        "hi": "कोई भी व्यक्ति यह कर सकता है।"
      },
      {
        "en": "I am hungry, give me anything to eat",
        "hi": "मैं भूूखा हँ, मुझे कुछभी खाने को दो।"
      }
    ]
  },
  {
    "id": 1178,
    "word": "anything",
    "pos": "pron",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1179,
    "word": "anywhere",
    "pos": "adv",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1180,
    "word": "appearance",
    "pos": "n",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1181,
    "word": "approximately",
    "pos": "adv",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "close to; nearly",
    "examples": []
  },
  {
    "id": 1182,
    "word": "April",
    "pos": "n",
    "pronunciation": "एप्रिल",
    "meaningHi": "अप्रैल का महीना",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1183,
    "word": "Arab",
    "pos": "n adj",
    "pronunciation": "ऐरब",
    "meaningHi": "अरब देश का वासी",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1184,
    "word": "area",
    "pos": "n",
    "pronunciation": "एरिया,",
    "meaningHi": "एअरिअ क्षेत्र, इलाका",
    "meaningEn": "",
    "examples": [
      {
        "en": "a clean area",
        "hi": "एक साफ-सुथरा इलाका"
      }
    ]
  },
  {
    "id": 1185,
    "word": "around adv",
    "pos": "prep",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1186,
    "word": "arrangement",
    "pos": "n",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "organized setup",
    "examples": []
  },
  {
    "id": 1187,
    "word": "at",
    "pos": "prep",
    "pronunciation": "ऐट, अट",
    "meaningHi": "पर, के पास 18 19 अंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ ATM एटीएम मशीन एक ऐसी मशीन जिसमें एक विशेष प्ास्टिक कार्ड डालने पर धारक के बैंक- -खाते से पैसे",
    "meaningEn": "",
    "examples": [
      {
        "en": "The letter is lying at the door",
        "hi": "चिट्ी दरवाजे के पास पड़ी है।"
      }
    ]
  },
  {
    "id": 1188,
    "word": "athletics",
    "pos": "n",
    "pronunciation": "ऐथ्लेटिक्स",
    "meaningHi": "दौड़ने-कूदने आदि का खेल",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1189,
    "word": "ATM card",
    "pos": "n",
    "pronunciation": "काड",
    "meaningHi": "एटीएम मशीन से पैसे की निकासी के लिए बना प्ास्टिक कार्ड",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1190,
    "word": "ATM machine",
    "pos": "n",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1191,
    "word": "attach",
    "pos": "v",
    "pronunciation": "अटैच",
    "meaningHi": "जोड़ना",
    "meaningEn": "",
    "examples": [
      {
        "en": "The wagon was attached to the engine",
        "hi": "डब्ा इंजिन में जोड़ा गया।"
      }
    ]
  },
  {
    "id": 1192,
    "word": "attractive",
    "pos": "adj",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1193,
    "word": "audit",
    "pos": "n v",
    "pronunciation": "अॉडिट",
    "meaningHi": "लेखा-परीक्षण आमदनी और खर्च तथा हानि- -लाभ का हिसाब-किताब; लेखा-परीक्षण करना",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1194,
    "word": "August",
    "pos": "n",
    "pronunciation": "ओगस्ट",
    "meaningHi": "अगस्त का महीना अंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1195,
    "word": "autumn",
    "pos": "n",
    "pronunciation": "ओटम",
    "meaningHi": "पतझड़ का मौसम",
    "meaningEn": "season between summer and winter",
    "examples": []
  },
  {
    "id": 1196,
    "word": "away",
    "pos": "adv",
    "pronunciation": "अवे",
    "meaningHi": "दूर, दूरस्थ 20 21 अंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ",
    "meaningEn": "",
    "examples": [
      {
        "en": "Go away",
        "hi": "दूर हट जाओ।"
      }
    ]
  },
  {
    "id": 1197,
    "word": "baby",
    "pos": "n",
    "pronunciation": "बेबि",
    "meaningHi": "शिशु या बहुत छोटा बच्ा",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1198,
    "word": "back",
    "pos": "adv adj / n",
    "pronunciation": "बैक",
    "meaningHi": "पीछे की ओर ; | 1 पीठ 2 पीछे | 1 पीछे हटना/करना 2 समर्थन करना 1",
    "meaningEn": "",
    "examples": [
      {
        "en": "I stepped back",
        "hi": "मैंने कदम पीछे रखा।"
      },
      {
        "en": "back row",
        "hi": "पिछली कतार"
      }
    ]
  },
  {
    "id": 1199,
    "word": "backward",
    "pos": "adv",
    "pronunciation": "बैकवड",
    "meaningHi": "पीछे की ओर 2 पिछड़ा हुआ बैकवड्ज़ पीछे {की ओर}",
    "meaningEn": "toward the back",
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
    "id": 1200,
    "word": "backward adv",
    "pos": "adj",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1201,
    "word": "backwards",
    "pos": "adv",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1202,
    "word": "bad breath",
    "pos": "n",
    "pronunciation": "बैड ब्ेथ",
    "meaningHi": "दुर्गंधपूर्ण साँस",
    "meaningEn": "",
    "examples": [
      {
        "en": "Brushing the teeth twice or thrice a day can prevent bad breath",
        "hi": "प्रतिदिन दो या तीन बार ब्रश करने से दुर्गंधपूर्ण साँस रुक सकती है।"
      }
    ]
  },
  {
    "id": 1203,
    "word": "bake",
    "pos": "v",
    "pronunciation": "बेक",
    "meaningHi": "अवन में पकाना या सेंकना",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1204,
    "word": "balance sheet",
    "pos": "n",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1205,
    "word": "ball",
    "pos": "n",
    "pronunciation": "बौल",
    "meaningHi": "गेंद",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1206,
    "word": "band",
    "pos": "n",
    "pronunciation": "बैंड",
    "meaningHi": "मंडली 2 छल्ा",
    "meaningEn": "",
    "examples": [
      {
        "en": "music band",
        "hi": "संगीत मंडली"
      }
    ]
  },
  {
    "id": 1207,
    "word": "bang",
    "pos": "n / v",
    "pronunciation": "बैंग",
    "meaningHi": "धड़ाके की आवाज़ | पीटना, टकरा जाना",
    "meaningEn": "",
    "examples": [
      {
        "en": "The ceiling fan fell with a bang",
        "hi": "सीलिंग फैन धमाके की आवाज के साथ गिरा।"
      },
      {
        "en": "She started banging on the door",
        "hi": "उसने दरवाजा पीटना शुरू किया।"
      }
    ]
  },
  {
    "id": 1208,
    "word": "bank",
    "pos": "n / v",
    "pronunciation": "बैंक",
    "meaningHi": "किनारा, तट 2 बैंक जहाँ अपने खाते में पैसे सुरक्षित रखे जाते हैं | निर्भर करना",
    "meaningEn": "",
    "examples": [
      {
        "en": "riverbank",
        "hi": "नदी-तट"
      }
    ]
  },
  {
    "id": 1209,
    "word": "barber",
    "pos": "n",
    "pronunciation": "बार्बर",
    "meaningHi": "नाई या हज्जाम",
    "meaningEn": "one who cuts hair",
    "examples": []
  },
  {
    "id": 1210,
    "word": "bark",
    "pos": "n / v",
    "pronunciation": "बार्क",
    "meaningHi": "पेड़ की छाल | भौंकना",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1211,
    "word": "base",
    "pos": "n / v",
    "pronunciation": "बेस, बेइस",
    "meaningHi": "आधार, नींव | उच्ारण हिंंदी में अर्थ",
    "meaningEn": "",
    "examples": [
      {
        "en": "Base must be strong",
        "hi": "नींव जरूर मजबूूत होनी चाहिए।"
      }
    ]
  },
  {
    "id": 1212,
    "word": "bat",
    "pos": "n",
    "pronunciation": "बैट",
    "meaningHi": ". चमगादड़ 2 क्रिकेट या बेसबॉल का बल्ा",
    "meaningEn": "stick for hitting; flying animal",
    "examples": []
  },
  {
    "id": 1213,
    "word": "bath",
    "pos": "n",
    "pronunciation": "बाथ",
    "meaningHi": "स्ान",
    "meaningEn": "",
    "examples": [
      {
        "en": "He takes bath daily",
        "hi": "वह रोज नहाता है।"
      }
    ]
  },
  {
    "id": 1214,
    "word": "battery",
    "pos": "n",
    "pronunciation": "बैटरी",
    "meaningHi": "बैटरी बिजली को जमा करने और बिजली की धारा उत्पन्न करने वाला यंत्र।",
    "meaningEn": "device storing energy",
    "examples": []
  },
  {
    "id": 1215,
    "word": "bear",
    "pos": "v",
    "pronunciation": "बेअ",
    "meaningHi": "सहन करना, बर्दाश्त करना",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1216,
    "word": "beat",
    "pos": "n / v",
    "pronunciation": "बीट",
    "meaningHi": "धड़कन | 1 पीटना 2 दिल का धड़कना",
    "meaningEn": "",
    "examples": [
      {
        "en": "heartbeat",
        "hi": "दिल की धड़कन"
      }
    ]
  },
  {
    "id": 1217,
    "word": "behind adv",
    "pos": "prep n",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1218,
    "word": "bend",
    "pos": "n / v",
    "pronunciation": "बेंड",
    "meaningHi": "मोड़ 24 25 अंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ | झुकना, झुकाना, मोड़ना",
    "meaningEn": "",
    "examples": [
      {
        "en": "There is a sharp bend in the road ahead",
        "hi": "आगे सड़क में एक तीव्र मोड़ है।"
      },
      {
        "en": "He had to bend to pick up the pen",
        "hi": "उसे कलम उठाने के लिए झुकना पड़ा।"
      }
    ]
  },
  {
    "id": 1219,
    "word": "beneath prep",
    "pos": "adv",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1220,
    "word": "best",
    "pos": "adj adv",
    "pronunciation": "बेस्ट",
    "meaningHi": "सबसे उत्तम, सबसे अच्ा",
    "meaningEn": "",
    "examples": [
      {
        "en": "She is the best in the class",
        "hi": "वह कक्षा में सबसे अच्छी है।"
      }
    ]
  },
  {
    "id": 1221,
    "word": "between prep",
    "pos": "adv",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1222,
    "word": "bill",
    "pos": "n",
    "pronunciation": "बिल",
    "meaningHi": "रसीद, पुरजा, लेखा 2 कानून का प्रारूप जिसे संसद या विधान-सभाओं में पेश किया जाता है। बहुमत से पास हो जाने पर यह कानून बन जाता है।",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1223,
    "word": "birthday",
    "pos": "n",
    "pronunciation": "बर्थडे",
    "meaningHi": "जन्मदिन",
    "meaningEn": "anniversary of birth",
    "examples": []
  },
  {
    "id": 1224,
    "word": "bite",
    "pos": "n / v",
    "pronunciation": "बाइट",
    "meaningHi": "काटने से बना घाव 2 भोजन का एक टुकड़ा | दाँत से काटना",
    "meaningEn": "",
    "examples": [
      {
        "en": "dog bite",
        "hi": "कुत्ते के काटने से बना घाव"
      },
      {
        "en": "Give me a bite too",
        "hi": "मुझे भी एक दुकड़ा दो।"
      }
    ]
  },
  {
    "id": 1225,
    "word": "blink",
    "pos": "v",
    "pronunciation": "ब्लंक",
    "meaningHi": "आँखें झपकाना या मीचना",
    "meaningEn": "to close and open eyes quickly",
    "examples": []
  },
  {
    "id": 1226,
    "word": "blow",
    "pos": "n / v",
    "pronunciation": "ब्ो,",
    "meaningHi": "ब्लउ घूँसा, प्रहार, आघात | ब्लउ 1 बहना हवा का 2 फूँकना",
    "meaningEn": "",
    "examples": [
      {
        "en": "a big blow to our efforts",
        "hi": "हमारे प्रयासों पर एक बड़ा आधात"
      },
      {
        "en": "blow the whistle",
        "hi": "सीटी फूूँक कर बजाना"
      }
    ]
  },
  {
    "id": 1227,
    "word": "blue",
    "pos": "adj",
    "pronunciation": "ब्ू",
    "meaningHi": "नीला",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1228,
    "word": "blur",
    "pos": "v",
    "pronunciation": "ब्लर",
    "meaningHi": "धुंधला बना देना",
    "meaningEn": "",
    "examples": [
      {
        "en": "The mist blurred our vision",
        "hi": "कुहासे ने हमारी दृष्टि को धुंधला कर दिया।"
      }
    ]
  },
  {
    "id": 1229,
    "word": "boardgazing",
    "pos": "v",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "the practice of gazing meditation",
    "examples": []
  },
  {
    "id": 1230,
    "word": "boat",
    "pos": "n",
    "pronunciation": "बोट",
    "meaningHi": "नाव",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1231,
    "word": "body",
    "pos": "n / pron",
    "pronunciation": "बॉडी",
    "meaningHi": "शरीर | प्रत्ेक व्यक्ति, सभी लोग",
    "meaningEn": "",
    "examples": [
      {
        "en": "Everybody is not bad",
        "hi": "हर आदमी बुरा नहीं होता।"
      }
    ]
  },
  {
    "id": 1232,
    "word": "boil",
    "pos": "v",
    "pronunciation": "बोइल",
    "meaningHi": "उबलना, उबालना",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1233,
    "word": "book",
    "pos": "n / v",
    "pronunciation": "बुक",
    "meaningHi": "किताब | 1 टिकट या कमरा आदि बुक करना 2 दंडित करना",
    "meaningEn": "",
    "examples": [
      {
        "en": "Please book a room in the hotel for me",
        "hi": "कृपया होटल में मेरे लिए एक कमरा बुक करो।"
      }
    ]
  },
  {
    "id": 1234,
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
    "id": 1235,
    "word": "born",
    "pos": "v",
    "pronunciation": "बोन",
    "meaningHi": "जन्म होना, जन्म लेना",
    "meaningEn": "",
    "examples": [
      {
        "en": "A baby girl was born",
        "hi": "एक लड़की पैदा हुई।"
      }
    ]
  },
  {
    "id": 1236,
    "word": "both",
    "pos": "det pron",
    "pronunciation": "बोथ, बउथ़",
    "meaningHi": "दोनों",
    "meaningEn": "",
    "examples": [
      {
        "en": "Both of my brothers are rich",
        "hi": "मेरे दोनों भाई अमीर हैं।"
      }
    ]
  },
  {
    "id": 1237,
    "word": "brainstorming",
    "pos": "n",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "generating ideas in a group",
    "examples": []
  },
  {
    "id": 1238,
    "word": "brown",
    "pos": "adj",
    "pronunciation": "ब्ाउन",
    "meaningHi": "भूरा रंग का",
    "meaningEn": "a dark warm color",
    "examples": []
  },
  {
    "id": 1239,
    "word": "budget",
    "pos": "n",
    "pronunciation": "बजिट",
    "meaningHi": "आने वाले खर्च का अनुमानित लेखा-जोखा",
    "meaningEn": "a financial plan",
    "examples": [
      {
        "en": "The government presents its annual budget in the parliament",
        "hi": "सरकार अपना वार्षिक बजट संसद में प्रस्ुत करती है।"
      }
    ]
  },
  {
    "id": 1240,
    "word": "buffalo",
    "pos": "n",
    "pronunciation": "बफ़लो",
    "meaningHi": "भैंस 30 31 अंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1241,
    "word": "bunch",
    "pos": "n",
    "pronunciation": "बंच",
    "meaningHi": "समूह, गुच्ा",
    "meaningEn": "a group together",
    "examples": [
      {
        "en": "a bunch of flowers",
        "hi": "फूूलों का एक गुच्ा"
      }
    ]
  },
  {
    "id": 1242,
    "word": "burnt",
    "pos": "adj",
    "pronunciation": "बर्न्ट",
    "meaningHi": "जला हुआ",
    "meaningEn": "",
    "examples": [
      {
        "en": "burnt clothes",
        "hi": "जले हुए कपड़े"
      }
    ]
  },
  {
    "id": 1243,
    "word": "bury",
    "pos": "v",
    "pronunciation": "बरी",
    "meaningHi": "गाड़ना, दफनाना",
    "meaningEn": "",
    "examples": [
      {
        "en": "The Christians bury their dead",
        "hi": "ईसाई अपने मृतकों को जमीन में दफन कर देते हैं।"
      }
    ]
  },
  {
    "id": 1244,
    "word": "bush",
    "pos": "n",
    "pronunciation": "बुश",
    "meaningHi": "झाड़ी",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1245,
    "word": "busy",
    "pos": "adj",
    "pronunciation": "बिज़ी",
    "meaningHi": "कार्यरत, व्यस्त",
    "meaningEn": "",
    "examples": [
      {
        "en": "He leads a busy life",
        "hi": "वह एक व्यस्त जीवन जीता है।"
      }
    ]
  },
  {
    "id": 1246,
    "word": "cabin",
    "pos": "n",
    "pronunciation": "कैबिन",
    "meaningHi": "छोटा कक्ष",
    "meaningEn": "a small house",
    "examples": []
  },
  {
    "id": 1247,
    "word": "calculative",
    "pos": "adj",
    "pronunciation": "कैल्कुलटिव",
    "meaningHi": "अपने फायदे-नुकसान की गिनती करके हर काम करने वाला स्वार्थी व्यक्ति",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1248,
    "word": "call",
    "pos": "n / v",
    "pronunciation": "कॉल",
    "meaningHi": "बुलावा 2 फोन करने या फोन पर बात करने की क्रिया 1",
    "meaningEn": "",
    "examples": [
      {
        "en": "Please call the nurse",
        "hi": "कृपया नर्स को बुलाएं।"
      },
      {
        "en": "She called me today",
        "hi": "उसने आज मुझे फोन किया।"
      }
    ]
  },
  {
    "id": 1249,
    "word": "calories",
    "pos": "n",
    "pronunciation": "कैलरीस",
    "meaningHi": "भोजन से प्राप्त ऊर्जा की इकाई",
    "meaningEn": "",
    "examples": [
      {
        "en": "Don't consume too many calories",
        "hi": "अधिक कैलरीस ग्रहण नहीं किया करो।"
      }
    ]
  },
  {
    "id": 1250,
    "word": "cancer",
    "pos": "n",
    "pronunciation": "कैंसर",
    "meaningHi": "कर्क रोग एक गंभीर बीमारी जिसमें शरीर के किसी भाग की कोशिकाओं की संख्ा असामान्य रूप से बढ़ने लगती है।",
    "meaningEn": "a serious disease",
    "examples": []
  },
  {
    "id": 1251,
    "word": "cap",
    "pos": "n",
    "pronunciation": "कैप",
    "meaningHi": "टोपी c 32 33 अंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1252,
    "word": "capitalism",
    "pos": "n",
    "pronunciation": "कैपिटलिज़म",
    "meaningHi": "पूँजीवाद वह सिद्धांद्धांत जो यह मानता है कि बाजार की शक्तियों पर कोई सरकारी नियंत्रण नहीं होना चाहिए, व्यापार करने और व्यक्तिगत धन-संपत्ति अर्जित",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1253,
    "word": "carbo-hydrate",
    "pos": "n",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1254,
    "word": "card",
    "pos": "n",
    "pronunciation": "काड, कार्ड",
    "meaningHi": "गत्ता, थोड़े मजबूत कागज का टुकड़ा 2 ताश का पत्ता | कार्ड विजिटिंग-कार्ड जिसपर नाम, पदनाम, पता, फोननम्बर आदि लिखे रहते हैं।",
    "meaningEn": "",
    "examples": [
      {
        "en": "He is playing cards",
        "hi": "वह ताश खेल रहा है।"
      }
    ]
  },
  {
    "id": 1255,
    "word": "care",
    "pos": "n / v",
    "pronunciation": "1 सावधानी  2 देखभाल",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1256,
    "word": "case",
    "pos": "n",
    "pronunciation": "केस",
    "meaningHi": "मामला 2 विशेष डब्ा 3 मुकदमा",
    "meaningEn": "",
    "examples": [
      {
        "en": "Your case is different",
        "hi": "तुम्ारा मामला अलग है।"
      },
      {
        "en": "A case has been filed against him",
        "hi": "उसके खिलाफ एक मुकदमा दर्ज किया गया है।"
      }
    ]
  },
  {
    "id": 1257,
    "word": "cataract",
    "pos": "n",
    "pronunciation": "कैटरैक्ट",
    "meaningHi": "मोतियाबिंद आँखों की एक बीमारी जिसमें कम दिखने लगता है।",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1258,
    "word": "cate",
    "pos": "v",
    "pronunciation": "कम्ूनिकेट",
    "meaningHi": "सूचित करना, संप्रेषित करना",
    "meaningEn": "",
    "examples": [
      {
        "en": "Communicate a bad news gradually and gently",
        "hi": "एक बुरे समाचार को क्रमशः और मृदुता से सूूचित करो।"
      }
    ]
  },
  {
    "id": 1259,
    "word": "centimetre",
    "pos": "n",
    "pronunciation": "सेन्टिमीटर",
    "meaningHi": "मीटर का सौवाँ भाग",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1260,
    "word": "central",
    "pos": "adj",
    "pronunciation": "सेन्ट्रल",
    "meaningHi": "केंद्रीय 2 मुख्य",
    "meaningEn": "in the centre",
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
    "id": 1261,
    "word": "changemakers",
    "pos": "n",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "people who bring positive change",
    "examples": []
  },
  {
    "id": 1262,
    "word": "characteristic",
    "pos": "n",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "a feature; quality",
    "examples": []
  },
  {
    "id": 1263,
    "word": "chat",
    "pos": "n / v",
    "pronunciation": "चैट",
    "meaningHi": "बातचीत, गपशप | गपशप करना",
    "meaningEn": "",
    "examples": [
      {
        "en": "Chatting with friends wastes a lot of time of students",
        "hi": "गपशप विद्ार्थियों का काफी समय नष्ट करती है।"
      }
    ]
  },
  {
    "id": 1264,
    "word": "cheek",
    "pos": "n",
    "pronunciation": "चीक",
    "meaningHi": "गाल 36 37 अंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1265,
    "word": "chin",
    "pos": "n",
    "pronunciation": "चिन",
    "meaningHi": "ठुड्ी चेहरे के नीचे का नुकीला भाग",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1266,
    "word": "Christianity",
    "pos": "n",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1267,
    "word": "cigarette",
    "pos": "n",
    "pronunciation": "सिगरेट",
    "meaningHi": "सिगरेट",
    "meaningEn": "",
    "examples": [
      {
        "en": "Cigarette may cause cancer",
        "hi": "सिगरेट कैंसर का कारण बन सकता है।"
      }
    ]
  },
  {
    "id": 1268,
    "word": "cinema",
    "pos": "n",
    "pronunciation": "सिनमा",
    "meaningHi": "सिनेमा",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1269,
    "word": "circumstance",
    "pos": "n",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "situation; condition",
    "examples": []
  },
  {
    "id": 1270,
    "word": "city",
    "pos": "n",
    "pronunciation": "सिटि",
    "meaningHi": "शहर",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1271,
    "word": "classic",
    "pos": "n / adj",
    "pronunciation": "क्ैसिक",
    "meaningHi": "अत्ंत बढ़िया या याद किया जाने-योग्य श्ेण्य ग्ंथ | 1 उत्कृष्ट 2 प्रातिनिधिक 1",
    "meaningEn": "of lasting quality",
    "examples": [
      {
        "en": "The Ramcharitmanas is a literary classic",
        "hi": "रामचरितमानस एक न भूूलने-योग्य साहित्यिक कृति है।"
      }
    ]
  },
  {
    "id": 1272,
    "word": "clearly",
    "pos": "adv",
    "pronunciation": "",
    "meaningHi": "क्लिअलि स्पष्ट रूप से, साफ तौर से",
    "meaningEn": "obviously",
    "examples": [
      {
        "en": "clearly visible",
        "hi": "साफ तौर पर दिखने वाला"
      }
    ]
  },
  {
    "id": 1273,
    "word": "clerk",
    "pos": "n",
    "pronunciation": "क्ाक",
    "meaningHi": "लिपिक, क्लर्क",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1274,
    "word": "closed",
    "pos": "adj",
    "pronunciation": "क्ोज़्ड",
    "meaningHi": "बंद",
    "meaningEn": "",
    "examples": [
      {
        "en": "a closed mind",
        "hi": "एक बंद दिमाग जिसमें नए विचार प्रवेश नहीं करते हों।"
      }
    ]
  },
  {
    "id": 1275,
    "word": "closely",
    "pos": "adv",
    "pronunciation": "देखना",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1276,
    "word": "closet",
    "pos": "n",
    "pronunciation": "क्ोज़िट",
    "meaningHi": "कमरे में लगी बड़ी अलमारी",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1277,
    "word": "club",
    "pos": "n",
    "pronunciation": "क्लब",
    "meaningHi": "सभा, क्लब 2 गदा",
    "meaningEn": "",
    "examples": [
      {
        "en": "Club was the favourite weapon of Bhim",
        "hi": "गदा भीम का पसंदीदा शस्त्र थी।"
      }
    ]
  },
  {
    "id": 1278,
    "word": "clue",
    "pos": "n",
    "pronunciation": "क्ू",
    "meaningHi": "सूत्र, सुराग अपराध या समस्ा की गुत्ी सुलझाने, प्रश्न का उत्तर पाने आदि का सूूत्र, सुराग",
    "meaningEn": "",
    "examples": [
      {
        "en": "The police could not find any clue",
        "hi": "पुलिस को कोई सुराग नहीं मिला।"
      }
    ]
  },
  {
    "id": 1279,
    "word": "coat",
    "pos": "n",
    "pronunciation": "कोट",
    "meaningHi": "पहनने वाला कोट 2 परत",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1280,
    "word": "combination",
    "pos": "n",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "mixture; blend",
    "examples": []
  },
  {
    "id": 1281,
    "word": "comfortable",
    "pos": "adj",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "providing comfort",
    "examples": []
  },
  {
    "id": 1282,
    "word": "comfortably",
    "pos": "adv",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1283,
    "word": "commitment",
    "pos": "n",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "dedication",
    "examples": []
  },
  {
    "id": 1284,
    "word": "communicate",
    "pos": "v",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "to share information",
    "examples": []
  },
  {
    "id": 1285,
    "word": "communication",
    "pos": "n",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "sharing information",
    "examples": []
  },
  {
    "id": 1286,
    "word": "communicative",
    "pos": "adj",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "talkative; expressive",
    "examples": []
  },
  {
    "id": 1287,
    "word": "compete",
    "pos": "v",
    "pronunciation": "कम्ीट",
    "meaningHi": "प्रतियोगिता में भाग लेना, प्रतिस्पर्धा करना",
    "meaningEn": "to try to win",
    "examples": [
      {
        "en": "We are ready to compete with the best in the world",
        "hi": "दुनिया में जो सर्वश्ेष्ठ हैं हम उनसे प्रतिस्पर्धा करने को तैयार हैं।"
      }
    ]
  },
  {
    "id": 1288,
    "word": "completely",
    "pos": "adv",
    "pronunciation": "कम्प्ीट्लि",
    "meaningHi": "पूरी तरह All . सारी प्राचीन सभ्यताएं नष्ट कर दी गई ं, लेकिन भारतीय सभ्यता जीवित रही। कॉम्प्लिकेटिड उलझा हुआ, जटिल",
    "meaningEn": "totally",
    "examples": [
      {
        "en": "a complicated problem",
        "hi": "एक जटिल समस्ा।"
      }
    ]
  },
  {
    "id": 1289,
    "word": "complicated",
    "pos": "adj",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1290,
    "word": "comprehension",
    "pos": "n",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "understanding",
    "examples": []
  },
  {
    "id": 1291,
    "word": "computer",
    "pos": "n",
    "pronunciation": "कम्प्ूटर",
    "meaningHi": "कंप्यूटर",
    "meaningEn": "electronic processing device",
    "examples": []
  },
  {
    "id": 1292,
    "word": "concentration",
    "pos": "n",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "focused attention",
    "examples": []
  },
  {
    "id": 1293,
    "word": "conceptualise",
    "pos": "v",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "to form a concept or idea",
    "examples": []
  },
  {
    "id": 1294,
    "word": "concerned",
    "pos": "adj",
    "pronunciation": "कन्सन्ड",
    "meaningHi": "संबंधित 2 चिंतित 1",
    "meaningEn": "worried",
    "examples": [
      {
        "en": "The police often receive calls concerning lost pets",
        "hi": "पुलिस खोए हुए पालतूू जानवरों के विषय में अकसर फोन कौल प्राप्त करती रहती है।"
      }
    ]
  },
  {
    "id": 1295,
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
    "id": 1296,
    "word": "congratulations",
    "pos": "n",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "expression of joy",
    "examples": []
  },
  {
    "id": 1297,
    "word": "conj",
    "pos": "prep / adv",
    "pronunciation": "अन्टिल",
    "meaningHi": "निर्दिष्ट समय या घटना के होने तक अन्यूशज़ुअल असामान्य | किसी भी समय, कभी भी अंंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ | जहाँ कहीं, कहीं भी वेदर 1 चाहे..या",
    "meaningEn": "",
    "examples": [
      {
        "en": "wait until / till he comes",
        "hi": "उसके आने तक इंतज़ार करो"
      },
      {
        "en": "unusual price rise",
        "hi": "असामान्य मूूल्यवृद्धि"
      }
    ]
  },
  {
    "id": 1298,
    "word": "considering",
    "pos": "prep conj adv",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1299,
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
    "id": 1300,
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
    "id": 1301,
    "word": "container",
    "pos": "n",
    "pronunciation": "कन्ेनर",
    "meaningHi": "बड़ा बर्तन जिसमें कुछ रखा जा सके",
    "meaningEn": "something that holds things",
    "examples": []
  },
  {
    "id": 1302,
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
    "id": 1303,
    "word": "contractor",
    "pos": "n",
    "pronunciation": "कन्ट्रैक्टर",
    "meaningHi": "ठेकेदार",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1304,
    "word": "conversation",
    "pos": "n",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "a discussion",
    "examples": []
  },
  {
    "id": 1305,
    "word": "convincing",
    "pos": "adj",
    "pronunciation": "कन्विन्सिंंग",
    "meaningHi": "आश्वस्त करने वाला, यकीन दिलाने वाला कि कोई बात सही है",
    "meaningEn": "able to persuade",
    "examples": [
      {
        "en": "He gave convincing arguments",
        "hi": "उसने यकीन दिलाने वाले तर्क दिए।"
      }
    ]
  },
  {
    "id": 1306,
    "word": "cook",
    "pos": "n / v",
    "pronunciation": "कुक",
    "meaningHi": "रसोइया, बावर्चीी | खाना पकाना",
    "meaningEn": "",
    "examples": [
      {
        "en": "She cooks well",
        "hi": "वह अच्ा खाना पकाती है।"
      }
    ]
  },
  {
    "id": 1307,
    "word": "cool",
    "pos": "adj / v",
    "pronunciation": "कूल",
    "meaningHi": "शीतल | शीतल करना या होना",
    "meaningEn": "",
    "examples": [
      {
        "en": "Cool winds were blowing",
        "hi": "शीतल हवाएं चल रही थीं।"
      },
      {
        "en": "Please cool down",
        "hi": "कृपया ठंढे हो जाओ।"
      }
    ]
  },
  {
    "id": 1308,
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
    "id": 1309,
    "word": "copy",
    "pos": "n / v",
    "pronunciation": "कॉपी",
    "meaningHi": "प्रतिलिपि | नकल करना",
    "meaningEn": "",
    "examples": [
      {
        "en": "Give me a copy of the letter",
        "hi": "मुझे चिट्ी की एक प्रतिलिपि दो।"
      },
      {
        "en": "Please do not copy from my notes",
        "hi": "कृपया नेरे नोट्स से कॉपी न करें।"
      }
    ]
  },
  {
    "id": 1310,
    "word": "cost",
    "pos": "n / v",
    "pronunciation": "कॉस्ट",
    "meaningHi": "मूल्य, कीमत | खर्च होना, कीमत या दाम होना",
    "meaningEn": "",
    "examples": [
      {
        "en": "What will be the cost of this car?",
        "hi": "इस कार की कीमत क्ा होगी?"
      },
      {
        "en": "It costs two hundred rupees",
        "hi": "इसमें दो सौ रुपए खर्च होते हैं।"
      }
    ]
  },
  {
    "id": 1311,
    "word": "couple",
    "pos": "n",
    "pronunciation": "कप्ल",
    "meaningHi": "पति-पत्नी का जोड़ा 2 जोड़ा अंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ",
    "meaningEn": "two; a pair",
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
    "id": 1312,
    "word": "crowded",
    "pos": "adj",
    "pronunciation": "क्ाउडिड",
    "meaningHi": "भीड़-भाड़ से भरा हुआ",
    "meaningEn": "",
    "examples": [
      {
        "en": "a crowded market",
        "hi": "एक भीड़-भरा बाज़ार"
      }
    ]
  },
  {
    "id": 1313,
    "word": "currency",
    "pos": "n",
    "pronunciation": "करन्सि",
    "meaningHi": "मुद्रा",
    "meaningEn": "",
    "examples": [
      {
        "en": "Dollar is the currency of the USA",
        "hi": "डॉलर अमेरिका की मुद्रा है।"
      }
    ]
  },
  {
    "id": 1314,
    "word": "damp",
    "pos": "adj",
    "pronunciation": "डैम्प",
    "meaningHi": "नम, भींगा हुआ, सीलनपूर्ण",
    "meaningEn": "",
    "examples": [
      {
        "en": "a damp house",
        "hi": "एक सीलनपूर्ण घर"
      }
    ]
  },
  {
    "id": 1315,
    "word": "dare",
    "pos": "v",
    "pronunciation": "तुम्ारी हिम्मत कैसे हुई?",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1316,
    "word": "dark",
    "pos": "adj",
    "pronunciation": "डाक",
    "meaningHi": "अँधेरा 2 गहरा",
    "meaningEn": "",
    "examples": [
      {
        "en": "a dark room",
        "hi": "एक अँधेरा कमरा"
      },
      {
        "en": "dark colours",
        "hi": "गहरे रंग"
      }
    ]
  },
  {
    "id": 1317,
    "word": "das (plural)",
    "pos": "n",
    "pronunciation": "वेद, वेदाज़",
    "meaningHi": "वेद दुनिया की पहली किताबें है। ये हिंदुओं के पवित्र मूल ग्ंथ हैं। इन्ें ईश्वर की वाणी या ईश्वरप्रेरित वाणी मानते हैं। ये चार हैं - ऋग्ेद, सामवेद,",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1318,
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
    "id": 1319,
    "word": "date",
    "pos": "n",
    "pronunciation": "डेट",
    "meaningHi": "तिथि, तारीख",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1320,
    "word": "dead",
    "pos": "adj",
    "pronunciation": "डेड",
    "meaningHi": "मृत, मरा हुआ",
    "meaningEn": "",
    "examples": [
      {
        "en": "a dead animal",
        "hi": "एक मरा हुआ जानवर"
      }
    ]
  },
  {
    "id": 1321,
    "word": "deaf",
    "pos": "adj",
    "pronunciation": "डेफ़",
    "meaningHi": "बहरा D 128 अंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1322,
    "word": "deal",
    "pos": "n / v",
    "pronunciation": "डील",
    "meaningHi": "व्यापारिक समझौता, सौदा | 1 बर्ताव करना 2 खरीद-बिक्रीक्री करना 1",
    "meaningEn": "",
    "examples": [
      {
        "en": "The deal has been clinched",
        "hi": "सौदा तय हो गया है।"
      }
    ]
  },
  {
    "id": 1323,
    "word": "dear",
    "pos": "adj",
    "pronunciation": "दोस्त",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1324,
    "word": "debt",
    "pos": "n",
    "pronunciation": "डेट",
    "meaningHi": "कर्ज़",
    "meaningEn": "",
    "examples": [
      {
        "en": "India's foreign debt has been rising",
        "hi": "भारत का विदेश से लिया हुआ कर्ज़ बढ़ता रहा है।"
      }
    ]
  },
  {
    "id": 1325,
    "word": "definite",
    "pos": "adj",
    "pronunciation": "डेफ़िनट",
    "meaningHi": "निश्चित, सटीक, स्पष्ट",
    "meaningEn": "",
    "examples": [
      {
        "en": "He gave no definite answer",
        "hi": "उसने कोई निश्चित जवाब नहीं दिया।"
      }
    ]
  },
  {
    "id": 1326,
    "word": "deliberately",
    "pos": "adv",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "on purpose",
    "examples": []
  },
  {
    "id": 1327,
    "word": "demonstrate",
    "pos": "v",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1328,
    "word": "dent",
    "pos": "adj",
    "pronunciation": "इन्डिपेन्डन्ट",
    "meaningHi": "स्ंतत्र, आजाद, स्ाधीन अंंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ",
    "meaningEn": "",
    "examples": [
      {
        "en": "an independent nation",
        "hi": "एक स्वतंत्र राष्ट्र"
      }
    ]
  },
  {
    "id": 1329,
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
    "id": 1330,
    "word": "dependable",
    "pos": "adj",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "reliable",
    "examples": []
  },
  {
    "id": 1331,
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
    "id": 1332,
    "word": "description",
    "pos": "n",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "account; depiction",
    "examples": []
  },
  {
    "id": 1333,
    "word": "determined",
    "pos": "adj",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1334,
    "word": "development",
    "pos": "n",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "growth; advancement",
    "examples": []
  },
  {
    "id": 1335,
    "word": "diabetes",
    "pos": "n",
    "pronunciation": "डाइअबीटीज़",
    "meaningHi": "मधुमेह चीनी की बीमारी",
    "meaningEn": "disease affecting blood sugar",
    "examples": []
  },
  {
    "id": 1336,
    "word": "dictator",
    "pos": "n",
    "pronunciation": "डिक्टेटर",
    "meaningHi": "तानाशाह डिक्टेटरशिप तानाशाही, अधिनायकत्व",
    "meaningEn": "ruler with total power",
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
    "id": 1337,
    "word": "diplomatic",
    "pos": "adj",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "tactful",
    "examples": []
  },
  {
    "id": 1338,
    "word": "disappointed",
    "pos": "adj",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1339,
    "word": "disarmament",
    "pos": "n",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "reducing weapons",
    "examples": []
  },
  {
    "id": 1340,
    "word": "discontentment",
    "pos": "n",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "unhappiness",
    "examples": []
  },
  {
    "id": 1341,
    "word": "dish",
    "pos": "n",
    "pronunciation": "डिश",
    "meaningHi": "पकवान 2 तश्तरी, गहरी प्लेट",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1342,
    "word": "dissatisfaction",
    "pos": "n",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "displeasure",
    "examples": []
  },
  {
    "id": 1343,
    "word": "disturbing",
    "pos": "adj",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1344,
    "word": "docile",
    "pos": "adj",
    "pronunciation": "डोसाइल",
    "meaningHi": "शांत और विनीत",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1345,
    "word": "down",
    "pos": "adv prep",
    "pronunciation": "डाउन",
    "meaningHi": "नीचे की ओर",
    "meaningEn": "",
    "examples": [
      {
        "en": "I went down the stairs",
        "hi": "मैं सीढ़ियों से नीचे गया।"
      }
    ]
  },
  {
    "id": 1346,
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
    "id": 1347,
    "word": "downstairs",
    "pos": "adv adj",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1348,
    "word": "draw",
    "pos": "v",
    "pronunciation": "ड्रो",
    "meaningHi": "खींचना 2 मैच बराबर कर देना 3 एक तसवीर बनाना",
    "meaningEn": "",
    "examples": [
      {
        "en": "draw water from the well",
        "hi": "कुँए से पानी खींचो"
      },
      {
        "en": "India drew with Bangladesh 1-1 in the Hockey semifinal",
        "hi": "भारत ने बांग्ादेश के साथ हॉकी सेमीफाइनल में 1-1 से मैच बराबर कर दिया।"
      }
    ]
  },
  {
    "id": 1349,
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
    "id": 1350,
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
    "id": 1351,
    "word": "dull",
    "pos": "n",
    "pronunciation": "डल",
    "meaningHi": "मंदबुद्धि 2 चमक-दमक से रहित 3 नीरस 1 He is a not a ’t वह मंदबुद्धि विद्यार्थीी नहीं है, मगर वह अधिक पढ़ता नहीं है। 2",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1352,
    "word": "each",
    "pos": "pron det",
    "pronunciation": "ईच",
    "meaningHi": "प्रत्ेक, हर एक",
    "meaningEn": "",
    "examples": [
      {
        "en": "each one teach one",
        "hi": "हर एक पढ़ाए एक को"
      }
    ]
  },
  {
    "id": 1353,
    "word": "earn",
    "pos": "v",
    "pronunciation": "अर्न",
    "meaningHi": "पैसे कमाना 2 उपार्जन करना",
    "meaningEn": "",
    "examples": [
      {
        "en": "earn a good name",
        "hi": "अच्ा नाम कमाना"
      }
    ]
  },
  {
    "id": 1354,
    "word": "easy",
    "pos": "adj",
    "pronunciation": "ईज़ि",
    "meaningHi": "सुगम, आसान",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1355,
    "word": "edge",
    "pos": "n",
    "pronunciation": "एज",
    "meaningHi": "किसी समतल वस्तु का किनारा",
    "meaningEn": "",
    "examples": [
      {
        "en": "She sat on the edge of the bed",
        "hi": "वह बिस्तर के किनारे पर बैठी।"
      }
    ]
  },
  {
    "id": 1356,
    "word": "elbow",
    "pos": "n",
    "pronunciation": "एल्ो",
    "meaningHi": "कोहनी",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1357,
    "word": "elegant",
    "pos": "adj",
    "pronunciation": "एलिगन्ट",
    "meaningHi": "सहजशिष्ट",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1358,
    "word": "elevator",
    "pos": "n",
    "pronunciation": "एलिवेटर",
    "meaningHi": "लिफ्ट, बिल्ड्डंग में ऊपर ले जाने का यंत्र",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1359,
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
    "id": 1360,
    "word": "else",
    "pos": "adv",
    "pronunciation": "एल्स",
    "meaningHi": "अन्य और भिन्न व्यक्ति, वस्तु या स्ान 2 वरना, नहीं तो 1",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1361,
    "word": "embarrassed",
    "pos": "adj",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1362,
    "word": "embarrassing",
    "pos": "adj",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1363,
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
    "id": 1364,
    "word": "emergency",
    "pos": "n",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1365,
    "word": "emotional",
    "pos": "adj",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1366,
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
    "id": 1367,
    "word": "employment",
    "pos": "n",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1368,
    "word": "encouragement",
    "pos": "n",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1369,
    "word": "encyclopedia",
    "pos": "n",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1370,
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
    "id": 1371,
    "word": "enough pron",
    "pos": "det adv",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1372,
    "word": "enterprising",
    "pos": "adj",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1373,
    "word": "entertainment",
    "pos": "n",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1374,
    "word": "enthusiastic",
    "pos": "adj",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1375,
    "word": "environment",
    "pos": "n",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1376,
    "word": "equivalent",
    "pos": "n",
    "pronunciation": "इक्विवलन्ट",
    "meaningHi": "समकक्ष, समवस्तु इक्विवलन्ट समान मूल्य का, समकक्ष अंंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ",
    "meaningEn": "",
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
    "id": 1377,
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
    "id": 1378,
    "word": "even",
    "pos": "adj / adv",
    "pronunciation": "ईवन",
    "meaningHi": "बराबर, समतल, सपाट | भी वस्ुओं या व्यक्तियों की तुलना के लिए प्रयु- क्त",
    "meaningEn": "",
    "examples": [
      {
        "en": "an even surface",
        "hi": "एक समतल सतह"
      }
    ]
  },
  {
    "id": 1379,
    "word": "eventually",
    "pos": "adv",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1380,
    "word": "ever",
    "pos": "adv / pron",
    "pronunciation": "विचेवर",
    "meaningHi": "एवर 1 सर्वदा, हमेशा 2 किसी भी समय, कभी 1",
    "meaningEn": "",
    "examples": [
      {
        "en": "Get out of there, whoever you are",
        "hi": "तुम जो भी हो, वहाँ से बाहर आ जाओ।"
      }
    ]
  },
  {
    "id": 1381,
    "word": "ever pron",
    "pos": "det",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1382,
    "word": "everybody",
    "pos": "pron",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1383,
    "word": "everything",
    "pos": "pron",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1384,
    "word": "everywhere",
    "pos": "adv",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1385,
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
    "id": 1386,
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
    "id": 1387,
    "word": "exam",
    "pos": "n",
    "pronunciation": "इगज़ैम",
    "meaningHi": "परीक्षा",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1388,
    "word": "except prep",
    "pos": "conj",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1389,
    "word": "executive",
    "pos": "n",
    "pronunciation": "इगज़ेक्युटिव",
    "meaningHi": "कार्यकारी अधिकारी",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1390,
    "word": "exhibition",
    "pos": "n",
    "pronunciation": "एक्सिबिशन",
    "meaningHi": "प्रदर्शनी, नुमाइश",
    "meaningEn": "",
    "examples": [
      {
        "en": "a book-exhibition",
        "hi": "किताबों की एक प्रदर्शनी"
      }
    ]
  },
  {
    "id": 1391,
    "word": "experiment",
    "pos": "n",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1392,
    "word": "explanation",
    "pos": "n",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1393,
    "word": "exploration",
    "pos": "n",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1394,
    "word": "extraordinary",
    "pos": "adj",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1395,
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
    "id": 1396,
    "word": "face",
    "pos": "n / v",
    "pronunciation": "फ़ेस",
    "meaningHi": "चेहरा | 1 सामना करना 2 सामने होना 1",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1397,
    "word": "Facebook",
    "pos": "n",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1398,
    "word": "factory",
    "pos": "n",
    "pronunciation": "फै़क्ट्रि",
    "meaningHi": "कारखाना",
    "meaningEn": "manufacturing building",
    "examples": []
  },
  {
    "id": 1399,
    "word": "fail",
    "pos": "v",
    "pronunciation": "फे़ल",
    "meaningHi": "असफल होना",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1400,
    "word": "fall",
    "pos": "n / v",
    "pronunciation": "फ़ॉल",
    "meaningHi": "नीचे गिरने की क्रिया, गिरावट | गिरना 120 अंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ",
    "meaningEn": "",
    "examples": [
      {
        "en": "A fall in the standard of education",
        "hi": "शिक्षाक्षा के स्तर में गिरावट।"
      },
      {
        "en": "He fell from the tree",
        "hi": "वह पेड़ से गिर गया।"
      }
    ]
  },
  {
    "id": 1401,
    "word": "familiar",
    "pos": "adj",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1402,
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
    "id": 1403,
    "word": "fast",
    "pos": "adj adv",
    "pronunciation": "फ़ास्ट",
    "meaningHi": "तेज, तेज गति से | उपवास करना",
    "meaningEn": "",
    "examples": [
      {
        "en": "a fast runner",
        "hi": "एक तेज दौड़ने वाला"
      },
      {
        "en": "He fasts every Ekadashi",
        "hi": "वह हर एकादशी को उपवास रखता है।"
      }
    ]
  },
  {
    "id": 1404,
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
    "id": 1405,
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
    "id": 1406,
    "word": "favourite",
    "pos": "adj",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1407,
    "word": "fear",
    "pos": "n / v",
    "pronunciation": "भय, डर",
    "meaningHi": "| 76 77 अंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1408,
    "word": "feed",
    "pos": "v",
    "pronunciation": "फ़ीड",
    "meaningHi": "भोजन देना, खिलाना",
    "meaningEn": "",
    "examples": [
      {
        "en": "Feed the poor and the needy",
        "hi": "गरीब और जरूरतमंद को खिलाओ।"
      }
    ]
  },
  {
    "id": 1409,
    "word": "fence",
    "pos": "n",
    "pronunciation": "फ़ेेन्स",
    "meaningHi": "चारदीवारी, लकड़ी या धातु का बना घेरा, बाड़",
    "meaningEn": "barrier around space",
    "examples": []
  },
  {
    "id": 1410,
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
    "id": 1411,
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
    "id": 1412,
    "word": "figure",
    "pos": "n",
    "pronunciation": "पाई है।",
    "meaningHi": "अंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ",
    "meaningEn": "number; shape; person",
    "examples": []
  },
  {
    "id": 1413,
    "word": "file",
    "pos": "n",
    "pronunciation": "फ़ाइल",
    "meaningHi": "कागज़ात रखने हेतु कागज के गत्ते या प्ा- स्टिक का आवरण",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1414,
    "word": "film",
    "pos": "n",
    "pronunciation": "फ़िल्म",
    "meaningHi": "सिनेमा, चलचित्र 2 झिल्ी",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1415,
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
    "id": 1416,
    "word": "fine",
    "pos": "n adj",
    "pronunciation": "फ़ाइन",
    "meaningHi": "दंड या जुर्माना 2 काफी ठीक, बढ़िया 3 सूक्ष्म, बारीक",
    "meaningEn": "",
    "examples": [
      {
        "en": "a fine of rs 1000",
        "hi": "1000 रु का दंड"
      },
      {
        "en": "a fine dress",
        "hi": "एक बढ़िया पोशाक"
      }
    ]
  },
  {
    "id": 1417,
    "word": "firm",
    "pos": "adj / n",
    "pronunciation": "फर्म",
    "meaningHi": "सख्त, सुदृढ़, काफी कड़ा | व्यापारिक प्रतिष्ान 78 79 अंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ",
    "meaningEn": "",
    "examples": [
      {
        "en": "firm grip",
        "hi": "हाथ की सख्त पकड़"
      },
      {
        "en": "I have set up a new firm",
        "hi": "मैंने एक नए फर्म की स्थापना की है।"
      }
    ]
  },
  {
    "id": 1418,
    "word": "first det adj",
    "pos": "adv n",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1419,
    "word": "flat",
    "pos": "n / adj",
    "pronunciation": "फ़्लैट",
    "meaningHi": "अपार्टमेन्ट | समतल, सपाट",
    "meaningEn": "",
    "examples": [
      {
        "en": "The earth is not flat, it is round",
        "hi": "धरती सपाट नहीं, गोल है।"
      }
    ]
  },
  {
    "id": 1420,
    "word": "flavour",
    "pos": "n  v",
    "pronunciation": "खाने का स्ाद और सुगंध",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1421,
    "word": "flow",
    "pos": "n / v",
    "pronunciation": "फ़लो",
    "meaningHi": "बहाव, प्रवाह | बहना, प्रवाहित होना",
    "meaningEn": "",
    "examples": [
      {
        "en": "the flow of water from the broken pipe",
        "hi": "टूूटे नलके से पानी का प्रवाह"
      },
      {
        "en": "a gently flowing river",
        "hi": "एक शांति से बहती नदी।"
      }
    ]
  },
  {
    "id": 1422,
    "word": "fold",
    "pos": "n / v",
    "pronunciation": "फ़ोल्ड",
    "meaningHi": "चुन्नट, शिकन 2 तह | तह लगाना, लपेटना",
    "meaningEn": "",
    "examples": [
      {
        "en": "He folded the clothes",
        "hi": "उसने कपड़ों को तह लगाया।"
      }
    ]
  },
  {
    "id": 1423,
    "word": "fond",
    "pos": "adj",
    "pronunciation": "फ़ौन्ड",
    "meaningHi": "किसी व्यक्ति, वस्तु या काम को पसंद करने वाला, शौकीन होना",
    "meaningEn": "",
    "examples": [
      {
        "en": "fond of sweets",
        "hi": "मिठाइयों का शौकीन"
      }
    ]
  },
  {
    "id": 1424,
    "word": "foot",
    "pos": "n",
    "pronunciation": "फु़ट",
    "meaningHi": "पैर, पाँव 80 81 अंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1425,
    "word": "forgiveness",
    "pos": "n",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1426,
    "word": "fork",
    "pos": "n",
    "pronunciation": "फ़ोक",
    "meaningHi": "भोजन करने वाला काँटा 2 सड़क या नदी की दो शाखाओं में विभक्त होने की स्थिति",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1427,
    "word": "form",
    "pos": "n / v",
    "pronunciation": "फौम",
    "meaningHi": "आकृति, रूपाकार 2 प्रकार 3 फॉर्म या प्रपत्र 1",
    "meaningEn": "",
    "examples": [
      {
        "en": "admission-form",
        "hi": "प्रवेश-प्रपत्र"
      }
    ]
  },
  {
    "id": 1428,
    "word": "fortunate",
    "pos": "adj",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1429,
    "word": "fortunately",
    "pos": "adv",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1430,
    "word": "forward",
    "pos": "adv",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1431,
    "word": "frequent",
    "pos": "adj",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1432,
    "word": "friendship",
    "pos": "n",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1433,
    "word": "frightened",
    "pos": "adj",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1434,
    "word": "from",
    "pos": "prep",
    "pronunciation": "फ़्ॉम, फ़्र्रम",
    "meaningHi": "से अलग होने के अर्थ में",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1435,
    "word": "further adj",
    "pos": "adv v",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1436,
    "word": "game",
    "pos": "n",
    "pronunciation": "गेम",
    "meaningHi": "खेल, जिसके नियम होते है",
    "meaningEn": "",
    "examples": [
      {
        "en": "Football is a popular game",
        "hi": "फुटबॉल एक लोकप्रिय खेल है।"
      }
    ]
  },
  {
    "id": 1437,
    "word": "gate",
    "pos": "n",
    "pronunciation": "गेट",
    "meaningHi": "फाटक, द्ार",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1438,
    "word": "generally",
    "pos": "adv",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1439,
    "word": "generous",
    "pos": "adj",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1440,
    "word": "genius",
    "pos": "adj",
    "pronunciation": "जीनिअस",
    "meaningHi": "असाधारण रूप से मेधावी और सृजनशील, अति महान",
    "meaningEn": "",
    "examples": [
      {
        "en": "Einstein was a genious",
        "hi": "आइन्सटीन एक जीनिअस थे।"
      }
    ]
  },
  {
    "id": 1441,
    "word": "gent",
    "pos": "adj",
    "pronunciation": "इंटेलिजन्ट",
    "meaningHi": "बुद्धिमान, समझदार, चतुर",
    "meaningEn": "",
    "examples": [
      {
        "en": "an intelligent girl",
        "hi": "एक बुद्धिमान लड़की"
      }
    ]
  },
  {
    "id": 1442,
    "word": "gift",
    "pos": "n",
    "pronunciation": "गिफ़्ट",
    "meaningHi": "उपहार, तोहफा",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1443,
    "word": "glad",
    "pos": "adj",
    "pronunciation": "ग्लैड",
    "meaningHi": "प्रसन्न",
    "meaningEn": "",
    "examples": [
      {
        "en": "I am glad",
        "hi": "मैं प्रसन्न हँ।"
      }
    ]
  },
  {
    "id": 1444,
    "word": "globalisation",
    "pos": "n",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1445,
    "word": "goal",
    "pos": "n",
    "pronunciation": "गोल",
    "meaningHi": "लक्ष्य",
    "meaningEn": "",
    "examples": [
      {
        "en": "What is the final goal of human life?",
        "hi": "मानवजीवन का अंतिम लक्ष्य क्ा है?"
      }
    ]
  },
  {
    "id": 1446,
    "word": "god-fearing",
    "pos": "adj",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1447,
    "word": "gods",
    "pos": "n",
    "pronunciation": "गॉड्स",
    "meaningHi": "देवी-देवता god-गॉड फिअरिंग ईश्वर से डरने वाला",
    "meaningEn": "",
    "examples": [
      {
        "en": "There may be many gods, but God is one",
        "hi": "देवता अनेक हो सकते हैं, मगर ईश्वर एक है।"
      }
    ]
  },
  {
    "id": 1448,
    "word": "gold",
    "pos": "n",
    "pronunciation": "गोल्ड",
    "meaningHi": "सोना 86 87 अंंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ",
    "meaningEn": "",
    "examples": [
      {
        "en": "Gold is very valuable, but less than love",
        "hi": "सोना बहुत मूूल्यवान है, मगर प्रेम से कम।"
      }
    ]
  },
  {
    "id": 1449,
    "word": "good bye",
    "pos": "n",
    "pronunciation": "गुड्बाइ",
    "meaningHi": "विदा! विदा लेते वक्त बोले जाने वाले शब्द गुड गावनन्स सुशासन, अच्ा शासन",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1450,
    "word": "government",
    "pos": "n",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1451,
    "word": "grade",
    "pos": "n / v",
    "pronunciation": "ग्रेड",
    "meaningHi": "श्ेणी, वर्ग | वर्गीीकरण करना, श्ेणी निर्धारित करना ग्ैजुअलि क्रमशः, धीरे-धीरे एकाएक नहीं",
    "meaningEn": "",
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
    "id": 1452,
    "word": "gradually",
    "pos": "adv",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1453,
    "word": "grand",
    "pos": "adj",
    "pronunciation": "ग्ैन्ड",
    "meaningHi": "शानदार",
    "meaningEn": "",
    "examples": [
      {
        "en": "a grand programme",
        "hi": "एक शानदार कार्यक्रम"
      }
    ]
  },
  {
    "id": 1454,
    "word": "hair",
    "pos": "n",
    "pronunciation": "बाल",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1455,
    "word": "half",
    "pos": "n adj adv",
    "pronunciation": "हाफ़",
    "meaningHi": "आधा",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1456,
    "word": "hand",
    "pos": "n / v",
    "pronunciation": "हैन्ड",
    "meaningHi": "हाथ | किसी को कुछ देना",
    "meaningEn": "",
    "examples": [
      {
        "en": "He handed me an envelope",
        "hi": "उसने मुझे एक लिफाफा हाथ में दिया।"
      }
    ]
  },
  {
    "id": 1457,
    "word": "handle",
    "pos": "n / v",
    "pronunciation": "हैन्ड्ल",
    "meaningHi": "हत्ा | सँभालना",
    "meaningEn": "",
    "examples": [
      {
        "en": "handle a situation",
        "hi": "एक परिस्थिति को सँभालना"
      }
    ]
  },
  {
    "id": 1458,
    "word": "hang",
    "pos": "v",
    "pronunciation": "हैंग",
    "meaningHi": "लटकाना, टाँगना",
    "meaningEn": "",
    "examples": [
      {
        "en": "He hung his shirt on a hook - उसने अपनी कमीज एक हुक पर टाँग दी। 2 फाँसी लगाना (He hanged himself",
        "hi": "उसने फाँसी लगा ली।"
      }
    ]
  },
  {
    "id": 1459,
    "word": "happiness",
    "pos": "n",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1460,
    "word": "hardworking",
    "pos": "adj",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1461,
    "word": "harm",
    "pos": "n / v",
    "pronunciation": "हाम",
    "meaningHi": "नुकसान, हानि या चोट | नुकसान पहुँचाना",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1462,
    "word": "hate",
    "pos": "n / v",
    "pronunciation": "हेट",
    "meaningHi": "घृणा, नफरत | घृणा नफरत करना",
    "meaningEn": "",
    "examples": [
      {
        "en": "Hate is a destructive emotion",
        "hi": "नफरत एक विध्ंसात्मक भावना है।"
      },
      {
        "en": "A religion that teaches hate can't be God's religion",
        "hi": "एक धर्म जो नफरत सिखाए, ईश्वर का धर्म नहीं हो सकता।"
      }
    ]
  },
  {
    "id": 1463,
    "word": "head",
    "pos": "n / v",
    "pronunciation": "हेड",
    "meaningHi": "सिर 2 शीर्ष 3 प्रधान, मुखिया अंंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ | 1 निर्दिष्ट दिशा में आगे बढ़ना 2 किसी संस्ा के प्रमुख का पद धारण करना",
    "meaningEn": "",
    "examples": [
      {
        "en": "They are heading towards the jungle",
        "hi": "वे जंगल की ओर बढ़ रहे हैं।"
      },
      {
        "en": "She heads the municipal corporation",
        "hi": "वह नगरपालिका के प्रमुख का पद धारण करती है।"
      }
    ]
  },
  {
    "id": 1464,
    "word": "hear",
    "pos": "v",
    "pronunciation": "सुनना",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1465,
    "word": "heat",
    "pos": "n / v",
    "pronunciation": "हीट",
    "meaningHi": "ताप, गरमी | गरम करना",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1466,
    "word": "hell",
    "pos": "n",
    "pronunciation": "हेल",
    "meaningHi": "नरक",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1467,
    "word": "helpfulness",
    "pos": "n",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1468,
    "word": "here",
    "pos": "adv",
    "pronunciation": "",
    "meaningHi": "हिअर यहाँ",
    "meaningEn": "",
    "examples": [
      {
        "en": "Come here",
        "hi": "यहाँ आओ।"
      }
    ]
  },
  {
    "id": 1469,
    "word": "hers",
    "pos": "pron",
    "pronunciation": "हज़",
    "meaningHi": "उसकी उस स्त्री की",
    "meaningEn": "",
    "examples": [
      {
        "en": "Talent like hers is rare in a slum-child",
        "hi": "उसके जैसी प्रतिभा एक झुग्ी-झोपड़ी की लड़की में विरल है।"
      }
    ]
  },
  {
    "id": 1470,
    "word": "hers pron",
    "pos": "pron",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1471,
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
    "id": 1472,
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
    "id": 1473,
    "word": "hesitation",
    "pos": "n",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1474,
    "word": "hide",
    "pos": "v",
    "pronunciation": "हाइड",
    "meaningHi": "छिपना, छिपाना",
    "meaningEn": "",
    "examples": [
      {
        "en": "She hid behind the sofa",
        "hi": "वह सोफे के पीछे छुप गई।"
      }
    ]
  },
  {
    "id": 1475,
    "word": "high",
    "pos": "adj",
    "pronunciation": "हाइ",
    "meaningHi": "ऊँचा अंंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ",
    "meaningEn": "",
    "examples": [
      {
        "en": "a high mountain",
        "hi": "एक ऊँचा पर्वत"
      }
    ]
  },
  {
    "id": 1476,
    "word": "Hinduism",
    "pos": "n",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1477,
    "word": "hole",
    "pos": "n",
    "pronunciation": "होल",
    "meaningHi": "छेद, सुराख़",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1478,
    "word": "hour",
    "pos": "n",
    "pronunciation": "हैं।",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1479,
    "word": "however",
    "pos": "adv",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1480,
    "word": "humanity",
    "pos": "n",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1481,
    "word": "humiliation",
    "pos": "n",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1482,
    "word": "hurt",
    "pos": "n / v / adj",
    "pronunciation": "हर्ट",
    "meaningHi": "चोट, तकलीफ अंंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ | चोट पहुँचाना, तकलीफ देना | चोटग्रस्त, घायल",
    "meaningEn": "",
    "examples": [
      {
        "en": "Let's not cause hurt to anybody's feelings",
        "hi": "हम किसी की भावनाओं को चोट न पहुँचाएँ।"
      },
      {
        "en": "It hurts",
        "hi": "इससे दुःख होता है।"
      }
    ]
  },
  {
    "id": 1483,
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
    "id": 1484,
    "word": "hypertension",
    "pos": "n",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1485,
    "word": "idol",
    "pos": "n",
    "pronunciation": "आइडल",
    "meaningHi": "देवमूर्ति",
    "meaningEn": "",
    "examples": [
      {
        "en": "Idols remind us of God and the deities",
        "hi": "देवमूूर्तियाँ हमें ईश्वर और देवताओं का स्मरण कराती हैं।"
      }
    ]
  },
  {
    "id": 1486,
    "word": "idolworship",
    "pos": "n",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1487,
    "word": "ill",
    "pos": "adj",
    "pronunciation": "इल",
    "meaningHi": "बीमार, अस्वस्थ",
    "meaningEn": "",
    "examples": [
      {
        "en": "He is ill",
        "hi": "वह बीमार है।"
      }
    ]
  },
  {
    "id": 1488,
    "word": "imagination",
    "pos": "n",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1489,
    "word": "imaginative",
    "pos": "adj",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1490,
    "word": "immediate",
    "pos": "adj",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1491,
    "word": "immediately",
    "pos": "adv",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1492,
    "word": "immor-  ality",
    "pos": "n",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1493,
    "word": "importance",
    "pos": "n",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1494,
    "word": "important",
    "pos": "adj",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1495,
    "word": "impossible",
    "pos": "adj",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1496,
    "word": "impressed",
    "pos": "adj",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1497,
    "word": "impressive",
    "pos": "adj",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1498,
    "word": "improvement",
    "pos": "n",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1499,
    "word": "inadequate",
    "pos": "adj",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1500,
    "word": "inappropriate",
    "pos": "adj",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1501,
    "word": "independent",
    "pos": "adj",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1502,
    "word": "infection",
    "pos": "n",
    "pronunciation": "इनफ़ेक्शन",
    "meaningHi": "रोगसंचार, बीमारी लग जाना",
    "meaningEn": "",
    "examples": [
      {
        "en": "I've caught a viral infection",
        "hi": "मुझे एक वायरल इनफ़ेक्शन लग गया है।"
      }
    ]
  },
  {
    "id": 1503,
    "word": "inform",
    "pos": "v",
    "pronunciation": "इन्फ़ौम",
    "meaningHi": "सूचना देना, सूचित करना",
    "meaningEn": "",
    "examples": [
      {
        "en": "Did you inform the police?",
        "hi": "क्ा तुमने पुलिस को खबर की?"
      }
    ]
  },
  {
    "id": 1504,
    "word": "information",
    "pos": "n",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1505,
    "word": "injury",
    "pos": "n",
    "pronunciation": "इनजरि",
    "meaningHi": "शरीर या अंग पर लगी चोट",
    "meaningEn": "",
    "examples": [
      {
        "en": "got an injury while playing",
        "hi": "खेलने के दौरान चोट लग गई।"
      }
    ]
  },
  {
    "id": 1506,
    "word": "insecti- cide",
    "pos": "n",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1507,
    "word": "inside prep",
    "pos": "adv adj",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1508,
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
    "id": 1509,
    "word": "inspiration",
    "pos": "n",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1510,
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
    "id": 1511,
    "word": "instruction",
    "pos": "n",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1512,
    "word": "instrument",
    "pos": "n",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1513,
    "word": "insurance",
    "pos": "n",
    "pronunciation": "इन्शौरन्स",
    "meaningHi": "बीमा",
    "meaningEn": "",
    "examples": [
      {
        "en": "health insurance",
        "hi": "स्ास्थ्य बीमा"
      }
    ]
  },
  {
    "id": 1514,
    "word": "intellect-ual",
    "pos": "n",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1515,
    "word": "intellig-ence",
    "pos": "n",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1516,
    "word": "intelligent",
    "pos": "adj",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1517,
    "word": "interest- ing",
    "pos": "adj",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1518,
    "word": "Internet",
    "pos": "n",
    "pronunciation": "इन्टनेट",
    "meaningHi": "इन्टरनेट, अंतर्राष्ट्ीय कंप्यूटर प्रणाली",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1519,
    "word": "interruption",
    "pos": "n",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1520,
    "word": "into",
    "pos": "prep",
    "pronunciation": "इन्टु",
    "meaningHi": "में, के भीतर में 2 बारे में 1",
    "meaningEn": "",
    "examples": [
      {
        "en": "Religious intolerance is growing",
        "hi": "धार्मिक असहिष्णुष्णुता बढ़ रही है।"
      }
    ]
  },
  {
    "id": 1521,
    "word": "intolerance",
    "pos": "n",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1522,
    "word": "introduce",
    "pos": "v",
    "pronunciation": "इन्ट्रड्ूस",
    "meaningHi": "से परिचय कराना 2 पहली बार प्रयोग में लाना 1",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1523,
    "word": "introduction",
    "pos": "n",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1524,
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
    "id": 1525,
    "word": "ion skills",
    "pos": "n",
    "pronunciation": "इगज़ैमिनेशन",
    "meaningHi": "स््किल्स परीक्षा-कौशल",
    "meaningEn": "",
    "examples": [
      {
        "en": "For doing well at the exams, one has to learn examination skills",
        "hi": "परीक्षा में अच्ा करने के लिए परीक्षा- कौशल सीखना होता है।"
      }
    ]
  },
  {
    "id": 1526,
    "word": "ions",
    "pos": "n",
    "pronunciation": "क्ग्ैचुलेशनज़",
    "meaningHi": "बधाइयाँ",
    "meaningEn": "",
    "examples": [
      {
        "en": "many congratulations!",
        "hi": "ढेरों बधाइयाँ!"
      }
    ]
  },
  {
    "id": 1527,
    "word": "itself",
    "pos": "pron",
    "pronunciation": "इट्सेल्फ़",
    "meaningHi": "स्वयं, खुद ही 104 105 अंंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ जेलसी ईर्ष्या किसी दूसरे की अच्ाई या प्रगति देख कर मन में होने वाली जलन",
    "meaningEn": "",
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
    "id": 1528,
    "word": "join",
    "pos": "v",
    "pronunciation": "जोइन",
    "meaningHi": "जुड़ जाना, प्रवेश करना 2 पदभार ग्रहण करना 3 जोड़ना 1",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1529,
    "word": "joke",
    "pos": "n / v",
    "pronunciation": "जोक",
    "meaningHi": "मजाक, परिहास | मजाक करना, चुटकुले सुनाना",
    "meaningEn": "",
    "examples": [
      {
        "en": "Jokes should not hurt anyone's feelings",
        "hi": "मजाक किसी की भावनाओं को चोट पहुँचाने वाले नहीं होने चाहिए।"
      },
      {
        "en": "I was just joking",
        "hi": "मैं तो सिर्फ मजाक कर रहा था।"
      }
    ]
  },
  {
    "id": 1530,
    "word": "judiciary",
    "pos": "n",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1531,
    "word": "jump",
    "pos": "n / v",
    "pronunciation": "जम्प",
    "meaningHi": "छलांग, कूद | कूदना, छलांग मारना जस्ट 1 अभी-अभी 2 बस, सिर्फ 3 न्यायी, ठीक-ठाक 1",
    "meaningEn": "",
    "examples": [
      {
        "en": "long jump",
        "hi": "लंबी कूूद"
      },
      {
        "en": "He jumped from the boat into the river",
        "hi": "वह नाव से नदी में कूूद गया।"
      }
    ]
  },
  {
    "id": 1532,
    "word": "keen",
    "pos": "adj",
    "pronunciation": "कीन",
    "meaningHi": "उत्ुक, किसी बात में बहुत रुचि लेने वाला",
    "meaningEn": "",
    "examples": [
      {
        "en": "He is a keen student",
        "hi": "वह पढ़ाई में बहुत रुचि रखने वाला विद्यार्थीी है।"
      }
    ]
  },
  {
    "id": 1533,
    "word": "keyboard",
    "pos": "n",
    "pronunciation": "कीीबोड",
    "meaningHi": "कुंजीपटल",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1534,
    "word": "kick",
    "pos": "v",
    "pronunciation": "किक",
    "meaningHi": "ठोकर या लात मारना",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1535,
    "word": "kill",
    "pos": "v",
    "pronunciation": "किल",
    "meaningHi": "मार डालना, हत्ा करना",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1536,
    "word": "kind",
    "pos": "adj / n",
    "pronunciation": "काइन्ड",
    "meaningHi": "उदार, दयालु | प्रकार",
    "meaningEn": "",
    "examples": [
      {
        "en": "a kind person",
        "hi": "एक उदार व्यक्ति"
      },
      {
        "en": "The electric car is a car of a new kind",
        "hi": "बिजली से चलने वाली कार एक नए प्रकार की कार है।"
      }
    ]
  },
  {
    "id": 1537,
    "word": "land",
    "pos": "n / v",
    "pronunciation": "लैन्ड",
    "meaningHi": "जमीन | उतरना या उतारना लैंग्ेज भाषा",
    "meaningEn": "",
    "examples": [
      {
        "en": "a piece of land",
        "hi": "जमीन का एक टुकड़ा"
      },
      {
        "en": "The plane landed",
        "hi": "हवाई जहाज उतर गया"
      }
    ]
  },
  {
    "id": 1538,
    "word": "laptop",
    "pos": "n",
    "pronunciation": "लैपटॉप",
    "meaningHi": "गोद में रखने वाला छोटा कंप्यूटर",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1539,
    "word": "lary",
    "pos": "n",
    "pronunciation": "वकैब्यलरि",
    "meaningHi": "शब्दावली, शब्दभंडार",
    "meaningEn": "",
    "examples": [
      {
        "en": "You need a large vocabulary to write a book",
        "hi": "किताब लिखने के लिए तुम्ें एक बड़े शब्दभंडार की जरूरत होती है।"
      }
    ]
  },
  {
    "id": 1540,
    "word": "last",
    "pos": "adv adj",
    "pronunciation": "लास्ट",
    "meaningHi": "अंत का, अंतिम | कुछ समय तक बने रहना",
    "meaningEn": "",
    "examples": [
      {
        "en": "last rites",
        "hi": "अंतिम संस्ार"
      },
      {
        "en": "What lasts long is your reputation",
        "hi": "जो लम्े समय तक बनी रहती है वह है आपकी कीर्ति।"
      }
    ]
  },
  {
    "id": 1541,
    "word": "late",
    "pos": "adv adj",
    "pronunciation": "लेट",
    "meaningHi": "विलंब से, देरी से 2 स्वर्गीीय",
    "meaningEn": "",
    "examples": [
      {
        "en": "The train is running late",
        "hi": "ट्ेन विलंब से चल रही है।"
      }
    ]
  },
  {
    "id": 1542,
    "word": "lazy",
    "pos": "adj",
    "pronunciation": "लेज़ी",
    "meaningHi": "आलसी",
    "meaningEn": "",
    "examples": [
      {
        "en": "The lazy lose",
        "hi": "आलसी लोग हार जाते हैं।"
      }
    ]
  },
  {
    "id": 1543,
    "word": "leadership",
    "pos": "n",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1544,
    "word": "lean",
    "pos": "v",
    "pronunciation": "लीन",
    "meaningHi": "झुकना",
    "meaningEn": "",
    "examples": [
      {
        "en": "He leaned forward and kissed the child",
        "hi": "वह आगे झुका और बच्चे को चूूम लिया।"
      }
    ]
  },
  {
    "id": 1545,
    "word": "least det adv",
    "pos": "pron adj",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1546,
    "word": "lectureship",
    "pos": "n",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1547,
    "word": "left",
    "pos": "adj adv n",
    "pronunciation": "लेफ़्ट",
    "meaningHi": "बाकी 2 बायीं तरफ का 3 वामपंथ, वामपंथी, कम्ुनिस्ट 1",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1548,
    "word": "legislature",
    "pos": "n",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1549,
    "word": "lend",
    "pos": "v",
    "pronunciation": "लेन्ड",
    "meaningHi": "उधार देना",
    "meaningEn": "",
    "examples": [
      {
        "en": "Please lend me some money",
        "hi": "कृपया मुझे कुछ पैसे उधार दो।"
      }
    ]
  },
  {
    "id": 1550,
    "word": "length",
    "pos": "n",
    "pronunciation": "लेंगथ",
    "meaningHi": "लंबाई",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1551,
    "word": "less adv pron",
    "pos": "prep adv",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1552,
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
    "id": 1553,
    "word": "letter",
    "pos": "n",
    "pronunciation": "",
    "meaningHi": "लेटर 1 पत्र, चिट्ी 2 अक्षर जैसे, a, b, c आदि",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1554,
    "word": "life",
    "pos": "n",
    "pronunciation": "लाइफ़",
    "meaningHi": "जिंदगी, जीवन",
    "meaningEn": "",
    "examples": [
      {
        "en": "All forms of life on earth are precious",
        "hi": "धरती पर जीवन के सारे रूप मूूल्यवान हैं।"
      }
    ]
  },
  {
    "id": 1555,
    "word": "lift",
    "pos": "n / v",
    "pronunciation": "लिफ़्ट",
    "meaningHi": "लिफ्ट मशीन जो किसी ऊँचे भवन में ऊपर के तल पर ले जाती है 2 कार आदि में मुफ्त की सवारी | ऊपर उठाना",
    "meaningEn": "",
    "examples": [
      {
        "en": "I want a lift up to the bus stand",
        "hi": "बस पड़ाव तक एक मैं लिफ्ट चाहता हँ, यानी बस स्ैंड तक आपकी गाड़ी में जाना चाहता हँ।"
      },
      {
        "en": "Lift your hands, please",
        "hi": "अपने हाथों को कृपया ऊपर उठाएं।"
      }
    ]
  },
  {
    "id": 1556,
    "word": "like",
    "pos": "prep conj / v",
    "pronunciation": "लाइक",
    "meaningHi": "| पसंद करना",
    "meaningEn": "",
    "examples": [
      {
        "en": "I like Chinese food",
        "hi": "मैं चाइनीज़ खाना पसन्द करता हँ।"
      }
    ]
  },
  {
    "id": 1557,
    "word": "like prep conj",
    "pos": "n adj",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1558,
    "word": "likely adv",
    "pos": "adj",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1559,
    "word": "line",
    "pos": "n",
    "pronunciation": "लाइन",
    "meaningHi": "रेखा, लकीर 2 कतार, पंक्ति",
    "meaningEn": "",
    "examples": [
      {
        "en": "a long line",
        "hi": "एक लंबी कतार"
      }
    ]
  },
  {
    "id": 1560,
    "word": "lise",
    "pos": "v",
    "pronunciation": "अवधारण करना",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1561,
    "word": "lism",
    "pos": "n",
    "pronunciation": "मटिअरिअ-",
    "meaningHi": "लिज़म पदार्थवाद, भौतिकतावाद वह सिद्धांद्धांत जिसके अनुसार जगत सिर्फ भौतिक पदार्थोंों से बना है, तथा आत्मा और ईश्वर का अस्तित्व नहीं हैं।",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1562,
    "word": "list",
    "pos": "n",
    "pronunciation": "लिस्ट",
    "meaningHi": "सूची",
    "meaningEn": "",
    "examples": [
      {
        "en": "list of items to be bought",
        "hi": "खरीदी जाने वाली चीजों की सूूची"
      }
    ]
  },
  {
    "id": 1563,
    "word": "little adj",
    "pos": "pron adv",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1564,
    "word": "load",
    "pos": "n / v",
    "pronunciation": "लोड",
    "meaningHi": "भार, बोझ | लादना, लदान होना",
    "meaningEn": "",
    "examples": [
      {
        "en": "The load of books on children is increasing",
        "hi": "बचों पर किताबों का बोझ बढ़ता जा रहा है।"
      },
      {
        "en": "a truck loaded with cattle",
        "hi": "जानवरों से लदा हुआ एक ट्रक"
      }
    ]
  },
  {
    "id": 1565,
    "word": "loan",
    "pos": "n",
    "pronunciation": "लोन",
    "meaningHi": "कर्ज, ऋण",
    "meaningEn": "",
    "examples": [
      {
        "en": "Every loan ought to be paid back",
        "hi": "हर कर्ज को चुका देना चाहिए।"
      }
    ]
  },
  {
    "id": 1566,
    "word": "lock",
    "pos": "n / v",
    "pronunciation": "लॉक",
    "meaningHi": "ताला | ताला लगाना",
    "meaningEn": "",
    "examples": [
      {
        "en": "He was locked into a room",
        "hi": "उसे एक कमरे में बंद कर दिया गया।"
      }
    ]
  },
  {
    "id": 1567,
    "word": "loneliness",
    "pos": "n",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1568,
    "word": "loss",
    "pos": "n",
    "pronunciation": "लॉस",
    "meaningHi": "नुकसान, हानि, घाटा",
    "meaningEn": "",
    "examples": [
      {
        "en": "I suffered losses",
        "hi": "मुझे घाटे हुए"
      }
    ]
  },
  {
    "id": 1569,
    "word": "lost",
    "pos": "adj",
    "pronunciation": "लॉस्ट",
    "meaningHi": "खोया हुआ 2 गुमसुम, खोया-खोया lot: a lot of लॉट काफी, अत्यधिक",
    "meaningEn": "",
    "examples": [
      {
        "en": "a lost friend",
        "hi": "एक खोया हुआ दोस्त"
      },
      {
        "en": "He looked lost",
        "hi": "वह खोयाखोया दिख रहा था।"
      }
    ]
  },
  {
    "id": 1570,
    "word": "loud",
    "pos": "adv adj",
    "pronunciation": "लाउड",
    "meaningHi": "बहुत आवाज करता हुआ",
    "meaningEn": "",
    "examples": [
      {
        "en": "a loud voice",
        "hi": "एक उँची आवाज"
      }
    ]
  },
  {
    "id": 1571,
    "word": "luck",
    "pos": "n",
    "pronunciation": "लक",
    "meaningHi": "भाग्य, किस्मत, नसीब",
    "meaningEn": "",
    "examples": [
      {
        "en": "Luck is one of the several factors in our successes",
        "hi": "भाग्य हमारी सफलताओं के कई कारणों में से एक है।"
      }
    ]
  },
  {
    "id": 1572,
    "word": "mad",
    "pos": "adj",
    "pronunciation": "मैड",
    "meaningHi": "पागल, विक्षिप्त",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1573,
    "word": "mail",
    "pos": "n / v",
    "pronunciation": "मेल",
    "meaningHi": "डाक 2 ईमेल | 1 डाक से कुछ भेजना 2 ईमेल से कुछ संदेश भेजना",
    "meaningEn": "",
    "examples": [
      {
        "en": "the letter has been mailed",
        "hi": "चिठ्ी डाक से भेज दी गई है।"
      },
      {
        "en": "the letter has been emailed",
        "hi": "चिट्ी ईमेल से भेज दी गई है।"
      }
    ]
  },
  {
    "id": 1574,
    "word": "main",
    "pos": "adj",
    "pronunciation": "मेन",
    "meaningHi": "मुख्य, प्रमुख मेन्लि प्रधानत:, मुख्य रूप से मेन्टेन 1 बनाए रखना 2 देखभाल करना",
    "meaningEn": "",
    "examples": [
      {
        "en": "main examination",
        "hi": "मुख्य परीक्षा"
      },
      {
        "en": "Tibet is mainly inhabited by Buddhists",
        "hi": "तिब्बत में मुख्य रूप से बौद्ध रहते हैं।"
      }
    ]
  },
  {
    "id": 1575,
    "word": "maintain",
    "pos": "v",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1576,
    "word": "majority",
    "pos": "n",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1577,
    "word": "male",
    "pos": "adj",
    "pronunciation": "मेल",
    "meaningHi": "पुरुष, मर्द",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1578,
    "word": "man",
    "pos": "n",
    "pronunciation": "मैन",
    "meaningHi": "मनुष्य, मानव 2 मर्द, पुरुष 116 अंंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ 1",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1579,
    "word": "many",
    "pos": "det",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1580,
    "word": "many det",
    "pos": "pron adj n",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1581,
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
    "id": 1582,
    "word": "mark",
    "pos": "n / v",
    "pronunciation": "माक",
    "meaningHi": "निशान 2 नंबर 3 दाग 4 स्मरणीय प्रभाव | निशान लगाना",
    "meaningEn": "",
    "examples": [
      {
        "en": "a cut-mark on the chin",
        "hi": "ठुड्ी पर कटने का एक चिह्न"
      },
      {
        "en": "high marks",
        "hi": "ऊँचे नंबर"
      }
    ]
  },
  {
    "id": 1583,
    "word": "married",
    "pos": "adj",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1584,
    "word": "mass",
    "pos": "n adj",
    "pronunciation": "मैस",
    "meaningHi": "जनसाधारण 2 पिंड अंंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ",
    "meaningEn": "",
    "examples": [
      {
        "en": "The masses had revolted at the time of the French revolution",
        "hi": "जनसाधारण ने फांसीसी क्रांति के समय विद्रोह कर दिया था।"
      },
      {
        "en": "A human being is not just a mass of flesh and blood",
        "hi": "मनुष्य केवल रक्त और मांस का पिंड नहीं है।"
      }
    ]
  },
  {
    "id": 1585,
    "word": "material",
    "pos": "adj",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1586,
    "word": "materialism",
    "pos": "n",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1587,
    "word": "mation adj",
    "pos": "adv",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1588,
    "word": "mation)",
    "pos": "n",
    "pronunciation": "हलो, हलउ",
    "meaningHi": "हलो अभिवादन, नमस्ते",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1589,
    "word": "maximum",
    "pos": "n adj",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1590,
    "word": "may modal",
    "pos": "v",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1591,
    "word": "maya",
    "pos": "n",
    "pronunciation": "माया",
    "meaningHi": "माया परब्रह्म-परमेश्वर की वह शक्ति जिससे वे समस्त सृष्टि की रचना करते हैं, और जिसके कारण जीव अपने ईश्वरीय स्वरूप को भूल जाता है।",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1592,
    "word": "meal",
    "pos": "n",
    "pronunciation": "मील",
    "meaningHi": "भोजन 120 121 अंंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ",
    "meaningEn": "",
    "examples": [
      {
        "en": "Why is it that some people can't afford two meals a day?",
        "hi": "ऐसा क्योंों है कि कुछ लोग रोज दो शाम का भोजन का खर्च भी नहीं वहन कर सकते?"
      }
    ]
  },
  {
    "id": 1593,
    "word": "mean",
    "pos": "adj / v",
    "pronunciation": "मीन",
    "meaningHi": "संकीर्ण बुद्धि वाला, क्षुद्र | मतलब या अर्थ व्यक्त करना मीनिंग अर्थ, मतलब",
    "meaningEn": "",
    "examples": [
      {
        "en": "a mean fellow",
        "hi": "एक क्षुद्र व्यक्ति"
      },
      {
        "en": "Water means ‘paani’ - ‘वाटर’ का अर्थ होता है ‘पानी’; I did not mean insult to any religion",
        "hi": "मेरा मतलब किसी धर्म का अपमान करना नहीं था।"
      }
    ]
  },
  {
    "id": 1594,
    "word": "meanwhile",
    "pos": "adv",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1595,
    "word": "measure",
    "pos": "v",
    "pronunciation": "मेशज़र",
    "meaningHi": "नापना मीडिअम मध्यम बीच-बीच का",
    "meaningEn": "",
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
    "id": 1596,
    "word": "mend",
    "pos": "v",
    "pronunciation": "मेन्ड",
    "meaningHi": "मरम्मत करना, सुधारना | अनुशंसा करना, सिफारिश करना",
    "meaningEn": "",
    "examples": [
      {
        "en": "mend your shoes - अपने जूूतों की मरम्मत करो; mend your habits",
        "hi": "अपनी आदतें सुधारो"
      },
      {
        "en": "Doctors recommend regular exercise for maintaining good health",
        "hi": "डॉक्टर अच्े स्ास्थ्य के लिए नियमित व्ायाम की सिफारिश करते हैं।"
      }
    ]
  },
  {
    "id": 1597,
    "word": "mess",
    "pos": "n",
    "pronunciation": "मेस",
    "meaningHi": "अस्तव्यस्तता 2 भोजनकक्ष",
    "meaningEn": "",
    "examples": [
      {
        "en": "the room was in a mess",
        "hi": "कमरा अस्तव्यस्त था"
      }
    ]
  },
  {
    "id": 1598,
    "word": "mine",
    "pos": "pron",
    "pronunciation": "माइन",
    "meaningHi": "मेरा 122 123 अंंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ | खान, खदान",
    "meaningEn": "",
    "examples": [
      {
        "en": "This book is mine",
        "hi": "यह पुस्तक मेरी है।"
      },
      {
        "en": "coal mines",
        "hi": "कोयले की खदानें"
      }
    ]
  },
  {
    "id": 1599,
    "word": "minimum",
    "pos": "adj n",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1600,
    "word": "minority",
    "pos": "n",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1601,
    "word": "miss",
    "pos": "adj / v",
    "pronunciation": "मिस",
    "meaningHi": "अविवाहित स्त्री के नाम से पहले लगाई जाने वाली उपाधि | 1 चूक जाना 2 निशाना चूकना",
    "meaningEn": "",
    "examples": [
      {
        "en": "Miss Manjula",
        "hi": "सुश्ी मंजुला"
      },
      {
        "en": "I missed the flight",
        "hi": "मेरी जहाज छूूट गई"
      }
    ]
  },
  {
    "id": 1602,
    "word": "modern",
    "pos": "adj",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1603,
    "word": "monarchy",
    "pos": "n",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1604,
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
    "id": 1605,
    "word": "monotheism",
    "pos": "n",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1606,
    "word": "month",
    "pos": "n",
    "pronunciation": "मन्थ",
    "meaningHi": "महीना, माह",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1607,
    "word": "mood",
    "pos": "n",
    "pronunciation": "मूड",
    "meaningHi": "मनोदशा, मिजाज",
    "meaningEn": "",
    "examples": [
      {
        "en": "His mood is upset at the moment",
        "hi": "उसकी मनोदशा अभी ठीक नहीं है।"
      }
    ]
  },
  {
    "id": 1608,
    "word": "moon",
    "pos": "n",
    "pronunciation": "मून",
    "meaningHi": "चंद्रमा 124 125 अंंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1609,
    "word": "more",
    "pos": "det",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1610,
    "word": "more det",
    "pos": "pron adv",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1611,
    "word": "most",
    "pos": "det / adv",
    "pronunciation": "मोस्ट",
    "meaningHi": "अधिकांश, ज्ादातर | ज्ादातर, अधिकांश",
    "meaningEn": "",
    "examples": [
      {
        "en": "Most people will agree with this",
        "hi": "इससे अधिकांश लोग सहमत होंगे"
      },
      {
        "en": "I like it most",
        "hi": "मैं इसे सबसे अधिक पसंद करता हँ।"
      }
    ]
  },
  {
    "id": 1612,
    "word": "most det",
    "pos": "pron",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1613,
    "word": "motivated",
    "pos": "adj",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1614,
    "word": "motivation",
    "pos": "n",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1615,
    "word": "movement",
    "pos": "n",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1616,
    "word": "mugging",
    "pos": "n",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1617,
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
    "id": 1618,
    "word": "must",
    "pos": "n",
    "pronunciation": "मस्ट",
    "meaningHi": "अनिवार्य",
    "meaningEn": "",
    "examples": [
      {
        "en": "Woolen clothes are a must in winters",
        "hi": "ऊनी कपड़े जाड़ों में अनिवार्य होते हैं।"
      }
    ]
  },
  {
    "id": 1619,
    "word": "mysterious",
    "pos": "adj",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1620,
    "word": "nail- biting",
    "pos": "adj",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1621,
    "word": "name",
    "pos": "n / v",
    "pronunciation": "नेम",
    "meaningHi": "नाम | 1 नामकरण करना 2 नाम बताना 1",
    "meaningEn": "",
    "examples": [
      {
        "en": "The match had a nail-biting finish",
        "hi": "मैच का अंत अति उत्ुकतापूर्ण था।"
      }
    ]
  },
  {
    "id": 1622,
    "word": "naturally",
    "pos": "adv",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1623,
    "word": "near",
    "pos": "adv adj",
    "pronunciation": "रहे थे।",
    "meaningHi": "निअर निकट, पास का",
    "meaningEn": "",
    "examples": [
      {
        "en": "I live near the city-centre",
        "hi": "मैं सिटी-सेंटर के नजदीक रहता हँ।"
      }
    ]
  },
  {
    "id": 1624,
    "word": "near adv adj",
    "pos": "prep",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1625,
    "word": "nearby adj",
    "pos": "adv",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1626,
    "word": "neat",
    "pos": "adj",
    "pronunciation": "नीट",
    "meaningHi": "साफसुथरा नेससरि आवश्यक, जरूरी",
    "meaningEn": "",
    "examples": [
      {
        "en": "a neatly done work - एक साफसुथरे ढंग से किया गया कार्य; a neat handwriting",
        "hi": "एक साफसुथरी हस्तलिपि"
      },
      {
        "en": "Is it necessary to go there?",
        "hi": "क्ा वहाँ जाना जरूरी है?"
      }
    ]
  },
  {
    "id": 1627,
    "word": "neath prep",
    "pos": "adv n",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1628,
    "word": "neck",
    "pos": "n",
    "pronunciation": "नेक",
    "meaningHi": "गर्दन",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1629,
    "word": "nerve",
    "pos": "n",
    "pronunciation": "नर्व",
    "meaningHi": "स्ायु ये शरीर के भीतर महीन धागों-जैसे होते हैं जो दिमाग और शरीर के अन्य हिस्सोंों के बीच संदेश ले जाते हैं। 2 साहस",
    "meaningEn": "",
    "examples": [
      {
        "en": "Only he has the nerve to do it",
        "hi": "यह करने का साहस केवल उसी के पास है।"
      }
    ]
  },
  {
    "id": 1630,
    "word": "networking",
    "pos": "n",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1631,
    "word": "news",
    "pos": "n",
    "pronunciation": "न्यूज़",
    "meaningHi": "समाचार",
    "meaningEn": "",
    "examples": [
      {
        "en": "the morning news on the TV TV",
        "hi": "टी. वी. पर सुबह का समाचार"
      }
    ]
  },
  {
    "id": 1632,
    "word": "next",
    "pos": "adj adv",
    "pronunciation": "नेक्स्ट",
    "meaningHi": "अगला, आगामी",
    "meaningEn": "",
    "examples": [
      {
        "en": "next elections",
        "hi": "अगले चुनाव"
      }
    ]
  },
  {
    "id": 1633,
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
    "id": 1634,
    "word": "nice",
    "pos": "adj",
    "pronunciation": "नाइस",
    "meaningHi": "बढ़िया, सुंदर",
    "meaningEn": "",
    "examples": [
      {
        "en": "a nice person",
        "hi": "एक अच्ा व्यक्ति"
      }
    ]
  },
  {
    "id": 1635,
    "word": "nity",
    "pos": "n",
    "pronunciation": "अॉपट्ूनटि",
    "meaningHi": "मौका, अवसर",
    "meaningEn": "",
    "examples": [
      {
        "en": "Make the best use of opportunities",
        "hi": "अवसरों का अच्ा-से-अच्ा उपयोग करो।"
      }
    ]
  },
  {
    "id": 1636,
    "word": "nobody pron",
    "pos": "n",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1637,
    "word": "none",
    "pos": "pron",
    "pronunciation": "नन",
    "meaningHi": "कोई नहीं, किसी से नहीं",
    "meaningEn": "",
    "examples": [
      {
        "en": "None of us could do it",
        "hi": "यह हममें से कोई नहीं कर पाया।"
      }
    ]
  },
  {
    "id": 1638,
    "word": "nonviolence",
    "pos": "n",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1639,
    "word": "nor",
    "pos": "det pron / conj adv",
    "pronunciation": "नाइदर",
    "meaningHi": "न तो, न 2 दोनों में से कोई नहीं",
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
    "id": 1640,
    "word": "nor det pron",
    "pos": "adv",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1641,
    "word": "nose",
    "pos": "n",
    "pronunciation": "नोज़",
    "meaningHi": "नाक",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1642,
    "word": "note",
    "pos": "v",
    "pronunciation": "नोट",
    "meaningHi": "लिखना 2 किसी बात पर गौर करना",
    "meaningEn": "",
    "examples": [
      {
        "en": "I have noted the recipe",
        "hi": "मैंने पाकविधि को लिख लिया है।"
      },
      {
        "en": "I have noted the difference in his behaviour",
        "hi": "उसके व्यवहार में फर्क को मैंने गौर किया है।"
      }
    ]
  },
  {
    "id": 1643,
    "word": "nowhere adv",
    "pos": "pron",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1644,
    "word": "oath",
    "pos": "n",
    "pronunciation": "ओथ",
    "meaningHi": "शपथ",
    "meaningEn": "",
    "examples": [
      {
        "en": "I will not break my oath",
        "hi": "मैं अपनी शपथ नहीं तोडूूँगा।"
      }
    ]
  },
  {
    "id": 1645,
    "word": "obey",
    "pos": "v",
    "pronunciation": "अबे",
    "meaningHi": "आज्ा का पालन करना",
    "meaningEn": "",
    "examples": [
      {
        "en": "Let us obey our teachers",
        "hi": "हम अपने शिक्षकों की आज्ा का पालन करें।"
      }
    ]
  },
  {
    "id": 1646,
    "word": "objection",
    "pos": "n",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1647,
    "word": "obtain",
    "pos": "v",
    "pronunciation": "अब्टेन",
    "meaningHi": "प्राप्त करना अॉब््वि़अस स्पष्ट, प्रत्यक्ष अकेशज़न अवसर, मौका",
    "meaningEn": "",
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
    "id": 1648,
    "word": "obvious",
    "pos": "adj",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1649,
    "word": "occasional",
    "pos": "adj",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1650,
    "word": "occupy",
    "pos": "v",
    "pronunciation": "अॉक्युपाइ",
    "meaningHi": "समय या जगह घेरना 2 स्ान ग्रहण करना 3 रहना 1",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1651,
    "word": "occur",
    "pos": "v",
    "pronunciation": "घटित हुई।",
    "meaningHi": "अंंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1652,
    "word": "off adv prep",
    "pos": "adj n",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1653,
    "word": "offer",
    "pos": "n / v",
    "pronunciation": "स्ीकार नहीं किया।",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1654,
    "word": "okay) exclamation",
    "pos": "adj",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1655,
    "word": "omnipotent",
    "pos": "adj",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1656,
    "word": "omniscient",
    "pos": "adj",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1657,
    "word": "once",
    "pos": "adv",
    "pronunciation": "वन्स",
    "meaningHi": "एक बार one",
    "meaningEn": "",
    "examples": [
      {
        "en": "Try once",
        "hi": "एक बार प्रयास करो।"
      }
    ]
  },
  {
    "id": 1658,
    "word": "once adv",
    "pos": "conj",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1659,
    "word": "one number",
    "pos": "det pron",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1660,
    "word": "only",
    "pos": "adj adv",
    "pronunciation": "ओन्लि",
    "meaningHi": "केवल",
    "meaningEn": "",
    "examples": [
      {
        "en": "Only one person can travel on one ticket",
        "hi": "एक टिकट पर केवल एक आदमी सफर कर सकता है।"
      }
    ]
  },
  {
    "id": 1661,
    "word": "only adj adv",
    "pos": "conj",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1662,
    "word": "onto",
    "pos": "prep",
    "pronunciation": "अॉन्टु",
    "meaningHi": "पर अंंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ",
    "meaningEn": "",
    "examples": [
      {
        "en": "The book fell onto the floor",
        "hi": "किताब फर्श पर गिर गई।"
      }
    ]
  },
  {
    "id": 1663,
    "word": "operation",
    "pos": "n",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1664,
    "word": "opponent",
    "pos": "n",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1665,
    "word": "opportunity",
    "pos": "n",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1666,
    "word": "opposite",
    "pos": "adj adv prep n",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1667,
    "word": "optimism",
    "pos": "n",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1668,
    "word": "oral",
    "pos": "adj",
    "pronunciation": "ओरल",
    "meaningHi": "मौखिक",
    "meaningEn": "",
    "examples": [
      {
        "en": "oral orders",
        "hi": "मौखिक आदेश"
      }
    ]
  },
  {
    "id": 1669,
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
    "id": 1670,
    "word": "ordinary",
    "pos": "adj",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1671,
    "word": "organ",
    "pos": "n",
    "pronunciation": "ओगन",
    "meaningHi": "शरीर का अंग ओगनाइज़्ड व्यवस्थित, संगठित, आयोजित",
    "meaningEn": "",
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
    "id": 1672,
    "word": "organisation",
    "pos": "n",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1673,
    "word": "organise",
    "pos": "v",
    "pronunciation": "ओगनाइज़",
    "meaningHi": "संगठित करना, आयोजित करना अंंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ",
    "meaningEn": "",
    "examples": [
      {
        "en": "We organ- ised a painting competition",
        "hi": "हम लोगों ने एक चित्रकला-प्रतिस्पर्धा-कार्यक्रम आयोजित किया।"
      }
    ]
  },
  {
    "id": 1674,
    "word": "organised",
    "pos": "adj",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1675,
    "word": "original",
    "pos": "adj n",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1676,
    "word": "other",
    "pos": "adj",
    "pronunciation": "अदरवाइज़",
    "meaningHi": "दूसरा, अन्य",
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
    "id": 1677,
    "word": "other adj",
    "pos": "pron",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1678,
    "word": "otherwise",
    "pos": "adv",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1679,
    "word": "ours",
    "pos": "pron",
    "pronunciation": "आउअज़",
    "meaningHi": "हमारा आसेलवज़ 1 हम खुद 2 अपने-आप को",
    "meaningEn": "",
    "examples": [
      {
        "en": "He is a friend of ours",
        "hi": "वह हम लोगों का दोस्त है।"
      },
      {
        "en": "We ourselves pitched our tents",
        "hi": "हम लोगों ने खुद ही अपने टेंट लगाए"
      }
    ]
  },
  {
    "id": 1680,
    "word": "ourselves",
    "pos": "pron",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1681,
    "word": "out prep adv",
    "pos": "adj",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1682,
    "word": "over",
    "pos": "adv",
    "pronunciation": "फेंकीं।",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1683,
    "word": "over adv",
    "pos": "prep",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1684,
    "word": "owe",
    "pos": "v",
    "pronunciation": "ओ",
    "meaningHi": "देनदार होना, आभारी होना",
    "meaningEn": "",
    "examples": [
      {
        "en": "I owe fifty rupees to him",
        "hi": "मैं उसका 50 रुपयों का देनदार हँ।"
      }
    ]
  },
  {
    "id": 1685,
    "word": "own",
    "pos": "adj / v",
    "pronunciation": "अउन",
    "meaningHi": "अपना, निजी | किसी वस्तु का स्ामी होना अंंगरेज़ी शब्द उच्ारण हिंदी में अर्थ",
    "meaningEn": "",
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
    "id": 1686,
    "word": "own adj",
    "pos": "pron",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1687,
    "word": "pain",
    "pos": "n",
    "pronunciation": "पेन",
    "meaningHi": "तकलीफ, दर्द",
    "meaningEn": "",
    "examples": [
      {
        "en": "No pain, no gain",
        "hi": "कोई तकलीफ नहीं तो कोई उपलब्धि भी नहीं।"
      }
    ]
  },
  {
    "id": 1688,
    "word": "paint",
    "pos": "n / v",
    "pronunciation": "पेंट",
    "meaningHi": "रंग | 1 रंगना 1 रंगचित्र बनाना",
    "meaningEn": "",
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
    "id": 1689,
    "word": "pair",
    "pos": "n",
    "pronunciation": "",
    "meaningHi": "पेअर जोड़ा",
    "meaningEn": "",
    "examples": [
      {
        "en": "a pair of shoes",
        "hi": "एक जोड़े जूूते"
      }
    ]
  },
  {
    "id": 1690,
    "word": "parliament",
    "pos": "n",
    "pronunciation": "पालमन्ट",
    "meaningHi": "संसद जहाँ चुने हुए जनप्रतिनिधि मिल कर कानून बनाते हैं",
    "meaningEn": "",
    "examples": [
      {
        "en": "the Indian parliament",
        "hi": "भारत की संसद"
      }
    ]
  },
  {
    "id": 1691,
    "word": "partnership",
    "pos": "n",
    "pronunciation": "शिप",
    "meaningHi": "साझेदारी, मिल-जुल कर काम करने की क्रिया",
    "meaningEn": "",
    "examples": [
      {
        "en": "The two companies work in partner- ship with each other",
        "hi": "ये दो कंपनियाँ एक-दूसरे की साझेदारी में काम करती हैं।"
      }
    ]
  },
  {
    "id": 1692,
    "word": "pass",
    "pos": "n / v",
    "pronunciation": "पास",
    "meaningHi": "किसी विशेष स्ान में प्रवेश करने की अनुमति का कागज़ 2 पर्वतों के बीच से तंग रास्ता, घाटी, दर्रा | 1 परीक्षा में सफल होना 2 गुजरना 3 किसी को कुछ आगे बढ़ा",
    "meaningEn": "",
    "examples": [
      {
        "en": "cinema pass",
        "hi": "सिमेना हॉल में निःशुल्क प्रवेश करने की अनुमति का कागज"
      },
      {
        "en": "The Muslim invaders like Mahmud Ghaznavi, Muhammad Ghori and the Turkic-Mongols invaded India coming through the Khyber Pass",
        "hi": "महमूूद गजनवी मोहम्मद गोरी तथा तुर्क-मंगोल आक्रमणकारियों ने खैबर दर्रेे से ही घुस कर भारत पर आक्रमण किया"
      }
    ]
  },
  {
    "id": 1693,
    "word": "passenger",
    "pos": "n",
    "pronunciation": "पैसिनजर",
    "meaningHi": "यात्ी",
    "meaningEn": "",
    "examples": [
      {
        "en": "a bus passenger",
        "hi": "एक बस-यात्री"
      }
    ]
  },
  {
    "id": 1694,
    "word": "past",
    "pos": "adj",
    "pronunciation": "पास्ट",
    "meaningHi": "भूतकाल का जो हो चुका हो",
    "meaningEn": "",
    "examples": [
      {
        "en": "a past incident",
        "hi": "भूूतकाल की एक घटना"
      }
    ]
  },
  {
    "id": 1695,
    "word": "path",
    "pos": "n",
    "pronunciation": "पाथ",
    "meaningHi": "रास्ता",
    "meaningEn": "",
    "examples": [
      {
        "en": "The holy Bhagavad-Gita lays down several paths to liberation",
        "hi": "पवित्र भगवद्-गीता मुक्ति के कई रास्े प्रतिपादित करती है।"
      }
    ]
  },
  {
    "id": 1696,
    "word": "performance",
    "pos": "n",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1697,
    "word": "permission",
    "pos": "n",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1698,
    "word": "persuade",
    "pos": "v",
    "pronunciation": "पस्ेड",
    "meaningHi": "राजी करना, मनाना",
    "meaningEn": "",
    "examples": [
      {
        "en": "Could you persuade him to sing a song?",
        "hi": "क्ा तुम उसे एक गाना गाने के लिए राजी कर पाए?"
      }
    ]
  },
  {
    "id": 1699,
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
    "id": 1700,
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
    "id": 1701,
    "word": "philanthropy",
    "pos": "n",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1702,
    "word": "phone",
    "pos": "n / v",
    "pronunciation": "फ़ोन",
    "meaningHi": "फोन, दूरभाष | फ़ोन करना",
    "meaningEn": "",
    "examples": [
      {
        "en": "Did you phone her?",
        "hi": "क्ा तुमने उसे फोन किया?"
      }
    ]
  },
  {
    "id": 1703,
    "word": "pick",
    "pos": "v",
    "pronunciation": "पिक",
    "meaningHi": "चुनना 2 किसी व्यक्ति को किसी जगह से साथ ले लेना",
    "meaningEn": "",
    "examples": [
      {
        "en": "She picked an expensive dress",
        "hi": "उसने एक महँगा वस्त्र चुना"
      }
    ]
  },
  {
    "id": 1704,
    "word": "pile",
    "pos": "n / v",
    "pronunciation": "पाइल",
    "meaningHi": "वस्तुओं का अंबार एककेऊपरएक | वस्तुओं का ढेर बना देना",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1705,
    "word": "pin",
    "pos": "n",
    "pronunciation": "पिन",
    "meaningHi": "पिन",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1706,
    "word": "pinch",
    "pos": "v",
    "pronunciation": "पिन्च",
    "meaningHi": "चिकोटी काटना",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1707,
    "word": "pipe",
    "pos": "n",
    "pronunciation": "पाइप",
    "meaningHi": "नली 144 145 अंंगरेज़ी शब्द उच्ारण हिंदी में अर्थ",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1708,
    "word": "pity",
    "pos": "n",
    "pronunciation": "पिटि",
    "meaningHi": "दया, करुणा",
    "meaningEn": "",
    "examples": [
      {
        "en": "have pity on the poor",
        "hi": "गरीबों पर करुणा रखना"
      }
    ]
  },
  {
    "id": 1709,
    "word": "place",
    "pos": "n",
    "pronunciation": "प्ेस",
    "meaningHi": "जगह, स्ान",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1710,
    "word": "plan",
    "pos": "n / v",
    "pronunciation": "प्ैन",
    "meaningHi": "योजना | योजना बनाना",
    "meaningEn": "",
    "examples": [
      {
        "en": "a five-year plan",
        "hi": "एक पंचवर्षीीय योजना"
      },
      {
        "en": "plan for a secure future",
        "hi": "एक सुरक्षित जीवन के लिए योजना बनाना"
      }
    ]
  },
  {
    "id": 1711,
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
    "id": 1712,
    "word": "plastic",
    "pos": "n",
    "pronunciation": "प्ैस्टिक",
    "meaningHi": "प्ास्टिक",
    "meaningEn": "",
    "examples": [
      {
        "en": "Isn't plastic damaging the environment?",
        "hi": "क्ा प्ास्टिक वातावरण को नुकसान नहीं पहुँचा रहा है?"
      }
    ]
  },
  {
    "id": 1713,
    "word": "plate",
    "pos": "n",
    "pronunciation": "प्लेट",
    "meaningHi": "तश्तरी",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1714,
    "word": "platform",
    "pos": "n",
    "pronunciation": "प्ैट्फोम",
    "meaningHi": "चबूतरा, मंच 2 रेलवे स्ेशन का प्लैटफौर्म अंंगरेज़ी शब्द उच्ारण हिंदी में अर्थ",
    "meaningEn": "",
    "examples": [
      {
        "en": "He was speaking from a political platform",
        "hi": "वह एक राजनीतिक मंच से बोल रहा था।"
      }
    ]
  },
  {
    "id": 1715,
    "word": "plenty adv pron",
    "pos": "n",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1716,
    "word": "poisonous",
    "pos": "adj",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1717,
    "word": "polytheism",
    "pos": "n",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1718,
    "word": "pool",
    "pos": "n",
    "pronunciation": "पूल",
    "meaningHi": "छोटा तालाब 2 स्विमिंग पूल",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1719,
    "word": "poor",
    "pos": "adj",
    "pronunciation": "पुअ",
    "meaningHi": "गरीब 2 खराब",
    "meaningEn": "",
    "examples": [
      {
        "en": "poor health - बुरा स्ास्थ्य; poor eyesight - खराब दृष्टि; poor performance",
        "hi": "बुरा प्रदर्शन"
      }
    ]
  },
  {
    "id": 1720,
    "word": "port",
    "pos": "n",
    "pronunciation": "पोर्ट",
    "meaningHi": "बंदरगाह, पत्तन अंंगरेज़ी शब्द उच्ारण हिंदी में अर्थ",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1721,
    "word": "possess",
    "pos": "v",
    "pronunciation": "पज़ेस",
    "meaningHi": "अपने पास कुछ होना",
    "meaningEn": "",
    "examples": [
      {
        "en": "I possess a house",
        "hi": "मेरे पास एक घर है।"
      }
    ]
  },
  {
    "id": 1722,
    "word": "possession",
    "pos": "n",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1723,
    "word": "possibility",
    "pos": "n",
    "pronunciation": "पॉसिबिलटि",
    "meaningHi": "संभावना",
    "meaningEn": "",
    "examples": [
      {
        "en": "There is no possibility of rains today",
        "hi": "आज बारिश की कोई संभावना नहीं है।"
      }
    ]
  },
  {
    "id": 1724,
    "word": "possibly",
    "pos": "adv",
    "pronunciation": "पॉसिब्लि",
    "meaningHi": "शायद",
    "meaningEn": "",
    "examples": [
      {
        "en": "She may possibly come today",
        "hi": "वह शायद आज आएगी।"
      }
    ]
  },
  {
    "id": 1725,
    "word": "post",
    "pos": "n / v",
    "pronunciation": "पोस्ट",
    "meaningHi": "पद 2 खंभा 3 छोटा लेख | पत्र डाक से भेजना",
    "meaningEn": "",
    "examples": [
      {
        "en": "Major General is a high post in the Army",
        "hi": "मेजर जेनरल थलसेना का एक ऊँचा पद है।"
      },
      {
        "en": "lamp-post",
        "hi": "बिजली का खंभा"
      }
    ]
  },
  {
    "id": 1726,
    "word": "posture",
    "pos": "n",
    "pronunciation": "पॉसचर",
    "meaningHi": "बैठने या खड़े होने की मुद्रा या तरीका",
    "meaningEn": "",
    "examples": [
      {
        "en": "Bad posture can lead to back pain",
        "hi": "बैठने की गलत मुद्रा से पीठ का दर्द हो सकता है।"
      }
    ]
  },
  {
    "id": 1727,
    "word": "pot",
    "pos": "n",
    "pronunciation": "",
    "meaningHi": "पॉट कटोरा, बरतन",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1728,
    "word": "pour",
    "pos": "v",
    "pronunciation": "बर्रतन में उड़ेला।",
    "meaningHi": "अंंगरेज़ी शब्द उच्ारण हिंदी में अर्थ",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1729,
    "word": "precise",
    "pos": "adj",
    "pronunciation": "प्रिसाइस",
    "meaningHi": "सटीक, स्पष्ट और जितनी जरूरत हो ठीक उतने ही शब्दों में कहा हुआ",
    "meaningEn": "",
    "examples": [
      {
        "en": "He never gives a clear and precise answer",
        "hi": "वह कभी भी स्पष्ट और सटीक उत्तर नहीं देता।"
      }
    ]
  },
  {
    "id": 1730,
    "word": "prep",
    "pos": "n / conj adv",
    "pronunciation": "बिहाइंड",
    "meaningHi": "पीछे, पीठ की ओर | किसी बात को ध्ान में रखते हुए",
    "meaningEn": "",
    "examples": [
      {
        "en": "My house is behind the movie theatre",
        "hi": "मेरा घर सिनेमा हॉल के पीछे है।"
      },
      {
        "en": "let us eat less salt",
        "hi": "हम कम नमक खाएँ"
      }
    ]
  },
  {
    "id": 1731,
    "word": "preparation",
    "pos": "n",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1732,
    "word": "principal",
    "pos": "n / adj",
    "pronunciation": "प्रिन्पल",
    "meaningHi": "किसी स्ूल या कॉलेज का प्राचार्य | मुख्य, प्रधान",
    "meaningEn": "",
    "examples": [
      {
        "en": "the principal cities of India",
        "hi": "भारत के मुख्य शहर"
      }
    ]
  },
  {
    "id": 1733,
    "word": "prioritise",
    "pos": "v",
    "pronunciation": "प्राइअॉरटा-",
    "meaningHi": "इज़ प्राथमिकता तय करना कौन काम कब अधिक और पहले जरूरी है, यह तय करना अंंगरेज़ी शब्द उच्ारण हिंदी में अर्थ",
    "meaningEn": "",
    "examples": [
      {
        "en": "Daily prioritise your tasks to become effective",
        "hi": "प्रभावी होने के लिए रोज अपने कार्योंों की प्राथमिकता तय किया करो, यानि कौन-सा काम पहले करना है, कौन-सा बाद में।"
      }
    ]
  },
  {
    "id": 1734,
    "word": "probable",
    "pos": "adj",
    "pronunciation": "प्ॉबब्ल",
    "meaningHi": "संभावित जिसकी अधिक संभावना हो",
    "meaningEn": "",
    "examples": [
      {
        "en": "a probable consequence",
        "hi": "एक संभावित परिणाम"
      }
    ]
  },
  {
    "id": 1735,
    "word": "procrastination",
    "pos": "n",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1736,
    "word": "produce",
    "pos": "v",
    "pronunciation": "प्रड्ूस",
    "meaningHi": "उत्पादन करना, कुछ बनाना",
    "meaningEn": "",
    "examples": [
      {
        "en": "produce milk products",
        "hi": "दूध के सामान का उत्ादन करो"
      }
    ]
  },
  {
    "id": 1737,
    "word": "production",
    "pos": "n",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1738,
    "word": "professional",
    "pos": "n",
    "pronunciation": "प्रफ़ेेशनल",
    "meaningHi": "प्रोफे़शनल, पेशेवर",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1739,
    "word": "programme",
    "pos": "n",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1740,
    "word": "pron",
    "pos": "det adv conj / adj / adj n",
    "pronunciation": "एक",
    "meaningHi": "",
    "meaningEn": "",
    "examples": [
      {
        "en": "You may have to wait for at least twenty minutes",
        "hi": "तुम्ें कम- से-कम बीस मिनट इंतजार करना पड़ सकता है।"
      },
      {
        "en": "Give me a little sugar - मुझे थोड़ी चीनी दो। There is little hope of his survival",
        "hi": "उसके जीने की आशा कम है।"
      }
    ]
  },
  {
    "id": 1741,
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
    "id": 1742,
    "word": "pronunciation",
    "pos": "n",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1743,
    "word": "pull",
    "pos": "v",
    "pronunciation": "पुल",
    "meaningHi": "खींचना",
    "meaningEn": "",
    "examples": [
      {
        "en": "She pulled the chain to stop the train",
        "hi": "ट्ेन रोकने के लिए उसने जंजीर खींची।"
      }
    ]
  },
  {
    "id": 1744,
    "word": "pump",
    "pos": "v",
    "pronunciation": "पम्प",
    "meaningHi": "पंप करना, प्रवाहित करना",
    "meaningEn": "",
    "examples": [
      {
        "en": "The heart continuously pumps blood into the whole body",
        "hi": "ह्रदय सारे शरीर में लगातार खूून प्रवाहित करता रहता है।"
      }
    ]
  },
  {
    "id": 1745,
    "word": "punishment",
    "pos": "n",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1746,
    "word": "pure",
    "pos": "adj",
    "pronunciation": "प्ुअर",
    "meaningHi": "शुद्ध",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1747,
    "word": "push",
    "pos": "n / v",
    "pronunciation": "पुश",
    "meaningHi": "धक्का, ठेल | ठेलना, धकेलना",
    "meaningEn": "",
    "examples": [
      {
        "en": "She gave him a push",
        "hi": "उसने उसे एक धक्ा दिया।"
      },
      {
        "en": "They pushed the car to start it",
        "hi": "उनोंने कार को स्टार्ट करने के लिए धकेला।"
      }
    ]
  },
  {
    "id": 1748,
    "word": "quarrelsome",
    "pos": "adj",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1749,
    "word": "quilt",
    "pos": "n",
    "pronunciation": "क्विल्ट",
    "meaningHi": "रजाई",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1750,
    "word": "quit",
    "pos": "v",
    "pronunciation": "क्विट",
    "meaningHi": "कोई नौकरी या स्ान छोड़ना",
    "meaningEn": "",
    "examples": [
      {
        "en": "He quit his job",
        "hi": "उसने नौकरी छोड़ दी ।"
      }
    ]
  },
  {
    "id": 1751,
    "word": "quiz",
    "pos": "n",
    "pronunciation": "क्विज़",
    "meaningHi": "प्रश्न-उत्तर का खेल",
    "meaningEn": "",
    "examples": [
      {
        "en": "a quiz competition",
        "hi": "एक क्विज़ प्रतियोगिता"
      }
    ]
  },
  {
    "id": 1752,
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
    "id": 1753,
    "word": "Quotient)",
    "pos": "n",
    "pronunciation": "ई क्यू",
    "meaningHi": "इमोशनल कोशंट भावनात्मक लब्धि भावनात्मक विकास मापने का पैमाना | कोशंट बुद्धिलब्धि बुद्धि का विकास मापने का पैमाना | स्पिरिचुअल कोशंट आध्ात्मिक लब्धि",
    "meaningEn": "",
    "examples": [
      {
        "en": "EQ has been found more important than IQ for success in life",
        "hi": "जीवन में सफल होने के लिए बुद्धिलब्धि से अधिक भावनात्मक लब्धि को महत्त्वपूर्ण पाया गया है।"
      },
      {
        "en": "A child with a very high IQ",
        "hi": "बहुत ऊँची बुद्धि -लब्धि वाला बच्चा।"
      }
    ]
  },
  {
    "id": 1754,
    "word": "race",
    "pos": "n / v",
    "pronunciation": "रेस",
    "meaningHi": "नस्ल 2 दौड़ | तेज दौड़ना",
    "meaningEn": "",
    "examples": [
      {
        "en": "The Chinese belong to the mongoloid race",
        "hi": "चीनी मोंगोलोइड नस्ल के होते हैं।"
      },
      {
        "en": "He won the race",
        "hi": "वह दौड़ जीत गया।"
      }
    ]
  },
  {
    "id": 1755,
    "word": "rain",
    "pos": "n / v",
    "pronunciation": "रेन",
    "meaningHi": "वर्षा | 1 वर्षा होना 2 वर्षा करना",
    "meaningEn": "",
    "examples": [
      {
        "en": "It's raining",
        "hi": "बारिश हो रही है।"
      },
      {
        "en": "The USA rained missiles on Afghanistan to destroy terrorist camps",
        "hi": "आतंकियों के शिविर नष्ट करने के लिए अमेरिका ने अफ़ग़ा- निस्ान पर मिसाइलों की वर्षा की ।"
      }
    ]
  },
  {
    "id": 1756,
    "word": "Ramayan",
    "pos": "n",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1757,
    "word": "rank",
    "pos": "n / v",
    "pronunciation": "रैंक",
    "meaningHi": "पद, श्ेणी | श्ेणी अथवा स्ान प्राप्त या प्रदान करना",
    "meaningEn": "",
    "examples": [
      {
        "en": "a colonel rank officer",
        "hi": "एक कर्नल श्ेणी का अधिकारी"
      },
      {
        "en": "He was ranked third in the competition",
        "hi": "उसे प्रतिस्पर्धा में तीसरा स्थान प्राप्त हुआ।"
      }
    ]
  },
  {
    "id": 1758,
    "word": "rare",
    "pos": "adj",
    "pronunciation": "- एक विरल संमान",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1759,
    "word": "rate",
    "pos": "n / v",
    "pronunciation": "रेट",
    "meaningHi": "दर, मूल्य | आँकना, व्यक्ति या वस्तु का मूलांकन होना या करना",
    "meaningEn": "",
    "examples": [
      {
        "en": "At what rate did you buy it?",
        "hi": "तुमने इसे किस मूूल्य पर खरीदा?"
      },
      {
        "en": "The IITs are rated as good engineer- ing training institutes",
        "hi": "आइ आइ टी को अच्े अभियंत्रण प्रशिक्षण संस्थानों के रूप में आँका जाता है।"
      }
    ]
  },
  {
    "id": 1760,
    "word": "read",
    "pos": "v",
    "pronunciation": "रीड",
    "meaningHi": "पढ़ना",
    "meaningEn": "",
    "examples": [
      {
        "en": "It is a good habit to read some book for a few minutes before going to sleep",
        "hi": "सोने से पहले बिस्तर में कोई किताब कुछ देर के लिए पढ़ना एक अच्छी आदत है।"
      }
    ]
  },
  {
    "id": 1761,
    "word": "real",
    "pos": "adj",
    "pronunciation": "रीअल",
    "meaningHi": "वास्तविक, सचमुच का",
    "meaningEn": "",
    "examples": [
      {
        "en": "Is it a soft toy or a real doggy?",
        "hi": "क्ा यह एक सॉफ्ट खिलौना है या एक वास्तविक कुत्ता?"
      }
    ]
  },
  {
    "id": 1762,
    "word": "reasonable",
    "pos": "adj",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1763,
    "word": "reasoning",
    "pos": "n",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1764,
    "word": "rebellious",
    "pos": "adj",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1765,
    "word": "recently",
    "pos": "adv",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1766,
    "word": "recognise",
    "pos": "v",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1767,
    "word": "recommend",
    "pos": "v",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1768,
    "word": "recovery",
    "pos": "n",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1769,
    "word": "reduction",
    "pos": "n",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1770,
    "word": "regard",
    "pos": "n / v",
    "pronunciation": "रिगाड",
    "meaningHi": "आदर | 1 आदर देना 2 के रूप में मान्यता देना 1",
    "meaningEn": "",
    "examples": [
      {
        "en": "I have great regards for her",
        "hi": "मेरा उनके लिए बड़ा आदर है।"
      }
    ]
  },
  {
    "id": 1771,
    "word": "regional",
    "pos": "adj",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1772,
    "word": "regular",
    "pos": "adj",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1773,
    "word": "regularly",
    "pos": "adv",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1774,
    "word": "reincarnation",
    "pos": "n",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1775,
    "word": "relationship",
    "pos": "n",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1776,
    "word": "relative",
    "pos": "n",
    "pronunciation": "रेलटिव",
    "meaningHi": "रिश्तेश्तेदार, संबंधी",
    "meaningEn": "",
    "examples": [
      {
        "en": "She is a close relative",
        "hi": "वह एक निकट की रिश्तेश्तेदार है।"
      }
    ]
  },
  {
    "id": 1777,
    "word": "reliable",
    "pos": "adj",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1778,
    "word": "religious",
    "pos": "adj",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1779,
    "word": "rent",
    "pos": "n / v",
    "pronunciation": "रेन्ट",
    "meaningHi": "किराया | किराया पर देना",
    "meaningEn": "",
    "examples": [
      {
        "en": "What is the rent of this flat?",
        "hi": "इस फ्ैट का किराया क्ा है?"
      },
      {
        "en": "He rents rooms in his house to students",
        "hi": "वह अपने घर के कमरे विद्ार्थियों को किराये पर देता है।"
      }
    ]
  },
  {
    "id": 1780,
    "word": "represent",
    "pos": "v",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1781,
    "word": "reserve",
    "pos": "v",
    "pronunciation": "रिज़र्व",
    "meaningHi": "आरक्षित या सुरक्षित रखना रिज़व्ड 1 संकोची, अपने-आप में रहने वाला 2 आरक्षित",
    "meaningEn": "",
    "examples": [
      {
        "en": "Please reserve a seat for me",
        "hi": "कृपया मेरे लिए एक सीट आरक्षित कर लो।"
      }
    ]
  },
  {
    "id": 1782,
    "word": "reserved",
    "pos": "adj",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1783,
    "word": "responsibility",
    "pos": "n",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1784,
    "word": "rest",
    "pos": "n / v",
    "pronunciation": "रेस्ट",
    "meaningHi": "आराम 2 बाकी लोग, शेष भाग | आराम करना",
    "meaningEn": "",
    "examples": [
      {
        "en": "take rest",
        "hi": "आराम करो"
      },
      {
        "en": "two stayed, the rest went away",
        "hi": "दो रुके, बाकी चले गए"
      }
    ]
  },
  {
    "id": 1785,
    "word": "reverence",
    "pos": "n",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1786,
    "word": "rich",
    "pos": "adj",
    "pronunciation": "रिच",
    "meaningHi": "धनवान, अमीर 2 तेल-घी से भरा हुआ भोजन",
    "meaningEn": "",
    "examples": [
      {
        "en": "a rich man",
        "hi": "एक अमीर आदमी"
      }
    ]
  },
  {
    "id": 1787,
    "word": "ride",
    "pos": "n / v",
    "pronunciation": "राइड",
    "meaningHi": "घोड़ा, साइकिल, कार, बस आदि की सवारी | 1 घुड़सवारी करना 2 सवारी करना राइट 1 उचित 2 दाहिना 3 सही, सटीक अंंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ",
    "meaningEn": "",
    "examples": [
      {
        "en": "an elephant ride",
        "hi": "हाथी की सवारी"
      },
      {
        "en": "riding a motorbike",
        "hi": "मोटरबाइक की सवारी करता हुआ"
      }
    ]
  },
  {
    "id": 1788,
    "word": "ring",
    "pos": "n / v",
    "pronunciation": "रिंग",
    "meaningHi": "अँगूठी | 1 बजना 2 बजाना",
    "meaningEn": "",
    "examples": [
      {
        "en": "the bell rang",
        "hi": "घंटी बजी"
      },
      {
        "en": "he rang the bell",
        "hi": "उसने घंटी बजाई"
      }
    ]
  },
  {
    "id": 1789,
    "word": "rise",
    "pos": "n / v",
    "pronunciation": "राइज़",
    "meaningHi": "वृद्धि 2 उदय | 1 ऊपर उठना, खड़ा होना 2 जगना",
    "meaningEn": "",
    "examples": [
      {
        "en": "price rise मूूल्य",
        "hi": "वृद्धि"
      },
      {
        "en": "the rise of Bill Gates",
        "hi": "बिल गेट्स का उदय"
      }
    ]
  },
  {
    "id": 1790,
    "word": "risk",
    "pos": "n / v",
    "pronunciation": "रिस्क",
    "meaningHi": "जोखिम, खतरा | जोखिम या खतरा मोल लेना",
    "meaningEn": "",
    "examples": [
      {
        "en": "Soldiers risk their life for the country",
        "hi": "सैनिक देश के लिए अपने जीवन का खतरा मोल लेते हैं।"
      }
    ]
  },
  {
    "id": 1791,
    "word": "road",
    "pos": "n",
    "pronunciation": "रोड",
    "meaningHi": "सड़क",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1792,
    "word": "roll",
    "pos": "n / v",
    "pronunciation": "रोल",
    "meaningHi": "बेलन के आकार में लपेटी हुई वस्तु | गोल-गोल लुढ़कते हुए जाना",
    "meaningEn": "",
    "examples": [
      {
        "en": "paneer roll",
        "hi": "पनीर रोल"
      },
      {
        "en": "The stone rolled down the mountain",
        "hi": "पत्थर पहाड़ से लुढ़कता हुआ नीचे चला गया।"
      }
    ]
  },
  {
    "id": 1793,
    "word": "roof",
    "pos": "n",
    "pronunciation": "रूफ़",
    "meaningHi": "छत",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1794,
    "word": "room",
    "pos": "n",
    "pronunciation": "रूम",
    "meaningHi": "कमरा 2 जगह, स्ान",
    "meaningEn": "",
    "examples": [
      {
        "en": "My bag is full, and It has no room for anything else",
        "hi": "मेरा थैला भरा हुआ है, और इसमें किसी अन्य चीज के लिए जगह नहीं है।"
      }
    ]
  },
  {
    "id": 1795,
    "word": "roundabout",
    "pos": "n",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1796,
    "word": "rude",
    "pos": "adj",
    "pronunciation": "रूड",
    "meaningHi": "अशिष्ट, रुखा, उजड्ड",
    "meaningEn": "",
    "examples": [
      {
        "en": "rude behaviour",
        "hi": "रूखा व्यवहार"
      }
    ]
  },
  {
    "id": 1797,
    "word": "rule",
    "pos": "n / v",
    "pronunciation": "रूल",
    "meaningHi": "नियम 2 शासन | देश, जनता आदि पर शासन करना",
    "meaningEn": "",
    "examples": [
      {
        "en": "rules of the game",
        "hi": "खेल के नियम"
      },
      {
        "en": "The British rule in India",
        "hi": "भारत में ब्रिटिश शासन।"
      }
    ]
  },
  {
    "id": 1798,
    "word": "rush",
    "pos": "n / v",
    "pronunciation": "रश",
    "meaningHi": "भीड़ | 1 झपट कर तेजी से बढ़ना अंंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ",
    "meaningEn": "",
    "examples": [
      {
        "en": "rush in the cinema halls",
        "hi": "सिनेमा हॉल में भीड़"
      },
      {
        "en": "He rushed to the hospital",
        "hi": "वह तेजी से अस्पताल पहुँचा।"
      }
    ]
  },
  {
    "id": 1799,
    "word": "safe",
    "pos": "adj / n",
    "pronunciation": "सेफ़",
    "meaningHi": "सुरक्षित | मूल्यवान वस्तुएँ सुरक्षित रखने का लोहे का विशेष बक्सा",
    "meaningEn": "",
    "examples": [
      {
        "en": "a safe place",
        "hi": "एक सुरक्षित जगह"
      },
      {
        "en": "Money kept in the safe was stolen",
        "hi": "सेफ में रखा पैसा चोरी हो गया।"
      }
    ]
  },
  {
    "id": 1800,
    "word": "sail",
    "pos": "v",
    "pronunciation": "सेल",
    "meaningHi": "नदी या समुद्र के जल में यात्ा करना",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1801,
    "word": "sale",
    "pos": "n",
    "pronunciation": "सेल",
    "meaningHi": "बिक्रीक्री",
    "meaningEn": "",
    "examples": [
      {
        "en": "Sale of liquor in this area is prohibited",
        "hi": "इस क्षेत्र में शराब की बिक्री मना है।"
      }
    ]
  },
  {
    "id": 1802,
    "word": "same",
    "pos": "adj pron adv",
    "pronunciation": "सेम",
    "meaningHi": "वैसा ही, एक-जैसा सनातन धर्म हिंदू-धर्म का मूल नाम",
    "meaningEn": "",
    "examples": [
      {
        "en": "Both of them have the same problem",
        "hi": "दोनों की एक ही समस्ा है।"
      }
    ]
  },
  {
    "id": 1803,
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
    "id": 1804,
    "word": "satisfactory",
    "pos": "adj",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1805,
    "word": "save",
    "pos": "v",
    "pronunciation": "सेव",
    "meaningHi": "रक्षा करना, बचाना 2 बचत करना, पैसे बचाना अंंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ",
    "meaningEn": "",
    "examples": [
      {
        "en": "The police saved me from the goons",
        "hi": "पुलिस ने गुंडों से मेरी रक्षा की।"
      },
      {
        "en": "He saves some money every month",
        "hi": "वह हर महीने कुछ पैसों की बचत करता है।"
      }
    ]
  },
  {
    "id": 1806,
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
    "id": 1807,
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
    "id": 1808,
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
    "id": 1809,
    "word": "seat",
    "pos": "n",
    "pronunciation": "सीट",
    "meaningHi": "बैठने का आसन",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1810,
    "word": "second det adv",
    "pos": "adj n v",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1811,
    "word": "sect",
    "pos": "n",
    "pronunciation": "सेक्ट",
    "meaningHi": "संप्रदाय किसी धर्म की एक शाखा, जैसे वैष्णव संप्रदाय, शैव संप्रदाय, शाक्त संप्र- दाय, आदि",
    "meaningEn": "",
    "examples": [
      {
        "en": "The Hindu religion is divided in countless sects",
        "hi": "हिंदू- धर्म असंख्य संप्रदायों में बँटा हुआ है।"
      }
    ]
  },
  {
    "id": 1812,
    "word": "seem",
    "pos": "v",
    "pronunciation": "सीम",
    "meaningHi": "प्रतीत होना",
    "meaningEn": "",
    "examples": [
      {
        "en": "It seems he is not happy",
        "hi": "ऐसा प्रतीत होता है कि वह खुश नहीं है।"
      }
    ]
  },
  {
    "id": 1813,
    "word": "sell",
    "pos": "v",
    "pronunciation": "सेल",
    "meaningHi": "बेचना 174 175 अंंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ",
    "meaningEn": "",
    "examples": [
      {
        "en": "Companies often lie in order to sell their products",
        "hi": "अपने माल को बेचने के लिए कम्पनियाँ अकसर झूठ बोलती हैं।"
      }
    ]
  },
  {
    "id": 1814,
    "word": "seller",
    "pos": "n",
    "pronunciation": "सेलर",
    "meaningHi": "विक्रेक्रेता",
    "meaningEn": "",
    "examples": [
      {
        "en": "Sellers and buyers both should be happy",
        "hi": "बेचेने और खरीदने वाले दोनों खुश रहने चाहिए।"
      }
    ]
  },
  {
    "id": 1815,
    "word": "send",
    "pos": "v",
    "pronunciation": "सेन्ड",
    "meaningHi": "भेजना",
    "meaningEn": "",
    "examples": [
      {
        "en": "He sent me a nice gift",
        "hi": "उसने मुझे एक अच्ा उपहार भेजा।"
      }
    ]
  },
  {
    "id": 1816,
    "word": "separated",
    "pos": "adj",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1817,
    "word": "separately",
    "pos": "adv",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1818,
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
    "id": 1819,
    "word": "September",
    "pos": "n",
    "pronunciation": "सेप्ेम्बर",
    "meaningHi": "सितंबर का महीना अंंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1820,
    "word": "series",
    "pos": "n",
    "pronunciation": "सीअरीज़",
    "meaningHi": "श्रृंृंखला एक-के-बाद-एक कई खंडों में जो हो या चले",
    "meaningEn": "",
    "examples": [
      {
        "en": "cricket test series",
        "hi": "क्रिकेट टेस्ट-श्रृंृंखला"
      }
    ]
  },
  {
    "id": 1821,
    "word": "several det pron",
    "pos": "adj",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1822,
    "word": "shallow",
    "pos": "adj",
    "pronunciation": "शैलो",
    "meaningHi": "छिछला, गहरा नहीं",
    "meaningEn": "",
    "examples": [
      {
        "en": "a shallow pond - एक छिछला तालाब; shallow knowledge",
        "hi": "छिछला ज्ान"
      }
    ]
  },
  {
    "id": 1823,
    "word": "ship",
    "pos": "n",
    "pronunciation": "लीडरशिप",
    "meaningHi": "नेतृत्व | लेक्चरशिप, कॉलेज में पढ़ाने की एक पेशा | न्शिप संबंध, रिश्ताश्ता",
    "meaningEn": "",
    "examples": [
      {
        "en": "leadership qualities",
        "hi": "नेतृत्व के गुण"
      },
      {
        "en": "I have no relationship with him",
        "hi": "मेरा उनसे कोई रिश्ताश्ता नहीं है।"
      }
    ]
  },
  {
    "id": 1824,
    "word": "shoes",
    "pos": "n",
    "pronunciation": "शूज़",
    "meaningHi": "जूते",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1825,
    "word": "shop",
    "pos": "n / v",
    "pronunciation": "शॉप",
    "meaningHi": "दुकान | खरीददारी करना",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1826,
    "word": "shopping",
    "pos": "n",
    "pronunciation": "शॉपिंग",
    "meaningHi": "खरीददारी 178 179 अंंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1827,
    "word": "show",
    "pos": "n / v",
    "pronunciation": "शो",
    "meaningHi": "कार्यक्रम, तमाशा | दिखाना",
    "meaningEn": "",
    "examples": [
      {
        "en": "a magic show",
        "hi": "एक जादू का तमाशा"
      },
      {
        "en": "Show your teeth",
        "hi": "अपने दाँत दिखाओ"
      }
    ]
  },
  {
    "id": 1828,
    "word": "shrink",
    "pos": "v",
    "pronunciation": "श्रिंंक",
    "meaningHi": "सिकुड़ जाना",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1829,
    "word": "shut",
    "pos": "v",
    "pronunciation": "शट",
    "meaningHi": "बंद करना",
    "meaningEn": "",
    "examples": [
      {
        "en": "Never shut the doors of your mind",
        "hi": "अपने दिमाग के दरवाजे कभी बंद नहीं करना।"
      }
    ]
  },
  {
    "id": 1830,
    "word": "sick",
    "pos": "adj",
    "pronunciation": "सिक",
    "meaningHi": "बीमार",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1831,
    "word": "sickness",
    "pos": "n",
    "pronunciation": "सिकनेस",
    "meaningHi": "बीमारी",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1832,
    "word": "side",
    "pos": "n / v",
    "pronunciation": "साइड",
    "meaningHi": "बगल 2 पक्ष 1",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1833,
    "word": "sign",
    "pos": "n / v",
    "pronunciation": "साइन",
    "meaningHi": "चिह्न 2 संकेत | हस्ताक्षर करना",
    "meaningEn": "",
    "examples": [
      {
        "en": "traffic sign",
        "hi": "ट्रैफिक चिह्न"
      },
      {
        "en": "a good sign",
        "hi": "एक अच्ा संकेत"
      }
    ]
  },
  {
    "id": 1834,
    "word": "sing",
    "pos": "v",
    "pronunciation": "सिंग",
    "meaningHi": "गीत गाना",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1835,
    "word": "sink",
    "pos": "v",
    "pronunciation": "सिंक",
    "meaningHi": "डूबना",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1836,
    "word": "size",
    "pos": "n",
    "pronunciation": "साइज़",
    "meaningHi": "आकार कितना बड़ा या छोटा | आकार",
    "meaningEn": "",
    "examples": [
      {
        "en": "The elephant has a big size",
        "hi": "हाथी का आकार बड़ा होता है।"
      }
    ]
  },
  {
    "id": 1837,
    "word": "skin",
    "pos": "n",
    "pronunciation": "स््किन",
    "meaningHi": "त्वचा, चमड़ी",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1838,
    "word": "skirt",
    "pos": "n",
    "pronunciation": "स्कर्ट",
    "meaningHi": "स्कर्ट, घाघरा",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1839,
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
    "id": 1840,
    "word": "slight",
    "pos": "adj",
    "pronunciation": "स्ाइट",
    "meaningHi": "थोड़ा-सा, मामूली",
    "meaningEn": "",
    "examples": [
      {
        "en": "slight injury",
        "hi": "मामूूली चोट"
      }
    ]
  },
  {
    "id": 1841,
    "word": "slightly",
    "pos": "adv",
    "pronunciation": "स्ाइटलि",
    "meaningHi": "थोड़ा-सा, जरा-सा",
    "meaningEn": "",
    "examples": [
      {
        "en": "slightly sour",
        "hi": "जरा-सा खट्ा"
      }
    ]
  },
  {
    "id": 1842,
    "word": "slip",
    "pos": "v",
    "pronunciation": "स््लिप",
    "meaningHi": "फिसलना",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1843,
    "word": "slow",
    "pos": "adj",
    "pronunciation": "स्ो",
    "meaningHi": "धीमा",
    "meaningEn": "",
    "examples": [
      {
        "en": "slow motion",
        "hi": "धीमी चाल"
      }
    ]
  },
  {
    "id": 1844,
    "word": "snow",
    "pos": "n / v",
    "pronunciation": "स्ो",
    "meaningHi": "बर्फ | आसमान से बर्फ गिरना, हिमपात होना",
    "meaningEn": "",
    "examples": [
      {
        "en": "snowfall",
        "hi": "बर्फबारी"
      },
      {
        "en": "It snows in winters",
        "hi": "जाड़ों में हिमपात होता है।"
      }
    ]
  },
  {
    "id": 1845,
    "word": "soak",
    "pos": "v",
    "pronunciation": "सोक",
    "meaningHi": "भिगो देना",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1846,
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
    "id": 1847,
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
    "id": 1848,
    "word": "soft",
    "pos": "adj",
    "pronunciation": "सॉफ़्ट",
    "meaningHi": "मुलायम",
    "meaningEn": "",
    "examples": [
      {
        "en": "soft-spoken",
        "hi": "मृदुभाषी"
      }
    ]
  },
  {
    "id": 1849,
    "word": "software",
    "pos": "n",
    "pronunciation": "सॉफ़्टवेअ",
    "meaningHi": "र प्रोग्ाम जिससे कंप्यूटर पर कार्य होता है, जैसे माइक्रो सॉफ़ट वर्ड एक भाषा लिखने का सॉफ्टवेअर है",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1850,
    "word": "soil",
    "pos": "n",
    "pronunciation": "सोइल",
    "meaningHi": "मिट्ी",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1851,
    "word": "some",
    "pos": "adj / det pron adv",
    "pronunciation": "क्वॉरल्सम",
    "meaningHi": "झगड़ालूू | कुछ",
    "meaningEn": "",
    "examples": [
      {
        "en": "a quarrelsome boy",
        "hi": "एक झगड़ालूू लड़का"
      },
      {
        "en": "some people",
        "hi": "कुछ लोग"
      }
    ]
  },
  {
    "id": 1852,
    "word": "song",
    "pos": "n",
    "pronunciation": "सौंग",
    "meaningHi": "गीत",
    "meaningEn": "",
    "examples": [
      {
        "en": "lovely song!",
        "hi": "प्ारा गीत!"
      }
    ]
  },
  {
    "id": 1853,
    "word": "soon",
    "pos": "adv",
    "pronunciation": "सून",
    "meaningHi": "जल्ी",
    "meaningEn": "",
    "examples": [
      {
        "en": "Come soon!",
        "hi": "जल्ी आओ!"
      }
    ]
  },
  {
    "id": 1854,
    "word": "sore",
    "pos": "adj",
    "pronunciation": "सोर",
    "meaningHi": "दर्दीीला, दुखता हुआ",
    "meaningEn": "",
    "examples": [
      {
        "en": "sore throat",
        "hi": "दुखता हुआ गला"
      }
    ]
  },
  {
    "id": 1855,
    "word": "sort",
    "pos": "n / v",
    "pronunciation": "सॉट",
    "meaningHi": "प्रकार या किस्म 2 एक प्रकार से, किसी हद तक | अलग-अलग प्रकार की चीजों को अलग और व्यवस्थित करना",
    "meaningEn": "",
    "examples": [
      {
        "en": "He has all sorts of problems",
        "hi": "उसके पास हर तरह की समस्ा है।"
      },
      {
        "en": "It’s sort of silly",
        "hi": "यह एक प्रकार से मूर्खतापूर्ण है।"
      }
    ]
  },
  {
    "id": 1856,
    "word": "soul",
    "pos": "n",
    "pronunciation": "सोल",
    "meaningHi": "आत्मा",
    "meaningEn": "",
    "examples": [
      {
        "en": "body dies, not the soul",
        "hi": "शरीर मरता है, आत्मा नहीं।"
      }
    ]
  },
  {
    "id": 1857,
    "word": "spare",
    "pos": "adj / v",
    "pronunciation": "स्पेअर",
    "meaningHi": "अतिरिक्त, फाजिल",
    "meaningEn": "",
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
    "id": 1858,
    "word": "spelling",
    "pos": "n",
    "pronunciation": "स्ेलिंग",
    "meaningHi": "हिज्जे, वर्तनी",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1859,
    "word": "spill",
    "pos": "v",
    "pronunciation": "स्पिल",
    "meaningHi": "छलकना 2 छलकाना",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1860,
    "word": "spin",
    "pos": "v",
    "pronunciation": "स्पिन",
    "meaningHi": "चक्कर खाते हुए घूमना या घुमाना अंंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ",
    "meaningEn": "",
    "examples": [
      {
        "en": "Earth spins on its axis",
        "hi": "धरती अपनी धुरी पर घूूमती है।"
      }
    ]
  },
  {
    "id": 1861,
    "word": "split",
    "pos": "v",
    "pronunciation": "स्प्लिट",
    "meaningHi": "तोड़ना, विभक्त करना",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1862,
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
    "id": 1863,
    "word": "spot",
    "pos": "n",
    "pronunciation": "स्पॉट",
    "meaningHi": "दाग, धब्ा 2 खास जगह",
    "meaningEn": "",
    "examples": [
      {
        "en": "a black spot on his shirt",
        "hi": "उसकी शर्ट पर एक धब्ा"
      },
      {
        "en": "tourist spot",
        "hi": "पर्यटन-स्थल"
      }
    ]
  },
  {
    "id": 1864,
    "word": "spray",
    "pos": "v",
    "pronunciation": "स्पे",
    "meaningHi": "फुहार छोड़ना",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1865,
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
    "id": 1866,
    "word": "ssed",
    "pos": "adj",
    "pronunciation": "इम्ैरस्ट",
    "meaningHi": "लज््जित, झेंपा हुआ",
    "meaningEn": "",
    "examples": [
      {
        "en": "an embarrassed father",
        "hi": "एक लज््जित पिता"
      }
    ]
  },
  {
    "id": 1867,
    "word": "stammer",
    "pos": "v",
    "pronunciation": "स्ैमर",
    "meaningHi": "हकलाना",
    "meaningEn": "",
    "examples": [
      {
        "en": "Stammering is curable",
        "hi": "हकलाने का इलाज है।"
      }
    ]
  },
  {
    "id": 1868,
    "word": "stamp",
    "pos": "n / v",
    "pronunciation": "स्ैम्प",
    "meaningHi": "मुहर 2 डाक टिकट | 1 मुहर लगाना 2 पैर पटकना",
    "meaningEn": "",
    "examples": [
      {
        "en": "stamp collector",
        "hi": "डाक टिकट जमा करने वाला"
      }
    ]
  },
  {
    "id": 1869,
    "word": "star",
    "pos": "n",
    "pronunciation": "",
    "meaningHi": "स्ार 1 तारा 2 प्रसिद्ध और अत्ंत लोक- प्रिय व्यक्ति",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1870,
    "word": "stay",
    "pos": "n / v",
    "pronunciation": "स्े",
    "meaningHi": "रुकने की अवधि | ठहरना",
    "meaningEn": "",
    "examples": [
      {
        "en": "My stay in France was pleasant",
        "hi": "फांस में मेरा रुकना सुखद रहा"
      },
      {
        "en": "stay in my house",
        "hi": "मेरे घर में रुको"
      }
    ]
  },
  {
    "id": 1871,
    "word": "steam",
    "pos": "n",
    "pronunciation": "स्ीम",
    "meaningHi": "भाप 188 189 अंंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1872,
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
    "id": 1873,
    "word": "steer",
    "pos": "v",
    "pronunciation": "स्टिअर",
    "meaningHi": "गाड़ी चलाना, परिचालन करना 2 स्थिति को अपने नियंत्रण में कर उसकी दिशा और गति को निर्देशित करना 1",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1874,
    "word": "step",
    "pos": "n / v",
    "pronunciation": "स्ेप",
    "meaningHi": "कदम 2 सीढ़ी का एक स्ेप | कदम रखना, डग भरना",
    "meaningEn": "",
    "examples": [
      {
        "en": "He stepped into the room",
        "hi": "उसने कमरे में कदम रखे"
      }
    ]
  },
  {
    "id": 1875,
    "word": "stic",
    "pos": "adj",
    "pronunciation": "इन्थूज़िए-",
    "meaningHi": "स्टिक उत्ाही, उत्ाहपूर्ण 68 69 अंंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ",
    "meaningEn": "",
    "examples": [
      {
        "en": "an enthusiastic response",
        "hi": "एक उत्ाहपूर्ण प्रतिक्रिया"
      }
    ]
  },
  {
    "id": 1876,
    "word": "sticky",
    "pos": "adj",
    "pronunciation": "स्टिकि",
    "meaningHi": "चिपचिपा",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1877,
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
    "id": 1878,
    "word": "sting",
    "pos": "n / v",
    "pronunciation": "स्टिंंग",
    "meaningHi": "डंक | डंक मारना",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1879,
    "word": "stir",
    "pos": "v",
    "pronunciation": "1 चम्मच आदि से विलोड़ना,",
    "meaningHi": "हिलाना, चलाना 2 भावनात्मक रूप से हिलाना, जगाना अंंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ 1",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1880,
    "word": "string",
    "pos": "n",
    "pronunciation": "स्ट्रिंंग",
    "meaningHi": "डोरी, फीता",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1881,
    "word": "successful",
    "pos": "adj",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1882,
    "word": "such",
    "pos": "det pron",
    "pronunciation": "सच",
    "meaningHi": "ऐसा 1",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1883,
    "word": "suggestion",
    "pos": "n",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1884,
    "word": "suit",
    "pos": "n / v",
    "pronunciation": "सूट",
    "meaningHi": "पहनने वाला सूट | शोभा देना, स्ीकार्य होना",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1885,
    "word": "superior",
    "pos": "adj",
    "pronunciation": "सुपिअरियर",
    "meaningHi": "किसी अन्य की अपेक्षा श्रेष्ट, बेहतर",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1886,
    "word": "superiority",
    "pos": "n",
    "pronunciation": "सुपिअरिअॉ",
    "meaningHi": "रटि किसी अन्य की अपेक्षा श्रेष्टता 192 193 अंंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1887,
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
    "id": 1888,
    "word": "suppose",
    "pos": "v",
    "pronunciation": "सपोज़",
    "meaningHi": "कल्पना करना, मान लो",
    "meaningEn": "",
    "examples": [
      {
        "en": "Suppose the sun does not rise tomorrow",
        "hi": "मान लो कि कल सूूरज नहीं उगता है।"
      }
    ]
  },
  {
    "id": 1889,
    "word": "sure",
    "pos": "adj adv",
    "pronunciation": "शुर, शुअ",
    "meaningHi": "निश्चित, बेशक",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1890,
    "word": "surprised",
    "pos": "adj",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1891,
    "word": "sweets",
    "pos": "n",
    "pronunciation": "स्वीट",
    "meaningHi": "मिठाइयाँ",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1892,
    "word": "swim",
    "pos": "v",
    "pronunciation": "स्विम",
    "meaningHi": "तैरना",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1893,
    "word": "talk",
    "pos": "n / v",
    "pronunciation": "टोक",
    "meaningHi": "बातचीत | बातचीत करना",
    "meaningEn": "",
    "examples": [
      {
        "en": "Many problems can be sorted out by talking",
        "hi": "बात करने से बहुत-सी समस्ाएँ सुलझाई जा सकती हैं।"
      }
    ]
  },
  {
    "id": 1894,
    "word": "tall",
    "pos": "adj",
    "pronunciation": "टोल",
    "meaningHi": "लंबा",
    "meaningEn": "",
    "examples": [
      {
        "en": "a tall man",
        "hi": "एक लंबा आदमी"
      }
    ]
  },
  {
    "id": 1895,
    "word": "tap",
    "pos": "n / v",
    "pronunciation": "टैप",
    "meaningHi": "नल, नल की टोंटी | किसी को थपकी देना या हलके से मारना",
    "meaningEn": "",
    "examples": [
      {
        "en": "He tapped on my shoulder",
        "hi": "उसने मेरे कंधे पर थपथपाया।"
      }
    ]
  },
  {
    "id": 1896,
    "word": "tape",
    "pos": "n",
    "pronunciation": "टेप",
    "meaningHi": "फीता",
    "meaningEn": "",
    "examples": [
      {
        "en": "measuring tape",
        "hi": "नापने का फीता"
      }
    ]
  },
  {
    "id": 1897,
    "word": "task",
    "pos": "n",
    "pronunciation": "टास्क",
    "meaningHi": "जो कार्य दिया गया हो",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1898,
    "word": "tax",
    "pos": "n / v",
    "pronunciation": "टैक्स",
    "meaningHi": "कर | 1 कर लगाना 2 अधिक जोर लगाना",
    "meaningEn": "",
    "examples": [
      {
        "en": "Tax the rich",
        "hi": "अमीरों पर कर लगाओ।"
      },
      {
        "en": "tax the brain",
        "hi": "दिमाग पर जोर डालना"
      }
    ]
  },
  {
    "id": 1899,
    "word": "team",
    "pos": "n",
    "pronunciation": "टीम",
    "meaningHi": "खिलाड़ियों का दल 2 एक मकसद से जुड़े हुए कई लोगों का समूह जो मिल कर काम करते हों",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1900,
    "word": "tear",
    "pos": "n / v",
    "pronunciation": "आँसू",
    "meaningHi": "| टेलिफ़ोन दूरभाष, टेलीफोन टेलिफ़ोन टेलीफोन करना टेलिविशज़न टी.वी., टेलिविजन",
    "meaningEn": "",
    "examples": [
      {
        "en": "She telephoned me",
        "hi": "उसने मुझे टेलीफोन किया।"
      }
    ]
  },
  {
    "id": 1901,
    "word": "tell",
    "pos": "v",
    "pronunciation": "टेल",
    "meaningHi": "बोलना",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1902,
    "word": "tely",
    "pos": "adv",
    "pronunciation": "डिलिबरट्लि",
    "meaningHi": "जानबूझ कर",
    "meaningEn": "",
    "examples": [
      {
        "en": "He deliberately drove the car slowly",
        "hi": "उसने जानबूूझ कर कार को धीमी गति से चलाया।"
      }
    ]
  },
  {
    "id": 1903,
    "word": "temperature",
    "pos": "n",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1904,
    "word": "tend",
    "pos": "v",
    "pronunciation": "टेन्ड",
    "meaningHi": "प्रवृति या झुकाव होना",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1905,
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
    "id": 1906,
    "word": "tension",
    "pos": "n",
    "pronunciation": "हाइपर",
    "meaningHi": "टेंशन 1 रक्तचाप या ब्लडप्रेप्रेशर की बीमारी 96 97 I अंंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1907,
    "word": "term",
    "pos": "n",
    "pronunciation": "टर्म",
    "meaningHi": "अवधि, समय 2 कार्यकाल 3 शर्त अंंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ 1",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1908,
    "word": "test",
    "pos": "n / v",
    "pronunciation": "टेस्ट",
    "meaningHi": "जाँच | जाँच या परीक्षा करना दैन / दन से",
    "meaningEn": "",
    "examples": [
      {
        "en": "He passed the IQ test",
        "hi": "वह बुद्धि की जाँच में पास कर गया।"
      },
      {
        "en": "Don't test my patience",
        "hi": "मेरे धीरज की परीक्षा न करो।"
      }
    ]
  },
  {
    "id": 1909,
    "word": "thanks exclamation",
    "pos": "n",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1910,
    "word": "that",
    "pos": "adv pron",
    "pronunciation": "दैट",
    "meaningHi": "वह 2 कि",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1911,
    "word": "that adv pron",
    "pos": "conj",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1912,
    "word": "their",
    "pos": "det",
    "pronunciation": "फुटबौल उनका चहेता खेल है।",
    "meaningHi": "उनका",
    "meaningEn": "belonging to them",
    "examples": [
      {
        "en": "Football is their favourite sport",
        "hi": "फुटबौल उनका चहेता खेल है।"
      }
    ]
  },
  {
    "id": 1913,
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
    "id": 1914,
    "word": "them",
    "pos": "pron",
    "pronunciation": "देम / दम",
    "meaningHi": "उन्ें देम्ेलवज़ वे खुद, उन्ें खुद",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1915,
    "word": "themselves",
    "pos": "pron",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1916,
    "word": "then",
    "pos": "adv",
    "pronunciation": "देन",
    "meaningHi": "तब, उसके बाद 2 उस समय",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1917,
    "word": "they",
    "pos": "pron",
    "pronunciation": "दे",
    "meaningHi": "वे",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1918,
    "word": "thin",
    "pos": "adj",
    "pronunciation": "थिन",
    "meaningHi": "पतला",
    "meaningEn": "",
    "examples": [
      {
        "en": "thin fingers",
        "hi": "पतली उँगलियाँ"
      }
    ]
  },
  {
    "id": 1919,
    "word": "thinker",
    "pos": "adj",
    "pronunciation": "थिंकर",
    "meaningHi": "चिंतक",
    "meaningEn": "",
    "examples": [
      {
        "en": "Bertrand Russell was a thinker",
        "hi": "बट्रेंेंड रसेल एक चिंतक थे।"
      }
    ]
  },
  {
    "id": 1920,
    "word": "thinking",
    "pos": "n",
    "pronunciation": "थिंकिंग",
    "meaningHi": "चिंतन, सोचने की क्रिया थरो, थॉरो परिपूर्ण, विस्तृस्तृत अंंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ",
    "meaningEn": "",
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
    "id": 1921,
    "word": "this",
    "pos": "det pron",
    "pronunciation": "दिस",
    "meaningHi": "यह",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1922,
    "word": "this det pron",
    "pos": "adv",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1923,
    "word": "thorough",
    "pos": "adj",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1924,
    "word": "though conj",
    "pos": "adv",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1925,
    "word": "throughout",
    "pos": "prep adv",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1926,
    "word": "thumb",
    "pos": "n",
    "pronunciation": "थम",
    "meaningHi": "अँगूठा",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1927,
    "word": "tidy",
    "pos": "v / adj",
    "pronunciation": "टाइडि",
    "meaningHi": "सुव्यवस्थित करना | ठीकठाक, सुव्यवस्थित",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1928,
    "word": "time",
    "pos": "n",
    "pronunciation": "टाइम",
    "meaningHi": "समय",
    "meaningEn": "",
    "examples": [
      {
        "en": "Let us learn time management",
        "hi": "हम समय का अच्े से प्रयोग करना सीखें।"
      }
    ]
  },
  {
    "id": 1929,
    "word": "tion)",
    "pos": "det",
    "pronunciation": "नो",
    "meaningHi": "नहीं 2 कोई भी नहीं",
    "meaningEn": "",
    "examples": [
      {
        "en": "No, I will not go",
        "hi": "नहीं, मैं नहीं जाऊँगा"
      },
      {
        "en": "No one will go",
        "hi": "कोई भी नहीं जाएगा।"
      }
    ]
  },
  {
    "id": 1930,
    "word": "tomorrow",
    "pos": "n adv",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1931,
    "word": "tone",
    "pos": "n",
    "pronunciation": "टोन",
    "meaningHi": "स्वरशैली 2 रंग",
    "meaningEn": "",
    "examples": [
      {
        "en": "friendly tone",
        "hi": "दोस्ाना स्वरशैली"
      },
      {
        "en": "dark tones",
        "hi": "गहरे रंग"
      }
    ]
  },
  {
    "id": 1932,
    "word": "tool",
    "pos": "n",
    "pronunciation": "टूल",
    "meaningHi": "औजार",
    "meaningEn": "",
    "examples": [
      {
        "en": "plumbing tools",
        "hi": "नलसाजी के औजार"
      }
    ]
  },
  {
    "id": 1933,
    "word": "tooth",
    "pos": "n",
    "pronunciation": "टूथ",
    "meaningHi": "दाँत",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1934,
    "word": "tory",
    "pos": "adj",
    "pronunciation": "जवाब नहीं दिया।",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1935,
    "word": "tour",
    "pos": "n / v",
    "pronunciation": "भ्रमण करना, दौरा करना",
    "meaningHi": "टुअर भ्रमण, सैर, दौरा | टुवड्ज़ 1 की ओर 2 के प्रति 1",
    "meaningEn": "",
    "examples": [
      {
        "en": "world tour",
        "hi": "दुनिया की सैर"
      }
    ]
  },
  {
    "id": 1936,
    "word": "town",
    "pos": "n",
    "pronunciation": "टाउन",
    "meaningHi": "शहर",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1937,
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
    "id": 1938,
    "word": "training",
    "pos": "n",
    "pronunciation": "ट्रेनिंग",
    "meaningHi": "प्रशिक्षण",
    "meaningEn": "",
    "examples": [
      {
        "en": "Training can transform anybody",
        "hi": "प्रशिक्षण किसी को भी बदल कर सकता है।"
      }
    ]
  },
  {
    "id": 1939,
    "word": "translate",
    "pos": "v",
    "pronunciation": "ट्रैन्सलेट",
    "meaningHi": "अनुवाद करना",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1940,
    "word": "transparent",
    "pos": "adj",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1941,
    "word": "transport",
    "pos": "n / v",
    "pronunciation": "ट्ैन्सपोर्ट",
    "meaningHi": "परिवहन गाड़ी-घोड़ा आदि, जिनसे व्यक्ति या माल ढोए जाते हों। | लोगों या माल को ढोना, ले जाना",
    "meaningEn": "",
    "examples": [
      {
        "en": "My baggage was transported to Delhi by truck",
        "hi": "मेरा बोरिया-बिस्तर ट्रक के द्ारा दिल्ी ले जाया गया।"
      }
    ]
  },
  {
    "id": 1942,
    "word": "trap",
    "pos": "n / v",
    "pronunciation": "ट्रैप",
    "meaningHi": "फँसा कर पकड़ने का साधन | फँसा कर पकड़ना अंंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ",
    "meaningEn": "",
    "examples": [
      {
        "en": "mouse trap",
        "hi": "चूूहे पकड़ने का उपकरण।"
      },
      {
        "en": "The police trapped the criminal",
        "hi": "पुलिस ने अपराधी को फँसा कर पकड़ लिया।"
      }
    ]
  },
  {
    "id": 1943,
    "word": "traveller",
    "pos": "n",
    "pronunciation": "ट्ैवलर",
    "meaningHi": "यात्ी",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1944,
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
    "id": 1945,
    "word": "trip",
    "pos": "n / v",
    "pronunciation": "ट्रिप",
    "meaningHi": "सैर, दौरा | गिरने लगना",
    "meaningEn": "",
    "examples": [
      {
        "en": "a short trip to Simla",
        "hi": "शिमला का एक संक्षिप्त दौरा"
      },
      {
        "en": "You may trip over that cable",
        "hi": "तुम उस तार से फँस कर गिर सकते हो।"
      }
    ]
  },
  {
    "id": 1946,
    "word": "trousers",
    "pos": "n",
    "pronunciation": "ट्ाउज़ज़",
    "meaningHi": "पतलून, पाजामा 204 205 अंंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1947,
    "word": "tune",
    "pos": "n / v",
    "pronunciation": "ट्ून",
    "meaningHi": "संगीत की कोई धुन, राग | वाद्ययंत्र के सुर मिलाना",
    "meaningEn": "",
    "examples": [
      {
        "en": "What a lovely tune!",
        "hi": "क्ा प्ारी धुन!"
      },
      {
        "en": "tune the guitar",
        "hi": "गिटार के तारों को कसते हुए उनके सुर मिलाना"
      }
    ]
  },
  {
    "id": 1948,
    "word": "turn",
    "pos": "n",
    "pronunciation": "टर्न",
    "meaningHi": "मोड़",
    "meaningEn": "",
    "examples": [
      {
        "en": "left turn",
        "hi": "बायाँ मोड़"
      }
    ]
  },
  {
    "id": 1949,
    "word": "Twitter",
    "pos": "n",
    "pronunciation": "ट्विटर",
    "meaningHi": "ट्विटर एक खास फोरम जिसमें बहुत थोड़े शब्दों में कोई बात कही और सोशल मीडिया पर प्रसारित की जाती है। 2 चिड़ियों की चहचहाहट",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1950,
    "word": "type",
    "pos": "n / v",
    "pronunciation": "टाइप",
    "meaningHi": "प्रकार | टाइप करना",
    "meaningEn": "",
    "examples": [
      {
        "en": "two types of dress",
        "hi": "दो प्रकार के वस्त्र"
      },
      {
        "en": "She types fast",
        "hi": "वह तेजी से टाइप करती है।"
      }
    ]
  },
  {
    "id": 1951,
    "word": "ugly",
    "pos": "adj",
    "pronunciation": "अग््लि",
    "meaningHi": "कुरूप, बदसूूरत",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1952,
    "word": "ulcer",
    "pos": "n",
    "pronunciation": "अल्सर",
    "meaningHi": "फोड़ा या नासूूर",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1953,
    "word": "umpire",
    "pos": "n",
    "pronunciation": "अम्ाइअर",
    "meaningHi": "क्रिकेट या टेनिस का अंपायर, जो खेल में निर्णय देता है।",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1954,
    "word": "uncertain",
    "pos": "adj",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1955,
    "word": "uncomfortable",
    "pos": "adj",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1956,
    "word": "under prep",
    "pos": "adv",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1957,
    "word": "underneath",
    "pos": "prep",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1958,
    "word": "undo",
    "pos": "v",
    "pronunciation": "अनडू",
    "meaningHi": "किए हुए को बिगाड़ देना, फिर से पुराने हाल में ला देना अनएथिकल अनैतिक 57 अंंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ",
    "meaningEn": "",
    "examples": [
      {
        "en": "Can you undo this damage?",
        "hi": "क्ा तुम इस नुकसान को ठीक कर सकते हो?"
      },
      {
        "en": "Not taking care of parents in their old age is unethical",
        "hi": "माता-पिता की वृद्ध अवस्था में उनका ख्याल नहीं रखना एक अनैतिक काम है।"
      }
    ]
  },
  {
    "id": 1959,
    "word": "unethical",
    "pos": "adj",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1960,
    "word": "unfortunate",
    "pos": "adj",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1961,
    "word": "unhappy",
    "pos": "adj",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1962,
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
    "id": 1963,
    "word": "unit",
    "pos": "n",
    "pronunciation": "यूनिट",
    "meaningHi": "इकाई",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1964,
    "word": "Unit)",
    "pos": "n",
    "pronunciation": "यू. सेंट्रल",
    "meaningHi": "प्रोसेसिंग यूनिट कंप्यूटर का केंद्रीय प्रचालन-तंत्र",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1965,
    "word": "university",
    "pos": "n",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1966,
    "word": "unlawful",
    "pos": "adj",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1967,
    "word": "unless",
    "pos": "conj",
    "pronunciation": "अन्लेस",
    "meaningHi": "जबतक..तबतक",
    "meaningEn": "",
    "examples": [
      {
        "en": "an unlikely event",
        "hi": "एक ऐसी घटना जिसकी संभावना नहीं थी।"
      }
    ]
  },
  {
    "id": 1968,
    "word": "unlikely",
    "pos": "adj",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1969,
    "word": "unlucky",
    "pos": "adj",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1970,
    "word": "unrest",
    "pos": "n",
    "pronunciation": "अनरेस्ट",
    "meaningHi": "अशांति, बेचैनी /",
    "meaningEn": "",
    "examples": [
      {
        "en": "widespread unrest due to price rise",
        "hi": "मूूल्य वृद्धि के कारण व्ापक बेचैनी"
      }
    ]
  },
  {
    "id": 1971,
    "word": "unusual",
    "pos": "adj",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1972,
    "word": "unusually",
    "pos": "adv",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1973,
    "word": "upload",
    "pos": "v",
    "pronunciation": "अपलोड",
    "meaningHi": "कंप्यूटर-फाइल को इन्टरनेट पर अपलोड करना अंंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1974,
    "word": "upon",
    "pos": "prep",
    "pronunciation": "अपॉन",
    "meaningHi": "के ऊपर 2 पर",
    "meaningEn": "",
    "examples": [
      {
        "en": "upon the table",
        "hi": "टेबुल पर"
      },
      {
        "en": "based upon my experience",
        "hi": "मेरे अनुभव पर आधारित"
      }
    ]
  },
  {
    "id": 1975,
    "word": "upsetting",
    "pos": "adj",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1976,
    "word": "upstairs",
    "pos": "adv n",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1977,
    "word": "upwards",
    "pos": "adv",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1978,
    "word": "urge",
    "pos": "n / v",
    "pronunciation": "अर्ज",
    "meaningHi": "तीव्र इच्ा | आग्रह करना, प्रेरित करना",
    "meaningEn": "",
    "examples": [
      {
        "en": "an urge to go home",
        "hi": "घर जाने की तीव्र इच्ा"
      },
      {
        "en": "He was urged to donate",
        "hi": "उससे दान देने के लिए आग्रह किया गया।"
      }
    ]
  },
  {
    "id": 1979,
    "word": "used",
    "pos": "adj",
    "pronunciation": "यूज़्ड",
    "meaningHi": "पुराना, इस्तेमाल किया हुआ यूस्ट टु अभ्यस्त",
    "meaningEn": "",
    "examples": [
      {
        "en": "a used car",
        "hi": "एक इस्ेमाल की हुई कार"
      },
      {
        "en": "She is used to swimming",
        "hi": "वह तैरने की अभ्यस्त है।"
      }
    ]
  },
  {
    "id": 1980,
    "word": "user",
    "pos": "n",
    "pronunciation": "करने वाला कौन है?",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1981,
    "word": "vacancy",
    "pos": "n",
    "pronunciation": "वेकन्सि",
    "meaningHi": "रिक्ति",
    "meaningEn": "",
    "examples": [
      {
        "en": "There is no vacancy for the post of typist",
        "hi": "टाइपिस्ट के पद के लिए कोई रिक्ति या खाली जगह नहीं है।"
      }
    ]
  },
  {
    "id": 1982,
    "word": "vacant",
    "pos": "adj",
    "pronunciation": "वेकन्ट",
    "meaningHi": "रिक्त, खाली",
    "meaningEn": "",
    "examples": [
      {
        "en": "Our house is vacant",
        "hi": "हम लोगों का घर खाली है।"
      }
    ]
  },
  {
    "id": 1983,
    "word": "vacation",
    "pos": "n",
    "pronunciation": "वकेशन",
    "meaningHi": "लंबा अवकाश",
    "meaningEn": "",
    "examples": [
      {
        "en": "I spent my summer vacation at Simla",
        "hi": "मैंने गर्मीी की छुट्ी शिमला में बिताई।"
      }
    ]
  },
  {
    "id": 1984,
    "word": "vaccine",
    "pos": "n",
    "pronunciation": "वैक्सीन",
    "meaningHi": "टीके की दवा",
    "meaningEn": "",
    "examples": [
      {
        "en": "A vaccine prevents a disease",
        "hi": "वैक्सीन किसी बीमारी को रोकती है।"
      }
    ]
  },
  {
    "id": 1985,
    "word": "vague",
    "pos": "adj",
    "pronunciation": "वेग",
    "meaningHi": "अस्पष्ट",
    "meaningEn": "",
    "examples": [
      {
        "en": "a vague statement",
        "hi": "एक अस्पष्ट बयान"
      }
    ]
  },
  {
    "id": 1986,
    "word": "valuable",
    "pos": "adj",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1987,
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
    "id": 1988,
    "word": "vary",
    "pos": "v",
    "pronunciation": "वेअरि",
    "meaningHi": "आकार या शक्ति में अलग होना",
    "meaningEn": "",
    "examples": [
      {
        "en": "Uniforms vary from school to school",
        "hi": "गणवेश भिन्न- भिन्न स्कूलों में भिन्न-भिन्न होते हैं।"
      }
    ]
  },
  {
    "id": 1989,
    "word": "vast",
    "pos": "adj",
    "pronunciation": "वास्ट",
    "meaningHi": "विशाल Ved / Ve",
    "meaningEn": "",
    "examples": [
      {
        "en": "a vast ground",
        "hi": "एक विशाल मैदान"
      }
    ]
  },
  {
    "id": 1990,
    "word": "vegetable",
    "pos": "n",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1991,
    "word": "velvet",
    "pos": "n",
    "pronunciation": "वेलविट",
    "meaningHi": "मखमल",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1992,
    "word": "venom",
    "pos": "n",
    "pronunciation": "वेनम",
    "meaningHi": "साँप का विष, जहर",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1993,
    "word": "venture",
    "pos": "n",
    "pronunciation": "वेन्चर",
    "meaningHi": "नई और कुछ जोखिम भरी परियोजना",
    "meaningEn": "",
    "examples": [
      {
        "en": "Making iron-ropes is my new venture",
        "hi": "लोहे की रस्ी बनाना मेरी नई परियोजना है।"
      }
    ]
  },
  {
    "id": 1994,
    "word": "venus",
    "pos": "n",
    "pronunciation": "वीनस",
    "meaningHi": "शुक्रग्रह अंंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 1995,
    "word": "version",
    "pos": "n",
    "pronunciation": "वर्शन",
    "meaningHi": "रूपांतर, संस्करण, पाठांतर",
    "meaningEn": "",
    "examples": [
      {
        "en": "Many versions of the Valmiki Ramayan are found",
        "hi": "वाल्ीकि रामायण के कई पाठांतर मिलते हैं।"
      }
    ]
  },
  {
    "id": 1996,
    "word": "vertical",
    "pos": "adj",
    "pronunciation": "वर्िकल",
    "meaningHi": "सीधा-खड़ा",
    "meaningEn": "",
    "examples": [
      {
        "en": "She drew some vertical lines on the paper",
        "hi": "उसने कुछ सीधी-खड़ी रेखाएँ कागज पर बनाईं।"
      }
    ]
  },
  {
    "id": 1997,
    "word": "very",
    "pos": "adv",
    "pronunciation": "वेरि",
    "meaningHi": "बहुत",
    "meaningEn": "",
    "examples": [
      {
        "en": "very good",
        "hi": "बहुत अच्ा"
      }
    ]
  },
  {
    "id": 1998,
    "word": "via",
    "pos": "prep",
    "pronunciation": "वाइअ",
    "meaningHi": "के रास्ते, से हो कर",
    "meaningEn": "",
    "examples": [
      {
        "en": "He came from Delhi via Agra",
        "hi": "वह दिल्ी से आगरा होता हुआ आया।"
      }
    ]
  },
  {
    "id": 1999,
    "word": "vibrant",
    "pos": "adj",
    "pronunciation": "वाइब्रंट",
    "meaningHi": "जीवंत और उत्ाहपूर्ण",
    "meaningEn": "",
    "examples": [
      {
        "en": "a vibrant person",
        "hi": "एक जीवंत व्यक्ति"
      }
    ]
  },
  {
    "id": 2000,
    "word": "video",
    "pos": "n",
    "pronunciation": "विडिओ",
    "meaningHi": "विडिओ, चित्रमुद्रण",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 2001,
    "word": "view",
    "pos": "n / v",
    "pronunciation": "व्यू",
    "meaningHi": "दृश्य 2 दृष्टि 3 विचार 1",
    "meaningEn": "",
    "examples": [
      {
        "en": "viewing a movie",
        "hi": "फिल्म देख रहा"
      }
    ]
  },
  {
    "id": 2002,
    "word": "violently",
    "pos": "adv",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 2003,
    "word": "virtually",
    "pos": "adv",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 2004,
    "word": "virus",
    "pos": "n",
    "pronunciation": "वाइरस",
    "meaningHi": "विषाणु शरीर में ज्ादातर इन्ेक्शन या रोग बैक्टी- रिया या वायरस के शरीर में प्रवेश करने से होते हैं।",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 2005,
    "word": "visionary",
    "pos": "adj",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 2006,
    "word": "visitor",
    "pos": "n",
    "pronunciation": "विज़िटर",
    "meaningHi": "मुलाकाती, आगंतुक",
    "meaningEn": "",
    "examples": [
      {
        "en": "The Taj attracts thousands of visitors",
        "hi": "ताजमहल हजारों आगंतुकों को आकर्षित करता है।"
      }
    ]
  },
  {
    "id": 2007,
    "word": "vitamins",
    "pos": "n",
    "pronunciation": "विटमिंस",
    "meaningHi": "विटामिन शरीर के स्ास्थ्य के लिए एक प्रकार के आवश्यक तत्त्व अंंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ",
    "meaningEn": "",
    "examples": [
      {
        "en": "Vitamins are found in fruits and vegetables",
        "hi": "विटामिन फलों और सब््जियों में मिलते हैं।"
      }
    ]
  },
  {
    "id": 2008,
    "word": "vocabulary",
    "pos": "n",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 2009,
    "word": "vote",
    "pos": "n / v",
    "pronunciation": "वोट",
    "meaningHi": "चुनाव में दिया गया मत | चुनाव में मत देना",
    "meaningEn": "",
    "examples": [
      {
        "en": "Your vote is important",
        "hi": "तुम्ारा मत महत्त्वपूर्ण है।"
      },
      {
        "en": "Vote for an honest candidate",
        "hi": "एक ईमानदार उम्ीदवार के लिए वोट करो।"
      }
    ]
  },
  {
    "id": 2010,
    "word": "vow",
    "pos": "v",
    "pronunciation": "वाउ",
    "meaningHi": "प्रतिज्ा करना और कसम खाना 216 217 अंंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ",
    "meaningEn": "",
    "examples": [
      {
        "en": "Bhishm vowed to remain a celibate for the whole life",
        "hi": "भीष्म ने आजीवन ब्रह्मचारी रहने की प्रतिज्ा की।"
      }
    ]
  },
  {
    "id": 2011,
    "word": "wait",
    "pos": "n / v",
    "pronunciation": "वेट",
    "meaningHi": "प्रतीक्षा, इंतजार | इंतजार करना up v वेकप उठना, जगना",
    "meaningEn": "",
    "examples": [
      {
        "en": "The wait ends now",
        "hi": "इंतजार अब खत्म होता है।"
      },
      {
        "en": "Please wait",
        "hi": "कृपया इंतज़ार करें।"
      }
    ]
  },
  {
    "id": 2012,
    "word": "wall",
    "pos": "n",
    "pronunciation": "वॉल",
    "meaningHi": "दीवार",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 2013,
    "word": "warm",
    "pos": "adj",
    "pronunciation": "वोम",
    "meaningHi": "हल्का गर्म 2 स्ेहपूर्ण",
    "meaningEn": "",
    "examples": [
      {
        "en": "warm water",
        "hi": "हल्का गर्म पानी"
      },
      {
        "en": "a warm welcome",
        "hi": "एक स्ेहपूर्ण स्ागत"
      }
    ]
  },
  {
    "id": 2014,
    "word": "warn",
    "pos": "v",
    "pronunciation": "वोन",
    "meaningHi": "चेतावनी देना वोनिंग चेतावनी",
    "meaningEn": "",
    "examples": [
      {
        "en": "Didn't we warn you?",
        "hi": "क्ा हमने आपको चेतावनी नहीं दी थी?"
      },
      {
        "en": "Our warning was not heeded",
        "hi": "हमारी चेतावनी पर ध्यान नहीं दिया गया।"
      }
    ]
  },
  {
    "id": 2015,
    "word": "wash",
    "pos": "v",
    "pronunciation": "वोश",
    "meaningHi": "धोना",
    "meaningEn": "",
    "examples": [
      {
        "en": "Shouldn't we wash our hands before each meal?",
        "hi": "क्ा हमें हर भोजन के पहले हाथ नहीं धोना चाहिए?"
      }
    ]
  },
  {
    "id": 2016,
    "word": "wave",
    "pos": "n / v",
    "pronunciation": "वेव",
    "meaningHi": "तरंग, लहर | किसी व्यक्ति या व्यक्तियों को लक्ष्य कर हाथ हिलाना",
    "meaningEn": "",
    "examples": [
      {
        "en": "sea waves",
        "hi": "समुद्र की लहरें"
      },
      {
        "en": "The Prime Minister was waving to the crowd",
        "hi": "प्रधानमंत्री भीड़ को हाथ हिला रहे थे।"
      }
    ]
  },
  {
    "id": 2017,
    "word": "weak",
    "pos": "adj",
    "pronunciation": "वीक",
    "meaningHi": "कमजोर",
    "meaningEn": "",
    "examples": [
      {
        "en": "Isn't exploiting the weak a sin?",
        "hi": "कमजोर का शोषण करना क्ा एक पाप नहीं है?"
      }
    ]
  },
  {
    "id": 2018,
    "word": "wealthy",
    "pos": "adj",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 2019,
    "word": "wear",
    "pos": "v",
    "pronunciation": "",
    "meaningHi": "वेअर पहनना",
    "meaningEn": "",
    "examples": [
      {
        "en": "Wearing a helmet while driving a motorbike can save life",
        "hi": "मोटर बाइक चलाते वक्त हेलमेट पहनना जीवन को बचा सकता है।"
      }
    ]
  },
  {
    "id": 2020,
    "word": "website",
    "pos": "n",
    "pronunciation": "वेब्साइट",
    "meaningHi": "इन्टरनेट पर किसी व्यक्ति, संस्ा या कंपनी का सूचनाकेंद्र",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 2021,
    "word": "week",
    "pos": "n",
    "pronunciation": "वीक",
    "meaningHi": "सप्ताह 218 219 अंंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ वीकेंड सप्ताह के अंत में छुट्ी के दिन शनिवार-रविवार",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 2022,
    "word": "weigh",
    "pos": "v",
    "pronunciation": "वे",
    "meaningHi": "वजन करना, तौलना",
    "meaningEn": "",
    "examples": [
      {
        "en": "I am weighing vegetables",
        "hi": "मैं सब््जियाँ तौल रहा हँ।"
      }
    ]
  },
  {
    "id": 2023,
    "word": "welcome",
    "pos": "adj",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 2024,
    "word": "well",
    "pos": "adj / adv / n",
    "pronunciation": "वेल",
    "meaningHi": "अच्ा, स्वस्थ | भलीभाँति, अच्छी तरह | कुआँ",
    "meaningEn": "",
    "examples": [
      {
        "en": "He is well",
        "hi": "वह स्वस्थ है।"
      },
      {
        "en": "I know him well - मैं उसे अच्छी तरह जानता हँ। He is doing well",
        "hi": "वह अच्ा कर रहा है।"
      }
    ]
  },
  {
    "id": 2025,
    "word": "what",
    "pos": "det",
    "pronunciation": "वॉट",
    "meaningHi": "क्या, किस",
    "meaningEn": "",
    "examples": [
      {
        "en": "What is this",
        "hi": "यह क्ा है?"
      }
    ]
  },
  {
    "id": 2026,
    "word": "what det",
    "pos": "pron",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 2027,
    "word": "whatever",
    "pos": "det pron adv",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 2028,
    "word": "when",
    "pos": "adv",
    "pronunciation": "वेन",
    "meaningHi": "कब, किस समय 2 जब कोंकि 1 ? - वह कब आयेगा? 2",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 2029,
    "word": "when adv",
    "pos": "conj",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 2030,
    "word": "whenever",
    "pos": "conj adv",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 2031,
    "word": "where adv",
    "pos": "conj",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 2032,
    "word": "wherever",
    "pos": "conj adv",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 2033,
    "word": "whether",
    "pos": "conj",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 2034,
    "word": "which pron",
    "pos": "det",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 2035,
    "word": "whichever",
    "pos": "pron",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 2036,
    "word": "while conj",
    "pos": "adv",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 2037,
    "word": "whistle",
    "pos": "n / v",
    "pronunciation": "विस्ल",
    "meaningHi": "सीटी | मुँह से सिटी बजाना",
    "meaningEn": "",
    "examples": [
      {
        "en": "The policeman blew the whistle",
        "hi": "पुलिस वाले ने सीटी बजाई।"
      }
    ]
  },
  {
    "id": 2038,
    "word": "whoever",
    "pos": "pron",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 2039,
    "word": "whom",
    "pos": "pron",
    "pronunciation": "हूम",
    "meaningHi": "किसको",
    "meaningEn": "",
    "examples": [
      {
        "en": "To whom did they write? - उनोंने किसके पास पत्र लिखा? Whom did they invite?",
        "hi": "उनोंने किसको आमंत्रित किया?"
      }
    ]
  },
  {
    "id": 2040,
    "word": "wide",
    "pos": "adj",
    "pronunciation": "वाइड",
    "meaningHi": "चौड़ा",
    "meaningEn": "",
    "examples": [
      {
        "en": "a wide river - एक चौड़ी नदी; a wide range of clothes",
        "hi": "वस्त्रोंस्त्रों का एक विस्ृत रेंज"
      }
    ]
  },
  {
    "id": 2041,
    "word": "wild",
    "pos": "adj",
    "pronunciation": "वाइल्ड",
    "meaningHi": "जंगली विल भविष्यकाल बनाने में प्रयुक्त",
    "meaningEn": "",
    "examples": [
      {
        "en": "wild animals - जंगली जीव; wild manners",
        "hi": "जंगली तौर-तरीके"
      },
      {
        "en": "She will go",
        "hi": "वह जाएगी"
      }
    ]
  },
  {
    "id": 2042,
    "word": "will",
    "pos": "n",
    "pronunciation": "विल",
    "meaningHi": "इच्ाशक्ति 2 वसीयत",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 2043,
    "word": "wind",
    "pos": "n",
    "pronunciation": "विन्ड",
    "meaningHi": "हवा",
    "meaningEn": "",
    "examples": [
      {
        "en": "The wind is blowing",
        "hi": "हवा बह रही है।"
      }
    ]
  },
  {
    "id": 2044,
    "word": "wind up",
    "pos": "v",
    "pronunciation": "वाइंडप",
    "meaningHi": "खत्म करना, विराम देना",
    "meaningEn": "",
    "examples": [
      {
        "en": "Let’s wind up the discussion",
        "hi": "चलो, हम चर्चा खत्म करें।"
      }
    ]
  },
  {
    "id": 2045,
    "word": "wing",
    "pos": "n",
    "pronunciation": "विंग",
    "meaningHi": "पंख",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 2046,
    "word": "wipe",
    "pos": "v",
    "pronunciation": "वाइप",
    "meaningHi": "पोंछना अंंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ",
    "meaningEn": "",
    "examples": [
      {
        "en": "wipe her tears",
        "hi": "उसके आँसूू पोंछो"
      }
    ]
  },
  {
    "id": 2047,
    "word": "wire",
    "pos": "n",
    "pronunciation": "2 टेलीग्ाम",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 2048,
    "word": "wise",
    "pos": "adj",
    "pronunciation": "वाइज़",
    "meaningHi": "विवेकशील",
    "meaningEn": "",
    "examples": [
      {
        "en": "An intelligent man is not always a wise man",
        "hi": "एक तेज दिमाग वाला व्यक्ति हमेशा एक विवेकशील व्यक्ति नहीं होता।"
      }
    ]
  },
  {
    "id": 2049,
    "word": "wish",
    "pos": "n / v",
    "pronunciation": "विश",
    "meaningHi": "अभिलाषा, चाह, इच्ा | चाह रखना, इच्ा करना",
    "meaningEn": "",
    "examples": [
      {
        "en": "last wish",
        "hi": "अंतिम इच्ा"
      }
    ]
  },
  {
    "id": 2050,
    "word": "with",
    "pos": "prep",
    "pronunciation": "विद, विथ",
    "meaningHi": "साथ",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 2051,
    "word": "within",
    "pos": "prep adv",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 2052,
    "word": "without",
    "pos": "prep adv",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 2053,
    "word": "word",
    "pos": "n",
    "pronunciation": "वर्ड",
    "meaningHi": "शब्द 2 वचन",
    "meaningEn": "",
    "examples": [
      {
        "en": "honour your word",
        "hi": "अपने वचन का पालन करो।"
      }
    ]
  },
  {
    "id": 2054,
    "word": "worried",
    "pos": "adj",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 2055,
    "word": "wrap",
    "pos": "v",
    "pronunciation": "रैप",
    "meaningHi": "लपेटना",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 2056,
    "word": "wrong adj",
    "pos": "adv",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 2057,
    "word": "yard",
    "pos": "n",
    "pronunciation": "याड",
    "meaningHi": "प्रांगण, आँगन, आहाता 2 गज",
    "meaningEn": "",
    "examples": [
      {
        "en": "backyard",
        "hi": "मकान के पीछे का आँगन"
      },
      {
        "en": "two yards wide",
        "hi": "दो गज चौड़ा"
      }
    ]
  },
  {
    "id": 2058,
    "word": "yawn",
    "pos": "n / v",
    "pronunciation": "यॉन",
    "meaningHi": "जँभाई, उबासी | जँभाई लेना येअ हाँ!",
    "meaningEn": "",
    "examples": [
      {
        "en": "Covering the mouth with hands while yawning is considered a good habit",
        "hi": "जँभाई लेते वक्त मुख को हाथों से ढँक लेना एक अच्छी आदत मानते हैं।"
      }
    ]
  },
  {
    "id": 2059,
    "word": "year",
    "pos": "n",
    "pronunciation": "",
    "meaningHi": "यिअर साल, वर्ष",
    "meaningEn": "",
    "examples": [
      {
        "en": "What is the year of your birth?",
        "hi": "तुम्ारे जन्म का साल क्ा है?"
      }
    ]
  },
  {
    "id": 2060,
    "word": "yellow n",
    "pos": "adj",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 2061,
    "word": "yesterday",
    "pos": "adv",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 2062,
    "word": "your",
    "pos": "det",
    "pronunciation": "",
    "meaningHi": "योर तुम्ारा, आपका",
    "meaningEn": "",
    "examples": [
      {
        "en": "your book",
        "hi": "तुम्ारी किताब"
      }
    ]
  },
  {
    "id": 2063,
    "word": "yourself",
    "pos": "pron",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 2064,
    "word": "yummy",
    "pos": "adj n",
    "pronunciation": "",
    "meaningHi": "",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 2065,
    "word": "zeal",
    "pos": "n",
    "pronunciation": "ज़ील",
    "meaningHi": "अत्यधिक उर्जा या उत्ाह",
    "meaningEn": "",
    "examples": [
      {
        "en": "I appreciate his zeal",
        "hi": "मैं उसके उत्ाह और ऊर्जा की सराहना करता हँ।"
      }
    ]
  },
  {
    "id": 2066,
    "word": "zone",
    "pos": "n",
    "pronunciation": "ज़ोन",
    "meaningHi": "क्षेत्र",
    "meaningEn": "",
    "examples": [
      {
        "en": "Delhi is located in earthquake prone zone",
        "hi": "दिल्ी भूूकम्प-संभावित क्षेत्र में स्थित है।"
      }
    ]
  },
  {
    "id": 2067,
    "word": "zoom",
    "pos": "v",
    "pronunciation": "ज़ूम",
    "meaningHi": "बहुत तेजी से जाना या गुज़रना",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 2068,
    "word": "Gyan yog",
    "pos": "n",
    "pronunciation": "की प्राप्ति",
    "meaningHi": "कराने वाला मार्ग 90 91 अंंगरेज़ी शब्द उच्ारण हिंंदी में अर्थ हाड्वेअर कंप्यूटर की मशीनरी",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 2069,
    "word": "Hath yog",
    "pos": "n",
    "pronunciation": "हठ योग",
    "meaningHi": "हठयोग ध्ानयोग, अष्टांांगयोग का एक रूप",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 2070,
    "word": "Kriya yog",
    "pos": "n",
    "pronunciation": "क्रियायोग",
    "meaningHi": "ध्ानयोग का एक रूप 'क्रियायोग' शब्द ध्ानयोगी श्यामा चरण लाहिड़ी महाशय और उनके शिषों योगानन्द आदि द्ारा विशेष रूप से लोकप्रिय किया गया L अंंगरेज़ी शब्द",
    "meaningEn": "",
    "examples": []
  },
  {
    "id": 2071,
    "word": "theism",
    "pos": "n",
    "pronunciation": "मॉनथीइज़म",
    "meaningHi": "एकेश्वरवाद | ईश्वरवाद",
    "meaningEn": "",
    "examples": []
  }
];
