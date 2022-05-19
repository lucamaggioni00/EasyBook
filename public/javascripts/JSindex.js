/* --- Scripts della pagina index.html --- */

/* parametrizzazione della funzione per getElementById() */
function $(id) { 
	return document.getElementById(id);
} 


/* acquisisce il numero del tavolo */
function selectTavolo(){
	var x = $('mySelect').selectedIndex; // x = indice del valore selezionato
	return document.getElementsByTagName('option')[x].value; 
	
}