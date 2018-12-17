import React, { Component } from 'react'
import Root from './hoc/root'
import store from './redux'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import history from './history'
import './config/firebase'
class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<ConnectedRouter store={store} history={history}>
					<Root />
				</ConnectedRouter>
			</Provider>
		)
	}
}

export default App
