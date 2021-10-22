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

let newRound = true;

function getRandomNumber() {
    for (let index = 0; index < players.length; index++) {
        players[index]["numero scelto"] = Math.floor(Math.random() * 5) + 1;
        console.log(players[index]["numero scelto"])
    }
    console.log(players)
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