export interface ConjugationRow {
  pronoun: string;
  ser: string;
  estar: string;
  translationRu: string;
  exampleSer: string;
  exampleEstar: string;
}

export const CONJUGATION_TABLE: ConjugationRow[] = [
  {
    pronoun: 'yo (я)',
    ser: 'soy',
    estar: 'estoy',
    translationRu: 'я есть / являюсь | я нахожусь / чувствую себя',
    exampleSer: 'Yo soy de Rusia / Soy estudiante.',
    exampleEstar: 'Yo estoy bien / Estoy emocionada.'
  },
  {
    pronoun: 'tú (ты)',
    ser: 'eres',
    estar: 'estás',
    translationRu: 'ты есть | ты находишься / чувствуешь себя',
    exampleSer: '¿De dónde eres tú? / Eres muy amable.',
    exampleEstar: '¿Cómo estás tú? / ¿Dónde estás?'
  },
  {
    pronoun: 'él / ella / usted (он / она / Вы)',
    ser: 'es',
    estar: 'está',
    translationRu: 'он/она есть | он/она находится / в состоянии',
    exampleSer: 'Mateo es de Ecuador. / Mi amiga es música.',
    exampleEstar: 'Ella está contenta. / El teatro está cerca.'
  },
  {
    pronoun: 'nosotros / nosotras (мы)',
    ser: 'somos',
    estar: 'estamos',
    translationRu: 'мы есть | мы находимся / чувствуем себя',
    exampleSer: 'Nosotros somos amigos.',
    exampleEstar: 'Nosotros estamos listos para el concierto.'
  },
  {
    pronoun: 'vosotros / vosotras (вы)',
    ser: 'sois',
    estar: 'estáis',
    translationRu: 'вы есть | вы находитесь',
    exampleSer: 'Vosotros sois estudiantes.',
    exampleEstar: '¿Vosotros estáis en el vestíbulo?'
  },
  {
    pronoun: 'ellos / ellas / ustedes (они / Вы)',
    ser: 'son',
    estar: 'están',
    translationRu: 'они есть | они находятся / в состоянии',
    exampleSer: 'Las tradiciones son importantes.',
    exampleEstar: 'Nuestros asientos están cerca del escenario.'
  }
];

export interface SerEstarQuizQuestion {
  id: string;
  sentenceWithBlank: string; // e.g. "Mateo ___ de Ecuador."
  translationRu: string;
  options: string[]; // e.g. ["es", "está", "eres", "estás"]
  correctOption: string;
  verbType: 'ser' | 'estar';
  ruleExplanationRu: string;
  contextTag: string; // "Происхождение", "Самочувствие", "Местоположение", etc.
}

