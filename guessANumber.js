// Comparaison de givenNumber = number à choosenNumber = playerOneChoice:
function didIWin(number, choosenNumber) {
    if (number === choosenNumber) {
        return result = true;
    }
    else if (number > choosenNumber) {
        alert("Plus petit");
        return result = false;
    }
    else if (number < choosenNumber) {
        alert("Plus grand");
        return result = false;
    }
}
// Créer une fonction qui demande au joueur 1 de fournir un nombre à deviner compris entre 0 et 50 tant qu’il ne respecte pas ce range.
function pickANumber(playerOneChoice) {
    while (playerOneChoice < 0 || playerOneChoice > 50) {
        playerOneChoice = parseInt(prompt("J1 - Choisir un nombre entre 0 et 50:"));
    }
    console.log(playerOneChoice);
    return playerOneChoice;
}
// Fonction d'appel de fonction et d'enregistrement de la variable.
function gamePlay() {
    playerOneInput = parseInt(prompt("J1 - Choisir un nombre entre 0 et 50:"));
    playerOneInput = pickANumber(playerOneInput);
    numberInput = parseInt(prompt("J2 - Choisir un nombre:"));
    result = didIWin(numberInput, playerOneInput);
    if (result !== true) {
        while (result !== true) {//tant que le résultat n'est pas vrai, on relance la demande et la fonction
            numberInput = parseInt(prompt("J2 - Choisir un nombre:"));
            result = didIWin(numberInput, playerOneInput);
        }
    }
    message.innerText = "Bravo ! Vous avez deviné le nombre.🎉";
}
let message = document.querySelector("h2");
let count = 0
let tentative = document.querySelector("h3");
gamePlay()
// Création du compteur de tentatives
tentative.addEventListener("click", () => {
    count += count;
    tentative.innerText = "Nombre de tenttatives : " + count; 
    })