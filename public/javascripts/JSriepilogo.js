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
				// se non ha ordinato quello, nascondi la riga della tabella
				else{ 
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

/* POST */
function inviaOrdine() {
	const xhttp = new XMLHttpRequest();

	xhttp.onreadystatechange = function() { // definisco cosa fa quando l'oggetto cambia stato. tipo quando la risposta è pronta
		if (this.readyState == 4 && this.status == 200) {
			// Quello che fa quando la richiesta è stata inviata
			alert('Ordine inviato con successo! Buon appetito!');
			//TODO poi deve rimandare alla pagina index! --> nota che magari posso fare redirect dal server, dopo che ha scritto nel txt
		}
	}
	xhttp.open("POST", "/invia-ordine");
  	xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  	xhttp.send(buildMex()); // post http
}

//TODO
/* costruisce il payload della richiesta POST */
function buildMex() {
	let tav = sessionStorage.getItem('nTavolo');
	var data = 'nTavolo=' + tav;

	for(var i=0; i<20; i++) {
		if (sessionStorage.getItem(i) > 0) {
			data += '&id=' + i + '&quantita=' + sessionStorage.getItem(i);
		}
	}
	//TODO RITORNARE I DATI IN FORMATO URL ENCODED
	return data;
}

/* parametrizzazione della funzione per getElementById() */
function $(id) { 
	return document.getElementById(id);
}