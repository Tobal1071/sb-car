import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
// Cambia la importación del icono:
import { Mail, Phone } from 'lucide-react';

const BuyerAdvantages = () => {
  return (
    <section className="py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="relative bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 sm:p-12 overflow-hidden"
        >
          <div className="absolute -top-10 -right-10 w-48 h-48 bg-white/10 rounded-full opacity-50"></div>
          <div className="absolute -bottom-16 -left-10 w-64 h-64 bg-white/10 rounded-full opacity-50"></div>

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                ¿No encuentras tu coche ideal?
              </h2>
              <p className="mt-4 max-w-2xl text-lg text-white/90">
                Déjanoslo a nosotros. Ofrecemos un servicio de búsqueda a medida para encontrar el vehículo de tus sueños.
              </p>
            </div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href="mailto:contacto.sbcars@gmail.com"
                className="inline-flex items-center bg-white text-purple-600 hover:bg-gray-200 text-lg font-bold py-8 px-10 shadow-lg rounded-full"
              >
                <Mail className="mr-3 h-6 w-6" />
                Contáctanos
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BuyerAdvantages;

