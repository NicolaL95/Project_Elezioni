let players = [
    {
        "player id": "1",
        "name": "Nico",
        "numero scelto": "0",
        "somma": "0"
    },
    {
        "player id": "2",
        "name": "Noce",
        "numero scelto": "0",
        "somma": "0"
    },
    {
        "player id": "3",
        "name": "Vale",
        "numero scelto": "0",
        "somma": "0"
    },
    {
        "player id": "4",
        "name": "H",
        "numero scelto": "0",
        "somma": "0"
    },
    {
        "player id": "5",
        "name": "Vitoz",
        "numero scelto": "0",
        "somma": "0"
    },
    {
        "player id": "6",
        "name": "Paolo",
        "numero scelto": "0",
        "somma": "0"
    },
    {
        "player id": "7",
        "name": "Giulia",
        "numero scelto": "0",
        "somma": "0"
    },
    {
        "player id": "8",
        "name": "Pillo",
        "numero scelto": "0",
        "somma": "0"
    }
]

const playersNumber = 8; //Numero totale di giocatori
let newRound = true;
let totalNumber_p = 0; //Somma di tutti i numeri scelti dai giocatori
const mediaSum = Math.round(playersNumber * 2.5); //Media fissa della somma dipendente dal numero dei giocatoroi


function getRandomNumber() {
    for (let index = 0; index < players.length; index++) {
        const selectedNumber = Math.floor(Math.random() * 5); //Numero giocato
        totalNumber_p = totalNumber_p + selectedNumber; //Totale di tutti i numeri giocati
        players[index]["numero scelto"] = selectedNumber;//Assegnazione del numero gicato
        console.log(players[index]["numero scelto"])
    }
    for (let index = 0; index < players.length; index++) {
        const moreRandom = Math.floor(Math.random() * playersNumber - (playersNumber / 2));
        let plusOrMinus_gen = Math.floor(Math.random() * 2) + 1; //generazione della scelta randomica di + o -
        let calcSumHalf;
        let calcSumTotal;
        if (players[index]["numero scelto"] < 3) {
            calcSumHalf = mediaSum - Math.floor(Math.random() * 6);
        }
        else {
            calcSumHalf = mediaSum + Math.floor(Math.random() * 7);
        }
        console.log("prima parte", plusOrMinus_gen, mediaSum, calcSumHalf)
        plusOrMinus_gen = Math.floor(Math.random() * 2) + 1;
        if (plusOrMinus_gen == 1) {
            calcSumTotal = calcSumHalf - moreRandom;
        }
        else {
            calcSumTotal = calcSumHalf + moreRandom;
        }
        console.log("seconda parte", plusOrMinus_gen, moreRandom, calcSumHalf)
        if (index == Math.floor(Math.random() * playersNumber)) {
            players[index]["somma"] = 20;
        }
        else {
            players[index]["somma"] = calcSumTotal;
        }
        console.log(players[index]["somma"]);
    }
    for (let index = 0; index < players.length; index++) {
        const selUser = document.querySelector(`.name_${index + 1}`)
        selUser.innerHTML = players[index]["name"];
        const selNumber = document.querySelector(`.n_num_sel_${index + 1}`)
        selNumber.innerHTML = players[index]["numero scelto"];
        const selSum = document.querySelector(`.n_som_prev_${index + 1}`)
        selSum.innerHTML = players[index]["somma"];
    }
}

function getNewRound() {
    console.log("nuovo")
    newRound = false;
    getRandomNumber();
}

function continueRound() {
    console.log("continua")
}


function mainFunciont() {
    if (newRound == true) {
        getNewRound();
    }
    else {
        continueRound();
    }
}

const activator = document.getElementById("activate_button");
activator.addEventListener("click", mainFunciont);