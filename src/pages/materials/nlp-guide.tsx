import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { FileText, ArrowLeft, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function NLPGuidePage() {
  const sections = [
    {
      title: "Text Preprocessing",
      content: "Learn essential text preprocessing techniques including tokenization, stemming, and lemmatization.",
      status: "Complete"
    },
    {
      title: "Word Embeddings",
      content: "Understand different word embedding techniques like Word2Vec, GloVe, and FastText.",
      status: "Complete"
    },
    {
      title: "Language Models",
      content: "Explore modern language models and their applications in NLP tasks.",
      status: "In Progress"
    },
    {
      title: "Sequence Models",
      content: "Deep dive into RNNs, LSTMs, and Transformer architectures.",
      status: "Coming Soon"
    }
  ];

  return (
    <>
      <Helmet>
        <title>NLP Best Practices Guide - Ligia UFPE</title>
        <meta
          name="description"
          content="Detailed documentation on best practices for natural language processing projects."
        />
      </Helmet>
      <main className="min-h-screen bg-black pt-32 pb-20">
        <div className="container mx-auto px-6">
          <Link
            to="/materials"
            className="inline-flex items-center text-gray-400 hover:text-white mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Materials
          </Link>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-4 mb-8">
                <FileText className="w-12 h-12 text-[#FF4B1F]" />
                <h1 className="text-4xl font-bold">NLP Best Practices Guide</h1>
              </div>

              <p className="text-xl text-gray-300 mb-12">
                A comprehensive guide covering best practices and implementation details
                for natural language processing projects.
              </p>

              <div className="grid gap-6">
                {sections.map((section, index) => (
                  <motion.div
                    key={section.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white/5 rounded-xl p-6"
                  >
                    <div className="flex items-start gap-4">
                      <CheckCircle className={`w-6 h-6 flex-shrink-0 ${
                        section.status === 'Complete' ? 'text-[#FF4B1F]' : 'text-gray-500'
                      }`} />
                      <div>
                        <h3 className="text-xl font-bold mb-2">{section.title}</h3>
                        <p className="text-gray-400 mb-2">{section.content}</p>
                        <span className={`inline-block px-3 py-1 rounded-full text-sm ${
                          section.status === 'Complete'
                            ? 'bg-[#FF4B1F]/20 text-[#FF4B1F]'
                            : section.status === 'In Progress'
                            ? 'bg-yellow-500/20 text-yellow-500'
                            : 'bg-gray-500/20 text-gray-500'
                        }`}>
                          {section.status}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </main>
    </>
  );
}