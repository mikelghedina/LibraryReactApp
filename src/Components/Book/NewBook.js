import React, {Component} from 'react'
import FormControl from "react-bootstrap/FormControl";
import Form from "react-bootstrap/Form";
import {Button} from "react-bootstrap";
import {addBook} from "../../store/actions/bookActions";
import {connect} from "react-redux";

class NewBook extends Component{

    //We define a state that will store the new book we want to introduce to the database. So It will store just a moment
    //the data we introduce in the input to pass it to our state placed on our store from redux.
    //Also we only define a the author id because this will be the reference we take to assign an author to the new book we will add.
    state={
        id:'',
        title:'',
        isbn:'',
        pages:'',
        author:{
            id:''
        }
    }
    //Handle the click when we click add book and saves the new book to the redux store.
    handleOnClickAddBook=(newBook)=>{
        console.log(this.state)
        this.props.addBook(newBook)
        //After that, the state is refreshed so we can introduce another book if we wish to.
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
                    <Form.Control as="select" custom value={this.state.author.id}
                                  onChange={(event)=>(this.setState({...this.state, author: {id: event.target.value}}))}>
                        {this.props.author.map(a=>
                        <option value={a.id} key={a.id}>{a.name + " " + a.lastName}</option>
                    )}</Form.Control>
                </td>
                <td><Button onClick={this.handleOnClickAddBook.bind(this, this.state)}>Add Book</Button></td>
            </tr>
        )
    }
}

//We use Redux so we pass the data we store on Redux Store to this component via Props. This way
//we can use easily all the data we need.

const mapStateToProps=state=>{
    return{
        author:state.author.authorsData
    }
}
//We use Redux to dispatch all the actions we stored in our store configuration. This way we pass all the actions
//as props to this component and we can use this functions as props.
const mapDispatchToProps=dispatch=>{
    return{
        addBook:(book)=>dispatch(addBook(book))
    }
}
//We use connect from redux to be able to "connect" the state and actions from our store in this component class.
export default connect(mapStateToProps, mapDispatchToProps)(NewBook)
