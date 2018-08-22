import React from 'react'
import AOSPic from '../images/aos/pic.png'

const AOS = () => (
<div className="projectContainer">
          
    <div className="projectInfo">

        <div className="projectDescription">

            <div className="info">
                <h1>info</h1>
                <p>
                Art of Sport is a complete line of high performance body and skin care products.</p><br/>
                <p>
                    Art of Sport was a client for Use All Five, a digital design and development agency I interned at. 
                </p>
                <br/>
                <p><a target="_blank" href="https://artofsport.com/">Art Of Sport Launch Site</a></p>
            </div>

            <div className="theFeatures">
                <h2> what I learned </h2>
                <ul className="features">
                    <li><span className="boldItalicRed"> >> </span>YAML </li>
                    <li><span className="boldItalicRed"> >> </span>GatsbyJS </li>
                </ul>
            </div>

        </div>

        <div className="role">
            <h1>details</h1>
              <ul>
                <li><span className="labels">role:</span> Developer </li>
                <li><span className="labels">employer:</span> Use All Five </li>
                <li><span className="labels">year:</span> 2018 </li>
                <li><span className="labels">tools:</span> React, GatsbyJS, HTML, SCSS </li>
              </ul>
        </div>   
    </div>

    <div className="projectSources">

      <div className="projectImage">
        <a target="_blank" href={AOSPic}><img src={AOSPic} alt="Screenshot of Move Mirror website" /></a>
        <p className="projectDescriptionCaptions">Art of Sport Landing</p>
      </div>

    </div>

</div>

)

export default AOS 