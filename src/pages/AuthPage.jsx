import React, { Component } from 'react'
import SignInForm from '../components/Auth/SignInForm'
import SignUpForm from '../components/Auth/SignUpForm'
import { connect } from 'react-redux'
import { signUp, signIn, moduleName } from '../ducks/auth'

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

    // handleSignIn = values => console.log('___', values)
    handleSignIn = ({ email, password }) => this.props.signIn(email, password)
    handleSignUp = ({ email, password }) => this.props.signUp(email, password)
}

export default connect(
    state => ({
        loading: state[moduleName].loading,
    }),
    { signUp, signIn },
)(AuthPage)
