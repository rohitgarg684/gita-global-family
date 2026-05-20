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
        text: "One [day], Ria had a [big] fight with her best [friend], Priya. She said something that was [not] [honest], and [it] made Ria very sad. She wanted to [speak] angry words [and] shout. Her [mind] was full of noise.",
        image: "story-little-light-2.svg",
        imageAlt: "Ria looking upset after arguing with her friend Priya",
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
        text: "The next morning, Ria went to [find] Priya. She felt [brave]. \"I was angry yesterday,\" she said. \"But I want [us] to [be] [friend]s [again]. I [forgive] you, [and] I am sorry too.\" Priya looked surprised — then she smiled [and] hugged her.",
        image: "story-little-light-4.svg",
        imageAlt: "Ria and Priya smiling and making up as friends",
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
  {
    slug: "the-boy-who-kept-his-word",
    title: "The Boy Who Kept His Word",
    subtitle: "A story about duty, courage, and standing firm for what is right",
    gradeLevel: "Grades 2–3",
    coverImage: "story-kept-word-cover.svg",
    paragraphs: [
      {
        text: "In a [small] village at the foot of [great] green mountains, there lived a boy named Arjun. He was ten years [old] and [strong] for [his] [age]. He lived with [his] [mother] and [his] grandfather, whom [every]one called Dadaji.",
        image: "story-kept-word-1.svg",
        imageAlt: "Arjun sitting beside his grandfather's cot in their simple village hut",
      },
      {
        text: "Dadaji was the wisest [human] [in] the village. [People] came from far away to [ask] [his] [advice]. He [know] hundreds of stories from the [sacred] books and could [speak] about [truth] and [duty] [in] a [way] that even [little] [children] could [understand].",
      },
      {
        text: "At the edge of the village stood a [great] banyan tree. Its trunk was so [big] that five [children] holding hands could [not] [reach] around it. Its roots hung down from the branches like [long] curtains. Birds of [every] colour made their [home] [in] its leaves. Squirrels chased each other [up] and down its bark. A [beautiful] peacock often danced beneath its shade.",
        image: "story-kept-word-2.svg",
        imageAlt: "Arjun reading under the great banyan tree with birds and peacocks",
      },
      {
        text: "Dadaji loved that tree more than anything [in] the [world]. \"This tree is [sacred], Arjun,\" he would [say]. \"It has given shade and [peace] to [our] village for three hundred years. It [stand]s [still] through [every] storm. [All] [life] around it is [happy] because of it. A [good] man is like this tree — he [give]s to others and [ask]s for nothing [in] [return].\"",
      },
      {
        text: "One [day], Dadaji fell very ill. He called Arjun to [his] side. The [old] man's voice was weak, but [his] eyes were [still] [bright]. \"Arjun, I must [tell] you something [important],\" he said. \"I will [not] [be] here much longer.\"",
      },
      {
        text: "Arjun's eyes filled with tears. \"Don't [say] that, Dadaji.\" But the [old] man held [his] hand firmly. \"[Listen], my boy. I [need] you to [make] [me] a [promise]. [Protect] that banyan tree. Whatever happens, do [your] [duty]. A man who keeps [his] word is worth more than [all] the gold [in] the [world].\"",
        image: "story-kept-word-1.svg",
        imageAlt: "Dadaji holding Arjun's hand, making him promise to protect the tree",
      },
      {
        text: "\"I [promise], Dadaji,\" Arjun whispered. \"I will [protect] it.\" The [old] man smiled and closed [his] eyes. Three [day]s later, Dadaji passed away [peace]fully. The whole village mourned. Arjun sat under the banyan tree and cried, but he [remember]ed [his] [promise].",
      },
      {
        text: "Weeks passed. Arjun visited the tree [every] morning. He would sweep the [ground] around it, [give] [water] to its roots, and sit quietly reading the [small] copy of the Gita that Dadaji had [give]n him. He was [learn]ing to [be] [strong] — [not] with [his] fists, but with [his] [heart].",
      },
      {
        text: "Then one morning, a [big] cart pulled by two bullocks came rumbling into the village. A [large] man climbed down. He wore a silk turban with a gold brooch, heavy rings on [every] finger, and [his] belly stuck [out] like a drum. [His] name was Seth Haridas, a rich merchant from the city.",
        image: "story-kept-word-3.svg",
        imageAlt: "The greedy merchant pointing at the banyan tree while Arjun stands firm",
      },
      {
        text: "\"I have bought this [land],\" Seth Haridas announced loudly. \"I will cut down that [old] tree and [build] a warehouse here. [Good] [money] [in] it!\" He snapped [his] fingers at two workers carrying axes. \"[Start] chopping!\"",
      },
      {
        text: "Arjun's [heart] nearly stopped. He [run] faster than he had ever [run] before and stood [right] [in] front of the tree, [his] arms spread wide. \"You cannot cut this tree!\" he said. [His] voice shook, but he did [not] [move].",
      },
      {
        text: "The merchant laughed. \"A [little] boy tells [me] what to [do]? I own this [land]! [Get] [out] of [my] [way].\" He was [big]. Arjun was [small]. But Arjun [think] of Dadaji's words: do [your] [duty]. A man who keeps [his] word is worth more than [all] the gold [in] the [world].",
      },
      {
        text: "\"This tree is [sacred],\" Arjun said, [still] [not] moving. \"It has given [life] and shade to this village for three hundred years. You may [have] bought the [land], but you do [not] own the [love] that [every] [family] here has for this tree. Cut it, and you cut the [heart] of [our] village.\"",
      },
      {
        text: "The merchant waved [his] hand. \"Foolish boy. I will [come] back tomorrow with more men. We shall [see] [how] [brave] you [feel] then.\" He climbed onto [his] cart and rode away.",
        image: "story-kept-word-4.svg",
        imageAlt: "Arjun sitting alone under the tree at night, looking up at the stars",
      },
      {
        text: "That [night], Arjun sat [alone] under the tree. The stars shone [above] like tiny lamps. He felt [afraid]. [How] could one [small] boy stop a rich and [powerful] man? He opened Dadaji's Gita and read: \"Do what is [right]. Do [not] worry about the [result]. [God] takes care of those who [follow] their [duty].\"",
      },
      {
        text: "[His] [mother] found him there at dawn. She put her hand on [his] shoulder. \"I heard what you did, Arjun. [Your] Dadaji would [be] [proud]. I [stand] with you.\" Those words filled him with [courage]. He was [not] [alone].",
      },
      {
        text: "That morning, [before] Seth Haridas arrived, something [beautiful] happened. [First], [his] [friend] Ravi came and stood beside him. Then two more [children] from [school] joined. Then five more. By the time the merchant's cart appeared, twelve [children] stood [in] a line [in] front of the tree, arms linked, [every] [face] [brave] and [still].",
        image: "story-kept-word-5.svg",
        imageAlt: "Village children standing together in front of the banyan tree",
      },
      {
        text: "Old Kamala Dadi, who sold flowers [in] the [market], came and stood [behind] the [children]. \"If you cut this tree,\" she said to the merchant, \"I will sit here [and] [not] [move].\" The milkman came. The schoolteacher came. One by one, the [whole] village gathered.",
      },
      {
        text: "Seth Haridas looked at the crowd. He puffed [out] [his] cheeks. \"This is [my] [land]!\" he shouted. But no one moved. Then the village headman, a [quiet] man named Pandit Shivram, stepped forward. He was [old] and walked with a stick, but when he spoke, [every]one listened.",
        image: "story-kept-word-6.svg",
        imageAlt: "The village headman addressing the merchant as the village stands united",
      },
      {
        text: "\"Seth Haridas,\" the headman said calmly, \"you may [have] bought a piece of [land], but you have [not] bought [our] [history], [our] [faith], or [our] trees. This banyan has sheltered ten generations. It belongs to [every] [child] who has played under it, [every] bird that has nested [in] it, and [every] [old] man who has sat [in] its shade to [find] [peace]. Build [your] warehouse somewhere else.\"",
      },
      {
        text: "The merchant looked at the [people] — the [children] with their linked arms, the [old] women with their steady eyes, the headman with [his] [quiet] [strength]. He saw that [all] the [money] [in] the [world] could [not] [buy] what these [people] had: [love] for their [home], [respect] for their elders, and the [courage] to [stand] [up] for what is [right].",
      },
      {
        text: "Seth Haridas lowered [his] head. Without a word, he climbed back onto [his] cart and drove away. He never came back.",
      },
      {
        text: "The village erupted [in] [joy]. [Children] danced around the tree. [People] hugged each other. Arjun tied a [sacred] thread — a mauli — around the trunk of the banyan tree, just as Dadaji used to [do] [every] year.",
        image: "story-kept-word-7.svg",
        imageAlt: "Children celebrating around the banyan tree as Arjun ties a sacred thread",
      },
      {
        text: "That evening, the headman placed a [small] stone beside the tree. On it he wrote: \"This tree is [protect]ed by the [people] of this village, [in] [honour] of Dadaji, who [teach] [us] that [our] [duty] to the [earth] is [our] [duty] to [God].\"",
      },
      {
        text: "Arjun touched the stone and looked [up] at the [great] banyan. A [gentle] wind blew through its leaves, and for just a moment, he thought he heard Dadaji's voice: \"[Good] boy. You kept [your] word. That is [all] I ever [ask]ed.\"",
      },
      {
        text: "From that [day] on, the [children] of the village called it \"Dadaji's Tree.\" [Every] morning, Arjun would sit beneath it, reading [his] Gita, [still] and [patient] — a [small] boy with a [big] [heart], who [learn]ed that [truth] and [duty] are the [strong]est [force]s [in] the [world].",
      },
    ],
    moral:
      "A promise kept is stronger than any force. When you stand firm for what is right — with truth in your heart and duty as your guide — even the mightiest power must bow. As the Gita teaches: do your duty, and leave the rest to God.",
    moralHi:
      "एक रखा हुआ वचन किसी भी शक्ति से अधिक बलवान है। जब आप सत्य को हृदय में और कर्तव्य को मार्गदर्शक बनाकर सही के लिए दृढ़ खड़े होते हैं — तो बड़ी-से-बड़ी ताकत भी झुक जाती है। गीता का उपदेश है: अपना कर्तव्य करो, फल की चिंता ईश्वर पर छोड़ दो।",
    powerWords: [
      { word: "God", meaningEn: "the supreme being; the creator", meaningHi: "ईश्वर, भगवान" },
      { word: "heart", meaningEn: "the centre of emotions; the seat of the soul", meaningHi: "हृदय" },
      { word: "truth", meaningEn: "the quality of being true; reality", meaningHi: "सत्य, सच्चाई" },
      { word: "believe", meaningEn: "to accept as true; to have faith", meaningHi: "विश्वास करना" },
      { word: "faith", meaningEn: "complete trust; belief in the divine", meaningHi: "विश्वास, आस्था" },
      { word: "peace", meaningEn: "freedom from disturbance; calm", meaningHi: "शांति" },
      { word: "right", meaningEn: "correct; morally good", meaningHi: "सही, उचित" },
      { word: "family", meaningEn: "parents and children; relatives", meaningHi: "परिवार" },
      { word: "honest", meaningEn: "truthful; not cheating", meaningHi: "ईमानदार" },
      { word: "mother", meaningEn: "a female parent", meaningHi: "माँ, माता" },
      { word: "father", meaningEn: "a male parent", meaningHi: "पिता" },
      { word: "teach", meaningEn: "to instruct; to educate", meaningHi: "सिखाना" },
      { word: "world", meaningEn: "the earth; all people", meaningHi: "संसार, दुनिया" },
      { word: "brave", meaningEn: "showing courage; fearless", meaningHi: "बहादुर, साहसी" },
      { word: "child", meaningEn: "a young person", meaningHi: "बच्चा" },
      { word: "children", meaningEn: "plural of child; young people", meaningHi: "बच्चे" },
      { word: "learn", meaningEn: "to gain knowledge or skill", meaningHi: "सीखना" },
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
      { word: "duty", meaningEn: "a moral or legal obligation; dharma", meaningHi: "कर्तव्य, फ़र्ज़" },
      { word: "courage", meaningEn: "bravery; the ability to face fear", meaningHi: "साहस, हिम्मत" },
      { word: "respect", meaningEn: "admiration; to feel esteem for", meaningHi: "सम्मान, आदर" },
      { word: "sacred", meaningEn: "holy; dedicated to God", meaningHi: "पवित्र, पूज्य" },
      { word: "promise", meaningEn: "a vow; to commit to doing", meaningHi: "वचन, वादा" },
      { word: "protect", meaningEn: "to keep safe; to guard", meaningHi: "रक्षा करना" },
      { word: "strong", meaningEn: "having power; not weak", meaningHi: "मज़बूत, शक्तिशाली" },
      { word: "old", meaningEn: "having lived long; not new", meaningHi: "पुराना; बूढ़ा" },
      { word: "great", meaningEn: "very large or important; excellent", meaningHi: "महान; बहुत बड़ा" },
      { word: "friend", meaningEn: "a person you know and like", meaningHi: "मित्र, दोस्त" },
      { word: "life", meaningEn: "the state of being alive; existence", meaningHi: "जीवन, ज़िंदगी" },
      { word: "home", meaningEn: "where one lives; a dwelling", meaningHi: "घर" },
      { word: "land", meaningEn: "ground; country; to arrive", meaningHi: "ज़मीन, भूमि" },
      { word: "money", meaningEn: "currency; wealth", meaningHi: "धन, पैसा" },
      { word: "beautiful", meaningEn: "pleasing to the senses; lovely", meaningHi: "सुंदर" },
      { word: "quiet", meaningEn: "making little noise; calm", meaningHi: "शांत" },
      { word: "gentle", meaningEn: "kind and careful; mild", meaningHi: "सौम्य, कोमल" },
      { word: "powerful", meaningEn: "having great power", meaningHi: "शक्तिशाली" },
      { word: "afraid", meaningEn: "feeling fear; scared", meaningHi: "डरा हुआ, भयभीत" },
      { word: "alone", meaningEn: "by oneself; without others", meaningHi: "अकेला" },
      { word: "proud", meaningEn: "feeling pride; self-respecting", meaningHi: "गर्वित" },
      { word: "honour", meaningEn: "great respect; integrity", meaningHi: "सम्मान, प्रतिष्ठा" },
      { word: "strength", meaningEn: "the quality of being strong; power", meaningHi: "शक्ति, बल" },
      { word: "earth", meaningEn: "the world; soil", meaningHi: "पृथ्वी, धरती" },
      { word: "force", meaningEn: "strength; power; to compel", meaningHi: "बल, शक्ति" },
      { word: "history", meaningEn: "events of the past; a record", meaningHi: "इतिहास" },
      { word: "result", meaningEn: "an outcome; a consequence", meaningHi: "परिणाम, फल" },
      { word: "age", meaningEn: "the length of time lived; an era", meaningHi: "उम्र; युग" },
      { word: "advice", meaningEn: "guidance; a recommendation", meaningHi: "सलाह, परामर्श" },
      { word: "important", meaningEn: "of great significance", meaningHi: "महत्वपूर्ण" },
    ],
  },
];
