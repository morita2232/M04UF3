import './RollButton.css';
import { useState, useEffect } from 'react';

function RollButton(props) {

let [countdown, setCountdown] = useState(5);

useEffect(() => {
	setTimeout(() => {
		if(countdown > 0) {
			setCountdown(countdown - 1);
			}
		}, 1000);
	});


	return (
	<button 
		className="Roll" 
			onClick={props.roll_func}
				disabled={countdown > 0 ? true : ""}
				>
		<p>
			{countdown === null
				? "ROLL THEM DICE"  
				: countdown > 0
				? countdown
				: "ROLL!!!"}
		</p>
	</button>
	);
}

export default RollButton;
