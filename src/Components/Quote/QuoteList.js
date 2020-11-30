import React, {Component} from 'react';
import axios from 'axios';
import Table from "react-bootstrap/Table";
import FormControl from "react-bootstrap/FormControl";
import Form from "react-bootstrap/Form";
import SearchFilter from "../../Utils/SearchFilter";
import {Button} from "react-bootstrap";
import NewQuote from "./NewQuote";

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
            .get('/quotes')
            .then(res=>{
                this.setState({quote: res.data})
            }).catch(error=> console.log(error))
    };

    handleDeleteQuote =(id)=> {
        axios.delete('/quotes'+ id)
            .then(res => {
                if(res.data !=null){
                    this.setState({"show":true})
                    setTimeout(()=> this.setState({"show":false}), 3000)
                    //alert("Book deleted successfully")
                    this.setState({
                        quote: this.state.quote.filter(quote=> quote.id !== id)
                    });
                }
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
                            {q.author!=null?
                                <td>{q.author.name + " " + q.author.lastName}</td>
                                : <td>""</td>}
                            <td>
                                <Button variant="warning">Edit</Button>{' '}
                                <Button variant="danger" onClick={this.handleDeleteQuote.bind(this, q.id)}>Delete</Button>
                            </td>
                        </tr>
                    )}</tbody>
                    <tbody>
                        <NewQuote/>
                    </tbody>
                </Table>
            </div>
        )
    }
}
