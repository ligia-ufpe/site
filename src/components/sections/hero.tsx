import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Brain } from 'lucide-react';


export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-[#FF4B1F] to-[#FF9068] opacity-10" />
      
      <div className="container mx-auto px-6 py-20 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Replace the abstract shape with your actual logo */}
          <motion.div 
            className="w-40 h-40 mx-auto mb-8"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <img 
              src="/logo.svg" 
              alt="Ligia Logo" 
              className="w-full h-full object-contain"
            />
          </motion.div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#FF4B1F] to-[#FF9068]">
            Conexão que inspira o futuro
          </h1>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Empowering the next generation of AI researchers through collaborative innovation and learning.
          </p>
          
        </motion.div>
      </div>
    </section>
  );
}