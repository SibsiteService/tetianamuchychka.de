import React from "react";
import Querystring from "querystring";

import '../assets/css/music.css';

import Language from "../components/internal/languages/Language"
import {LanguageContext} from "../components/internal/languages/LanguageContext"

import Layout from "../components/Layout";
import AudioPlayer from "../components/AudioPlayer";

import audio1 from "../assets/audio/Sleep Away.mp3";

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
            
            <div className="flex-column album-section">
              <img className="background-img accordeon-img"/>
              <span className="album-title">{this.state.LANGUAGE.t('music_header')}</span> 
              <AudioPlayer audioSrc={audio1}/>
              <AudioPlayer audioSrc={audio1}/>
              <AudioPlayer audioSrc={audio1}/>
            </div>
            

            </Layout>
        </LanguageContext.Provider> 
        );
    }
}

MusicPage.contextType = LanguageContext;

