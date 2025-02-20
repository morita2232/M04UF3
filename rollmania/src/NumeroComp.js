import './NumeroComp.css';
import { useState, useRef } from 'react';

function NumeroComp() {

	let [count, setCount] = useState(5);

	let timerRef = useRef(null);

	function startTimer() {
		if (!timerRef.current) {
			timerRef.current = setInterval(function() {
			setCount(function (prevCount) {
				if(prevCount > 0) {
					return prevCount - 1;
				} else {
					clearInterval(timerRef.current);
					timerRef.current = null;
					return 0;
				}
			});
		}, 1000);
	}
	}

	startTimer();

	return (
	<section className="NumeroComp">
      <p>{count}</p>
    </section>
	);
}

export default NumeroComp;
