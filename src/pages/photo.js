import React from "react";
import Querystring from "querystring";
import { Helmet } from "react-helmet";

import Gallery from "react-photo-gallery";

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
      src: photo1,
      width: 2.456,
      height: 3.439
    },
    {
        src: photo2,
        width: 4.981,
        height: 3.558
      },
      {
        src: photo3,
        width: 2.398,
        height: 3.357
      },
      {
        src: photo11,
        width: 2.100,
        height: 2.637,
        title: "Photo: Stefan Pieper"
      },
      {
        src: photo12,
        width: 4,
        height: 6,
        title: "Photo: Lilo Ingenlath-Gegic"
      },
      {
        src: photo13,
        width: 4,
        height: 6,
        title: "Photo: Lilo Ingenlath-Gegic"
      },
      {
        src: photo14,
        width: 2.4,
        height: 3.6,
        title: "Photo: Kulturgemeinde Finnentrop"
      },
      {
        src: photo15,
        width: 3.6,
        height: 2.4,
        title: "Photo: Kulturgemeinde Finnentrop"
      },
      {
        src: photo16,
        width: 4.8,
        height: 3.2,
        title: "Photo: Lisa Kannenbrock"
      },
      {
        src: photo17,
        width: 5,
        height: 3.335,
        title: "Photo: Lisa Kannenbrock"
      },
      {
        src: photo4,
        width: 5,
        height: 1.5
      },
      {
        src: photo5,
        width: 6.642,
        height: 4.744
      },
      {
        src: photo6,
        width: 3.541,
        height: 4.957
      },
      {
        src: photo7,
        width: 3.355,
        height: 4.696
      },
      {
        src: photo8,
        width: 4.544,
        height: 6.362
      },
      {
        src: photo9,
        width: 4.441,
        height: 6.218
      },
      {
        src: photo10,
        width: 3.072,
        height: 2.049
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
                <Gallery photos={photos} />
                </div>
            </div>

            </Layout>
        </LanguageContext.Provider> 
        );
    }
}

PhotoPage.contextType = LanguageContext;
