// Поиск по тегу, вернет массив.
document.getElementsByTagName('значение')

// Поиск по названию класса, вернет массив.
document.getElementsByClassName('значение')

// Поиск по Id элемента. Так как Id уникален, то вернет элемент.
document.getElementById('значение')

// Самое распространенное
// Поиск по указанному значению. Вернет только элемент.
document.querySelector('значение')

// Поиск по указанному значению. Но вернет уже всё найденное массивом.
document.querySelectorAll('значение')


// Методы
// Получение классов элемента
document.querySelector('значение').classList;

// Добавление класса
document.querySelector('значение').add;

// Удаление класса
document.querySelector('значение').remove;

// Изменение значения, удаление если уже есть и добавление, если ещё нет
document.querySelector('значение').toggle;

// Получение списка аттрибутов
document.querySelector('значение').attributes;

// Получение значения аттрибута
document.querySelector('значение').getAttribute();


// Методы изменения контента
// Изменение значения HTML кода
document.querySelector('значение').innerHTML = 'new';

// Изменение значения текста
document.querySelector('значение').textContent = 'new';

// Изменение значения аттрибута
document.querySelector('значение').setAttribute('название аттрибута', 'новое значение аттрибута');