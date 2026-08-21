import type {StaticImageData} from "next/image";
import type {I18n} from "@/lib/i18n";
import {links} from "@/lib/config";

// Bundled, not served from /public: the build hashes and cache-busts them.
import meHero from "@/assets/img/me-hero.png";
import toporich from "@/assets/img/toporich.png";
import zapravich from "@/assets/img/zapravich.png";
import khub from "@/assets/img/khub.png";
import jay from "@/assets/img/jay.png";
import justAiVb from "@/assets/img/just-ai-vb.png";
import elagin from "@/assets/img/elagin.png";
import best from "@/assets/img/best.png";
import lg from "@/assets/img/LG.jpg";

export {meHero};

/* ============================================================
   Язык сайта — как у заказчика, а не как в резюме: никаких RAG,
   деплоя, инфраструктуры и названий технологий. Только то, что
   человек получает на руки, и сроки.
============================================================ */

// Каждая стрелка ↗ идёт со \uFE0E (variation selector-15). Ни в Manrope, ни в
// IBM Plex Mono нет U+2197, и iOS подставляет цветной эмодзи-шрифт — селектор
// требует именно текстовый глиф.

export type MarqueeDir = "left" | "right";

/* ============================================================
   NAV
============================================================ */
export const nav = {
    brand: {ru: "АЧ", en: "AC"} satisfies I18n,
    links: [
        {href: "#intro", label: {ru: "Как я работаю", en: "How I work"}},
        {href: "#work", label: {ru: "Проекты", en: "Projects"}},
        {href: "#services", label: {ru: "Услуги", en: "Services"}},
        {href: "#contact", label: {ru: "Контакты", en: "Contacts"}},
    ] satisfies { href: string; label: I18n }[],
    cta: {label: {ru: "Написать ↗\uFE0E", en: "Get in touch ↗\uFE0E"}, href: links.telegram},
};

/* ============================================================
   HERO — четыре бегущие строки, портрет и печатающийся статус.
   (число лет подставляется динамически — см. lib/tenure)
============================================================ */
export const hero = {
    // Typewriter eyebrow: openStatus / location / <tenure phrase> suffix
    openStatus: {ru: "Беру заказы", en: "Available for work"},
    location: {ru: "Санкт-Петербург / Удалённо", en: "St. Petersburg / Remote"},
    tenureSuffix: {ru: "в разработке", en: "of building things"},

    // Строки чередуются: чётные — залитые, нечётные — контурные.
    marquee: {
        lines: [
            {ru: "Сайт за неделю", en: "A site in a week"},
            {ru: "Все работы под ключ", en: "Turnkey, start to finish"},
        ] satisfies I18n[],
        rows: [
            {line: 0, dir: "left", duration: 68, outline: false},
            {line: 1, dir: "right", duration: 88, outline: true},
            {line: 0, dir: "left", duration: 56, outline: false},
            {line: 1, dir: "right", duration: 76, outline: true},
        ] satisfies { line: number; dir: MarqueeDir; duration: number; outline: boolean }[],
    },

    // Фото с прозрачным фоном — правый нижний угол первого экрана.
    photo: {
        image: meHero,
        alt: {ru: "Александр Чеченев", en: "Alexander Chechenev"} satisfies I18n,
    },
    tagline: {
        ru: "Всё делаю сам: придумываю, как будет работать, программирую, запускаю и помогаю дальше. Через неделю у вас работающий сайт, а не обещания.",
        en: "I do all of it myself: work out how it should work, build it, launch it and help you after. In a week you have a working site, not promises.",
    } satisfies I18n,
};

