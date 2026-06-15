"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  BookOpen,
  Users,
  Sparkles,
  Heart,
  MapPin,
  ChevronLeft,
  ChevronRight,
  X,
  Globe,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { img } from "@/lib/image-url";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" as const },
  transition: { duration: 0.5 },
};

const whyMatters = [
  {
    icon: BookOpen,
    title: "Lived Experience",
    description:
      "Bring the Bhagavad Gita's teachings to life through immersive discourses, workshops, and community service.",
  },
  {
    icon: Users,
    title: "Spiritual Connections",
    description:
      "Foster spiritual connections by gathering seekers to learn, reflect, and grow together.",
  },
  {
    icon: Sparkles,
    title: "Empower Action",
    description:
      "Translate wisdom into real-world skills — leadership, mindfulness, and seva.",
  },
  {
    icon: Heart,
    title: "Preserve Tradition",
    description:
      "Making ancient tradition accessible to all ages and backgrounds through modern formats.",
  },
];

interface EventItem {
  images: string[];
  title: string;
  description: string;
  hi?: {
    title: string;
    description: string;
  };
}

const londonEvents: EventItem[] = [
  {
    images: [img("event-london-1.jpeg")],
    title: "Inter-Faith Dialogue, Wimbledon",
    description:
      "At an inter-faith dialogue programme at Holy Trinity Church, Wimbledon, London, UK.",
  },
  {
    images: [img("event-london-2.jpeg")],
    title: "Dartford Temple Outreach",
    description:
      "Addressing school children and their parents together at Dartford Temple, London. First session: The basics of Sanatan Dharma. Second session: Study skills, memory skills.",
  },
  {
    images: [img("event-london-3.png")],
    title: "Brahma Kumaris, London",
    description:
      "Outside the World Spiritual University of the Brahma Kumaris, London.",
  },
  {
    images: [img("event-london-4.jpeg")],
    title: "World Spiritual University Team",
    description:
      "With the core team members of London Brahma Kumaris Centre, called \"World Spiritual University, London\". To the left of Swami Brahm Bodhi is Sister Jaimini, the Chief of the Centre.",
  },
  {
    images: [img("event-london-5.jpeg")],
    title: "Christmas Celebrations",
    description:
      "Christmas celebrations fostering interfaith harmony and community spirit in London.",
  },
  {
    images: [img("event-london-6.jpg")],
    title: "Nehru Centre Evening, London",
    description:
      "A memorable evening unfolded at the Nehru Centre, London, during a cultural programme celebrating Bhagavad Gita's universal wisdom.",
  },
  {
    images: [img("event-london-7.jpg")],
    title: "Nehru Centre Discourse",
    description:
      "Continuing the enriching discourse at the Nehru Centre, London — bridging ancient wisdom with modern life.",
  },
];

