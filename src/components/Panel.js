import React, {Component} from 'react';
import Card from './Card';
import {Col} from 'react-bootstrap';
class Panel extends Component{
    constructor(props){
        super(props)
        console.log(this.props);
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
            return this.props.cards.tasks.map((element, i)=>{
                return <Card props={element} key={i} />
            });
        };
        this.submit = (e) => {
            e.preventDefault();
            fetch('http://localhost:4000/cards/add', {
                method:"post",
                mode:"cors",
                headers:{
                    "content-type":"application/json"
                },
                body: JSON.stringify({
                        who:this.props.cards.who,
                        newCard:this.state.newCard
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
                <p>Hello</p>
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