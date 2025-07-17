import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';
import { SvgLogo } from '@/components/SvgLogo';

const Footer = () => {
  const socialLinks = [
   // { icon: <Facebook className="h-5 w-5" />, name: 'Facebook' },
    { icon: <Instagram className="h-5 w-5" />, name: 'Instagram' },
   // { icon: <Twitter className="h-5 w-5" />, name: 'Twitter' },
  ];

  const handleSocialClick = () => {
    window.open("https://www.instagram.com/sb.cars._?igsh=MWhrZHl3bHYyYWIyNQ%3D%3D", "_blank");
  };

  return (
    <footer className="bg-white/50 border-t border-black/10 text-app-foreground">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center md:items-start">
             <div className="flex items-center space-x-3 mb-4">
              <SvgLogo className="h-12 w-auto" />
            </div>
            <p className="text-sm text-center md:text-left text-black/60">
              © {new Date().getFullYear()} SB CARS. Todos los derechos reservados.
            </p>
          </div>

          <div className="text-center">
            <p className="font-semibold text-black mb-4">Enlaces Rápidos</p>
            <ul className="space-y-2 text-black/80">
              <li><a href="#" className="hover:text-app-accent transition-colors">Comprar</a></li>
              <li><a href="#" className="hover:text-app-accent transition-colors">Vender</a></li>
              <li><a href="#" className="hover:text-app-accent transition-colors">Sobre Nosotros</a></li>
              <li><a href="#" className="hover:text-app-accent transition-colors">Contacto</a></li>
            </ul>
          </div>

          <div className="text-center md:text-right">
            <p className="font-semibold text-black mb-4">Síguenos</p>
            <div className="flex justify-center md:justify-end space-x-4">
              {socialLinks.map((link, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={handleSocialClick}
                  className="p-2 bg-black/10 rounded-full hover:bg-black/20 text-black/70 transition-colors"
                  aria-label={link.name}
                >
                  {link.icon}
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;