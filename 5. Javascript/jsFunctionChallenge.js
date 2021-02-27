/* http://stanford.edu/~cpiech/karel/ide.html
So I want you to set the world to five by five, delete what's currently inside function main, 
and to write some code that gets Karel from the bottom left corner to the top right corner,
    remembering that you can always take a look at the reference to see what commands Karel is able to use.

So the first slightly easier challenge is, can you get her to put a diagonal line of beepers all the
way from the bottom left corner to the top right corner.

function main() {
    goCircle5();
    putBeeper();
    goCircle5();

    goCircle4();
    putBeeper();
    goCircle4();

    goCircle3();
    putBeeper();
    goCircle3();

    goCircle2();
    putBeeper();
    goCircle2();

    putBeeper();
}

function goCircle5() {
    move();
    move();
    move();
    move();
    turnLeft();
    move();
    move();
    move();
    move();
    turnLeft();
}

function goCircle4() {
    move();
    move();
    move();
    turnLeft();
    move();
    move();
    move();
    turnLeft();
}

function goCircle3() {
    move();
    move();
    turnLeft();
    move();
    move();
    turnLeft();
}

function goCircle2() {
    move();
    turnLeft();
    move();
    turnLeft();
} */

/* I'd like you to challenge yourself to see if you can get Karel to create a chessboard pattern like
what we have here, so alternating tiles of beepers essentially. */

function main() {
    putRow3();
    changeRowLeft();
    putRow2();
    changeRowRight();
    putRow3();
    changeRowLeft();
    putRow2();
    changeRowRight();
    putRow3();
}

function putRow3() {
    putBeeper();
    move();
    move();
    putBeeper();
    move();
    move();
    putBeeper();
}

function putRow2() {
    move();
    putBeeper();
    move();
    move();
    putBeeper();
    move();
}

function changeRowLeft() {
    turnLeft();
    move();
    turnLeft();
}

function changeRowRight() {
    turnRight();
    move();
    turnRight();
}     