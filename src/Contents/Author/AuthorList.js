import React from 'react';
import axios from 'axios';
import Table from "react-bootstrap/Table";
import FormControl from "react-bootstrap/FormControl";
import Form from "react-bootstrap/Form";
import SearchFilter from "../../Components/SearchFilter";
import {Button} from "react-bootstrap";


class AuthorList extends React.Component{
    constructor(props) {
        super(props);
        this.state= {
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

    handleDelete =(id)=> {
        axios.delete("http://localhost:8080/api/authors"+ id)
            .then(res => {
                if(res.data !=null){
                    this.setState({"show":true})
                    setTimeout(()=> this.setState({"show":false}), 3000)
                    //alert("Book deleted successfully")
                    this.setState({
                        author: this.state.author.filter(book=> book.id !== id)
                    });
                }
            }).catch(error=> console.log(error))
    };

    render() {
        return(
            <div>
                <Form inline>
                    <FormControl type="text" id="myInput" onChange={SearchFilter} placeholder="Search" className="mr-sm-2" />
                </Form>
                <Table striped bordered hover size="sm" id="myTable">
                    <thead>
                    <tr >
                        <th>Name</th>
                        <th>Last Name</th>
                    </tr>
                    </thead>
                    <tbody>{this.state.author.map(a=>
                        <tr key={a.id}>
                            <td>{a.name}</td>
                            <td>{a.lastName}</td>
                            <td>
                                <Button variant="warning">Edit</Button>{' '}
                                <Button variant="danger" onClick={this.handleDelete.bind(this, a.id)}>Delete</Button>
                            </td>
                        </tr>
                    )}</tbody>
                </Table>
            </div>
        )
    }
}
export default AuthorList
