import React from 'react';
import './ImageLinkForm.css';

//this is the input box and button that initiates the API call
//the props (two functions) are destructured initially

//so when input is entered, oninputchange is called which changes the input state to whatever is in the input box
//same idea with the button being clicked, but the image url is updated on every click
const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
	return (
		<div> 
			<p className='f3'>
				{'This Magic Brain will detect faces in your pictures. Give it a try.'}
			</p>
			<div className='center'>
				<div className='form center pa4 br3 shadow-5'>
					<input className='f4 pa2 w-70 center' type='tex' onChange={onInputChange} />	
					<button className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple'
					onClick={onButtonSubmit}
					>Detect</button>
				</div>
			</div>
		</div>
	);
}

export default ImageLinkForm;