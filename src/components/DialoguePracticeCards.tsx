import React, { useState } from 'react';
import { DIALOGUE_PRACTICE_CARDS } from '../data/dialogueCardsData';
import { AudioButton } from './AudioButton';
import { RotateCw, EyeOff } from 'lucide-react';

interface DialoguePracticeCardsProps {
  onStartRoleplay?: () => void;
}

export const DialoguePracticeCards: React.FC<DialoguePracticeCardsProps> = () => {
  const [revealedIds, setRevealedIds] = useState<Record<string, boolean>>({});

  const toggleCard = (id: string) => {
    setRevealedIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="w-full space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {DIALOGUE_PRACTICE_CARDS.map((card) => {
          const isRevealed = !!revealedIds[card.id];

          return (
            <div
              key={card.id}
              onClick={() => toggleCard(card.id)}
              className={`p-5 rounded-2xl border transition-all duration-200 cursor-pointer flex flex-col justify-between select-none ${
                isRevealed
                  ? 'bg-slate-900 border-amber-500/40 shadow-xl shadow-amber-500/5'
                  : 'bg-slate-900/80 border-slate-800 hover:border-amber-500/30 hover:bg-slate-900'
              }`}
            >
              {/* Situation / Title */}
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2 border-b border-slate-800/80 pb-2">
                  <h3 className="text-sm font-bold text-amber-300 font-display">
                    {card.titleRu}
                  </h3>
                  <span className="text-[11px] text-slate-400 flex items-center gap-1 font-medium">
                    <RotateCw size={12} className="text-amber-400" />
                    <span>{isRevealed ? 'Оборот' : 'Лицевая'}</span>
                  </span>
                </div>

                {/* Prompt from Mateo */}
                <div className="space-y-1 bg-slate-950/70 p-3 rounded-xl border border-slate-800">
                  <div className="flex items-start justify-between gap-2">
                    <p className="text-base font-bold text-white leading-snug">
                      «{card.promptEs}»
                    </p>
                    <div onClick={(e) => e.stopPropagation()}>
                      <AudioButton text={card.promptEs} size="sm" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Reveal Area / Answer + Translation */}
              <div className="pt-3">
                {isRevealed ? (
                  <div className="space-y-3 bg-amber-500/10 p-3.5 rounded-xl border border-amber-500/30 text-xs animate-in fade-in duration-150">
                    {/* Mateo's translation */}
                    <div className="text-slate-300 italic border-b border-amber-500/20 pb-2">
                      <span className="font-semibold text-sky-300">Матео:</span> «{card.promptRu}»
                    </div>

                    {/* Student's answer in Spanish */}
                    <div className="space-y-1">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <span className="font-bold text-amber-400 uppercase text-[10px]">
                            Ваш ответ (Tú):
                          </span>
                          <p className="text-sm font-bold text-white font-mono leading-snug">
                            «{card.studentResponseEs}»
                          </p>
                        </div>
                        <div onClick={(e) => e.stopPropagation()}>
                          <AudioButton text={card.studentResponseEs} size="sm" />
                        </div>
                      </div>
                      <p className="text-amber-200/90 text-xs font-medium">
                        {card.studentResponseRu}
                      </p>
                    </div>

                    {card.serEstarHighlight && (
                      <div className="text-[11px] text-amber-300 bg-slate-950/80 px-2.5 py-1 rounded-lg border border-amber-500/20 font-mono">
                        ⚡ {card.serEstarHighlight}
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="py-2 px-3 rounded-xl bg-slate-950/50 border border-slate-800/80 text-xs text-slate-400 font-medium text-center hover:text-amber-300 transition-colors">
                    Перевод и ваш ответ на обратной стороне →
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
