import React, {Component} from 'react'
import axios from 'axios'
import FormControl from "react-bootstrap/FormControl";
import Form from "react-bootstrap/Form";
import {Button} from "react-bootstrap";

class NewBook extends Component{
    constructor(props) {
        super(props);
        this.state={
            title:'',
            isbn:'',
            pages:''
        }
    }

    postNewBookHandler=()=>{
        const data={
            title: this.state.title,
            isbn: this.state.isbn,
            pages: this.state.pages
        }
        axios.post('/books', data)
            .then(res => {
                console.log(res.data)
                this.props.updateState()})
            .catch(error=> console.log(error));
    }

    render() {
        return(
            <tr>
                <td><FormControl type="text" placeholder="Add title" value={this.state.title}
                                 onChange={(event) => this.setState({title: event.target.value})}/></td>
                <td><FormControl type="text" placeholder="Add ISBN" value={this.state.isbn}
                                 onChange={(event) => this.setState({isbn: event.target.value})}/></td>
                <td><FormControl type="Integer" placeholder="Add Pages" value={this.state.pages}
                                 onChange={(event) => this.setState({pages: event.target.value})}/></td>
                <td><Form>
                    <Form.Control as="select" custom >
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                    </Form.Control>
                </Form></td>
                <td><Button onClick={this.postNewBookHandler}>Add Book</Button></td>
            </tr>
        )
    }
}

export default NewBook
