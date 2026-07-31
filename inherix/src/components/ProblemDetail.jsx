import React from 'react'

const ProblemDetail = ({ problem }) => {
  if (!problem) {
    return null
  }

  const statementText = problem.statement || 'No statement available for this problem yet.'

  return (
    <div className="mt-6 overflow-hidden rounded-[32px] border border-white/10 bg-[linear-gradient(135deg,_rgba(17,23,47,0.98),_rgba(9,12,29,0.96))] shadow-[0_30px_70px_rgba(0,0,0,0.35)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.12),_transparent_30%)]" />
      <div className="relative border-b border-white/10 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.14),_transparent_30%)] p-6">
        <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-sky-300">Problem Overview</p>
            <h3 className="mt-2 text-2xl font-semibold text-white">{problem.title}</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              <span className="rounded-full border border-slate-700 bg-slate-900/80 px-3 py-1 text-sm text-slate-300">{problem.topic}</span>
              <span className="rounded-full border border-slate-700 bg-slate-900/80 px-3 py-1 text-sm text-slate-300">{problem.difficulty}</span>
            </div>
          </div>

          <div className="rounded-2xl border border-sky-500/20 bg-sky-500/10 px-4 py-3 text-right">
            <p className="text-xs uppercase tracking-[0.25em] text-slate-400">Progress</p>
            <p className="mt-1 text-lg font-semibold text-white">{problem.percent}%</p>
          </div>
        </div>
      </div>

      <div className="relative p-6">
        <div className="rounded-[24px] border border-white/10 bg-[#090c1d]/80 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
          <div className="mb-4 flex items-center gap-2">
            <div className="h-2.5 w-2.5 rounded-full bg-sky-400" />
            <h4 className="text-lg font-semibold text-white">Problem Statement</h4>
          </div>
          <div className="max-h-[520px] overflow-y-auto whitespace-pre-line text-[15px] leading-8 text-slate-300">
            {statementText}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProblemDetail