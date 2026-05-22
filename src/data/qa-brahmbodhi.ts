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
  | { type: "ol"; items: string[] };

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
      "The Supreme Reality is originally formless, unmanifest, and beyond the three qualities of material nature. Yet when He creates the universe, He reveals Himself in a personal, manifest form — and at times even descends in human form to protect dharma.",
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
        text: "Not only this, at times He also descends in human form to protect dharma, destroy adharma\u2026",
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
];
