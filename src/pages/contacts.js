import React from "react";
import { Helmet } from "react-helmet";
import Querystring from "querystring";

import Language from "../components/internal/languages/Language"
import {LanguageContext} from "../components/internal/languages/LanguageContext"

import Layout from "../components/Layout";

import "../assets/css/contacts.css"

export default class contactsPage extends React.Component
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
              <title>{this.state.LANGUAGE.t('name_header')+" - " + this.state.LANGUAGE.t('contact')}</title>
              <meta name="description" content="Offizielle Website von Tetiana Muchychka - Akkordeonistin. Hier finden Sie die aktuelle Biographie, Fotos, Tonaufnahmen und Videos der jungen Preis- und Auszeichnungsträgerin - Tetiana Muchychka. Informationen über Konzertanfragen und weitere Details können im Kontaktbereich angefordert werden."/>
            </Helmet>
            <div className="flex-column contacts-section">
              <div className="background-underlay"/>
                <span className="section-title contacts-title">{this.state.LANGUAGE.t('contact')}</span>
                <div className= "flex-row flex-sa contacts-container">
                   <div className= "contacts-text" >
                   <p>
                    {this.state.LANGUAGE.t('contacts_business')} 
                    </p>
                    <p>
                    {this.state.LANGUAGE.t('name_header')}
                    </p>
                    
                    <p>
                    <a href="mailto:tetianamuchychka@gmail.com" target="_blank"> {this.state.LANGUAGE.t('contacts_email')}</a> 
                    </p>
                    
                    <p>
                    {this.state.LANGUAGE.t('contacts_phone')}
                    </p>
                   </div>
                   
                </div>
                <div className= "contacts-img tetiana-contacts-img"/>
            </div>
          </Layout>
        </LanguageContext.Provider> 
        );
    }
}

contactsPage.contextType = LanguageContext;

