/*
Descrizione:
Proviamo a ripetere quanto visto in classe, creando la struttura che riteniamo più
adeguata per rappresentare una carta di Magic.
Una volta definita la struttura, stampiamo sulla pagina HTML tutte le informazioni
relative alla carta stessa, senza particolare attenzione a
dettagli grafici (va bene una lista coi tag UL e LI)
BONUS: provare a creare una funzione che stampi la carta in pagina.
*/

// dichiarazione oggetto card
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
        rarity: "Gold", // gold=rara silver=non-comune black=comune
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

// variabile html
const cardDisplay = document.getElementById("cards");

// verifica se è presente il sottotipo della carta
const cardSubType = card.subType ? `- ${card.subType}` : ``;

// verificare quante abilità sono presenti nella carta
let cardAbilities = `-`;
if (card.abilities) {
    cardAbilities = `<ul>`;
    for (let i = 0; i < card.abilities.length; i++) {
        cardAbilities += `<li> ${card.abilities[i].launchCost.join(" - ")}: ${card.abilities[i].description} </li>`;
    }
    cardAbilities += `</ul>`;
}

// verifica se è presente il flavortext della carta
const cardFlavorText = card.flavorText ? `<li><strong>testo di colore:</strong> ${card.flavorText.quote} - ${card.flavorText.authorName}</li>` : ``;

// verifica colore bordo carta
let cardBorder;
if (card.cardBorderColor === "#000000") {
    cardBorder = "Bianco";
} else {
    cardBorder = "Nero";
}

// verifica colore sfondo
let cardBgColor;
switch (card.background.color.toLowerCase()) {
    case "red":
        cardBgColor = "Rosso";
        break;
    case "white":
        cardBgColor = "Bianco";
        break;
    case "blue":
        cardBgColor = "Blu";
        break;
    case "green":
        cardBgColor = "Verde";
        break;
    case "black":
        cardBgColor = "Nero";
        break;
    default:
        cardBgColor = "-";
}

// stampare in pagina la descrizione della carta
const cardTemplate = `
<ul class="card">
    <li><strong>id carta:</strong> ${card.id}</li>
    <li><strong>nome carta:</strong> ${card.name}</li>
    <li><strong>costo di lancio:</strong> ${card.launchCost.join(" - ")}</li>
    <li><strong>costo di mana convertito (cmc):</strong> ${card.convertedManaCost}</li>
    <li>
        <strong>illustrazione:</strong>
        <ul>
            <li>Immagine: ${card.illustration.source}</li>
            <li>Autore: ${card.illustration.author.name} (id: ${card.illustration.author.id})</li>
        </ul> 
    </li>
    <li><strong>Tipo di carta:</strong> ${card.cardType} ${cardSubType}</li>
    <li>
        <strong>espansione:</strong>
        <ul>
            <li>Nome: ${card.expansion.name} (id: ${card.expansion.id})</li>
            <li>Rarità: ${card.expansion.rarity}</li>
            <li>Numero: ${card.expansion.cardNumber}/${card.expansion.totalCard}</li>
        </ul>
    </li>
    <li>
        <strong>abilità:</strong>
        ${cardAbilities}
    </li>
    ${cardFlavorText}
    <li><strong>forza e costituzione:</strong> ${card.strength}/${card.constitution}</li>
    <li><strong>colore bordo carta:</strong> ${cardBorder}</li>
    <li>
        <strong>sfondo carta:</strong>
        <ul>
            <li>Colore di sfondo: ${cardBgColor}</li>
            <li>Immagine di sfondo: ${card.background.source}</li>
        </ul>
    </li>
</ul>
`;

cardDisplay.innerHTML = cardTemplate;