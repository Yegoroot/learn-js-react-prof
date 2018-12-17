import { combineReducers } from 'redux'
import { routerReducer as router } from 'react-router-redux'
import { reducer as form } from 'redux-form'
import authReducer from '../ducks/auth'
import { moduleName as authModule } from '../ducks/auth'

export default combineReducers({
	router,
	form,
	[authModule]: authReducer,
})
