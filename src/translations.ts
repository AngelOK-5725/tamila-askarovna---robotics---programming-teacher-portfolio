export type Language = 'ru' | 'kk';

export interface TranslationSet {
  nav: {
    home: string;
    about: string;
    experience: string;
    courses: string;
    methodology: string;
    achievements: string;
    portfolio: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
    viewPortfolio: string;
    contactMe: string;
    stats: {
      experience: string;
      experienceSub: string;
      students: string;
      studentsSub: string;
      programs: string;
      programsSub: string;
    };
  };
  about: {
    title: string;
    subtitle: string;
    birthDate: string;
    birthDateValue: string;
    nationality: string;
    nationalityValue: string;
    education: string;
    educationValue: string;
    qualification: string;
    qualificationValue: string;
    additionalEdu: string;
    pythonCourses: string;
    languages: string;
    languagesValue: string;
    pythonLevels: {
      basic: string;
      intermediate: string;
      advanced: string;
    };
    timelineTitle: string;
  };
  experience: {
    title: string;
    subtitle: string;
    companies: {
      eduCenterKaskelen: {
        name: string;
        location: string;
        desc: string;
      };
      fastTrackKids: {
        name: string;
        location: string;
        desc: string;
      };
      asemayKindergarten: {
        name: string;
        location: string;
        desc: string;
      };
      saidaShoppingCenter: {
        name: string;
        location: string;
        desc: string;
      };
      asUzynagash: {
        name: string;
        location: string;
        desc: string;
      };
      nadezhdaUzynagash: {
        name: string;
        location: string;
        desc: string;
      };
    };
    subjectsLabel: string;
  };
  courses: {
    title: string;
    subtitle: string;
    ageLabel: string;
    items: {
      wedo: {
        title: string;
        desc: string;
      };
      ev3: {
        title: string;
        desc: string;
      };
      roblox: {
        title: string;
        desc: string;
      };
      python: {
        title: string;
        desc: string;
      };
      compLiteracy: {
        title: string;
        desc: string;
      };
      webDesign: {
        title: string;
        desc: string;
      };
    };
  };
  methodology: {
    title: string;
    subtitle: string;
    quote: string;
    quoteAuthor: string;
    principles: {
      diff: { title: string; desc: string };
      interest: { title: string; desc: string };
      projects: { title: string; desc: string };
      practice: { title: string; desc: string };
      individual: { title: string; desc: string };
      atmosphere: { title: string; desc: string };
      creative: { title: string; desc: string };
      logical: { title: string; desc: string };
      fearless: { title: string; desc: string };
      trial: { title: string; desc: string };
    };
    notes: {
      title: string;
      roboticsAge: string;
      roboticsAgeDetail: string;
      programmingAge: string;
      programmingAgeDetail: string;
      recommendation: string;
      recommendationDetail: string;
    };
  };
  achievements: {
    title: string;
    subtitle: string;
    items: {
      years: { count: string; label: string };
      students: { count: string; label: string };
      hours: { count: string; label: string };
      centers: { count: string; label: string };
      method: { count: string; label: string };
    };
  };
  portfolio: {
    title: string;
    subtitle: string;
    categories: {
      all: string;
      robots: string;
      games: string;
      python: string;
      classroom: string;
    };
    items: {
      wedoRobot: { title: string; desc: string };
      ev3Robot: { title: string; desc: string };
      robloxRunner: { title: string; desc: string };
      robloxSpace: { title: string; desc: string };
      pythonQuiz: { title: string; desc: string };
      pythonCalc: { title: string; desc: string };
      classRobotics: { title: string; desc: string };
      classProgramming: { title: string; desc: string };
      certSoftwareTech: { title: string; desc: string };
      certPythonAdvanced: { title: string; desc: string };
    };
  };
  contact: {
    title: string;
    subtitle: string;
    form: {
      name: string;
      phone: string;
      email: string;
      message: string;
      submit: string;
      submitting: string;
      success: string;
      error: string;
    };
    info: {
      location: string;
      locationValue: string;
      email: string;
      phone: string;
      socials: string;
    };
  };
  footer: {
    rights: string;
    tagline: string;
  };
}

