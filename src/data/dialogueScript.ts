import { Scene, NounVocabularyItem, VerbFormulaItem } from '../types/dialogue';

const IMG_FOYER = '/src/assets/images/bg_foyer_philharmonic_1794269797435.jpg';
const IMG_HALL = '/src/assets/images/bg_concert_hall_1794269798047.jpg';
const IMG_CAFE = '/src/assets/images/bg_theater_cafe_1794269799629.jpg';
const IMG_LOUNGE = '/src/assets/images/bg_intermission_lounge_1794269801300.jpg';
const IMG_AUTUMN_STREET = '/src/assets/images/bg_autumn_street_philharmonic_1794315872198.jpg';
const IMG_NIGHT_ENTRANCE = '/src/assets/images/bg_night_street_theater_1794269800818.jpg';

export const SCENES: Scene[] = [
  // ==========================================
  // SCENE 1: ВСТРЕЧА У ВХОДА
  // ==========================================
  {
    id: 1,
    titleRu: 'Сцена 1 из 21: Встреча у филармонии',
    titleEs: 'Escena 1: El encuentro frente a la filarmónica',
    locationRu: 'Вход в филармонию',
    locationEs: 'La entrada de la filarmónica',
    descriptionRu: 'Вы встречаетесь с Матео перед входом в филармонию перед началом концерта.',
    bgImage: IMG_NIGHT_ENTRANCE,
    sceneFormulas: [
      {
        phraseEs: '¡Hola, Mateo! ¿Cómo estás hoy?',
        phraseRu: 'Привет, Матео! Как дела сегодня?',
        note: 'Универсальное дружеское приветствие'
      }
    ],
    exchanges: [
      {
        id: 's1-e1',
        exchangeNumber: 1,
        mateoLineEs: '¡Hola! ¡Qué alegría verte por fin! ¿Cómo estás hoy?',
        mateoLineRu: 'Привет! Какая радость наконец увидеть тебя! Как ты сегодня?',
        mateoExpression: 'smiling',
        choices: [
          {
            id: 's1-c1',
            type: 'short',
            textEs: '¡Hola! Muy bien, ¿y tú?',
            textRu: 'Привет! Очень хорошо, а ты?',
            tipRu: 'Короткий ответ: стандартная дружелюбная реплика с мгновенным встречным вопросом «¿y tú?» (а ты?).',
            mateoReactionEs: '¡Todo perfecto, gracias! Estoy emocionado por escuchar la música rusa.',
            mateoReactionRu: 'Всё отлично, спасибо! Я в предвкушении русской музыки.',
            reactionExpression: 'smiling'
          },
          {
            id: 's1-c2',
            type: 'elaborated',
            textEs: '¡Hola! Estoy muy feliz de verte. ¿Tuviste un buen día en la universidad?',
            textRu: 'Привет! Я очень рада тебя видеть. У тебя был хороший день в университете?',
            tipRu: 'Развёрнутый ответ: вы проявляете неподдельный интерес к делам Матео, задавая встречный вопрос.',
            mateoReactionEs: '¡Sí, bastante tranquilo! Y ahora listo para disfrutar de una gran velada.',
            mateoReactionRu: 'Да, довольно спокойный! И теперь готов насладиться прекрасным вечером.',
            reactionExpression: 'excited'
          },
          {
            id: 's1-c3',
            type: 'shift',
            textEs: '¡Hola! Mira qué majestuoso se ve este edificio iluminado, ¿verdad?',
            textRu: 'Привет! Посмотри, как величественно выглядит это подсвеченное здание, правда?',
            tipRu: 'Вежливый перевод внимания: вы привлекаете внимание Матео к красивой архитектуре здания филармонии.',
            mateoReactionEs: '¡Es verdad! La iluminación nocturna en Rusia es muy elegante.',
            mateoReactionRu: 'Правда! Ночная подсветка в России очень элегантная.',
            reactionExpression: 'surprised'
          }
        ]
      }
    ]
  },

  // ==========================================
  // SCENE 2: ОСЕННИЙ ВЕЧЕР В ГОРОДЕ
  // ==========================================
  {
    id: 2,
    titleRu: 'Сцена 2 из 21: Осенний вечер в городе',
    titleEs: 'Escena 2: La noche fresca de otoño',
    locationRu: 'Уличные ступени филармонии',
    locationEs: 'Las escaleras del teatro',
    descriptionRu: 'На улице дует прохладный октябрьский ветер, и вы говорите о погоде.',
    bgImage: IMG_AUTUMN_STREET,
    sceneFormulas: [
      {
        phraseEs: 'Hoy hace bastante fresco afuera.',
        phraseRu: 'Сегодня на улице довольно прохладно.',
        note: 'Разговорная формула о погоде с глаголом hacer'
      }
    ],
    exchanges: [
      {
        id: 's2-e1',
        exchangeNumber: 1,
        mateoLineEs: '¡Brrr! Afuera hace bastante frío hoy. El viento otoñal aquí es fuerte.',
        mateoLineRu: 'Брр! На улице довольно холодно сегодня. Осенний ветер здесь сильный.',
        mateoExpression: 'thinking',
        choices: [
          {
            id: 's2-c1',
            type: 'short',
            textEs: 'Sí, hoy hace fresco y viento.',
            textRu: 'Да, сегодня прохладно и ветрено.',
            tipRu: 'Минимальный ответ: подтверждение факта с формулой погоды «hace fresco y viento».',
            mateoReactionEs: '¡En Ecuador nunca necesitamos ropa tan abrigada!',
            mateoReactionRu: 'В Эквадоре нам никогда не нужна такая тёплая одежда!',
            reactionExpression: 'smiling'
          },
          {
            id: 's2-c2',
            type: 'elaborated',
            textEs: 'El otoño ruso es fresco, pero las hojas doradas son preciosas. ¿Te gusta el otoño?',
            textRu: 'Русская осень прохладная, но золотые листья прекрасны. Тебе нравится осень?',
            tipRu: 'Развёрнутый ответ: вы находите поэтическую красоту в прохладе и спрашиваете мнение Матео.',
            mateoReactionEs: '¡Los colores amarillos y rojos son increíbles, parecen una pintura!',
            mateoReactionRu: 'Жёлтые и красные цвета потрясающие, прямо как на картине!',
            reactionExpression: 'excited'
          },
          {
            id: 's2-c3',
            type: 'shift',
            textEs: 'Solo estudio español desde hace poco, ¿puedes hablar un poco más despacio, por favor?',
            textRu: 'Я только недавно учу испанский, можешь говорить немного помедленнее, пожалуйста?',
            tipRu: 'Золотой спасательный круг начинающего: открытая просьба говорить медленнее располагает собеседника.',
            mateoReactionEs: '¡Claro que sí, perdona! Hablo despacio para ti, sin ningún problema.',
            mateoReactionRu: 'Конечно, извини! Я буду говорить помедленнее для тебя, без проблем.',
            reactionExpression: 'smiling'
          }
        ]
      }
    ]
  },

  // ==========================================
  // SCENE 3: ЧЕТЫРЕ СЕЗОНА VS ЭКВАТОР
  // ==========================================
  {
    id: 3,
    titleRu: 'Сцена 3 из 21: 4 сезона vs вечная весна',
    titleEs: 'Escena 3: Las cuatro estaciones y el ecuador',
    locationRu: 'Перед дверьми филармонии',
    locationEs: 'Frente a las puertas de la filarmónica',
    descriptionRu: 'Матео удивляется смене времён года в России, и вы сравниваете климат двух стран.',
    bgImage: IMG_FOYER,
    sceneFormulas: [
      {
        phraseEs: 'En Ecuador no hay cuatro estaciones.',
        phraseRu: 'В Эквадоре нет четырёх времён года.',
        note: 'Факт о климате на линии экватора'
      }
    ],
    exchanges: [
      {
        id: 's3-e1',
        exchangeNumber: 1,
        mateoLineEs: 'Para mí el cambio de estaciones es nuevo. En mi país no tenemos otoño ni invierno.',
        mateoLineRu: 'Для меня смена времён года в новинку. В моей стране нет ни осени, ни зимы.',
        mateoExpression: 'thinking',
        choices: [
          {
            id: 's3-c1',
            type: 'short',
            textEs: 'En Rusia tenemos cuatro estaciones.',
            textRu: 'В России у нас четыре времени года.',
            tipRu: 'Короткий факт: перечисление природных особенностей России.',
            mateoReactionEs: '¡Sí, primavera, verano, otoño e invierno muy marcados!',
            mateoReactionRu: 'Да, весна, лето, осень и зима очень ярко выражены!',
            reactionExpression: 'smiling'
          },
          {
            id: 's3-c2',
            type: 'elaborated',
            textEs: 'Leí que en Quito tienen un clima de eterna primavera. ¿Es verdad que no cambia?',
            textRu: 'Я читала, что в Кито климат вечной весны. Это правда, что он не меняется?',
            tipRu: 'Блестящее применение факта об Эквадоре: формула «Leí que en Quito tienen... ¿Es verdad?».',
            mateoReactionEs: '¡Es completamente verdad! Solo tenemos época seca y de lluvias por estar en el ecuador.',
            mateoReactionRu: 'Это чистая правда! У нас есть только сухой сезон и сезон дождей из-за экватора.',
            reactionExpression: 'excited'
          },
          {
            id: 's3-c3',
            type: 'shift',
            textEs: 'Qué curioso, pero entremos ya al vestíbulo que adentro está caliente.',
            textRu: 'Как любопытно, но давай зайдём в фойе, внутри тепло.',
            tipRu: 'Вежливый перевод темы: забота о комфорте и тепле.',
            mateoReactionEs: '¡Totalmente de acuerdo! Vamos adentro.',
            mateoReactionRu: 'Полностью согласен! Пойдём внутрь.',
            reactionExpression: 'smiling'
          }
        ]
      }
    ]
  },

  // ==========================================
  // SCENE 4: МАСШТАБЫ СТРАН
  // ==========================================
  {
    id: 4,
    titleRu: 'Сцена 4 из 21: Масштабы стран и часовые пояса',
    titleEs: 'Escena 4: Los husos horarios y las regiones',
    locationRu: 'В тёплом фойе',
    locationEs: 'El vestíbulo cálido',
    descriptionRu: 'Матео делится впечатлениями от масштабов России, а вы вспоминаете о 4 регионах Эквадора.',
    bgImage: IMG_FOYER,
    sceneFormulas: [
      {
        phraseEs: 'Rusia es un país enorme.',
        phraseRu: 'Россия — огромная страна.',
        note: 'Географический факт'
      }
    ],
    exchanges: [
      {
        id: 's4-e1',
        exchangeNumber: 1,
        mateoLineEs: 'Rusia me impresiona por su tamaño. ¡Me dijeron que tienen once zonas horarias!',
        mateoLineRu: 'Россия поражает меня своими размерами. Мне сказали, что у вас одиннадцать часовых поясов!',
        mateoExpression: 'surprised',
        choices: [
          {
            id: 's4-c1',
            type: 'short',
            textEs: 'Sí, Rusia es el país más grande del mundo.',
            textRu: 'Да, Россия — самая большая страна в мире.',
            tipRu: 'Лаконичный точный факт о масштабах страны.',
            mateoReactionEs: '¡Es colosal! En cambio, Ecuador es un país muy compacto.',
            mateoReactionRu: 'Она колоссальна! А вот Эквадор — очень компактная страна.',
            reactionExpression: 'smiling'
          },
          {
            id: 's4-c2',
            type: 'elaborated',
            textEs: '¡Es verdad! Y yo sé que Ecuador, aunque es pequeño, tiene cuatro mundos únicos: costa, sierra, selva y Galápagos.',
            textRu: 'Правда! А я знаю, что Эквадор, хоть и небольшой, имеет 4 уникальных мира: побережье, горы, сельву и Галапагосы.',
            tipRu: 'Углубление темы: вы показываете знание 4 регионов Эквадора, что вызывает искреннее восхищение собеседника.',
            mateoReactionEs: '¡Exactamente! En un solo día puedes ir de la nieve de los Andes a la selva verde.',
            mateoReactionRu: 'Именно! За один день можно доехать от снегов Анд до зелёных джунглей.',
            reactionExpression: 'excited'
          },
          {
            id: 's4-c3',
            type: 'shift',
            textEs: 'Es gigante, pero mira hacia el guardarropa: ¿dejamos los abrigos?',
            textRu: 'Она гигантская, но посмотри на гардероб: оставим пальто?',
            tipRu: 'Практичное переключение на бытовую задачу перед началом концерта.',
            mateoReactionEs: '¡Buena idea! Así estamos más cómodos.',
            mateoReactionRu: 'Хорошая идея! Так нам будет удобнее.',
            reactionExpression: 'smiling'
          }
        ]
      }
    ]
  },

  // ==========================================
  // SCENE 5: В ГАРДЕРОБЕ ФИЛАРМОНИИ
  // ==========================================
  {
    id: 5,
    titleRu: 'Сцена 5 из 21: В гардеробе филармонии',
    titleEs: 'Escena 5: En el guardarropa',
    locationRu: 'Гардероб филармонии',
    locationEs: 'El guardarropa del teatro',
    descriptionRu: 'Вы сдаёте верхнюю одежду в гардероб и готовитесь пройти в парадный зал.',
    bgImage: IMG_FOYER,
    sceneFormulas: [
      {
        phraseEs: 'Aquí está mi abrigo.',
        phraseRu: 'Вот моё пальто.',
        note: 'Обиходная фраза в гардеробе'
      }
    ],
    exchanges: [
      {
        id: 's5-e1',
        exchangeNumber: 1,
        mateoLineEs: '¡Listo, abrigos entregados! Ahora sí que se siente el calor del teatro.',
        mateoLineRu: 'Готово, пальто сданы! Теперь действительно чувствуется тепло театра.',
        mateoExpression: 'smiling',
        choices: [
          {
            id: 's5-c1',
            type: 'short',
            textEs: 'Sí, aquí adentro está muy agradable.',
            textRu: 'Да, здесь внутри очень приятно.',
            tipRu: 'Короткое подтверждение комфорта с глаголом estar («está agradable»).',
            mateoReactionEs: '¡Mucho mejor que el viento de afuera!',
            mateoReactionRu: 'Намного лучше, чем ветер на улице!',
            reactionExpression: 'smiling'
          },
          {
            id: 's5-c2',
            type: 'elaborated',
            textEs: 'Es un alivio quitarse el abrigo. ¿En Quito la gente usa chaqueta ligera por la noche?',
            textRu: 'Какое облегчение снять пальто. А в Кито люди носят лёгкие куртки по вечерам?',
            tipRu: 'Развёрнутая реплика с вопросом о повседневной одежде эквадорцев.',
            mateoReactionEs: 'Sí, en Quito refresca al caer el sol, así que siempre llevamos una chaqueta fina.',
            mateoReactionRu: 'Да, в Кито свежеет на закате, поэтому мы всегда носим лёгкую куртку.',
            reactionExpression: 'excited'
          },
          {
            id: 's5-c3',
            type: 'shift',
            textEs: '¡Qué bien! Mira ese espejo dorado gigante, ¡vamos a arreglarnos un poco!',
            textRu: 'Как здорово! Посмотри на то гигантское золотое зеркало, давай причешемся!',
            tipRu: 'Игривое переключение на атмосферу фойе: зеркала и подготовку к концерту.',
            mateoReactionEs: '¡Jaja, de acuerdo! Todo listo para la foto.',
            mateoReactionRu: 'Ха-ха, договорились! Всё готово к фото.',
            reactionExpression: 'smiling'
          }
        ]
      }
    ]
  },

  // ==========================================
  // SCENE 6: АРХИТЕКТУРА И ПРОГРАММКА
  // ==========================================
  {
    id: 6,
    titleRu: 'Сцена 6 из 21: Архитектура и программка',
    titleEs: 'Escena 6: El programa del concierto',
    locationRu: 'Центральное фойе',
    locationEs: 'El centro del vestíbulo',
    descriptionRu: 'Вы рассматриваете колонны филармонии и покупаете буклет с программой вечера.',
    bgImage: IMG_FOYER,
    sceneFormulas: [
      {
        phraseEs: 'Quiero comprar el programa.',
        phraseRu: 'Я хочу купить программку.',
        note: 'Формула намерения с глаголом querer'
      }
    ],
    exchanges: [
      {
        id: 's6-e1',
        exchangeNumber: 1,
        mateoLineEs: '¡Qué columnas clásicas tan altas! Y allí venden los programas del concierto.',
        mateoLineRu: 'Какие высокие классические колонны! А вон там продают программки концерта.',
        mateoExpression: 'surprised',
        choices: [
          {
            id: 's6-c1',
            type: 'short',
            textEs: 'Compremos un programa para leer.',
            textRu: 'Давай купим программку, чтобы почитать.',
            tipRu: 'Побуждение к совместному действию в повелительном наклонении («compremos»).',
            mateoReactionEs: '¡Perfecto, yo lo pago!',
            mateoReactionRu: 'Отлично, я заплачу за неё!',
            reactionExpression: 'smiling'
          },
          {
            id: 's6-c2',
            type: 'elaborated',
            textEs: 'Sí, quiero ver qué piezas tradicionales tocará la orquesta hoy. ¿Reconoces algún compositor ruso?',
            textRu: 'Да, хочу посмотреть, какие народные пьесы сыграет оркестр сегодня. Ты знаешь каких-нибудь русских композиторов?',
            tipRu: 'Вопрос о музыкальной эрудиции собеседника.',
            mateoReactionEs: 'Conozco a Chaikovski, ¡su música se escucha mucho en Ecuador también!',
            mateoReactionRu: 'Я знаю Чайковского, его музыку часто слушают и в Эквадоре тоже!',
            reactionExpression: 'excited'
          },
          {
            id: 's6-c3',
            type: 'shift',
            textEs: 'Buena idea, pero mira: ya abren las puertas principales de la sala.',
            textRu: 'Хорошая идея, но смотри: уже открывают главные двери зала.',
            tipRu: 'Переключение на перемещение в зал: двери открываются.',
            mateoReactionEs: '¡Vamos rápido a buscar nuestros asientos!',
            mateoReactionRu: 'Пойдём скорее искать наши места!',
            reactionExpression: 'smiling'
          }
        ]
      }
    ]
  },

  // ==========================================
  // SCENE 7: ВХОД В ЗРИТЕЛЬНЫЙ ЗАЛ
  // ==========================================
  {
    id: 7,
    titleRu: 'Сцена 7 из 21: Вход в зрительный зал',
    titleEs: 'Escena 7: Buscando nuestros asientos',
    locationRu: 'Проход зрительного зала',
    locationEs: 'El pasillo de la sala',
    descriptionRu: 'Вы заходите в зал с красным бархатом и ищете свои места в пятом ряду.',
    bgImage: IMG_HALL,
    sceneFormulas: [
      {
        phraseEs: 'Nuestros asientos están en la fila cinco.',
        phraseRu: 'Наши места в пятом ряду.',
        note: 'Глагол estar для местоположения в зале'
      }
    ],
    exchanges: [
      {
        id: 's7-e1',
        exchangeNumber: 1,
        mateoLineEs: '¡Guau, qué sala tan majestuosa! El terciopelo rojo es bellísimo. ¿Dónde nos sentamos?',
        mateoLineRu: 'Вау, какой величественный зал! Красный бархат прекрасен. Где мы сидим?',
        mateoExpression: 'surprised',
        choices: [
          {
            id: 's7-c1',
            type: 'short',
            textEs: 'Nuestros asientos están aquí, fila cinco.',
            textRu: 'Наши места здесь, пятый ряд.',
            tipRu: 'Короткое точное указание места с глаголом estar.',
            mateoReactionEs: '¡Excelente ubicación, tenemos una vista perfecta!',
            mateoReactionRu: 'Отличное расположение, у нас идеальный обзор!',
            reactionExpression: 'smiling'
          },
          {
            id: 's7-c2',
            type: 'elaborated',
            textEs: 'Estamos muy cerca del escenario. Podremos ver las manos de los músicos en vivo.',
            textRu: 'Мы очень близко к сцене. Сможем увидеть руки музыкантов вживую.',
            tipRu: 'Развёрнутая оценка удачных мест и предвкушение деталей исполнения.',
            mateoReactionEs: '¡Qué emoción! Ver la técnica de cerca siempre es fascinante.',
            mateoReactionRu: 'Как волнительно! Видеть технику игры вблизи всегда завораживает.',
            reactionExpression: 'excited'
          },
          {
            id: 's7-c3',
            type: 'shift',
            textEs: 'Aquí están, pero mira a los músicos que ya están saliendo a afinar.',
            textRu: 'Вот они, но посмотри на музыкантов, которые уже выходят настраиваться.',
            tipRu: 'Смена внимания на музыкантов на сцене: настройка инструментов.',
            mateoReactionEs: '¡Sí, ya se escuchan las primeras notas!',
            mateoReactionRu: 'Да, уже слышны первые ноты!',
            reactionExpression: 'surprised'
          }
        ]
      }
    ]
  },

  // ==========================================
  // SCENE 8: ПОДГОТОВКА ОРКЕСТРА И ПОДРУГА
  // ==========================================
  {
    id: 8,
    titleRu: 'Сцена 8 из 21: Подруга на сцене',
    titleEs: 'Escena 8: Mi amiga en el escenario',
    locationRu: 'Пятый ряд партера',
    locationEs: 'La fila cinco del patio de butacas',
    descriptionRu: 'На сцене появляется ваша подруга из университета и настраивает инструмент.',
    bgImage: IMG_HALL,
    sceneFormulas: [
      {
        phraseEs: 'Ella estudió conmigo en la universidad.',
        phraseRu: 'Она училась со мной в университете.',
        note: 'Формула дружбы в прошедшем времени'
      }
    ],
    exchanges: [
      {
        id: 's8-e1',
        exchangeNumber: 1,
        mateoLineEs: 'Hay muchos músicos acomodándose. ¿Cuál de ellos es tu amiga de la universidad?',
        mateoLineRu: 'Столько музыкантов рассаживается. Кто из них твоя подруга из университета?',
        mateoExpression: 'thinking',
        choices: [
          {
            id: 's8-c1',
            type: 'short',
            textEs: 'La chica del vestido rojo con la balalaica.',
            textRu: 'Девушка в красном платье с балалайкой.',
            tipRu: 'Лаконичное визуальное описание подруги.',
            mateoReactionEs: '¡Ah, ya la vi! Tiene una sonrisa muy simpática.',
            mateoReactionRu: 'А, уже увидел её! У неё очень обаятельная улыбка.',
            reactionExpression: 'smiling'
          },
          {
            id: 's8-c2',
            type: 'elaborated',
            textEs: 'Es ella, la de la balalaica grande. Estudiamos juntas en la universidad y es una gran artista.',
            textRu: 'Это она, с большой балалайкой. Мы учились вместе в университете, и она прекрасная артистка.',
            tipRu: 'Развёрнутая гордость за подругу с готовой формулой прошедшего времени «estudiamos juntas».',
            mateoReactionEs: '¡Qué bonito ver a tu amiga triunfar en un escenario tan importante!',
            mateoReactionRu: 'Как здорово видеть триумф подруги на такой важной сцене!',
            reactionExpression: 'excited'
          },
          {
            id: 's8-c3',
            type: 'shift',
            textEs: 'Es ella, ¡mira, nos acaba de ver y nos saluda con la mano!',
            textRu: 'Это она, смотри, она только что заметила нас и машет рукой!',
            tipRu: 'Эмоциональный спонтанный момент живого приветствия через зал.',
            mateoReactionEs: '¡Qué simpática! Yo también le saludo con la mano.',
            mateoReactionRu: 'Какая милая! Я тоже помашу ей рукой.',
            reactionExpression: 'smiling'
          }
        ]
      }
    ]
  },

  // ==========================================
  // SCENE 9: РУССКИЕ НАРОДНЫЕ ИНСТРУМЕНТЫ
  // ==========================================
  {
    id: 9,
    titleRu: 'Сцена 9 из 21: Русские народные инструменты',
    titleEs: 'Escena 9: Instrumentos tradicionales rusos',
    locationRu: 'Перед сценой',
    locationEs: 'Frente al escenario',
    descriptionRu: 'Матео с интересом рассматривает форму балалаек, баяна и домр.',
    bgImage: IMG_HALL,
    sceneFormulas: [
      {
        phraseEs: 'La balalaica tiene forma triangular.',
        phraseRu: 'У балалайки треугольная форма.',
        note: 'Описание формы инструмента'
      }
    ],
    exchanges: [
      {
        id: 's9-e1',
        exchangeNumber: 1,
        mateoLineEs: 'Esa balalaica triangular es única. ¿Por qué tiene forma de triángulo?',
        mateoLineRu: 'Эта треугольная балалайка уникальна. Почему у неё форма треугольника?',
        mateoExpression: 'thinking',
        choices: [
          {
            id: 's9-c1',
            type: 'short',
            textEs: 'Es la forma tradicional rusa.',
            textRu: 'Это традиционная русская форма.',
            tipRu: 'Короткий ясный ответ о фольклорной форме.',
            mateoReactionEs: '¡Es muy original y fácil de reconocer!',
            mateoReactionRu: 'Она очень оригинальная и её легко узнать!',
            reactionExpression: 'smiling'
          },
          {
            id: 's9-c2',
            type: 'elaborated',
            textEs: 'Era más fácil de construir con madera en las aldeas. Solo tiene tres cuerdas pero suena muy alegre.',
            textRu: 'Её было проще делать из дерева в деревнях. У неё всего три струны, но она звучит очень весело.',
            tipRu: 'Познавательный исторический экскурс о конструкции балалайки.',
            mateoReactionEs: '¡Increíble que con tres cuerdas puedan tocar melodías tan complejas!',
            mateoReactionRu: 'Невероятно, что на трёх струнах можно играть такие сложные мелодии!',
            reactionExpression: 'excited'
          },
          {
            id: 's9-c3',
            type: 'shift',
            textEs: 'Sí, pero mira también el acordeón de botones: en Rusia lo llamamos «bayán».',
            textRu: 'Да, но посмотри также на кнопочный аккордеон: в России мы называем его «баян».',
            tipRu: 'Введение нового аутентичного термина: русский баян.',
            mateoReactionEs: '¡El sonido del bayán es potente y muy profundo!',
            mateoReactionRu: 'Звук баяна мощный и очень глубокий!',
            reactionExpression: 'surprised'
          }
        ]
      }
    ]
  },

  // ==========================================
  // SCENE 10: МУЗЫКА В АНДАХ ЭКВАДОРА
  // ==========================================
  {
    id: 10,
    titleRu: 'Сцена 10 из 21: Музыка в Андах Эквадора',
    titleEs: 'Escena 10: La música andina de Ecuador',
    locationRu: 'Партер филармонии',
    locationEs: 'El patio de butacas',
    descriptionRu: 'Матео рассказывает, какие народные инструменты звучат в горах Эквадора.',
    bgImage: IMG_HALL,
    sceneFormulas: [
      {
        phraseEs: 'En los Andes tocan la quena y el charango.',
        phraseRu: 'В Андах играют на кене и чаранго.',
        note: 'Факт о музыке Эквадора'
      }
    ],
    exchanges: [
      {
        id: 's10-e1',
        exchangeNumber: 1,
        mateoLineEs: 'En los Andes de Ecuador tenemos instrumentos muy distintos, como la quena y el charango.',
        mateoLineRu: 'В Андах Эквадора у нас совсем другие инструменты, например, кена и чаранго.',
        mateoExpression: 'smiling',
        choices: [
          {
            id: 's10-c1',
            type: 'short',
            textEs: '¡Qué interesante! No los conocía.',
            textRu: 'Как интересно! Я о них не знала.',
            tipRu: 'Искренняя дружеская реакция на новый культурный факт.',
            mateoReactionEs: '¡La quena es una flauta de caña muy antigua!',
            mateoReactionRu: 'Кена — это очень древняя тростниковая флейта!',
            reactionExpression: 'smiling'
          },
          {
            id: 's10-c2',
            type: 'elaborated',
            textEs: 'Leí que el charango es una guitarra pequeña con sonido agudo. ¿Sabes tocarlo?',
            textRu: 'Я читала, что чаранго — это маленькая гитара с высоким звуком. Ты умеешь играть?',
            tipRu: 'Эрудиция о музыке Эквадора и вопрос о личных талантах Матео.',
            mateoReactionEs: 'Mi abuelo toca el charango maravillosamente, yo solo sé un par de canciones sencillas.',
            mateoReactionRu: 'Мой дедушка играет на чаранго восхитительно, а я знаю только пару простых песен.',
            reactionExpression: 'excited'
          },
          {
            id: 's10-c3',
            type: 'shift',
            textEs: 'Qué bonito. ¡Un día tienes que hacerme escuchar una canción andina!',
            textRu: 'Как красиво. Однажды ты должен дать мне послушать андскую песню!',
            tipRu: 'Прекрасный мостик к будущему дружескому общению.',
            mateoReactionEs: '¡Trato hecho! Te mandaré una lista de música tradicional por mensaje.',
            mateoReactionRu: 'По рукам! Я пришлю тебе плейлист традиционной музыки в сообщении.',
            reactionExpression: 'smiling'
          }
        ]
      }
    ]
  },

  // ==========================================
  // SCENE 11: ВКУСЫ МОЛОДЁЖИ
  // ==========================================
  {
    id: 11,
    titleRu: 'Сцена 11 из 21: Вкусы молодёжи',
    titleEs: 'Escena 11: Los gustos de los jóvenes',
    locationRu: 'Зал перед началом',
    locationEs: 'La sala antes de empezar',
    descriptionRu: 'Вы обсуждаете, что обычно слушает молодёжь в России и в Эквадоре.',
    bgImage: IMG_HALL,
    sceneFormulas: [
      {
        phraseEs: 'Me gusta mucho la música en vivo.',
        phraseRu: 'Мне очень нравится живая музыка.',
        note: 'Выражение личных предпочтений'
      }
    ],
    exchanges: [
      {
        id: 's11-e1',
        exchangeNumber: 1,
        mateoLineEs: '¿A los jóvenes en Rusia les atrae esta música o prefieren pop y música electrónica?',
        mateoLineRu: 'Молодёжь в России привлекает эта музыка или они предпочитают поп и электронику?',
        mateoExpression: 'thinking',
        choices: [
          {
            id: 's11-c1',
            type: 'short',
            textEs: 'Escuchan pop, pero esto es especial.',
            textRu: 'Слушают поп, но это нечто особенное.',
            tipRu: 'Лаконичная констатация вкусов молодёжи.',
            mateoReactionEs: '¡La música en directo siempre tiene otra magia!',
            mateoReactionRu: 'Живая музыка всегда обладает особой магией!',
            reactionExpression: 'smiling'
          },
          {
            id: 's11-c2',
            type: 'elaborated',
            textEs: 'Muchos escuchan pop, pero a mí me encanta el folclore en vivo. ¿En Ecuador los jóvenes bailan salsa?',
            textRu: 'Многие слушают поп, но мне очень нравится живой фольклор. А в Эквадоре молодёжь танцует сальсу?',
            tipRu: 'Развёрнутый ответ о себе и вопрос о танцевальной культуре Эквадора.',
            mateoReactionEs: '¡Sí, la salsa y la cumbia se bailan en todas las fiestas familiares!',
            mateoReactionRu: 'Да, сальсу и кумбию танцуют на всех семейных праздниках!',
            reactionExpression: 'excited'
          },
          {
            id: 's11-c3',
            type: 'shift',
            textEs: 'Depende de la persona. ¡Mira, las luces del salón empiezan a bajar!',
            textRu: 'Зависит от человека. Смотри, свет в зале начинает гаснуть!',
            tipRu: 'Своевременное переключение на начало концерта.',
            mateoReactionEs: '¡Uy, sí! Ya nos toca guardar silencio.',
            mateoReactionRu: 'Ой, да! Пора соблюдать тишину.',
            reactionExpression: 'surprised'
          }
        ]
      }
    ]
  },

  // ==========================================
  // SCENE 12: ДИРИЖЁР И ТИШИНА
  // ==========================================
  {
    id: 12,
    titleRu: 'Сцена 12 из 21: Выход дирижёра и тишина',
    titleEs: 'Escena 12: El director de la orquesta',
    locationRu: 'Зрительный зал',
    locationEs: 'La sala de conciertos',
    descriptionRu: 'На сцену выходит дирижёр. Зал взрывается аплодисментами и затихает перед первым взмахом палочки.',
    bgImage: IMG_HALL,
    sceneFormulas: [
      {
        phraseEs: '¡Silencio, por favor!',
        phraseRu: 'Тишина, пожалуйста!',
        note: 'Концертный этикет'
      }
    ],
    exchanges: [
      {
        id: 's12-e1',
        exchangeNumber: 1,
        mateoLineEs: '¡Sale el director! Todos aplauden de pie y ya levanta la batuta.',
        mateoLineRu: 'Выходит дирижёр! Все аплодируют стоя, и он уже поднимает палочку.',
        mateoExpression: 'excited',
        choices: [
          {
            id: 's12-c1',
            type: 'short',
            textEs: '¡Bravo! Vamos a escuchar.',
            textRu: 'Браво! Будем слушать.',
            tipRu: 'Короткое восклицание восторга и готовность слушать.',
            mateoReactionEs: '¡Qué empiece la magia musical!',
            mateoReactionRu: 'Пусть начнётся музыкальная магия!',
            reactionExpression: 'smiling'
          },
          {
            id: 's12-c2',
            type: 'elaborated',
            textEs: 'Es un director muy famoso en Rusia. Verás qué energía tiene con la orquesta.',
            textRu: 'Это очень знаменитый дирижёр в России. Увидишь, какая у него энергетика с оркестром.',
            tipRu: 'Развёрнутая рекомендация маэстро перед началом первого отделения.',
            mateoReactionEs: '¡Se le nota una presencia muy imponente y apasionada!',
            mateoReactionRu: 'В нём чувствуется очень внушительное и страстное присутствие!',
            reactionExpression: 'excited'
          },
          {
            id: 's12-c3',
            type: 'shift',
            textEs: '¡Silencio, por favor, que ya suena el primer acorde!',
            textRu: 'Тишина, пожалуйста, уже звучит первый аккорд!',
            tipRu: 'Этикетное напоминание о тишине при первых звуках балалаек.',
            mateoReactionEs: '¡De acuerdo! A disfrutar en silencio.',
            mateoReactionRu: 'Договорились! Наслаждаемся в тишине.',
            reactionExpression: 'smiling'
          }
        ]
      }
    ]
  },

  // ==========================================
  // SCENE 13: БУФЕТ В АНТРАКТЕ: ГОРЯЧИЙ ЧАЙ
  // ==========================================
  {
    id: 13,
    titleRu: 'Сцена 13 из 21: Буфет: горячий чай с лимоном',
    titleEs: 'Escena 13: El té caliente en el descanso',
    locationRu: 'Театральный буфет',
    locationEs: 'La cafetería del teatro',
    descriptionRu: 'Первая часть завершилась бурными аплодисментами. Вы пришли в буфет выпить чаю.',
    bgImage: IMG_CAFE,
    sceneFormulas: [
      {
        phraseEs: 'Un té caliente con limón, por favor.',
        phraseRu: 'Горячий чай с лимоном, пожалуйста.',
        note: 'Заказ напитка в буфете'
      }
    ],
    exchanges: [
      {
        id: 's13-e1',
        exchangeNumber: 1,
        mateoLineEs: '¡Qué primera parte tan enérgica! ¿Qué te apetece tomar en el descanso?',
        mateoLineRu: 'Какая энергичная первая часть! Что тебе хочется выпить в антракте?',
        mateoExpression: 'smiling',
        choices: [
          {
            id: 's13-c1',
            type: 'short',
            textEs: 'Un té caliente con limón, por favor.',
            textRu: 'Горячий чай с лимоном, пожалуйста.',
            tipRu: 'Короткий классический заказ в буфете.',
            mateoReactionEs: '¡Estupendo! Yo pido dos tés bien calientes.',
            mateoReactionRu: 'Замечательно! Я закажу два горячих чая.',
            reactionExpression: 'smiling'
          },
          {
            id: 's13-c2',
            type: 'elaborated',
            textEs: 'En Rusia siempre tomamos té negro caliente cuando refresca. ¿En Ecuador prefieres café?',
            textRu: 'В России мы всегда пьём горячий чёрный чай, когда холодает. А в Эквадоре ты предпочитаешь кофе?',
            tipRu: 'Культурная традиция русского чаепития и вопрос о привычках родины Матео.',
            mateoReactionEs: '¡Sí, en Ecuador el café recién pasado es un ritual diario!',
            mateoReactionRu: 'Да, в Эквадоре свежезаваренный кофе — это ежедневный ритуал!',
            reactionExpression: 'excited'
          },
          {
            id: 's13-c3',
            type: 'shift',
            textEs: 'Té caliente, pero mira también esos pasteles deliciosos en el mostrador.',
            textRu: 'Горячий чай, но посмотри также на те аппетитные пирожные на стойке.',
            tipRu: 'Смена внимания на десерты в буфете.',
            mateoReactionEs: '¡Se ven riquísimos! Vamos a probar algo dulce.',
            mateoReactionRu: 'Выглядят очень аппетитно! Давай попробуем что-нибудь сладкое.',
            reactionExpression: 'smiling'
          }
        ]
      }
    ]
  },

  // ==========================================
  // SCENE 14: ЭКВАДОРСКИЙ ШОКОЛАД И МЕДОВИК
  // ==========================================
  {
    id: 14,
    titleRu: 'Сцена 14 из 21: Шоколад и русский медовик',
    titleEs: 'Escena 14: El mejor chocolate y el pastel de miel',
    locationRu: 'Столик в буфете',
    locationEs: 'La mesa en la cafetería',
    descriptionRu: 'Вы пробуете угощения и говорите о знаменитом эквадорском какао и русских десертах.',
    bgImage: IMG_CAFE,
    sceneFormulas: [
      {
        phraseEs: 'En Ecuador tienen el mejor chocolate del mundo.',
        phraseRu: 'В Эквадоре лучший шоколад в мире.',
        note: 'Факт о всемирно известном эквадорском какао'
      }
    ],
    exchanges: [
      {
        id: 's14-e1',
        exchangeNumber: 1,
        mateoLineEs: 'Tienen bombones de chocolate en la vitrina. Me recuerda a los campos de cacao de mi país.',
        mateoLineRu: 'На витрине шоколадные конфеты. Это напоминает мне о плантациях какао моей страны.',
        mateoExpression: 'thinking',
        choices: [
          {
            id: 's14-c1',
            type: 'short',
            textEs: 'El chocolate con té combina muy bien.',
            textRu: 'Шоколад с чаем отлично сочетается.',
            tipRu: 'Простое гастрономическое замечание.',
            mateoReactionEs: '¡Es una combinación perfecta para una tarde fría!',
            mateoReactionRu: 'Идеальное сочетание для холодного вечера!',
            reactionExpression: 'smiling'
          },
          {
            id: 's14-c2',
            type: 'elaborated',
            textEs: '¡Leí que en Ecuador producen el mejor chocolate del mundo gracias al cacao fino de aroma! ¿Es verdad?',
            textRu: 'Я читала, что в Эквадоре производят лучший шоколад в мире благодаря какао fino de aroma! Это правда?',
            tipRu: 'Блестящее применение факта об Эквадоре: упоминание сорта «cacao fino de aroma».',
            mateoReactionEs: '¡Totalmente cierto! Nuestro cacao tiene notas florales y frutales únicas.',
            mateoReactionRu: 'Абсолютно верно! Наше какао обладает уникальными цветочными и фруктовыми нотами.',
            reactionExpression: 'excited'
          },
          {
            id: 's14-c3',
            type: 'shift',
            textEs: 'El chocolate es delicioso, pero prueba también el «Medovik» ruso con miel natural.',
            textRu: 'Шоколад восхитителен, но попробуй также русский «Медовик» с натуральным мёдом.',
            tipRu: 'Угощение традиционным русским десертом.',
            mateoReactionEs: '¡El Medovik es mi pastel ruso favorito, es suave y dulce!',
            mateoReactionRu: 'Медовик — мой любимый русский торт, он такой нежный и сладкий!',
            reactionExpression: 'smiling'
          }
        ]
      }
    ]
  },

  // ==========================================
  // SCENE 15: УЧЁБА В УНИВЕРСИТЕТЕ
  // ==========================================
  {
    id: 15,
    titleRu: 'Сцена 15 из 21: Учёба в университете и сессия',
    titleEs: 'Escena 15: Los exámenes en la universidad',
    locationRu: 'У столика в буфете',
    locationEs: 'Junto a la mesa del café',
    descriptionRu: 'Матео рассказывает о своих экзаменах по гражданскому строительству.',
    bgImage: IMG_CAFE,
    sceneFormulas: [
      {
        phraseEs: 'Tengo muchos exámenes esta semana.',
        phraseRu: 'У меня много экзаменов на этой неделе.',
        note: 'Глагол tener для выражения учебной нагрузки'
      }
    ],
    exchanges: [
      {
        id: 's15-e1',
        exchangeNumber: 1,
        mateoLineEs: 'Este descanso me viene genial. Esta semana tengo tres exámenes de ingeniería civil.',
        mateoLineRu: 'Этот антракт как раз вовремя. На этой неделе у меня три экзамена по гражданскому строительству.',
        mateoExpression: 'thinking',
        choices: [
          {
            id: 's15-c1',
            type: 'short',
            textEs: '¡Mucho ánimo con los exámenes!',
            textRu: 'Сил и удачи на экзаменах!',
            tipRu: 'Тёплое испанское пожелание удачи «¡Mucho ánimo!».',
            mateoReactionEs: '¡Muchas gracias! Con buena actitud todo saldrá bien.',
            mateoReactionRu: 'Большое спасибо! С позитивным настроем всё пройдёт отлично.',
            reactionExpression: 'smiling'
          },
          {
            id: 's15-c2',
            type: 'elaborated',
            textEs: 'La ingeniería es una carrera difícil pero muy importante. ¿Te gusta estudiar en Rusia?',
            textRu: 'Инженерия — трудная, но очень важная специальность. Тебе нравится учиться в России?',
            tipRu: 'Поддержка и вопрос об опыте учёбы иностранца в российском вузе.',
            mateoReactionEs: '¡Sí, los profesores aquí tienen un nivel matemático muy exigente y bueno!',
            mateoReactionRu: 'Да, у профессоров здесь очень высокий и требовательный уровень математики!',
            reactionExpression: 'excited'
          },
          {
            id: 's15-c3',
            type: 'shift',
            textEs: 'No te estreses con exámenes hoy. ¡Vamos a ver las vistas desde los ventanales del salón!',
            textRu: 'Не переживай из-за экзаменов сегодня. Пойдём посмотрим на виды из окон лаунджа!',
            tipRu: 'Заботливый совет сменить обстановку и прогуляться к панорамным окнам.',
            mateoReactionEs: '¡Gran sugerencia! Desconectemos un rato de los libros.',
            mateoReactionRu: 'Отличное предложение! Отвлечёмся ненадолго от учебников.',
            reactionExpression: 'smiling'
          }
        ]
      }
    ]
  },

  // ==========================================
  // SCENE 16: ПАНОРАМНЫЕ ОКНА ЛАУНДЖА
  // ==========================================
  {
    id: 16,
    titleRu: 'Сцена 16 из 21: Панорамные окна лаунджа',
    titleEs: 'Escena 16: La vista nocturna desde el salón',
    locationRu: 'Панорамный лаундж филармонии',
    locationEs: 'El salón con vistas panorámicas',
    descriptionRu: 'Вы подходите к высоким окнам с видом на сияющие вечерние огни города.',
    bgImage: IMG_LOUNGE,
    sceneFormulas: [
      {
        phraseEs: 'La vista nocturna es muy hermosa.',
        phraseRu: 'Ночной вид очень красив.',
        note: 'Эстетическая оценка'
      }
    ],
    exchanges: [
      {
        id: 's16-e1',
        exchangeNumber: 1,
        mateoLineEs: '¡Mira qué panorámica tan bonita! Las luces nocturnas se reflejan en el río.',
        mateoLineRu: 'Посмотри, какая красивая панорама! Ночные огни отражаются в реке.',
        mateoExpression: 'smiling',
        choices: [
          {
            id: 's16-c1',
            type: 'short',
            textEs: 'La ciudad de noche es mágica.',
            textRu: 'Город ночью волшебен.',
            tipRu: 'Короткое поэтичное высказывание.',
            mateoReactionEs: '¡Totalmente, transmite mucha paz y calma!',
            mateoReactionRu: 'Абсолютно, передаёт столько покоя и умиротворения!',
            reactionExpression: 'smiling'
          },
          {
            id: 's16-c2',
            type: 'elaborated',
            textEs: 'Me encanta esta vista. ¿En Quito también se ven las luces de la ciudad entre las montañas?',
            textRu: 'Мне очень нравится этот вид. А в Кито тоже видны городские огни среди гор?',
            tipRu: 'Вопрос-сравнение с горным рельефом Кито.',
            mateoReactionEs: '¡Sí, Quito es una ciudad larga entre volcanes, de noche parece un mar de estrellas!',
            mateoReactionRu: 'Да, Кито — длинный город среди вулканов, ночью он похож на море звёзд!',
            reactionExpression: 'excited'
          },
          {
            id: 's16-c3',
            type: 'shift',
            textEs: 'Es hermoso, pero mira ese cuadro con volcanes en la pared del salón.',
            textRu: 'Это прекрасно, но посмотри на ту картину с вулканами на стене лаунджа.',
            tipRu: 'Перевод внимания на тему вулканов.',
            mateoReactionEs: '¡Me hace pensar de inmediato en el volcán Chimborazo de mi patria!',
            mateoReactionRu: 'Это сразу напоминает мне о вулкане Чимборасо на моей родине!',
            reactionExpression: 'surprised'
          }
        ]
      }
    ]
  },

  // ==========================================
  // SCENE 17: ВУЛКАН ЧИМБОРАСО
  // ==========================================
  {
    id: 17,
    titleRu: 'Сцена 17 из 21: Вулкан Чимборасо — ближе к Солнцу',
    titleEs: 'Escena 17: El volcán Chimborazo',
    locationRu: 'У панорамных окон',
    locationEs: 'Junto a los ventanales',
    descriptionRu: 'Вы обсуждаете высочайшую вершину Эквадора — вулкан Чимборасо.',
    bgImage: IMG_LOUNGE,
    sceneFormulas: [
      {
        phraseEs: 'El volcán Chimborazo es el punto más cercano al Sol.',
        phraseRu: 'Вулкан Чимборасо — самая близкая точка к Солнцу.',
        note: 'Уникальный географический факт'
      }
    ],
    exchanges: [
      {
        id: 's17-e1',
        exchangeNumber: 1,
        mateoLineEs: 'Mi abuelo siempre me hablaba del volcán Chimborazo, el coloso de los Andes.',
        mateoLineRu: 'Мой дедушка всегда рассказывал мне о вулкане Чимборасо, исполине Анд.',
        mateoExpression: 'smiling',
        choices: [
          {
            id: 's17-c1',
            type: 'short',
            textEs: 'Es una montaña impresionante.',
            textRu: 'Это впечатляющая гора.',
            tipRu: 'Краткое уважение к величию вулкана.',
            mateoReactionEs: '¡Tiene más de seis mil doscientos metros de altura!',
            mateoReactionRu: 'В нём больше 6200 метров высоты!',
            reactionExpression: 'smiling'
          },
          {
            id: 's17-c2',
            type: 'elaborated',
            textEs: '¡Leí que por la forma de la Tierra su cumbre es el punto más cercano al Sol de todo el planeta!',
            textRu: 'Я читала, что из-за формы Земли его вершина — самая близкая точка к Солнцу на всей планете!',
            tipRu: 'Поразительный научный факт: выпуклость геоида Земли на экваторе делает пик Чимборасо ближе к Солнцу, чем Эверест.',
            mateoReactionEs: '¡Exactamente! ¡Qué alegría que conozcas ese dato tan especial de mi tierra!',
            mateoReactionRu: 'Именно! Какая радость, что ты знаешь этот особенный факт о моей земле!',
            reactionExpression: 'excited'
          },
          {
            id: 's17-c3',
            type: 'shift',
            textEs: 'En Rusia también tenemos volcanes gigantescos en la península de Kamchatka.',
            textRu: 'В России у нас тоже есть гигантские вулканы на полуострове Камчатка.',
            tipRu: 'Сравнение с природой России: камчатские вулканы.',
            mateoReactionEs: '¡Sí, los he visto en documentales rusos, la naturaleza aquí es salvaje y grandiosa!',
            mateoReactionRu: 'Да, я видел их в документальных фильмах, природа здесь дикая и грандиозная!',
            reactionExpression: 'surprised'
          }
        ]
      }
    ]
  },

  // ==========================================
  // SCENE 18: ГАЛАПАГОССКИЕ ОСТРОВА
  // ==========================================
  {
    id: 18,
    titleRu: 'Сцена 18 из 21: Галапагосы и черепахи',
    titleEs: 'Escena 18: Las islas Galápagos',
    locationRu: 'Лаундж филармонии',
    locationEs: 'El salón de la filarmónica',
    descriptionRu: 'Вы говорите об уникальной фауне Галапагосских островов и защите природы.',
    bgImage: IMG_LOUNGE,
    sceneFormulas: [
      {
        phraseEs: 'Las tortugas gigantes viven más de cien años.',
        phraseRu: 'Гигантские черепахи живут больше 100 лет.',
        note: 'Факт о фауне Галапагосов'
      }
    ],
    exchanges: [
      {
        id: 's18-e1',
        exchangeNumber: 1,
        mateoLineEs: 'Otro tesoro de Ecuador son las islas Galápagos en el océano Pacífico.',
        mateoLineRu: 'Ещё одно сокровище Эквадора — Галапагосские острова в Тихом океане.',
        mateoExpression: 'smiling',
        choices: [
          {
            id: 's18-c1',
            type: 'short',
            textEs: 'Son islas muy famosas en el mundo.',
            textRu: 'Это очень знаменитые острова в мире.',
            tipRu: 'Короткое признание всемирного статуса островов.',
            mateoReactionEs: '¡Sí, son Patrimonio de la Humanidad por la UNESCO!',
            mateoReactionRu: 'Да, они входят во Всемирное наследие ЮНЕСКО!',
            reactionExpression: 'smiling'
          },
          {
            id: 's18-c2',
            type: 'elaborated',
            textEs: 'Sé que allí viven tortugas gigantes que superan los cien años de edad. ¿Has tenido la suerte de viajar allí?',
            textRu: 'Знаю, что там живут гигантские черепахи старше ста лет. Тебе посчастливилось побывать там?',
            tipRu: 'Развёрнутый вопрос о личном опыте путешествий Матео.',
            mateoReactionEs: '¡Fui con mi familia hace dos años! Ver a las tortugas y lobos marinos tan cerca es inolvidable.',
            mateoReactionRu: 'Я ездил с семьёй два года назад! Видеть черепах и морских львов так близко незабываемо.',
            reactionExpression: 'excited'
          },
          {
            id: 's18-c3',
            type: 'shift',
            textEs: 'En Rusia tenemos el lago Baikal con aguas cristalinas y focas de agua dulce únicas.',
            textRu: 'В России у нас есть озеро Байкал с кристальной водой и уникальной пресноводной нерпой.',
            tipRu: 'Культурное сравнение с озером Байкал и сибирской фауной.',
            mateoReactionEs: '¡El Baikal es mi sueño! Quiero visitarlo en tren el próximo verano.',
            mateoReactionRu: 'Байкал — моя мечта! Я хочу съездить туда на поезде следующим летом.',
            reactionExpression: 'excited'
          }
        ]
      }
    ]
  },

  // ==========================================
  // SCENE 19: СТРАСТЬ К ФУТБОЛУ НА 2850 М
  // ==========================================
  {
    id: 19,
    titleRu: 'Сцена 19 из 21: Футбол на высоте 2850 метров',
    titleEs: 'Escena 19: El fútbol a 2850 metros de altura',
    locationRu: 'Перед возвращением в зал',
    locationEs: 'Antes de volver a la sala',
    descriptionRu: 'Матео признаётся в любви к футболу, а вы обсуждаете матчи на высокогорных стадионах Кито.',
    bgImage: IMG_LOUNGE,
    sceneFormulas: [
      {
        phraseEs: 'El fútbol es la gran pasión de los ecuatorianos.',
        phraseRu: 'Футбол — главная страсть эквадорцев.',
        note: 'Факт о спорте'
      }
    ],
    exchanges: [
      {
        id: 's19-e1',
        exchangeNumber: 1,
        mateoLineEs: 'Los domingos suelo jugar al fútbol con amigos. ¡En Ecuador el fútbol se vive con toda el alma!',
        mateoLineRu: 'По воскресеньям я обычно играю в футбол с друзьями. В Эквадоре футболом живут всей душой!',
        mateoExpression: 'excited',
        choices: [
          {
            id: 's19-c1',
            type: 'short',
            textEs: 'El fútbol es un deporte que une a todos.',
            textRu: 'Футбол — это спорт, объединяющий всех.',
            tipRu: 'Короткое позитивное суждение о спорте.',
            mateoReactionEs: '¡Exacto, une a personas de todos los países!',
            mateoReactionRu: 'Точно, объединяет людей из всех стран!',
            reactionExpression: 'smiling'
          },
          {
            id: 's19-c2',
            type: 'elaborated',
            textEs: 'Leí que en Quito juegan a dos mil ochocientos metros de altura. ¿Es muy difícil respirar para los rivales?',
            textRu: 'Я читала, что в Кито играют на высоте 2850 метров. Соперникам очень тяжело дышать?',
            tipRu: 'Удивительный факт о высоте в Кито: разреженный горный воздух истощает команды гостей.',
            mateoReactionEs: '¡Muchísimo! Equipos como Brasil o Argentina sufren mucho la falta de oxígeno en Quito.',
            mateoReactionRu: 'Очень тяжело! Команды вроде Бразилии или Аргентины сильно страдают от нехватки кислорода в Кито.',
            reactionExpression: 'excited'
          },
          {
            id: 's19-c3',
            type: 'shift',
            textEs: '¡Qué curioso! Pero escucha: ya suena el tercer timbre para volver al concierto.',
            textRu: 'Как любопытно! Но послушай: уже звенит третий звонок возвращаться на концерт.',
            tipRu: 'Внимание к этикету филармонии: третий звонок.',
            mateoReactionEs: '¡Cierto! Corramos a nuestros asientos para no perdernos la segunda parte.',
            mateoReactionRu: 'Точно! Побежали на места, чтобы не пропустить второе отделение.',
            reactionExpression: 'surprised'
          }
        ]
      }
    ]
  },

  // ==========================================
  // SCENE 20: ФИНАЛ КОНЦЕРТА И «КАЛИНКА»
  // ==========================================
  {
    id: 20,
    titleRu: 'Сцена 20 из 21: Финал концерта и овации',
    titleEs: 'Escena 20: La ovación final y Kalinka',
    locationRu: 'Зрительный зал',
    locationEs: 'La sala de conciertos',
    descriptionRu: 'Оркестр исполнил знаменитую быструю «Калинку», зал аплодирует стоя.',
    bgImage: IMG_HALL,
    sceneFormulas: [
      {
        phraseEs: 'Fue una experiencia inolvidable.',
        phraseRu: 'Это был незабываемый опыт.',
        note: 'Оценка прошедшего события'
      }
    ],
    exchanges: [
      {
        id: 's20-e1',
        exchangeNumber: 1,
        mateoLineEs: '¡Qué final tan apoteósico con Kalinka! ¡El solo de balalaica de tu amiga fue magistral!',
        mateoLineRu: 'Какой грандиозный финал с «Калинкой»! Соло на балалайке твоей подруги было виртуозным!',
        mateoExpression: 'excited',
        choices: [
          {
            id: 's20-c1',
            type: 'short',
            textEs: '¡Bravo! Tocaron con el corazón.',
            textRu: 'Браво! Они играли от всего сердца.',
            tipRu: 'Искреннее короткое восхищение исполнением.',
            mateoReactionEs: '¡Se notaba toda la pasión en el escenario!',
            mateoReactionRu: 'Вся страсть чувствовалась на сцене!',
            reactionExpression: 'smiling'
          },
          {
            id: 's20-c2',
            type: 'elaborated',
            textEs: '¡Estuvo increíble! Mi amiga practicó semanas para este solo. Me alegro mucho de que te haya gustado tanto.',
            textRu: 'Было потрясающе! Моя подруга репетировала недели ради этого соло. Я так рада, что тебе так понравилось.',
            tipRu: 'Развёрнутая радость за успех подруги и взаимное удовольствие от вечера.',
            mateoReactionEs: '¡Ha sido uno de los conciertos más emocionantes de mi vida!',
            mateoReactionRu: 'Это был один из самых захватывающих концертов в моей жизни!',
            reactionExpression: 'excited'
          },
          {
            id: 's20-c3',
            type: 'shift',
            textEs: 'Fue maravilloso, pero el público ya empieza a salir. ¿Vamos saliendo hacia la calle?',
            textRu: 'Было чудесно, но публика уже выходит. Пойдём на улицу?',
            tipRu: 'Мягкий переход к завершению вечера на свежем воздухе.',
            mateoReactionEs: '¡Sí, vamos a respirar el aire fresco de la noche!',
            mateoReactionRu: 'Да, пойдём подышим свежим ночным воздухом!',
            reactionExpression: 'smiling'
          }
        ]
      }
    ]
  },

  // ==========================================
  // SCENE 21: ПРОЩАНИЕ ПОД ЗОЛОТЫМИ ЛИСТЬЯМИ
  // ==========================================
  {
    id: 21,
    titleRu: 'Сцена 21 из 21: Прощание на осенней улице',
    titleEs: 'Escena 21: La despedida bajo las hojas doradas',
    locationRu: 'Улица у ночной филармонии',
    locationEs: 'La calle iluminada frente al teatro',
    descriptionRu: 'Вы выходите на тихую ночную улицу с золотыми листьями под фонарями, делитесь планами и тепло прощаетесь.',
    bgImage: IMG_AUTUMN_STREET,
    sceneFormulas: [
      {
        phraseEs: 'Hasta muy pronto. ¡Cuídate mucho!',
        phraseRu: 'До скорой встречи. Береги себя!',
        note: 'Тёплое дружеское прощание'
      }
    ],
    exchanges: [
      {
        id: 's21-e1',
        exchangeNumber: 1,
        mateoLineEs: '¡Pasé una velada inolvidable contigo! Gracias por mostrarme la música y el alma de Rusia.',
        mateoLineRu: 'Я провёл незабываемый вечер с тобой! Спасибо, что показала мне музыку и душу России.',
        mateoExpression: 'smiling',
        choices: [
          {
            id: 's21-c1',
            type: 'short',
            textEs: '¡Gracias a ti, Mateo! Hasta pronto.',
            textRu: 'Спасибо тебе, Матео! До скорого.',
            tipRu: 'Классическое короткое дружеское прощание с благодарностью.',
            mateoReactionEs: '¡Hasta muy pronto! Cuídate mucho en el camino a casa.',
            mateoReactionRu: 'До скорой встречи! Береги себя по дороге домой.',
            reactionExpression: 'smiling'
          },
          {
            id: 's21-c2',
            type: 'elaborated',
            textEs: '¡Yo también lo pasé genial! La próxima semana vamos a tomar café con chocolate ecuatoriano y vemos un partido, ¿te parece?',
            textRu: 'Я тоже провела время здорово! На следующей неделе выпьем кофе с эквадорским шоколадом и посмотрим матч, как думаешь?',
            tipRu: 'Развёрнутая инициатива продолжить дружбу с упоминанием любимых тем вечера.',
            mateoReactionEs: '¡Trato hecho! Yo pongo el chocolate de mi tierra y las entradas de fútbol. ¡Buenas noches!',
            mateoReactionRu: 'По рукам! С меня шоколад моей родины и билеты на футбол. Спокойной ночи!',
            reactionExpression: 'excited'
          },
          {
            id: 's21-c3',
            type: 'shift',
            textEs: '¡Fue una noche mágica! Pero ahora pide tu taxi rápido que el termómetro marca pocos grados.',
            textRu: 'Это была волшебная ночь! Но сейчас вызывай такси скорее, на термометре мало градусов.',
            tipRu: 'Заботливое прощание с вниманием к здоровью в прохладный вечер.',
            mateoReactionEs: '¡Qué atenta eres! Mi taxi ya está en la esquina. ¡Hasta pronto y un fuerte abrazo!',
            mateoReactionRu: 'Какая ты заботливая! Моё такси уже на углу. До скорого и крепко обнимаю!',
            reactionExpression: 'smiling'
          }
        ]
      }
    ]
  }
];

