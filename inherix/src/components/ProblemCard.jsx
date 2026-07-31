import React from 'react'

const topicIcons = {
  'Classes & Objects': (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3" y="4" width="18" height="16" rx="3" />
      <path d="M8 8h8M8 12h5" />
    </svg>
  ),
  Inheritance: (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M12 4v16" />
      <path d="M4 8l8-4 8 4" />
      <path d="M4 16l8 4 8-4" />
    </svg>
  ),
  Polymorphism: (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="8" cy="8" r="3" />
      <circle cx="16" cy="8" r="3" />
      <circle cx="12" cy="16" r="3" />
    </svg>
  ),
  Abstraction: (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M12 3l8 5v8l-8 5-8-5V8l8-5Z" />
      <path d="M12 8v8" />
    </svg>
  ),
  'Memory Management': (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="4" y="7" width="16" height="10" rx="2" />
      <path d="M8 12h8" />
      <path d="M10 9v6" />
    </svg>
  ),
}

const topicImages = {
  'Classes & Objects': 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80',
  Inheritance: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80',
  Polymorphism: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=900&q=80',
  Abstraction: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80',
  'Memory Management': 'https://images.unsplash.com/photo-1517148815978-75f6acaaf32c?auto=format&fit=crop&w=900&q=80',
}

const ProblemCard = ({ topic, title, count, selected, onSelect }) => {
  const icon = topicIcons[topic] || (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  )

  return (
    <div
      className={`group relative min-w-[240px] flex-shrink-0 cursor-pointer overflow-hidden rounded-[32px] border p-5 shadow-[0_18px_40px_rgba(16,24,56,0.35)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(56,189,248,0.15)] ${selected ? 'border-sky-400/80 bg-[#172554] shadow-[0_0_0_1px_rgba(56,189,248,0.35),0_20px_45px_rgba(56,189,248,0.18)]' : 'border-white/10 bg-[#11172f]/90'}`}
      onClick={() => onSelect(topic)}
    >
      <img src={topicImages[topic] || 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=900&q=80'} alt={topic} className="absolute inset-0 h-full w-full object-cover opacity-30 transition duration-300 group-hover:scale-105 group-hover:opacity-40" />
      <div className="absolute inset-0 bg-[linear-gradient(135deg,_rgba(3,7,18,0.8),_rgba(15,23,42,0.55))]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.14),_transparent_28%)] opacity-0 transition duration-300 group-hover:opacity-100" />
      <div className="absolute right-4 top-4 h-20 w-20 rounded-full bg-white/5 blur-2xl" />
      <div className="relative">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-3xl bg-gradient-to-br from-sky-500 to-violet-500 text-white shadow-lg shadow-sky-500/20">
          {icon}
        </div>
        <h3 className="text-lg font-semibold text-white">{topic}</h3>
        <p className="mt-3 text-sm leading-6 text-slate-400">{title}</p>
        <div className="mt-5 flex items-center justify-between text-sm text-slate-400">
          <span>{count}</span>
          <span className="rounded-full bg-white/5 px-3 py-1 text-slate-200 transition group-hover:bg-white/10">
            View
          </span>
        </div>
      </div>
    </div>
  )
}

export default ProblemCard
