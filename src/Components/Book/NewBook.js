import React, {Component} from 'react'
import FormControl from "react-bootstrap/FormControl";
import Form from "react-bootstrap/Form";
import {Button} from "react-bootstrap";
import {addBook} from "../../store/actions/bookActions";
import {connect} from "react-redux";

class NewBook extends Component{

    state={
        id:'',
        title:'',
        isbn:'',
        pages:''
        //author:[]
    }

    handleOnClickAddBook=event=>{
        event.preventDefault();
        console.log(this.state)
        this.props.addBook.bind(this, this.state);
        this.setState(
            {
                title: '',
                isbn: '',
                pages: '',
            })
    }
    render() {
        return(
            <tr>
                <td><FormControl type="text" placeholder="Add title" value={this.state.title}
                                 onChange={(event) => (this.setState({title: event.target.value}))}/></td>
                <td><FormControl type="text" placeholder="Add ISBN" value={this.state.isbn}
                                 onChange={(event) => (this.setState({isbn: event.target.value}))}/></td>
                <td><FormControl type="Integer" placeholder="Add Pages" value={this.state.pages}
                                 onChange={(event) => (this.setState({pages: event.target.value}))}/></td>
                <td>
                    <Form.Control as="select" custom>{this.props.author.map(a=>
                        <option>{a.name + " " + a.lastName}</option>
                    )}</Form.Control>
                </td>
                <td><Button onClick={this.props.addBook.bind(this, this.state)}>Add Book</Button></td>
            </tr>
        )
    }
}
const mapStateToProps=state=>{
    return{
        book:state.book.booksData,
        author:state.author.authorsData
    }
}
const mapDispatchToProps=dispatch=>{
    return{
        addBook:(book)=>dispatch(addBook(book))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewBook)
