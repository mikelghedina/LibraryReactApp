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
            .then(res =>res.data)
            .then((data)=> {
                this.setState({book: data})
            }).catch(error=> console.log(error))
    }

    handleDelete =(id)=> {
        axios.delete("http://localhost:8080/api/books"+ id)
            .then(res => {
                if(res.data !=null){
                    this.setState({"show":true})
                    setTimeout(()=> this.setState({"show":false}), 3000)
                    //alert("Book deleted successfully")
                    this.setState({
                        books: this.state.books.filter(book=> book.id !== id)
                    });
                }
            }).catch(error=> console.log(error))
    };

    handlePost (){

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
                            {b.author.name!==null||b.author.lastName!==null ?
                                <td>{b.author.name + " " + b.author.lastName}</td>
                                : this.setState({book:[{author:null}]})}
                            <td>
                                <Button variant="warning">Edit</Button>{' '}
                                <Button variant="danger" onClick={this.handleDelete.bind(this, b.id)}>Delete</Button>
                            </td>
                        </tr>
                    )}</tbody>
                </Table>
            </div>
        )
    }
}
export default BookList