import React from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table'
import FormControl from "react-bootstrap/FormControl";
import Form from "react-bootstrap/Form";
import SearchFilter from "../../Utils/SearchFilter";
import {Button} from "react-bootstrap";
import NewBook from "./NewBook";
import {connect} from 'react-redux';
import {initBooks} from "../../store/actions/Books";



class BookList extends React.Component{
    constructor(props) {
        super(props);
        this.state= {
            searchTerm:'',
        }
    }

    componentDidMount() {
        this.props.onInitBooks();
    }

    handleDeleteBook =(id)=> {
        axios.delete('/books'+ id)
            .then(res => console.log(res.data)
                /*if(res.data !=null){
                    this.setState({"show":true})
                    setTimeout(()=> this.setState({"show":false}), 3000)
                    //alert("Book deleted successfully")
                    this.setState({
                        book: this.state.book.filter(book=> book.id !== id)
                    });
                }*/
            ).catch(error=> console.log(error))
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
                    <tbody>{this.props.book.map(b=>
                        <tr key={b.id}>
                            <td>{b.title}</td>
                            <td>{b.isbn}</td>
                            <td>{b.pages}</td>
                            {b.author!=null?
                                <td>{b.author.name + " " + b.author.lastName}</td>
                                : <td>""</td>}
                            <td>
                                <Button variant="warning">Details</Button>{' '}
                                <Button variant="danger" onClick={this.handleDeleteBook.bind(this, b.id)}>Delete</Button>
                            </td>
                        </tr>
                    )}</tbody>
                    <tbody>
                        <NewBook/>
                    </tbody>
                </Table>
            </div>
        )
    }
}
const mapStateToProps = state =>{
    return{
        books: state.book
    }
}
const mapDispatchToProps = dispatch =>{
    return{
        onInitBooks: ()=> dispatch(initBooks)
    }
}

export default connect(mapStateToProps, mapDispatchToProps())(BookList)
