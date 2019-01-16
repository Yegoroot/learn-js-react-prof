import React, { Component } from 'react'
import EventList from '../events/EventList'

class EventsPage extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return (
            <div>
                <h1>Events page</h1>
                <EventList />
            </div>
        )
    }
}

export default EventsPage
