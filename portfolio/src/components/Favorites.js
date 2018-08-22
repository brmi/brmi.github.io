import React from 'react'
import AudioPlayer from './AudioPlayer.js'

const Favorites = () => (
	<div className="currentFavoritesContainer">
  		<div className="currentFavorites">
  			<h2> Favorites </h2>
          	<div className='favoriteItems'>
	          	<div className="item song">
	          		<p> current jam! </p>
	          		<div className="songbox">
	          			<div className="album"></div>
	          			<div className="songinfo">
	          				<div className="playsong">
		          				<AudioPlayer />
		          			</div>
	          			</div>
	          		</div>
	          	</div>
	          
	          	<div className="item">
	          		<p> bands </p>
	          		<ul>
	          			<li> Air, </li>
	          			<li> Belle & Sebastian, </li>
	          			<li> The Postal Service, </li>
	          			<li> Radiohead, </li>
	          			<li> Yo La Tengo, </li>
	          			<li> Alex G </li>
	          		</ul>
	          	</div>
	          	<div className="item">
	          		<p> comics/manga </p>
	          		<ul>
	          			<li> Calvin & Hobbies by Bill Watterson, </li>
	          			<li> Nancy by Ernie Bushmiller, </li>
	          			<li> Frazz by Jef Mallet, </li>
	          			<li> Foxtrot by Bill Amend, </li>
	          			<li> Yotsuba&! by Kiyohiko Azuma, </li>
	          		</ul>
	          	</div>
	          	<div className="item">
	          		<p> shows </p>
	          		<ul>
	          			<li> Friends,</li>
	          			<li> The Office, </li>
						<li> Seinfeld, </li>
	          			<li> Freaks and Geeks, </li>
	          			<li> Eureka, </li>
	          			<li> Cowboy Bebop </li>
	          		</ul>
	          	</div>
	          	<div className="item">
	          		<p> movies </p>
	          		<ul>
	          			<li> Amelie, </li>
	          			<li> Roman Holiday, </li>
	          			<li> Pan's Labyrinth, </li>
	          			<li> Life Is Beautiful, </li>
	          			<li> Midnight in Paris, </li>
	          			<li> Eternal Sunshine of the Spotless Mind</li>
	          		</ul>
	          	</div>
        
          </div>
        </div>
	</div>
)

export default Favorites