export const NOUN_VOCABULARY: NounVocabularyItem[] = [
  { spanish: 'el concierto', russian: 'концерт', category: 'Мероприятие' },
  { spanish: 'el teatro', russian: 'театр / филармония', category: 'Место' },
  { spanish: 'el vestíbulo', russian: 'фойе', category: 'Место' },
  { spanish: 'la sala', russian: 'зрительный зал', category: 'Место' },
  { spanish: 'el escenario', russian: 'сцена', category: 'Место' },
  { spanish: 'el asiento', russian: 'зрительское место', category: 'Место' },
  { spanish: 'el descanso', russian: 'антракт / перерыв', category: 'Время' },
  { spanish: 'el programa', russian: 'программка', category: 'Предмет' },
  { spanish: 'la orquesta', russian: 'оркестр', category: 'Музыка' },
  { spanish: 'el director', russian: 'дирижёр', category: 'Музыка' },
  { spanish: 'el músico', russian: 'музыкант', category: 'Музыка' },
  { spanish: 'la balalaica', russian: 'балалайка', category: 'Музыка' },
  { spanish: 'el acordeón', russian: 'аккордеон / баян', category: 'Музыка' },
  { spanish: 'la guitarra', russian: 'гитара', category: 'Музыка' },
  { spanish: 'el instrumento', russian: 'музыкальный инструмент', category: 'Музыка' },
  { spanish: 'el té', russian: 'чай', category: 'Еда и напитки' },
  { spanish: 'el café', russian: 'кофе', category: 'Еда и напитки' },
  { spanish: 'el chocolate', russian: 'шоколад', category: 'Еда и напитки' },
  { spanish: 'el pastel', russian: 'пирожное / торт', category: 'Еда и напитки' },
  { spanish: 'el fútbol', russian: 'футбол', category: 'Спорт' },
  { spanish: 'el partido', russian: 'матч', category: 'Спорт' },
  { spanish: 'el equipo', russian: 'команда', category: 'Спорт' },
  { spanish: 'el otoño', russian: 'осень', category: 'Природа' },
  { spanish: 'la estación', russian: 'время года / станция', category: 'Природа' },
  { spanish: 'el volcán', russian: 'вулкан', category: 'Природа' },
  { spanish: 'las hojas doradas', russian: 'золотые листья', category: 'Природа' },
  { spanish: 'la universidad', russian: 'университет', category: 'Учёба' },
  { spanish: 'el examen', russian: 'экзамен', category: 'Учёба' },
  { spanish: 'el amigo', russian: 'друг', category: 'Общение' },
  { spanish: 'la amiga', russian: 'подруга', category: 'Общение' }
];