const delhiEvents: EventItem[] = [
  {
    images: [img("event-delhi-lokesh-muni.jpeg")],
    title:
      "Discussion with Acharya Lokesh Muni",
    description:
      "A meeting was held today with Acharya Lokesh Muni, a leading saint of Jainism, followed by a meaningful discussion of about half an hour on various subjects of religion and philosophy. Key principles of Jain Dharma were also discussed. The conversation also touched upon the need to bring all faiths of Indian origin — which share common life values such as non-violence — onto a common platform.\n\nA copy of the draft Sanatan Seva Nidhi Law and the newly published 'Sarvapriya' Gita — designed for the general public — were presented to him.\n\nAcharya Lokesh Muni has been an active participant in interfaith dialogue and has been honoured with numerous awards and recognitions both in India and abroad.\n\nDuring the discussion, certain principles of the Bhagavad Gita were briefly highlighted that bear a striking resemblance to some of the core tenets of Jain philosophy — for example, the doctrine of karma, agency, and individual responsibility for the fruits of action. In the Bhagavad Gita, the Lord says:\n\n\"Na kartritvam na karmani lokasya srijati prabhuh...\" (Gita 5.14)\n\nThis means that God does not create the actions, the sense of doership, or the fruits of action for human beings — the responsibility lies entirely with the individual. Jain philosophy similarly places the responsibility of karma and its consequences squarely upon the individual, not upon God.\n\nAcharya Lokesh Muni has ashrams in Karol Bagh and Gurugram. This discussion took place at his Karol Bagh ashram.",
    hi: {
      title:
        "आचार्य लोकेश मुनि से चर्चा",
      description:
        "आज जैन धर्म के अग्रणी संत आचार्य लोकेश मुनि से स्वामी ब्रह्म बोधि जी की भेंट हुई तथा लगभग आधे घंटे तक धर्म और दर्शन के विभिन्न विषयों पर सार्थक चर्चा हुई। जैन धर्म के कुछ प्रमुख सिद्धांतों पर भी विचार-विमर्श हुआ। साथ ही सभी भारतीय मूल के धर्मों, जो अहिंसा आदि एक प्रकार के जीवन मूल्यों को साझा करते हैं, को एक मंच पर लाने की आवश्यकता पर भी बात हुई।\n\nस्वामी जी ने उन्हें \"सनातन सेवा निधि\" कानून के प्रारूप तथा जनसामान्य के लिए नवप्रकाशित \"सर्वप्रिय\" गीता की एक प्रति भेंट की।\n\nआचार्य लोकेश मुनि अंतरधार्मिक संवाद (Interfaith Dialogue) में सक्रिय रूप से सहभागी होते रहे हैं तथा देश-विदेश में अनेक सम्मानों और पुरस्कारों से अलंकृत किए जा चुके हैं।\n\nचर्चा के दौरान स्वामी जी ने उन्हें भगवद्गीता के कुछ ऐसे सिद्धांतों की ओर संक्षेप में संकेत किया, जो जैन दर्शन के कुछ मूल तत्त्वों से अत्यंत निकटता रखते हैं। उदाहरणार्थ, कर्म, कर्तृत्व और कर्मफल के उत्तरदायित्व का सिद्धांत। भगवद्गीता में भगवान कहते हैं :\n\n\"न कर्तृत्वं न कर्माणि लोकस्य सृजति प्रभुः...\" (गीता 5.14)\n\nअर्थात् ईश्वर मनुष्यों के कर्मों, कर्तृत्व अथवा कर्मफल का निर्माण नहीं करते; इनका उत्तरदायित्व स्वयं व्यक्ति पर ही है। जैन दर्शन भी इसी प्रकार कर्म और उसके फल का दायित्व व्यक्ति के ऊपर ही स्थापित करता है, न कि ईश्वर के ऊपर।\n\nआचार्य लोकेश मुनि का एक आश्रम करोल बाग में तथा दूसरा गुड़गाँव में स्थित है। यह चर्चा करोल बाग स्थित आश्रम में हुई।",
    },
  },
  {
    images: [
      img("event-delhi-vhp-meeting.jpeg"),
      img("event-delhi-sarvapriya-gita.jpeg"),
    ],
    title:
      "Sanatan Seva Nidhi Law: Discussion with VHP International President",
    description:
      "A substantive and enriching discussion was held with Shri Alok Kumar, the International President of the Vishva Hindu Parishad, on the pressing need for enacting the Sanatan Seva Nidhi Law for the strengthening of Hindu Dharma.\n\nShri Alok Kumar, who is also a Senior Advocate of the Supreme Court and a person of deep knowledge of Hindu Dharma, proved to be as courteous and well-informed as one would expect of a leader of his stature.\n\nPrinted copies of the draft Sanatan Seva Nidhi Law were presented to him, and its key provisions were explained in detail. He assured that he would carefully study the entire Act, hold further discussions, and take whatever action may be necessary from his side.\n\nAmong the pilot projects that Gita Global Family is planning to launch — aimed at re-establishing temples as centres of village life — one key initiative involves distributing the following materials free of cost to 1,000 selected households in chosen villages:\n\n• A non-sectarian commentary on the Bhagavad Gita\n• A concise illustrated edition of the Ramcharitmanas\n• An anti-conversion capsule course (booklet)\n• A religious literacy module\n• \"Gita Navneet\" — a book of 51 selected shlokas for students\n\nBefore the project begins, a baseline assessment of the religious literacy of Hindu residents will be conducted. After the one-year project, a fresh review will evaluate progress — not only in Dharma knowledge, but also in the conduct and way of life of the participants.\n\nShri Alok Kumar was also briefed on this initiative, and the very first copy of the newly released 400-page Sarvapriya Gita commentary edition — printed today from Sai Printers Pack Press — was presented to him as a gift.\n\nIt was a pleasant and truly enriching experience to discuss the future of Hindu Dharma with Shri Alok Kumar.",
    hi: {
      title:
        "सनातन सेवा निधि कानून: विश्व हिंदू परिषद के अंतरराष्ट्रीय अध्यक्ष से विमर्श",
      description:
        "आज विश्व हिंदू परिषद के अंतरराष्ट्रीय अध्यक्ष श्री आलोक कुमार से हिंदू धर्म और इसके सुदृढ़ीकरण के लिए सनातन सेवा निधि कानून बनाने की आवश्यकता के बारे में गंभीर और सार्थक विमर्श हुआ।\n\nवे सुप्रीम कोर्ट के सीनियर एडवोकेट भी हैं और हिंदू धर्म का गहन ज्ञान रखते हैं। जैसी कि उनसे आशा थी, वह एक अत्यंत भद्र और विद्वान व्यक्ति निकले।\n\nस्वामी ब्रह्म बोधि जी ने उन्हें सनातन सेवा निधि कानून के ड्राफ्ट की मुद्रित प्रतियाँ भेंट कीं और उन्हें इसके प्रमुख प्रावधानों से विस्तार से अवगत कराया। उन्होंने पूरा एक्ट ध्यानपूर्वक पढ़कर पुनः चर्चा करने और अपनी ओर से आवश्यक कार्रवाई करने का आश्वासन दिया।\n\nमंदिरों को ग्राम्य जीवन के केंद्र में पुनः स्थापित करने के लिए गीता वैश्विक परिवार द्वारा जो पायलट प्रोजेक्ट शुरू किए जा रहे हैं, उनमें से एक महत्वपूर्ण पहल है — चयनित गाँवों के 1000 परिवारों को निःशुल्क निम्नलिखित सामग्री उपलब्ध कराना:\n\n• संप्रदाय-निरपेक्ष भगवद्गीता टीका\n• रामचरितमानस का संक्षिप्त रंगीन संस्करण\n• धर्मांतरण-निरोधी कैप्सूल कोर्स (पुस्तिका)\n• धार्मिक साक्षरता मॉड्यूल\n• विद्यार्थियों के लिए 51 श्लोकों की \"गीता नवनीत\" पुस्तक\n\nप्रोजेक्ट प्रारंभ करने से पूर्व गाँव के हिंदुओं की धार्मिक साक्षरता का आधारभूत मूल्यांकन किया जाएगा। एक वर्ष के प्रोजेक्ट की समाप्ति पर पुनः उनकी प्रगति की समीक्षा होगी — न केवल धर्म-ज्ञान बल्कि आचरण में हुए परिवर्तन भी आँके जाएँगे।\n\nश्री आलोक कुमार को इस पहल के बारे में भी अवगत कराया गया और आज ही साई प्रिंटर्स पैक प्रेस से छपकर आई 400 पृष्ठों की सर्वप्रिय गीता टीका संस्करण की सर्वप्रथम प्रति उन्हें भेंट की गई।\n\nश्री आलोक कुमार के साथ हिंदू धर्म के भविष्य पर चर्चा करना एक सुखद और अत्यंत समृद्ध अनुभव रहा।",
    },
  },
  {
    images: [img("event-delhi-hindu-mahasabha-1.jpeg")],
    title: "Dialogue with the Akhil Bharat Hindu Mahasabha",
    description:
      "Swami Brahm Bodhi held a substantive and constructive dialogue with Shri Munna Sharma Ji, the current President of the Akhil Bharat Hindu Mahasabha, at the organisation's office on Mandir Marg, Delhi, on the draft of the Sanatan Seva Nidhi Act. Both the summary and the full draft were presented, and were received with warm appreciation.\n\nShri Munna Sharma Ji offered several thoughtful suggestions to strengthen the initiative and generously shared the contacts of individuals who could help carry the proposal and the broader Sanatan agenda forward.\n\nThe Akhil Bharat Hindu Mahasabha is among the oldest Hindu organisations in the country, founded in 1915 by Mahamana Madan Mohan Malaviya, who convened a gathering of various Hindu organisations in Haridwar and brought many of them onto a common platform. Its past presidents include towering figures such as Madan Mohan Malaviya, Vinayak Damodar Savarkar, Lala Lajpat Rai, and Bharati Krishna Tirtha.\n\nThe meeting reaffirmed a shared vision: that the many independent Hindu organisations active today can achieve far greater impact when they come together under a broad, universal Sanatan platform dedicated to larger civilisational interests — pursuing the major objectives of society, culture, and Dharma in an organised, coordinated, and effective manner.",
  },
  {
    images: [
      img("event-delhi-bsmp-1.jpeg"),
      img("event-delhi-bsmp-2.jpeg"),
      img("event-delhi-bsmp-3.jpeg"),
    ],
    title: "BSMP Sant Sammelan, Delhi",
    description:
      "Swami Brahm Bodhi was invited to a congregation of the Bharatiya Sant Maha Parishad (BSMP) in Delhi — a remarkable gathering of saints, mostly sannyasis, from across India and abroad. The programme was very well organised and led primarily by sannyasis of the Shankar tradition from South India, with several thoughtful presentations made during the proceedings.\n\nThe organisers articulated an inspiring vision: to bring all faiths of Indian origin onto a common platform, and to work towards a Uniform Ritual Code (URC) along with five shared samskaras for all. Such collective dreaming itself carries great value, as it lays the foundation for deeper conversation and future alignment across traditions.\n\nBooklets on the Sanatan Seva Nidhi Act were shared with the volunteers, to be passed on to the leadership of the movement — especially the Swami from Sri Kailash Ashram, Bengaluru. The encounter has opened a meaningful channel for continued engagement with the organisers over the coming weeks and months.\n\nThe gathering reaffirmed an important truth: that connectivity and cohesiveness among the leading figures of different streams of Hindu spirituality is the need of the hour, and that a shared, contemporary programme for the broader Sanatan Dharma can carry profound meaning and relevance in today's India and the modern world.",
  },
];

