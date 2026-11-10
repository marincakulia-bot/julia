import mitadDelMundoImg from '../assets/images/mitad_del_mundo_1794320275835.jpg';
import quitoEternalSpringImg from '../assets/images/quito_eternal_spring_1794320288879.jpg';
import galapagosTortoiseImg from '../assets/images/galapagos_tortoise_1794320301222.jpg';
import volcanChimborazoImg from '../assets/images/volcan_chimborazo_1794320313674.jpg';
import ecuadorCacaoRosesImg from '../assets/images/ecuador_cacao_roses_1794320325448.jpg';
import quitoFootballAltitudeImg from '../assets/images/quito_football_altitude_1794320339005.jpg';

export interface EcuadorFactParagraph {
  id: string;
  titleEs: string;
  titleRu: string;
  textEs: string;
  textRu: string;
  highlightFactRu: string;
  imageUrl: string;
  photoCaptionRu: string;
}

export interface TrueFalseQuestion {
  id: string;
  statementEs: string;
  statementRu: string;
  isTrue: boolean;
  explanationRu: string;
}

export interface SentenceCompletionTask {
  id: string;
  beginningEs: string;
  beginningRu: string;
  options: {
    id: string;
    textEs: string;
    textRu: string;
    isCorrect: boolean;
  }[];
  tipRu: string;
}

export interface ConversationOpenerFormula {
  id: string;
  formulaEs: string;
  formulaRu: string;
  contextRu: string;
  exampleInDialogue: string;
}

