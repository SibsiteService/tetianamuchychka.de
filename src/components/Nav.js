import React from "react";
import {LanguageContext} from "./internal/languages/LanguageContext"

export default class Nav  extends React.Component{


    componentDidMount()
    {
      let dropdown = document.getElementsByClassName('dropdown-item')[0];
      dropdown=dropdown.querySelector('a');
      dropdown.onclick= this.toggleDropDown;
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

    toggleDropDown(e)
    {
        let dropdown = document.getElementsByClassName('dropdown-submenu')[0];
        console.log(e.target);
        if(dropdown.classList.contains('dropdown-submenu-enabled'))
        {
            dropdown.classList.remove('dropdown-submenu-enabled');
            dropdown.classList.add('dropdown-submenu-disabled');
            
        }
        else
        {
            dropdown.classList.add('dropdown-submenu-enabled');
            dropdown.classList.remove('dropdown-submenu-disabled');
        }
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
                        <div className="flex-column menu-item">
                            <a href={"/?lang="+ LANGUAGE.currentLang()}>{LANGUAGE.t('Willkomen')}</a>
                            <div className="underline"/>
                        </div>

                        <div className="flex-column menu-item">
                            <a href={"/biography/?lang="+ LANGUAGE.currentLang()}>{LANGUAGE.t('Biographie')}</a>
                            <div className="underline"/>
                        </div>
                        
                        <div className="flex-column menu-item dropdown-item">
                            <a href="#">{LANGUAGE.t('Media')}</a>
                            <div className="underline"/>

                            <div className="dropdown-submenu">
                                <a href={"/music/?lang="+ LANGUAGE.currentLang()}>{LANGUAGE.t('Audio')}</a>
                                <a href={"/video/?lang="+ LANGUAGE.currentLang()}>{LANGUAGE.t('Videos')}</a>
                                <a href={"/photo/?lang="+ LANGUAGE.currentLang()}>{LANGUAGE.t('Photos')}</a>
                                
                            </div>
                        </div>
        
                        <div className="flex-column menu-item">
                            <a href={"/concerts/?lang="+ LANGUAGE.currentLang()}>{LANGUAGE.t('Konzerte')}</a>
                            <div className="underline"/>
                        </div>
        
                        <div className="flex-column menu-item">
                            <a href={"/media/?lang="+ LANGUAGE.currentLang()}>{LANGUAGE.t('Presse')}</a>
                            <div className="underline"/>
                        </div>

                        <div className="flex-column menu-item">
                            <a href={"/contacts/?lang="+ LANGUAGE.currentLang()}>{LANGUAGE.t('Kontakt')}</a>    
                            <div className="underline"/>
                        </div>
        
                        <div className="flex-row lang-buttons-container">
                            <button className= {"language-button"+ (LANGUAGE.currentLang()=='de'?' active-language-button':'') } onClick={this.selectLenguage.bind(this,'de')}>DE</button>          
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