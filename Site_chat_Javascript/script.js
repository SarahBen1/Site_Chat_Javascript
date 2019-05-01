var nameCatSelect = $('select[name=nameCat]');
var messageTextarea = $('textarea[name=message]');

var successElt = $('div.success')
successElt.hide() // on cache à l'affiche de la page

function onSubmitForm(event){
	event.preventDefault();
	var nombreError = 0;

	//
	// Traitement de l'erreur race de chat
	//
	if ( nameCatSelect.val() == 0 ){
			nameCatSelect.addClass('errorBorder');
			nombreError ++
		}

	//
	// Traitement de l'erreur message
	//
	var nbCharMessage = messageTextarea.val().trim().length;

	if(nbCharMessage < 15){
			// j'injecte le texte d'erreur dans la balise p.error correspondante
			messageTextarea.addClass('errorBorder');
			nombreError ++
		}

	if( nombreError == 0) {
    	// Vider un formulaire en jquery
		$('form').trigger("reset");
        // Afficher un message
        successElt.text("Merci, votre réponse a bien été transmise !");
        $('.formToHide').slideUp(); 
        successElt.fadeIn(1000);
       }
}


$('form').on('submit' , onSubmitForm)