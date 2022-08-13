import React, { Component } from 'react'
import axios from "axios";
import List from './List';

export default class User extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user_list: []
        }
    }

    componentDidMount() {
        this.getUserList();
    }

    getUserList() {
        axios.get('https://fakestoreapi.com/users').then(res => {
            if (res.data) {
                this.setState({ user_list: res.data });
            }
        }).catch(err => console.log(err));
    }

    render() {
        console.log(this.state.user_list);
        const { user_list } = this.state;

        return (
            <div className="container-fluid">
                {
                    user_list.map((d, i) => {
                        return (
                            <List data={d} key={i} />
                        )
                    })
                }
            </div>
        )
    }
}
