import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import { DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';

const AddCarModal = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    title: '',
    brand: '',
    model: '',
    year: '',
    price: '',
    mileage: '',
    fuel: 'Gasolina',
    transmission: 'Manual',
    location: '',
    description: '',
    images: ['']
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.brand || !formData.price) {
      toast({
        title: "Error",
        description: "Por favor, completa los campos obligatorios.",
        variant: "destructive"
      });
      return;
    }
    
    onSubmit({
      ...formData,
      year: formData.year ? parseInt(formData.year) : null,
      price: parseInt(formData.price),
      mileage: formData.mileage ? parseInt(formData.mileage) : null,
      images: formData.images.filter(img => img && img.trim() !== '')
    });
  };

  return (
    <DialogContent className="max-w-2xl p-0 border-0">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <DialogHeader className="p-6">
          <DialogTitle className="text-2xl font-bold text-white">Vender tu Coche</DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4 px-6 pb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-white mb-2">Título *</label>
              <Input
                value={formData.title}
                onChange={(e) => setFormData({...formData, title: e.target.value})}
                placeholder="BMW Serie 3 320d"
                className="bg-white/10 border-white/20 text-white"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-white mb-2">Marca *</label>
              <Input
                value={formData.brand}
                onChange={(e) => setFormData({...formData, brand: e.target.value})}
                placeholder="BMW"
                className="bg-white/10 border-white/20 text-white"
                required
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-white mb-2">Modelo</label>
              <Input
                value={formData.model}
                onChange={(e) => setFormData({...formData, model: e.target.value})}
                placeholder="Serie 3"
                className="bg-white/10 border-white/20 text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-white mb-2">Año</label>
              <Input
                type="number"
                value={formData.year}
                onChange={(e) => setFormData({...formData, year: e.target.value})}
                placeholder="2020"
                className="bg-white/10 border-white/20 text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-white mb-2">Precio (€) *</label>
              <Input
                type="number"
                value={formData.price}
                onChange={(e) => setFormData({...formData, price: e.target.value})}
                placeholder="25000"
                className="bg-white/10 border-white/20 text-white"
                required
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-white mb-2">Kilómetros</label>
              <Input
                type="number"
                value={formData.mileage}
                onChange={(e) => setFormData({...formData, mileage: e.target.value})}
                placeholder="50000"
                className="bg-white/10 border-white/20 text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-white mb-2">Combustible</label>
              <select
                value={formData.fuel}
                onChange={(e) => setFormData({...formData, fuel: e.target.value})}
                className="w-full h-10 px-3 rounded-md bg-white/10 border border-white/20 text-white"
              >
                <option value="Gasolina">Gasolina</option>
                <option value="Diésel">Diésel</option>
                <option value="Híbrido">Híbrido</option>
                <option value="Eléctrico">Eléctrico</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-white mb-2">Transmisión</label>
              <select
                value={formData.transmission}
                onChange={(e) => setFormData({...formData, transmission: e.target.value})}
                className="w-full h-10 px-3 rounded-md bg-white/10 border border-white/20 text-white"
              >
                <option value="Manual">Manual</option>
                <option value="Automático">Automático</option>
              </select>
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-white mb-2">Ubicación</label>
            <Input
              value={formData.location}
              onChange={(e) => setFormData({...formData, location: e.target.value})}
              placeholder="Madrid"
              className="bg-white/10 border-white/20 text-white"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-white mb-2">URL de la imagen</label>
            <Input
              value={formData.images[0]}
              onChange={(e) => setFormData({...formData, images: [e.target.value]})}
              placeholder="https://ejemplo.com/imagen.jpg"
              className="bg-white/10 border-white/20 text-white"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-white mb-2">Descripción</label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({...formData, description: e.target.value})}
              placeholder="Describe tu vehículo..."
              rows={4}
              className="w-full px-3 py-2 rounded-md bg-white/10 border border-white/20 text-white placeholder:text-gray-400 resize-none"
            />
          </div>
          
          <DialogFooter className="pt-4">
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
            >
              Publicar Coche
            </Button>
          </DialogFooter>
        </form>
      </motion.div>
    </DialogContent>
  );
};

export default AddCarModal;