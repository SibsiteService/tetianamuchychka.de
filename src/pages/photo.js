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
import photo18 from "../assets/images/Tetiana_15_reduced.jpg";





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
              <title>Tetiana Muchychka - Foto</title>
              <meta name="description" content="Offizielle Website von Tetiana Muchychka - Akkordeonistin. Hier finden Sie die aktuelle Biographie, Fotos, Tonaufnahmen und Videos der jungen Preis- und Auszeichnungsträgerin - Tetiana Muchychka. Informationen über Konzertanfragen und weitere Details können im Kontaktbereich angefordert werden."/>
            </Helmet>
            <div className="background-underlay"/>
            <div className="photo-section">
              <span className="album-title">{this.state.LANGUAGE.t('photo')}</span>
            </div>
            
            <div class="responsive">
              <div class="gallery">
                <a target="_blank" href={photo18}>
                  <img src={photo18} alt="Photo 7" width="100%" height="auto"/>
                </a>
                <div class="desc">Photo: Sofia Barajas</div>
              </div>
            </div> 
            
            <div class="responsive">
              <div class="gallery">
                <a target="_blank" href={photo3}>
                  <img src={photo3} alt="Photo 2" width="100%" height="auto"/>
                </a>
                <div class="desc">Photo: Sofia Barajas</div>
              </div>
            </div>

            <div class="responsive">
              <div class="gallery">
                <a target="_blank" href={photo6}>
                  <img src={photo6} alt="Photo 3" width="100%" height="auto"/>
                </a>
                <div class="desc">Photo: Sofia Barajas</div>
              </div>
            </div> 

            <div class="responsive">
              <div class="gallery">
                <a target="_blank" href={photo8}>
                  <img src={photo8} alt="Photo 4" width="100%" height="auto"/>
                </a>
                <div class="desc">Photo: Sofia Barajas</div>
              </div>
            </div> 

            <div class="responsive">
              <div class="gallery">
                <a target="_blank" href={photo7}>
                  <img src={photo7} alt="Photo 5" width="100%" height="auto"/>
                </a>
                <div class="desc">Photo: Sofia Barajas</div>
              </div>
            </div> 

            <div class="responsive">
              <div class="gallery">
                <a target="_blank" href={photo12}>
                  <img src={photo12} alt="Photo 6" width="100%" height="auto"/>
                </a>
                <div class="desc">Photo: Lilo Ingenlath-Gegic</div>
              </div>
            </div> 

            <div class="responsive">
              <div class="gallery">
                <a target="_blank" href={photo1}>
                  <img src={photo1} alt="Photo 1" width="100%" height="auto"/>
                </a>  
                <div class="desc">Photo: Sofia Barajas</div>
              </div>
            </div>

            <div class="responsive">
              <div class="gallery">
                <a target="_blank" href={photo13}>
                  <img src={photo13} alt="Photo 7" width="100%" height="auto"/>
                </a>
                <div class="desc">Photo: Lilo Ingenlath-Gegic</div>
              </div>
            </div> 

            <div class="responsive">
              <div class="gallery">
                <a target="_blank" href={photo14}>
                  <img src={photo14} alt="Photo 8" width="100%" height="auto"/>
                </a>
                <div class="desc">Photo: Kulturgemeinde Finnentrop</div>
              </div>
            </div>

            <div class="responsive">
              <div class="gallery">
                <a target="_blank" href={photo11}>
                  <img src={photo11} alt="Photo 9" width="100%" height="auto"/>
                </a>
                <div class="desc">Photo: Stefan Pieper</div>
              </div>
            </div> 

            <div class="responsive">
              <div class="gallery">
                <a target="_blank" href={photo9}>
                  <img src={photo9} alt="Photo 10" width="100%" height="auto"/>
                </a>
                <div class="desc">Photo: Sofia Barajas</div>
              </div>
            </div> 

            <div class="responsive">
              <div class="gallery">
                <a target="_blank" href={photo15}>
                  <img src={photo15} alt="Photo 11" width="100%" height="auto"/>
                </a>
                <div class="desc">Photo: Kulturgemeinde Finnentrop</div>
              </div>
            </div>

            <div class="responsive">
              <div class="gallery">
                <a target="_blank" href={photo16}>
                  <img src={photo16} alt="Photo 12" width="100%" height="auto"/>
                </a>
                <div class="desc">Photo: Peppemhorst</div>
              </div>
            </div>

            <div class="responsive">
              <div class="gallery">
                <a target="_blank" href={photo17}>
                  <img src={photo17} alt="Photo 13" width="100%" height="auto"/>
                </a>
                <div class="desc">Photo: Lisa Kannenbrock</div>
              </div>
            </div>
                      
            <div class="responsive">
              <div class="gallery">
                <a target="_blank" href={photo2}>
                  <img src={photo2} alt="Photo 14" width="100%" height="auto"/>
                </a>
                <div class="desc">Photo: Sofia Barajas</div>
              </div>
            </div>
            
            <div class="responsive">
              <div class="gallery">
                <a target="_blank" href={photo5}>
                  <img src={photo5} alt="Photo 15" width="100%" height="auto"/>
                </a>
                <div class="desc">Photo: Sofia Barajas</div>
              </div>
            </div>

            <div class="responsive">
              <div class="gallery">
                <a target="_blank" href={photo10}>
                  <img src={photo10} alt="Photo 16" width="100%" height="auto"/>
                </a>
                <div class="desc">Photo: Sofia Barajas</div>
              </div>
            </div> 

            
            </Layout>
        </LanguageContext.Provider> 
        );
    }
}

PhotoPage.contextType = LanguageContext;