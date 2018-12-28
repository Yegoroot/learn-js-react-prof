import { appName } from '../_general/config'
import firebase from 'firebase/app'
import 'firebase/auth'
import { Record } from 'immutable'
// import store from '../redux'
import { all, take, call, put } from 'redux-saga/effects'

// for mutations
const ReducerRecord = Record({
    user: null,
    error: null,
    loading: false,
})

// constants
export const moduleName = 'auth'
export const SIGN_UP_REQUEST = `${appName}/${moduleName}/SIGN_UP_REQUEST`
export const SIGN_UP_SUCCESS = `${appName}/${moduleName}/SIGN_UP_SUCCESS`
export const SIGN_IN_SUCCESS = `${appName}/${moduleName}/SIGN_IN_SUCCESS`
export const SIGN_UP_ERROR = `${appName}/${moduleName}/SIGN_UP_ERROR`

// reducer
export default function reducer(state = new ReducerRecord(), action) {
    const { type, payload, error } = action

    switch (type) {
        case SIGN_UP_REQUEST:
            return state.set('loading', true)
        case SIGN_IN_SUCCESS:
            return state
                .set('loading', false)
                .set('user', payload.user)
                .set('error', null)
        case SIGN_UP_ERROR:
            return state.set('loading', false).set('error', error)
        default:
            return state
    }
}

// ACTION CREATOR
export function signUp(email, password) {
    return {
        type: SIGN_UP_REQUEST,
        payload: { email, password },
    }
}

export const signUpSaga = function*() {
    const auth = firebase.auth()

    while (true) {
        // бесконечные генераторы это нормально / это не ф-ии, генераторы останавливают свое выполнение
        // можно сделать попытки (ограничения, но а так мы всегда прослушиваем этот экшен)

        const action = yield take(SIGN_UP_REQUEST) // будет ждать когда прийдет такой action и даст выполнение дальше
        try {
            const user = yield call(
                [auth, auth.createUserWithEmailAndPassword],
                action.payload.email,
                action.payload.password,
            ) //[ контекст, метод], параметры метода
            yield put({
                type: SIGN_UP_SUCCESS,
                payload: { user },
            })
        } catch (error) {
            yield put({
                type: SIGN_UP_ERROR,
                error,
            })
        }
    }
}

// ACTION CREATOR
// export function signUp(email, password) {
// 	return dispatch => {
// 		dispatch({
// 			type: SIGN_UP_REQUEST,
// 		})
// 		firebase
// 			.auth()
// 			.createUserWithEmailAndPassword(email, password)
// 			.then(user =>
// 				dispatch({
// 					type: SIGN_UP_SUCCESS,
// 					payload: { user },
// 				}),
// 			)
// 			.catch(error =>
// 				dispatch({
// 					type: SIGN_UP_ERROR,
// 					error,
// 				}),
// 			)
// 	}
// }

firebase.auth().onAuthStateChanged(user => {
    const store = require('../redux').default
    store.dispatch({
        type: SIGN_IN_SUCCESS,
        payload: { user },
    })
})

// SAGA
export const saga = function*() {
    yield all([signUpSaga()])
}
