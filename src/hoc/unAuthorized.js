import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class UnAuthorized extends Component {
	state = {}
	render() {
		return (
			<h1>
				You UnAuthorized, please <Link to="/auth/signin">Sign In</Link>
			</h1>
		)
	}
}

export default UnAuthorized
