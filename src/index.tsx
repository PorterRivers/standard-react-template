import { Container, Typography } from '@material-ui/core';
import React from 'react';
import ReactDOM from 'react-dom';

const App = () => (
	<Container>
		<Typography>My React and Typescript Template.</Typography>
	</Container>
);

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root')
);
