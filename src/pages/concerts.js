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
              <title>Tetiana Muchychka - Konzerte</title>
              <meta name="description" content="Offizielle Website von Tetiana Muchychka - Akkordeonistin. Hier finden Sie die aktuelle Biographie, Fotos, Tonaufnahmen und Videos der jungen Preis- und Auszeichnungsträgerin - Tetiana Muchychka. Informationen über Konzertanfragen und weitere Details können im Kontaktbereich angefordert werden."/>
            </Helmet>
            <div className="background-underlay"/>
            <div className="flex-column concerts-section">

              <span className="biography-title">{this.state.LANGUAGE.t('concerts')}</span>

              <table className="concert-table">
                <tbody>
                    <tr>
                        <td>
                            <span className="concert-first-title">
                                date
                            </span>
                            <span className="concert-second-title">
                                place
                            </span>
                        </td>

                        <td>
                            Country, City  
                        </td>

                        <td>
                            <a>
                                Additional
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span className="concert-first-title">
                                date
                            </span>
                            <span className="concert-second-title">
                                place
                            </span>
                        </td>

                        <td>
                            Country, City  
                        </td>

                        <td>
                            <a>
                                Additional
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span className="concert-first-title">
                            date
                            </span>
                            <span className="concert-second-title">
                                place
                            </span>
                        </td>

                        <td>
                            Country, City  
                        </td>

                        <td>
                            <a>
                                Additional
                            </a>
                        </td>
                    </tr>
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

