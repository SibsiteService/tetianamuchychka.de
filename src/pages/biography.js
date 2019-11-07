import React from "react";
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
            <div className="flex-column biography-section">
                <span className="section-title biography-title">{this.state.LANGUAGE.t('biography')}</span>
                <div className= "flex-row flex-sa biography-container">
                   <div className= "biography-text" >
                     <p>
                       Biography biography biography biography biography biography biography biography biography biography
                       biography biography biography biography biography biography biography biography biography biography biography biography biography biography
                       biography biography biography biography biography biography biography biography biography biography biography biography biography biography
                       biography biography biography biography biography biography biography biography biography biography biography biography biography biography
                       biography biography biography biography biography biography biography biography biography biography biography biography biography biography
                       biography biography biography biography biography biography biography biography biography biography biography biography biography biography
                       biography biography biography biography biography biography biography biography biography biography biography biography biography biography
                     </p>
                     <p>
                       Biography biography biography biography biography biography biography biography biography biography
                       biography biography biography biography biography biography biography biography biography biography biography biography biography biography
                       biography biography biography biography biography biography biography biography biography biography biography biography biography biography
                       biography biography biography biography biography biography biography biography biography biography biography biography biography biography
                       biography biography biography biography biography biography biography biography biography biography biography biography biography biography
                       biography biography biography biography biography biography biography biography biography biography biography biography biography biography
                       biography biography biography biography biography biography biography biography biography biography biography biography biography biography
                     </p>
                       
                   </div>
                   <div className= "biography-img tetiana2-img"/>
                </div>
                <div className="flex-row flex-center download-link-container">
                  <a href={biographies["biography_"+this.state.LANGUAGE.currentLang()]} download>{this.state.LANGUAGE.t('download')}</a>
                </div>
            </div>
          </Layout>
        </LanguageContext.Provider> 
        );
    }
}

BiographyPage.contextType = LanguageContext;

