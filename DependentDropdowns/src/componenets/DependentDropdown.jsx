import React, { useState } from 'react'

const DependentDropdown = () => {
  // Static country data
  const countries = [
    { id: 1, name: 'USA' },
    { id: 2, name: 'Canada' },
    { id: 3, name: 'Other' },
  ];

  // Static city data corresponding to countries
  const cities = {
    USA: ['New York', 'Los Angeles', 'Chicago'],
    Canada: ['Toronto', 'Vancouver', 'Montreal'],
  };

  // State to hold the selected country, city, and other country text
  const [selectedCountry, setSelectedCountry] = useState('');
  const [availableCities, setAvailableCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState('');
  const [otherCountry, setOtherCountry] = useState(''); 

  // Handle country change
  const handleCountryChange = (e) => {
    const country = e.target.value;
    setSelectedCountry(country);
    setAvailableCities(cities[country] || []);
    setSelectedCity(''); 
    if (country !== 'Other') {
      setOtherCountry('');
    }
  };

  // Handle city change
  const handleCityChange = (e) => {
    setSelectedCity(e.target.value);
  };

  // Handle other country input change
  const handleOtherCountryChange = (e) => {
    setOtherCountry(e.target.value);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden p-8">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Dependent Dropdown Example
        </h1>

        <div className="space-y-6">
          {/* Country Dropdown */}
          <div className="flex flex-col space-y-2">
            <label htmlFor="country" className="text-sm font-medium text-gray-700">
              Select Country
            </label>
            <select
              id="country"
              value={selectedCountry}
              onChange={handleCountryChange}
              className="block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Select a country</option>
              {countries.map((country) => (
                <option key={country.id} value={country.name}>
                  {country.name}
                </option>
              ))}
            </select>
          </div>

          {/* City or Other Country Input */}
          {selectedCountry === 'Other' ? (
            <div className="flex flex-col space-y-2">
              <label htmlFor="other-country" className="text-sm font-medium text-gray-700">
                Please specify the country
              </label>
              <input
                id="other-country"
                type="text"
                value={otherCountry}
                onChange={handleOtherCountryChange}
                placeholder="Enter country name"
                className="block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          ) : (
            selectedCountry && (
              <div className="flex flex-col space-y-2">
                <label htmlFor="city" className="text-sm font-medium text-gray-700">
                  Select City
                </label>
                <select
                  id="city"
                  value={selectedCity}
                  onChange={handleCityChange}
                  className="block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Select a city</option>
                  {availableCities.map((city, index) => (
                    <option key={index} value={city}>
                      {city}
                    </option>
                  ))}
                </select>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default DependentDropdown