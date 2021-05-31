import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/home';
import Add from './components/add';
import Edit from './components/edit';

const App = () => {
	return (
		<Router className="App__container">
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
        <Route path="/add">
					<Add />
				</Route>
        <Route path="/edit/:id">
					<Edit />
				</Route>
			</Switch>
		</Router>
	);
};

ReactDOM.render(<App />, document.getElementById('app'));
