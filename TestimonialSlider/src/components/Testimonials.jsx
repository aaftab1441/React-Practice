import React from 'react'
import TestimonialCard from './TestimonialCard'

const Testimonials = ({ testimonials }) => {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
        What Our Customers Say
        </h2>
        <div className="flex flex-col md:flex-row justify-center gap-8">
        {testimonials.map((t, idx) => (
            <TestimonialCard key={idx} {...t} />
        ))}
        </div>
    </section>
  )
}

export default Testimonials