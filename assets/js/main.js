/* L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata. */

const rowEl = document.querySelector('.row');
const btn_play = document.getElementById('btn_play');

btn_play.addEventListener('click', function () {
    let numSquare = 100; //mettere numero attraverso select

    for (let i = 0; i < numSquare; i++) {
        const squareEl = document.createElement('div');
        squareEl.classList.add('col_my', 'd-flex', 'align-items-center', 'justify-content-center', 'fs-5');

        rowEl.append(squareEl);
        squareEl.innerHTML = `<span> ${i + 1} </span>`;

        //al click, coloro + log;
        squareEl.addEventListener('click', function () {
            this.classList.toggle('active');
            console.log(`Hai cliccato la cella numero ${i + 1}`);
        });
    }
})
