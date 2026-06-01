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
];
