import axios from 'axios';
import React, { Component } from 'react'
import CustomCard from './CustomCard';

export default class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product_list: []
        }
    }

    componentDidMount() {
        this.getProductList()
    }

    getProductList() {
        axios.get("https://fakestoreapi.com/products").then(res => {
            if (res.data) {
                this.setState({ product_list: res.data })
            }
        }
        ).catch(err => console.log(err));
    }

    render() {
        console.log(this.state.product_list)
        const { product_list } = this.state;
        return (
            <div className="container-fluid">
                <div className="row">
                    {
                        product_list.map((d, i) => {
                            return (
                                <div className="col-sm-3" key={i}>
                                    <CustomCard data={d} />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}
