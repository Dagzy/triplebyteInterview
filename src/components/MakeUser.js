import React, {Component} from 'react';
import {Row, Col} from 'react-bootstrap';

class MakeUser extends Component{
    constructor(){
        super();
        this.state = {}
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
                    message: "Enter A Username"
                })
            }else if(state.newUserPassword !== state.confirmNewUserPassword){
                this.setState({
                    message: "Password And Confirm Password Must Match"
                })
            }
        }
    }
    render(){
        return(
            <div>   
                <form>
                    <p>{this.state.message}</p>
                    <label htmlFor="newUserName">Username:</label>
                    <input id="newUserName" type="text"/>
                    <label htmlFor="newUserPassword">Password:</label>
                    <input id="newUserPassword" type="password"/>
                    <label htmlFor="confirmNewUserPassword"> Confirm Password:</label>
                    <input id="confirmNewUserPassword" type="password"/>
                    
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
export default MakeUser;