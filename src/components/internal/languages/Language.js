import i18next from "i18next";

class Language
{
    state = i18next;

    langPackets ={}

    constructor(props)
    {
        this.langPackets ={
            ru: require('./ru.json'),
            en: require('./en.json'),
        };
    
        this.setLang('ru');
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