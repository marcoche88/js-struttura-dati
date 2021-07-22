/*
Descrizione:
Proviamo a ripetere quanto visto in classe, creando la struttura che riteniamo più
adeguata per rappresentare una carta di Magic.
Una volta definita la struttura, stampiamo sulla pagina HTML tutte le informazioni
relative alla carta stessa, senza particolare attenzione a
dettagli grafici (va bene una lista coi tag UL e LI)
BONUS: provare a creare una funzione che stampi la carta in pagina.
*/

const card = {
    id: 1,
    name: "Colosso Sangue-di-Fuoco",
    launchCost: ["6", "R", "R"], //W=bianco U=blu B=nero R=rosso G=verde
    convertedManaCost: 8, //CMC
    illustration: {
        source: "./img/picture.jpg",
        author: {
            id: 1,
            name: "Greg Staples",
        }
    },
    cardType: "Creatura", // terre, creature, incantesimi, artefatti, istantanei e stregonerie
    subType: "Gigante",
    expansion: {
        id: 9,
        name: "Ninth Edition",
        rarity: "gold", // gold=rara silver=non-comune black=comune
        cardNumber: 177,
        totalCard: 350,
    },
    abilities: [
        {
            launchCost: ["R", "T"], // come launchCost sopra in più la T=tap
            description: "Descrizione della prima abilità della carta",
        },
        {
            launchCost: ["R", "R", "T"],
            description: "Descrizione della seconda abilità della carta",
        },
    ],
    flavorText: {
        quote: "Citazione che fa riferimento alla carta",
        authorName: "Jolrael",
    },
    strength: 6,
    constitution: 6,
    cardBorderColor: "#000000", // nero=#000000 bianco=#FFFFFF
    background: {
        color: "red", // bianco, blu, nero, rosso, verde
        source: "./img/bg-picture.jpg"
    },
};

console.log(card);