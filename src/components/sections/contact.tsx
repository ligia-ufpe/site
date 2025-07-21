import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram, Mail } from 'lucide-react';

export function Contact() {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/ligia-ufpe', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/company/ligia/', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://www.instagram.com/ligia.ufpe/', label: 'Instagram' },
    { icon: Mail, href: 'mailto:ligia@cin.ufpe.br', label: 'Email' },
  ];

  return (
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">Entre em contato</h2>
        <p className="text-xl text-gray-300 text-center mb-8">
          Conecte-se conosco nas redes sociais ou envie um email.
        </p>

        {/* Social Links */}
        <div className="flex justify-center gap-6">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#FF4B1F] transition-colors p-3 bg-white/5 rounded-full hover:bg-white/10"
              aria-label={social.label}
            >
              <social.icon className="w-6 h-6" />
            </a>
          ))}
        </div>
      </motion.div>
    </div>
  );
}