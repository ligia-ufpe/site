import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { BookOpen, Bot, FileText, ArrowLeft, View } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Material {
  title: string;
  description: string;
  type: 'tutorial' | 'video' | 'guide' | 'code';
  link: string;
  icon: React.ElementType;
}

const materials: Material[] = [
  {
    title: "Introduction to Neural Networks",
    description: "A comprehensive guide to understanding neural networks.",
    type: "tutorial",
    link: "/materials/neural-networks",
    icon: BookOpen,
  },
  {
    title: "Computer Vision with PyTorch",
    description: "Step-by-step video series on implementing computer vision models using PyTorch.",
    type: "video",
    link: "/materials/computer-vision",
    icon: View,
  },
  {
    title: "NLP Best Practices Guide",
    description: "Detailed documentation on best practices for natural language processing projects.",
    type: "guide",
    link: "/materials/nlp-guide",
    icon: FileText,
  },
  {
    title: "Reinforcement Learning Examples",
    description: "Collection of practical examples and implementations of reinforcement learning algorithms.",
    type: "code",
    link: "/materials/reinforcement-learning",
    icon: Bot,
  },
];

export default function MaterialsPage() {
  // Scroll to the top when the component is mounted
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Learning Materials - Ligia UFPE</title>
        <meta
          name="description"
          content="Access our comprehensive collection of AI learning materials, tutorials, and guides."
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

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Learning Materials</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Explore our curated collection of educational resources designed to support your AI learning journey.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {materials.map((material, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link
                  to={material.link}
                  className="block bg-white/5 rounded-xl p-6 hover:bg-white/10 transition-colors group"
                >
                  <material.icon className="w-12 h-12 text-[#FF4B1F] mb-4" />
                  <h2 className="text-xl font-bold mb-2 group-hover:text-[#FF4B1F] transition-colors">
                    {material.title}
                  </h2>
                  <p className="text-gray-300">{material.description}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}