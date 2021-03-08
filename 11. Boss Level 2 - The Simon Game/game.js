// Массивы для хранения. Первый для рандомного выбора и второй для хранения выбора
let buttonColours = ["red", "blue", "green", "yellow"];

let gamePattern = [];
let userClickedPattern = [];

let level = 0;
let startGame = false;

// Запуск игры
$(document).keypress(function () {
    if (!startGame) {
        $("#level-title").text("Level " + level);
        nextSequence();
        startGame = true;
    }
});

// Функция рандомно выбирает один из четрых цветов, выбирает значение из первого массива и сохраняет выбор во второй массив. После чего проигрывает анимацию и звук выбора
function nextSequence() {
    // Массив набора игрока обнуляется перед каждым уровнем и игрок заново набирает последовательность
    userClickedPattern = [];

    // Счетчик уровней
    level++;
    $("#level-title").text("Level " + level);

    let randomNumber = Math.floor(Math.random() * 4);

    let randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    $("#" + randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);


}

// Выбор игрока
$(".btn").click(function () {
    let userChosenColour = this.id;
    userClickedPattern.push(userChosenColour);

    animatePress(userChosenColour);
    playSound(userChosenColour);
    // Происходит щелчок и отправляется запрос на сравнение
    checkAnswer(userClickedPattern.length - 1);
});

// Функция проверки выбора
function checkAnswer(currentLevel) {
    // Если нажатое и отправленное значение массива === заранее сформированному значению из массива, то ок, если нет, то гг
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        console.log("success");

        // Если на первом этапе все ок и длина массивов совпала, то начинается следующий уровень, но если нет, то ожидание следующего щелчка и ничего не происходит
        if (userClickedPattern.length === gamePattern.length) {
            setTimeout(function () {
                nextSequence();
            }, 1000);
        }

    } else {
        console.log("wrong");

        playSound("wrong");
        $("body").addClass("game-over");
        setTimeout(function () {
            $("body").removeClass("game-over");
        }, 200);

        $("#level-title").text("Game Over, Press Any Key to Restart");
        startOver();
    }
}

function startOver() {
    level = 0;
    startGame = false;

    gamePattern = [];
}

// Проигрывание звука нажатия кнопки
function playSound(name) {
    let audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

// Анимация нажатия кнопки мышкой
function animatePress(currentColour) {
    $("#" + currentColour).addClass("pressed");
    setTimeout(function () {
        $("#" + currentColour).removeClass("pressed");
    }, 100);
}