/* ============================================================
   INTRO — обещание, три цифры, кнопки, живое демо и преимущества
============================================================ */
export const intro = {
    // Statement is composed as: leadA + <tenure phrase> + leadB + <accent> + tail
    statement: {
        leadA: {ru: "За ", en: "Over "},
        leadB: {
            ru: ` собрал сайты, магазины и чаты с искусственным интеллектом, и знаю, где обычно всё ломается. Поэтому не начинаю с чистого листа: `,
            en: " I have built sites, stores and chats with artificial intelligence, and I know where things usually break. So I never start from a blank page: ",
        },
        accent: {ru: "первый рабочий вариант через два дня", en: "a first working version in two days"},
        tail: {ru: `, готовый сервис через неделю.`, en: ", a finished service in a week."},
    } satisfies Record<"leadA" | "leadB" | "accent" | "tail", I18n>,

    stats: [
        {
            value: {ru: "1 неделя", en: "1 week"},
            label: {ru: "от идеи до готового сайта", en: "from idea to a finished site"},
        },
        {
            value: {ru: "30+ проектов", en: "30+ projects"},
            label: {ru: "сделал и запустил", en: "built and launched"},
        },
        {
            // value подставляется из lib/tenure — «5 лет» / «5 years»
            label: {
                ru: "в разработке, в том числе для крупных компаний",
                en: "in development, including for large companies",
            },
        },
    ] satisfies { value?: I18n; label: I18n }[],

    ctas: [
        {label: {ru: "Обсудить задачу ↗\uFE0E", en: "Discuss your project ↗\uFE0E"}, href: links.telegram, solid: true},
        {label: {ru: "Смотреть проекты ↗\uFE0E", en: "See the projects ↗\uFE0E"}, href: "#work", solid: false},
    ] satisfies { label: I18n; href: string; solid: boolean }[],

    // Не список обязанностей — три причины, почему неделя это реально.
    advantages: [
        {
            title: {ru: "Всё делаю сам", en: "I do all of it myself"},
            text: {
                ru: "Не нужно отдельно искать дизайнера, программиста и того, кто всё это запустит. Один человек ведёт весь путь, и спрашивать тоже нужно только с одного.",
                en: "No need to hire a designer, a programmer and someone to launch it. One person carries the whole way, and there is only one person to ask.",
            },
        },
        {
            title: {ru: "Не начинаю с нуля", en: "I never start from zero"},
            text: {
                ru: "У меня готовые заготовки и проверенные решения, поэтому рабочий вариант появляется в первые дни, а не в конце.",
                en: "I have ready-made pieces and proven solutions, so a working version shows up in the first days, not at the end.",
            },
        },
        {
            title: {ru: "Объясняю по-человечески", en: "I explain things in plain words"},
            text: {
                ru: "Без непонятных слов и без «доверьтесь профессионалу»: показываю результат каждый день, вы видите, за что платите.",
                en: "No jargon and no “just trust the expert”: I show progress every day, so you always see what you are paying for.",
            },
        },
    ] satisfies { title: I18n; text: I18n }[],
};

/* ============================================================
   RAG DEMO — карточка «чат по вашим файлам», играет сама себя
============================================================ */
export const ragDemo = {
    label: {ru: "Пример · чат по вашим файлам", en: "Example · chat over your files"},
    retrieving: {ru: "ищу в ваших файлах…", en: "searching your files…"},
    items: [
        {
            q: {ru: "Сколько мы продали в марте?", en: "How much did we sell in March?"},
            src: [
                {ru: "отчёт-март.xlsx", en: "march-report.xlsx"},
                {ru: "продажи.xlsx", en: "sales.xlsx"},
            ],
            a: {
                ru: "В марте 2,4 млн, на 18% больше, чем в феврале.",
                en: "March came to 2.4M, 18% above February.",
            },
        },
        {
            q: {ru: "Где договор с «Ромашкой»?", en: "Where is the Romashka contract?"},
            src: [{ru: "Договоры 2026", en: "Contracts 2026"}],
            a: {
                ru: "Договор №148 от 12 марта, папка «Договоры 2026».",
                en: "Contract No. 148 dated 12 March, folder “Contracts 2026”.",
            },
        },
        {
            q: {ru: "О чём чаще всего спрашивают клиенты?", en: "What do customers ask about most?"},
            src: [{ru: "переписка.docx", en: "customer-chats.docx"}],
            a: {
                ru: "Про сроки доставки и возврат: 6 обращений из 10.",
                en: "Delivery times and returns: 6 out of every 10 requests.",
            },
        },
    ] satisfies { q: I18n; src: I18n[]; a: I18n }[],
};

/* ============================================================
   BAND — полноэкранный бегущий заголовок перед проектами
============================================================ */
export const bands = {
    work: {ru: "Проекты", en: "Projects"} satisfies I18n,
};

