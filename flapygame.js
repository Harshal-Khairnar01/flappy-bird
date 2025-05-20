
const hole = document.getElementById("hole");
const bird = document.getElementById("bird");
const block = document.getElementById("block");
var result = document.getElementById("result");

var scrgm = document.getElementById("shwscr");


var game = document.getElementById("game");
var scr = document.getElementById("scr");
var jumping = 0;
var score = 0;



hole.addEventListener("animationiteration", hole_r);

function hole_r() {
    var random = -((Math.random() * 350) + 150);
    hole.style.top = random + "px";
    score++;
    scrgm.innerText = `Score : ${score}`
}

var fall = setInterval(function () {
    var birdTop = parseInt(window.getComputedStyle(bird).getPropertyValue("top"));
    if (jumping == 0) {
        bird.style.top = (birdTop + 2) + "px";
    }

    var blockleft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    var holeTop = parseInt(window.getComputedStyle(hole).getPropertyValue("top"));
    // hTop gives value under #game
    var hTop = (500 + holeTop);


    if (birdTop > 490 || birdTop < 30 || ((blockleft < 51) && (blockleft > -51) && ((birdTop - 40 < hTop) || (birdTop - 60 > hTop + 100)))) {
        result.style.display = "block";
        scr.innerText = `Score : ${score}`;
        game.style.display = "none";
    }

}, 10);

function jump() {
    jumping = 1;
    var birdTop = parseInt(window.getComputedStyle(bird).getPropertyValue("top"));
    if (birdTop > 6) {
        bird.style.top = (birdTop - 60) + "px";
    }

    setTimeout(() => {
        jumping = 0
    }, 100);

}


window.addEventListener("keydown", jump);