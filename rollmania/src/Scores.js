import './Scores.css';
import Item from './ScoreItem.js';

function Scores(props) {

		let score_list = [
			<Item player_name="Morita" player_score="50" key={0} />,
			<Item player_name="Messi" player_score="10" key={1} />,
			<Item player_name="Marina" player_score="8" key={2} />,
			<Item player_name="Miguel" player_score="5" key={3} />
		];
			
	return (
	<section className="Scores">
		<h2>SCORES</h2>
			
			<ol>
				
				{score_list}
			
			</ol>
	
	</section>
	);
}

export default Scores;
