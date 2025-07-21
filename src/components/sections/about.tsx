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
        Ligia é a primeira Liga Acadêmica de Inteligência Artificial da Universidade Federal de Pernambuco. Criada por estudantes, busca integrar alunos e professores no estudo e aplicação da IA por meio de eventos, projetos e parcerias.
        </p>
        <p className="text-lg text-gray-400">
        Nossa missão é criar uma comunidade ativa e colaborativa em Inteligência Artificial, conectando estudantes e pesquisadores para aprender, explorar e desenvolver soluções inovadoras. Buscamos promover eventos, projetos e iniciativas educacionais que aproximem a IA do mundo real e fortaleçam seu impacto na sociedade.
        </p>
      </motion.div>
    </div>
  );
}