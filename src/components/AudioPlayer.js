import React from "react";
import {LanguageContext} from "./internal/languages/LanguageContext"



export default class AudioPlayer  extends React.Component{


    state={}

    constructor(props)
    {
        super(props);
        this.toggleAudio =  this.toggleAudio.bind(this);
        this.stopAudio =  this.stopAudio.bind(this);     
    }

    toggleAudio(e)
    {
        
        let audio = e.target.parentNode.querySelector('audio');
        let controlButton = e.target;
        let timeStrip = e.target.parentNode.querySelector('.time-strip');
        
        if(audio.paused == false)
        {
            audio.pause();

            controlButton.classList.add('fa-play');
            controlButton.classList.remove('fa-pause');

            clearInterval(this.state.intervalID);
        }
        else
        {
            audio.play();
           
            controlButton.classList.remove('fa-play');
            controlButton.classList.add('fa-pause');

            this.state.intervalID = setInterval(function(){
            timeStrip.style.width = parseInt(timeStrip.style.width || getComputedStyle(timeStrip)['width'], 10)+1+'px';
            }, 1000);
        }

    }

    toggleVolume(e)
    {
        
        let audio = e.target.parentNode.querySelector('audio');
        let controlButton = e.target;
 
        if(audio.muted == false)
        {
            audio.muted = true;

            controlButton.classList.remove('fa-volume-up');
            controlButton.classList.add('fa-volume-off');
        }
        else
        {
            audio.muted = false;

            controlButton.classList.remove('fa-volume-off');
            controlButton.classList.add('fa-volume-up');
        }
        
    }

    stopAudio(e)
    {
        clearInterval(this.state.intervalID);

        let controlButton = e.target.parentNode.querySelector('.control-button');
        let timeStrip = e.target.parentNode.querySelector('.time-strip');

        controlButton.classList.add('fa-play');
        controlButton.classList.remove('fa-pause');
      
        timeStrip.style.width = 0 +'px';   
    }

    rewindAudio(e)
    {
        let audio = e.target.parentNode.querySelector('audio');
        let timeStrip = e.target.querySelector('.time-strip');
        let timeStripContainer = e.target;

        let k = timeStripContainer.offsetWidth/ audio.duration * (e.clientX-timeStripContainer.offsetLeft);

        timeStrip.style.width = k+'px';

        audio.currentTime = k/timeStripContainer.offsetWidth *audio.duration;
    }

    render(){
        return(  
            <LanguageContext.Consumer>
                {
                     LANGUAGE => (
                         <div className="flex-column audio-player-container">
                            <span className="track-title">{this.props.trackName}</span>
                             <div className="flex-row flex-sa audio-player-body">
                                 <button onClick={this.toggleAudio} className="control-button fa fa-play"></button>

                                 <div onClick={this.rewindAudio} className="time-strip-container">       
                                    <div className="time-strip-underlay">
                                       <div className="time-strip"></div>
                                    </div>
                                 </div>

                                 <button onClick={this.toggleVolume} className="control-button fa fa-volume-up"></button>

                                <audio onEnded={this.stopAudio} src={this.props.audioSrc} controls></audio>
                             </div>
                         </div>
                    )   
                }
            </LanguageContext.Consumer>       
        );
    }
}

AudioPlayer.contextType = LanguageContext; 