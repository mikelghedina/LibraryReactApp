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

    state={
        id:'',
        username:'',
        password:'',
    }
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
const mapStateToProps=state=>{
    return{
        user:state.user.usersData
    }
}

const mapDispatchToProps=dispatch=>{
    return{
        fetchUsers:()=>dispatch(fetchUsers()),
        deleteUser:(userId)=>dispatch(deleteUser(userId))
    }
}

export default connect (mapStateToProps, mapDispatchToProps)(UserList)


