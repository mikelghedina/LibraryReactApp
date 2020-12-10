import React, {Component} from 'react';
import Table from "react-bootstrap/Table";
import FormControl from "react-bootstrap/FormControl";
import Form from "react-bootstrap/Form";
import SearchFilter from "../../Utils/SearchFilter";
import {deleteUser, fetchUsers} from "../../store/actions/userActions";
import {connect} from "react-redux";
import {Button} from "react-bootstrap";
import NewUser from "./NewUser";

class UserList extends Component{

    //This way we tell React to fetch all the data we need and build it in render the moment we render the app.
    componentDidMount() {
        this.props.fetchUsers();
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
                        <th>Username</th>
                        <th>Password</th>
                    </tr>
                    </thead>
                    <tbody>{this.props.user.map(u=>
                        <tr key={u.id}>
                            <td>{u.username}</td>
                            <td>{u.password}</td>
                            <td><Button variant="danger" onClick={this.props.deleteUser.bind(this, u.id)}>Delete</Button></td>
                        </tr>
                    )}</tbody>
                    <tbody>
                        <NewUser/>
                    </tbody>
                </Table>
            </div>
        )
    }
}
//We use Redux so we pass the data we store on Redux Store to this component via Props. This way
//we can use easily all the data we need.
const mapStateToProps=state=>{
    return{
        user:state.user.usersData
    }
}
//We use Redux to dispatch all the actions we stored in our store configuration. This way we pass all the actions
//as props to this component and we can use this functions as props.
const mapDispatchToProps=dispatch=>{
    return{
        fetchUsers:()=>dispatch(fetchUsers()),
        deleteUser:(userId)=>dispatch(deleteUser(userId))
    }
}
//We use connect from redux to be able to "connect" the state and actions from our store in this component class.
export default connect (mapStateToProps, mapDispatchToProps)(UserList)


