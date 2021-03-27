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

              <span className="biography-title">{this.state.LANGUAGE.t('Konzerte')}</span>

              <table className="concert-table">
                <tbody>
                <a>
                    <tr>
                        <td>
                            <span className="concert-first-title">
                            9 Februar 2021, 16:00
                            </span>
                            <span className="concert-second-title">
                            Bürgermeisterhaus Essen
                            </span>
                        </td>
                        <td>Essen, Deutschland</td>
                        <td>Live Music Now e. V. Rhein-Ruhr</td>
                        <td>Mit Timon Knöll (Klarinette)</td>
                    </tr>
                 </a>
                <a href = "https://www.t-a-s.net/seniorenwohnheime/marienheim/aktuelles/live-music-now-zu-gast-im-marienheim/" target="_blank">
                    <tr>
                        <td>
                            <span className="concert-first-title">
                            16 September 2020, 15:30
                            </span>
                            <span className="concert-second-title">
                            Kath. Marienheim
                            </span>
                        </td>
                        <td>Essen, Deutschland</td>
                        <td>Live Music Now e. V. Rhein-Ruhr</td>
                        <td>Mit Timon Knöll (Klarinette)</td>
                    </tr>
                 </a>
                <a href = "https://livemusicnow-rheinruhr.de/kalender/" target="_blank">
                    <tr>
                        <td>
                            <span className="concert-first-title">
                            25 Juni 2020, 15:00
                            </span>
                            <span className="concert-second-title">
                            Ev. Seniorenzentrum
                            </span>
                        </td>
                        <td>Essen Werden, Deutschland</td>
                        <td>Live Music Now e. V. Rhein-Ruhr</td>
                        <td>Mit Timon Knöll (Klarinette)</td>
                    </tr>
                 </a>
                <a href = "https://www.pressreader.com/germany/rheinische-post/20200520/282222307951456" target="_blank">
                    <tr>
                        <td>
                            <span className="concert-first-title">
                            20 Mai 2020, 16:00
                            </span>
                            <span className="concert-second-title">
                            Johanniter-Stift
                            </span>
                        </td>
                        <td>Meerbusch, Deutschland</td>
                        <td>Live Music Now e. V. Rhein-Ruhr</td>
                        <td>Mit Mihajlo Milosev (Akkordeon)</td>
                    </tr>
                 </a>
               <a href = "https://www.wasgehtheuteab.de/bochum/e/97dbdecd-a822-444b-b365-4dc3825e689b" target="_blank">
                    <tr>
                        <td>
                            <span className="concert-first-title">
                            16 Februar 2020, 15:00
                            </span>
                            <span className="concert-second-title">
                            Anneliese Brost Musikforum Ruhr
                            </span>
                        </td>
                        <td>Bochum, Deutschland</td>
                        <td>Musikschule Bochum mit Dennis Freundel (Gitarre)</td>
                        <td>Werke von Carulli, Mendelssohn, Villa-Lobos, Piazzolla, Mees</td>
                    </tr>
                 </a>   
                <a href = "https://livemusicnow-rheinruhr.de/kalender/" target="_blank">
                    <tr>
                        <td>
                            <span className="concert-first-title">
                            13 Februar 2020,  16:00
                            </span>
                            <span className="concert-second-title">
                            Altenzentrum Stammhaus
                            </span>
                        </td>
                        <td>Düsseldorf, Deutschland</td>
                        <td>Live Music Now e. V. Rhein-Ruhr mit Mihajlo Milosev (Akkordeon)</td>
                        <td></td>
                    </tr>
                 </a>   
                 <a href = "https://livemusicnow-rheinruhr.de/kalender/" target="_blank">
                    <tr>
                        <td>
                            <span className="concert-first-title">
                            4 Februar 2020,  9:00
                            </span>
                            <span className="concert-second-title">
                            GGS Sandstraße
                            </span>
                        </td>
                        <td>Duisburg-Marxloh, Deutschland</td>
                        <td>Live Music Now e. V. Rhein-Ruhr mit Timon Knöll (Klarinette)</td>
                        <td></td>
                    </tr>
                    </a> 
                    <a href = "https://www.folkwang-uni.de/home/hochschule/veranstaltungen/veranstaltungen-des-laufenden-monats/veranstaltung-detail/11056-klassenabend-akkordeon/" target="_blank">
                    <tr>
                        <td>
                            <span className="concert-first-title">
                            30 April 2020, 17:00
                            </span>
                            <span className="concert-second-title">
                            KABAWIL-Hinterhof
                            </span>
                        </td>
                        <td>Düsseldorf, Deutschland</td>
                        <td>KABAWIL e. V.</td>
                        <td>Mit Dennis Freundel (Gitarre)</td>
                    </tr>
                    </a>
                    <a href = "https://www.novavita.com/" target="_blank">
                    <tr>
                        <td>
                            <span className="concert-first-title">
                            31 Dezember 2019,  18:00
                            </span>
                            <span className="concert-second-title">
                            Nova Vita Residenz
                            </span>
                        </td>
                        <td>Essen, Deutschland</td>
                        <td>Silvester in der Nova Vita Residenz mit Dennis Freundel (Gitarre)</td>
                        <td></td>
                    </tr>
                    </a> 
                    <a href = "https://www.karlschule-essen.de/termine/" target="_blank">
                    <tr>
                        <td>
                            <span className="concert-first-title">
                            7 November 2019,  8:45
                            </span>
                            <span className="concert-second-title">
                            GGS, Karlschule
                            </span>
                        </td>
                        <td>Essen, Deutschland</td>
                        <td>Live Music Now e. V. Rhein-Ruhr mit Timon Knöll (Klarinette)</td>
                        <td></td>
                    </tr>
                    </a> 
                    <a href = "https://www.wir-lieben-bottrop.de/veranstaltungen/tetiana-muchychka-akkordeon/" target="_blank">
                    <tr>
                        <td>
                            <span className="concert-first-title">
                            30 Oktober 2019
                            </span>
                            <span className="concert-second-title">
                            Kammerkonzertsaal im Kulturzentrum August Everding
                            </span>
                        </td>
                        <td>Bottrop, Deutschland</td>
                        <td>Konzertreihe „Best of NRW“ - Konzert & Künstleragentur Jens Gunnar Becker</td>
                        <td></td>
                    </tr>
                    </a> 
                    <a href = "https://www.beethoven.de/de/konzerte" target="_blank">
                    <tr>
                        <td>
                            <span className="concert-first-title">
                            20 Oktober 2019,  18:00
                            </span>
                            <span className="concert-second-title">
                            Kammermusiksaal Beethoven-Haus
                            </span>
                        </td>
                        <td>Bonn, Deutschland</td>
                        <td>Konzertreihe „Best of NRW“ - Konzert & Künstleragentur Jens Gunnar Becker</td>
                        <td></td>
                    </tr>
                    </a> 
                    <a href = "https://www.lokalplus.nrw/nachrichten/kultur-finnentrop/best-of-nrw-1-mit-tetiana-muchychka-in-schoss-bamenohl-37545" target="_blank">
                    <tr>
                        <td>
                            <span className="concert-first-title">
                            10 Oktober 2019,  19:00
                            </span>
                            <span className="concert-second-title">
                            Schloss Bamenohl
                            </span>
                        </td>
                        <td>Finnentrop, Deutschland</td>
                        <td>Konzertreihe „Best of NRW“ - Konzert & Künstleragentur Jens Gunnar Becker</td>
                        <td></td>
                    </tr>
                    </a> 
                    <a href = "https://www.kulturforum-witten.de/saalbauhauswitten/hauswitten/veranstaltungen/?event_id=109448&active_timestamp=1570572000&calendars=38" target="_blank">
                    <tr>
                        <td>
                            <span className="concert-first-title">
                            9 Oktober 2019, 19:30
                            </span>
                            <span className="concert-second-title">
                            Saalbau Haus Witten
                            </span>
                        </td>
                        <td>Witten, Deutschland</td>
                        <td>Konzertreihe „Best of NRW“ - Konzert & Künstleragentur Jens Gunnar Becker</td>
                        <td></td>
                    </tr>
                    </a>
                    <a href = "https://www.musikverein-unna.de/programmleser/events/id-1-meisterkonzert-524.html" target="_blank">
                    <tr>
                        <td>
                            <span className="concert-first-title">
                            6 Oktober 2019,  18:00
                            </span>
                            <span className="concert-second-title">
                            Erich Göpfert Stadthalle
                            </span>
                        </td>
                        <td>Unna, Deutschland</td>
                        <td>Konzertreihe „Best of NRW“ - Konzert & Künstleragentur Jens Gunnar Becker</td>
                        <td></td>
                    </tr>
                    </a> 
                    <a href = "https://www.wn.de/Muensterland/Kreis-Coesfeld/Senden/3976837-Tetiana-Muchychka-Vielfach-preisgekroent-Ein-Konzert-der-Superlative" target="_blank">
                    <tr>
                        <td>
                            <span className="concert-first-title">
                            29 September 2019,  19:30
                            </span>
                            <span className="concert-second-title">
                            Bürgersaal des Rathauses
                            </span>
                        </td>
                        <td>Senden, Deutschland</td>
                        <td>Konzertreihe „Best of NRW“ - Konzert & Künstleragentur Jens Gunnar Becker</td>
                        <td></td>
                    </tr>
                    </a> 
                    <a href = "https://www.apollosiegen.de/veranstaltungen/tetiana-muchychka-akkordeon/" target="_blank">
                    <tr>
                        <td>
                            <span className="concert-first-title">
                            28 September 2019,  20:00
                            </span>
                            <span className="concert-second-title">
                            Apollo-Theater
                            </span>
                        </td>
                        <td>Siegen, Deutschland</td>
                        <td>Konzertreihe „Best of NRW“ - Konzert & Künstleragentur Jens Gunnar Becker</td>
                        <td></td>
                    </tr>
                    </a> 
                    <a href = "https://www.schwelm.de/aktuelles/kalender/veranstaltungen/?event_id=105899&active_timestamp=1569535200" target="_blank">
                    <tr>
                        <td>
                            <span className="concert-first-title">
                            27 September 2019,  20:00
                            </span>
                            <span className="concert-second-title">
                            Kulturfabrik Ibach-Haus e.V.
                            </span>
                        </td>
                        <td>Schwelm, Deutschland</td>
                        <td>Konzertreihe „Best of NRW“ - Konzert & Künstleragentur Jens Gunnar Becker</td>
                        <td></td>
                    </tr>
                    </a> 
                    <a href = "https://www.moenchengladbach.de/de/aktuell-aktiv/veranstaltungskalender/veranstaltung/tetiana-muchychka/" target="_blank">
                    <tr>
                        <td>
                            <span className="concert-first-title">
                            25 September 2019,  20:00
                            </span>
                            <span className="concert-second-title">
                            „Kunstsignal“ im Alten Bahnhof Geneicken
                            </span>
                        </td>
                        <td>Mönchengladbach, Deutschland</td>
                        <td>Konzertreihe „Best of NRW“ - Konzert & Künstleragentur Jens Gunnar Becker</td>
                        <td></td>
                    </tr>
                    </a> 
                    <a href = "https://www.stadtlohn.de/bildung-und-kultur/kultur/konzerte/2019-07-19/sonntag-22.-september-2019-18-00-uhr.html" target="_blank">
                    <tr>
                        <td>
                            <span className="concert-first-title">
                            22 September 2019,  18:00
                            </span>
                            <span className="concert-second-title">
                            Konzertaula Geschwister-Scholl-Gymnasium
                            </span>
                        </td>
                        <td>Stadtlohn, Deutschland</td>
                        <td>Konzertreihe „Best of NRW“ - Konzert & Künstleragentur Jens Gunnar Becker</td>
                        <td></td>
                    </tr>
                    </a> 
                    <a href = "https://www.lokalkompass.de/event/essen-borbeck/c-kultur/schwebende-klaenge-auf-dem-akkordeon-mit-tetiana-muchychka_e277989" target="_blank">
                    <tr>
                        <td>
                            <span className="concert-first-title">
                            20 September 2019,  19:00
                            </span>
                            <span className="concert-second-title">
                            Schloss Borbeck
                            </span>
                        </td>
                        <td>Essen</td>
                        <td>Konzertreihe „Best of NRW“ - Konzert & Künstleragentur Jens Gunnar Becker</td>
                        <td></td>
                    </tr>
                    </a>
                    <tr>
                        <td>
                            <span className="concert-first-title">
                            18 September 2019,  14:00
                            </span>
                            <span className="concert-second-title">
                            Therapiezentrum
                            </span>
                        </td>
                        <td>Düsseldorf, Deutschland</td>
                        <td>Live Music Now e. V. Rhein-Ruhr mit Mihajlo Milosev (Akkordeon)</td>
                        <td>Werke von A. Dvorak, M. Moszkowski, E. Grieg, F. Angelis, J. Haydn</td>
                    </tr>
                    
                    <a href = "https://kreis-borken.de/de/service/aktuelles/aktuelle-pressemeldungen/?tx_news_pi1%5Bnews%5D=3477&tx_news_pi1%5Bcontroller%5D=News&tx_news_pi1%5Baction%5D=detail&cHash=bba8d4ed12ec284c138d8f9327892394" target="_blank">
                    <tr>
                        <td>
                            <span className="concert-first-title">
                            15 September 2019,  17:00
                            </span>
                            <span className="concert-second-title">
                            Schloss Raesfeld
                            </span>
                        </td>
                        <td>Schloss Raesfeld, Deutschland</td>
                        <td>Konzertreihe „Best of NRW“ - Konzert & Künstleragentur Jens Gunnar Becker</td>
                        <td></td>
                    </tr>
                    </a> 
                    <a href = "https://www.herdecke.de/rathaus-buergerservice/aktuelles-aus-herdecke/nachrichten/detailansicht/news/akkordeonistin-tatiana-muchychka-tritt-im-rahmen-der-konzertreihe-best-of-nrw-im-werner-richard-sa.html?tx_news_pi1%5Bcontroller%5D=News&tx_news_pi1%5Baction%5D=detail&cHash=cd00b58b965ef2be932c114a0eb6d089" target="_blank">
                    <tr>
                        <td>
                            <span className="concert-first-title">
                            8 September 2019,  19:00
                            </span>
                            <span className="concert-second-title">
                            Werner Richard Saal
                            </span>
                        </td>
                        <td>Herdecke, Deutschland</td>
                        <td>Konzertreihe „Best of NRW“ - Konzert & Künstleragentur Jens Gunnar Becker</td>
                        <td></td>
                    </tr>
                    </a> 
                    <tr>
                        <td>
                            <span className="concert-first-title">
                            6 September 2019,  19:00
                            </span>
                            <span className="concert-second-title">
                            Clubhaus SKHE
                            </span>
                        </td>
                        <td>Essen, Deutschland</td>
                        <td></td>
                        <td>Werke von J. S. Bach, J. Haydn, D. Scarlatti, P. I. Tschaikowski, F. Angelis</td>
                    </tr>
                    <a href = "https://www.folkwang-uni.de/home/hochschule/ueber-folkwang/campus/campus-duisburg/" target="_blank">
                    <tr>
                        <td>
                            <span className="concert-first-title">
                            12 Juli 2019,  19:30
                            </span>
                            <span className="concert-second-title">
                            Kleiner Konzertsaal, Folkwang Universität der Künste
                            </span>
                        </td>
                        <td>Duisburg, Deutschland</td>
                        <td>Frische Klänge</td>
                        <td>Werke von A. Logothetis Mäandros</td>
                    </tr>
                    </a> 
                <tr>
                        <td>
                            <span className="concert-first-title">
                            6 Juli 2019,  19:30
                            </span>
                            <span className="concert-second-title">
                            Orgelsaal, Folkwang Universität der Künste
                            </span>
                        </td>
                        <td>Essen Werden, Deutschland</td>
                        <td>Frische Klänge</td>
                        <td>Werke von G. Katzer</td>
                    </tr>
                             
                    <tr>
                        <td>
                            <span className="concert-first-title">
                            4 Juli 2019,  16:00
                            </span>
                            <span className="concert-second-title">
                            Torbogensaal, Folkwang Universität der Künste
                            </span>
                        </td>
                        <td>Essen Werden, Deutschland</td>
                        <td>Bachelor-Projekt Lecture Konzert unter einem Thema „Ost und West, Musik und Literatur“</td>
                        <td>Werke von J. S. Bach, W. Jacobi, G. Katzer, A. Kusjakov</td>
                    </tr>
                 
                <a href = "https://www.folkwang-uni.de/home/" target="_blank">
                    <tr>
                        <td>
                            <span className="concert-first-title">
                            28 Mai 2019,  19:30
                            </span>
                            <span className="concert-second-title">
                            Kleiner Konzertsaal, Folkwang Universität der Künste
                            </span>
                        </td>
                        <td>Duisburg, Deutschland</td>
                        <td>Klassenabend Akkordeon</td>
                        <td>Werke von P. I. Tschaikowski</td>
                    </tr>
                    </a> 
                <a href = "https://aip-unternehmensgruppe.de/2019/03/25/veranstaltungen-karstadt-re/" target="_blank">
                    <tr>
                        <td>
                            <span className="concert-first-title">
                            12 Mai 2019,  17:00
                            </span>
                            <span className="concert-second-title">
                            Karstadt-Gebäude & MQR MarkQuartier
                            </span>
                        </td>
                        <td>Recklinghausen</td>
                        <td>LES FLEURS DU MALE mit Dennis Freundel (Gitarre)</td>
                        <td></td>
                    </tr>
                    </a>     
                <a href = "https://www.theater-essen.de/spielplan/a-z/takeover-by-miki--namika-87857/" target="_blank">
                    <tr>
                        <td>
                            <span className="concert-first-title">
                            4 Mai 2019,  20:00
                            </span>
                            <span className="concert-second-title">
                            Philharmonie Essen
                            </span>
                        </td>
                        <td>Essen, Deutschland</td>
                        <td>Takeover Ensemble! By Miki & Namika</td>
                        <td></td>
                    </tr>
                    </a> 
                <a href = "https://www.folkwang-uni.de/home/hochschule/veranstaltungen/veranstaltungen-des-laufenden-monats/veranstaltung-detail/10505-klassenabend-akkordeon/" target="_blank">
                    <tr>
                        <td>
                            <span className="concert-first-title">
                            24 Januar 2019,  19:30
                            </span>
                            <span className="concert-second-title">
                            Pina Bausch Theater, Folkwang Universität der Künste
                            </span>
                        </td>
                        <td>Essen, Deutschland</td>
                        <td>Klassenabend Akkordeon</td>
                        <td>Werke von G. Katzer Toccata</td>
                    </tr>
                    </a> 
                <a href = "https://www.parkhaus-huegel.de/" target="_blank">
                    <tr>
                        <td>
                            <span className="concert-first-title">
                            8 Dezember 2018,  19:00
                            </span>
                            <span className="concert-second-title">
                            Parkhaus Hügel
                            </span>
                        </td>
                        <td>Essen, Deutschland</td>
                        <td>Live Music Now e. V. Rhein-Ruhr mit Dennis Freundel (Gitarre) und Valerie Eickhoff (Gesang)</td>
                        <td>Werke von A. Piazzolla, K. Weill</td>
                    </tr>
                    </a> 

                <a href = "https://www.folkwang-uni.de/home/" target="_blank">
                    <tr>
                        <td>
                            <span className="concert-first-title">
                            30 November 2018,  10:00
                            </span>
                            <span className="concert-second-title">
                            Kammermusiksaal, Folkwang Universität der Künste
                            </span>
                        </td>
                        <td>Essen, Deutschland</td>
                        <td>Folkwang Akkordeon Wettbewerb</td>
                        <td>Werke von J. S. Bach, W. A. Mozart, G. Katzer</td>
                    </tr>
                    </a>  
                <a href = "https://www.ggs-sonnenstrasse.de/" target="_blank">
                    <tr>
                        <td>
                            <span className="concert-first-title">
                            12 November 2018,  10:30
                            </span>
                            <span className="concert-second-title">
                            Grundschule Sonnenstraße
                            </span>
                        </td>
                        <td>Düsseldorf, Deutschland</td>
                        <td>Live Music Now e. V. Rhein-Ruhr mit Michailo Eraković, Akkordeon</td>
                        <td></td>
                    </tr>
                    </a>    
                <a href = "https://luise-leven-schule.lvr.de/de/nav_main/index.html" target="_blank">
                    <tr>
                        <td>
                            <span className="concert-first-title">
                            8 November 2018,  10:30
                            </span>
                            <span className="concert-second-title">
                            LVR Luise-Leven-Schule
                            </span>
                        </td>

                        <td>
                        Krefeld, Deutschland  
                        </td>

                        <td>
                            Live Music Now e. V. Rhein-Ruhr mit Michailo Eraković, Akkordeon
                        </td>
                        <td>
                            
                        </td>
                    </tr>
                    </a>    
                <a href = "https://www.karlschule-essen.de/" target="_blank">
                    <tr>
                        <td>
                            <span className="concert-first-title">
                            6 November 2018,  8:45
                            </span>
                            <span className="concert-second-title">
                            GGS, Karlschule
                            </span>
                        </td>

                        <td>
                        Essen, Deutschland  
                        </td>

                        <td>
                            Live Music Now e. V. Rhein-Ruhr mit Michailo Eraković, Akkordeon
                        </td>
                        <td>
                            {this.state.LANGUAGE.t("")}
                        </td>
                    </tr>
                    </a>
                <a href = "https://www.haus-marck.de/" target="_blank">
                    <tr>
                        <td>
                            <span className="concert-first-title">
                            4 November 2018,  16:00
                            </span>
                            <span className="concert-second-title">
                            Wasserschloss Haus Marck
                            </span>
                        </td>

                        <td>
                        Tecklenburg, Deutschland  
                        </td>

                        <td>
                            Werner Richard - Dr. Carl Dörken Stiftung
                        </td>
                        <td>
                            
                        </td>
                    </tr>
                    </a>
                <a href = "https://www.da-kunsthaus.de/" target="_blank">
                    <tr>
                        <td>
                            <span className="concert-first-title">
                            23 September 2018
                            </span>
                            <span className="concert-second-title">
                            Kunsthaus Kloster Gravenhorst
                            </span>
                        </td>

                        <td>
                        Hörstel, Deutschland  
                        </td>

                        <td>
                            Werner Richard - Dr. Carl Dörken Stiftung, Familienkonzert „Peter und der Wolf“
                        </td>
                        <td>
                            Werke von D. Scarlatti, E. Granados, E. Grieg
                        </td>
                    </tr>
                    </a>
                    <a href = "https://www.schloss-benrath.de/" target="_blank">
                    <tr>
                        <td>
                            <span className="concert-first-title">
                            15 September 2018
                            </span>
                            <span className="concert-second-title">
                            Schloss Benrath
                            </span>
                        </td>

                        <td>
                        Düsseldorf, Deutschland  
                        </td>

                        <td>
                            Wandelkonzert, Werner Richard - Dr. Carl Dörken Stiftung
                        </td>
                        <td>
                            Werke von J. S. Bach, J. Pachelbel
                        </td>
                    </tr>
                    </a>
                    <a href = "https://www.schloss-benrath.de/" target="_blank">
                    <tr>
                        <td>
                            <span className="concert-first-title">
                            14 September 2018
                            </span>
                            <span className="concert-second-title">
                            Schloss Benrath
                            </span>
                        </td>

                        <td>
                        Düsseldorf, Deutschland  
                        </td>

                        <td>
                            Werner Richard - Dr. Carl Dörken Stiftung
                        </td>
                        <td>
                            Werke von J. S. Bach, J. Pachelbel
                        </td>
                    </tr>
                    </a>
                    <a href = "https://www.konzertgesellschaft.com/" target="_blank">
                    <tr>
                        <td>
                            <span className="concert-first-title">
                            8 September 2018
                            </span>
                            <span className="concert-second-title">
                            Lukaskirche
                            </span>
                        </td>

                        <td>
                        Gevelsberg, Deutschland  
                        </td>

                        <td>
                            Konzertgesellschaft Gevelsberg, Werner Richard - Dr. Carl Dörken Stiftung
                        </td>
                        <td>
                            Werke von J. S. Bach, W.A. Mozart, J. Pachelbel,D. Scarlatti, M. Glinka, W. Jacobi
                        </td>
                    </tr>
                    </a>
                    <a href = "https://www.folkwang-uni.de/home/hochschule/ueber-folkwang/campus/campus-duisburg/" target="_blank">
                    <tr>
                        <td>
                            <span className="concert-first-title">
                            9 Juli 2018
                            </span>
                            <span className="concert-second-title">
                            Kleiner Konzertsaal, Folkwang Universität der Künste
                            </span>
                        </td>

                        <td>
                        Duisburg, Deutschland  
                        </td>

                        <td>
                            Klassenabend Akkordeon
                        </td>
                        <td>
                            W.A. Mozart Sonate Nr. 12
                        </td>
                    </tr>
                    </a>
                    
                    <a href = "https://akgs-duesseldorf.lms.schulon.org/" target="_blank">
                    <tr>
                        <td>
                            <span className="concert-first-title">
                            5 Juli 2018
                            </span>
                            <span className="concert-second-title">
                            GGS Adolf-Klarenbach-Schule
                            </span>
                        </td>

                        <td>
                        Düsseldorf, Deutschland  
                        </td>

                        <td>
                            Live Music Now e. V. Rhein-Ruhr mit Michailo Eraković, Akkordeon
                        </td>
                        <td>
                            
                        </td>
                    </tr>
                    </a>
                    <a href = "https://www.folkwang-uni.de/home/" target="_blank">
                    <tr>
                        <td>
                            <span className="concert-first-title">
                            21 Juni 2018
                            </span>
                            <span className="concert-second-title">
                            Kammermusiksaal, Folkwang Universität der Künste
                            </span>
                        </td>

                        <td>
                        Essen Werden, Deutschland  
                        </td>

                        <td>
                            Öffentliches Vorspiel für ein Musikstipendium
                        </td>
                        <td>
                            
                        </td>
                    </tr>
                    </a>
                    <a href = "https://www.cse.ruhr/soziales-gefaehrdetenhilfe/standort/3-cafe-schliessfach/" target="_blank">
                    <tr>
                        <td>
                            <span className="concert-first-title">
                            12 Juni 2018
                            </span>
                            <span className="concert-second-title">
                            Café Schließfach
                            </span>
                        </td>

                        <td>
                        Essen, Deutschland  
                        </td>

                        <td>
                            Live Music Now e.V. Rhein-Ruhr
                        </td>
                        <td>
                            Werke von J.S. Bach, W.A. Mozart, E. Granados, E. Grieg
                        </td>
                    </tr>
                    </a>
                    <a href = "https://www.doerken-stiftung.de/" target="_blank">
                    <tr>
                        <td>
                            <span className="concert-first-title">
                            10 Juni 2018
                            </span>
                            <span className="concert-second-title">
                            Werner Richard Saal
                            </span>
                        </td>

                        <td>
                        Herdecke, Deutschland  
                        </td>

                        <td>
                            Galakonzert der Stipendiaten der Werner Richard - Dr. Carl Dörken Stiftung
                        </td>
                        <td>
                            S. Voitenko „Offenbarung“
                        </td>
                    </tr>
                    </a>
                    <a href = "https://www.folkwang-uni.de/home/" target="_blank">
                    <tr>
                        <td>
                            <span className="concert-first-title">
                            4 Juni 2018
                            </span>
                            <span className="concert-second-title">
                            Kammermusiksaal, Folkwang Universität der Künste
                            </span>
                        </td>

                        <td>
                        Essen Werden, Deutschland  
                        </td>

                        <td>
                            Öffentliches Vorspiel für ein Musikstipendium der Werner Richard - Dr. Carl Dörken Stiftung
                        </td>
                        <td>
                            E. Granados aus „Spanische Tänze“
                        </td>
                    </tr>
                    </a>
                    <a href = "https://www.doerken-stiftung.de/" target="_blank">
                    <tr>
                        <td>
                            <span className="concert-first-title">
                            2 Juni 2018
                            </span>
                            <span className="concert-second-title">
                            Werner Richard Saal
                            </span>
                        </td>
                
                        <td>
                        Herdecke, Deutschland
                        </td>

                        <td>
                            Öffentliches Vorspiel für ein Musikstipendium der Werner Richard - Dr. Carl Dörken Stiftung
                        </td>
                        
                        <td class="click-raw">
                            
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

