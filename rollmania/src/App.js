import './App.css';
import Dice from './Dice.js';
import Title from './Title.js';
import Roll from './RollButton.js';
import Score from './Scores.js';
import Player from './Playername.js';
import { useState, useRef } from 'react';

function App() {

const [roll, setRoll] = useState(false);

const [score, setScore] = useState({});

const player_name = useRef("");
const player_score = useRef(0);


function roll_dice () {
	setRoll(true);
}

function set_player_name (name) {
if (name == ""){
alert("No hay nombre de jugador!!");
return;
}

player_name.current = name;

console.log("El nombre es: "+ name);
}

function set_player_score (total) {
	console.log(player_name);
	if(player_name.current == ""){
	alert("No hay nombre de jugador!!");
	return;
	}

	if (total == 0){
	alert("No hay puntuacion!!");
	return;
	}

	player_score.current = total;
	
	setScore({"nombre": player_name.current, "score":total});

	console.log("Puntuacion total: " + total);
}

	return (  
	<div className="rollmania">
	<Title titulo="ROLLMANIA" />
	<Player onPlayerNameChange={set_player_name} />
	<main className="App">
	<Dice cantidad="5" roll={roll} onTotal={set_player_score} />
	</main>
	<Roll roll_func={roll_dice}/>
	<Score add_score={score} />
	</div>
	);
}

export default App;
