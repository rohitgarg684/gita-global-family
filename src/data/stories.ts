export interface StoryWord {
  word: string;
  meaningEn: string;
  meaningHi: string;
}

export interface StoryParagraph {
  text: string;
  image?: string;
  imageAlt?: string;
}

export interface Story {
  slug: string;
  title: string;
  subtitle: string;
  gradeLevel: string;
  coverImage: string;
  paragraphs: StoryParagraph[];
  moral: string;
  moralHi: string;
  powerWords: StoryWord[];
}

export const stories: Story[] = [
  {
    slug: "the-little-light",
    title: "The Little Light in Ria's Heart",
    subtitle: "A story about truth, kindness, and the light within",
    gradeLevel: "Grades 2–3",
    coverImage: "story-little-light-cover.svg",
    paragraphs: [
      {
        text: "Ria was a [small] girl who lived with her [family] in a [little] village near a big green forest. Every [day], her [mother] would [teach] her something new about the [world]. Her [father] would tell her stories about [God] and the [truth] that lives inside every [heart].",
        image: "story-little-light-1.svg",
        imageAlt: "Ria sitting with her family in their village home",
      },
      {
        text: '"[Believe] in the [light] inside you," her mother would [say]. "It is always [right] [there], even when you cannot [see] it." Ria would [think] about this, but she did [not] [know] what it meant. How could there [be] a light inside her [mind]?',
      },
      {
        text: "One [day], Ria had a [big] fight with her best [friend], Aman. He said something that was [not] [honest], and [it] made her very sad. She wanted to [speak] angry words [and] shout. Her [mind] was full of noise.",
        image: "story-little-light-2.svg",
        imageAlt: "Ria looking upset after arguing with her friend",
      },
      {
        text: 'Her [mother] saw her tears. "Come, sit with [me]," she said softly. "Close [your] eyes. Be very [still]. [Think] of your [heart]. Can you [feel] something warm [in] there?"',
      },
      {
        text: "Ria closed her eyes. At first, [all] she could [feel] was anger. But she was [patient]. She sat [still]. Slowly, the noise went away. And then — she felt it! A tiny, warm [light], glowing softly inside her [heart]. It felt like [peace]. It felt like [joy].",
        image: "story-little-light-3.svg",
        imageAlt: "Ria meditating with a warm golden light glowing in her heart",
      },
      {
        text: '"I can [feel] [it]!" Ria whispered. Her mother smiled. "[Good]. That [light] is [truth]. It is [love]. It is the spark of [God] that lives in [every] [human] [heart]. When you [follow] that light, you will always [know] the [right] [way]."',
      },
      {
        text: "The next morning, Ria went to [find] Aman. She felt [brave]. \"I was angry yesterday,\" she said. \"But I want [us] to [be] [friend]s [again]. I [forgive] you, [and] I am sorry too.\" Aman looked surprised — then he smiled [and] hugged her.",
        image: "story-little-light-4.svg",
        imageAlt: "Ria and Aman smiling and making up as friends",
      },
      {
        text: "From that [day] on, Ria would sit quietly every morning, close her eyes, and [feel] the warm [light] in her [heart]. It gave her [faith] — [faith] to [be] [kind], to [speak] the [truth], and to [give] [love] to [all] the [people] [in] her [world].",
      },
      {
        text: "And do you [know] what? The more she shared her [light], the [big]ger [it] grew. Because that is [how] [love] works — when you [give] it away, you always [get] [more].",
      },
    ],
    moral:
      "The light of truth and love lives inside every heart. When we are still and patient, we can feel it — and it guides us to be kind, brave, and honest.",
    moralHi:
      "सत्य और प्रेम का प्रकाश हर हृदय में बसता है। जब हम शांत और धैर्यवान होते हैं, तो हम उसे महसूस कर सकते हैं — और वह हमें दयालु, बहादुर और ईमानदार बनने का मार्ग दिखाता है।",
    powerWords: [
      { word: "God", meaningEn: "the supreme being; the creator", meaningHi: "ईश्वर, भगवान" },
      { word: "heart", meaningEn: "the centre of emotions; the seat of the soul", meaningHi: "हृदय" },
      { word: "mind", meaningEn: "the brain; intellect; consciousness", meaningHi: "मन, बुद्धि" },
      { word: "truth", meaningEn: "the quality of being true; reality", meaningHi: "सत्य, सच्चाई" },
      { word: "believe", meaningEn: "to accept as true; to have faith", meaningHi: "विश्वास करना" },
      { word: "faith", meaningEn: "complete trust; belief in the divine", meaningHi: "विश्वास, आस्था" },
      { word: "peace", meaningEn: "freedom from disturbance; calm", meaningHi: "शांति" },
      { word: "right", meaningEn: "correct; morally good", meaningHi: "सही, उचित" },
      { word: "family", meaningEn: "parents and children; relatives", meaningHi: "परिवार" },
      { word: "forgive", meaningEn: "to pardon; to stop feeling angry", meaningHi: "क्षमा करना" },
      { word: "friend", meaningEn: "a person you know and like", meaningHi: "मित्र, दोस्त" },
      { word: "honest", meaningEn: "truthful; not cheating", meaningHi: "ईमानदार" },
      { word: "mother", meaningEn: "a female parent", meaningHi: "माँ, माता" },
      { word: "father", meaningEn: "a male parent", meaningHi: "पिता" },
      { word: "teach", meaningEn: "to instruct; to educate", meaningHi: "सिखाना" },
      { word: "world", meaningEn: "the earth; all people", meaningHi: "संसार, दुनिया" },
      { word: "brave", meaningEn: "showing courage; fearless", meaningHi: "बहादुर, साहसी" },
      { word: "child", meaningEn: "a young person", meaningHi: "बच्चा" },
      { word: "learn", meaningEn: "to gain knowledge or skill", meaningHi: "सीखना" },
      { word: "patience", meaningEn: "the ability to wait calmly", meaningHi: "धैर्य" },
      { word: "good", meaningEn: "of high quality; virtuous", meaningHi: "अच्छा" },
      { word: "kind", meaningEn: "gentle and caring", meaningHi: "दयालु" },
      { word: "joy", meaningEn: "great happiness; delight", meaningHi: "आनंद, खुशी" },
      { word: "love", meaningEn: "deep affection; to feel love for", meaningHi: "प्रेम, प्यार" },
      { word: "light", meaningEn: "brightness; to illuminate", meaningHi: "प्रकाश" },
      { word: "small", meaningEn: "little in size; not large", meaningHi: "छोटा" },
      { word: "big", meaningEn: "large in size", meaningHi: "बड़ा" },
      { word: "give", meaningEn: "to hand over; to provide", meaningHi: "देना" },
      { word: "follow", meaningEn: "to go after; to obey", meaningHi: "अनुसरण करना" },
      { word: "speak", meaningEn: "to talk; to say words", meaningHi: "बोलना" },
      { word: "day", meaningEn: "a 24-hour period", meaningHi: "दिन" },
      { word: "every", meaningEn: "each one without exception", meaningHi: "प्रत्येक, हर" },
      { word: "little", meaningEn: "small in size; not much", meaningHi: "छोटा, थोड़ा" },
      { word: "people", meaningEn: "human beings; persons", meaningHi: "लोग" },
      { word: "way", meaningEn: "a method; a path", meaningHi: "रास्ता, तरीका" },
      { word: "still", meaningEn: "not moving; even now; quiet", meaningHi: "शांत, अभी भी" },
      { word: "patient", meaningEn: "able to wait calmly", meaningHi: "धैर्यवान" },
      { word: "human", meaningEn: "relating to people; a person", meaningHi: "मानव" },
    ],
  },
];
