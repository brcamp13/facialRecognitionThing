import React from 'react';

//will become dynamic, but currently just shows the user's "rank" (how many images they have submitted to the website)
const Rank = ({name, entries}) => {
	//The name and entries are taken from the user which was provided to us from the server after signing in or registering
	return (
		<div> 
			<div className='white f3'>
				{`${name} , your current entry count is... `}	
			</div>
			<div className='white f1'>
				{entries}
			</div>
		</div>
	);
}

export default Rank;