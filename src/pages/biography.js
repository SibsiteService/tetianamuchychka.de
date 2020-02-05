import React from "react";
import { Helmet } from "react-helmet";
import Querystring from "querystring";

import Language from "../components/internal/languages/Language"
import {LanguageContext} from "../components/internal/languages/LanguageContext"

import Layout from "../components/Layout";

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
              <title>Tetiana Muchychka - Biographie</title>
              <meta name="description" content="Tetiana Muchychka ist eine in der Ukraine geborene Akkordeon-Virtuosin. In ihrer Heimatstadt Uzhgorod, bekannt für seine prachtvollen Sakura-Bäume, begann sie im Alter von sechs Jahren das Akkordeonspiel.      Mit 15 Jahren legte sie an der Musikfachschule D. Y. Zador den Grundstein zu ihrem musikalischen Werdegang."/>
              <meta name="keywords" content="Tetiana Muchychka,Akkordeonistin,Best of NRW,offizielle Biografie,Tetiana Muchychka biography,Татьяна Мучичка биография"></meta>
            </Helmet>
            <div className="flex-column biography-section">
              <div className="background-underlay"/>
                <span className="section-title biography-title">{this.state.LANGUAGE.t('biography')}</span>
                <div className= "flex-row flex-sa biography-container">
                   <div className= "biography-text" >
                    <p>
                    {this.state.LANGUAGE.t('biography_first_paragraph')}
                    </p>
                    <p>
                    {this.state.LANGUAGE.t('biography_second_paragraph')}
                    </p>
                    <p>
                    {this.state.LANGUAGE.t('biography_third_paragraph')}
                    </p>
                    <p>
                    {this.state.LANGUAGE.t('biography_fourth_paragraph')}
                    </p>
                    <p>
                    {this.state.LANGUAGE.t('biography_fifth_paragraph')}
                    </p>
                    <p>
                    {this.state.LANGUAGE.t('biography_sixth_paragraph')}
                    </p>
                    <p>
                    {this.state.LANGUAGE.t('biography_seventh_paragraph')}
                    </p>
                    <p>
                    {this.state.LANGUAGE.t('biography_eighth_paragraph')}
                    </p>
                    <p>
                    {this.state.LANGUAGE.t('biography_ninth_paragraph')}
                    </p>
                    <p>
                    {this.state.LANGUAGE.t('biography_tenth_paragraph')}
                    </p>
                    <p>
                    {this.state.LANGUAGE.t('biography_eleventh_paragraph')}
                    </p>
                       
                   </div>
                   
                </div>
                <div className= "biography-img tetiana2-img"/>
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
