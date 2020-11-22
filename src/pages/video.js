import React from "react";
import Querystring from "querystring";
import { Helmet } from "react-helmet";

import '../assets/css/video.css';

import Language from "../components/internal/languages/Language"
import {LanguageContext} from "../components/internal/languages/LanguageContext"
import Layout from "../components/Layout";


export default class MusicPage extends React.Component
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
              <title>Tetiana Muchychka - Video</title>
              <meta name="description" content="Neue Videos von Tatjana Muchichka's Auftritten"/>
              <meta name="keywords" content="Tetiana Muchychka,Akkordeonistin,Best of NRW,Video,Auftritt,Youtube"></meta>
            </Helmet>
            <div className="flex-column album-section">
             
              <img className="background-img tetiana3-img"/>
              <span className="album-title">{this.state.LANGUAGE.t('video_header')}</span>
              <br /><br /><br /><br /><br />
             
              <iframe margin-top="20%" width="450" height="215" 
                      titel="Enrique Granados Danza Española no.2 'Oriental' (Tetiana Muchychka - Accordion)"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      src="https://www.youtube.com/embed/eq8g1m-cy9A"
                      frameBorder="0"
                      webkitallowfullscreen="true"
                      mozallowfullscreen="true"
                      allowFullScreen frameborder="0">
              </iframe> 
              <br /><br />
              <iframe margin-top="20%" width="450" height="215" 
                      titel="Enrique Granados Danza Española no.2 'Oriental' (Tetiana Muchychka - Accordion)"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      src="https://www.youtube.com/embed/lzT7qhVSR9o"
                      frameBorder="0"
                      webkitallowfullscreen="true"
                      mozallowfullscreen="true"
                      allowFullScreen frameborder="0">
              </iframe> 
              <br /><br />
              <iframe margin-top="20%" width="450" height="215" 
                      titel="Johann Pachelbel - Chaconne in f minor, P. 43 (Tetiana Muchychka - Accordion)"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      src="https://www.youtube.com/embed/RfJerDoEsMI"
                      frameBorder="0"
                      webkitallowfullscreen="true"
                      mozallowfullscreen="true"
                      allowFullScreen frameborder="0">
              </iframe> 
              <br /><br />
              <iframe margin-top="20%" width="450" height="215" 
                      titel="Tetiana Muchychka F Angelis Konzertetüde Chiquilin de bachin 1"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      src="https://www.youtube.com/embed/lGVQdGrZnFA"
                      frameBorder="0"
                      webkitallowfullscreen="true"
                      mozallowfullscreen="true"
                      allowFullScreen frameborder="0">
              </iframe>  
              <br /><br />
              <iframe margin-top="20%" width="450" height="215" 
                      
                      titel="Tetiana Muchychka - W. A. Mozart Sonate F Dur Nr.12 III. Satz"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      src="https://www.youtube.com/embed/cN1xDHNkszs"
                      frameBorder="0"
                      webkitallowfullscreen="true"
                      mozallowfullscreen="true"
                      allowFullScreen frameborder="0">
              </iframe> 
                    
            </div>
          </Layout>
        </LanguageContext.Provider> 
        );
    }
}

MusicPage.contextType = LanguageContext;

