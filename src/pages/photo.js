import React from "react";
import Querystring from "querystring";
import { Helmet } from "react-helmet";

import "react-image-gallery/styles/css/image-gallery.css";

import Gallery from "react-image-gallery";

import Language from "../components/internal/languages/Language"
import {LanguageContext} from "../components/internal/languages/LanguageContext"

import Layout from "../components/Layout";

import "../assets/css/photo.css";

import photo1 from "../assets/images/Tetiana_05.jpg";
import photo2 from "../assets/images/Tetiana_09.jpg";
import photo3 from "../assets/images/Tetiana_04_reduced.jpg";
import photo4 from "../assets/images/concerts.png";

let photos = [
    {
      original: photo1,
      description  : 'Сюда описание'
    },
    {
      original: photo2,
      description  : 'Сюда описание'
    },
    {
      original: photo3,
      description  : 'Сюда описание'
    },
    {
      original: photo4, 
      description  : 'Сюда описание' 
    },
]

export default class PhotoPage extends React.Component
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
              <title>{this.state.LANGUAGE.t('name_header')+" - " + this.state.LANGUAGE.t('music')}</title>
              <meta name="description" content="Offizielle Website von Tetiana Muchychka - Akkordeonistin. Hier finden Sie die aktuelle Biographie, Fotos, Tonaufnahmen und Videos der jungen Preis- und Auszeichnungsträgerin - Tetiana Muchychka. Informationen über Konzertanfragen und weitere Details können im Kontaktbereich angefordert werden."/>
            </Helmet>
            <div className="background-underlay"/>
            <div className="photo-section">
              <span className="section-title photo-title">{this.state.LANGUAGE.t('photo')}</span>
            </div>
            <div className="gallery-container">
                <div className="gallery-wrapper">
                  <Gallery items={photos} showPlayButton={false}/>
                </div>
            </div>
           
            </Layout>
        </LanguageContext.Provider> 
        );
    }
}

PhotoPage.contextType = LanguageContext;

