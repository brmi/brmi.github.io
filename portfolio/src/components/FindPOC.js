import React from 'react'
import POCPic1 from '../images/findPOC/qlastyear.png'
import POCPpt from '../images/findPOC/databaseppt.pdf'

const FindPOC = () => (
<div className="projectContainer">
          
    <div className="projectInfo">

        <div className="projectDescription">

            <div className="info">
                <h1>info</h1>
                <p>
                  Engineers in my division had a hard time finding the point of contact for a specific file and would be stuck at a road 
              block until they figured out who the last owner was/ who was responsible for the code in question. They found themselves
              spending a significant part of their day messaging a chain of people in order to track down the last owner of a file. The
              goal of this project was to cut down this time by having the engineer go to this site and update the owner of the file once
              they finally found them! Eventually, engineers would be able to refer to the site and quickly find the owner of a file.
                </p>
            </div>

            <div className="theFeatures">
                <h2> features </h2>
                <ul className="features">
                  <li><span className="boldItalicRed"> >> </span>Search by Perforce directory</li>
                  <li><span className="boldItalicRed"> >> </span>Search by keywords in a directory</li>
                  <li><span className="boldItalicRed"> >> </span>Search by user to see what files he/she owns</li>
                  <li><span className="boldItalicRed"> >> </span>Update ownership on a file</li>
                  <li><span className="boldItalicRed"> >> </span>Bulk Comment on issues within a meta/apps ID group </li>
                  <li><span className="boldItalicRed"> >> </span>Bulk priority change issues based on meta/apps ID group </li>
                </ul>
            </div>

        </div>

        <div className="role">
            <h1>details</h1>
              <ul>
                <li><span className="labels">role:</span> Design and Development </li>
                <li><span className="labels">employer:</span> Qualcomm </li>
                <li><span className="labels">year:</span> 2015 </li>
                <li><span className="labels">tools:</span> HTML, CSS, PHP, Javascript, MySQL, Python </li>
              </ul>
        </div>   
    </div>

    <div className="projectSources">

      <div className="projectImage">
        <a target="_blank" href={POCPpt}><img src={POCPic1} alt="Picture" /></a>
        <p class="projectDescriptionCaptions">This is the powerpoint I used to present my project to the Core team at Qualcomm. Click the picture to see it! </p>
      </div>

    </div>

</div>

)

export default FindPOC 