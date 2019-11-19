import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Panel from './components/Panel';
import {Container, Row} from 'react-bootstrap';
class App extends Component {
  constructor() {
    super()
    this.state = {
      cards: [
        {
          who: "Maggie",
          tasks: [
            {
              done: false,
              task: "Dishes"
            }, {
              done: false,
              task: "Get Milk"
            },{
              done: false,
              task: "Find Waldo"
            }
          ]
        }, {
          who: "Thomas",
          tasks: [
            {
              done: false,
              task: "Get Eggs"
            }
          ]
        }, {
          who: "Quincy",
          tasks: [
            {
              done: false,
              task: "Drop Off Donations"
            }
          ]
        }, {
          who: "Heather",
          tasks: [
            {
              done: false,
              task: "Make Smoothies"
            }
          ]
        }
      ]
    };
  };
  cardColumn() {
    return this
      .state
      .cards
      .map((element, i) => {
        return <Panel cards={element} key={i}/>
      });
  }
  render() {
    return (
      <Container>
        <Row>
          {this.cardColumn()}
        </Row>
      </Container>
    );
  };
};
export default App;