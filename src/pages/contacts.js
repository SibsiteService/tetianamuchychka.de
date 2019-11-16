import React from "react";
import { Helmet } from "react-helmet";
import Querystring from "querystring";

import Language from "../components/internal/languages/Language"
import {LanguageContext} from "../components/internal/languages/LanguageContext"

import Layout from "../components/Layout";

import "../assets/css/index.css"
import "../assets/css/biography.css"

import biography_ru from "../assets/biography/Biography_ru.pdf"
import biography_en from "../assets/biography/Biography_en.pdf"
import biography_de from "../assets/biography/Biography_de.pdf"

const biographies = {
  "biography_ru": biography_ru,
  "biography_en": biography_en,
  "biography_de": biography_de
}

export default class BiographyPage extends React.Component
{
    state = {}

    constructor(props)
    {
      super(props);
  
      this.state = 
      {
        LANGUAGE: new Language(),
      };

      this.toggleLanguage = (lang) =>
      {
        this.context.setLang(lang);
  
        this.setState(state => ({
          LANGUAGE:this.context
        }));
      }

      this.toggleLanguage =  this.toggleLanguage.bind(this);

      let langURL = Querystring.parse(this.props.location.search)['?lang'];
      this.state.LANGUAGE.setLang(langURL);
    }

    render(){
        return( 
        <LanguageContext.Provider value={this.state.LANGUAGE}>
          <Layout toggleLanguage ={this.toggleLanguage}>
            <Helmet>
              <meta charSet="utf-8" />
              <title>Tetiana Muchychka - Kontakt</title>
              <meta name="description" content="Offizielle Website von Tetiana Muchychka - Akkordeonistin. Hier finden Sie die aktuelle Biographie, Fotos, Tonaufnahmen und Videos der jungen Preis- und Auszeichnungsträgerin - Tetiana Muchychka. Informationen über Konzertanfragen und weitere Details können im Kontaktbereich angefordert werden."/>
            </Helmet>
            <div className="flex-column biography-section">
              <div className="background-underlay"/>
                <span className="section-title biography-title">{this.state.LANGUAGE.t('contact')}</span>
                <div className= "flex-row flex-sa biography-container">
                   <div className= "biography-text" >
                   <p>
                    {this.state.LANGUAGE.t('contacts_business')} 
                    </p>
                    <p>
                    {this.state.LANGUAGE.t('name_header')}
                    </p>
                    
                    <p>
                    {this.state.LANGUAGE.t('contacts_email')} 
                    </p>
                    
                    <p>
                    {this.state.LANGUAGE.t('contacts_phone')}
                    </p>
                   </div>
                   <div className= "biography-img tetiana-contacts-img"/>
                </div>
                 
            </div>
          </Layout>
        </LanguageContext.Provider> 
        );
    }
}

BiographyPage.contextType = LanguageContext;

