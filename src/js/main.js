/**
 * !(i)
 * Код попадает в итоговый файл, только когда вызвана функция, например FLSFunctions.spollers();
 * Или когда импортирован весь файл, например import "files/script.js";
 * Неиспользуемый код в итоговый файл не попадает.

 * Если мы хотим добавить модуль следует его раскомментировать
 */
// import { MousePRLX } from './libs/parallaxMouse'
// import AOS from 'aos'
import Swiper from 'swiper/bundle';

import {BaseHelpers} from './helpers/base-helpers';
// import {PopupManager} from './modules/popup-manager';
// import {BurgerMenu} from './modules/burger-menu';
// import {Tabs} from './modules/tabs';
import {Accordion} from './modules/accordion';

BaseHelpers.checkWebpSupport ();

BaseHelpers.calcScrollbarWidth ();

BaseHelpers.addTouchClass ();

// BaseHelpers.headerFixed();

/**
 * Открытие/закрытие модальных окон
 * Чтобы модальное окно открывалось и закрывалось
 * На окно повешай атрибут data-popup="<название окна>"
 * На кнопку, которая вызывает окно повешай атрибут data-type="<название окна>"

 * На обертку(.popup) окна добавь атрибут '[data-close-overlay]'
 * На кнопку для закрытия окна добавь класс '.button-close'
 * */
// new PopupManager ();

/**
 *  Модуль для работы с меню (Бургер)
 * */
// new BurgerMenu ().init ();

/**
 *  Библиотека для анимаций
 *  документация: https://michalsnik.github.io/aos
 * */
// AOS.init();

/**
 * Параллакс мышей
 * */
// new MousePRLX();

// new Tabs('tabs-example', {
// 	onChange: (data) => {
// 		console.log(data);
// 	},
// });

// new Accordion('.accordion', {
// 	shouldOpenAll: false, // true
// 	defaultOpen: [], // [0,1]
// 	collapsedClass: 'open',
// });

document.addEventListener ('DOMContentLoaded', function () {
  const cards = document.querySelectorAll ('.cards.desk .cards-item');

  const observer = new IntersectionObserver (
    entries => {
      entries.forEach (entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add ('visible'); // Показать карточку
        } else {
          entry.target.classList.remove ('visible'); // Скрыть карточку, если вышла из видимости
        }
      });
    },
    {
      threshold: 0.5, // карточка появляется при 50% видимости
    }
  );

  cards.forEach (card => observer.observe (card));
});

const directionsCards = new Swiper ('.cards.swiper', {
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: '.directions-pagination',
    clickable: true,
  },
  breakpoints: {
    576: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 16,
    },
  },
});

// Получаем все карточки
const cards = document.querySelectorAll ('.traning .cards-item');

// Находим последнюю карточку
const lastCard = cards[cards.length - 1]; // Последняя карточка

cards.forEach (function (card) {
  // Отслеживаем состояние переворота карточки
  let isFlipped = false;

  // Добавляем обработчик клика для каждой карточки
  card.addEventListener ('click', function () {
    // Проверяем, не является ли карточка последней
    if (card === lastCard) {
      return; // Выходим, если это последняя карточка (статичная)
    }

    // Убираем переворот у всех других карточек, кроме текущей
    cards.forEach (function (otherCard) {
      if (otherCard !== card && otherCard !== lastCard) {
        otherCard.style.transform = 'rotateY(0deg)';
        otherCard.isFlipped = false; // Сбрасываем состояние других карточек
      }
    });

    // Переключаем состояние текущей карточки
    if (isFlipped) {
      card.style.transform = 'rotateY(0deg)'; // Возврат в исходное состояние
    } else {
      card.style.transform = 'rotateY(180deg)'; // Переворот на другую сторону
    }

    // Меняем состояние на противоположное
    isFlipped = !isFlipped;
  });
});

var formatNav = new Swiper ('.format-nav', {
  spaceBetween: 24,
  slidesPerView: 5,
  freeMode: true,
  watchSlidesProgress: true,
});
var formatImg = new Swiper ('.format-img', {
  spaceBetween: 10,
  allowTouchMove: false,
  thumbs: {
    swiper: formatNav,
  },
});
var teachersNav = new Swiper ('.teachers-nav', {
  spaceBetween: 8,
  slidesPerView: 12,
  freeMode: true,
  watchSlidesProgress: true,
});
var teachersImg = new Swiper ('.teachers-img', {
  spaceBetween: 10,
  allowTouchMove: false,
  thumbs: {
    swiper: teachersNav,
  },
});
var tarifNav = new Swiper ('.tarif-nav', {
  spaceBetween: 0,
  slidesPerView: 2,
  freeMode: true,
  watchSlidesProgress: true,
});
var tarifImg = new Swiper ('.tarif-img', {
  spaceBetween: 10,
  allowTouchMove: false,
  thumbs: {
    swiper: tarifNav,
  },
});
const freeSlider = new Swiper ('.free-slider', {
  slidesPerView: 1.1,
  spaceBetween: 30,
  pagination: {
    el: '.free-pagination',
    clickable: true,
  },
  breakpoints: {
    576: {
      slidesPerView: 1.6,
      spaceBetween: 20,
    },
    1199: {
      slidesPerView: 2.4,
      spaceBetween: 16,
    },
  },
});
new Accordion ('.answer-accordion', {
  shouldOpenAll: false, // true
  defaultOpen: [], // [0,1]
  collapsedClass: 'open',
});
let totalSeconds = 3 * 24 * 3600 + 5 * 3600 + 44 * 60 + 12;

function updateTimer () {
  // Рассчитываем дни, часы, минуты и секунды
  let days = Math.floor (totalSeconds / (24 * 3600));
  let hours = Math.floor (totalSeconds % (24 * 3600) / 3600);
  let minutes = Math.floor (totalSeconds % 3600 / 60);
  let seconds = totalSeconds % 60;

  // Форматируем время с ведущими нулями, если нужно
  hours = hours.toString ().padStart (2, '0');
  minutes = minutes.toString ().padStart (2, '0');
  seconds = seconds.toString ().padStart (2, '0');

  // Обновляем текст внутри элемента <span>
  document.getElementById (
    'timer'
  ).innerText = `${hours}:${minutes}:${seconds}`;
  // Обновляем текст внутри элемента <span>
  document.getElementById (
    'time-banner'
  ).innerHTML = `${days} дня &nbsp; ${hours}:${minutes}:${seconds}`;

  // Уменьшаем общее количество секунд
  if (totalSeconds > 0) {
    totalSeconds--;
  } else {
    clearInterval (timerInterval); // Останавливаем таймер, когда время истечет
  }
}
  // Запускаем таймер с интервалом 1 секунда
  let timerInterval = setInterval(updateTimer, 1000);
