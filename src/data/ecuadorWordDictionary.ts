export interface WordExplanation {
  lemma: string; // Base/dictionary form (infinitive for verbs, singular for nouns)
  translationRu: string; // Clear Russian translation in this context
  partOfSpeechRu: string; // Часть речи (сущ., глаг., прил., наречие, предлог)
  shortExplanationRu: string; // Краткое пояснение значения и употребления
  verbPrepositionRu?: string; // Управление глагола: предлоги и конструкции
  grammarNoteRu?: string; // Род, число или грамматическая особенность
  exampleEs?: string; // Короткий пример
}

/**
 * Words that should NOT be interactive per user request:
 * - Articles: el, la, los, las, un, una, unos, unas
 * - Forms of SER: es, son, soy, eres, somos, era, eras, éramos, eran, fue, fueron, sea, sean
 * - Forms of ESTAR: está, están, estoy, estás, estamos, estaba, estaban, estuvo, estuvieron, esté, estén
 */
export const EXCLUDED_WORDS = new Set([
  // Articles
  'el', 'la', 'los', 'las', 'un', 'una', 'unos', 'unas',
  // Forms of ser
  'es', 'son', 'soy', 'eres', 'somos', 'sois', 'era', 'eras', 'éramos', 'eran', 'fue', 'fueron', 'sea', 'sean', 'sido',
  // Forms of estar
  'está', 'están', 'estoy', 'estás', 'estamos', 'estáis', 'estaba', 'estabas', 'estábamos', 'estaban', 'estuvo', 'estuvieron', 'esté', 'estén', 'estado'
]);

