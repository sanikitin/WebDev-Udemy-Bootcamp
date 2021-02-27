// Функция рандомного выбора имени из массива, того кто идет за обедом =)

let names = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];

function whosPaying(names) {
    
    /******Don't change the code above*******/
        let chance = Math.random()*names.length;
        let name;
        
        name = Math.floor(chance);

        return names[name] + " is going to buy lunch today!";
    /******Don't change the code below*******/    
}