import React from 'react';

//will become dynamic, but currently just shows the user's "rank" (how many images they have submitted to the website)
const Rank = ({name, entries}) => {
	return (
		<div> 
			<div className='white f3'>
				{`${name} , your current rank is... `}
			</div>
			<div className='white f1'>
				{entries}
			</div>
		</div>
	);
}

export default Rank;