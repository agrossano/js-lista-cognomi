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
listaCopia = listaCognomi.slice()

// chiedo all'user di inserire un cognome
cognome = prompt('Scrivi il tuo cognome');
// aggiungo il cognome fornito alla lista di cognomi
listaCognomi.push(cognome);
listaCopia.push(cognome);
// dispongo in ordine alfabetico gli elementi
listaCognomi.sort();
// listaAfter = listaCognomi.sort()
// identifico la posizione del cognome all'interno della lista
posizioneCognome= (listaCognomi.indexOf(cognome)) + 1;
// stampo a video la lista dei cognomi e la posizione di quello precedentemente immesso
for (var i = 0; i < listaCognomi.length; i++) {
  document.getElementById('ordered').innerHTML += '<li>'+ listaCognomi.sort()[i] +'</li>'
  document.getElementById('unordered').innerHTML += '<li>'+ listaCopia[i] +'</li>'
}
