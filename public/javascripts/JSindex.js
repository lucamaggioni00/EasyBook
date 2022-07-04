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

/* per contatore piuMeno TODO METTERE IN LOCAL STORAGE */
function incrementa() {
	let num = parseInt($('contatore1').innerText); // parse ad intero
	num++;
	$('contatore1').innerText = num;
}

function decrementa() {
	let num = parseInt($('contatore1').innerText); // parse ad intero
	if (num >= 1) { // non può essere numero negativo
		num--;
		$('contatore1').innerText = num;
	}
}
