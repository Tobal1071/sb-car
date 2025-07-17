// SobreNosotros.jsx
import React from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Info } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 90,
    },
  },
};

export default function SobreNosotros() {
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      className="py-12"
    >
      <motion.div variants={itemVariants} className="max-w-4xl mx-auto px-4 text-center mb-10">
        <h2 className="text-3xl font-extrabold mb-4 text-gray-900">Sobre Nosotros</h2>
        <p className="text-gray-700 max-w-3xl mx-auto text-lg leading-relaxed">
          Somos una empresa dedicada a ofrecer soluciones innovadoras y de calidad para nuestros clientes.
          Con años de experiencia en el sector, nuestro equipo trabaja con pasión para superar expectativas y brindar un servicio excepcional.
        </p>
      </motion.div>

      <motion.div variants={itemVariants} className="max-w-md mx-auto">
        <Card className="bg-white/90 border border-gray-200 p-8 shadow-lg hover:shadow-xl transition-shadow rounded-xl flex flex-col items-center gap-4">
          <div className="p-4 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full">
            <Info className="h-10 w-10 text-white" />
          </div>
          <h3 className="text-xl font-bold text-gray-900">Nuestro Equipo</h3>
          <p className="text-gray-600 text-center">
            Contamos con profesionales altamente capacitados que buscan crear valor y confianza en cada proyecto.
          </p>
        </Card>
      </motion.div>
    </motion.section>
  );
}