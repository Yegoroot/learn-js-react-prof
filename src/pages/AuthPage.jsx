import React, { Component } from 'react'
import Auth from '../components/molecules/auth'
class AuthPage extends Component {
	constructor(props) {
		super(props)
		this.state = {}
	}
	render() {
		return (
			<div>
				<h1>AuthPage</h1>
				<Auth />
			</div>
		)
	}
}

export default AuthPage
