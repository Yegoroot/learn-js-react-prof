import { appName } from '../_general/config'
import firebase from 'firebase/app'
import 'firebase/auth'
import { Record } from 'immutable'
import { reset } from 'redux-form'

// import store from '../redux'
import { all, take, cps, call, put } from 'redux-saga/effects'
import { takeEvery } from 'redux-saga'
import { push } from 'connected-react-router'

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
export const SIGN_UP_ERROR = `${appName}/${moduleName}/SIGN_UP_ERROR`

export const SIGN_IN_REQUEST = `${appName}/${moduleName}/SIGN_IN_REQUEST`
export const SIGN_IN_SUCCESS = `${appName}/${moduleName}/SIGN_IN_SUCCESS`
export const SIGN_IN_ERROR = `${appName}/${moduleName}/SIGN_IN_ERROR`

export const SIGN_OUT_REQUEST = `${appName}/${moduleName}/SIGN_OUT_REQUEST`
export const SIGN_OUT_SUCCESS = `${appName}/${moduleName}/SIGN_OUT_SUCCESS`

// reducer
export default function reducer(state = new ReducerRecord(), action) {
    const { type, payload, error } = action

    switch (type) {
        case SIGN_UP_REQUEST:
            return state.set('loading', true)
        case SIGN_IN_REQUEST:
            return state.set('loading', true)
        case SIGN_UP_SUCCESS:
            return state
                .set('loading', false)
                .set('user', payload.user)
                .set('error', null)
        case SIGN_IN_SUCCESS:
            return state
                .set('loading', false)
                .set('user', payload.user)
                .set('error', null)
        case SIGN_UP_ERROR:
            return state.set('loading', false).set('error', error)

        case SIGN_OUT_SUCCESS:
            return new ReducerRecord()
        default:
            return state
    }
}

// ACTION CREATOR
export function signIn(email, password) {
    return {
        type: SIGN_IN_REQUEST,
        payload: { email, password },
    }
}

export function signUp(email, password) {
    return {
        type: SIGN_UP_REQUEST,
        payload: { email, password },
    }
}

export function signOut() {
    return {
        type: SIGN_OUT_REQUEST,
    }
}

// SAGAS
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
            yield put(reset('authSignUp'))
        } catch (error) {
            alert('Ошибка, next SIGN_UP_ERROR')
            yield put({
                type: SIGN_UP_ERROR,
                error,
            })
        }
    }
}
export const signInSaga = function*() {
    const auth = firebase.auth()

    while (true) {
        const action = yield take(SIGN_IN_REQUEST)
        try {
            const user = yield call(
                [auth, auth.signInWithEmailAndPassword],
                action.payload.email,
                action.payload.password,
            )
            yield put({
                type: SIGN_IN_SUCCESS,
                payload: { user },
            })
            yield put(reset('authSignIn'))
        } catch (error) {
            alert('Ошибка, next SIGN_IN_ERROR')
            yield put({
                type: SIGN_IN_ERROR,
                error,
            })
        }
    }
}

// ДОПОЛНИТЕЛЬНО РЕАЛИЗОВАТЬ ЛОГИКУ ВХОДА ПЕРЕДЕЛАТЬ НА ПОЛНОЦЕННЫЙ ВХОД
export const watchStatusChange = function*() {
    const auth = firebase.auth()

    try {
        // в node овском стиле первым аргументом идет ошибка а не данные
        yield cps([auth, auth.onAuthStateChanged])
    } catch (user) {
        yield put({
            type: SIGN_UP_SUCCESS,
            payload: { user },
        })
    }
}

export const signOutSaga = function*() {
    const auth = firebase.auth()

    try {
        yield call([auth, auth.signOut])
        yield put({
            type: SIGN_OUT_SUCCESS,
        })
        yield put(push('/auth/signin'))
    } catch (_) {}
}

export const saga = function*() {
    yield all([signInSaga(), signUpSaga(), watchStatusChange(), takeEvery(SIGN_OUT_REQUEST, signOutSaga)])
}
