var nome_utente = prompt('nome');
console.log(nome_utente);

document.getElementById('nome').innerHTML = nome_utente;

var cognome_utente = prompt('cognome');
console.log(cognome_utente);

document.getElementById('cognome').innerHTML = cognome_utente;

var colore_preferito = prompt('colore');
console.log(colore_preferito);

document.getElementById('colore').innerHTML = colore_preferito;

document.getElementById('password').innerHTML = nome_utente + cognome_utente + colore_preferito + 20;
