import React, {Component} from 'react'
import axios from "axios";
import FormControl from "react-bootstrap/FormControl";
import Form from "react-bootstrap/Form";
import {Button} from "react-bootstrap";

class NewQuote extends Component{
    state={
        content:''
    }

    handlePostQuote =()=>{
        const newQuote = {
            content: this.state.content
        }
        axios.post('/quotes', newQuote)
            .then(res =>console.log(res.data))
            .catch(error=> console.log(error))
    }

    render() {
        return(
            <tr>
                <td><FormControl type="text" placeholder="Add title" value={this.state.content}
                                 onChange={(event) => this.setState({content: event.target.value})}/></td>
                <td><Form>
                    <Form.Control as="select" custom >
                        <option>1</option>
                    </Form.Control>
                </Form></td>
                <td><Button onClick={this.handlePostQuote}>Add Quote</Button></td>
            </tr>
        )
    }
}
export default NewQuote
