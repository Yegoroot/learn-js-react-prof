import React, { Component } from 'react'
import SignInForm from '../components/molecules/auth/signInForm'
import SignUpForm from '../components/molecules/auth/signUpForm'
import { connect } from 'react-redux'
import { signUp, moduleName } from '../ducks/auth'

import { Route, NavLink } from 'react-router-dom'
class AuthPage extends Component {
	constructor(props) {
		super(props)
		this.state = {}
	}
	render() {
		const { loading } = this.props
		return (
			<div>
				{loading ? <h1>Загрузка... </h1> : <h1>AuthPage</h1>}
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
	handleSignUp = ({ email, password }) => this.props.signUp(email, password)
}

export default connect(
	state => ({
		loading: state[moduleName].loading,
	}),
	{ signUp },
)(AuthPage)
