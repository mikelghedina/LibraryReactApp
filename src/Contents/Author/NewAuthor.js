import React, {Component} from "react";
import axios from "axios";
import FormControl from "react-bootstrap/FormControl";
import {Button} from "react-bootstrap";


class NewAuthor extends Component{

    state={
        name:'',
        lastName:'',

    }

    handlePostAuthor =()=>{
        const newAuthor = {
            name: this.state.name,
            lastName: this.state.lastName
        }
        axios.post('/authors', newAuthor)
            .then(res =>console.log(res.data))
            .catch(error=> console.log(error))
    }

    render() {
        return (
            <tr>
                <td><FormControl type="text" placeholder="Add Name" value={this.state.name}
                                 onChange={(event) => this.setState({name: event.target.value})}/></td>
                <td><FormControl type="text" placeholder="Add Last Name" value={this.state.lastName}
                                 onChange={(event) => this.setState({lastName: event.target.value})}/></td>
                <td><Button onClick={this.handlePostAuthor}>Add Author</Button></td>
            </tr>
        );
    }
}

export default NewAuthor
