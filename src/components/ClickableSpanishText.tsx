import React, { useState } from 'react';
import {
  X,
  Volume2,
  BookOpen,
  Sparkles,
  ArrowRight,
  HelpCircle,
  Link2
} from 'lucide-react';
import {
  getWordExplanation,
  isExcludedWord,
  normalizeWordToken,
  WordExplanation
} from '../data/ecuadorWordDictionary';
import { AudioButton } from './AudioButton';

interface ClickableSpanishTextProps {
  text: string;
  className?: string;
}

export const ClickableSpanishText: React.FC<ClickableSpanishTextProps> = ({
  text,
  className = '',
}) => {
  const [selectedWord, setSelectedWord] = useState<{
    raw: string;
    explanation: WordExplanation;
  } | null>(null);

  // Split text into tokens while preserving punctuation and spacing
  // Regex matches words and surrounding punctuation
  const tokens = text.split(/(\s+|[«»"¡¿!?,.:;]+)/);

  const handleWordClick = (token: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const clean = normalizeWordToken(token);
    if (!clean || isExcludedWord(clean)) return;

    const explanation = getWordExplanation(token);
    if (explanation) {
      setSelectedWord({ raw: token, explanation });
    }
  };

  return (
    <>
      <span className={`inline leading-relaxed ${className}`}>
        {tokens.map((token, idx) => {
          const clean = normalizeWordToken(token);
          const isWord = /^[a-zA-ZáéíóúüñÁÉÍÓÚÜÑ]+$/.test(clean);
          const isExcluded = isExcludedWord(clean);

          if (!isWord || isExcluded) {
            return <React.Fragment key={idx}>{token}</React.Fragment>;
          }

          const isCurrentlySelected =
            selectedWord &&
            normalizeWordToken(selectedWord.raw) === clean;

          return (
            <button
              key={idx}
              type="button"
              onClick={(e) => handleWordClick(token, e)}
              title="Нажмите, чтобы увидеть перевод и пояснение слова"
              className={`inline rounded px-1 py-0.5 transition-all cursor-pointer font-medium select-none text-left ${
                isCurrentlySelected
                  ? 'bg-amber-500 text-slate-950 font-bold ring-2 ring-amber-400'
                  : 'text-slate-100 hover:text-amber-300 hover:bg-amber-500/15 underline decoration-dotted decoration-amber-500/50 underline-offset-4'
              }`}
            >
              {token}
            </button>
          );
        })}
      </span>

      {/* Word Explanation Modal / Card Popup */}
      {selectedWord && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-150"
          onClick={() => setSelectedWord(null)}
        >
          <div
            className="relative w-full max-w-md bg-slate-900 border border-amber-500/40 rounded-2xl shadow-2xl p-5 text-slate-100 space-y-4 animate-in zoom-in-95 duration-150"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header: Lemma, Part of Speech, Audio, Close */}
            <div className="flex items-start justify-between gap-3 border-b border-slate-800 pb-3">
              <div className="space-y-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-xl sm:text-2xl font-extrabold text-white font-display">
                    {selectedWord.explanation.lemma}
                  </span>
                  <span className="text-[11px] font-semibold text-amber-400 bg-amber-950/70 px-2 py-0.5 rounded-full border border-amber-800/60">
                    {selectedWord.explanation.partOfSpeechRu}
                  </span>
                </div>
                <p className="text-base sm:text-lg font-bold text-amber-300">
                  {selectedWord.explanation.translationRu}
                </p>
              </div>

              <div className="flex items-center gap-1.5 shrink-0 pt-1">
                <AudioButton
                  text={selectedWord.explanation.lemma}
                  size="sm"
                  id={`word-${selectedWord.raw}`}
                />
                <button
                  type="button"
                  onClick={() => setSelectedWord(null)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
                  aria-label="Закрыть"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Content: Explanation */}
            <div className="space-y-3 text-xs sm:text-sm">
              <div className="p-3 bg-slate-950/70 rounded-xl border border-slate-800 space-y-1 text-slate-300 leading-relaxed">
                <span className="font-semibold text-slate-200 block">
                  Значение в тексте:
                </span>
                <p>{selectedWord.explanation.shortExplanationRu}</p>
              </div>

              {/* Verb Preposition / Syntax if applicable */}
              {selectedWord.explanation.verbPrepositionRu && (
                <div className="p-3 bg-sky-950/40 border border-sky-800/50 rounded-xl space-y-1 text-sky-200">
                  <span className="font-bold flex items-center gap-1.5 text-sky-300 text-xs">
                    <Link2 size={14} className="text-sky-400" />
                    <span>Управление глагола и предлоги:</span>
                  </span>
                  <p className="text-xs leading-relaxed text-sky-200/90">
                    {selectedWord.explanation.verbPrepositionRu}
                  </p>
                </div>
              )}

              {/* Grammar Note if applicable */}
              {selectedWord.explanation.grammarNoteRu && (
                <div className="p-2.5 bg-amber-500/10 border border-amber-500/20 rounded-xl text-xs text-amber-200/90 leading-relaxed">
                  <span className="font-semibold text-amber-300">
                    Грамматика:
                  </span>{' '}
                  {selectedWord.explanation.grammarNoteRu}
                </div>
              )}

              {/* Example in context */}
              {selectedWord.explanation.exampleEs && (
                <div className="text-xs text-slate-400 font-mono bg-slate-950/50 p-2.5 rounded-xl border border-slate-800/80">
                  <span className="text-[10px] text-slate-500 uppercase font-sans font-bold block mb-0.5">
                    Пример употребления:
                  </span>
                  «{selectedWord.explanation.exampleEs}»
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
              <span className="flex items-center gap-1">
                <Sparkles size={13} className="text-amber-400" />
                <span>Все слова кликабельны</span>
              </span>
              <button
                type="button"
                onClick={() => setSelectedWord(null)}
                className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-medium transition-colors cursor-pointer"
              >
                Понятно
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
