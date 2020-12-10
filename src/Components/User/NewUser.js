import React, {Component} from "react";
import FormControl from "react-bootstrap/FormControl";
import {Button} from "react-bootstrap";
import {addUser} from "../../store/actions/userActions";
import {connect} from "react-redux";

class NewUser extends Component{

    //
    state={
        id:'',
        username:'',
        password:''
    }

    handleOnClickAddUser=(newUser)=>{
        console.log(this.state)
        this.props.addUser(newUser)
        this.setState(
            {
                username:'',
                password:''
            })
    }


    render() {

        return(
            <tr>
                <td><FormControl type="text" placeholder="Add Username" value={this.state.username}
                                 onChange={(event) => this.setState({username: event.target.value})}/></td>

                <td><FormControl type="text" placeholder="Add Username" value={this.state.password}
                                 onChange={(event) => this.setState({password: event.target.value})}/></td>

                <td><Button onClick={this.handleOnClickAddUser.bind(this, this.state)}>Add Quote</Button></td>
            </tr>
        )
    }
}
//We use Redux to dispatch all the actions we stored in our store configuration. This way we pass all the actions
//as props to this component and we can use this functions as props.
const mapDispatchToProps=dispatch=>{
    return{
        addUser:(user)=>dispatch(addUser(user))
    }
}
export default connect(null, mapDispatchToProps)(NewUser)
