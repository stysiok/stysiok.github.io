i18next
    .init({
        lng: 'en',
        debug: true,
        resources: {
            en: {
                translation: EN
            },
            pl: {
                translation: PL
            }
        }
    }, function (err, t) {
        updateContent("pl");
    });

function changeLanguage(language) {
    i18next.changeLanguage(language);
}

i18next.on('languageChanged', (language) => {
    updateContent(language);
});

function updateContent(language) {
    var setOfTranslations = language == "pl" ? PL : EN
    Object.keys(setOfTranslations).forEach(k => {
        var elements = document.getElementsByClassName(k);
        for (let index = 0; index < elements.length; index++) {
            const element = elements.item(index);
            element.innerText = i18next.t(k)
        }
    })
}
