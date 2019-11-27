import React, {Component} from 'react';
import {Button} from 'react-bootstrap';
// this.makeOwner = () => {
//     fetch(`http://localhost:4000/cards/addOwner/${this.state.newOwner}`)
//     .then(res => res.json())
//     .then(data=>{
//       this.makeCardList(data)
//     });
//   }
class RegisterUser extends Component{
    constructor(){
        super();
        this.state = {message:{}}
        this.onChange = (e) => {
            this.setState({
                [e.target.id] : e.target.value
            });
        }
        this.onSubmit = (e) => {
            e.preventDefault();
            const state = this.state;
            if(!state.newUserName){
                this.setState({
                    message: {
                        text:"Enter A Username",
                        color:"blue"
                    }
                })
            }else if(state.newUserPassword !== state.confirmNewUserPassword){
                this.setState({
                    message: "Password And Confirm Password Must Match"
                })
            }else{
                fetch(`http://localhost:4000/users/register/${state.newUserName}/${state.newUserPassword}`).then(res => res.json()).then(data => {
                    console.log(data)
                    this.setState({
                        message:data
                    })
                })
            }
        }
    }
    render(){
        return(
            <div>   
                <form onSubmit={this.onSubmit}>
                    <p style={{backgroundColor:this.state.message.color}}>{this.state.message.text}</p>
                    <label htmlFor="newUserName">Username:</label>
                    <input onChange={this.onChange} id="newUserName" type="text"/>
                    <label htmlFor="newUserPassword">Password:</label>
                    <input onChange={this.onChange} id="newUserPassword" type="password"/>
                    <label htmlFor="confirmNewUserPassword"> Confirm Password:</label>
                    <input onChange={this.onChange} id="confirmNewUserPassword" type="password"/>
                    <Button type="submit">Add Owner!</Button>
                </form>
            {/*    <Row>
                <Col xs={2}>
                  Add User:
                </Col>
                <Col xs={2}>
                  <input onChange={this.newOwnerInput} type="text"/>
                </Col>
                <Col xs={2}>
                  <input onClick={this.makeOwner} type="submit"/>
                </Col>
              </Row>
            */}
            </div>
        )
    }
}
export default RegisterUser;