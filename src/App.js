import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

const url="https://localhost:4000";



class App extends Component {
    state={
        data:[]
    }
    peticionGet=()=>{
        axios.get(url).then(response=>{
            console.log(response.data);
        })
    }
    componentDidMount() {
     // this.peticionGet();
    }

    render() {
        return (
            <div>

            </div>
        );
    }
}

export default App;

