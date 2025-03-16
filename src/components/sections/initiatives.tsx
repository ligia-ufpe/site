import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code2, Network, Lightbulb, Book, GraduationCap} from 'lucide-react';
import { Dialog } from '@headlessui/react';

interface Initiative {
  title: string;
  description: string;
  icon: React.ElementType;
  image: string;
}

const initiatives: Initiative[] = [
  {
    title: 'Clube do artigo',
    description: 'Nossos membros se reúnem para dissecar e discutir artigos científicos sobre Inteligência Artificial, promovendo o aprendizado e a troca de conhecimento entre membros e a comunidade no geral.',
    icon: Book,
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800',
  },
  {
    title: 'Pesquisa',
    description: 'Na Liga desenvolvemos projetos de pesquisa em áreas como: Visão Computacional, Aprendizado de Máquina e Processamento de Linguagem Natural.',
    icon: Lightbulb,
    image: 'https://images.unsplash.com/photo-1589652717521-10c0d092dea9?fm=jpg&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'Competições',
    description: 'Pariticipamos de competições de Inteligência Artificial. Nosso objetivo é promover o aprendizado prático e a troca de experiências entre os membros.',
    icon: Code2,
    image: 'https://images.unsplash.com/photo-1637073849667-91120a924221?fm=jpg&q=60&w=800',
  },
  {
    title: 'Cursos',
    description: 'Oferecemos cursos e workshops sobre temas relevantes para a comunidade interessada no campo da Inteligência Artificial.',
    icon: GraduationCap,
    image: 'https://images.unsplash.com/photo-1561089489-f13d5e730d72?q=80&w=800',
  },
];

export function Initiatives() {
  const [selectedInitiative, setSelectedInitiative] = useState<Initiative | null>(null);

  return (
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Iniciativas</h2>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
        Impulsionando a inovação por meio de pesquisa, educação e engajamento com a comunidade.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {initiatives.map((initiative, index) => (
          <motion.div
            key={initiative.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            onClick={() => setSelectedInitiative(initiative)}
            className="group relative overflow-hidden rounded-2xl bg-white/5 hover:bg-white/10 transition-colors cursor-pointer"
          >
            <div className="absolute inset-0">
              <img
                src={initiative.image}
                alt={initiative.title}
                className="w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20" />
            </div>
            
            <div className="relative p-8">
              <initiative.icon className="w-12 h-12 text-[#FF4B1F] mb-4" />
              <h3 className="text-2xl font-bold">{initiative.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>

      <Dialog
        open={selectedInitiative !== null}
        onClose={() => setSelectedInitiative(null)}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black/70" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="mx-auto max-w-lg rounded-xl bg-black border border-white/10 p-8">
            {selectedInitiative && (
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 mb-6 text-[#FF4B1F]">
                  <selectedInitiative.icon className="w-full h-full" />
                </div>
                <Dialog.Title className="text-2xl font-bold mb-4">
                  {selectedInitiative.title}
                </Dialog.Title>
                <p className="text-gray-300 text-center text-lg leading-relaxed">
                  {selectedInitiative.description}
                </p>
                <button
                  onClick={() => setSelectedInitiative(null)}
                  className="mt-8 text-gray-400 hover:text-white transition-colors"
                >
                  Fechar
                </button>
              </div>
            )}
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
}