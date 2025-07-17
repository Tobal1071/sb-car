import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Car } from 'lucide-react';
import Header from '@/components/Header';
import SearchBar from '@/components/SearchBar';
import FilterPanel from '@/components/FilterPanel';
import CarCard from '@/components/CarCard';
import SellerAdvantages from '@/components/SellerAdvantages';
import BuyerAdvantages from '@/components/BuyerAdvantages';
import Footer from '@/components/Footer';
import NuestroObjetivo from '../components/NuestroObjetivo';
import SobreNosotros from '../components/SobreNosotros';
import AboutUsAndGoal from '../components/AboutUsAndGoal';

const HomePage = ({ cars, onShowAddForm, onSelectCar }) => {
  const [filteredCars, setFilteredCars] = useState(cars);
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    priceMin: '',
    priceMax: '',
    year: '',
    brand: '',
    fuel: ''
  });

  useEffect(() => {
    let filtered = cars.filter(car => {
      const matchesSearch = car.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           (car.brand && car.brand.toLowerCase().includes(searchTerm.toLowerCase())) ||
                           (car.model && car.model.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesPrice = (!filters.priceMin || car.price >= parseInt(filters.priceMin, 10)) &&
                          (!filters.priceMax || car.price <= parseInt(filters.priceMax, 10));
      
      const matchesYear = !filters.year || car.year >= parseInt(filters.year, 10);
      const matchesBrand = !filters.brand || (car.brand && car.brand.toLowerCase().includes(filters.brand.toLowerCase()));
      const matchesFuel = !filters.fuel || (car.fuel && car.fuel.toLowerCase().includes(filters.fuel.toLowerCase()));

      return matchesSearch && matchesPrice && matchesYear && matchesBrand && matchesFuel;
    });

    setFilteredCars(filtered);
  }, [cars, searchTerm, filters]);

  return (
    <>
      <Header onShowAddForm={onShowAddForm} onToggleFilters={() => setShowFilters(!showFilters)} />
      <main className="container mx-auto px-4 py-8">
        <SearchBar searchTerm={searchTerm} onSearchTermChange={setSearchTerm} />
        
        <AnimatePresence>
          {showFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mb-8 overflow-hidden"
            >
              <FilterPanel filters={filters} onFiltersChange={setFilters} />
            </motion.div>
          )}
        </AnimatePresence>

        <div className="mb-6">
          <p className="text-black/80">
            {filteredCars.length} {filteredCars.length === 1 ? 'vehículo encontrado' : 'vehículos encontrados'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCars.map((car, index) => (
            <CarCard key={car.id} car={car} index={index} onSelectCar={onSelectCar} />
          ))}
        </div>

        {filteredCars.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <Car className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-black mb-2">No se encontraron vehículos</h3>
            <p className="text-gray-500">Prueba a ajustar los filtros de búsqueda</p>
          </motion.div>
        )}
      </main>
      <SellerAdvantages />
      <BuyerAdvantages />
     <AboutUsAndGoal />
      <Footer />
    </>
  );
};

export default HomePage;