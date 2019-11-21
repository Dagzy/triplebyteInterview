import React, {Component} from 'react';
import Card from './Card';
import {Col} from 'react-bootstrap';
class Panel extends Component{
    constructor(props){
        super(props)
        this.state = {
            left: false,
            right: false,
            newCard:""
        };
        this.onChange = (e) => {
            this.setState({
                newCard:e.target.value
            });
        }
        this.cardColumn = () => {
            return this.props.cards.cardInfo.tasks.map((element, i)=>{
                return element.task ? <Card style={{backgroundColor:"blue"}} cardProps={element} key={i}/> : null
            });
        };
        this.submit = (e) => {
            e.preventDefault();
            fetch('http://localhost:4000/cards/add', {
                method : "post",
                mode : "cors",
                headers : {
                    "content-type":"application/json"
                },
                body: JSON.stringify({
                        owner : this.props.cards.who,
                        task : this.state.newCard
                })
            })
            .then(res => res.json())
            .then(data=>{
                console.log(data);
            });
        }
    };
    render(){
        return(
            <Col xs={3}>
                <h3>{this.props.cards.who}</h3>
                <ul>
                {this.cardColumn()}
                </ul>
                <div>
                <input onChange={this.onChange} type="text"/>
                <button onClick={this.submit}>Add Card</button>
                </div>
            </Col>
        )
    }
}
export default Panel;