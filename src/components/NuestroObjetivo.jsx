import React from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Target } from "lucide-react";

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

export default function NuestroObjetivo() {
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      className="py-12 bg-gray-50"
    >
      <motion.div variants={itemVariants} className="max-w-4xl mx-auto px-4 text-center mb-10">
        <h2 className="text-3xl font-extrabold mb-4 text-gray-900">Nuestro Objetivo</h2>
        <p className="text-gray-700 max-w-3xl mx-auto text-lg leading-relaxed">
          Nuestro objetivo es ser líderes en el mercado, ofreciendo productos y servicios que generen valor real
          y contribuyan al crecimiento sostenible de nuestros clientes y la comunidad.
        </p>
      </motion.div>

      <motion.div variants={itemVariants} className="max-w-md mx-auto">
        <Card className="bg-white/90 border border-gray-200 p-8 shadow-lg hover:shadow-xl transition-shadow rounded-xl flex flex-col items-center gap-4">
          <div className="p-4 bg-gradient-to-br from-green-400 to-teal-600 rounded-full">
            <Target className="h-10 w-10 text-white" />
          </div>
          <h3 className="text-xl font-bold text-gray-900">Visión a Futuro</h3>
          <p className="text-gray-600 text-center">
            Trabajamos para construir un futuro donde nuestros clientes alcancen sus metas y la innovación sea constante.
          </p>
        </Card>
      </motion.div>
    </motion.section>
  );
}
