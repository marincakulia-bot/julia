import React, { useState, useEffect } from 'react';
import {
  RotateCcw,
  BookOpen,
  Languages,
  ArrowRight,
  Sparkles,
  History,
  X,
  Eye,
  EyeOff,
  MapPin,
  GraduationCap,
  Volume2,
  VolumeX
} from 'lucide-react';
import { SCENES } from '../data/dialogueScript';
import {
  DialogueChoice,
  MateoExpression,
  UsedPhrase,
} from '../types/dialogue';
import { MateoSprite } from './MateoSprite';
import { CheatSheetModal } from './CheatSheetModal';
import { SummaryScreen } from './SummaryScreen';
import { AudioButton } from './AudioButton';
import { speechService } from '../utils/speechService';

interface VisualNovelGameProps {
  onBackToTrainer?: () => void;
}

export const VisualNovelGame: React.FC<VisualNovelGameProps> = ({
  onBackToTrainer,
}) => {
  // Game state
  const [currentSceneIndex, setCurrentSceneIndex] = useState(0);
  const [currentExchangeIndex, setCurrentExchangeIndex] = useState(0);
  const [selectedChoice, setSelectedChoice] = useState<DialogueChoice | null>(null);
  const [usedPhrases, setUsedPhrases] = useState<UsedPhrase[]>([]);
  const [isGameOver, setIsGameOver] = useState(false);

  // UI state
  const [showTranslationMateo, setShowTranslationMateo] = useState(false);
  const [showOptionsTranslation, setShowOptionsTranslation] = useState(false);
  const [isCheatSheetOpen, setIsCheatSheetOpen] = useState(false);
  const [isHistoryOpen, setIsHistoryOpen] = useState(false);
  const [autoSpeakMateo, setAutoSpeakMateo] = useState(true);

  const currentScene = SCENES[currentSceneIndex];
  const currentExchange = currentScene?.exchanges[currentExchangeIndex];

  // Dynamic Mateo expression: during selection, use Mateo's initial line expression; after choice, use reaction expression
  const currentExpression: MateoExpression = selectedChoice
    ? selectedChoice.reactionExpression
    : currentExchange?.mateoExpression || 'smiling';

  // Calculate overall progress across 21 scenes
  const totalExchanges = SCENES.length;
  const completedExchanges = currentSceneIndex + (selectedChoice ? 1 : 0);
  const progressPercent = Math.min(
    100,
    Math.round((completedExchanges / totalExchanges) * 100)
  );

  // Auto-speak Mateo's prompt line on entering a new scene
  useEffect(() => {
    if (autoSpeakMateo && currentExchange && !selectedChoice) {
      const timer = setTimeout(() => {
        speechService.speak(
          currentExchange.mateoLineEs,
          `mateo-scene-${currentSceneIndex}`
        );
      }, 350);
      return () => clearTimeout(timer);
    }
  }, [currentSceneIndex, autoSpeakMateo]);

  // Handle user picking an answer
  const handleSelectChoice = (choice: DialogueChoice) => {
    setSelectedChoice(choice);

    // Speak Mateo's reaction naturally if autoSpeak is on
    if (autoSpeakMateo) {
      speechService.speak(
        choice.mateoReactionEs,
        `mateo-reaction-${choice.id}`
      );
    }

    // Record the used phrase for the summary screen
    const newUsedPhrase: UsedPhrase = {
      sceneId: currentScene.id,
      sceneTitle: currentScene.titleRu,
      exchangeIndex: currentExchangeIndex,
      type: choice.type,
      heroineTextEs: choice.textEs,
      heroineTextRu: choice.textRu,
      mateoReactionEs: choice.mateoReactionEs,
      mateoReactionRu: choice.mateoReactionRu,
      tipRu: choice.tipRu,
      timestamp: Date.now(),
    };

    setUsedPhrases((prev) => [...prev, newUsedPhrase]);
  };

  // Move to next step in the branching tree
  const handleNextStep = () => {
    speechService.stop();
    if (!currentScene) return;

    setShowTranslationMateo(false);

    if (currentExchangeIndex < currentScene.exchanges.length - 1) {
      // Next exchange within the same scene (if any)
      setCurrentExchangeIndex((prev) => prev + 1);
      setSelectedChoice(null);
    } else if (currentSceneIndex < SCENES.length - 1) {
      // Move to the next scene (21 scenes total)
      setCurrentSceneIndex((prev) => prev + 1);
      setCurrentExchangeIndex(0);
      setSelectedChoice(null);
    } else {
      // Reached the end of all 21 scenes
      setIsGameOver(true);
    }
  };

  // Restart game
  const handleRestart = () => {
    speechService.stop();
    setCurrentSceneIndex(0);
    setCurrentExchangeIndex(0);
    setSelectedChoice(null);
    setUsedPhrases([]);
    setIsGameOver(false);
    setShowTranslationMateo(false);
    setIsHistoryOpen(false);
  };

  if (isGameOver) {
    return (
      <div className="relative w-full min-h-screen bg-slate-950">
        <SummaryScreen
          usedPhrases={usedPhrases}
          onRestart={handleRestart}
          onOpenCheatSheet={() => setIsCheatSheetOpen(true)}
        />
        <CheatSheetModal
          isOpen={isCheatSheetOpen}
          onClose={() => setIsCheatSheetOpen(false)}
          currentScene={SCENES[0]}
        />
      </div>
    );
  }

  return (
    <div className="relative w-full h-[calc(100vh-3.5rem)] sm:h-[calc(100vh-4rem)] overflow-hidden bg-slate-950 flex flex-col justify-between select-none">
      {/* Background Illustration with gentle atmospheric zoom & overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={currentScene.bgImage}
          alt={currentScene.locationRu}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center filter brightness-[0.72] contrast-[1.08] transition-all duration-700"
        />
        {/* Soft vignette and lighting gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-slate-950/70" />
        <div className="absolute inset-0 bg-radial-at-c from-transparent via-transparent to-slate-950/80" />
      </div>

      {/* Sub-bar for the visual novel */}
      <div className="relative z-20 flex items-center justify-between px-3 sm:px-6 py-2 bg-slate-950/80 backdrop-blur-md border-b border-slate-800/80">
        {/* Scene Indicator & Progress Bar */}
        <div className="flex-1 max-w-lg flex flex-col gap-1">
          <div className="flex items-center justify-between text-[11px] sm:text-xs">
            <span className="font-semibold text-amber-300 truncate flex items-center gap-1.5">
              <span>{currentScene.titleRu}</span>
            </span>
            <span className="text-slate-400 shrink-0 ml-2 font-mono">
              Сцена {currentSceneIndex + 1} из {SCENES.length}
            </span>
          </div>
          {/* Progress bar line */}
          <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-amber-500 to-sky-400 transition-all duration-500 rounded-full"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0 ml-3">
          {/* Natural Voice Audio Toggle Button */}
          <button
            onClick={() => setAutoSpeakMateo(!autoSpeakMateo)}
            className={`flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg border text-xs font-semibold transition-all cursor-pointer ${
              autoSpeakMateo
                ? 'bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 border-emerald-500/40'
                : 'bg-slate-800/80 hover:bg-slate-700 text-slate-400 border-slate-700'
            }`}
            title={autoSpeakMateo ? 'Автоозвучка Матео включена (нажмите, чтобы выключить)' : 'Автоозвучка Матео выключена (нажмите, чтобы включить)'}
          >
            {autoSpeakMateo ? <Volume2 size={14} className="text-emerald-400" /> : <VolumeX size={14} />}
            <span className="hidden sm:inline">{autoSpeakMateo ? 'Озвучка: Вкл' : 'Озвучка: Выкл'}</span>
          </button>

          {onBackToTrainer && (
            <button
              onClick={onBackToTrainer}
              className="hidden sm:inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 text-xs font-medium transition-colors cursor-pointer"
              title="Вернуться к упражнениям"
            >
              <GraduationCap size={14} className="text-emerald-400" />
              <span>Тренажёр</span>
            </button>
          )}

          {/* Phrases Cheat Sheet Button */}
          <button
            onClick={() => setIsCheatSheetOpen(true)}
            className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/40 text-xs font-semibold transition-all cursor-pointer shadow-sm shadow-amber-500/10 active:scale-95"
            title="Открыть шпаргалку с формулами"
          >
            <BookOpen size={14} />
            <span className="hidden sm:inline">Шпаргалка</span>
          </button>

          {/* Dialogue History Log Button */}
          <button
            onClick={() => setIsHistoryOpen(true)}
            className="flex items-center gap-1 px-2 sm:px-2.5 py-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 text-xs font-medium transition-colors cursor-pointer"
            title="История реплик"
          >
            <History size={14} />
            <span className="hidden md:inline">История</span>
            {usedPhrases.length > 0 && (
              <span className="text-[10px] bg-sky-500/30 text-sky-300 px-1.5 py-0.2 rounded-full font-bold">
                {usedPhrases.length}
              </span>
            )}
          </button>

          {/* Restart Button */}
          <button
            onClick={handleRestart}
            className="p-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white border border-slate-700 transition-colors cursor-pointer"
            title="Начать сначала"
          >
            <RotateCcw size={14} />
          </button>
        </div>
      </div>

      {/* Main Stage: Scene & Mateo Sprite */}
      <main className="relative z-10 flex-1 flex flex-col justify-end items-center px-3 sm:px-6 pb-2 sm:pb-3 max-w-4xl w-full mx-auto overflow-hidden">
        {/* Location tag badge */}
        <div className="absolute top-2 left-4 z-10 flex items-center gap-1.5 bg-slate-900/80 backdrop-blur-md px-3 py-1 rounded-full border border-slate-800 text-[11px] text-slate-300 shadow-md">
          <MapPin size={12} className="text-amber-400 shrink-0" />
          <span className="font-medium text-white">{currentScene.locationRu}</span>
          <span className="text-slate-500">·</span>
          <span className="italic text-slate-400">{currentScene.locationEs}</span>
        </div>

        {/* Central Character Sprite */}
        <div className="w-full flex justify-center items-end flex-1 max-h-[38vh] sm:max-h-[44vh] mb-1 sm:mb-2 pointer-events-none">
          <MateoSprite
            expression={currentExpression}
          />
        </div>

        {/* Bottom Dialogue Box Container */}
        <div className="w-full z-20 space-y-2 sm:space-y-3">
          {/* Main Dialogue Console Card */}
          <div className="bg-slate-900/95 backdrop-blur-xl border border-slate-700/80 rounded-2xl sm:rounded-3xl p-4 sm:p-5 shadow-2xl space-y-3">
            {/* Speaker Header & Controls */}
            <div className="flex items-center justify-between gap-2 border-b border-slate-800/80 pb-2.5">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-md text-xs font-bold uppercase tracking-wider bg-amber-500/20 text-amber-300 border border-amber-500/30">
                  {selectedChoice ? 'Матео · Ответ' : 'Матео'}
                </span>
                <span className="text-xs text-slate-400">
                  {selectedChoice
                    ? 'Реакция на ваш выбор'
                    : 'Слушает и обращается к вам'}
                </span>
              </div>

              <div className="flex items-center gap-1.5">
                <AudioButton
                  text={
                    selectedChoice
                      ? selectedChoice.mateoReactionEs
                      : currentExchange.mateoLineEs
                  }
                  size="sm"
                  label="Слушать"
                />

                <button
                  onClick={() => setShowTranslationMateo((prev) => !prev)}
                  className={`inline-flex items-center gap-1 px-2.5 py-1 text-xs font-semibold rounded-lg border transition-all cursor-pointer ${
                    showTranslationMateo
                      ? 'bg-sky-500/20 text-sky-300 border-sky-500/40'
                      : 'bg-slate-800 text-slate-400 hover:text-slate-200 border-slate-700'
                  }`}
                  title="Показать русский перевод реплики"
                >
                  <Languages size={13} />
                  <span>Перевод</span>
                </button>
              </div>
            </div>

            {/* Mateo's Current Line */}
            <div className="space-y-1">
              <p className="text-base sm:text-xl font-semibold text-white leading-snug">
                «
                {selectedChoice
                  ? selectedChoice.mateoReactionEs
                  : currentExchange.mateoLineEs}
                »
              </p>

              {/* Translation (toggled or displayed) */}
              {showTranslationMateo && (
                <p className="text-xs sm:text-sm text-sky-300 font-medium italic pt-1 border-t border-slate-800/60 animate-in fade-in duration-150">
                  {selectedChoice
                    ? selectedChoice.mateoReactionRu
                    : currentExchange.mateoLineRu}
                </p>
              )}
            </div>

            {/* If heroine has selected an answer: Show Heroine speech balloon + pedagogical hint */}
            {selectedChoice && (
              <div className="space-y-2.5 pt-1 animate-in fade-in slide-in-from-bottom-2 duration-200">
                {/* Heroine's spoken line */}
                <div className="p-3 bg-slate-950/70 border border-amber-500/30 rounded-xl flex items-start justify-between gap-3">
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wider">
                        Вы сказали (Tú):
                      </span>
                      <span className="text-[10px] text-slate-400">
                        {selectedChoice.type === 'short' && '⚡ Короткий ответ'}
                        {selectedChoice.type === 'elaborated' &&
                          '💬 Развёрнутый с вопросом'}
                        {selectedChoice.type === 'shift' &&
                          '🔄 Вежливая смена темы'}
                      </span>
                    </div>
                    <p className="text-sm sm:text-base font-semibold text-white">
                      «{selectedChoice.textEs}»
                    </p>
                    <p className="text-xs text-slate-300">
                      {selectedChoice.textRu}
                    </p>
                  </div>
                  <AudioButton text={selectedChoice.textEs} size="sm" />
                </div>

                {/* Russian Pedagogical Tip Box (что именно сказали и почему уместно) */}
                <div className="p-3 bg-amber-500/10 border border-amber-500/25 rounded-xl space-y-1">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-amber-300">
                    <Sparkles size={14} />
                    <span>Разбор ситуации и формулы:</span>
                  </div>
                  <p className="text-xs sm:text-sm text-amber-100/90 leading-relaxed">
                    {selectedChoice.tipRu}
                  </p>
                </div>

                {/* Continue button */}
                <div className="flex justify-end pt-1">
                  <button
                    onClick={handleNextStep}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm shadow-lg shadow-amber-500/25 transition-all cursor-pointer active:scale-95"
                  >
                    <span>
                      {currentExchangeIndex < currentScene.exchanges.length - 1
                        ? 'Продолжить диалог'
                        : currentSceneIndex < SCENES.length - 1
                        ? 'Перейти к следующей сцене'
                        : 'Завершить концерт и подвести итоги'}
                    </span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Under Mateo's line: 3 Choice Buttons for Heroine (when awaiting choice) */}
          {!selectedChoice && (
            <div className="space-y-2 animate-in fade-in slide-in-from-bottom-2 duration-200">
              {/* Optional translation preview toggle */}
              <div className="flex items-center justify-between px-1 text-xs text-slate-400">
                <span className="font-medium text-slate-300">
                  Выберите ответ главной героини (3 типа реакции):
                </span>
                <button
                  onClick={() => setShowOptionsTranslation((prev) => !prev)}
                  className="inline-flex items-center gap-1 hover:text-white transition-colors cursor-pointer text-[11px]"
                >
                  {showOptionsTranslation ? (
                    <>
                      <EyeOff size={13} />
                      <span>Скрыть перевод вариантов</span>
                    </>
                  ) : (
                    <>
                      <Eye size={13} />
                      <span>Показать перевод вариантов</span>
                    </>
                  )}
                </button>
              </div>

              {/* 3 Answer Cards */}
              <div className="grid grid-cols-1 gap-2">
                {currentExchange.choices.map((choice) => {
                  const typeBadges = {
                    short: {
                      tag: '⚡ Короткий',
                      tagColor:
                        'bg-amber-500/20 text-amber-300 border-amber-500/30',
                      hoverBorder: 'hover:border-amber-400/80',
                    },
                    elaborated: {
                      tag: '💬 Развёрнутый с вопросом',
                      tagColor: 'bg-sky-500/20 text-sky-300 border-sky-500/30',
                      hoverBorder: 'hover:border-sky-400/80',
                    },
                    shift: {
                      tag: '🔄 Сменить тему',
                      tagColor:
                        'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
                      hoverBorder: 'hover:border-emerald-400/80',
                    },
                  };

                  const badge = typeBadges[choice.type];

                  return (
                    <button
                      key={choice.id}
                      onClick={() => handleSelectChoice(choice)}
                      className={`group w-full text-left p-3 sm:p-3.5 rounded-xl sm:rounded-2xl bg-slate-900/90 hover:bg-slate-850 border border-slate-700/80 shadow-lg transition-all duration-150 cursor-pointer flex items-center justify-between gap-3 active:scale-[0.99] ${badge.hoverBorder}`}
                    >
                      <div className="space-y-1 min-w-0 flex-1">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span
                            className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${badge.tagColor}`}
                          >
                            {badge.tag}
                          </span>
                        </div>
                        <p className="text-sm sm:text-base font-semibold text-white group-hover:text-amber-200 transition-colors">
                          {choice.textEs}
                        </p>
                        {showOptionsTranslation && (
                          <p className="text-xs text-slate-300 italic">
                            {choice.textRu}
                          </p>
                        )}
                      </div>

                      <div className="shrink-0 flex items-center gap-2">
                        <div className="w-7 h-7 rounded-lg bg-slate-800 group-hover:bg-amber-500 group-hover:text-slate-950 text-slate-400 flex items-center justify-center transition-colors">
                          <ArrowRight size={14} />
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Cheat Sheet Modal Component */}
      <CheatSheetModal
        isOpen={isCheatSheetOpen}
        onClose={() => setIsCheatSheetOpen(false)}
        currentScene={currentScene}
      />

      {/* Dialogue History Drawer */}
      {isHistoryOpen && (
        <div className="fixed inset-0 z-50 flex justify-end bg-slate-950/70 backdrop-blur-sm animate-in fade-in">
          <div className="w-full max-w-md h-full bg-slate-900 border-l border-slate-800 p-5 flex flex-col shadow-2xl animate-in slide-in-from-right duration-200">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <History size={18} className="text-sky-400" />
                <h3 className="font-bold text-white text-base">
                  История разговора
                </h3>
              </div>
              <button
                onClick={() => setIsHistoryOpen(false)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
              >
                <X size={18} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto py-4 space-y-3">
              {usedPhrases.length === 0 ? (
                <p className="text-xs text-slate-400 text-center py-8">
                  Вы ещё не выбрали ни одной реплики. История появится по ходу диалога!
                </p>
              ) : (
                usedPhrases.map((p, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-slate-950/70 border border-slate-800 space-y-1.5 text-xs"
                  >
                    <div className="text-[10px] text-amber-400 font-semibold">
                      {p.sceneTitle}
                    </div>
                    <div className="text-slate-200 font-medium">
                      <span className="text-amber-300 font-bold">Вы:</span> «
                      {p.heroineTextEs}»
                    </div>
                    <div className="text-slate-400 italic">{p.heroineTextRu}</div>
                    <div className="text-slate-200 pt-1 border-t border-slate-800/80">
                      <span className="text-sky-300 font-bold">Матео:</span> «
                      {p.mateoReactionEs}»
                    </div>
                  </div>
                ))
              )}
            </div>

            <div className="pt-3 border-t border-slate-800">
              <button
                onClick={() => setIsHistoryOpen(false)}
                className="w-full py-2 bg-slate-800 hover:bg-slate-700 text-white font-medium rounded-xl text-xs transition-colors"
              >
                Вернуться к разговору
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
