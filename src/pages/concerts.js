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
              <meta name="description" content="Aktuelle Konzerte der Akkordeonistin Tetiana Muchychka."/>
              <meta name="keywords" content="Tetiana Muchychka,Akkordeonistin,neue Konzerte,klassische Musik,NRW Kozerte,Best of NRW"></meta>
            </Helmet>
            <div className="background-underlay"/>
            <div className="flex-column concerts-section">

              <span className="biography-title">{this.state.LANGUAGE.t('concerts')}</span>

              <table className="concert-table">
                <tbody>
                <a href = "https://www.wasgehtheuteab.de/bochum/e/97dbdecd-a822-444b-b365-4dc3825e689b" target="_blank">
                    <tr>
                        <td>
                            <span className="concert-first-title">
                            {this.state.LANGUAGE.t('concert_44_date')}
                            </span>
                            <span className="concert-second-title">
                            {this.state.LANGUAGE.t('concert_44_place')}
                            </span>
                        </td>
                        <td>{this.state.LANGUAGE.t('concert_44_city')}</td>
                        <td>{this.state.LANGUAGE.t('concert_44_event')}</td>
                        <td>{this.state.LANGUAGE.t('concert_44_additional')}</td>
                    </tr>
                 </a>   
                <a href = "https://livemusicnow-rheinruhr.de/kalender/" target="_blank">
                    <tr>
                        <td>
                            <span className="concert-first-title">
                            {this.state.LANGUAGE.t('concert_43_date')}
                            </span>
                            <span className="concert-second-title">
                            {this.state.LANGUAGE.t('concert_43_place')}
                            </span>
                        </td>
                        <td>{this.state.LANGUAGE.t('concert_43_city')}</td>
                        <td>{this.state.LANGUAGE.t('concert_43_event')}</td>
                        <td>{this.state.LANGUAGE.t('concert_43_additional')}</td>
                    </tr>
                 </a>   
                 <a href = "https://livemusicnow-rheinruhr.de/kalender/" target="_blank">
                    <tr>
                        <td>
                            <span className="concert-first-title">
                            {this.state.LANGUAGE.t('concert_42_date')}
                            </span>
                            <span className="concert-second-title">
                            {this.state.LANGUAGE.t('concert_42_place')}
                            </span>
                        </td>
                        <td>{this.state.LANGUAGE.t('concert_42_city')}</td>
                        <td>{this.state.LANGUAGE.t('concert_42_event')}</td>
                        <td>{this.state.LANGUAGE.t('concert_42_additional')}</td>
                    </tr>
                    </a> 
                    <a href = "https://www.folkwang-uni.de/home/hochschule/veranstaltungen/veranstaltungen-des-laufenden-monats/veranstaltung-detail/11056-klassenabend-akkordeon/" target="_blank">
                    <tr>
                        <td>
                            <span className="concert-first-title">
                            {this.state.LANGUAGE.t('concert_45_date')}
                            </span>
                            <span className="concert-second-title">
                            {this.state.LANGUAGE.t('concert_45_place')}
                            </span>
                        </td>
                        <td>{this.state.LANGUAGE.t('concert_45_city')}</td>
                        <td>{this.state.LANGUAGE.t('concert_45_event')}</td>
                        <td>{this.state.LANGUAGE.t('concert_45_additional')}</td>
                    </tr>
                    </a>
                    <a href = "https://www.novavita.com/" target="_blank">
                    <tr>
                        <td>
                            <span className="concert-first-title">
                            {this.state.LANGUAGE.t('concert_41_date')}
                            </span>
                            <span className="concert-second-title">
                            {this.state.LANGUAGE.t('concert_41_place')}
                            </span>
                        </td>
                        <td>{this.state.LANGUAGE.t('concert_41_city')}</td>
                        <td>{this.state.LANGUAGE.t('concert_41_event')}</td>
                        <td>{this.state.LANGUAGE.t('concert_41_additional')}</td>
                    </tr>
                    </a> 
                    <a href = "https://www.karlschule-essen.de/termine/" target="_blank">
                    <tr>
                        <td>
                            <span className="concert-first-title">
                            {this.state.LANGUAGE.t('concert_40_date')}
                            </span>
                            <span className="concert-second-title">
                            {this.state.LANGUAGE.t('concert_40_place')}
                            </span>
                        </td>
                        <td>{this.state.LANGUAGE.t('concert_40_city')}</td>
                        <td>{this.state.LANGUAGE.t('concert_40_event')}</td>
                        <td>{this.state.LANGUAGE.t('concert_40_additional')}</td>
                    </tr>
                    </a> 
                    <a href = "https://www.wir-lieben-bottrop.de/veranstaltungen/tetiana-muchychka-akkordeon/" target="_blank">
                    <tr>
                        <td>
                            <span className="concert-first-title">
                            {this.state.LANGUAGE.t('concert_39_date')}
                            </span>
                            <span className="concert-second-title">
                            {this.state.LANGUAGE.t('concert_39_place')}
                            </span>
                        </td>
                        <td>{this.state.LANGUAGE.t('concert_39_city')}</td>
                        <td>{this.state.LANGUAGE.t('concert_39_event')}</td>
                        <td>{this.state.LANGUAGE.t('concert_39_additional')}</td>
                    </tr>
                    </a> 
                    <a href = "https://www.beethoven.de/de/konzerte" target="_blank">
                    <tr>
                        <td>
                            <span className="concert-first-title">
                            {this.state.LANGUAGE.t('concert_38_date')}
                            </span>
                            <span className="concert-second-title">
                            {this.state.LANGUAGE.t('concert_38_place')}
                            </span>
                        </td>
                        <td>{this.state.LANGUAGE.t('concert_38_city')}</td>
                        <td>{this.state.LANGUAGE.t('concert_38_event')}</td>
                        <td>{this.state.LANGUAGE.t('concert_38_additional')}</td>
                    </tr>
                    </a> 
                    <a href = "https://www.lokalplus.nrw/nachrichten/kultur-finnentrop/best-of-nrw-1-mit-tetiana-muchychka-in-schoss-bamenohl-37545" target="_blank">
                    <tr>
                        <td>
                            <span className="concert-first-title">
                            {this.state.LANGUAGE.t('concert_37_date')}
                            </span>
                            <span className="concert-second-title">
                            {this.state.LANGUAGE.t('concert_37_place')}
                            </span>
                        </td>
                        <td>{this.state.LANGUAGE.t('concert_37_city')}</td>
                        <td>{this.state.LANGUAGE.t('concert_37_event')}</td>
                        <td>{this.state.LANGUAGE.t('concert_37_additional')}</td>
                    </tr>
                    </a> 
                    <a href = "https://www.kulturforum-witten.de/saalbauhauswitten/hauswitten/veranstaltungen/?event_id=109448&active_timestamp=1570572000&calendars=38" target="_blank">
                    <tr>
                        <td>
                            <span className="concert-first-title">
                            {this.state.LANGUAGE.t('concert_36_date')}
                            </span>
                            <span className="concert-second-title">
                            {this.state.LANGUAGE.t('concert_36_place')}
                            </span>
                        </td>
                        <td>{this.state.LANGUAGE.t('concert_36_city')}</td>
                        <td>{this.state.LANGUAGE.t('concert_36_event')}</td>
                        <td>{this.state.LANGUAGE.t('concert_36_additional')}</td>
                    </tr>
                    </a>
                    <a href = "https://www.musikverein-unna.de/programmleser/events/id-1-meisterkonzert-524.html" target="_blank">
                    <tr>
                        <td>
                            <span className="concert-first-title">
                            {this.state.LANGUAGE.t('concert_35_date')}
                            </span>
                            <span className="concert-second-title">
                            {this.state.LANGUAGE.t('concert_35_place')}
                            </span>
                        </td>
                        <td>{this.state.LANGUAGE.t('concert_35_city')}</td>
                        <td>{this.state.LANGUAGE.t('concert_35_event')}</td>
                        <td>{this.state.LANGUAGE.t('concert_35_additional')}</td>
                    </tr>
                    </a> 
                    <a href = "https://www.wn.de/Muensterland/Kreis-Coesfeld/Senden/3976837-Tetiana-Muchychka-Vielfach-preisgekroent-Ein-Konzert-der-Superlative" target="_blank">
                    <tr>
                        <td>
                            <span className="concert-first-title">
                            {this.state.LANGUAGE.t('concert_34_date')}
                            </span>
                            <span className="concert-second-title">
                            {this.state.LANGUAGE.t('concert_34_place')}
                            </span>
                        </td>
                        <td>{this.state.LANGUAGE.t('concert_34_city')}</td>
                        <td>{this.state.LANGUAGE.t('concert_34_event')}</td>
                        <td>{this.state.LANGUAGE.t('concert_34_additional')}</td>
                    </tr>
                    </a> 
                    <a href = "https://www.apollosiegen.de/veranstaltungen/tetiana-muchychka-akkordeon/" target="_blank">
                    <tr>
                        <td>
                            <span className="concert-first-title">
                            {this.state.LANGUAGE.t('concert_33_date')}
                            </span>
                            <span className="concert-second-title">
                            {this.state.LANGUAGE.t('concert_33_place')}
                            </span>
                        </td>
                        <td>{this.state.LANGUAGE.t('concert_33_city')}</td>
                        <td>{this.state.LANGUAGE.t('concert_33_event')}</td>
                        <td>{this.state.LANGUAGE.t('concert_33_additional')}</td>
                    </tr>
                    </a> 
                    <a href = "https://www.schwelm.de/aktuelles/kalender/veranstaltungen/?event_id=105899&active_timestamp=1569535200" target="_blank">
                    <tr>
                        <td>
                            <span className="concert-first-title">
                            {this.state.LANGUAGE.t('concert_32_date')}
                            </span>
                            <span className="concert-second-title">
                            {this.state.LANGUAGE.t('concert_32_place')}
                            </span>
                        </td>
                        <td>{this.state.LANGUAGE.t('concert_32_city')}</td>
                        <td>{this.state.LANGUAGE.t('concert_32_event')}</td>
                        <td>{this.state.LANGUAGE.t('concert_32_additional')}</td>
                    </tr>
                    </a> 
                    <a href = "https://www.moenchengladbach.de/de/aktuell-aktiv/veranstaltungskalender/veranstaltung/tetiana-muchychka/" target="_blank">
                    <tr>
                        <td>
                            <span className="concert-first-title">
                            {this.state.LANGUAGE.t('concert_31_date')}
                            </span>
                            <span className="concert-second-title">
                            {this.state.LANGUAGE.t('concert_31_place')}
                            </span>
                        </td>
                        <td>{this.state.LANGUAGE.t('concert_31_city')}</td>
                        <td>{this.state.LANGUAGE.t('concert_31_event')}</td>
                        <td>{this.state.LANGUAGE.t('concert_31_additional')}</td>
                    </tr>
                    </a> 
                    <a href = "https://www.stadtlohn.de/bildung-und-kultur/kultur/konzerte/2019-07-19/sonntag-22.-september-2019-18-00-uhr.html" target="_blank">
                    <tr>
                        <td>
                            <span className="concert-first-title">
                            {this.state.LANGUAGE.t('concert_30_date')}
                            </span>
                            <span className="concert-second-title">
                            {this.state.LANGUAGE.t('concert_30_place')}
                            </span>
                        </td>
                        <td>{this.state.LANGUAGE.t('concert_30_city')}</td>
                        <td>{this.state.LANGUAGE.t('concert_30_event')}</td>
                        <td>{this.state.LANGUAGE.t('concert_30_additional')}</td>
                    </tr>
                    </a> 
                    <a href = "https://www.lokalkompass.de/event/essen-borbeck/c-kultur/schwebende-klaenge-auf-dem-akkordeon-mit-tetiana-muchychka_e277989" target="_blank">
                    <tr>
                        <td>
                            <span className="concert-first-title">
                            {this.state.LANGUAGE.t('concert_29_date')}
                            </span>
                            <span className="concert-second-title">
                            {this.state.LANGUAGE.t('concert_29_place')}
                            </span>
                        </td>
                        <td>{this.state.LANGUAGE.t('concert_29_city')}</td>
                        <td>{this.state.LANGUAGE.t('concert_29_event')}</td>
                        <td>{this.state.LANGUAGE.t('concert_29_additional')}</td>
                    </tr>
                    </a>
                    <tr>
                        <td>
                            <span className="concert-first-title">
                            {this.state.LANGUAGE.t('concert_28_date')}
                            </span>
                            <span className="concert-second-title">
                            {this.state.LANGUAGE.t('concert_28_place')}
                            </span>
                        </td>
                        <td>{this.state.LANGUAGE.t('concert_28_city')}</td>
                        <td>{this.state.LANGUAGE.t('concert_28_event')}</td>
                        <td>{this.state.LANGUAGE.t('concert_28_additional')}</td>
                    </tr>
                    
                    <a href = "https://kreis-borken.de/de/service/aktuelles/aktuelle-pressemeldungen/?tx_news_pi1%5Bnews%5D=3477&tx_news_pi1%5Bcontroller%5D=News&tx_news_pi1%5Baction%5D=detail&cHash=bba8d4ed12ec284c138d8f9327892394" target="_blank">
                    <tr>
                        <td>
                            <span className="concert-first-title">
                            {this.state.LANGUAGE.t('concert_27_date')}
                            </span>
                            <span className="concert-second-title">
                            {this.state.LANGUAGE.t('concert_27_place')}
                            </span>
                        </td>
                        <td>{this.state.LANGUAGE.t('concert_27_city')}</td>
                        <td>{this.state.LANGUAGE.t('concert_27_event')}</td>
                        <td>{this.state.LANGUAGE.t('concert_27_additional')}</td>
                    </tr>
                    </a> 
                    <a href = "https://www.herdecke.de/rathaus-buergerservice/aktuelles-aus-herdecke/nachrichten/detailansicht/news/akkordeonistin-tatiana-muchychka-tritt-im-rahmen-der-konzertreihe-best-of-nrw-im-werner-richard-sa.html?tx_news_pi1%5Bcontroller%5D=News&tx_news_pi1%5Baction%5D=detail&cHash=cd00b58b965ef2be932c114a0eb6d089" target="_blank">
                    <tr>
                        <td>
                            <span className="concert-first-title">
                            {this.state.LANGUAGE.t('concert_26_date')}
                            </span>
                            <span className="concert-second-title">
                            {this.state.LANGUAGE.t('concert_26_place')}
                            </span>
                        </td>
                        <td>{this.state.LANGUAGE.t('concert_26_city')}</td>
                        <td>{this.state.LANGUAGE.t('concert_26_event')}</td>
                        <td>{this.state.LANGUAGE.t('concert_26_additional')}</td>
                    </tr>
                    </a> 
                    <tr>
                        <td>
                            <span className="concert-first-title">
                            {this.state.LANGUAGE.t('concert_25_date')}
                            </span>
                            <span className="concert-second-title">
                            {this.state.LANGUAGE.t('concert_25_place')}
                            </span>
                        </td>
                        <td>{this.state.LANGUAGE.t('concert_25_city')}</td>
                        <td>{this.state.LANGUAGE.t('concert_25_event')}</td>
                        <td>{this.state.LANGUAGE.t('concert_25_additional')}</td>
                    </tr>
                    <a href = "https://www.folkwang-uni.de/home/hochschule/ueber-folkwang/campus/campus-duisburg/" target="_blank">
                    <tr>
                        <td>
                            <span className="concert-first-title">
                            {this.state.LANGUAGE.t('concert_24_date')}
                            </span>
                            <span className="concert-second-title">
                            {this.state.LANGUAGE.t('concert_24_place')}
                            </span>
                        </td>
                        <td>{this.state.LANGUAGE.t('concert_24_city')}</td>
                        <td>{this.state.LANGUAGE.t('concert_24_event')}</td>
                        <td>{this.state.LANGUAGE.t('concert_24_additional')}</td>
                    </tr>
                    </a> 
                <tr>
                        <td>
                            <span className="concert-first-title">
                            {this.state.LANGUAGE.t('concert_23_date')}
                            </span>
                            <span className="concert-second-title">
                            {this.state.LANGUAGE.t('concert_23_place')}
                            </span>
                        </td>
                        <td>{this.state.LANGUAGE.t('concert_23_city')}</td>
                        <td>{this.state.LANGUAGE.t('concert_23_event')}</td>
                        <td>{this.state.LANGUAGE.t('concert_23_additional')}</td>
                    </tr>
                             
                    <tr>
                        <td>
                            <span className="concert-first-title">
                            {this.state.LANGUAGE.t('concert_22_date')}
                            </span>
                            <span className="concert-second-title">
                            {this.state.LANGUAGE.t('concert_22_place')}
                            </span>
                        </td>
                        <td>{this.state.LANGUAGE.t('concert_22_city')}</td>
                        <td>{this.state.LANGUAGE.t('concert_22_event')}</td>
                        <td>{this.state.LANGUAGE.t('concert_22_additional')}</td>
                    </tr>
                 
                <a href = "https://www.folkwang-uni.de/home/" target="_blank">
                    <tr>
                        <td>
                            <span className="concert-first-title">
                            {this.state.LANGUAGE.t('concert_21_date')}
                            </span>
                            <span className="concert-second-title">
                            {this.state.LANGUAGE.t('concert_21_place')}
                            </span>
                        </td>
                        <td>{this.state.LANGUAGE.t('concert_21_city')}</td>
                        <td>{this.state.LANGUAGE.t('concert_21_event')}</td>
                        <td>{this.state.LANGUAGE.t('concert_21_additional')}</td>
                    </tr>
                    </a> 
                <a href = "https://aip-unternehmensgruppe.de/2019/03/25/veranstaltungen-karstadt-re/" target="_blank">
                    <tr>
                        <td>
                            <span className="concert-first-title">
                            {this.state.LANGUAGE.t('concert_20_date')}
                            </span>
                            <span className="concert-second-title">
                            {this.state.LANGUAGE.t('concert_20_place')}
                            </span>
                        </td>
                        <td>{this.state.LANGUAGE.t('concert_20_city')}</td>
                        <td>{this.state.LANGUAGE.t('concert_20_event')}</td>
                        <td>{this.state.LANGUAGE.t('concert_20_additional')}</td>
                    </tr>
                    </a>     
                <a href = "https://www.theater-essen.de/spielplan/a-z/takeover-by-miki--namika-87857/" target="_blank">
                    <tr>
                        <td>
                            <span className="concert-first-title">
                            {this.state.LANGUAGE.t('concert_19_date')}
                            </span>
                            <span className="concert-second-title">
                            {this.state.LANGUAGE.t('concert_19_place')}
                            </span>
                        </td>
                        <td>{this.state.LANGUAGE.t('concert_19_city')}</td>
                        <td>{this.state.LANGUAGE.t('concert_19_event')}</td>
                        <td>{this.state.LANGUAGE.t('concert_19_additional')}</td>
                    </tr>
                    </a> 
                <a href = "https://www.folkwang-uni.de/home/hochschule/veranstaltungen/veranstaltungen-des-laufenden-monats/veranstaltung-detail/10505-klassenabend-akkordeon/" target="_blank">
                    <tr>
                        <td>
                            <span className="concert-first-title">
                            {this.state.LANGUAGE.t('concert_18_date')}
                            </span>
                            <span className="concert-second-title">
                            {this.state.LANGUAGE.t('concert_18_place')}
                            </span>
                        </td>
                        <td>{this.state.LANGUAGE.t('concert_18_city')}</td>
                        <td>{this.state.LANGUAGE.t('concert_18_event')}</td>
                        <td>{this.state.LANGUAGE.t('concert_18_additional')}</td>
                    </tr>
                    </a> 
                <a href = "https://www.parkhaus-huegel.de/" target="_blank">
                    <tr>
                        <td>
                            <span className="concert-first-title">
                            {this.state.LANGUAGE.t('concert_17_date')}
                            </span>
                            <span className="concert-second-title">
                            {this.state.LANGUAGE.t('concert_17_place')}
                            </span>
                        </td>
                        <td>{this.state.LANGUAGE.t('concert_17_city')}</td>
                        <td>{this.state.LANGUAGE.t('concert_17_event')}</td>
                        <td>{this.state.LANGUAGE.t('concert_17_additional')}</td>
                    </tr>
                    </a> 

                <a href = "https://www.folkwang-uni.de/home/" target="_blank">
                    <tr>
                        <td>
                            <span className="concert-first-title">
                            {this.state.LANGUAGE.t('concert_16_date')}
                            </span>
                            <span className="concert-second-title">
                            {this.state.LANGUAGE.t('concert_16_place')}
                            </span>
                        </td>
                        <td>{this.state.LANGUAGE.t('concert_16_city')}</td>
                        <td>{this.state.LANGUAGE.t('concert_16_event')}</td>
                        <td>{this.state.LANGUAGE.t('concert_16_additional')}</td>
                    </tr>
                    </a>  
                <a href = "https://www.ggs-sonnenstrasse.de/" target="_blank">
                    <tr>
                        <td>
                            <span className="concert-first-title">
                            {this.state.LANGUAGE.t('concert_15_date')}
                            </span>
                            <span className="concert-second-title">
                            {this.state.LANGUAGE.t('concert_15_place')}
                            </span>
                        </td>
                        <td>{this.state.LANGUAGE.t('concert_15_city')}</td>
                        <td>{this.state.LANGUAGE.t('concert_15_event')}</td>
                        <td>{this.state.LANGUAGE.t('concert_15_additional')}</td>
                    </tr>
                    </a>    
                <a href = "https://luise-leven-schule.lvr.de/de/nav_main/index.html" target="_blank">
                    <tr>
                        <td>
                            <span className="concert-first-title">
                            {this.state.LANGUAGE.t('concert_14_date')}
                            </span>
                            <span className="concert-second-title">
                            {this.state.LANGUAGE.t('concert_14_place')}
                            </span>
                        </td>

                        <td>
                        {this.state.LANGUAGE.t('concert_14_city')}  
                        </td>

                        <td>
                            {this.state.LANGUAGE.t('concert_14_event')}
                        </td>
                        <td>
                            {this.state.LANGUAGE.t('concert_14_additional')}
                        </td>
                    </tr>
                    </a>    
                <a href = "https://www.karlschule-essen.de/" target="_blank">
                    <tr>
                        <td>
                            <span className="concert-first-title">
                            {this.state.LANGUAGE.t('concert_13_date')}
                            </span>
                            <span className="concert-second-title">
                            {this.state.LANGUAGE.t('concert_13_place')}
                            </span>
                        </td>

                        <td>
                        {this.state.LANGUAGE.t('concert_13_city')}  
                        </td>

                        <td>
                            {this.state.LANGUAGE.t('concert_13_event')}
                        </td>
                        <td>
                            {this.state.LANGUAGE.t('concert_13_additional')}
                        </td>
                    </tr>
                    </a>
                <a href = "https://www.haus-marck.de/" target="_blank">
                    <tr>
                        <td>
                            <span className="concert-first-title">
                            {this.state.LANGUAGE.t('concert_12_date')}
                            </span>
                            <span className="concert-second-title">
                            {this.state.LANGUAGE.t('concert_12_place')}
                            </span>
                        </td>

                        <td>
                        {this.state.LANGUAGE.t('concert_12_city')}  
                        </td>

                        <td>
                            {this.state.LANGUAGE.t('concert_12_event')}
                        </td>
                        <td>
                            {this.state.LANGUAGE.t('concert_12_additional')}
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

