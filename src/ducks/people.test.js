// небольшой тест Person

import { addPersonSaga, ADD_PERSON, ADD_PERSON_REQUEST } from './people'
import { call, put } from 'redux-saga/effects'
import { generateId } from '../_general/utils'

it('Should dispatch person with id', () => {
	const person = {
		firstName: 'YourName',
		email: 'test@test.com',
	}
	const saga = addPersonSaga({
		type: ADD_PERSON_REQUEST,
		payload: person,
	})

	const id = generateId()

	expect(saga.next().value).toEqual(call(generateId))

	expect(saga.next(id).value).toEqual(
		put({
			type: ADD_PERSON,
			payload: {
				id,
				...person,
			},
		}),
	)
})
