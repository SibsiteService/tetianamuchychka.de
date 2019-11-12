import React from "react";
import Querystring from "querystring";

import '../assets/css/music.css';

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

            <div className="flex-column album-section">
             
              <img className="background-img tetiana3-img"/>
              <span className="album-title">{this.state.LANGUAGE.t('video_header')}</span>
              <br /><br /><br /><br /><br />
             
              <iframe margin-top="20%" width="450" height="215" 
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      src="https://www.youtube.com/embed/tgbNymZ7vqY"
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

