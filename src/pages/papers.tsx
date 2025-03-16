import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { FileText, ExternalLink, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Paper {
  title: string;
  authors: string[];
  conference: string;
  year: number;
  abstract: string;
  link: string;
}

const papers: Paper[] = [
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

export function ScrollToAnchor() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);

  return null;
}

export default function PapersPage() {
  // Group papers by year
  // Scroll to the top when the component is mounted
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const papersByYear = papers.reduce((acc, paper) => {
    if (!acc[paper.year]) {
      acc[paper.year] = [];
    }
    acc[paper.year].push(paper);
    return acc;
  }, {} as Record<number, Paper[]>);

  // Sort years in descending order
  const sortedYears = Object.keys(papersByYear)
    .map(Number)
    .sort((a, b) => b - a);

  return (
    <>
      <Helmet>
        <title>Research Papers - Ligia UFPE</title>
        <meta
          name="description"
          content="Explore our published research papers in AI, machine learning, and natural language processing."
        />
      </Helmet>
      <main className="min-h-screen bg-black pt-32 pb-20">
        <div className="container mx-auto px-6">
          <Link
            to="/#resources"
            className="inline-flex items-center text-gray-400 hover:text-white mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Main Page
          </Link>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Research Papers</h1>
              <p className="text-xl text-gray-300">
                Explore our latest research contributions in artificial intelligence and machine learning.
              </p>
            </motion.div>

            <div className="space-y-16">
              {sortedYears.map((year, yearIndex) => (
                <motion.div
                  key={year}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: yearIndex * 0.1 }}
                >
                  <div className="flex items-center gap-4 mb-8">
                    <h2 className="text-3xl font-bold text-[#FF4B1F]">{year}</h2>
                    <div className="flex-1 h-px bg-gradient-to-r from-[#FF4B1F]/50 to-transparent" />
                  </div>
                  <div className="space-y-8">
                    {papersByYear[year].map((paper, paperIndex) => (
                      <motion.article
                        key={`${year}-${paperIndex}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: (yearIndex * 0.1) + (paperIndex * 0.1) }}
                        className="bg-white/5 rounded-xl p-6 hover:bg-white/10 transition-colors"
                      >
                        <div className="flex items-start gap-4">
                          <FileText className="w-6 h-6 text-[#FF4B1F] flex-shrink-0 mt-1" />
                          <div className="flex-1">
                            <h3 className="text-xl font-bold mb-2">{paper.title}</h3>
                            <p className="text-gray-400 mb-3">
                              {paper.authors.join(", ")} • {paper.conference}
                            </p>
                            <p className="text-gray-300 mb-4">{paper.abstract}</p>
                            <a
                              href={paper.link}
                              className="inline-flex items-center text-[#FF4B1F] hover:text-[#FF4B1F]/80 transition-colors"
                            >
                              Read Paper <ExternalLink className="w-4 h-4 ml-2" />
                            </a>
                          </div>
                        </div>
                      </motion.article>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}