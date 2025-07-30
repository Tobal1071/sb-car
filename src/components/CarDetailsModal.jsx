import React, { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Settings, Fuel, MapPin, Heart, ChevronLeft, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import {
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";

const CarDetailsModal = ({ car }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const formatPrice = (price) => {
    return new Intl.NumberFormat("es-ES", {
      style: "currency",
      currency: "EUR",
      minimumFractionDigits: 0,
    }).format(price);
  };

  const images = car.images.length > 0
    ? car.images
    : ["https://via.placeholder.com/800x600?text=Sin+Imagen"];

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <DialogContent className="max-w-4xl p-0 border-0">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        {/* Contenedor de imagen con tamaño fijo */}
        <div className="relative w-full h-96 md:h-[28rem] bg-gray-900 rounded-t-2xl flex items-center justify-center overflow-hidden">
          <img
            src={images[currentImageIndex]}
            alt={`${car.title} - imagen ${currentImageIndex + 1}`}
            className="max-w-full max-h-full object-contain"
          />
          {car.featured && (
            <Badge className="absolute top-4 left-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-black">
              Destacado
            </Badge>
          )}

          {/* Botones para cambiar imagen */}
          {images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute top-1/2 left-2 -translate-y-1/2 bg-black/50 hover:bg-black/70 rounded-full p-2 text-white"
                aria-label="Imagen anterior"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={nextImage}
                className="absolute top-1/2 right-2 -translate-y-1/2 bg-black/50 hover:bg-black/70 rounded-full p-2 text-white"
                aria-label="Imagen siguiente"
              >
                <ChevronRight className="h-6 w-6" />
              </button>

              {/* Indicador simple de imágenes */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex space-x-2">
                {images.map((_, idx) => (
                  <span
                    key={idx}
                    className={`w-3 h-3 rounded-full cursor-pointer ${
                      idx === currentImageIndex ? "bg-white" : "bg-white/50"
                    }`}
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentImageIndex(idx);
                    }}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        <div className="p-6">
          <div className="flex flex-col md:flex-row justify-between items-start mb-6">
            <div>
              <DialogTitle className="text-3xl font-bold text-white mb-2">
                {car.title}
              </DialogTitle>
              <DialogDescription className="text-gray-400">
                {car.brand} {car.model}
              </DialogDescription>
            </div>
            <span className="text-3xl font-bold text-green-400 mt-2 md:mt-0">
              {formatPrice(car.price)}
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <InfoBox
              icon={<Calendar className="h-6 w-6 text-blue-400" />}
              label="Año"
              value={car.year}
            />
            <InfoBox
              icon={<Settings className="h-6 w-6 text-purple-400" />}
              label="Kilómetros"
              value={car.mileage ? car.mileage.toLocaleString() : "N/A"}
            />
            <InfoBox
              icon={<Fuel className="h-6 w-6 text-green-400" />}
              label="Combustible"
              value={car.fuel}
            />
            <InfoBox
              icon={<MapPin className="h-6 w-6 text-red-400" />}
              label="Ubicación"
              value={car.location}
            />
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-white mb-3">Descripción</h3>
            <p className="text-gray-300 leading-relaxed">{car.description}</p>
          </div>

          <DialogFooter className="flex-col sm:flex-row gap-3">
            <Button
              className="flex-1 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700"
              onClick={() => {
                window.location.href = `mailto:contacto.sbcars@gmail.com?subject=Consulta%20sobre%20${encodeURIComponent(
                  car.title
                )}`;
              }}
            >
              Contactar Vendedor
            </Button>
            <Button
              variant="outline"
              className="bg-white/10 border-white/20 text-white hover:bg-white/20"
              onClick={(e) => {
                e.stopPropagation();

                const favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

                const yaFavorito = favoritos.some((favCar) => favCar.id === car.id);

                if (!yaFavorito) {
                  favoritos.push(car);
                  localStorage.setItem("favoritos", JSON.stringify(favoritos));
                  toast({
                    title: "🚗 Añadido a favoritos",
                    description: `${car.title} ha sido guardado en tus favoritos.`,
                    variant: "success",
                  });
                } else {
                  toast({
                    title: "⚠️ Ya está en favoritos",
                    description: `${car.title} ya está en tus favoritos.`,
                    variant: "warning",
                  });
                }
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
