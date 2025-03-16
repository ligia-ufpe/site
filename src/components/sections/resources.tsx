import React from 'react';
import { motion } from 'framer-motion';
import { FileText, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

const resources = [
  {
    title: 'Artigos',
    description: 'Acesse nossos artigos publicados na área de IA e aprendizado de máquina.',
    icon: FileText,
    link: '/papers'
  },
  {
    title: 'Recursos Educacionais',
    description: 'Nossa coletânea de recursos educacionais e tutoriais para estudantes e pesquisadores.',
    icon: BookOpen,
    link: '/materials'
  }
];

export function Resources() {
  return (
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Resources</h2>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Explore our collection of resources designed to support your AI research journey.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {resources.map((resource, index) => (
          <motion.div
            key={resource.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Link
              to={resource.link}
              className="block bg-white/5 rounded-xl p-6 hover:bg-white/10 transition-colors group"
            >
              <resource.icon className="w-12 h-12 text-[#FF4B1F] mb-4" />
              <h3 className="text-xl font-bold mb-3 group-hover:text-[#FF4B1F] transition-colors">
                {resource.title}
              </h3>
              <p className="text-gray-400">{resource.description}</p>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}