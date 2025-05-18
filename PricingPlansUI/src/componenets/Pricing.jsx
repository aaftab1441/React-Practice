import React from 'react'
import PricingCard from './PricingCard'

const Pricing = ({ plans }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 text-center">
      <h2 className="text-3xl font-bold mb-12">Pricing Plans</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <PricingCard
            key={index}
            plan={plan}
          />
        ))}
      </div>
    </div>
  )
};

export default Pricing;