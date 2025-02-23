import './RollButton.css';
import { useState, useEffect } from 'react';

function RollButton(props) {

let [countdown, setCountdown] = useState(null);

useEffect(function() {
	if (countdown === 0){
		let timeout = setTimeout(function () {
			props.roll_func();
			setCountdown(null);
		}, 1000);
		return function() {clearTimeout(timeout);};
	}

	if (countdown > 0) {
		let interval = setInterval(function() {
			setCountdown(function(prev) {
			return prev - 1;
		});
	}, 1000);
		return function() {clearInterval(interval); };
	}
}, [countdown, props.roll_func]);

function handleClick() {
	setCountdown(5);
}
	return (
	<button 
		className="Roll" 
			onClick={handleClick}
				>
		<p>
			{countdown === null
				? "ROLL"
				: countdown > 0
				? countdown
				: "ROLL"}
		</p>
	</button>
	);
}

export default RollButton;