export const ECUADOR_FACTS_TEXT: EcuadorFactParagraph[] = [
  {
    id: 'f1',
    titleEs: '1. El nombre y la línea del ecuador',
    titleRu: '1. Название страны и экватор',
    textEs: 'Ecuador se llama así porque la línea del ecuador pasa por el país. Cerca de la capital, Quito, está el monumento «Mitad del Mundo». ¡Allí puedes poner un pie en el hemisferio norte y otro en el hemisferio sur!',
    textRu: 'Эквадор назван так потому, что через страну проходит линия экватора. Недалеко от столицы, Кито, находится памятник «Середина мира» (Mitad del Mundo). Там можно поставить одну ногу в северное полушарие, а другую — в южное!',
    highlightFactRu: 'Эквадор делит планету ровно пополам на два полушария.',
    imageUrl: mitadDelMundoImg,
    photoCaptionRu: 'Памятник «Mitad del Mundo» (Середина мира) и жёлтая черта экватора'
  },
  {
    id: 'f2',
    titleEs: '2. En Ecuador no hay otoño: el clima',
    titleRu: '2. В Эквадоре нет осени: климат',
    textEs: 'En Rusia hay cuatro estaciones: primavera, verano, otoño e invierno. ¡Pero en Ecuador no hay cuatro estaciones! Solo hay época seca y época de lluvias. En la capital, Quito, hay un clima de «eterna primavera» todo el año porque la ciudad está muy alta en las montañas de los Andes.',
    textRu: 'В России четыре времени года: весна, лето, осень и зима. Но в Эквадоре нет четырёх времён года! Есть только сухой сезон и сезон дождей. В столице, Кито, круглый год климат «вечной весны», потому что город расположен высоко в горах Анд.',
    highlightFactRu: 'Никакой золотой осени или морозной зимы в Эквадоре нет — круглый год приятная весна или тропическое тепло.',
    imageUrl: quitoEternalSpringImg,
    photoCaptionRu: 'Кито — колониальный город на высоте 2850 м в объятиях зелёных Анд'
  },
  {
    id: 'f3',
    titleEs: '3. Cuatro mundos en un solo país',
    titleRu: '3. Четыре разных мира в одной стране',
    textEs: 'Ecuador es un país pequeño, pero tiene cuatro regiones únicas: la Costa con playas tropicales, la Sierra con montañas y volcanes, la Amazonía con selva verde y las famosas islas Galápagos con tortugas gigantes que viven más de cien años.',
    textRu: 'Эквадор — небольшая страна, но в ней четыре уникальных региона: Побережье с тёплыми пляжами, Сьерра с горами и вулканами, Амазония с зелёными джунглями и знаменитые Галапагосские острова с гигантскими черепахами, которые живут больше 100 лет.',
    highlightFactRu: 'За один день на машине можно проехать от заснеженного вулкана до жаркого тихоокеанского пляжа.',
    imageUrl: galapagosTortoiseImg,
    photoCaptionRu: 'Гигантская черепаха на Галапагосских островах (провинция Эквадора)'
  },
  {
    id: 'f4',
    titleEs: '4. El volcán Chimborazo: el punto más cercano al Sol',
    titleRu: '4. Вулкан Чимборасо: ближе всего к Солнцу',
    textEs: 'El volcán Chimborazo es el punto más alto de Ecuador. Gracias a la forma de la Tierra en el ecuador, ¡su cumbre es el punto más cercano al Sol de todo el planeta Tierra!',
    textRu: 'Вулкан Чимборасо — высшая точка Эквадора. Из-за выпуклой формы Земли на экваторе его вершина является самой близкой точкой планеты к Солнцу (ближе, чем Эверест)!',
    highlightFactRu: 'Вершина вулкана Чимборасо — самое близкое место на Земле к космосу и звёздам.',
    imageUrl: volcanChimborazoImg,
    photoCaptionRu: 'Вулкан Чимборасо (6263 м) — вершина Земли, самая близкая к Солнцу'
  },
  {
    id: 'f5',
    titleEs: '5. El mejor chocolate, rosas y ceviche',
    titleRu: '5. Лучший в мире шоколад, розы и севиче',
    textEs: 'Ecuador produce uno de los chocolates más finos y premiados del mundo gracias al cacao aromático. También exporta rosas hermosas a muchos países. Un plato tradicional delicioso es el ceviche de camarón con jugo de naranja y limón.',
    textRu: 'Эквадор производит один из лучших и самых титулованных сортов шоколада в мире благодаря ароматному какао «fino de aroma». Также страна экспортирует миллионы роз. А традиционное любимое блюдо — севиче из креветок с соком апельсина и лимона.',
    highlightFactRu: 'Шоколад из Эквадора признан одним из лучших на мировых конкурсах.',
    imageUrl: ecuadorCacaoRosesImg,
    photoCaptionRu: 'Плоды какао «arriba nacional», премиальный тёмный шоколад и эквадорские розы'
  },
  {
    id: 'f6',
    titleEs: '6. El fútbol a gran altura',
    titleRu: '6. Футбол на большой высоте',
    textEs: 'El fútbol es la gran pasión de los ecuatorianos. La capital, Quito, está a dos mil ochocientos metros de altura. Por eso, jugar al fútbol allí es muy difícil para los equipos que vienen de otros países.',
    textRu: 'Футбол — главная страсть эквадорцев. Столица, Кито, находится на высоте 2850 метров. Поэтому играть там в футбол иностранным командам невероятно тяжело из-за разреженного горного воздуха.',
    highlightFactRu: 'Матео и его соотечественники обожают футбол и гордятся своими клубами!',
    imageUrl: quitoFootballAltitudeImg,
    photoCaptionRu: 'Высокогорный стадион в Кито на фоне Анд — главная спортивная гордость страны'
  }
];

