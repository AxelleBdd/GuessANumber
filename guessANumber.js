let message = document.querySelector("h2");
let tentative = document.querySelector("h3");
// Fonction qui demande au joueur 1 de fournir un nombre à deviner (playerOneChoice) compris entre 0 et 50 :
function pickANumber(playerOneChoice) {
    playerOneChoice = parseInt(prompt("J1 - Choisir un nombre entre 0 et 50:"));
    while (playerOneChoice < 0 || playerOneChoice > 50) {
        playerOneChoice = parseInt(prompt("J1 - Choisir un nombre entre 0 et 50:"));
    }
    return playerOneChoice;
}
// Comparaison de givenNumber à choosenNumber (qui devient playerOneChoice dans la fonction PickANumber):
function didIWin(choosenNumber) {
    givenNumber = parseInt(prompt("J2 - Choisir un nombre:"));
    if (givenNumber === choosenNumber) {
        return result = true;
    }
    else if (givenNumber > choosenNumber) {
        alert("Plus petit");
        return result = false;
    }
    else if (givenNumber < choosenNumber) {
        alert("Plus grand");
        return result = false;
    }
}
// Fonction d'appel des fonctions et d'enregistrement de la variable.
function gamePlay() {
    let count = 1
    //Appel de la fonction pickAgivenNumber, pour que J1 choississe un nombre.
    playerOneInput = pickANumber();
    // Appel de la fonction didIWin, pour que J2 trouve le nombre.
    tentative.innerText = `Tentative 1`;
    result = didIWin(playerOneInput);
    //tant que le résultat n'est pas vrai, on relance la fonction
    while (result !== true) {
        count = ++count;
        tentative.innerText = `Tentative ${count}`;
        result = didIWin(playerOneInput);
    }
    message.innerText = "Bravo ! Vous avez deviné le nombre.🎉";
    ;
}
//Une fois que résultat = vraie, on change le texte de la page HTML

// Ajout de l'information de tentatives

gamePlay()


/*
let tentative = document.querySelector("h3");
tentative.addEventListener("click", () => {
    count += count;
    tentative.innerText = "Nombre de tenttatives : " + count; 
    })
*/