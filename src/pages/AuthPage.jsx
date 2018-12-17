import React, { Component } from 'react'
import SignInForm from '../components/molecules/signInForm'
import SignUpForm from '../components/molecules/signUpForm'

import { Route, NavLink } from 'react-router-dom'
class AuthPage extends Component {
	constructor(props) {
		super(props)
		this.state = {}
	}
	render() {
		return (
			<div>
				<h1>AuthPage</h1>
				<NavLink to="/auth/signin" activeStyle={{ color: 'red' }}>
					sign in
				</NavLink>
				<NavLink to="/auth/signup" activeStyle={{ color: 'red' }}>
					sign up
				</NavLink>
				<Route path="/auth/signin" render={() => <SignInForm onSubmit={this.handleSignIn} />} />
				<Route path="/auth/signup" render={() => <SignUpForm onSubmit={this.handleSignUp} />} />
			</div>
		)
	}

	handleSignIn = values => console.log('___', values)
	handleSignUp = values => console.log('___', values)
}

export default AuthPage
