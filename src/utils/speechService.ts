/**
 * Speech service for natural Spanish pronunciation.
 * Prioritizes high-fidelity neural/natural voices (Google español, Microsoft Online Natural, Apple Siri/Premium)
 * and eliminates mechanical robotic pauses and awkward pacing.
 */

type SpeechCallback = (speaking: boolean) => void;

class SpeechService {
  private voices: SpeechSynthesisVoice[] = [];
  private selectedVoice: SpeechSynthesisVoice | null = null;
  private currentUtterance: SpeechSynthesisUtterance | null = null;
  private isInitialized = false;
  private subscribers = new Set<SpeechCallback>();
  private activeId: string | null = null;

  constructor() {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      this.initVoices();
      window.speechSynthesis.onvoiceschanged = () => {
        this.initVoices();
      };
    }
  }

  private initVoices() {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;
    this.voices = window.speechSynthesis.getVoices();
    this.pickBestSpanishVoice();
    this.isInitialized = true;
  }

  private pickBestSpanishVoice(): SpeechSynthesisVoice | null {
    if (!this.voices || this.voices.length === 0) return null;

    // Filter all Spanish voices
    const spanishVoices = this.voices.filter(v =>
      v.lang.toLowerCase().startsWith('es')
    );

    if (spanishVoices.length === 0) return null;

    // 1. First priority: Neural / Natural / Online Cloud voices
    const neuralVoice = spanishVoices.find(v => {
      const name = v.name.toLowerCase();
      return (
        name.includes('natural') ||
        name.includes('google español') ||
        name.includes('neural') ||
        name.includes('online') ||
        name.includes('premium') ||
        name.includes('enhanced')
      );
    });

    if (neuralVoice) {
      this.selectedVoice = neuralVoice;
      return neuralVoice;
    }

    // 2. Second priority: Latin American Spanish (Mateo is from Ecuador / Latin America)
    const latamVoice = spanishVoices.find(v => {
      const lang = v.lang.toLowerCase();
      const name = v.name.toLowerCase();
      return (
        lang.includes('419') ||
        lang.includes('ec') ||
        lang.includes('mx') ||
        lang.includes('co') ||
        lang.includes('us') ||
        name.includes('mexico') ||
        name.includes('colombia') ||
        name.includes('paulina') ||
        name.includes('jorge') ||
        name.includes('diego') ||
        name.includes('monica')
      );
    });

    if (latamVoice) {
      this.selectedVoice = latamVoice;
      return latamVoice;
    }

    // 3. Third priority: Any standard Spanish voice
    const fallbackVoice = spanishVoices.find(v => v.lang.toLowerCase().startsWith('es-es')) || spanishVoices[0];
    this.selectedVoice = fallbackVoice || null;
    return this.selectedVoice;
  }

  public getAvailableVoices(): SpeechSynthesisVoice[] {
    if (!this.isInitialized || this.voices.length === 0) {
      this.initVoices();
    }
    return this.voices.filter(v => v.lang.toLowerCase().startsWith('es'));
  }

  public getActiveVoice(): SpeechSynthesisVoice | null {
    if (!this.selectedVoice) {
      this.initVoices();
    }
    return this.selectedVoice;
  }

  public setVoice(voice: SpeechSynthesisVoice) {
    this.selectedVoice = voice;
  }

  public cleanTextForSpeech(text: string): string {
    return text
      // Remove dialogue quotes and brackets that cause unnatural pauses
      .replace(/[«»"']/g, '')
      // Remove asterisks, hashtags, dashes at the beginning of words
      .replace(/[*_#]/g, '')
      // Normalize whitespace
      .replace(/\s+/g, ' ')
      .trim();
  }

  public speak(
    text: string,
    id: string = text,
    onEnd?: () => void,
    onError?: () => void
  ) {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;

    // If currently speaking the same item, stop
    if (this.activeId === id) {
      this.stop();
      return;
    }

    this.stop();

    const cleanedText = this.cleanTextForSpeech(text);
    const utterance = new SpeechSynthesisUtterance(cleanedText);

    // Refresh best voice if needed
    const voice = this.getActiveVoice();
    if (voice) {
      utterance.voice = voice;
      utterance.lang = voice.lang;
    } else {
      utterance.lang = 'es-419';
    }

    // Natural human conversational rate & pitch:
    // Rate 0.95: Clear enough for learners, fluid enough to avoid mechanical stutters
    utterance.rate = 0.95;
    utterance.pitch = 1.0;

    this.activeId = id;
    this.currentUtterance = utterance;
    this.notifySubscribers(true);

    utterance.onstart = () => {
      this.notifySubscribers(true);
    };

    utterance.onend = () => {
      this.activeId = null;
      this.currentUtterance = null;
      this.notifySubscribers(false);
      onEnd?.();
    };

    utterance.onerror = () => {
      this.activeId = null;
      this.currentUtterance = null;
      this.notifySubscribers(false);
      onError?.();
    };

    try {
      window.speechSynthesis.speak(utterance);
    } catch {
      this.activeId = null;
      this.currentUtterance = null;
      this.notifySubscribers(false);
      onError?.();
    }
  }

  public stop() {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;
    try {
      window.speechSynthesis.cancel();
    } catch {
      // ignore
    }
    this.activeId = null;
    this.currentUtterance = null;
    this.notifySubscribers(false);
  }

  public isSpeaking(id?: string): boolean {
    if (!this.activeId) return false;
    return id ? this.activeId === id : true;
  }

  public subscribe(callback: SpeechCallback): () => void {
    this.subscribers.add(callback);
    return () => {
      this.subscribers.delete(callback);
    };
  }

  private notifySubscribers(speaking: boolean) {
    this.subscribers.forEach(cb => cb(speaking));
  }
}

export const speechService = new SpeechService();
