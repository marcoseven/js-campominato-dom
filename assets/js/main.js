/* 
Consegna
L'utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
- con difficoltà 1 => tra 1 e 100
- con difficoltà 2 => tra 1 e 81
- con difficoltà 3 => tra 1 e 49
Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
I numeri nella lista delle bombe non possono essere duplicati.
In seguito l'utente clicca su ogni cella:
- se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina,
- altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
La partita termina quando
- il giocatore clicca su una bomba
- o raggiunge il numero massimo possibile di numeri consentiti.
Al termine della partita il software deve scoprire tutte le bombe e comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
*/

// alert
alert("Scegli un livello di difficoltà");

// DOM
const grid_1 = document.getElementById("grid_1");
const grid_2 = document.getElementById("grid_2");
const grid_3 = document.getElementById("grid_3");
const option_1 = document.getElementById("option_1");
const option_2 = document.getElementById("option_2");
const option_3 = document.getElementById("option_3");

// ciclo for per difficoltà 1
for (let i = 1; i <= 100; i++) {
	const elementCell = document.createElement("div");
	elementCell.insertAdjacentHTML("beforeend", `<div class="cell">${i}</div>`);
	grid_1.append(elementCell);
	elementCell.addEventListener("click", function () {
		this.style.backgroundColor = "#4877f4";
	});
}

// ciclo for per difficoltà 2
for (let i = 1; i <= 81; i++) {
	const elementCell = document.createElement("div");
	elementCell.insertAdjacentHTML("beforeend", `<div class="cell">${i}</div>`);
	grid_2.append(elementCell);
	elementCell.addEventListener("click", function () {
		this.style.backgroundColor = "#4877f4";
	});
}

// ciclo for per difficoltà 3
for (let i = 1; i <= 49; i++) {
	const elementCell = document.createElement("div");
	elementCell.insertAdjacentHTML("beforeend", `<div class="cell">${i}</div>`);
	grid_3.append(elementCell);
	elementCell.addEventListener("click", function () {
		this.style.backgroundColor = "#4877f4";
	});
}

// EventListener
option_1.addEventListener("click", function () {
	grid_1.classList.add("active");
});

option_2.addEventListener("click", function () {
	grid_2.classList.add("active");
});

option_3.addEventListener("click", function () {
	grid_3.classList.add("active");
});

// array
const numbersRandom = [];
console.log(numbersRandom);

// funzione e ciclo while
myFunctions();
function myFunctions() {
	while (numbersRandom.length < 16) {
		const getNumbers = Math.round(Math.random() * 100) + 1;
		console.log(getNumbers);
		numbersRandom.push(getNumbers);
	}
	return numbersRandom;
}

// condizionale if
if (elementCell == numbersRandom) {
	this.style.backgroundColor = "red";
}
