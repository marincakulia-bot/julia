import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Sparkles } from 'lucide-react';
import { speechService } from '../utils/speechService';

interface AudioButtonProps {
  text: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  label?: string;
  id?: string;
}

export const AudioButton: React.FC<AudioButtonProps> = ({
  text,
  size = 'md',
  className = '',
  label,
  id
}) => {
  const speechId = id || text;
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [voiceName, setVoiceName] = useState<string>('');

  useEffect(() => {
    // Check initial voice
    const activeVoice = speechService.getActiveVoice();
    if (activeVoice) {
      setVoiceName(activeVoice.name);
    }

    const unsubscribe = speechService.subscribe(() => {
      setIsSpeaking(speechService.isSpeaking(speechId));
      const v = speechService.getActiveVoice();
      if (v) setVoiceName(v.name);
    });

    return () => {
      unsubscribe();
    };
  }, [speechId]);

  const handleSpeak = (e: React.MouseEvent) => {
    e.stopPropagation();

    if (isSpeaking) {
      speechService.stop();
    } else {
      speechService.speak(
        text,
        speechId,
        () => setIsSpeaking(false),
        () => setIsSpeaking(false)
      );
    }
  };

  const sizeClasses = {
    sm: 'p-1.5 text-xs',
    md: 'p-2 text-sm',
    lg: 'px-3 py-2 text-sm'
  };

  const iconSizes = {
    sm: 14,
    md: 16,
    lg: 18
  };

  return (
    <button
      type="button"
      onClick={handleSpeak}
      title={
        isSpeaking
          ? 'Остановить воспроизведение'
          : voiceName
          ? `Прослушать естественное произношение (${voiceName})`
          : 'Прослушать на испанском'
      }
      aria-label="Прослушать произношение"
      className={`inline-flex items-center gap-1.5 rounded-lg border transition-all cursor-pointer select-none active:scale-95 ${
        isSpeaking
          ? 'bg-amber-500/20 text-amber-300 border-amber-500/40 shadow-sm shadow-amber-500/20 ring-2 ring-amber-500/30'
          : 'bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white border-slate-700/60'
      } ${sizeClasses[size]} ${className}`}
    >
      {isSpeaking ? (
        <VolumeX size={iconSizes[size]} className="shrink-0 text-amber-400 animate-pulse" />
      ) : (
        <Volume2 size={iconSizes[size]} className="shrink-0 text-sky-400" />
      )}
      {label && <span className="font-medium whitespace-nowrap">{label}</span>}
    </button>
  );
};
