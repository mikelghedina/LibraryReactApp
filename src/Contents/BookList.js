import React from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table'
import FormControl from "react-bootstrap/FormControl";
import Form from "react-bootstrap/Form";
import SearchFilter from "../Components/SearchFilter";
import {Button} from "react-bootstrap";

class BookList extends React.Component{
    constructor(props) {
        super(props);
        this.state= {
            book:[{
                id:'',
                title:'',
                pages:'',
                isbn:'',
                author: {
                    id:'',
                    name:'',
                    lastName:''
                }
            }],
            searchTerm:''
        }
    }

    componentDidMount() {
        axios
            .get('http://localhost:8080/api/books')
            .then(res => {
                this.setState({book: res.data});
            }).catch(error=> console.log(error))
    }

    handleDelete = () => {
        const { book } = this.state;
        axios.delete("http://localhost:8080/api/books{id}",{params: {id: book.id}})
            .then(response => {
                console.log(response);
            });
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
                            <th>Title</th>
                            <th>ISBN</th>
                            <th>Pages</th>
                            <th>Author</th>
                        </tr>
                    </thead>
                    <tbody>{this.state.book.map(b=>
                        <tr key={b.id}>
                            <td>{b.title}</td>
                            <td>{b.isbn}</td>
                            <td>{b.pages}</td>
                            <td>{b.author.name+" "+b.author.lastName}</td>
                            <td>
                                <Button variant="warning">Edit</Button>{' '}
                                <Button variant="danger" onClick={this.handleDelete}>Delete</Button>
                            </td>
                        </tr>
                    )}</tbody>
                </Table>
            </div>
        )
    }
}
export default BookList