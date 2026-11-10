export type FormulaCategory = 'lifeline' | 'ecuador' | 'russia' | 'reactions' | 'ser_estar';

export interface DialogueFormulaItem {
  id: string;
  category: FormulaCategory;
  categoryLabelRu: string;
  phraseEs: string;
  phraseRu: string;
  contextRu: string;
  situationalTipRu: string;
  dialogueExample: {
    heroine: string;
    mateo: string;
  };
  keyGrammarOrVocab?: string;
}

export const DIALOGUE_FORMULAS: DialogueFormulaItem[] = [
  // --- 1. СПАСАТЕЛЬНЫЙ КРУГ ДЛЯ НАЧИНАЮЩИХ (LIFELINE) ---
  {
    id: 'life-1',
    category: 'lifeline',
    categoryLabelRu: 'Спасательный круг',
    phraseEs: 'Solo estudio español desde hace poco, por eso no entiendo todo.',
    phraseRu: 'Я только начала учить испанский, поэтому не всё понимаю.',
    contextRu: 'Снимает психологический барьер и неловкость, если собеседник говорит сложно.',
    situationalTipRu: 'Используйте в начале диалога или когда Матео начинает говорить слишком бегло.',
    dialogueExample: {
      heroine: '— Solo estudio español desde hace poco, por eso no entiendo todo.',
      mateo: '— ¡No te preocupes! Hablo más despacio y claro para ti.'
    },
    keyGrammarOrVocab: 'desde hace poco (недавно)'
  },
  {
    id: 'life-2',
    category: 'lifeline',
    categoryLabelRu: 'Спасательный круг',
    phraseEs: '¿Puedes repetir más despacio, por favor?',
    phraseRu: 'Повтори, пожалуйста, помедленнее.',
    contextRu: 'Универсальная этикетная просьба снизить темп речи.',
    situationalTipRu: 'Если пропустили ключевое слово в реплике — смело просите повторить.',
    dialogueExample: {
      heroine: '— ¿Puedes repetir más despacio, por favor?',
      mateo: '— ¡Sí, claro! Decía que el concierto empieza pronto.'
    },
    keyGrammarOrVocab: 'más despacio (помедленнее)'
  },
  {
    id: 'life-3',
    category: 'lifeline',
    categoryLabelRu: 'Спасательный круг',
    phraseEs: '¿Cómo se dice esta palabra en español?',
    phraseRu: 'Как сказать это слово по-испански?',
    contextRu: 'Помогает продолжить фразу, если забыли испанское слово.',
    situationalTipRu: 'Можно указать рукой на предмет (например, на программку или инструмент) и спросить.',
    dialogueExample: {
      heroine: '— ¿Cómo se dice esta palabra en español?',
      mateo: '— Se dice «el programa». Es muy útil.'
    },
    keyGrammarOrVocab: '¿Cómo se dice...? (Как говорится...?)'
  },
  {
    id: 'life-4',
    category: 'lifeline',
    categoryLabelRu: 'Спасательный круг',
    phraseEs: 'No entiendo esta palabra, ¿qué significa?',
    phraseRu: 'Я не понимаю это слово, что оно значит?',
    contextRu: 'Просьба объяснить незнакомое слово простыми словами.',
    situationalTipRu: 'Показывает ваше живое желание учиться и понимать собеседника.',
    dialogueExample: {
      heroine: '— No entiendo esta palabra, ¿qué significa?',
      mateo: '— Significa «descanso» o «pausa» entre dos partes.'
    },
    keyGrammarOrVocab: '¿qué significa? (что значит?)'
  },

  // --- 2. ФАКТЫ ОБ ЭКВАДОРЕ В РЕЧИ (ECUADOR) ---
  {
    id: 'ec-1',
    category: 'ecuador',
    categoryLabelRu: 'Факты об Эквадоре',
    phraseEs: 'Leí que en Ecuador no hay cuatro estaciones, ¿es verdad?',
    phraseRu: 'Я читала, что в Эквадоре нет четырёх времён года, это правда?',
    contextRu: 'Превосходный переход от осенней погоды к климату родины Матео.',
    situationalTipRu: 'Позволяет завязать тёплую беседу о родине собеседника.',
    dialogueExample: {
      heroine: '— Leí que en Ecuador no hay cuatro estaciones, ¿es verdad?',
      mateo: '— ¡Es verdad! Solo tenemos época seca y época de lluvias por estar en el ecuador.'
    },
    keyGrammarOrVocab: 'no hay (нет / не существует)'
  },
  {
    id: 'ec-2',
    category: 'ecuador',
    categoryLabelRu: 'Факты об Эквадоре',
    phraseEs: 'Yo sé que el monumento «Mitad del Mundo» está en Ecuador.',
    phraseRu: 'Я знаю, что памятник «Середина мира» находится в Эквадоре.',
    contextRu: 'Показывает эрудицию: собеседнику невероятно приятно услышать это от иностранца.',
    situationalTipRu: 'Отличная тема при обсуждении путешествий и географии.',
    dialogueExample: {
      heroine: '— Yo sé que el monumento «Mitad del Mundo» está en Ecuador.',
      mateo: '— ¡Sí! Está muy cerca de Quito, mi ciudad.'
    },
    keyGrammarOrVocab: 'está en (находится в)'
  },
  {
    id: 'ec-3',
    category: 'ecuador',
    categoryLabelRu: 'Факты об Эквадоре',
    phraseEs: '¿Me puedes contar sobre el volcán Chimborazo?',
    phraseRu: 'Можешь рассказать о вулкане Чимборасо?',
    contextRu: 'Вопрос о высшей точке планеты, самой близкой к Солнцу.',
    situationalTipRu: 'Уместно при разговоре о горах и природе.',
    dialogueExample: {
      heroine: '— ¿Me puedes contar sobre el volcán Chimborazo?',
      mateo: '— ¡Es majestuoso! Su cima es el punto más cercano al Sol en la Tierra.'
    },
    keyGrammarOrVocab: 'el volcán (вулкан, мужской род)'
  },
  {
    id: 'ec-4',
    category: 'ecuador',
    categoryLabelRu: 'Факты об Эквадоре',
    phraseEs: 'Sé que las islas Galápagos tienen tortugas gigantes.',
    phraseRu: 'Я знаю, что на Галапагосских островах есть гигантские черепахи.',
    contextRu: 'Комплимент уникальному природному наследию Эквадора.',
    situationalTipRu: 'Матео охотно расскажет, бывал ли он там сам.',
    dialogueExample: {
      heroine: '— Sé que las islas Galápagos tienen tortugas gigantes.',
      mateo: '— ¡Sí, son enormes y viven más de cien años!'
    },
    keyGrammarOrVocab: 'las islas (острова, женский род)'
  },
  {
    id: 'ec-5',
    category: 'ecuador',
    categoryLabelRu: 'Факты об Эквадоре',
    phraseEs: 'Dicen que en Ecuador producen el mejor chocolate del mundo.',
    phraseRu: 'Говорят, в Эквадоре производят лучший шоколад в мире.',
    contextRu: 'Идеально для кафе или буфета при заказе десертов.',
    situationalTipRu: 'Эквадорский сорт какао «fino de aroma» — всемирная гордость страны.',
    dialogueExample: {
      heroine: '— Dicen que en Ecuador producen el mejor chocolate del mundo.',
      mateo: '— ¡Totalmente! El cacao ecuatoriano tiene un aroma único.'
    },
    keyGrammarOrVocab: 'el chocolate (шоколад)'
  },
  {
    id: 'ec-6',
    category: 'ecuador',
    categoryLabelRu: 'Факты об Эквадоре',
    phraseEs: '¿Es verdad que en Quito juegan al fútbol a gran altura?',
    phraseRu: 'Это правда, что в Кито играют в футбол на большой высоте?',
    contextRu: 'Разговор о спорте и знаменитых стадионах на высоте 2850 м.',
    situationalTipRu: 'Любимая тема для любого эквадорского парня, увлекающегося футболом.',
    dialogueExample: {
      heroine: '— ¿Es verdad que en Quito juegan al fútbol a gran altura?',
      mateo: '— ¡Sí, a casi tres mil metros! Los rivales se cansan muy rápido.'
    },
    keyGrammarOrVocab: 'a gran altura (на большой высоте)'
  },

  // --- 3. ФАКТЫ О РОССИИ В СРАВНЕНИИ (RUSSIA) ---
  {
    id: 'ru-1',
    category: 'russia',
    categoryLabelRu: 'Факты о России',
    phraseEs: 'En Rusia el otoño es dorado pero hace bastante frío.',
    phraseRu: 'В России осень золотая, но довольно холодно.',
    contextRu: 'Описание российской осени в ответ на впечатления Матео о погоде.',
    situationalTipRu: 'Помогает подчеркнуть контраст с тропическим климатом Эквадора.',
    dialogueExample: {
      heroine: '— En Rusia el otoño es dorado pero hace bastante frío.',
      mateo: '— ¡Las hojas en los árboles se ven preciosas con las luces!'
    },
    keyGrammarOrVocab: 'hace bastante frío (довольно холодно)'
  },
  {
    id: 'ru-2',
    category: 'russia',
    categoryLabelRu: 'Факты о России',
    phraseEs: 'En Rusia tenemos cuatro estaciones muy diferentes.',
    phraseRu: 'В России у нас четыре очень разных времени года.',
    contextRu: 'Объяснение смены сезонов: весна, лето, осень и морозная зима.',
    situationalTipRu: 'Звучит познавательно для жителя экватора, где смены времён года нет.',
    dialogueExample: {
      heroine: '— En Rusia tenemos cuatro estaciones muy diferentes.',
      mateo: '— Para mí todavía es una gran sorpresa ver la nieve en invierno.'
    },
    keyGrammarOrVocab: 'las estaciones (времена года)'
  },
  {
    id: 'ru-3',
    category: 'russia',
    categoryLabelRu: 'Факты о России',
    phraseEs: 'Rusia es un país enorme y tiene once zonas horarias.',
    phraseRu: 'Россия — огромная страна, и в ней одиннадцать часовых поясов.',
    contextRu: 'Географический факт о колоссальных масштабах России.',
    situationalTipRu: 'Контрастирует с компактным, но разнообразным Эквадором.',
    dialogueExample: {
      heroine: '— Rusia es un país enorme y tiene once zonas horarias.',
      mateo: '— ¡Increíble! En Ecuador cruzamos todo el país en un día.'
    },
    keyGrammarOrVocab: 'once zonas horarias (11 часовых поясов)'
  },
  {
    id: 'ru-4',
    category: 'russia',
    categoryLabelRu: 'Факты о России',
    phraseEs: 'La música tradicional rusa tiene balalaicas y melodías muy alegres.',
    phraseRu: 'В традиционной русской музыке есть балалайки и очень весёлые мелодии.',
    contextRu: 'Разговор о концерте оркестра русских народных инструментов.',
    situationalTipRu: 'Прекрасно объясняет иностранному гостю специфику увиденного на сцене.',
    dialogueExample: {
      heroine: '— La música tradicional rusa tiene balalaicas y melodías muy alegres.',
      mateo: '— ¡Sí, el ritmo es muy rápido y contagioso!'
    },
    keyGrammarOrVocab: 'la balalaica (балалайка, женский род)'
  },
  {
    id: 'ru-5',
    category: 'russia',
    categoryLabelRu: 'Факты о России',
    phraseEs: 'A los rusos nos gusta tomar té caliente con limón cuando hace frío.',
    phraseRu: 'Нам, русским, нравится пить горячий чай с лимоном, когда холодно.',
    contextRu: 'Тёплая русская традиция согреваться горячим чаем с лимоном.',
    situationalTipRu: 'Здорово сказать в буфете при заказе чая.',
    dialogueExample: {
      heroine: '— A los rusos nos gusta tomar té caliente con limón cuando hace frío.',
      mateo: '— ¡Es una costumbre perfecta para este clima!'
    },
    keyGrammarOrVocab: 'el té caliente con limón (горячий чай с лимоном)'
  },
  {
    id: 'ru-6',
    category: 'russia',
    categoryLabelRu: 'Факты о России',
    phraseEs: 'Mi amiga y yo estudiamos juntas en la universidad.',
    phraseRu: 'Мы с подругой учились вместе в университете.',
    contextRu: 'Готовая формула о студенческой дружбе в прошлом времени.',
    situationalTipRu: 'Объясняет Матео, почему вы пришли именно на этот концерт.',
    dialogueExample: {
      heroine: '— Mi amiga y yo estudiamos juntas en la universidad.',
      mateo: '— ¡Qué bonito conservar una amistad de los estudios!'
    },
    keyGrammarOrVocab: 'estudiamos juntas (мы учились вместе)'
  },

  // --- 4. РАЗГОВОРНЫЕ СВЯЗКИ И КЛИШЕ (REACTIONS) ---
  {
    id: 'react-1',
    category: 'reactions',
    categoryLabelRu: 'Разговорные связки',
    phraseEs: '¡Qué interesante! No lo sabía.',
    phraseRu: 'Как интересно! Я этого не знала.',
    contextRu: 'Живая реакция восхищения новым фактом.',
    situationalTipRu: 'Показывает неподдельное внимание к словам Матео.',
    dialogueExample: {
      heroine: '— ¡Qué interesante! No lo sabía.',
      mateo: '— Sí, es una de las cosas más curiosas de mi país.'
    },
    keyGrammarOrVocab: '¡Qué interesante! (Как интересно!)'
  },
  {
    id: 'react-2',
    category: 'reactions',
    categoryLabelRu: 'Разговорные связки',
    phraseEs: '¿Y en tu país cómo es habitualmente?',
    phraseRu: 'А в твоей стране как это обычно бывает?',
    contextRu: 'Встречный вопрос-мостик для сравнения культурных традиций.',
    situationalTipRu: 'Помогает продолжить разговор без неловких пауз.',
    dialogueExample: {
      heroine: '— ¿Y en tu país cómo es habitualmente?',
      mateo: '— Solemos reunirnos en familia con música y comida típica.'
    },
    keyGrammarOrVocab: '¿Y en tu país cómo es? (А в твоей стране как?)'
  },
  {
    id: 'react-3',
    category: 'reactions',
    categoryLabelRu: 'Разговорные связки',
    phraseEs: '¡Tienes toda la razón!',
    phraseRu: 'Ты совершенно прав!',
    contextRu: 'Полное искреннее согласие с мнением собеседника.',
    situationalTipRu: 'Укрепляет взаимопонимание и делает общение приятным.',
    dialogueExample: {
      heroine: '— ¡Tienes toda la razón!',
      mateo: '— Me alegra mucho que estemos de acuerdo.'
    },
    keyGrammarOrVocab: 'tener razón (быть правым)'
  },
  {
    id: 'react-4',
    category: 'reactions',
    categoryLabelRu: 'Разговорные связки',
    phraseEs: '¿Qué opinas tú sobre esto?',
    phraseRu: 'А что ты думаешь по этому поводу?',
    contextRu: 'Открытый вопрос для вовлечения собеседника в диалог.',
    situationalTipRu: 'Задавайте после того, как высказали своё мнение о концерте или погоде.',
    dialogueExample: {
      heroine: '— ¿Qué opinas tú sobre esto?',
      mateo: '— Creo que la música une a personas de culturas diferentes.'
    },
    keyGrammarOrVocab: '¿Qué opinas? (Что думаешь?)'
  },
  {
    id: 'react-5',
    category: 'reactions',
    categoryLabelRu: 'Разговорные связки',
    phraseEs: '¡Me parece una idea genial!',
    phraseRu: 'Мне кажется, это отличная идея!',
    contextRu: 'Одобрение предложения (пойти в буфет, взять программку, встретиться снова).',
    situationalTipRu: 'Звучит живо и естественно в дружеской беседе.',
    dialogueExample: {
      heroine: '— ¡Me parece una idea genial!',
      mateo: '— ¡Trato hecho! Entonces vamos juntos.'
    },
    keyGrammarOrVocab: 'me parece (мне кажется)'
  },

  // --- 5. ФОРМУЛЫ С SER & ESTAR В ДИАЛОГЕ ---
  {
    id: 'se-1',
    category: 'ser_estar',
    categoryLabelRu: 'Глаголы Ser & Estar',
    phraseEs: 'El teatro es muy bonito y histórico.',
    phraseRu: 'Театр очень красивый и исторический.',
    contextRu: 'Глагол SER: постоянное постоянное свойство архитектуры здания.',
    situationalTipRu: 'Применяется для описания характеристик филармонии.',
    dialogueExample: {
      heroine: '— El teatro es muy bonito y histórico.',
      mateo: '— Sí, la arquitectura clásica es magnífica.'
    },
    keyGrammarOrVocab: 'es (ser для постоянного качества)'
  },
  {
    id: 'se-2',
    category: 'ser_estar',
    categoryLabelRu: 'Глаголы Ser & Estar',
    phraseEs: 'Estoy muy emocionada por este concierto.',
    phraseRu: 'Я очень взволнована (в предвкушении) из-за этого концерта.',
    contextRu: 'Глагол ESTAR: временное душевное состояние героини сейчас.',
    situationalTipRu: 'Используется в фойе перед началом концерта.',
    dialogueExample: {
      heroine: '— Estoy muy emocionada por este concierto.',
      mateo: '— ¡Yo también! Tengo muchas ganas de escuchar la música.'
    },
    keyGrammarOrVocab: 'estoy emocionada (estar для временного состояния)'
  },
  {
    id: 'se-3',
    category: 'ser_estar',
    categoryLabelRu: 'Глаголы Ser & Estar',
    phraseEs: 'Nuestros asientos están muy cerca del escenario.',
    phraseRu: 'Наши места находятся очень близко к сцене.',
    contextRu: 'Глагол ESTAR: местоположение в пространстве.',
    situationalTipRu: 'Применяется, когда вы заходите в зал и ищете свои места.',
    dialogueExample: {
      heroine: '— Nuestros asientos están muy cerca del escenario.',
      mateo: '— ¡Qué suerte! Vamos a ver a los músicos perfectamente.'
    },
    keyGrammarOrVocab: 'están cerca (estar для местоположения)'
  },
  {
    id: 'se-4',
    category: 'ser_estar',
    categoryLabelRu: 'Глаголы Ser & Estar',
    phraseEs: 'El té está caliente y delicioso.',
    phraseRu: 'Чай горячий и вкусный прямо сейчас.',
    contextRu: 'Глагол ESTAR: состояние напитка в данный момент.',
    situationalTipRu: 'Используется в буфете филармонии во время антракта.',
    dialogueExample: {
      heroine: '— El té está caliente y delicioso.',
      mateo: '— ¡Qué bien! Es justo lo que necesitábamos.'
    },
    keyGrammarOrVocab: 'está caliente (estar для текущего состояния)'
  }
];
