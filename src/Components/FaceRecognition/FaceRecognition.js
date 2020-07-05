import React from 'react';
import './FaceRecognition.css';



const FaceRecognition = ( {imageURL, box } ) => {
	return (
		<div className="container">
			<div className="container2">
				<img id="inputImagen" alt='' src={imageURL} />
				<div className="bouding_box" style={{top:box.toprow, right: box.rightcol, bottom: box.bottomrow, left: box.leftcol }}></div>
			</div>
		</div>
		)
}


export default FaceRecognition;