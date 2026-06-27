/* Модальные окна */

/* Находим элементы для модального окна */

/* Все кнопки которые смогут открывать модальные окна , по datd атрибуту [data-action='modal'] */
const openModalBtns = document.querySelectorAll('[data-action="modal"]');
const modal = document.querySelector('.modal');  // Модальное окно
const closeModalBtn = document.querySelector('#closeModal');  // Кнопка закрытия модального окна
const modalBody = document.querySelector('.modal__body');  // Блок с контентом модального окна

function openModal() {
    // ОБращаемся к модалке и отображаем её, добавляя к ней класс modal--open
    modal.classList.add('modal--open');

    // Добавляем к body класс no-scroll чтобы запретить скролл на странице
    document.body.classList.add('no-scroll');
};

function closeModal() {
    // Закрываем модальное окно, удаляя у него класс modal--open
    modal.classList.remove('modal--open');

    // Возвращаем скролл на страницу
    document.body.classList.remove('no-scroll');
};

// Открываем модалку при клике по кнопкам
openModalBtns.forEach(function(item) {
    item.addEventListener('click', openModal);
});

// Закрываем модалку при помощи кнопки закрытия
closeModalBtn.addEventListener('click', closeModal);

/* Закрытие модалки при клике на оверлее */
modal.addEventListener('click', closeModal);

// Слушаем клик непосредственно внутри модального окна
modalBody.addEventListener('click', function(event) {
    event.stopPropagation();
});

// Закрываем модалку нажатием Escape
document.addEventListener('keydown', function(event) {
    if (event.key == 'Escape') {
        closeModal()
    };
});