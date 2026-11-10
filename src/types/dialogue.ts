export type ChoiceType = 'short' | 'elaborated' | 'shift';

export type MateoExpression = 'smiling' | 'surprised' | 'thinking' | 'excited';

export interface DialogueChoice {
  id: string;
  type: ChoiceType;
  textEs: string;
  textRu: string;
  tipRu: string; // Pedagogical tip: what was said and in which communicative situation it is appropriate
  mateoReactionEs: string;
  mateoReactionRu: string;
  reactionExpression: MateoExpression;
}

export interface Exchange {
  id: string;
  exchangeNumber: number; // 1, 2, or 3 within scene
  mateoLineEs: string;
  mateoLineRu: string;
  mateoExpression: MateoExpression;
  choices: DialogueChoice[];
}

export interface Scene {
  id: number;
  titleRu: string;
  titleEs: string;
  locationRu: string;
  locationEs: string;
  descriptionRu: string;
  bgImage: string;
  exchanges: Exchange[];
  sceneFormulas: {
    phraseEs: string;
    phraseRu: string;
    note: string;
  }[];
}

export interface UsedPhrase {
  sceneId: number;
  sceneTitle: string;
  exchangeIndex: number;
  type: ChoiceType;
  heroineTextEs: string;
  heroineTextRu: string;
  mateoReactionEs: string;
  mateoReactionRu: string;
  tipRu: string;
  timestamp: number;
}

export interface NounVocabularyItem {
  spanish: string; // Always includes article: el / la / los / las
  russian: string;
  category: string;
}

export interface VerbFormulaItem {
  verb: 'ser' | 'estar' | 'tener' | 'gustar' | 'ir' | 'pasado';
  formulaEs: string;
  formulaRu: string;
  context: string;
}
