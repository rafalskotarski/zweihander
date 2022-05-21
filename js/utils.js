function rectangularCollision({ rectangle1, rectangle2 }) {
  return (
    rectangle1.hitBox.position.x + rectangle1.hitBox.width >=
      rectangle2.position.x &&
    rectangle1.hitBox.position.x <= rectangle2.position.x + rectangle2.width &&
    rectangle1.hitBox.position.y + rectangle1.hitBox.height >=
      rectangle2.position.y &&
    rectangle1.hitBox.position.y <= rectangle2.position.y + rectangle2.height
  );
}

function determineWinner({ player, enemy, timerId }) {
  clearTimeout(timerId);
  if (player.health === enemy.health) {
    document.querySelector("#announcement").innerHTML = "Tie";
  }
  if (player.health > enemy.health) {
    document.querySelector("#announcement").innerHTML = "Player 1 WINS";
  }
  if (player.health < enemy.health) {
    document.querySelector("#announcement").innerHTML = "Player 2 WINS";
  }
}

let timer = 90;
let timerId;
function decreaseTimer() {
  if (timer > 0) {
    timerId = setTimeout(decreaseTimer, 1000);
    timer--;
    document.querySelector("#timer").innerHTML = timer;
  }
  if (timer === 0) {
    document.querySelector("#announcement").style.display = "flex";
    determineWinner({ player, enemy, timerId });
  }
}
