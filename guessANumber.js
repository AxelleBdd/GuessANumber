let message = document.querySelector("h2");
let tentative = document.querySelector("h3");
//Fonction qui demande au joueur 2 de fournir un nombre :
function chooseANumber(playerTwoInput){
    playerTwoInput = document.querySelector("#playerTwoInput");
    return playerTwoInput
}
// Fonction qui demande au joueur 1 de fournir un nombre à deviner (playerOneChoice) compris entre 0 et 50 :
function pickANumber(playerOneChoice) {
    playerOneChoice = parseInt(prompt("J1 - Choisir un nombre entre 0 et 50:"));
    while (playerOneChoice < 0 || playerOneChoice > 50) {
        playerOneChoice = parseInt(prompt("J1 - Choisir un nombre entre 0 et 50:"));
    }
    return playerOneChoice;
}
// Comparaison de playerTwoChoice (givenNumber) à choosenNumber (playerOneChoice):
function didIWin(playerTwoChoice,choosenNumber) {
    if (playerTwoChoice === choosenNumber) {
        return result = true;
    }
    else if (playerTwoChoice > choosenNumber) {
        alert("Plus petit");
        return result = false;
    }
    else if (playerTwoChoice < choosenNumber) {
        alert("Plus grand");
        return result = false;
    }
}
// Fonction d'appel des fonctions et d'enregistrement de la variable.
function gamePlay() {
    let count = 1
    //Appel de la fonction pickANumber, pour que joueur 1 choisisse un nombre.
    playerOneInput = pickANumber();
    //Appel de la fonction chooseANumber, pour que joueur 2 choisisse un nombre
    givenNumber = parseInt(chooseANumber())
    // Appel de la fonction didIWin, pour que joueur 2 trouve le nombre.
    tentative.innerText = `Tentative 1`;
    result = didIWin(givenNumber,playerOneInput);
    //tant que le résultat n'est pas vrai, on relance la fonction
    while (result !== true) {
        count = ++count;
        tentative.innerText = `Tentative ${count}`;
        result = didIWin(parseInt(chooseANumber()),playerOneInput);
    }
    message.innerText = "Bravo ! Vous avez deviné le nombre.🎉";
    ;
}
//Une fois que résultat = vraie, on change le texte de la page HTML

// Ajout de l'information de tentatives

gamePlay()


// le boutton déclanche gamePlay
let button = document.querySelector("#button");
button.addEventListener("click", () => {

    })
