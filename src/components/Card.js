import React, {Component} from 'react';
class Card extends Component {
    constructor(props) {
        super(props)
        console.log(props.props)
    }
    render() {
        return (
            <li className={ this.props.props.done ? "green" : "red"}>{this.props.props.task}</li>
        )
    }
}
export default Card;