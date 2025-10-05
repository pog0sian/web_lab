// Загружаем проекты из JSON и создаем карточки
$.getJSON("data/portfolio.json", function(data) {
    let cardsHtml = '';
    data.forEach(function(project) {
        cardsHtml += `
        <div class="card portfolio__card">
            <h3 class="portfolio__card-title">${project.title}</h3>
            <p class="portfolio__card-description">${project.description}</p>
            <a href="${project.link}" class="portfolio__card-link" target="_blank">Посмотреть проект</a>
        </div>`
    })
    $('.portfolio__content__items').html(cardsHtml);
}).fail(function(jqxhr, textStatus, error) {
    console.error("Ошибка загрузки JSON: " + textStatus + ", " + error);
})

// Плавная прокрутка
$(document).ready(function() {
    const carousel = $('.skills__content__carousel');
    const scrollAmount = 400;

    $('.skills__content__carousel__buttons-next').click(function() {
        carousel.animate({
            scrollLeft: '+=' + scrollAmount
        }, 400);
    });

    $('.skills__content__carousel__buttons-prev').click(function() {
        carousel.animate({
            scrollLeft: '-=' + scrollAmount
        }, 400);
    });

    setInterval(function() {
        carousel.animate({
            scrollLeft: '+=' + scrollAmount
        }, 400);
    }, 5000);
});

// Модальное окно обратной связи
$(function() {
    $('.js-feedback-open').on('click', function(e) {
        e.preventDefault();
        $('#feedback-modal').addClass('active');
    });

    $('#feedback-modal .modal__close, #feedback-modal .modal__overlay').on('click', function() {
        $('#feedback-modal').removeClass('active');
    });

    $(document).on('keydown', function(e) {
        if (e.key === 'Escape') {
            $('#feedback-modal').removeClass('active');
        }
    });
});

// js/script.js
// Theme toggle with jQuery, using CSS variables and body.dark-theme class
$(function() {
    const $toggle = $('.theme-toggle');

    function applyTheme(theme) {
        const isDark = theme === 'dark';
        $('body').toggleClass('dark-theme', isDark);
        $toggle.text(isDark ? '☀️' : '🌙');
        $toggle.attr('aria-label', isDark ? 'Сменить на светлую тему' : 'Сменить на тёмную тему');
    }

    const saved = localStorage.getItem('theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initial = saved || (prefersDark ? 'dark' : 'light');
    applyTheme(initial);

    $toggle.on('click', function() {
        const isDark = $('body').hasClass('dark-theme');
        const next = isDark ? 'light' : 'dark';
        localStorage.setItem('theme', next);
        applyTheme(next);
    });
});



