import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Settings, Fuel, MapPin, Heart } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import { DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';

const CarDetailsModal = ({ car }) => {
  const formatPrice = (price) => {
    return new Intl.NumberFormat('es-ES', {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: 0
    }).format(price);
  };

  return (
    <DialogContent className="max-w-4xl p-0 border-0">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="relative">
          <img
            src={car.images[0] || 'https://via.placeholder.com/800x600?text=Sin+Imagen'}
            alt={car.title}
            className="w-full h-64 md:h-80 object-cover rounded-t-2xl"
          />
          {car.featured && (
            <Badge className="absolute top-4 left-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-black">
              Destacado
            </Badge>
          )}
        </div>
        
        <div className="p-6">
          <div className="flex flex-col md:flex-row justify-between items-start mb-6">
            <div>
              <DialogTitle className="text-3xl font-bold text-white mb-2">{car.title}</DialogTitle>
              <DialogDescription className="text-gray-400">{car.brand} {car.model}</DialogDescription>
            </div>
            <span className="text-3xl font-bold text-green-400 mt-2 md:mt-0">
              {formatPrice(car.price)}
            </span>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <InfoBox icon={<Calendar className="h-6 w-6 text-blue-400" />} label="Año" value={car.year} />
            <InfoBox icon={<Settings className="h-6 w-6 text-purple-400" />} label="Kilómetros" value={car.mileage ? car.mileage.toLocaleString() : 'N/A'} />
            <InfoBox icon={<Fuel className="h-6 w-6 text-green-400" />} label="Combustible" value={car.fuel} />
            <InfoBox icon={<MapPin className="h-6 w-6 text-red-400" />} label="Ubicación" value={car.location} />
          </div>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-white mb-3">Descripción</h3>
            <p className="text-gray-300 leading-relaxed">{car.description}</p>
          </div>
          
          <DialogFooter className="flex-col sm:flex-row gap-3">
            <Button
              className="flex-1 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700"
              onClick={() => {
                toast({
                  title: "🚧 Esta función no está implementada aún—¡pero no te preocupes! ¡Puedes solicitarla en tu próximo prompt! 🚀"
                });
              }}
            >
              Contactar Vendedor
            </Button>
            <Button
              variant="outline"
              className="bg-white/10 border-white/20 text-white hover:bg-white/20"
              onClick={() => {
                toast({
                  title: "🚧 Esta función no está implementada aún—¡pero no te preocupes! ¡Puedes solicitarla en tu próximo prompt! 🚀"
                });
              }}
            >
              <Heart className="h-4 w-4 mr-2" />
              Guardar
            </Button>
          </DialogFooter>
        </div>
      </motion.div>
    </DialogContent>
  );
};

const InfoBox = ({ icon, label, value }) => (
  <div className="bg-white/10 rounded-lg p-4 text-center">
    <div className="mx-auto mb-2">{icon}</div>
    <p className="text-sm text-gray-400">{label}</p>
    <p className="text-white font-semibold">{value}</p>
  </div>
);

export default CarDetailsModal;