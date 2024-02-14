import { render } from 'preact';

import preactLogo from './assets/preact.svg';
import './style.css';
import { signal } from '@preact/signals';

// register outside of the component
const tacoIcon = signal('🔥');

export function App() {
	// read the value of the signal in the component to trigger a re-render
	const fire = tacoIcon.value;

	// make it cute
	const updateTacoTaste = () => {
		tacoIcon.value += '🔥';
	}

	return (
		<div>
			<a href="https://preactjs.com" target="_blank">
				<img src={preactLogo} alt="Preact logo" height="160" width="160" />
			</a>
			<h1>Preact Signals</h1>
			<h2>🌮s are {fire} </h2>
			<button onClick={updateTacoTaste}>Spice it up</button>
			<pre>
				register the signal outside of the component
				<br />
				read the value of the signal by assigning it to a variable to trigger a re-render
				<br />
				use it inline with it's .value property
			</pre>
		</div>
	);
}


render(<App />, document.getElementById('app'));
