import React from "react";
import Querystring from "querystring";
import { Helmet } from "react-helmet";

import Language from "../components/internal/languages/Language"
import {LanguageContext} from "../components/internal/languages/LanguageContext"

import Layout from "../components/Layout";
import AudioPlayer from "../components/AudioPlayer";

import audio1 from "../assets/audio/Tetiana-Muchychka-Track-05.mp3";
import audio2 from "../assets/audio/Tetiana-Muchychka-Track-06.mp3";

import '../assets/css/music.css';

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
              <title>Tetiana Muchychka - Musik</title>
              <meta name="description" content="Tonaufnahmen. U.a. Französische Suite Johann Sebastian Bach, aufgeführt von Tatiana Muchychka"/>
              <meta name="keywords" content="Tetiana Muchychka,Akkordeonistin,Best of NRW,Musik,Tonaufnahmen,Johann Sebastian Bach"></meta>
            </Helmet>
            <div className="flex-column album-section">
              <img className="background-img tetiana-music-video-img"/>
              <span className="album-title">{this.state.LANGUAGE.t('Audio')}</span> 
              
              <AudioPlayer audioSrc={audio1} trackName={this.state.LANGUAGE.t('Johann Sebastian Bach Französische Suite Nr.3 h-moll BWV 814, Menuett/Trio')}/>
                         
              <AudioPlayer audioSrc={audio2} trackName={this.state.LANGUAGE.t('Johann Sebastian Bach Französische Suite Nr.3 h-moll BWV 814, Anglaise')}/>
              
              
            </div>
            

            </Layout>
        </LanguageContext.Provider> 
        );
    }
}

MusicPage.contextType = LanguageContext;

