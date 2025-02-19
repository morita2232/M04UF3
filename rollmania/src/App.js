import './App.css';
import Die from './Die.js';
import Title from './Title.js';

function App() {
	return (  
	<div className="rollmania">
	<Title />
	<main className="App">
		<Die />
		<Die />
		<Die />
	</main>
	</div>
	);
}

export default App;
