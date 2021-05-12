import React from 'react'
import DiscoverLatelyPic from '../images/discoverLately/discoverLately.png'

const DiscoverLately = () => (
<div className="projectContainer">
          
    <div className="projectInfo">

        <div className="projectDescription">

            <div className="info">
                <h1>info</h1>
                <p>
                  Discover Lately is a web app that allows the user to see their 20 most frequently played songs on Spotify and export those songs 
                  to a playlist on Spotify. 
                </p>
                <br/>
                <p><a target="_blank" href="http://discoverlately.herokuapp.com">Discover your latest tracks!</a></p>
            </div>

            <div className="theFeatures">
                <h2> what I learned </h2>
                <ul className="features">
                    <li><span className="boldItalicRed"> >> </span>How to use Web APIs (specifically Spotify) </li>
                    <li><span className="boldItalicRed"> >> </span>Taste of Oauth</li>
                    <li><span className="boldItalicRed"> >> </span>React props</li>
                </ul>
            </div>

        </div>

        <div className="role">
            <h1>details</h1>
              <ul>
                <li><span className="labels">role:</span> Developer </li>
                <li><span className="labels">employer:</span> Side Project </li>
                <li><span className="labels">year:</span> 2018 </li>
                <li><span className="labels">tools:</span> Javascript, React </li>
              </ul>
        </div>   
    </div>

    <div className="projectSources">

      <div className="projectImage">
        <a target="_blank" href={DiscoverLatelyPic}><img src={DiscoverLatelyPic} alt="Screenshot of Discover Lately website" /></a>
        <p className="projectDescriptionCaptions">Example of what Discover Lately looks like. Here are my current top songs!</p>
      </div>

    </div>

</div>



)

export default DiscoverLately 



