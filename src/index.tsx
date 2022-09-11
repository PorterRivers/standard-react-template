import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import AppShell from './components/AppShell/AppShell';
import './index.css';

if (process.env.NODE_ENV !== 'production') {
	const axe = require('@axe-core/react');
	axe(React, ReactDOM, 1000);
}

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<AppShell />
	</StrictMode>
);
