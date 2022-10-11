const playerRnd = Math.floor(Math.random() * 6) + 1;
const computerRdn = Math.floor(Math.random() * 6) + 1;
console.log(playerRnd);
console.log(computerRdn);
let result = "";

if(playerRnd > computerRdn) {
    result = "Player ha vinto"
} else {
    result = "computer ha vinto";
};

//output
alert(result)

