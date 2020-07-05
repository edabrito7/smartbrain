import React from 'react';
import './navbar.css';
import Button from '@material-ui/core/Button';


const Navigation = ({ onRouteChange, isSignIn }) => {
	if (isSignIn) {
		return (
			<nav className="Navbar">
				<Button onClick={() => onRouteChange('signin')} color="black">Sign Out</Button>
			</nav>
			)
	} else {
		return (
			<nav className="Navbar">
				<Button onClick={() => onRouteChange('signin')} color="black">Sign In</Button>
				<Button onClick={() => onRouteChange('register')} color="black">Register</Button>
			</nav>
		
		)
	}
}


export default Navigation;