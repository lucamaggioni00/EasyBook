/* --- Scripts della pagina index.html --- */

/* chiamata AJAX per menu */
const xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function() { // definisco cosa fa quando l'oggetto cambia stato. tipo quando la risposta è pronta
    if (this.readyState == 4 && this.status == 200) { // tutto ok
    	var menu = JSON.parse(xhttp.responseText); // parsa la stringa json in un oggetto javascript
    	// iterazione dell'inserimento del JSON
    	for (var i = 0; i < 20; i++) {
    		$("piatto"+i).innerText = menu[i].Nome;
    		$("prezzo"+i).innerText = "€ " + menu[i].Prezzo;
    	}
    }
};

xhttp.open("GET", "../others/menu1.json", true);
//console.log("Richiesta creata");
xhttp.send();
//console.log("Richiesta mandata");


/* Recupero contatori al window loading e li inserisco in html */
// per contatori
for (let i=0; i < 20; i++) { 
	//console.log("Dal session storage si ha: i=" + i + " con valore=" + sessionStorage.getItem(i));
	if (sessionStorage.getItem(i) == null) { // se il val dello storage non è settato, viene inizializzato
		sessionStorage.setItem(i, "0");
	}
	// inserisce i valori nell'html
	$("contatore"+i).innerText = sessionStorage.getItem(i);
}

/* TODO inserimento ntavolo con controllo?? */
function riepilogo() {
	let valore = selectTavolo();
	// se non hai selezionato, ma c'è un valore numero nello storage
	if(valore == false && sessionStorage.getItem('nTavolo') !== null) {
		console.log("Non hai selezionato un tavolo, ma c'era il valore vecchio nello storage");
		//non fare niente allo storage
	}
	// se non hai selezionato, e non c'è un numero vecchio nello storage
	else if(valore == false && sessionStorage.getItem('nTavolo') == null) {
		sessionStorage.setItem("nTavolo", "false");
		console.log("Non hai selezionato un tavolo, e non c'era niente, quindi ho messo false");
	}
	// se ho selezionato, in ogni caso devo scrivere o sovrascrivere
	else if(valore != false) {
		sessionStorage.setItem("nTavolo", valore);
		console.log("nuovo numero settato nello storage");
	}
}

/* parametrizzazione della funzione per getElementById() */
function $(id) { 
	return document.getElementById(id);
} 


/* ritorna il numero del tavolo selezionato, oppure false*/
function selectTavolo(){
	var x = $('mySelect').selectedIndex; // x = indice del valore selezionato
	if (x != "") { // se ha selezionato un numero 
		var nTav = document.getElementsByTagName('option')[x].value;
		return nTav;
	}
	else {
		//TODO TOGLIERE alert("Perfavore, torna indietro e inserisci il numero del tuo tavolo");
		return false;
	}
}

/* per contatori piuMeno */
function incrementa(numRiga) {
	let cont = parseInt($('contatore'+numRiga).innerText); // parse ad intero
	cont++;
	$('contatore'+numRiga).innerText = cont;

	sessionStorage.setItem(numRiga, cont);
}

function decrementa(numRiga) {
	let cont = parseInt($('contatore'+numRiga).innerText); // parse ad intero
	if (cont >= 1) { // non può essere numero negativo
		cont--;
		$('contatore'+numRiga).innerText = cont;

		sessionStorage.setItem(numRiga, cont);
	}
}
