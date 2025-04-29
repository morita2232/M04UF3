import './Playername.css';
import { useState, useEffect } from 'react';

function Playername(props) {
	let [player_name, setPlayername] = useState("");
	let [show_name, setShowname] = useState(false);
	
	useEffect( () => {
		
		if (show_name){
		props.onPlayerNameChange(player_name);
		}

	});

	function update_name (event) {
	
		setPlayername(event.target.value);
		
	}
	
	function write_name () {

	let pn_tmp = player_name.trim();

		if(pn_tmp.length < 3 || pn_tmp > 12) {
			
			return;

			}
		else {
			
			setShowname(true);

		}

		console.log("Nombre: " + player_name);

	}


	if (show_name == false){
	return (
		<p>
		<input type="text" name="player_name" placeholder="Nombre del jugad@or" onChange={update_name} />
		<button onClick={write_name}>Guardar</button>
	</p>
	);
		
	}

	else{
	
	return (
	
	<h2 className="Playername">{player_name} </h2>
	
	);
	
	}
}

export default Playername;
