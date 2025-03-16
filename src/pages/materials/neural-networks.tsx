import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { BookOpen, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function NeuralNetworksPage() {
  return (
    <>
      <Helmet>
        <title>Introduction to Neural Networks - Ligia UFPE</title>
        <meta
          name="description"
          content="A comprehensive guide to understanding neural networks, from basic concepts to advanced architectures."
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
                <BookOpen className="w-12 h-12 text-[#FF4B1F]" />
                <h1 className="text-4xl font-bold">Introduction to Neural Networks</h1>
              </div>

              <div className="prose prose-invert max-w-none">
                <p className="text-xl text-gray-300 mb-8">
                  A comprehensive guide to understanding neural networks, from basic concepts to advanced architectures.
                </p>

                <h2>Contents</h2>
                <ul>
                  <li>Basic Concepts and Terminology</li>
                  <li>Neural Network Architecture</li>
                  <li>Activation Functions</li>
                  <li>Backpropagation</li>
                  <li>Training and Optimization</li>
                  <li>Advanced Architectures</li>
                </ul>

                <h2>Prerequisites</h2>
                <ul>
                  <li>Basic understanding of linear algebra</li>
                  <li>Familiarity with Python programming</li>
                  <li>Basic calculus knowledge</li>
                </ul>

                <h2>Learning Objectives</h2>
                <p>After completing this tutorial, you will be able to:</p>
                <ul>
                  <li>Understand the fundamental concepts of neural networks</li>
                  <li>Implement basic neural network architectures</li>
                  <li>Train and optimize neural network models</li>
                  <li>Apply neural networks to real-world problems</li>
                </ul>

                <div className="bg-white/5 p-6 rounded-xl mt-8">
                  <h3>Getting Started</h3>
                  <p>
                    Begin by setting up your Python environment and installing the required libraries.
                    We'll be using PyTorch for our implementations.
                  </p>
                  <pre className="bg-black/50 p-4 rounded-lg overflow-x-auto">
                    <code>pip install torch numpy matplotlib</code>
                  </pre>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
    </>
  );
}