import React from 'react'
import { Link } from 'react-router-dom'

// The Header creates links that can be used to navigate
// between routes.
const Header = () => (
  <header>
    <nav className="header">
      <ul>
      	<li className="name"><div className="slantedBox"><Link to='/'>desiree lenart</Link></div></li>
        <li className="links"><Link to='/work'>work</Link></li>
      </ul>
    </nav>
  </header>
)

export default Header