
// variabili
let kmDaPercorrere = prompt('Quanti km devi percorrere?');
let etaPasseggero = prompt('Quanti anni hai?');

// prezzotratta
let prezzoTratta = kmDaPercorrere * 0.21;
let sconto;

// sconti
if (etaPasseggero < 18) {
  sconto = prezzoTratta * 20 / 100;
} else if (etaPasseggero > 65) {
  sconto = prezzoTratta * 40 / 100;
} else {
  sconto = 0;
}
prezzoTratta = prezzoTratta - sconto;
prezzoTratta = prezzoTratta.toFixed(2);
  // stampa
document.getElementById("prezzo-tratta").innerHTML = prezzoTratta;

console.log(prezzoTratta);





