
import React, { useEffect, useRef, useState } from 'react'
import ProblemList from './components/ProblemLIst.jsx'
import ProblemCard from './components/ProblemCard'
import ProblemDetail from './components/ProblemDetail.jsx'
import localData from './data/problems.js'

const groupedTopics = Object.values(
  localData.reduce((acc, item) => {
    if (!acc[item.topic]) {
      acc[item.topic] = {
        topic: item.topic,
        title: item.topic,
        count: 0,
      }
    }

    acc[item.topic].count += 1
    return acc
  }, {})
)

// const topics = [
//   { id: 1, title: 'Classes & Objects', subtitle: 'Basics of classes and objects', count: '12 problems' },
//   { id: 2, title: 'Constructors & Destructors', subtitle: 'Constructor types and destructors', count: '10 problems' },
//   { id: 3, title: 'Inheritance', subtitle: 'Single, multilevel, hierarchical', count: '15 problems' },
//   { id: 4, title: 'Polymorphism', subtitle: 'Function overloading and overriding', count: '14 problems' },
//   { id: 5, title: 'Abstraction', subtitle: 'Abstract classes and interfaces', count: '8 problems' },
// ]

function App() {
  const [selectedTopic, setSelectedTopic] = useState(groupedTopics[0]?.topic || '')
  const [toggleShowDetail, setToggleShowDetail] = useState(false)
  const [selectedProblemId, setSelectedProblemId] = useState(null)
  const topicCarouselRef = useRef(null)
  const detailSectionRef = useRef(null)

  const handleShowDetail = (id) => {
    if (selectedProblemId === id && toggleShowDetail) {
      setToggleShowDetail(false)
      setSelectedProblemId(null)
      return
    }

    setSelectedProblemId(id)
    setToggleShowDetail(true)
  }

  const handleTopicSelect = (topic) => {
    setSelectedTopic(topic)
  }

  const scrollTopics = (direction) => {
    if (!topicCarouselRef.current) return

    const scrollAmount = topicCarouselRef.current.clientWidth * 0.85
    topicCarouselRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    if (!toggleShowDetail || selectedProblemId === null || !detailSectionRef.current) {
      return
    }

    const targetY = detailSectionRef.current.getBoundingClientRect().top + window.scrollY - 96

    window.scrollTo({
      top: targetY,
      behavior: 'smooth',
    })
  }, [toggleShowDetail, selectedProblemId])

  return (
    <div className="min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.18),_transparent_24%),radial-gradient(circle_at_top_right,_rgba(139,92,246,0.24),_transparent_28%),linear-gradient(135deg,_#030712_0%,_#070b1d_45%,_#050816_100%)] px-5 py-5 text-white">
      <div className="mx-auto flex max-w-[1480px] gap-5 xl:gap-6">
        <aside className="hidden lg:flex w-[260px] flex-col gap-6">
          <div className="rounded-[32px] border border-white/10 bg-[#0d1126]/80 p-6 shadow-[0_30px_80px_rgba(5,8,22,0.35)]">
            <div className="mb-8">
              <div className="mb-4 flex items-center gap-3">
                <div className="relative flex h-11 w-11 items-center justify-center rounded-2xl border border-white/20 bg-gradient-to-br from-sky-500 to-violet-600 shadow-[0_12px_30px_rgba(56,189,248,0.24)]">
                  <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.42),_transparent_55%)]" />
                  <svg viewBox="0 0 64 64" className="relative h-7 w-7" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="10" y="10" width="44" height="44" rx="14" stroke="rgba(255,255,255,0.28)" strokeWidth="1.2" />
                    <path d="M32 18v28" stroke="white" strokeWidth="4" strokeLinecap="round" />
                    <path d="M22 30l10-10 10 10" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M22 40l10 10 10-10" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="32" cy="18" r="3.4" fill="white" />
                    <circle cx="32" cy="46" r="3.4" fill="white" />
                  </svg>
                </div>
                <div>
                  <div className="bg-gradient-to-r from-sky-300 via-cyan-200 to-violet-300 bg-clip-text text-sm font-semibold uppercase tracking-[0.28em] text-transparent">inherix</div>
                  <div className="text-[10px] uppercase tracking-[0.34em] text-slate-400">intelligent practice</div>
                </div>
              </div>
              <h1 className="text-2xl font-semibold">Home</h1>
            </div>

            <nav className="space-y-3 text-sm text-slate-300">
              <button className="flex w-full items-center gap-3 rounded-3xl bg-white/5 px-4 py-3 text-left text-white shadow-sm shadow-indigo-500/5">
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M3 10.5 12 3l9 7.5" /><path d="M5 10.5V21h14V10.5" /></svg>
                Home
              </button>
              <button className="flex w-full items-center gap-3 rounded-3xl px-4 py-3 hover:bg-white/5">
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="4" y="5" width="16" height="14" rx="2" /><path d="M8 9h8M8 13h5" /></svg>
                Problems
              </button>
              <button className="flex w-full items-center gap-3 rounded-3xl px-4 py-3 hover:bg-white/5">
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 3v18" /><path d="M3 8l9-5 9 5" /><path d="M5 16l7 4 7-4" /></svg>
                Topics
              </button>
              <button className="flex w-full items-center gap-3 rounded-3xl px-4 py-3 hover:bg-white/5">
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M7 4h10" /><path d="M7 20h10" /><path d="M8 8l4-4 4 4" /><path d="M8 16l4 4 4-4" /></svg>
                Contests
              </button>
              <button className="flex w-full items-center gap-3 rounded-3xl px-4 py-3 hover:bg-white/5">
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M4 19V8" /><path d="M20 19V12" /><path d="M4 8l8-4 8 4" /><path d="M8 19v-5h8v5" /></svg>
                Leaderboard
              </button>
              <button className="flex w-full items-center gap-3 rounded-3xl px-4 py-3 hover:bg-white/5">
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 3l7 4v5c0 4.2-2.6 7.5-7 9-4.4-1.5-7-4.8-7-9V7l7-4Z" /></svg>
                Achievements
              </button>
            </nav>
          </div>

          <div className="rounded-[32px] border border-white/10 bg-[#0d1126]/80 p-6 shadow-[0_30px_80px_rgba(5,8,22,0.35)]">
            <h2 className="text-lg font-semibold mb-3">Sharpen your OOP skills</h2>
            <p className="text-slate-400 mb-6">One problem at a time. Build confidence with every challenge.</p>
            <button className="w-full rounded-3xl bg-[#5c3ce5] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#7b5efa]">Start Practicing</button>
          </div>
        </aside>

        <main className="flex-1 min-w-0 space-y-6">
          <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#0b1126]/80 p-5 shadow-[0_25px_70px_rgba(5,8,22,0.4)] backdrop-blur-xl">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.16),_transparent_26%),radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.18),_transparent_24%)]" />
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-sky-500/20 blur-3xl" />
            <div className="absolute -bottom-12 left-20 h-36 w-36 rounded-full bg-violet-500/20 blur-3xl" />
            <div className="relative">
              <div className="mb-4 flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
                <div className="max-w-2xl">
                  <span className="rounded-full border border-sky-400/20 bg-sky-400/10 px-2.5 py-1 text-[10px] uppercase tracking-[0.3em] text-sky-300">Practice. Code. Master</span>
                  <h1 className="mt-3 bg-gradient-to-r from-sky-200 via-white to-violet-200 bg-clip-text text-3xl font-semibold leading-tight text-transparent sm:text-4xl">inherix</h1>
                  <p className="mt-2 max-w-xl text-sm text-slate-300">Build confidence through guided problems, elegant challenges, and a premium learning experience.</p>
                  <div className="mt-4 flex flex-wrap gap-2.5">
                    <button className="rounded-2xl bg-gradient-to-r from-sky-500 to-violet-500 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-sky-500/20 transition hover:scale-[1.02]">Solve Problems</button>
                    <button className="rounded-2xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-semibold text-slate-100 transition hover:border-white/20 hover:bg-white/10">Browse Topics</button>
                  </div>
                </div>
                <div className="relative hidden h-44 w-44 rounded-[28px] border border-white/10 bg-white/5 p-5 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] lg:flex lg:flex-col lg:justify-center lg:items-center">
                  <div className="absolute inset-0 rounded-[28px] bg-[radial-gradient(circle,_rgba(14,165,233,0.16),_transparent_60%)]" />
                  <div className="relative flex h-16 w-16 items-center justify-center rounded-[22px] border border-white/15 bg-gradient-to-br from-sky-500 to-violet-600 shadow-[0_14px_36px_rgba(56,189,248,0.28)]">
                    <div className="absolute inset-0 rounded-[22px] bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.45),_transparent_55%)]" />
                    <svg viewBox="0 0 64 64" className="relative h-9 w-9" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="10" y="10" width="44" height="44" rx="14" stroke="rgba(255,255,255,0.28)" strokeWidth="1.2" />
                      <path d="M32 18v28" stroke="white" strokeWidth="4" strokeLinecap="round" />
                      <path d="M22 30l10-10 10 10" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M22 40l10 10 10-10" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                      <circle cx="32" cy="18" r="3.4" fill="white" />
                      <circle cx="32" cy="46" r="3.4" fill="white" />
                    </svg>
                  </div>
                  <div className="relative mt-4 text-center text-xs uppercase tracking-[0.3em] text-slate-300">Solve Problems</div>
                </div>
              </div>

              <div className="space-y-2.5">
                <div className="flex items-center justify-between gap-3">
                  <div className="space-y-0.5">
                    <h2 className="text-lg font-semibold text-white">Topics</h2>
                    <p className="text-xs text-slate-400">Choose a learning path and start practicing.</p>
                  </div>
                  <button className="text-sm text-sky-300 transition hover:text-sky-200">View all</button>
                </div>
                <div className="flex min-w-0 items-center gap-3">
                  <button
                    type="button"
                    onClick={() => scrollTopics('left')}
                    className="hidden rounded-full border border-white/10 bg-white/5 p-2 text-slate-200 transition hover:bg-white/10 sm:block"
                  >
                    ←
                  </button>
                  <div
                    ref={topicCarouselRef}
                    className="flex min-w-0 flex-1 gap-4 overflow-x-auto overflow-y-hidden pb-2 scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                  >
                    {groupedTopics.map((item) => (
                      <ProblemCard
                        key={item.topic}
                        topic={item.topic}
                        title={item.title}
                        count={`${item.count} problems`}
                        selected={selectedTopic === item.topic}
                        onSelect={handleTopicSelect}
                      />
                    ))}
                  </div>
                  <button
                    type="button"
                    onClick={() => scrollTopics('right')}
                    className="hidden rounded-full border border-white/10 bg-white/5 p-2 text-slate-200 transition hover:bg-white/10 sm:block"
                  >
                    →
                  </button>
                </div>
              </div>
            </div>
          </div>

          <section className="rounded-[40px] border border-white/10 bg-[#0d1126]/80 p-6 shadow-[0_30px_80px_rgba(5,8,22,0.35)] backdrop-blur-xl">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold text-white">Recent Problems</h2>
                <p className="text-sm text-slate-400">A curated list of practical OOP challenges.</p>
              </div>
            </div>
            <ProblemList 
              topic={selectedTopic} 
              showDetail={handleShowDetail}
            />

            {toggleShowDetail && selectedProblemId !== null && (
              <div ref={detailSectionRef}>
                <ProblemDetail problem={localData.find((item) => item.id === selectedProblemId)} />
              </div>
            )}
          </section>
        </main>

        <aside className="hidden xl:flex w-[310px] flex-col gap-6">
          <div className="rounded-[32px] border border-white/10 bg-[#0d1126]/80 p-6 shadow-[0_30px_80px_rgba(5,8,22,0.35)]">
            <div className="flex items-center justify-between text-sm text-slate-400">
              <span>Your Progress</span>
              <span>150 Total</span>
            </div>
            <div className="mt-6 rounded-[28px] border border-white/10 bg-[#090b16]/90 p-6">
              <div className="mb-4 flex items-center justify-between text-sm text-slate-300">
                <span>Solved</span>
                <span className="text-slate-100">62</span>
              </div>
              <div className="mb-4 h-4 overflow-hidden rounded-full bg-white/5">
                <div className="h-full w-[62%] rounded-full bg-gradient-to-r from-sky-400 to-violet-500"></div>
              </div>
              <div className="flex items-center justify-between text-sm text-slate-400">
                <span>Attempted</span>
                <span>92</span>
              </div>
            </div>
          </div>

          <div className="rounded-[32px] border border-white/10 bg-[#0d1126]/80 p-6 shadow-[0_30px_80px_rgba(5,8,22,0.35)]">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold">Streak</h3>
                <p className="text-sm text-slate-400">7 days</p>
              </div>
              <div className="rounded-3xl bg-[#11162e] px-4 py-2 text-sm text-slate-200">🔥</div>
            </div>
            <div className="mt-6 grid grid-cols-7 gap-2 text-center text-xs text-slate-400">
              {['M','T','W','T','F','S','S'].map((day, index) => (
                <div key={day} className={`rounded-2xl border ${index < 5 ? 'border-sky-500 bg-sky-500/20 text-slate-100' : 'border-white/10 bg-white/5' } px-2 py-3`}>{day}</div>
              ))}
            </div>
          </div>

          <div className="rounded-[32px] border border-white/10 bg-[#0d1126]/80 p-6 shadow-[0_30px_80px_rgba(5,8,22,0.35)]">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-lg font-semibold">Badges</h3>
              <button className="text-sm text-slate-400 hover:text-slate-200">View all</button>
            </div>
            <div className="grid gap-3">
              {['First Steps', 'Consistent', 'Problem Solver'].map((badge) => (
                <div key={badge} className="flex items-center gap-3 rounded-3xl border border-white/10 bg-white/5 px-4 py-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 to-violet-500 text-sm font-bold text-white">★</div>
                  <div>
                    <p className="text-sm font-semibold">{badge}</p>
                    <p className="text-xs text-slate-400">Badge earned</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[32px] border border-white/10 bg-[#0d1126]/80 p-6 shadow-[0_30px_80px_rgba(5,8,22,0.35)]">
            <h3 className="text-lg font-semibold">Motivation</h3>
            <p className="mt-4 text-slate-300">“The only way to learn a new programming language is by writing programs in it.”</p>
            <p className="mt-4 text-sm text-slate-400">– Dennis Ritchie</p>
          </div>
        </aside>
      </div>
    </div>
  )
}

export default App
