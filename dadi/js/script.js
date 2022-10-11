const player = document.getElementById("player");
const computer = document.getElementById("computer");
const resultHtml = document.getElementById("result");

//random numbers
const playerRnd = Math.floor(Math.random() * 6) + 1;
const computerRdn = Math.floor(Math.random() * 6) + 1;

let result;
if(playerRnd > computerRdn) {
    result = "Player ha vinto"
} else if (playerRnd < computerRdn) {
    result = "computer ha vinto";
} else {
    result = "pari"
};
console.log(result, typeof(result))

//output
player.innerHTML = playerRnd;
computer.innerHTML = computerRdn;
resultHtml.innerHTML = result;
alert(result);