export const TRUE_FALSE_QUESTIONS: TrueFalseQuestion[] = [
  {
    id: 'tf1',
    statementEs: 'En Ecuador hay cuatro estaciones: primavera, verano, otoño e invierno.',
    statementRu: 'В Эквадоре четыре времени года: весна, лето, осень и зима.',
    isTrue: false,
    explanationRu: 'Ложь! В Эквадоре нет осени или зимы. Страна находится на экваторе, поэтому там есть только сухой сезон и сезон дождей, а в Кито круглый год весенняя погода.'
  },
  {
    id: 'tf2',
    statementEs: 'El país se llama Ecuador por la línea ecuatorial que divide el planeta.',
    statementRu: 'Страна называется Эквадор из-за линии экватора, которая делит планету.',
    isTrue: true,
    explanationRu: 'Правда! Памятник «Mitad del Mundo» рядом с Кито позволяет стоять сразу в двух полушариях.'
  },
  {
    id: 'tf3',
    statementEs: 'Las famosas islas Galápagos pertenecen a Ecuador.',
    statementRu: 'Знаменитые Галапагосские острова принадлежат Эквадору.',
    isTrue: true,
    explanationRu: 'Правда! Галапагосы — это провинция Эквадора с уникальной природой и гигантскими черепахами.'
  },
  {
    id: 'tf4',
    statementEs: 'En la capital de Ecuador, Quito, hace un frío polar con mucha nieve.',
    statementRu: 'В столице Эквадора, Кито, стоит полярный холод с сугробами снега.',
    isTrue: false,
    explanationRu: 'Ложь! В Кито климат «вечной весны» (eterna primavera) — умеренно тёплая и комфортная погода круглый год.'
  },
  {
    id: 'tf5',
    statementEs: 'Ecuador es conocido en el mundo por su cacao fino y su chocolate.',
    statementRu: 'Эквадор известен в мире своим ароматным какао и шоколадом.',
    isTrue: true,
    explanationRu: 'Правда! Эквадорское какао «fino de aroma» ценится лучшими шоколатье планеты.'
  },
  {
    id: 'tf6',
    statementEs: 'El deporte más popular en Ecuador es el hockey sobre hielo.',
    statementRu: 'Самый популярный вид спорта в Эквадоре — хоккей на льду.',
    isTrue: false,
    explanationRu: 'Ложь! В Эквадоре спорт номер один — футбол (el fútbol). Матео болеет за клуб «Liga de Quito»!'
  }
];

export const SENTENCE_COMPLETION_TASKS: SentenceCompletionTask[] = [
  {
    id: 'sc1',
    beginningEs: 'En Ecuador no hay cuatro estaciones, sino...',
    beginningRu: 'В Эквадоре нет четырёх времён года, а только...',
    options: [
      {
        id: 'opt1',
        textEs: '...época seca y época de lluvias.',
        textRu: '...сухой сезон и сезон дождей.',
        isCorrect: true
      },
      {
        id: 'opt2',
        textEs: '...nieve y mucho hielo.',
        textRu: '...снег и много льда.',
        isCorrect: false
      },
      {
        id: 'opt3',
        textEs: '...solo otoño frío.',
        textRu: '...только холодная осень.',
        isCorrect: false
      }
    ],
    tipRu: 'Экватор обеспечивает круглогодичное солнце, поэтому времена года делятся только по дождям.'
  },
  {
    id: 'sc2',
    beginningEs: 'La capital, Quito, tiene un clima de...',
    beginningRu: 'Столица, Кито, имеет климат...',
    options: [
      {
        id: 'opt1',
        textEs: '...eterna primavera en las montañas.',
        textRu: '...вечной весны в горах.',
        isCorrect: true
      },
      {
        id: 'opt2',
        textEs: '...invierno con tormentas polares.',
        textRu: '...зимы с полярными бурями.',
        isCorrect: false
      },
      {
        id: 'opt3',
        textEs: '...otoño triste y oscuro.',
        textRu: '...грустной тёмной осени.',
        isCorrect: false
      }
    ],
    tipRu: 'Высота 2850 метров над уровнем моря делает погоду в Кито мягкой и весенней круглый год.'
  },
  {
    id: 'sc3',
    beginningEs: 'El monumento «Mitad del Mundo» marca...',
    beginningRu: 'Памятник «Середина мира» отмечает...',
    options: [
      {
        id: 'opt1',
        textEs: '...la línea entre los dos hemisferios.',
        textRu: '...линию между двумя полушариями.',
        isCorrect: true
      },
      {
        id: 'opt2',
        textEs: '...el estadio de fútbol más grande.',
        textRu: '...самый большой футбольный стадион.',
        isCorrect: false
      },
      {
        id: 'opt3',
        textEs: '...la estación de tren del norte.',
        textRu: '...северную железнодорожную станцию.',
        isCorrect: false
      }
    ],
    tipRu: 'Там проходит точная нулевая параллель экватора.'
  },
  {
    id: 'sc4',
    beginningEs: 'Las famosas islas Galápagos tienen...',
    beginningRu: 'Знаменитые Галапагосские острова имеют...',
    options: [
      {
        id: 'opt1',
        textEs: '...tortugas gigantes y animales únicos.',
        textRu: '...гигантских черепах и уникальных животных.',
        isCorrect: true
      },
      {
        id: 'opt2',
        textEs: '...árboles de abedul ruso.',
        textRu: '...русские берёзы.',
        isCorrect: false
      },
      {
        id: 'opt3',
        textEs: '...campos de esquí de nieve.',
        textRu: '...горнолыжные снежные курорты.',
        isCorrect: false
      }
    ],
    tipRu: 'Галапагосы вдохновили Чарльза Дарвина на теорию эволюции.'
  },
  {
    id: 'sc5',
    beginningEs: 'Ecuador es muy famoso por su...',
    beginningRu: 'Эквадор очень знаменит своим...',
    options: [
      {
        id: 'opt1',
        textEs: '...chocolate fino y deliciosas rosas.',
        textRu: '...изысканным шоколадом и красивыми розами.',
        isCorrect: true
      },
      {
        id: 'opt2',
        textEs: '...té negro con samovar.',
        textRu: '...чёрным чаем с самоваром.',
        isCorrect: false
      },
      {
        id: 'opt3',
        textEs: '...patinaje sobre hielo.',
        textRu: '...фигурным катанием.',
        isCorrect: false
      }
    ],
    tipRu: 'Какао и цветы — гордость эквадорского экспорта.'
  }
];

