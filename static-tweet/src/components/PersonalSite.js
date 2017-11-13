import React from 'react'

const PersonalSite = () => (
<div className="projectContainer">
          
    <div className="projectInfo">

        <div className="projectDescription">

            <div className="info">
                <h1>info</h1>
                <p>
                  I wanted to redesign my website to better reflect my personality! I also wanted to get a taste of 
                  what developing in React would be like. 
                </p>
            </div>

            <div className="theFeatures">
                <h2> what I learned </h2>
                <ul className="features">
                    <li><span className="boldItalicRed"> >> </span>flexbox</li>
                    <li><span className="boldItalicRed"> >> </span>Elementary React</li>
                    <li><span className="boldItalicRed"> >> </span>How to use states in React</li>
                    <li><span className="boldItalicRed"> >> </span>Basic CSS transitions</li>
                </ul>
            </div>

        </div>

        <div className="role">
            <h1>details</h1>
              <ul>
                <li><span className="labels">role:</span> Designer & Developer </li>
                <li><span className="labels">employer:</span> Side Project </li>
                <li><span className="labels">year:</span> 2017 </li>
                <li><span className="labels">tools:</span> React, HTML, CSS, Figma </li>
              </ul>
        </div>   
    </div>
</div>

)

export default PersonalSite 