import React from 'react'
import song from '../media/fromTheMorningHeat.mp3'

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
	          				<p className="songName">From The Morning Heat</p>
	          				<p className="artist">Craft Spells</p>
	          				<div className="playsong">
		          				<audio controls controlsList="nodownload">
								  <source src={song} type="audio/mp3"/>
								  <p>Your browser doesn't support HTML5 audio. Here is a <a href={song}>link to the audio</a> instead.</p>
								</audio>
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
	          			<li> Craft Spells, </li>
	          			<li> Yo La Tengo, </li>
	          			<li> Gorillaz </li>
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
	          			<li> Freaks and Geeks, </li>
	          			<li> Eureka, </li>
	          			<li> Cowboy Bebop, </li>
	          			<li> Inuyasha, </li>
	          			<li> Rurouni Kenshin </li>
	          		</ul>
	          	</div>
	          	<div className="item">
	          		<p> movies </p>
	          		<ul>
	          			<li> Amelie, </li>
	          			<li> Roman Holiday, </li>
	          			<li> Pan's Labyrinth, </li>
	          			<li> Life Is Beautiful, </li>
	          			<li> Lost in Translation, </li>
	          			<li> Eternal Sunshine of the Spotless Mind</li>
	          		</ul>
	          	</div>
        
          </div>
        </div>
	</div>
)

export default Favorites