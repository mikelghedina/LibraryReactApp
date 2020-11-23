import React, {Component} from 'react';
import axios from 'axios';
import Table from "react-bootstrap/Table";
import FormControl from "react-bootstrap/FormControl";
import Form from "react-bootstrap/Form";
import SearchFilter from "../Components/SearchFilter";
import {Button} from "react-bootstrap";

export default class QuoteList extends Component{

    constructor(props) {
        super(props);
        this.state={
            quote:[{
                id:'',
                content:'',
                author:{
                    id:'',
                    name:'',
                    lastName:''
                }
            }]
        }
    }

    componentDidMount() {
        axios
            .get('http://localhost:8080/api/quotes')
            .then(res=>{
                this.setState({quote: res.data})
            }).catch(error=> console.log(error))
    };

    render() {
        return(
            <div>
                <Form inline>
                    <FormControl id="myInput" type="text" onChange={SearchFilter} placeholder="Search" className="mr-sm-2" />
                </Form>
                <Table striped bordered hover size="sm" id="myTable" >
                    <thead>
                    <tr >
                        <th>Content</th>
                        <th>Author</th>
                    </tr>
                    </thead>
                    <tbody>{this.state.quote.map(q=>
                        <tr key={q.id}>
                            <td>{q.content}</td>
                            <td>{q.author.name+" "+q.author.lastName}</td>
                            <td>
                                <Button variant="warning">Edit</Button>{' '}
                                <Button variant="danger">Delete</Button>
                            </td>
                        </tr>
                    )}</tbody>
                </Table>
            </div>
        )
    }
}