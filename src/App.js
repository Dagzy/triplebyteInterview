import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Panel from './components/Panel';
import {Container, Row} from 'react-bootstrap';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
class App extends Component {
  constructor() {
    super()
    this.state = {
      cards : [],
      loggedIn : false
    };

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
    this.getCards = () => {
      fetch('http://localhost:4000/cards/')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.makeCardList(data)
      });
    }
  };

  componentDidMount() {
    let loggedIn = window.localStorage.getItem("authorized");
    if(loggedIn){
      this.setState({
        loggedIn : true
      });
      this.getCards()
      console.log("TING",this.state);
    };
  };
  cardColumn() {
    return this
      .state
      .cards
      .map((element, i) => {
        return <Panel cards={element} key={i}/>
      });
  };
  render() {
    return (
      <Container>
      <Navbar />
      <div style={{display: this.state.loggedIn ? "none" : "initial"}} >
      <Landing getCards={this.getCards} />
      </div>
        <Row>
          {this.cardColumn()}
        </Row>
      </Container>
    );
  };
};
export default App;