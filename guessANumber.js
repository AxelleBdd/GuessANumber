let message = document.querySelector("h2");
let tentative = document.querySelector("h3");
let button = document.querySelector("#button");
let count = 0;
//Fonction qui demande au joueur 2 de fournir un nombre (avec un input):
function chooseANumber(playerTwoInput) {
    playerTwoInput = document.querySelector("#playerTwoInput").value;
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
function didIWin(playerTwoChoice, choosenNumber) {
    if (playerTwoChoice == choosenNumber) {
        return true;
    }
    else if (playerTwoChoice > choosenNumber) {
        alert("Plus petit");
        return false;
    }
    else if (playerTwoChoice < choosenNumber) {
        alert("Plus grand");
        return false;
    }
}
// Fonction d'appel des fonctions et d'enregistrement de la variable.
function gamePlay() {
//Appel de la fonction chooseANumber, pour que joueur 2 choisisse un nombre
    givenNumber = chooseANumber();
// Appel de la fonction didIWin, pour que joueur 2 trouve le nombre.
    result = didIWin(givenNumber, playerOneInput);
    console.log(result);
    if (result === true){
        message.innerText = "Bravo ! Vous avez deviné le nombre.🎉";
    }
    return
}
//Appel de la fonction pickANumber, pour que joueur 1 choisisse un nombre, sortie de gamePlay pour ne pas répéter 
//la fonction à chaque validation de la valeur du joueur 2.
playerOneInput = pickANumber();
//Le boutton déclanche gamePlay.
button.addEventListener("click", () => {
    gamePlay()
    count = ++count;
    tentative.innerText = `Tentative ${count}`;
})
