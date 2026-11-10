import React, { useState } from 'react';
import {
  GraduationCap,
  Sparkles,
  Gamepad2,
  BookOpen,
  MessageSquareQuote,
  Layers
} from 'lucide-react';
import { GrammarTrainer } from './components/GrammarTrainer';
import { DialogueFormulasTab } from './components/DialogueFormulasTab';
import { VisualNovelGame } from './components/VisualNovelGame';

type AppTab = 'trainer' | 'formulas' | 'roleplay';

export default function App() {
  const [activeTab, setActiveTab] = useState<AppTab>('trainer');

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      {/* Top Main Navigation Bar (3-zone contract) */}
      <header className="sticky top-0 z-40 w-full bg-slate-950/90 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between gap-4">
          {/* Zone 1: Brand wordmark */}
          <div className="flex items-center gap-2.5 shrink-0">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-amber-500 to-amber-300 flex items-center justify-center text-slate-950 font-black shadow-md shadow-amber-500/20 text-sm">
              🇪🇸
            </div>
            <div className="flex flex-col">
              <span className="text-sm sm:text-base font-extrabold tracking-tight text-white font-display leading-tight">
                Español con Mateo
              </span>
              <span className="text-[10px] text-slate-400">
                Глаголы ser & estar · Концерт в филармонии
              </span>
            </div>
          </div>

          {/* Zone 2: Segmented Navigation Tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-900 border border-slate-800 rounded-xl text-xs sm:text-sm font-semibold overflow-x-auto">
            <button
              onClick={() => setActiveTab('trainer')}
              className={`flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3.5 py-1.5 sm:py-2 rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'trainer'
                  ? 'bg-amber-500 text-slate-950 font-bold shadow-md'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              <Layers size={16} />
              <span>1. Карточки для диалога</span>
            </button>

            <button
              onClick={() => setActiveTab('formulas')}
              className={`flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3.5 py-1.5 sm:py-2 rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'formulas'
                  ? 'bg-amber-500 text-slate-950 font-bold shadow-md'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              <MessageSquareQuote size={16} />
              <span>2. Речевые формулы</span>
            </button>

            <button
              onClick={() => setActiveTab('roleplay')}
              className={`flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3.5 py-1.5 sm:py-2 rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'roleplay'
                  ? 'bg-amber-500 text-slate-950 font-bold shadow-md'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              <Gamepad2 size={16} />
              <span>3. Ролевая игра</span>
              <span className="hidden lg:inline-block text-[10px] bg-slate-950/70 px-1.5 py-0.5 rounded-full font-mono text-amber-300">
                21 сцена
              </span>
            </button>
          </div>

          {/* Zone 3: Quick Switch / Status */}
          <div className="hidden sm:flex items-center gap-2 shrink-0">
            {activeTab === 'trainer' && (
              <button
                onClick={() => setActiveTab('formulas')}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-amber-300 border border-slate-700 text-xs font-semibold transition-colors cursor-pointer"
              >
                <span>К формулам</span>
                <span aria-hidden="true">→</span>
              </button>
            )}
            {activeTab === 'formulas' && (
              <button
                onClick={() => setActiveTab('roleplay')}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/40 text-xs font-semibold transition-colors cursor-pointer"
              >
                <span>В игру к Матео</span>
                <span aria-hidden="true">→</span>
              </button>
            )}
            {activeTab === 'roleplay' && (
              <button
                onClick={() => setActiveTab('formulas')}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 text-xs font-semibold transition-colors cursor-pointer"
              >
                <MessageSquareQuote size={14} className="text-amber-400" />
                <span>К формулам</span>
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Main Content View */}
      <main className="flex-1 w-full">
        {activeTab === 'trainer' && (
          <GrammarTrainer onStartRoleplay={() => setActiveTab('formulas')} />
        )}
        {activeTab === 'formulas' && (
          <DialogueFormulasTab onStartRoleplay={() => setActiveTab('roleplay')} />
        )}
        {activeTab === 'roleplay' && (
          <VisualNovelGame onBackToTrainer={() => setActiveTab('formulas')} />
        )}
      </main>
    </div>
  );
}
