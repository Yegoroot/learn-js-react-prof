import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import AdminPage from '../pages/AdminPage'
import AuthPage from '../pages/AuthPage'

class Root extends Component {
	state = {}
	render() {
		return (
			<div>
				<Route path="/admin" component={AdminPage} />
				<Route path="/auth" component={AuthPage} />
			</div>
		)
	}
}

export default Root
