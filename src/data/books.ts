import { img } from "@/lib/image-url";

export const RAZORPAY_STORE =
  "https://pages.razorpay.com/stores/st_QvF1VOCPbywKFo";

export interface Book {
  title: string;
  subtitle: string;
  description: string;
  price: string;
  image: string;
}

export const hindiBooks: Book[] = [
  {
    title: "Mokshavidyadayini Parampavan Bhagavad Gita",
    subtitle: "Sabhi Dukhom Se Pare, Anand Ki Oor",
    description:
      "अध्याय परिचयों, आत्म मूल्यांकन उपकरणों आदि के साथ भगवद्गीता की गहन व्याख्या। परिवर्धित संस्करण। 8.5×5.5 इंच, 800 पृष्ठ।",
    price: "₹499",
    image: img("book-mokshavidyadayini.jpeg"),
  },
  {
    title: "Sampoorn Kraanti Kee Bhoomika",
    subtitle: "",
    description:
      "गीता के इस संस्करण में सरल हिंदी अर्थ, टिप्पणियाँ व ईश्वर-प्राप्ति के 10 मार्गों पर विशेष निबंध हैं।",
    price: "₹350",
    image: img("book-sampoorn-kraanti.jpeg"),
  },
  {
    title: "Hari Ko Kaun Dulaaro",
    subtitle: "",
    description:
      "जीवन श्रेष्ठ और मोक्ष उसी का होगा जो ईश्वर का प्रिय है। यह पुस्तक उन गुणों की विवेचना करती है जो ईश्वर को प्रिय हैं।",
    price: "₹200",
    image: img("book-hari-ko-kaun.jpeg"),
  },
  {
    title: "Hamaaree Geeta Aur Eeshvar Praapti Ke Das Maarg",
    subtitle: "",
    description:
      "गीता के इस संस्करण में सरल हिंदी अर्थ, पाद-टिप्पणियाँ और ईश्वर-प्राप्ति के दस मार्गों पर विशेष निबंध समाहित हैं।",
    price: "₹125",
    image: img("book-hamaaree-geeta.jpeg"),
  },
  {
    title: "Geeta Navaneet Shlok Vidyaarthiyon Ke Liye",
    subtitle: "51 श्लोक स्टूडेंट्स के लिए",
    description:
      "गीता के प्रमुख उपदेशों को युवाओं के लिए सार रूप में प्रस्तुत करता है। ये श्लोक ध्यान, अनुशासन और नैतिक जीवन की प्रेरणा देते हैं।",
    price: "₹60",
    image: img("book-geeta-navaneet.jpeg"),
  },
];

export const englishBooks: Book[] = [
  {
    title: "Bhagavad Gita With God's Ideas on Life Management",
    subtitle: "",
    description:
      "This edition of the Bhagavad Gita includes an insightful essay on God's ideas in life management, spanning 495 pages in a compact 8×5-inch format.",
    price: "₹399",
    image: img("book-gods-ideas.jpeg"),
  },
  {
    title: "The Cream Of The Bhagavad Gita",
    subtitle: "51 Verses for Students",
    description:
      "Distills key Gita teachings for youth. These verses inspire focus, discipline, and ethical living.",
    price: "₹100",
    image: img("book-cream-of-gita.jpeg"),
  },
];
