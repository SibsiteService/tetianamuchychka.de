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
                <span className="section-title biography-title">{this.state.LANGUAGE.t('Biographie')}</span>
                <div className= "flex-row flex-sa biography-container">
                   <div className= "biography-text" >
                    <p>
                    {this.state.LANGUAGE.t('Tetiana Muchychka ist eine in der Ukraine geborene Akkordeon-Virtuosin. In ihrer Heimatstadt Uzhgorod(Ukraine), bekannt für die prachtvollen Sakura-Bäume, begann sie im Alter von sechs Jahren das Akkordeonspiel. Mit 15 Jahren legte sie an der Musikfachschule D. Y. Zador den Grundstein für ihren musikalischen Werdegang.')}
                    </p>
                    <p>
                    {this.state.LANGUAGE.t('Im April 2013 erreichte sie den ersten Platz beim internationalen Akkordeonwettbewerb „Zakarpatsky Edelweiß“. Im Jahre 2015 nahm sie ihr Studium an der Folkwang Universität der Künste bei Professorin Mie Miki auf.')}
                    </p>
                    <p>
                    {this.state.LANGUAGE.t('Im Laufe ihres Studiums wurde sie mehrfach Stipendiatin zahlreicher Stiftungen:')}
                    </p>
                    <p>
                    {this.state.LANGUAGE.t('- 2016 und 2017 Alfred und Cläre Pott Stiftung')}
                    </p>
                    <p>
                    {this.state.LANGUAGE.t('- 2017 Yehudi Menuhin Live Music Now Rhein-Ruhr')}
                    </p>
                    <p>
                    {this.state.LANGUAGE.t('- 2018 DAAD (Deutsche Akademische Austauschdienst) STIBET I, STIBET III')}
                    </p>
                    <p>
                    {this.state.LANGUAGE.t('- 2018 Werner Richard - Dr. Carl Dörken Stiftung')}
                    </p>
                    <p>
                    {this.state.LANGUAGE.t('Bald darauf wurde sie für die Konzertreihe „Best of NRW“ für die Saison 2019 ausgewählt. Diese Konzertreihe umfasste 13 Solokonzerte, mit Auftritten in ganz Nordrhein-Westfalen. Hierbei konzertierte sie an namenhaften Spielstätten, u.a. im Beethoven-Haus, Apollo-Theater Siegen, Schloss Borbeck.')}
                    </p>
                    <p>
                    {this.state.LANGUAGE.t('Den musikalischen Feinschliff erhielt sie im Rahmen von Meisterkursen bei den renommierten Akkordeonisten Yurij Shishkin, Alexander Poeluev, Artem Nyzhnyk, Janne Rättyä, Lars Holm und Claudio Jacomucci.')}
                    </p>
                    <p>
                    {this.state.LANGUAGE.t('Tetiana Muchychka konzertiert nicht nur in Deutschland, sondern auch in der Ukraine und Ungarn. Regelmäßig erhält sie von ihrem Publikum und der anwesenden Presse große Anerkennung.')}
                    </p>
                    <p>
                    {this.state.LANGUAGE.t('In ihren Konzerten glänzt sie durch außergewöhnliche Innigkeit, energiegeladene Spielfreude, stets gepaart mit tiefer Leidenschaft. Tetiana Muchychka überzeugt ihre Hörerschaft mit einer ansteckenden Emotionalität, welche durch ihr vielfältiges Klangfarbenspektrum einen ganz eigenen Zauber entfacht.')}
                    </p>
                       
                   </div>
                   
                </div>
                <div className= "biography-img tetiana2-img"/>
                <div className="flex-row flex-center download-link-container">
                  <a href={biographies["biography_"+this.state.LANGUAGE.currentLang()]} download>{this.state.LANGUAGE.t('Herunterladen')}</a>               
                </div>  
            </div>
          </Layout>
        </LanguageContext.Provider> 
        );
    }
}

BiographyPage.contextType = LanguageContext;
