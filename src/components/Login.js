import React, {Component} from 'react';
import {Button} from 'react-bootstrap';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            message:{
                text:"",
                color:""
            }
        };
        this.login = () => {
            fetch(`http://localhost:4000/users/login/${this.state.username}/${this.state.password}`).then(res => res.json()).then(data =>{
                this.setState({
                    message:data.message
                })
                if(data.authorized){
                    window.localStorage.setItem("authorized", true)
                    this.props.getCards()
                }
                console.log(data)
            })
        }
        this.onChange = (e) => {
            this.setState({
                [e.target.id]:e.target.value
            })
        }
    };
compareTriplets(a, b) {
    let bob = 0;
    let mary = 0;
    for (let i = 0; i < a.length; i++) {
        if(a[i]>b[i]){
            bob++
        }else if(b[i]>a[i]){
            mary++
        }
    }
    return bob>mary?bob:mary

    }
    findSum = (arr)=>{
        let num = 0;
        for (let i = 0; i < arr.length; i++) {
            num += arr[i]
        }
        return num
    }
    render() {
        return (
            <div>
                <p style={{backgroundColor:this.state.message.color}}>{this.state.message.text}</p>
                <label htmlFor="loginUsername">Username:</label>
                <input onChange={this.onChange} type="text" name="loginUsername" id="username"/>
                <label htmlFor="loginPassword">Password:</label>
                <input onChange={this.onChange} type="password" name="loginPassword" id="password"/>
                <Button onClick={this.login}>Log in!</Button>
            </div>
        )
    }
};
export default Login;