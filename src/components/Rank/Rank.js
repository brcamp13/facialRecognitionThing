import React from 'react';

//will become dynamic, but currently just shows the user's "rank" (how many images they have submitted to the website)
const Rank = () => {
	return (
		<div> 
			<div className='white f3'>
				{'Brandon, your current rank is...'}
			</div>
			<div className='white f1'>
				{'#5'}
			</div>
		</div>
	);
}

export default Rank;