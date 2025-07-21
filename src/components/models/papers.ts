export interface Paper {
  title: string;
  authors: string[];
  conference: string;
  year: number;
  abstract: string;
  link: string;
}

export const papers: Paper[] = [
  {
    title: "Deep Learning Approaches for Portuguese Natural Language Processing",
    authors: ["Ana Silva", "Pedro Santos"],
    conference: "BRACIS 2024",
    year: 2024,
    abstract: "This paper presents novel deep learning architectures specifically designed for Portuguese language processing, addressing the unique challenges and characteristics of the language.",
    link: "#"
  },
  {
    title: "Efficient Vision Transformers for Medical Image Analysis",
    authors: ["Maria Costa", "João Lima"],
    conference: "SIBGRAPI 2023",
    year: 2023,
    abstract: "We propose an efficient vision transformer architecture optimized for medical image analysis, demonstrating superior performance on limited computational resources.",
    link: "#"
  },
  {
    title: "Reinforcement Learning in Brazilian Portuguese Dialogue Systems",
    authors: ["Pedro Santos", "Ana Silva"],
    conference: "WebMedia 2023",
    year: 2023,
    abstract: "This research explores the application of reinforcement learning techniques in developing more natural and context-aware dialogue systems for Brazilian Portuguese.",
    link: "#"
  }
];