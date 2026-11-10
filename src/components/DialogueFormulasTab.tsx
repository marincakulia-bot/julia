import React, { useState } from 'react';
import {
  MessageSquareQuote,
  Sparkles,
  Copy,
  Check,
  Search,
  ArrowRight,
  LifeBuoy,
  Globe2,
  MapPin,
  MessageCircle,
  Zap,
  BookOpen,
  Filter
} from 'lucide-react';
import {
  DIALOGUE_FORMULAS,
  DialogueFormulaItem,
  FormulaCategory
} from '../data/dialogueFormulasData';
import { AudioButton } from './AudioButton';

interface DialogueFormulasTabProps {
  onStartRoleplay: () => void;
}

export const DialogueFormulasTab: React.FC<DialogueFormulasTabProps> = ({
  onStartRoleplay,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<FormulaCategory | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const categories: { id: FormulaCategory | 'all'; label: string; icon: React.ReactNode; count: number }[] = [
    {
      id: 'all',
      label: 'Все формулы',
      icon: <BookOpen size={14} />,
      count: DIALOGUE_FORMULAS.length
    },
    {
      id: 'lifeline',
      label: 'Спасательный круг',
      icon: <LifeBuoy size={14} className="text-amber-400" />,
      count: DIALOGUE_FORMULAS.filter((f) => f.category === 'lifeline').length
    },
    {
      id: 'ecuador',
      label: 'Факты об Эквадоре 🇪🇨',
      icon: <Globe2 size={14} className="text-yellow-400" />,
      count: DIALOGUE_FORMULAS.filter((f) => f.category === 'ecuador').length
    },
    {
      id: 'russia',
      label: 'Факты о России 🇷🇺',
      icon: <MapPin size={14} className="text-sky-400" />,
      count: DIALOGUE_FORMULAS.filter((f) => f.category === 'russia').length
    },
    {
      id: 'reactions',
      label: 'Разговорные связки',
      icon: <MessageCircle size={14} className="text-emerald-400" />,
      count: DIALOGUE_FORMULAS.filter((f) => f.category === 'reactions').length
    },
    {
      id: 'ser_estar',
      label: 'Ser & Estar',
      icon: <Zap size={14} className="text-purple-400" />,
      count: DIALOGUE_FORMULAS.filter((f) => f.category === 'ser_estar').length
    }
  ];

  const filteredFormulas = DIALOGUE_FORMULAS.filter((item) => {
    const matchesCategory =
      selectedCategory === 'all' || item.category === selectedCategory;
    const query = searchQuery.toLowerCase().trim();
    const matchesSearch =
      !query ||
      item.phraseEs.toLowerCase().includes(query) ||
      item.phraseRu.toLowerCase().includes(query) ||
      item.contextRu.toLowerCase().includes(query);

    return matchesCategory && matchesSearch;
  });

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-8 space-y-6 animate-in fade-in duration-200">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-amber-950/40 to-slate-900 border border-amber-500/30 rounded-3xl p-5 sm:p-7 shadow-xl relative overflow-hidden">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/15 text-amber-300 border border-amber-500/30">
              <MessageSquareQuote size={14} />
              <span>Шпаргалка живой речи перед игрой</span>
            </div>
            <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white font-display">
              Речевые формулы для диалога с Матео
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Готовые разговорные фразы без сложных таблиц: как попросить говорить помедленнее, как поддержать разговор об Эквадоре, как рассказать о России и как естественно реагировать на реплики собеседника.
            </p>
          </div>

          <button
            onClick={onStartRoleplay}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm shadow-lg shadow-amber-500/25 transition-all cursor-pointer active:scale-95 shrink-0"
          >
            <span>В ролевую игру к Матео</span>
            <ArrowRight size={17} />
          </button>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-3 sm:p-4 shadow-md space-y-3">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 text-xs font-medium">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 rounded-xl transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                  selectedCategory === cat.id
                    ? 'bg-amber-500 text-slate-950 font-bold shadow-sm'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/80'
                }`}
              >
                {cat.icon}
                <span>{cat.label}</span>
                <span className="text-[10px] bg-slate-950/60 px-1.5 py-0.5 rounded-full font-mono">
                  {cat.count}
                </span>
              </button>
            ))}
          </div>

          {/* Search box */}
          <div className="relative min-w-[200px] sm:min-w-[240px]">
            <Search
              size={15}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
            />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Поиск по фразе или смыслу..."
              className="w-full pl-9 pr-3 py-1.5 rounded-xl bg-slate-950/80 border border-slate-700/80 text-xs sm:text-sm text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-amber-500 transition-colors"
            />
          </div>
        </div>
      </div>

      {/* Formulas Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredFormulas.map((item) => {
          const categoryColors: Record<FormulaCategory, string> = {
            lifeline: 'bg-amber-950/60 text-amber-300 border-amber-800/60',
            ecuador: 'bg-yellow-950/60 text-yellow-300 border-yellow-800/60',
            russia: 'bg-sky-950/60 text-sky-300 border-sky-800/60',
            reactions: 'bg-emerald-950/60 text-emerald-300 border-emerald-800/60',
            ser_estar: 'bg-purple-950/60 text-purple-300 border-purple-800/60'
          };

          return (
            <div
              key={item.id}
              className="rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-slate-700 p-4 sm:p-5 flex flex-col justify-between space-y-3.5 transition-all shadow-md group"
            >
              <div className="space-y-2.5">
                {/* Header row: badge + audio + copy */}
                <div className="flex items-center justify-between gap-2 flex-wrap">
                  <span
                    className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full border ${
                      categoryColors[item.category]
                    }`}
                  >
                    {item.categoryLabelRu}
                  </span>

                  <div className="flex items-center gap-1.5">
                    <AudioButton text={item.phraseEs} size="sm" id={`tab-${item.id}`} />
                    <button
                      onClick={() => handleCopy(item.id, item.phraseEs)}
                      title="Скопировать фразу"
                      className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
                    >
                      {copiedId === item.id ? (
                        <Check size={14} className="text-emerald-400" />
                      ) : (
                        <Copy size={14} />
                      )}
                    </button>
                  </div>
                </div>

                {/* Spanish formula */}
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white font-display leading-snug">
                    {item.phraseEs}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 font-medium pt-1">
                    {item.phraseRu}
                  </p>
                </div>

                {/* Pedagogical tip */}
                <div className="p-2.5 rounded-xl bg-slate-950/60 border border-slate-800/80 text-xs text-slate-400 space-y-1">
                  <p className="leading-relaxed">
                    <span className="text-amber-400 font-medium">Контекст:</span>{' '}
                    {item.situationalTipRu}
                  </p>
                  {item.keyGrammarOrVocab && (
                    <p className="text-[11px] text-sky-300 font-mono pt-0.5">
                      Ключевой элемент: {item.keyGrammarOrVocab}
                    </p>
                  )}
                </div>
              </div>

              {/* Dialogue example with Mateo */}
              <div className="pt-2 border-t border-slate-800/80 space-y-1 text-xs">
                <span className="text-[10px] uppercase font-bold tracking-wider text-slate-500">
                  Пример в живом разговоре:
                </span>
                <p className="text-amber-200/90 font-medium italic">
                  {item.dialogueExample.heroine}
                </p>
                <p className="text-slate-300 italic">
                  {item.dialogueExample.mateo}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {filteredFormulas.length === 0 && (
        <div className="p-8 text-center bg-slate-900/60 border border-slate-800 rounded-2xl text-slate-400 space-y-2">
          <p className="text-sm">Ничего не найдено по вашему запросу «{searchQuery}»</p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('all');
            }}
            className="text-xs text-amber-400 hover:underline cursor-pointer"
          >
            Сбросить фильтры поиска
          </button>
        </div>
      )}

      {/* Bottom CTA Card */}
      <div className="bg-gradient-to-r from-amber-500/10 via-slate-900 to-amber-500/10 border border-amber-500/30 rounded-3xl p-5 sm:p-7 text-center space-y-3 shadow-xl">
        <h3 className="text-lg sm:text-xl font-bold text-white font-display flex items-center justify-center gap-2">
          <Sparkles size={18} className="text-amber-400" />
          <span>Готовы применить эти формулы в живом диалоге?</span>
        </h3>
        <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">
          В ролевой игре вас ждёт Матео! Вы сможете поддержать разговор о погоде, спросить об Эквадоре, сравнить с Россией и комфортно чувствовать себя в концертном зале.
        </p>
        <div className="pt-1">
          <button
            onClick={onStartRoleplay}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm shadow-lg shadow-amber-500/20 transition-all cursor-pointer active:scale-95"
          >
            <span>Начать ролевую игру с Матео</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};
