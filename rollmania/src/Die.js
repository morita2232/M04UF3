import './Die.css';
import { useState } from 'react';

function Die(props) {
	
	let [number, setNumber] = useState("-");
	
	let [roll, setRoll] = useState(false);

	function get_random()
	{
		return Math.floor(Math.random() * 6) +1;
	}	
	
	function set_random () {
		let r = get_random();
		setNumber(r);
	}

	if (props.roll){
		number = get_random();
	}



	return (
	<button className="Die" onClick={set_random}>
		<p className="DieNumber">{number}</p>
	</button>
	);
}

export default Die;
