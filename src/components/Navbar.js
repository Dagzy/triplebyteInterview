import React, {Component} from 'react';
import {Navbar} from 'react-bootstrap';
class KanbanNav extends Component {
    constructor(){
        super()
        this.state = {}
    }
    componentDidMount(){
        console.log("Navbar Mounted");
    }
    render(){
        return(
            <Navbar>
            <h1>Triplebyte Kanban</h1>
            </Navbar>
        )
    }
}
export default KanbanNav