function bottles99() {
    let bottles = 99;
    while (bottles>0) {
        let bottleWord = "bottles";
    if (bottles === 1) {
        bottleWord = "bottle";
    } 
        console.log(bottles+" "+bottleWord+" of beer on the wall, "+bottles+" "+bottleWord+" of beer. Take 1 down, pass it around, "+(bottles-1)+" "+bottleWord+" of beer on the wall.");
        bottles--;        
    }    
}