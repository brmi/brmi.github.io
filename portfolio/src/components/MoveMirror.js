import React from 'react'
import MoveMirrorPic1 from '../images/movemirror/mm1.png'
import MoveMirrorPic2 from '../images/movemirror/mm2.png'

const MoveMirror = () => (
<div className="projectContainer">
          
    <div className="projectInfo">

        <div className="projectDescription">

            <div className="info">
                <h1>info</h1>
                <p>
                Move Mirror is an experiment to show how computer vision techniques like pose estimation can be available to anyone
                with a computer and a webcam. They wanted to make machine learning more accessible to coders and makers by bringing
                pose estimation into the browser.</p><br/>
                <p>
                The experiment uses PoseNet, a model that can detect human figures in images and videos by identifying where key body joints are.
                Move Mirror takes the input from your camera feed and maps it to a database of more than 80,000 images to find the best match. 
                </p>
                <br/>
                <p>
                    This game was created with Google Creative Labs. I worked on the frontend for the landing and tutorial screens.
                </p>
                <br/>
                <p><a target="_blank" href="https://experiments.withgoogle.com/collection/ai/move-mirror/view">show us your moves!</a></p>
            </div>

            <div className="theFeatures">
                <h2> what I learned </h2>
                <ul className="features">
                    <li><span className="boldItalicRed"> >> </span>Animating SVGs </li>
                </ul>
            </div>

        </div>

        <div className="role">
            <h1>details</h1>
              <ul>
                <li><span className="labels">role:</span> Developer </li>
                <li><span className="labels">employer:</span> Use All Five </li>
                <li><span className="labels">year:</span> 2018 </li>
                <li><span className="labels">tools:</span> Javascript, HTML, SCSS </li>
              </ul>
        </div>   
    </div>

    <div className="projectSources">

      <div className="projectImage">
        <a target="_blank" href={MoveMirrorPic1}><img src={MoveMirrorPic1} alt="Screenshot of Move Mirror website" /></a>
        <p className="projectDescriptionCaptions">Move Mirror Landing</p>
      </div>

      <div className="projectImage">
        <a target="_blank" href={MoveMirrorPic2}><img src={MoveMirrorPic2} alt="Screenshot of Move Mirror website" /></a>
        <p className="projectDescriptionCaptions">Move Mirror Tutorial</p>
      </div>

    </div>

</div>

)

export default MoveMirror 