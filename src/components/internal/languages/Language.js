import i18next from "i18next";

class Language
{
    state = i18next;

    langPackets ={}

    constructor(props)
    {
        this.langPackets ={
            de: require('./de.json'),
            en: require('./en.json'),
            ru: require('./ru.json'),
        };
    
        this.setLang('de');
    }

    setLang(lang)
    {
        this.state.init({
            lng: lang,
            resources:this.langPackets[lang]
          });
    }

    t(key)
    {
        return this.state.t(key);
    }

    currentLang()
    {
        return this.state.language;
    }
}

export default Language;