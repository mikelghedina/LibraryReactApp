import React, {Component} from "react";
import FormControl from "react-bootstrap/FormControl";
import {Button} from "react-bootstrap";
import {connect} from "react-redux";
import {addAuthor} from "../../store/actions/authorActions";


class NewAuthor extends Component{


    render() {
        const newAuthor = {
            name: '',
            lastName: ''
        }
        return (
            <tr>
                <td><FormControl type="text" placeholder="Add Name" value={newAuthor.name}
                                 onChange={(event) => ({name: event.target.value})}/></td>
                <td><FormControl type="text" placeholder="Add Last Name" value={newAuthor.lastName}
                                 onChange={(event) => ({lastName: event.target.value})}/></td>
                <td><Button onClick={this.props.addAuthor.bind(this, newAuthor)}>Add Author</Button></td>
            </tr>
        );
    }
}
const mapDispatchToProps=dispatch=>{
    return{
        addAuthor:(author)=>dispatch(addAuthor(author))
    }
}
export default connect(mapDispatchToProps)(NewAuthor)
