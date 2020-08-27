import React, { Component } from 'react'

export default class logout extends Component {
    render() {
        return (
            <div>
                <p>You logged out Successfully!!<a href="/login" style={{color:'blue'}}>Login Again</a></p>
            </div>
        )
    }
}
