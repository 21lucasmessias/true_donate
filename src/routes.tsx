import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import './assets/styles/global.css';
import Tip from './pages/tip';

function Routes() {
	return (
		<BrowserRouter>
			<Route path='/' exact component={Tip}/>
		</BrowserRouter>
	);
}

export default Routes;