const biharEvents: EventItem[] = [
  {
    images: [img("event-bihar-1.jpeg")],
    title: "Meeting Chief Minister of Bihar",
    description:
      "Met Chief Minister of Bihar, Shri Samrat Chaudhary, to present the Sanatan Seva Nidhi Act — a proposed legislation for the protection and empowerment of Sanatan Dharma, already submitted to the Central Government. The Chief Minister listened with keen interest and assured his support for reviewing the Act and advancing it further.",
  },
  {
    images: [img("event-bihar-7.jpeg")],
    title: "Meeting Deputy Chief Minister of Bihar",
    description:
      "Met Deputy Chief Minister of Bihar, Shri Vijay Kumar Choudhary, to discuss the Sanatan Seva Nidhi Act. The dialogue covered key provisions including temple revitalisation, training of Adhyatma-Acharyas (spiritual preceptors), and the creation of an organised system of giving for the strengthening of Sanatan Dharma.",
  },
  {
    images: [img("event-bihar-5.png")],
    title: "Trust Board Dialogue, Bihar",
    description:
      "Met Shri Ranveer Nandan, Chairman of the Bihar Religious Trust Board, which oversees approximately 450 temples and monasteries across the state. Discussed the Sanatan Seva Nidhi Act and the temple empowerment project — revitalising temples as centres of community life and distributing the Bhagavad Gita and Ramkatha to 1,000 Sanatani homes. Shri Nandan offered a temple for the pilot and proposed convening a large assembly of mahants for a formal presentation.",
  },
  {
    images: [img("event-bihar-2.jpeg")],
    title: "Punaura Dham Dialogue",
    description:
      "Met Senior Mahant Shri Kaushal Kishore Das Ji Maharaj and his successor Shri Ramkumar Das Ji at Punaura Dham, the manifestation site of Mother Janaki near Sitamarhi. Discussed adopting the Bhagavad Gita and the Vedas as shared primary scriptures across all sects, and the provisions of the Sanatan Seva Nidhi Act. Preliminary agreement was reached on both subjects.",
  },
  {
    images: [img("event-bihar-10.jpeg")],
    title: "Meeting Jagadguru Rambhadracharya",
    description:
      "Met Jagadguru Rambhadracharya in Sitamarhi to discuss the Sanatan Seva Nidhi Act and the need for unity across all sampradayas. Received his encouragement, blessings, and commitment toward the collective strengthening of Dharma.",
  },
  {
    images: [img("event-bihar-6.jpeg")],
    title: "Ideal 40 Team, Siwan",
    description:
      "Held an interactive session on spirituality with approximately 40 students — carefully selected Class 9 students from underprivileged backgrounds, including Muslim girls — coached free of cost by Dr Rajneesh Verma's Ideal 40 initiative. Discussed a temple empowerment pilot to distribute curated editions of the Bhagavad Gita and Ramkatha to 1,000 families in the district.",
  },
  {
    images: [img("event-bihar-8.jpeg")],
    title: "Siwan Community Mobilisation",
    description:
      "A series of engagements with prominent citizens and intellectuals of Siwan — including Dr Rajneesh Verma, Shri Shailendra Singh (former banker), Shri Ravindra Pathak (Professor, DAV College), and Shri Bharat Bhushan (social worker) — to build a dedicated volunteer network for the Sanatan Seva Nidhi Act campaign and the temple empowerment initiative. The draft Act received strong endorsement from all participants.",
  },
];

