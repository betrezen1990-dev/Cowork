/* Аккордеон. Для блока ответы на вопросы */

// Находим все блоки для аккордеона
const topics = document.querySelectorAll('.topic');

// Обходим все блоки аккордеона
topics.forEach(function(topic) {
    // На каждый блок вешаем прослушку по клику
    topic.addEventListener('click', function(event) {
        
        // Проверяем был клик внутри кнопки или нет
        // Проверка идет на то что клик был совершен на элементе который размещен внутри кнопки,
        // то есть внутри блока с классом .topic__btn, в нашем случае это кнопка
        if (event.target.closest('.topic__btn')) {

            // Добавляем/Убираем у блока topic--open
            // Eсли был добавлен вернется true, если был убран вернется false
            // Возвращаемое значение записываем в константу toggleResult
            const isOpened = topic.classList.toggle('topic--open');

            // Находим картинку
            const img = topic.querySelector('.topic__icon');
            const content = topic.querySelector('.topic__content');
            
            // Проверяем если мы добавили класс то есть блок надо открыть
            // тогда открываем его, отображаем на странице
            if (isOpened) {
                img.src= './img/icons/btn-minus.svg';
                content.style.maxHeight = content.scrollHeight + 'px';
            } else {
                img.src= './img/icons/btn-plus.svg';
                content.style.maxHeight = '0px';
            };
        };
    });
});