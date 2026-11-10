import React, { useState } from 'react';
import { X, BookOpen, Volume2, Copy, Check, Sparkles } from 'lucide-react';
import { Scene } from '../types/dialogue';
import { NOUN_VOCABULARY, VERB_FORMULAS } from '../data/dialogueScript';
import { DIALOGUE_FORMULAS } from '../data/dialogueFormulasData';
import { AudioButton } from './AudioButton';

interface CheatSheetModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentScene: Scene;
}

export const CheatSheetModal: React.FC<CheatSheetModalProps> = ({
  isOpen,
  onClose,
  currentScene,
}) => {
  const [activeTab, setActiveTab] = useState<
    'current' | 'verbs' | 'past' | 'nouns' | 'lifelines'
  >('current');
  const [copiedText, setCopiedText] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(text);
    setTimeout(() => setCopiedText(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl max-h-[85vh] flex flex-col bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden text-slate-100">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-slate-800 bg-slate-900/90 shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center border border-amber-500/30">
              <BookOpen size={18} />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-bold font-display tracking-tight text-white flex items-center gap-2">
                <span>Шпаргалка формул</span>
                <span className="text-xs font-normal text-amber-400/90 bg-amber-500/10 px-2 py-0.5 rounded-full border border-amber-500/20">
                  {currentScene.titleRu.split(':')[0]}
                </span>
              </h2>
              <p className="text-xs text-slate-400">
                Готовые разговорные фразы без сложных грамматических правил
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="Закрыть шпаргалку"
          >
            <X size={20} />
          </button>
        </div>

        {/* Tab switcher */}
        <div className="flex items-center gap-1.5 p-2 bg-slate-950/50 border-b border-slate-800/80 overflow-x-auto text-xs shrink-0">
          <button
            onClick={() => setActiveTab('current')}
            className={`px-3 py-1.5 font-medium rounded-lg transition-all whitespace-nowrap cursor-pointer ${
              activeTab === 'current'
                ? 'bg-amber-500 text-slate-950 font-semibold shadow-sm'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
            }`}
          >
            Фразы этой сцены ({currentScene.sceneFormulas.length})
          </button>
          <button
            onClick={() => setActiveTab('verbs')}
            className={`px-3 py-1.5 font-medium rounded-lg transition-all whitespace-nowrap cursor-pointer ${
              activeTab === 'verbs'
                ? 'bg-amber-500 text-slate-950 font-semibold shadow-sm'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
            }`}
          >
            Глаголы (ser, estar, tener, gustar, ir)
          </button>
          <button
            onClick={() => setActiveTab('past')}
            className={`px-3 py-1.5 font-medium rounded-lg transition-all whitespace-nowrap cursor-pointer ${
              activeTab === 'past'
                ? 'bg-amber-500 text-slate-950 font-semibold shadow-sm'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
            }`}
          >
            Прошедшее время
          </button>
          <button
            onClick={() => setActiveTab('nouns')}
            className={`px-3 py-1.5 font-medium rounded-lg transition-all whitespace-nowrap cursor-pointer ${
              activeTab === 'nouns'
                ? 'bg-amber-500 text-slate-950 font-semibold shadow-sm'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
            }`}
          >
            Слова с артиклями ({NOUN_VOCABULARY.length})
          </button>
          <button
            onClick={() => setActiveTab('lifelines')}
            className={`px-3 py-1.5 font-medium rounded-lg transition-all whitespace-nowrap cursor-pointer ${
              activeTab === 'lifelines'
                ? 'bg-amber-500 text-slate-950 font-semibold shadow-sm'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
            }`}
          >
            Фразы-помощницы и Эквадор 🇪🇨
          </button>
        </div>

        {/* Tab content scrollable */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-3">
          {activeTab === 'current' && (
            <div className="space-y-3">
              <div className="p-3 bg-amber-500/10 border border-amber-500/20 rounded-xl text-xs text-amber-200/90 leading-relaxed">
                <span className="font-semibold text-amber-300">
                  Подсказка к сцене:
                </span>{' '}
                {currentScene.descriptionRu} Используйте эти реплики в диалоге!
              </div>

              {currentScene.sceneFormulas.map((f, i) => (
                <div
                  key={i}
                  className="p-3.5 bg-slate-800/70 border border-slate-700/60 rounded-xl flex items-start justify-between gap-3 hover:border-slate-600 transition-colors"
                >
                  <div className="space-y-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-base font-semibold text-amber-300">
                        {f.phraseEs}
                      </span>
                    </div>
                    <p className="text-sm text-slate-200 font-medium">
                      {f.phraseRu}
                    </p>
                    <p className="text-xs text-slate-400 italic">
                      Контекст: {f.note}
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5 shrink-0 pt-0.5">
                    <AudioButton text={f.phraseEs} size="sm" />
                    <button
                      onClick={() => handleCopy(f.phraseEs)}
                      title="Скопировать фразу"
                      className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-700/70 transition-colors"
                    >
                      {copiedText === f.phraseEs ? (
                        <Check size={14} className="text-emerald-400" />
                      ) : (
                        <Copy size={14} />
                      )}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'verbs' && (
            <div className="space-y-3">
              <div className="p-3 bg-sky-500/10 border border-sky-500/20 rounded-xl text-xs text-sky-200/90 leading-relaxed">
                <span className="font-semibold text-sky-300">
                  Правило без зубрежки:
                </span>{' '}
                Глаголы в разговорной речи запоминаются как готовые блоки. Ниже
                главные формулы с ser, estar, tener, gustar, ir.
              </div>

              {VERB_FORMULAS.filter((v) => v.verb !== 'pasado').map((v, i) => (
                <div
                  key={i}
                  className="p-3.5 bg-slate-800/70 border border-slate-700/60 rounded-xl flex items-start justify-between gap-3"
                >
                  <div className="space-y-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-sky-400 bg-sky-950/60 px-2 py-0.5 rounded border border-sky-800/50">
                        {v.verb}
                      </span>
                      <span className="text-sm sm:text-base font-semibold text-white">
                        {v.formulaEs}
                      </span>
                    </div>
                    <p className="text-sm text-slate-200">{v.formulaRu}</p>
                    <p className="text-xs text-slate-400 italic">
                      Когда уместно: {v.context}
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5 shrink-0 pt-0.5">
                    <AudioButton text={v.formulaEs} size="sm" />
                    <button
                      onClick={() => handleCopy(v.formulaEs)}
                      title="Скопировать"
                      className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-700/70 transition-colors"
                    >
                      {copiedText === v.formulaEs ? (
                        <Check size={14} className="text-emerald-400" />
                      ) : (
                        <Copy size={14} />
                      )}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'past' && (
            <div className="space-y-3">
              <div className="p-3 bg-purple-500/10 border border-purple-500/20 rounded-xl text-xs text-purple-200/90 leading-relaxed">
                <span className="font-semibold text-purple-300">
                  Прошедшее время как готовые формулы:
                </span>{' '}
                Не нужно спрягать глаголы по таблицам — достаточно помнить эти
                частые блоки о себе и друзьях.
              </div>

              {VERB_FORMULAS.filter((v) => v.verb === 'pasado').map((v, i) => (
                <div
                  key={i}
                  className="p-3.5 bg-slate-800/70 border border-slate-700/60 rounded-xl flex items-start justify-between gap-3"
                >
                  <div className="space-y-1 min-w-0">
                    <span className="text-sm sm:text-base font-semibold text-purple-300">
                      {v.formulaEs}
                    </span>
                    <p className="text-sm text-slate-200 font-medium">
                      {v.formulaRu}
                    </p>
                    <p className="text-xs text-slate-400 italic">
                      Ситуация: {v.context}
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5 shrink-0 pt-0.5">
                    <AudioButton text={v.formulaEs} size="sm" />
                    <button
                      onClick={() => handleCopy(v.formulaEs)}
                      title="Скопировать"
                      className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-700/70 transition-colors"
                    >
                      {copiedText === v.formulaEs ? (
                        <Check size={14} className="text-emerald-400" />
                      ) : (
                        <Copy size={14} />
                      )}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'nouns' && (
            <div className="space-y-3">
              <div className="p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-xl text-xs text-emerald-200/90 leading-relaxed">
                <span className="font-semibold text-emerald-300">
                  Важнейшее правило испанского языка:
                </span>{' '}
                Все существительные запоминаются обязательно с артиклем (
                <span className="font-mono text-emerald-300">el</span> — мужской
                род, <span className="font-mono text-emerald-300">la</span> —
                женский род).
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {NOUN_VOCABULARY.map((n, i) => (
                  <div
                    key={i}
                    className="p-3 bg-slate-800/60 border border-slate-700/50 rounded-xl flex items-center justify-between gap-2 hover:border-slate-600 transition-colors"
                  >
                    <div className="min-w-0">
                      <div className="flex items-center gap-1.5">
                        <span className="text-sm font-bold text-amber-300 truncate">
                          {n.spanish}
                        </span>
                      </div>
                      <p className="text-xs text-slate-300 truncate">
                        {n.russian}
                      </p>
                      <span className="text-[10px] text-slate-500">
                        {n.category}
                      </span>
                    </div>
                    <AudioButton text={n.spanish} size="sm" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'lifelines' && (
            <div className="space-y-3">
              <div className="p-3 bg-amber-500/10 border border-amber-500/20 rounded-xl text-xs text-amber-200/90 leading-relaxed">
                <span className="font-semibold text-amber-300">
                  Спасательный круг и факты о двух странах:
                </span>{' '}
                Готовые реплики для живой беседы: вопросы об Эквадоре, рассказ о России, спасательные фразы и связки.
              </div>

              {DIALOGUE_FORMULAS.map((formula) => (
                <div
                  key={formula.id}
                  className="p-3.5 bg-slate-800/70 border border-slate-700/60 rounded-xl flex items-start justify-between gap-3 hover:border-slate-600 transition-colors"
                >
                  <div className="space-y-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 bg-amber-950/70 px-2 py-0.5 rounded border border-amber-800/50">
                        {formula.categoryLabelRu}
                      </span>
                      <span className="text-sm sm:text-base font-semibold text-white">
                        {formula.phraseEs}
                      </span>
                    </div>
                    <p className="text-sm text-slate-200 font-medium">
                      {formula.phraseRu}
                    </p>
                    <p className="text-xs text-slate-400 italic">
                      {formula.situationalTipRu}
                    </p>
                    {formula.dialogueExample && (
                      <p className="text-xs text-amber-200/90 font-mono bg-slate-900/60 px-2.5 py-1 rounded-md border border-slate-700/40 mt-1">
                        {formula.dialogueExample.heroine}
                      </p>
                    )}
                  </div>
                  <div className="flex items-center gap-1.5 shrink-0 pt-0.5">
                    <AudioButton text={formula.phraseEs} size="sm" />
                    <button
                      onClick={() => handleCopy(formula.phraseEs)}
                      title="Скопировать"
                      className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-700/70 transition-colors cursor-pointer"
                    >
                      {copiedText === formula.phraseEs ? (
                        <Check size={14} className="text-emerald-400" />
                      ) : (
                        <Copy size={14} />
                      )}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer info */}
        <div className="p-3.5 border-t border-slate-800 bg-slate-950/60 flex items-center justify-between text-xs text-slate-400 shrink-0">
          <span className="flex items-center gap-1.5">
            <Sparkles size={14} className="text-amber-400" />
            <span>Шпаргалку можно открывать в любой момент диалога</span>
          </span>
          <button
            onClick={onClose}
            className="px-3.5 py-1.5 bg-slate-800 hover:bg-slate-700 text-white font-medium rounded-lg text-xs transition-colors cursor-pointer"
          >
            Вернуться к Матео
          </button>
        </div>
      </div>
    </div>
  );
};
