import React, { useState } from 'react';
import {
  Globe2,
  CheckCircle2,
  XCircle,
  Sparkles,
  ArrowRight,
  BookOpen,
  Volume2,
  Copy,
  Check,
  RotateCcw,
  HelpCircle,
  Compass,
  MessageCircle,
  Camera,
  Languages,
  Eye,
  EyeOff
} from 'lucide-react';
import {
  ECUADOR_FACTS_TEXT,
  TRUE_FALSE_QUESTIONS,
  SENTENCE_COMPLETION_TASKS,
  CONVERSATION_FORMULAS_ECUADOR,
  TrueFalseQuestion,
  SentenceCompletionTask
} from '../data/ecuadorFacts';
import { AudioButton } from './AudioButton';
import { ClickableSpanishText } from './ClickableSpanishText';

interface EcuadorSectionProps {
  onStartRoleplay: () => void;
}

export const EcuadorSection: React.FC<EcuadorSectionProps> = ({
  onStartRoleplay,
}) => {
  const [subTab, setSubTab] = useState<'text' | 'truefalse' | 'completion' | 'formulas'>('text');
  // Default to false so translation is not shown immediately
  const [showRussianTranslation, setShowRussianTranslation] = useState(false);
  const [revealedFactTranslations, setRevealedFactTranslations] = useState<Record<string, boolean>>({});

  const toggleFactTranslation = (factId: string) => {
    setRevealedFactTranslations((prev) => ({
      ...prev,
      [factId]: !prev[factId],
    }));
  };

  const toggleAllTranslations = () => {
    const nextState = !showRussianTranslation;
    setShowRussianTranslation(nextState);
    if (nextState) {
      const allRevealed: Record<string, boolean> = {};
      ECUADOR_FACTS_TEXT.forEach((f) => {
        allRevealed[f.id] = true;
      });
      setRevealedFactTranslations(allRevealed);
    } else {
      setRevealedFactTranslations({});
    }
  };

  // True/False interactive state
  const [tfAnswers, setTfAnswers] = useState<Record<string, boolean>>({});
  const [tfScore, setTfScore] = useState(0);

  // Sentence completion state
  const [completionAnswers, setCompletionAnswers] = useState<Record<string, string>>({});
  const [completionScore, setCompletionScore] = useState(0);

  // Copy indicator state
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleTfSelect = (questionId: string, answer: boolean, correctAnswer: boolean) => {
    if (tfAnswers[questionId] !== undefined) return;

    setTfAnswers((prev) => ({ ...prev, [questionId]: answer }));
    if (answer === correctAnswer) {
      setTfScore((prev) => prev + 1);
    }
  };

  const handleResetTf = () => {
    setTfAnswers({});
    setTfScore(0);
  };

  const handleCompletionSelect = (taskId: string, optionId: string, isCorrect: boolean) => {
    if (completionAnswers[taskId] !== undefined) return;

    setCompletionAnswers((prev) => ({ ...prev, [taskId]: optionId }));
    if (isCorrect) {
      setCompletionScore((prev) => prev + 1);
    }
  };

  const handleResetCompletion = () => {
    setCompletionAnswers({});
    setCompletionScore(0);
  };

  const handleCopyFormula = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      {/* Hero Header for Ecuador */}
      <div className="bg-gradient-to-r from-slate-900 via-amber-950/40 to-slate-900 border border-amber-500/30 rounded-3xl p-5 sm:p-7 shadow-xl space-y-3 relative overflow-hidden">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1.5 max-w-xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-300 border border-amber-500/20">
              <Globe2 size={14} />
              <span>Родина Матео · Эквадор 🇪🇨</span>
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white font-display">
              Факты об Эквадоре: подготовка к диалогу
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Узнайте увлекательные факты о родине Матео: почему там нет осени, где находится середина мира, и как поддержать душевную беседу с эквадорцем.
            </p>
          </div>

          <button
            onClick={onStartRoleplay}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs sm:text-sm shadow-lg shadow-amber-500/20 transition-all cursor-pointer active:scale-95 shrink-0"
          >
            <span>В новеллу к Матео</span>
            <ArrowRight size={16} />
          </button>
        </div>

        {/* Sub-navigation inside Ecuador Section */}
        <div className="flex items-center gap-1.5 pt-2 border-t border-slate-800/80 overflow-x-auto text-xs sm:text-sm">
          <button
            onClick={() => setSubTab('text')}
            className={`px-3 py-1.5 rounded-xl transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
              subTab === 'text'
                ? 'bg-amber-500 text-slate-950 font-bold shadow-sm'
                : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            <BookOpen size={14} />
            <span>1. Текст с фактами</span>
          </button>

          <button
            onClick={() => setSubTab('truefalse')}
            className={`px-3 py-1.5 rounded-xl transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
              subTab === 'truefalse'
                ? 'bg-amber-500 text-slate-950 font-bold shadow-sm'
                : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            <CheckCircle2 size={14} />
            <span>2. Правда или ложь?</span>
            <span className="text-[10px] bg-slate-950/70 px-1.5 py-0.5 rounded-full font-mono">
              6
            </span>
          </button>

          <button
            onClick={() => setSubTab('completion')}
            className={`px-3 py-1.5 rounded-xl transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
              subTab === 'completion'
                ? 'bg-amber-500 text-slate-950 font-bold shadow-sm'
                : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            <Compass size={14} />
            <span>3. Закончи начало фразы</span>
            <span className="text-[10px] bg-slate-950/70 px-1.5 py-0.5 rounded-full font-mono">
              5
            </span>
          </button>

          <button
            onClick={() => setSubTab('formulas')}
            className={`px-3 py-1.5 rounded-xl transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
              subTab === 'formulas'
                ? 'bg-amber-500 text-slate-950 font-bold shadow-sm'
                : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            <MessageCircle size={14} />
            <span>4. Речевые формулы для диалога</span>
          </button>
        </div>
      </div>

      {/* SUBTAB 1: TEXT WITH FACTS */}
      {subTab === 'text' && (
        <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-5 sm:p-7 shadow-xl space-y-6">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4 flex-wrap gap-3">
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-white font-display flex items-center gap-2">
                <span>Ecuador: el país de los cuatro mundos</span>
              </h3>
              <p className="text-xs text-slate-400">
                Читайте текст на испанском языке, слушайте естественную речь и открывайте перевод только при необходимости
              </p>
            </div>

            <button
              onClick={toggleAllTranslations}
              className="px-3.5 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-amber-300 border border-slate-700 transition-colors cursor-pointer flex items-center gap-1.5 active:scale-95 shadow-sm"
            >
              <Languages size={15} />
              <span>
                {showRussianTranslation
                  ? 'Скрыть перевод всех фактов'
                  : 'Показать перевод всех фактов'}
              </span>
            </button>
          </div>

          {/* Interactive word feature banner */}
          <div className="p-3 bg-amber-500/10 border border-amber-500/25 rounded-2xl flex items-center gap-2.5 text-xs text-amber-200/90 leading-relaxed">
            <Sparkles size={16} className="text-amber-400 shrink-0" />
            <span>
              <strong className="text-amber-300">Интерактивный словарь:</strong> Нажмите на любое испанское слово в тексте, чтобы увидеть его перевод, краткое значение и предлоги для глаголов (артикли и глаголы <em>ser</em> и <em>estar</em> намеренно исключены).
            </span>
          </div>

          <div className="space-y-6">
            {ECUADOR_FACTS_TEXT.map((fact) => {
              const isRevealed =
                showRussianTranslation || !!revealedFactTranslations[fact.id];

              return (
                <div
                  key={fact.id}
                  className="rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-slate-700/80 transition-all overflow-hidden shadow-lg group"
                >
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-0 items-stretch">
                    {/* Real photo of Ecuador */}
                    <div className="md:col-span-5 relative min-h-[220px] md:min-h-full bg-slate-900 overflow-hidden">
                      <img
                        src={fact.imageUrl}
                        alt={fact.photoCaptionRu}
                        className="w-full h-full object-cover min-h-[220px] transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/30 to-transparent flex items-end p-3.5">
                        <span className="text-[11px] sm:text-xs text-slate-200 font-medium flex items-center gap-1.5 backdrop-blur-md bg-slate-950/75 px-2.5 py-1.5 rounded-xl border border-slate-700/60 shadow-md">
                          <Camera size={13} className="text-amber-400 shrink-0" />
                          <span>{fact.photoCaptionRu}</span>
                        </span>
                      </div>
                    </div>

                    {/* Fact content & audio */}
                    <div className="md:col-span-7 p-4 sm:p-5 flex flex-col justify-between space-y-3.5">
                      <div className="space-y-2.5">
                        <div className="flex items-start justify-between gap-3 flex-wrap">
                          <div>
                            <span className="text-xs font-semibold text-amber-400/90 uppercase tracking-wider block">
                              {fact.titleRu}
                            </span>
                            <h4 className="text-base sm:text-lg font-bold text-white font-display">
                              {fact.titleEs}
                            </h4>
                          </div>
                          <AudioButton
                            text={fact.textEs}
                            size="sm"
                            label="Слушать речь"
                            id={`fact-${fact.id}`}
                          />
                        </div>

                        <div className="text-sm sm:text-base text-slate-100 font-medium leading-relaxed">
                          <ClickableSpanishText text={fact.textEs} />
                        </div>
                      </div>

                      {/* Translation controls */}
                      <div className="pt-2 border-t border-slate-800/80 space-y-2.5">
                        <div className="flex items-center justify-between gap-2">
                          <button
                            type="button"
                            onClick={() => toggleFactTranslation(fact.id)}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-xs font-semibold text-amber-300 hover:text-amber-200 border border-slate-700/70 transition-all cursor-pointer shadow-xs active:scale-95"
                          >
                            <Languages size={14} className="text-amber-400" />
                            <span>
                              {isRevealed ? 'Скрыть перевод' : 'Показать перевод'}
                            </span>
                          </button>
                          <span className="text-[11px] text-slate-400">
                            {isRevealed
                              ? 'Перевод открыт'
                              : 'Прочтите сначала по-испански!'}
                          </span>
                        </div>

                        {isRevealed && (
                          <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs sm:text-sm text-slate-200 leading-relaxed space-y-1.5 animate-in fade-in duration-200">
                            <p className="italic text-slate-300">
                              {fact.textRu}
                            </p>
                            <div className="text-xs text-amber-300 font-semibold flex items-center gap-1.5 pt-1.5 border-t border-amber-500/20">
                              <Sparkles size={13} className="shrink-0 text-amber-400" />
                              <span>Главный факт: {fact.highlightFactRu}</span>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex justify-end pt-2">
            <button
              onClick={() => setSubTab('truefalse')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm shadow-md transition-colors cursor-pointer active:scale-95"
            >
              <span>Проверить себя: Правда или ложь? (Задание 2)</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      )}

      {/* SUBTAB 2: TRUE / FALSE QUIZ */}
      {subTab === 'truefalse' && (
        <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-5 sm:p-7 shadow-xl space-y-6">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-white font-display">
                Правда или ложь? (Verdadero o Falso)
              </h3>
              <p className="text-xs text-slate-400">
                Определите, правдиво ли утверждение на основе прочитанного текста
              </p>
            </div>

            <div className="text-right">
              <span className="text-xs text-slate-400">Результат:</span>
              <div className="text-base sm:text-lg font-bold text-emerald-400 font-mono">
                {tfScore} / {TRUE_FALSE_QUESTIONS.length}
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {TRUE_FALSE_QUESTIONS.map((q, idx) => {
              const isAnswered = tfAnswers[q.id] !== undefined;
              const userAnswer = tfAnswers[q.id];
              const isUserCorrect = isAnswered && userAnswer === q.isTrue;

              return (
                <div
                  key={q.id}
                  className="p-4 sm:p-5 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-3"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-slate-400">
                          #{idx + 1}
                        </span>
                        <AudioButton text={q.statementEs} size="sm" />
                      </div>
                      <p className="text-sm sm:text-base font-bold text-white">
                        «{q.statementEs}»
                      </p>
                      <p className="text-xs text-slate-400 italic">
                        {q.statementRu}
                      </p>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <button
                        disabled={isAnswered}
                        onClick={() => handleTfSelect(q.id, true, q.isTrue)}
                        className={`px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold border transition-all cursor-pointer ${
                          isAnswered
                            ? q.isTrue
                              ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500 font-extrabold'
                              : userAnswer === true
                              ? 'bg-rose-500/20 text-rose-300 border-rose-500 line-through'
                              : 'bg-slate-900 text-slate-600 border-slate-800 opacity-40'
                            : 'bg-slate-800 hover:bg-slate-700 text-white border-slate-700 active:scale-95'
                        }`}
                      >
                        Verdadero (Правда)
                      </button>

                      <button
                        disabled={isAnswered}
                        onClick={() => handleTfSelect(q.id, false, q.isTrue)}
                        className={`px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold border transition-all cursor-pointer ${
                          isAnswered
                            ? !q.isTrue
                              ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500 font-extrabold'
                              : userAnswer === false
                              ? 'bg-rose-500/20 text-rose-300 border-rose-500 line-through'
                              : 'bg-slate-900 text-slate-600 border-slate-800 opacity-40'
                            : 'bg-slate-800 hover:bg-slate-700 text-white border-slate-700 active:scale-95'
                        }`}
                      >
                        Falso (Ложь)
                      </button>
                    </div>
                  </div>

                  {isAnswered && (
                    <div
                      className={`p-3 rounded-xl border text-xs sm:text-sm space-y-1 animate-in fade-in duration-200 ${
                        isUserCorrect
                          ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-200'
                          : 'bg-rose-500/10 border-rose-500/30 text-rose-200'
                      }`}
                    >
                      <div className="flex items-center gap-1.5 font-bold">
                        {isUserCorrect ? (
                          <>
                            <CheckCircle2 size={16} className="text-emerald-400" />
                            <span>Верно!</span>
                          </>
                        ) : (
                          <>
                            <XCircle size={16} className="text-rose-400" />
                            <span>Ошибка! Правильный ответ: {q.isTrue ? 'Правда (Verdadero)' : 'Ложь (Falso)'}</span>
                          </>
                        )}
                      </div>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        {q.explanationRu}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="flex items-center justify-between pt-2">
            <button
              onClick={handleResetTf}
              className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              <RotateCcw size={14} />
              <span>Сбросить ответы</span>
            </button>

            <button
              onClick={() => setSubTab('completion')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm shadow-md transition-colors cursor-pointer"
            >
              <span>К заданию «Закончи фразу» (Задание 3)</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      )}

      {/* SUBTAB 3: SENTENCE COMPLETION */}
      {subTab === 'completion' && (
        <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-5 sm:p-7 shadow-xl space-y-6">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-white font-display">
                Закончи начало фраз об Эквадоре
              </h3>
              <p className="text-xs text-slate-400">
                Выберите логичное и правильное продолжение предложения
              </p>
            </div>

            <div className="text-right">
              <span className="text-xs text-slate-400">Правильно:</span>
              <div className="text-base sm:text-lg font-bold text-emerald-400 font-mono">
                {completionScore} / {SENTENCE_COMPLETION_TASKS.length}
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {SENTENCE_COMPLETION_TASKS.map((task, idx) => {
              const selectedOptId = completionAnswers[task.id];
              const isAnswered = selectedOptId !== undefined;

              return (
                <div
                  key={task.id}
                  className="p-4 sm:p-5 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-3"
                >
                  <div className="space-y-1">
                    <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wider">
                      Фраза #{idx + 1}
                    </span>
                    <p className="text-base sm:text-lg font-bold text-white font-display">
                      «{task.beginningEs}»
                    </p>
                    <p className="text-xs text-slate-400 italic">
                      «{task.beginningRu}»
                    </p>
                  </div>

                  {/* Options */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1">
                    {task.options.map((opt) => {
                      let btnStyle = 'bg-slate-800/80 hover:bg-slate-750 text-white border-slate-700';

                      if (isAnswered) {
                        if (opt.isCorrect) {
                          btnStyle = 'bg-emerald-500/20 text-emerald-300 border-emerald-500 font-bold';
                        } else if (opt.id === selectedOptId) {
                          btnStyle = 'bg-rose-500/20 text-rose-300 border-rose-500 line-through';
                        } else {
                          btnStyle = 'bg-slate-900 text-slate-600 border-slate-800 opacity-40';
                        }
                      }

                      return (
                        <button
                          key={opt.id}
                          disabled={isAnswered}
                          onClick={() => handleCompletionSelect(task.id, opt.id, opt.isCorrect)}
                          className={`p-3 rounded-xl border text-left text-xs sm:text-sm transition-all cursor-pointer flex flex-col justify-between gap-1 ${btnStyle} ${
                            !isAnswered ? 'active:scale-95' : ''
                          }`}
                        >
                          <span className="font-semibold text-white font-mono">
                            {opt.textEs}
                          </span>
                          <span className="text-[11px] text-slate-400">
                            {opt.textRu}
                          </span>
                        </button>
                      );
                    })}
                  </div>

                  {isAnswered && (
                    <div className="text-xs text-slate-400 bg-slate-900 p-2.5 rounded-xl border border-slate-800">
                      💡 <span className="font-semibold text-amber-300">Факт:</span> {task.tipRu}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="flex items-center justify-between pt-2">
            <button
              onClick={handleResetCompletion}
              className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              <RotateCcw size={14} />
              <span>Начать заново</span>
            </button>

            <button
              onClick={onStartRoleplay}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm shadow-md transition-colors cursor-pointer active:scale-95"
            >
              <span>Перейти к речевым формулам (Вкладка 2)</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      )}

      {/* SUBTAB 4: CONVERSATION FORMULAS & LIFELINES */}
      {subTab === 'formulas' && (
        <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-5 sm:p-7 shadow-xl space-y-6">
          <div className="border-b border-slate-800 pb-3">
            <h3 className="text-lg sm:text-xl font-bold text-white font-display flex items-center gap-2">
              <MessageCircle size={20} className="text-amber-400" />
              <span>Речевые клише для беседы с Матео</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-400">
              Готовые разговорные формулы, с помощью которых вы сможете заговорить об Эквадоре или мягко попросить говорить помедленнее.
            </p>
          </div>

          <div className="space-y-4">
            {CONVERSATION_FORMULAS_ECUADOR.map((f) => (
              <div
                key={f.id}
                className="p-4 sm:p-5 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-2.5 hover:border-slate-700 transition-colors"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="space-y-1">
                    <p className="text-base sm:text-lg font-bold text-amber-300">
                      «{f.formulaEs}»
                    </p>
                    <p className="text-xs sm:text-sm text-slate-200 font-medium">
                      {f.formulaRu}
                    </p>
                  </div>

                  <div className="flex items-center gap-1.5 shrink-0">
                    <AudioButton text={f.formulaEs} size="sm" />
                    <button
                      onClick={() => handleCopyFormula(f.id, f.formulaEs)}
                      className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
                      title="Скопировать фразу"
                    >
                      {copiedId === f.id ? (
                        <Check size={14} className="text-emerald-400" />
                      ) : (
                        <Copy size={14} />
                      )}
                    </button>
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800/80 text-xs space-y-1">
                  <div className="text-slate-400 leading-relaxed">
                    <span className="font-semibold text-sky-300">Когда уместно:</span> {f.contextRu}
                  </div>
                  <div className="text-slate-300 italic pt-1 border-t border-slate-800/60 font-mono text-[11px]">
                    Пример: {f.exampleInDialogue}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA directly to the game */}
          <div className="p-5 rounded-2xl bg-gradient-to-r from-amber-500/20 via-slate-900 to-sky-500/20 border border-amber-500/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div className="space-y-0.5">
              <h4 className="font-bold text-white text-base">
                Теперь вы готовы ко всем темам в новелле!
              </h4>
              <p className="text-xs text-slate-300">
                Примените эти реплики в живом диалоге с Матео в филармонии.
              </p>
            </div>

            <button
              onClick={onStartRoleplay}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm shadow-lg shadow-amber-500/20 transition-all cursor-pointer active:scale-95 shrink-0"
            >
              <span>Запустить визуальную новеллу</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