const nepalEvents: EventItem[] = [
  {
    images: [img("event-nepal-1.jpeg")],
    title: "Janakpur Dialogue on Sanatan Seva Nidhi Act",
    description:
      "Met the chief Mahant of Janaki Mandir in Janakpur, Nepal — the historic land of King Janak where Mother Sita was raised. Discussed the Sanatan Seva Nidhi Act and its relevance for Nepal. Lawyer devotees present offered to review the draft and facilitate further dialogue, opening a promising path for continued engagement.",
  },
  {
    images: [img("event-bihar-4.jpeg")],
    title: "Ram Mandir Priest, Janakpur",
    description:
      "A moving encounter with the devoted priest of Ram Mandir in Janakpur — a man of overflowing bhakti, raised in the temple since childhood. A heartfelt exchange on devotion and knowledge followed, reflecting the Gita's teaching that the wise devotee stands highest, and that a priest's calling is to guide seekers through both devotion and scriptural wisdom.",
  },
];

const mumbaiEvents: EventItem[] = [
  {
    images: [img("event-mumbai-swami-raj-1.png")],
    title: "Initial Meeting at Hotel Swami Raj, Mumbai",
    description:
      "Today, an initial meeting was held at Hotel Swami Raj with a few important individuals regarding the challenges facing Hindu Dharma and, in particular, the need for the early enactment of the Sanatan Seva Nidhi Act by Parliament. The participants included two senior advocates.\n\nDiscussions were also held on a plan to re-establish temples as the centres of village life and to appoint a dedicated Dharma outreach worker (Dharma Vistarak) in each temple. A larger meeting on these subjects is planned for tomorrow.",
    hi: {
      title: "होटल स्वामी राज, मुंबई में प्रारंभिक बैठक",
      description:
        "आज हिंदू धर्म की समस्याओं के संबंध में और विशेष कर सनातन सेवा निधि कानून को शीघ्र संसद से लागू करने के संबंध में एक प्रारंभिक बैठक होटल स्वामी राज में कुछ महत्वपूर्ण लोगों के साथ हुई, जिसमें दो वरीय वकील भी शामिल थे।\n\nसाथ-साथ मंदिरों को ग्राम जीवन के केंद्र में स्थापित करने की योजना और उनमें एक-एक धर्म विस्तारक की नियुक्ति के संदर्भ में भी बातें हुईं। इस संबंध में एक बड़ी बैठक कल होने की योजना है।",
    },
  },
  {
    images: [img("event-mumbai-tamil-play-1.png")],
    title: "A Tamil Play Evening with Y. G. Mahendran, Mumbai",
    description:
      "In Mumbai today, through the kind courtesy of his chief host Shri Prakash Pai, Swami Brahm Bodhi had the opportunity to watch a Tamil play in which the veteran actor Y. G. Mahendran was in the lead role.\n\nIt was an extremely entertaining and humorous production, with a beautiful blend of positive messages and sharp satire. The quality of the performance could be gauged from the enthusiastic response of the audience. The vast auditorium, with a seating capacity of nearly 3,000, was packed to the brim and erupted with laughter from time to time.\n\nSince Swamiji does not know the Tamil language, he could not fully follow the play. Even so, whenever the entire auditorium burst into laughter, he too could not stop himself from smiling or laughing along. Good humour, it seems, transcends the boundaries of language.\n\nHe will write at some length about this grand and magnificent theatre on another occasion. But even more important than that was the fact that this occasion gave him the opportunity to meet certain distinguished individuals who could well become lifelong friends in the future.\n\nAt the end of the play, the managing trustees took Swamiji up on the stage and gave him a brief opportunity to be introduced to and converse with Shri Y. G. Mahendran and his team. He extended an invitation to them to visit Vrindavan, which they graciously and enthusiastically accepted.\n\nY. G. Mahendran (full name: Yecha Gunja Mahendran) is a distinguished actor, playwright, comedian, theatre personality, and director from Tamil Nadu. Born in Chennai in 1950, he has held an active and respected place in the world of Tamil theatre and cinema for more than five decades.\n\nOne of the great joys of travel is that it brings opportunities to meet people from diverse linguistic, cultural, and professional backgrounds. This evening was especially delightful in that respect. Swamiji was introduced to many warm-hearted, talented, and inspiring individuals. It is hoped that some of these connections will, in time, take the form of lasting friendships.",
    hi: {
      title: "वाई. जी. महेंद्रन के साथ तमिल नाटक की संध्या, मुंबई",
      description:
        "मुंबई में आज स्वामी ब्रह्म बोधि जी को अपने मुख्य होस्ट श्री प्रकाश पाई के सौजन्य से एक तमिल नाटक देखने का अवसर मिला, जिसमें वरिष्ठ अभिनेता वाई. जी. महेंद्रन मुख्य भूमिका में थे।\n\nयह एक अत्यंत मनोरंजक और हास्यपूर्ण प्रस्तुति थी, जिसमें सकारात्मक संदेशों और तीक्ष्ण व्यंग्य का सुंदर समन्वय था। इसकी गुणवत्ता का अनुमान दर्शकों की उत्साहपूर्ण प्रतिक्रिया से लगाया जा सकता था। लगभग 3,000 दर्शकों की क्षमता वाला विशाल सभागार खचाखच भरा हुआ था और समय-समय पर ठहाकों से गूंज उठता था।\n\nचूँकि स्वामी जी तमिल भाषा नहीं जानते, इसलिए नाटक को पूरी तरह समझ नहीं सके। फिर भी, जब-जब पूरा सभागार हँसी से भर उठता था, तब-तब वे भी अपने आपको मुस्कुराने या हँसने से रोक नहीं पाते थे। अच्छा हास्य भाषा की सीमाओं को भी पार कर जाता है।\n\nइस भव्य और विशाल नाट्यगृह के बारे में वे फिर कभी थोड़े विस्तार से लिखेंगे। किंतु उससे भी अधिक महत्वपूर्ण बात यह रही कि इस अवसर पर उन्हें कुछ ऐसे विशिष्ट व्यक्तियों से मिलने का अवसर मिला, जो भविष्य में आजीवन मित्र बन सकते हैं।\n\nनाटक की समाप्ति पर प्रबंध न्यासियों ने स्वामी जी को मंच पर ले जाकर वाई. जी. महेंद्रन जी तथा उनकी टीम से संक्षिप्त परिचय और संवाद का अवसर प्रदान किया। उन्होंने उन्हें वृंदावन आने का निमंत्रण दिया, जिसे उन्होंने प्रसन्नतापूर्वक और उत्साहपूर्वक स्वीकार किया।\n\nवाई. जी. महेंद्रन (पूरा नाम: येचा गुंजा महेंद्रन) तमिलनाडु के एक प्रतिष्ठित अभिनेता, नाटककार, हास्य कलाकार, रंगमंच व्यक्तित्व तथा निर्देशक हैं। उनका जन्म 1950 में चेन्नई में हुआ था और वे पिछले पाँच दशकों से अधिक समय से तमिल रंगमंच और सिनेमा की दुनिया में सक्रिय एवं सम्मानित स्थान रखते हैं।\n\nयात्राओं का एक बड़ा आनंद यह होता है कि उनसे विभिन्न भाषाई, सांस्कृतिक और व्यावसायिक पृष्ठभूमियों के लोगों से मिलने का अवसर प्राप्त होता है। यह संध्या इस दृष्टि से विशेष रूप से सुखद रही। स्वामी जी का अनेक सौहार्दपूर्ण, प्रतिभाशाली और प्रेरणादायक व्यक्तियों से परिचय हुआ। आशा है कि इनमें से कुछ संबंध भविष्य में स्थायी मित्रता का रूप धारण करेंगे।",
    },
  },
  {
    images: [img("event-mumbai-prakash-1.png")],
    title: "With Prakash Ji, Treasurer of Ayyappa Swami Sangathan",
    description:
      "Swami Brahm Bodhi with Shri Prakash Ji — Treasurer of the vast Ayyappa Swami organisation across Maharashtra and South India — at his hotel room in Mumbai.\n\nPrakash Ji carries a profound interest in the protection and propagation of Sanatan Dharma, and has made — and continues to make — outstanding contributions in this direction. A polyglot conversant in seven languages, with roots in Karnataka, born and raised in Tamil Nadu, and now settled in Mumbai, Maharashtra — Prakash Ji was presented by Swamiji with four English and Hindi books on the Bhagavad Gita as a gift.\n\nIt was primarily on Prakash Ji's warm and affectionate invitation that Swami Brahm Bodhi travelled to Mumbai, Maharashtra. Swamiji's entire stay in Maharashtra has been graciously arranged by him.\n\nMay Ishvara and Ayyappa Swami always keep Prakash Ji in Their refuge and in Their service, and bless him with happiness and prosperity — these are Swamiji's heartfelt blessings and good wishes.",
    hi: {
      title:
        "अय्यप्पा स्वामी संगठन के कोषाध्यक्ष प्रकाश जी के साथ, मुंबई",
      description:
        "महाराष्ट्र सहित दक्षिण भारत में अय्यप्पा स्वामी के विशाल संगठन के कोषाध्यक्ष प्रकाश जी के साथ स्वामी ब्रह्म बोधि जी अपने होटल कक्ष में।\n\nसनातन धर्म के रक्षण और प्रचार-प्रसार में प्रकाश जी की गहन रुचि है और इस दिशा में उन्होंने महान योगदान किया है और कर रहे हैं। सात भाषाएं जानने वाले, कर्नाटक के उत्स वाले, तमिलनाडु में पैदा हुए और पले-बढ़े, तथा अब महाराष्ट्र के मुंबई में सैटल्ड प्रकाश जी को स्वामी जी ने भगवद्गीता पर चार हिंदी-अंग्रेजी पुस्तकें उपहार में दीं।\n\nप्रमुख रूप से इन्हीं के स्नेहमय आमंत्रण पर स्वामी ब्रह्म बोधि जी महाराष्ट्र मुंबई आए। महाराष्ट्र में स्वामी जी का निवास उन्हीं द्वारा संयोजित है।\n\nईश्वर और अय्यप्पा स्वामी उन्हें सदा अपनी शरण और सेवा में रखें, और सुखी संपन्न रखें — यही स्वामी जी का आशीर्वाद और शुभकामना है।",
    },
  },
];

