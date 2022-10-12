const userEmailList = ['mario@gmail.com', 'luigi@gmail.com', 'yoshi@gmail.com', 'toad@gmail.com'];
const userEmailInput = prompt("per accedere inserisce la tua mail:");
let isFound = false;

for (let i = 0; i < userEmailList.length; i++) {
    const userEmail = userEmailList[i];
     
    if(userEmailInput === userEmail) {
        isFound = true;
    };
}

if (isFound) {
    alert("welcome");
} else {
    alert("wrong email"); 
};