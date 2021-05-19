import React from "react";
import { Helmet } from "react-helmet";
import Querystring from "querystring";

import '../assets/css/index.css';
import '../assets/css/fonts.css';
import '../assets/fonts/font-awesome/css/font-awesome.min.css';

import Language from "../components/internal/languages/Language"
import {LanguageContext} from "../components/internal/languages/LanguageContext"

import Layout from "../components/Layout";
import Section from "../components/Section";

export default class IndexPage extends React.Component
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

      if(langURL)
      {
        this.state.LANGUAGE.setLang(langURL);
      }
     
    }

    render(){
        return( 
        <LanguageContext.Provider value={this.state.LANGUAGE}>
          <Layout toggleLanguage ={this.toggleLanguage}>
            <Helmet>
              <meta charSet="utf-8" />
              <title>Tetiana Muchychka - Akkordeonistin - Best of NRW 2019</title>
              <meta name="description" content="Offizielle Website von Tetiana Muchychka - Akkordeonistin. Hier finden Sie die aktuelle Biographie, Fotos, Tonaufnahmen und Videos der jungen Preis- und Auszeichnungsträgerin - Tetiana Muchychka. Informationen über Konzertanfragen und weitere Details können im Kontaktbereich angefordert werden."/>
              <meta name="keywords" content="Tetiana Muchychka,Akkordeonistin,offizielle Webseite,Tetiana Muchychka youtube"></meta>            
            </Helmet>
            <div className="flex-column flex-sa main-content-container">
              <Section>
                <img className="background-img tetiana1-img"/>
          
                <span className="section-header"><strong>{this.state.LANGUAGE.t('Tetiana Muchychka')}</strong></span>
                <span className="section-title"><strong>{this.state.LANGUAGE.t('Akkordeonistin')}</strong></span>
                               
                <div className="flex-row flex-center social-container">
                  <a href="https://www.facebook.com/people/Tetiana-Muchychka/100006740625670" target="_blank" className="fa fa-facebook-square social-icon"/>
                  <a>&nbsp;&nbsp;&nbsp;</a>
                  <a href="https://www.instagram.com/tetiana.muchychka" target="_blank" className="fa fa-instagram social-icon" aria-hidden="true"/>
                </div>
                
              </Section> 
            </div>    
          </Layout>
        </LanguageContext.Provider> 
        );
    }
}

IndexPage.contextType = LanguageContext;

