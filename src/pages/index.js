import React from "react";
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
            <div className="flex-column flex-sa main-content-container">
              <Section>
                <img className="background-img tetiana1-img"/>
          
                <span className="section-header">{this.state.LANGUAGE.t('name_header')}</span>
          
                <div className="flex-column flex-sa button-container">
                  <a href={"/music/?lang="+ this.state.LANGUAGE.currentLang()} className="custom-button">{this.state.LANGUAGE.t('listen_music')}</a>
                </div>
          
                <div className="flex-row flex-sa social-container">
                  <a href="#" className="fa fa-facebook-square social-icon"/>
                  <a href="#" className="fa fa-instagram social-icon" aria-hidden="true"/> 
                </div>
              </Section> 
            </div>    
          </Layout>
        </LanguageContext.Provider> 
        );
    }
}

IndexPage.contextType = LanguageContext;

