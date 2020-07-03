import React from 'react';
import Tilt from 'react-tilt';
import './logo.css';
import brain from './brain-100.png'

const Logo = () => {
	return (
		<Tilt className="Tilt logo" options={{ max : 55 }} style={{ height: 200, width: 200 }} >
 			<div className="Tilt-inner"> <img alt="logo brain" src={brain} /> </div>
		</Tilt>
		)
}


export default Logo;