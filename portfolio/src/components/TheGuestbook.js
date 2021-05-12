import React from 'react'
import Overview from '../images/theguestbook/overview.png'
import CashBack from '../images/theguestbook/cashback.png'
import PrivateLabel from '../images/theguestbook/privatelabel.png'
import Landing from '../images/theguestbook/landing.png'

const TheGuestbook = () => (
<div className="projectContainer">
          
    <div className="projectInfo">

        <div className="projectDescription">

            <div className="info">
                <h1>info</h1>
                <p>
                  The Guestbook is a cash back rewards platform that incentives users to book directly with hotels instead of through a third party like 
                  Booking.com or Expedia. The goal of The Guestbook is to revolutionize the personal connection between hotels and their guests.
                </p>
                <br/>
                <p>
                  During my time at The Guestbook, I have worked primarily as a frontend developer who also does fullstack when needed! 
                </p>
                <br/>
                <p><a target="_blank" href="https://theguestbook.com/">theguestbook.com</a></p>
            </div>

            <div className="theFeatures">
                <h2> what I learned </h2>
                <ul className="features">
                    <li><span className="boldItalicRed"> >> </span>Develop a webapp using the traditional MVC, Ruby on Rails framework </li>
                    <li><span className="boldItalicRed"> >> </span>Develop a webapp using React / Typescript for the clientside code and Ruby on Rails for API endpoints</li>
                    <li><span className="boldItalicRed"> >> </span>How to implement accessible user interfaces</li>
                    <li><span className="boldItalicRed"> >> </span>Internationalization</li>
                    <li><span className="boldItalicRed"> >> </span>Authentication strategies & how they differ for 1st party & 3rd party environments</li>
                    <li><span className="boldItalicRed"> >> </span>Browser limitations on 3rd party cookies</li>
                    <li><span className="boldItalicRed"> >> </span>Creating a 3rd Party Integration Script </li>
                </ul>
            </div>

        </div>

        <div className="role">
            <h1>details</h1>
              <ul>
                <li><span className="labels">role:</span> Software Developer </li>
                <li><span className="labels">employer:</span> The Guestbook </li>
                <li><span className="labels">year:</span> 2019 - now </li>
                <li><span className="labels">tools:</span> Javascript, Typescript, Styled Components, React, Ruby on Rails </li>
              </ul>
        </div>   
    </div>

    <div className="projectSources">
      <div className="projectImage">
        <a target="_blank" href={Overview}><img src={Overview} alt="Account Overview for The Guestbook platform" /></a>
        <p className="projectDescriptionCaptions">Account Overview for The Guestbook platform</p>
      </div>
      <div className="projectImage">
        <a target="_blank" href={CashBack}><img src={CashBack} alt="Cash Back Options for The Guestbook platform" /></a>
        <p className="projectDescriptionCaptions">Cash Back Options</p>
      </div>
      <div className="projectImage">
        <a target="_blank" href={PrivateLabel}><img src={PrivateLabel} alt="Our White Label platform embedded directly on the hotel's site" /></a>
        <p className="projectDescriptionCaptions">Internationalization of our white label product.</p>
      </div>

    </div>

</div>



)

export default TheGuestbook 



