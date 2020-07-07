import React from 'react';



const UserInfo = ( {name, entries} ) => {
	return (
		<div>
			<h3>{`${name} your current entries count is`}</h3>
			<h2>{entries}</h2>
		</div>
		);
}


export default UserInfo;