export const translations: Record<Language, TranslationSet> = {
  ru: {
    nav: {
      home: 'Главная',
      about: 'Обо мне',
      experience: 'Опыт',
      courses: 'Курсы',
      methodology: 'Методика',
      achievements: 'Достижения',
      portfolio: 'Портфолио',
      contact: 'Контакты',
    },
    hero: {
      title: 'Тамила Аскаровна',
      subtitle: 'Преподаватель Робототехники и Программирования',
      viewPortfolio: 'Смотреть Портфолио',
      contactMe: 'Связаться',
      stats: {
        experience: '3+ года',
        experienceSub: 'Опыта преподавания',
        students: '50+',
        studentsSub: 'Успешных учеников',
        programs: '5+',
        programsSub: 'Авторских программ',
      },
    },
    about: {
      title: 'Обо мне',
      subtitle: 'Персональный бренд и профессиональный путь в IT-педагогике',
      birthDate: 'Дата рождения',
      birthDateValue: '05 июля 2005 г. (21 год)',
      nationality: 'Гражданство',
      nationalityValue: 'Казахстан (Казашка)',
      education: 'Образование',
      educationValue: 'Выпускница Каскеленского Гуманитарно-Технического колледжа, Разработка программного обеспечения',
      qualification: 'Квалификация',
      qualificationValue: 'Техник-программист / Разработчик',
      additionalEdu: 'Дополнительное образование',
      pythonCourses: 'Программирование на Python (Базовый, Средний, Продвинутый уровни)',
      languages: 'Языки',
      languagesValue: 'Русский (Родной), Казахский (Разговорный)',
      pythonLevels: {
        basic: 'Базовый курс',
        intermediate: 'Средний уровень',
        advanced: 'Продвинутый уровень',
      },
      timelineTitle: 'Мой образовательный путь',
    },
    experience: {
      title: 'Опыт работы',
      subtitle: 'Где и чему я обучала юных инженеров и будущих разработчиков',
      companies: {
        eduCenterKaskelen: {
          name: 'Образовательный центр (Каскелен)',
          location: 'г. Каскелен',
          desc: 'Обучение детей широкому спектру IT-дисциплин. Проведение интерактивных занятий, разработка методических материалов.',
        },
        fastTrackKids: {
          name: 'FastTrackKids',
          location: 'г. Алматы',
          desc: 'Международная сеть детских центров развития. Преподавание робототехники и компьютерной грамотности по современным стандартам.',
        },
        asemayKindergarten: {
          name: 'Детский сад «Асемай»',
          location: 'Алматинская обл.',
          desc: 'Раннее развитие детей через конструирование и основы логики. Первое знакомство с миром механизмов.',
        },
        saidaShoppingCenter: {
          name: 'ТЦ «Saida» (Детский Клуб)',
          location: 'Алматинская обл.',
          desc: 'Организация и проведение увлекательных мастер-классов и еженедельных занятий по робототехнике WeDo.',
        },
        asUzynagash: {
          name: 'AS Узынагаш',
          location: 'с. Узынагаш',
          desc: 'Развитие технического творчества и робототехники WeDo среди детей и подростков в сельской местности.',
        },
        nadezhdaUzynagash: {
          name: 'Центр развития «Надежда Узынагаш»',
          location: 'с. Узынагаш',
          desc: 'Курсы робототехники для детей младшего школьного возраста. Развитие мелкой моторики, логики и пространственного мышления.',
        },
      },
      subjectsLabel: 'Преподаваемые дисциплины:',
    },
    courses: {
      title: 'Направления обучения',
      subtitle: 'Образовательные программы, разработанные специально для детей разного возраста',
      ageLabel: 'Рекомендуемый возраст:',
      items: {
        wedo: {
          title: 'LEGO WeDo 2.0',
          desc: 'Увлекательное знакомство с миром робототехники для самых маленьких. Дети создают первых интерактивных роботов, изучают датчики, моторы и основы визуального программирования в игровой форме.',
        },
        ev3: {
          title: 'LEGO MINDSTORMS EV3',
          desc: 'Продвинутый уровень робототехники. Проектирование сложных роботов, работа со сложными датчиками, изучение алгоритмов движения, циклов и условий на мощной образовательной платформе.',
        },
        roblox: {
          title: 'Разработка игр в Roblox Studio',
          desc: 'Переход от простых игр к созданию собственных миров в Roblox. Изучение основ 3D-моделирования, дизайна уровней и скриптинга на языке программирования Lua для создания полноценных игр.',
        },
        python: {
          title: 'Программирование на Python',
          desc: 'Изучение одного из самых популярных языков мира. От синтаксиса и простых переменных до создания собственных текстовых квестов, графических приложений, ботов и логических алгоритмов.',
        },
        compLiteracy: {
          title: 'Компьютерная грамотность',
          desc: 'Базовый фундамент для безопасного и эффективного использования ПК. Освоение операционной системы, офисных программ, безопасного интернета, слепой печати и общей гигиены работы за компьютером.',
        },
        webDesign: {
          title: 'Веб-дизайн и основы HTML/CSS',
          desc: 'Создание красивых веб-страниц и интерфейсов. Дети изучают основы композиции, цвета, работают с графическими редакторами и пробуют верстать свои первые адаптивные сайты.',
        },
      },
    },
    methodology: {
      title: 'Моя методология',
      subtitle: 'Принципы, которые делают обучение интересным, доступным и результативным для каждого ребенка',
      quote: 'Нельзя научить того, кто не хочет учиться.',
      quoteAuthor: 'Древняя мудрость, определяющая подход',
      principles: {
        diff: {
          title: 'Индивидуальный подход',
          desc: 'Каждый ребенок развивается в своем темпе. Я подбираю сложность задач под индивидуальные способности.',
        },
        interest: {
          title: 'Интерес важнее зубрежки',
          desc: 'Если у ребенка горят глаза, он усвоит сложную тему в несколько раз быстрее. Сначала увлекаем, потом обучаем.',
        },
        projects: {
          title: 'Обучение через проекты',
          desc: 'Вместо скучной теории — создание реального робота или работающей игры. В конце каждого блока у ребенка есть готовый проект.',
        },
        practice: {
          title: 'Практика вместо теории',
          desc: 'Минимум лекций, максимум дела. Написание кода и сборка моделей своими руками занимают до 80% времени занятия.',
        },
        individual: {
          title: 'Внимание каждому',
          desc: 'Работа в малых группах позволяет уделить время каждому ученику, подробно объяснить сложный момент и поддержать.',
        },
        atmosphere: {
          title: 'Комфортная атмосфера',
          desc: 'Ошибаться — это абсолютно нормально и даже полезно. На моих уроках нет страха плохой оценки, только поддержка и созидание.',
        },
        creative: {
          title: 'Креативное мышление',
          desc: 'Робототехника — это не просто сборка по инструкции. Я поощряю детей придумывать свои модификации и дизайн.',
        },
        logical: {
          title: 'Развитие системной логики',
          desc: 'Учимся разбивать сложные задачи на простые шаги (декомпозиция), искать закономерности и строить алгоритмы.',
        },
        fearless: {
          title: 'Программирование без страха',
          desc: 'Показываю, что код — это не скучные формулы, а инструмент для воплощения самых смелых творческих идей.',
        },
        trial: {
          title: 'Определяющий пробный урок',
          desc: 'Первое занятие помогает выявить текущий уровень подготовки ребенка, его склонности и составить комфортный трек развития.',
        },
      },
      notes: {
        title: 'Особенности возрастных групп',
        roboticsAge: 'Робототехника',
        roboticsAgeDetail: 'Доступна для детей с 5 лет (LEGO WeDo). Однако некоторые высокомотивированные ученики успешно начинают обучение и с 4 лет, если проявляют интерес к конструированию.',
        programmingAge: 'Программирование',
        programmingAgeDetail: 'Курсы по Python и Roblox начинаются с 10 лет. К этому возрасту у детей уже сформировано базовое абстрактное мышление, необходимое для понимания кода.',
        recommendation: 'Важное примечание',
        recommendationDetail: 'Все возрастные ограничения носят рекомендательный характер. Ключевым фактором всегда остается мотивация ребенка, его готовность и увлеченность процессом.',
      },
    },
    achievements: {
      title: 'Достижения',
      subtitle: 'Мой вклад в образование детей и результаты многолетней практики',
      items: {
        years: { count: '3+', label: 'года активного преподавания' },
        students: { count: '50+', label: 'обученных детей, полюбивших технологии' },
        hours: { count: '2000+', label: 'проведенных практических уроков' },
        centers: { count: '6', label: 'образовательных площадок в портфолио' },
        method: { count: '100%', label: 'авторская адаптация учебных программ под каждого ученика' },
      },
    },
    portfolio: {
      title: 'Портфолио проектов',
      subtitle: 'Примеры работ моих учеников, фотографии учебного процесса и учебные материалы',
      categories: {
        all: 'Все работы',
        robots: 'Роботы WeDo / EV3',
        games: 'Игры Roblox',
        python: 'Python проекты',
        classroom: 'Процесс обучения',
      },
      items: {
        wedoRobot: {
          title: 'Робот-сортировщик EV3',
          desc: 'Проект ученика 12 лет. Робот определяет цвет детали с помощью датчика цвета и распределяет их по отсекам.',
        },
        ev3Robot: {
          title: 'Автономный робот-сумоист WeDo 2.0',
          desc: 'Сконструирован и запрограммирован ребятами 6 лет для соревнований по выталкиванию противника за пределы круга.',
        },
        robloxRunner: {
          title: '3D Раннер «Roblox Neon Run»',
          desc: 'Полноценная игра-раннер с препятствиями, монетами и таблицей лидеров, созданная учеником 11 лет на Lua.',
        },
        robloxSpace: {
          title: 'Космическая база в Roblox',
          desc: 'Проект по 3D моделированию и скриптингу гравитации. Разработан ученицей 10 лет.',
        },
        pythonQuiz: {
          title: 'Telegram-бот викторина',
          desc: 'Бот на Python с базой вопросов по географии, системой начисления баллов и таймером. Проект ученика 12 лет.',
        },
        pythonCalc: {
          title: 'Графический калькулятор',
          desc: 'Приложение с графическим интерфейсом на библиотеке Tkinter, созданное в рамках продвинутого курса Python.',
        },
        classRobotics: {
          title: 'Творческий процесс сборки',
          desc: 'Живые эмоции детей во время тестирования собранного робота-манипулятора в FastTrackKids.',
        },
        classProgramming: {
          title: 'Урок кодинга в Roblox',
          desc: 'Занятие по программированию логики ловушек. Концентрация, фокус и первые успехи в написании кода.',
        },
        certSoftwareTech: {
          title: 'Диплом Техника-Программиста',
          desc: 'Официальное профессиональное образование по специальности «Software Engineering» с отличием.',
        },
        certPythonAdvanced: {
          title: 'Сертификат Python Advanced',
          desc: 'Подтверждение углубленных знаний языка Python, объектно-ориентированного программирования и алгоритмов.',
        },
      },
    },
    contact: {
      title: 'Контакты',
      subtitle: 'Готовы начать обучение или хотите провести пробный урок? Напишите мне!',
      form: {
        name: 'Ваше имя',
        phone: 'Номер телефона',
        email: 'Электронная почта',
        message: 'Ваше сообщение',
        submit: 'Отправить сообщение',
        submitting: 'Отправка...',
        success: 'Сообщение успешно отправлено! Я свяжусь с вами в ближайшее время.',
        error: 'Произошла ошибка при отправке. Пожалуйста, попробуйте еще раз.',
      },
      info: {
        location: 'Местоположение',
        locationValue: 'Казахстан, г. Алматы / Алматинская область',
        email: 'Email для связи',
        phone: 'Телефон / WhatsApp',
        socials: 'Социальные сети',
      },
    },
    footer: {
      rights: 'Все права защищены.',
      tagline: 'Воспитываю будущих инженеров и программистов с любовью к технологиям.',
    },
  },
  kk: {
    nav: {
      home: 'Басты бет',
      about: 'Мен туралы',
      experience: 'Тәжірибе',
      courses: 'Курстар',
      methodology: 'Әдістеме',
      achievements: 'Жетістіктер',
      portfolio: 'Портфолио',
      contact: 'Байланыс',
    },
    hero: {
      title: 'Тамила Аскаровна',
      subtitle: 'Робототехника және Бағдарламалау Пәнінің Мұғалімі',
      viewPortfolio: 'Портфолионы Көру',
      contactMe: 'Байланысу',
      stats: {
        experience: '3+ жыл',
        experienceSub: 'Оқыту тәжірибесі',
        students: '50+',
        studentsSub: 'Табысты оқушылар',
        programs: '5+',
        programsSub: 'Авторлық бағдарламалар',
      },
    },
    about: {
      title: 'Мен туралы',
      subtitle: 'IT-педагогикадағы жеке бренд және кәсіби жолым',
      birthDate: 'Туған күні',
      birthDateValue: '05 шілде 2005 ж. (21 жаста)',
      nationality: 'Азаматтығы',
      nationalityValue: 'Қазақстан (Қазақ)',
      education: 'Білімі',
      educationValue: 'Колледж түлегі, Бағдарламалық қамтамасыз етуді әзірлеу (Software Engineering)',
      qualification: 'Біліктілігі',
      qualificationValue: 'Техник-бағдарламашы / Әзірлеуші',
      additionalEdu: 'Қосымша білім',
      pythonCourses: 'Python тілінде бағдарламалау (Бастапқы, Орташа, Жетілдірілген деңгейлер)',
      languages: 'Тілдер',
      languagesValue: 'Орыс тілі (Ана тілі), Қазақ тілі (Сөйлесу деңгейі)',
      pythonLevels: {
        basic: 'Бастапқы курс',
        intermediate: 'Орта деңгей',
        advanced: 'Жоғары деңгей',
      },
      timelineTitle: 'Менің білім жолым',
    },
    experience: {
      title: 'Жұмыс тәжірибесі',
      subtitle: 'Жас инженерлер мен болашақ әзірлеушілерді қайда және қалай оқыттым',
      companies: {
        eduCenterKaskelen: {
          name: 'Білім беру орталығы (Қаскелең)',
          location: 'Қаскелең қ.',
          desc: 'Балаларды IT пәндерінің кең ауқымына баулу. Интерактивті сабақтар өткізу, әдістемелік материалдар әзірлеу.',
        },
        fastTrackKids: {
          name: 'FastTrackKids',
          location: 'Алматы қ.',
          desc: 'Халықаралық балаларды дамыту орталықтарының желісі. Қазіргі заманғы стандарттар бойынша робототехника және компьютерлік сауаттылықты үйрету.',
        },
        asemayKindergarten: {
          name: '«Әсемай» балабақшасы',
          location: 'Алматы облысы',
          desc: 'Конструкциялау және логика негіздері арқылы балаларды ерте дамыту. Механизмдер әлемімен алғашқы таныстыру.',
        },
        saidaShoppingCenter: {
          name: '«Saida» СО (Балалар клубы)',
          location: 'Алматы облысы',
          desc: 'WeDo робототехникасы бойынша қызықты мастер-кластар мен апталық сабақтарды ұйымдастыру және өткізу.',
        },
        asUzynagash: {
          name: 'AS Ұзынағаш',
          location: 'Ұзынағаш а.',
          desc: 'Ауылдық жерлерде балалар мен жасөспірімдер арасында техникалық шығармашылық пен WeDo робототехникасын дамыту.',
        },
        nadezhdaUzynagash: {
          name: '«Надежда Ұзынағаш» даму орталығы',
          location: 'Ұзынағаш а.',
          desc: 'Бастауыш сынып балаларына арналған робототехника курстары. Ұсақ моториканы, логиканы және кеңістіктік ойлауды дамыту.',
        },
      },
      subjectsLabel: 'Оқытылатын пәндер:',
    },
    courses: {
      title: 'Оқу бағыттары',
      subtitle: 'Әр түрлі жастағы балаларға арнайы әзірленген білім беру бағдарламалары',
      ageLabel: 'Ұсынылатын жас:',
      items: {
        wedo: {
          title: 'LEGO WeDo 2.0',
          desc: 'Ең кішкентайларға арналған робототехника әлемімен қызықты танысу. Балалар алғашқы интерактивті роботтарды жасайды, сенсорларды, моторларды және көрнекі бағдарламалау негіздерін ойын түрінде үйренеді.',
        },
        ev3: {
          title: 'LEGO MINDSTORMS EV3',
          desc: 'Робототехниканың жетілдірілген деңгейі. Күрделі роботтарды жобалау, күрделі датчиктермен жұмыс істеу, қуатты білім беру платформасында қозғалыс алгоритмдерін, циклдарды және шарттарды зерттеу.',
        },
        roblox: {
          title: 'Roblox Studio-да ойын әзірлеу',
          desc: 'Қарапайым ойындардан Roblox-та өз әлемдеріңізді жасауға көшу. Толыққанды ойындар жасау үшін Lua бағдарламалау тілінде 3D модельдеу, деңгей дизайны және скриптинг негіздерін үйрену.',
        },
        python: {
          title: 'Python-да бағдарламалау',
          desc: 'Әлемдегі ең танымал тілдердің бірін үйрену. Синтаксис пен қарапайым айнымалылардан бастап жеке мәтіндік квесттерді, графикалық қосымшаларды, боттарды және логикалық алгоритмдерді жасауға дейін.',
        },
        compLiteracy: {
          title: 'Компьютерлік сауаттылық',
          desc: 'ДК қауіпсіз және тиімді пайдаланудың негізі. Операциялық жүйені, кеңселік бағдарламаларды, қауіпсіз интернетті, соқыр теруді және компьютерде жұмыс істеудің жалпы гигиенасын меңгеру.',
        },
        webDesign: {
          title: 'Веб-дизайн және HTML/CSS негіздері',
          desc: 'Әдемі веб-парақшалар мен интерфейстерді құру. Балалар композиция, түс негіздерін үйренеді, графикалық редакторлармен жұмыс істейді және алғашқы адаптивті сайттарын жасап көреді.',
        },
      },
    },
    methodology: {
      title: 'Менің әдістемем',
      subtitle: 'Оқытуды әр бала үшін қызықты, қолжетімді және нәтижелі ететін принциптер',
      quote: 'Үйренгісі келмейтін адамды үйрету мүмкін емес.',
      quoteAuthor: 'Тәсілді анықтайтын көне даналық',
      principles: {
        diff: {
          title: 'Жеке тәсіл',
          desc: 'Әр бала өз қарқынымен дамиды. Мен тапсырмалардың күрделілігін баланың жеке қабілеттеріне қарай таңдаймын.',
        },
        interest: {
          title: 'Қызығушылық жаттаудан маңыздырақ',
          desc: 'Егер баланың ынтасы болса, ол күрделі тақырыпты бірнеше есе тез меңгереді. Алдымен қызықтырамыз, содан кейін үйретеміз.',
        },
        projects: {
          title: 'Жобалар арқылы оқыту',
          desc: 'Зеріктіретін теорияның орнына — нақты робот жасау немесе жұмыс істейтін ойын құру. Әр блоктың соңында балада дайын жоба болады.',
        },
        practice: {
          title: 'Теорияның орнына практика',
          desc: 'Минимум лекциялар, максимум іс. Код жазу және модельдерді өз қолдарымен құрастыру сабақ уақытының 80%-ын алады.',
        },
        individual: {
          title: 'Әркімге назар аудару',
          desc: 'Шағын топтарда жұмыс істеу әр оқушыға уақыт бөлуге, күрделі сәтті егжей-тегжейлі түсіндіруге және қолдау көрсетуге мүмкіндік береді.',
        },
        atmosphere: {
          title: 'Жайлы атмосфера',
          desc: 'Қателесу — бұл қалыпты жағдай және тіпті пайдалы. Менің сабақтарымда нашар баға алудан қорқу деген жоқ, тек қолдау мен жасампаздық бар.',
        },
        creative: {
          title: 'Шығармашылық ойлау',
          desc: 'Робототехника тек нұсқаулық бойынша құрастыру емес. Мен балалардың өз нұсқалары мен дизайнын ойлап табуын қолдаймын.',
        },
        logical: {
          title: 'Жүйелі логиканы дамыту',
          desc: 'Күрделі тапсырмаларды қарапайым қадамдарға бөлуді (декомпозиция), заңдылықтарды іздеуді және алгоритмдер құруды үйренеміз.',
        },
        fearless: {
          title: 'Қорқынышсыз бағдарламалау',
          desc: 'Кодтың жалықтыратын формулалар емес, ең батыл шығармашылық идеяларды жүзеге асыру құралы екенін көрсетемін.',
        },
        trial: {
          title: 'Анықтайтын сынақ сабағы',
          desc: 'Алғашқы сабақ баланың ағымдағы дайындық деңгейін, оның бейімділігін анықтауға және қолайлы даму трегін құруға көмектеседі.',
        },
      },
      notes: {
        title: 'Жас топтарының ерекшеліктері',
        roboticsAge: 'Робототехника',
        roboticsAgeDetail: 'Балаларға 5 жастан бастап қолжетімді (LEGO WeDo). Дегенмен, кейбір жоғары ынталы оқушылар құрастыруға қызығушылық танытса, 4 жастан бастап оқуды сәтті бастайды.',
        programmingAge: 'Бағдарламалау',
        programmingAgeDetail: 'Python және Roblox курстары 10 жастан басталады. Бұл жасқа қарай балаларда кодты түсінуге қажетті негізгі абстрактілі ойлау қалыптасады.',
        recommendation: 'Маңызды ескерту',
        recommendationDetail: 'Барлық жас шектеулері ұсыныс сипатында болады. Негізгі фактор әрқашан баланың уәжділігі, дайындығы және процеске деген құштарлығы болып қала береді.',
      },
    },
    achievements: {
      title: 'Жетістіктер',
      subtitle: 'Балаларға білім беруге қосқан үлесім және көпжылдық тәжірибенің нәтижелері',
      items: {
        years: { count: '3+', label: 'жыл белсенді оқыту тәжірибесі' },
        students: { count: '50+', label: 'технологияны жақсы көрген білімді балалар' },
        hours: { count: '2000+', label: 'өткізілген практикалық сабақтар' },
        centers: { count: '6', label: 'портфолиодағы білім беру алаңдары' },
        method: { count: '100%', label: 'оқу бағдарламаларын әр оқушыға авторлық бейімдеу' },
      },
    },
    portfolio: {
      title: 'Жобалар портфолиосы',
      subtitle: 'Оқушыларымның жұмыстарының мысалдары, оқу процесінің фотосуреттері және оқу материалдары',
      categories: {
        all: 'Барлық жұмыстар',
        robots: 'WeDo / EV3 Роботтары',
        games: 'Roblox Ойындары',
        python: 'Python Жобалары',
        classroom: 'Оқу процесі',
      },
      items: {
        wedoRobot: {
          title: 'WeDo 2.0 Сұрыптаушы Роботы',
          desc: '6 жасар оқушының жобасы. Робот түс сенсоры арқылы бөлшектің түсін анықтап, оларды бөлімдерге бөледі.',
        },
        ev3Robot: {
          title: 'EV3 автономды сумошы роботы',
          desc: '9 жастағы балалардың қарсыласын шеңберден итеріп шығару жарысына арнап құрастырған және бағдарламалаған роботы.',
        },
        robloxRunner: {
          title: '3D Раннер «Roblox Neon Run»',
          desc: 'Lua тілінде 11 жасар оқушы жасаған кедергілері, монеталары және көшбасшылар тақтасы бар толыққанды ойын.',
        },
        robloxSpace: {
          title: 'Roblox-тағы ғарыш базасы',
          desc: 'Гравитацияны скрипттеу және 3D модельдеу жобасы. 10 жасар оқушы қыз әзірлеген.',
        },
        pythonQuiz: {
          title: 'Telegram-бот викторинасы',
          desc: 'География бойынша сұрақтар базасы, ұпай жинау жүйесі және таймері бар Python-дағы бот. 12 жасар оқушының жобасы.',
        },
        pythonCalc: {
          title: 'Графикалық калькулятор',
          desc: 'Жетілдірілген Python курсы аясында құрылған Tkinter кітапханасындағы графикалық интерфейсі бар қосымша.',
        },
        classRobotics: {
          title: 'Құрастырудың шығармашылық процесі',
          desc: 'FastTrackKids-те жиналған робот-манипуляторды сынау кезіндегі балалардың шынайы эмоциялары.',
        },
        classProgramming: {
          title: 'Roblox-тағы кодтау сабағы',
          desc: 'Тұзақтар логикасын бағдарламалау сабағы. Шоғырлану, зейін және код жазудағы алғашқы жетістіктер.',
        },
        certSoftwareTech: {
          title: 'Бағдарламашы-Техник дипломы',
          desc: '«Software Engineering» мамандығы бойынша үздік бітірген ресми кәсіби білімі.',
        },
        certPythonAdvanced: {
          title: 'Python Advanced Сертификаты',
          desc: 'Python тілін, объектіге бағытталған бағдарламалауды және алгоритмдерді терең меңгергенін растау.',
        },
      },
    },
    contact: {
      title: 'Байланыс',
      subtitle: 'Оқуды бастауға дайынсыз ба немесе сынақ сабағын өткізгіңіз келе ме? Маған жазыңыз!',
      form: {
        name: 'Сіздің атыңыз',
        phone: 'Телефон нөмірі',
        email: 'Электрондық пошта',
        message: 'Сіздің хабарламаңыз',
        submit: 'Хабарлама жіберу',
        submitting: 'Жіберілуде...',
        success: 'Хабарлама сәтті жіберілді! Мен сізбен жақын арада байланысамын.',
        error: 'Жіберу кезінде қате кетті. Қайталап көріңізші.',
      },
      info: {
        location: 'Орналасқан жері',
        locationValue: 'Қазақстан, Алматы қ. / Алматы облысы',
        email: 'Байланыс үшін Email',
        phone: 'Телефон / WhatsApp',
        socials: 'Әлеуметтік желілер',
      },
    },
    footer: {
      rights: 'Барлық құқықтар қорғалған.',
      tagline: 'Болашақ инженерлер мен бағдарламашыларды технологияға деген сүйіспеншілікпен тәрбиелеймін.',
    },
  },
};
