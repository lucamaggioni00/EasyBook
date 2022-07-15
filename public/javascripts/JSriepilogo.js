/* --- Scripts della pagina riepilogo.html --- */


scontrino(); // chiamata per la costruzione della tabella di riepilogo


/* costruisce tutto il riepilogo dallo storage */
function scontrino() {

	// inserisce numTavolo
	if (sessionStorage.getItem('nTavolo') == "false") { // se user non ha messo il num tavolo
		$('nTavoloRecap').innerText = "Tavolo: non selezionato. Torna alla pagina precedente.";
	}
	else {
		$('nTavoloRecap').innerText = "Tavolo: " + (sessionStorage.getItem("nTavolo"));
	}

	/* chiamata AJAX per menu */
	const xhttp = new XMLHttpRequest();

	xhttp.onreadystatechange = function() { // definisco cosa fa quando l'oggetto cambia stato. tipo quando la risposta è pronta
		if (this.readyState == 4 && this.status == 200) { // tutto ok
    		var menu = JSON.parse(xhttp.responseText); // parsa la stringa json in un oggetto javascript

			// inserisce i valori nella griglia
			for (let i=0; i < 20; i++) { 
				//console.log("Dal session storage si ha: i=" + i + " con valore=" + sessionStorage.getItem(i));
				$("contatore"+i).innerText = sessionStorage.getItem(i);
				
				//TODO inserire anche nome e prezzo
				if(sessionStorage.getItem(i) > 0) { // se ha ordinato almeno una porzione
					$("piatto"+i).innerText = menu[i].Nome;
					$("prezzo"+i).innerText = "€ " + menu[i].Prezzo;
				}
				
				else{ // se non ha ordinato quello, nascondi la riga della tabella
					$("riga"+i).style.display = 'none';
				}
			}
    	}
	};
	xhttp.open("GET", "../others/menu1.json", true);
	//console.log("Richiesta creata");
	xhttp.send();
	//console.log("Richiesta mandata");


}

/* parametrizzazione della funzione per getElementById() */
function $(id) { 
	return document.getElementById(id);
}