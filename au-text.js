class AuText extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({mode: 'open'});
    }

    connectedCallback() {
        this.changeLanguage(getTranslations(null))
    }

    changeLanguage(newTranslations) {
        console.log('new text: ' + newTranslations[this.getAttribute('name')]);
        this.shadowRoot.textContent = newTranslations[this.getAttribute('name')];
    }
}
customElements.define("au-text", AuText);

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('select[name="language"]').onchange = changeLanguageListener;
});

function getTranslations(language) {
    if(language === null || language.length === 0) {
        language = navigator.language || navigator.userLanguage;

        if(language === null || language.length === 0) {
            language = "de";
        }
    }
    language = language.substring(0, 2).toLowerCase();
    if(language === 'en')
        translations = translations_en;
    else
        translations = translations_de;
    return translations;

}

function changeLanguageListener(event) {
    var translations = getTranslations(event.target.value);
    document.querySelectorAll('au-text').forEach(auText => auText.changeLanguage(translations));
}