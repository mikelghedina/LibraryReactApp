import React, {Component} from "react";
import FormControl from "react-bootstrap/FormControl";
import {Button} from "react-bootstrap";
import {connect} from "react-redux";
import {addAuthor} from "../../store/actions/authorActions";


class NewAuthor extends Component{

    state={
        name:'',
        lastName:''
    }

    handleOnClickAddAuthor=(newAuthor)=>{
        console.log(this.state)
        this.props.addAuthor(newAuthor)
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
const mapDispatchToProps=dispatch=>{
    return{
        addAuthor:(author)=>dispatch(addAuthor(author))
    }
}
export default connect(null, mapDispatchToProps)(NewAuthor)
