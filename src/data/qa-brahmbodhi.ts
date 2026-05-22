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
];
