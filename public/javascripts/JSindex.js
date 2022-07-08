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


/* TODO: MAGARI FARE CON WINDOW.ONLOAD */
/* Recupero dei contatori dallo storage al window loading --> utile x refresh */

for (let i=0; i < 20; i++) { 
	//console.log("Dal session storage si ha: i=" + i + " con valore=" + sessionStorage.getItem(i));
	if (sessionStorage.getItem(i) != null) { // prende il valore dallo storage solo se c'era già
		$("contatore"+i).innerText = sessionStorage.getItem(i);
	}
	// else rimane lo 0 di default del contatore
}


/* parametrizzazione della funzione per getElementById() */
function $(id) { 
	return document.getElementById(id);
} 


/* acquisisce il numero del tavolo TODO METTERLA DA QUALCHE PARTE*/
function selectTavolo(){
	var x = $('mySelect').selectedIndex; // x = indice del valore selezionato
	if (x != "") { // se ha selezionato un numero 
		return document.getElementsByTagName('option')[x].value;
	}
	else {
		alert("Metti un numero");
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
