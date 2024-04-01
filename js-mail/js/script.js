"use strict"

//Inizializzazione variabili
const emailList = ["pippo@gmail.com", "marco@gmail.com", "ryam@gmail.com", "mario@gmail.com", "anna@gmail.com" ];
const passwordList = ["12345678", "qwerty159753", " passwordfacile"];
const email = document.getElementById("email");
const password = document.getElementById("password");
const btnInvia = document.getElementById("invia");
let message = "Non sei registrato: " + email.value; //string

//Esecuzione logica
btnInvia.addEventListener("click", function(){
    for (let i = 0; i < emailList.length; i++) {
        if(emailList[i] === email.value){
            message = "Benvenuto " + emailList[i];
            break;
        }
        console.log(emailList[i]);
    }
    
    //Output
    alert(message);
})


