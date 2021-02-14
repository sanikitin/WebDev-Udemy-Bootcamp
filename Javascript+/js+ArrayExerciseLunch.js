// Функция рандомного выбора имени из массива, того кто идет за обедом =)

let names = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];

function whosPaying(names) {
    
    /******Don't change the code above*******/
        let name = Math.random();
        name = Math.floor(name*names.length) + 1;       
    

        return names[name] + " is going to buy lunch today!";
    /******Don't change the code below*******/    
    }