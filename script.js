/*let balls =[
  document.getElementById("ball0"),
  document.getElementById("ball1"),
  document.getElementById("ball2"),
  document.getElementById("ball3")
];*/
let balls = [ball0, ball1 ,ball2 ,ball3];
//adding event handles for the balls

balls [0].onclick = function () {clicked(0)};
balls [1].onclick = function () {clicked(1)};
balls [2].onclick = function () {clicked(2)};
balls [3].onclick = function () {clicked(3)};

let current = 0; //current active
let score = 0; //score
let pace = 1500; //Speed

function clicked (i) {
  console.log("clicked:", i);
  if (i !== current) {
    return gameOver();
  }
  else {
    score++;
    pace =pace - 10;
    document.getElementById("score").innerHTML ="your points are " + score;
  }
}
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}
/*function randomColor (i) {
  let i = (i=0, i<= array.length, ++);
  Math.floor(Math.random()* 4);
} */

function pickNext() {
  let next = pickNew (current);

  balls[current].style.backgroundColor = "black";
  balls[next].style.backgroundColor = "blue";

  current = next;
  console.log("Current:", current);
  timer = setTimeout(pickNext, pace);


  function pickNew(previous) {
    let next = getRndInteger(0, 3);

    if (next != previous) {
      return next;
    } else {
      return pickNew(previous);
    }
  }
}
function gameOver () {
  clearTimeout(timer);
  for(let i = 0; i < 4; i++){
    balls[i].style.backgroundColor = "rgb(150, 11, 15)";
    balls[i].onclick = null;
  }
  let overlay = document.getElementById("popwindow");
  let gameover = document.getElementById("gamestop");
  document.getElementById("lastscore").innerHTML ="your points are " + score;
  overlay.style.visibility = "visible";
}

/*clickHandler = (btnId) => {
  console.log("clicked! ", btnId);
  if(current !== btnId) {
  return GameOver();

}*/