const vrindavanEvents: EventItem[] = [
  {
    images: [img("event-vrindavan-1.jpeg")],
    title: "Saints' Outreach, Vrindavan",
    description:
      "Meeting with Shri Nagari Das of Shergarh and Shri Dashrath Maharaj of Hanuman Tekri Temple marked the launch of the Sanatan Seva Nidhi Act outreach in Vrindavan. Dashrath Maharaj extended full support and facilitated a gathering of select saints who heard the Act's provisions with keen interest, culminating in an invitation to present at a forthcoming Sant Mahasabha.",
  },
  {
    images: [img("event-vrindavan-1.jpeg")],
    title: "Spiritual Dialogues, Vrindavan",
    description:
      "In-depth discussions with renowned Bhagavat Kathakaar Badrish Ji and Shri Govindanand Tirth, one of Vrindavan's most senior and erudite saints, on the provisions of the Sanatan Seva Nidhi Act. Hindi copies of the Act were shared for review and future written endorsement.",
  },
];

const PREVIEW_CHAR_LIMIT = 180;

function getPreview(text: string): { preview: string; needsMore: boolean } {
  if (text.length <= PREVIEW_CHAR_LIMIT) {
    return { preview: text, needsMore: false };
  }
  const slice = text.slice(0, PREVIEW_CHAR_LIMIT);
  const lastSpace = slice.lastIndexOf(" ");
  const preview = lastSpace > 0 ? slice.slice(0, lastSpace) : slice;
  return { preview: preview.trimEnd(), needsMore: true };
}

