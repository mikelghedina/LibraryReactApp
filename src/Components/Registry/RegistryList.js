import React, {Component} from "react";
import SearchFilter from "../../Utils/SearchFilter";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Table from "react-bootstrap/Table";
import {fetchRegistries} from "../../store/actions/registryActions";
import {connect} from "react-redux";


class RegistryList extends Component{


    componentDidMount() {
        this.props.fetchRegistry();
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
                        <th>User</th>
                        <th>Book</th>
                        <th>Date</th>
                    </tr>
                    </thead>
                    <tbody>{this.props.registry.map(r=>
                        <tr key={r.id}>
                            <td>{r.user.username}</td>
                            <td>{r.book[0].title}</td>
                            <td>{r.date}</td>
                        </tr>
                    )}</tbody>
                </Table>
            </div>
        )
    }
}
const mapStateToProps=state=>{
    return{
        registry:state.registry.registriesData
    }
}
const mapDispatchToProps=dispatch=>{
    return{
        fetchRegistry:()=>dispatch(fetchRegistries())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(RegistryList)
