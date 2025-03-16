import React from 'react';
import { motion } from 'framer-motion';

export function About() {
  return (
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-center"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-8">Sobre a Ligia</h2>
        <p className="text-xl text-gray-300 mb-8">
        Ligia is an AI research initiative dedicated to advancing the frontiers of artificial intelligence through collaborative innovation and cutting-edge research at Federal University of Pernambuco.
        </p>
        <p className="text-lg text-gray-400">
          Our mission is to foster groundbreaking research in artificial intelligence while nurturing the next generation of AI researchers and practitioners. Through interdisciplinary collaboration and innovative approaches, we strive to develop AI solutions that address real-world challenges and contribute to the global AI community.
        </p>
      </motion.div>
    </div>
  );
}