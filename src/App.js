import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Panel from './components/Panel';
import {Container, Row, Col} from 'react-bootstrap';
import Navbar from './components/Navbar'
class App extends Component {
  constructor() {
    super()
    this.state = {
      cards: [],
      newOwner: ""
    };
    this.newOwnerInput = (e) => {
      this.setState({newOwner: e.target.value})
    }
    this.makeOwner = () => {
      fetch(`http://localhost:4000/cards/addOwner/${this.state.newOwner}`)
      .then(res => res.json())
      .then(data=>{
        this.makeCardList(data)
      });
    }
    this.makeCardList = (data) => {
      let ph = {};
      let temp = [];
      data.map((element, i) => {
        ph[element.owner] = {
          tasks: []
        };
      });
      data.map((element, i) => {
        ph[element.owner]
          .tasks
          .push({task: element.task, done: element.done, _id: element._id});
      });
      for (const key in ph) {
        temp.push({who: key, cardInfo: ph[key]});
      }
      this.setState({cards: temp});
    }
  };

  componentDidMount() {
    fetch('http://localhost:4000/cards/')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.makeCardList(data)
      });
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
      <Navbar />
        <Row>
          {this.cardColumn()}
        </Row>
      </Container>
    );
  };
};
export default App;