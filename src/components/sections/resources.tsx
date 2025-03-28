import React from 'react';
import { motion } from 'framer-motion';
import { FileText, BookOpen, Github } from 'lucide-react';
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
    description: 'Nossa coletânea de recursos educacionais para membros da comunidade.',
    icon: BookOpen,
    link: '/materials'
  },
  {
    title: 'Projetos Open Source',
    description: 'Explore nossos projetos open source de ferramentas de IA.',
    icon: Github,
    link: '/open-source'
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
        className="text-center mb-8 sm:mb-12 lg:mb-16"
      >
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">Recursos</h2>
        <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
          Explore nossa coleção de recursos projetados para apoiar sua jornada de pesquisa em IA.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-7xl mx-auto">
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
              className="block bg-white/5 rounded-xl p-4 sm:p-6 hover:bg-white/10 transition-colors group"
            >
              <resource.icon className="w-8 h-8 sm:w-12 sm:h-12 text-[#FF4B1F] mb-3 sm:mb-4" />
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 group-hover:text-[#FF4B1F] transition-colors">
                {resource.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-400">{resource.description}</p>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}