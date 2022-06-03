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
