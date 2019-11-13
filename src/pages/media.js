import React from "react";
import Querystring from "querystring";
import { Helmet } from "react-helmet";
import '../assets/css/media.css';

import Language from "../components/internal/languages/Language"
import {LanguageContext} from "../components/internal/languages/LanguageContext"

import Layout from "../components/Layout";


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
              <img className="media-background-img accordeon-img"/>
                <div className="flex-column media-section">
                    <div className="flex-column media-card">
                        <div className="media-card-title" >Media Title</div>
                        <div className="media-card-content">
                            <div className="media-card-img media-card-img-example"></div>
                            <div className="media-card-description">
                                <span className="description-text">
                                    Описание
                                </span>
                                <a href="#">
                                    Подробнее
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="flex-column media-card">
                        <div className="media-card-title" >Media Title</div>
                        <div className="media-card-content">
                            <div className="media-card-img media-card-img-example"></div>
                            <div className="media-card-description">
                                <span className="description-text">
                                    Описание
                                </span>
                                <a href="#">
                                    Подробнее
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="flex-column media-card">
                        <div className="media-card-title" >Media Title</div>
                        <div className="media-card-content">
                            <div className="media-card-img media-card-img-example"></div>
                            <div className="media-card-description">
                                <span className="description-text">
                                    Описание
                                </span>
                                <a href="#">
                                    Подробнее
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="flex-column media-card">
                        <div className="media-card-title" >Media Title</div>
                        <div className="media-card-content">
                            <div className="media-card-img media-card-img-example"></div>
                            <div className="media-card-description">
                                <span className="description-text">
                                    Описание
                                </span>
                                <a href="#">
                                    Подробнее
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

