/*
Descrizione:
Proviamo a ripetere quanto visto in classe, creando la struttura che riteniamo più
adeguata per rappresentare una carta di Magic.
Una volta definita la struttura, stampiamo sulla pagina HTML tutte le informazioni
relative alla carta stessa, senza particolare attenzione a
dettagli grafici (va bene una lista coi tag UL e LI)
BONUS: provare a creare una funzione che stampi la carta in pagina.
*/

/*
Completiamo il nostro archivio delle carte aggiungendo i seguenti step:
Creiamo un mazzo di carte
Stampiamo tutte  le carte su schermo
Aggiungiamo un piccolo form in HTML
Ragioniamo pian pianino sulla logica dei filtri
:avviso:IMPORTANTE:avviso:
Siccome siete stati troppo bravi a creare un oggetto card molto complesso, è molto complicato riuscire a filtrare tutte le proprietà.
PERTANTO IL MINIMO RICHIESTO E':
 Filtrare prima le proprietà con valori semplici (stringhe o numeri)
Filtrare le proprietà il cui valore è un array di stringhe
BONUS:
Far sì che se filtro una proprietà con valore stringa, riesca a mostrare la carta anche se non scrivo il suo testo interamente (es: cerco il nome digitando "creat" e riesco a trovare nei risultati le carte che hanno nel nome "creatura")
Filtrare anche altre proprietà i cui valori sono più complessi, se ne avete (oggetti, array di oggetti)
*/

// dichiarazione array mazzo di carte
const fullDeck = [
    {
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
    },
    {
        id: 2,
        name: "Bambini di Korlis",
        launchCost: ["W", "W"], //W=bianco U=blu B=nero R=rosso G=verde
        convertedManaCost: 2, //CMC
        illustration: {
            source: "./img/picture2.jpg",
            author: {
                id: 2,
                name: "Quinton Hoover",
            }
        },
        cardType: "Creatura", // terre, creature, incantesimi, artefatti, istantanei e stregonerie
        subType: "Chierico Ribelle Umano",
        expansion: {
            id: 12,
            name: "Twelfth Edition",
            rarity: "Black", // gold=rara silver=non-comune black=comune
            cardNumber: 8,
            totalCard: 301,
        },
        abilities: [
            {
                launchCost: ["W", "T"], // come launchCost sopra in più la T=tap
                description: "Descrizione della prima abilità della carta",
            },
        ],
        flavorText: {
            quote: "Citazione che fa riferimento alla carta",
            authorName: "Tavalus",
        },
        strength: 1,
        constitution: 1,
        cardBorderColor: "#000000", // nero=#000000 bianco=#FFFFFF
        background: {
            color: "white", // bianco, blu, nero, rosso, verde
            source: "./img/bg-picture2.jpg"
        },
    },
    {
        id: 3,
        name: "Skaab Distruttore",
        launchCost: ["1", "U", "U"], //W=bianco U=blu B=nero R=rosso G=verde
        convertedManaCost: 3, //CMC
        illustration: {
            source: "./img/picture3.jpg",
            author: {
                id: 3,
                name: "Chris Rahn",
            }
        },
        cardType: "Creatura", // terre, creature, incantesimi, artefatti, istantanei e stregonerie
        subType: "Orrore Zombie",
        expansion: {
            id: 7,
            name: "Seventh Edition",
            rarity: "Gold", // gold=rara silver=non-comune black=comune
            cardNumber: 77,
            totalCard: 264,
        },
        abilities: [],
        flavorText: {
            quote: "Citazione che fa riferimento alla carta",
            authorName: "Richly",
        },
        strength: 5,
        constitution: 6,
        cardBorderColor: "#000000", // nero=#000000 bianco=#FFFFFF
        background: {
            color: "blue", // bianco, blu, nero, rosso, verde
            source: "./img/bg-picture3.jpg"
        },
    }
];

// FUNZIONI

const getCard = (obj) => {
    // verifica se è presente il sottotipo della carta
    const cardSubType = obj.subType ? `- ${obj.subType}` : ``;

    // verificare quante abilità sono presenti nella carta
    let cardAbilities = `-`;
    if (obj.abilities) {
        cardAbilities = `<ul>`;
        for (let i = 0; i < obj.abilities.length; i++) {
            cardAbilities += `<li> ${obj.abilities[i].launchCost.join(" - ")}: ${obj.abilities[i].description} </li>`;
        }
        cardAbilities += `</ul>`;
    }

    // verifica se è presente il flavortext della carta
    const cardFlavorText = obj.flavorText ? `<li><strong>testo di colore:</strong> ${obj.flavorText.quote} - ${obj.flavorText.authorName}</li>` : ``;

    // verifica colore bordo carta
    let cardBorder;
    if (obj.cardBorderColor === "#000000") {
        cardBorder = "Nero";
    } else {
        cardBorder = "Bianco";
    }

    // verifica colore sfondo
    let cardBgColor;
    switch (obj.background.color.toLowerCase()) {
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

    // costruzione template da stamapre
    const template = `
    <div class="card">
        <ul>
            <li><strong>id carta:</strong> ${obj.id}</li>
            <li><strong>nome carta:</strong> ${obj.name}</li>
            <li><strong>costo di lancio:</strong> ${obj.launchCost.join(" - ")}</li>
            <li><strong>costo di mana convertito (cmc):</strong> ${obj.convertedManaCost}</li>
            <li>
                <strong>illustrazione:</strong>
                <ul>
                    <li>Immagine: ${obj.illustration.source}</li>
                    <li>Autore: ${obj.illustration.author.name} (id: ${obj.illustration.author.id})</li>
                </ul> 
            </li>
            <li><strong>Tipo di carta:</strong> ${obj.cardType} ${cardSubType}</li>
            <li>
                <strong>espansione:</strong>
                <ul>
                    <li>Nome: ${obj.expansion.name} (id: ${obj.expansion.id})</li>
                    <li>Rarità: ${obj.expansion.rarity}</li>
                    <li>Numero: ${obj.expansion.cardNumber}/${obj.expansion.totalCard}</li>
                </ul>
            </li>
            <li>
                <strong>abilità:</strong>
                ${cardAbilities}
            </li>
            ${cardFlavorText}
            <li><strong>forza e costituzione:</strong> ${obj.strength}/${obj.constitution}</li>
            <li><strong>colore bordo carta:</strong> ${cardBorder}</li>
            <li>
                <strong>sfondo carta:</strong>
                <ul>
                    <li>Colore di sfondo: ${cardBgColor}</li>
                    <li>Immagine di sfondo: ${obj.background.source}</li>
                </ul>
            </li>
        </ul>
    </div>
    `;

    return template;
};

const printDeck = (deck, targetElement) => {
    let deckTemplate = "";
    // prende uno per uno gli oggetti dell'array e li stampa in pagina
    for (let i = 0; i < deck.length; i++) {
        const currentCard = deck[i];
        deckTemplate += getCard(currentCard);
    }
    targetElement.innerHTML = deckTemplate;
};

// variabile html
const cardDisplay = document.getElementById("cards");
const selectFilter = document.getElementById("filter");
const inputFilter = document.getElementById("filter-text");
const buttonFilter = document.getElementById("filter-button");

// stampa in pagina il mazzo di carte
printDeck(fullDeck, cardDisplay);

// nasconde input text quando è selezionata la option con valore all della select
selectFilter.addEventListener("change", () => {
    const selectValue = selectFilter.value;
    if (selectValue === "all") {
        inputFilter.classList.add("hidden");
    } else {
        inputFilter.classList.remove("hidden");
    }
});







