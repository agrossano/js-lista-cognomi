// ES. di oggi:
// lista cognomi, ordinamento e posizione cognome inserito
// DESCRIZIONE:
// Chiedi all’utente il cognome, inseriscilo in un array con altri cognomi e stampa la lista ordinata alfabeticamente.
// Scrivi anche la posizione della lista in cui il nuovo utente si trova
// BONUS: (ma solo se il resto è fatto)
// faccio output anche della lista NON ordinata oltre il resto;
// output reso più carino e più elaborato, anche con CSS;
// come farei senza i metodi che ho trovato per risolvere le richieste dell’EX?


// dichiaro le variabili
var listaCognomi, cognome, listaAfter, posizioneCognome;

// creo lista cognomi
listaCognomi = ['Rossi', 'Nerone', 'Franchi', 'De Luca', 'Airola', 'Zara'];

// chiedo all'user di inserire un cognome
cognome = prompt('Scrivi il tuo cognome');

// aggiungo il cognome fornito alla lista di cognomi
listaCognomi.push(cognome);

// dispongo in ordine alfabetico gli elementi
listaAfter = listaCognomi.sort();

// identifico e assegno la posizione del cognome all'interno della lista
posizioneCognome = (listaCognomi.indexOf(cognome)) + 1;

// stampo a video la lista dei cognomi
for (var i = 0; i < listaAfter.length; i++) {
  document.getElementById('lista').innerHTML += '<li>'+ listaAfter[i] +'</li>';
}
// stampo la posizione del cognome precedentemente immesso
document.getElementById('posizione').innerHTML = 'Sei il numero ' + posizioneCognome + ' in lista.';
