import React from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Info, Target } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
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

export default function AboutUsAndGoal() {
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      className="container mx-auto px-4 py-16 "
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Sobre Nosotros */}
        <motion.div variants={itemVariants} className="flex flex-col h-full">
          <h2 className="text-3xl font-extrabold mb-4 text-gray-900 text-center md:text-left">
            Sobre Nosotros
          </h2>
          <p className="text-gray-700 mb-8 text-center md:text-left leading-relaxed">
            Somos una empresa que nace en la provincia de Alicante, con el objetivo de hacer más fácil y accesible la compra-venta de coches a particulares.
          </p>
          <Card className="bg-white/90 border border-gray-200 p-8 shadow-lg hover:shadow-xl transition-shadow rounded-xl flex flex-col items-center gap-4 h-full">
            <div className="p-4 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full">
              <Info className="h-10 w-10 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900">Nuestro Equipo</h3>
            <p className="text-gray-600 text-center">
              Contamos con profesionales altamente capacitados en el sector automotriz, dedicados a crear valor y confianza en cada transacción de vehículos que realizamos.
            </p>
          </Card>
        </motion.div>

        {/* Nuestro Objetivo */}
        <motion.div variants={itemVariants} className="flex flex-col h-full">
          <h2 className="text-3xl font-extrabold mb-4 text-gray-900 text-center md:text-left">
            Nuestro Objetivo
          </h2>
          <p className="text-gray-700 mb-8 text-center md:text-left leading-relaxed">
            Ofrecer calidad y ahorrar dolores de cabeza.
            Solo ofrecemos lo mejor del mercado, encargándonos de todos los trámites, desde la toma de fotos, pasando por el trato con el cliente, hasta llegar al cambio de nombre del vehículo.
          </p>
          <Card className="bg-white/90 border border-gray-200 p-8 shadow-lg hover:shadow-xl transition-shadow rounded-xl flex flex-col items-center gap-4 h-full">
            <div className="p-4 bg-gradient-to-br from-green-400 to-teal-600 rounded-full">
              <Target className="h-10 w-10 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900">Visión a Futuro</h3>
            <p className="text-gray-600 text-center">
              Trabajamos para construir un futuro donde nuestros clientes alcancen sus metas sin preocupaciones, ofreciendo solo vehículos de calidad y encargándonos de todo el proceso: desde las fotos y la atención al cliente hasta el cambio de nombre. Nos enfocamos en ahorrar tiempo y dolores de cabeza.
            </p>
          </Card>
        </motion.div>
      </div>
    </motion.section>
  );
}
