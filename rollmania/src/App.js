import './App.css';
import Dice from './Dice.js';
import Title from './Title.js';
import Num from './NumeroComp.js';
import Roll from './RollButton.js';
import Score from './Scores.js';

import { useState } from 'react';

function App() {

let [roll, setRoll] = useState(false);

function roll_dice () {
	setRoll(true);
}

	return (  
	<div className="rollmania">
	<Num />
	<Title titulo="ROLLMANIA" />
	<main className="App">
	<Dice cantidad="5" roll={roll}  />
	</main>
	<Roll roll_func={roll_dice}/>
	<Score />
	</div>
	);
}

export default App;
