import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import AdminPage from '../pages/AdminPage'
import AuthPage from '../pages/AuthPage'
import PeoplePage from '../pages/PeoplePage'
import ProtectedRoute from './protectedRoute'
class Root extends Component {
	state = {}
	render() {
		return (
			<Switch>
				<ProtectedRoute path="/admin" component={AdminPage} />
				<Route path="/auth" component={AuthPage} />
				<Route path="/people" component={PeoplePage} />
			</Switch>
		)
	}
}

export default Root
