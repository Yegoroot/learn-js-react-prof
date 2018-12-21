import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import ErrorsField from '../ErrorsField'

class SignIn extends Component {
	state = {}
	render() {
		const { handleSubmit } = this.props
		return (
			<div>
				<h2>Sign in</h2>
				<form onSubmit={handleSubmit}>
					<Field name="email" component={ErrorsField} />

					<Field name="password" component={ErrorsField} type="password" />

					<div>
						<input type="submit" />
					</div>
				</form>
			</div>
		)
	}
}

export default reduxForm({
	form: 'authSignIn',
})(SignIn)
