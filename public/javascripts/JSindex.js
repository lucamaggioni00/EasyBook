/* --- Scripts della pagina index.html --- */

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

/* per contatori piuMeno TODO METTERE IN SESSION STORAGE */
function incrementa(numRiga) {
	let cont = parseInt($('contatore'+numRiga).innerText); // parse ad intero
	cont++;
	console.log('contatore'+numRiga);
	$('contatore'+numRiga).innerText = cont;
}

function decrementa(numRiga) {
	let cont = parseInt($('contatore'+numRiga).innerText); // parse ad intero
	if (cont >= 1) { // non può essere numero negativo
		cont--;
		$('contatore'+numRiga).innerText = cont;
	}
}
