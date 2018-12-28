import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import AdminPage from '../pages/AdminPage'
import AuthPage from '../pages/AuthPage'
import PeoplePage from '../pages/PeoplePage'
import ProtectedRoute from './protectedRoute'
import { connect } from 'react-redux'
import { moduleName, signOut } from '../ducks/auth'
import { Link } from 'react-router-dom'
class Root extends Component {
    state = {}
    render() {
        const { signOut, signedIn } = this.props
        const btn = signedIn ? <button onClick={signOut}> Sign out </button> : <Link to="/auth/signin"> Sign In </Link>
        return (
            <div>
                {btn}
                <Switch>
                    <ProtectedRoute path="/admin" component={AdminPage} />
                    <ProtectedRoute path="/people" component={PeoplePage} />
                    <Route path="/auth" component={AuthPage} />
                </Switch>
            </div>
        )
    }
}

export default connect(
    state => ({
        signedIn: !!state[moduleName].user,
    }),
    { signOut },
)(Root)