function EventCard({
  event,
  index,
  onOpen,
}: {
  event: EventItem;
  index: number;
  onOpen: () => void;
}) {
  const { preview, needsMore } = getPreview(event.description);
  const hasMultiple = event.images.length > 1;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className="group bg-white rounded-2xl overflow-hidden border border-cream-dark/30 hover:shadow-xl transition-all duration-300 flex flex-col"
    >
      <button
        type="button"
        onClick={onOpen}
        className="relative h-56 md:h-64 overflow-hidden cursor-pointer focus:outline-none focus:ring-2 focus:ring-saffron"
        aria-label={`Open photos for ${event.title}`}
      >
        <Image
          src={event.images[0]}
          alt={event.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        {hasMultiple && (
          <span className="absolute top-3 right-3 inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-black/55 text-white text-xs font-medium backdrop-blur-sm">
            <Sparkles className="w-3 h-3" />
            {event.images.length} photos
          </span>
        )}
      </button>
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-lg font-semibold text-dark-brown leading-snug group-hover:text-saffron transition-colors">
          {event.title}
        </h3>
        <p className="mt-3 text-sm text-text-secondary leading-relaxed">
          {preview}
          {needsMore && (
            <>
              {" "}
              <button
                type="button"
                onClick={onOpen}
                className="text-saffron font-semibold hover:text-saffron-dark transition-colors underline-offset-2 hover:underline"
              >
                Read more
              </button>
            </>
          )}
        </p>
      </div>
    </motion.div>
  );
}

