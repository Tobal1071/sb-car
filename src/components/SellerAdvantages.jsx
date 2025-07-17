import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { DollarSign, ShieldCheck, Users, Camera, Share2, Languages } from 'lucide-react';

const advantages = [
  { icon: <DollarSign className="h-8 w-8 text-green-400" />, text: 'Financiación' },
  { icon: <ShieldCheck className="h-8 w-8 text-blue-400" />, text: 'Garantía mecánica 12 meses' },
  { icon: <Users className="h-8 w-8 text-purple-400" />, text: 'Red de contactos' },
  { icon: <Camera className="h-8 w-8 text-orange-400" />, text: 'Toma de fotos y vídeos' },
  { icon: <Share2 className="h-8 w-8 text-pink-400" />, text: 'Promoción en redes sociales' },
  { icon: <Languages className="h-8 w-8 text-teal-400" />, text: 'We speak English' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
    },
  },
};

const SellerAdvantages = () => {
  return (
    <section className="py-16 sm:py-24 bg-black/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Ventajas Exclusivas para <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Vendedores</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-300">
            Maximizamos el potencial de tu venta con servicios premium.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {advantages.map((advantage, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="bg-white/5 backdrop-blur-lg border-white/10 p-8 h-full text-center hover:bg-white/10 hover:-translate-y-2 transition-all duration-300">
                <div className="flex justify-center items-center mb-4">
                  <div className="p-4 bg-gradient-to-br from-slate-700 to-slate-800 rounded-full">
                    {advantage.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white">{advantage.text}</h3>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SellerAdvantages;