export const SER_ESTAR_QUIZ: SerEstarQuizQuestion[] = [
  {
    id: 'q1',
    sentenceWithBlank: '¡Hola, Mateo! ¿Cómo ___ hoy?',
    translationRu: 'Привет, Матео! Как ты себя чувствуешь сегодня?',
    options: ['estás', 'eres', 'está', 'es'],
    correctOption: 'estás',
    verbType: 'estar',
    ruleExplanationRu: 'ESTAR используется для текущего самочувствия и состояния человека прямо сейчас (¿Cómo estás? — Как дела / Как ты?).',
    contextTag: 'Самочувствие'
  },
  {
    id: 'q2',
    sentenceWithBlank: 'Yo ___ muy bien, gracias. ¿Y tú?',
    translationRu: 'Я чувствую себя отлично, спасибо. А ты?',
    options: ['estoy', 'soy', 'está', 'es'],
    correctOption: 'estoy',
    verbType: 'estar',
    ruleExplanationRu: 'ESTAR: «Yo estoy bien» (я в порядке / чувствую себя хорошо). С формой «soy» говорить нельзя, так как «soy bien» — грубая ошибка.',
    contextTag: 'Самочувствие'
  },
  {
    id: 'q3',
    sentenceWithBlank: 'Mateo ___ de Ecuador.',
    translationRu: 'Матео из Эквадора.',
    options: ['es', 'está', 'son', 'están'],
    correctOption: 'es',
    verbType: 'ser',
    ruleExplanationRu: 'SER используется для указания происхождения и национальности: «ser de + страна / город».',
    contextTag: 'Происхождение'
  },
  {
    id: 'q4',
    sentenceWithBlank: '¿De dónde ___ tú?',
    translationRu: 'Откуда ты родом?',
    options: ['eres', 'estás', 'es', 'está'],
    correctOption: 'eres',
    verbType: 'ser',
    ruleExplanationRu: 'SER: постоянная характеристика происхождения. «¿De dónde eres?» — Откуда ты родом?',
    contextTag: 'Происхождение'
  },
  {
    id: 'q5',
    sentenceWithBlank: 'Nuestros asientos ___ muy cerca del escenario.',
    translationRu: 'Наши места находятся очень близко к сцене.',
    options: ['están', 'son', 'está', 'es'],
    correctOption: 'están',
    verbType: 'estar',
    ruleExplanationRu: 'ESTAR используется для физического местоположения предметов и людей в пространстве (места находятся — están).',
    contextTag: 'Местоположение'
  },
  {
    id: 'q6',
    sentenceWithBlank: 'Mi amiga ___ música en la orquesta.',
    translationRu: 'Моя подруга — музыкант в оркестре.',
    options: ['es', 'está', 'eres', 'estás'],
    correctOption: 'es',
    verbType: 'ser',
    ruleExplanationRu: 'SER используется для профессии, роли и рода занятий человека (ella es música / ella es estudiante).',
    contextTag: 'Профессия'
  },
  {
    id: 'q7',
    sentenceWithBlank: 'Este teatro ___ muy bonito y elegante.',
    translationRu: 'Этот театр очень красивый и элегантный.',
    options: ['es', 'está', 'son', 'están'],
    correctOption: 'es',
    verbType: 'ser',
    ruleExplanationRu: 'SER используется для постоянных неотъемлемых качеств и свойств предмета или здания (el teatro es bonito).',
    contextTag: 'Постоянное качество'
  },
  {
    id: 'q8',
    sentenceWithBlank: 'Los músicos ya ___ en el escenario.',
    translationRu: 'Музыканты уже находятся на сцене.',
    options: ['están', 'son', 'está', 'es'],
    correctOption: 'están',
    verbType: 'estar',
    ruleExplanationRu: 'ESTAR используется для нахождения в конкретном месте в данный момент (музыканты на сцене — están en el escenario).',
    contextTag: 'Местоположение'
  },
  {
    id: 'q9',
    sentenceWithBlank: 'Yo ___ muy emocionada por el concierto.',
    translationRu: 'Я очень воодушевлена предстоящим концертом.',
    options: ['estoy', 'soy', 'estás', 'eres'],
    correctOption: 'estoy',
    verbType: 'estar',
    ruleExplanationRu: 'ESTAR выражает эмоциональное состояние прямо сейчас (estoy emocionada — я воодушевлена / в восторге).',
    contextTag: 'Эмоциональное состояние'
  },
  {
    id: 'q10',
    sentenceWithBlank: 'Nosotros ___ amigos de la universidad.',
    translationRu: 'Мы друзья из университета.',
    options: ['somos', 'estamos', 'son', 'están'],
    correctOption: 'somos',
    verbType: 'ser',
    ruleExplanationRu: 'SER определяет сущность отношений между людьми: «somos amigos de la universidad» (мы друзья из университета / со школы). С глаголом estar говорить нельзя.',
    contextTag: 'Отношения'
  },
  {
    id: 'q11',
    sentenceWithBlank: 'La noche de otoño en la calle ___ preciosa hoy.',
    translationRu: 'Осенний вечер на улице сегодня восхитительный.',
    options: ['está', 'es', 'están', 'son'],
    correctOption: 'está',
    verbType: 'estar',
    ruleExplanationRu: 'ESTAR передаёт временное состояние погоды или атмосферы прямо в этот вечер («está preciosa hoy»).',
    contextTag: 'Временное состояние'
  },
  {
    id: 'q12',
    sentenceWithBlank: 'Mi amiga ___ contenta después de tocar.',
    translationRu: 'Моя подруга довольна после выступления.',
    options: ['está', 'es', 'estás', 'eres'],
    correctOption: 'está',
    verbType: 'estar',
    ruleExplanationRu: 'ESTAR используется с прилагательным «contento/contenta» (довольный / рада), так как это настроение в данный момент.',
    contextTag: 'Эмоциональное состояние'
  }
];

export interface PhraseBuilderTask {
  id: string;
  russianPrompt: string;
  wordsShuffled: string[];
  correctPhrase: string;
  tipRu: string;
}