export const ECUADOR_WORD_DICTIONARY: Record<string, WordExplanation> = {
  // --- A ---
  'a': {
    lemma: 'a',
    translationRu: 'к, в, на, до',
    partOfSpeechRu: 'предлог',
    shortExplanationRu: 'Обозначает направление движения, расстояние или дательный падеж.',
    exampleEs: 'viajar a Ecuador (ехать в Эквадор)'
  },
  'al': {
    lemma: 'a + el',
    translationRu: 'к, в (слияние a + el)',
    partOfSpeechRu: 'предлог с артиклем',
    shortExplanationRu: 'Обязательное слияние предлога «a» и артикля мужского рода «el».',
    exampleEs: 'cercano al Sol (близкий к Солнцу)'
  },
  'allí': {
    lemma: 'allí',
    translationRu: 'там, туда',
    partOfSpeechRu: 'наречие места',
    shortExplanationRu: 'Указывает на отдалённое от говорящего место («там»).',
    exampleEs: 'Allí puedes ver el monumento.'
  },
  'alta': {
    lemma: 'alto / alta',
    translationRu: 'высокая (расположенная на высоте)',
    partOfSpeechRu: 'прилагательное (жен. род)',
    shortExplanationRu: 'В контексте гор: высоко расположенная над уровнем моря.',
    grammarNoteRu: 'Женский род от alto, согласуется с la ciudad.',
    exampleEs: 'La ciudad está muy alta en los Andes.'
  },
  'alto': {
    lemma: 'alto',
    translationRu: 'высокий',
    partOfSpeechRu: 'прилагательное (муж. род)',
    shortExplanationRu: 'Обозначает большую высоту или высшую точку.',
    exampleEs: 'el punto más alto (самая высокая точка)'
  },
  'altura': {
    lemma: 'la altura',
    translationRu: 'высота',
    partOfSpeechRu: 'существительное (жен. род)',
    shortExplanationRu: 'Высота над уровнем моря или физический рост.',
    exampleEs: 'a 2800 metros de altura (на высоте 2800 метров)'
  },
  'amazonía': {
    lemma: 'la Amazonía',
    translationRu: 'Амазония (бассейн Амазонки)',
    partOfSpeechRu: 'существительное (имя собственное)',
    shortExplanationRu: 'Один из 4 регионов Эквадора: зона вечнозелёных тропических джунглей.',
    grammarNoteRu: 'Женский род, пишется с заглавной буквы.'
  },
  'andes': {
    lemma: 'los Andes',
    translationRu: 'Анды (горная цепь)',
    partOfSpeechRu: 'существительное (мн. число)',
    shortExplanationRu: 'Величайшая горная система Южной Америки, проходящая через весь Эквадор.'
  },
  'año': {
    lemma: 'el año',
    translationRu: 'год',
    partOfSpeechRu: 'существительное (муж. род)',
    shortExplanationRu: 'Календарный год или возраст.',
    exampleEs: 'todo el año (круглый год)'
  },
  'años': {
    lemma: 'el año / los años',
    translationRu: 'годы, лет',
    partOfSpeechRu: 'существительное (мн. число)',
    shortExplanationRu: 'Множественное число слова año.',
    exampleEs: 'cien años (сто лет)'
  },
  'aromático': {
    lemma: 'aromático',
    translationRu: 'ароматный, душистый',
    partOfSpeechRu: 'прилагательное',
    shortExplanationRu: 'Обладающий насыщенным приятным ароматом (о сорте какао).',
    exampleEs: 'el cacao aromático'
  },
  'así': {
    lemma: 'así',
    translationRu: 'так, таким образом',
    partOfSpeechRu: 'наречие',
    shortExplanationRu: 'Указывает на образ действия или причину («именно так»).',
    exampleEs: 'se llama así (называется так)'
  },

  // --- C ---
  'cacao': {
    lemma: 'el cacao',
    translationRu: 'какао',
    partOfSpeechRu: 'существительное (муж. род)',
    shortExplanationRu: 'Дерево, стручки и ароматные бобы, из которых производят шоколад.',
    grammarNoteRu: 'Мужской род: el cacao.'
  },
  'camarón': {
    lemma: 'el camarón',
    translationRu: 'креветка',
    partOfSpeechRu: 'существительное (муж. род)',
    shortExplanationRu: 'Главный ингредиент традиционного прибрежного эквадорского севиче.',
    exampleEs: 'ceviche de camarón'
  },
  'capital': {
    lemma: 'la capital',
    translationRu: 'столица',
    partOfSpeechRu: 'существительное (жен. род)',
    shortExplanationRu: 'Главный город государства (в Эквадоре — Кито).',
    grammarNoteRu: 'Женский род: la capital (не путать с el capital — денежный капитал!).'
  },
  'cerca': {
    lemma: 'cerca de',
    translationRu: 'близко, около, рядом с',
    partOfSpeechRu: 'наречие с предлогом',
    shortExplanationRu: 'Обозначает пространственную близость.',
    verbPrepositionRu: 'Всегда используется с предлогом de: cerca de + существительное.',
    exampleEs: 'Cerca de la capital (Недалеко от столицы)'
  },
  'cercano': {
    lemma: 'cercano / cercana',
    translationRu: 'близкий, расположенный рядом',
    partOfSpeechRu: 'прилагательное',
    shortExplanationRu: 'Находящийся на малом расстоянии.',
    verbPrepositionRu: 'Управление: cercano a (близкий к чему-либо).',
    exampleEs: 'el punto más cercano al Sol'
  },
  'ceviche': {
    lemma: 'el ceviche',
    translationRu: 'севиче',
    partOfSpeechRu: 'существительное (муж. род)',
    shortExplanationRu: 'Традиционное блюдо из свежих морепродуктов, маринованных в цитрусовом соке.',
    grammarNoteRu: 'В Эквадоре часто подаётся с попкорном и банановыми чипсами.'
  },
  'chimborazo': {
    lemma: 'el Chimborazo',
    translationRu: 'Чимборасо',
    partOfSpeechRu: 'существительное (имя собственное)',
    shortExplanationRu: 'Высочайший вулкан Эквадора (6263 м), самая удалённая точка от центра Земли.'
  },
  'chocolate': {
    lemma: 'el chocolate',
    translationRu: 'шоколад',
    partOfSpeechRu: 'существительное (муж. род)',
    shortExplanationRu: 'Кондитерское изделие из какао-бобов. Эквадор славится тёмным шоколадом.'
  },
  'chocolates': {
    lemma: 'los chocolates',
    translationRu: 'сорта шоколада, шоколадные изделия',
    partOfSpeechRu: 'существительное (мн. число)',
    shortExplanationRu: 'Множественное число слова el chocolate.'
  },
  'cien': {
    lemma: 'cien',
    translationRu: 'сто (100)',
    partOfSpeechRu: 'числительное',
    shortExplanationRu: 'Форма числительного 100 перед существительными (cien años).'
  },
  'ciudad': {
    lemma: 'la ciudad',
    translationRu: 'город',
    partOfSpeechRu: 'существительное (жен. род)',
    shortExplanationRu: 'Крупный населённый пункт.',
    grammarNoteRu: 'Слова на -dad всегда женского рода (la ciudad, las ciudades).'
  },
  'clima': {
    lemma: 'el clima',
    translationRu: 'климат',
    partOfSpeechRu: 'существительное (муж. род)',
    shortExplanationRu: 'Многолетний режим погоды.',
    grammarNoteRu: 'Важно: мужской род (греческое происхождение на -ma): el clima!'
  },
  'con': {
    lemma: 'con',
    translationRu: 'с, вместе с',
    partOfSpeechRu: 'предлог',
    shortExplanationRu: 'Обозначает совместность, наличие признака или ингредиента.',
    exampleEs: 'café con leche, ceviche con jugo'
  },
  'costa': {
    lemma: 'la Costa',
    translationRu: 'Побережье, Коста',
    partOfSpeechRu: 'существительное (жен. род)',
    shortExplanationRu: 'Западный тихоокеанский тропический регион Эквадора с пляжами.'
  },
  'cuatro': {
    lemma: 'cuatro',
    translationRu: 'четыре (4)',
    partOfSpeechRu: 'числительное',
    shortExplanationRu: 'Количественное числительное.'
  },
  'cumbre': {
    lemma: 'la cumbre',
    translationRu: 'вершина, пик',
    partOfSpeechRu: 'существительное (жен. род)',
    shortExplanationRu: 'Самая верхняя точка горы или вулкана.',
    grammarNoteRu: 'Женский род: la cumbre.'
  },

  // --- D ---
  'de': {
    lemma: 'de',
    translationRu: 'из, от, о, признак род. падежа',
    partOfSpeechRu: 'предлог',
    shortExplanationRu: 'Выражает принадлежность, материал, происхождение или тему.',
    exampleEs: 'el monumento de Quito (памятник Кито)'
  },
  'del': {
    lemma: 'de + el',
    translationRu: 'из, от (слияние de + el)',
    partOfSpeechRu: 'предлог с артиклем',
    shortExplanationRu: 'Обязательное грамматическое слияние предлога de и артикля el.',
    exampleEs: 'la línea del ecuador'
  },
  'delicioso': {
    lemma: 'delicioso',
    translationRu: 'очень вкусный, восхитительный',
    partOfSpeechRu: 'прилагательное',
    shortExplanationRu: 'Выражает превосходный вкус еды или напитка.',
    exampleEs: 'un plato delicioso'
  },
  'difícil': {
    lemma: 'difícil',
    translationRu: 'трудный, сложный',
    partOfSpeechRu: 'прилагательное',
    shortExplanationRu: 'Требующий больших усилий.',
    verbPrepositionRu: 'Часто с предлогом para: difícil para alguien (трудный для кого-то).'
  },
  'dos': {
    lemma: 'dos',
    translationRu: 'два (2)',
    partOfSpeechRu: 'числительное',
    shortExplanationRu: 'Количественное числительное.'
  },

  // --- E ---
  'e': {
    lemma: 'e',
    translationRu: 'и (вариант союза y)',
    partOfSpeechRu: 'союз',
    shortExplanationRu: 'Заменяет союз «y» перед словами, начинающимися на звук [i] (на буквы i- или hi-).',
    exampleEs: 'otoño e invierno (не «y invierno»!)'
  },
  'ecuador': {
    lemma: 'el ecuador / Ecuador',
    translationRu: 'экватор / Эквадор',
    partOfSpeechRu: 'существительное',
    shortExplanationRu: 'Нулевая параллель Земли, давшая имя государству Эквадор.'
  },
  'ecuatorianos': {
    lemma: 'los ecuatorianos',
    translationRu: 'эквадорцы (жители Эквадора)',
    partOfSpeechRu: 'существительное / прил.',
    shortExplanationRu: 'Граждане Республики Эквадор.'
  },
  'en': {
    lemma: 'en',
    translationRu: 'в, на',
    partOfSpeechRu: 'предлог места/времени',
    shortExplanationRu: 'Обозначает нахождение внутри или на поверхности предмета.',
    exampleEs: 'en la capital, en las montañas'
  },
  'época': {
    lemma: 'la época',
    translationRu: 'период, сезон, время года',
    partOfSpeechRu: 'существительное (жен. род)',
    shortExplanationRu: 'В тропиках: сезон (época seca — сухой сезон, época de lluvias — сезон дождей).'
  },
  'equipos': {
    lemma: 'el equipo / los equipos',
    translationRu: 'команды',
    partOfSpeechRu: 'существительное (мн. число)',
    shortExplanationRu: 'Спортивные коллективы в футболе.',
    grammarNoteRu: 'Мужской род: el equipo.'
  },
  'estaciones': {
    lemma: 'la estación / las estaciones',
    translationRu: 'времена года, сезоны',
    partOfSpeechRu: 'существительное (мн. число)',
    shortExplanationRu: '4 периода года: весна, лето, осень, зима.',
    grammarNoteRu: 'Женский род: las cuatro estaciones.'
  },
  'eterna': {
    lemma: 'eterno / eterna',
    translationRu: 'вечная',
    partOfSpeechRu: 'прилагательное (жен. род)',
    shortExplanationRu: 'Не прекращающаяся во времени.',
    exampleEs: 'eterna primavera (вечная весна)'
  },
  'exporta': {
    lemma: 'exportar',
    translationRu: 'экспортирует, вывозит за рубеж',
    partOfSpeechRu: 'глагол (3 лицо ед. ч.)',
    shortExplanationRu: 'Поставлять товары в другие страны.',
    verbPrepositionRu: 'Управление: exportar algo a un país (экспортировать что-то в страну).',
    exampleEs: 'exporta rosas a muchos países'
  },

  // --- F ---
  'famosas': {
    lemma: 'famoso / famosa',
    translationRu: 'знаменитые, известные',
    partOfSpeechRu: 'прилагательное (мн. число)',
    shortExplanationRu: 'Пользующиеся широкой известностью во всём мире.',
    exampleEs: 'las famosas islas Galápagos'
  },
  'finos': {
    lemma: 'fino / fina',
    translationRu: 'тонкие, элитные, изысканные',
    partOfSpeechRu: 'прилагательное (мн. число)',
    shortExplanationRu: 'Высшего сорта и тонкого вкуса (о шоколаде).',
    exampleEs: 'chocolates finos'
  },
  'forma': {
    lemma: 'la forma',
    translationRu: 'форма, очертание',
    partOfSpeechRu: 'существительное (жен. род)',
    shortExplanationRu: 'Внешние очертания геоида Земли.',
    exampleEs: 'la forma de la Tierra'
  },
  'fútbol': {
    lemma: 'el fútbol',
    translationRu: 'футбол',
    partOfSpeechRu: 'существительное (муж. род)',
    shortExplanationRu: 'Главный и самый любимый вид спорта в Эквадоре.',
    verbPrepositionRu: 'С глаголом играть: jugar al fútbol (играть в футбол).'
  },

  // --- G ---
  'galápagos': {
    lemma: 'las Galápagos',
    translationRu: 'Галапагосские острова',
    partOfSpeechRu: 'существительное (имя собственное)',
    shortExplanationRu: 'Уникальный архипелаг в Тихом океане, провинция Эквадора.'
  },
  'gigantes': {
    lemma: 'gigante',
    translationRu: 'гигантские, огромные',
    partOfSpeechRu: 'прилагательное (мн. число)',
    shortExplanationRu: 'Необычайно крупных размеров.',
    exampleEs: 'tortugas gigantes'
  },
  'gracias': {
    lemma: 'gracias a',
    translationRu: 'благодаря (кому-то/чему-то)',
    partOfSpeechRu: 'предложный оборот',
    shortExplanationRu: 'Указывает на положительную причину или способствующий фактор.',
    verbPrepositionRu: 'Всегда с предлогом a: gracias a la forma (благодаря форме).'
  },
  'gran': {
    lemma: 'grande / gran',
    translationRu: 'великая, огромная, главная',
    partOfSpeechRu: 'прилагательное',
    shortExplanationRu: 'Усечённая форма от grande перед существительным единственного числа.',
    exampleEs: 'la gran pasión (великая страсть)'
  },

  // --- H ---
  'hay': {
    lemma: 'haber (hay)',
    translationRu: 'есть, имеется, имеются, существует',
    partOfSpeechRu: 'безличный глагол',
    shortExplanationRu: 'Констатирует наличие предметов или явлений где-либо (не изменяется по числам!).',
    exampleEs: 'Hay cuatro estaciones. No hay otoño.'
  },
  'hemisferio': {
    lemma: 'el hemisferio',
    translationRu: 'полушарие (половина планеты)',
    partOfSpeechRu: 'существительное (муж. род)',
    shortExplanationRu: 'Северное или южное полушарие Земли, разделённые экватором.',
    exampleEs: 'hemisferio norte y hemisferio sur'
  },
  'hermosas': {
    lemma: 'hermoso / hermosa',
    translationRu: 'прекрасные, очень красивые',
    partOfSpeechRu: 'прилагательное (мн. число)',
    shortExplanationRu: 'Обладающие совершенной эстетической красотой.',
    exampleEs: 'rosas hermosas'
  },

  // --- I ---
  'invierno': {
    lemma: 'el invierno',
    translationRu: 'зима',
    partOfSpeechRu: 'существительное (муж. род)',
    shortExplanationRu: 'Холодное время года. В Эквадоре зимы со снегом нет.',
    grammarNoteRu: 'Мужской род: el invierno.'
  },
  'islas': {
    lemma: 'la isla / las islas',
    translationRu: 'острова',
    partOfSpeechRu: 'существительное (жен. род)',
    shortExplanationRu: 'Участки суши, окружённые водой.',
    grammarNoteRu: 'Женский род: las islas.'
  },

  // --- J ---
  'jugar': {
    lemma: 'jugar',
    translationRu: 'играть',
    partOfSpeechRu: 'глагол (инфинитив)',
    shortExplanationRu: 'Участвовать в спортивной или настольной игре.',
    verbPrepositionRu: 'С названиями видов спорта всегда: jugar a + артикль: jugar al fútbol (играть в футбол).',
    exampleEs: 'jugar al fútbol en Quito'
  },
  'jugo': {
    lemma: 'el jugo',
    translationRu: 'сок',
    partOfSpeechRu: 'существительное (муж. род)',
    shortExplanationRu: 'Жидкость из фруктов. В Латинской Америке говорят jugo (в Испании — zumo).',
    exampleEs: 'jugo de naranja (апельсиновый сок)'
  },

  // --- L ---
  'limón': {
    lemma: 'el limón',
    translationRu: 'лимон / лайм',
    partOfSpeechRu: 'существительное (муж. род)',
    shortExplanationRu: 'Кислый цитрус, основа маринада для эквадорского севиче.'
  },
  'línea': {
    lemma: 'la línea',
    translationRu: 'линия, черта',
    partOfSpeechRu: 'существительное (жен. род)',
    shortExplanationRu: 'Воображаемая или нарисованная линия экватора.',
    exampleEs: 'la línea del ecuador'
  },
  'lluvias': {
    lemma: 'la lluvia / las lluvias',
    translationRu: 'дожди',
    partOfSpeechRu: 'существительное (мн. число)',
    shortExplanationRu: 'Атмосферные осадки. В Эквадоре есть «сезон дождей» (época de lluvias).'
  },

  // --- M ---
  'más': {
    lemma: 'más',
    translationRu: 'более, больше, самый',
    partOfSpeechRu: 'наречие степени',
    shortExplanationRu: 'Образует сравнительную и превосходную степень («el punto más alto»).',
    verbPrepositionRu: 'С числительными для значения «более»: más de cien años.'
  },
  'metros': {
    lemma: 'el metro / los metros',
    translationRu: 'метры',
    partOfSpeechRu: 'существительное (мн. число)',
    shortExplanationRu: 'Единица измерения длины и высоты над уровнем моря.'
  },
  'mil': {
    lemma: 'mil',
    translationRu: 'тысяча (1000)',
    partOfSpeechRu: 'числительное',
    shortExplanationRu: 'Числительное «тысяча» не меняется по родам.'
  },
  'mitad': {
    lemma: 'la mitad',
    translationRu: 'половина, середина',
    partOfSpeechRu: 'существительное (жен. род)',
    shortExplanationRu: 'Ровно одна вторая часть чего-либо.',
    exampleEs: 'Mitad del Mundo (Середина мира)'
  },
  'montañas': {
    lemma: 'la montaña / las montañas',
    translationRu: 'горы',
    partOfSpeechRu: 'существительное (жен. род)',
    shortExplanationRu: 'Возвышенности земной поверхности (горы Анд).',
    grammarNoteRu: 'Женский род: las montañas.'
  },
  'monumento': {
    lemma: 'el monumento',
    translationRu: 'памятник, монумент',
    partOfSpeechRu: 'существительное (муж. род)',
    shortExplanationRu: 'Архитектурное сооружение в честь исторического или географического события.'
  },
  'muchos': {
    lemma: 'mucho / muchos',
    translationRu: 'многие, много',
    partOfSpeechRu: 'местоимение / прил.',
    shortExplanationRu: 'Указывает на большое количество предметов.',
    exampleEs: 'a muchos países'
  },
  'mundo': {
    lemma: 'el mundo',
    translationRu: 'мир, планета Земля',
    partOfSpeechRu: 'существительное (муж. род)',
    shortExplanationRu: 'Земной шар со всеми его жителями и природой.'
  },
  'mundos': {
    lemma: 'los mundos',
    translationRu: 'миры',
    partOfSpeechRu: 'существительное (мн. число)',
    shortExplanationRu: 'Метафора 4 контрастных природных регионов Эквадора: «четыре мира в одной стране».'
  },
  'muy': {
    lemma: 'muy',
    translationRu: 'очень',
    partOfSpeechRu: 'наречие степени',
    shortExplanationRu: 'Усиливает прилагательное или наречие (muy alto, muy difícil).'
  },

  // --- N ---
  'naranja': {
    lemma: 'la naranja',
    translationRu: 'апельсин',
    partOfSpeechRu: 'существительное (жен. род)',
    shortExplanationRu: 'Сладкий цитрус, сок которого добавляют в эквадорское севиче.'
  },
  'no': {
    lemma: 'no',
    translationRu: 'не, нет',
    partOfSpeechRu: 'отрицательная частица',
    shortExplanationRu: 'Ставится строго перед глаголом для отрицания: no hay, no tenemos.'
  },
  'norte': {
    lemma: 'el norte',
    translationRu: 'север, северный',
    partOfSpeechRu: 'существительное / прил.',
    shortExplanationRu: 'Северная сторона света или северное полушарие.'
  },

  // --- O ---
  'ochocientos': {
    lemma: 'ochocientos',
    translationRu: 'восемьсот (800)',
    partOfSpeechRu: 'числительное',
    shortExplanationRu: 'Числительное (dos mil ochocientos — 2800).'
  },
  'otoño': {
    lemma: 'el otoño',
    translationRu: 'осень',
    partOfSpeechRu: 'существительное (муж. род)',
    shortExplanationRu: 'Сезон листопада и холодов. В Эквадоре осени нет из-за экватора.'
  },
  'otro': {
    lemma: 'otro / otra',
    translationRu: 'другой, ещё один',
    partOfSpeechRu: 'местоимение',
    shortExplanationRu: 'Указывает на иной предмет из пары или ряда.',
    exampleEs: 'un pie en el norte y otro en el sur'
  },
  'otros': {
    lemma: 'otros / otras',
    translationRu: 'другие',
    partOfSpeechRu: 'местоимение (мн. число)',
    shortExplanationRu: 'Иные люди, команды или страны.',
    exampleEs: 'equipos de otros países'
  },

  // --- P ---
  'país': {
    lemma: 'el país',
    translationRu: 'страна, государство',
    partOfSpeechRu: 'существительное (муж. род)',
    shortExplanationRu: 'Территория с суверенной государственной властью.',
    grammarNoteRu: 'Ударение на í: país, во мн. числе: países.'
  },
  'países': {
    lemma: 'los países',
    translationRu: 'страны',
    partOfSpeechRu: 'существительное (мн. число)',
    shortExplanationRu: 'Множественное число от el país.'
  },
  'para': {
    lemma: 'para',
    translationRu: 'для, ради, чтобы',
    partOfSpeechRu: 'предлог цели/адресата',
    shortExplanationRu: 'Указывает на адресата действия или цель.',
    exampleEs: 'difícil para los equipos'
  },
  'pasa': {
    lemma: 'pasar',
    translationRu: 'проходит, пролегает',
    partOfSpeechRu: 'глагол (3 лицо ед. ч.)',
    shortExplanationRu: 'Двигаться или пролегать через пространство.',
    verbPrepositionRu: 'Управление: pasar por (проходить через что-то).',
    exampleEs: 'pasa por el país (проходит через страну)'
  },
  'pasión': {
    lemma: 'la pasión',
    translationRu: 'страсть, пламенное увлечение',
    partOfSpeechRu: 'существительное (жен. род)',
    shortExplanationRu: 'Сильное эмоциональное чувство (la gran pasión de los ecuatorianos).',
    grammarNoteRu: 'Слова на -ión всегда женского рода (la pasión, la región).'
  },
  'pequeño': {
    lemma: 'pequeño / pequeña',
    translationRu: 'маленький, небольшой',
    partOfSpeechRu: 'прилагательное',
    shortExplanationRu: 'Небольшой по площади или размеру.',
    exampleEs: 'Ecuador es un país pequeño'
  },
  'pero': {
    lemma: 'pero',
    translationRu: 'но, однако',
    partOfSpeechRu: 'противительный союз',
    shortExplanationRu: 'Соединяет контрастные части предложения.',
    exampleEs: 'país pequeño, pero tiene cuatro regiones'
  },
  'pie': {
    lemma: 'el pie',
    translationRu: 'нога, стопа',
    partOfSpeechRu: 'существительное (муж. род)',
    shortExplanationRu: 'Нижняя часть ноги человека.',
    exampleEs: 'poner un pie (поставить ногу)'
  },
  'planeta': {
    lemma: 'el planeta',
    translationRu: 'планета',
    partOfSpeechRu: 'существительное (муж. род)',
    shortExplanationRu: 'Небесное тело, вращающееся вокруг звезды.',
    grammarNoteRu: 'Внимание: мужской род вопреки окончанию -a: el planeta!'
  },
  'plato': {
    lemma: 'el plato',
    translationRu: 'блюдо, кушанье / тарелка',
    partOfSpeechRu: 'существительное (муж. род)',
    shortExplanationRu: 'Кулинарное блюдо национальной кухни.',
    exampleEs: 'un plato tradicional delicioso'
  },
  'playas': {
    lemma: 'la playa / las playas',
    translationRu: 'пляжи',
    partOfSpeechRu: 'существительное (жен. род)',
    shortExplanationRu: 'Песчаные или галечные берега океана.',
    grammarNoteRu: 'Женский род: las playas.'
  },
  'poder': {
    lemma: 'poder',
    translationRu: 'мочь, быть в состоянии',
    partOfSpeechRu: 'глагол',
    shortExplanationRu: 'Модальный глагол физической или ситуативной возможности.',
    verbPrepositionRu: 'Употребляется прямо с инфинитивом без предлога: poder + hacer.'
  },
  'poner': {
    lemma: 'poner',
    translationRu: 'ставить, класть, помещать',
    partOfSpeechRu: 'глагол (инфинитив)',
    shortExplanationRu: 'Помещать предмет или ногу в определённое место.',
    verbPrepositionRu: 'Управление: poner algo en un lugar (поставить что-то куда-то).',
    exampleEs: 'poner un pie en el hemisferio'
  },
  'por': {
    lemma: 'por',
    translationRu: 'через, по, из-за',
    partOfSpeechRu: 'предлог причины/пути',
    shortExplanationRu: 'Обозначает движение сквозь территорию или причину.',
    exampleEs: 'pasa por el país; por eso (поэтому)'
  },
  'porque': {
    lemma: 'porque',
    translationRu: 'потому что, так как',
    partOfSpeechRu: 'причинный союз',
    shortExplanationRu: 'Вводит придаточное предложение причины (пишется слитно, без ударения!).',
    exampleEs: 'se llama así porque...'
  },
  'premiados': {
    lemma: 'premiado / premiada',
    translationRu: 'награждённые, титулованные, завоевавшие призы',
    partOfSpeechRu: 'причастие / прил.',
    shortExplanationRu: 'Получивший международные награды на конкурсах шоколада.',
    exampleEs: 'chocolates premiados'
  },
  'primavera': {
    lemma: 'la primavera',
    translationRu: 'весна',
    partOfSpeechRu: 'существительное (жен. род)',
    shortExplanationRu: 'Тёплое время года. В Кито климат «вечной весны» круглый год.'
  },
  'produce': {
    lemma: 'producir',
    translationRu: 'производит, выпускает',
    partOfSpeechRu: 'глагол (3 лицо ед. ч.)',
    shortExplanationRu: 'Создавать продукцию в сельском хозяйстве или промышленности.',
    verbPrepositionRu: 'Прямое дополнение без предлога: producir chocolate.',
    exampleEs: 'Ecuador produce chocolate fino'
  },
  'puedes': {
    lemma: 'poder (puedes)',
    translationRu: 'ты можешь, можно',
    partOfSpeechRu: 'глагол (2 лицо ед. ч.)',
    shortExplanationRu: 'Форма глагола poder для обращения на «ты».',
    verbPrepositionRu: 'Сочетается напрямую с инфинитивом: puedes poner (ты можешь поставить).'
  },
  'punto': {
    lemma: 'el punto',
    translationRu: 'точка, пункт, место',
    partOfSpeechRu: 'существительное (муж. род)',
    shortExplanationRu: 'Географическая точка на карте или на поверхности планеты.',
    exampleEs: 'el punto más alto'
  },

  // --- Q ---
  'que': {
    lemma: 'que',
    translationRu: 'который, которая, которые / что',
    partOfSpeechRu: 'союзное слово',
    shortExplanationRu: 'Относительное местоимение, связывающее главное и придаточное предложения.',
    exampleEs: 'tortugas que viven más de cien años'
  },
  'quito': {
    lemma: 'Quito',
    translationRu: 'Кито',
    partOfSpeechRu: 'существительное (имя собственное)',
    shortExplanationRu: 'Высокогорная столица Эквадора (2850 м над уровнем моря), родина Матео.'
  },

  // --- R ---
  'regiones': {
    lemma: 'la región / las regiones',
    translationRu: 'регионы, области',
    partOfSpeechRu: 'существительное (мн. число)',
    shortExplanationRu: '4 природные зоны Эквадора: Коста, Сьерра, Амазония и Галапагосы.',
    grammarNoteRu: 'Женский род: las regiones.'
  },
  'rosas': {
    lemma: 'la rosa / las rosas',
    translationRu: 'розы',
    partOfSpeechRu: 'существительное (жен. род)',
    shortExplanationRu: 'Знаменитые крупные эквадорские розы, экспортируемые по всему миру.'
  },
  'rusia': {
    lemma: 'Rusia',
    translationRu: 'Россия',
    partOfSpeechRu: 'существительное (имя собственное)',
    shortExplanationRu: 'Самая большая страна в мире, куда Матео приехал учиться.'
  },

  // --- S ---
  'seca': {
    lemma: 'seco / seca',
    translationRu: 'сухая',
    partOfSpeechRu: 'прилагательное (жен. род)',
    shortExplanationRu: 'Не имеющая дождей.',
    exampleEs: 'época seca (сухой сезон в Эквадоре)'
  },
  'selva': {
    lemma: 'la selva',
    translationRu: 'сельва, тропические джунгли',
    partOfSpeechRu: 'существительное (жен. род)',
    shortExplanationRu: 'Густой вечнозелёный влажный экваториальный лес Амазонии.'
  },
  'sierra': {
    lemma: 'la Sierra',
    translationRu: 'Сьерра, горный регион Анд',
    partOfSpeechRu: 'существительное (жен. род)',
    shortExplanationRu: 'Центральная часть Эквадора с долинами, горами и вулканами.'
  },
  'sol': {
    lemma: 'el Sol',
    translationRu: 'Солнце',
    partOfSpeechRu: 'существительное (муж. род)',
    shortExplanationRu: 'Центральная звезда нашей планетной системы.',
    exampleEs: 'cercano al Sol'
  },
  'solo': {
    lemma: 'solo',
    translationRu: 'только, лишь',
    partOfSpeechRu: 'наречие',
    shortExplanationRu: 'Ограничительное наречие («только сухой сезон»).',
    exampleEs: 'Solo hay época seca.'
  },
  'su': {
    lemma: 'su / sus',
    translationRu: 'его, её, их',
    partOfSpeechRu: 'притяжательное местоимение',
    shortExplanationRu: 'Обозначает принадлежность третьему лицу.',
    exampleEs: 'su cumbre (его вершина)'
  },
  'sur': {
    lemma: 'el sur',
    translationRu: 'юг, южный',
    partOfSpeechRu: 'существительное / прил.',
    shortExplanationRu: 'Южная сторона света или южное полушарие.',
    exampleEs: 'hemisferio sur'
  },

  // --- T ---
  'también': {
    lemma: 'también',
    translationRu: 'также, тоже',
    partOfSpeechRu: 'наречие',
    shortExplanationRu: 'Служит для добавления нового факта или согласия.',
    exampleEs: 'También exporta rosas.'
  },
  'tiene': {
    lemma: 'tener (tiene)',
    translationRu: 'имеет, обладает, у него есть',
    partOfSpeechRu: 'глагол (3 лицо ед. ч.)',
    shortExplanationRu: 'Выражает обладание признаком, территорией или качеством.',
    exampleEs: 'Ecuador tiene cuatro regiones únicas.'
  },
  'tierra': {
    lemma: 'la Tierra',
    translationRu: 'Земля (планета)',
    partOfSpeechRu: 'существительное (жен. род)',
    shortExplanationRu: 'Наша планета.',
    exampleEs: 'el planeta Tierra'
  },
  'todo': {
    lemma: 'todo / toda',
    translationRu: 'весь, целый',
    partOfSpeechRu: 'местоимение',
    shortExplanationRu: 'Охватывает весь объём или период времени.',
    exampleEs: 'todo el año (круглый год), todo el planeta (вся планета)'
  },
  'tortugas': {
    lemma: 'la tortuga / las tortugas',
    translationRu: 'черепахи',
    partOfSpeechRu: 'существительное (жен. род)',
    shortExplanationRu: 'Гигантские галапагосские черепахи (достигают сотен килограммов и живут более 100 лет).'
  },
  'tradicional': {
    lemma: 'tradicional',
    translationRu: 'традиционный',
    partOfSpeechRu: 'прилагательное',
    shortExplanationRu: 'Сложившийся по давним традициям предков.',
    exampleEs: 'un plato tradicional'
  },
  'tropicales': {
    lemma: 'tropical',
    translationRu: 'тропические',
    partOfSpeechRu: 'прилагательное (мн. число)',
    shortExplanationRu: 'Характерные для жарких тропиков.',
    exampleEs: 'playas tropicales'
  },

  // --- U ---
  'únicas': {
    lemma: 'único / única',
    translationRu: 'уникальные, неповторимые',
    partOfSpeechRu: 'прилагательное (мн. число)',
    shortExplanationRu: 'Не имеющие аналогов в мире.',
    exampleEs: 'cuatro regiones únicas'
  },
  'uno': {
    lemma: 'uno',
    translationRu: 'один',
    partOfSpeechRu: 'числительное / местоимение',
    shortExplanationRu: 'Один из множества.',
    exampleEs: 'uno de los chocolates más finos'
  },

  // --- V ---
  'verde': {
    lemma: 'verde',
    translationRu: 'зелёный',
    partOfSpeechRu: 'прилагательное',
    shortExplanationRu: 'Цвет листвы влажных джунглей.',
    exampleEs: 'selva verde'
  },
  'verano': {
    lemma: 'el verano',
    translationRu: 'лето',
    partOfSpeechRu: 'существительное (муж. род)',
    shortExplanationRu: 'Жаркое время года.'
  },
  'vienen': {
    lemma: 'venir (vienen)',
    translationRu: 'приезжают, прибывают',
    partOfSpeechRu: 'глагол (3 лицо мн. ч.)',
    shortExplanationRu: 'Перемещаться сюда из другого места.',
    verbPrepositionRu: 'Управление: venir de (приезжать из какой-либо страны или города).',
    exampleEs: 'equipos que vienen de otros países'
  },
  'viven': {
    lemma: 'vivir (viven)',
    translationRu: 'живут',
    partOfSpeechRu: 'глагол (3 лицо мн. ч.)',
    shortExplanationRu: 'Существовать, обитать во времени или пространстве.',
    verbPrepositionRu: 'Управление: vivir en (жить в каком-то месте), vivir más de (жить более скольких-то лет).',
    exampleEs: 'viven más de cien años'
  },
  'volcán': {
    lemma: 'el volcán',
    translationRu: 'вулкан',
    partOfSpeechRu: 'существительное (муж. род)',
    shortExplanationRu: 'Геологическое образование с кратером. В Эквадоре множество действующих и потухших вулканов.',
    grammarNoteRu: 'Мужской род: el volcán, во мн. ч. los volcanes.'
  },
  'volcanes': {
    lemma: 'los volcanes',
    translationRu: 'вулканы',
    partOfSpeechRu: 'существительное (мн. число)',
    shortExplanationRu: 'Множественное число от el volcán.'
  },

  // --- Y ---
  'y': {
    lemma: 'y',
    translationRu: 'и',
    partOfSpeechRu: 'соединительный союз',
    shortExplanationRu: 'Базовый союз соединения однородных членов или предложений.'
  }
};

