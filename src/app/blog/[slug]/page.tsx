import type { Metadata } from "next";
import { img } from "@/lib/image-url";
import BlogPostView, { type BlogPost } from "./BlogPostView";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const blogPosts: Record<string, BlogPost> = {
  "removing-spiritual-poverty-building-a-new-india": {
    title: "Removing Spiritual Poverty: The Missing Pillar of a New India",
    date: "May 26, 2026",
    videoId: "knKDmQ7d-3c",
    videoUrl: "https://www.youtube.com/watch?v=knKDmQ7d-3c",
    intro:
      "Roads, factories, and GDP are necessary — but they are not sufficient. A truly new India is built on a second, quieter foundation: the inner formation of the human being. In this address at a “Building a New India” summit, BrahmBodhi explains why removing spiritual poverty (आध्यात्मिक निर्धनता) is just as urgent as removing economic poverty — and how the Bhagavad Gita gives the blueprint to do both together.",
    content: [],
    sections: [
      {
        heading: "Opening with the Gita",
        body: "BrahmBodhi begins with a simple shloka of the Gita: dedicate every action, every austerity, every offering to the Lord. The one who sees God in all beings, and all beings in God, never falls out of His sight. This, BrahmBodhi says, is the vision from which he wishes to speak — a vision of seeing the Divine in every person one meets, and in every task one touches.\n\nIt moves BrahmBodhi that a “Building a New India” summit chose to open with a glimpse of Bharatiya culture and a reflection on the Gita. Whoever conceived of this, he observes, had very deep vision. Because nation‑building, in its truest sense, cannot begin anywhere else.",
      },
      {
        heading: "True nation‑building is the building of the human being",
        body: "Yes, BrahmBodhi acknowledges, building India means building roads, factories, hospitals, infrastructure, the health sector. None of this is to be dismissed. But beneath all of this, he insists, lies something more fundamental: manushya ka nirman — the formation of the human being.\n\nLook honestly at the world today, BrahmBodhi urges. Duraachaar, balaatkaar, bhrashtaachaar — immorality, violence against women, corruption — these are not just legal failures. They are symptoms of a civilization that has forgotten how to build the human being. A corrupt engineer, he points out, can still misuse a perfectly good highway. So if the road is built but not the person who walks it, only half of India has been built.",
      },
      {
        heading: "Poverty has more than one dimension",
        body: "BrahmBodhi deeply respects the current efforts of the Indian government to remove poverty — especially what the United Nations calls absolute poverty: those who do not receive even two meals a day. So long as this class remains poor, he insists, the nation cannot, in honesty, be called fully developed — no matter how grand the celebrations or how impressive the statistics.\n\nAny national sankalp — any genuine resolve — must, in BrahmBodhi’s view, explicitly include this most deprived section, and must work for both their physical and spiritual upliftment. Because poverty, in the Gita’s vision, is never only of the stomach. It is also of the heart.",
      },
      {
        heading: "Daivi Sampada: the wealth that no one can steal",
        body: "Under the Gita Dhama / Gita Global Family project, BrahmBodhi explains, every Garibi Nivaran Kendra — every poverty‑removal centre — works on both economic and spiritual poverty together. The two are never separated.\n\nThere is a chapter in the Gita on Daivi Sampada — the “divine wealth.” There, BrahmBodhi reminds his audience, Bhagavan Himself defines what spiritual poverty and spiritual wealth actually are. The Lord calls our inner qualities sampada — wealth, property of the soul. When qualities such as freedom from hatred, universal friendliness, compassion, humility, and a balanced mind enter one’s inner being, then — and only then — is a person spiritually rich. A man with crores in the bank but envy and rage in his heart is, in the Gita’s eyes, deeply poor.",
      },
      {
        heading: "Why removing poverty is so hard without karma‑yoga",
        body: "BrahmBodhi shares honestly. The early experiments of his team in poverty alleviation, he admits, left them at times disappointed. Many people did not wish to work. They wanted everything for free, even when they knew that what was being given was not enough for a dignified life. People kept visiting astrologers, kept waiting for government schemes, but avoided sustained effort.\n\nThis is why BrahmBodhi says with conviction: removing poverty is extremely hard unless people are educated and trained in the karma‑yoga of the Gita. Dharma — especially as taught in the Vedas and the Gita — can contribute enormously to prosperity, because it creates a value system of prosperity. In the Vedas, BrahmBodhi reminds us, asking the devatas for wealth, for cattle, for resources was never seen as shameful. It was part of a healthy, dharmic ideal of life.",
      },
      {
        heading: "From the world’s richest civilization — to mass poverty",
        body: "BrahmBodhi notes that the Vedic rishis prayed openly for dhan, dhaanya, gau, and prosperity. That value system carried India a long way. According to modern economic historians, he points out, India held the world’s highest — or near‑highest — GDP from roughly the first century all the way to the seventeenth century.\n\nJeffrey Sachs, in his book The End of Poverty, openly acknowledges this — and BrahmBodhi cites him directly: India held the top position in world GDP until the seventeenth century. China then took the first position in the eighteenth century, and India became second. After that, both India’s wealth and its value systems were systematically destroyed — and widespread poverty followed.\n\nThe collapse, BrahmBodhi emphasizes, was not only economic. It was, more deeply, a collapse of the value system that had sustained India’s dharmic prosperity for centuries.",
      },
      {
        heading: "Wealth as trusteeship, not as guilt",
        body: "BrahmBodhi contrasts this with certain interpretations of the Bible, and with some Islamic traditions, in which the rich man is portrayed as nearly incapable of entering heaven — it is famously said that it is easier for a camel to pass through the eye of a needle than for a rich man to enter the kingdom of God. The poor, in such a reading, are almost the default citizens of heaven.\n\nThe Gita, BrahmBodhi argues, does not speak in this way. Bhagavan Krishna does not demonize wealth. His message is clear: wealth is not a barrier to liberation, if it is used as King Janaka used it — as a trustee for the welfare of others. The Gita therefore encourages prosperity combined with responsibility. One can be wealthy and yet walk firmly on the spiritual path — provided that wealth is placed in the service of society and of dharma.",
      },
      {
        heading: "Karma‑yogi, not just karmi",
        body: "There is a great misunderstanding BrahmBodhi wishes to correct: the Gita does not turn people into sannyasis who refuse to work. Quoting the Gita — “Sannyasaḥ karma‑yogaś ca…” — he reminds his audience that both renunciation and karma‑yoga are effective paths, but karma‑yoga is more suitable, and more special, for most people.\n\nThe distinction between a mere karmi (worker) and a karma‑yogi, BrahmBodhi explains, looks small from outside. From inside, it is enormous. Two simple shifts turn ordinary work into yoga.\n\nFirst: anasakti — work with non‑attachment. Yes, BrahmBodhi says, desire outcomes — success, growth, prosperity — but do not cling to them. If a business fails, a karma‑yogi does not drown in sorrow. He rises and begins again, trusting that if his swadharma is performed properly, success will, in time, come.",
      },
      {
        heading: "The two pillars of karma‑yoga",
        body: "The first pillar, BrahmBodhi reiterates, is non‑attachment to results — anasakti — which gives equanimity in gain and loss, victory and defeat, success and failure. Siddhi‑asiddhi sama bhutva.\n\nThe second pillar, he says, is ishvara‑arpana — the dedication of every action to God. Whatever one does — eating, work, worship, charity — should be offered to the Divine. Then, the Gita promises, one’s sins and inner impurities are washed away. Action itself becomes a path of purification, and not of bondage.\n\nTogether, these two — anasakti and ishvara‑arpana — transform daily work into spiritual practice. There is no need, BrahmBodhi assures, to run away from wealth, jobs, or business. There is only the need to align them with dharma.",
      },
      {
        heading: "Gita for students, youth, and social equality",
        body: "BrahmBodhi describes the simple campaign of his mission: ghar‑ghar mein Gita, man‑man mein Gita. The Gita in every home, and the Gita in every mind. His team has published several commentaries in English and Hindi, including a student‑friendly book called Cream of the Bhagavad Gita / Gita Navneet, which presents fifty‑one selected shlokas as a concise gateway into the Gita’s philosophy of life.\n\nBrahmBodhi then turns plainly to one of the most painful issues of our time — social equality, and the question of caste. Among all the texts of Sanatana Dharma, he asserts, the Bhagavad Gita is uniquely and unambiguously pro‑equality — between castes, between men and women, and across social classes.\n\nThe Gita itself declares, he reminds the audience: vidyā‑vinaya‑sampanne brāhmaṇe gavi hastini śuni chaiva śva‑pāke cha paṇḍitāḥ sama‑darśinaḥ. The truly wise sees a learned brahmin, a cow, an elephant, a dog, and an outcaste with equal vision. If society wishes to heal the wounds of caste, BrahmBodhi argues, the Gita must be brought forward — ahead of other texts — and its vision must lead the way.",
      },
      {
        heading: "When the world listens to the Gita",
        body: "The Gita, BrahmBodhi observes, is not the property of Hindus alone. Some of the greatest minds of the West and of the Jewish tradition have spoken of it with awe.\n\nHe cites T. S. Eliot, one of the most respected literary critics of the English language, who compared the great Western philosophers — from Plato down to the modern thinkers — and said that, when seen against the Gita, they appear like schoolboys. BrahmBodhi also recalls J. Robert Oppenheimer, the father of the atomic age, who would quote verses from the Gita and personally distribute copies to others — such was its hold on him.\n\nThese examples, BrahmBodhi notes, remind us that the Gita’s profundity is recognized far beyond Bharat’s borders. Its message is not for one religion or one nation. It is for the whole of humanity.",
      },
      {
        heading: "A new India needs daivi sampada",
        body: "BrahmBodhi closes by restating the heart of his mission: to place the Gita in every home and in every mind — as a practical guide for living, not merely a ritual book on the shelf.\n\nFor a truly new India, he insists, it is not enough to remove economic poverty. Spiritual poverty must be removed alongside it — by cultivating daivi sampada, by practising karma‑yoga, and by establishing a social equality rooted in genuine spiritual vision.\n\nHe invites the audience to take a copy of the Gita — made available free at the event — in English or in Hindi, and to place its teachings before the youth. Then, BrahmBodhi promises, the next generation will grow up materially capable and spiritually grounded. That — and not GDP alone — is the New India we must build together.",
      },
    ],
    hi: {
      title:
        "आध्यात्मिक निर्धनता का निवारण: नए भारत का वह अनदेखा स्तम्भ",
      intro:
        "सड़कें, कारख़ाने और GDP — ये सब आवश्यक हैं, परंतु पर्याप्त नहीं हैं। सच्चे अर्थों में नया भारत एक दूसरी, मौन नींव पर खड़ा होता है — मनुष्य के अंतःकरण का निर्माण। “Building a New India” सम्मेलन में दिए गए इस उद्बोधन में ब्रह्मबोधि यह स्पष्ट करते हैं कि आर्थिक निर्धनता हटाने जितनी ही आवश्यक है आध्यात्मिक निर्धनता को हटाना — और भगवद् गीता इन दोनों को एक साथ साधने का स्पष्ट मार्ग देती है।",
      content: [],
      sections: [
        {
          heading: "गीता से आरम्भ",
          body: "ब्रह्मबोधि अपने उद्बोधन का आरम्भ एक सरल गीता-श्लोक के भाव से करते हैं — हर कर्म, हर तप, हर आहुति को भगवान को अर्पित कर दो। जो साधक सभी प्राणियों में परमात्मा को देखता है और परमात्मा में सभी प्राणियों को, वह भगवान की दृष्टि से कभी ओझल नहीं होता। यही दृष्टि — कि हर व्यक्ति में और हर कार्य में दिव्यता का दर्शन हो — ब्रह्मबोधि के अनुसार उनके आज के वक्तव्य का आधार है।\n\nब्रह्मबोधि कहते हैं कि उन्हें यह देखकर गहरी प्रसन्नता हुई कि “Building a New India” सम्मेलन का शुभारम्भ भारतीय संस्कृति की झलक और गीता के चिंतन से किया गया। जिसने भी यह विचार दिया, उसकी दृष्टि बहुत गहरी है — क्योंकि सच्चे राष्ट्र-निर्माण का प्रारम्भ इसी से होता है, अन्यत्र कहीं से नहीं।",
        },
        {
          heading: "सच्चा राष्ट्र-निर्माण है — मनुष्य का निर्माण",
          body: "ब्रह्मबोधि स्वीकार करते हैं कि हाँ, भारत-निर्माण का अर्थ है सड़कें, कारख़ाने, अस्पताल, बुनियादी ढाँचा, स्वास्थ्य-क्षेत्र — इन सभी का विकास। इनकी उपेक्षा नहीं की जा सकती। परंतु वे ज़ोर देकर कहते हैं कि इन सबके मूल में एक और गहन कार्य है — मनुष्य का निर्माण।\n\nआज विश्व की स्थिति को ईमानदारी से देखने का आग्रह करते हुए ब्रह्मबोधि कहते हैं — दुराचार, बलात्कार, भ्रष्टाचार — ये केवल क़ानूनी विफलताएँ नहीं हैं। ये उस सभ्यता के लक्षण हैं जो मनुष्य के निर्माण को भूल चुकी है। एक भ्रष्ट इंजीनियर, वे स्पष्ट करते हैं, एक अच्छी-भली सड़क का भी दुरुपयोग कर सकता है। अतः यदि सड़क तो बना दी गई पर उस पर चलने वाले मनुष्य को नहीं बनाया, तो केवल आधा भारत ही बनाया गया है।",
        },
        {
          heading: "निर्धनता एक नहीं, अनेक आयामों वाली है",
          body: "ब्रह्मबोधि भारत सरकार के निर्धनता-निवारण के वर्तमान प्रयासों का हृदय से आदर करते हैं — विशेष रूप से उस वर्ग के लिए जिसे संयुक्त राष्ट्र “absolute poverty” कहता है — जिन्हें दो जून का भोजन भी नहीं मिलता। वे दृढ़तापूर्वक कहते हैं — जब तक यह वर्ग निर्धन है, तब तक — चाहे उत्सव कितने ही भव्य हों, चाहे आँकड़े कितने ही प्रभावशाली — राष्ट्र को पूर्ण विकसित नहीं कहा जा सकता।\n\nब्रह्मबोधि के अनुसार, हर राष्ट्रीय संकल्प में इस सबसे वंचित वर्ग का स्पष्ट उल्लेख होना चाहिए, और उसके भौतिक तथा आध्यात्मिक — दोनों उत्थान के लिए कार्य होना चाहिए। क्योंकि गीता की दृष्टि में निर्धनता केवल पेट की नहीं है — वह हृदय की भी है।",
        },
        {
          heading: "दैवी सम्पदा — वह धन जिसे कोई चुरा नहीं सकता",
          body: "ब्रह्मबोधि बताते हैं कि उनकी “गीता धाम / Gita Global Family” परियोजना के अंतर्गत प्रत्येक “ग़रीबी निवारण केंद्र” आर्थिक और आध्यात्मिक निर्धनता — दोनों पर एक साथ कार्य करता है। इन दोनों को कभी अलग नहीं किया जाता।\n\nवे श्रोताओं को स्मरण कराते हैं कि गीता में एक अध्याय है — “दैवासुर-सम्पद्-विभाग योग” — जो दैवी सम्पदा का विवेचन करता है। वहाँ स्वयं भगवान बताते हैं कि आध्यात्मिक निर्धनता और आध्यात्मिक धन वास्तव में क्या हैं। भगवान आंतरिक गुणों को “सम्पदा” कहते हैं — आत्मा का धन, आत्मा की सम्पत्ति। जब अद्वेष, सर्वभूतहित, करुणा, विनम्रता और समचित्तता जैसे गुण किसी के अंतःकरण में प्रवेश करते हैं — तभी, और केवल तभी, वह व्यक्ति आध्यात्मिक दृष्टि से धनवान कहलाता है। बैंक में करोड़ों रखने वाला परंतु हृदय में ईर्ष्या और क्रोध से भरा व्यक्ति, गीता की दृष्टि में, गहरा निर्धन है।",
        },
        {
          heading: "कर्म-योग के बिना निर्धनता हटाना इतना कठिन क्यों है",
          body: "ब्रह्मबोधि स्पष्ट रूप से स्वीकार करते हैं कि उनकी टीम के प्रारम्भिक निर्धनता-निवारण प्रयोग कभी-कभी निराशाजनक रहे। अनेक लोग परिश्रम नहीं करना चाहते थे। वे सब कुछ निःशुल्क चाहते थे — यह जानते हुए भी कि जो दिया जा रहा है वह सम्मानजनक जीवन के लिए पर्याप्त नहीं है। लोग ज्योतिषियों के पास जाते रहे, सरकारी योजनाओं की प्रतीक्षा करते रहे, परंतु निरंतर परिश्रम से बचते रहे।\n\nइसीलिए ब्रह्मबोधि दृढ़ता से कहते हैं — जब तक लोगों को गीता के कर्म-योग की शिक्षा और प्रशिक्षण नहीं दिया जाता, तब तक निर्धनता हटाना अत्यंत कठिन है। धर्म — विशेषकर वेद और गीता में सिखाया गया धर्म — समृद्धि में बहुत बड़ा योगदान कर सकता है, क्योंकि वह एक “समृद्धि की मूल्य-व्यवस्था” रचता है। वे स्मरण कराते हैं कि वेदों में देवताओं से धन, गौ, अन्न और साधन माँगना कभी लज्जा का विषय नहीं था — वह एक स्वस्थ, धार्मिक जीवन-आदर्श का अंग था।",
        },
        {
          heading: "विश्व की सबसे समृद्ध सभ्यता से — सामूहिक निर्धनता तक",
          body: "ब्रह्मबोधि ध्यान दिलाते हैं कि वैदिक ऋषियों ने खुले मन से धन, धान्य, गौ और समृद्धि की प्रार्थना की। उसी मूल्य-व्यवस्था ने भारत को बहुत दूर तक पहुँचाया। आधुनिक आर्थिक इतिहासकारों के अनुसार, वे बताते हैं, लगभग पहली शताब्दी से सत्रहवीं शताब्दी तक भारत का GDP विश्व में सर्वोच्च — या लगभग सर्वोच्च — रहा।\n\nब्रह्मबोधि Jeffrey Sachs को उद्धृत करते हैं जिन्होंने अपनी पुस्तक The End of Poverty में इसे खुलकर स्वीकार किया है — सत्रहवीं शताब्दी तक विश्व GDP में भारत का प्रथम स्थान था। फिर अठारहवीं शताब्दी में चीन ने पहला स्थान लिया और भारत दूसरे स्थान पर आया। उसके बाद भारत की सम्पत्ति और उसकी मूल्य-व्यवस्था — दोनों को व्यवस्थित रूप से नष्ट किया गया, और व्यापक निर्धनता का जन्म हुआ।\n\nब्रह्मबोधि ज़ोर देते हैं — यह पतन केवल आर्थिक नहीं था। यह उससे भी गहरे स्तर पर — उस मूल्य-व्यवस्था का पतन था जिसने सदियों तक भारत की धार्मिक समृद्धि को धारण किया था।",
        },
        {
          heading: "धन — अपराध-बोध नहीं, ट्रस्टीशिप",
          body: "ब्रह्मबोधि इसकी तुलना बाइबिल की कुछ व्याख्याओं और इस्लामी परम्परा के कुछ रूपों से करते हैं, जिनमें धनी व्यक्ति को स्वर्ग में प्रवेश के लिए लगभग अयोग्य माना जाता है — प्रसिद्ध उक्ति है कि किसी धनवान का स्वर्ग में प्रवेश करना उससे भी कठिन है जितना ऊँट का सूई के छेद से निकल जाना। उस दृष्टि में निर्धन ही स्वर्ग के स्वाभाविक नागरिक हैं।\n\nब्रह्मबोधि का तर्क है कि गीता इस प्रकार नहीं बोलती। भगवान श्रीकृष्ण धन को कलंकित नहीं करते। उनका संदेश स्पष्ट है — धन मोक्ष का बाधक नहीं है, यदि उसका प्रयोग वैसा हो जैसा राजा जनक ने किया — दूसरों के कल्याण के लिए एक ट्रस्टी के रूप में। अतः गीता समृद्धि को उत्तरदायित्व के साथ जोड़कर प्रोत्साहित करती है। मनुष्य धनवान भी हो सकता है और आध्यात्मिक मार्ग पर दृढ़ता से चल भी सकता है — बशर्ते वह धन समाज और धर्म की सेवा में लगे।",
        },
        {
          heading: "केवल कर्मी नहीं — कर्म-योगी बनें",
          body: "ब्रह्मबोधि एक बड़े भ्रम को स्पष्ट करना चाहते हैं — गीता लोगों को कर्म-त्यागी संन्यासी नहीं बनाती। गीता का उद्धरण देते हुए वे श्रोताओं को स्मरण कराते हैं — “संन्यासः कर्म-योगश्च…” — संन्यास और कर्म-योग दोनों कल्याण के मार्ग हैं, परंतु कर्म-योग अधिकांश व्यक्तियों के लिए अधिक उपयुक्त और श्रेष्ठ है।\n\nब्रह्मबोधि के अनुसार, एक साधारण “कर्मी” (worker) और एक “कर्म-योगी” में अंतर बाहर से बहुत छोटा दिखता है — परंतु भीतर से वह विशाल है। केवल दो छोटे परिवर्तन साधारण कार्य को योग में बदल देते हैं।\n\nपहला, वे कहते हैं — अनासक्ति, निरासक्त भाव से कार्य। हाँ, फल की इच्छा रखें — सफलता, उन्नति, समृद्धि की — परंतु उससे चिपकें नहीं। यदि कोई व्यवसाय असफल हो जाए, तो कर्म-योगी शोक में डूबता नहीं है। वह पुनः उठता है, यह विश्वास रखते हुए कि यदि स्वधर्म का यथार्थ पालन हो रहा है, तो समय आने पर सफलता निश्चित मिलेगी।",
        },
        {
          heading: "कर्म-योग के दो स्तम्भ",
          body: "ब्रह्मबोधि दोहराते हैं — पहला स्तम्भ है फल के प्रति अनासक्ति, जिससे लाभ-हानि, जय-पराजय, सफलता-असफलता में समभाव आता है। “सिद्धि-असिद्धि समो भूत्वा।”\n\nदूसरा स्तम्भ, वे बताते हैं, है — ईश्वर-अर्पण, अर्थात् हर कर्म को भगवान को अर्पित कर देना। साधक जो भी करे — भोजन, कार्य, पूजा, दान — सब कुछ परमात्मा को अर्पित कर दे। गीता आश्वासन देती है — तभी उसके पाप और अंतःकरण की अशुद्धियाँ धुल जाती हैं। कर्म स्वयं बंधन का नहीं, शुद्धि का मार्ग बन जाता है।\n\nये दोनों मिलकर — अनासक्ति और ईश्वर-अर्पण — दैनिक कार्य को आध्यात्मिक साधना में रूपांतरित कर देते हैं। ब्रह्मबोधि आश्वस्त करते हैं कि धन से, नौकरी से, व्यवसाय से भागने की कोई आवश्यकता नहीं है। आवश्यकता है केवल इस बात की कि उन्हें धर्म के साथ संरेखित किया जाए।",
        },
        {
          heading: "गीता — विद्यार्थियों, युवाओं और सामाजिक समानता के लिए",
          body: "ब्रह्मबोधि अपने अभियान का सरल सूत्र बताते हैं — घर-घर में गीता, मन-मन में गीता। हर घर में गीता पहुँचे, और हर मन में गीता बसे। उनकी टीम ने अंग्रेज़ी और हिंदी — दोनों में अनेक टीकाएँ प्रकाशित की हैं, जिनमें विद्यार्थियों के लिए विशेष रूप से तैयार पुस्तक “Cream of the Bhagavad Gita / गीता-नवनीत” सम्मिलित है, जिसमें इक्यावन चयनित श्लोकों के माध्यम से गीता के जीवन-दर्शन का संक्षिप्त परिचय दिया गया है।\n\nइसके बाद ब्रह्मबोधि अपने युग की एक अत्यंत पीड़ादायी समस्या पर स्पष्टता से बात करते हैं — सामाजिक समानता और जाति का प्रश्न। उनका कथन है कि समस्त सनातन ग्रंथों में, भगवद् गीता — समानता के पक्ष में — अद्वितीय और असंदिग्ध है। वर्णों के बीच, स्त्री-पुरुष के बीच, और सामाजिक वर्गों के बीच — गीता समानता का जो स्वर बुलंद करती है, वह अनुपम है।\n\nवे श्रोताओं को गीता का स्वयं का उद्घोष स्मरण कराते हैं — “विद्याविनयसम्पन्ने ब्राह्मणे गवि हस्तिनि। शुनि चैव श्वपाके च पण्डिताः समदर्शिनः॥” — सच्चा ज्ञानी विद्वान ब्राह्मण को, गाय को, हाथी को, कुत्ते को, और श्व-पाक (चाण्डाल) को — सभी को समान दृष्टि से देखता है। ब्रह्मबोधि कहते हैं कि यदि समाज को जाति-व्यवस्था के घावों को भरना है, तो अन्य ग्रंथों से पहले गीता को आगे लाना होगा — और उसकी दृष्टि को मार्गदर्शक बनाना होगा।",
        },
        {
          heading: "जब विश्व गीता को सुनता है",
          body: "ब्रह्मबोधि बताते हैं कि गीता केवल हिंदुओं की सम्पत्ति नहीं है। पश्चिम और यहूदी परम्परा के कई महान विचारकों ने इसके प्रति श्रद्धा से नतमस्तक होकर बात की है।\n\nवे T. S. Eliot का उल्लेख करते हैं — अंग्रेज़ी साहित्य के सर्वाधिक सम्मानित आलोचकों में से एक — जिन्होंने पाश्चात्य दार्शनिकों की प्लेटो से लेकर आधुनिक चिंतकों तक तुलना की, और कहा कि गीता के सामने ये सब विद्यार्थी (schoolboys) प्रतीत होते हैं। ब्रह्मबोधि J. Robert Oppenheimer का भी स्मरण कराते हैं — परमाणु युग के जनक — जो गीता के श्लोक उद्धृत किया करते थे और स्वयं दूसरों को गीता की प्रतियाँ वितरित करते थे — गीता का उन पर ऐसा प्रभाव था।\n\nब्रह्मबोधि कहते हैं कि ये उदाहरण स्मरण कराते हैं कि गीता की गहराई भारत की सीमाओं से बहुत आगे तक मान्य है। उसका संदेश किसी एक धर्म या एक राष्ट्र के लिए नहीं — सम्पूर्ण मानवता के लिए है।",
        },
        {
          heading: "नए भारत को चाहिए — दैवी सम्पदा",
          body: "अंत में, ब्रह्मबोधि अपने मिशन के हृदय की बात कहते हैं। उनकी आकांक्षा है कि गीता हर घर में और हर मन में स्थापित हो — एक जीवंत मार्गदर्शिका के रूप में, न कि अलमारी पर रखी कोई पूजा-पुस्तक मात्र।\n\nवे ज़ोर देकर कहते हैं कि सच्चे अर्थों में नए भारत के लिए केवल आर्थिक निर्धनता हटाना पर्याप्त नहीं है। साथ-साथ आध्यात्मिक निर्धनता भी हटानी होगी — दैवी सम्पदा का संवर्धन करके, कर्म-योग का अभ्यास करके, और सच्ची आध्यात्मिक दृष्टि से प्रेरित सामाजिक समानता की स्थापना करके।\n\nब्रह्मबोधि श्रोताओं को आमंत्रित करते हैं — गीता की एक प्रति लीजिए (इस आयोजन में निःशुल्क उपलब्ध है) — अंग्रेज़ी में अथवा हिंदी में — और इन शिक्षाओं को युवाओं तक पहुँचाइए। तब आने वाली पीढ़ी भौतिक रूप से समर्थ और आध्यात्मिक रूप से सुदृढ़ — दोनों होगी। यही — और केवल GDP नहीं — वह नया भारत है, जिसे हम सबको मिलकर बनाना है।",
        },
      ],
    },
  },
  "is-sanatan-dharma-divisive-a-historical-reality-check": {
    title:
      "Is Sanatan Dharma Really “Divisive”? A Historical Reality Check",
    date: "May 26, 2026",
    videoId: "26a27V0xtNY",
    videoUrl: "https://youtu.be/26a27V0xtNY",
    intro:
      "A political voice has once again called to “eradicate Sanatan.” In this video, BrahmBodhi answers that call — not with anger, but with history. He shows that Sanatan Dharma is, in fact, one of the most inclusive and non‑divisive civilizational traditions the world has ever known, especially when held up against the violent religious record of medieval Christian Europe.",
    content: [],
    sections: [
      {
        heading: "The context",
        body: "BrahmBodhi is responding to a Christian Indian politician who has repeatedly said that Sanatan Dharma — Hinduism — must be eradicated. He gently points out that the very same statement, made in many Islamic countries, could easily invite violent retaliation. In India, despite Hindus being a vast majority, the politician faces no physical threat at all. Why? Because the Sanatan civilization is, at its core, tolerant.",
      },
      {
        heading: "What “divisive” really means",
        body: "BrahmBodhi carefully separates “division” from “divisive.” Division — the existence of many religions, sects, ideologies, and parties — is natural and universal. Every society has it. “Divisive,” however, is something far more serious: it is when disagreements are not tolerated, and instead spill into bloodshed, wars, killings, and exterminations. By that honest definition, Sanatan Dharma simply does not qualify.",
      },
      {
        heading: "A historical look at Christianity",
        body: "Turning to medieval European history, BrahmBodhi argues that Christianity has been “the most divisive religion” in terms of intra‑religious violence. He walks through the Great Schism, the wars between Western and Eastern churches, the Catholic–Protestant conflicts, the Inquisitions (especially the Spanish Inquisition), and the Crusades — events in which millions died. He describes streets that flowed “like drains of blood,” citing figures such as 32,000 executions and thousands burnt alive.",
      },
      {
        heading: "Persecution from within",
        body: "BrahmBodhi emphasizes that Christians historically persecuted not only other Christians, but also Jews and Muslims — not merely converting them, but policing their practice and executing those suspected of secretly holding onto their old beliefs. He contrasts this with the near‑absence of comparable, large‑scale, recorded massacres between Hindu sects, or of Hindu “crusades” launched against people of other faiths.",
      },
      {
        heading: "The astonishing internal diversity of Sanatan Dharma",
        body: "He then lists the many living streams of Dharmic thought — Vaishnavas, Shaivas, Shaktas, Vaisheshikas, Sikhs, Jains, Buddhists — and points out that despite such enormous diversity, there are no documented large‑scale sectarian massacres among them. There were no Hindu or Buddhist crusades on the scale of those launched in the name of other faiths. Claims to the contrary, BrahmBodhi says, simply do not stand up to serious historical scrutiny.",
      },
      {
        heading: "Caste, scriptures, and an ongoing reform",
        body: "BrahmBodhi does not whitewash caste discrimination. He acknowledges it openly — but he is clear that it is not rooted in the core teachings of the Vedas or the Bhagavad Gita, which he holds as the top‑tier scriptures of Hindu thought. Caste oppression, in his reading, is a historical deviation that Sanatan society has been actively correcting through legal and social reform over the last eight decades. His prediction: caste‑based discrimination will largely disappear in the coming centuries.",
      },
      {
        heading: "India as a refuge of civilizations",
        body: "To reinforce the case for Sanatan inclusiveness, BrahmBodhi points to India as a “refuge of civilizations” — a land where persecuted Parsis and Jews found safety and were allowed to flourish. He contrasts the drastic decline of the Hindu population in Pakistan since Partition with the robust growth of the Muslim population in India — a fact that, he argues, decisively undermines the charge that Sanatan Dharma is inherently divisive or oppressive toward minorities.",
      },
      {
        heading: "A closing challenge — and a warning",
        body: "BrahmBodhi closes by urging the politician to “eradicate ignorance” — by actually studying history — rather than attacking Sanatan Dharma. He reassures him that Hindus will not physically harm him. But he also offers a frank political prediction: he and his party may be electorally “wiped out” if they persist in their current stance against Sanatan Dharma. The message is firm, the tone remains — unmistakably — Dharmic.",
      },
    ],
    hi: {
      title:
        "क्या सनातन धर्म सचमुच “विभाजनकारी” है? एक ऐतिहासिक यथार्थ-परीक्षण",
      intro:
        "एक राजनीतिक स्वर ने पुनः “सनातन को मिटा देने” का आह्वान किया है। इस वीडियो में ब्रह्मबोधि उस आह्वान का उत्तर देते हैं — क्रोध से नहीं, अपितु इतिहास से। वे यह स्पष्ट करते हैं कि सनातन धर्म वस्तुतः विश्व की सबसे समावेशी और सबसे कम विभाजनकारी सभ्यतागत परम्पराओं में से एक है — विशेष रूप से जब इसकी तुलना मध्यकालीन ईसाई यूरोप के हिंसक धार्मिक इतिहास से की जाती है।",
      content: [],
      sections: [
        {
          heading: "प्रसंग",
          body: "ब्रह्मबोधि एक ईसाई भारतीय राजनेता को उत्तर दे रहे हैं, जिन्होंने बार-बार कहा है कि सनातन धर्म — हिन्दू धर्म — को मिटा देना चाहिए। वे विनम्रता से यह संकेत करते हैं कि वही वक्तव्य यदि अनेक इस्लामी देशों में दिया जाता, तो वह सहज ही हिंसक प्रतिशोध को आमंत्रित कर सकता था। भारत में, जहाँ हिन्दू विशाल बहुसंख्यक हैं, उस राजनेता को किसी भी प्रकार का शारीरिक भय नहीं है। क्यों? क्योंकि सनातन सभ्यता मूल रूप से सहिष्णु है।",
        },
        {
          heading: "“विभाजनकारी” का वास्तविक अर्थ",
          body: "ब्रह्मबोधि “विभाजन” (division) और “विभाजनकारी” (divisive) के बीच का अंतर सावधानी से स्पष्ट करते हैं। विभाजन — अर्थात् अनेक धर्मों, सम्प्रदायों, विचारधाराओं और दलों का अस्तित्व — स्वाभाविक और सार्वभौमिक है। हर समाज में यह विद्यमान है। परंतु “विभाजनकारी” कहीं अधिक गम्भीर बात है — यह वह स्थिति है जिसमें मतभेदों को सहन नहीं किया जाता, अपितु वे रक्तपात, युद्ध, हत्याओं और सामूहिक संहार में परिणत हो जाते हैं। इस ईमानदार परिभाषा के अनुसार, सनातन धर्म इस श्रेणी में आता ही नहीं।",
        },
        {
          heading: "ईसाइयत पर एक ऐतिहासिक दृष्टि",
          body: "मध्यकालीन यूरोपीय इतिहास की ओर मुड़ते हुए ब्रह्मबोधि तर्क देते हैं कि अंतर-धार्मिक हिंसा की दृष्टि से ईसाइयत “सबसे विभाजनकारी धर्म” रही है। वे ग्रेट स्किज़्म (Great Schism), पश्चिमी और पूर्वी चर्चों के बीच के युद्ध, कैथोलिक–प्रोटेस्टैंट संघर्ष, इन्क्विज़िशन (विशेषकर स्पैनिश इन्क्विज़िशन) और क्रूसेड्स (धर्मयुद्ध) का उल्लेख करते हैं — वे घटनाएँ जिनमें लाखों लोग मारे गए। वे उन सड़कों का वर्णन करते हैं जिन पर रक्त “नालियों की तरह बहता था”, और 32,000 फाँसियों तथा हज़ारों लोगों को जीवित जला देने जैसे आँकड़ों का उल्लेख करते हैं।",
        },
        {
          heading: "अपनों के विरुद्ध भी क्रूरता",
          body: "ब्रह्मबोधि इस बात पर बल देते हैं कि ईसाइयों ने ऐतिहासिक रूप से न केवल अन्य ईसाइयों पर अत्याचार किया, अपितु यहूदियों और मुसलमानों पर भी — केवल उन्हें मतांतरित करने तक सीमित नहीं रहे, बल्कि उनके आचरण की निगरानी करते रहे, और उन लोगों को मृत्युदंड दिया जिन पर अपनी पूर्व आस्थाओं को गुप्त रूप से थामे रहने का संदेह था। वे इसकी तुलना हिन्दू सम्प्रदायों के बीच — या अन्य आस्थाओं के लोगों के विरुद्ध हिन्दू “क्रूसेडों” के — समानांतर, बड़े पैमाने पर अभिलिखित नरसंहारों की लगभग पूर्ण अनुपस्थिति से करते हैं।",
        },
        {
          heading: "सनातन धर्म की आश्चर्यजनक आंतरिक विविधता",
          body: "इसके बाद वे धार्मिक चिंतन की अनेक जीवंत धाराओं की सूची देते हैं — वैष्णव, शैव, शाक्त, वैशेषिक, सिक्ख, जैन, बौद्ध — और यह रेखांकित करते हैं कि इतनी विशाल विविधता के बावजूद इनके बीच कोई बड़े पैमाने पर अभिलिखित सम्प्रदायगत नरसंहार नहीं हैं। अन्य आस्थाओं के नाम पर छेड़े गए धर्मयुद्धों के स्तर का कोई हिन्दू या बौद्ध क्रूसेड कभी हुआ ही नहीं। ब्रह्मबोधि कहते हैं कि इसके विपरीत किए जाने वाले दावे गम्भीर ऐतिहासिक परीक्षण पर टिक ही नहीं पाते।",
        },
        {
          heading: "जाति, शास्त्र और एक चलता हुआ सुधार",
          body: "ब्रह्मबोधि जातिगत भेदभाव पर परदा नहीं डालते। वे इसे खुले रूप से स्वीकार करते हैं — परंतु वे यह भी स्पष्ट करते हैं कि इसकी जड़ें वेदों या भगवद् गीता की मूल शिक्षाओं में नहीं हैं, जिन्हें वे हिन्दू चिंतन के सर्वोच्च-स्तरीय शास्त्र मानते हैं। उनकी दृष्टि में जातिगत अत्याचार एक ऐतिहासिक विचलन है, जिसे सनातन समाज पिछले लगभग आठ दशकों से क़ानूनी और सामाजिक सुधार के माध्यम से सक्रिय रूप से ठीक करता आ रहा है। उनका पूर्वानुमान है कि आने वाली शताब्दियों में जाति-आधारित भेदभाव लगभग समाप्त हो जाएगा।",
        },
        {
          heading: "भारत — सभ्यताओं की शरणस्थली",
          body: "सनातन की समावेशिता के पक्ष को और दृढ़ करने के लिए ब्रह्मबोधि भारत को “सभ्यताओं की शरणस्थली” बताते हैं — एक ऐसी भूमि जहाँ उत्पीड़ित पारसियों और यहूदियों को सुरक्षा मिली और वे फलते-फूलते रहे। वे विभाजन के बाद से पाकिस्तान में हिन्दू जनसंख्या की भयानक गिरावट की तुलना भारत में मुस्लिम जनसंख्या की निरंतर वृद्धि से करते हैं — और यह तथ्य, उनके अनुसार, इस आरोप का निर्णायक खंडन करता है कि सनातन धर्म स्वभाव से विभाजनकारी या अल्पसंख्यकों के प्रति दमनकारी है।",
        },
        {
          heading: "एक अंतिम चुनौती — और एक चेतावनी",
          body: "ब्रह्मबोधि अपने उद्बोधन का समापन इस आग्रह के साथ करते हैं कि वह राजनेता सनातन धर्म पर आक्रमण करने के बजाय “अज्ञान को मिटाएँ” — अर्थात् वस्तुतः इतिहास का अध्ययन करें। वे उन्हें आश्वस्त करते हैं कि हिन्दू उन्हें शारीरिक हानि नहीं पहुँचाएँगे। परंतु साथ ही वे एक स्पष्ट राजनीतिक पूर्वानुमान भी देते हैं — यदि वे और उनकी पार्टी सनातन धर्म के विरुद्ध अपनी वर्तमान स्थिति पर अड़े रहे, तो वे चुनावी रूप से “समाप्त” हो सकते हैं। संदेश दृढ़ है, और स्वर निःसंदेह — धार्मिक बना रहता है।",
        },
      ],
    },
  },
  "the-benefits-of-yoga-for-mental-health": {
    title: "Does Bhagavad Gita Support the Hindu Caste System?",
    date: "Jan 5, 2025",
    image: img("blog-caste-system.webp"),
    content: [
      "Hindu’s have a caste system which is only of its kind in the world. A ‘caste’ is a community to which entry is based on birth in that community. Hindu society is divided into hundreds of castes. Marriages used to take place earlier only within the members of the same caste.",
      "The different castes were arranged hierarchically, with some being called “higher castes” and some being called “lower castes” in terms of social status. This system has been broken quite a bit during the last 100 years, yet it continues in some form or the other.",
      "Most traditional Hindu scriptures and Hindu scholars justify the birth based caste system. The big question is whether the Bhagavad Gita also supports this system?",
      "The Bhagavad Gita presents the concept of Varna, which is fundamentally different from the rigid caste system. In Chapter 4, Verse 13, Lord Krishna says: “chātur-varṇyaṃ mayā sṛṣṭaṃ guṇa-karma-vibhāgaśaḥ” — the four divisions of human society were created by Me according to differences in quality and work, not birth.",
      "This is a revolutionary declaration. The Gita classifies people based on their qualities (gunas) and actions (karma), not their birth. A person’s Varna is determined by their nature and the work they do, making it a dynamic and merit-based system rather than a hereditary one.",
    ],
  },
  "question-(rajesh-k-dubey)-how-can-mental-stress-be-healed-through-spirituality":
    {
      title:
        "Question (Rajesh K. Dubey): How can mental stress be healed through spirituality?",
      date: "Jun 16, 2025",
      image: img("blog-mental-stress-en.png"),
      content: [
        "Stress and depression have become like a pandemic. How to deal with them, and what is their permanent solution — the answer lies in this discussion.",
        "Mental stress arises when the mind is overwhelmed by desires, fears, and attachments. The Bhagavad Gita offers a comprehensive framework for addressing this through spiritual practice.",
        "Lord Krishna teaches in Chapter 2 that equanimity (samatvam) is the key to mental peace. When we remain balanced in success and failure, pleasure and pain, we transcend the cycles of stress.",
        "The practice of Nishkama Karma — performing one’s duty without attachment to results — frees the mind from anxiety about outcomes. This is the essence of stress-free living as taught in the Gita.",
        "Regular meditation, self-reflection, and surrendering to the divine will are practical tools from the Gita that can heal mental stress at its root, rather than merely treating its symptoms.",
      ],
    },
  "question-can-a-spiritual-seeker-have-high-spiritual-attainments-by-just-chanting-the-name-of-god-without-the-guidance-of-a-guru":
    {
      title:
        "Can a spiritual seeker have high spiritual attainments by just chanting the name of God without the guidance of a guru?",
      date: "Jul 31, 2025",
      image: img("blog-chanting-guru.png"),
      content: [
        "Chanting God’s name can lead to progress, but guidance deepens devotion and ensures true attainment.",
        "The Bhagavad Gita emphasizes the importance of a guru in spiritual development. In Chapter 4, Verse 34, Lord Krishna advises: “Approach a wise teacher, inquire from him submissively and render service unto him. The self-realized soul can impart knowledge unto you because he has seen the truth.”",
        "While chanting the divine name (Nama Japa) is a powerful spiritual practice that purifies the mind and heart, the guidance of a realized guru helps the seeker avoid pitfalls, understand subtle spiritual truths, and progress on the path more effectively.",
        "A guru serves as a living example of spiritual realization, providing not just theoretical knowledge but practical wisdom born of direct experience. The guru-disciple relationship is considered sacred in the Gita tradition.",
        "Therefore, while chanting alone can bring some spiritual progress, the combination of devoted practice and guru’s guidance creates the optimal conditions for the highest spiritual attainment.",
      ],
    },
  "karmanye-vadhikaraste": {
    title: "Karmanye Vadhikaraste",
    date: "Apr 7, 2025",
    image: img("blog-karmanye.jpg"),
    content: [
      "One of the most popular and frequently quoted verses of the Bhagavad Gita is Chapter 2, Verse 47: “karmaṇye vādhikāraste mā phaleṣhu kadāchana”.",
      "Translation: “You have the right to perform your prescribed duties, but you are not entitled to the fruits of your actions. Never consider yourself the cause of the results, and never be attached to not doing your duty.”",
      "This verse encapsulates the essence of Karma Yoga — the yoga of selfless action. It teaches us to focus entirely on our efforts and responsibilities without being anxious about outcomes.",
      "In modern life, this teaching is profoundly relevant. Whether in our professional work, relationships, or personal goals, the anxiety about results often paralyzes us or leads to compromised actions. The Gita advises us to give our best effort and leave the results to the divine order.",
      "This is not about being indifferent to outcomes, but about maintaining inner equanimity regardless of whether things go as planned. When we act without attachment to results, our actions become purer, more focused, and more effective.",
      "The verse also warns against inaction (mā te saṅgo’stv akarmaṇi). Detachment from results should not lead to laziness or avoidance of duty. The Gita calls for engaged, wholehearted action — just without the burden of expectation.",
    ],
  },
  "आत-म-ज-गर-कत-स-जग-ए-अपन-अ-दर-न-स-परप-वर": {
    title:
      "आत्म-जागरूकता से जगाएं अपनी अंदरूनी सुपरपावर",
    date: "Apr 3, 2025",
    image: img("blog-atma-jagurukta.webp"),
    content: [
      "अपनी सफलता और अपने विकास के उपकरण हम बाहर की दुनिया में खोजते फिरते हैं लेकिन यह भूल जाते हैं कि उसकी सबसे बड़ी चाबी तो हमारे अंदर ही छिपी हुई है। यह चाबी है आत्म जागरूकता।",
      "आत्म जागरूकता का अर्थ है अपने आप को गहराई से जानना — अपने विचारों, भावनाओं, प्रतिक्रियाओं और व्यवहार के प्रतिमानों को समझना।",
      "भगवद् गीता में भगवान श्रीकृष्ण ने आत्म ज्ञान को सबसे उच्च ज्ञान बताया है। जब हम अपने आप को जानते हैं, तब हम अपनी अंदरूनी शक्तियों को जगा सकते हैं।",
    ],
  },
  "प-रश-न-(र-ज-व-ह-क-ड-ब-)-म-नस-क-तन-व-क-अध-य-त-म-क-जर-ए-क-स-ठ-क-क-य-ज-सकत-ह": {
    title:
      "प्रश्न (राजेश के. दूबे) : मानसिक तनाव को अध्यात्म के जरिए कैसे ठीक किया जा सकता है?",
    date: "Jun 15, 2025",
    image: img("blog-mental-stress-hi.png"),
    content: [
      "तनाव और अवसाद एक महामारी की तरह है। इनसे कैसे निपटें, इनका स्थायी समाधान क्या है, इसका उत्तर इस चर्चा में है।",
      "भगवद् गीता के अनुसार, मानसिक तनाव का मूल कारण मन की अशांति है। जब मन इच्छाओं, भयों और आसक्तियों से ग्रस्त होता है, तब तनाव उत्पन्न होता है।",
      "अध्यात्म के माध्यम से इस समस्या का स्थायी समाधान संभव है। ध्यान, प्राणायाम और आत्म-विचार जैसी प्रथाएँ मन को शांत करती हैं।",
    ],
  },
  "प-रश-न-क-य-ब-न-ग-र-क-य-ईश-वर-क-न-म-जपन-स-अध-य-त-म-क-उपलब-ध-प-र-पत-नह-ह-सकत": {
    title:
      "प्रश्न : क़्या बिना गुरू किये ईश्वर का नाम जपनें से अध्यात्मिक उपलब्धि प्राप्त नहीं हो सकती?",
    date: "Jul 31, 2025",
    image: img("blog-chanting-guru-hi.png"),
    content: [
      "ईश्वर का नाम जप प्रगति की दिशा में ले जा सकता है, लेकिन मार्गदर्शन भक्ति को गहराता है और सच्ची सिद्धि सुनिश्चित करता है।",
      "भगवद् गीता में गुरु की महत्ता बार-बार रेखांकित की गई है। गुरु वह है जो अंधकार से प्रकाश की ओर ले जाता है।",
      "नाम जप एक शक्तिशाली साधना है, परंतु गुरु के बिना साधक मार्ग में भटक सकता है। गुरु का मार्गदर्शन साधना को सही दिशा देता है और आध्यात्मिक यात्रा को सरल बनाता है।",
    ],
  },
  "व-षय-आध-य-त-म-क-प-रगत-क-ल-ए-मन-क-व-क-र-क-क-स-द-र-कर": {
    title:
      "विषय : आध्यात्मिक प्रगति के लिए मन के विकारों को कैसे दूर करें?",
    date: "Jul 31, 2025",
    image: img("blog-man-ke-vikar.png"),
    content: [
      "अंतःकरण को शुद्ध किए बिना ऊँची आध्यात्मिक उपलब्धि और ईश्वर दर्शन असंभव है।",
      "भगवद् गीता में कहा गया है कि मन के विकार — काम, क्रोध, लोभ, मोह, मद, मात्सर्य — ये सभी आध्यात्मिक प्रगति में बाधक हैं।",
      "इन विकारों को दूर करने के लिए आत्म-निरीक्षण, ध्यान, और सत्संग आवश्यक है। जब हम अपने मन को शुद्ध करते हैं, तब ईश्वर दर्शन संभव होता है।",
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({ slug }));
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await props.params;
  const post = blogPosts[decodeURIComponent(slug)];
  return {
    title: post?.title ?? "Blog Post",
  };
}

export default async function BlogPost(props: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await props.params;
  const post = blogPosts[decodeURIComponent(slug)];

  if (!post) {
    return (
      <section className="section-padding py-28 text-center">
        <h1 className="text-3xl font-bold text-dark-brown">Post Not Found</h1>
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 mt-6 text-saffron hover:text-saffron-dark font-semibold transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </Link>
      </section>
    );
  }

  return <BlogPostView post={post} />;
}
