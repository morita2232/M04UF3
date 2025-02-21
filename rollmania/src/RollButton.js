import './RollButton.css';
import { useState } from 'react';

function RollButton(props) {

	return (
	<button className="Roll" onClick={props.roll_func} >
		<p>ROLL</p>
	</button>
	);
}

export default RollButton;