export const VERB_FORMULAS: VerbFormulaItem[] = [
  {
    verb: 'ser',
    formulaEs: 'El teatro es muy bonito.',
    formulaRu: 'Театр очень красивый.',
    context: 'Постоянное неизменное свойство здания или предмета'
  },
  {
    verb: 'ser',
    formulaEs: 'Somos amigos de la universidad.',
    formulaRu: 'Мы друзья из университета.',
    context: 'Статус отношений между людьми'
  },
  {
    verb: 'estar',
    formulaEs: 'Estoy muy emocionada.',
    formulaRu: 'Я очень взволнована (в предвкушении).',
    context: 'Временное эмоциональное состояние героини сейчас'
  },
  {
    verb: 'estar',
    formulaEs: 'Los asientos están cerca del escenario.',
    formulaRu: 'Места находятся близко к сцене.',
    context: 'Местоположение в пространстве зрительного зала'
  },
  {
    verb: 'tener',
    formulaEs: 'Tengo muchos exámenes esta semana.',
    formulaRu: 'У меня много экзаменов на этой неделе.',
    context: 'Наличие учебной нагрузки'
  },
  {
    verb: 'tener',
    formulaEs: '¿Tienes hambre después del concierto?',
    formulaRu: 'Ты голоден после концерта?',
    context: 'Физическое состояние человека (tener hambre)'
  },
  {
    verb: 'gustar',
    formulaEs: 'Me gusta mucho la música tradicional.',
    formulaRu: 'Мне очень нравится традиционная музыка.',
    context: 'Выражение личных вкусов и предпочтений'
  },
  {
    verb: 'ir',
    formulaEs: '¿Vamos entrando a la sala?',
    formulaRu: 'Зайдём в зал?',
    context: 'Побуждение к совместному действию'
  },
  {
    verb: 'pasado',
    formulaEs: 'Llegué hace un año.',
    formulaRu: 'Я приехал год назад.',
    context: 'Готовая формула времени о переезде Матео'
  },
  {
    verb: 'pasado',
    formulaEs: 'Estudiamos juntas en la universidad.',
    formulaRu: 'Мы учились вместе в университете.',
    context: 'Воспоминание о совместной учёбе героини и её подруги'
  },
  {
    verb: 'pasado',
    formulaEs: 'Me gustó mucho el concierto.',
    formulaRu: 'Мне очень понравился концерт.',
    context: 'Итоговое впечатление после окончания музыки'
  },
  {
    verb: 'pasado',
    formulaEs: 'Fue una experiencia increíble.',
    formulaRu: 'Это был невероятный опыт.',
    context: 'Оценка прошедшего события глаголом ser (fue)'
  }
];
