/* --- Scripts della pagina index.html --- */

/* TODO: MAGARI FARE CON WINDOW.ONLOAD */
/* Recupero dei contatori dallo storage al window loading --> utile x refresh */

for (let i=1; i <= 20; i++) { // da 1 a 20 sono le key
	console.log("Dal session storage si ha: i=" + i + " con valore=" + sessionStorage.getItem(i));
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

