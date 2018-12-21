import { appName } from '../_general/config'
import { Record, List } from 'immutable'
import { put, takeEvery, call } from 'redux-saga/effects'
import { generateId } from '../_general/utils'

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
export const ADD_PERSON_REQUEST = `${prefix}/ADD_PERSON_REQUEST`
export const ADD_PERSON = `${prefix}/ADD_PERSON`

// REDUCER
export default function reducer(state = new ReducerState(), action) {
	const { type, payload } = action

	switch (type) {
		case ADD_PERSON:
			return state.update('entities', entities => entities.push(new PersonRecord(payload)))
		default:
			return state
	}
}

// ACTIONS
export function addPerson(person) {
	return {
		type: ADD_PERSON_REQUEST,
		payload: person,
	}
}

// SAGAS
export const addPersonSaga = function*(action) {
	const id = yield call(generateId)
	yield put({
		type: ADD_PERSON,
		payload: { ...action.payload, id },
	})
}

// ГЛАВНАЯ НАША SAGA
export const saga = function*() {
	yield takeEvery(ADD_PERSON_REQUEST, addPersonSaga) // слушаем события экшена ADD_PERSON_REQUEST и передаем их саге addPersonSaga
}
