import React from 'react'
import MemberCard from './MemberCard'

const TeamGrid = ({ members }) => {
  return (
    <section className="py-12 px-4 max-w-5xl mx-auto bg-[#fef9f2] rounded-2xl">
      <h1 className="text-4xl font-extrabold text-center mb-10 text-gray-900">Our Team</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {members.map((member, index) => (
          <MemberCard key={member.id} member={member} index={index} />
        ))}
      </div>
    </section>
  )
}

export default TeamGrid