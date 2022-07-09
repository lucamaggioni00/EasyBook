/* --- Scripts della pagina riepilogo.html --- */

scontrino();

/* costruisce tutto il riepilogo dallo storage */
function scontrino() {

	// inserisce numTavolo
	if (sessionStorage.getItem('nTavolo') == "false") { // se user non ha messo il num tavolo
		$('nTavoloRecap').innerText = "Tavolo: non selezionato. Torna alla pagina precedente.";
	}
	else {
		$('nTavoloRecap').innerText = "Tavolo: " + (sessionStorage.getItem("nTavolo"));
	}
	

	// inserisce i valori nella griglia
	for (let i=0; i < 20; i++) { 
		//console.log("Dal session storage si ha: i=" + i + " con valore=" + sessionStorage.getItem(i));
		$("contatore"+i).innerText = sessionStorage.getItem(i);
		//TODO inserire anche nome e prezzo
	}
}

/* parametrizzazione della funzione per getElementById() */
function $(id) { 
	return document.getElementById(id);
}