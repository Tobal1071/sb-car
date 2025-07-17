import React from 'react';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

const FilterPanel = ({ filters, onFiltersChange }) => {
  const handleFilterChange = (filterName, value) => {
    onFiltersChange(prev => ({ ...prev, [filterName]: value }));
  };

  return (
    <Card className="bg-white/10 backdrop-blur-lg border-white/20 p-6">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <div>
          <label className="block text-sm font-medium text-white mb-2">Precio mín.</label>
          <Input
            type="number"
            placeholder="€"
            value={filters.priceMin}
            onChange={(e) => handleFilterChange('priceMin', e.target.value)}
            className="bg-white/10 border-white/20 text-white"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-white mb-2">Precio máx.</label>
          <Input
            type="number"
            placeholder="€"
            value={filters.priceMax}
            onChange={(e) => handleFilterChange('priceMax', e.target.value)}
            className="bg-white/10 border-white/20 text-white"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-white mb-2">Año mín.</label>
          <Input
            type="number"
            placeholder="2020"
            value={filters.year}
            onChange={(e) => handleFilterChange('year', e.target.value)}
            className="bg-white/10 border-white/20 text-white"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-white mb-2">Marca</label>
          <Input
            type="text"
            placeholder="BMW, Audi..."
            value={filters.brand}
            onChange={(e) => handleFilterChange('brand', e.target.value)}
            className="bg-white/10 border-white/20 text-white"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-white mb-2">Combustible</label>
          <Input
            type="text"
            placeholder="Gasolina, Diésel..."
            value={filters.fuel}
            onChange={(e) => handleFilterChange('fuel', e.target.value)}
            className="bg-white/10 border-white/20 text-white"
          />
        </div>
      </div>
    </Card>
  );
};

export default FilterPanel;