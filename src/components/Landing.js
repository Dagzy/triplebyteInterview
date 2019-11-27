import React, {Component} from 'react';
import {Button} from 'react-bootstrap';
import RegisterUser from './MakeUser';
import Login from './Login';
class LandingPage extends Component {
    constructor() {
        super()
        this.state = {
            toggle: false
        }
        this.toggle = () => {
            this.setState({
                toggle: !this.state.toggle
            });
        };
    };
    render() {
        return (
            <div>
                <div style = {{ display : this.state.toggle ? "none" : "initial" }}>
                    <p>Register Below:</p>
                    <RegisterUser />
                    <p>Already have an account?
                        <Button onClick = { this.toggle }>
                            Click To Login!
                        </Button>
                    </p>
                </div>
                <div style = {{ display : this.state.toggle ? "initial" : "none" }}>
                    Log In Below:
                    <Login getCards = { this.props.getCards } />
                    Need to make an account?
                    <Button onClick = { this.toggle }>
                        Click To Register!
                    </Button>
                </div>
            </div>
        )
    }
}
export default LandingPage;