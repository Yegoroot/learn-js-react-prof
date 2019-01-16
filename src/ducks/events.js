import { appName } from '../_general/config'
import { Record, OrderedMap } from 'immutable'
import { all, take, put, call } from 'redux-saga/effects'
import firebase from 'firebase/app'
import 'firebase/database'
import { createSelector } from 'reselect'

/**
 * CONSTANTS
 **/
export const moduleName = 'events'
const prefix = `${appName}/${moduleName}`
export const FETCH_ALL_REQUEST = `${prefix}/FETCH_ALL_REQUEST`
export const FETCH_ALL_SUCCESS = `${prefix}/FETCH_ALL_SUCCESS`
export const FETCH_ALL_ERROR = `${prefix}/FETCH_ALL_ERROR`

/**
 * REDUCER
 **/
const ReducerRecord = Record({
    entities: new OrderedMap({}),
    loading: false,
    loaded: false,
    error: null,
})

// export const EventRecord = Record({
//     id: null,
//     title: null,
//     url: null,
//     where: null,
//     dateFrom: null,
//     dateTo: null,
//     month: null,
//     submissionDeadline: null,
//     country: null,
// })

export default function reducer(state = new ReducerRecord(), action) {
    const { type, payload, error } = action

    switch (type) {
        case FETCH_ALL_REQUEST:
            return state.set('loading', true)

        case FETCH_ALL_SUCCESS:
            return state
                .set('loading', false)
                .set('loaded', true)
                .set('entities', new OrderedMap(payload))

        case FETCH_ALL_ERROR:
            return state.set('loading', false).set('error', error)

        default:
            return state
    }
}

/**
 * SELSECTORS
 **/
export const stateSelector = state => state[moduleName]
export const entitiesSelector = createSelector(
    stateSelector,
    state => state.entities,
)

/**
 * ACTION CREATORS
 **/
export function fetchAll() {
    return {
        type: FETCH_ALL_REQUEST,
    }
}

/**
 * SAGAS
 **/

export const fetchAllSaga = function*() {
    while (true) {
        try {
            yield take(FETCH_ALL_REQUEST)
            const ref = firebase.database().ref('events')
            const data = yield call([ref, ref.once], 'value')
            yield put({
                type: FETCH_ALL_SUCCESS,
                payload: data.val(),
            })
        } catch (error) {
            alert('Ошибка, next FETCH_ALL_ERROR')
            yield put({
                type: FETCH_ALL_ERROR,
                error,
            })
        }
    }
}

export const saga = function*() {
    yield all([fetchAllSaga()])
}
