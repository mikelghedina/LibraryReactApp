import React from 'react';
import axios from 'axios';
import Table from "react-bootstrap/Table";
import FormControl from "react-bootstrap/FormControl";
import Form from "react-bootstrap/Form";



class AuthorList extends React.Component{
    constructor(props) {
        super(props);
        this.state= {
            columns : [
                { field: 'id', headerName: 'ID', width: 70 },
                { field: 'name', headerName: 'Name', width: 130 },
                { field: 'lastName', headerName: 'Last Name', width: 130 }],


            author:[{
                id:'',
                name:'',
                lastName:'',
            }]
        }
    }

    componentDidMount() {
        axios
            .get('http://localhost:8080/api/authors')
            .then(res => {
                console.log(res);
                this.setState({author: res.data});
            }).catch(error=> console.log(error))
    }
    render() {
        return(
            <div>
                <Form inline>
                    <FormControl type="text" id="myInput" placeholder="Search" className="mr-sm-2" />
                </Form>
                <Table striped bordered hover size="sm" id="myTable">
                    <thead>
                    <tr >
                        <th>Name</th>
                        <th>Last Name</th>
                    </tr>
                    </thead>
                    <tbody> {this.state.author.map(a=>
                        <tr key={a.id}>
                            <td>{a.name}</td>
                            <td>{a.lastName}</td>
                        </tr>
                    )}
                    </tbody>
                </Table>
            </div>
        )
    }
}
export default AuthorList