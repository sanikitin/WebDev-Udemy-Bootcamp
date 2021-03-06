// Выбор элемента

document.querySelector("h1");
// и
document.querySelectorAll("h1");
// заменяется на 
$("h1");
// в скобки можно указать как один элемент, так и несколько. Всё также можно указать классы и id

// Управление элементами

// Стили

$("h1").css("color","green"); // Это обращение к файлу стилей и для выбранного элемента изменение параметра стиля, но это не ок, лучше подключать готовые классы к элементу
$("h1").addClass("big_title"); // Как тут и его можно удалить (Если надо добавить несколько классов, то они добавляются через пробел)
$("h1").removeClass("big_title"); // Как тут.
$("h1").hasClass("big_title"); // Этой командой мы запрашиваем наличие класса и получаем true или false в зависимости от начилия

console.log($("h1").css("color")); // Это вывод текущего значения параметра

// Текст

$("h1").text("New text"); // Добавление или изменения текста в элементе

$("h1").html("<em>Bye</em>"); // Аналог innerHtml меняет не текст, а код

// Аттрибуты

console.log($("img").attr("src")); // Запрос значения аттрибута и вывод в консоль

$("a").attr("href", "https://www.google.ru/"); // Задание нового значения для аттрибута

// Прослушивание событий

// Было
// for (let index = 0; index < 5; index++) {
//     document.querySelectorAll("button")[i].addEventListener("click", function() {
//         document.querySelector("h1").style.color = "purple";
//     });
// }

// Стало

$("button").click(function () {
    $("h1").css("color", "purple");
});

// Цикл не нужен, так как jQuery смотрит и добавляет click ко всем кнопкам на сайте

// Захват нажатой клавиши на сайте и передача её в h1
$(document).keypress(function (event) {
    console.log(event.key);
    $("h1").text(event.key);
});

// Метод on с двумя параметрами, первый событие, второй это что должно произойти. Вариант прослушки.

$("h1").on("mouseover", function () {
    $("h1").css("color","purple");
});


// Добавление и удаление элементов

// Добавление нового элемента после выбранного
$("h1").after("<button>New</button>");

// Добавление нового элемента до выбранного
$("h1").before("<button>New</button>");

// Добавление нового элемента после открывающего тега выбранного (внутри)
$("h1").prepend("<button>New</button>")

// Добавление нового элемента перед закрывающим тегом выбранного (внутри)
$("h1").append("<button>New</button>")


// Анимации

// Методы теже, что и в JS
$("h1").hide();
$("h1").show();
$("h1").toggle();
// + новые из jQuery
$("h1").fadeOut();
$("h1").fadeIn();
$("h1").fadeToggle();

$("h1").slideUp();
$("h1").slideDown();
$("h1").slideToggle();

// Для более тонкой настройки можно использовать animate

$("h1").animate({opacity: 0.5}); // В скобках указываются фигурные скобки и CSS правило с новым значением. Важно: CSS только с числовым значением. Цвет изменить не получится.
// Если нужно несколько анимаций подряд, то их нужно указать цепочкой $("h1").animate({opacity: 0.5}).slideUp().fadeIn();
