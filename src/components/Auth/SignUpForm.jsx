import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import emailValidator from 'email-validator'
import ErrorsField from '../ErrorsField'

class SignUp extends Component {
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

const validate = ({ email, password }) => {
	const errors = {}
	if (!email) errors.email = 'email is required'
	else if (!emailValidator.validate(email)) errors.email = 'Invalid Email'

	if (!password) errors.password = 'password is required'
	else if (password.length < 8) errors.password = 'to short'
	// 30 минуте https://coursehunters.net/course/prodvinutyy-kurs-po-react-js
	return errors
}

export default reduxForm({
	form: 'authSignUp',
	validate,
})(SignUp)
