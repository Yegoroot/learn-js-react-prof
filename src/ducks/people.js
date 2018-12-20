import { appName } from '../config/common'
import { Record, List } from 'immutable'

// ВИД (пока в виде листа)
const ReducerState = Record({
	entities: new List([]),
})

const PersonRecord = Record({
	id: null,
	firstName: null,
	lastName: null,
	email: null,
})

// CONSTANTS
export const moduleName = 'people'
const prefix = `${appName}/${moduleName}`
export const ADD_PERSON = `${prefix}/ADD_PERSON`

// REDUCER
export default function reducer(state = new ReducerState(), action) {
	const { type, payload } = action

	switch (type) {
		case ADD_PERSON:
			return state.update('entries', entries => entries.push(new PersonRecord(payload.person)))
		default:
			return state
	}
}

// ACTIONS
export function addPerson(person) {
	return dispatch =>
		dispatch({
			type: ADD_PERSON,
			payload: {
				person: { id: Date.now(), ...person },
			},
		})
}
