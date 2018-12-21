import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import emailValidator from 'email-validator'
import ErrorsField from '../ErrorsField'

class NewPersonForm extends Component {
	state = {}
	render() {
		return (
			<div>
				<form onSubmit={this.props.handleSubmit}>
					<Field name="firstName" component={ErrorsField} />
					<Field name="lastName" component={ErrorsField} />
					<Field name="email" component={ErrorsField} />
					<div>
						<input type="submit" />
					</div>
				</form>
			</div>
		)
	}
}

function validate({ firstName, email }) {
	const errors = {}
	if (!firstName) errors.firstName = 'First name is required'

	if (!email) errors.email = 'email is required'
	else if (!emailValidator.validate(email)) errors.email = 'email is invalid'

	return errors
}

export default reduxForm({
	form: 'person',
	validate,
})(NewPersonForm)