/* ============================================================
   WORK — три проекта и лента кадров
============================================================ */
export const work = {
    cta: {ru: "Перейти к проекту ↗\uFE0E", en: "View project ↗\uFE0E"},
    // Один абзац на проект — что там делал я, обычными словами. Теги — короткие
    // подписи под проектом, а не список технологий.
    cases: [
        {
            company: "Just AI",
            period: {ru: "с 2024", en: "since 2024"},
            title: {ru: "Поиск по документам компании", en: "Search across company documents"},
            text: {
                ru: "Начинал с того, что человек видит на экране: как продукт выглядит и как им пользоваться, помогал делать так же командам других продуктов. Сейчас один из главных инженеров: отвечаю за то, чтобы система понимала вопрос и давала точный ответ.",
                en: "I started with everything a person sees on screen: how the product looks and how it is used, and helped other product teams do the same. Today I am one of the lead engineers: I make sure the system understands the question and answers it accurately.",
            },
            tags: [
                {ru: "Поиск с ИИ", en: "AI-powered search"},
                {ru: "Для крупных компаний", en: "For large companies"},
                {ru: "Внешний вид продукта", en: "The product look and feel"},
                {ru: "Учил коллег", en: "Coached colleagues"},
            ],
            href: "https://khub.just-ai.com/",
        },
        {
            company: "Заправыч",
            title: {ru: "Крупный сервис по топливу на заправках", en: "A large fuel service for petrol stations"},
            text: {
                ru: "Сделал сервис целиком: карта, цены, фильтры и общение водителей в одном месте.",
                en: "I built the service end to end: the map, the prices, the filters and the drivers' chat in one place.",
            },
            tags: [
                {ru: "Карта и цены", en: "Map and prices"},
                {ru: "Много пользователей", en: "Many users"},
                {ru: "Сделал целиком", en: "Built end to end"},
            ],
            href: "https://zapravy4.com/",
        },
        {
            company: "НеоБИТ",
            period: {ru: "2023–2024", en: "2023–2024"},
            title: {ru: "Сервис для работы с публикациями в соцсетях", en: "A service for working with social media posts"},
            text: {
                ru: "Руководил запуском сервиса целиком: команда из пяти человек, архитектура, сроки и вывод в боевую эксплуатацию под реальной нагрузкой.",
                en: "I led the whole launch: a team of five, the architecture, the deadlines and going live under real traffic.",
            },
            tags: [
                {ru: "Руководил запуском", en: "Led the launch"},
                {ru: "Команда 5 человек", en: "Team of 5"},
                {ru: "Большая нагрузка", en: "Heavy traffic"},
            ],
            href: "https://neobit.ru/",
        },
    ] satisfies { company: string; period?: I18n; title: I18n; text: I18n; tags: I18n[]; href?: string }[],

    // Две встречные ленты кадров под проектами.
    tiles: [
        {img: toporich, label: {ru: "Топорыч · сервис по подписке", en: "Toporych · subscription service"}},
        {img: zapravich, label: {ru: "Заправыч · карта заправок", en: "Zapravych · fuel station map"}},
        {img: khub, label: {ru: "Поиск по документам · Just AI", en: "Document search · Just AI"}},
        {img: jay, label: {ru: "База знаний · Just AI", en: "Knowledge base · Just AI"}},
        {img: justAiVb, label: {ru: "Just AI · продукт", en: "Just AI · product"}},
        {img: elagin, label: {ru: "Елагин Pro · лекция", en: "Elagin Pro · talk"}},
        {img: best, label: {ru: "Findly · премия 2021", en: "Findly · 2021 award"}},
        {img: lg, label: {ru: "LG R&D Lab · стажировка", en: "LG R&D Lab · internship"}},
    ] satisfies { img: StaticImageData; label: I18n }[],
};

/* ============================================================
   SERVICES — три встречные ленты услуг
============================================================ */
export const services = {
    heading: {
        ru: "Разрабатываю практически всё, что работает в браузере, телефоне и мессенджере",
        en: "I build just about anything that runs in a browser, a phone or a messenger",
    } satisfies I18n,
    // Одно облако, а не ленты: подсветка перебегает по чипам, поэтому это
    // обычный список, который читается целиком.
    chips: [
        {ru: "Сайт компании", en: "Company site"},
        {ru: "Интернет-магазин", en: "Online store"},
        {ru: "Личный кабинет", en: "Client portal"},
        {ru: "Веб-приложение", en: "Web app"},
        {ru: "Мобильное приложение", en: "Mobile app"},
        {ru: "Поиск по документам компании", en: "Search across company documents"},
        {ru: "ИИ-помощник для сотрудников", en: "AI assistant for staff"},
        {ru: "Чат-бот в Телеграме", en: "Telegram chatbot"},
        {ru: "Сервис под вашу задачу", en: "A service built for your task"},
        {ru: "Автоматизация отчётности", en: "Reporting automation"},
        {ru: "Внутренние сервисы компании", en: "Internal company services"},
        {ru: "Ускорение и доработка сайта", en: "Speeding up and improving a site"},
        {ru: "Поддержка после запуска", en: "Support after launch"},
    ] satisfies I18n[],
};

/* ============================================================
   CONTACT
============================================================ */
export const contact = {
    note: {
        ru: "Стандартных задач у меня почти не бывает, и это нормально. Просто опишите обычными словами, что хотите получить на выходе, а как это устроить внутри, придумаю я.",
        en: "I almost never get a standard brief, and that is fine. Just describe in plain words what you want to end up with; how it works inside is mine to figure out.",
    } satisfies I18n,
    headline: {ru: "Написать мне ↗\uFE0E", en: "Get in touch ↗\uFE0E"},
    headlineHref: links.telegram,
    toTop: {ru: "Наверх ↑", en: "Back to top ↑"},
    links: [
        {kind: "email", value: links.email, href: `mailto:${links.email}`},
        {kind: "Telegram", value: "Telegram", href: links.telegram},
        {kind: "LinkedIn", value: "LinkedIn", href: links.linkedin},
        {kind: "VK", value: "VK", href: links.vk},
    ],
};

/* ============================================================
   FOOTER
============================================================ */
export const footer = {
    left: {ru: "Александр Чеченев", en: "Alexander Chechenev"} satisfies I18n,
};
