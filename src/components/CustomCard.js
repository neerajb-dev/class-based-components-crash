import React, { Component } from 'react'

export default class CustomCard extends Component {
    render() {
        const { data } = this.props;
        return (
            <div className="card">
                <div className="card-body">
                    <div style={{ height: "300px" }}>
                        <img src={data.image} className="w-100" alt="" />
                        <div>{data.title}</div>
                    </div>
                </div>
            </div>
        )
    }
}