export const PHRASE_BUILDER_TASKS: PhraseBuilderTask[] = [
  {
    id: 'pb1',
    russianPrompt: '«Откуда ты родом?»',
    wordsShuffled: ['eres', '¿De', 'tú?', 'dónde'],
    correctPhrase: '¿De dónde eres tú?',
    tipRu: 'Вопрос о родине строится через SER: ¿De dónde + eres + tú?'
  },
  {
    id: 'pb2',
    russianPrompt: '«Я из Эквадора, я студент.»',
    wordsShuffled: ['estudiante.', 'Soy', 'Ecuador,', 'de', 'soy'],
    correctPhrase: 'Soy de Ecuador, soy estudiante.',
    tipRu: 'Оба факта (родина и статус студента) требуют глагола SER: soy de..., soy estudiante.'
  },
  {
    id: 'pb3',
    russianPrompt: '«Как ты себя чувствуешь сегодня?»',
    wordsShuffled: ['¿Cómo', 'hoy?', 'estás', 'tú'],
    correctPhrase: '¿Cómo estás tú hoy?',
    tipRu: 'Вопрос о самочувствии требует ESTAR: ¿Cómo estás tú?'
  },
  {
    id: 'pb4',
    russianPrompt: '«Я отлично, потому что начинается концерт.»',
    wordsShuffled: ['bien', 'el', 'porque', 'empieza', 'concierto.', 'Estoy'],
    correctPhrase: 'Estoy bien porque empieza el concierto.',
    tipRu: 'Самочувствие передаётся через ESTAR: «Estoy bien» + причина «porque...»'
  },
  {
    id: 'pb5',
    russianPrompt: '«Наши места находятся близко к сцене.»',
    wordsShuffled: ['escenario.', 'están', 'Nuestros', 'cerca', 'del', 'asientos'],
    correctPhrase: 'Nuestros asientos están cerca del escenario.',
    tipRu: 'Местоположение кресел — глагол ESTAR: «están cerca del escenario».'
  },
  {
    id: 'pb6',
    russianPrompt: '«Моя подруга — музыкант в русском оркестре.»',
    wordsShuffled: ['amiga', 'orquesta.', 'la', 'en', 'es', 'Mi', 'música'],
    correctPhrase: 'Mi amiga es música en la orquesta.',
    tipRu: 'Профессия и призвание — глагол SER: «Mi amiga es música».'
  },
  {
    id: 'pb7',
    russianPrompt: '«Все зрители находятся в зале.»',
    wordsShuffled: ['Todos', 'la', 'en', 'están', 'sala.', 'los', 'espectadores'],
    correctPhrase: 'Todos los espectadores están en la sala.',
    tipRu: 'Нахождение зрителей в помещении требует глагола ESTAR: «están en la sala».'
  },
  {
    id: 'pb8',
    russianPrompt: '«Этот театр очень красивый.»',
    wordsShuffled: ['muy', 'Este', 'bonito.', 'teatro', 'es'],
    correctPhrase: 'Este teatro es muy bonito.',
    tipRu: 'Постоянное свойство театра — глагол SER: «es muy bonito».'
  }
];

export interface ErrorSpotterItem {
  id: string;
  badSentence: string;
  errorWord: string;
  correctWord: string;
  fixedSentence: string;
  translationRu: string;
  explanationRu: string;
}

