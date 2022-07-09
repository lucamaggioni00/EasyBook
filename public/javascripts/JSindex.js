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


/* Recupero dei contatori e numTav dallo storage al window loading e li inserisco in html --> utile x refresh */
if (sessionStorage.getItem("nTavolo") != null) { // se il val dello storage non è settato, viene inizializzato
	document.getElementsByTagName('option')[x].value = sessionStorage.getItem('nTavolo');
}

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
	if(sessionStorage.getItem('nTavolo') == null) { // non c'è già il num tavolo
		sessionStorage.setItem("nTavolo", selectTavolo()); // setta ntavolo nello storage
		console.log("numTav settato nello storage");
	}
	//se c'è già, lo lascio lì e poi verrà preso dallo storage
}


/* parametrizzazione della funzione per getElementById() */
function $(id) { 
	return document.getElementById(id);
} 


/* ritorna il numero del tavolo selezionato */
function selectTavolo(){
	var x = $('mySelect').selectedIndex; // x = indice del valore selezionato
	if (x != "") { // se ha selezionato un numero 
		var nTav = document.getElementsByTagName('option')[x].value;
		return nTav;
	}
	else {
		alert("Perfavore, torna indietro e inserisci il numero del tuo tavolo");
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
