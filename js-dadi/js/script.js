"use strict"
const gioca = document.getElementById("gioca");
const vincitore = document.getElementById("winner");
const userName = prompt("Qual è il tuo nickname?");

if (userName != null) {
    document.getElementById("username").innerHTML = userName;
}

gioca.addEventListener("click", function(){
    //Inizializzazione variabili
const rndPcId = document.getElementById("rndPc");
const rndUserId = document.getElementById("rndUser");

let rndPcJs = Math.floor(Math.random() * 5 ) + 1;
let rndUserJs = Math.floor(Math.random() * 5 ) + 1;

let winner = "";

//Esecuzione logica

console.log("PC: prima ", rndPcJs);
console.log("User: prima", rndUserJs);
while (true){
    if (rndPcJs > rndUserJs) {
        winner = "Ha vinto il computer";
        break;
    } else if(rndPcJs === rndUserJs){
        rndPcJs = Math.floor(Math.random() * 5 ) + 1;
        rndUserJs = Math.floor(Math.random() * 5 ) + 1;
    }else{
        winner = "Hai vinto!";
        break;
    } 
}

//OUTPUT
console.log("PC: ", rndPcJs);
console.log("User: g", rndUserJs);
rndPcId.innerHTML = `Dado: ${rndPcJs}`;
rndUserId.innerHTML = `Dado: ${rndUserJs}`;

vincitore.classList.remove("hidden");
vincitore.innerHTML = `
<div class="text-center">
    <h3 id="username">${winner}</h3>
</div>
`;
// document.querySelector("body").append(winner);
console.log(winner);
});
