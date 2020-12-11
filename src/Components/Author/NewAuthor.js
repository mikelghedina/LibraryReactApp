import React, {Component} from "react";
import FormControl from "react-bootstrap/FormControl";
import {Button} from "react-bootstrap";
import {connect} from "react-redux";
import {addAuthor} from "../../store/actions/AuthorActionsTypes/authorActions";


class NewAuthor extends Component{
//We define a state that we will pass as an object to our addAuthor method from the store.
    state={
        name:'',
        lastName:''
    }
//Using a method to handle the addAuthor method when we click the button "Add Author".
    handleOnClickAddAuthor=(newAuthor)=>{
        console.log(this.state)
        this.props.addAuthor(newAuthor)
        //We set the state as empty after the new author being saved to refresh and the input be ready to add more authors.
        this.setState(
            {
                name:'',
                lastName:''
            })
    }

    render() {
        return (
            <tr>
                <td><FormControl type="text" placeholder="Add Name" value={this.state.name}
                                 onChange={(event) => (this.setState({name: event.target.value}))}/></td>
                <td><FormControl type="text" placeholder="Add Last Name" value={this.state.lastName}
                                 onChange={(event) => (this.setState({lastName: event.target.value}))}/></td>
                <td><Button onClick={this.handleOnClickAddAuthor.bind(this, this.state)}>Add Author</Button></td>
            </tr>
        );
    }
}
//We use Redux to dispatch all the actions we stored in our store configuration. This way we pass all the actions
//as props to this component and we can use this functions as props.
const mapDispatchToProps=dispatch=>{
    return{
        addAuthor:(author)=>dispatch(addAuthor(author))
    }
}
//We use connect from redux to be able to "connect" the state and actions from our store in this component class.
export default connect(null, mapDispatchToProps)(NewAuthor)
