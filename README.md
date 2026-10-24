# Project Template

Мінімальний стартовий шаблон на Vite + SCSS + JS.

## Старт

```bash
npm install
npm run dev      # локальний сервер розробки
npm run build    # продакшн-збірка у dist/
npm run preview  # переглянути білд
```

## Структура

```
├── index.html
├── vite.config.js       — плагіни + точки входу для збірки (multipage: див. коментар у файлі)
├── postcss.config.js    — px → rem конвертація + autoprefixer
├── src/
│   ├── partials/         — header.html, footer.html (підключаються через include, див. нижче)
│   ├── icons/             — SVG-іконки, збираються в спрайт (див. нижче)
│   ├── logo/logo.svg     — плейсхолдер, заміни на свій
│   ├── js/script.js      — логіка бургер-меню + реєстрація SVG-спрайту
│   └── sass/
│       ├── base/
│       │   ├── variables.scss   — кольори проєкту (заміни $accent під бренд)
│       │   ├── mixins.scss      — @mixin title, button, angle-decoration
│       │   └── basic.scss       — reset + .container + .icon
│       ├── ui/
│       │   ├── titles.scss      — .title-h1 / h2 / h3 / h1-italic
│       │   └── buttons.scss     — .btn-default / send / submit / read
│       ├── blocks/
│       │   ├── header.scss
│       │   └── footer.scss
│       └── libs/                — modern-normalize
```

## Плагіни збірки

- **vite-plugin-html** — дозволяє виносити повторювані шматки HTML (header/footer) в окремі файли і підключати через include, замість копіювання в кожну сторінку.
- **autoprefixer** — автоматично додає вендорні CSS-префікси (`-webkit-`, `-moz-`) під браузери зі списку `browserslist` у package.json.
- **vite-plugin-image-optimizer** — стискає jpg/png/svg під час `npm run build` (на `npm run dev` не впливає).
- **vite-plugin-svg-icons** — збирає всі файли з `src/icons/*.svg` в один спрайт, доступний у рантаймі.

### Як користуватись partials (include)

Header і footer лежать у `src/partials/header.html` і `src/partials/footer.html`. У будь-якому `.html` файлі підключаєш так:

```html
<%- include('/src/partials/header.html') %>
```

Заміни один файл — оновиться на всіх сторінках, де є цей include. Створюй нові партиали так само (наприклад `src/partials/cta-banner.html`) для секцій, які повторюються на кількох сторінках.

### Як користуватись SVG-іконками

1. Кинь новий `.svg` файл у `src/icons/`, наприклад `heart.svg`.
2. Онови сторінку (dev-сервер підхопить сам).
3. Використай у розмітці:
   ```html
   <svg class="icon"><use xlink:href="#icon-heart"></use></svg>
   ```
   Ім'я в `xlink:href` = `icon-` + назва файлу без розширення.
4. Колір іконки керується через CSS `color` (іконки намальовані з `stroke="currentColor"`), розмір — через клас `.icon` в `basic.scss` (за замовчуванням 20×20px, для соцмереж у футері окремий клас `.icon-social` на 30×30px).

Зараз в комплекті: `search`, `shopping-bag`, `facebook`, `instagram`, `pinterest-circled`.

## Як додати нову секцію

1. Створи `src/sass/blocks/твій-блок.scss`
2. Підключи в `src/sass/style.scss`: `@use "/src/sass/blocks/твій-блок.scss";`
3. Додай розмітку в `<main>` в `index.html`

## Як додати нову сторінку (multipage)

1. Створи `about.html` в корені (скопіюй head/header/footer з `index.html`)
2. У `vite.config.js` додай в `rollupOptions.input`:
   ```js
   about: resolve(__dirname, "about.html"),
   ```
   **Важливо:** без цього рядка сторінка не потрапить у продакшн-білд — саме такий баг був у вихідному проєкті (about.html і blog.html не збирались).

## Що свідомо прибрано з оригіналу

Секції promo, activities, touch (форма з валідацією), works (Swiper-слайдер), catalog (таби), blog, about, findus — вони були конкретною версткою під контент "Ceramic Soul". Разом з ними прибрано залежності `swiper`, `just-validate`, `purecss` з package.json — став непотрібним. За потреби постав назад:
```bash
npm install swiper just-validate purecss
```
