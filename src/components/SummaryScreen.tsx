import React, { useState } from 'react';
import {
  Trophy,
  RotateCcw,
  Sparkles,
  CheckCircle2,
  Copy,
  Check,
  MessageCircle,
  HelpCircle,
  Shuffle,
  BookOpen
} from 'lucide-react';
import { UsedPhrase } from '../types/dialogue';
import { AudioButton } from './AudioButton';

interface SummaryScreenProps {
  usedPhrases: UsedPhrase[];
  onRestart: () => void;
  onOpenCheatSheet: () => void;
}

export const SummaryScreen: React.FC<SummaryScreenProps> = ({
  usedPhrases,
  onRestart,
  onOpenCheatSheet,
}) => {
  const [copiedAll, setCopiedAll] = useState(false);
  const [filterType, setFilterType] = useState<'all' | 'elaborated' | 'short' | 'shift'>('all');

  const elaboratedCount = usedPhrases.filter((p) => p.type === 'elaborated').length;
  const shortCount = usedPhrases.filter((p) => p.type === 'short').length;
  const shiftCount = usedPhrases.filter((p) => p.type === 'shift').length;

  // Determine communication style
  let styleTitle = 'Гармоничный собеседник';
  let styleDesc =
    'Вы продемонстрировали отличный баланс: поддерживали глубокий контакт встречными вопросами, отвечали ёмко и вежливо переключали внимание в нужный момент!';
  let styleBadge = '💫 Баланс и тактичность';

  if (elaboratedCount >= 8) {
    styleTitle = 'Любознательный и чуткий собеседник';
    styleDesc =
      'Вы задавали Матео много встречных вопросов и делились своими эмоциями. В испаноязычной культуре это невероятно ценится — диалог получился живым, глубоким и дружеским!';
    styleBadge = '🌟 Максимальный контакт';
  } else if (shiftCount >= 6) {
    styleTitle = 'Мастер дипломатичной беседы';
    styleDesc =
      'Вы мастерски направляли разговор, обращали внимание на обстановку, оркестр, концертный этикет и заботились о комфорте собеседника!';
    styleBadge = '🎯 Гибкость и тактичность';
  } else if (shortCount >= 7) {
    styleTitle = 'Лаконичный и точный собеседник';
    styleDesc =
      'Вы говорили уверенно, кратко и по существу, используя проверенные короткие формулы испанского языка. Это признак чёткой коммуникации!';
    styleBadge = '⚡ Чёткость и ясность';
  }

  const handleCopyAll = () => {
    const text = usedPhrases
      .map(
        (p, idx) =>
          `${idx + 1}. [${p.sceneTitle}]\nГероиня: ${p.heroineTextEs} (${p.heroineTextRu})\nМатео: ${p.mateoReactionEs} (${p.mateoReactionRu})\nПодсказка: ${p.tipRu}\n`
      )
      .join('\n');

    navigator.clipboard.writeText(text);
    setCopiedAll(true);
    setTimeout(() => setCopiedAll(false), 2500);
  };

  const filteredPhrases =
    filterType === 'all'
      ? usedPhrases
      : usedPhrases.filter((p) => p.type === filterType);

  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-100 flex flex-col items-center p-4 sm:p-6 md:p-8 overflow-y-auto">
      {/* Background ambient lighting */}
      <div className="fixed inset-0 pointer-events-none opacity-40">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-sky-600/10 rounded-full blur-3xl" />
      </div>

      <div className="relative w-full max-w-3xl z-10 space-y-6 sm:space-y-8 my-auto py-6">
        {/* Celebration Header Card */}
        <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-amber-950/40 border border-amber-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden text-center sm:text-left">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 sm:gap-6">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-amber-500/20 text-amber-400 flex items-center justify-center border border-amber-500/40 shadow-inner shrink-0">
              <Trophy size={36} className="text-amber-400 animate-pulse" />
            </div>

            <div className="space-y-2 flex-1">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-300 border border-amber-500/30">
                <Sparkles size={13} />
                <span>Концерт успешно завершён</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold font-display tracking-tight text-white">
                ¡Misión cumplida! Отличный вечер!
              </h1>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Вы прошли через все 21 сцену: от встречи в фойе филармонии до прощания на вечерней улице.
                Матео остался в восторге от общения с вами и от музыки вашей подруги.
              </p>
            </div>
          </div>

          {/* Style Personality Box */}
          <div className="mt-6 p-4 sm:p-5 rounded-2xl bg-slate-950/70 border border-slate-800 text-left space-y-2">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <span className="text-xs uppercase tracking-wider font-bold text-slate-400">
                Ваш стиль общения с Матео:
              </span>
              <span className="text-xs font-semibold text-amber-300 bg-amber-500/10 px-2.5 py-0.5 rounded-full border border-amber-500/20">
                {styleBadge}
              </span>
            </div>
            <h2 className="text-lg font-bold text-white font-display">
              {styleTitle}
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              {styleDesc}
            </p>

            {/* Metric pill indicators */}
            <div className="grid grid-cols-3 gap-2 pt-3 border-t border-slate-800/80 text-center">
              <div className="p-2 rounded-xl bg-slate-900/80 border border-slate-800">
                <div className="text-lg sm:text-xl font-extrabold text-sky-400 font-display">
                  {elaboratedCount}
                </div>
                <div className="text-[11px] text-slate-400">Развёрнутых с вопросом</div>
              </div>
              <div className="p-2 rounded-xl bg-slate-900/80 border border-slate-800">
                <div className="text-lg sm:text-xl font-extrabold text-amber-400 font-display">
                  {shortCount}
                </div>
                <div className="text-[11px] text-slate-400">Лаконичных ответов</div>
              </div>
              <div className="p-2 rounded-xl bg-slate-900/80 border border-slate-800">
                <div className="text-lg sm:text-xl font-extrabold text-emerald-400 font-display">
                  {shiftCount}
                </div>
                <div className="text-[11px] text-slate-400">Вежливых смен темы</div>
              </div>
            </div>
          </div>
        </div>

        {/* Phrases List Section */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-5 sm:p-7 shadow-xl space-y-5">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div>
              <h2 className="text-lg sm:text-xl font-bold font-display text-white flex items-center gap-2">
                <CheckCircle2 size={20} className="text-emerald-400" />
                <span>Фразы, которые вы использовали ({usedPhrases.length})</span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-400">
                Нажмите на динамик, чтобы прослушать произношение каждой формулы
              </p>
            </div>

            <div className="flex items-center gap-2 self-stretch sm:self-auto">
              <button
                onClick={handleCopyAll}
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white border border-slate-700 transition-colors cursor-pointer"
              >
                {copiedAll ? (
                  <>
                    <Check size={14} className="text-emerald-400" />
                    <span>Скопировано в буфер!</span>
                  </>
                ) : (
                  <>
                    <Copy size={14} />
                    <span>Скопировать все фразы</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Filter Segmented Control */}
          <div className="flex items-center gap-1 p-1 bg-slate-950 rounded-xl border border-slate-800/80 text-xs overflow-x-auto">
            <button
              onClick={() => setFilterType('all')}
              className={`px-3 py-1.5 rounded-lg font-medium transition-colors whitespace-nowrap cursor-pointer ${
                filterType === 'all'
                  ? 'bg-slate-800 text-white font-semibold'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Все ({usedPhrases.length})
            </button>
            <button
              onClick={() => setFilterType('elaborated')}
              className={`px-3 py-1.5 rounded-lg font-medium transition-colors whitespace-nowrap cursor-pointer flex items-center gap-1 ${
                filterType === 'elaborated'
                  ? 'bg-sky-500/20 text-sky-300 font-semibold border border-sky-500/30'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <MessageCircle size={12} />
              <span>Развёрнутые ({elaboratedCount})</span>
            </button>
            <button
              onClick={() => setFilterType('short')}
              className={`px-3 py-1.5 rounded-lg font-medium transition-colors whitespace-nowrap cursor-pointer flex items-center gap-1 ${
                filterType === 'short'
                  ? 'bg-amber-500/20 text-amber-300 font-semibold border border-amber-500/30'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <HelpCircle size={12} />
              <span>Короткие ({shortCount})</span>
            </button>
            <button
              onClick={() => setFilterType('shift')}
              className={`px-3 py-1.5 rounded-lg font-medium transition-colors whitespace-nowrap cursor-pointer flex items-center gap-1 ${
                filterType === 'shift'
                  ? 'bg-emerald-500/20 text-emerald-300 font-semibold border border-emerald-500/30'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Shuffle size={12} />
              <span>Смена темы ({shiftCount})</span>
            </button>
          </div>

          {/* List of cards */}
          <div className="space-y-3">
            {filteredPhrases.map((phrase, index) => {
              const typeBadges = {
                short: { label: 'Короткий ответ', color: 'text-amber-300 bg-amber-500/10 border-amber-500/20' },
                elaborated: { label: 'Развёрнутый с вопросом', color: 'text-sky-300 bg-sky-500/10 border-sky-500/20' },
                shift: { label: 'Вежливая смена темы', color: 'text-emerald-300 bg-emerald-500/10 border-emerald-500/20' },
              };

              return (
                <div
                  key={index}
                  className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800/80 space-y-2.5 hover:border-slate-700 transition-colors"
                >
                  <div className="flex items-center justify-between gap-2 flex-wrap">
                    <span className="text-[11px] font-semibold text-slate-400">
                      {phrase.sceneTitle} · Реплика {phrase.exchangeIndex + 1}
                    </span>
                    <span
                      className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${typeBadges[phrase.type].color}`}
                    >
                      {typeBadges[phrase.type].label}
                    </span>
                  </div>

                  {/* Heroine Line */}
                  <div className="flex items-start justify-between gap-3 bg-slate-900/80 p-3 rounded-xl border border-slate-800">
                    <div className="space-y-0.5">
                      <div className="text-xs font-semibold text-amber-400">
                        Ваша реплика (Tú):
                      </div>
                      <div className="text-sm sm:text-base font-bold text-white">
                        {phrase.heroineTextEs}
                      </div>
                      <div className="text-xs text-slate-300">
                        {phrase.heroineTextRu}
                      </div>
                    </div>
                    <AudioButton text={phrase.heroineTextEs} size="sm" />
                  </div>

                  {/* Mateo reaction */}
                  <div className="flex items-start justify-between gap-3 bg-slate-900/40 p-2.5 rounded-xl border border-slate-800/60">
                    <div className="space-y-0.5">
                      <div className="text-[11px] font-semibold text-sky-400">
                        Реакция Матео:
                      </div>
                      <div className="text-xs sm:text-sm font-medium text-slate-200">
                        {phrase.mateoReactionEs}
                      </div>
                      <div className="text-xs text-slate-400">
                        {phrase.mateoReactionRu}
                      </div>
                    </div>
                    <AudioButton text={phrase.mateoReactionEs} size="sm" />
                  </div>

                  {/* Pedagogical Hint */}
                  <div className="text-xs text-slate-400 bg-amber-500/5 p-2.5 rounded-lg border border-amber-500/10 leading-relaxed">
                    <span className="font-semibold text-amber-300">
                      Контекст и этикет:
                    </span>{' '}
                    {phrase.tipRu}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Action Buttons Footer */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
          <button
            onClick={onOpenCheatSheet}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white font-semibold text-sm border border-slate-700 transition-colors cursor-pointer"
          >
            <BookOpen size={16} />
            <span>Открыть всю шпаргалку</span>
          </button>

          <button
            onClick={onRestart}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm shadow-lg shadow-amber-500/20 transition-all cursor-pointer active:scale-95"
          >
            <RotateCcw size={16} />
            <span>Пройти диалог заново (новые ветки)</span>
          </button>
        </div>
      </div>
    </div>
  );
};
