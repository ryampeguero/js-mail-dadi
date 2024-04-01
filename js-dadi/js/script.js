"use strict"

const rndPc = Math.floor(Math.random() * 5 ) + 1;
const rndUser = Math.floor(Math.random() * 5 ) + 1;
let winner = "";
console.log("PC: ", rndPc);
console.log("User: ", rndUser);
if (rndPc > rndUser) {
    winner = "Ha vinto il computer";
} else{
    winner = "Hai vinto!";
}

console.log(winner);