import React from "react";
import {LanguageContext} from "./internal/languages/LanguageContext"

import '../assets/css/music.css';

export default class AudioPlayer  extends React.Component{

    render(){
        return(  
            <LanguageContext.Consumer>
                {
                     LANGUAGE => (
                         <div className="flex-column audio-player-container">
                             <span className="track-title">Title</span>
                             <div className="flex-row flex-sa audio-player-body">
                                 <div className="control-button">Play</div>
                                <audio src={this.props.audioSrc} controls></audio>
                             </div>
                         </div>
                    )   
                }
            </LanguageContext.Consumer>       
        );
    }
}

AudioPlayer.contextType = LanguageContext; 