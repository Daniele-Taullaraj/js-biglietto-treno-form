

const myButton = document.getElementById('submit');

myButton.addEventListener("click", function () {

    // evita che la pagina si ricarichi al click
    event.preventDefault();

    let chilometri = document.getElementById('chilometri').value;
    let età = document.getElementById('età').value;
    const costoKm = 0.21;

    // controllo che il campo età non rimanga vuoto,nel caso interrompo la funzione con return
    if (età === "" || età === null) {
        alert("Inserisci l'età prima di continuare");
        return;
    }

    let totale = chilometri * costoKm;
    totale = totale.toFixed(2);

    const sconto_20 = (totale / 100) * 20;
    const sconto_40 = (totale / 100) * 40;

    if (età < 18) {
        totale = totale - sconto_20;
        totale = totale.toFixed(2);
        console.log('Hai diritto ad uno sconto, il costo del biglietto è : ' + totale + '€');

    }
    else if (età > 65) {
        totale = totale - sconto_40;
        totale = totale.toFixed(2);
        console.log('Hai diritto ad uno sconto, il costo del biglietto è : ' + totale + '€');
    }
    else {
        console.log('Il costo del biglietto è : ' + totale + '€');
    }

    const form = document.querySelector('form');
    // Resettare il modulo per ripulire i campi di input
    form.reset();

});





