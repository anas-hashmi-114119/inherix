import React, { useState } from 'react'
import localData from '../data/problems'

const ProblemList = ({ topic, showDetail }) => {
  const filteredProblems = localData.filter((item) => item.topic === topic)

  return (
    <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[linear-gradient(135deg,_rgba(9,12,29,0.95),_rgba(15,23,42,0.9))] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.12),_transparent_30%)]" />
      <div className="relative">
      <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="text-lg font-semibold text-white">{topic}</h3>
          <p className="text-sm text-slate-400">Showing problems for the selected topic.</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-slate-200">{filteredProblems.length} problems</span>
          <button className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-100 transition hover:bg-white/10">View all</button>
        </div>
      </div>

      <ul className="max-h-[380px] space-y-3 overflow-y-auto pr-1">
        {filteredProblems.map((item) => (
          <li
            key={item.id}
            className="flex flex-col rounded-[24px] border border-white/10 bg-[#0f172d]/80 p-4 shadow-[0_10px_30px_rgba(0,0,0,0.15)] transition hover:border-sky-400/30"
          >
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="space-y-1">
                <p className="text-base font-semibold text-white">{item.title}</p>
                <div className="flex flex-wrap gap-2 text-xs text-slate-400">
                  <span className="rounded-full border border-slate-700 bg-slate-900/80 px-2 py-1">{item.topic}</span>
                  <span className="rounded-full border border-slate-700 bg-slate-900/80 px-2 py-1">{item.difficulty}</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-sm text-slate-400">{item.percent}%</span>
                <button
                  className="rounded-2xl bg-gradient-to-r from-sky-500 to-violet-500 px-4 py-2 text-sm font-semibold text-white transition hover:scale-[1.02]"
                  onClick={() => showDetail(item.id)}
                >
                  Show
                </button>
              </div>
            </div>
          </li>
        ))}
        {filteredProblems.length === 0 && (
          <li className="rounded-[24px] border border-white/10 bg-[#0f172d]/80 p-4 text-slate-400">No problems found for this topic.</li>
        )}
      </ul>
      </div>
    </div>
  )
}

export default ProblemList
