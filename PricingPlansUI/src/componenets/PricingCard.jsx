import React from 'react';

const PricingCard = ({ plan }) => {
  return(
    <div className={`relative border rounded-2xl p-6 shadow-md transition-all duration-300 ${
        plan.isPopular ? 'border-blue-500 shadow-lg scale-105' : 'border-gray-200'
      }`}>
        {plan.isPopular && (
          <div className="absolute top-0 right-0 bg-blue-500 text-white text-xs px-2 py-1 rounded-tr-2xl rounded-bl-2xl">
            Most Popular
          </div>
        )}
        <h3 className="text-xl font-semibold mb-4">{plan.title}</h3>
        <p className="text-4xl font-bold mb-6">${plan.price}<span className="text-lg">/mo</span></p>
        <ul className="text-left mb-6 space-y-3">
          {plan.features.map((feature, idx) => (
            <li key={idx} className="flex items-center space-x-2">
              <span className="text-green-500">✓</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-4 rounded-xl font-medium hover:opacity-90 transition">
          {plan.title === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
        </button>
      </div>
    );
  };
  
  export default PricingCard;