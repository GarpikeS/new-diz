# Проект: Индустриальный парк "Красный Яр"

## О проекте
Корпоративный B2B сайт промышленного парка. Многостраничник с каталогом площадок, интерактивной картой, блогом и формами заявок.

## Стек
- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS 4 + shadcn/ui
- **CMS:** Payload CMS (планируется)
- **Maps:** Mapbox GL JS (планируется)
- **Deploy:** Vercel

## Дизайн-система
- **Primary:** #1A2332 (тёмно-синий)
- **Accent:** #E67E22 (индустриальный оранжевый)
- **Background:** #F8F9FA (светлый) / #0F1419 (тёмный)
- **Text:** #1F2937
- **Fonts:** Inter (основной), Montserrat (заголовки)

## Структура папок
```
src/
├── app/                 # App Router страницы
├── components/
│   ├── ui/              # shadcn/ui компоненты
│   ├── layout/          # Header, Footer, Layout
│   └── features/        # Бизнес-компоненты
├── lib/                 # Утилиты, конфиги
├── hooks/               # React хуки
├── types/               # TypeScript типы
└── styles/              # Глобальные стили
```

## Команды
```bash
npm run dev     # Разработка
npm run build   # Сборка
npm run lint    # Линтер
```

## Стиль кода
- Никаких слайдеров и анимаций "для красоты"
- Только факты, цифры, реальные объекты
- B2B минимализм: чистота, воздух, данные