export const CONVERSATION_FORMULAS_ECUADOR: ConversationOpenerFormula[] = [
  {
    id: 'cf0',
    formulaEs: 'Solo estudio español desde hace poco, por eso a veces no entiendo bien.',
    formulaRu: 'Я только начала учить испанский, поэтому могу что-то не понимать.',
    contextRu: 'Фраза-спасительница: снимает стеснение и располагает собеседника говорить проще.',
    exampleInDialogue: '— Mateo, hablas muy rápido... Solo estudio español desde hace poco, por eso a veces no entiendo bien.'
  },
  {
    id: 'cf01',
    formulaEs: '¿Puedes repetir más despacio, por favor?',
    formulaRu: 'Повтори, пожалуйста, помедленнее.',
    contextRu: 'Вежливая просьба снизить темп речи. Латиноамериканцы с радостью помогут!',
    exampleInDialogue: '— ¡Claro que sí! No te preocupes, hablo más despacio.'
  },
  {
    id: 'cf1',
    formulaEs: 'He leído que en Ecuador no hay cuatro estaciones. ¿Es verdad?',
    formulaRu: 'Я читала, что в Эквадоре нет четырёх времён года. Это правда?',
    contextRu: 'Идеальный переход от разговора о погоде и осени в России к жизни в Эквадоре.',
    exampleInDialogue: '— Aquí en Rusia el otoño es fresco. He leído que en Ecuador no hay cuatro estaciones, ¿es verdad?'
  },
  {
    id: 'cf2',
    formulaEs: 'Yo sé que en Ecuador tienen las islas Galápagos y volcanes.',
    formulaRu: 'Я знаю, что в Эквадоре есть Галапагосские острова и вулканы.',
    contextRu: 'Показывает эрудицию: собеседнику будет приятно, что вы знаете о его стране.',
    exampleInDialogue: '— ¡Qué bien! Sí, las islas Galápagos son un tesoro natural.'
  },
  {
    id: 'cf3',
    formulaEs: '¿Puedes contarme un poco sobre Ecuador? Tengo mucha curiosidad.',
    formulaRu: 'Можешь рассказать немного об Эквадоре? Мне очень любопытно.',
    contextRu: 'Открытый вопрос, который даёт Матео возможность эмоционально рассказать о родине.',
    exampleInDialogue: '— ¡Con mucho gusto! Es un país pequeño pero con cuatro regiones mágicas.'
  },
  {
    id: 'cf4',
    formulaEs: 'Leí que Quito tiene un clima de eterna primavera. ¿Es así?',
    formulaRu: 'Я прочитала, что в Кито климат вечной весны. Это так?',
    contextRu: 'Отличный комплимент столице собеседника во время прохладной осени в России.',
    exampleInDialogue: '— ¡Exacto! Ni mucho frío ni calor extremo, siempre primaveral.'
  }
];
