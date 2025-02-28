import './Die.css';
import { useState, useRef, useEffect } from 'react';

function Die(props) {
	
	const [number, setNumber] = useState("-");

	const randomized = useRef(false);

	let [roll, setRoll] = useState(false);

	useEffect( () => {
		if ( number != "-") {

			props.onResult(number);
		}
			});


	function get_random()
	{
		return Math.floor(Math.random() * 6) +1;
	}	
	
	function set_random () {
		let r = get_random();
		setNumber(r);
	}

	if (props.roll && !randomized.current){
		set_random();
			
		randomized.current = true;
		
	}



	return (
	<button className="Die" onClick={set_random}>
		<p className="DieNumber">{number}</p>
	</button>
	);
}

export default Die;
