// Создание пакета npm происходит командой npm init 
// После заполнения формы был создан json файл с моим пакетом
// Далее ищем нужный пакет на https://www.npmjs.com/

// Попробуем поставить этот https://www.npmjs.com/package/superheroes
// Установка происходит через npm instal и название проекта

// После этого нам нужно его подключить

const superheroes = require('superheroes');
const supervillains = require('supervillains');

// И вызвать метод этого пакета

let mySuperHeroName = superheroes.random();
let mySuperVilliainsName = supervillains.random();

console.log(mySuperHeroName + " vs " + mySuperVilliainsName);

// После вызова файла через node будет выдано супергеройское имя