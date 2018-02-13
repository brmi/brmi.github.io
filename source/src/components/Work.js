import React, { Component } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import PersonalSite from './PersonalSite'
import StabilityDashboard from './StabilityDashboard'
import UnchartedWaters from './UnchartedWaters'
import FindPOC from './FindPOC'
import PigGame from './PigGame'
import DiscoverLately from './DiscoverLately'


class Work extends Component{

	constructor () {
	    super()
	    this.state = {
	      isHiddenPersonalSite: true,
	      isHiddenStabilityDashboard: true,
	      isHiddenUnchartedWaters: true,
	      isHiddenFindPOC: true,
	      isHiddenPigGame: true,
	      isHiddenDiscoverLately: true
	    }
	  }

	toggleHiddenPersonalSite () {
	    this.setState({
	      isHiddenPersonalSite: !this.state.isHiddenPersonalSite
	    })
  	}

  	toggleHiddenStabilityDashboard() {
  		this.setState({
  			isHiddenStabilityDashboard: !this.state.isHiddenStabilityDashboard
  		})
  	}

  	toggleHiddenUnchartedWaters() {
  		this.setState({
  			isHiddenUnchartedWaters: !this.state.isHiddenUnchartedWaters
  		})
  	}

  	toggleHiddenFindPOC() {
  		this.setState({
  			isHiddenFindPOC: !this.state.isHiddenFindPOC
  		})
  	}

  	toggleHiddenPigGame () {
	    this.setState({
	      isHiddenPigGame: !this.state.isHiddenPigGame
	    })
  	}

  	toggleHiddenDiscoverLately () {
	    this.setState({
	      isHiddenDiscoverLately: !this.state.isHiddenDiscoverLately
	    })
  	}

  	render(){
  		return(

		  <div className="workContainer">

		  	<div className="workItem" onClick={this.toggleHiddenDiscoverLately.bind(this)}>
		    	<div className="workInfo">
			    	<h2> Discover Lately </h2>
			    	<h3> Side Project, 2018 </h3>
		    	</div>
		    	<div className="workDescription">
		    		<p> Side project to utilize the Spotify API & get more familiar with React</p>
		    	</div>
			</div>
			    <ReactCSSTransitionGroup transitionName="anim" transitionAppear={false}  transitionEnter={true} transitionEnterTimeout={300} transitionLeave={false}>
			    {!this.state.isHiddenDiscoverLately && <DiscoverLately />}
			    </ReactCSSTransitionGroup>
			<div className="line"></div>

		  	<div className="workItem" onClick={this.toggleHiddenPigGame.bind(this)}>
		    	<div className="workInfo">
			    	<h2> Pig Game </h2>
			    	<h3> Side Project, 2017 </h3>
		    	</div>
		    	<div className="workDescription">
		    		<p> Side project to better understand plain Javascript </p>
		    	</div>
			</div>
			    <ReactCSSTransitionGroup transitionName="anim" transitionAppear={false}  transitionEnter={true} transitionEnterTimeout={300} transitionLeave={false}>
			    {!this.state.isHiddenPigGame && <PigGame />}
			    </ReactCSSTransitionGroup>
			<div className="line"></div>

		  	<div className="workItem" onClick={this.toggleHiddenPersonalSite.bind(this)}>
		    	<div className="workInfo">
			    	<h2> Personal Site </h2>
			    	<h3> Fall 2017 </h3>
		    	</div>
		    	<div className="workDescription">
		    		<p> Redesign & Implementation of personal website </p>
		    	</div>
		    </div>
		    <ReactCSSTransitionGroup transitionName="anim" transitionAppear={false}  transitionEnter={true} transitionEnterTimeout={300} transitionLeave={false}>
		    {!this.state.isHiddenPersonalSite && <PersonalSite />}
		    </ReactCSSTransitionGroup>
		    <div className="line"></div>

		    <div className="workItem" onClick={this.toggleHiddenStabilityDashboard.bind(this)}>
		    	<div className="workInfo">
			    	<h2> Stability Dashboard </h2>
			    	<h3> Qualcomm, 2016 </h3>
		    	</div>
		    	<div className="workDescription">
		    		<p> Redesign & Implementation of Issue Tracking Software </p>
		    	</div>
		    </div>
		    <ReactCSSTransitionGroup transitionName="anim" transitionAppear={false}  transitionEnter={true} transitionEnterTimeout={300} transitionLeave={false}>
		    {!this.state.isHiddenStabilityDashboard && <StabilityDashboard />}
		    </ReactCSSTransitionGroup>
		    <div className="line"></div>

		    <div className="workItem" onClick={this.toggleHiddenUnchartedWaters.bind(this)}>
		    	<div className="workInfo">
			    	<h2> Uncharted Waters </h2>
			    	<h3> Daily Bruin, 2016 </h3>
		    	</div>
		    	<div className="workDescription">
		    		<p> Daily Bruin Flatpage to enchance story</p>
		    	</div>
		    </div>
		    <ReactCSSTransitionGroup transitionName="anim" transitionAppear={false}  transitionEnter={true} transitionEnterTimeout={300} transitionLeave={false}>
		    {!this.state.isHiddenUnchartedWaters && <UnchartedWaters />}
		    </ReactCSSTransitionGroup>
		    <div className="line"></div>

		    <div className="workItem" onClick={this.toggleHiddenFindPOC.bind(this)}>
		    	<div className="workInfo">
			    	<h2> Find the POC! </h2>
			    	<h3> Qualcomm, 2015 </h3>
		    	</div>
		    	<div className="workDescription">
		    		<p> Design & Development of in house tool to quickly find the point of contact for a specific file </p>
		    	</div>
		    </div>
		    <ReactCSSTransitionGroup transitionName="anim" transitionAppear={false}  transitionEnter={true} transitionEnterTimeout={300} transitionLeave={false}>
		    {!this.state.isHiddenFindPOC && <FindPOC />}
		    </ReactCSSTransitionGroup>
		    
		  </div>
		);
  	}
}

export default Work;
