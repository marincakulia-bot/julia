import React, { useState } from 'react';
import {
  BookOpen,
  CheckCircle2,
  XCircle,
  HelpCircle,
  Sparkles,
  ArrowRight,
  RotateCcw,
  Volume2,
  Puzzle,
  AlertTriangle,
  MessageSquare,
  Award,
  Layers,
  ChevronRight,
  Eye,
  EyeOff,
  Flame,
  Globe2
} from 'lucide-react';
import {
  CONJUGATION_TABLE,
  SER_ESTAR_QUIZ,
  PHRASE_BUILDER_TASKS,
  ERROR_SPOTTER_ITEMS,
  SerEstarQuizQuestion,
  PhraseBuilderTask
} from '../data/grammarExercises';
import { AudioButton } from './AudioButton';
import { EcuadorSection } from './EcuadorSection';
import { DialoguePracticeCards } from './DialoguePracticeCards';

interface GrammarTrainerProps {
  onStartRoleplay: () => void;
}

type TrainerTab = 'theory' | 'quiz' | 'builder' | 'errors' | 'cards' | 'ecuador';

export const GrammarTrainer: React.FC<GrammarTrainerProps> = ({
  onStartRoleplay,
}) => {
  const [activeTab, setActiveTab] = useState<TrainerTab>('cards');

  // Quiz State (Smart Blitz mode: auto-advance on correct, pause and explain on wrong)
  const [currentQuizIndex, setCurrentQuizIndex] = useState(0);
  const [quizScore, setQuizScore] = useState(0);
  const [isQuizFinished, setIsQuizFinished] = useState(false);
  const [wrongAnswerState, setWrongAnswerState] = useState<{
    chosenOption: string;
    correctOption: string;
    ruleExplanationRu: string;
  } | null>(null);
  const [quizHistory, setQuizHistory] = useState<
    { question: SerEstarQuizQuestion; chosenOption: string; isCorrect: boolean }[]
  >([]);

  // Click handler: instant auto-advance on correct; pause & explain on wrong
  const handleQuizSelect = (option: string) => {
    if (isQuizFinished || wrongAnswerState !== null) return;

    const question = SER_ESTAR_QUIZ[currentQuizIndex];
    const isCorrect = option === question.correctOption;

    if (isCorrect) {
      // Correct: increment score, record history, and immediately go to next question
      setQuizScore((prev) => prev + 1);
      setQuizHistory((prev) => [
        ...prev,
        { question, chosenOption: option, isCorrect: true },
      ]);
      setWrongAnswerState(null);

      if (currentQuizIndex < SER_ESTAR_QUIZ.length - 1) {
        setCurrentQuizIndex((prev) => prev + 1);
      } else {
        setIsQuizFinished(true);
      }
    } else {
      // Incorrect: pause the test, show explanation and correct answer
      setQuizHistory((prev) => [
        ...prev,
        { question, chosenOption: option, isCorrect: false },
      ]);
      setWrongAnswerState({
        chosenOption: option,
        correctOption: question.correctOption,
        ruleExplanationRu: question.ruleExplanationRu,
      });
    }
  };

  // Continue to next question after reviewing mistake explanation
  const handleContinueAfterWrong = () => {
    setWrongAnswerState(null);

    if (currentQuizIndex < SER_ESTAR_QUIZ.length - 1) {
      setCurrentQuizIndex((prev) => prev + 1);
    } else {
      setIsQuizFinished(true);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuizIndex(0);
    setQuizScore(0);
    setIsQuizFinished(false);
    setWrongAnswerState(null);
    setQuizHistory([]);
  };

  // Builder State
  const [currentBuilderIndex, setCurrentBuilderIndex] = useState(0);
  const [selectedWords, setSelectedWords] = useState<string[]>([]);
  const [builderFeedback, setBuilderFeedback] = useState<'idle' | 'correct' | 'wrong'>('idle');
  const [builderCompletedCount, setBuilderCompletedCount] = useState(0);

  // Error Spotter State
  const [revealedErrors, setRevealedErrors] = useState<Record<string, boolean>>({});

  // Handlers for Phrase Builder
  const currentTask = PHRASE_BUILDER_TASKS[currentBuilderIndex];

  const handleAddWord = (word: string, index: number) => {
    if (builderFeedback === 'correct') return;
    setSelectedWords((prev) => [...prev, word]);
  };

  const handleRemoveWord = (index: number) => {
    if (builderFeedback === 'correct') return;
    setSelectedWords((prev) => prev.filter((_, i) => i !== index));
  };

  const handleCheckBuilderPhrase = () => {
    const constructed = selectedWords.join(' ');
    if (constructed.trim() === currentTask.correctPhrase.trim()) {
      setBuilderFeedback('correct');
      setBuilderCompletedCount((prev) => prev + 1);
    } else {
      setBuilderFeedback('wrong');
    }
  };

  const handleNextBuilderTask = () => {
    if (currentBuilderIndex < PHRASE_BUILDER_TASKS.length - 1) {
      setCurrentBuilderIndex((prev) => prev + 1);
      setSelectedWords([]);
      setBuilderFeedback('idle');
    }
  };

  const handleResetBuilderTask = () => {
    setSelectedWords([]);
    setBuilderFeedback('idle');
  };

  return (
    <div className="relative min-h-[calc(100vh-3.5rem)] sm:min-h-[calc(100vh-4rem)] bg-slate-950 text-slate-100 p-3 sm:p-6 md:p-8 flex flex-col items-center">
      {/* Background ambient lighting */}
      <div className="fixed inset-0 pointer-events-none opacity-20">
        <div className="absolute top-10 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 w-full max-w-4xl space-y-4">
        {/* Compact Header Deck */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 shadow-lg flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/40 text-amber-400 flex items-center justify-center font-bold text-lg shrink-0">
              🎴
            </div>
            <div>
              <h1 className="text-base sm:text-lg font-extrabold font-display text-white tracking-tight">
                Карточки для диалога & Тренажёр
              </h1>
              <p className="text-xs text-slate-400">
                Готовые реплики с переводом для практики с учителем и в игре
              </p>
            </div>
          </div>

          <button
            onClick={onStartRoleplay}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 text-slate-950 font-bold text-xs shadow-md transition-all cursor-pointer active:scale-95 shrink-0"
          >
            <span>В новеллу с Матео</span>
            <ArrowRight size={14} />
          </button>
        </div>

        {/* Sub-tab navigation bar (Cards are #1) */}
        <div className="flex items-center gap-1.5 sm:gap-2 p-1.5 bg-slate-900/90 border border-slate-800 rounded-2xl overflow-x-auto text-xs sm:text-sm font-medium">
          <button
            onClick={() => setActiveTab('cards')}
            className={`px-3.5 py-2 rounded-xl transition-all whitespace-nowrap cursor-pointer flex items-center gap-2 ${
              activeTab === 'cards'
                ? 'bg-amber-500 text-slate-950 font-bold shadow-md'
                : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            <Layers size={16} />
            <span>1. Карточки для диалога</span>
            <span className="text-[10px] bg-slate-950/60 px-1.5 py-0.5 rounded-full font-mono text-amber-300 font-bold">
              24
            </span>
          </button>

          <button
            onClick={() => setActiveTab('theory')}
            className={`px-3.5 py-2 rounded-xl transition-all whitespace-nowrap cursor-pointer flex items-center gap-2 ${
              activeTab === 'theory'
                ? 'bg-amber-500 text-slate-950 font-bold shadow-md'
                : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            <BookOpen size={16} />
            <span>2. Теория Ser & Estar</span>
          </button>

          <button
            onClick={() => setActiveTab('quiz')}
            className={`px-3.5 py-2 rounded-xl transition-all whitespace-nowrap cursor-pointer flex items-center gap-2 ${
              activeTab === 'quiz'
                ? 'bg-amber-500 text-slate-950 font-bold shadow-md'
                : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            <CheckCircle2 size={16} />
            <span>3. Блиц-тест</span>
            <span className="text-[10px] bg-slate-950/60 px-1.5 py-0.5 rounded-full font-mono">
              12
            </span>
          </button>

          <button
            onClick={() => setActiveTab('builder')}
            className={`px-3.5 py-2 rounded-xl transition-all whitespace-nowrap cursor-pointer flex items-center gap-2 ${
              activeTab === 'builder'
                ? 'bg-amber-500 text-slate-950 font-bold shadow-md'
                : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            <Puzzle size={16} />
            <span>4. Конструктор фраз</span>
            <span className="text-[10px] bg-slate-950/60 px-1.5 py-0.5 rounded-full font-mono">
              8
            </span>
          </button>

          <button
            onClick={() => setActiveTab('errors')}
            className={`px-3.5 py-2 rounded-xl transition-all whitespace-nowrap cursor-pointer flex items-center gap-2 ${
              activeTab === 'errors'
                ? 'bg-amber-500 text-slate-950 font-bold shadow-md'
                : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            <AlertTriangle size={16} />
            <span>5. Поиск ошибок</span>
            <span className="text-[10px] bg-slate-950/60 px-1.5 py-0.5 rounded-full font-mono">
              6
            </span>
          </button>

          <button
            onClick={() => setActiveTab('ecuador')}
            className={`px-3.5 py-2 rounded-xl transition-all whitespace-nowrap cursor-pointer flex items-center gap-2 ${
              activeTab === 'ecuador'
                ? 'bg-amber-500 text-slate-950 font-bold shadow-md'
                : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            <Globe2 size={16} />
            <span>6. Факты об Эквадоре 🇪🇨</span>
          </button>
        </div>

        {/* TAB 1: THEORY & CONJUGATION */}
        {activeTab === 'theory' && (
          <div className="space-y-6">
            {/* The Golden Rule Contrast Box */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* SER Box */}
              <div className="bg-slate-900/90 border border-amber-500/30 rounded-2xl p-5 space-y-3 shadow-lg">
                <div className="flex items-center justify-between">
                  <span className="text-xl font-extrabold text-amber-400 font-display">
                    Глагол SER
                  </span>
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/20">
                    Сущность и происхождение
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300">
                  Отвечает на вопрос: <span className="font-semibold text-white">«Кто я? Какой я по своей природе? Откуда я?»</span>
                </p>
                <ul className="text-xs text-slate-300 space-y-1.5 list-disc list-inside">
                  <li><span className="font-semibold text-amber-300">Происхождение:</span> Soy de Ecuador / ¿De dónde eres?</li>
                  <li><span className="font-semibold text-amber-300">Профессия и роль:</span> Mi amiga es música en la orquesta.</li>
                  <li><span className="font-semibold text-amber-300">Постоянные свойства:</span> El teatro es muy bonito.</li>
                  <li><span className="font-semibold text-amber-300">Отношения:</span> Nosotros somos amigos.</li>
                </ul>
              </div>

              {/* ESTAR Box */}
              <div className="bg-slate-900/90 border border-sky-500/30 rounded-2xl p-5 space-y-3 shadow-lg">
                <div className="flex items-center justify-between">
                  <span className="text-xl font-extrabold text-sky-400 font-display">
                    Глагол ESTAR
                  </span>
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-sky-500/10 text-sky-300 border border-sky-500/20">
                    Состояние и местоположение
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300">
                  Отвечает на вопрос: <span className="font-semibold text-white">«Где я нахожусь? Как я себя чувствую прямо сейчас?»</span>
                </p>
                <ul className="text-xs text-slate-300 space-y-1.5 list-disc list-inside">
                  <li><span className="font-semibold text-sky-300">Самочувствие и настроение:</span> ¿Cómo estás? — Estoy bien / genial.</li>
                  <li><span className="font-semibold text-sky-300">Физическое место:</span> Nuestros asientos están cerca del escenario.</li>
                  <li><span className="font-semibold text-sky-300">Эмоции в моменте:</span> Estoy muy emocionada por el concierto.</li>
                  <li><span className="font-semibold text-sky-300">Временное состояние:</span> La amiga está contenta.</li>
                </ul>
              </div>
            </div>

            {/* Conjugation Comparative Table */}
            <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-5 sm:p-6 shadow-xl space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-base sm:text-lg font-bold text-white font-display">
                    Сравнительная таблица спряжения
                  </h2>
                  <p className="text-xs text-slate-400">
                    Нажмите на динамик, чтобы прослушать произношение формы
                  </p>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead>
                    <tr className="border-b border-slate-800 text-slate-400 text-xs">
                      <th className="py-2.5 px-3">Местоимение</th>
                      <th className="py-2.5 px-3 text-amber-300 font-bold">SER</th>
                      <th className="py-2.5 px-3 text-sky-300 font-bold">ESTAR</th>
                      <th className="py-2.5 px-3 text-slate-300">Пример из нашей новеллы</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60">
                    {CONJUGATION_TABLE.map((row, idx) => (
                      <tr key={idx} className="hover:bg-slate-800/40 transition-colors">
                        <td className="py-3 px-3 font-semibold text-slate-200 whitespace-nowrap">
                          {row.pronoun}
                        </td>
                        <td className="py-3 px-3 whitespace-nowrap">
                          <div className="flex items-center gap-1.5">
                            <span className="font-bold text-amber-400 text-sm sm:text-base font-mono">
                              {row.ser}
                            </span>
                            <AudioButton text={row.ser} size="sm" />
                          </div>
                        </td>
                        <td className="py-3 px-3 whitespace-nowrap">
                          <div className="flex items-center gap-1.5">
                            <span className="font-bold text-sky-400 text-sm sm:text-base font-mono">
                              {row.estar}
                            </span>
                            <AudioButton text={row.estar} size="sm" />
                          </div>
                        </td>
                        <td className="py-3 px-3 text-slate-400 text-xs">
                          <div className="space-y-0.5">
                            <div><span className="text-amber-300/90 font-medium">{row.exampleSer}</span></div>
                            <div><span className="text-sky-300/90 font-medium">{row.exampleEstar}</span></div>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Quick Next CTA */}
            <div className="flex justify-end">
              <button
                onClick={() => setActiveTab('quiz')}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm shadow-md transition-colors cursor-pointer"
              >
                <span>Перейти к тесту (Задание 2)</span>
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        )}

        {/* TAB 2: INTERACTIVE BLITZ QUIZ (Auto-advances immediately on click) */}
        {activeTab === 'quiz' && (
          <div className="space-y-5">
            <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-5 sm:p-7 shadow-xl space-y-5">
              {!isQuizFinished ? (
                (() => {
                  const q = SER_ESTAR_QUIZ[currentQuizIndex];

                  return (
                    <div className="space-y-5">
                      {/* Blitz Header & Progress */}
                      <div className="flex items-center justify-between gap-3 border-b border-slate-800 pb-4">
                        <div className="space-y-0.5">
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                              Блиц-вопрос {currentQuizIndex + 1} из {SER_ESTAR_QUIZ.length}
                            </span>
                            <span className="text-[10px] bg-amber-500/10 text-amber-300 px-2 py-0.5 rounded-full border border-amber-500/20 font-medium">
                              ⚡ Мгновенный переход
                            </span>
                          </div>
                          <h2 className="text-lg sm:text-xl font-bold text-white font-display">
                            Выберите правильный глагол (ser или estar)
                          </h2>
                        </div>

                        <div className="text-right">
                          <span className="text-xs text-slate-400">Правильно:</span>
                          <div className="text-lg font-extrabold text-emerald-400 font-mono">
                            {quizScore} / {currentQuizIndex}
                          </div>
                        </div>
                      </div>

                      {/* Progress bar line */}
                      <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-amber-500 to-amber-300 transition-all duration-200 rounded-full"
                          style={{
                            width: `${((currentQuizIndex + 1) / SER_ESTAR_QUIZ.length) * 100}%`,
                          }}
                        />
                      </div>

                      {/* Category tag */}
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                          Тема: {q.contextTag}
                        </span>
                      </div>

                      {/* Sentence with blank */}
                      <div className="p-5 sm:p-7 rounded-2xl bg-slate-950/80 border border-slate-800 text-center space-y-2.5">
                        <div className="flex items-center justify-center gap-2">
                          <p className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white tracking-tight">
                            {q.sentenceWithBlank}
                          </p>
                          <AudioButton
                            text={q.sentenceWithBlank.replace('___', q.correctOption)}
                            size="md"
                          />
                        </div>
                        <p className="text-sm sm:text-base text-slate-400 italic">
                          {q.translationRu}
                        </p>
                      </div>

                      {/* 4 Options Grid */}
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-1">
                        {q.options.map((opt, i) => {
                          const isPaused = wrongAnswerState !== null;
                          const isChosenWrong = isPaused && opt === wrongAnswerState.chosenOption;
                          const isCorrect = isPaused && opt === wrongAnswerState.correctOption;

                          let btnClasses = 'bg-slate-800/90 hover:bg-amber-500 hover:text-slate-950 text-white border-slate-700/80 hover:border-amber-400';

                          if (isChosenWrong) {
                            btnClasses = 'bg-rose-500/20 text-rose-300 border-rose-500 line-through';
                          } else if (isCorrect) {
                            btnClasses = 'bg-emerald-500/25 text-emerald-300 border-emerald-500 shadow-md shadow-emerald-500/20 font-extrabold';
                          } else if (isPaused) {
                            btnClasses = 'bg-slate-900/50 text-slate-600 border-slate-800 opacity-40 cursor-not-allowed';
                          }

                          return (
                            <button
                              key={i}
                              disabled={isPaused}
                              onClick={() => handleQuizSelect(opt)}
                              className={`p-4 sm:p-5 rounded-2xl border font-mono text-lg sm:text-xl font-bold transition-all duration-150 flex items-center justify-center shadow-md shadow-slate-950/40 ${btnClasses} ${
                                !isPaused ? 'cursor-pointer active:scale-95' : ''
                              }`}
                            >
                              <span>{opt}</span>
                            </button>
                          );
                        })}
                      </div>

                      {/* Error Explanation Card when paused on wrong answer */}
                      {wrongAnswerState && (
                        <div className="p-4 sm:p-5 rounded-2xl bg-rose-500/10 border border-rose-500/30 text-rose-100 space-y-3 animate-in fade-in duration-200">
                          <div className="flex items-center gap-2 font-bold text-sm sm:text-base text-rose-300">
                            <XCircle size={20} className="text-rose-400 shrink-0" />
                            <span>
                              Неверно! Правильный ответ:{' '}
                              <span className="font-mono underline text-white px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 ml-1">
                                {wrongAnswerState.correctOption}
                              </span>
                            </span>
                          </div>

                          <div className="p-3 bg-slate-950/70 rounded-xl border border-slate-800 text-xs sm:text-sm text-slate-200 leading-relaxed">
                            <span className="font-bold text-amber-300">Пояснение правила:</span>{' '}
                            {wrongAnswerState.ruleExplanationRu}
                          </div>

                          <div className="flex justify-end pt-1">
                            <button
                              onClick={handleContinueAfterWrong}
                              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm shadow-md transition-all cursor-pointer active:scale-95"
                            >
                              <span>Понятно, следующий вопрос</span>
                              <ArrowRight size={16} />
                            </button>
                          </div>
                        </div>
                      )}

                      {/* Helper hint & Reset */}
                      <div className="flex items-center justify-between text-xs text-slate-400 pt-2 border-t border-slate-800/60">
                        <span className="italic text-slate-400">
                          Верный ответ переключает дальше автоматически. При ошибке тест останавливается с пояснением.
                        </span>

                        <button
                          onClick={handleRestartQuiz}
                          className="inline-flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors cursor-pointer"
                        >
                          <RotateCcw size={13} />
                          <span>Сбросить тест</span>
                        </button>
                      </div>
                    </div>
                  );
                })()
              ) : (
                /* Quiz Finished Result Screen */
                <div className="space-y-6 animate-in fade-in duration-200">
                  <div className="p-6 sm:p-8 rounded-3xl bg-slate-950/80 border border-amber-500/30 text-center space-y-3">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                      <CheckCircle2 size={14} />
                      <span>Блиц-тест завершён!</span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
                      Ваш результат: {quizScore} из {SER_ESTAR_QUIZ.length} ({Math.round((quizScore / SER_ESTAR_QUIZ.length) * 100)}%)
                    </h2>

                    <p className="text-sm text-slate-300 max-w-lg mx-auto leading-relaxed">
                      {quizScore >= 11
                        ? 'Превосходно! Разница между ser и estar усвоена на отлично. Можно переходить к фразам и визуальной новелле!'
                        : quizScore >= 8
                        ? 'Хороший результат! Вы уверенно различаете большинство ситуаций. Ниже можно посмотреть свои ответы.'
                        : 'Тест пройден! Рекомендуется взглянуть на ошибки ниже и повторить блиц ещё разок для закрепления.'}
                    </p>

                    <div className="flex flex-wrap items-center justify-center gap-3 pt-3">
                      <button
                        onClick={handleRestartQuiz}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs sm:text-sm border border-slate-700 transition-colors cursor-pointer"
                      >
                        <RotateCcw size={15} />
                        <span>Пройти блиц ещё раз</span>
                      </button>

                      <button
                        onClick={() => setActiveTab('builder')}
                        className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs sm:text-sm shadow-md transition-colors cursor-pointer"
                      >
                        <span>Перейти к конструктору фраз (Задание 3)</span>
                        <ArrowRight size={16} />
                      </button>
                    </div>
                  </div>

                  {/* Summary of all 12 questions */}
                  <div className="space-y-3">
                    <h3 className="text-sm font-bold text-slate-300 uppercase tracking-wider">
                      Итоги по вопросам:
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {quizHistory.map((item, idx) => (
                        <div
                          key={idx}
                          className={`p-3.5 rounded-xl border text-xs space-y-1.5 ${
                            item.isCorrect
                              ? 'bg-slate-950/60 border-emerald-500/30 text-slate-200'
                              : 'bg-rose-950/20 border-rose-500/30 text-rose-200'
                          }`}
                        >
                          <div className="flex items-center justify-between gap-2">
                            <span className="font-semibold text-slate-400">
                              Вопрос #{idx + 1}
                            </span>
                            {item.isCorrect ? (
                              <span className="flex items-center gap-1 text-emerald-400 font-bold text-[11px]">
                                <CheckCircle2 size={13} />
                                <span>Верно</span>
                              </span>
                            ) : (
                              <span className="flex items-center gap-1 text-rose-400 font-bold text-[11px]">
                                <XCircle size={13} />
                                <span>Ошибка</span>
                              </span>
                            )}
                          </div>

                          <p className="font-bold text-white text-sm">
                            {item.question.sentenceWithBlank.replace('___', item.question.correctOption)}
                          </p>

                          <div className="flex items-center gap-2 text-[11px]">
                            <span>Ваш ответ: <span className="font-mono font-bold">{item.chosenOption}</span></span>
                            {!item.isCorrect && (
                              <span className="text-emerald-300">
                                (Правильно: <span className="font-mono font-bold">{item.question.correctOption}</span>)
                              </span>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* TAB 3: PHRASE BUILDER */}
        {activeTab === 'builder' && (
          <div className="space-y-5">
            <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-5 sm:p-7 shadow-xl space-y-5">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div>
                  <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider">
                    Задание {currentBuilderIndex + 1} из {PHRASE_BUILDER_TASKS.length}
                  </span>
                  <h2 className="text-lg sm:text-xl font-bold text-white font-display">
                    Конструктор предложений из слов
                  </h2>
                </div>
                <div className="text-xs text-slate-400 font-mono">
                  Собрано: {builderCompletedCount} / {PHRASE_BUILDER_TASKS.length}
                </div>
              </div>

              {/* Prompt Box */}
              <div className="p-4 sm:p-5 rounded-2xl bg-slate-950/80 border border-slate-800 text-center space-y-1">
                <span className="text-xs text-slate-400">Соберите фразу на испанском для перевода:</span>
                <p className="text-lg sm:text-xl font-bold text-amber-300">
                  {currentTask.russianPrompt}
                </p>
              </div>

              {/* Drop / Assembly Area */}
              <div className="min-h-[70px] p-4 rounded-2xl bg-slate-900 border-2 border-dashed border-slate-700 flex flex-wrap items-center gap-2 justify-center">
                {selectedWords.length === 0 ? (
                  <span className="text-xs text-slate-500 italic">
                    Нажимайте на слова ниже по порядку, чтобы составить фразу...
                  </span>
                ) : (
                  selectedWords.map((word, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleRemoveWord(idx)}
                      className="px-3 py-1.5 rounded-xl bg-amber-500/20 hover:bg-rose-500/20 text-amber-200 hover:text-rose-200 border border-amber-500/40 text-sm font-semibold transition-all cursor-pointer shadow-sm animate-in zoom-in-90 duration-150"
                      title="Нажмите, чтобы убрать слово"
                    >
                      {word}
                    </button>
                  ))
                )}
              </div>

              {/* Available Words Pool */}
              <div className="space-y-2">
                <span className="text-xs text-slate-400">Доступные слова:</span>
                <div className="flex flex-wrap gap-2 justify-center">
                  {currentTask.wordsShuffled.map((word, idx) => {
                    // Check if word is already selected (count occurrences)
                    const timesSelected = selectedWords.filter((w) => w === word).length;
                    const timesInShuffled = currentTask.wordsShuffled.filter((w) => w === word).length;
                    const isAllUsed = timesSelected >= timesInShuffled;

                    return (
                      <button
                        key={idx}
                        disabled={isAllUsed || builderFeedback === 'correct'}
                        onClick={() => handleAddWord(word, idx)}
                        className={`px-3.5 py-2 rounded-xl text-sm font-medium border transition-all cursor-pointer ${
                          isAllUsed
                            ? 'bg-slate-950 text-slate-600 border-slate-800 opacity-40 cursor-not-allowed'
                            : 'bg-slate-800 hover:bg-slate-700 text-white border-slate-700 hover:border-amber-400 active:scale-95'
                        }`}
                      >
                        {word}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Feedback Alert */}
              {builderFeedback === 'correct' && (
                <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-200 space-y-1.5 animate-in fade-in">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 font-bold text-sm">
                      <CheckCircle2 size={18} className="text-emerald-400" />
                      <span>Отлично! Фраза собрана правильно:</span>
                    </div>
                    <AudioButton text={currentTask.correctPhrase} size="sm" />
                  </div>
                  <p className="text-base font-bold text-white font-mono">
                    «{currentTask.correctPhrase}»
                  </p>
                  <p className="text-xs text-emerald-300/90">{currentTask.tipRu}</p>
                </div>
              )}

              {builderFeedback === 'wrong' && (
                <div className="p-4 rounded-2xl bg-rose-500/10 border border-rose-500/30 text-rose-200 flex items-center justify-between animate-in fade-in">
                  <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold">
                    <XCircle size={18} className="text-rose-400 shrink-0" />
                    <span>Пока не совсем так. Попробуйте поменять порядок слов или начать заново.</span>
                  </div>
                  <button
                    onClick={handleResetBuilderTask}
                    className="text-xs font-bold underline hover:text-white cursor-pointer ml-2 shrink-0"
                  >
                    Сбросить
                  </button>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex items-center justify-between pt-2">
                <button
                  onClick={handleResetBuilderTask}
                  className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  <RotateCcw size={14} />
                  <span>Очистить поле</span>
                </button>

                {builderFeedback !== 'correct' ? (
                  <button
                    disabled={selectedWords.length === 0}
                    onClick={handleCheckBuilderPhrase}
                    className="px-6 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 disabled:opacity-40 disabled:cursor-not-allowed text-slate-950 font-bold text-sm transition-all cursor-pointer"
                  >
                    Проверить фразу
                  </button>
                ) : (
                  currentBuilderIndex < PHRASE_BUILDER_TASKS.length - 1 ? (
                    <button
                      onClick={handleNextBuilderTask}
                      className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm transition-all cursor-pointer"
                    >
                      <span>Следующая фраза</span>
                      <ArrowRight size={16} />
                    </button>
                  ) : (
                    <button
                      onClick={() => setActiveTab('errors')}
                      className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm transition-all cursor-pointer"
                    >
                      <span>Все фразы собраны! Перейти к поиску ошибок</span>
                      <ArrowRight size={16} />
                    </button>
                  )
                )}
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: ERROR SPOTTER */}
        {activeTab === 'errors' && (
          <div className="space-y-5">
            <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-5 sm:p-7 shadow-xl space-y-5">
              <div className="border-b border-slate-800 pb-3">
                <h2 className="text-lg sm:text-xl font-bold text-white font-display flex items-center gap-2">
                  <AlertTriangle size={20} className="text-amber-400" />
                  <span>Корректор: Найди типичную ошибку новичка</span>
                </h2>
                <p className="text-xs sm:text-sm text-slate-400">
                  Попробуйте самостоятельно догадаться, какое слово употреблено неверно, затем нажмите «Показать исправление».
                </p>
              </div>

              <div className="space-y-4">
                {ERROR_SPOTTER_ITEMS.map((item, idx) => {
                  const isRevealed = revealedErrors[item.id];

                  return (
                    <div
                      key={item.id}
                      className="p-4 sm:p-5 rounded-2xl bg-slate-950/70 border border-slate-800/80 space-y-3 hover:border-slate-700 transition-colors"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="space-y-1">
                          <span className="text-[11px] font-bold text-rose-400 uppercase tracking-wider">
                            Ошибка #{idx + 1}:
                          </span>
                          <p className="text-base sm:text-lg font-bold text-white font-mono">
                            «{item.badSentence}»
                          </p>
                          <p className="text-xs text-slate-400 italic">
                            Перевод, который имелся в виду: «{item.translationRu}»
                          </p>
                        </div>

                        <button
                          onClick={() =>
                            setRevealedErrors((prev) => ({
                              ...prev,
                              [item.id]: !prev[item.id],
                            }))
                          }
                          className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200 transition-colors cursor-pointer shrink-0"
                        >
                          {isRevealed ? 'Скрыть' : 'Показать разбор'}
                        </button>
                      </div>

                      {isRevealed && (
                        <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 space-y-2 animate-in fade-in duration-200">
                          <div className="flex items-center justify-between">
                            <div className="text-xs text-emerald-300 font-bold flex items-center gap-2">
                              <span>Правильно:</span>
                              <span className="text-sm font-bold text-white underline font-mono">
                                «{item.fixedSentence}»
                              </span>
                            </div>
                            <AudioButton text={item.fixedSentence} size="sm" />
                          </div>
                          <p className="text-xs text-slate-300 leading-relaxed">
                            {item.explanationRu}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* TAB 5: DIALOGUE PRACTICE CARDS (FLIP CAROUSEL & GRID MODE) */}
        {activeTab === 'cards' && (
          <DialoguePracticeCards onStartRoleplay={onStartRoleplay} />
        )}

        {/* TAB 6: ECUADOR FACTS & CONVERSATION BRIDGES */}
        {activeTab === 'ecuador' && (
          <EcuadorSection onStartRoleplay={onStartRoleplay} />
        )}

        {/* Bridge Box: Move to Roleplay Game */}
        <div className="bg-gradient-to-r from-amber-950/40 via-slate-900 to-sky-950/40 border border-amber-500/30 rounded-3xl p-6 shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="space-y-1">
            <h3 className="text-lg font-bold text-white font-display flex items-center justify-center sm:justify-start gap-2">
              <Flame size={20} className="text-amber-400" />
              <span>Готовы к живому диалогу с Матео?</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Вы отработали ser и estar! Теперь проверьте свои силы в сюжетной новелле на концерте русских народных инструментов.
            </p>
          </div>

          <button
            onClick={onStartRoleplay}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 text-slate-950 font-extrabold text-sm shadow-xl shadow-amber-500/20 transition-all cursor-pointer active:scale-95 shrink-0"
          >
            <span>Начать новеллу (21 сцена)</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};