export const ERROR_SPOTTER_ITEMS: ErrorSpotterItem[] = [
  {
    id: 'err1',
    badSentence: '¿Dónde eres tú, Mateo?',
    errorWord: 'Dónde',
    correctWord: 'De dónde',
    fixedSentence: '¿De dónde eres tú, Mateo?',
    translationRu: 'Откуда ты родом, Матео?',
    explanationRu: 'С глаголом SER для вопроса об источнике/родине обязательно нужен предлог «de»: «¿De dónde eres?» (А «¿Dónde estás?» с estar означало бы «где ты находишься сейчас?»).'
  },
  {
    id: 'err2',
    badSentence: 'Yo soy muy bien hoy, gracias.',
    errorWord: 'soy',
    correctWord: 'estoy',
    fixedSentence: 'Yo estoy muy bien hoy, gracias.',
    translationRu: 'Я чувствую себя очень хорошо сегодня, спасибо.',
    explanationRu: 'Самочувствие и настроение всегда передаются через ESTAR: «estoy bien»! Сказать «soy bien» по-испански нельзя.'
  },
  {
    id: 'err3',
    badSentence: 'Nuestros asientos son cerca del escenario.',
    errorWord: 'son',
    correctWord: 'están',
    fixedSentence: 'Nuestros asientos están cerca del escenario.',
    translationRu: 'Наши места находятся близко к сцене.',
    explanationRu: 'Местоположение в пространстве (где находятся кресла) всегда требует глагола ESTAR: «están cerca».'
  },
  {
    id: 'err4',
    badSentence: 'Mateo está de Ecuador y estudia aquí.',
    errorWord: 'está',
    correctWord: 'es',
    fixedSentence: 'Mateo es de Ecuador y estudia aquí.',
    translationRu: 'Матео родом из Эквадора и учится здесь.',
    explanationRu: 'Страна происхождения — это неизменная характеристика человека, поэтому используется только SER: «es de Ecuador».'
  },
  {
    id: 'err5',
    badSentence: 'Mi amiga está música en la orquesta.',
    errorWord: 'está',
    correctWord: 'es',
    fixedSentence: 'Mi amiga es música en la orquesta.',
    translationRu: 'Моя подруга — музыкант в оркестре.',
    explanationRu: 'Профессия и род занятий обозначаются глаголом SER: «ella es música» (а не está).'
  },
  {
    id: 'err6',
    badSentence: 'Nosotros estamos amigos de la universidad.',
    errorWord: 'estamos',
    correctWord: 'somos',
    fixedSentence: 'Nosotros somos amigos de la universidad.',
    translationRu: 'Мы друзья из университета.',
    explanationRu: 'Отношения дружбы («amigos») выражают постоянную сущность связи между людьми, поэтому используется SER: «somos amigos de la universidad» (а не estamos).'
  }
];

export interface PairCardItem {
  id: string;
  roleA: string; // Учитель / Матео
  roleB: string; // Ученица / Героиня
  promptEs: string;
  promptRu: string;
  responseEs: string;
  responseRu: string;
  grammarTipRu: string;
}

export const PAIR_DIALOGUE_CARDS: PairCardItem[] = [
  {
    id: 'pd1',
    roleA: 'Матео (Учитель)',
    roleB: 'Героиня (Ученица)',
    promptEs: '¡Hola! ¿Cómo estás hoy?',
    promptRu: 'Привет! Как ты себя чувствуешь сегодня?',
    responseEs: '¡Hola! Yo estoy muy bien, ¿y tú?',
    responseRu: 'Привет! Я чувствую себя очень хорошо, а ты?',
    grammarTipRu: 'Используем глагол ESTAR (estoy bien), так как речь идёт о самочувствии.'
  },
  {
    id: 'pd2',
    roleA: 'Героиня (Ученица)',
    roleB: 'Матео (Учитель)',
    promptEs: 'Mateo, ¿de dónde eres tú?',
    promptRu: 'Матео, откуда ты родом?',
    responseEs: 'Yo soy de Ecuador, pero ahora estudio en Rusia.',
    responseRu: 'Я из Эквадора, но сейчас учусь в России.',
    grammarTipRu: 'Используем глагол SER (soy de Ecuador) для страны происхождения.'
  },
  {
    id: 'pd3',
    roleA: 'Матео (Учитель)',
    roleB: 'Героиня (Ученица)',
    promptEs: '¿Dónde están nuestros asientos en la sala?',
    promptRu: 'Где находятся наши места в зале?',
    responseEs: 'Nuestros asientos están muy cerca del escenario.',
    responseRu: 'Наши места находятся очень близко к сцене.',
    grammarTipRu: 'Используем глагол ESTAR (están cerca) для физического нахождения мест.'
  },
  {
    id: 'pd4',
    roleA: 'Матео (Учитель)',
    roleB: 'Героиня (Ученица)',
    promptEs: '¿Quién es tu amiga en el escenario?',
    promptRu: 'Кто твоя подруга на сцене?',
    responseEs: 'Ella es música. Toca la balalaica en la orquesta.',
    responseRu: 'Она музыкант. Играет на балалайке в оркестре.',
    grammarTipRu: 'Используем глагол SER (ella es música) для профессии/статуса.'
  },
  {
    id: 'pd5',
    roleA: 'Матео (Учитель)',
    roleB: 'Героиня (Ученица)',
    promptEs: '¿Estás lista para escuchar la música?',
    promptRu: 'Ты готова слушать музыку?',
    responseEs: '¡Sí, estoy muy emocionada y lista!',
    responseRu: 'Да, я очень воодушевлена и готова!',
    grammarTipRu: 'Используем глагол ESTAR (estoy lista / emocionada) для настроения и готовности прямо сейчас.'
  }
];
