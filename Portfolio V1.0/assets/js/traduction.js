// Fonction pour initialiser Google Translate
function googleTranslateElementInit() {
    new google.translate.TranslateElement({pageLanguage: 'fr', layout: google.translate.TranslateElement.InlineLayout.SIMPLE}, 'google_translate_element');
}

// Fonction pour traduire le contenu
function translateTo(targetLang) {
    // Votre clé API Google Translate
    const apiKey = 'YOUR_API_KEY';

    // Texte à traduire
    const textToTranslate = document.getElementById('content').textContent;

    // Appel à l'API de Google Translate
    fetch(`https://translation.googleapis.com/language/translate/v2?key=${apiKey}&q=${encodeURIComponent(textToTranslate)}&target=${targetLang}`)
        .then(response => response.json())
        .then(data => {
            const translatedText = data.data.translations[0].translatedText;
            document.getElementById('content').textContent = translatedText;
        })
        .catch(error => {
            console.error('Une erreur s\'est produite lors de la traduction :', error);
        });
}