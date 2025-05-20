import React from 'react'

const TestimonialCard = ({ name, role, comment, image }) => {
  return (
    <div className="bg-white rounded-2xl shadow p-6 flex flex-col items-start max-w-xs">
      <span className="text-4xl text-gray-300 mb-4">“</span>
      <p className="text-gray-700 mb-6">{comment}</p>
      <div className="flex items-center mt-auto">
        <img
          src={image}
          alt={name}
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <div className="font-semibold text-gray-900">{name}</div>
          <div className="text-sm text-gray-500">{role}</div>
        </div>
      </div>
    </div>
  )
}

export default TestimonialCard