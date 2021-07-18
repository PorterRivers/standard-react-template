import { Container, Typography } from '@material-ui/core';
import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';

if (process.env.NODE_ENV !== 'production') {
	const axe = require('@axe-core/react');
	axe(React, ReactDOM, 1000);
}

const App = () => (
	<Container>
		<Typography>My React and Typescript Template.</Typography>
	</Container>
);

ReactDOM.render(
	<StrictMode>
		<App />
	</StrictMode>,
	document.getElementById('root')
);
