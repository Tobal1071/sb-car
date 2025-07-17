import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Settings, Fuel, MapPin, Eye, Heart } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const CarCard = ({ car, index, onSelectCar }) => {
  const formatPrice = (price) => {
    return new Intl.NumberFormat('es-ES', {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: 0
    }).format(price);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      onClick={() => onSelectCar(car)}
    >
      <Card className="bg-white/10 backdrop-blur-lg border-white/20 overflow-hidden hover:bg-white/15 transition-all duration-300 group cursor-pointer">
        <div className="relative">
          <img
            src={car.images[0] || 'https://via.placeholder.com/800x600?text=Sin+Imagen'}
            alt={car.title}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {car.featured && (
            <Badge className="absolute top-3 left-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-black">
              Destacado
            </Badge>
          )}
          <Button
            size="icon"
            variant="ghost"
            className="absolute top-3 right-3 bg-black/50 hover:bg-black/70 text-white"
            onClick={(e) => {
              e.stopPropagation();
              toast({
                title: "🚧 Esta función no está implementada aún—¡pero no te preocupes! ¡Puedes solicitarla en tu próximo prompt! 🚀"
              });
            }}
          >
            <Heart className="h-4 w-4" />
          </Button>
        </div>
        
        <div className="p-6">
          <div className="flex justify-between items-start mb-3">
            <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors">
              {car.title}
            </h3>
            <span className="text-2xl font-bold text-green-400">
              {formatPrice(car.price)}
            </span>
          </div>
          
          <div className="grid grid-cols-2 gap-3 mb-4 text-sm text-gray-300">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-2 text-blue-400" />
              {car.year}
            </div>
            <div className="flex items-center">
              <Settings className="h-4 w-4 mr-2 text-purple-400" />
              {car.mileage ? `${car.mileage.toLocaleString()} km` : 'N/A'}
            </div>
            <div className="flex items-center">
              <Fuel className="h-4 w-4 mr-2 text-green-400" />
              {car.fuel}
            </div>
            <div className="flex items-center">
              <MapPin className="h-4 w-4 mr-2 text-red-400" />
              {car.location}
            </div>
          </div>
          
          <p className="text-gray-400 text-sm mb-4 line-clamp-2">
            {car.description}
          </p>
          
          <Button
            onClick={(e) => {
              e.stopPropagation();
              onSelectCar(car);
            }}
            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
          >
            <Eye className="h-4 w-4 mr-2" />
            Ver Detalles
          </Button>
        </div>
      </Card>
    </motion.div>
  );
};

export default CarCard;