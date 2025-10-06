# Сайт‑визитка

> Учебный проект: персональная страница с разделами «Обо мне», «Навыки», «Портфолио», «Контакты», переключателем светлой/тёмной темы и адаптивной вёрсткой.

## Технологии
- HTML5, семантическая разметка
- SCSS (Sass) с модулями (`@use`, частичные файлы) и переменными
- CSS Custom Properties (CSS‑переменные) для темизации без перекомпиляции
- jQuery (загрузка данных, анимации скролла, модалка, переключение темы)
- Адаптивная вёрстка (медиа‑запросы под смартфон/планшет/ПК)

## Функциональность
- Переключатель темы: светлая/тёмная, хранение выбора в `localStorage`, авто‑инициализация по `prefers-color-scheme`.
- Портфолио: карточки проектов подгружаются из `data/portfolio.json`.
- Карусель навыков: горизонтальная прокрутка с кнопками навигации и автоскроллом.
- Модальное окно «Связаться со мной» с закрытием по overlay/Escape.
- Кнопка «Наверх».

## Структура проекта
```
web-lab/
  index.html
  js/
    script.js            # логика: портфолио, карусель, модалка, тема
  scss/
    main.scss            # точка входа для сборки
    utils/_variables.scss
    base/_global.scss
    themes/_light.scss
    themes/_dark.scss
    layout/
      _header.scss
      _hero.scss
      _about.scss
      _skills.scss
      _portfolio.scss
      _contacts.scss
      _footer.scss
    components/
      _card.scss
      _modal.scss
  dist/
    css/main.css         # скомпилированные стили
    images/              # изображения и иконки
  data/portfolio.json    # данные для карточек портфолио
  package.json
  yarn.lock
```

## Сборка стилей
Требуется Node.js. Установить зависимости:
```bash
npm i
```
Ручная одноразовая сборка:
```bash
npx sass "scss/main.scss":"dist/css/main.css"
```
Скрипты (можно прописать реальные пути в `package.json`):
```json
{
  "scripts": {
    "sass:dev": "sass --watch scss:dist/css",
    "sass:prod": "sass --no-source-map --style compressed scss:dist/css"
  }
}
```
Запуск:
```bash
npm run sass:dev
```
## Деплой
- [Ссылка на сайт](https://pog0sian.github.io/web_lab/)

## Темизация
- Базовые токены в `themes/_light.scss` (`:root`) и `themes/_dark.scss` (`body.dark-theme`).
- SCSS‑переменные в `utils/_variables.scss` ссылаются на CSS‑переменные, что позволяет переключать темы без пересборки.
- Ключевые токены: `--primary-color`, `--primary-color-hover`, `--text-color`, `--bg-color`, `--card-bg`, `--border-color`, `--card-border-color`, `--muted-text`, `--footer-bg`.

## Адаптивность
Основные брейкпоинты: 1024px, 768px, 480px. Настроены для: `header`, `hero`, `skills`, `portfolio`, `card`, `footer`.

## Автор
Погосян Давид Арменович, группа ФИТ‑231.
