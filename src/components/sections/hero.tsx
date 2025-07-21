import { motion } from 'framer-motion';
import { Brain, Sparkles, Users } from 'lucide-react';

export function Hero() {
  const stats = [
    { icon: Brain, label: 'Pessoas Atingidas', value: '1000+' },
    { icon: Users, label: 'Membros Ativos', value: '20+' },
    { icon: Sparkles, label: 'Projetos Ativos', value: '5+' },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FF4B1F] to-[#FF9068] opacity-10 animate-gradient" />
      
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-[#FF4B1F]/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#FF9068]/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-32 h-32 mx-auto mb-8 relative"
            >
              <img 
              src="images/logo.svg" 
              alt="Ligia Logo" 
              className="absolute w-full h-full transform"
            />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#FF4B1F] to-[#FF9068]"
            >
              Conexão que inspira o futuro
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto"
            >
              A primeira Liga Acadêmica de Inteligência Artificial da UFPE, conectando estudantes e pesquisadores para inovar e aprender juntos.
            </motion.p>
            
            

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                  className="bg-white/5 backdrop-blur-lg rounded-xl p-6 transform hover:scale-105 transition-all duration-300"
                >
                  <div className="flex items-center justify-center mb-4">
                    <stat.icon className="w-8 h-8 text-[#FF4B1F]" />
                  </div>
                  <h3 className="text-3xl font-bold mb-2 text-[#FF4B1F]">{stat.value}</h3>
                  <p className="text-gray-400">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

    </section>
  );
}