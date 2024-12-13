import React, { useState } from 'react';
import "./FilterData.css"

// Define the types for the filter options
interface FilterOption {
  label: string;
  count: number;
}

const filterData = {
  category: [
    { label: 'Kormánytisztviselő', count: 11 },
    { label: 'Köztalkalmazott', count: 10 },
    { label: 'Köztisztviselő', count: 5 },
    { label: 'Nonprofit szervezetek', count: 13 }
  ],
  location: [
    { label: 'Budapest', count: 34 },
    { label: 'Bács-Kiskun megye', count: 4 },
    { label: 'Baranya megye', count: 1 },
    { label: 'Borsod-Abaúj-Zemplén megye', count: 2 },
    { label: 'Csongrád-Csanád megye', count: 1 },
    { label: 'Nógrád megye', count: 1 },
    { label: 'Pest megye', count: 2 },
    { label: 'Somogy megye', count: 1 },
    { label: 'Vas megye', count: 1 },
    { label: 'Zala megye', count: 1 }
  ]
};

const FilterBar: React.FC = () => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((item) => item !== category) : [...prev, category]
    );
  };

  const handleLocationChange = (location: string) => {
    setSelectedLocations((prev) =>
      prev.includes(location) ? prev.filter((item) => item !== location) : [...prev, location]
    );
  };

  return (
    <div className="filter-bar">
      {/* Category Section */}
      <div className="filter-section">
        <h3>KATEGÓRIA</h3>
        {filterData.category.map((category) => (
          <div key={category.label} className="filter-option">
            <input
              type="checkbox"
              id={category.label}
              checked={selectedCategories.includes(category.label)}
              onChange={() => handleCategoryChange(category.label)}
            />
            <label htmlFor={category.label}>
              {category.label} ({category.count})
            </label>
          </div>
        ))}
      </div>

      {/* Location Section */}
      <div className="filter-section">
        <h3>MUNKAVÉGZÉS HELYE</h3>
        {filterData.location.map((location) => (
          <div key={location.label} className="filter-option">
            <input
              type="checkbox"
              id={location.label}
              checked={selectedLocations.includes(location.label)}
              onChange={() => handleLocationChange(location.label)}
            />
            <label htmlFor={location.label}>
              {location.label} ({location.count})
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterBar;
