import React from 'react'

const avatarBgColors = [
  'bg-blue-400',
  'bg-green-400',
  'bg-purple-400',
  'bg-red-400',
]

const MemberCard = ({ member, index }) => {
  // Pick a color based on index for variety
  const bgColor = avatarBgColors[index % avatarBgColors.length]
  return (
    <div className="bg-white rounded-xl shadow-md p-8 flex flex-col items-center">
      <div className={`w-24 h-24 flex items-center justify-center rounded-full ${bgColor} mb-4`}>
        <img
          className="w-20 h-20 rounded-full object-cover"
          src={member.image}
          alt={member.name}
        />
      </div>
      <h2 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h2>
      <p className="text-base text-gray-500">{member.role}</p>
    </div>
  )
}

export default MemberCard