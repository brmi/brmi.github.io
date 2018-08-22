import React from 'react'
import AboutBox from './AboutBox'
import Favorites from './Favorites'

const About = () => (
<div className="homePageContainer">
  <div className="homeContainer">
  	<div className="text">
	    {/* <h1 className="homeText">
	    	Digital kid : )
		</h1> */}
	</div>
  </div>
  <AboutBox/>
  <Favorites/>
 </div>

)

export default About