import './Dice.css';
import Die from './Die.js';
import { useRef } from 'react';

function Dice(props) {

	const total = useRef(0);
	
	const dieCount = useRef(0);

	function add_result (value) {

		total.current += value;
		console.log(value+" "+total.current);
		
		dieCount.current++;
		if (dieCount.current == props.cantidad) {
			props.onTotal(total.current);
		}
	}

	function get_dice (quantity, roll) {
	
		let dice_list = [];
	
		for (let i = 0; i < quantity; i++){
			dice_list.push(<Die key={i} roll={roll} onResult={add_result} />);

		}	

		return dice_list;
	}
	
	return (
		<div className="Dice">
			{get_dice(props.cantidad, props.roll)}
		</div>
		);
}

export default Dice;
