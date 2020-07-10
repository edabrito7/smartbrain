import React from 'react';
import './userInfo.css';



const UserInfo = ( {name, entries} ) => {
	return (
		<div>
			<h2>{name}</h2><h3>{' your current entries count is...'}</h3>
			<h2>{entries}</h2>
		</div>
		);
}


export default UserInfo;