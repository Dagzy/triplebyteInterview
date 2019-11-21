import React, {Component} from 'react';
import {Row, Col, Navbar} from 'react-bootstrap';
import MakeUser from './MakeUser';
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

                <MakeUser />
            </Navbar>
        )
    }
}
export default KanbanNav