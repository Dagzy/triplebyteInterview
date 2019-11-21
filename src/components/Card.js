import React, { Component } from 'react';
export default class Card extends Component{
    constructor(props) {
        super(props)
        this.state = {
            done: this.props.cardProps.done || false
        }
    }
    toggle = () => {
        fetch(`http://localhost:4000/cards/toggle/${this.props.cardProps._id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                this.setState({
                    done: !this.state.done
                })
            })
    }
    // console.log(props)
    render() {

        return (
            <li
                className={this.state.done
                ? "green"
                : "red"}>
                <p onClick={this.toggle}>
                    {this.props.cardProps.task}
                </p>
            </li>
        );
    }
};