import React from 'react'

const PigGame = () => (
<div className="projectContainer">
          
    <div className="projectInfo">

        <div className="projectDescription">

            <div className="info">
                <h1>info</h1>
                <p>
                  Recreation of the Pig Game! Player 1 and Player 2 are competing to get to a score of 100 first! Each player can roll as many times as they want until
                  they roll a one. If a one is rolled, the current player loses out on all the score he/she accumulated during that round! The current score will go to zero and 
                  the turn will move on to the next player. If the player rolls two 6's in a row, both the current score and the round score are set to 0. 
                  Don't be too greedy ... or it'll cost you! 
                </p>
                <br/>
                <p>
                    This game was created by following a Udemy tutorial to learn the basics of Javascript.
                </p>
                <br/>
                <p>Functionality to set the winning game score and score deletion when the player has rolled two 6's in a row was added by me. </p>
                <br/>
                <p><a target="_blank" href="http://desireepiggame.surge.sh/">play the game!</a></p>
            </div>

            <div className="theFeatures">
                <h2> what I learned </h2>
                <ul className="features">
                    <li><span className="boldItalicRed"> >> </span>Hoisting </li>
                    <li><span className="boldItalicRed"> >> </span>Plain Javascript Selectors</li>
                    <li><span className="boldItalicRed"> >> </span>Scopes</li>
                    <li><span className="boldItalicRed"> >> </span>Execution Stack</li>
                    <li><span className="boldItalicRed"> >> </span>Message Queue & Event Listeners</li>
                    <li><span className="boldItalicRed"> >> </span>Type Coercion</li>
                </ul>
            </div>

        </div>

        <div className="role">
            <h1>details</h1>
              <ul>
                <li><span className="labels">role:</span> Developer </li>
                <li><span className="labels">employer:</span> Side Project </li>
                <li><span className="labels">year:</span> 2017 </li>
                <li><span className="labels">tools:</span> Javascript </li>
              </ul>
        </div>   
    </div>
</div>

)

export default PigGame 