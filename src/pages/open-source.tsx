import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Star, GitFork, ExternalLink, Code2, Brain, Database, BookOpen, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Project {
  id: number;
  title: string;
  description: string;
  category: 'machine-learning' | 'nlp' | 'computer-vision' | 'tools' | 'datasets' | 'education';
  githubUrl: string;
  demoUrl?: string;
  stars: number;
  forks: number;
  language: string;
  icon: any;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'LIGIA-NLP',
    description: 'Biblioteca Python para processamento de linguagem natural em português, com foco em análise de sentimentos e classificação de texto.',
    category: 'nlp',
    githubUrl: 'https://github.com/ligia-ufpe/ligia-nlp',
    stars: 45,
    forks: 12,
    language: 'Python',
    icon: Brain
  },
  {
    id: 2,
    title: 'LIGIA-Vision',
    description: 'Framework para detecção de objetos e segmentação de imagens usando modelos de deep learning.',
    category: 'computer-vision',
    githubUrl: 'https://github.com/ligia-ufpe/ligia-vision',
    stars: 38,
    forks: 8,
    language: 'Python',
    icon: Code2
  },
  {
    id: 3,
    title: 'LIGIA-Datasets',
    description: 'Coleção de datasets em português para treinamento de modelos de IA, incluindo textos, imagens e áudio.',
    category: 'datasets',
    githubUrl: 'https://github.com/ligia-ufpe/ligia-datasets',
    stars: 62,
    forks: 15,
    language: 'Python',
    icon: Database
  },
  {
    id: 4,
    title: 'LIGIA-Edu',
    description: 'Plataforma educacional com notebooks Jupyter e exercícios práticos para aprendizado de IA.',
    category: 'education',
    githubUrl: 'https://github.com/ligia-ufpe/ligia-edu',
    stars: 89,
    forks: 24,
    language: 'Python',
    icon: BookOpen
  }
];

const categories = [
  { id: 'all', label: 'Todos' },
  { id: 'machine-learning', label: 'Machine Learning' },
  { id: 'nlp', label: 'NLP' },
  { id: 'computer-vision', label: 'Visão Computacional' },
  { id: 'tools', label: 'Ferramentas' },
  { id: 'datasets', label: 'Datasets' },
  { id: 'education', label: 'Educação' }
];

export const OpenSource = () => {
  
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProjects = projects.filter(project => {
    const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory;
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });
  useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  return (
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Projetos Open Source</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Explore e contribua com nossos projetos open source na área de IA.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto mb-8">
          <div className="flex flex-wrap gap-4 justify-center mb-6">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-[#FF4B1F] text-white'
                    : 'bg-white/5 text-gray-300 hover:bg-white/10'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          <div className="relative">
            <input
              type="text"
              placeholder="Buscar projetos..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-4 pr-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:border-[#FF4B1F] focus:outline-none text-white"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/5 rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-[#FF4B1F]/10">
                  <project.icon className="w-6 h-6 text-[#FF4B1F]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  
                  <div className="flex items-center gap-4 mb-4">
                    <span className="flex items-center gap-1 text-sm text-gray-400">
                      <Star size={16} />
                      {project.stars}
                    </span>
                    <span className="flex items-center gap-1 text-sm text-gray-400">
                      <GitFork size={16} />
                      {project.forks}
                    </span>
                    <span className="text-sm text-gray-400">
                      {project.language}
                    </span>
                  </div>

                  <div className="flex gap-4">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                    >
                      <Github size={18} />
                      <span>GitHub</span>
                    </a>
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                      >
                        <ExternalLink size={18} />
                        <span>Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-gray-400 mt-8"
          >
            Nenhum projeto encontrado para sua busca.
          </motion.div>
        )}
      </div>
    </main>
  );
}

export { OpenSource as default }; 