import React from 'react';
import './FaceRecognition.css';

//the imageUrl state is passed into this component as props. 
const FaceRecognition = ({ imageUrl, box }) => {		/*destructuring the props so we don't have to do "this.imageUrl" every time */
	return (
		<div className='center ma'>
			<div className='absolute mt2'>
				<img id='inputImage' alt='' src={imageUrl} width='500px' height='auto' /> 
				<div className='bounding-box' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>	
			</div>
		</div>
	);
}

export default FaceRecognition;