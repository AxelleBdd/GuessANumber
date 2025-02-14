// Fonction qui demande au joueur 1 de fournir un nombre à deviner (playerOneChoice) compris entre 0 et 50 :
function pickANumber() {
    let playerOneChoice = parseInt(prompt("J1 - Choisir un nombre entre 0 et 50:"));
    while (playerOneChoice < 0 || playerOneChoice > 50) {
        playerOneChoice = parseInt(prompt("J1 - Choisir un nombre entre 0 et 50:"));
    }
    return playerOneChoice;
}
//Fonction qui demande au joueur 2 de fournir un nombre (avec un input):
function chooseANumber() {
    let playerTwoInput = document.querySelector("#playerTwoInput").value;
    return playerTwoInput
}
// Comparaison de numberGiven (givenNumber) à numberToGuess (playerOneChoice):
function didIWin(numberGiven, numberToGuess) {
    if (numberGiven == numberToGuess) {
        return true;
    }
    else if (numberGiven > numberToGuess) {
        alert("Plus petit");
    }
    else if (numberGiven < numberToGuess) {
        alert("Plus grand"); 
    }
    return false;  
    }
function defineMagine(numberGiven, numberToGuess, margeMax, margeMin){
    if (numberGiven<margeMax && numberToGuess<numberGiven){
        margeMax = numberGiven;
        document.querySelector("label").innerHTML = `Deviner le nombre entre ${margeMin} et ${margeMax}:`;
        return margeMax
    }
    else if(numberGiven>margeMin && numberToGuess>numberGiven){
        margeMin = numberGiven;
        document.querySelector("label").innerText = `Deviner le nombre entre ${margeMin} et ${margeMax} :`;
        return margeMin
    }
    else if (numberGiven == numberToGuess){
        return
    }
    else {
        alert("Le nombre est en dehors de l'intervalle.");
    }
}
// Fonction d'appel des fonctions et d'enregistrement de la variable.
function gamePlay() {
//Appel de la fonction chooseANumber, pour que joueur 2 choisisse un nombre
    let givenNumber = chooseANumber();
// Appel de la fonction didIWin, pour que joueur 2 trouve le nombre.
    let result = didIWin(givenNumber, numberToGuess,margeMax,margeMin);
    if (result === true){
        message.innerText = "Bravo ! Vous avez deviné le nombre🎉";
    }
    let marge = defineMagine(givenNumber, numberToGuess, margeMax, margeMin);
    if (marge<numberToGuess){
        margeMin = marge;
    }
    else if (marge>numberToGuess){
        margeMax = marge;
    }
    return
}
//Déclaration des variables
let message = document.querySelector("h2");
let tentative = document.querySelector("h3");
let button = document.querySelector("#button");
let count = 0;
let margeMin = 0;
let margeMax = 50;
//Appel de la fonction pickANumber, pour que joueur 1 choisisse un nombre, sortie de gamePlay pour ne pas répéter 
//la fonction à chaque validation de la valeur du joueur 2.
let numberToGuess = pickANumber();
//Le boutton déclanche gamePlay.
button.addEventListener("click", () => {
    gamePlay()
    count = ++count;
    tentative.innerText = `Tentative ${count}`;
})
