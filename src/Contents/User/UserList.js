import React, {Component} from 'react';
import axios from 'axios';
import Table from "react-bootstrap/Table";
import FormControl from "react-bootstrap/FormControl";
import Form from "react-bootstrap/Form";
import SearchFilter from "../../Components/SearchFilter";

export default class UserList extends Component{

    constructor(props) {
        super(props);
        this.state={
            user:[{
                id:'',

            }]
        }
    }
    componentDidMount() {
        axios
            .get('/users')
            .then(res=>{
                this.setState({user: res.data})
            }).catch(error=> console.log(error))
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
                        <th>Content</th>
                        <th>Author</th>
                    </tr>
                    </thead>
                    <tbody>{this.state.user.map(u=>
                        <tr key={u.id}>
                            <td></td>
                            <td></td>
                        </tr>
                    )}</tbody>
                </Table>
            </div>
        )
    }
}
