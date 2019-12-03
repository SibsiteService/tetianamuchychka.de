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
import photo3 from "../assets/images/Tetiana_04.jpg";
import photo4 from "../assets/images/concerts.png";
import photo5 from "../assets/images/Tetiana_03_reduced.jpg";
import photo6 from "../assets/images/Tetiana_06.jpg";
import photo7 from "../assets/images/Tetiana_07.jpg";
import photo8 from "../assets/images/Tetiana_13.jpg";
import photo9 from "../assets/images/Tetiana_14.jpg";
import photo10 from "../assets/images/Tetiana_15.jpg";
import photo11 from "../assets/images/Tetiana_16.jpg";
import photo12 from "../assets/images/Tetiana_17.jpg";
import photo13 from "../assets/images/Tetiana_18.jpg";
import photo14 from "../assets/images/Tetiana_20.jpg";
import photo15 from "../assets/images/Tetiana_21.jpg";
import photo16 from "../assets/images/Tetiana_22.jpg";
import photo17 from "../assets/images/Tetiana_23.jpg";



let photos = [
    {
      original: photo1,
      
    },
    {
      original: photo2,
      
    },
    {
      original: photo3,
      
    },
    {
      original: photo4, 
       
    },
    {
      original: photo5, 
      
    },
    {
      original: photo6, 
      
    },
    {
      original: photo7, 
      
    },
    {
      original: photo8, 
       
    },
    {
      original: photo9, 
      
    },
    {
      original: photo10, 
      
    },
    {
      original: photo11, 
      description  : 'Photo: Stefan Pieper' 
    },
    {
      original: photo12, 
      description  : 'Photo: Lilo Ingenlath-Gegic' 
    },
    {
      original: photo13, 
      description  : 'Photo: Lilo Ingenlath-Gegic' 
    },
    {
      original: photo14, 
      description  : 'Photo: Kulturgemeinde Finnentrop' 
    },
    {
      original: photo15, 
      description  : 'Photo: Kulturgemeinde Finnentrop' 
    },
    {
      original: photo16, 
      description  : 'Photo: Lisa Kannenbrock' 
    },
    {
      original: photo17, 
      description  : 'Photo: Lisa Kannenbrock' 
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

