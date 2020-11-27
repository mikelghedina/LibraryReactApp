import React from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table'
import FormControl from "react-bootstrap/FormControl";
import Form from "react-bootstrap/Form";
import SearchFilter from "../../Components/SearchFilter";
import {Button} from "react-bootstrap";
import AuthorList from "../Author/AuthorList";


class BookList extends React.Component{
    constructor(props) {
        super(props, AuthorList);
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
            searchTerm:'',

            newTitle:'',
            newIsbn:'',
            newPages:'',
            selectedAuthor:[],

        }
    }

    componentDidMount() {
        axios
            .get('http://localhost:8080/api/books')
            .then(res =>res.data)
            .then((data)=> {
                this.setState({book: data})
            }).catch(error=> console.log(error))
    }


    handleDelete =(id)=> {
        axios.delete('http://localhost:8080/api/books'+ id)
            .then(res => {
                if(res.data !=null){
                    this.setState({"show":true})
                    setTimeout(()=> this.setState({"show":false}), 3000)
                    //alert("Book deleted successfully")
                    this.setState({
                        book: this.state.book.filter(book=> book.id !== id)
                    });
                }
            }).catch(error=> console.log(error))
    };

    handlePost =()=>{
        const newBook = {
            title: this.state.newTitle,
            isbn: this.state.newIsbn,
            pages: this.state.newPages
        }
        axios.post('http://localhost:8080/api/books', newBook)
            .then(res =>console.log(res.data))
            .catch(error=> console.log(error))
    }
    handleEdit =()=>{

    }

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
                            {b.author!=null?
                                <td>{b.author.name + " " + b.author.lastName}</td>
                                : <td>""</td>}
                            <td>
                                <Button variant="warning">Edit</Button>{' '}
                                <Button variant="danger" onClick={this.handleDelete.bind(this, b.id)}>Delete</Button>
                            </td>
                        </tr>
                    )}</tbody>
                    <tbody>
                        <tr key={this.state.book.id}>
                            <td><FormControl type="text" placeholder="Add title" value={this.state.newTitle}
                                             onChange={(event) => this.setState({newTitle: event.target.value})}/></td>
                            <td><FormControl type="text" placeholder="Add ISBN" value={this.state.newIsbn}
                                             onChange={(event) => this.setState({newIsbn: event.target.value})}/></td>
                            <td><FormControl type="Integer" placeholder="Add Pages" value={this.state.newPages}
                                             onChange={(event) => this.setState({newPages: event.target.value})}/></td>
                            <td><Form>
                                <Form.Control as="select" custom >
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                </Form.Control>
                            </Form></td>
                        </tr>
                    </tbody>
                </Table>
                <Button onClick={this.handlePost}>Add Book</Button>
            </div>
        )
    }
}
export default BookList
