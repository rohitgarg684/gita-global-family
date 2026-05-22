/**
 * Q&A with Brahm Bodhi — structured content.
 *
 * Each answer is composed of an ordered list of content blocks so that we can
 * render rich, semantically meaningful content (paragraphs, Gita verse
 * blockquotes, ordered/unordered lists) instead of a single flat string.
 */

export type QABlock =
  | { type: "p"; text: string }
  | { type: "h"; text: string }
  | { type: "quote"; text: string; cite?: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "video"; videoId: string; title: string; caption?: string };

export interface QAItem {
  id: string;
  question: string;
  /**
   * Short, plain-text teaser shown in the collapsed state. Keep this to ~2-3
   * lines so it works well on mobile.
   */
  preview: string;
  answer: QABlock[];
}

export const qaItems: QAItem[] = [
  {
    id: "chanting-destroy-sorrow",
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
        text: "I have seen many people who donate a very large portion of their income. One acquaintance of mine receives a monthly pension of about one lakh rupees, out of which he distributes medicines worth nearly fifty thousand rupees among people living in slums. His reasoning is that two individuals (husband and wife) do not require more than the remaining amount for a simple life.",
      },
      {
        type: "p",
        text: "However, everyone\u2019s financial condition is not the same. Therefore, each person should donate according to his circumstances, while taking into account family responsibilities, children\u2019s education, health, and future needs. Still, if possible, it is highly desirable to cultivate the habit of donating at least ten percent of one\u2019s income. Such giving not only benefits society, but also helps make the human heart and conscience more pure and elevated.",
      },
    ],
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
];
