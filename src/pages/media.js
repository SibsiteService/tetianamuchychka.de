import React from "react";
import Querystring from "querystring";
import { Helmet } from "react-helmet";

import Language from "../components/internal/languages/Language"
import {LanguageContext} from "../components/internal/languages/LanguageContext"

import Layout from "../components/Layout";
import '../assets/css/media.css';

import article_1_img from "../assets/images/article_1.jpg"
import article_2_img from "../assets/images/borkenerzeitung.png"
import article_3_img from "../assets/images/stadtlohn_klassik.png"
import article_4_img from "../assets/images/article_4.jpg"
import article_5_img from "../assets/images/article_5.png"
import article_6_img from "../assets/images/article_6.jpg"
import article_7_img from "../assets/images/article_7.jpg"
import article_8_pdf from "../assets/presse/bonner_rundschau.pdf"
import article_9_img from "../assets/images/article_9.png"


export default class MediaPage extends React.Component
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
              <title>Tetiana Muchychka - Presse/media/пресса</title>
              <meta name="description" content="Pressemitteilungen über Tatiana Muchychka. „Man kann sich zwei kleine Kinder vorstellen, die Spaß haben“ - Kunstsignal im Alten Bahnhof Rheydt-Geneicken - Mönchengladbach"/>
              <meta name="keywords" content="Tetiana Muchychka,Akkordeonistin,Best of NRW,Westfälische Nachrichten,Musikverein Unna e.V.,The New Listener,Bonner Rundschau"></meta>
            </Helmet>
              <img className="media-background-img tetiana-presse-img"/>
              <span className="media-title">{this.state.LANGUAGE.t('media_header')}</span>
                <div className="flex-column media-section">
                    
                    <div className="flex-column media-card">
                        <div className="media-card-title" >{this.state.LANGUAGE.t('media_article_4_header')}</div>
                        <div className="media-card-content">
                            <a target="_blank" href={article_4_img}>
                            <div className="media-card-img-tall media-card-article-4-photo"></div>
                            </a>
                            <div className="media-card-description">
                                <span className="description-text">
                                {this.state.LANGUAGE.t('media_article_4_description')}
                                </span>
                                <a target="_blank" href="http://www.the-new-listener.de/index.php/2019/10/04/man-kann-sich-zwei-kleine-kinder-vorstellen-die-spass-haben/">
                                {this.state.LANGUAGE.t('media_details')}
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="flex-column media-card">
                        <div className="media-card-title" >{this.state.LANGUAGE.t('media_article_6_header')}</div>
                        <div className="media-card-content">
                            <a target="_blank" href={article_6_img}>
                            <div className="media-card-img-medium media-card-article-6-photo"></div>
                            </a>
                            <div className="media-card-description">
                                <span className="description-text">
                                {this.state.LANGUAGE.t('media_article_6_description')}
                                </span>
                                <a target="_blank" href={article_6_img}>
                                {this.state.LANGUAGE.t('media_details')}
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="flex-column media-card">
                        <div className="media-card-title" >{this.state.LANGUAGE.t('media_article_8_header')}</div>
                        <div className="media-card-content">
                        <a data-toggle="modal" target="_blank" href={article_8_pdf}>
                          <div className="media-card-img-tall media-card-article-8-photo">
                          </div>
                        </a>
                            <div className="media-card-description">
                                <span className="description-text">
                                {this.state.LANGUAGE.t('media_article_8_description')}
                                </span>
                                <a target="_blank" href={article_8_pdf}>
                                {this.state.LANGUAGE.t('media_details')}
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="flex-column media-card">
                        <div className="media-card-title" >{this.state.LANGUAGE.t('media_article_7_header')}</div>
                        <div className="media-card-content">
                        <a data-toggle="modal" target="_blank" href={article_7_img}>
                          <div className="media-card-img-broad media-card-article-7-photo">
                          </div>
                        </a>
                            <div className="media-card-description">
                                <span className="description-text">
                                {this.state.LANGUAGE.t('media_article_7_description')}
                                </span>
                                <a target="_blank" href="https://www.lokalplus.nrw/nachrichten/kultur-finnentrop/akkordeonspielerin-tetiana-muchychka-begeistert-im-schloss-bamenohl-37885">
                                {this.state.LANGUAGE.t('media_details')}
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="flex-column media-card">
                        <div className="media-card-title" >{this.state.LANGUAGE.t('media_article_2_header')}</div>
                        <div className="media-card-content">
                        <a data-toggle="modal" target="_blank" href={article_2_img}>
                          <div className="media-card-img-medium media-card-article-2-photo">
                          </div>
                        </a>
                            <div className="media-card-description">
                                <span className="description-text">
                                {this.state.LANGUAGE.t('media_article_2_description')}
                                </span>
                                <a target="_blank" href="https://www.borkenerzeitung.de/lokales/raesfeld/Ein-ganzes-Orchester-hervorgezaubert-230216.html">
                                {this.state.LANGUAGE.t('media_details')}
                                </a>
                            </div>
                        </div>
                    </div>
                    
                    <div className="flex-column media-card">
                        <div className="media-card-title" >{this.state.LANGUAGE.t('media_article_3_header')}</div>
                        <div className="media-card-content">
                        <a data-toggle="modal" target="_blank" href={article_3_img}>
                          <div className="media-card-img-broad media-card-article-3-photo">
                          </div>
                        </a>
                            <div className="media-card-description">
                                <span className="description-text">
                                {this.state.LANGUAGE.t('media_article_3_description')}
                                </span>
                                <a data-toggle="modal" target="_blank" href={article_3_img}>
                                {this.state.LANGUAGE.t('media_details')}
                                </a>
                            </div>
                        </div>
                    </div>
                    
                    <div className="flex-column media-card">
                        <div className="media-card-title" >{this.state.LANGUAGE.t('media_article_5_header')}</div>
                        <div className="media-card-content">
                            <a target="_blank" href={article_5_img}>
                            <div className="media-card-img-medium media-card-article-5-photo"></div>
                            </a>
                            <div className="media-card-description">
                                <span className="description-text">
                                {this.state.LANGUAGE.t('media_article_5_description')}
                                </span>
                                <a target="_blank" href="https://m.wn.de/Muensterland/Kreis-Coesfeld/Senden/3982465-Tetiana-Muchychka-beim-Rathauskonzert-Virtuositaet-trifft-auf-Leidenschaft">
                                {this.state.LANGUAGE.t('media_details')}
                                </a>
                            </div>
                        </div>
                    </div>
                    
                    <div className="flex-column media-card">
                        <div className="media-card-title" >{this.state.LANGUAGE.t('media_article_1_header')}</div>
                        <div className="media-card-content">
                            <a target="_blank" href={article_1_img}>
                            <div className="media-card-img-broad media-card-article-1-photo"></div>
                            </a>
                            <div className="media-card-description">
                                <span className="description-text">
                                {this.state.LANGUAGE.t('media_article_1_description')}
                                </span>
                                <a target="_blank" href="https://www.wn.de/Muensterland/Kreis-Steinfurt/Tecklenburg/3537627-Spielfreude-und-Fingerfertigkeit-Tetiana-Muchychka-konzertiert-in-Haus-Marck">
                                {this.state.LANGUAGE.t('media_details')}
                                </a>
                            </div>
                        </div>
                    </div>
                    
                    
                </div>
            </Layout>
        </LanguageContext.Provider> 
        );
    }
}

MediaPage.contextType = LanguageContext;

