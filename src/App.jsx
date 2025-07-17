import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Toaster } from '@/components/ui/toaster';
import { toast } from '@/components/ui/use-toast';
import { Dialog } from '@/components/ui/dialog';
import HomePage from '@/pages/HomePage';
import AddCarModal from '@/components/AddCarModal';
import CarDetailsModal from '@/components/CarDetailsModal';
import { sampleCars } from '@/data/sampleCars';
import { useAuth } from '@/context/AuthContext';

function App() {
  const [cars, setCars] = useState([]);
  const [selectedCar, setSelectedCar] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const { isAdmin } = useAuth();
  

  useEffect(() => {
    const savedCars = localStorage.getItem('carMarketplace');
    if (savedCars) {
      const parsedCars = JSON.parse(savedCars);
      setCars(parsedCars);
    } else {
      setCars(sampleCars);
      localStorage.setItem('carMarketplace', JSON.stringify(sampleCars));
    }
  }, []);

  const handleAddCar = (carData) => {
    const newCar = {
      ...carData,
      id: Date.now(),
      createdAt: new Date().toISOString(),
      featured: false,
    };

    const updatedCars = [newCar, ...cars];
    setCars(updatedCars);
    localStorage.setItem('carMarketplace', JSON.stringify(updatedCars));
    setShowAddForm(false);

    toast({
      title: "¡Coche añadido!",
      description: "Tu vehículo se ha publicado correctamente.",
    });
  };

  const handleShowAddForm = () => {
    if (isAdmin) {
      setShowAddForm(true);
    } else {
      toast({
        title: "Acceso denegado",
        description: "Debes ser administrador para añadir un coche.",
        variant: "destructive",
      });
    }
  };

  return (
    <>
      <Helmet>
        <title>SB CARS - Compra y Venta de Coches</title>
        <meta name="description" content="La mejor plataforma para comprar y vender coches de segunda mano. Encuentra tu vehículo ideal o vende el tuyo de forma rápida y segura." />
      </Helmet>

      <div className="min-h-screen bg-app-background text-app-foreground">
        <HomePage
          cars={cars}
          onShowAddForm={handleShowAddForm}
          onSelectCar={setSelectedCar}
        />

        <Dialog open={!!selectedCar} onOpenChange={(isOpen) => !isOpen && setSelectedCar(null)}>
          {selectedCar && <CarDetailsModal car={selectedCar} />}
        </Dialog>

        {isAdmin && (
          <Dialog open={showAddForm} onOpenChange={setShowAddForm}>
            <AddCarModal onSubmit={handleAddCar} onOpenChange={setShowAddForm} />
          </Dialog>
        )}

        <Toaster />
      </div>
    </>
  );
}

export default App;