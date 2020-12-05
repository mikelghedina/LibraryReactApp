import React, {Component} from 'react'
import FormControl from "react-bootstrap/FormControl";
import Form from "react-bootstrap/Form";
import {Button} from "react-bootstrap";
import {addBook} from "../../store/actions/bookActions";
import {connect} from "react-redux";

class NewBook extends Component{

    render() {
        const newBook={
            title:'',
            isbn:'',
            pages:'',
            author:[]
        }
        return(
            <tr>
                <td><FormControl type="text" placeholder="Add title" value={newBook.title}
                                 onChange={(event) => ({title: event.target.value})}/></td>
                <td><FormControl type="text" placeholder="Add ISBN" value={newBook.isbn}
                                 onChange={(event) => ({isbn: event.target.value})}/></td>
                <td><FormControl type="Integer" placeholder="Add Pages" value={newBook.pages}
                                 onChange={(event) => ({pages: event.target.value})}/></td>
                <td><Form>
                    <Form.Control as="select" custom>{this.props.author.map(a=>
                        <option>{a.name + " " + a.lastName}</option>
                    )}</Form.Control>
                </Form></td>
                <td><Button onClick={this.props.addBook.bind(this, newBook)}>Add Book</Button></td>
            </tr>
        )
    }
}
const mapStateToProps=state=>{
    return{
        author:state.author.authorsData
    }
}
const mapDispatchToProps=dispatch=>{
    return{
        addBook:(book)=>dispatch(addBook(book))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewBook)
