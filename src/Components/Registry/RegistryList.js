import React, {Component} from "react";
import SearchFilter from "../../Utils/SearchFilter";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Table from "react-bootstrap/Table";


export default class RegistryList extends Component{


    componentDidMount() {

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
