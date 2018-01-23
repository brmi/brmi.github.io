import React from 'react'

const DiscoverLately = () => (
<div className="projectContainer">
          
    <div className="projectInfo">

        <div className="projectDescription">

            <div className="info">
                <h1>info</h1>
                <p>
                  Discover Lately is a web app that allows the user to see their most frequently played songs on Spotify and export those songs 
                  to a playlist on Spotify. 
                </p>
                <br/>
                <p><a target="_blank" href="http://discoverlately-backend.herokuapp.com/login">Discover your latest tracks!</a></p>
            </div>

            <div className="theFeatures">
                <h2> what I learned </h2>
                <ul className="features">
                    <li><span className="boldItalicRed"> >> </span>How to use Web APIs (specifically Spotify) </li>
                    <li><span className="boldItalicRed"> >> </span>Taste of Oauth</li>
                    <li><span className="boldItalicRed"> >> </span>React props</li>
                </ul>
            </div>

            <div className="theFeatures">
                <h2> future plans </h2>
                <ul className="features">
                    <li><span className="boldItalicRed"> >> </span>Make it faster! </li>
                    <li><span className="boldItalicRed"> >> </span>Make url less weird</li>
                    <li><span className="boldItalicRed"> >> </span>Add loading animations</li>
                    <li><span className="boldItalicRed"> >> </span>See what geographic location a track is listened to most</li>
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
</div>

)

export default DiscoverLately 



