import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';

if (process.env.NODE_ENV !== 'production') {
	const axe = require('@axe-core/react');
	axe(React, ReactDOM, 1000);
}

const App = () => (
	<main>
		<h1>My React and Typescript Template.</h1>
	</main>
);

ReactDOM.render(
	<StrictMode>
		<App />
	</StrictMode>,
	document.getElementById('root')
);
