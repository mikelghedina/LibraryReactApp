import React, {Component} from "react";
import axios from 'axios';
import SearchFilter from "../../Components/SearchFilter";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Table from "react-bootstrap/Table";


export default class RegistryList extends Component{

    constructor(props) {
        super(props);
        this.state={
            registry:[{
                id:''
            }]
        }
    }

    componentDidMount() {
        axios
            .get('/registries')
            .then(res => {
                this.setState({registry: res.data})
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
                    <tbody>
                        <tr>
                            <td>asdas</td>
                            <td>asdas</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        )
    }
}