/**
 * Normalizes a word for dictionary lookup:
 * - strips surrounding punctuation («», ¡!, ., ,, :, ?, etc.)
 * - converts to lowercase
 * - handles multi-word forms if relevant
 */
export function normalizeWordToken(token: string): string {
  return token
    .toLowerCase()
    .replace(/^[«"¡¿\(\[\{]+/, '')
    .replace(/[»"!\?\.,:;\)\]\}]+$/, '')
    .trim();
}

/**
 * Checks if a word is an excluded article or form of ser/estar
 */
export function isExcludedWord(cleanWord: string): boolean {
  return EXCLUDED_WORDS.has(cleanWord.toLowerCase());
}

/**
 * Finds explanation in the dictionary for a word
 */
export function getWordExplanation(rawWord: string): WordExplanation | null {
  const clean = normalizeWordToken(rawWord);
  if (!clean || isExcludedWord(clean)) {
    return null;
  }

  // Exact match
  if (ECUADOR_WORD_DICTIONARY[clean]) {
    return ECUADOR_WORD_DICTIONARY[clean];
  }

  // Fallback match removing trailing 's' for simple plurals
  if (clean.endsWith('s')) {
    const singular = clean.slice(0, -1);
    if (ECUADOR_WORD_DICTIONARY[singular]) {
      return ECUADOR_WORD_DICTIONARY[singular];
    }
  }

  // Generic fallback if not explicitly found
  return {
    lemma: clean,
    translationRu: `Слово «${clean}»`,
    partOfSpeechRu: 'испанское слово',
    shortExplanationRu: 'Нажмите на кнопку озвучки, чтобы услышать правильное произношение.',
    exampleEs: clean
  };
}
