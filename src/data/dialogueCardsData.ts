export interface DialoguePracticeCard {
  id: string;
  category: 'rescue' | 'ser_estar' | 'ecuador' | 'weather' | 'concert' | 'cafe';
  categoryLabelRu: string;
  categoryIcon: string;
  titleRu: string; // Заголовок ситуации
  roleA: string; // Кто спрашивает (Матео или Ситуация)
  promptEs: string; // Реплика / вопрос собеседника
  promptRu: string; // Перевод вопроса
  studentResponseEs: string; // Ответ ученицы на испанском
  studentResponseRu: string; // Перевод ответа ученицы
  serEstarHighlight?: string; // Пояснение ser / estar в этой карточке
  pedagogicalTipRu: string; // Подсказка по этикету или грамматике
}

export const DIALOGUE_PRACTICE_CARDS: DialoguePracticeCard[] = [
  // 1. СПАСАТЕЛЬНЫЕ ФРАЗЫ (RESCUE)
  {
    id: 'dc_rescue_1',
    category: 'rescue',
    categoryLabelRu: '🆘 Спасательные фразы',
    categoryIcon: '🛡️',
    titleRu: 'Если Матео говорит слишком быстро',
    roleA: 'Матео (быстро говорит)',
    promptEs: '¡Hola! ¿Cómo estás? Te veo muy bien abrigada...',
    promptRu: 'Привет! Как ты? Ты так тепло укутана...',
    studentResponseEs: '¿Puedes repetir más despacio, por favor? Acabo de empezar a aprender español.',
    studentResponseRu: 'Повтори, пожалуйста, помедленнее. Я только начала учить испанский.',
    pedagogicalTipRu: 'Золотая фраза новичка. Носители испанского языка говорят очень быстро, и вежливая просьба «más despacio, por favor» сразу снимает всё напряжение.'
  },
  {
    id: 'dc_rescue_2',
    category: 'rescue',
    categoryLabelRu: '🆘 Спасательные фразы',
    categoryIcon: '🛡️',
    titleRu: 'Предупредить, что могу что-то не понять',
    roleA: 'Матео (обращается с вопросом)',
    promptEs: '¿Me entiendes todo lo que digo en español?',
    promptRu: 'Ты понимаешь всё, что я говорю по-испански?',
    studentResponseEs: 'Acabo de empezar a aprender español, por eso puedo no entender algo.',
    studentResponseRu: 'Я только начала учить испанский, поэтому могу что-то не понимать.',
    pedagogicalTipRu: '«Acabo de empezar» означает «я только что начала». Матео будет говорить яснее и помогать жестами.'
  },
  {
    id: 'dc_rescue_3',
    category: 'rescue',
    categoryLabelRu: '🆘 Спасательные фразы',
    categoryIcon: '🛡️',
    titleRu: 'Как спросить незнакомое слово',
    roleA: 'Ученица (забыла слово)',
    promptEs: '¿Cómo se dice esta palabra en español?',
    promptRu: 'Как это слово говорится по-испански?',
    studentResponseEs: 'Disculpa, Mateo, ¿cómo se dice esto en español?',
    studentResponseRu: 'Извини, Матео, как это сказать по-испански?',
    pedagogicalTipRu: 'Формула «¿Cómo se dice...?» позволяет спросить любое русское слово прямо у Матео во время разговора.'
  },
  {
    id: 'dc_rescue_4',
    category: 'rescue',
    categoryLabelRu: '🆘 Спасательные фразы',
    categoryIcon: '🛡️',
    titleRu: 'Спросить значение непонятного слова',
    roleA: 'Матео (сказал редкое слово)',
    promptEs: 'El charango es un instrumento andino muy peculiar.',
    promptRu: 'Чаранго — это очень своеобразный андский инструмент.',
    studentResponseEs: '¿Qué significa esa palabra? No la conozco.',
    studentResponseRu: 'Что означает это слово? Я его не знаю.',
    pedagogicalTipRu: 'Конструкция «¿Qué significa...?» выручит всегда, когда собеседник использовал неизвестное вам выражение.'
  },

  // 2. ВСТРЕЧА И САМОЧУВСТВИЕ (SER / ESTAR)
  {
    id: 'dc_se_1',
    category: 'ser_estar',
    categoryLabelRu: '❓ Вопросы Матео и Ser/Estar',
    categoryIcon: '💬',
    titleRu: 'Вопрос о самочувствии при встрече',
    roleA: 'Матео',
    promptEs: '¡Hola! ¿Cómo estás hoy?',
    promptRu: 'Привет! Как ты себя чувствуешь сегодня?',
    studentResponseEs: '¡Hola, Mateo! Yo estoy muy bien, gracias. ¿Y tú cómo estás?',
    studentResponseRu: 'Привет, Матео! Я чувствую себя очень хорошо, спасибо. А ты как?',
    serEstarHighlight: 'ESTAR (estoy bien / cómo estás)',
    pedagogicalTipRu: 'Для самочувствия и настроения в данный момент всегда используется глагол ESTAR, никогда не SER!'
  },
  {
    id: 'dc_se_2',
    category: 'ser_estar',
    categoryLabelRu: '❓ Вопросы Матео и Ser/Estar',
    categoryIcon: '💬',
    titleRu: 'Откуда ты родом (происхождение)',
    roleA: 'Матео',
    promptEs: '¿Eres de Moscú o de otra ciudad de Rusia?',
    promptRu: 'Ты из Москвы или из другого города России?',
    studentResponseEs: 'Sí, yo soy de Moscú. ¿Y tú, de qué ciudad de Ecuador eres?',
    studentResponseRu: 'Да, я из Москвы. А ты из какого города Эквадора?',
    serEstarHighlight: 'SER (soy de Moscú / de qué ciudad eres)',
    pedagogicalTipRu: 'Происхождение, родина и постоянное гражданство всегда требуют глагола SER с предлогом «de».'
  },
  {
    id: 'dc_se_3',
    category: 'ser_estar',
    categoryLabelRu: '❓ Вопросы Матео и Ser/Estar',
    categoryIcon: '💬',
    titleRu: 'Кто твоя подруга на сцене',
    roleA: 'Матео',
    promptEs: '¿Quién es tu amiga en el escenario?',
    promptRu: 'Кто твоя подруга на сцене?',
    studentResponseEs: 'Ella es mi amiga del colegio. Es una música muy talentosa y toca la balalaika.',
    studentResponseRu: 'Она моя школьная подруга. Она очень талантливый музыкант и играет на балалайке.',
    serEstarHighlight: 'SER (es mi amiga / es una música talentosa)',
    pedagogicalTipRu: 'Личность человека («es mi amiga») и профессия/призвание («es música») выражаются исключительно через SER.'
  },
  {
    id: 'dc_se_4',
    category: 'ser_estar',
    categoryLabelRu: '❓ Вопросы Матео и Ser/Estar',
    categoryIcon: '💬',
    titleRu: 'Готовность к началу концерта',
    roleA: 'Матео',
    promptEs: '¿Estás lista para escuchar el concierto?',
    promptRu: 'Ты готова слушать концерт?',
    studentResponseEs: '¡Sí! Estoy muy lista y emocionada. Ya van a apagar las luces.',
    studentResponseRu: 'Да! Я абсолютно готова и взволнована. Сейчас уже погасят свет.',
    serEstarHighlight: 'ESTAR (estoy lista / estoy emocionada)',
    pedagogicalTipRu: 'Внимание: «estar lista» = быть готовой прямо сейчас. (А «ser lista» означало бы «быть умной / смышлёной»!).'
  },
  {
    id: 'dc_se_5',
    category: 'ser_estar',
    categoryLabelRu: '❓ Вопросы Матео и Ser/Estar',
    categoryIcon: '💬',
    titleRu: 'Отношения и дружба',
    roleA: 'Матео',
    promptEs: 'Es genial salir juntos hoy.',
    promptRu: 'Здорово выбраться куда-то вместе сегодня.',
    studentResponseEs: 'Sí, nosotros somos buenos amigos y es un placer estar aquí contigo.',
    studentResponseRu: 'Да, мы хорошие друзья, и мне приятно быть здесь с тобой.',
    serEstarHighlight: 'SER (somos amigos) + ESTAR (estar aquí)',
    pedagogicalTipRu: '«Somos amigos» (отношения — SER), но «estar aquí» (нахождение в месте — ESTAR).'
  },

  // 3. ПОГОДА И ВРЕМЕНА ГОДА (WEATHER)
  {
    id: 'dc_w_1',
    category: 'weather',
    categoryLabelRu: '🍂 Погода и осень',
    categoryIcon: '🍁',
    titleRu: 'Осенняя погода сегодня в Москве',
    roleA: 'Матео',
    promptEs: '¡Qué fresco está el aire hoy! ¿Siempre llueve así en otoño?',
    promptRu: 'Какой прохладный воздух сегодня! Осенью всегда такие дожди?',
    studentResponseEs: 'Hoy el tiempo está frío y húmedo. En Rusia el otoño es una estación bastante fresca.',
    studentResponseRu: 'Сегодня погода холодная и сырая. В России осень — довольно прохладное время года.',
    serEstarHighlight: 'ESTAR (está frío hoy) vs SER (el otoño es fresco)',
    pedagogicalTipRu: 'Состояние погоды сегодня в моменте — ESTAR («está frío»). Постоянная характеристика сезона вообще — SER («el otoño es...»).'
  },
  {
    id: 'dc_w_2',
    category: 'weather',
    categoryLabelRu: '🍂 Погода и осень',
    categoryIcon: '🍁',
    titleRu: 'А какая погода в Эквадоре круглый год?',
    roleA: 'Матео',
    promptEs: 'En mi país nunca vemos caer hojas amarillas como aquí.',
    promptRu: 'В моей стране мы никогда не видим, как падают жёлтые листья, как здесь.',
    studentResponseEs: '¿Qué tiempo hace en Ecuador? He leído que en Quito el clima es como una primavera eterna.',
    studentResponseRu: 'А какая погода в Эквадоре? Я читала, что в Кито климат похож на вечную весну.',
    pedagogicalTipRu: 'Эквадор расположен прямо на экваторе, поэтому там нет привычной нам осени. В Кито круглый год около +18...+22 °C.'
  },

  // 4. ТЕАТР, МЕСТА И МУЗЫКА (CONCERT)
  {
    id: 'dc_c_1',
    category: 'concert',
    categoryLabelRu: '🎻 Концерт и театр',
    categoryIcon: '🏛️',
    titleRu: 'Где находятся наши места в зале',
    roleA: 'Матео',
    promptEs: '¿Dónde están nuestros asientos en la sala?',
    promptRu: 'Где находятся наши места в зале?',
    studentResponseEs: 'Nuestros asientos están en la fila siete, muy cerca del escenario.',
    studentResponseRu: 'Наши места находятся в седьмом ряду, очень близко к сцене.',
    serEstarHighlight: 'ESTAR (están en la fila siete, están cerca)',
    pedagogicalTipRu: 'Физическое местонахождение предметов и людей всегда требует ESTAR: «Los asientos están cerca».'
  },
  {
    id: 'dc_c_2',
    category: 'concert',
    categoryLabelRu: '🎻 Концерт и театр',
    categoryIcon: '🏛️',
    titleRu: 'Впечатление от здания филармонии',
    roleA: 'Матео',
    promptEs: '¡Qué columnas y qué techo tan impresionante tiene este teatro!',
    promptRu: 'Какие колонны и какой впечатляющий потолок у этого театра!',
    studentResponseEs: 'Sí, este teatro es muy bonito y elegante. Es un edificio histórico de la ciudad.',
    studentResponseRu: 'Да, этот театр очень красивый и элегантный. Это историческое здание города.',
    serEstarHighlight: 'SER (el teatro es bonito, es un edificio)',
    pedagogicalTipRu: 'Постоянные архитектурные качества здания — глагол SER: «es elegante, es histórico».'
  },
  {
    id: 'dc_c_3',
    category: 'concert',
    categoryLabelRu: '🎻 Концерт и театр',
    categoryIcon: '🏛️',
    titleRu: 'Что это за оркестр и балалайка',
    roleA: 'Матео',
    promptEs: 'Ese instrumento triangular es muy curioso, ¿cómo se llama?',
    promptRu: 'Этот треугольный инструмент очень любопытный, как он называется?',
    studentResponseEs: 'Es una balalaika rusa. Esta orquesta es de instrumentos tradicionales rusos.',
    studentResponseRu: 'Это русская балалайка. Этот оркестр — русских традиционных инструментов.',
    serEstarHighlight: 'SER (es una balalaika, la orquesta es de...)',
    pedagogicalTipRu: 'Идентификация предмета всегда строится с SER: «¿Qué es? — Es una balalaika».'
  },
  {
    id: 'dc_c_4',
    category: 'concert',
    categoryLabelRu: '🎻 Концерт и театр',
    categoryIcon: '🏛️',
    titleRu: 'Андская музыка Эквадора',
    roleA: 'Матео',
    promptEs: 'En Ecuador también nos encanta la música folclórica.',
    promptRu: 'В Эквадоре мы тоже обожаем народную музыку.',
    studentResponseEs: '¿Es verdad que en los Andes tocan la zampoña y la quena? Me gustaría escucharlas.',
    studentResponseRu: 'Правда, что в Андах играют на сампонье и кене? Мне бы хотелось их послушать.',
    pedagogicalTipRu: 'Сампонья (zampoña) — флейта Пана, а кена (quena) — древняя тростниковая флейта инков. Матео будет приятно поражён вашим знанием!'
  },
  {
    id: 'dc_c_5',
    category: 'concert',
    categoryLabelRu: '🎻 Концерт и театр',
    categoryIcon: '🏛️',
    titleRu: 'После концерта: песня «Калинка»',
    roleA: 'Матео',
    promptEs: '¡El final ha sido espectacular con todo el público aplaudiendo!',
    promptRu: 'Финал был потрясающим, весь зал аплодировал!',
    studentResponseEs: '¡Sí, esa canción rápida es Kalinka! Es muy alegre y famosa en todo el mundo.',
    studentResponseRu: 'Да, эта быстрая песня — «Калинка»! Она очень весёлая и известна во всём мире.',
    serEstarHighlight: 'SER (es Kalinka, es muy alegre, es famosa)',
    pedagogicalTipRu: 'Песня «es alegre» (весёлая по своей сути) — используем SER.'
  },

  // 5. БУФЕТ, ЧАЙ И СТУДЕНЧЕСКАЯ ЖИЗНЬ (CAFE)
  {
    id: 'dc_b_1',
    category: 'cafe',
    categoryLabelRu: '☕ Буфет и перерыв',
    categoryIcon: '🍰',
    titleRu: 'Предложение пойти в буфет на чай',
    roleA: 'Матео',
    promptEs: '¡Ha comenzado el intermedio! ¿Quieres comer algo?',
    promptRu: 'Начался антракт! Хочешь что-нибудь перекусить?',
    studentResponseEs: '¡Buena idea! Yo quiero un té caliente y un pedazo de tarta rusa Medovik.',
    studentResponseRu: 'Отличная идея! Я хочу горячий чай и кусочек русского торта «Медовик».',
    pedagogicalTipRu: '«Té caliente» — согревающий напиток после осенней прохлады улицы, а «tarta Medovik» — русский кулинарный шедевр.'
  },
  {
    id: 'dc_b_2',
    category: 'cafe',
    categoryLabelRu: '☕ Буфет и перерыв',
    categoryIcon: '🍰',
    titleRu: 'Эквадорский шоколад arriba fino',
    roleA: 'Матео',
    promptEs: '¿Te gusta el chocolate negro?',
    promptRu: 'Тебе нравится тёмный шоколад?',
    studentResponseEs: '¡Mucho! Sé que Ecuador exporta el mejor cacao fino de aroma del mundo, ¿es verdad?',
    studentResponseRu: 'Очень! Я знаю, что Эквадор экспортирует лучший ароматный какао в мире, это правда?',
    pedagogicalTipRu: 'Вводная фраза «Sé que...» (Я знаю, что...) демонстрирует высокий уровень тактичной и эрудированной беседы.'
  },
  {
    id: 'dc_b_3',
    category: 'cafe',
    categoryLabelRu: '☕ Буфет и перерыв',
    categoryIcon: '🍰',
    titleRu: 'Учёба в университете и экзамены',
    roleA: 'Матео',
    promptEs: '¿Qué tal van tus estudios en la universidad?',
    promptRu: 'Как продвигается твоя учёба в университете?',
    studentResponseEs: 'La universidad es interesante, pero los exámenes son muy difíciles este mes.',
    studentResponseRu: 'Университет — это интересно, но экзамены очень трудные в этом месяце.',
    serEstarHighlight: 'SER (la universidad es interesante, los exámenes son difíciles)',
    pedagogicalTipRu: 'Характеристика предметов и экзаменов («трудные») — SER.'
  },

  // 6. ФАКТЫ ОБ ЭКВАДОРЕ И РОССИИ (ECUADOR)
  {
    id: 'dc_ec_1',
    category: 'ecuador',
    categoryLabelRu: '🇪🇨 Факты об Эквадоре',
    categoryIcon: '🌋',
    titleRu: 'Вулкан Чимборасо ближе всего к Солнцу',
    roleA: 'Ученица (делится фактом)',
    promptEs: 'Mateo, ¿es verdad que el volcán Chimborazo es el punto más cercano al Sol?',
    promptRu: 'Матео, правда ли, что вулкан Чимборасо — самая близкая точка к Солнцу?',
    studentResponseEs: 'He leído que debido al abultamiento de la Tierra en el ecuador, su cima está más cerca del Sol que el Everest.',
    studentResponseRu: 'Я читала, что из-за экваториальной выпуклости Земли его вершина ближе к Солнцу, чем Эверест.',
    pedagogicalTipRu: 'Факт, который обожают эквадорцы: из-за формы Земли вершина вулкана Чимборасо действительно ближе всего к космосу и Солнцу!'
  },
  {
    id: 'dc_ec_2',
    category: 'ecuador',
    categoryLabelRu: '🇪🇨 Факты об Эквадоре',
    categoryIcon: '🐢',
    titleRu: 'Галапагосские острова и черепахи',
    roleA: 'Матео',
    promptEs: '¿Sabes qué animales son los más famosos de Ecuador?',
    promptRu: 'Знаешь, какие животные самые знаменитые в Эквадоре?',
    studentResponseEs: 'Las tortugas gigantes de las islas Galápagos. Las islas están en el océano Pacífico.',
    studentResponseRu: 'Гигантские черепахи Галапагосских островов. Острова находятся в Тихом океане.',
    serEstarHighlight: 'ESTAR (las islas están en el océano) vs SER (las tortugas son famosas)',
    pedagogicalTipRu: 'Черепахи «son famosas» (SER), а острова «están en el océano» (ESTAR — местоположение).'
  },
  {
    id: 'dc_ec_3',
    category: 'ecuador',
    categoryLabelRu: '🇪🇨 Факты об Эквадоре',
    categoryIcon: '⚽',
    titleRu: 'Футбол на высоте почти 3000 метров',
    roleA: 'Матео',
    promptEs: 'A mí me fascina jugar al fútbol con mis amigos.',
    promptRu: 'Я обожаю играть в футбол с друзьями.',
    studentResponseEs: '¿Es verdad que en Quito juegan al fútbol a 2850 metros de altitud? ¡Es muy alto!',
    studentResponseRu: 'Правда, что в Кито играют в футбол на высоте 2850 метров? Это же очень высоко!',
    pedagogicalTipRu: 'Кито — одна из самых высокогорных столиц мира. Играть в футбол там требует потрясающей выносливости.'
  },
  {
    id: 'dc_ec_4',
    category: 'ecuador',
    categoryLabelRu: '🇪🇨 Факты об Эквадоре',
    categoryIcon: '🌍',
    titleRu: 'Сравнение масштабов: 11 часовых поясов',
    roleA: 'Матео',
    promptEs: 'Rusia me parece un país gigantesco.',
    promptRu: 'Россия кажется мне гигантской страной.',
    studentResponseEs: 'Sí, en Rusia tenemos once husos horarios, mientras que en Ecuador solo hay dos.',
    studentResponseRu: 'Да, в России одиннадцать часовых поясов, в то время как в Эквадоре всего два.',
    pedagogicalTipRu: 'У Эквадора всего 2 пояса: материковый (UTC-5) и Галапагосский (UTC-6). Отличное сравнение!'
  },
  {
    id: 'dc_ec_5',
    category: 'rescue',
    categoryLabelRu: '🆘 Спасательные фразы',
    categoryIcon: '🚖',
    titleRu: 'Завершение вечера и заказ такси',
    roleA: 'Матео',
    promptEs: 'Ya es tarde y la noche está muy fría. ¿Cómo volvemos a casa?',
    promptRu: 'Уже поздно и ночь очень холодная. Как мы вернёмся домой?',
    studentResponseEs: 'Vamos a pedir un taxi. Muchas gracias por acompañarme hoy, el concierto ha sido genial.',
    studentResponseRu: 'Давай вызовем такси. Большое спасибо, что пошёл со мной сегодня, концерт был великолепным.',
    pedagogicalTipRu: 'Тёплое завершение беседы: благодарность «Muchas gracias por acompañarme» и простое предложение «Vamos a pedir un taxi».'
  }
];
