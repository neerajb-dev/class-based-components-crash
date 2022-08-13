import React, { Component } from 'react'

export default class List extends Component {
    render() {
        const { data } = this.props;
        return (
            <div className="bg-info my-3 d-flex justify-content-between p-3">
                <div>{data.username}</div>
                <div> {data.email}</div>
                <div>{data.phone}</div>
            </div>
        )
    }
}
