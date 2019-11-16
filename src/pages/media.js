import React from "react";
import Querystring from "querystring";
import { Helmet } from "react-helmet";
import '../assets/css/media.css';

import Language from "../components/internal/languages/Language"
import {LanguageContext} from "../components/internal/languages/LanguageContext"

import Layout from "../components/Layout";

import article_2_img from "../assets/images/borkenerzeitung.png"
import article_3_img from "../assets/images/stadtlohn-klassik.PNG"


export default class MediaPage extends React.Component
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
              <title>Tetiana Muchychka - Presse</title>
              <meta name="description" content="Offizielle Website von Tetiana Muchychka - Akkordeonistin. Hier finden Sie die aktuelle Biographie, Fotos, Tonaufnahmen und Videos der jungen Preis- und Auszeichnungsträgerin - Tetiana Muchychka. Informationen über Konzertanfragen und weitere Details können im Kontaktbereich angefordert werden."/>
            </Helmet>
              <img className="media-background-img tetiana-presse-img"/>
              <span className="media-title">{this.state.LANGUAGE.t('media_header')}</span>
                <div className="flex-column media-section">
                    
                    <div className="flex-column media-card">
                        <div className="media-card-title" >{this.state.LANGUAGE.t('media_article_2_header')}</div>
                        <div className="media-card-content">
                        <a data-toggle="modal" target="_blank" href={article_2_img}>
                          <div className="media-card-img-medium media-card-article-2-photo">
                          </div>
                        </a>
                            <div className="media-card-description">
                                <span className="description-text">
                                {this.state.LANGUAGE.t('media_article_2_description')}
                                </span>
                                <a target="_blank" href="https://www.borkenerzeitung.de/lokales/raesfeld/Ein-ganzes-Orchester-hervorgezaubert-230216.html">
                                {this.state.LANGUAGE.t('media_details')}
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="flex-column media-card">
                        <div className="media-card-title" >{this.state.LANGUAGE.t('media_article_3_header')}</div>
                        <div className="media-card-content">
                        <a data-toggle="modal" target="_blank" href={article_3_img}>
                          <div className="media-card-img-broad media-card-article-3-photo">
                          </div>
                        </a>
                            <div className="media-card-description">
                                <span className="description-text">
                                {this.state.LANGUAGE.t('media_article_3_description')}
                                </span>
                                <a data-toggle="modal" target="_blank" href={article_3_img}>
                                {this.state.LANGUAGE.t('media_details')}
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="flex-column media-card">
                        <div className="media-card-title" >{this.state.LANGUAGE.t('media_article_1_header')}</div>
                        <div className="media-card-content">
                            <a target="_blank" href="https://www.wn.de/Muensterland/Kreis-Steinfurt/Tecklenburg/3537627-Spielfreude-und-Fingerfertigkeit-Tetiana-Muchychka-konzertiert-in-Haus-Marck">
                            <div className="media-card-img-small media-card-article-1-photo"></div>
                            </a>
                            <div className="media-card-description">
                                <span className="description-text">
                                {this.state.LANGUAGE.t('media_article_1_description')}
                                </span>
                                <a target="_blank" href="https://www.wn.de/Muensterland/Kreis-Steinfurt/Tecklenburg/3537627-Spielfreude-und-Fingerfertigkeit-Tetiana-Muchychka-konzertiert-in-Haus-Marck">
                                {this.state.LANGUAGE.t('media_details')}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </LanguageContext.Provider> 
        );
    }
}

MediaPage.contextType = LanguageContext;

