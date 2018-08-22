import React from 'react'
import profilePic from '../images/profile.JPG'
import spotifyPic from '../images/svg/spotify.svg'
import githubPic from '../images/svg/github-logo.svg'
import linkednPic from '../images/svg/social.svg'
import instagramPic from '../images/svg/instagram-logo.svg'

const AboutBox = () => (
  <div className="aboutContainer">
    <div className="aboutBox">

      <div className="aboutpic">
        <img className="profileImg" src={profilePic} alt="profile pic"/>
        <p className="email" id="copyToClipboard">desireelenart@gmail.com</p>
        <ul className="social-accounts">
            <li className="li-linkedin">
              <a href="https://www.linkedin.com/in/desiree-lenart-058505b0" target="_blank" rel="noopener noreferrer">
                <img className="svg" src={linkednPic} alt='linkedin logo'/>
              </a>
            </li>
            <li className="li-github">
              <a href="https://github.com/brmi" target="_blank" rel="noopener noreferrer">
                <img className="svg" src={githubPic} alt='github logo'/>
              </a>
            </li>
            <li className="li-spotify">
              <a href="https://play.spotify.com/user/1227263874" target="_blank" rel="noopener noreferrer">
                <img className="svg" src={spotifyPic} alt='spotify logo'/>
              </a>
            </li>
            <li className="li-instagram">
              <a href="https://www.instagram.com/chikaboomfactor/" target="_blank" rel="noopener noreferrer">
                <img className="svg" src={instagramPic} alt='instagram logo'/>
              </a>
            </li>

          </ul>
      </div>

      <div className="aboutwriteup">
      	<div className="description">
		    <p>Hi! I’m Desiree! I’m a developer with a love for the arts and design.</p> 

			<p>I will graduate UCLA with a degree in computer science in December 2018 and hope to
			join a team that works with both design and engineering.</p>   

			<p>Currently I am focusing on mastering the frontend web dev skills that will allow me to bring 
			designs to life with 100% pixel perfection! Next I want to move on to full stack web and app development. </p> 

			<p>Besides design & development... I LOVE (maybe to the point of obsession) finding new music and curating playlists! 
			Check out my ~50 playlists on spotify if you’re interested.</p> 

			<p>Other than that I like to doodle, play video games, travel, snap candids of my amigos, and watch piano synthesia videos.</p> 
		</div>
		<div className="overview">
			<h2> Overview </h2>
			<ul>
        <li>
          <h3 className="organization"> UCLA </h3>
          <h4 className="title"><span className="boldItalicRed"> > </span> Computer Science BA </h4>
          <h5 className="dates"><span className="boldItalicRed"> >> </span>Graduate December 2018 </h5>
        </li>
        <li>
					<h3 className="organization"> Use All Five </h3>
					<h4 className="title"><span className="boldItalicRed"> > </span>Frontend Developer </h4>
					<h5 className="dates"><span className="boldItalicRed"> >> </span>Summer 2018 </h5>
				</li>
				<li>
					<h3 className="organization"> Qualcomm </h3>
					<h4 className="title"><span className="boldItalicRed"> > </span>Software Engineering Intern </h4>
					<h5 className="dates"><span className="boldItalicRed"> >> </span>Summer 2015, Summer 2016, Summer 2017 </h5>
				</li>
				<li>
					<h3 className="organization"> Daily Bruin </h3>
					<h4 className="title"><span className="boldItalicRed"> > </span> Project Manager, Developer </h4>
					<h5 className="dates"><span className="boldItalicRed"> >> </span> Winter 2015 - Spring 2018 </h5>
				</li>
			</ul>
		</div>
      </div>
    </div>
  </div>
)

export default AboutBox