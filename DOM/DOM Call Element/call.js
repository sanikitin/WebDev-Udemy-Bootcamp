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