function EventModal({
  event,
  onClose,
}: {
  event: EventItem;
  onClose: () => void;
}) {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [lang, setLang] = useState<"en" | "hi">("en");
  const total = event.images.length;
  const hasMultiple = total > 1;
  const hasBilingual = !!event.hi;
  const title = lang === "hi" && event.hi ? event.hi.title : event.title;
  const description = lang === "hi" && event.hi ? event.hi.description : event.description;

  const next = useCallback(() => {
    setPhotoIndex((i) => (i + 1) % total);
  }, [total]);

  const prev = useCallback(() => {
    setPhotoIndex((i) => (i - 1 + total) % total);
  }, [total]);

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight" && hasMultiple) next();
      if (e.key === "ArrowLeft" && hasMultiple) prev();
    }
    window.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [next, prev, hasMultiple, onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-black/75 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="relative w-full max-w-5xl max-h-[90vh] bg-white rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute top-3 right-3 z-20 w-9 h-9 rounded-full bg-black/55 hover:bg-black/75 text-white flex items-center justify-center transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="relative md:w-3/5 bg-black flex items-center justify-center min-h-[260px] md:min-h-[420px]">
          <div className="relative w-full h-[260px] md:h-full">
            <Image
              src={event.images[photoIndex]}
              alt={`${event.title} — photo ${photoIndex + 1}`}
              fill
              className="object-contain"
              sizes="(min-width: 768px) 60vw, 100vw"
            />
          </div>

          {hasMultiple && (
            <>
              <button
                type="button"
                onClick={prev}
                aria-label="Previous photo"
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/85 hover:bg-white text-dark-brown flex items-center justify-center shadow-lg transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={next}
                aria-label="Next photo"
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/85 hover:bg-white text-dark-brown flex items-center justify-center shadow-lg transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5">
                {event.images.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setPhotoIndex(i)}
                    aria-label={`Go to photo ${i + 1}`}
                    className={`h-1.5 rounded-full transition-all ${
                      i === photoIndex
                        ? "w-6 bg-white"
                        : "w-1.5 bg-white/55 hover:bg-white/80"
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        <div className="md:w-2/5 p-6 md:p-8 overflow-y-auto">
          {hasBilingual && (
            <div className="flex items-center gap-1 mb-4 p-1 bg-cream rounded-lg w-fit">
              <Globe className="w-3.5 h-3.5 text-text-muted ml-1.5" />
              <button
                onClick={() => setLang("en")}
                className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${
                  lang === "en"
                    ? "bg-saffron text-white shadow-sm"
                    : "text-text-secondary hover:text-dark-brown"
                }`}
              >
                English
              </button>
              <button
                onClick={() => setLang("hi")}
                className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${
                  lang === "hi"
                    ? "bg-saffron text-white shadow-sm"
                    : "text-text-secondary hover:text-dark-brown"
                }`}
              >
                हिंदी
              </button>
            </div>
          )}
          <h3 className="text-xl md:text-2xl font-bold text-dark-brown leading-snug pr-8">
            {title}
          </h3>
          <div className="mt-4 space-y-3 text-sm md:text-[15px] text-text-secondary leading-relaxed">
            {description.split("\n").map((para, i) =>
              para.trim() === "" ? null : (
                <p key={i}>{para}</p>
              ),
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function EventGrid({ events }: { events: EventItem[] }) {
  const [activeEvent, setActiveEvent] = useState<EventItem | null>(null);

  return (
    <>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event, i) => (
          <EventCard
            key={`${event.title}-${i}`}
            event={event}
            index={i}
            onOpen={() => setActiveEvent(event)}
          />
        ))}
      </div>
      <AnimatePresence>
        {activeEvent && (
          <EventModal
            event={activeEvent}
            onClose={() => setActiveEvent(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}

export default function EventsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-32 md:py-44 overflow-hidden">
        <Image
          src={img("event-hero.png")}
          alt="Gita Global Family Events"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/45 to-black/70" />
        <div className="relative section-padding text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-saffron-light font-semibold text-sm uppercase tracking-wider"
          >
            Discourses &bull; Workshops &bull; Seva
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-3 text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
          >
            Our Events
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-5 text-white/85 text-base md:text-lg max-w-3xl mx-auto leading-relaxed"
          >
            Bringing the Bhagavad Gita&apos;s teachings to life through
            immersive discourses, interfaith dialogues, and community service
            — across the UK, India, and Nepal.
          </motion.p>
        </div>
      </section>

      {/* Why Events Matter */}
      <section className="section-padding py-16 md:py-24 bg-cream">
        <SectionHeading title="Why Our Events Matter" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {whyMatters.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="text-center bg-white rounded-2xl p-7 border border-cream-dark/30 hover:shadow-lg transition-shadow"
            >
              <div className="w-14 h-14 rounded-2xl bg-saffron/10 flex items-center justify-center mx-auto mb-5">
                <item.icon className="w-7 h-7 text-saffron" />
              </div>
              <h3 className="text-base font-semibold text-dark-brown mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.blockquote
          {...fadeInUp}
          className="max-w-3xl mx-auto mt-14 text-center"
        >
          <p className="text-lg md:text-xl italic text-dark-brown/80 leading-relaxed">
            &ldquo;When souls unite in pursuit of truth, every satsang becomes
            a stepping stone toward collective awakening.&rdquo;
          </p>
        </motion.blockquote>
      </section>

      {/* London Events */}
      <section className="section-padding py-16 md:py-24">
        <div className="flex items-center justify-center gap-2 mb-2">
          <MapPin className="w-5 h-5 text-saffron" />
          <span className="text-sm font-semibold text-saffron uppercase tracking-wider">
            London, United Kingdom
          </span>
        </div>
        <SectionHeading
          title="Events in London, UK"
          subtitle="Interfaith dialogues, discourses, and cultural programmes across London — from the Nehru Centre to temples and the Brahma Kumaris World Spiritual University."
        />
        <EventGrid events={londonEvents} />
      </section>

      {/* Bihar / India Events */}
      <section className="section-padding py-16 md:py-24 bg-cream">
        <div className="flex items-center justify-center gap-2 mb-2">
          <MapPin className="w-5 h-5 text-saffron" />
          <span className="text-sm font-semibold text-saffron uppercase tracking-wider">
            India — Bihar
          </span>
        </div>
        <SectionHeading
          title="Events in Bihar, India"
          subtitle="Dialogues on the Sanatan Seva Nidhi Act with the Chief Minister, Jagadgurus, temple mahants, and community leaders — building consensus for the strengthening of Sanatan Dharma."
        />
        <EventGrid events={biharEvents} />
      </section>

      {/* Nepal Events */}
      <section className="section-padding py-16 md:py-24">
        <div className="flex items-center justify-center gap-2 mb-2">
          <MapPin className="w-5 h-5 text-saffron" />
          <span className="text-sm font-semibold text-saffron uppercase tracking-wider">
            Nepal — Janakpur
          </span>
        </div>
        <SectionHeading
          title="Events in Janakpur, Nepal"
          subtitle="Engaging the spiritual leadership of Janakpur — the historic seat of King Janak and the sacred land where Mother Sita was raised — on the Sanatan Seva Nidhi Act and the timeless bond between devotion and wisdom."
        />
        <EventGrid events={nepalEvents} />
      </section>

      {/* Vrindavan Events */}
      <section className="section-padding py-16 md:py-24 bg-cream">
        <div className="flex items-center justify-center gap-2 mb-2">
          <MapPin className="w-5 h-5 text-saffron" />
          <span className="text-sm font-semibold text-saffron uppercase tracking-wider">
            India — Vrindavan, Uttar Pradesh
          </span>
        </div>
        <SectionHeading
          title="Sanatan Seva Nidhi Outreach, Vrindavan"
          subtitle="Engaging Vrindavan's revered saints and spiritual leaders to build support for the Sanatan Seva Nidhi Act — from temple mahants to renowned Bhagavat narrators and senior acharyas."
        />
        <EventGrid events={vrindavanEvents} />
      </section>

      {/* Mumbai / Maharashtra Events */}
      <section className="section-padding py-16 md:py-24">
        <div className="flex items-center justify-center gap-2 mb-2">
          <MapPin className="w-5 h-5 text-saffron" />
          <span className="text-sm font-semibold text-saffron uppercase tracking-wider">
            India — Mumbai, Maharashtra
          </span>
        </div>
        <SectionHeading
          title="Events in Mumbai, Maharashtra"
          subtitle="Meetings with key custodians of Sanatan Dharma in Maharashtra and South India — building bridges between traditions and strengthening the collective work of Dharma."
        />
        <EventGrid events={mumbaiEvents} />
      </section>

      {/* Delhi Events */}
      <section className="section-padding py-16 md:py-24 bg-cream">
        <div className="flex items-center justify-center gap-2 mb-2">
          <MapPin className="w-5 h-5 text-saffron" />
          <span className="text-sm font-semibold text-saffron uppercase tracking-wider">
            India — Delhi
          </span>
        </div>
        <SectionHeading
          title="Events in Delhi, India"
          subtitle="Engagements with national-level gatherings of saints and spiritual leaders, building bridges across sampradayas for the cause of a unified, contemporary Sanatan Dharma."
        />
        <EventGrid events={delhiEvents} />
      </section>

      {/* CTA */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <Image
          src={img("event-hero.png")}
          alt="Join our events"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative section-padding text-center">
          <motion.div {...fadeInUp} className="max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-bold text-white leading-tight">
              Join Us at Our Next Event
            </h2>
            <p className="mt-5 text-white/80 leading-relaxed">
              Whether you&apos;re in London, India, or Nepal, there&apos;s a
              place for you in our community. Connect with like-minded seekers and
              experience the transformative power of the Gita&apos;s teachings.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-saffron text-white font-semibold rounded-full hover:bg-saffron-dark transition-colors shadow-lg"
              >
                Get in Touch
              </a>
              <a
                href="/join-us"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white/15 text-white font-semibold rounded-full hover:bg-white/25 transition-colors border border-white/30"
              >
                Join the Family
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
