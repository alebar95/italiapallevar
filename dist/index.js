"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// The locale our app first shows
const defaultLocale = "es";
// The active locale
// @ts-ignore
let locale;
// Gets filled with active locale translations
let translations = {};
// When the page content is ready...
document.addEventListener("DOMContentLoaded", () => {
    // Translate the page to the default locale
    setLocale(defaultLocale);
});
const spainLangButton = document.getElementById('es');
const spainLangButtonMobile = document.getElementById('es-body');
if (spainLangButton) {
    spainLangButton.addEventListener('click', () => {
        setLocale('es');
    });
}
if (spainLangButtonMobile) {
    spainLangButtonMobile.addEventListener('click', () => {
        setLocale('es');
    });
}
const ukLangButton = document.getElementById('uk');
const ukLangButtonMobile = document.getElementById('uk-body');
if (ukLangButton) {
    ukLangButton.addEventListener('click', () => {
        setLocale('en');
    });
}
if (ukLangButtonMobile) {
    ukLangButtonMobile.addEventListener('click', () => {
        setLocale('en');
    });
}
// Load translations for the given locale and translate
// the page to this locale
// @ts-ignore
function setLocale(newLocale) {
    return __awaiter(this, void 0, void 0, function* () {
        // @ts-ignore
        if (newLocale === locale)
            return;
        const newTranslations = yield fetchTranslationsFor(newLocale);
        locale = newLocale;
        translations = newTranslations;
        translatePage();
    });
}
// Retrieve translations JSON object for the given
// locale over the network
// @ts-ignore
function fetchTranslationsFor(newLocale) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`assets/lang/${newLocale}.json`);
        return yield response.json();
    });
}
// Replace the inner text of each element that has a
// data-i18n-key attribute with the translation corresponding
// to its data-i18n-key
function translatePage() {
    document
        .querySelectorAll("[data-i18n-key]")
        .forEach(translateElement);
}
// Replace the inner text of the given HTML element
// with the translation in the active locale,
// corresponding to the element's data-i18n-key
// @ts-ignore
function translateElement(element) {
    const key = element.getAttribute("data-i18n-key");
    // @ts-ignore
    const translation = translations[key];
    element.innerText = translation;
}
//# sourceMappingURL=index.js.map