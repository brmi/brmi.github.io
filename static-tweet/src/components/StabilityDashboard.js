import React from 'react'
import StabilityDashboardPic1 from '../images/stabilityDashboard/dash.png'
import StabilityDashboardPic2 from '../images/stabilityDashboard/comment.png'
import StabilityDashboardPic3 from '../images/stabilityDashboard/dashbig.png'

const StabilityDashboard = () => (
<div className="projectContainer">
          
    <div className="projectInfo">

        <div className="projectDescription">

            <div className="info">
                <h1>info</h1>
                <p>
                  The Stability Dashboard is a productivity tool for the employees at Qualcomm to quickly see and update 
              important data on Jira issues. The pictures below are of the project about halfway through completion.
              Unfortunately I forgot to take screen shots when I was nearing the end of my internship. 
                </p>
            </div>

            <div className="theFeatures">
                <h2> features </h2>
                <ul className="features">
                  <li><span className="boldItalicRed"> >> </span>See duplicate issues and master issue</li>
                  <li><span className="boldItalicRed"> >> </span>View issues grouped by meta/apps ID combination</li>
                  <li><span className="boldItalicRed"> >> </span>View issues grouped by Open or Closed Issues</li>
                  <li><span className="boldItalicRed"> >> </span>Bulk reject issues within a meta/apps ID group</li>
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
                <li><span className="labels">year:</span> 2016 </li>
                <li><span className="labels">tools:</span> HTML, CSS, Django, Javascript, Python, JIRA Api </li>
              </ul>
        </div>   
    </div>

    <div className="projectSources">

      <div className="projectImage">
        <a target="_blank" href={StabilityDashboardPic1}><img src={StabilityDashboardPic1} alt="Stability Dashboard Pic 1" /></a>
        <p className="projectDescriptionCaptions">All issues are associated with a "meta id" and an "apps id". Issues with the same meta and app id
          are combined into a single priority box. A red exclamation point indicates the highest priority issues,
          a yellow exclamation indicates mid-level issues, and a green exclamation point indicates a group of low priority issues.</p>
      </div>

      <div className="projectImage">
        <a target="_blank" href={StabilityDashboardPic2}><img src={StabilityDashboardPic2} alt="Stability Dashboard Pic 2" /></a>
        <p className="projectDescriptionCaptions">Actions you can perform in Jira such as commenting, moving priority, and trasition issues can be done
          from the app in bulk.</p>
      </div>

      <div className="projectImage">
        <a target="_blank" href={StabilityDashboardPic3}><img src={StabilityDashboardPic3} alt="Stability Dashboard Pic 3" /></a>
        <p className="projectDescriptionCaptions">You can expand each individual priority box to see more details!</p>
      </div> 

    </div>

</div>

)

export default StabilityDashboard 