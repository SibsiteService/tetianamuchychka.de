import React from "react";
import {LanguageContext} from "./internal/languages/LanguageContext"

export default class Nav  extends React.Component{


    componentDidMount()
    {
       // window.onscroll = this.handleStickyNav;
    }
    toggleMenu()
    {
        let toggle = document.getElementById('toggleButton');
        let nav = document.getElementById('nav');

        if(!toggle.classList.contains("active-toggle"))
        {
            toggle.classList.add("active-toggle");
            nav.classList.add("active-menu");
        }
        else
        {
            toggle.classList.remove("active-toggle");
            nav.classList.remove("active-menu");
        }
    }

    selectLenguage(lang,e)
    {
        this.props.toggleLanguage(lang);

        var activeButton = document.getElementsByClassName("active-language-button")[0];
        activeButton.classList.remove('active-language-button');

        if(!e.target.classList.contains('active-language-button'))
        {
            e.target.classList.add('active-language-button');
        }
    }

    handleStickyNav(e)
    {
        let nav = document.getElementById("nav");
        nav.style.top = window.pageYOffset+'px';
    }

    render(){
        return(  
            <LanguageContext.Consumer>
                {
                     LANGUAGE => (
                        <nav id="nav" className="flex-row flex-sa nav-container">
                        <div id="toggleButton" className="toggle-button" onClick={this.toggleMenu}>
                            <span id="accordeon-menu-strip1" className="accordeon-menu-strip"/>
                            <span id="accordeon-menu-strip2" className="accordeon-menu-strip"/>
                            <span id="accordeon-menu-strip3" className="accordeon-menu-strip"/>
                            <span id="accordeon-menu-strip4" className="accordeon-menu-strip"/>
                        </div>

                        <div className="nav-content">
                        <div className="flex-column">
                            <a href={"/?lang="+ LANGUAGE.currentLang()}>{LANGUAGE.t('home')}</a>
                            <div className="underline"/>
                        </div>
        
                        <div className="flex-column">
                            <a href={"/music/?lang="+ LANGUAGE.currentLang()}>{LANGUAGE.t('music')}</a>
                            <div className="underline"/>
                        </div>

                        <div className="flex-column">
                            <a href={"/biography/?lang="+ LANGUAGE.currentLang()}>{LANGUAGE.t('biography')}</a>
                            <div className="underline"/>
                        </div>
        
                        <div className="flex-column">
                            <a href="about">{LANGUAGE.t('news')}</a>
                            <div className="underline"/>
                        </div>
        
                        <div className="flex-column">
                            <a href="#">{LANGUAGE.t('media')}</a>
                            <div className="underline"/>
                        </div>
        
                        <div className="flex-column">
                            <a href="#">{LANGUAGE.t('contact')}</a>    
                            <div className="underline"/>
                        </div>
        
                        <div className="flex-row lang-buttons-container">
                            <button className= {"language-button"+ (LANGUAGE.currentLang()=='de'?' active-language-button':'') } onClick={this.selectLenguage.bind(this,'de')}>DE</button>
                            <button className= {"language-button"+ (LANGUAGE.currentLang()=='en'?' active-language-button':'') } onClick={this.selectLenguage.bind(this,'en')}>EN</button>
                            <button className= {"language-button"+ (LANGUAGE.currentLang()=='ru'?' active-language-button':'') } onClick={this.selectLenguage.bind(this,'ru')}>RU</button>           
                        </div>    
                        </div>
                        
                    </nav>
                    )   
                }
            </LanguageContext.Consumer>       
        );
    }
}

Nav.contextType = LanguageContext; 