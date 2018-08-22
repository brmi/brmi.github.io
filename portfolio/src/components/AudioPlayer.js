import React, { Component } from 'react'
import song from '../media/song.mp3'

class AudioPlayer extends Component{

	constructor () {
        super();
        var duration = 0;  // Duration of audio clip, calculated here for embedding purposes
        
        // timeline width adjusted for playhead
        var timelineWidth = 0; 

        // Boolean value so that audio position is updated only when the playhead is released
        var onplayhead = false;
      }

    componentDidMount() {
        this.timelineWidth = this.refs.timeline.offsetWidth - this.refs.playhead.offsetWidth;
    }
    
    // returns click as decimal (.77) of the total timelineWidth
    clickPercent(event) {
        console.log('clickpercent');
        return (event.clientX - this.getPosition(this.refs.timeline)) / this.timelineWidth;
    }
    
    
    timeline(event) {
        this.moveplayhead(event);
        this.refs.music.currentTime = this.duration * this.clickPercent(event);
    }
    
    
    // mouseDown EventListener
    mouseDown(event) {
        this.onplayhead = true;
        this.moveplayhead(event);
        this.refs.music.removeEventListener('timeupdate', this.timeUpdate, false);
    }
    
    // mouseUp EventListener
    // getting input from all mouse clicks
    mouseUp(event) {
        if (this.onplayhead == true) {
            this.moveplayhead(event);
            this.refs.music.currentTime = this.duration * this.clickPercent(event);
        }
        this.onplayhead = false;
    }

    // mousemove EventListener
    // Moves playhead as user drags
    moveplayhead(event) {
        var newMargLeft = event.clientX - this.getPosition(this.refs.timeline);
    
        if (newMargLeft >= 0 && newMargLeft <= this.timelineWidth) {
            this.refs.playhead.style.marginLeft = newMargLeft + "px";
        }
        if (newMargLeft < 0) {
            this.refs.playhead.style.marginLeft = "0px";
        }
        if (newMargLeft > this.timelineWidth) {
            this.refs.playhead.style.marginLeft = this.timelineWidth + "px";
        }
    }
    
    // timeUpdate
    // Synchronizes playhead position with current point in audio
    timeUpdate() {
        var playPercent = this.timelineWidth * (this.refs.music.currentTime / this.duration);
        this.refs.playhead.style.marginLeft = playPercent + "px";
        if (this.refs.music.currentTime == this.duration) {
            this.refs.pButton.className = "";
            this.refs.pButton.className = "play";
        }
    }
    
    //Play and Pause
    play() {
        // start music
        if (this.refs.music.paused) {
            this.refs.music.play();
            // remove play, add pause
            this.refs.pButton.className = "";
            this.refs.pButton.className = "pause";
        } else { // pause music
            this.refs.music.pause();
            // remove pause, add play
            this.refs.pButton.className = "";
            this.refs.pButton.className = "play";
        }
    }
    
    
    
    // getPosition
    // Returns elements left position relative to top-left of viewport
    getPosition(el) {
        return el.getBoundingClientRect().left;
    }
      

  	render(){
  		return(
		  <div className="audioplayer" onMouseUp={this.mouseUp.bind(this)}>
            <div className="songInfo">
                <p className="songName">Devuelveme a mi chica</p>
                <p className="artist">Hombres G</p>
            </div>
            <audio ref="music" id = "music" 
                    preload="true" 
                    onTimeUpdate={this.timeUpdate.bind(this)}
                    onLoadedMetadata={event => this.duration = event.target.duration}
            >
                <source src={song} />
            </audio>
            <div ref="audioplayer" id = "audioplayer">
                <button ref="pButton" id = "pButton" className="play" onClick={this.play.bind(this)}></button>
                <div ref="timeline" id = "timeline" onClick={this.timeline.bind(this)}>    
                    <div ref="playhead" id = "playhead" onDrag={this.mouseDown.bind(this)}></div>
                </div>
            </div>
		  </div>

		);
  	}
}

export default AudioPlayer;
