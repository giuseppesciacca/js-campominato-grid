/* L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata. */

const rowEl = document.querySelector('.row');

let numSquare = 100;
let i = 0;
while (i < numSquare) {
    const squareEl = document.createElement('div');
    squareEl.classList.add('col_my');

    rowEl.append(squareEl);

    //al click, coloro
    squareEl.addEventListener('click', function () {
        squareEl.classList.toggle('active');
    });

    i++;
};