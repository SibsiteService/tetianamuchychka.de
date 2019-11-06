import React from "react";
import Querystring from "querystring";

import Language from "../components/internal/languages/Language"
import {LanguageContext} from "../components/internal/languages/LanguageContext"

import Layout from "../components/Layout";

import "../assets/css/index.css"
import "../assets/css/biography.css"

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
                <span className="section-title">{this.state.LANGUAGE.t('biography')}</span>
                <div className= "flex-row biography-container">
                   
                </div>
            </div>
          </Layout>
        </LanguageContext.Provider> 
        );
    }
}

BiographyPage.contextType = LanguageContext;

