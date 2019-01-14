import React, { Component } from 'react'
import store from './redux'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import './_general/config'
import Root from './hoc/root'
import history from './history'
import './mocks'
class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <ConnectedRouter history={history}>
                    <div>
                        {/** прослойка обязательно */}
                        <Root />
                    </div>
                </ConnectedRouter>
            </Provider>
        )
    }
}

export default App
