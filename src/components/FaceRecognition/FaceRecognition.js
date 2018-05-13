import React from 'react';

//the imageUrl state is passed into this component as props. 
const FaceRecognition = ({ imageUrl }) => {		/*destructuring the props so we don't have to do "this.imageUrl" every time */
	return (
		<div className='center ma'>
			<div className='absolute mt2'>
				// displaying image w/user-submitted url
				<img alt='' src={imageUrl} width='500px' height='auto' /> 	
			</div>
		</div>
	);
}

export default FaceRecognition;