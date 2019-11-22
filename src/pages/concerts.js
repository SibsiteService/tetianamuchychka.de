import React from "react";
import { Helmet } from "react-helmet";
import Querystring from "querystring";

import '../assets/css/concerts.css';

import Language from "../components/internal/languages/Language"
import {LanguageContext} from "../components/internal/languages/LanguageContext"

import Layout from "../components/Layout";

export default class ConcertsPage extends React.Component
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
              <title>{this.state.LANGUAGE.t('name_header')+" - " + this.state.LANGUAGE.t('concerts')}</title>
              <meta name="description" content="Offizielle Website von Tetiana Muchychka - Akkordeonistin. Hier finden Sie die aktuelle Biographie, Fotos, Tonaufnahmen und Videos der jungen Preis- und Auszeichnungsträgerin - Tetiana Muchychka. Informationen über Konzertanfragen und weitere Details können im Kontaktbereich angefordert werden."/>
            </Helmet>
            <div className="background-underlay"/>
            <div className="flex-column concerts-section">

              <span className="biography-title">{this.state.LANGUAGE.t('concerts')}</span>

              <table className="concert-table">
                <tbody>
                    <a href = "https://www.doerken-stiftung.de/" target="_blank">
                    <tr>
                        <td>
                            <span className="concert-first-title">
                            {this.state.LANGUAGE.t('concert_01_date')}
                            </span>
                            <span className="concert-second-title">
                            {this.state.LANGUAGE.t('concert_01_place')}
                            </span>
                        </td>
                
                        <td>
                        {this.state.LANGUAGE.t('concert_01_city')}
                        </td>

                        <td>
                            {this.state.LANGUAGE.t('concert_01_event')}
                        </td>
                        
                        <td class="click-raw">
                            {this.state.LANGUAGE.t('concert_01_additional')}
                        </td>    
                    </tr>
                    </a>
                    <a href = "https://www.folkwang-uni.de/home/" target="_blank">
                    <tr>
                        <td>
                            <span className="concert-first-title">
                            {this.state.LANGUAGE.t('concert_02_date')}
                            </span>
                            <span className="concert-second-title">
                            {this.state.LANGUAGE.t('concert_02_place')}
                            </span>
                        </td>

                        <td>
                        {this.state.LANGUAGE.t('concert_02_city')}  
                        </td>

                        <td>
                            {this.state.LANGUAGE.t('concert_02_event')}
                        </td>
                        <td>
                            {this.state.LANGUAGE.t('concert_02_additional')}
                        </td>
                    </tr>
                    </a>
                    <a href = "https://www.doerken-stiftung.de/" target="_blank">
                    <tr>
                        <td>
                            <span className="concert-first-title">
                            {this.state.LANGUAGE.t('concert_03_date')}
                            </span>
                            <span className="concert-second-title">
                            {this.state.LANGUAGE.t('concert_03_place')}
                            </span>
                        </td>

                        <td>
                        {this.state.LANGUAGE.t('concert_03_city')}  
                        </td>

                        <td>
                            {this.state.LANGUAGE.t('concert_03_event')}
                        </td>
                        <td>
                            {this.state.LANGUAGE.t('concert_03_additional')}
                        </td>
                    </tr>
                    </a>
                    <a href = "https://www.cse.ruhr/soziales-gefaehrdetenhilfe/standort/3-cafe-schliessfach/" target="_blank">
                    <tr>
                        <td>
                            <span className="concert-first-title">
                            {this.state.LANGUAGE.t('concert_04_date')}
                            </span>
                            <span className="concert-second-title">
                            {this.state.LANGUAGE.t('concert_04_place')}
                            </span>
                        </td>

                        <td>
                        {this.state.LANGUAGE.t('concert_04_city')}  
                        </td>

                        <td>
                            {this.state.LANGUAGE.t('concert_04_event')}
                        </td>
                        <td>
                            {this.state.LANGUAGE.t('concert_04_additional')}
                        </td>
                    </tr>
                    </a>
                    <a href = "https://www.folkwang-uni.de/home/" target="_blank">
                    <tr>
                        <td>
                            <span className="concert-first-title">
                            {this.state.LANGUAGE.t('concert_05_date')}
                            </span>
                            <span className="concert-second-title">
                            {this.state.LANGUAGE.t('concert_05_place')}
                            </span>
                        </td>

                        <td>
                        {this.state.LANGUAGE.t('concert_05_city')}  
                        </td>

                        <td>
                            {this.state.LANGUAGE.t('concert_05_event')}
                        </td>
                        <td>
                            {this.state.LANGUAGE.t('concert_05_additional')}
                        </td>
                    </tr>
                    </a>
                    <a href = "https://akgs-duesseldorf.lms.schulon.org/" target="_blank">
                    <tr>
                        <td>
                            <span className="concert-first-title">
                            {this.state.LANGUAGE.t('concert_06_date')}
                            </span>
                            <span className="concert-second-title">
                            {this.state.LANGUAGE.t('concert_06_place')}
                            </span>
                        </td>

                        <td>
                        {this.state.LANGUAGE.t('concert_06_city')}  
                        </td>

                        <td>
                            {this.state.LANGUAGE.t('concert_06_event')}
                        </td>
                        <td>
                            {this.state.LANGUAGE.t('concert_06_additional')}
                        </td>
                    </tr>
                    </a>
                    <a href = "https://www.folkwang-uni.de/home/hochschule/ueber-folkwang/campus/campus-duisburg/" target="_blank">
                    <tr>
                        <td>
                            <span className="concert-first-title">
                            {this.state.LANGUAGE.t('concert_07_date')}
                            </span>
                            <span className="concert-second-title">
                            {this.state.LANGUAGE.t('concert_07_place')}
                            </span>
                        </td>

                        <td>
                        {this.state.LANGUAGE.t('concert_07_city')}  
                        </td>

                        <td>
                            {this.state.LANGUAGE.t('concert_07_event')}
                        </td>
                        <td>
                            {this.state.LANGUAGE.t('concert_07_additional')}
                        </td>
                    </tr>
                    </a>
                    <a href = "https://www.konzertgesellschaft.com/" target="_blank">
                    <tr>
                        <td>
                            <span className="concert-first-title">
                            {this.state.LANGUAGE.t('concert_08_date')}
                            </span>
                            <span className="concert-second-title">
                            {this.state.LANGUAGE.t('concert_08_place')}
                            </span>
                        </td>

                        <td>
                        {this.state.LANGUAGE.t('concert_08_city')}  
                        </td>

                        <td>
                            {this.state.LANGUAGE.t('concert_08_event')}
                        </td>
                        <td>
                            {this.state.LANGUAGE.t('concert_08_additional')}
                        </td>
                    </tr>
                    </a>
                    <a href = "https://www.schloss-benrath.de/" target="_blank">
                    <tr>
                        <td>
                            <span className="concert-first-title">
                            {this.state.LANGUAGE.t('concert_09_date')}
                            </span>
                            <span className="concert-second-title">
                            {this.state.LANGUAGE.t('concert_09_place')}
                            </span>
                        </td>

                        <td>
                        {this.state.LANGUAGE.t('concert_09_city')}  
                        </td>

                        <td>
                            {this.state.LANGUAGE.t('concert_09_event')}
                        </td>
                        <td>
                            {this.state.LANGUAGE.t('concert_09_additional')}
                        </td>
                    </tr>
                    </a>
                    <a href = "https://www.schloss-benrath.de/" target="_blank">
                    <tr>
                        <td>
                            <span className="concert-first-title">
                            {this.state.LANGUAGE.t('concert_10_date')}
                            </span>
                            <span className="concert-second-title">
                            {this.state.LANGUAGE.t('concert_10_place')}
                            </span>
                        </td>

                        <td>
                        {this.state.LANGUAGE.t('concert_10_city')}  
                        </td>

                        <td>
                            {this.state.LANGUAGE.t('concert_10_event')}
                        </td>
                        <td>
                            {this.state.LANGUAGE.t('concert_10_additional')}
                        </td>
                    </tr>
                    </a>
                    <a href = "https://www.da-kunsthaus.de/" target="_blank">
                    <tr>
                        <td>
                            <span className="concert-first-title">
                            {this.state.LANGUAGE.t('concert_11_date')}
                            </span>
                            <span className="concert-second-title">
                            {this.state.LANGUAGE.t('concert_11_place')}
                            </span>
                        </td>

                        <td>
                        {this.state.LANGUAGE.t('concert_11_city')}  
                        </td>

                        <td>
                            {this.state.LANGUAGE.t('concert_11_event')}
                        </td>
                        <td>
                            {this.state.LANGUAGE.t('concert_11_additional')}
                        </td>
                    </tr>
                    </a>

                    
                </tbody>
              </table>

              <img className="background-img-concerts concerts-img"/>

            </div>
          </Layout>
        </LanguageContext.Provider> 
        );
    }
}

ConcertsPage.contextType = LanguageContext;

