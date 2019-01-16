import React, { Component } from 'react'
import { connect } from 'react-redux'
import { moduleName, fetchAll } from '../../ducks/events'

class EventList extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    componentDidMount() {
        this.props.fetchAll()
    }
    render() {
        return (
            <div>
                <table>
                    <thead />
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>2</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default connect(
    state => ({ events: state[moduleName] }),
    { fetchAll },
)(EventList)
