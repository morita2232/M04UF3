import './Playername.css';
import { useState } from 'react';

function Playername(nombre) {
	let [player_name, setPlayername] = useState("");

	return (
	<div>
		<p classname="Playername"> <input type="text" value={player_name} onChange={e => setPlayername(e.target.value)} /> <button> Guardar </button> </p>
	</div>

	);
}

export default Playername;
